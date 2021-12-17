function changeClass(navElement) {
    let list = document.getElementById("navigation");
    let listOfA = list.getElementsByTagName("a");

    listOfA.forEach(element => element.className = "");
    navElement.className = 'active';   
}

function clickOnImg(href) {
    location.href = href;
}

