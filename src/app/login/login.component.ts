import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from '../service/app.service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: any = FormGroup;
  emailId: string = '';
  password: string = '';
  pattern: any = '';
  getUserData: Array<any> = [];
  userData: Array<any> = [{
    "Id": 1,
    "Name": "Manish Jain",
    "Email": "manish@gmail.com",
    "AccountBalance": 5000
  }, {
    "Id": 2,
    "Name": "Ashish",
    "Email": "ashish@gmail.com",
    "AccountBalance": 7000
  }, {
    "Id": 3,
    "Name": "Anil",
    "Email": "anil@gmail.com",
    "AccountBalance": 6000
  }];

  passRequirements = {
    passwordMinLowerCase: 1,
    passwordMinNumber: 1,
    passwordMinSymbol: 1,
    passwordMinUpperCase: 1,
    passwordMinCharacters: 8
  };
  constructor(private formBuilder: FormBuilder, private route: Router, private appService : AppService) { }

  ngOnInit(): void {
    this.appService.setUserData(this.userData);
    localStorage.setItem("allUserData",JSON.stringify(this.userData));
    this.pattern = [
      `(?=([^a-z]*[a-z])\{${this.passRequirements.passwordMinLowerCase},\})`,
      `(?=([^A-Z]*[A-Z])\{${this.passRequirements.passwordMinUpperCase},\})`,
      `(?=([^0-9]*[0-9])\{${this.passRequirements.passwordMinNumber},\})`,
      `(?=(\.\*[\$\@\$\!\%\*\?\&])\{${this.passRequirements.passwordMinSymbol
      },\})`,
      `[A-Za-z\\d\$\@\$\!\%\*\?\&\.]{${this.passRequirements.passwordMinCharacters
      },}`
    ]
      .map(item => item.toString())
      .join("");
    this.loginFormGroup = this.formBuilder.group({
      password: ["",
        [Validators.required],
      ],
      emailId: ["manish@gmail.com",
        [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ]
    })

  }

  login() {
    this.appService.getUserData().subscribe((result:any)=>{
      this.getUserData = result
    })
    const matchCred = this.getUserData.map((o: any) => {
      return o.Email;
    }).indexOf(this.loginFormGroup.controls.emailId.value);
    if (matchCred >= 0) {
      this.route.navigate(['home']);
      localStorage.setItem("UserDB", JSON.stringify(this.getUserData[matchCred]));
  }else {
      alert("Invalid User name or password");
    }
  }
}
