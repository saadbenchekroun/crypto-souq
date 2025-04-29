import { AlertTriangle, ArrowUpRight, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface YieldCardProps {
  title: string
  protocol: string
  apy: number
  risk: "Low" | "Medium" | "Medium-High" | "High"
  tvl: string
  description: string
}

export function YieldCard({ title, protocol, apy, risk, tvl, description }: YieldCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-500"
      case "Medium":
        return "text-yellow-500"
      case "Medium-High":
        return "text-orange-500"
      case "High":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Protocol: {protocol}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">APY</p>
            <div className="flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-2xl font-bold">{apy}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Risk Level</p>
            <div className="flex items-center">
              <AlertTriangle className={`mr-1 h-4 w-4 ${getRiskColor(risk)}`} />
              <span className={`font-medium ${getRiskColor(risk)}`}>{risk}</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Total Value Locked</p>
          <p className="text-lg font-medium">{tvl}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="w-[48%]">
          Learn More
        </Button>
        <Button className="w-[48%]">Deposit</Button>
      </CardFooter>
    </Card>
  )
}
