// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>response.json())
// .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
        method: "DELETE",
       
    }
)
.then(response=>response.json())
.then(data => console.log(data))
.catch(err=>{console.log(err)})