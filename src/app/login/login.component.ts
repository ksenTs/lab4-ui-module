import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from "../helpers/authentication.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authenticationService: AuthenticationService,
	            private router: Router) {
	}

	public loginForm: FormGroup;
	public loginFailed: boolean;

	ngOnInit(): void {
		this.createForm();
	}

	get form() {
		return this.loginForm;
	}

	get username() {
		return this.form.controls.username;
	}

	get password() {
		return this.form.controls.password;
	}

	public login(): void {
		if (this.form.invalid) {
			return;
		}


		this.authenticationService.login(this.username.value, this.password.value).subscribe(data =>
		{
			this.loginFailed = false;
			this.router.navigate(['/home']);
		}, error => {
			this.loginFailed = true;
		})


	}

	private createForm(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}



}
