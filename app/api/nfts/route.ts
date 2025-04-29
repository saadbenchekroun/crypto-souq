import { NextResponse } from "next/server"
import { ethers } from "ethers"

import { verifyAuth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { uploadToIPFS, uploadJSONToIPFS } from "@/lib/ipfs"
import { wallet, ERC721_ABI } from "@/lib/web3"

export async function GET(req: Request) {
  try {
    const user = await verifyAuth(req as any)

    const nfts = await prisma.nft.findMany({
      where: {
        ownerId: user.id,
      },
    })

    return NextResponse.json({ nfts })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await verifyAuth(req as any)
    const formData = await req.formData()

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const file = formData.get("file") as File
    const attributes = JSON.parse(formData.get("attributes") as string)
    const network = formData.get("network") as string

    // Upload image to IPFS
    const buffer = Buffer.from(await file.arrayBuffer())
    const imageUrl = await uploadToIPFS(buffer)

    // Create and upload metadata
    const metadata = {
      name,
      description,
      image: imageUrl,
      attributes,
    }
    const metadataUrl = await uploadJSONToIPFS(metadata)

    // Deploy NFT contract
    const factory = new ethers.ContractFactory(
      ERC721_ABI,
      "0x...", // Contract bytecode
      wallet,
    )

    const contract = await factory.deploy(name, "NFT")
    await contract.waitForDeployment()

    // Mint NFT
    const tx = await contract.mint(user.walletAddress, 1) // tokenId 1
    await tx.wait()

    // Save NFT to database
    const nft = await prisma.nft.create({
      data: {
        name,
        description,
        image: imageUrl,
        metadata: metadataUrl,
        contractAddress: await contract.getAddress(),
        tokenId: "1",
        network,
        attributes,
        ownerId: user.id,
      },
    })

    return NextResponse.json({ nft })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
