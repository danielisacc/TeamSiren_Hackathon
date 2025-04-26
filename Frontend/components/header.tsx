import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
              <Bell className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-slate-800 hidden md:block">SafeAlert Dashboard</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center w-full max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Search locations or alerts..."
              className="w-full pl-9 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-slate-600">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-sm font-medium text-slate-600">JD</span>
          </div>
        </div>
      </div>
    </header>
  )
}
