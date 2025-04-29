document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', '0');

      
        figure.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                figure.click();
            }
        });

       
        figure.addEventListener('click', () => {
            alert(`Image ${index + 1}: ${figure.querySelector('img').alt}`);
        });
    });

    console.log("Attribut tabindex ajouté à toutes les figures.");
});


const images = document.querySelectorAll('img');
images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'FIGURE') {
        const figures = Array.from(document.querySelectorAll('figure'));
        const currentIndex = figures.indexOf(activeElement);

        if (event.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % figures.length;
            figures[nextIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + figures.length) % figures.length;
            figures[prevIndex].focus();
        }
    }
});