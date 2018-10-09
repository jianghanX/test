var username = document.getElementById("username")
//console.log(username)
var Info = document.getElementById("info")
//console.log(Info)
username.onblur = function(){
//	console.log(this.value)
	var xhr = new XMLHttpRequest();
	xhr.open("GET","php/login.php?uname="+this.value);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
//			alert(xhr.responseText)
			if (xhr.responseText == "y") {
				Info.innerHTML = "用户名已存在"
			}else{
				Info.innerHTML = "OK"
			}
		}
	}
}
