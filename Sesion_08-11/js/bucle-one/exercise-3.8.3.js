var cantidad=0;
var i=0;

function CrearFormulario() {
    ValidarNumero('Dato no válido, solo números positivos','cantidad',0,0,false);
    cantidad = parseInt(document.getElementById('cantidad').value);
    i = 0;
    var banderaTable; //table-active  table-light 
    var estructuraHtml = '';

    for (i = 1; i <= cantidad; i++) {
        // estructuraHtml+='<tr class="table-active">';
        // estructuraHtml+='<td>';
        // estructuraHtml+='<input type="text" name="placa" id="placa" value="">';
        // estructuraHtml+='</td>';
        // estructuraHtml+='<td>';
        // estructuraHtml+='<input type="number" name="puntoContaminante" id="puntoContaminante" value="">';
        // estructuraHtml+='</td>';
        // estructuraHtml+='</tr>';

        // estructuraHtml+="<tr class='table-active'>";
        // estructuraHtml+="<td>";
        // estructuraHtml+="<input type='text' name='placa' id='placa' value=''>";
        // estructuraHtml+="</td>";
        // estructuraHtml+="<td>";
        // estructuraHtml+="<input type='number' name='puntoContaminante' id='puntoContaminante' value=''>";
        // estructuraHtml+="</td>";
        // estructuraHtml+="</tr>";
        if(i%2 == 1){
            banderaTable='table-active';
        }else{
            banderaTable='table-light';
        }
        estructuraHtml += `<tr class="`+banderaTable+`">
                            <td>
                                <input type="text" name="placa`+i+`" id="placa`+i+`" value="" placeholder="Placa">
                            </td>
                            <td>
                                <input type="number" name="puntoContaminante`+i+`" id="puntoContaminante`+i+`" value="" onblur="ValidarNumero('Punto contaminante no válido.','puntoContaminante`+i+`',0,0,false);" placeholder="Punto contaminante">
                            </td>
                        </tr>`;
    }
    document.getElementById('data').innerHTML = estructuraHtml;
}

function CalcularDatos(){
    var dataResult = new Array();
    var datoContaminante=0;
    var placa;
    var acu=0;

    dataResult['promedio']=0;
    dataResult['puntoMayor']=0;
    dataResult['puntoMenor']=9999999;
    dataResult['placa']=0;

    

    for(i=1;i<=cantidad;i++){
        datoContaminante = parseFloat(document.getElementById('puntoContaminante'+i).value);
        placa = document.getElementById('placa'+i).value;

        if(dataResult['puntoMenor'] > datoContaminante){            
            dataResult['puntoMenor']= datoContaminante;            
            dataResult.placa=placa;
        }
        if(dataResult['puntoMayor'] < datoContaminante){            
            dataResult['puntoMayor']= datoContaminante;            
            dataResult.placa=placa;
        } 
        acu+=datoContaminante;
    }

    dataResult['promedio'] = acu/cantidad;

    document.getElementById('mayorPunto').innerHTML=dataResult['puntoMayor'];
    document.getElementById('menorPunto').innerHTML=dataResult['puntoMenor'];
    document.getElementById('promedio').innerHTML=dataResult['promedio'];
}