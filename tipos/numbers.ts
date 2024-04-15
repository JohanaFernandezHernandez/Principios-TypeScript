(() => {// funcion anonima autoinvocada para ejecutar el codigo de manera aislada

    let avengers: number = 10;

    console.log(avengers);

    const villanos: number = 20;

    if(avengers < villanos){
        console.log('Estamos en peligro')
    }else{
        console.log('Nos Salvamos')
    }


})();