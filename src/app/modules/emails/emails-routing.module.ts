import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmailTemplateListComponent } from "./pages/email-template-list/email-template-list.component";
import { EmailTemplateDetailComponent } from "./pages/email-template-detail/email-template-detail.component";

const routes: Routes = [
    {
        path:'', component: EmailTemplateListComponent,
        data: {title:'Email Templates'}
    },
    {
        path: ':id', component: EmailTemplateDetailComponent,
        data: {title: 'Email Template Detaik'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailsRoutingModule {}