# XCX-Plugins
小程序组件

## 日历控件：
### 1.声明组件
下载代码，将components文件夹拷贝至项目根目录（与app.json平级），在`app.json`中声明需要使用的插件，这里的声明是全局的，pages下的页面都能直接用，也可以在某一个page对应的json文件中单独声明。

```
{
  "pages": [
    "pages/demo/calendar"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  },
  "usingComponents": {
    "calendar": "/components/calendar/index"
  },
  "sitemapLocation": "sitemap.json"
}
```
 *组件的名字可以自定义，如calendar可以改成calendar666，页面内使用时保持一致即可。

### 2.使用组件
最简单的方式：
```
<calendar />
```
带有一些默认设置的方式
```
<calendar bindOnDayClick="onDayClick" days-style='{{daysStyle}}' />
```
### 3.可设置属性
属性名称 |类型| 默认值 | 说明  
:-: | :-: | :-: | :- 
mode | String | normal | 模式：<br/>normal:常规；<br/>picker: 下拉选取日期<br/>pickerRange: 下拉选择区间
placeholder | String | 无|提示语
title | String | xxx年x月 | 日历标题,如设定值，在月份切换时需要自己设置title值
weekdays | Array | ['日', '一', '二', '三', '四1', '五', '六'] | 如自定义，数组长度需为7
language | String | ZH | 语言：<br/>ZH：中文<br/>EN：英语，不同语言，年月和星期显示不同
selectedMode | String | round | 被选中日期背景模式：<br/>round：圆形<br/>square方形
showMoreMonths | Boolean | true | 是否显示上下月份
showMoreDays | Boolean | true | 是否显示非本月日期
year | Number | 当前年份 | 年份
month | Number | 当前月份 | 月份，注意：此处值从1开始，1-12
selectedDate | String | 当天 | 被选中日期，格式yyyy-MM-DD
beginDate | String | 开始日期 | 范围模式开始日期，格式yyyy-MM-DD
endDate | String | 结束日期 | 范围模式结束日期，格式yyyy-MM-DD
daysStyle | Array | 无 | 指定日期样式数组，如：[{id: '2019-07-30',style: 'color: red;'}]会改变2019-07-30的日期颜色，此处是style，可以自由设置属性，会改变整个单元格样式
dotDays | Array | 无 | 指定日期显示标记点，如：[ '2019-10-30']
dotColor | String | red | 点颜色

### 4.监听事件
事件名称 | 说明  
:-: | :- 
bindOnDayClick | 点击某一天时触发：<br/>event.detail为被点击日期的Date对象
bindOnRangeComplete | 范围选择完毕时触发：<br/>event.detail为{begin:dateObj,end:dateObj}
bindOnMonthChange | 切换月份时触发：<br/>event.detail为当前月份第一天的Date对象

示例图片：

![常规模式使用示例.png](https://upload-images.jianshu.io/upload_images/2355731-10d0e65ade8b6341.png)
![自定义日期样式.png](https://upload-images.jianshu.io/upload_images/2355731-dd0aea48666590b1.png)
![日期范围选择.png](https://upload-images.jianshu.io/upload_images/2355731-47c1db8dbcdb91aa.png)

## 手写绘制控件：
### 1.声明组件
下载代码，将components文件夹拷贝至项目根目录（与app.json平级），在`app.json`中声明需要使用的插件，这里的声明是全局的，pages下的页面都能直接用，也可以在某一个page对应的json文件中单独声明。

```
{
  "pages": [
    "pages/demo/handwriting"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  },
  "usingComponents": {
    "handwriting": "/components/handwriting/index"
  },
  "sitemapLocation": "sitemap.json"
}
```
 *组件的名字可以自定义，如handwriting可以改成handwriting666，页面内使用时保持一致即可。

### 2.使用组件
最简单的方式：
```
<handwriting />
```
带有一些默认设置的方式
```
<handwriting bindOnComplete="onHnadwritingComplete" />
```
### 3.可设置属性
* 暂无

### 4.监听事件
事件名称 | 说明  
:-: | :- 
bindOnComplete | 点击完成时触发：<br/>event.detail为绘制得到的图片临时存储路径

示例图片：

![设置颜色.png](https://upload-images.jianshu.io/upload_images/2355731-d0ed280fbab15f40.png)

![设置笔头粗细.png](https://upload-images.jianshu.io/upload_images/2355731-9a3c7509a1261820.png)

![控件显示效果.png](https://upload-images.jianshu.io/upload_images/2355731-cc02c4fbaf5d596f.png)
