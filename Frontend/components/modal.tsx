
import { ScrollArea } from "@radix-ui/react-scroll-area"
import Image from "next/image"
import { title } from "process"

export default function Modal() {
    const alert = {
        id: 1,
        title: "Flood",
        location: "Austin",
        time: "1 hour ago",
        severity: "high",
        background: "https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg"
    }

    const subtitle = (text: string) => (<p className="text-center text-3xl font-medium">{text}</p>)

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center py-12">

            <div className=" z-10 w-[80%] h-full bg-white rounded-2xl">
                <ScrollArea>
                    <div className="relative z-0 w-full h-full overflow-hidden ">

                        <div className="z-10 absolute w-full h-full flex items-center justify-center ">
                            <p className="text-5xl font-semibold">{alert.title.toUpperCase()}</p>
                        </div>

                        <Image
                            src={alert.background}
                            width={"100"}
                            height={"100"}
                            alt={"Illusration for " + alert.id}
                            style={{ width: '100%', height: "100%" }}
                            className="rounded-xl"
                        />


                    </div>

                    <div className="tp">
                        {subtitle("What does a tornado looks like ?")}
                    </div>
                </ScrollArea>

            </div>

            <div className="z-0 absolute w-full h-full bg-black/60" />

        </div>
    )
}