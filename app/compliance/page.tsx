"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, FileText, Filter, Search, Shield, XCircle } from "lucide-react"
import { Users } from "lucide-react" // Import the Users icon

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComplianceTable } from "@/components/compliance-table"

export default function CompliancePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Compliance & Security</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" /> Generate Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="kyc" className="space-y-4">
        <TabsList>
          <TabsTrigger value="kyc">KYC/AML Status</TabsTrigger>
          <TabsTrigger value="monitoring">Transaction Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="kyc" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+7 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Verified</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,180</div>
                <p className="text-xs text-muted-foreground">95.6% of total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">3.4% of total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rejected</CardTitle>
                <XCircle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">1% of total</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Client Verification Status</CardTitle>
              <CardDescription>Monitor KYC/KYB verification progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                <ComplianceTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Transaction and wallet risk scoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Check Address</Label>
                    <div className="flex space-x-2">
                      <Input placeholder="Enter wallet address" className="font-mono" />
                      <Button>
                        <Shield className="mr-2 h-4 w-4" />
                        Analyze
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Risk Score</Label>
                      <div className="flex items-center space-x-4">
                        <Progress value={25} className="flex-1" />
                        <span className="text-sm font-medium">Low Risk</span>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4 space-y-2">
                      <h4 className="font-medium">Risk Factors</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-green-600">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          No suspicious transaction patterns
                        </div>
                        <div className="flex items-center text-green-600">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Known business entity
                        </div>
                        <div className="flex items-center text-green-600">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Verified source of funds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Compliance Alerts</CardTitle>
                <CardDescription>Recent suspicious activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Large Transaction</p>
                      <p className="text-xs text-muted-foreground">Transaction above threshold detected</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Unusual Pattern</p>
                      <p className="text-xs text-muted-foreground">Multiple rapid transactions detected</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
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
