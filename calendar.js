
console.log("hola jacky");
	var startDate = {};
	var _days = 0;
	var countryCode = "";
	var numCalendars = [];
	var principalJson = [];
	var day = new Array(7);
	day[0] = "Sun";
	day[1] = "Mon";
	day[2] = "Tue";
	day[3] = "Wed";
	day[4] = "Thu";
	day[5] = "Fri";
	day[6] = "Sat";



	var month = new Array();
	month[0] = {month: "January", days: 31};
	month[1] = {month: "February", days: 28};
	month[2] = {month: "March", days: 31};
	month[3] = {month: "April", days: 30};
	month[4] = {month: "May", days: 31};
	month[5] = {month: "June", days: 30};
	month[6] = {month: "July", days: 31};
	month[7] = {month: "August", days: 31};
	month[8] = {month: "September", days: 30};
	month[9] = {month: "October", days: 31};
	month[10] = {month: "November", days: 30};
	month[11] = {month: "December", days: 31};


	function renderDate(){
		var inputDate = new Date($('input[type="date"]')[0].value);
        console.log(inputDate.getDay());
        startDate.year = inputDate.getFullYear();
        startDate.numMonth = inputDate.getUTCMonth();
        startDate.nameMonth = month[inputDate.getUTCMonth()].month;
        startDate.daysMont = month[inputDate.getUTCMonth()].days;
        startDate.dayInit = inputDate.getUTCDate();

        startDate.nameDayInit = day[inputDate.getUTCDay()];
        startDate.numDayInit = inputDate.getUTCDay();
        
	};
	function validateDays(){
		var inputDays = $('input[name="days"]')[0];
		if(isNaN(inputDays.valueAsNumber)){
			_days = 0;
		}else{
			if(inputDays.valueAsNumber === ""){
				_days = 0;
			}else{
				_days = inputDays.valueAsNumber;				
			}
		}

	};
	function weeks(){
		

	};

	function json(){

		if(_days === 0){
			numCalendars = [];
		}

		if((startDate.dayInit + _days) <= startDate.daysMont){
			startDate.dayEnd = startDate.dayInit + _days;
			numCalendars.push(
				startDate
			);
		}else{
			console.log("la fecha de inicio mas los dias seleccionados son mayores a un mes");
			alert("ERROR: la fecha de inicio mas los dias seleccionados son mayores a un mes");
		}

	};

/*	function renderDays() {
		var inputDays = $('input[name="days"]')[0];
		if(isNaN(inputDays.valueAsNumber)){
			days = 0;
		}else{
			if(inputDays.valueAsNumber === ""){
				days = 0;
			}else{
				days = inputDays.valueAsNumber;				
			}
		}
	};*/
$(document).ready( function() {

	$("#butt").click(function(){
		$(".calendars").empty();
		renderDate();
		validateDays();
		json();
		

		console.log(numCalendars, _days);
		
		
		for (var i = 0; i < numCalendars.length; i++) {
			var cont = startDate.dayInit;
			var table = document.createElement("table"); //"<table class=" + "calendarTable" + "></table>";
			for (var k = 0; k < 8; k++) {
			 	var row = document.createElement("tr");
			 	if(k === 0){
			 	 	var column = document.createElement("td");
			 	 	column.setAttribute("colspan", "7");
			 	 	column.classList.add('anio');
			 	 	column.textContent = startDate.nameMonth + " " + startDate.year;
			 	 	row.appendChild(column);
			 	}else{
				 	for (var j = 0; j < 7; j++) {
				 		var column = document.createElement("td");
				 		if(cont < numCalendars[0].dayEnd){
					 		if(k === 1){
					 			column.textContent = day[j];
					 			column.classList.add("nameDay");
					 		}else if(k === 2 && j >= startDate.numDayInit){
					 			column.textContent = cont;
					 			cont += 1;
					 			if(j === 0 || j === 6 ){
							 		column.classList.add("weekend");
							 	}			 			
					 		}else if(k >= 3){
					 			column.textContent = cont;	
					 			cont += 1;
					 			if(j === 0 || j === 6 ){
							 		column.classList.add("weekend");
							 	}
					 		}else{
					 			column.classList.add("noDay");
					 		}
					 	}else{
					 		column.classList.add("noDay");
					 	}

				 		row.appendChild(column);
				 	};
			 	}
			 	table.appendChild(row);
			};
			$(".calendars")[0].appendChild(table);
		};



		startDate = {};
		days = 0;
		countryCode = "";
		numCalendars = [];
	});


	
}); 

/*	$('input[type="date"]').change(function(){
        var inputDate = new Date(this.value);
        console.log(inputDate.getDay());
        startDate.weekDay = weekday[inputDate.getDay()]
        startDate.date = inputDate.getUTCDate();
        startDate.month = month[inputDate.getUTCMonth()];
        startDate.year = inputDate.getFullYear();

    });
    $('input[name="country"]').change(function(){
		
		countryCode = this.value;
	});
	$('input[name="days"]').change(function(){		
		
		if(isNaN(this.valueAsNumber)){
			days = 0;
		}else{
			if(this.valueAsNumber === ""){
				days = 0;
			}else{
				days = this.valueAsNumber;				
			}
		}

	});*/


