import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environment";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("google-button"),
      { theme: "outline", size: "large", width: "100%" }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  async handleCredentialResponse(response: any) {
    if(!response || !response.credential) {
      return;
    }

    const loginCredentials: LoginModel = {loginToken: response.credential};
    this.userService.login(loginCredentials).subscribe(user => this.router.navigate([""]));
  }

}
