import { Hero, Guide, Workers, MyWork } from "@/components";
import Test from "@/components/Test";

export default function Home() {

  return (
    <main className="bg__app">
      <Test />
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
