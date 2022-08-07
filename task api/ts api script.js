let ap=fetch("https://jsonplaceholder.typicode.com/posts")
ap.then((data)=>data.json()).then((data1)=>foo(data1))
function foo(arr){
    for(let i=25;i<=35;i++){
        console.log(arr[i])
        let div=document.createElement("div")
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"><u>Id</u>:${arr[i].id}</h5>
          <h6 class="card-subtitle mb-2 text-muted"><u>Title</u>:${arr[i].title}</h6>
          <p class="card-text"><u><b>Body</b></u>:${arr[i].body}</p>
        </div>
      </div>`
      document.body.append(div)
    }
}