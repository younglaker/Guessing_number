<?php
    include('conn.php');
	
	error_reporting(0);
	function check($check){	//防脚本注入
		$check = trim($check);
		//过滤文本中的HTML实体.
		//$check = htmlentities($check);
		$check = strip_tags($check);
		//过滤文本中的内容转换为HTML实体.
		$check =  htmlspecialchars($check);
		//加入字符转移

		$check = addslashes($check);

		// $check = htmlspecialchars($youname);
		//加入字符转移
		//$check = addslashes($check);
		return $check;
	}
	
	$userName = check($_GET['u']);
	$min = check($_GET['o']);
	$sec = check($_GET['i']);
	$round = check($_GET['a']);
	
	$min = abs(substr($min,5));
	$sec = abs(substr($sec,5));
	$round = abs(substr($round,5));
	
	if($sec > 59)
		return false;
	
	$sql = mysql_query("insert into `rank` 
						(user,timeMin,timeSec,round) 
						values ('$userName','$min','$sec','$round')");
?>