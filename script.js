function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar tap img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar.png")
  } else{
    //se tiver light mode, manter imagem normal
    img.setAttribute('src', './assets/assets/avatar-glauber.png')
  }

}