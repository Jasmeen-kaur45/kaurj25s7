function multiplyTwoNumbers(){
    let number1= document.querySelector('#N1').value;
    let number2= document.querySelector('#N2').value; 
    document.querySelector('#output').textContent="The multiplication of " + number1 + "and "+number2 + "is " +  number1*number2;


}
document.querySelector('#btn').addEventListener('click',multiplyTwoNumbers)