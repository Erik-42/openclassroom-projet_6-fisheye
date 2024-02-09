/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
    document.getElementById("dropdownSelector__list").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn')) {
        const dropdowns = document.getElementsByClassName("dropdownContent");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// ===================================

var dropdownBtn2 = document.getElementById("dropdownSelector2");
var dropdownSelector__list2 = document.getElementById("dropdownSelector__list2");
// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Variables for referencing elements

    // Add click event listener to the dropdown button
    dropdownBtn2.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop the event from propagating to the document click listener
        dropdownMenu2();
    });
    // Add click event listener to close the dropdown if the user clicks outside of it
    document.addEventListener("click", function (event) {
        if (!event.target.matches('.dropdownBtn2')) {
            var dropdowns2 = document.getElementsByClassName("dropdownContent2");
            var i;
            for (i = 0; i < dropdowns2.length; i++) {
                var openDropdown2 = dropdowns2[i];
                if (openDropdown2.classList.contains('show')) {
                    openDropdown2.classList.remove('show');
                }
            }
        }
    });
});
console.log(dropdownBtn2)

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu2() {
    dropdownSelector__list2.classList.toggle("show");
}
