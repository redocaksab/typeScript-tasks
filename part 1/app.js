function getPosts(url) {
    return fetch(url, { method: "GET" }).then(function (response) { return response.json(); });
}
var url = "https://jsonplaceholder.typicode.com/posts";
var divWrap = document.createElement("div");
getPosts(url).then(function (response) {
    for (var post in response) {
        divWrap.innerHTML += "<div>UserId: " + response[post].userId + "</div><div>Title: " + response[post].title + "</div><div>Body: " + response[post].body + "</div><hr>";
    }
    document.body.append(divWrap);
});
