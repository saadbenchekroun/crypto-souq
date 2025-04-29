import { ArrowRight, Code2, Layers } from "phosphor-react"
import { Label } from "@/components/ui/label"

// ... rest of imports

function NewDappPage() {
  // ... rest of the code

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8 w-full">
        <Card>
          <CardHeader>
            <CardTitle>Configure Your dApp</CardTitle>
            <CardDescription>Choose the features you want to include in your dApp.</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <Select
                    label="Dapp Type"
                    placeholder="Select dapp type"
                    value={dappType}
                    onChange={(e) => setDappType(e.target.value)}
                  >
                    <option value="nft">NFT Marketplace</option>
                    <option value="dao">DAO</option>
                    <option value="game">Game</option>
                  </Select>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="transactions" defaultChecked />
                      <Label htmlFor="transactions">Transaction History</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="analytics" defaultChecked />
                      <Label htmlFor="analytics">Analytics Dashboard</Label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
              Previous
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={!dappType && step === 1}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleDeploy} disabled={isDeploying}>
                {isDeploying ? (
                  "Deploying..."
                ) : (
                  <>
                    Deploy dApp <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Build Progress</CardTitle>
            <CardDescription>Development status and estimates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Code2 className="h-4 w-4" />
              <AlertTitle>Smart Contract Generation</AlertTitle>
              <AlertDescription>Contract will be generated using OpenZeppelin standards</AlertDescription>
            </Alert>

            <Alert>
              <Layers className="h-4 w-4" />
              <AlertTitle>Estimated Deployment Cost</AlertTitle>
              <AlertDescription>0.1 ETH (≈ $200)</AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Build Steps</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                  Contract Compilation
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                  Frontend Generation
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500" />
                  Contract Deployment
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-muted" />
                  Frontend Deployment
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
