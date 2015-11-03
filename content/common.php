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
				<li>Prompt</li>
				<li><a href="timemode.php">Challenge</a></li>
				<li><a href="../index.php">Menu</a></li>
			</ul>
		</div>
		
		<!--------- main area ---------->
		<div class="bigBox">
			<div class="showNum"></div>
			
			<!--------- guess box ---------->
			<div class="guessArea">
				<input type="text" class="putNum" maxLength="4" />
				<input type="button" class="btnNum liStyle" value="Guess" />
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
			
			<!--------- answer prompt ---------->
			<div class="showArea"></div>
			
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
						<ul class="bombMenu liStyle">
							<li>Restart</li>
							<li><a href="timemode.php">Challenge Mode</a></li>
							<li><a href="../index.php">Menu</a></li>
						</ul>
					</article>
				</div>
			</div>
			
			<!--------- prompt th answer ---------->
			<div class="prompt">
				<img class="prompCancel" src="../img/cancel.png" />
				<div class="promptOutBox">
					<article class="promptInBox">
						<div class="promptInput">
							<h2>You have 1 choice to ask whether 2 number exist.</h2>
							<p>
								<label>1st number:</label>
								<input class="checkNum-1" type="text" maxLength="1" value="" />
							</p>
							<p>
								<label>2nd number:</label>
								<input class="checkNum-2" type="text" maxLength="1" value="" />
							</p>
							<p class="promptWrong"></p>
							<ul class="liStyle">
									<li>Ask</li>
									<li>Quit</li>
							</ul>
						</div>
						<div class="promptAnswer">
							<p class="promptArea-1">Number 
								<span class="promptNum-1"></span> 
								<span class="promptIs-1"></span>
							</p>
							<p class="promptArea-2">Number 
								<span class="promptNum-2"></span> 
								<span class="promptIs-2"></span>
							</p>
						</div>
					</article>
				</div>				
			</div>
		</div>
		<img class="konan" src="../img/konan.png" />
	</div>
	<? include("bottom.php");?>
</body>
</html>