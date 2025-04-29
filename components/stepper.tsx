import type { LucideIcon } from "lucide-react"

export interface Step {
  title: string
  description: string
  icon: LucideIcon
}

interface StepperProps {
  steps: Step[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex justify-between">
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                index <= currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
