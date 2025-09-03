let url = 'http://localhost:3000/productos';

fetch(url) // método que se enlaza a url de json
  .then(response => response.json())
  .then(data => mostrarData(data)) // data recibe el objeto completo }
  .catch(error => console.log(error))

const mostrarData = (data) => {
  console.log(data)
  let tbody = "" // string que se enlazará con html

  for (let i = 0; i < data.productos.length; i++) {
    let producto = data.productos[i]

    // Manejo de precio único o rango
    let precio = producto.precio 
                ? producto.precio 
                : `${producto.precio_min} - ${producto.precio_max}`

    tbody += `
      <tr>
        <td>${producto.nombre}</td>
        <td>
          <a href="detalleProducto.html?nombre=${encodeURIComponent(producto.nombre)}&foto=${encodeURIComponent(foto)}&precio=${encodeURIComponent(precio)}&descripcion=${encodeURIComponent(producto.descripcion)}" target="_blank">
            <img src="${foto}" class="foto">
          </a>
        </td>
        <td>${precio}</td>
        <td>${producto.descripcion}</td>
      </tr>`
  }

  document.getElementById('producto').innerHTML = tbody
}
