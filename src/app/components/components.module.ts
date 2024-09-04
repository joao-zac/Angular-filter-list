import { NgModule } from "@angular/core"
import { angularMaterialModule } from "../angular-material/angular-material.module";
import { FiltersComponent } from './filters/filters.component';
import { UsersDisplayComponent } from './users-display/users-display.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { NgFor } from "@angular/common"

@NgModule({
    declarations: [
      FiltersComponent,
      UsersDisplayComponent,
      UsersDetailsComponent
    ],
    imports: [
      angularMaterialModule,
      NgFor
    ],
    exports: [
      FiltersComponent,
      UsersDisplayComponent,
      UsersDetailsComponent
    ]
})
export class ComponentsModule {
        
}