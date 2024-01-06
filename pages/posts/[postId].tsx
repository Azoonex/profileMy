
function PostId({posts}:any) {
    console.log(posts)
    return(
        <div>
            <h2>
               content: {posts.id} - {posts.title}
            </h2>
            <p>
                {posts.body}
            </p>
        </div>
    )
}
export default PostId

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map((post:any) =>{
        return{
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        // paths: [
        //     {
        //         params: {postId: '1'}
        //     },
        //     {
        //         params: {postId: '2'}
        //     },
        //     {
        //         params: {postId: '3'}
        //     }
        // ],
        paths,
        fallback: false
    }
}

export async function getStaticProps(context:any) {
    const {params} = context
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    let data = await res.json()

    return{
        props:{
            posts: data
        }
    }
}


