

/* Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array. */

let contenitore = [];



for (let index = 0; index < 6; index++) {

  let form =  parseInt( prompt("Inserisci un numero"));

  if (form % 2 == 1 ) {
    contenitore.push(form);
    
  }
  
}

console.log(contenitore);
    