// Array de productos
let productos = [];

// Función para cargar productos
function cargarProductos() {
    productos = [
        { id: 1, nombre: 'Bajaj Avenger 220', precio: 1111, imagen: 'images/Motos/Bajaj/Avenger 220.jpg' },
        { id: 2, nombre: 'Bajaj Boxer 150 AT', precio: 1984984.91, imagen: 'images/Motos/Bajaj/Boxer 150 At.jpg'  },
        { id: 3, nombre: 'Bajaj Dominar 250', precio: 5629986.08, imagen: 'images/Motos/Bajaj/Dominar 250.jpg'  },
        { id: 4, nombre: 'Bajaj Dominar D400', precio: 7092973.32, imagen: 'images/Motos/Bajaj/Dominar D400.jpg'  },
        { id: 5, nombre: 'Bajaj Rouser As 200', precio: 1111, imagen: 'images/Motos/Bajaj/Rouser As 200.jpg'  },
        { id: 6, nombre: 'Bajaj Rouser Ns 125', precio: 2457992.35, imagen: 'images/Motos/Bajaj/Rouser Ns 125.jpg'  },
        { id: 7, nombre: 'Bajaj Rouser Ns 160', precio: 3222991.14, imagen: 'images/Motos/Bajaj/Rouser Ns 160.jpg'  },
        { id: 8, nombre: 'Bajaj Rouser Ns 200 Fi', precio: 1111, imagen: 'images/Motos/Bajaj/Rouser Ns 200 FI.jpg'  },
        { id: 9, nombre: 'Bajaj Rouser Ns 200', precio: 4241989.14, imagen: 'images/Motos/Bajaj/Rouser Ns 200.jpg'  },
        { id: 10, nombre: 'Bajaj Rouser Rs 200', precio: 1, imagen: 'images/Motos/Bajaj/Rouser Rs 200.jpg'  },
        { id: 11, nombre: 'Bajaj Rouser V 15', precio: 1, imagen: 'images/Motos/Bajaj/Rouser V 15.jpg'  },
        { id: 12, nombre: 'Brava Altino 150', precio: 1140000, imagen: 'images/Motos/Brava/Altino 150.png'  },
        { id: 13, nombre: 'Brava Elektra 150', precio: 1540000, imagen: 'images/Motos/Brava/Elektra 150.png'  },
        { id: 14, nombre: 'Brava Lazer 70', precio: 1320000, imagen: 'images/Motos/Brava/Lazer 70.png'  },
        { id: 15, nombre: 'Brava Nevada 110 Base', precio: 970000, imagen: 'images/Motos/Brava/Nevada 110 Base.png'  },
        { id: 16, nombre: 'Brava Nevada 110 Full', precio: 1140000, imagen: 'images/Motos/Brava/Nevada 110 Full.png'  },
        { id: 17, nombre: 'Brava Nevada 125', precio: 1170000, imagen: 'images/Motos/Brava/Nevada 125.png'  },
        { id: 18, nombre: 'Brava Texana 200', precio: 1, imagen: 'images/Motos/Brava/Texana 200.png'  },
        { id: 19, nombre: 'Brava Texana Hs 250', precio: 2250000, imagen: 'images/Motos/Brava/Texana Hs 250.png'  },
        { id: 20, nombre: 'Corven Dx 70', precio: 1374922.29, imagen: 'images/Motos/Corven/Dx 70.png'  },
        { id: 21, nombre: 'Corven Energy 110 Aleacion', precio: 1117813.83, imagen: 'images/Motos/Corven/Energy 110 Aleacion.png'  },
        { id: 22, nombre: 'Corven Energy 110 Rayos', precio: 1056547.75, imagen: 'images/Motos/Corven/Energy 110 Rayos.png'  },
        { id: 23, nombre: 'Corven Energy 110 Tuning', precio: 1430159.75, imagen: 'images/Motos/Corven/Energy 110 Tuning.png'  },
        { id: 24, nombre: 'Corven Expert 80', precio: 1731459.75, imagen: 'images/Motos/Corven/Expert 80.png'  },
        { id: 25, nombre: 'Corven Expert 150 Dot Ad', precio: 2034769.29, imagen: 'images/Motos/Corven/Expert 150 Dot Ad.png'  },
        { id: 26, nombre: 'Corven Expert 150 Milano', precio: 2173367.29, imagen: 'images/Motos/Corven/Expert 150 Milano.png'  },
        { id: 27, nombre: 'Corven Hunter 150 Ad R2', precio: 1, imagen: 'images/Motos/Corven/Hunter 150 Ad R2.png'  },
        { id: 28, nombre: 'Corven Hunter 150 Rayos', precio: 1322697.83, imagen: 'images/Motos/Corven/Hunter 150 Rayos.png'  },
        { id: 29, nombre: 'Corven Indiana 256', precio: 1, imagen: 'images/Motos/Corven/Indiana 256.png'  },
        { id: 30, nombre: 'Corven Mirage 110 Rayos', precio: 1070609.29, imagen: 'images/Motos/Corven/Mirage 110 Rayos.png'  },
        { id: 31, nombre: 'Corven Triax 150 R3', precio: 1, imagen: 'images/Motos/Corven/Triax 150 R3.png'  },
        { id: 32, nombre: 'Corven Triax 150', precio: 1623997.83, imagen: 'images/Motos/Corven/Triax 150.png'  },
        { id: 33, nombre: 'Corven Triax 200 R3', precio: 1, imagen: 'images/Motos/Corven/Triax 200 R3.png'  },
        { id: 34, nombre: 'Corven Triax 250 R3', precio: 1, imagen: 'images/Motos/Corven/Triax 250 R3.png'  },
        { id: 35, nombre: 'Corven Triax 250 Touring', precio: 5139162.75, imagen: 'images/Motos/Corven/Triax 250 Touring.png'  },
        { id: 36, nombre: 'Corven Txr 250 L', precio: 1, imagen: 'images/Motos/Corven/Txr 250 L.png'  },
        { id: 37, nombre: 'Corven Txr 250 X', precio: 1, imagen: 'images/Motos/Corven/Txr 250 L.png'  },
        { id: 38, nombre: 'Keller Crono Classic 110 Plus', precio: 1070000, imagen: 'images/Motos/Keller/Crono Classic 110 Plus.png'  },
        { id: 39, nombre: 'Keller Crono Classic 110', precio: 920000, imagen: 'images/Motos/Keller/Crono Classic 110.png'  },
        { id: 40, nombre: 'Keller Miracle 150', precio: 1580000, imagen: 'images/Motos/Keller/Miracle 150.png'  },
        { id: 41, nombre: 'Keller Miracle 200', precio: 1720000, imagen: 'images/Motos/Keller/Miracle 200.png'  },
        { id: 42, nombre: 'Keller Stratus 150', precio: 1170000, imagen: 'images/Motos/Keller/Stratus 150.png'   }
    ];
}

// Función para renderizar los productos en la tienda
function renderizarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <h3 class="venta">${producto.nombre}</h3>
            <img id="motosBusso" src="${producto.imagen}" alt="${producto.nombre}">
            <p class="venta">Precio: $${producto.precio.toFixed(2)}</p>
            <button class="agregar-btn" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        const carritoProductosDiv = document.getElementById('carrito-productos');
        const productoEnCarritoDiv = document.createElement('div');
        productoEnCarritoDiv.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        carritoProductosDiv.appendChild(productoEnCarritoDiv);

        // Actualizar total
        const totalSpan = document.getElementById('total');
        const totalActual = parseFloat(totalSpan.textContent);
        totalSpan.textContent = (totalActual + producto.precio).toFixed(2);
    }
}

// Función para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', function() {
    const carritoProductosDiv = document.getElementById('carrito-productos');
    carritoProductosDiv.innerHTML = '';
    // Reiniciar total
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = '0.00';
});

// Cargar productos al cargar la página
window.onload = function() {
    cargarProductos();
    renderizarProductos();
};