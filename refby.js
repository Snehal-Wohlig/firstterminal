// Call By Value 
// let a=5;         //assign value to a

// let b=a;         // b is refering value of a

// b= a+5;          // addition of value a and 5 will be stored in variable b 

// console.log(a);
// console.log(b);


// Call By Reference

let obj1={                  //create a function
    name:"XYZ",
    pass:"abc"
};

let obj2=obj1;            // obj2 is refer the value obj1 
obj2.name="asd"
console.log(obj1);
console.log(obj2);

