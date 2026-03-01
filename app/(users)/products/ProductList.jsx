"use client"
import { useSearchParams } from "next/navigation"

const ProductList = () => {
    const useSP = useSearchParams();
    // console.log(useSP.get("category"));
    // console.log(useSP.get("page"));
    console.log(useSP.getAll("page"));
    // console.log("inner", useSP);
    return <h1>Product List Data Component</h1>
}
export default ProductList