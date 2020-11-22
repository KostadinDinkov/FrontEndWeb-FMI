function change(sColor1, sColor2) {
    var paragraphs = document.getElementsByTagName("p");
    var headerElements = document.getElementsByClassName("headertitle");
    document.getElementsByTagName("title")[0].innerHTML = paragraphs.length + " параграфа и " + headerElements.length + " елемента с клас <headertitle>";
    console.log(paragraphs);
    console.log(headerElements);

    for (let paragraph of paragraphs) {
        paragraph.style.backgroundColor = sColor1;
    }

    for (let headerEl of headerElements) {
        headerEl.style.backgroundColor = sColor2;
    }


} 

change("grey", "magenta");