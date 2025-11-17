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


//----------------- 2 -------------------
const getLength = (value: string | any[]): number => {
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
}


//----------------- 3 -------------------
class Person {
    constructor(public name: string, public age: number){}
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



//----------------- 4 -------------------
type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[] ): Item[] =>{
    const filtered:Item[] = items.filter((item:Item):boolean => {
        if(item.rating<0 || item.rating>5){
            throw new Error('Rating must be between 0 and 5');
        }
        else return item.rating>=4
    });
    return filtered;
}



//----------------- 5 -------------------
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive);
}



//----------------- 6 -------------------
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



//----------------- 7 -------------------
type ValueType = string | number;
const getUniqueValues = (array1: ValueType[], array2: ValueType[]): ValueType[] => {
    const result: ValueType[] = [];
    let sizeOfResult: number = 0;

    const checkUnique = (value: ValueType): boolean => {
        for (let i = 0; i < sizeOfResult; i++) {
            if (result[i] === value) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < array1.length; i++) {
        if (checkUnique(array1[i])) {
            result[sizeOfResult] = array1[i];
            sizeOfResult++;
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (checkUnique(array2[i])) {
            result[sizeOfResult] = array2[i];
            sizeOfResult++;
        }
    }
    return result;
}




  