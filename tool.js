"use strict";var fs=require("fs"),path="photos/";fs.readdir(path,function(t,s){if(!t){var i=[];!function t(e){if(e==s.length)return fs.writeFile("photos/data.json",JSON.stringify(i,null,"\t")),void console.log("get img success!");fs.stat(path+s[e],function(n,o){n||(o.isFile()&&i.push(s[e]),t(e+1))})}(0)}});