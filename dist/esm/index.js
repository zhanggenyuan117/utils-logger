var n,o,t=(n=function(n){return null==n||void 0===n||""===n},o=function(n,o,t){console.log("%c ".concat(n," %c ").concat(o," %c"),"background:".concat(t,";border:1px solid ").concat(t,"; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;"),"border:1px solid ".concat(t,"; padding: 1px; border-radius: 0 2px 2px 0; color: ").concat(t,";"),"background:transparent")},{info:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=n(c)?"Info":t,r=n(c)?t:c;o(a,r,"#909399")},error:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=n(c)?"Error":t,r=n(c)?t:c;o(a,r,"#F56C6C")},warning:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=n(c)?"Warning":t,r=n(c)?t:c;o(a,r,"#E6A23C")},success:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=n(c)?"Success ":t,r=n(c)?t:c;o(a,r,"#67C23A")},picture:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=new Image;t.crossOrigin="anonymous",t.onload=function(){var n=document.createElement("canvas"),c=n.getContext("2d");if(c){n.width=t.width,n.height=t.height,c.fillStyle="red",c.fillRect(0,0,n.width,n.height),c.drawImage(t,0,0);var a=n.toDataURL("image/png");console.log("%c sup?","font-size: 1px;\n                        padding: ".concat(Math.floor(t.height*o/2),"px ").concat(Math.floor(t.width*o/2),"px;\n                        background-image: url(").concat(a,");\n                        background-repeat: no-repeat;\n                        background-size: ").concat(t.width*o,"px ").concat(t.height*o,"px;\n                        color: transparent;\n                        "))}},t.src=n}});export{t as default};
