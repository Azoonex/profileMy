import Image from "next/image"
const Guide = ({type}) => {
    return (
        <section className="h-screen relative w-full centeritems bg-black">
            <h2 className=" text-6xl text-white font-mono font-bold">
                {type === "content" ? "who this my ?" : "no is my ?"}
            </h2>
            <div className="">
                <Image
                    src="/mountains.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <Image
                    src="/stars.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <Image
                    src="/planets.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                
            </div>
        </section >
    )
}

export default Guide