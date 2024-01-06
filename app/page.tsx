import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Workers from "@/components/Workers/Workspace";



import Link from "next/link";


export default function Home() {
  return (
    <main className="bg__app">
      
       <Hero />
       <Guide type="content"/>
      <Workers />
       <Guide type="no" />
      <h2 className="text-4xl bg-yellow-50 text-black">
        <Link href="/posts">
          let's go
        </Link>
      </h2>
    </main>
  )
}
