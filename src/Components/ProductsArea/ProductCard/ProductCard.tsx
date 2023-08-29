import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";
import useTitle from "../../../Utils/UseTitle";
import appConfig from "../../../Utils/AppConfig";

type ProductProps = {
    product: ProductModel
}

function ProductCard(props: ProductProps): JSX.Element {
    return (
            <NavLink to={"/products/details/" + props.product.id}>
                <div className="ProductCard">
                    <div>
                        Name : {props.product.name}
                        <br />
                        Price : {props.product.price} $
                        <br />
                        Stock : {props.product.stock}
                    </div>
                    <div>
                        <img className="imgCard" src={appConfig.productsUrl+ "images/" + props.product.imageName} alt="image" />
                    </div>
                </div>
            </NavLink>
    );
}
export default ProductCard