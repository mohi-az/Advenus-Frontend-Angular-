import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-login',
    standalone: true,
    template: `
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
    <div class="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Admin Pannel</h1>
        <p class="text-gray-600 mb-6">Click the button below to sign in with Auth0</p>
        
        <button 
            class="btn btn-success text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
            (click)="login()">
            Login with Auth0
        </button>
        <div class="flex flex-col pt-10"><span class="font-bold">Account:</span>
       <span>  hr&#64;ottonova.de</span>
       <span>  ott0nov&#64;</span>
        </div>
    </div>
</div>
  `,
})
export class LoginComponent {
    auth = inject(AuthService);

    login() {
        this.auth.loginWithRedirect()
    }
}
