// @ts-check

/* the "current-page-link-color" class is added to every <a> whose "href" attribute has the current
page's relative file path as value */

// using JS vanilla
document.querySelectorAll("a[href=\"index.html\"]").forEach(function(elem) {
    elem.classList.add("current-page-link-color");
});

// using jQuery
/*
$("a[href=\"index.html\"]").each(function () {
    if (this.href === window.location.href) {
        $(this).addClass("current-page-link-color");
    }
}); */

/* when a dropdown toggle in the navbar's right list is clicked:
- the text in the dropdown toggle button changes color
- the arrow down icon changes into an arrow up icon
- the dropdown menu appears
when the dropdown toggle is clicked again, the opposite happens */
// using jQuery
$("nav > ul.nav-ul-right > li > .my_dropdown-toggle").click(function() {
    // the text in the dropdown toggle button changes color
    $(this).toggleClass("clicked-dropdown-toggle-color");

    // the arrow down icon changes into an arrow up icon and viceversa
    /* the first <i> child of the clicked <li> is selected and the "fa-chevron-down" and
    "fa-chevron-up" classes are toggled */
    $(this).children("i").toggleClass("fa-chevron-down fa-chevron-up");

    // longer version (still using jQuery but without using toggleClass)
    /* // the first <i> child of the clicked <li> is selected
    var elem = $(this).children("i")[0];
    // if <i> has the fa-chevron-down class
    if ($(elem).hasClass("fa-chevron-down")) {
        $(elem).removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }
    else {
        $(elem).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } */

    // using JS vanilla (not working properly, not sure why)
    /*
    var nodeList = document.querySelectorAll("nav > ul.nav-ul-right > li");
    for (var i = 0; i < nodeList.length; ++i) {
        var iElem = nodeList[i].querySelector("i");
        // if nodeList[i] has an <i> child
        if (iElem !== null) {
            nodeList[i].addEventListener("click", toggleFaChevron(iElem));
        }
    }

    function toggleFaChevron(elem) {
        if (elem.classList.contains("fa-chevron-down")) {
            elem.classList.remove("fa-chevron-down");
            elem.classList.add("fa-chevron-up");
        }
        else {
            elem.classList.remove("fa-chevron-up");
            elem.classList.add("fa-chevron-down");
        }
    } */

    // the dropdown menu appears and disappears
    $(this).next().toggle();

    /* if another dropdown menu is opened:
    1) its toggle changes color
    3) its arrow down icon in the toggle changes into an arrow up icon
    2) its menu disappears */
    var liElementsWithDropdown = $(this).parent().siblings("li:has(.my_dropdown-toggle)");
    liElementsWithDropdown.children(".my_dropdown-toggle").removeClass("clicked-dropdown-toggle-color");
    liElementsWithDropdown.children(".my_dropdown-toggle").children("i.fa-chevron-up").toggleClass("fa-chevron-down fa-chevron-up");
    liElementsWithDropdown.children(".my_dropdown-menu").hide();
});
