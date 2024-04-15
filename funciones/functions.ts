(()=>{

    const hero:string = "Flash";

    function returnName():string {
        return hero;
    }

    const newFunction = ():string => {
        return "Hola como estas"

    }

    console.log(typeof newFunction);

    const heroName = returnName();

})()