window.onload = function() {
    // Create a new button element
    var button = document.createElement("button");
    button.innerHTML = "Say Hello";

    // Append the button to body
    document.body.appendChild(button);

    // Add an event listener for the click event
    button.addEventListener("click", function() {
        alert("Hello, visitor! Thanks for visiting my page.");
    });
}