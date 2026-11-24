
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const activities = document.querySelectorAll(
            'input[name="activities"]:checked'
        );

        if (activities.length === 0) {
            alert("Please select at least one activity!");
            return;
        }

        alert("Registration successful! Welcome " + name);

        form.reset();

    });

});
