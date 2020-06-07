let business_list=document.getElementsByClassName('request-list')[0];
let business=document.getElementsByClassName('request')[0];
//console.log(business_list+ " "+business);
function repeatElement(ele, count, deep){
	let copy;
	for (var i=0; i<count-1; i++){
		
		//copy.innerHTML="Hello, hello , hello";
		business_list.appendChild(ele.cloneNode(deep));
	}
}
repeatElement(business, 5, true);
function changeButton(){
	
}
//API CODE IS BELOW
/*
let api="http://api.openweathermap.org/data/2.5/weather?q=";
let city="London";
let apikey="c80ffbbfe90ddff27aebc130a93c9c9f"
let url=api+city+"&APPID="+apikey;
let searchBar=document.getElementById("autocomplete");
function loop(){
	console.log("testing");
	var address="default";
	address=searchBar.value;
	console.log(address);
	//mounted();
	/*fetch("./data_class.json")
	.then(response => {
		console.log(response);
		return response.blob();
	}).then(blob =>{

	});*/
	/*fetch("./data_class.json")
	.then(function(resp) {
		return resp.json()
		}).then function(data){
		console.log(data);
	});*/
	//searchPlaceFormGoogle("6609 Duffield Drive");
/*	requestAnimationFrame(loop);
}
loop();
var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
	
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
		
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});
$(document).on('change', '#'+searchInput, function () {
    document.getElementById('latitude_input').value = '';
    document.getElementById('longitude_input').value = '';
	
    document.getElementById('latitude_view').innerHTML = '';
    document.getElementById('longitude_view').innerHTML = '';
});
/*
function searchPlaceFormGoogle(place){
	var strGoogleApi="https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
	strGoogleApi+=place;
	strGoogleApi+="&key=";
	strGoogleApi+=apikey;
	strGoogleApi=strGoogleApi.addingPercentEncoding(urlQueryAllowed);
	var urlRequst=URLRequest(URL(strGoogleApi));
	urlRequest.httpMethod="GET";
	let taskBef=URLSession.shared.dataTask(urlRequest);
	let task=taskBef { (data, response, error)
		if (error==null){
			let jsonDict=try ? JSONSerialization.jsonObject(data, mutableContainers);
			console.log("json == "+(jsonDict));
		}
		else {
			//we have error
		}
	};
	task.resume();
}*/
/*
var data=undefined;
var request = new XMLHttpRequest;
request.open('GET', 'http://v-apps-campaign.com/dunkindonuts/main/get_allStore', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
console.log(data);*/
