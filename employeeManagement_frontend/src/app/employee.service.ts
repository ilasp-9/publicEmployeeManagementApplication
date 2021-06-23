import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})


export class EmployeeService{
    private serverApiUrl= environment.apiBaseUrl;
   
    constructor(private http : HttpClient){}

    public getEmployees() : Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.serverApiUrl}/employee/all`);
    }

    public addEmployee(employee: Employee) : Observable<Employee> {
        return this.http.post<Employee>(`${this.serverApiUrl}/employee/add`,employee);    
    }

    public updateEmployee(employee: Employee) : Observable<Employee> {
        return this.http.put<Employee>(`${this.serverApiUrl}/employee/update`,employee);    
    }

    public deleteEmployee(employeeID: number) : Observable<void> {
        return this.http.delete<void>(`${this.serverApiUrl}/employee/delete/${employeeID}`);    
    }

}