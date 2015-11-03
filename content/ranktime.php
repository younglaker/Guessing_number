<?
	include("conn.php");
	$sql = "select * from `rank` order by `timeMin` asc ,`timeSec` asc limit 0,10";
	$query = mysql_query($sql);
	$i = 1;
	while($row = mysql_fetch_array($query)){
?>
		<li>
			<span class="rankNum"><?= $i . "、";?></span>
			<span class="nameT"><?= $row['user'];?></span>
			<span class="timeRecord"><?= $row['timeMin'];?>'<?= $row['timeSec'];?>"</span>
		</li>	
<?
		$i++;
	}
?>
