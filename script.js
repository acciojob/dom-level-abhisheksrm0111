//your JS code here. If required.
window.onload = function() {
    let element = document.getElementById('level');
    let count = 0;

    while (element) {
        count++;
        element = element.parentElement;
    }

    alert("The level of the element is: " + count);
};
