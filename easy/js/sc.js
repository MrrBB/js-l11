let request = new new XMLHttpRequest();

// 1) Создаем объект запроса
request.open("GET", "server.php", true, login, sassword);

//2) Настраиваем запрос
request.send()

//3) Отправляем запрос
request.status

//4) ok; not found (текстовое описание ответа сервера)
request.statusText

//5) тест ответа сервера(данные успешно записаны в базу данных)
request.responseText

//6) текущее состояние запроса(1 из этапов (Ready state))
request.readyState












/*let options = {
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		size:"16px",
		color:"#fff"
	}
}


console.log(JSON.parse(JSON.stringify(options)))*/