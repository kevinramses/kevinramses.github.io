   //according to loftblog tut
   $("#send").on("click", function(e){ 
    let message=`<span class="text-light">Enviado correctamente pronto me comunicare contigo</span>`;
    let icon = "success";
    let name = $("#name").val();
    let subject = $("#subject").val();
    let email = $("#email").val();
    if(!name || !subject || !email){
       message =`<span class="text-light">Complete todo los campos</span>` ;
       icon="error";
    }
    e.preventDefault();
                Swal.fire({
                  customClass: {
                    confirmButton: 'swalBtnColor'
                  },
                   html:message,
                   icon: icon,
                   background: "#283337"
                  })
    $(".form-control").val("");
  })