let url='http://localhost:3000/productos';
    fetch(url) //método que se enlaza a url de json
        .then(response =>response.json())
        .then(data => mostrarData(data))//data es el parámetro que recibe json
        .catch(error => console.log(error))

        const mostrarData=(data)=>{
            console.log(data)
            let tbody="" //string que se enlazara con html
            for (let i=0; i<data.length; i++)//ciclo que recorre la lista de obj
               {    
                    tbody+=`<tr>                      
                            <td>${data[i].nombre}</td>       
                            <td>
                                <a href="detalle-productos.html?nombre=${encodeURIComponent(data[i].nombre)}&foto=${encodeURIComponent(data[i].foto)}&precio=${encodeURIComponent(data[i].precio)}&descripcion=${encodeURIComponent(data[i].descripcion)}" target="_blank">
                                    <img src="${data[i].foto}" class="foto">
                                </a>
                            </td>
                            <td>${data[i].precio}</td>
                            <td>${data[i].descripcion}</td>  
                            <td>
                            <button class="btn btn-outline-success btn-sm" onclick="agregarAlCarrito(${i})">Añadir al carrito</button>
                            </td>
                        </tr>`
                }
            document.getElementById('producto').innerHTML=tbody //enlaza tbody con id de html
            localStorage.setItem("productos", JSON.stringify(data)); // guarda productos en localStorage
        }

            function agregarAlCarrito(index) {
            let productos = JSON.parse(localStorage.getItem("productos"));
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.push(productos[index]); //push es para agregar un elemento al array
            localStorage.setItem("carrito", JSON.stringify(carrito)); //actualiza el carrito en localStorage

            alert(`${productos[index].nombre} agregado al carrito`);
            }
        


