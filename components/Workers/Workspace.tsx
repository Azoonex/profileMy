import SubTitle, { Card } from './SubTitle'

function Workers() {
  return (
    <section className="w-full lg:h-[120vh] flex flex-col items-center justify-center">
      <div>
        <SubTitle />
      </div>
     <div className="md:flex grid grid-cols-2 border-2 border-yellow-50 p-10
      rounded-lg  gap-6 gap-y-14 lg:gap-20 my-10">
      <Card />
      <Card />
      <Card />
      <Card />
     </div>
    </section>

  )
}
export default Workers

