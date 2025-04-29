"use client"

import { useState } from "react"
import { AlertTriangle, Key, Lock, Plus, RefreshCw, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TransactionTable } from "@/components/transaction-table"

export default function CustodyPage() {
  const [selectedWallet, setSelectedWallet] = useState("hot")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Institutional Custody</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Wallet
          </Button>
        </div>
      </div>

      <Tabs defaultValue="wallets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="wallets">Wallets</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="wallets" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hot Wallet Balance</CardTitle>
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,231,345.89</div>
                <p className="text-xs text-muted-foreground">Last updated: 2 mins ago</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cold Storage</CardTitle>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,789,012.54</div>
                <p className="text-xs text-muted-foreground">90% of total assets</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Signers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5/7</div>
                <p className="text-xs text-muted-foreground">Quorum: 4 signatures</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                <Key className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Multi-Signature Configuration</CardTitle>
                <CardDescription>Manage wallet signers and approval thresholds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="wallet-type">Wallet Type</Label>
                        <Select value={selectedWallet} onValueChange={setSelectedWallet}>
                          <SelectTrigger id="wallet-type">
                            <SelectValue placeholder="Select wallet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hot">Hot Wallet</SelectItem>
                            <SelectItem value="cold">Cold Storage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="threshold">Required Signatures</Label>
                        <Select defaultValue="4">
                          <SelectTrigger id="threshold">
                            <SelectValue placeholder="Select threshold" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 of 7</SelectItem>
                            <SelectItem value="4">4 of 7</SelectItem>
                            <SelectItem value="5">5 of 7</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Daily Withdrawal Limit</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input type="number" placeholder="Amount" />
                        <Select defaultValue="USD">
                          <SelectTrigger>
                            <SelectValue placeholder="Currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="MAD">MAD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Security Alerts</CardTitle>
                <CardDescription>Recent security events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Large Withdrawal Attempt</p>
                    <p className="text-xs text-muted-foreground">
                      Unusual amount detected. Additional approval required.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <Shield className="h-5 w-5 text-green-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Security Audit Completed</p>
                    <p className="text-xs text-muted-foreground">All security checks passed successfully.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Monitor</CardTitle>
              <CardDescription>Real-time tracking of all wallet activity</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
