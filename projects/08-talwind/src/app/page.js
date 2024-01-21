"use client"
import Image from "next/image"
import ImageLogo from "./public/me.png"
import Button from "./components/Button"
import Items from "./components/Items"

export default function App() {

  return (

    <>
    
    <section className="min-h-screen mt-7 grid place-content-center">

    <div className="flex items-center max-w-sm mx-auto my-0 p-6 rounded-lg bg-[#fff] shadow-xl">

      <div className="shrink-0">

        <Image src={ImageLogo} className="h-14 w-12" alt="Photo"></Image>

      </div>

      <div className="ml-6 pt-1">

        <h1 className="text-[#1a202c] text-lg font-medium">ChitChat</h1>

        <p className="text-[#718096] text-md">You have a new message</p>

      </div>

    </div>

    <Button></Button>

    <section className="grid grid-cols-3 gap-4 mt-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

      <Items></Items>

      <Items></Items>

      <Items></Items> 

      <Items></Items> 

      <Items></Items> 

      <Items></Items> 

    </section>

    </section>

    </>

    
  )

}
