function calculateProfit() {
    var cost = parseFloat(document.getElementById('cost').value);
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    var profit = (price - cost) * quantity;

    if (!isNaN(profit)) {
        document.getElementById('profitResult').innerHTML = "Total profit: Rs." + profit.toFixed(2);
    } else {
        document.getElementById('profitResult').innerHTML = "Please enter valid inputs.";
    }
}