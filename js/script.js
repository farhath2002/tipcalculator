function calculateTip() {
    const bill = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value); // corrected ID name

    if (isNaN(bill) || isNaN(tipPercent)) {
        alert("Please enter valid numbers.");
        return;
    }

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;

    document.getElementById("tipAmount").textContent = `Tip: $${tip.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `Total: $${total.toFixed(2)}`;
}
