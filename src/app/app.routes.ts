import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'my-first-app', pathMatch: 'full'},
    {
        path: 'my-first-app',
        loadChildren:  () => 
            import('./first-app/first-app-routing.module')
                .then(m => m.FirstAppRoutingModule)
    },  
];
