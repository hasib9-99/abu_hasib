let typed = document.querySelector(".typed")
let tyepdText = typed.innerHTML
let typedNumber = 0;
    typed.innerHTML = ""
// console.log(textArr);




function typedJs() {
    if(typedNumber < tyepdText.length){
        typed.innerHTML += tyepdText.charAt(typedNumber) 
        typedNumber ++
        textArr = typed.innerHTML.split("")
        
    }else{
        textArr.pop()
        typed.innerHTML = textArr.join("")
        if(textArr == 0){
            typedNumber = 0
            console.log(typedNumber);
        }
    }
    
    
}







setInterval(() => {
    typedJs()
}, 300);