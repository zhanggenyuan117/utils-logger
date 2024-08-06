# node V16.18.0


```
import log from 'utils-logger';

// 不带标题
log.info('这是基础信息!');
// 带标题
log.info('回复', '好的收到!');
 
// 不带标题
log.error('这个不是我的锅');
// 带标题
log.error('他妈的', '这个不是我的锅');
 
// 不带标题
log.warning('人只要肯吃苦，就会苦中苦 ');
// 带标题
log.warning('nnd', '我并非无路可走 我还有死路一条! ');
 
// 不带标题
log.success('没钱的爱情就像香蕉，不是黄了就是绿了！');
// 带标题
log.success('nnd', '钱没了可以再赚，良心没了便可以赚的更多。 ');

// 图片
log.picture('https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0514%2Fd0ea93ebj00sdgx56001xd200u000gtg00hz00a2.jpg&thumbnail=660x2147483647&quality=80&type=jpg');

```

![Image text](https://gitee.com/zhanggenyuan/utils-logger/blob/master/src/assets/logger2.png)