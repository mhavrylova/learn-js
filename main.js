const titleChapters = document.querySelectorAll('.menu-title-chapter');

// Iterate through each title chapter element
titleChapters.forEach(titleChapter => {
    // Add click event listener to each title chapter element
    titleChapter.addEventListener('click', function() {
        // Find the corresponding menu-chapter element
        const chapter = this.nextElementSibling;

        // Toggle visibility of the menu-chapter element
        if (chapter.style.display === 'block') {
            chapter.style.display = 'none';
        } else {
            chapter.style.display = 'block';
        }
    });
});
