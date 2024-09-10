let getId = document.querySelectorAll("input")[0]
let getsetNumber =document.querySelectorAll("input")[1]
let btn = document.querySelectorAll("input")[2]


/* chane data from local storage => string to array */
let setingNumber   = JSON.parse(localStorage.data2)[0].setingNumber

/* errors selector element */
let error = document.querySelectorAll(".error1")[0]
let error2 = document.querySelectorAll(".error1")[1]


let newUrl = "AcademicResults.html"


btn.addEventListener("click",()=>{
    if(getId.value.length !== 14){
        error.style.display = "block"
    }
    else{
        error.style.display = "none"

         if(setingNumber!== getsetNumber.value){
            error2.style.display = "block"
        }
        else{
            error2.style.display="none"
           document.location.href = newUrl
        }
    }
})
