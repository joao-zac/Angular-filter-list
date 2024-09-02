import { NgModule } from "@angular/core"
import { angularMaterialModule } from "../angular-material/angular-material.module";
import { FiltersComponent } from './filters/filters.component';

@NgModule({
    declarations: [
      FiltersComponent
    ],
    imports: [
      angularMaterialModule
    ],
    exports: [FiltersComponent]
})
export class ComponentsModule {
        
}