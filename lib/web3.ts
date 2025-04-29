import { ethers } from "ethers"

// Initialize provider
export const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

// Initialize wallet
export const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "", provider)

// Token ABI
export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
]

// NFT ABI
export const ERC721_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function mint(address to, uint256 tokenId) external",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
]

// Contract factories
export const getTokenContract = (address: string) => {
  return new ethers.Contract(address, ERC20_ABI, wallet)
}

export const getNFTContract = (address: string) => {
  return new ethers.Contract(address, ERC721_ABI, wallet)
}
