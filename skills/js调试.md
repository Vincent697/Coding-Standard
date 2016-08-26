九个Console命令，让js调试更简单
----------

##一、显示信息的命令

```html
   1: <!DOCTYPE html>
   2: <html>
   3: <head>
   4:     <title>常用console命令</title>
   5:     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   6: </head>
   7: <body>
   8:     <script type="text/javascript">
   9:         console.log('hello');
  10:         console.info('信息');
  11:         console.error('错误');
  12:         console.warn('警告');
  13:     </script>
  14: </body>
  15: </html>
```
最常用的就是console.log了。


##二：占位符

>console上述的集中度支持printf的占位符格式，支持的占位符有：字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）

```html
   1: <script type="text/javascript">
   2:         console.log("%d年%d月%d日",2011,3,26);
   3: </script>
```

##三、信息分组

```html
   1: <!DOCTYPE html>
   2: <html>
   3: <head>
   4:     <title>常用console命令</title>
   5:     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   6: </head>
   7: <body>
   8:     <script type="text/javascript">
   9:         console.group("第一组信息");
  10:
  11:     　　　　console.log("第一组第一条:我的博客(http://www.ido321.com)");
  12:
  13:     　　　　console.log("第一组第二条:CSDN(http://blog.csdn.net/u011043843)");
  14:
  15:     　　console.groupEnd();
  16:
  17: 　　    console.group("第二组信息");
  18:
  19:     　　　　console.log("第二组第一条:程序爱好者QQ群： 259280570");
  20:
  21:     　　　　console.log("第二组第二条:欢迎你加入");
  22:
  23: 　　    console.groupEnd();
  24:     </script>
  25: </body>
  26: </html>
```

##四、查看对象的信息

>console.dir()可以显示一个对象所有的属性和方法。

```html
   1: <script type="text/javascript">
   2:         var info = {
   3:             blog:"http://www.ido321.com",
   4:             QQGroup:259280570,
   5:             message:"程序爱好者欢迎你的加入"
   6:         };
   7:         console.dir(info);
   8: </script>
```

##五、显示某个节点的内容

>console.dirxml()用来显示网页的某个节点（node）所包含的html/xml代码。

```html
   1: <!DOCTYPE html>
   2: <html>
   3: <head>
   4:     <title>常用console命令</title>
   5:     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   6: </head>
   7: <body>
   8:     <div id="info">
   9:         <h3>我的博客：www.ido321.com</h3>
  10:         <p>程序爱好者:259280570,欢迎你的加入</p>
  11:     </div>
  12:     <script type="text/javascript">
  13:         var info = document.getElementById('info');
  14:         console.dirxml(info);
  15:     </script>
  16: </body>
  17: </html>
```

##六、判断变量是否是真

>console.assert()用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。

```html
   1: <script type="text/javascript">
   2:     　　var result = 1;
   3:     　　console.assert( result );
   4:     　　var year = 2014;
   5:     　　console.assert(year == 2018 );
   6: </script>
```
1是非0值，是真；而第二个判断是假，在控制台显示错误信息


##七、追踪函数的调用轨迹。

>console.trace()用来追踪函数的调用轨迹。

```html
   1: <script type="text/javascript">
   2: /*函数是如何被调用的，在其中加入console.trace()方法就可以了*/
   3: 　　function add(a,b){
   4:         console.trace();
   5: 　　　　return a+b;
   6: 　　}
   7: 　　var x = add3(1,1);
   8: 　　function add3(a,b){return add2(a,b);}
   9: 　　function add2(a,b){return add1(a,b);}
  10: 　　function add1(a,b){return add(a,b);}
  11: </script>
```
控制台输出信息：


##八、计时功能

>console.time()和console.timeEnd()，用来显示代码的运行时间。

```html
   1: <script type="text/javascript">
   2: 　　console.time("控制台计时器一");
   3: 　　for(var i=0;i<1000;i++){
   4: 　　　　for(var j=0;j<1000;j++){}
   5: 　　}
   6: 　　console.timeEnd("控制台计时器一");
   7: </script>
```
运行时间是38.84ms


##九、console.profile()的性能分析

>性能分析（Profiler）就是分析程序各个部分的运行时间，找出瓶颈所在，使用的方法是console.profile()。


```javascript
   1: <script type="text/javascript">
   2:     　　function All(){
   3:             alert(11);
   4: 　　　　     for(var i=0;i<10;i++){
   5:                 funcA(1000);
   6:              }
   7: 　　　　    funcB(10000);
   8: 　　    }
   9:
  10:     　　function funcA(count){
  11:     　　　　for(var i=0;i<count;i++){}
  12:     　　}
  13:
  14:     　　function funcB(count){
  15:     　　　　for(var i=0;i<count;i++){}
  16:     　　}
  17:
  18:     　　console.profile('性能分析器');
  19:     　　All();
  20:     　　console.profileEnd();
  21:     </script>

```