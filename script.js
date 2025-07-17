
        // Advanced Filters Toggle
        document.getElementById('advanced-toggle').addEventListener('click', function () {
            const filters = document.getElementById('advanced-filters');
            filters.classList.toggle('hidden');

            const buttonText = filters.classList.contains('hidden') ? 'Advanced Filters' : 'Hide Filters';
            this.innerHTML = this.innerHTML.replace(/Advanced Filters|Hide Filters/, buttonText);
        });

        // Navbar scroll effect - Trigger after 90% of viewport height
        window.addEventListener("scroll", () => {
            const navbar = document.getElementById("navbar");
            const scrollPosition = window.scrollY;

            if (scrollPosition >= window.innerHeight * 0.6) {
                navbar.classList.remove("bg-transparent");
                navbar.style.background = "linear-gradient(135deg, rgba(14, 19, 25, 0.8), rgba(15, 32, 39, 0.8), rgba(32, 58, 67, 0.8), rgba(44, 83, 100, 0.9))";
            } else {
                navbar.classList.add("bg-transparent");
                navbar.style.background = "transparent";
            }
        });



        // Counter animation
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll(".counter");
            const activeAnimations = new Map();

            const startCounting = (counter) => {
                const target = +counter.getAttribute("data-target");
                let count = 0;
                const speed = 30;

                if (activeAnimations.has(counter)) {
                    clearTimeout(activeAnimations.get(counter));
                }

                const updateCount = () => {
                    const increment = Math.ceil(target / speed);
                    if (count < target) {
                        count += increment;
                        counter.innerText = count > target ? target : count;
                        const timeoutId = setTimeout(updateCount, 30);
                        activeAnimations.set(counter, timeoutId);
                    } else {
                        counter.innerText = target.toLocaleString();
                        activeAnimations.delete(counter);
                    }
                };
                updateCount();
            };

            const resetCounter = (counter) => {
                if (activeAnimations.has(counter)) {
                    clearTimeout(activeAnimations.get(counter));
                    activeAnimations.delete(counter);
                }
                counter.innerText = "0";
            };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const counter = entry.target;
                    if (entry.isIntersecting) {
                        startCounting(counter);
                    } else {
                        resetCounter(counter);
                    }
                });
            }, {
                threshold: 0.5,
                rootMargin: '0px 0px -10% 0px'
            });

            counters.forEach(counter => {
                observer.observe(counter);
                counter.innerText = "0";
            });
        });
  

    // <!-- JS TOGGLE SCRIPT -->

        document.getElementById('mobile-menu-button').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
  
    // <!-- testimonial-content -->
   
        // Pure CSS carousel with minimal JavaScript for radio button management
        document.addEventListener('DOMContentLoaded', function () {
            const slides = document.querySelectorAll('input[name="testimonial-slide"]');
            const nextBtn = document.querySelector('label[for="next-testimonials"]');
            const prevBtn = document.querySelector('label[for="prev-testimonials"]');

            let currentSlide = 0;
            const totalSlides = slides.length;

            nextBtn.addEventListener('click', function () {
                currentSlide = (currentSlide + 1) % totalSlides;
                slides[currentSlide].checked = true;
            });

            prevBtn.addEventListener('click', function () {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                slides[currentSlide].checked = true;
            });
        });
