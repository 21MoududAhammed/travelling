const targetElement = document.getElementById('simple-list-item-3');
console.log(targetElement);
console.log('test clicked');

   

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const { top } = entry.boundingClientRect;
            const viewportTop = window.innerHeight || document.documentElement.clientHeight;
            if (top <= 200 && top >= -entry.boundingClientRect.height) {
                console.log('Element is at the top of the display.');
                targetElement.style.backgroundColor = 'lightgreen'; // Change color when at the top
            } else {
                targetElement.style.backgroundColor = 'lightcoral'; // Revert color when not at the top
            }
        });
    }, { rootMargin: `-${50}px 0px 0px 0px`, threshold: [1.0] });

    observer.observe(targetElement);