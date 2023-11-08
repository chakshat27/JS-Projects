const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body')

toggle.addEventListener('click', function () {
    // When the element with the id 'toggleDark' is clicked, execute the following function.

    this.classList.toggle('bi-moon');
    // Toggle the presence of the class 'bi-moon' on the clicked element.
    // If the class is present, it will be removed; if absent, it will be added.

    if (this.classList.toggle('bi-bi-sun-fill')) {
        // Check if the class 'bi-bi-sun-fill' is present on the clicked element.
        
        body.style.background = 'white';
        // If the 'bi-bi-sun-fill' class is present, set the background color of the body to white.

        body.style.color = 'black';
        // Set the text color of the body to black.

        body.style.transition = '2s';
        // Apply a transition effect with a duration of 2 seconds to style changes in the body.

    } else {
        // If the 'bi-bi-sun-fill' class is not present on the clicked element.

        body.style.background = 'black';
        // Set the background color of the body to black.

        body.style.color = 'white';
        // Set the text color of the body to white.

        body.style.transition = '2s';
        // Apply a transition effect with a duration of 2 seconds to style changes in the body.
    }
});
