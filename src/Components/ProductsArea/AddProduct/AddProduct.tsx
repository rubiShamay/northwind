import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotifyService";
import productService from "../../../Service/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import useImagePreview from "../../../Utils/UseImagePreview";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductModel>();

    const navigate = useNavigate()

    const [imageFile, setImageFile] = useState<File | null>();

    function handleFileChange(event: any) {
        const files = event.target.files;
        if (!files || !files.item(0)) return;
        setImageFile(files.item(0))
    }

    const imageSrc = useImagePreview(imageFile)


    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            const beProduct = await productService.addProduct(product);
            notificationService.success("Product has been added");
            navigate(appConfig.productDetailsRoute + beProduct.id);
        }
        catch (err: any) {
            notificationService.error(err.message)
        }

    }

    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>

                <label>Product Name :</label>
                <input type="text" {...register("name")} />

                <label>Product Price :</label>
                <input type="number" step="0.01" {...register("price")} />

                <label>Product Stock :</label>
                <input type="number" {...register("stock")} />

                <div className="areaImage">
                    <label>Product Image :</label>
                    <input type="file" accept="images/*" {...register("image")} onChange={handleFileChange} />
                    {imageSrc ? <img src={imageSrc} /> : <></>}
                </div>

                <button>Add</button>

            </form>
        </div>
    );
}

export default AddProduct;
