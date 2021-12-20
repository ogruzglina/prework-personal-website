/*function changeClass(navElement, page) {
    let list = document.getElementById("navigation");
    let listOfA = list.getElementsByTagName("a");

    listOfA.forEach(element => element.className = "");
    navElement.className = 'active';   
}*/

function clickOnImg(link) {
    location.href = link;
}

myBtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
};

// When the user clicks on the button, scroll to the top of the document
function goToTheTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
