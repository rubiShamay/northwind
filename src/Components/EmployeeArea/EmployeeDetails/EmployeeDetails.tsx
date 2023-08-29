import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useTitle from "../../../Utils/UseTitle";
import "./EmployeeDetails.css";
import Employees from "../../../Models/EmployeeModal";
import EmployeesModal from "../../../Models/EmployeeModal";
import employeeService from "../../../Service/EmployeesService";
import notificationService from "../../../Service/NotifyService";
import appConfig from "../../../Utils/AppConfig";

function EmployeeDetails(): JSX.Element {

    useTitle("Notrhwind | Employee Details");

    const navigate = useNavigate();

    const param = useParams();
    const prodId = +param.prop;

    const [feEmployee, setFeEmployee] = useState<EmployeesModal>();

    useEffect(() => {
        employeeService.getOneEmployees(prodId)
            .then(beEmployee => setFeEmployee(beEmployee))
            .catch(err => notificationService.error(err.message))
    }, [])

    async function DeleteEmployee() {
        try {
            const ok = window.confirm(`Are You Sure ?`)
            if (!ok) return
            await employeeService.deleteEmployee(prodId)
            notificationService.error(`Employee ${prodId} is Delete`)
            navigate(appConfig.employeeRoute)
        } catch (error: any) {
            notificationService.error(error.message)
        }

    }
    return (
        <div className="EmployeeDetails">
            <div className="divBtn">
                <button><NavLink to={appConfig.employeeRoute}>Go Back ..</NavLink></button>
                <button><NavLink to={`/employee/edit/ ${prodId}`}>Update</NavLink></button>
                <button><NavLink to="#" onClick={DeleteEmployee}>Delete</NavLink></button>
            </div>
            <div>
                <div className="detailsEmployeeTitles">
                    <h3>Full Name :{feEmployee?.firstName + ' ' + feEmployee?.lastName}</h3>
                    <span>|</span>
                    <h3>Title :{feEmployee?.title}</h3>
                    <span>|</span>
                    <h3>Address :{feEmployee?.country + ' ' + feEmployee?.city}</h3>
                </div>
                <img className="detailsEmployeeImage" src={appConfig.employeeUrl + "images/" + feEmployee?.imageName} alt="" />
            </div>
        </div>
    );
}

export default EmployeeDetails;
