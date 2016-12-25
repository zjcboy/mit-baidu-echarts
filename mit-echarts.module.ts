// Auth by Junchao Zheng
// Github http://github.com/zjcboy
// Date 2016.12.25


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 // component
import { MitEchartsComponent } from './mit-echarts.component';
let component = [
  MitEchartsComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ]
})
export class MitEhartsModule { }
