let college = document.querySelectorAll("select")[0]
let depart = document.querySelectorAll("select")[1]
let setingNumber = document.querySelectorAll("input")[0]
let btn = document.querySelector(".btn-primary")
let newUrl = "succsesRegister.html"


btn.addEventListener("click" , (evt)=>{
    evt.preventDefault()
    console.log(college.value)
    if(college.value !== '' && depart.value !== '' && setingNumber.value !== ''){
        let data = [{
            "college":college.value,
            "depart":depart.value,
            "setingNumber":setingNumber.value
        }]
        let savedata = localStorage.setItem("data2" , JSON.stringify(data))
        document.location.href = newUrl
    }else{
        console.log("error")
    }
})