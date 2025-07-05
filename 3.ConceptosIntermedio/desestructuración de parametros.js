// El siguiente objeto contiene las configuraciones necesarias para conectarse a una API, se debe crear una funcion que retorne la URL formateada con base en la información almacenada en el objeto, ademas por defecto se debe imprimir una url alternativa, para en caso de que no tuvieramos el objeto proporcionado (Implementar desestruccturación)


let configObject = {
  url: 'https://ejemplo.io',
  bucket: 145,
  port: 8012,
}




const APIConfig = function ({ url, bucket, port } = { url: 'https://ejemploPorDefecto.io', bucket: 666, port: 12341 }) {
  let formattedUrl = `${url}/${bucket}/${port}`
  return formattedUrl
}

let result = APIConfig(configObject)
console.log(result);