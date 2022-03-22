let chars = []
for (var i = 33; i <= 126; i++) chars.push(String.fromCharCode(i))
let passLen = 15
let in1 = document.getElementById("in1")
let in2 = document.getElementById("in2")
let in3 = document.getElementById("in3")
let in4 = document.getElementById("in4")

function generatePass() {
    for (i = 1; i <= 4; i++) {
        console.log("1: " + i)
        let pass = ""
        for (j = 1; j <= 15; j++) {
            let ran = 0
            ran = Math.floor(Math.random() * chars.length)
            console.log("ran: " + ran)
            pass += chars[ran]
            console.log("2: " + j)
        }
        if (i === 1) {
            in1.value = pass
        } else if (i === 2){
            in2.value = pass
        } else if (i === 3){
            in3.value = pass
        } else if (i === 4){
            in4.value = pass
        }
    }
}

function copy(num) {
    if (num === 1) {
        navigator.clipboard.writeText(in1.value);
        alert("Copied to clipboard")
    } else if (num === 2) {
        navigator.clipboard.writeText(in2.value);
        alert("Copied to clipboard")
    } else if (num === 3) {
        navigator.clipboard.writeText(in3.value);
        alert("Copied to clipboard")
    } else if (num === 4) {
        navigator.clipboard.writeText(in4.value);
        alert("Copied to clipboard")
    }
}