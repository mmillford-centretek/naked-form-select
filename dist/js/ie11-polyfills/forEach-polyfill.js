"use strict";"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,o){o=o||window;for(var i=0;i<this.length;i++)t.call(o,this[i],i,this)});