function printNumbers1_10(from, to) {
  let num = from;

  let timerId = setInterval(function() {
    document.write(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
}

function printNumbersInterval20_100() {
  let i = 1;
  let timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}

function notify(message,time){
	let start = 1;
	let timerId = setInterval(function(){
			console.log(start);
			document.getElementById("window").style.display = "block";
			if(start == time){
				document.getElementById("window").style.display = "none";
				clearInterval(timerId);
			}
			document.getElementById("window").addEventListener("click", ()=>{
				document.getElementById("window").style.display = "none";
				clearInterval(timerId);	
			});			
			start++;
	},time);
	document.getElementById("window").style.cssText = "text-align:center;padding:10px;font-weight:bold;"
	document.getElementById("window").innerHTML = message;
}
