<!--?php

$conn =  mysql_connect("localhost", "root", "") or die("数据库链接错误");
mysql_select_db("guess_num", $conn);
mysql_query("set names 'UTF-8'");

?-->

<?php

$conn =  mysql_connect("tunnel.pagodabox.com:3306", "celsa", "rfWZENMs") or die("数据库链接错误");
mysql_select_db("guess_num", $conn);
mysql_query("set names 'UTF-8'");

?>
