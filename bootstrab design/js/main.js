/*Start shuffle*/
let allButtons = document.querySelectorAll(".feature-work button")
let allImg = document.querySelectorAll(".feature-work .shuffel .row .col-md img");
allButtons.forEach(function(ele) {
    ele.onclick = function(){
        allButtons.forEach(function(btn) {
            btn.classList.remove("active")
        })
        ele.classList.add("active")
        if(ele.dataset.class === ".all")
        {
            allImg.forEach(function(img) {
                img.style.opacity = "1"
            });
        } else {
            allImg.forEach(function(img) {
                img.style.opacity = "0.09"
            });  
            document.querySelectorAll(ele.dataset.class).forEach(function(ele) {
                ele.style.opacity = 1
            })
        }
    }
});

