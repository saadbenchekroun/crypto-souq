"use client"

import { AlertTriangle, CheckCircle2, MoreHorizontal, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const clients = [
  {
    id: "1",
    name: "Bank Al-Maghrib",
    type: "Financial Institution",
    status: "verified",
    documents: "Complete",
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    name: "OCP Group",
    type: "Corporation",
    status: "pending",
    documents: "In Review",
    lastUpdated: "1 day ago",
  },
  {
    id: "3",
    name: "Maroc Telecom",
    type: "Corporation",
    status: "verified",
    documents: "Complete",
    lastUpdated: "5 days ago",
  },
  // Add more clients as needed
]

export function ComplianceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Business Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Documents</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell className="font-medium">{client.name}</TableCell>
            <TableCell>{client.type}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {client.status === "verified" ? (
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                ) : client.status === "pending" ? (
                  <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                ) : (
                  <XCircle className="mr-2 h-4 w-4 text-destructive" />
                )}
                {client.status}
              </div>
            </TableCell>
            <TableCell>{client.documents}</TableCell>
            <TableCell>{client.lastUpdated}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Review Documents</DropdownMenuItem>
                  <DropdownMenuItem>Update Status</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Flag Account</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
