//string, numbers, boolean, object, array, null, undefined, void, any

let myName: string = "Josh";

myName = "Pamilerin";

let count: string | number = 30;

count = "kolu";

// const arr1 : Array<number|string> = [1, 2, 3,4,5]
//  const arr1 : number[] = [1, 2, 3,4,5]
const arr1: (number | string)[] = [1, 2, 3, 4, 5, "kunle"];

const arr2 = ["pamilerin", "kunle", "ayo"];

arr1.push("Pamilerin");

const tupTest: [string, number, boolean] = ["Pamilerin", 1, true];

const user: User =
  {
    fullname: "Pamilerin Joshua",
    age: 16,
    height: "6ft",
    career: "Engineer",
    
  };

console.log(user.career);

const addNum = (num1: number, num2: number): void | string => {
  const newNum = num1 + num2;
  return String(newNum);
};

// let isDone:any;
// isDone= "false"

type User =  {
    fullname: string;
    age?: number;
    height: string;
    career: string;
    car?:{
        color:string;
        engine:string,
        model?:string
        seats?:number[]

    }
};

type PickedCar = Pick<User, "car">

type UserExcludingCar= Omit<User, "car"|"career">

type SimpleUser = Pick<User, "fullname"|"age"|"car">

const simpleMe:SimpleUser={
  fullname:"",
  // age:0,
  // height:""
}



type UserWithEmail= User &{
  email:string
}






// interface User {
//   fullname: string;
//   age: number;
//   height: string;
//   career?: string;
// }

const allUsers: (User|UserWithRole)[] = [
    {
        fullname: "Pamilerin Joshua",
        age: 16,
        height: "6ft",
        career: "Engineer",
      },
      {
        fullname: "Pamilerin Joshua",
        age: 16,
        height: "6ft",
        career: "Engineer",
      },
      {
        fullname: "Pamilerin Joshua",
        age: 16,
        height: "6ft",
        career: "Engineer",
      },
      {
        fullname: "Pamilerin Joshua",
        age: 16,
        career: "Engineer",
        height: "6ft",
      },
      {
        fullname: "Pamilerin Joshua",
        age: 16,
        career: "Engineer",
        height: "6ft",
        isAdmin:true
      }
]

// interface UserWithRole extends User{
//     isAdmin:boolean
// }

type UserWithRole = User &{
    isAdmin:boolean
}


const admin:UserWithRole ={
   fullname:"",
   age:0,
   isAdmin:true
} 



// const result :[]= [
//     1, 2, 3, 4, "Pamilerin"
// ]

//omit, pick

type Products = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}



// type ComplexProducts = {
//   id: number,
//   title: string,
//   description: string,
//   category: string,
//   price: number,
//   discountPercentage: number,
//   rating: number,
//   stock: number,
//   tags: string[],
//   brand: string,
//   sku: string,
//   weight: number,
//   dimensions: {
//     width: number,
//     height: number,
//     depth: number
//   },
//   warrantyInformation: string,
//   shippingInformation:string,
//   availabilityStatus: string,
//   reviews: RatingDeets[],
//   returnPolicy: string,
//   minimumOrderQuantity: number,
//   meta: {
//     createdAt: string,
//     updatedAt: string,
//     barcode: string,
//     qrCode: string
//   },
//   thumbnail: string,
//   images: string[]
// }


// type RatingDeets={
//   rating: number,
//   comment: string,
//   date: string,
//   reviewerName: string,
//   reviewerEmail: string
// }