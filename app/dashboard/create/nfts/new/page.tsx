"use client"

import { useState } from "react"
import { ArrowRight, ImageIcon, Upload, X } from "lucide-react"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function NewNFTPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [attributes, setAttributes] = useState([{ trait_type: "", value: "" }])
  const [isDeploying, setIsDeploying] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeploy = () => {
    setIsDeploying(true)
    // Simulate deployment
    setTimeout(() => {
      setIsDeploying(false)
    }, 2000)
  }

  const addAttribute = () => {
    setAttributes([...attributes, { trait_type: "", value: "" }])
  }

  const removeAttribute = (index: number) => {
    setAttributes(attributes.filter((_, i) => i !== index))
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Create New NFT</h2>
        <Link href="/dashboard/create/nfts">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>NFT Details</CardTitle>
            <CardDescription>Configure your NFT properties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Upload Media</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                >
                  {preview ? (
                    <div className="relative w-full h-full">
                      <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-contain" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setFile(null)
                          setPreview(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">SVG, PNG, JPG, GIF, or MP4 (MAX. 100MB)</p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">NFT Name</Label>
              <Input id="name" placeholder="e.g., Moroccan Heritage #001" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your NFT..." rows={4} />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Attributes</Label>
              <div className="space-y-2">
                {attributes.map((attr, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Trait Type"
                      value={attr.trait_type}
                      onChange={(e) => {
                        const newAttrs = [...attributes]
                        newAttrs[index].trait_type = e.target.value
                        setAttributes(newAttrs)
                      }}
                    />
                    <Input
                      placeholder="Value"
                      value={attr.value}
                      onChange={(e) => {
                        const newAttrs = [...attributes]
                        newAttrs[index].value = e.target.value
                        setAttributes(newAttrs)
                      }}
                    />
                    <Button variant="ghost" size="icon" onClick={() => removeAttribute(index)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full" onClick={addAttribute}>
                  Add Attribute
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="royalties">Royalties (%)</Label>
                <Input id="royalties" type="number" placeholder="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supply">Supply</Label>
                <Input id="supply" type="number" placeholder="1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Blockchain</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select blockchain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                  <SelectItem value="tezos">Tezos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Contract Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select standard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="erc721">ERC-721</SelectItem>
                  <SelectItem value="erc1155">ERC-1155</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Storage Solution</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select storage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ipfs">IPFS</SelectItem>
                  <SelectItem value="arweave">Arweave</SelectItem>
                  <SelectItem value="aws">AWS S3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" onClick={handleDeploy} disabled={isDeploying || !file}>
              {isDeploying ? (
                "Deploying..."
              ) : (
                <>
                  Deploy NFT <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>Preview your NFT before deployment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {preview ? (
              <div className="rounded-lg overflow-hidden border aspect-square">
                <img src={preview || "/placeholder.svg"} alt="NFT Preview" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="rounded-lg border aspect-square flex items-center justify-center bg-muted">
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            )}

            <Alert>
              <AlertTitle>Estimated Gas Fee</AlertTitle>
              <AlertDescription>0.05 ETH</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
