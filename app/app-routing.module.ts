import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacemapComponent } from './spacemap/spacemap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { SpacemapComponent1 } from './spacemap.1/spacemap.component';
import { AdminRequestDetailComponent } from './request-detail-admn/request-detail.component';
import { RouteGuardService } from './route-guard.service';
import { ManagerSwapRequestDetailsComponent } from './manager-swap-request-details/manager-swap-request-details.component';
import { AdminSwapRequestDetailsComponent } from './admin-swap-request-details/admin-swap-request-details.component';

const routes: Routes = [
    { path: '', component:  LoginComponent },
    { path: 'login', component: LoginComponent },
    // { path:'requests', component: RequestComponent},
    { path: 'manager/spacemap', component: SpacemapComponent, canActivate: [RouteGuardService] },
    { path: 'manager/requests', component: AdminRequestDetailComponent, canActivate: [RouteGuardService] },
    { path: 'admin/spacemap', component: SpacemapComponent1, canActivate: [RouteGuardService] },
    { path: 'admin/allrequests', component: RequestDetailComponent, canActivate: [RouteGuardService] },
    { path: 'manager/swapRequests', component: ManagerSwapRequestDetailsComponent, canActivate: [RouteGuardService] },
    { path: 'admin/swapRequests', component: AdminSwapRequestDetailsComponent, canActivate: [RouteGuardService] },
    { path: '**', component: PageNotFoundComponent, canActivate: [RouteGuardService] }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SpacemapComponent, RequestComponent, PageNotFoundComponent, RequestDetailComponent, AdminRequestDetailComponent,AdminSwapRequestDetailsComponent,ManagerSwapRequestDetailsComponent]