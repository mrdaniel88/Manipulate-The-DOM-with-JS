let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here



let select = document.getElementById("mySelect");

for (let i = 0; i < countries.length; i++) {
    let country = document.createElement("option");
    country.value = i
    country.text = countries[i]
    select.appendChild(country)
}



select.addEventListener("change", function(e) {

    alert(countries[e.target.value])
})