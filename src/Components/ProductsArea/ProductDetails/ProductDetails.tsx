import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotifyService";
import productService from "../../../Service/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../Spinner/Spinner";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {
    // title
    useTitle("Northwind | Product Details")

   const navigate =  useNavigate();

    const param = useParams();
    const prodId = +param.prop;

    const [feProduct, setFeProduct] = useState<ProductModel>();

    useEffect(() => {
        productService.getOneProduct(prodId)
            .then(beProduct => setFeProduct(beProduct))
            .catch(err => notificationService.error(err.message))
    }, [])

    async function deleteMe() {
        try {
            const ok = window.confirm(`Are you sure ? `)
            if(!ok) return;
            await productService.deleteProduct(prodId)
            notificationService.error(`Product ${prodId} is Deleted`)
            navigate(appConfig.productsRoute)
        }
        catch (error: any) {
            notificationService.error(error.message);
            console.log(error.message)
        }
    }

    // if (!feProduct) return <h2>not found</h2>
    if(!feProduct) return <Spinner/>
    return (
        <div className="ProductDetails">
            <div className="divBtn">
                <button><NavLink to={appConfig.productsRoute}>Go Back ..</NavLink></button>
                <button><NavLink to={`/products/edit/ ${prodId}`}>Update</NavLink></button>
                <button><NavLink to="#" onClick={deleteMe}>Delete</NavLink></button>
            </div>
            <h2>Product Details</h2>
            <h3>Name : {feProduct?.name}</h3>
            <h3>Price : {feProduct?.price}</h3>
            <h3>Stock : {feProduct?.stock}</h3>
            <br />
            <img src={appConfig.productsUrl+ "images/" + feProduct?.imageName} />
            <br />
        </div>
    );
}
export default ProductDetails