function othername() {
    var pass1 = 3174;
    var input = document.getElementById("userInput").value;

    if (input == pass1) {
        document.getElementById("hidden_clue").textContent = "Hello JavaScript!";
    }
}
