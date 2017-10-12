function chatWindow() {
    var eingabe = prompt("Tell me your name.", "");
    if (eingabe != null) {
        document.getElementById("Moin").innerHTML =
            "Welcome friend, " + eingabe + "! Enjoy the good vibes.";
    }
}
