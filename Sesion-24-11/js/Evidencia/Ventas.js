var html ="";
var contVen=0;

function EditRow(id){
    document.getElementById('nombre').value = document.getElementById('rowNombre'+id).innerHTML;
    document.getElementById('valorBruto').value = document.getElementById('rowValorBruto'+id).innerHTML;
    document.getElementById('porcentajeDescuento').value = document.getElementById('rowPorcenajeDescuento'+id).innerHTML;    
    document.getElementById('id').value = id;
}

function addRow(){
    // datos del formulario
    var nombre = document.getElementById('nombre').value;
    var valorBruto = parseFloat(document.getElementById('valorBruto').value);
    var porcentajeDescuento = parseFloat(document.getElementById('porcentajeDescuento').value);
    var valorIva = valorBruto*0.19;
    var valorNeto = valorBruto+valorIva;
    var valorDescuento = (valorNeto*porcentajeDescuento)/100;
    var valorVenta = valorNeto-valorDescuento;

    contVen++;
    html += `<tr class="table-light">
                <td><label name="rowNombre`+contVen+`" id="rowNombre`+contVen+`">`+nombre+`</label></td>
                <td><label name="rowValorBruto`+contVen+`" id="rowValorBruto`+contVen+`">`+valorBruto+`</label></td>
                <td><label name="rowPorcenajeDescuento`+contVen+`" id="rowPorcenajeDescuento`+contVen+`">`+porcentajeDescuento+`</label></td>
                <td><label name="rowDescuento`+contVen+`" id="rowDescuento`+contVen+`">`+valorDescuento+`</label></td>                    
                <td><label name="rowValorVenta`+contVen+`" id="rowValorVenta`+contVen+`">`+valorVenta+`</label></td>
                <td><img src="../../asset/library/node_modules/bootstrap-icons/icons/pencil-square.svg" alt="" onclick="EditRow(`+contVen+`)"></td>
                <td><img src="../../asset/library/node_modules/bootstrap-icons/icons/trash2.svg" alt=""></td>                    
            </tr> `;
       document.getElementById('dataResult').innerHTML=html; 
       clearData();
}

function clearData(){
    document.getElementById('nombre').value ="";
    document.getElementById('valorBruto').value ="";
    document.getElementById('porcentajeDescuento').value ="";
    document.getElementById('id').value ="";
}

// Método para la modicación de un registro
function updateRow(){
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var valorBruto = parseFloat(document.getElementById('valorBruto').value);
    var porcentajeDescuento = parseFloat(document.getElementById('porcentajeDescuento').value);
    var valorIva = valorBruto*0.19;
    var valorNeto = valorBruto+valorIva;
    var valorDescuento = (valorNeto*porcentajeDescuento)/100;
    var valorVenta = valorNeto-valorDescuento;

    document.getElementById('rowNombre'+id).innerHTML = nombre;
    document.getElementById('rowValorBruto'+id).innerHTML = valorNeto;
    document.getElementById('rowPorcenajeDescuento'+id).innerHTML = porcentajeDescuento;
    document.getElementById('rowDescuento'+id).innerHTML = valorDescuento;
    document.getElementById('rowValorVenta'+id).innerHTML = valorVenta;

    clearData();
}
