import { NgModule } from '@angular/core';

import {SecurityPagesRoutingModule} from './security-routing.module';
import { LoginPageComponent } from './login/login-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
      SharedModule,
      SecurityPagesRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ]
})
export class SecurityPagesModule { }
