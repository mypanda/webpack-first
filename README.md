## webpack demo

### webpack 1.0

* 一下都是webpack 1.0的特性
* 命令`webpack --progress --colors`写在script里面是使用node_modules的文件
* webpac-dev-server 2.x好像不用些--hot --inline
* file-loader加载图片的png
* url-loader转化base64
* `test:/\.png$/,`可以使用文件夹`test:/icons/`
* css-loader可以使用在`require('style!css!.admin.css')`
* sass-loader还需要node-sass

### node运行命令行程序

```
var c = require('child_process');
c.exec('start rm -rf app/dist');
```

### node打开浏览器

```
var c = require('child_process');
c.exec('start http://localhost:8080/app');
```

### 建议使用webpack 2.x版本性能更好一些


### 0.1.0是webpack 1.x的学习