import Link from "next/link"

function layout({posts}) {
    console.log();
    return (
        <div className="">
            {posts.map(item => {
                return (
                    <div key={item.id}>
                        <Link href={`/products/${item.id}`} >{item.id} : {item.title} | {item.author}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default layout


export const getServerSideProps = async () => {
    const respnsv = await fetch(`http://localhost:4000/posts`)
    const data = await respnsv.json()

    return {
        props: {
            posts: data
        }
    }
}
