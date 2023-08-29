class AppConfig {
    // initial Routes
    public readonly homeRoute: string = "/home/";
    public readonly aboutRoute: string = "/about/";
    public readonly productsRoute: string = "/products/";
    public readonly employeeRoute: string = "/employee/";

    // employee Routes
    public readonly addEmployeeRoute:string = "/employee/new/";
    public readonly employeeDetailsRoute:string = "/employee/details/";
    
    // products Routes
    public readonly addProductsRoute: string = "/products/new/";
    public readonly productDetailsRoute:string = "/products/details/";

    // API / URL
    public readonly productsUrl: string = "http://localhost:3030/api/products/";
    public readonly employeeUrl: string = "http://localhost:3030/api/employees/";
}

// Singleton
const appConfig = new AppConfig()

export default appConfig;