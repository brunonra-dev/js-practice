function convert() {
    let val = document.getElementById("num").value
    let lengthRes = document.getElementById("meter-res")
    let volumeRes = document.getElementById("volume-res")
    let massRes = document.getElementById("mass-res")
    let meterToFeet = val * 3.28084
    let feetToMeter = val * 0.3048
    let litersToGallons = val * 0.2199692
    let gallonsToLiters = val * 4.54609
    let kilosToPounds = val * 2.204623
    let poundsToKilos = val * 0.4535924

    lengthRes.innerText = val + " meters = " + meterToFeet.toFixed(3) + " feet | " + val + " feet = " + feetToMeter.toFixed(3) + " meters"

    volumeRes.innerText = val + " liters = " + litersToGallons.toFixed(3) + " gallons | " + val + " gallons = " + gallonsToLiters.toFixed(3) + " liters"

    massRes.innerText = val + " kilos = " + kilosToPounds.toFixed(3) + " pounds | " + val + " pounds = " + poundsToKilos.toFixed(3) + " kilos"
} 

convert()