import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class UserProfileComponent {
  auth = inject(AuthService)
  user: any = null;
  ngOnInit() {
    this.auth.user$.subscribe(userData => { this.user = userData; });
  }
  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: 'http://localhost:4200/auth/login' } })
  }
}