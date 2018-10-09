<?php
	$uname = $_GET["uname"];
//	echo $uname;
	$arr = ["aa","bb","cc","dd","ee"];
	if(in_array($uname, $arr)){
		echo "y";
	}else{
		echo "n";
		
	}
?>