let $btn = document.querySelector('.btn');
let tab = [];

function display() {
    let $input = document.querySelector('.input'); 
    let sum = 0;
    tab.push(Number($input.value));
    console.log(tab);
    let tempMin  = tab[0], tempMax = tab[0];
    let $showMin = document.querySelector('.showMin');
    let $showMax = document.querySelector('.showMax');
    
    tab.forEach(el => {
        sum += el; // --> sum = sum + el;
        //console.log('Suma wynosi:', sum);
        
        if (el < tempMin) {
            tempMin = el;
        } 

        if ( el > tempMax) {
            tempMax = el;
        }
    });
    //console.log('Najmniejszy element tablicy to: ', tempMin);
    let average = sum / tab.length;
    let $show = document.querySelector('.show');
    //console.log('Śrendnia wartość elementów tablicy: ', average);
    $show.innerHTML = average;
    $showMin.innerHTML = tempMin; 
    $showMax.innerHTML = tempMax;

    let $sumEl = document.querySelector('.sumEl');
    $sumEl.innerHTML = tab.length;

    let $minElIndex = document.querySelector('.minElIndex');
    let $maxElIndex = document.querySelector('.maxElIndex');

    let minEl = tab.indexOf(tempMin)
    $minElIndex.innerHTML = minEl;

    let maxEl = tab.indexOf(tempMax);
    $maxElIndex.innerHTML = maxEl;

    let $yourArray = document.querySelector('.yourArray');
    $yourArray.innerHTML = `[${tab}]`;


    
    let $indexNum = document.querySelector('.indexNum');
    $indexNum.innerHTML="";
    for (let i = 0; i < tab.length; i++) {
        //i = tab[i];
        $indexNum.innerHTML += `<br/>${i}:${tab[i]}`;
    }
}




$btn.addEventListener('click', display);
