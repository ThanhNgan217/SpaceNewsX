import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
// import { NoWhitespaceValidator } from "../validators/no-whitespace.validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailAddress: new FormControl<string>(''),
    password: new FormControl<string>(''),

  });


  constructor(private fb: FormBuilder, private apiServide: ApiService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailAddress:[
        "",
        Validators.compose([
          Validators.required,
          Validators.email
          // Validators.pattern(/^[a-z]{6,32}$/i)
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required
          //Validators.minLength(6),
          // Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)
        ])
      ],

    });

    new FormControl("", Validators.required);
  }
  onSubmit(): void {
    let username = this.loginForm.get('emailAddress')?.value;
    let password = this.loginForm.get('password')?.value;
    // console.log(typeof username);
    // console.log(typeof password);

    this.apiServide.login(username, password).subscribe(()=>{
      // console.log('hello word')
    },
    // err => {
    //   console.log(err.message);
    // }, () => {
    //   console.log('completed');
    // }
    );
  }

  get emailAddress(){
    return this.loginForm.get('emailAddress');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
