



/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */


let contenitore = [1,4,5,3,2,4,5,6,8,9,9,7,10,82];



for (let index = 0; index < contenitore.length; index++) {

  let sum =  0;

  if (contenitore[index] % 2 == 1 ) {
    sum += contenitore[index]
    
  }
  
}

console.log(sum);
    
