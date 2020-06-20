function task_1(){
	let name, admin;
	name = "Джон";
	admin = name;
	alert(admin);
}

function task_2(){
	let name = "Ilya";
	alert(`hello ${1}`);
	alert(`hello ${"name"}`);
	alert(`hello ${name}`); 	
}

function task_3(){
	let num = parseInt(prompt("Введите число"));
	if(isNaN(num)){
		alert("Введите число");
	}
	if(num == " "){
		alert("Введите число");
	}
	if(num == 0){
		alert(0);
	}	else if(num > 0){
			alert(1);
		}	else if(num < 0){
				alert(-1);
			}
}

function task_4(){
	let age = 70;
	if((age >= 14) && (age <= 90)){
		alert(age + " попадает в диапазон от 14 до 90 ");
	}
}

function task_5(){
	for(let i = 1; i <= 10; i++){
		if(i % 2 == 0){
			document.write(i + " ");
		}
	}
}

function min(a,b){
	if(a < b){
		document.write(a);
	}	else {
			document.write(b);
		}
}

function pow(x,n){
	let y = x;
	for(let i = 1; i < n; i++){
		y *= x;
	}
	return y;
}