!function(n){"module"in this?module.exports=n():b32Decode=n()}(function(){var n="0123456789abcdefghjkmnpqrtuvwxyz",t=function(){for(var t={},e=0,r=n.length;e<r;e++)t[n[e]]=t[n[e].toUpperCase()]=e;return t.o=t[0],t.i=t[1],t.l=t[1],t.s=t[5],t}();return function(e){for(var r,o=0,u=0,i=[],l=e.length,f=0;f<l;){if(!(r=t[e[f++]]))return null;o|=(r<<=3)>>>u,(u+=5)<8||(i[i.length]=o,o=(u-=8)>0?r<<5-u&255:0)}return u<0&&(i[i.length]=n[bits>>3]),i}});