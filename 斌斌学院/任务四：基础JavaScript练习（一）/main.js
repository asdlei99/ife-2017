// 首先定义四个键的触发事件
var leftin = document.form1.leftin;
var rightin = document.form1.rightin;
var leftout = document.form1.leftout;
var rightout = document.form1.rightout;
// 为何没有触发就执行？原因是第二个只能是函数名称或者匿名函数本身，不能看作是调用
leftin.addEventListener("click", function() { funInsert("left");});
rightin.addEventListener("click", function() { funInsert("right");});
leftout.addEventListener("click", function() { funDel("left");});
rightout.addEventListener("click", function() { funDel("right");});

function funInsert(direction) {
	var myinput = document.form1.innum.value;

	if(isNaN(myinput)) {
		alert("Please input a number");
	} else if (myinput === "") {
		alert("Please give some message");
	} else {
		var lili = document.createElement("li");
		var txt = document.createTextNode(myinput);
		lili.appendChild(txt);

		var disnum = document.getElementById("disnum");
		if (direction === "right") {
			disnum.appendChild(lili);
		} else if (direction === "left") {
			disnum.insertBefore(lili, disnum.firstChild);
		}//这里本来有一个语法错误，因为将disnum的定义放在了第一个if语句里，以至于左侧入时不知道disnum是什么
	}
}
//removeChild(),删除子元素
function funDel(direction) {
	var disnum = document.getElementById("disnum");
	var mylili = disnum.childNodes.length;

	if (mylili === 0) {
		alert("There is nothing to delete");
	} else if (direction === "left") {
		disnum.removeChild(disnum.firstChild);
	} else if (direction === "right") {
		disnum.removeChild(disnum.lastChild);
	}
}