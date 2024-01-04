import Guide from "@/components/Guide";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="bg__app">
       <Hero />
       <Guide type="content"/>
       <section className="h-screen"></section>
       <Guide type="no" />
    </main>
  )
}
