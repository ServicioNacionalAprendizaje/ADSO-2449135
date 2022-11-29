var html = "";
var contVen = 0;

function EditRow(id) {
    document.getElementById('nombre').value = document.getElementById('rowNombre' + id).innerHTML;
    document.getElementById('valorBruto').value = document.getElementById('rowValorBruto' + id).innerHTML;
    document.getElementById('porcentajeDescuento').value = document.getElementById('rowPorcenajeDescuento' + id).innerHTML;
    document.getElementById('id').value = id;
}

function addRow() {
    // datos del formulario
    var nombre = document.getElementById('nombre').value;
    var valorBruto = parseFloat(document.getElementById('valorBruto').value);
    var porcentajeDescuento = parseFloat(document.getElementById('porcentajeDescuento').value);
    var valorIva = valorBruto * 0.19;
    var valorNeto = valorBruto + valorIva;
    var valorDescuento = (valorNeto * porcentajeDescuento) / 100;
    var valorVenta = valorNeto - valorDescuento;

    contVen++;
    // Get a reference to the table
    let tableRef = document.getElementById("dataResult");

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let cellNombre = newRow.insertCell(0);
    let cellValorBruto = newRow.insertCell(1);
    let cellPorcentajeDescuento = newRow.insertCell(2);
    let cellDescuento = newRow.insertCell(3);
    let cellValorVenta = newRow.insertCell(4);
    let cellEditar = newRow.insertCell(5);
    let cellEliminar = newRow.insertCell(6);


    // Append a text node to the cell            
    let dataNombre = `<label name="rowNombre` + contVen + `" id="rowNombre` + contVen + `">` + nombre + `</label>`;
    let dataValorBruto = `<label name="rowValorBruto` + contVen + `" id="rowValorBruto` + contVen + `">` + valorBruto + `</label>`;
    let dataPorcentajeDescuento = `<label name="rowPorcenajeDescuento` + contVen + `" id="rowPorcenajeDescuento` + contVen + `">` + porcentajeDescuento + `</label>`;
    let dataDescuento = `<label name="rowDescuento` + contVen + `" id="rowDescuento` + contVen + `">` + valorDescuento + `</label>`;
    let dataValorVenta = `<label name="rowValorVenta` + contVen + `" id="rowValorVenta` + contVen + `">` + valorVenta + `</label>`;
    let dataEditar = `<img src="../../asset/library/node_modules/bootstrap-icons/icons/pencil-square.svg" alt="" onclick="EditRow(` + contVen + `)">`;
    let dataEliminar = `<img src="../../asset/library/node_modules/bootstrap-icons/icons/trash2.svg" alt="">`;

    cellNombre.innerHTML = dataNombre;
    cellValorBruto.innerHTML = dataValorBruto;
    cellPorcentajeDescuento.innerHTML = dataPorcentajeDescuento;
    cellDescuento.innerHTML = dataDescuento;
    cellValorVenta.innerHTML = dataValorVenta;
    cellEditar.innerHTML = dataEditar;
    cellEliminar.innerHTML = dataEliminar;

    clearData();
}

function clearData() {
    document.getElementById('nombre').value = "";
    document.getElementById('valorBruto').value = "";
    document.getElementById('porcentajeDescuento').value = "";
    document.getElementById('id').value = "";
}

// Método para la modicación de un registro
function updateRow() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var valorBruto = parseFloat(document.getElementById('valorBruto').value);
    var porcentajeDescuento = parseFloat(document.getElementById('porcentajeDescuento').value);
    
    var valorIva = valorBruto * 0.19;
    var valorNeto = valorBruto;
    var valorDescuento = ((valorBruto + valorIva) * porcentajeDescuento) / 100;
    var valorVenta = (valorBruto + valorIva) - valorDescuento;

    document.getElementById('rowNombre' + id).innerHTML = nombre;
    document.getElementById('rowValorBruto' + id).innerHTML = valorNeto;
    document.getElementById('rowPorcenajeDescuento' + id).innerHTML = porcentajeDescuento;
    document.getElementById('rowDescuento' + id).innerHTML = valorDescuento;
    document.getElementById('rowValorVenta' + id).innerHTML = valorVenta;

    clearData();
}

//Método para cerrar caja
function CerarCaja() {
    var totalValorBruto = 0;
    var totalPorcentajeDescuento = 0;
    var totalDescuento = 0;
    var totalValorVenta = 0;
    var cierreCaja = "";
    for (var id = 1; id <= contVen; id++) {
        totalValorBruto += parseFloat(document.getElementById('rowValorBruto' + id).innerHTML);
        totalPorcentajeDescuento += parseFloat(document.getElementById('rowPorcenajeDescuento' + id).innerHTML);
        totalDescuento += parseFloat(document.getElementById('rowDescuento' + id).innerHTML);
        totalValorVenta += parseFloat(document.getElementById('rowValorVenta' + id).innerHTML);        
    }
    cierreCaja = `<table class="table table-hover">
                        <thead>
                            <tr class="table-active">                    
                                <td>Total Valor Bruto</td>
                                <td>Total Iva</td>
                                <td>Total Porcentaje Descuento</td>
                                <td>Total Descuento</td>
                                <td>Total Valor Venta</td>                    
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Aquí se imprime de manera dínamica-->
                            <tr class="table-light">                    
                                <td>`+ totalValorBruto + `</td>
                                <td>`+ (totalValorBruto * 0.19) + `</td>
                                <td>`+ totalPorcentajeDescuento + `</td>
                                <td>`+ totalDescuento + `</td>
                                <td>`+ totalValorVenta + `</td>                    
                            </tr>
                        </tbody>
                    </table>`;
    
    document.getElementById('dataGlobal').innerHTML = cierreCaja;
}
