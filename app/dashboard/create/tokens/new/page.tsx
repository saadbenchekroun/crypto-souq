"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewTokenPage() {
  const [isDeploying, setIsDeploying] = useState(false)
  const [estimatedGas, setEstimatedGas] = useState("0.05 ETH")

  const handleDeploy = () => {
    setIsDeploying(true)
    // Simulate deployment
    setTimeout(() => {
      setIsDeploying(false)
    }, 2000)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Create New Token</h2>
        <Link href="/dashboard/create/tokens">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Token Configuration</CardTitle>
            <CardDescription>Configure your token parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Token Name</Label>
                <Input id="name" placeholder="e.g., Morocco Digital Dirham" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="symbol">Token Symbol</Label>
                <Input id="symbol" placeholder="e.g., MADD" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="decimals">Decimal Precision</Label>
                <Input id="decimals" type="number" placeholder="18" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supply">Initial Supply</Label>
                <Input id="supply" type="number" placeholder="1000000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Blockchain Network</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select network" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="bsc">BNB Chain</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="avalanche">Avalanche</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Token Standard</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select standard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="erc20">ERC-20</SelectItem>
                  <SelectItem value="bep20">BEP-20</SelectItem>
                  <SelectItem value="polygon">Polygon Token</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Additional Features</Label>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="burnable" />
                  <Label htmlFor="burnable">Burnable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mintable" />
                  <Label htmlFor="mintable">Mintable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pausable" />
                  <Label htmlFor="pausable">Pausable</Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" onClick={handleDeploy} disabled={isDeploying}>
              {isDeploying ? (
                "Deploying..."
              ) : (
                <>
                  Deploy Token <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Deployment Details</CardTitle>
            <CardDescription>Review before deployment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Estimated Gas Fee</AlertTitle>
              <AlertDescription>{estimatedGas}</AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Contract verified on deployment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Automatic proxy implementation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>OpenZeppelin security standards</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
