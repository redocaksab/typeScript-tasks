type post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IPost {
    posts: post[];
}

function getPosts<T>(url: string): Promise<T> {
    return fetch(url, {method: "GET"}).then(response => response.json());
}

const url = "https://jsonplaceholder.typicode.com/posts";
let divWrap = document.createElement("div");
getPosts<IPost>(url).then((response: IPost) => {
    for(let post in response) {
       divWrap.innerHTML += `<div>UserId: ${response[post].userId}</div><div>Title: ${response[post].title}</div><div>Body: ${response[post].body}</div><hr>`;
    }
    document.body.append(divWrap);
})



