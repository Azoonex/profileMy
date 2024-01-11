import { Hero, Guide, Workers, MyWork } from "@/components";



import Link from "next/link";


export default function Home() {
  return (
    <main className="bg__app">
      <Hero />
      <Guide type="content" />
      <Workers />
      <Guide type="no" />
      <section>
        <MyWork />
      </section>
    </main>
  )
}
