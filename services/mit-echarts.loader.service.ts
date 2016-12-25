import { Injectable } from '@angular/core';

@Injectable()
export class MitEchartsLoaderService {

  constructor() { }


  load(): Promise<any> {
    let EChart_URL = '//cdn.bootcss.com/echarts/3.3.1/echarts.min.js';
    let p = new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('src', EChart_URL);
        script.onload = resolve;
        script.async = true;
        document.head.appendChild(script);
    });
    return p;
  }



}

