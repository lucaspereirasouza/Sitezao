let clicado = false;

document.getElementById("botaoramos").onclick = function(){  
  if (clicado == false){
  clicado = true
    var img = document.getElementById("imagem")
  img.style.width = "500px";
  return img;
  }
  else{
    clicado = false
    var img = document.getElementById("imagem")
  img.style.width = "35px";
  return img;
  }
}