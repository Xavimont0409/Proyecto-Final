function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui

    if (numero % 2 === 0) {
        return numero.toString(2);
    }else{
        return numero.toString(16);
    }
}

function gaspar(){
    return {
        name: "Gaspar",
        age: 22,
        country: "Argentina"
    }
}