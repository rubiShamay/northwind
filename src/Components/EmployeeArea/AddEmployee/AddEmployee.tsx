import { useForm } from "react-hook-form";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useImagePreview from "../../../Utils/UseImagePreview";
import EmployeesModal from "../../../Models/EmployeeModal";
import employeeService from "../../../Service/EmployeesService";
import notificationService from "../../../Service/NotifyService";
import appConfig from "../../../Utils/AppConfig";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit } = useForm<EmployeesModal>();

    const navigate = useNavigate();

    const [imageFile, setImageFile] = useState<File | null>()


    function handleFileChange(event: any) {
        const files = event.target.files;
        if (!files || !files.item(0)) return;
        setImageFile(files.item(0))
    }

    const imageSrc = useImagePreview(imageFile)

    async function sendEmployee(employee: EmployeesModal) {
        try {
            employee.image = (employee.image as unknown as FileList)[0]
            const beEmployee = await employeeService.AddEmployee(employee)
            notificationService.success(`Employee has been added`)
            navigate(appConfig.employeeDetailsRoute + beEmployee.id)
        }
        catch (err: any) {
            notificationService.error(err.message)
        }
    }

    return (
        <div className="AddEmployee">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit(sendEmployee)}>
                <label>First Name</label>
                <input type="text" {...register("firstName")} />

                <label>Last Name</label>
                <input type="text" {...register("lastName")} />

                <label>Title</label>
                <input type="text" {...register("title")} />

                <label>Country</label>
                <input type="text" {...register("country")} />

                <label>City</label>
                <input type="text" {...register("city")} />

                <label>B-Day</label>
                <input type="date" {...register("birthDate")} />
                <div className="areaImage">
                    <label>Image</label>
                    <input type="file" accept="images/*"  {...register("image")} onChange={handleFileChange} />
                    {imageSrc ? <img src={imageSrc} /> : <></>}
                </div>
                <button>Add</button>

            </form>
        </div>
    );
}

export default AddEmployee;
