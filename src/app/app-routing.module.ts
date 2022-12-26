import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardProfileComponent } from './AboutUs/board-profile/board-profile.component';
import { BoardVisionComponent } from './AboutUs/board-vision/board-vision.component';
import { ChairmanMessageComponent } from './AboutUs/chairman-message/chairman-message.component';
import { CobseComponent } from './AboutUs/cobse/cobse.component';
import { GovernmentNotificationComponent } from './AboutUs/government-notification/government-notification.component';
import { ImportantApporvalsComponent } from './AboutUs/important-apporvals/important-apporvals.component';
import { VipMessagesComponent } from './AboutUs/vip-messages/vip-messages.component';
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
import { DatesheetComponent } from './datesheet/datesheet.component';
import { DonationComponent } from './donation/donation.component';
import { AdmitcardComponent } from './downloads/admitcard/admitcard.component';
import { FormsComponent } from './downloads/forms/forms.component';
import { RegistrationCardComponent } from './downloads/registration-card/registration-card.component';
import { SamplePaperComponent } from './downloads/sample-paper/sample-paper.component';
import { SyllabusComponent } from './downloads/syllabus/syllabus.component';
import { TextBookComponent } from './downloads/text-book/text-book.component';
import { HeadOfficeComponent } from './head-office/head-office.component';
import { HomeComponent } from './home/home.component';
import { ImportantApprovalsComponent } from './important-approvals/important-approvals.component';
import { OnDemandExamComponent } from './on-demand-exam/on-demand-exam.component';
import { PropectusComponent } from './propectus/propectus.component';
import { PutquaryComponent } from './putquary/putquary.component';
import { SecondaryCourseComponent } from './secondary-course/secondary-course.component';
import { SeinorSecondaryCourseComponent } from './seinor-secondary-course/seinor-secondary-course.component';
import { StudyCentresComponent } from './study-centres/study-centres.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"approvals", component:ImportantApprovalsComponent},
  {path:"cobse", component:CobseComponent},
  {path:"govnotification", component:GovernmentNotificationComponent},
  {path:"vipmessage", component:VipMessagesComponent},
  {path:'board-profile',component:BoardProfileComponent},
  {path:'chairmane-message',component:ChairmanMessageComponent},
  {path:'board-vision',component:BoardVisionComponent},
  {path:'important-approvals',component:ImportantApporvalsComponent},
  {path:'on-demand-exam',component:OnDemandExamComponent},
  {path:'donation',component:DonationComponent},
  {path:'admitcard',component:AdmitcardComponent},
  {path:'forms',component:FormsComponent},
  {path:'registration-card',component:RegistrationCardComponent},
  {path:'sample-paper',component:SamplePaperComponent},
  {path:'syllabus',component:SyllabusComponent},
  {path:'text-book',component:TextBookComponent},
  {path:'datesheet',component:DatesheetComponent},
  {path:'propectus',component:PropectusComponent},
  {path:'secondary-course',component:SecondaryCourseComponent},
  {path:'senior-secondary-course',component:SeinorSecondaryCourseComponent},
  {path:'academic-branch',component:AcademicBranchComponent},
  {path:'accounting-branch',component:AccountingBranchComponent},
  {path:'admistration-unit',component:AdministrationUnitComponent},
  {path:'affiliation-branch',component:AffiliationBranchComponent},
  {path:'computer-cell',component:ComputerCellComponent},
  {path:'examination-brach',component:ExaminationBranchComponent},
  {path:'legal-cell',component:LegalCellComponent},
  {path:'media-unit',component:MediaUnitComponent},
  {path:'minority-cell',component:MinorityCellComponent},
  {path:'printing-branch',component:PrintingBranchComponent},
  {path:'verification-branch',component:VerificationBranchComponent},
  {path:'vocational-education',component:VocationalEducationComponent},
  {path:'putquary',component:PutquaryComponent},
  {path:'head-office',component:HeadOfficeComponent},
  {path:'study-center',component:StudyCentresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
