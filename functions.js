function pow(){
	var a = document.getElementById("pow-a").value;
	var b = document.getElementById("pow-b").value;
	var result = 1;
	if(a == "" | b == ""){
		result = "Заполните обязательные поля";
	}
	else if(b == 0){
		result = "Результат: 1"
	}
	else{
		while (b) {
			result = a * result;
			b = b - 1;
		}		
		result = "Результат: " + result;
	}
	var resultDiv = document.getElementById("pow-result");
	resultDiv.innerHTML = result;
	
};

function gcd(){
	var a = document.getElementById("gcd-a").value;
	var b = document.getElementById("gcd-b").value;
	var result = "Результат: " + 1;
	if(a == "" | b == ""){
		result = "Заполните обязательные поля";
	}
	else{
		result = "Результат: " + gcd_result(a, b);
	}
	
	var resultDiv = document.getElementById("gcd-result");
	resultDiv.innerHTML = result;
	
	function gcd_result(a, b){
		if (a == 0) 
			return b; 
		return gcd_result(b % a, a);
	};
};

function minDigit(){
	var n = document.getElementById("minDigit").value;
	var result = "Результат: " + 1;
	if(n == ""){
		result = "Заполните обязательные поля";
	}
	else{
		result = "Результат: " + Math.min(...n.split(''))
	}
	
	var resultDiv = document.getElementById("minDigit-result");
	resultDiv.innerHTML = result;
};

function pluralizeRecords(){
	var n = document.getElementById("pluralizeRecords").value;
	var result = `В результате выполнения запроса было найдено $(n) записей`;
	if(n == ""){
		result = "Заполните обязательные поля"
	}
	else{
		result = pluralize(n);
	}
	
	var resultDiv = document.getElementById("pluralizeRecords-result");
	resultDiv.innerHTML = result;
	
	function pluralize(n){
		if (n % 100 >= 11 && n % 100 <= 14) {
			return `В результате выполнения запроса было найдено ${n} записей`;
		}
    
		const lastDigit = n % 10;
		if (lastDigit === 1) {
			return `В результате выполнения запроса было найдена ${n} запись`;
		} 
		else if (lastDigit >= 2 && lastDigit <= 4) {
			return `В результате выполнения запроса было найдено ${n} записи`;
		} 
		else {
			return `В результате выполнения запроса было найдено ${n} записей`;
		}
	};
};

function fibb(){
	var n = document.getElementById("fibb").value;
	var result = "Результат: 1"; 
	if (n == 0) {
        result = "Результат: 0";
    } 
	else if (n == 1) {
		result = "Результат: 1";
    } 
	else {
        let fibPrev = 0;
        let fibCurr = 1;
        let fib;
        for (let i = 2; i <= n; i++) {
            fib = fibPrev + fibCurr;
            fibPrev = fibCurr;
            fibCurr = fib;
        }
        result = "Результат: " + fib;
	};
	
	var resultDiv = document.getElementById("fibb-result");
	resultDiv.innerHTML = result;
}