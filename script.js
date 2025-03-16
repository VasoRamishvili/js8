let request1 = new XMLHttpRequest()

request1.open('GET','https://reqres.in/api/unknown');

let div1 = document.getElementById('maindiv')

request1.addEventListener('load', function(){
    let response = this.response
    let responseJS = JSON.parse(response)
    console.log(responseJS);
    
    let ul = document.createElement('ul');
    div1.appendChild(ul)
   
    responseJS.data.forEach(element => {
        let li = document.createElement('li')
        let colors = element.color
        li.style.backgroundColor = colors
        li.textContent = element.name + " " + colors 
        ul.appendChild(li)
    });
})

request1.addEventListener('error', function(){
    alert("error")
})

request1.send()




