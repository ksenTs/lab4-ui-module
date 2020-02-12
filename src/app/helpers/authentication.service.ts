import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_CONSTANTS} from "../constants";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {UserDto} from "../dto/user-dto";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private currentUserSubject: BehaviorSubject<UserDto>;
	private readonly storageUserKey = 'CURRENT_USER';

	constructor(private httpClient: HttpClient) {

	}

	public get currentUser(): UserDto {
		return this.currentUserSubject.value;
	}

	public login(username: string, password: string): Observable<UserDto> {
		return this.httpClient.post<UserDto>(URL_CONSTANTS.LOGIN, {username, password})
			.pipe(map(user => {
				localStorage.setItem(this.storageUserKey, JSON.stringify(user));
				this.currentUserSubject.next(user);
				return user;
			}))

	}

	public logout(): void {
		localStorage.removeItem(this.storageUserKey);
		this.currentUserSubject.next(null);
	}
}
