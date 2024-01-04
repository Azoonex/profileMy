import axios from 'axios'

export const loadPosts = async ()=>{
    const {data: posts} = await axios.get("http://localhost:4000/posts")

    return posts
}

export const getPost = async (slug:any) => {
    const { data: posts } = await axios.get("http://localhost:4000/posts", {
        params: {
            slug
        }
    });

    return posts;
};