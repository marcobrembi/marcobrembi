document.addEventListener("DOMContentLoaded", function() {
    fetch("../elements/side.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("side").innerHTML = data;
        })
        .catch(error => console.error("Errore nel caricamento della sidebar:", error));
});
