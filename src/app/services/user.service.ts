import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../modeles/user';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    readonly TOKEN = 'X-EventCalendar-Token';

    constructor(private httpClient: HttpClient) { }

    isAuth(): boolean {
        return localStorage.getItem(this.TOKEN) !== null;
    }

    getMe(): Observable<User> {
        return this.httpClient.get('users/me')
            .map(response => <User> response);
    }
}