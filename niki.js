// function niki(array) {
//     // let newElement=[];
//     array.forEach(element => {
//         let newData=element.split(",");
//         let name=newData[0].split(" ");
//         let data=name;
        
//     });
//     return newData;
// }

// console.log(niki(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]));

// const array=["alain eric,9","kagabo john,4"];
function obj(array) {
    let newArray=[];
    array.forEach(element => {

let data=element.split(",");
let name=data[0].split(" ");
let outPut=`${name[0]}:{second name:${name[1]},age:${data[1]}}`;
newArray.push(outPut)
  })
  return newArray
  ;}
  console.log(obj(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]))