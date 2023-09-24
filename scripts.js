function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag image substituir a imagem
    const img = document.querySelector('#profile img')


    //substituir a imagem

    
    if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', '/assets/BgClaro.png')
    } else {
    //se estiver sem light mode, manter a imagem origianl
        img.setAttribute('src', '/assets/eu.png')
    }
    

    if (html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto de Henrique Martelini usando camiseta preta, com o sol da manhã em seu rosto, levemente sorrindo com o fundo azul claro')
    } else {
        img.setAttribute('alt', 'Foto de Henrique Martelini usando camiseta preta, apoiado em uma grade com o sol do pôr do sol em seu rosto')
    }    
}