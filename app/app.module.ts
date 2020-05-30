import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
declare var $: any;
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { AdminRequestDetailComponent } from '../app/request-detail-admn/request-detail.component';
import { ReqWindowComponent } from './req-window/req-window.component';
import { GlobalService } from './global.service';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs/observable/from';
import { MenuComponent } from './menu/menu.component';
import { SpacemapComponent1 } from './spacemap.1/spacemap.component';
import { DataService } from './dataservice';

import { RouteGuardService } from './route-guard.service';
import { UserLogged } from './loggeduser';
import { SearchService } from './search-name.service';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocationSelectionComponent } from './location-selection/location-selection.component';
import { SearchComponent } from './search/search.component';
import { FloorMapService } from './floormapDetails/floorMapDetails.service';
import { AdminSwapRequestDetailsComponent } from './admin-swap-request-details/admin-swap-request-details.component';
import { ManagerSwapRequestDetailsComponent } from './manager-swap-request-details/manager-swap-request-details.component';
import { SwapReqComponent } from './swap-req/swap-req.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents, PageNotFoundComponent, RequestDetailComponent,
     ReqWindowComponent, LoginComponent, HeaderComponent, FooterComponent, MenuComponent,
    SpacemapComponent1, AdminRequestDetailComponent,
     EmpdetailsComponent,LocationSelectionComponent, SearchComponent, 
     AdminSwapRequestDetailsComponent, ManagerSwapRequestDetailsComponent, SwapReqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    NgbModule.forRoot()



  ],
  providers: [GlobalService, DataService, LoginComponent, RouteGuardService, UserLogged,SearchService,FloorMapService,NgbModule,NgbActiveModal],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
