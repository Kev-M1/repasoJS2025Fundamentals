/*  
Este programa, de acuerdo con la respuesta del usuario, debe mostrar el mensaje "Puedes conducir" o "No puedes conducir". 
Recuerda que puede conducir solo quien tiene 18 años o más y también quien tiene una licencia de conducir. 
*/
const userName = prompt(`Hola cual es su nombre`);
let userAge = parseInt(prompt(`${userName} Ingrese su edad por favor`));
let hasALicense = (prompt('tienes licencia de conducción? (Responda SI o NO)')).toLocaleLowerCase();


if ((userAge >= 18) && (hasALicense === 'si' || hasALicense === 's')) {
    console.log('Puedes conducir');
} else {
    console.log('No puedes conducir');
}