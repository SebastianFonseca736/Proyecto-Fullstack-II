let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Si no hay carrito en localStorage inicializa como array vacío
let tbody = document.getElementById("carrito");
let totalSpan = document.getElementById("total"); 

function mostrarCarrito() {
    tbody.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => { //forEach recorre cada producto en el carrito
        let subtotal = producto.precio * (producto.cantidad || 1);
        total += subtotal;
        tbody.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td><img src="${producto.foto}" class="foto" style="width:80px;height:80px;object-fit:cover;"></td>
                <td>${producto.precio}</td>
                <td><input type="number" value="${producto.cantidad || 1}" min="1" class="form-control w-50" onchange="cambiarCantidad(${index}, this.value)"></td>
                <td>${subtotal}</td>
                <td><button class="btn btn-outline-warning btn-sm" onclick="eliminarProducto(${index})">Eliminar</button></td>
            </tr>
        `;
    });

    totalSpan.textContent = total;
}

function cambiarCantidad(index, cantidad) {
    carrito[index].cantidad = parseInt(cantidad);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
mostrarCarrito();
