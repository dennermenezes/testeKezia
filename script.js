
/* IMAGEM DA FRENTE */
let timer = 3000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#corpo img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")
        
    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0
    
    images[currentImageIndex]
        .classList.add("selected")

    }

/* IMAGEM OPACA FUNDO */
let timer1 = 3000,
currentImageIndex1 = 0,
images1 = document
            .querySelectorAll("#corpofundo img")
max1 = images.length;

function nextImage1() {

    images1[currentImageIndex1]
        .classList.remove("selected")
        
    currentImageIndex1++

    if (currentImageIndex1 >= max)
        currentImageIndex1 = 0
    
    images1[currentImageIndex1]
        .classList.add("selected")

    }

/*CHAMO A TROCA DE IMAGENS*/    
function start() {
    console.log("passei aqui")
    setInterval(() => {
        nextImage()
        nextImage1()
    }, timer)
}

function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

window.addEventListener("load", start())

console.log(detectar_mobile())

/*
function Rosa() {

    event.preventDefault()

    document.body.style.backgroundColor = "#fad0dd"
    /*document.getElementById("footer").style.backgroundColor = "#fad0dd" 
    footer.style.backgroundColor = "#fad0dd" 
}*/


