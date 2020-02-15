import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationService } from './application.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from "./helpers/auth-guard.service";
import {SliderModule} from 'primeng/slider';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import { CanvasComponent } from './canvas/canvas.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
	{ path: 'login', component: LoginComponent, pathMatch: 'full'},

	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		CanvasComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		SliderModule,
		DropdownModule,
		InputTextModule,
    ButtonModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [ApplicationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
