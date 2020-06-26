let memory = [];

function calculate(data){
	let operator = ["+", "-", "*", "/"];
	for(let i = 0; i < operator.length; i++){
		for(let y = 0; y < data.length; y++){
		// 	if((operator[i] === data[y]) && ("+")){
		// 		alert("+");
		// 		add(data);
		// 	}
		// 	if((operator[i] === data[y]) && ("-")){
		// 		alert("-");
		// 		sub(data);
		// 	}
		// 	if((operator[i] === data[y]) && ("*")){
		// 		mul(data);
		// 	}
		// 	if((operator[i] === data[y]) && ("/")){
		// 		div(data);
		// 	}
			if(operator[i] === data[y]){
				switch(data[y]){
					case "+": add(data);
					break;
					case "-": sub(data);
					break;
				}
			}
		}
	}
}

function add(data){
	//alert(data);
	let result = 0;
	let number = data.split("+");
	for(let i = 0; i < number.length; ++i){
		result += Number(number[i]);
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);
}

function sub(data){
	//alert(data);
	let result = 0;
	//let tmpArr = [];
	let number = data.split("-");
	for(let i = 0; i < number.length; i++){
		//alert(number[i]);
		result = Number(number[i]) - (Number(result));
	}
	//alert(number);
	//alert(result);
	// for(let i = 0; i < number.length; ++i){
	//  	//alert(number[i]);
	//  	tmpArr.push(number[i]);
	//  	for(let y = 0; y < tmpArr.length; y++){
	//  		result = Math.max(tmpArr[y]);
	//  		alert(result - Number(tmpArr[i]));
	//  	}
	// }
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);
	//}
}

function mul(data){}
function div(data){}

function showHistory(memory){
	let item = "";
	for(let i = 0; i < memory.length; i++){
		item += memory[i];
	}
	document.querySelector(".history").innerHTML = item;
}