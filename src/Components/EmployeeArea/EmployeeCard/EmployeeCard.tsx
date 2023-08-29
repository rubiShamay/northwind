import { NavLink } from "react-router-dom";
import EmployeeModal from "../../../Models/EmployeeModal";
import "./EmployeeCard.css";
import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";


type EmployeeProps  ={
    employee :EmployeeModal
}
function EmployeeCard(props:EmployeeProps): JSX.Element {



    return (
        // <div className="EmployeeCard">
            <tr key={props.employee.id} className="EmployeeCard">
                <td>{props.employee.firstName} , {props.employee.lastName}</td>
                <td>{props.employee.title}</td>
                <td>{props.employee.country} , {props.employee.city}</td>
                <td>{props.employee.birthDate}</td>
                <td>
                    <NavLink to={"/employee/details/" + props.employee.id}>
                    <img src={"http://localhost:3030/api/employees/images/" + props.employee.imageName} />
                    </NavLink>
                </td>
            </tr>
        // </div>
    );
}

export default EmployeeCard;
