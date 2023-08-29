import { NavLink } from "react-router-dom"
import "./Main.css"
import appConfig from "../../../Utils/AppConfig"
function Main():JSX.Element{
    return(
        <div className="TagsMain">
            <NavLink to={appConfig.homeRoute}>Home</NavLink>
            <NavLink to={appConfig.productsRoute}>Products</NavLink>
            <NavLink to={appConfig.employeeRoute}>Employee</NavLink>
            <NavLink to={appConfig.aboutRoute}>About</NavLink>            
        </div>
    )
}
export default Main