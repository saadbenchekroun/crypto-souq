"use client"

import { useState } from "react"
import { BarChart2, Code2, ExternalLink, MoreHorizontal, Search } from "lucide-react"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const dapps = [
  {
    id: "1",
    name: "MAD Stablecoin Exchange",
    type: "DeFi",
    network: "Ethereum",
    contractAddress: "0x1234...5678",
    url: "https://mad-exchange.com",
    activeUsers: 1234,
    tvl: "$5.6M",
  },
  {
    id: "2",
    name: "Moroccan Art Marketplace",
    type: "NFT Marketplace",
    network: "Polygon",
    contractAddress: "0x8765...4321",
    url: "https://morocco-nft.com",
    activeUsers: 567,
    tvl: "$890K",
  },
]

export default function DAppsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Created dApps</h2>
        <Link href="/dashboard/create/dapps/new">
          <Button>Create New dApp</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>dApp List</CardTitle>
          <CardDescription>Manage your decentralized applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search dApps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="defi">DeFi</SelectItem>
                <SelectItem value="nft">NFT Marketplace</SelectItem>
                <SelectItem value="dao">DAO</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Network</TableHead>
                  <TableHead>Contract Address</TableHead>
                  <TableHead>Active Users</TableHead>
                  <TableHead>TVL</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dapps.map((dapp) => (
                  <TableRow key={dapp.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {dapp.name}
                        <a
                          href={dapp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </TableCell>
                    <TableCell>{dapp.type}</TableCell>
                    <TableCell>{dapp.network}</TableCell>
                    <TableCell className="font-mono">{dapp.contractAddress}</TableCell>
                    <TableCell>{dapp.activeUsers}</TableCell>
                    <TableCell>{dapp.tvl}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <BarChart2 className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Code2 className="mr-2 h-4 w-4" />
                            Export ABI
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
