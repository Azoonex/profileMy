import Link from "next/link"

function app({ posts }:any) {
    return(
        <div>
            <h2>list of posts</h2>
            <h2>
                {posts.map((post:any) =>{
                    return (
                        <div key={post.id}>
                            
                            <Link href={`posts/${post.id}`}passHref>
                                <h2>
                                    {post.id} : {post.title}
                                </h2>
                          </Link>
                        </div>
                    )
                })}
            </h2>
        </div>
    )
}

export default app

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    return {
        props:{
            posts: data.slice(0,10)
        }
    }
}