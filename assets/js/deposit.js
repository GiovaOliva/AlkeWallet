
$(document).ready(function() {
    $('#deposito').click(function(e){
        e.preventDefault();
        const monto = parseInt($('#depositAmount').val());
        if (monto <= 0 || monto === NaN){
            Alerta('Ingrese un monto valido', 'danger')
        }else{
            Alerta(`Deposito de $ ${monto} realizado con exito`, 'success')
        }
        $('#depositAmount').val('');
    })
});


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