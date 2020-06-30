let memory = [];

function calculate(data){
	let operator = ["+", "-", "*", "/", "%", "("];
	for(let i = 0; i < operator.length; i++){
		for(let y = 0; y < data.length; y++){
			if(operator[i] === data[y]){
				switch(data[y]){
					case "+": add(data);
					break;
					case "-": sub(data);
					break;
					case "*": mul(data);
					break;
					case "/": div(data);
					break;
					case "%": abs(data);
					break;
					case "(": brackets(data);
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
	for(let i = 0; i < number.length; i++){
		result += Number(number[i]);
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);
}

function sub(data){
	//alert(data);
	let result = 0;
	let number = data.split("-");
	result = number[0];
	for(let i = 1; i < number.length; i++){
		result -= number[i];
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);	
}

function mul(data){
	//alert(data);
	let result = 0;
	let number = data.split("*");
	result = number[0];
	for(let i = 1; i < number.length; i++){
		result *= number[i];
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);	
}

function div(data){
	//alert(data);
	let result = 0;
	let number = data.split("/");
	result = number[0];
	for(let i = 1; i < number.length; i++){
		result /= number[i];
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);	
}

function abs(data){
	//alert(data);
	let result = 0;
	let number = data.split("%");
	result = number[0];
	for(let i = 1; i < number.length; i++){
		result %= number[i];
	}
	document.querySelector("input").value = result;
	memory.push('{operation: \"' + data + '\"', 'result: \"' + result + '\"},');
	showHistory(memory);	
}		

function brackets(data){
	//alert(data);
	let number = data.replace(/[()]/g, "");
	//alert(number);
	calculate(number);
}

function showHistory(memory){
	let item = "";
	for(let i = 0; i < memory.length; i++){
		item += memory[i];
	}
	document.querySelector(".history").innerHTML = item;
}