import { useForm } from "react-hook-form";
import "./EditEmployee.css";
import EmployeesModal from "../../../Models/EmployeeModal";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import employeeService from "../../../Service/EmployeesService";
import notificationService from "../../../Service/NotifyService";
import appConfig from "../../../Utils/AppConfig";
import useImagePreview from "../../../Utils/UseImagePreview";

function EditEmployee(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<EmployeesModal>();

    const param = useParams();
    const id = +param.prop;

    const navigate = useNavigate();

    const [feEmployee, setFeEmployee] = useState<EmployeesModal>();

    const [imageFile, setImageFile] = useState<File | null>()


    useEffect(() => {
        employeeService.getOneEmployees(id)
            .then(employee => {
                setValue("firstName", employee.firstName)
                setValue("lastName", employee.lastName)
                setValue("title", employee.title)
                setValue("country", employee.country)
                setValue("city", employee.city)
                setValue("birthDate", employee.birthDate)
                setValue("imageName", employee.imageName)
                setFeEmployee(employee)
            })
            .catch(err => notificationService.error(err))
    }, [])

    async function updateEmployee(employee: EmployeesModal) {
        try {
            employee.id = id
            console.log(employee)
            console.log(employee.image)
            employee.image = (employee.image as unknown as FileList)[0];
            console.log(employee.image)
            const beEmployee = await employeeService.updateEmployee(employee);
            notificationService.success("update")
            navigate(appConfig.productDetailsRoute + beEmployee.id);
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
        <div className="EditEmployee">
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit(updateEmployee)}>

                <label>First Name :</label>
                <input type="text" {...register("firstName")} />

                <label>Last Price :</label>
                <input type="text" step="0.01" {...register("lastName")} />

                <label>Title :</label>
                <input type="text" {...register("title")} />

                <label>Country :</label>
                <input type="text" {...register("country")} />

                <label>City :</label>
                <input type="text" {...register("city")} />

                <label>Birth-Day :</label>
                <input type="date" {...register("birthDate")} />

                <label>Employee Image :</label>
                <input type="file" accept="images/*"  {...register("imageName")} onChange={handleFileChange} />

                {imageSrc ? <img src={imageSrc} /> : <img src={appConfig.employeeUrl + "images/" + feEmployee?.imageName} alt="" />}

                <button>Update</button>

            </form>
        </div>
    );
}

export default EditEmployee;
