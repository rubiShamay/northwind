import axios from "axios";
import EmployeeModel from "../Models/EmployeeModal";
import appConfig from "../Utils/AppConfig";

class EmployeesService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get(appConfig.employeeUrl);
        const employees = response.data;
        return employees;
    }

    public async getOneEmployees(prop: number): Promise<EmployeeModel> {
        const response = await axios.get(appConfig.employeeUrl + prop);
        const employees = response.data;
        return employees;
    }

    public async AddEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
        const option = { headers: { "Content-Type": "multipart/form-data" } }
        const response = await axios.post(appConfig.employeeUrl, employee, option);
        const beEmployee = response.data;
        return beEmployee
    }

    public async updateEmployee(employee:EmployeeModel):Promise<EmployeeModel>{
        const option = { headers : {"Content-Type" : "multipart/from-data"}}
        const response = await axios.put(appConfig.employeeUrl + employee.id , employee , option)
        const updateEmployee = response.data;
        return updateEmployee
    }

    public async deleteEmployee(prodId: number): Promise<void> {
        const response = axios.delete(appConfig.employeeUrl + prodId)
    }

}

const employeeService = new EmployeesService()

export default employeeService;