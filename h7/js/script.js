//Task 1
function circuit(a){
	return function result(b){
		return document.write(a + b);
	}
}

//Task 2
function makeCounter() {
	let start = 1;
 	return function count() {
    	return start++;
 	};
}
document.write("<p>2. Счетчики: </p>");
let counter = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();
let counter4 = makeCounter();
document.write("<p> Counter(): "  + counter()  + "</p>"); 
document.write("<p> Counter2(): " + counter2() + "</p>"); 
document.write("<p> Counter(): "  + counter()  + "</p>"); 
document.write("<p> Counter3(): " + counter3() + "</p>"); 
document.write("<p> Counter4(): " + counter4() + "</p>"); 
document.write("<p> Counter2(): " + counter2() + "</p>");
document.write("<p> Counter(): "  + counter()  + "</p>");
document.write("<p> Counter4(): " + counter4() + "</p>");		

//Task 3
function sumInput(){
	let array = [];
	do{
		let num = prompt("Введите число", 0);
		if(isNaN(num) || (num === "") || (num === null)) break;
		array.push(num);
	}	while(true);
	let sum = 0;
	for(let i = 0; i < array.length; i++){
		sum += Number(array[i]);
	}
	return sum;
}
