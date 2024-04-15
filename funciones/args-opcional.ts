(()=> {

    const fullName = (firstName:string, lastName?:string):string =>{

        return`${firstName} ${lastName || 'no lastname'}`;

    }

    const name =fullName('nancy');

    console.log({name});


})();