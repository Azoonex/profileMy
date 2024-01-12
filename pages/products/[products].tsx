
function products({ data }:any) {
  console.log(data)
  return (
    <div>
      <h1>{data.id}</h1> : <h2>{data.title}</h2>
    </div>
  )
}

export default products



export async function getServerSideProps(context: any) {
  const { params } = context;
  console.log(params);

  const queryParams = new URLSearchParams(params).toString();
  const response = await fetch(`http://localhost:4000/posts/products?${queryParams}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
