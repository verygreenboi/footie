import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/+state/app-config/app-config.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginGroup: FormGroup;

    constructor(fb: FormBuilder, private store: Store) {
        this.loginGroup = fb.group({
            email: [undefined, [Validators.email]]
        });
    }

    ngOnInit(): void {
    }

    login(): void {
        const { email } = this.loginGroup.value;
        if (!email) {
            return;
        }
        this.store.dispatch(new Login(email));
    }

}
