"use client"

import { BarChart3, ChevronUp, DollarSign, LineChart, PieChart, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { YieldCard } from "@/components/yield-card"

export default function TreasuryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Treasury Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Wallet className="mr-2 h-4 w-4" /> Convert to Stablecoin
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="yield">Yield Farming</TabsTrigger>
          <TabsTrigger value="stablecoins">Stablecoins</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231,892</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stablecoin Allocation</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65.4%</div>
                <p className="text-xs text-muted-foreground">Of total portfolio</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average APY</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.2%</div>
                <p className="text-xs text-muted-foreground">Across all strategies</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Yield</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$324,521</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Current portfolio distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-4 w-4 rounded bg-primary mr-2" />
                        USDT
                      </div>
                      <span>45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-4 w-4 rounded bg-blue-500 mr-2" />
                        USDC
                      </div>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-4 w-4 rounded bg-green-500 mr-2" />
                        MAD-pegged
                      </div>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="bg-muted" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Performing Strategies</CardTitle>
                <CardDescription>Based on 30-day returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">USDT Lending</p>
                        <p className="text-sm text-muted-foreground">Low Risk</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ChevronUp className="h-4 w-4 text-green-500" />
                      <div className="font-bold">12.4%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Stablecoin LP</p>
                        <p className="text-sm text-muted-foreground">Medium Risk</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ChevronUp className="h-4 w-4 text-green-500" />
                      <div className="font-bold">9.8%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="yield" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <YieldCard
              title="USDT Lending"
              protocol="Aave"
              apy={12.4}
              risk="Low"
              tvl="$12.5M"
              description="Lend USDT on Aave for stable returns"
            />
            <YieldCard
              title="Stablecoin LP"
              protocol="Curve"
              apy={9.8}
              risk="Medium"
              tvl="$8.2M"
              description="Provide liquidity to USDC/USDT/DAI pool"
            />
            <YieldCard
              title="MAD-USDT LP"
              protocol="Local DEX"
              apy={15.2}
              risk="Medium-High"
              tvl="$5.1M"
              description="Provide liquidity to MAD-pegged stablecoin pool"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
