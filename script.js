function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    //pegar a tag img
    const img = document.querySelector("#profile img")


    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src','./assets/dia.png')
        img.setAttribute('alt','Foto de Mayk brito sorrindo com oculos de sol')


    }else{
        //caso sem light mode, manter a imagem padrão
        img.setAttribute('src','./assets/noite.png')

    }



}