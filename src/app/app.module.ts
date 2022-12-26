import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {LeftSideBarContentComponent} from './common/left-side-bar-content/left-side-bar-content.component';
import { RightSideBarContantComponent } from './common/right-side-bar-contant/right-side-bar-contant.component';
import { ImportantApprovalsComponent } from './important-approvals/important-approvals.component';

import { ApprovalsComponent } from './approvals/approvals.component';

import { VipMessagesComponent } from './AboutUs/vip-messages/vip-messages.component';
import { GovernmentNotificationComponent } from './AboutUs/government-notification/government-notification.component';
import { CobseComponent } from './AboutUs/cobse/cobse.component'
import { HeadOfDepartmentComponent } from './head-of-department/head-of-department.component';
import { HomeComponent } from './home/home.component';
import { BoardProfileComponent } from './AboutUs/board-profile/board-profile.component';
import { ChairmanMessageComponent } from './AboutUs/chairman-message/chairman-message.component';
import { BoardVisionComponent } from './AboutUs/board-vision/board-vision.component';
import { ImportantApporvalsComponent } from './AboutUs/important-apporvals/important-apporvals.component';
import { OnDemandExamComponent } from './on-demand-exam/on-demand-exam.component';
import { DonationComponent } from './donation/donation.component';
import { AcademicBranchComponent } from './branch/academic-branch/academic-branch.component';
import { AccountingBranchComponent } from './branch/accounting-branch/accounting-branch.component';
import { AdministrationUnitComponent } from './branch/administration-unit/administration-unit.component';
import { AffiliationBranchComponent } from './branch/affiliation-branch/affiliation-branch.component';
import { ComputerCellComponent } from './branch/computer-cell/computer-cell.component';
import { ExaminationBranchComponent } from './branch/examination-branch/examination-branch.component';
import { LegalCellComponent } from './branch/legal-cell/legal-cell.component';
import { MediaUnitComponent } from './branch/media-unit/media-unit.component';
import { MinorityCellComponent } from './branch/minority-cell/minority-cell.component';
import { PrintingBranchComponent } from './branch/printing-branch/printing-branch.component';
import { VerificationBranchComponent } from './branch/verification-branch/verification-branch.component';
import { VocationalEducationComponent } from './branch/vocational-education/vocational-education.component';
import { StudyCentresComponent } from './study-centres/study-centres.component';
import { HeadOfficeComponent } from './head-office/head-office.component';
import { PutquaryComponent } from './putquary/putquary.component';
import { SecondaryCourseComponent } from './secondary-course/secondary-course.component';
import { SeinorSecondaryCourseComponent } from './seinor-secondary-course/seinor-secondary-course.component';
import { AdmitcardComponent } from './downloads/admitcard/admitcard.component';
import { FormsComponent } from './downloads/forms/forms.component';
import { RegistrationCardComponent } from './downloads/registration-card/registration-card.component';
import { SamplePaperComponent } from './downloads/sample-paper/sample-paper.component';
import { SyllabusComponent } from './downloads/syllabus/syllabus.component';
import { TextBookComponent } from './downloads/text-book/text-book.component';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { PropectusComponent } from './propectus/propectus.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideBarContentComponent,
    RightSideBarContantComponent,
    ImportantApprovalsComponent,
    HeadOfDepartmentComponent,
    HomeComponent,
    ApprovalsComponent,
    VipMessagesComponent,
    GovernmentNotificationComponent,
    CobseComponent,
    BoardProfileComponent,
    ChairmanMessageComponent,
    BoardVisionComponent,
    ImportantApporvalsComponent,
    OnDemandExamComponent,
    DonationComponent,
    AcademicBranchComponent,
    AccountingBranchComponent,
    AdministrationUnitComponent,
    AffiliationBranchComponent,
    ComputerCellComponent,
    ExaminationBranchComponent,
    LegalCellComponent,
    MediaUnitComponent,
    MinorityCellComponent,
    PrintingBranchComponent,
    VerificationBranchComponent,
    VocationalEducationComponent,
    StudyCentresComponent,
    HeadOfficeComponent,
    PutquaryComponent,
    SecondaryCourseComponent,
    SeinorSecondaryCourseComponent,
    AdmitcardComponent,
    FormsComponent,
    RegistrationCardComponent,
    SamplePaperComponent,
    SyllabusComponent,
    TextBookComponent,
    DatesheetComponent,
    PropectusComponent




  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
