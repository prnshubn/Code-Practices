import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styles: [],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) {}
  public employees: any[] = [];
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
