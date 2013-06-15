// Eventos
$(document).ready(function(e){
  $("#regSend").tap (function() {
	  if($("#regNom").val()=! ""&& $("#regTel").val()!= "" && $("regMail").val()!= "") {
		  var nom = $("#regNom").val();
		  var tel = $("#regTek").val();
		  var mail = $("#regMail").val();
		  alert (nom + "\n" + tel + "\n" + mail );
	  }else{
		alert("Se necesitan llenar los campos obligatoriamente");  
		  
	  }
  
  });
});