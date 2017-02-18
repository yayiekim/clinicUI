import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [PatientsComponent],
    exports: [PatientsComponent]
})

export class PatientsModule { }