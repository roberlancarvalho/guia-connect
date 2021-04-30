import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { PageHeaderModule } from '../../shared';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { ChartsComponent } from '../charts/charts.component';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
