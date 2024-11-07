import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestroListComponent } from './restro-list/restro-list.component';
import { LoginComponent } from './login/login.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurant', component: RestroListComponent },
    {
        path: 'login',
        component: LoginComponent,  
    },
    {
        path: '',
        component: LoginComponent, 
    },
    { path: 'order/:id', component: OrderComponentComponent },
    { path: 'checkout', component: CheckoutComponent},
];
