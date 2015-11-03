
	$(document).ready(function(){

		/************** 页面刷新时清空输入框 **************/
		$(".putNum").val("");
		$(".checkNum-1").val("");
		$(".checkNum-2").val("");
		
		/***************** index数字动画 ******************/
		var cos_offset_x = 0;
		function animate() {
			$(".ball").each(function(i, e){
				$e = $(e);
				var left = $e.offset().left + (cos_offset_x++) / 200;
				var top = Math.cos(left) * 25;
				$e.css('margin-top', top);
			});
		}
		setInterval(animate, 20);
		
		/***************** 居中弹框 ******************/
		function pop(popBox){
			var center_left = ($(window).width() - popBox.width()) / 2;
			var center_top = ($(window).height() - popBox.height()) / 2 + $(window).scrollTop();
			popBox
				.css("display", "block")	//分号、冒号、逗号前面无空格，后面跟一个空格
				.css("left", center_left)
				.css("top", center_top);
		}
		
		/***************** BOX隐藏、显示 ******************/
		function boxDisplay(box,displayStyle){
			box.css("display", displayStyle);
		}
		
		/***************** 退出按钮 ******************/
		function cancel(cancelBox){
			boxDisplay(cancelBox, "none");
		}
		
		$(".helpCancel").click(function(){
			cancel($(".helpBox"));
		});
		$(".rankCancel").click(function(){
			cancel($(".rankBox"));
		});
		$(".bombCancel").click(function(){
			cancel($(".bomb"));
		});
		$(".prompCancel").click(function(){
			cancel($(".prompt"));
		});
		$(".submitCancel").click(function(){
			cancel($(".submit"));
		});
		
		/***************** 首页Start选项 ******************/
		$(".menu li:first").click(function(){
			if($(".subMenu").is(":visible")){
				boxDisplay($(".subMenu"), "none");
			}
			else
				boxDisplay($(".subMenu"), "block");
		});

		/***************** 首页Rank选项 ******************/
		$(".rank").click(function(){
			pop($(".rankBox"));
		});

		/***************** 首页Help选项 ******************/		
		$(".help").click(function(){
			pop($(".helpBox"));
		});
		
		/************ 产生各个位数不同的四位随机数 **************/
		var num = [];
		var i, randomStr;
		for(i = 0 ; i < 4; i++){
			num[i] = parseInt((Math.random() * 10));
			compare(num,i);
		}
		function compare(numa,i){
			for(var j = 0 ; j < i; j++){
				if(numa[j] == numa[i]){
					numa[i] = parseInt((Math.random() * 10));
					compare(numa,i);				
				}
			}
		}	
		var randomNum = num[0] * 1000 + num[1] * 100 + num[2] * 10 + num[3];
		randomNum = checkNumber(randomNum)
		$(".showNum").html(randomNum);
		
		function checkNumber(checkNum){
			if(checkNum < 1000)
				checkNum = "0" + checkNum;
			else
				checkNum = "" + checkNum;
			return(checkNum);
		}
		var _round = 0;
		
		/*****************  检查、显示用户输入的数字   *******************/
		function show(){
			var inputValue = $(".putNum").val();	//用户猜的数
			var guessNum = "" + $(".putNum").val();	//把用户猜的是转换为字符串
			var userNum = new Array;
			var countA = 0, countB = 0, countAStr, countBStr;
			for(var i = 0 ; i < 4 ; i++){	//把用户提交的数据放入数组
				//stringObject.substr(start,length)
				userNum[i] = guessNum.substr(i,1);
			}		
			if(inputValue == ""){	 //判断提交是否为空
				$(".showArea").prepend("<p>Please guess a 4-digit number.</p><br />");
				return false;
			}
			if(isNaN(inputValue)){	//判断是否都是数字
				$(".showArea").prepend("<p>Please guess a number.</p><br />");
				return false;
			}
			if(guessNum.length != 4){	//判断位数是否正确
				$(".showArea").prepend(
					"<p>The number should be 4-digit.</p><br />"
				);
				return false;
			}
			for(var i = 0 ; i < 4; i++){	//检查输入的每一位是否互不相同
				for(var j = 0 ; j < i; j++){
					if(userNum[i] == userNum[j]){
						$(".showArea").prepend("<p>Each digit should different from others. Please try again.</p><br />");
						return false;
					}
				}
			}
			for(var i = 0 ; i < 4; i++){	//检查同位是否正确
				if(userNum[i] == num[i]){
					countA++;
				}
			}
			for(var i = 0 ; i < 4; i++){	//检查数字是否相同
				for(var j = 0 ; j < 4; j++){
					if(userNum[i] == num[j]){
						countB++;
					}
				}
			}
			
			_round++;
			
			if(inputValue == randomNum){	//答案正确时居中弹框
				pop($(".bomb"));	
				$(".rightNum").html(randomNum);
				$(".timeConsume").html(_min + "min" + _sec + "sec");
				$(".roundConsume").html(_round);
				clearInterval(timeCount);
				return false;
			}
			
			//guessNum = checkNumber(guessNum);
			
			$(".showArea").prepend("<p>Round " + _round +"—— Number " + guessNum + ", A is " + countA + ", B is " + countB + "</p><br />");
			
			function showAB(list,countNum){
				var w = list.find('li').outerHeight(true);	//A、B滑动提示效果
				var y = - countNum * w;
				new String(y);
				list.animate({"margin-top" : y});				
			}
			showAB($(".listA"),countA);
			showAB($(".listB"),countB);
		}
		
		/*****************  倒计时   *******************/
/*  	var sec = 60,min = 20;
		function timing(){
			var minStr,secStr;
			sec--;
			if(sec < 0){
				sec = 59;
				min--;
			}
			if(min < 0){
				clearInterval(timeCount);
				return false;
			}
			minStr = min;
			secStr = sec;
			if(min < 10)
				minStr = "0" + min;
			if(sec < 10)
				secStr = "0" + sec;
			$(".timeMin").html(minStr);
			$(".timeSec").html(secStr);
		}
		var timeCount = setInterval(timing,1000);*/

		/*****************  顺计时   *******************/
		var _sec = 0, _min = 0;
		function timing(){
			var minStr,secStr;
			_sec++;
			if(_sec >= 60){
				_sec = 0;
				_min++;
			}
			minStr = _min;
			secStr = _sec;
			if(_min < 10)
				minStr = "0" + _min;
			if(_sec < 10)
				secStr = "0" + _sec;
			$(".timeMin").html(minStr);
			$(".timeSec").html(secStr);
		}
		var timeCount = setInterval(timing,1000);

		/*****************  回车提交   *******************/
		$(".putNum").focus(); 
		$(".btnNum").click(function(){
			show();
			$(".putNum").val("").focus();
		});
 		document.onkeydown = function(e){
			if(!e) e = window.event;
			if((e.keyCode || e.which) == 13){
				$(".btnNum").click();
			} 
		}
		
		/************** Restart *********************/
		$(".rightMenu li:first").click(function(){
			window.location.reload();
		});
		$(".rightMenu li:eq(1)").click(function(){
			pop($(".prompt"));
		});

		/************** prompt *********************/
		$(".promptInBox li:first").click(function(){	
			for(var i = 1; i <= 2; i++){
				var checkNum = "checkNum-" + i;
				var promptNum = "promptNum-" + i;
				var promptIs = "promptIs-" + i;
				var checkNumVal = $("." + checkNum).val();
				if(isNaN(checkNumVal)){		//判断是否是数字
					$(".promptWrong").html("Please put in a number.");
					return false;
				}				
				for(var j = 0; j < 4; j++){
					if(checkNumVal == num[j]){
						$("." + promptNum).html(num[j]);						
						$("." + promptIs).html("exists.");
						break;	//break终止循环,continue 终止当前的循环,然后从下一个值继续执行。
					}
					if(j == 3){
						$("." + promptNum).html(checkNumVal);						
						$("." + promptIs).html("not exists.");
					}
				}
			}
			boxDisplay($(".promptInput"), "none");
			boxDisplay($(".promptAnswer"), "block");
		});
		
		$(".promptInBox li:eq(1)").click(function(){
			boxDisplay($(".prompt"), "none");
		});		
		
		$(".bombMenu li:eq(1)").click(function(){
			boxDisplay($(".bomb"), "none");
			pop($(".submit"));
		});
		
		/****************** 提交成绩 *****************/
		$(".submitRecord").click(function(){
			var userName = $(".submitGrade").val();
			
			//parseInt(Math.random()*(上限-下限+1)+下限);
			var tom = parseInt(Math.random()*(99999-10000+1)+10000);			
			var sho = parseInt(Math.random()*(99999-10000+1)+10000);			
			var mas = parseInt(Math.random()*(99999-10000+1)+10000);			
			var yam = parseInt(Math.random()*(999999-100000+1)+100000);			
			var bag = parseInt(Math.random()*(999999-100000+1)+100000);			
			var ham = parseInt(Math.random()*(999999-100000+1)+100000);			
			
			$.ajax({
				url: 'submit.php',
				cache: false,
				data: {
					u: userName,
					t: yam,
					o: "" + sho + _min,
					b: bag,
					i: "" + tom + _sec,
					a: "" + mas + _round,
					h: ham
				},
				success: function (data, textStatus, jqXHR)
				{
					boxDisplay($('.submitPromt'), 'block');
					setTimeout("window.location.reload();", 1500);
				},
				dataType: 'text'
			});
		});

	});