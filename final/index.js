const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const express = require('express');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: true});
const fs = require('fs');
// Установка механизма представления handlebars
const handlebars = require('express-handlebars')
// Установка шаблона для всех страниц
.create({ defaultLayout:'main' });
// Переменная состояния сессии пользователяю По умолчанию - отключена
let status = false;
var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
// Объявление маршрутов
// Страница регистрации
app.get("/login", function(req,res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;	
	return res.render("login",{
		title: "Авторизация",
		header: "Авторизация",
		copyright: copy
	});
});
// Проверка существования пользователя и переход на определенную станицу
app.post("/login", urlencodedParser, function (req, res) {
    if(!req.body) return res.status(400);
    //console.log(req.body);
    if((req.body.userName == 'admin')&&(req.body.userPassword == '12345')){
    	//res.location("/admin");
    	//console.log(req.body.userName);
    	status = true;
    	return res.redirect("/admin"); 
    }
    if((req.body.userName == 'user')&&(req.body.userPassword == '67890')){
    	//res.location("/admin");
    	//console.log(req.body.userName);
    	status = true;
    	return res.redirect("/user"); 
    } else{
    	return res.redirect("/");
    }
    //res.send(`${req.body.userName} - ${req.body.userPassword}`);
});
// Переход на главную страницу
app.get('/logout', function(req,res){
	status = false;
	return res.redirect('/');
});
// Страница администратора
app.get('/admin', function(req,res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;

let name = [];
let array = [];
let pages = fs.readdir(__dirname + '/views', (error, files) => {
	//console.log(files);
	try{

		array.push(files);
		for(let i = 0; i < array.length; i++){
			name = array[i];
		

	return res.render("admin",{
		title: "Админ панель",
		header: "Админ панель",
		files: name,		
		//sign: true,
		sign: status,
		role: 'admin',
		copyright: copy
	});

	}

} catch(error){console.log(error)}

});

});
// Страница пользователя
app.get('/user', function(req,res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;	
	return res.render("user",{
		title: "Пользовательская панель",
		header: "Пользовательская панель",
		//sign: true,
		sign: status,
		role: 'user',
		copyright: copy
	});
});
// Главная страница
app.get('/', function(req, res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;

return res.render('home',{
        title: "Запорожье",
        header: "Экскурсия по Запорожью",
        sign: status,
        copyright: copy
    });

});
// Страница галереи
app.get('/gallery', function(req, res){

let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;

	let file = [];
	let array = [];
	//let images = fs.readdir("public/img/slider", (error, files) => {
	let images = fs.readdir(__dirname + "/public/img/slider", (error, files) => {	
		//console.log(files);
		try{

		array.push(files);
		for(let i = 0; i < array.length; i++){
			//console.log(array[i]);
			file = array[i];

return res.render('gallery', {
		title: "Галерея",
		header: "Галерея",
		slider: file,
		sign: status,
		copyright: copy
	});

		}

	} catch(error){ console.log(error)}

	});


});

app.get('/history', function(req, res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now;	
return res.render('history',{
	title: "История",
	header: "История",
	sign: status,
	copyright: copy
});
});

app.get('/map', function(req, res){
let copy = "";
let now = new Date().getFullYear();
let made = '2020';
if(now == made){
	copy = "Copyright" + entities.decode('&copy;') + made;
} else copy = "Copyright" + entities.decode('&copy;') + now	
return res.render('map',{
	title: "Карта",
	header: "Карта",
	sign: status,
	copyright: copy
});
});

// пользовательская страница 404
app.use(function(req, res){
return res.status(404);
return res.render('404');
});
// пользовательская страница 500
app.use(function(err, req, res, next){
console.error(err.stack);
return res.status(500);
return res.render('500');
});
app.listen(app.get('port'), function(){
console.log( 'Express запущен на http://localhost:' + app.get('port') + '; нажмите Ctrl+C для завершения.' );
});