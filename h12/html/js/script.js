function isEmpty(obj) {
  for(let key in obj) {
  	if(obj.hasOwnProperty(key)){
    	return false;
  	}
  }
  return true;
}

let calculator = {
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  },
  read(){
    this.a = +prompt('Enter a:', 0);
    this.b = +prompt('Enter b:', 0);
  }
};

function askPassword(ok, fail) { 
  let password = prompt("Password?", ''); 
  if (password == "rockstar") ok(); 
  else fail(); 
} 
let user = { 
  name: 'Вася', 
  loginOk() { 
    alert(`${this.name} logged in`); 
  },  
  loginFail() { 
    alert(`${this.name} failed to log in`); 
  }, 
};
