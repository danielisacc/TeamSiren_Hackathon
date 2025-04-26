import { AlertTriangle, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AlertStatus() {
  return (
    <Card className="border-slate-200 shadow-sm h-[30%]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Current Alert Status
        </CardTitle>
        <CardDescription>Last updated: April 26, 2025 at 1:15 PM</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="font-semibold text-amber-600">!</span>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Level 2 Warning</h3>
              <p className="text-sm text-slate-500">Potential flooding in coastal areas</p>
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-sm text-blue-800">
              Residents in low-lying areas should prepare for possible evacuation within the next 24 hours.
            </p>
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
