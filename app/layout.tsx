"use client"

import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import { Bell, CreditCard, FileText, LayoutDashboard, LogOut, Settings, Shield, User, Wallet } from "lucide-react"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Code, Coins, Image, Plus } from "lucide-react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/"

  if (isAuthPage) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <Sidebar>
              <SidebarHeader className="border-b px-6 py-4">
                <div className="flex items-center gap-2 font-semibold">
                  <Shield className="h-6 w-6" />
                  CryptoTrust
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                      <Link href="/dashboard">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/custody"}>
                      <Link href="/dashboard/custody">
                        <Wallet className="h-4 w-4" />
                        <span>Custody</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/payments"}>
                      <Link href="/dashboard/payments">
                        <CreditCard className="h-4 w-4" />
                        <span>Payments</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/compliance"}>
                      <Link href="/dashboard/compliance">
                        <FileText className="h-4 w-4" />
                        <span>Compliance</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Create Menu */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full justify-between">
                        <div className="flex items-center">
                          <Plus className="h-4 w-4 mr-2" />
                          <span>Create</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="pl-8 w-full justify-between">
                            <div className="flex items-center">
                              <Coins className="h-4 w-4 mr-2" />
                              <span>Tokenization</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuButton
                            asChild
                            className="pl-12"
                            isActive={pathname === "/dashboard/create/tokens"}
                          >
                            <Link href="/dashboard/create/tokens">Created Tokens</Link>
                          </SidebarMenuButton>
                          <SidebarMenuButton
                            asChild
                            className="pl-12"
                            isActive={pathname === "/dashboard/create/tokens/new"}
                          >
                            <Link href="/dashboard/create/tokens/new">Create Token</Link>
                          </SidebarMenuButton>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="pl-8 w-full justify-between">
                            <div className="flex items-center">
                              <Image className="h-4 w-4 mr-2" />
                              <span>NFTs</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuButton asChild className="pl-12" isActive={pathname === "/dashboard/create/nfts"}>
                            <Link href="/dashboard/create/nfts">Created NFTs</Link>
                          </SidebarMenuButton>
                          <SidebarMenuButton
                            asChild
                            className="pl-12"
                            isActive={pathname === "/dashboard/create/nfts/new"}
                          >
                            <Link href="/dashboard/create/nfts/new">Create NFT</Link>
                          </SidebarMenuButton>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="pl-8 w-full justify-between">
                            <div className="flex items-center">
                              <Code className="h-4 w-4 mr-2" />
                              <span>dApps</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuButton
                            asChild
                            className="pl-12"
                            isActive={pathname === "/dashboard/create/dapps"}
                          >
                            <Link href="/dashboard/create/dapps">Created dApps</Link>
                          </SidebarMenuButton>
                          <SidebarMenuButton
                            asChild
                            className="pl-12"
                            isActive={pathname === "/dashboard/create/dapps/new"}
                          >
                            <Link href="/dashboard/create/dapps/new">Create dApp</Link>
                          </SidebarMenuButton>
                        </CollapsibleContent>
                      </Collapsible>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter className="border-t p-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <User className="h-4 w-4" />
                      <span>John Smith</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarFooter>
            </Sidebar>
            <div className="flex flex-col">
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
                <SidebarTrigger />
                <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                  <Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </div>
              </header>
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
