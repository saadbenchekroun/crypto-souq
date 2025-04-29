"use client"

import { useState } from "react"
import { Filter, MoreHorizontal, Search, Share2, Trash2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const nfts = [
  {
    id: "1",
    name: "Moroccan Heritage #001",
    image: "/placeholder.svg?height=400&width=400",
    description: "Digital representation of traditional Moroccan art",
    collection: "Moroccan Heritage",
    blockchain: "Ethereum",
    contractAddress: "0x1234...5678",
    metadata: "ipfs://QmX...",
    attributes: ["Art", "Culture", "Traditional"],
  },
  {
    id: "2",
    name: "Modern Casablanca #023",
    image: "/placeholder.svg?height=400&width=400",
    description: "Contemporary urban landscape of Casablanca",
    collection: "City Views",
    blockchain: "Polygon",
    contractAddress: "0x8765...4321",
    metadata: "ipfs://QmY...",
    attributes: ["City", "Modern", "Architecture"],
  },
  // Add more NFTs as needed
]

export default function NFTsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [collection, setCollection] = useState("all")
  const [blockchain, setBlockchain] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Created NFTs</h2>
        <Link href="/dashboard/create/nfts/new">
          <Button>Create New NFT</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>NFT Collection</CardTitle>
          <CardDescription>Browse and manage your created NFTs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search NFTs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <Select value={collection} onValueChange={setCollection}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Collection" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Collections</SelectItem>
                  <SelectItem value="moroccan-heritage">Moroccan Heritage</SelectItem>
                  <SelectItem value="city-views">City Views</SelectItem>
                </SelectContent>
              </Select>
              <Select value={blockchain} onValueChange={setBlockchain}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Blockchain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Chains</SelectItem>
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {nfts.map((nft) => (
                <Card key={nft.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="object-cover w-full h-full" />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{nft.name}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Share2 className="mr-2 h-4 w-4" />
                            Transfer NFT
                          </DropdownMenuItem>
                          <DropdownMenuItem>List on Marketplace</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Burn NFT
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="line-clamp-2 mt-2">{nft.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-1">
                      {nft.attributes.map((attr) => (
                        <span
                          key={attr}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {attr}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground font-mono">{nft.contractAddress}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
