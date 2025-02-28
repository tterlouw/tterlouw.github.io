// script.js

// You can add JavaScript code here to make the infographic interactive.
// For example, you could add event listeners to elements to handle clicks, hovers, etc.
// You can also use libraries like D3.js to create more complex visualizations.

console.log("script.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('azure-fundament');
    if (section) {
        section.addEventListener('click', function() {
            alert('Azure Fundament section clicked!');
        });
    }

    const srcSection = document.getElementById('src');
    if (srcSection) {
        srcSection.addEventListener('click', function() {
            alert('.src section clicked!');
        });
    }

    const extSection = document.getElementById('ext');
    if (extSection) {
        extSection.addEventListener('click', function() {
            alert('Extensions section clicked!');
        });
    }
});
