import { NextResponse } from "next/server"

import { verifyAuth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await verifyAuth(req as any)

    const dapp = await prisma.dapp.findUnique({
      where: {
        id: params.id,
      },
      select: {
        analytics: true,
      },
    })

    if (!dapp) {
      return NextResponse.json({ error: "DApp not found" }, { status: 404 })
    }

    return NextResponse.json({ analytics: dapp.analytics })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await verifyAuth(req as any)
    const { analytics } = await req.json()

    const dapp = await prisma.dapp.update({
      where: {
        id: params.id,
      },
      data: {
        analytics,
      },
    })

    return NextResponse.json({ dapp })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
