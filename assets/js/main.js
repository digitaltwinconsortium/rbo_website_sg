/**
 * RBO Website Toolkit - Main JavaScript
 * Minimal JS for mobile navigation toggle
 */

(function() {
    'use strict';

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-open');
            
            // Update hamburger visual state
            if (!isExpanded) {
                this.classList.add('is-active');
            } else {
                this.classList.remove('is-active');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('is-open');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('is-open');
                menuToggle.focus();
            }
        });
    }
})();

