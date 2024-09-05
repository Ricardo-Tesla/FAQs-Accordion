document.addEventListener('DOMContentLoaded', function() {
    const faqsItems = document.querySelectorAll('.faqs-item');

    faqsItems.forEach((item) => {
        const toggleIcon = item.querySelector('.toggleIcon');
        const dropdown = item.querySelector('.dropdown-content');
        const question = item.querySelector('h2');

        function toggleDropdown(event) {
            const isDropdownVisible = dropdown.classList.contains('show');

            // Close all other dropdowns
            faqsItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherDropdown = otherItem.querySelector('.dropdown-content');
                    const otherIcon = otherItem.querySelector('.toggleIcon');
                    otherDropdown.classList.remove('show');
                    otherIcon.src = './images/icon-plus.svg';
                    otherIcon.classList.remove('rotate');
                }
            });

            // Toggle the current dropdown
            if (isDropdownVisible) {
                dropdown.classList.remove('show');
                toggleIcon.src = './images/icon-plus.svg';
                toggleIcon.classList.remove('rotate');
            } else {
                dropdown.classList.add('show');
                toggleIcon.src = './images/icon-minus.svg';
                toggleIcon.classList.add('rotate');
            }

            event.stopPropagation();
        }

        toggleIcon.addEventListener('click', toggleDropdown);
        question.addEventListener('click', toggleDropdown);
    });

    // Close all dropdowns if the user clicks outside
    document.addEventListener('click', function() {
        faqsItems.forEach((item) => {
            const content = item.querySelector('.dropdown-content');
            const icon = item.querySelector('.toggleIcon');
            content.classList.remove('show');
            icon.src = './images/icon-plus.svg';
            icon.classList.remove('rotate');
        });
    });
});