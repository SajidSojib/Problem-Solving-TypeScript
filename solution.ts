const formatValue = <T extends number|string|boolean>(value: T):T =>{
    if(typeof value === 'number'){
         return (value*10) as T;
    }
    else if(typeof value === 'string'){
        return value.toUpperCase() as T;
    }
    else{ 
        return !value as T;
    }
}
