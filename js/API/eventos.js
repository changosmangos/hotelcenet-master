// Eventos
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){ 
			if(!isLogin())
			window.location.href = "#login"; 
		  $("#regSend").tap (function() {
			  if($("#regNom").val()=! ""&& $("#regTel").val()!= "" && $("regMail").val()!= "") {
				  var nom = $("#regNom").val();
				  var tel = $("#regTek").val();
				  var mail = $("#regMail").val();
				  navigator.notification.alert (nom + "\n" + tel + "\n" + mail, null, "HOTEL", "Aceptar" );
				  
			  }else{
				alert("Se necesitan llenar los campos obligatoriamente", null, "HOTEL", "Ok");
				  
			  }
		  
		  });
	}, false);
	
});

function isLogin(){
	return false;
}