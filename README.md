# mit-baidu-echarts
基于angular2的百度图表组件

-------

### 为什么要做异步加载？
由于项目中经常用到一些第三方库，但如果直接打包进项目里面去的话，无疑是增加打包后的js体积。
所以出于对性能的追求，我在项目中用到的大型第三方库都使用了懒加载。

-------

### 使用方式

引入echarts模块，并在组件中调用，特别注意，组件默认已经开启了自适应，图表会根据窗口宽度大小的变化resize，注：高度无法自适应，必须设置固定的像素；

-------

##### 1. import

```
 import MitEhartsModule form './MitEhartsModule';
 @NgModule({
  declarations: [],
  imports: [
    MitEhartsModule
  ]
})
export class BusinessModule { };
``` 

##### 2.use in components
```
  <app-mit-echarts [option]="参数:object" [id]="设置ID,确保唯一:string" [height]="‘100px’（固定高度）"></app-mit-echarts>
```
##### 3.特别注意
凡是string变量必须要在设置时加上单引号！

-------


### 测试环境
angular-cli: 1.0.0-beta.21

node: 7.2.1

os: darwin x64



