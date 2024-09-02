import { NgModule } from "@angular/core"
import { angularMaterialModule } from "../angular-material/angular-material.module";
import { FiltersComponent } from './filters/filters.component';
import { UsersDisplayComponent } from './users-display/users-display.component';

@NgModule({
    declarations: [
      FiltersComponent,
      UsersDisplayComponent
    ],
    imports: [
      angularMaterialModule
    ],
    exports: [
      FiltersComponent,
      UsersDisplayComponent
    ]
})
export class ComponentsModule {
        
}