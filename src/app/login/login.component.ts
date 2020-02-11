import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../dto/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  public loginForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  get form() {
    return this.loginForm;
  }

  public login(): void {
    if (this.form.invalid) {
      return;
    }

  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  private createLoginDto(): LoginDto {
    return new LoginDto(this.form.controls.username.value, this.form.controls.password.value);
  }


}
