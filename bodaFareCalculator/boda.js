//The function calculates the fare for a boda boda ride
function calculateBodaFare(){
    //Prompts the user the distance of their trip
    let distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:")
    distanceInKm = Number(distanceInKm) //Makes the input be a number

    //Confirms if the user input is a number
    if (isNaN(distanceInKm)  || distanceInKm <=0){
        alert("Samahani sema nambari kamili ya kilomita unayoenda!")
        return;
    }

    //Define the Standard Fare Calculation Rules
    const baseFare = 50 //Value should be in KES
    const perKilometerCharge = 15 //Value should be in KES

    //Calculates the Total amount of the Boda Boda Fare
    const totalKilometerCharge = perKilometerCharge * distanceInKm
    const totalFare = baseFare + totalKilometerCharge

    //Displays the result of the above calculations
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log(`Mpaka Uko: KES ${totalKilometerCharge}`)
    console.log(`Total: KES ${totalFare}`)
    console.log("\nPanda Pikipiki!")

}

calculateBodaFare()