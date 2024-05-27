/**
 * 
 */

 var guardar = [];
 
 function pedido(){
	 
	 let usuario, coste, fechaEntrada, fechaSalida;
	 
	 const escribe = document.getElementById("tabla");
	 usuario = prompt("Usuario del pedido");
	 
	 coste = prompt("Coste del pedido");
	 
	 
	 let dia = prompt("día de llegada a oficina");
	 
	 let mes = prompt("mes de llegada a oficina");
	 
	 let anyo = prompt("año de llegada a oficina");
	 
	 fechaEntrada = new Date(anyo, (mes - 1), dia);
	 alert(fechaEntrada);
	 
	 
	 fechaSalida = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate() + 5);
	 alert(fechaSalida);
	 
	 let fecha = new Date();
	 
	 let diaH = fecha.getDate();
	 
	 let mesH = fecha.getMonth();
	 
	 let anyoH = fecha.getFullYear();
	 
	 fechaCompara = new Date(anyoH, (mesH - 1), diaH);
	 alert(fechaCompara);
	 
	 
	 if(fechaEntrada >= fechaCompara){
		 
		 if(fechaSalida.getDate() === 0){
			 dia = fecha.setDate(fecha.getDate() + 1); 
		 }
		 escribe.innerHTML += ("<tr><td>" + usuario + "</td>"+ "<td>" + coste + "</td>" + "<td>" + fechaEntrada.getDate() + "/" + fechaEntrada.getMonth() + "/" + fechaEntrada.getFullYear() + "</td>" + "<td>" + fechaSalida.getDate() + "/" + fechaSalida.getMonth() + "/" + fechaSalida.getFullYear() +"</td></tr>");
		 guardar.push([usuario, coste, fechaEntrada, fechaSalida]);
		 }
		 else{
			alert("La fecha es inferior al dia  de hoy");
		 }
		 
	 }
	 
 