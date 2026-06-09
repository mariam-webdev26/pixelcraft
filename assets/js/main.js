window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



// Counter
document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll('.counter');

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            if (counter.classList.contains('counted')) return;

            counter.classList.add('counted');

            // TEXT VALUE (like Zero)
            const textValue = counter.getAttribute('data-text');

            if (textValue) {

                setTimeout(() => {
                    counter.innerText = textValue;
                }, 600);

                return;
            }

            // NUMBER COUNTER
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';

            let current = 0;

            // smoother increment (better than target/100)
            const step = Math.max(1, target / 60);

            function updateCounter() {

                current += step;

                if (current < target) {

                    counter.innerText = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + suffix;
                }
            }

            updateCounter();
        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

});










