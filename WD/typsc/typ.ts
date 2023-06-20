// let firstName = "John";
// let lastName: string="Doe";
// console.log(firstName + " " + lastName);

// let a:any = "teststring";
// console.log(Math.round(a));

// let fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits.toString());
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// let a = new Array(8);
// console.log(a.length);
// console.log(Array.isArray(fruits));
// console.log(fruits instanceof Array);


// let names: readonly string[] = ["John", "Doe"];
// console.log(names);

// //tuples
// let tup: [number, boolean, string];
// tup = [21, true, "John"];
// console.log(tup);

// let tupRO: readonly [number, boolean, string] = [7, false, "Jennifer"];
// console.log(tupRO);
//named tuples
// let tup2: [age:number, isMarried:boolean, name:string] = [21, true, "John"];
// console.log(tup2);

//objects
// const car: { type: string, model: string, year: number,price?:number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009,
//   };

// console.log(car.year);

//object index signature
// const ages: {[index:string]:number}  = {
//     John: 21,
// }
// ages.Mark = 35;
// console.log(ages);

// const car: {[index:string]: unknown}= {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009,
//   };
// car.price = 500000;
// console.log(car)

//enum
// enum color {
//     Red,
//     Green,
//     Blue,
//     yellow
// }

// let col1 = color.Green;
// let col: color = color.Blue;
// console.log(col);

// //initialized enum
// enum color2 {
//     Red = 1,
//     Green,
//     Blue
// }
// console.log(color2.Green);
// console.log(color2[2]);

// //fully initialized enum
// enum statusCodes{
//     NotFound = 404,
//     Success = 200,
//     Unauthorized = 401,
//     accepted = 202,
//     BedRequest = 400
// }

// console.log(statusCodes.NotFound);
// console.log(statusCodes[200]);

//type alias
// type alphanumeric = string | number;
// let an: alphanumeric = 123;
// console.log(typeof an);
// an = "2e3";
// console.log(typeof an);

// type Point = {
//     x: number;
//     y: number;
//   };

// let p1: Point = {x:43, y:23};


// //interfaces
// interface Rectangle{
//     height:number,
//     width:number
// }

// const rect: Rectangle = {height:3, width:4};
// //exetending interfaces along with optional properties and methods
// interface Rectan extends Rectangle{
//     diagonals:number,
//     area?:number
//     getArea?:()=>number;
// }

// const rect2: Rectan = {height:44, width:30, diagonals:34, getArea: function(){return this.height*this.width}};
// const rect3: Rectan = {height:44, width:32, diagonals:34, area:rect2.height*rect2.width};
// console.log(rect2);
// console.log(rect3);
// if (rect2.getArea)
//     console.log(rect2.getArea());

// //union types
// function printId(id: number | string) {
//     console.log(`Your ID is: ${id}`);
// }
// printId(101);

// // error in union
// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }

// // functions
// //function with named, default and optional parameters and return type
// function calculate(a:number, b:number, c:string="add"):number
// {
//     if (c=="add")
//         return a+b;
//     else if (c=="sub")
//         return a-b;
//     else if (c=="mul")
//         return a*b;
//     else if (c=="div")
//         return a/b;
//     else
//         return 0;
// }


// ###################################################################################################################
// //casting
// //casting with as
// let someValue: unknown = "this is a string";
// console.log((someValue as string).length);
// //casting with <> (same as as) but syntax is not recommended
// let x: unknown = 'hello';
// console.log((<string>x).length);

// //to override type errors while type casting, first cast to unknown and then to the required type
// let y = 46546;
// console.log(((y as unknown) as string)+1)
// ###################################################################################################################

// //null and undefined
// // enable strictNullChecks in tsconfig.json for this to work
// function printMileage(mileage: number | null | undefined) {
//     console.log(`Mileage: ${mileage ?? 'Not Available'}`);
// }
  
// printMileage(null);
// printMileage(0);

// //Keyof
// interface Person {
//     name: string;
//     age: number;
// }
// // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
// function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
// }
// let person = {
//     name: "Max",
//     age: 27
// };

// printPersonProperty(person, "age");

// // CLASSES AND SOME OOP CONCEPTS


// class Person{
//     name:string;
//     public age:number;
//     private contact_no:number;

//     constructor(n:string,a:number,cn:number,public weight:number){
//         this.name = n;
//         this.age = a;
//         this.contact_no = cn;
//     }

//     public get_no():number{
//         return this.contact_no;
//     }
//     public set_no(new_N:number):void{
//         this.contact_no = new_N;
//     }
// }

// const p = new Person("Khush",56,9175868546,58);
// console.log(p);
// p.name = "ATU";
// p.age = 18;
// console.log(p.name);
// console.log(p.get_no());
// p.set_no(1234569087);
// console.log(p.get_no());

// //inheritance
// interface animal{
//     species:string;
//     terrain:string;
//     speak:() => void;
// }

// class cats implements animal{
//     limbs:number = 4;
//     constructor(public species:string,public terrain:string){}
//     public speak():void{
//         console.log("Cats speak meow, meow, meow");
//     }
// }

// class cats_detailed extends cats{
//     eating_hab:string;
//     domesticated:boolean;
//     constructor(s:string,t:string,eat:string,dom:boolean){
//         super(s,t);
//         this.eating_hab = eat;
//         this.domesticated = dom;
//     }
// }

// const myCat = new cats_detailed("Abyssinian","grassy","omnivores",true);
// const wildCat = new cats_detailed("Leopard","forests","carnivores",false);

// console.log(myCat);
// console.log(wildCat);

// class Car{
//     name:string;
//     year:number;
//     speed:number;
//     constructor(name:string,year:number,sp:number){
//         this.name = name;
//         this.year = year;
//         this.speed = sp;
//     }
//     public age(){
//         let date = new Date();
//         console.log(`This car is ${date.getFullYear()-this.year} years old`);
//     }
//     public acclerate():void{
//         this.speed+=20;
//         console.log(`Acclerated 20kmph.\n New speed ${this.speed}.`);
//     }
// }

// class sportsCar extends Car{
//     public override acclerate(): void {
//         this.speed += 50;
//         console.log(`Acclerated 50 kmph \n New speed: ${this.speed}`)
//     }

// }

// const myCar = new Car("Ford",2014,0);
// const myCar2 = new sportsCar("Audi",2019,0);

// myCar.age();
// myCar.acclerate();
// myCar.acclerate();
// myCar2.acclerate();
// myCar2.acclerate();

// //ABSTRACT CLASSES
// abstract class Polygon {
//     public abstract getArea(): number;
  
//     public toString(): string {
//       return `Polygon[area=${this.getArea()}]`;
//     }
// }
  
// class Rectangle extends Polygon {
//     public constructor(protected readonly width: number, protected readonly height: number) {
//       super();
//     }
  
//     public getArea(): number {
//       return this.width * this.height;
//     }
// }
