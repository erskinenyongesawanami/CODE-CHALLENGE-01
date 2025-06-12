//The function estimates the transaction fees
function estimateTransactionFee(){
    //prompts the user the amount of money they wish to send
    let amountToSend = prompt("Unatuma Ngapi? (KES)")
    amountToSend = Number(amountToSend) //Makes the input be a nuumber

    //Confirms if the  user input is a number
    if (isNaN(amountToSend) || amountToSend <=0){
        alert("Please put an amount greater than 0!")
        return;
    }

//Calculate 1.5% of the amount
let fee = 0.015 * amountToSend

//Apply fee limits using if else logic
if (fee<10) {
    fee = 10;
}else if (fee>70){
    fee = 70;
}

//Calculate the total amount that will be debited
const total = amountToSend + fee

//Displays the result
console.log(`Sending KES ${amountToSend}:`)
console.log(`Calculated Transaction Fee: KES ${fee}`)
console.log(`Total amount to be debited: KES ${total}`)
console.log("\nSend Money Securely!")

}
estimateTransactionFee()