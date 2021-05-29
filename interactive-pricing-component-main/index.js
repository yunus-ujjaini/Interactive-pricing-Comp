
document.getElementById("views").innerHTML=50*100;
document.getElementById("price1").innerHTML=50*15;
document.getElementById("price2").innerHTML=50*15;
document.getElementById("range").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';
    
    if(this.value==100)
    {
      document.getElementById("views").innerHTML='1'
      document.getElementById("viewunit").innerHTML='M'
    }
    else{
      document.getElementById("views").innerHTML=this.value*100;
      document.getElementById("viewunit").innerHTML='K'
    }
    document.getElementById("price1").innerHTML=this.value*15;
    document.getElementById("price2").innerHTML=this.value*15;
    if(document.getElementById("frequency1").innerHTML=="/year")
    {
      document.getElementById("price1").innerHTML=Math.trunc(parseInt(document.getElementById("price1").innerHTML)/3);
        document.getElementById("price2").innerHTML=Math.trunc(parseInt(document.getElementById("price2").innerHTML)/3);

    }
  };


function toggle(){
    let toggle= document.getElementById("togglebtn");
    if(toggle.classList.contains("toggled")==true)
    {
      toggle.classList.remove("toggled");
    }
    else{
      toggle.classList.add("toggled");
    }
    document.getElementById("top-price").classList.remove("change");
    document.getElementById("bottom-price").classList.remove("change");
    setTimeout(()=>{
      document.getElementById("top-price").classList.add("change");
      document.getElementById("bottom-price").classList.add("change");
    },500)
    setTimeout(()=>{
      if(document.getElementById("frequency1").innerHTML=="/year")
      {
        document.getElementById("frequency1").innerHTML="/month";
        document.getElementById("frequency2").innerHTML="/month";
        document.getElementById("price1").innerHTML=Math.trunc(parseInt(document.getElementById("price1").innerHTML)*3);
        document.getElementById("price2").innerHTML=Math.trunc(parseInt(document.getElementById("price2").innerHTML)*3);
      }
      else{
        document.getElementById("frequency1").innerHTML="/year";
        document.getElementById("frequency2").innerHTML="/year";
        document.getElementById("price1").innerHTML=Math.trunc(parseInt(document.getElementById("price1").innerHTML)/3);
        document.getElementById("price2").innerHTML=Math.trunc(parseInt(document.getElementById("price2").innerHTML)/3);
      }
      
    },700)
    
}
  