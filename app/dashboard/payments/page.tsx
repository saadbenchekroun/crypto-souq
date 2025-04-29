"use client"

import { useState } from "react"
import { ArrowRight, Clock, DollarSign, Info, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PaymentsPage() {
  const [amount, setAmount] = useState("")
  const [estimatedFee, setEstimatedFee] = useState("0.00")
  const [exchangeRate, setExchangeRate] = useState("1.00")

  const handleAmountChange = (value: string) => {
    setAmount(value)
    // Simulate fee calculation
    setEstimatedFee((Number.parseFloat(value) * 0.001).toFixed(2))
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cross-Border Payments</h2>
      </div>

      <Tabs defaultValue="send" className="space-y-4">
        <TabsList>
          <TabsTrigger value="send">Send Payment</TabsTrigger>
          <TabsTrigger value="remittance">Stablecoin Remittance</TabsTrigger>
        </TabsList>

        <TabsContent value="send" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Send Crypto Payment</CardTitle>
                <CardDescription>Send crypto payments to any wallet address worldwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient Address</Label>
                  <div className="flex space-x-2">
                    <Input id="recipient" placeholder="Enter wallet address" />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enter the recipient&apos;s wallet address</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select defaultValue="USDT">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USDT">USDT</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                        <SelectItem value="ETH">ETH</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network Fee</span>
                    <span>${estimatedFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span>~2-5 minutes</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>
                      ${amount ? (Number.parseFloat(amount) + Number.parseFloat(estimatedFee)).toFixed(2) : "0.00"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Payment
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Recipients</CardTitle>
                <CardDescription>Quick access to frequent recipients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <div className="ml-2 text-left">
                      <p className="text-sm font-medium">Bank Al-Maghrib</p>
                      <p className="text-xs text-muted-foreground font-mono">0x1234...5678</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <div className="ml-2 text-left">
                      <p className="text-sm font-medium">OCP Group</p>
                      <p className="text-xs text-muted-foreground font-mono">0x8765...4321</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="remittance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Stablecoin Remittance</CardTitle>
                <CardDescription>Fast cross-border transfers with fixed exchange rates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>From</Label>
                    <Select defaultValue="MAD">
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MAD">MAD (Moroccan Dirham)</SelectItem>
                        <SelectItem value="USD">USD (US Dollar)</SelectItem>
                        <SelectItem value="EUR">EUR (Euro)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>To</Label>
                    <Select defaultValue="USDT">
                      <SelectTrigger>
                        <SelectValue placeholder="Select stablecoin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USDT">USDT (Tether)</SelectItem>
                        <SelectItem value="USDC">USDC (USD Coin)</SelectItem>
                        <SelectItem value="BUSD">BUSD (Binance USD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="remittance-amount">Amount</Label>
                    <div className="flex space-x-2">
                      <Input id="remittance-amount" type="number" placeholder="0.00" />
                      <Button variant="outline" size="icon">
                        <DollarSign className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span>1 USDT = {exchangeRate} MAD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Settlement Time</span>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{"< 5 minutes"}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Convert & Send</Button>
              </CardFooter>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Exchange Rates</CardTitle>
                <CardDescription>Live currency conversion rates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>USDT/MAD</span>
                    <span className="font-medium">10.34</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>USDC/MAD</span>
                    <span className="font-medium">10.33</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>BUSD/MAD</span>
                    <span className="font-medium">10.32</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
