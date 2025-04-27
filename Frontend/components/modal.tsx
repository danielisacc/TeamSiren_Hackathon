
import { ScrollArea } from "@radix-ui/react-scroll-area"
import Image from "next/image"
import { title } from "process"
import { Dispatch, SetStateAction, useState } from "react";
import { Alerts } from "./recent-alerts";

export default function Modal({
    alert,
    showModal,
    setShowModal
}: {
    alert: Alerts
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>
}) {


    const subtitle = (text: string) => (<p className="text-center text-2xl font-medium">{text}</p>)
  
    return (
        <div 
        style={{ 
            scale: showModal ? 1 : 0,
            opacity : showModal ? 1 : 0 ,
            transition: 'scale 0.01s ease-in-out, opacity 0.1s ease-in-out'
        }}
        className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center py-12">

            <div 
            style={{
                scale: showModal ? 1 : 0,
                transition: 'scale 0.4s ease-in-out'
            }}
            className=" z-10 w-[30%] h-[80%] bg-white rounded-2xl"
            >
                <ScrollArea>
                    <div className="relative z-0 overflow-hidden">

                        <div className="z-10 absolute w-full h-full flex items-center justify-center ">
                            <p className="text-4xl font-semibold text-white text-center">{alert.event.toUpperCase()}</p>
                        </div>
                        

                        <Image
                            src={alert.background}
                            width={"100"}
                            height={"100"}
                            alt={"Illusration for " + alert.id}
                            style={{ width: '100%', height: "100%" }}
                            className="rounded-xl p-4"
                        />


                    </div>

                    <div className="px-4">
                        {subtitle(alert.headline)}
                        <div className="pt-6 space-y-6">
                            <p className="font-semibold">{alert.instruction}</p>
                            <p>{alert.description}</p>
                        </div>
                    </div>
                </ScrollArea>

            </div>

            <div className="z-0 absolute w-full h-full bg-black/60" >
                <button className="flex w-full h-full" onClick={() => { setShowModal(!showModal) }} />
            </div>

        </div>
    )
}