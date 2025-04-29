"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Building2, FileText, Shield, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { type Step, Stepper } from "@/components/stepper"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 3

  const steps: Step[] = [
    {
      title: "Business Details",
      description: "Basic information about your company",
      icon: Building2,
    },
    {
      title: "Verification",
      description: "KYC and document upload",
      icon: FileText,
    },
    {
      title: "Wallet Setup",
      description: "Configure your crypto wallet",
      icon: Shield,
    },
  ]

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Shield className="mr-2 h-6 w-6" /> CryptoTrust Morocco
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;The onboarding process was smooth and professional. We were able to start making crypto
              transactions within days.&rdquo;
            </p>
            <footer className="text-sm">Mohammed Alami - OCP Group</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <Card>
            <CardHeader>
              <CardTitle>Register your business</CardTitle>
              <CardDescription>Create a new account in few steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Stepper steps={steps} currentStep={currentStep} />
              <Progress value={((currentStep + 1) / totalSteps) * 100} className="w-full" />

              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registration">Business Registration Number</Label>
                    <Input id="registration" placeholder="Enter registration number" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" type="email" placeholder="name@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+212" required />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Company Documents</Label>
                    <div className="grid gap-4">
                      <Button variant="outline" className="h-20 w-full">
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="h-4 w-4" />
                          <span>Upload Business Registration</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-20 w-full">
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="h-4 w-4" />
                          <span>Upload Tax ID Document</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Representative Information</Label>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rep-name">Full Name</Label>
                        <Input id="rep-name" placeholder="Enter representative name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rep-id">National ID Number</Label>
                        <Input id="rep-id" placeholder="Enter ID number" required />
                      </div>
                      <Button variant="outline" className="h-20">
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="h-4 w-4" />
                          <span>Upload ID Document</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Connect Your Wallet</Label>
                    <div className="grid gap-4">
                      <Button variant="outline" className="h-12 w-full">
                        <img src="/metamask.svg" alt="MetaMask" className="mr-2 h-4 w-4" />
                        Connect MetaMask
                      </Button>
                      <Button variant="outline" className="h-12 w-full">
                        <img src="/walletconnect.svg" alt="WalletConnect" className="mr-2 h-4 w-4" />
                        WalletConnect
                      </Button>
                      <Button variant="outline" className="h-12 w-full">
                        <img src="/ledger.svg" alt="Ledger" className="mr-2 h-4 w-4" />
                        Ledger Wallet
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Create New Wallet</Label>
                    <Button variant="secondary" className="w-full">
                      <Shield className="mr-2 h-4 w-4" />
                      Generate Secure Wallet
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleNext}>
                {currentStep === totalSteps - 1 ? "Complete" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
