import { NgModule } from "@angular/core"
import { NgFor } from "@angular/common"
import { angularMaterialModule } from "../angular-material/angular-material.module";
import { FiltersComponent } from './filters/filters.component';
import { UsersDisplayComponent } from './users-display/users-display.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

// import { PhonenumberPipe } from "../pipes/phonenumber.pipe";

@NgModule({
    declarations: [
      FiltersComponent,
      UsersDisplayComponent,
      UsersDetailsComponent
    ],
    imports: [
      angularMaterialModule,
      NgFor,
      // PhonenumberPipe
    ],
    exports: [
      FiltersComponent,
      UsersDisplayComponent,
      UsersDetailsComponent
    ]
})
export class ComponentsModule {
        
}