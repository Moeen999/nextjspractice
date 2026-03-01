import ProductList from "./ProductList";

// ! This the search param is made for server components where we use onlly only the SearchParams while for the ClientComponents we have to use the useSearchParams() to get the values of query string
const Products = async ({ searchParams }) => {
    const sP = await searchParams;
    console.log("Outer", sP);
    // console.log(await searchParams);
    // console.log(await props.searchParams);
    return <div>
        <ProductList />
        <h1>Search params catagory is {sP.category} and page is {sP.page}</h1>
    </div>
}

export default Products