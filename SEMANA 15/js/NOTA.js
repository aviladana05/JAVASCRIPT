function limpiar(){
    document.getElementById("Nota1").value="";//borrar todo en cuadro texto nota1
    document.getElementById("Nota2").value="";//borrar todo en cuadro texto nota2
    document.getElementById("Nota3").value="";//borrar todo en cuadro texto nota3
    document.getElementById("Definitiva").value="";//borrar todo en cuadro texto definitiva
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asigna nota ingresada x teclado
    var n2=document.getElementById("Nota2").value;//Asigna nota ingresada x teclado
    var n3=document.getElementById("Nota3").value;//Asigna nota ingresada x teclado
    //calcular definitiva
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//fx promedio
    //COLOCAR NOTA DEFINITIVA EN FORMULARIO
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
    
}