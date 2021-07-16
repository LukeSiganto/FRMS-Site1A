/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openmenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      hamburger.style.backgroundColor = "#FFFFFF";
      hamcol.style.backgroundColor = "#FFFFFF";
      hamburger.style.color = "#379D8A";
    } else {
      x.style.display = "block";
      hamburger.style.backgroundColor = "#379D8A";
      hamcol.style.backgroundColor = "#379D8A";
      hamburger.style.color = "#FFFFFF";
    }
  }