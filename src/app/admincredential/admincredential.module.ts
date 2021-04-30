import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCredentialRoutingModule } from './admincredential-routing.module';


@NgModule({
  declarations: [ ViewComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    AdminCredentialRoutingModule,
    
  ]
})
export class AdmincredentialModule { }
