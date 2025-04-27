"use client"

import { useState } from "react"
import { AlertTriangle, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"

export function AlertStatus() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [postalCode, setPostalCode] = useState("")
  return (
    <Card className="border-slate-200 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Keep me updated
        </CardTitle>
        <CardDescription>Last updated: April 26, 2025 at 1:15 PM</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className='text-sm' htmlFor="postal-code">Postal Code</Label>
            <Input
              type='postal-code'
              id="Password"
              placeholder="password"
              className='bg-transparent'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div>
            <Label className='text-sm' htmlFor="Phone-number">Phone Number</Label>
            <Input
              type="phone-number"
              id="username"
              placeholder="username"
              className='bg-transparent'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>


      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          View Full Alert Details
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
