!function(n){"module"in this?module.exports=n():b32Encode=n()}(function(){return function(n){for(var t,e="",r=0,u=0,o=0,c=n.length;o<c;)t=n[o],u<0?r|=t>>-u:r=t<<u&248,u>3?(u-=8,o+=1):u<4&&(e+="0123456789abcdefghjkmnpqrtuvwxyz"[r>>3],u+=5);return e+(u<0?"0123456789abcdefghjkmnpqrtuvwxyz"[r>>3]:"")}});