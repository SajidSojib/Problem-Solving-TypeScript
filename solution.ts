const formatValue = <T extends number|string|boolean>(value: T):T =>{
    if(typeof value === 'number'){
         return (value*10) as T;
    }
    else if(typeof value === 'string'){
        return value.toUpperCase() as T;
    }
    else if(typeof value === 'boolean'){
        return !value as T;
    } 
    else{
        throw new Error('Invalid value');
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
//! do i have to use typeof and Array.isArray


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
//! do i have to handle rating and throw error if 0>rating>5



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
//! is arr.length a method
//! do i need to sort the array


//----------------- 8 -------------------
const calculateTotalPrice = (items: { name: string; price: number; quantity: number, discount?: number }[]): number => {
    const totalPrice: number = items.reduce((total, item) => {
        const { price, quantity, discount } = item;
        if (discount && (discount < 0 || discount > 100)) {
            throw new Error('Discount must be between 0 and 100');
        }
        const discountedPrice = price * (1 - (discount || 0)/100);
        return total + discountedPrice * quantity;
    }, 0);
    return totalPrice;
}
//! do i have to handle discount if its 0 to 100

  