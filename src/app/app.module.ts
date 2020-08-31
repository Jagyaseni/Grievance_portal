import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LodgeComplaintComponent } from './lodge-complaint/lodge-complaint.component';
import { ComStatusComponent } from './com-status/com-status.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EmpDashLayoutComponent } from './layouts/emp-dash-layout/emp-dash-layout.component';
import { AdminDashLayoutComponent } from './layouts/admin-dash-layout/admin-dash-layout.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmpdheadComponent } from './empdhead/empdhead.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmpdfooterComponent } from './empdfooter/empdfooter.component';
import { DealeraddressComponent } from './dealeraddress/dealeraddress.component';
import { ChosDashboardComponent } from './chos-dashboard/chos-dashboard.component';
import { ChosGrievancesComponent } from './chos-grievances/chos-grievances.component';
import { ChosProfileComponent } from './chos-profile/chos-profile.component';
import { ChosSidebarComponent } from './chos-sidebar/chos-sidebar.component';
import { ChosDashLayoutComponent } from './layouts/chos-dash-layout/chos-dash-layout.component';
import { PcDashboardComponent } from './pc-dashboard/pc-dashboard.component';
import { PcGrievancesComponent } from './pc-grievances/pc-grievances.component';
import { PcProfileComponent } from './pc-profile/pc-profile.component';
import { PcSidebarComponent } from './pc-sidebar/pc-sidebar.component';
import { PcDashLayoutComponent } from './layouts/pc-dash-layout/pc-dash-layout.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { DealerGrievancesComponent } from './dealer-grievances/dealer-grievances.component';
import { DealerProfileComponent } from './dealer-profile/dealer-profile.component';
import { DealerSidebarComponent } from './dealer-sidebar/dealer-sidebar.component';
import { DealerDashLayoutComponent } from './layouts/dealer-dash-layout/dealer-dash-layout.component';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';
import { SaUsersComponent } from './sa-users/sa-users.component';
import { SaProfileComponent } from './sa-profile/sa-profile.component';
import { SaSidebarComponent } from './sa-sidebar/sa-sidebar.component';
import { SaDashLayoutComponent } from './layouts/sa-dash-layout/sa-dash-layout.component';
import { SaAdminComponent } from './sa-admin/sa-admin.component';
import { UserService } from './services/user.service';
import { SaUserlistComponent } from './sa-userlist/sa-userlist.component';
import { EmpSideComponent } from './emp-side/emp-side.component';
import { ActivegrievanceComponent } from './activegrievance/activegrievance.component';
import { GrievanceService } from './services/grievance.service';
import { ClosedgrievanceComponent } from './closedgrievance/closedgrievance.component';
import { TestComponent } from './test/test.component';
import { EoDashboardComponent } from './eo-dashboard/eo-dashboard.component';
import { EoGrievancesComponent } from './eo-grievances/eo-grievances.component';
import { EoProfileComponent } from './eo-profile/eo-profile.component';
import { EoSidebarComponent } from './eo-sidebar/eo-sidebar.component';
import { EoDashLayoutComponent } from './layouts/eo-dash-layout/eo-dash-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutUsComponent,
    FaqComponent,
    ContactComponent,
    LoginComponent,
    LodgeComplaintComponent,
    ComStatusComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    MainLayoutComponent,
    EmpDashLayoutComponent,
    AdminDashLayoutComponent,
    EmpprofileComponent,
    EmpdheadComponent,
    AdminSidebarComponent,
    AdminProfileComponent,
    EmpdfooterComponent,
    DealeraddressComponent,
    ChosDashboardComponent,
    ChosGrievancesComponent,
    ChosProfileComponent,
    ChosSidebarComponent,
    ChosDashLayoutComponent,
    PcDashboardComponent,
    PcGrievancesComponent,
    PcProfileComponent,
    PcSidebarComponent,
    PcDashLayoutComponent,
    DealerDashboardComponent,
    DealerGrievancesComponent,
    DealerProfileComponent,
    DealerSidebarComponent,
    DealerDashLayoutComponent,
    SaDashboardComponent,
    SaUsersComponent,
    SaProfileComponent,
    SaSidebarComponent,
    SaDashLayoutComponent,
    SaAdminComponent,
    SaUserlistComponent,
    EmpSideComponent,
    ActivegrievanceComponent,
    ClosedgrievanceComponent,
    TestComponent,
    EoDashboardComponent,
    EoGrievancesComponent,
    EoProfileComponent,
    EoSidebarComponent,
    EoDashLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UserService,GrievanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
