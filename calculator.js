function calcy(){
    let phy= document.getElementById("phy").value;
    let che= document.getElementById("che").value;
    let math= document.getElementById("math").value;
    let bio= document.getElementById("bio").value;

    let totalgrades=parseFloat(phy)+parseFloat(che)+parseFloat(math)+parseFloat(bio);
   
    alert(totalgrades);
    document.writeln("<h1>Total marks:" + totalgrades +"</h1>");

    let perc=(totalgrades/400)*100;
    alert(perc +"%");
    document.writeln("<h1>percentage:"+ perc +" %</h1>");
}