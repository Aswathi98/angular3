import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from "../login/login";
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../dataservice';
import { UserLogged } from '../loggeduser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  isUserLoggedIn() {
    let user;

    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
      this.userlogged.user_logged.next(user['name']);
    }

    //this.userlogged.id_logged.next(user1['empId']);

   
    return user && user !== null;
  }
  Login: login = { employeeId: "", password: "" }
  data: login = {
    employeeId: "",
    password: ""
  };

  // constructor(private router: Router){

  // }
  err: string;


  constructor(private http: HttpClient, private router: Router, private _dataservice: DataService, private userlogged: UserLogged) { }
  ngOnInit() {

  }

  onSubmit(form: NgForm) {

    this.Login = { employeeId: form.value.login, password: form.value.password }

    

    this.http.post("http://localhost:8085/login", this.Login).subscribe(
      (res: login) => {
        // console.log(res);
        this.data = res;
        let user = {
          'name': this.data.fName,
          'empId': this.data.employeeId,
          'roleName':this.data.roleName,
          'floorId':this.data.floorId
        }


        localStorage.setItem("user", JSON.stringify(user));
        this._dataservice.id_role.next(user.floorId);
        

        let user_id = this._dataservice.id.next(this.data.employeeId);
        // console.log("id=" + this.data.employeeId);

        if (this.data.roleName == "Admin") {
          this.router.navigate(['/admin/spacemap'])
        }
        else if (this.data.roleName == "Manager") {


          this.router.navigate(['/manager/spacemap'])
        }

        

      },
      err => {
        console.log(err);
        this.err = err.error.errorMessage;
        console.log(this.err);
        
      }
    );
  }
}

