
let url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response =>response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData=(data)=>{
            console.log(data)
            let tbody=""
            for (var i=0; i<data.length; i++)
               {
                    tbody+=`<tr>                      
                            <td>${data[i].userId}</td>       
                            <td>${data[i].id}</td>
                            <td>${data[i].title}</td>
                            <td>${data[i].body}</td>  
                        </tr>`
                }
                document.getElementById('usuarios').innerHTML=tbody
            }


