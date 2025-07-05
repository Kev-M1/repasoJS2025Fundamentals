/* 
Escribir un algoritmo para un negocio donde el vendedor pueda ingresar, para una venta, el nombre de un artículo, el valor unitario y la cantidad vendida. Se debe mostrar:
●El nombre del artículo
●El valor bruto de la venta
●El valor del descuento (que es del 10% del valor bruto) SI EL VALOR BRUTO ES MAYOR O IGUAL A $100.000 O DE 5% SI EL VALOR BRUTO ES MENOR DE $100.000
●El valor del IVA (que es el 19% del valor bruto)
●El valor del transporte que es el 5% del  valor bruto
El valor neto para pagar (valor bruto – descuento + IVA + transporte)
*/


const calculateGrossValue = function (quantity, unitValue) {
    return (quantity * unitValue);
}

const calculateIVA = function (grossValue) {
    return (grossValue * (19 / 100));
}

const calculateTransportationCost = function (grossValue) {
    return (grossValue * (5 / 100));
}

const calculateNetValue = function (grossValue, transportationCost, ivaValue, discount) {
    return (grossValue + transportationCost + ivaValue - discount);
}


let productName = prompt(`Ingrese el nombre/referencia del articulo`);
let unitValue = parseFloat(prompt(`Ingrese el valor por unidad del articulo`));
let quantitySold = parseInt(prompt(`Ingrese la cantidad a vender del producto seleccionado`));
let grossValue = calculateGrossValue(quantitySold, unitValue);

//Discount
let discountValue;
let discountType;
if (grossValue >= 100000) {
    discountValue = (grossValue * (10 / 100))
    discountType = 'Descuento del 10%';
} else {
    discountValue = (grossValue * (5 / 100))
    discountType = 'Descuento del 5%';
}

let valueOfIVA = calculateIVA(grossValue);
let transportationCost = calculateTransportationCost(grossValue);
let netValue = calculateNetValue(grossValue, transportationCost, valueOfIVA, discountValue);


//Información en pantalla
console.log(`Datos de la venta`);
console.log(`Nombre/Referencia del articulo: ${productName}`);
console.log(`Costo unitario: ${unitValue}$`);
console.log(`Cantidad a vender: ${quantitySold} unidades`);
console.log(`Valor bruto de la venta: ${grossValue}$`);
console.log(`IVA (19% Según normativa): ${valueOfIVA}$`);
console.log(`Costo de transporte: ${transportationCost}$`);
console.log(`Valor del descuento: ${discountValue}$ (${discountType})`);
console.log(`Valor neto de la venta: ${netValue}$`);














