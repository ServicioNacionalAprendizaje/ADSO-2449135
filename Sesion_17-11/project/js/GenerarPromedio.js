var promedio = 0;
var cantidad = 0;
var html="";

function GenerarPromedio(){
    var nombre="";
    var nota=0;
    
    // Obtener los valores del formulario
    promedio = parseFloat(document.getElementById('promedio').value);
    nombre = document.getElementById('nombre').value;
    nota = parseFloat(document.getElementById('nota').value);
    
    cantidad++;
    promedio=(promedio+nota)/cantidad;


    //Alternativa 1
    // html= `<tr>
    //         <td>
    //             <input type="text" class="form-label mt-1" name="persona`+cantidad+`" id="persona`+cantidad+`" value="`+nombre+`" disabled>
    //         </td>
    //         <td>
    //             <input type="text" class="form-label mt-1" name="nota`+cantidad+`" id="nota`+cantidad+`" value="`+nota.toFixed(2)+`" disabled>
    //         </td>
    //         <td>Button</td>
    //         <td>Button</td>
    //     </tr>`;    
    // document.getElementById('dataResult').innerHTML = html;

   
    // Agregar celda a celda
    // var  table = document.getElementById("dataResult");
    // var row = table.insertRow(cantidad);    
    // var cel1 = row.insertCell(0);
    // var cel2 = row.insertCell(1);
    // var cel3 = row.insertCell(2);
    // var cel4 = row.insertCell(3);
    // cel1.innerHTML =`<input type="text" class="form-label mt-1" name="persona`+cantidad+`" id="persona`+cantidad+`" value="`+nombre+`" disabled>`;
    // cel2.innerHTML =`<input type="text" class="form-label mt-1" name="nota`+cantidad+`" id="nota`+cantidad+`" value="`+nota+`" disabled>`;
    // cel3.innerHTML =`jfhdjf`;
    // cel4.innerHTML =`jfhdjf`;

    // Luego
    // document.getElementById('dataResult').appendChild(html);


    //Salida final
    document.getElementById('promedio').value = promedio.toFixed(2);       
    Limpiar();
}

function Limpiar(){
    document.getElementById('nombre').value = "";
    document.getElementById('nota').value="";
}