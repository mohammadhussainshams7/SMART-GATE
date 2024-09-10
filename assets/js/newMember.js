let fullname = document.querySelectorAll("input")[0];
let phone = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let btn = document.querySelectorAll("input")[3];
let newUrl = "college.html"
btn.addEventListener("click" , (evt)=>{
    evt.preventDefault()
    if(fullname.value !== '' && phone.value !== '' && email.value !== ''){
        let data = [{
           "fullname": fullname.value,
           "phone":phone.value,
           "email":email.value
        }]
        let savedata = localStorage.setItem("data" , JSON.stringify(data))
        document.location.href = newUrl 
    }
})

