function calculateTip(){
    const bill = paraseFloat(document.getElementById("billAmount").value);
    const tipPercent = paraseFloat(document.getElementById("topPercent").value);

    if(isNaN(bill) || isNaN(tipPercent)){
        alert("please enter valid numbers.");
        return;
    }

    const top = bill * (tipPercent / 100);
    const total = bill + tip;

    document.getElementById(tipAmount).textContent = `Tip: $${tip.toFixed(2)}`;
    document.getElementById("totalAmount").textContent =`Total: $${total.toFixed(2)}`;
}
