var slides = document.querySelectorAll(".photo");

var next = document.querySelector(".btn_right");
var prev = document.querySelector(".btn_left");

var currentIndex = 0; //hal-hazirki indeks
var maxNumber = slides.length; // sekillerin sayin bilmeliyik

slidesMove(slides)    //ilk once sekillin axrincisi gorsenir ve bu funksiyani cagririg ki
                    // sifirlansin ve birinci sekilden basdasin slider


next.addEventListener("click", function() {
    if (currentIndex === maxNumber - 3) { // sekilin indeksi sona catanda indeks sifirlanirki 1ci sekil gorsensin
        currentIndex = 0

    } else {
        //ekse halda if serti odenmiyende indeks artsin
        currentIndex  += 3;
    }

    slidesMove(slides)
})


prev.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = maxNumber - 3;

    } else {
        currentIndex -= 3;
    }
    slidesMove(slides)
})

function slidesMove(slides){
    slides.forEach((slide,index) => {
        slide.style.transform = `translateX(${(index - currentIndex ) * 110}%)`; // photo divine style veririk transletXnen yerlerini deyisdirik
    })


}

// var name = "Ferid"
// `Salam: ${name}`
// ekrana output --> Salam: Ferid














