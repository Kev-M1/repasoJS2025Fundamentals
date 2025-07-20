// El siguiente objeto contiene las configuraciones necesarias para conectarse a una API, se debe crear una funcion que retorne la URL formateada con base en la información almacenada en el objeto, ademas por defecto se debe imprimir una url alternativa, para en caso de que no tuvieramos el objeto proporcionado (Implementar desestruccturación)
// Asi es como se ve una URL formateada: https://ejemplo.io/145/8012

let configObject = {
  url: 'https://ejemplo.io',
  bucket: 145,
  port: 8012,
}


//Solución basica
// const APIConfig = function ({ url, bucket, port } = { url: 'https://ejemploPorDefecto.io', bucket: 666, port: 12341 }) {
//   let formattedUrl = `${url}/${bucket}/${port}`
//   return formattedUrl
// }

const formatURL = ({ url = 'https://ejemploPorDefecto.io', bucket = 11, port = 34567, } = {}) => {
  let formatUrl = `${url}/${bucket}/${port}`;
  return formatUrl;
};

const formattedUrl = formatURL(configObject);
console.log(formattedUrl);


// Respecto a los desestructuración avanzada, se podria entender como:
// Oiga, vea, esta función espera un objeto como argumento. Si me pasa un objeto, voy a extraer url, bucket y port de él. Si alguna de esas propiedades no viene o es undefined en el objeto que me pasó, usaré mis propios valores predeterminados para esas propiedades específicas. Y, ojo, si usted no me pasa ningún argumento en absoluto (o me pasa undefined explícitamente), entonces usaré un objeto vacío {} como base, lo que hará que todas las propiedades tomen sus valores predeterminados individuales