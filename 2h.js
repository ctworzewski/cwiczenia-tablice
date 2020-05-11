// Zwiększ wartość każdego elementu tablicy podnosząc go do kwadratu

// sposób nr 1
let $number = document.querySelector('.number');
let $numberRes = document.querySelector('.numberRes');
let tab = [1,2,4,6,8];
let result = [];

for (let i = 0; i < tab.length; i++) {
        result[i] = tab[i] * tab[i];
}

$number.innerHTML = tab;
$numberRes.innerHTML = result;

// sposób nr 2
let $number2 = document.querySelector('.number2');
let $numberRes2 = document.querySelector('.numberRes2');
let tab2 = [1,3,6,8,9];
let result2 = [];
tab2.forEach(el => {
     result2.push(el*el);
});
$number2.innerHTML = tab2;
$numberRes2.innerHTML = result2;

// sposób nr 3
/* let $input = document.querySelector('input');
let $check = document.querySelector('.check');
let $yourNumber = document.querySelector('.yourNumber');
let $result3 = document.querySelector('.result3');
function exponentiation() {
    let myNumber = Number($input.value)
    $yourNumber.innerHTML = myNumber;
    let result = myNumber * myNumber;
    $result3.innerHTML = result;
    return result;
}
$check.addEventListener('click', exponentiation); */

// sposób nr 4

let tab3 = [];
let tab4 = [];
let $input = document.querySelector('input');
let $check = document.querySelector('.check');
let $yourNumber = document.querySelector('.yourNumber');
let $result3 = document.querySelector('.result3');
function exponentiation() {
    let myNumber = Number($input.value)
    $yourNumber.innerHTML = myNumber;
    let result = myNumber * myNumber;
    $result3.innerHTML = result;
    tab3.push(myNumber);
    tab4.push(result);
}
$check.addEventListener('click', exponentiation);
/*  pseudokod
let tab4 = []
tab3.push(myNumber);
tab3.forEach(el => {
    tab4.push(el*el);
})
*/

// sposób nr 5
let tab5 = [12,13,14,4,6];
//przy użyciu funcji jawnej
let tab6 = tab5.map(callback);
function callback (el) {
    return el*el;
}
//przy użyciu funkcji anonimowej
let tab61 = tab5.map(function  (el, index, array) {
    return el*el;
});
//przy uzyciu funbkcji strzałkowej 
let tab62 = tab5.map(el=>{
    return el*el;
});


//przy użyciu funcji jawnej
let tab7 = tab5.map(callback);
function callback (el, index, array) {
    console.log(el, ' ', index, ' ', array)
    return array[index]*el; //array[index] = el
}

console.log(tab6);