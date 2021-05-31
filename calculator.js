function calcy(){
    let phy= document.getElementById("phy").value;
    let che= document.getElementById("che").value;
    let math= document.getElementById("math").value;
    let bio= document.getElementById("bio").value;

    let totalgrades=parseFloat(phy)+parseFloat(che)+parseFloat(math)+parseFloat(bio);
    //let totalgrades= phy+che+math+bio;
    alert(totalgrades);

    let perc=(totalgrades/400)*100;
    alert(perc +"%");
}