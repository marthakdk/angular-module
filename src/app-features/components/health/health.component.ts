import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent {
employees:{};
  constructor() {  }
  getEmployees(){
     // this.employeeService.getEmployees().subscribe(data => this.employees = data)
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
