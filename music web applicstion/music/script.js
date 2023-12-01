function myFunction(z) {
    var check, input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter"+z);
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");

    for (i = 0; i < cards.length; i++) {
        title = cards[i].outerText;
        title = title.split("\n")
        console.log(title)
        check = true
        for (var j=0; j<title.length; j++){
            if(title[j].toUpperCase().includes(filter)){
                cards[i].style.display = "";
                check = false;
                break;
            }
        }
        if(check){
            cards[i].style.display = "none";
        }
        
    }
}

mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}