import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ComStatusComponent } from './com-status/com-status.component';
import { LodgeComplaintComponent } from './lodge-complaint/lodge-complaint.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmpDashLayoutComponent } from './layouts/emp-dash-layout/emp-dash-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminDashLayoutComponent } from './layouts/admin-dash-layout/admin-dash-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ChosDashboardComponent } from './chos-dashboard/chos-dashboard.component';
import { ChosGrievancesComponent } from './chos-grievances/chos-grievances.component';
import { ChosProfileComponent } from './chos-profile/chos-profile.component';
import { ChosDashLayoutComponent } from './layouts/chos-dash-layout/chos-dash-layout.component';
import { PcDashboardComponent } from './pc-dashboard/pc-dashboard.component';
import { PcGrievancesComponent } from './pc-grievances/pc-grievances.component';
import { PcProfileComponent } from './pc-profile/pc-profile.component';
import { PcDashLayoutComponent } from './layouts/pc-dash-layout/pc-dash-layout.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { DealerGrievancesComponent } from './dealer-grievances/dealer-grievances.component';
import { DealerProfileComponent } from './dealer-profile/dealer-profile.component';
import { DealerDashLayoutComponent } from './layouts/dealer-dash-layout/dealer-dash-layout.component';
import { SaDashLayoutComponent } from './layouts/sa-dash-layout/sa-dash-layout.component';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';
import { SaUsersComponent } from './sa-users/sa-users.component';
import { SaProfileComponent } from './sa-profile/sa-profile.component';
import { SaAdminComponent } from './sa-admin/sa-admin.component';
import { LoginGuard } from './guards/login.guard';
import { EmployeeGuard } from './guards/employee.guard';
import { AdminGuard } from './guards/admin.guard';
import { ChosGuard } from './guards/chos.guard';
import { PcGuard } from './guards/pc.guard';
import { DealerGuard } from './guards/dealer.guard';
import { SaGuard } from './guards/sa.guard';
import { ActivegrievanceComponent } from './activegrievance/activegrievance.component';
import { ClosedgrievanceComponent } from './closedgrievance/closedgrievance.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { TestComponent } from './test/test.component';
import { EoDashLayoutComponent } from './layouts/eo-dash-layout/eo-dash-layout.component';
import { EoDashboardComponent } from './eo-dashboard/eo-dashboard.component';
import { EoProfileComponent } from './eo-profile/eo-profile.component';
import { EoGuard } from './guards/eo.guard';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'about', component: AboutUsComponent},
      { path: '', component: LandingPageComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
      { path: 'status', component: ComStatusComponent },
      { path: 'contact', component: ContactComponent},
      { path: 'faq', component: FaqComponent},
    ],
  },
  {
    path: '',
    component: EmpDashLayoutComponent,
    children: [
      { path: 'empdb', component: EmployeeDashboardComponent },
      { path: 'complaint', component: LodgeComplaintComponent },
      { path: 'empp', component: EmpprofileComponent },
    ],
    canActivate: [EmployeeGuard]
  },
  {
    path: '',
    component: AdminDashLayoutComponent,
    children: [
      {
        path: 'adashboard', component: AdminDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'aprofile', component: AdminProfileComponent },
    ],
    canActivate: [AdminGuard]
  },
  {
    path: '',
    component: ChosDashLayoutComponent,
    children: [
      {
        path: 'chosdashboard', component: ChosDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'chosprofile', component: ChosProfileComponent },
      { path: 'chosgrievances', component: ChosGrievancesComponent },
    ],
    canActivate: [ChosGuard]
  },
  {
    path: '',
    component: PcDashLayoutComponent,
    children: [
      {
        path: 'pcdashboard', component: PcDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'pcprofile', component: PcProfileComponent },
      { path: 'pcgrievances', component: PcGrievancesComponent },
    ],
    canActivate: [PcGuard]
  },
  {
    path: '',
    component: DealerDashLayoutComponent,
    children: [
      {
        path: 'ddashboard', component: DealerDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'dprofile', component: DealerProfileComponent },
      { path: 'dgrievances', component: DealerGrievancesComponent },
    ],
    canActivate: [DealerGuard]
  },
  {
    path: '',
    component: SaDashLayoutComponent,
    children: [
      {
        path: 'sadashboard', component: SaDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'saprofile', component: SaProfileComponent },
      { path: 'sausers', component: SaUsersComponent },
      { path: 'saadmin', component: SaAdminComponent },
    ],
    canActivate: [SaGuard]
  },
  {
    path: '',
    component: EoDashLayoutComponent,
    children: [
      {
        path: 'eodashboard', component: EoDashboardComponent, children: [
          { path: 'ag', component: ActivegrievanceComponent },
          { path: 'cg', component: ClosedgrievanceComponent },
        ]
      },
      { path: 'eoprofile', component: EoProfileComponent },
    ],
    canActivate: [EoGuard]
  },
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
