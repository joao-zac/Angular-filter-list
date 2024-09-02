import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from '@angular/material/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input"
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from "@angular/material/select"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"

@NgModule({
    imports: [],
    providers:[provideNativeDateAdapter()],
    exports: [
        MatInputModule, 
        MatFormFieldModule, 
        FormsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
    ],
    
})
export class angularMaterialModule {

}