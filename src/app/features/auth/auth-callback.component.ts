import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-callback',
  template: `<div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <div class="text-center bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Processing Login...</h1>
      <p class="text-gray-600 mb-6">Please wait while we verify your credentials.</p>
      <div class="flex justify-center">
          <span class="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
  </div>
</div>
`,
})
export class AuthCallbackComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    
   setTimeout(() => {
    this.auth.handleRedirectCallback().subscribe({
      next: () => {
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        console.error('Error handling redirect callback', err);
        this.router.navigate(['/']);
      },
    });
   }, 4000);

  }
}