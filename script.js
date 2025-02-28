// script.js

// You can add JavaScript code here to make the infographic interactive.
// For example, you could add event listeners to elements to handle clicks, hovers, etc.
// You can also use libraries like D3.js to create more complex visualizations.

console.log("script.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    // Add collapsible functionality to all sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        // Get the heading and add a toggle button
        const heading = section.querySelector('h2');
        const content = document.createElement('div');
        
        // Move all content after the heading into the content div
        while(section.children.length > 1) {
            content.appendChild(section.children[1]);
        }
        
        // Add the content div back to the section
        section.appendChild(content);
        content.classList.add('section-content');
        
        // Set initial max-height
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Add expand/collapse functionality
        heading.addEventListener('click', function(e) {
            // Prevent the click from triggering parent sections
            e.stopPropagation();
            
            section.classList.toggle('collapsed');
            if(section.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
        
        // Add hover effect
        section.addEventListener('mouseenter', function() {
            section.classList.add('hover');
        });
        
        section.addEventListener('mouseleave', function() {
            section.classList.remove('hover');
        });
    });
    
    // Add functionality to expand/collapse all buttons
    const expandAllButton = document.getElementById('expand-all');
    const collapseAllButton = document.getElementById('collapse-all');
    
    expandAllButton.addEventListener('click', function() {
        sections.forEach(section => {
            section.classList.remove('collapsed');
            const content = section.querySelector('.section-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    });
    
    collapseAllButton.addEventListener('click', function() {
        sections.forEach(section => {
            section.classList.add('collapsed');
            const content = section.querySelector('.section-content');
            content.style.maxHeight = '0';
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return; // Skip links with href="#"
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Ensure the target section is expanded
                const targetSection = targetElement.closest('.section');
                if(targetSection) {
                    targetSection.classList.remove('collapsed');
                    const content = targetSection.querySelector('.section-content');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                
                // Scroll to the target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
