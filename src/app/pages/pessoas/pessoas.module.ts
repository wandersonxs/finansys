import { NgModule } from '@angular/core';
import {PessoasRoutingModule} from './pessoas-routing.module';
import {CalendarModule} from 'primeng/calendar';
import {IMaskModule} from 'angular-imask';
import {SharedModule} from '../../shared/shared.module';
import {PessoaListComponent} from './pessoa-list/pessoa-list.component';
import {PessoaFormComponent} from './pessoa-form/pessoa-form.component';

@NgModule({
  imports: [
    SharedModule,
    PessoasRoutingModule,
    CalendarModule,
    IMaskModule
  ],
  declarations: [PessoaListComponent, PessoaFormComponent ]
})
export class PessoasModule { }
