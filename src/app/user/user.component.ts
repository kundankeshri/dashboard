import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : any ;
  constructor() {
  this.users = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
  }

  ngOnInit() {
  }

}
