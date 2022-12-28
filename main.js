const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

// let newArray=[];
// for(i=0; i<passengers.length; i++){
//   newArray[i]=(passengers[i].passengerName);
// }

// console.log(newArray);

// let x=[];
// let c=0;

// for(j=0;j<passengers.length; j++){
//   if(passengers[j].isVegetarianOrVegan==true){
//     x[c]=passengers[j].passengerName;
//     c++;
//   }
// }
// console.log(x);


// let y=[];
// y=passengers;
// y.sort(function (x, y) {
//   return x.connectedFlights - y.connectedFlights;
// });


// console.log(y);


let a=[];
let b=0;
for(i=passengers.length;i>0;i--){
  for(j=0;j<passengers.length;j++){
    if(passengers[j].connectedFlights==i){
      a[b]=passengers[j];
      b++;
    }
  }
}

console.log(a)
