import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loginReq } from '../models/userModel/loginReq';
import { ApisUtilsService } from '../utils/apis-utils.service';
import { AppConstants } from '../utils/app-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm:FormGroup;
  email: string;
  password: string;
  constructor(private ApisUtils: ApisUtilsService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }

  initform():void
  {
this.loginForm=this.formBuilder.group({
  email:['',[Validators.required]],password:['',[Validators.required]]
});
  }

  login(): void {
    const login: loginReq = new loginReq();
    const formControls= this.loginForm.controls;
    login.Email = formControls.email.value;
    login.Password =formControls.password.value;
    console.log(login);

    this.ApisUtils.loginUser(login).subscribe(response => {
      if (response.status = AppConstants.SUCCESS_CODE) {
        console.log(response.data);
      }
    })

  }

}
