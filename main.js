 let tab1 = new Array();

 // wypełnienie tablicy liczbami o 0  do 10
 /*  for (let i = 0; i <= 10; i++) {
      tab1[i] = i;
  } */

 /* tab1[0] = 1; 
 tab1[2] = 5; 
  for (let i = 0; i < 20; i = i + 2) {
   console.log(i);
   tab1[tab1.length] = "pp";
  } */


 /*  for (let i = 0; i < 10; i++) {
      tab1[tab1.length] = 'pp';
      tab1[tab1.length] = 'qq';
      console.log(tab1.length);
  } */

 // Ćwiczenie 1. Wyświetl talbicę 15 el.; el o d 1-15
 /*  for (let i = 1; i <= 15; i++) {
      tab1[tab1.length] = i;
  } */

 // Ćwiczenie 2. Wyświetl tablicę 15el; el. od 0-14
 /*  for (let i = 0; i < 15; i = i + 1) {
      tab1[tab1.length] = i;
  } */


 // Ćwiczenie 3. Wyświetl tablicę 20el, gdzie co 2el jest empty
 /*  for (let i = 0; i < 10; i = i + 1) {
      tab1[tab1.length + 1] = i;
  } */
 /*  for (let i = 0; i <= 20; i = i + 2) {
      tab1[i] = i;
  } */
 /*  for (let i = 0; i < 10; i = i + 1) {
      tab1[i * 2] = i;
  } */


 // ------------------------------------------ 
 // Wypisz tablicę 30el; wartościami tej tablicy są liczby parzyste;
 /*  let i = 0;
  for (; i < 30; i = i + 1) {
      tab1[i] = i * 2;
  } */
 /* 
 i = 0
tab[0] = 0 * 2 => 0
----------------
i = 1;
tab[1] = 1 * 2 => 2
----------------
i=2;
tab[2] = 2 * 2 => 4
 */
 // ------------------------------------------ 


 // Stwórz tablicę 100el. i w console  wypisac co drugi element
 /*  for (let i = 0; i <= 99; i = i + 1) {
      tab1[i] = i;
      //console.log(tab1[i] = i * 2);

      if (i % 2 === 0) {
          console.log(tab1[i]);
      }
  } */
 /* 
 i=0;
 tab[0] = i + 1
 */

 // Stwórz tablice 100 el. 
 // w tej tablicyt zmień co 3 element  mają mieć wartość 0;
 /*  for (let i = 0; i < 100; i = i + 1) {
      tab1[i] = i;
  }
  for (let j = 0; j < 100; j = j + 3) {
      tab1[j] = 0;
  } */



 // Stwórz tablicę 10 el. i potem zawartość tej tablicy przypisz do drugiej tablicy

 /*  for (let i = 0; i < 50; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  for (let j = 0; j < tab1.length; j = j + 1) {
      tab2[j] = tab1[j];
  } */

 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  tab2 = ['ciasteczko'];
  tab1.forEach(el => {
      //tab2.push('ciasteczko');
      tab2.push(el);
  }) */


 // Zadanie jw. przypisa tab1 do tab2; ale tab2 w odwtrotnej kolejno sci

 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  for (let j = 0; j < 30; j = j + 1) {
      tab2[j] = tab1[j];
  }
  tab2.reverse(); */


 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  let lastIndex = tab1.length - 1;
  for (let j = lastIndex; j >= 0; j = j - 1) {
      console.log(j);
      tab2[lastIndex - j] = tab1[j];
  } */
 /* 
 |
 |
 V
 na dole to samo co wyżej tylko inaczej zapisane;
 
 */

 /*  
 for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
 let tab2 = new Array();
  for (let j = tab1.length - 1; j >= 0; j = j - 1) {
      console.log(j);
      tab2[tab1.length - 1 - j] = tab1[j];
  } */

 //-- inny sposób

 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  for (let j = tab1.length - 1; j >= 0; j = j - 1) {
      console.log(j);
      tab2.push(tab1[j]);
  } */


 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  for (j = 0; j < tab1.length; j = j + 1) {
      tab2.unshift(tab1[j]);
  } */


 /*  for (let i = 0; i < 30; i = i + 1) {
      tab1[i] = i;
  }
  let tab2 = new Array();
  tab1.forEach(element => {
      tab2.unshift(element);
  }) */

 // Stwórz losowá tablicę
 // wartości losowe tab3 pomnóż przez 2
 // nowa tablica tab5 = tab3 + tab4
 // --------------------
 //praca domowa foraech zrobić int ze string
 /* let tab3 = [];
 for (let i = 0; i <= 10; i = i + 1) {

     tab3.push(Math.round((Math.random(1, 100) * 100)));
 }

 let tab4 = [];
 for (j = 0; j < tab3.length; j = j + 1) {
     tab4[j] = tab3[j] * 2;
 }

 let tab5 = [];
 tab5.push(tab3 + tab4);
 let tab6 = parseInt(tab5)
 // zrobić foreach */
 // -----------------------




 /*  let tab5 = [1, 3, 10, 6, 5];
  let tab6 = [6, 11, 9, 2, 6];
  let tab7 = [];

  for (let i = 0; i < tab5.length; i = i + 1) {
      tab5[i];
      console.log(tab5[i])
  }
  console.log('test')

  for (let i = 0; i < tab6.length; i = i + 1) {
      tab6[i];
      console.log(tab6[i]);
  }

  for (let i = 0; i < tab5.length; i = i + 1) {
      tab7[i] = tab5[i] + tab6[i];
  }
  console.log('Suma poszczególnych  indeksów tablicy: ', tab7); */



 /*  let tab = [7, 14, 19, 8];
  tab.length;
  console.log(tab);

  let tab2 = tab.reverse();
  console.log(tab2); */

 /* let tab2 = [];
 tab2[0] = tab[3];
 tab2[1] = tab[2];
 tab2[2] = tab[1];
 tab2[3] = tab[0]; */



 // ZADANIE 2A
 /*  let $zadanie2a = document.querySelector('.zadanie2a');
  let tab = [];
  let $btnZadanie2a = document.querySelector('.btnZadanie2a');
  console.log(typeof $zadanie2a)
  $btnZadanie2a.addEventListener('click', function () {
      tab.push($zadanie2a.value);
      console.log(`wartość input`, tab);
  }) */

 //ZADANIE 2B

 /*  let $zadanie2a = document.querySelector('.zadanie2a');
  let tab = [];
  let $btnZadanie2a = document.querySelector('.btnZadanie2a');
  console.log(typeof $zadanie2a)
  $btnZadanie2a.addEventListener('click', function () {
      tab.push(Number($zadanie2a.value));
      console.log(`wartość input`, tab);
      compare();
  })
  function compare() {
      let max = 0;
      let min = 1000000;
      for (let i = 0; i < tab.length; i = i + 1) {
          if (max < tab[i]) {
              max = tab[i];
          }

          if (min > tab[i]) {
              min = tab[i];
          }
      }
      console.log('najmniejsze: ', min);
      console.log('największe: ', max);
  } */


 /* 
 ---- reverse () odwracanie tablicy
  */

 let tab = [10, 12, 9, 3, 1, 5];
 let tabRev = [];

 let ostatniElement = tab.length - 1;
 /*  5
  tabRev[0] = tab[5];  -> tab[ostatniElement-0]
  tabRev[1] = tab[4]; -> tab[ostatniElement-1]
  tabRev[2] = tab[3];  -> tab[ostatniElement-2]
  tabRev[3] = tab[2];  -> tab[ostatniElement-3]
  tabRev[4] = tab[1];  -> tab[ostatniElement-4]
  tabRev[5] = tab[0];   -> tab[ostatniElement-5]

  [0] = [5];  -> [ostatniElement-0]  i=0
  [1] = [4];  -> [ostatniElement-1] i=1
  [2] = [3];  -> [ostatniElement-2]
  [3] = [2];  -> [ostatniElement-3]
  [4] = [1];  -> [ostatniElement-4]
  [5] = [0];  -> [ostatniElement-5] i=5
  */

 // (let i = 0; i <= tab.length - 1; i++) ten sam zapis
 for (let i = 0; i < tab.length; i++) {
     tabRev[i] = tab[ostatniElement - i]
 }

const