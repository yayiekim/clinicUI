import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsComponent } from './consultations.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [ConsultationsComponent],
    exports: [ConsultationsComponent]
})

export class ConsultationsModule { }