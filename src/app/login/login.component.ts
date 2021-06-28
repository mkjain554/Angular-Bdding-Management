import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //typescripting of our variable scope and initilize them .
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

  //Depandency Injusction Performed
  constructor(private formBuilder: FormBuilder, private route: Router, private appService: AppService) { }

  ngOnInit(): void {
    //set the userdata as we are not using backend services. For database management I am using Localstorage to keep track of data.
    this.appService.setUserData(this.userData);
    localStorage.setItem("allUserData", JSON.stringify(this.userData));
    //check velidation for username and password field ,we can provide custom validation using custom directives.
    this.loginFormGroup = this.formBuilder.group({
      password: ["",
        [Validators.required],
      ],
      emailId: ["manish@gmail.com",
        [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ]
    })

  }

  //I am only maching the EmailId for now to authenticate the valid user.
  login() {
    this.appService.getUserData().subscribe((result: any) => {
      this.getUserData = result
    })
    const matchCred = this.getUserData.map((o: any) => {
      return o.Email;
    }).indexOf(this.loginFormGroup.controls.emailId.value);
    if (matchCred >= 0) {
      this.route.navigate(['home']);
      localStorage.setItem("UserDB", JSON.stringify(this.getUserData[matchCred]));
    } else {

      //I simplly use the scripting alert to show the message we can use material POPup to show the Alerts like I did while adding the bidding price.
      alert("Invalid User name or password");
    }
  }
}
