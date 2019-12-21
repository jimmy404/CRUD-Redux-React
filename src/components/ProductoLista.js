import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';

function ProductoLista({producto}) {

    const eliminarProducto = async id => {
        console.log('eliminando',id);

        //TODO: Eliminar los registros
Swal.fire({
    title: '¿Estas seguro?',
    text: "Un Platillo eliminado no se puede recuperar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar',
    cancelButtonText: 'Cancelar'
}).then(async(result) => {
    if (result.value) {

        const url = `http://localhost:4000/restaurant/${id}`;
        const resultado = await axios.delete(url);
        if(resultado.status === 200){
            Swal.fire(
                'Eliminado',
                'El producto se ha eliminado',
                'success'
            )
        }

    }
})

    }



    return(
            <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between
            align-items-center">
            <p>
                {producto.nombrePlatillo}
                <span className="font-weigth-bold">
                    ${producto.precioPlatillo} {' '}
                </span>
            </p>
                <div>
                    <Link
                    to={`/productos/editar/${producto.id}`}
                    className="btn btn-success mr-2"
                    >Editar </Link>
                    <button type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(producto.id)}
                    >
                    Eliminar &times;
                    </button>
                </div>
            </li>
    )
}

export default ProductoLista;