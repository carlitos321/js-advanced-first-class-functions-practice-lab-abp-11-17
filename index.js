// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]

function logDriverNames(element, index, array){
  console.log(element.name)
}

drivers.forEach(logDriverNames);

function logDriversByHometown(element, index, array){
  console.log(element.hometown)
}

drivers.forEach(logDriversByHometown)
//
// driversByRevenue()
//
// driversByName()
//
// totalRevenue()
