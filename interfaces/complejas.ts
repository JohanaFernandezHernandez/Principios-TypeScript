(()=> {

    interface Client {
        name: string,
        age ?: number,
        address?: Address,
        getFullAdress(id: string): string,
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name:'Johana',
        age:25,
        address: {
            id:26,
            zip: 'Hola',
            city: 'oviedo',
        },
        getFullAdress(name){
            return 'Hola'
        },
    }

    const client2 : Client = {
        name: 'jaime',
        age: 40,
        getFullAdress(name){
            return 'Hola'
        },
    }

})();