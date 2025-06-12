//The function calculateChaiPrice calculates the price of chai based on the number of cups ordered.
function calculateChaiPrice(){
    //Prompts the user to enter number of chai cups
    let numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?" )
    numberOfCups = Number(numberOfCups) //Makes the input to be a number

    //Confirms if the user input is a number
    if (isNaN(numberOfCups) || numberOfCups <=0){
        alert("Error.Please enter the number of cups of Chai Bora!")
    return;
    }

    //Define the Standard Recipe for 1 Cup of Chai
    const waterPerCup = 200  //Value should be in ml
    const milkPerCup = 50    //Value should be in ml
    const teaLeavesPerCup = 1   //Value should be in tablespoon
    const sugarPerCup = 2   //Value should be in teaspoons

    //Calculates the total amount of ingredients required
    const totalWater = waterPerCup * numberOfCups
    const totalMilk = milkPerCup * numberOfCups
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups
    const totalSugar = sugarPerCup * numberOfCups

    // Display the result of the above calculations
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
    console.log(`Water: ${totalMilk} ml`)
    console.log(`Tea Leaves (Majani) ${totalTeaLeaves} tablespoons`)
    console.log(`Sugar (Sukari) ${totalSugar} teaspoons`)
    console.log("\n\tEnjoy your Chai Bora!")
}

calculateChaiPrice()