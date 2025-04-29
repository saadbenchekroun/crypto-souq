"use client"
import { ArrowDownUp, ArrowUpRight, FileText, Plus, Shield, User, Wallet } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/custody">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Wallet
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">4 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.9M</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Transaction list */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Payment Sent</p>
                    <p className="text-xs text-muted-foreground">To: 0x1234...5678</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">$5,000.00</p>
                  <p className="text-xs text-muted-foreground">2 mins ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <ArrowDownUp className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Assets Swapped</p>
                    <p className="text-xs text-muted-foreground">USDT → ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">$2,500.00</p>
                  <p className="text-xs text-muted-foreground">5 mins ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used operations</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Link href="/dashboard/payments">
              <Button className="w-full justify-start" variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Send Crypto
              </Button>
            </Link>
            <Link href="/dashboard/payments">
              <Button className="w-full justify-start" variant="outline">
                <ArrowDownUp className="mr-2 h-4 w-4" />
                Swap Assets
              </Button>
            </Link>
            <Link href="/dashboard/compliance">
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Generate Invoice
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
