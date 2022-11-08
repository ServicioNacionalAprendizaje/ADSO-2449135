function ValidarNumero(mensaje, dataId, min, max, negativo) {
    data = 0;

    data = parseFloat(document.getElementById(dataId).value);

    if (min == 0 && max == 0 && negativo == false && data > 0) {
        // Mensaje(mensaje,2);
        return true;
    } else {
        document.getElementById(dataId).value = "";
        Mensaje(mensaje,1);
    }
}

function Mensaje(mensaje,tipo) {
    /*
        1: Mensaje error
        2: Mensaje OK
    */    
    if(tipo==1){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensaje,
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    }else if(tipo==2){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Dato almacenado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

