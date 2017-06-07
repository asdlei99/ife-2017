+ JS是单线程的，不会等着执行任务。优先执行同步任务。在本task中，关于`setTimeout`[这里](http://imweb.io/topic/56ac67fbe39ca21162ae6c78)解释的很好
+ 学习了一个暂停函数的用法
`function sleep(d) {
	for (var t = Data.now(); Data.now() - t <= d);
}`