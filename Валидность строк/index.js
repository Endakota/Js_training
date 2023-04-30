var data = {
    user1: {
        email: "endakota09@gmail.com",
        password: "12345678"
    }, 
    user2: {
        email: "antonQwerty@mail.ru",
        password: "12345678"
    }
}
document.querySelector(".submit").addEventListener("click", ()=>{
    const email = document.querySelector("#emailInput").value
    const password = document.querySelector("#passInput").value
    
    console.log(emailValidate(email), passValidate(password))
    if(emailValidate(email) && passValidate(password)){
        document.querySelector("#emailInput").style.borderColor = "rgb(0,255,0)"
        document.querySelector("#passInput").style.borderColor = "rgb(0,255,0)"
        dataChecker(data,email,password)
    }else{
        document.querySelector("#emailInput").style.borderColor = "rgb(255,0,0)"
        document.querySelector("#passInput").style.borderColor = "rgb(255,0,0)"
    }

   
})

function dataChecker(data, email, password){
    let isOk = false
    for(let user in data){
        if(data[user]["email"] == email && data[user]["password"] == password){
            isOk = true
            console.log("Вход выполнен")
            break
        }else{
            isOk = false            
        }
    }
    if(isOk == false){
        console.log("Неправильный пароль или email")
        document.querySelector("#emailInput").style.borderColor = "rgb(255,0,0)"
        document.querySelector("#passInput").style.borderColor = "rgb(255,0,0)"
    }
    //for in -> удобен для объектов и юзает их ключи
    //for of -> удобен для массива и юзает их значения
}
function emailValidate(mail){
    let isOk = false
    // includes --> содержится ли элемент в строке (true/false)
    // split(x) --> разделяет строку на разделители [anna loves basketball --> split(" ") --> ["anna", 'loves','basketball']]
    // length --> длина строки
    // parseInt --> преобразовать в число строку [str -> int] (parseFloat) ? (toString())
    // isNaN(x) --> Проверка является ли переменная NaN
    if(!mail.includes(" ") && mail.includes("@") && mail.split("@")[1].includes(".") && mail.split("@")[0].length >= 4 && isNaN(parseInt(mail[0]))){
        isOk = true 
    }else{
        isOk = false
    }
    return isOk
}
function passValidate(password){
    let isOk = false
    if(!password.includes(" ") && password.length >= 8){
        isOk = true
    }else{
        isOk = false
    }
    return isOk
}