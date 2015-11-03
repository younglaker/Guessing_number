<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link type="text/css" rel="stylesheet" href="../css/cssrest.css" />
<link type="text/css" rel="stylesheet" href="../css/style.css" />
<script type="text/javascript" src="../js/jquery-1.7.min.js"></script>
<script type="text/javascript" src="../js/js.js"></script>
</head>

<body>
	<div class="outBox">
	
		<!--------- right menu ---------->
		<div class="rightMenu liStyle">
			<ul>
				<li>Restart</li>
				<li class="rank">Rank</li>
				<li><a href="common.php">Common</a></li>
				<li><a href="../index.php">Menu</a></li>
			</ul>
		</div>
		
		<!--------- main area ---------->
		<div class="bigBox">

			<div class="showNum"></div>
			
			<!--------- guess box ---------->
			<div class="guessArea">
				<input type="text" class="putNum" maxLength="4" value="" />
				<input type="button" class="btnNum liStyle" value="Guess" />
			</div>
			
			<!--------- show time ---------->
			<div class="timeBox">
				<ul>
					<li>Time</li>
					<li class="timeMin">00</li>
					<li>:</li>
					<li class="timeSec">00</li>
				</ul>
			</div>
			
			<!--------- show the A、B ---------->
			<div class="listBox">
				<div class="listBoxA">A</div>
				<div class="colonBox">:</div>
				<div class="listBoxA">
					<ul class="listA">
						<li>0</li>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
				<div class="listBoxB">B</div>
				<div class="colonBox">:</div>
				<div class="listBoxB">
					<ul class="listB">
						<li>0</li>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
			</div>
			<!--ul class="time">
				<li class="timeMin">20</li>
				<li>:</li>
				<li class="timeSec">00</li>
			</ul-->
			
			<!--------- answer prompt ---------->
			<div class="showArea"></div>
			
			<!--------- rank box ---------->
			<div class="rankBox">
				<img class="rankCancel" src="../img/cancel.png" />
				<div class="rankOutBox">
					<div class="rankInBox">
						<ul class="rankLeft">
							<li>Time Records</li>
							<? include("ranktime.php");?>
						</ul>
						<ul class="rankRight">
							<li>Round Records</li>			
							<? include("rankround.php");?>
						</ul>
					</div>
				</div>
			</div>

			<!--------- correct box ---------->
			<div class="bomb">
				<img class="bombCancel" src="../img/cancel.png" />
				<div class="bombOutBox">
					<article class="bombInBox">		   	
						<h1>Congratulations!</h1>
						<h2>
							The right number is:
							<span class="rightNum"></span>
						</h2>
						<p>
							Time-consuming : <span class="timeConsume"></span>
						</p>
						<p>
							Round-consuming : <span class="roundConsume"></span>
						</p>
						<ul class="bombMenu liStyle">
							<li>Restart</li>
							<li>Submit Grades</li>
						</ul>
					</article>
				</div>
			</div>
			
			<!--------- submit grades ---------->
			<div class="submit">
				<img class="submitCancel" src="../img/cancel.png" />
				<div class="submitOutBox">
					<div class="submitInBox">		   	
						<h1>Congratulations!</h1>
						<p>Your name : 
							<input class="submitGrade" name="user" type="text"  maxLength="14" />
						</p>
						<p>
							Time-consuming : <span class="timeConsume"></span>
						</p>
						<p>
							Round-consuming : <span class="roundConsume"></span>
						</p>
						<ul class="bombMenu liStyle">
							<li><input type="submit" class="submitRecord" value="Submit"/></li>
						</ul>
						<p class="submitPromt">Submit successfully! Restarting...<p>
					</div>
				</div>
			</div>
		</div>
		<img class="konan" src="../img/konan.png" />
	</div>
	<? include("bottom.php");?>
</body>
</html>