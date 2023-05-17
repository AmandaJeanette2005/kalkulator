const btn = document.querySelectorAll('.btn');
const input = document.getElementById('input');
let number1 = null
let number2 = null 
let operator = null 

console.log(btn.length);
for(i = 0; i < btn.length; i++){
    btn[i].onclick = function(e){
        const value = e.target.innerText
   

    if(value == '1' || value == '2' || value == '3' || value == '4' || value == '5' || value == '6' || value == '7' || value == '8' || value == '9' || value == '0' ){
      
        if(number2 == null && operator !== null){
            input.value = value 
        }else {
            input.value += value
        }

        if(operator == null){
            number1 = input.value
        }else if(operator !== null) {
            number2 = input.value
        }
    }
    if(value == '+' || value == '-' || value == '*' || value == '/'){
        operator = value
    }

    if(value == 'C'){
        input.value = ''
    }

    if(value == '='){
        console.log(number1, number2);

        if(operator == "+"){
            operator = parseInt(number1) + parseInt(number2)
            input.value = operator
        }
        if(operator == '-'){
            operator = number1 - number2
            input.value = operator
        }
        if(operator == '*'){
            operator = number1 * number2
            input.value = operator
        }
        if(operator == '/'){
            input.value = operator
        }
    }

}
     
}