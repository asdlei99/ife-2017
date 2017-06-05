+ 类似的功能可以用同一个函数，尽量函数化编程
+ 函数监听事件`addEventListener()`中的第二个参数为回调函数。不能直接带参数，如果要带参数，可以在外头加一个匿名函数。重点：第二个只能是函数名称或者匿名函数本身，不能看作是调用
+ 注意在`if`语句中，将公用的变量定义在外部
+ `* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}`width = 元素 + padding + border(可见部分)