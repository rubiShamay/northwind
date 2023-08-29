
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotifyService";
import productService from "../../../Service/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import "./EditProduct.css";
import useImagePreview from "../../../Utils/UseImagePreview";


function EditProduct(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<ProductModel>();

    const param = useParams();
    const id = +param.prop;

    const navigate = useNavigate();

    const [feProduct, setFeProduct] = useState<ProductModel>()

    const [imageFile, setImageFile] = useState<File | null>();

    useEffect(() => {
        productService.getOneProduct(id)
            .then(product => {
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setValue("imageName", product.imageName);
                setFeProduct(product)
            })
            .catch((err) => notificationService.error(err))
    }, [])

    async function update(product: ProductModel) {
        try {
            product.id = id
            console.log(product)
            console.log(product.image)
            product.image = (product.image as unknown as FileList)[0];
            console.log(product.image)
            const beProduct = await productService.updateProduct(product);
            notificationService.success("update")
            navigate(appConfig.productDetailsRoute + beProduct.id);
        }
        catch (err: any) {
            notificationService.error(err)
        }
    }

    const imageSrc = useImagePreview(imageFile)

    function handleFileChange(event: any) {
        const files = event.target.files;
        if (!files || !files.item(0)) return;
        setImageFile(files.item(0))
    }


    return (
        <div className="EditProduct">
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit(update)}>

                <label>Product Name :</label>
                <input type="text" {...register("name")} />

                <label>Product Price :</label>
                <input type="number" step="0.01" {...register("price")} />

                <label>Product Stock :</label>
                <input type="number" {...register("stock")} />

                <label>Product Image :</label>
                <input type="file" accept="images/*"  {...register("image")} onChange={handleFileChange} />

                {imageSrc ? <img src={imageSrc} alt="" /> : <img src={appConfig.productsUrl+ "images/" + feProduct?.imageName} alt="" /> }
                
                <button>Update</button>
            </form>
        </div>
    );
}

export default EditProduct;
