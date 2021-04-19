const age = 21;
const isFemale = false;
const driverStatus = 'bob';

// leeftijdscontrole:
if (age > 18){
    console.log("Je mag naar binnen"); 
} 

else{
    console.log("Je bent te jong, je mag niet naar binnen");
}

// ladiesnight:
if (isFemale){
    console.log("Je mag een kaartje kopen");
}

else{
    console.log("Je bent geen lady, je mag geen kaartje kopen");
}

// bob:
if (driverStatus == 'bob'){
    console.log("rij veilig");
}

else{
    console.log("we bellen een taxi voor je");
}