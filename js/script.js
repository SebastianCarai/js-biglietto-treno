const kmTrip = parseInt(prompt('Quanto dovrà essere lungo il suo viaggio in Km?'));
const userAge = parseInt(prompt('Qual è la sua età?'));

let ticketPrice = kmTrip * 0.21;

if (userAge<18) {
    ticketPrice= ticketPrice - (ticketPrice*20/100);
} else if (userAge>65){
    ticketPrice= ticketPrice - (ticketPrice*40/100);
}
alert(`Il costo del suo biglietto è di: ${ticketPrice.toFixed(2)}€`)
