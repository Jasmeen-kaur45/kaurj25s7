console.log('Test 3')

function showOutput(){
    let name= document.querySelector('#first-name').value ;
    document.querySelector('#output').textContent='Hello '+name;
}
document.querySelector('#btn').addEventListener('click',showOutput);