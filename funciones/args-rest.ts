(()=>{

    const fullname=(fisrtName:string, ...restName:string[]): string =>{

        return `${fisrtName} ${restName.join(' ')}`

    }

    const superman = fullname('clart', 'pedro','perez');

    console.log({superman})

})();