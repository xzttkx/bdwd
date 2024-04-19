window.alert = alert;
 function alert(data) {
     var a = document.createElement("div"),
         p = document.createElement("p"),
         btn = document.createElement("div"),
         textNode = document.createTextNode(data ? data : ""),
         btnText = document.createTextNode("确定");
     // 控制样式
     css(a, {
         "position" : "fixed",
         "left" : "0",
         "right" : "0",
         "top" : "20%",
         "width" : "100px",
         "margin" : "0 auto",
         "background-color" : "#f00",
         "font-size" : "20px",
         "text-align" : "center"
     });
     css(btn, {
         "background" : "blue",
     })
     // 内部结构套入
     p.appendChild(textNode);
     btn.appendChild(btnText);
     a.appendChild(p);
     a.appendChild(btn);
     // 整体显示到页面内
     document.getElementsByTagName("body")[0].appendChild(a);

     // 确定绑定点击事件删除标签
     btn.onclick = function() {
         a.parentNode.removeChild(a);
     }
 }
 function css(targetObj, cssObj) {
     var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
     for(var i in cssObj) {
         str += i + ":" + cssObj[i] + ";";
     }
     targetObj.style.cssText = str;
 }


function show(t, l) {
        let all = document.querySelector('.all')
        let box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = '小志天天开心'
        box.style.top = t + 'vh'
        box.style.left = l + 'vw'
        all.appendChild(box)
}

let i = 0
const timer = setInterval(function () {
        let tops = Math.random() * 100,
        lefts = Math.random() * 100
        show(tops, lefts)
        if (i == 1000) {
                clearInterval(timer)
        }
        i++
}, 0)


window.onbeforeunload = function(e) {
	var e = window.event ||e;
	e.returnValue=("是否确定关闭页面");
}
