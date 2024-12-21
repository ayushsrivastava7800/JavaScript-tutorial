// let names = ["ayush", "shivam", "ram"];
// let marks = [1, 2, 3, 4, 5];

// console.log(marks.length);   // array is special type of object 





// array indices 
// arr[0],arr[1], arr[2]


// console.log(marks[1])

//loops over an array

// for (let index = 0; index < name.length; index++) {
//     console.log(name[index]);
    
// }


//forof loop

// for (let name of names) {
//     console.log(name.toUpperCase());
// }







// foreach

// array.forEach(element => {
    
// });







// ***********************************************array methods*************************************************************:

// Push() : add to end     // unshift(): add to start 
// Pop() : delete from end nd return      // shift(): delete start nd return
// toString() : convert array tostring
// concat() : join mutiple arrays ndreturn result

//slice() : returns a piece ofthearray 
//slice(): change orignal array (add, remove, replace)




// //***************************************************** */ map is array method 



// let num = [1,2,3]


// num.map((val)=>{
//     console.log(val);
// })


// let num = [1,2,3];


// let newArr = num.map((val) => {
//    return val;
// });
// console.log(newArr);





//**********************************filter method */

// let arr = [1,2,4,6,3]
// let evenarr = arr.filter((val)=>{
//     return val % 2 === 0;
// });


//  console.log(evenarr);


//  **********************************************reduce method

let arr = [1,2,3];

let newarr = arr.reduce((res, curr)=> {
    return res + curr;
})
console.log(newarr)
























