import { loadPosts,getPost } from "@/lib/posts"


export default function Post ({posts}:any) {

    return (
        <div>
            <div>
                Conents : {posts.title}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const posts = await loadPosts()
    const paths = posts.map((post:any)=>({
         params: { slug: post.id } 
    }))
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}:any) {
    const posts = await getPost(params.slug)

    return {
        props :{
            posts : posts[0]
        }
    }

}