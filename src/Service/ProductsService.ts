import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

class ProductService {
    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get(appConfig.productsUrl);
        const products = response.data;
        return products;
    }

    public async getOneProduct(prop: number): Promise<ProductModel> {
        const response = await axios.get(appConfig.productsUrl + prop);
        const product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {
        const options = { headers: { "Content-Type": "multipart/form-data" } }
        const response = await axios.post(appConfig.productsUrl, product, options);
        const beProduct = response.data;
        return beProduct
    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {
        const options = { headers: { "Content-Type": "multipart/form-data" } }
        const response = await axios.put(appConfig.productsUrl + product.id, product, options);
        const updatedProduct = response.data;
        return updatedProduct
    }

    public async deleteProduct(prodId: number): Promise<void> {
        const response = axios.delete(appConfig.productsUrl + prodId)
    }

}

const productService = new ProductService()

export default productService;