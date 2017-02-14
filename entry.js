// entry.js
import'./style.css' // 载入 style.css
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));

document.write('It works.')
document.write('Hello webpack!')
document.write(require('./module.js'))//添加模块
var config = require('./config.json');
document.write(config.greetText);

