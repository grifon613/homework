
	//fetch('http://api.openweathermap.org/data/2.5/weather?id=687700&units=metric&lang=ru&appid=482f87f478cf5ec9053aedb6efab688f').then(function (resp) {return resp.json() }).then(function (data) {
	fetch('http://api.openweathermap.org/data/2.5/weather?q=Zaporizhia&units=metric&lang=ru&appid=482f87f478cf5ec9053aedb6efab688f').then(function (resp) {return resp.json() }).then(function (data) {
	   	document.querySelector('.weather__city').textContent = data.name;
    	document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp) + '&deg;';
    	document.querySelector('.weather__forecast_minmax').innerHTML = Math.round(data.main.temp_min) + '&deg; / ' + Math.round(data.main.temp_max) + '&deg;';
   		document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    	document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Zaporizhia&units=metric&lang=ru&appid=482f87f478cf5ec9053aedb6efab688f&count=5').then(function (resp) {return resp.json() }).then(function (data){
        //console.log(data);
        for(let i = 1; i < data.list.length; i++){
            //alert(new Date(data.list[i].dt*1000));
            //alert(data.list[i].dt_txt);
            //alert(data.list[i].main.temp);
            let temp = data.list[i].dt_txt.split(" ");
            let date = temp[0].split("-");
            //alert(date);
            document.querySelector('.weather__day_forecast').style.cssText += "border-radius: 5px; border: 1px solid #cfcfcf;box-shadow: 0 0 10px rgba(0,0,0,0.5);"
            document.querySelector('.weather__day_forecast').innerHTML += "<p>" + date[2] + "." + date[1] + "." + date[0] + "&nbsp;" + temp[1] + "</p>";
            document.querySelector('.weather__day_forecast').innerHTML += "<p>" + Math.round(data.list[i].main.temp) + "&deg;</p>";
            document.querySelector('.weather__day_forecast').innerHTML += "<p>" + data.list[i].weather[0].description + "</p>";
            document.querySelector('.weather__day_forecast').innerHTML += `<p><img class=\"border:0;width:10px;position:absolute;left:0;top:0;\" src="https://openweathermap.org/img/wn/${data.list[i].weather[0]['icon']}.png"></p>`;
        }            
    }) 
	.catch(function () {
        //Обрабатываем ошибки
    });