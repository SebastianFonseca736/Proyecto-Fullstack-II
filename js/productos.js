let url='http://localhost:3000/productos';
    fetch(url)                                //método que se enlaza a url de json
        .then(response =>response.json())
        .then(data => mostrarData(data))        //data es el parámetro que recibe json
        .catch(error => console.log(error))

        const mostrarData=(data)=>{
            console.log(data)
            let tbody=""                        //string que se enlazara con html
            for (let i=0; i<data.length; i++)   //ciclo que recorre la lista de obj
               {    
                    /*creamos filas con la información de los objetos de la lista*/
                    tbody+=`<tr>                      
                            <td>${data[i].nombre}</td>       
                            <td>
                                <a href="detalle-productos.html?nombre=${encodeURIComponent(data[i].nombre)}&foto=${encodeURIComponent(data[i].foto)}&precio=${encodeURIComponent(data[i].precio)}&descripcion=${encodeURIComponent(data[i].descripcion)}" target="_blank">
                                    <img src="${data[i].foto}" class="foto">
                                </a>
                            </td>
                            <td>${data[i].precio}</td>
                            <td>${data[i].descripcion}</td>  
                        </tr>`
                }
                document.getElementById('producto').innerHTML=tbody
            }


