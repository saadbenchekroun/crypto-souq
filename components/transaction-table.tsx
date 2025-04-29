"use client"

import { ArrowDownRight, ArrowUpRight, MoreHorizontal } from "lucide-react"

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

const transactions = [
  {
    id: "1",
    type: "incoming",
    amount: "25,000 USDT",
    from: "0x1234...5678",
    to: "Hot Wallet",
    status: "completed",
    time: "2 mins ago",
    confirmations: "45/45",
  },
  {
    id: "2",
    type: "outgoing",
    amount: "100,000 USDC",
    from: "Cold Storage",
    to: "0x8765...4321",
    status: "pending",
    time: "5 mins ago",
    confirmations: "2/4",
  },
  // Add more transactions as needed
]

export function TransactionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Confirmations</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <div className="flex items-center">
                {transaction.type === "incoming" ? (
                  <ArrowDownRight className="mr-2 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowUpRight className="mr-2 h-4 w-4 text-blue-500" />
                )}
                {transaction.type}
              </div>
            </TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell className="font-mono">{transaction.from}</TableCell>
            <TableCell className="font-mono">{transaction.to}</TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  transaction.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {transaction.status}
              </div>
            </TableCell>
            <TableCell>{transaction.time}</TableCell>
            <TableCell>{transaction.confirmations}</TableCell>
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
                  <DropdownMenuItem>Approve Transaction</DropdownMenuItem>
                  <DropdownMenuItem>Export Receipt</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
