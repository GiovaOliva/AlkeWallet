$(document).ready(function(){
    $('#transferencia').click(function(e){
        e.preventDefault();
        let monto = parseInt($('#monto').val());
        //para capturar la opcion seleccionada por el cliente tenemos que ejecutar los siguientes pasos:
        let opcionContacto = document.getElementById("inputContacto");
        let contacto = opcionContacto.options[opcionContacto.selectedIndex].text;
        let contactoTransferencia = contacto.split(',');
        //la transferencia solo sera operable si el cliente selecciona un contacto
        if (contacto != "Elegir Cuenta"){
            if(monto > 0 && monto != NaN){
                Alerta(`Transferencia realizada con exito a ${contactoTransferencia[0]} por el monto de $ ${monto}`, 'success')
                
            }else{
                Alerta('Ingrese un monto valido', 'danger')
            }
          
        }else{
            Alerta('Seleccione un contacto', 'danger')
        }
        $("#monto").val('');
    })
})



const alertPlaceholder = document.getElementById('Alert')
const Alerta = (mensaje, tipo) => {
  const contenido = document.createElement('div')
  contenido.innerHTML = [
    `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
    `   <div>${mensaje}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(contenido)
}