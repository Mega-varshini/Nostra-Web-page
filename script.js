// -------- Hero Image Slider --------


let images = [

    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"

];


let index = 0;


let slider = document.getElementById("slider-image");



function nextImage(){

    index++;

    if(index >= images.length){

        index = 0;

    }


    slider.src = images[index];

}




function previousImage(){

    index--;


    if(index < 0){

        index = images.length - 1;

    }


    slider.src = images[index];

}




// Automatic slider


setInterval(function(){

    nextImage();

},3000);





// -------- Collections Search --------


function searchProduct(){


    let input = document
    .getElementById("searchBox")
    .value
    .toUpperCase();



    let products = document
    .querySelectorAll(".product-card");



    products.forEach(function(product){


        let name = product
        .querySelector("h3")
        .innerText
        .toUpperCase();



        if(name.includes(input)){


            product.style.display="block";


        }

        else{


            product.style.display="none";


        }


    });



}







// -------- Category Filter --------


function filterProduct(category){



    let products = document
    .querySelectorAll(".product-card");



    products.forEach(function(product){



        if(category=="all"){


            product.style.display="block";


        }


        else if(product.classList.contains(category)){


            product.style.display="block";


        }


        else{


            product.style.display="none";


        }


    });



}







// -------- Mobile Menu --------


let menu = document.querySelector(".menu-icon");

let links = document.querySelector(".nav-links");



if(menu){


menu.addEventListener("click",function(){


    if(links.style.display==="flex"){


        links.style.display="none";


    }

    else{


        links.style.display="flex";

        links.style.flexDirection="column";


    }



});


}