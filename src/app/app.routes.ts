import { Routes } from '@angular/router';
import { EmailsModule } from './modules/emails/emails.module';

export const routes: Routes = [
    { 
        path: 'emails', 
        loadChildren: () => import('./modules/emails/emails.module').then((m): typeof EmailsModule => m.EmailsModule) 
    }
];
