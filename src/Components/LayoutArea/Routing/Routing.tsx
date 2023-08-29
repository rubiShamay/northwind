import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import Employees from "../../../Models/EmployeeModal";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import AddEmployee from "../../EmployeeArea/AddEmployee/AddEmployee";
import appConfig from "../../../Utils/AppConfig";
import EmployeeDetails from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
import EditEmployee from "../../EmployeeArea/EditEmployee/EditEmployee";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Home Route */}
                <Route path={appConfig.homeRoute} element={<Home />} />

                {/* About Route */}
                <Route path={appConfig.aboutRoute} element={<About />} />

                {/* ProductList Route */}
                <Route path={appConfig.productsRoute} element={<ProductList />} />

                {/* EmployeeList Route */}
                <Route path={appConfig.employeeRoute} element={<EmployeeList />} />

                {/* Product Details Route */}
                <Route path="/products/details/:prop" element={<ProductDetails />} />

                {/* Employee Details Route */}
                <Route path="/employee/details/:prop" element={<EmployeeDetails />} />

                {/* Edit Product Route */}
                <Route path="/products/edit/:prop" element={<EditProduct />} />

                {/* Edit employee Route */}
                <Route path="/employee/edit/:prop" element={<EditEmployee />} />

                {/* Add Product Route */}
                <Route path={appConfig.addProductsRoute} element={<AddProduct />} />

                {/* Add Product Route */}
                <Route path={appConfig.addEmployeeRoute} element={<AddEmployee />} />

                {/* Default Route */}
                <Route path="/" element={<Navigate to={appConfig.homeRoute} />} />

                {/* 404 Route */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default Routing;
