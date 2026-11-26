
document.getElementById("calculateBtn").addEventListener("click", function() {


    const wattage = Number(document.getElementById("wattage").value);
    const hours = Number(document.getElementById("hours").value);
    const quantity = Number(document.getElementById("quantity").value);
    const rate = Number(document.getElementById("rate").value);

    if (
        !Number.isFinite(wattage) || wattage <= 0 ||
        !Number.isFinite(hours) || hours <= 0 || hours > 24 ||
        !Number.isFinite(quantity) || quantity <= 0 ||
        !Number.isFinite(rate) || rate <= 0
    ) {
        alert("Please enter valid values. Hours must be between 1 and 24.");
        return;
    }

    
    const monthlySavings = (wattage / 1000) * hours * 30 * quantity * rate;
    const yearlySavings = monthlySavings * 12;


    document.getElementById("monthlySavings").textContent =
        monthlySavings.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP"
        });

    document.getElementById("yearlySavings").textContent =
        yearlySavings.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP"
        });

});
