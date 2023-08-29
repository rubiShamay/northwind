import { useEffect, useState } from "react";
import EmployeeModal from "../../../Models/EmployeeModal";
import EmployeesService from "../../../Service/EmployeesService";
import "./EmployeeList.css";
import useTitle from "../../../Utils/UseTitle";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import AddIcon from "../../../Assets/Images/plus-icon.svg"
import { NavLink } from "react-router-dom";
import notificationService from "../../../Service/NotifyService";
import appConfig from "../../../Utils/AppConfig";

function EmployeeList(): JSX.Element {

    useTitle("Northwind | Employees")
    const [feEmployee, setFeEmployee] = useState<EmployeeModal[]>([]);

    useEffect(() => {
        EmployeesService.getAllEmployees().
            then(beEmployee => setFeEmployee(beEmployee))
            .catch(err => notificationService.error(err.message))
    }, [])


    return (
        <div className="EmployeeList">
            <NavLink to={appConfig.addEmployeeRoute}><img className="addBtnI" src={AddIcon} /></NavLink>
            <h2>Our Employees</h2>
            {feEmployee.length === 0 ? <h2>There Nothing to show</h2> :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Address</th>
                            <th>B-Day</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feEmployee?.map((e => <EmployeeCard key={e.id} employee={e}/>))}
                    </tbody>
                </table>
            }

        </div>
    );
}

export default EmployeeList;
