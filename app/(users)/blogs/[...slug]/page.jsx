const Blogs = async (props) => {
    const { slug } = await props.params;
    console.log("slug data", slug);
    return <h1>Nested Blogs Page , aatay jao</h1>
}

export default Blogs 