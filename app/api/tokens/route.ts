import { NextResponse } from "next/server"
import { ethers } from "ethers"

import { verifyAuth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { wallet, ERC20_ABI } from "@/lib/web3"

export async function GET(req: Request) {
  try {
    const user = await verifyAuth(req as any)

    const tokens = await prisma.token.findMany({
      where: {
        ownerId: user.id,
      },
    })

    return NextResponse.json({ tokens })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await verifyAuth(req as any)
    const { name, symbol, totalSupply, network } = await req.json()

    // Deploy token contract
    const factory = new ethers.ContractFactory(
      ERC20_ABI,
      "0x...", // Contract bytecode
      wallet,
    )

    const contract = await factory.deploy(name, symbol, ethers.parseUnits(totalSupply.toString(), 18))

    await contract.waitForDeployment()

    // Save token to database
    const token = await prisma.token.create({
      data: {
        name,
        symbol,
        totalSupply,
        contractAddress: await contract.getAddress(),
        network,
        type: "ERC20",
        ownerId: user.id,
      },
    })

    return NextResponse.json({ token })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
