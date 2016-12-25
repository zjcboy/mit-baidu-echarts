
import { Component, OnInit, Input, Output, ElementRef, HostListener , AfterViewInit } from '@angular/core';
import { MitEchartsLoaderService } from './services/mit-echarts.loader.service';
import { EChartOption } from './Interfaces/option.interfaces';



@Component({
  selector: 'app-mit-echarts',
  templateUrl: './mit-echarts.component.html',
  styleUrls: ['./mit-echarts.component.scss'],
  providers: [MitEchartsLoaderService]
})
export class MitEchartsComponent implements OnInit , AfterViewInit {
  @Input() option: EChartOption; // 参数
  @Input() id: string; // id

  @Input() height: string; // 高度

  chart: any;

  constructor(private el: ElementRef, private loader: MitEchartsLoaderService) { }

  ngOnInit() {



  }

  ngAfterViewInit() {
    setTimeout(() => {
      let echarts = (<any>window)['echarts'];
      if (!echarts) {
        console.log('异步加载成功');
        this.loader.load().then(() => {
          this.Init();
        }).catch(() => { });
      } else {
        console.log('无需异步加载');
        this.Init();
      }
    }, 100);

  }

  Init(): void {
    let echarts = (<any>window)['echarts'];
    this.chart = new echarts.init(document.getElementById(this.id));
    this.chart.setOption(this.option);
  };


  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    // this.Init();
    this.chart.resize();
  }


  ngOndestroy() {
    document.getElementById(this.id).remove();
  }


}
