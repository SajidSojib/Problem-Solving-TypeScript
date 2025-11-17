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



const getLength = (value: string | any[]): number => {
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
}


class Person {
    constructor(public name: string, public age: number){}
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[] ): Item[] =>{
    const filtered = items.filter((item) => {
        if(item.rating<0 || item.rating>5){
            throw new Error('Rating must be between 0 and 5');
        }
        else return item.rating>=4
    });
    return filtered;
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable?'Yes':'No'}`
    );
}




  