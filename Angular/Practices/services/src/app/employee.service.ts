import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'Priyanshu', age: 23 },
      { id: 2, name: 'Srija', age: 22 },
      { id: 3, name: 'Sayan', age: 22 },
      { id: 4, name: 'Bratati', age: 22 },
      { id: 5, name: 'Snehasish', age: 22 },
    ];
  }
}
