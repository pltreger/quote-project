var req = new XMLHttpRequest();
req.open("GET", "http://quotes.rest/qod.json", false);
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
        console.log(req.responseText);
    } else {
        var jsonError = JSON.parse(req.responseText);
        document.getElementById("quote").innerHTML="Error "+jsonError.error.code;
        document.getElementById("author").innerHTML=jsonError.error.message;
    }
});
req.addEventListener("error", function () {
    document.getElementById("quote").innerHTML="Network error";
});

req.send(null);
var json = JSON.parse(req.responseText);
console.log(json);

document.getElementById("date").innerHTML=json.contents.quotes[0].date;
document.getElementById("quote").innerHTML=json.contents.quotes[0].quote;
document.getElementById("author").innerHTML=json.contents.quotes[0].author;
document.getElementById("imageBox").src=json.contents.quotes[0].background;