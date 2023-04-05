import { Component, OnInit } from "@angular/core";
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
    emailAddress: new FormControl(''),
    password: new FormControl(''),

  });



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailAddress: [
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
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)
        ])
      ],

    });

    new FormControl("", Validators.required);
  }
  onSubmit(): void {
    console.log(this.loginForm.get('emailAddress'));
  }

  get emailAddress(){
    return this.loginForm.get('emailAddress');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
