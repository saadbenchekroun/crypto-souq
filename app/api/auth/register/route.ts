import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (exists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        name,
      },
    })

    // Create JWT token
    await signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    })

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
