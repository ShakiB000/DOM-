// var elem1 = document.querySelector("#elem1");
// var elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function (val) {
//     elemImg.style.left = val.x+"px"
//     elemImg.style.top = val.y+"px"
    
// })
// elem1.addEventListener("mouseenter", function (val){
    
//     elemImg.style.opacity = 1
// })
// elem1.addEventListener("mouseleave", function (val){
    
//     elemImg.style.opacity = 0
// })


var elem = document.querySelectorAll(".elem");


elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){

        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave",function(){

        val.childNodes[3].style.opacity = 0

    })
    val.addEventListener("mousemove",function(dets){

        val.childNodes[3].style.left = dets.x+"px"
        // val.childNodes[3].style.top = dets.y+"px"

    })
})
