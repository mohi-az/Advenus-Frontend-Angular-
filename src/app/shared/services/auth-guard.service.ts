import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
    
    const auth = inject(AuthService);
    const router = inject(Router);
    const isAuthenticated = await firstValueFrom(auth.isAuthenticated$);
    if (!isAuthenticated) {
        await router.navigate(['/auth/login']);
        return false;
    }
    return true;
};