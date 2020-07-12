function copyright(){
	let start = '2020';
	let now = new Date().getFullYear();
	if(start == now){
		document.querySelector(".container>footer").innerHTML += "<span>Copyright &copy;" + start + "</span>";
	}	else{
			document.querySelector(".container>footer").innerHTML += "<span>Copyright &copy;" + start + " - " + now + "</span>";
		}
}