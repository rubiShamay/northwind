import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotifyService";
import productService from "../../../Service/ProductsService";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import AddIcon from "../../../Assets/Images/plus-icon.svg"
import "./ProductList.css";

function ProductList(): JSX.Element {

    useTitle("Northwind | Products")

    const [feProducts, setFeProducts] = useState<ProductModel[]>([]);
    
    useEffect(() => {
        productService.getAllProducts()
            .then(beProducts => setFeProducts(beProducts))
            .catch(err => notificationService.error(err.message));
    }, [])

    if(!feProducts || feProducts.length === 0 ) return <Spinner/>
    return (
        <div className="ProductAdd">
            {/* <NavLink to={"/products/new"}>+</NavLink> */}
            <NavLink to={"/products/new"}><img className="addBtnI" src={AddIcon} /></NavLink>
            <h2>Our Products</h2>
            <div className="ProductList">
                {feProducts?.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>

    );
}

export default ProductList;
