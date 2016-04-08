function loadSearch() {
    var searchForm = document.getElementById("searchForm");
    var a;
    var string = "";
    for (a = 0; a < searchForm.length - 1; a++) {
        string += searchForm.elements[a].value ;
    }
    document.getElementById("searchresult").innerHTML = string;
	loadAPIData(string);
}

function loadAPIData(searchresult) {
client_id = "7cb74ad926f40dad45272a7be3315f569c38755c33010afe15f0b415175792b3";
redirect_uri = "http://www.scs.ryerson.ca/~n2varnak/Project/index.html";
var api_url = "https://api-v2launch.trakt.tv/oauth/authorize?response_type=code&client_id=" + client_id + "&redirect_uri=" + redirect_url;
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        var object = JSON.parse(request.responseText);
		document.getElementById("searchresult").innerHTML = object.title;
	}
}
request.open("GET", api_url, true);
request.send();
}