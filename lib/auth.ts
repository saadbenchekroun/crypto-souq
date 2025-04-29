import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function getJwtSecretKey() {
  return new TextEncoder().encode(JWT_SECRET)
}

export async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    throw new Error("Missing token")
  }

  try {
    const verified = await jwtVerify(token, await getJwtSecretKey())
    return verified.payload
  } catch (err) {
    throw new Error("Invalid token")
  }
}

export async function signToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(await getJwtSecretKey())

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400, // 24 hours
  })

  return token
}
