import { NextResponse } from "next/server"
import { ethers } from "ethers"

import { verifyAuth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { wallet } from "@/lib/web3"

export async function GET(req: Request) {
  try {
    const user = await verifyAuth(req as any)

    const dapps = await prisma.dapp.findMany({
      where: {
        ownerId: user.id,
      },
    })

    return NextResponse.json({ dapps })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await verifyAuth(req as any)
    const { name, description, type, network, contractSource } = await req.json()

    // Deploy smart contract
    const factory = new ethers.ContractFactory(
      JSON.parse(contractSource).abi,
      JSON.parse(contractSource).bytecode,
      wallet,
    )

    const contract = await factory.deploy()
    await contract.waitForDeployment()

    // Save dApp to database
    const dapp = await prisma.dapp.create({
      data: {
        name,
        description,
        type,
        contractAddress: await contract.getAddress(),
        network,
        ownerId: user.id,
        analytics: {
          activeUsers: 0,
          transactions: 0,
          tvl: "0",
        },
      },
    })

    return NextResponse.json({ dapp })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
