class Vehiculo{
    constructor (marca, modelo, precio){
        this.marca = marca;
        this.modelo =modelo;
        this.precio =precio;
    }
 imprimir(){
     return `Marca: ${this.marca} // Modelo: ${this.modelo} // Precio: $${this.precio}`
 }  
}

class Auto extends Vehiculo{
    constructor(marca, modelo, puertas, precio){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
    imprimir(){
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`
    }
}

class Moto extends Vehiculo{
    constructor(marca, modelo, cilindrada, precio){
        super(marca, modelo, precio);
        this.cilindrada= cilindrada;
    }
    imprimir(){
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}c // Precio: $${this.precio}`
    }
}
const vehiculos=[new Auto('Peugeot', '206',4, 200000), new Moto('Honda', 'Titan', 125, 60000), new Auto('Peugeot','208', 5, 250000), new Moto('Yamaha', 'YBR', 160, 80500.50)];
vehiculos.forEach(vehiculo => {
    console.log(vehiculo.imprimir());
    
});

console.log("=============================")
let vehiculoMasCaro = vehiculos[0];
let vehiculoMasBarato = vehiculos[0]
let vehiculoModeloY = vehiculos[0]
vehiculos.forEach(vehiculo =>{
    if(vehiculo.precio > vehiculoMasCaro.precio){
        vehiculoMasCaro = vehiculo;
    }
    if(vehiculo.precio < vehiculoMasBarato.precio){
        vehiculoMasBarato = vehiculo;
    }
    if(vehiculo.modelo[0] ==='Y'){
        vehiculoModeloY = vehiculo;
    }

})
console.log(`Vehiculo Mas Caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo} `)
console.log(`Vehiculo Mas Barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`)
console.log(`Vehículo que contiene en el modelo la letra ‘Y’:${vehiculoModeloY.marca} ${vehiculoModeloY.modelo} $${vehiculoModeloY.precio} `)

console.log("=============================")
console.log('Vehículos ordenados por precio de mayor a menor: ')
vehiculos.sort((a, b)  => {
    return b.precio - a.precio ;
})
vehiculos.forEach(vehiculo => {
    console.log(`${vehiculo.marca} ${vehiculo.modelo}`);    
});
