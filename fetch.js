const user = {
    name: "user",
    age: 25,
    id: 001,
    friends: ["user45", "user434", "user343"]
}
const userJson = JSON.stringify(user);
console.log(userJson);
const userBackFromJson = JSON.parse(userJson);
console.log(userBackFromJson);

//GET info
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usersJson => displayUsers(usersJson))
  .catch(error => console.log(error))

function displayUsers(usersJson){
    const ul = document.querySelector('#users_container');
    usersJson.map(user => {
        const userName = user.name;
        const li = document.createElement('li');
        const liText = document.createTextNode(userName);
        li.appendChild(liText);
        ul.appendChild(li);

    })
}


//POST info
const title = document.getElementById("title").value;
const postBody = document.getElementById("postBody").value;
const submitBtn = document.getElementById("postSubmitBtn");


submitBtn.addEventListener("click", () => {
    const userPost = {
        title: title,
        postBody: postBody,
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(userPost),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error));

})
