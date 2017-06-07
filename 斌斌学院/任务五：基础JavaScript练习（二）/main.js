var leftIn = document.form1.leftIn;
var rightIn = document.form1.rightIn;
var leftOut = document.form1.leftOut;
var rightOut = document.form1.rightOut;
var sort = document.form1.sort;

leftIn.addEventListener("click", function() { funInsert("left"); });
rightIn.addEventListener("click", function() { funInsert("right"); });
leftOut.addEventListener("click", function() { funDel("left"); });
rightOut.addEventListener("click", function() { funDel("right"); });
sort.addEventListener("click", funSort);

function funInsert(position) {
	var myInput = document.form1.myinput.value;
	var myDiv = document.createElement("div");
	var childValue = document.createTextNode(myInput);
	myDiv.appendChild(childValue);
	//给div一个值，可以在执行过程中根据此值操作。可以设置为不可见
	var backId = document.getElementById("backId");

	if (isNaN(myInput)) {
		alert("Please input a number");
	} else if (myInput < 10 || myInput > 100){
		alert("Please input the number from 0 to 100");
	} else if (position === "left") {
		backId.insertBefore(myDiv, backId.firstChild);
	} else if (position === "right") {
		backId.appendChild(myDiv);
	}

	for (i = 0; i < backId.children.length; i++) {
		backId.children[i].style.left = i * 30 + 5 + "px";
		backId.children[i].style.height = parseInt(backId.children[i].firstChild.nodeValue) * 2 + "px";
		//以后还是尽量避免用childNodes吧，各种奇怪的bug
	}
	document.form1.myinput.select();
}

function funDel(position) {
	var backId = document.getElementById("backId");
	if (position === "left") {
		backId.removeChild(backId.firstChild);
	} else {
		backId.removeChild(backId.lastChild);
	}

	for (i = 0; i < backId.children.length; i++) {
		backId.children[i].style.left = i * 30 + 5 + "px";
		backId.children[i].style.height = parseInt(backId.children[i].firstChild.nodeValue) * 2 + "px";
		//这里跟上头是一样的，主要是更新一下删除后的这些div的位置
	}
}

function funSort() {
	var mySortArray = document.getElementById("backId").children;
	var myArray = [];

	for (var i = 0; i < mySortArray.length; i++) {
		myArray.push(mySortArray[i].firstChild.nodeValue);
	}
	bubbleSort(myArray);
}

function swap(myArray, p1, p2) {
	var temp = myArray[p1];
	myArray[p1] = myArray[p2];
	myArray[p2] = temp;

}

function bubbleSort(myArray) {
	var len = myArray.length;
	var i, j, stop;

	for (i = 0; i < len - 1; i++) {
		for (j = 0, stop = len - i - 1; j < stop; j++) {
			if (myArray[j] > myArray[j + 1]) {
				swap(myArray, j, j + 1);
			}
		}
	}

	//以下为排序过后，重写node中的值
	var backId = document.getElementById("backId");
	var myDiv = backId.children;
	for (var i = 0; i < myArray.length; i++) {
		myDiv[i].firstChild.nodeValue = myArray[i];
		//以下为刷新它们的高
		myDiv[i].style.height = myArray[i] * 2 + "px";
	}
}
