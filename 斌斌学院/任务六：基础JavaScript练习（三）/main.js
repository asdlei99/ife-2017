// 首先定义四个键的触发事件
var leftin = document.form1.leftin;
var rightin = document.form1.rightin;
var leftout = document.form1.leftout;
var rightout = document.form1.rightout;

var foundBtn = document.form1.foundBtn;
// 为何没有触发就执行？原因是第二个只能是函数名称或者匿名函数本身，不能看作是调用
leftin.addEventListener("click", function() { funInsert("left");});
rightin.addEventListener("click", function() { funInsert("right");});
leftout.addEventListener("click", function() { funDel("left");});
rightout.addEventListener("click", function() { funDel("right");});
foundBtn.addEventListener("click", checkOut);

function funInsert(direction) {
	var disnum = document.getElementById("disnum");
	var elementSet = arrayGenerate();

	if (elementSet.toString() === "") {
		alert("Please give some message");
	} else {
		if (direction === "right") {
			for (var i = 0; i < elementSet.length; i++) {
				var lili = document.createElement("li");
				var txt = document.createTextNode(elementSet[i]);
				lili.appendChild(txt);
				disnum.appendChild(lili);
			}
		} else if (direction === "left") {
			for (var i = elementSet.length - 1; i > -1; i--) {
				//从数组的最后一个元素开始添加至头部，直到第一个元素，即 i = 0 的时候
				var lili = document.createElement("li");
				var txt = document.createTextNode(elementSet[i]);
				lili.appendChild(txt);
				disnum.insertBefore(lili, disnum.firstChild);
			}
		}
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


// 左侧、右侧入时，调用文本框内数组生成函数
function arrayGenerate() {
	var myTextArea = document.form1.myText.value;
	var myReg = /[^0-9a-zA-Z\u4e00-\u9fa5]+/;
	var myArray = myTextArea.split(myReg);
	return myArray;
}

//以下为查询函数
function checkOut() {
	var checkValue = document.form1.foundText.value;
	if (checkValue === "") {
		alert("Please input the value");
	} else {
		var regex = new RegExp(checkValue, "g");
		//正则里用变量只能用构造函数，字面量不认可变量
		var disnum = document.getElementById("disnum");
		for (i = 0; i < disnum.children.length; i++) {
			if (regex.test(disnum.children[i].firstChild.nodeValue)) {
				disnum.children[i].style.color = "red";
			} else {
				disnum.children[i].style.color = "black";
			}
		}
	}
}