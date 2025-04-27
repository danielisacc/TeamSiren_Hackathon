import { AlertStatus } from "@/components/alert-status"
import { DisasterMap } from "@/components/disaster-map"
import { Header } from "@/components/header"
import Modal from "@/components/modal"
import { RecentAlerts } from "@/components/recent-alerts"
import { ResourcesList } from "@/components/resources-list"

export default function Dashboard() {


  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col">

      <div className="h-[10%]">
        <Header />
      </div>


      <main className="w-[100%] h-[100%] flex items-center  mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
          {/* Left column - stacked cards */}

          <div className="h-full ">

            <div className="h-2/5">
              <AlertStatus />
            </div>

            <div className="flex-1 h-3/5 ">
              <RecentAlerts />
            </div>




            -
          </div>

          {/* Right column - map */}
          <div className=" col-span-2 h-full flex-col">

            <div className="relative h-full w-full overflow-hidden">
              <div className="w-full h-full">
                <DisasterMap />
              </div>

              <div className="absolute bottom-12 h-1/4">
                <ResourcesList />
              </div>

            </div>

          </div>

        </div>


      </main>



    </div>
  )
}
