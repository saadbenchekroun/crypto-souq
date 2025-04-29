import { create } from "ipfs-http-client"

const projectId = process.env.IPFS_PROJECT_ID
const projectSecret = process.env.IPFS_PROJECT_SECRET
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString("base64")}`

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
})

export async function uploadToIPFS(file: Buffer) {
  try {
    const added = await client.add(file)
    return `ipfs://${added.path}`
  } catch (error) {
    console.error("Error uploading to IPFS:", error)
    throw error
  }
}

export async function uploadJSONToIPFS(json: object) {
  try {
    const data = JSON.stringify(json)
    const added = await client.add(data)
    return `ipfs://${added.path}`
  } catch (error) {
    console.error("Error uploading JSON to IPFS:", error)
    throw error
  }
}
