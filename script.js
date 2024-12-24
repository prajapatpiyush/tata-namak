document.addEventListener("DOMContentLoaded", () => {
    // Select header and title elements
    const header = document.querySelector(".main-header");
    const titleH3 = document.querySelector(".header-title h3");

    // Function to handle scroll effects
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Keep background transparent but add subtle shadow effect on scroll
        if (scrollY > 50) {
            
            header.style.boxShadow = "none";
        } else {
            header.style.backgroundColor = "transparent"; // Transparent background
            header.style.boxShadow = "none"; // No shadow
        }
    };

    // Function to handle animations for the title, including glow effect
    const animateTitle = () => {
        titleH3.style.transition = "transform 0.5s ease, color 1s ease, text-shadow 1s ease";
        titleH3.style.transform = "translateY(20px)";

        setTimeout(() => {
            titleH3.style.transform = "translateY(0)";
            titleH3.style.color = "#ffffff"; // Vibrant orange

            // Add glow effect after animation starts
            titleH3.style.textShadow = "0 0 15px rgb(252, 252, 252), 0 0 30px rgb(255, 255, 255)";
        }, 500);

        setTimeout(() => {
            // Gradually remove the glow effect after the animation
            titleH3.style.textShadow = "none";
        }, 3000); // Glow fades out after 3 seconds
    };

    // Function to handle hover effects for the title
    const setupHoverEffects = () => {
        titleH3.addEventListener("mouseover", () => {
            titleH3.style.color = "#ffffff"; // Green
            titleH3.style.textShadow = "0 0 15px rgb(255, 255, 255)"; // Green glow
        });

        titleH3.addEventListener("mouseout", () => {
            titleH3.style.color = "#ffffff"; // Vibrant orange
            titleH3.style.textShadow = "none";
        });
    };

    // Function to handle responsive font sizes
    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            titleH3.style.fontSize = "5rem"; // Smaller font for mobile
        } else {
            titleH3.style.fontSize = "6rem"; // Default font for larger screens
        }
    };

    // Initialize the header functionality
    const init = () => {
        // Apply scroll effect
        window.addEventListener("scroll", handleScroll);

        // Add title animations
        animateTitle();

        // Add hover effects
        setupHoverEffects();

        // Apply responsive styles on load
        handleResize();

        // Update responsive styles on resize
        window.addEventListener("resize", handleResize);
    };

    // Initialize all features
    init();
});

////////////////////////////////////////// Header ///////////////////////////////////////////
////////////////////////////////////////// nav bar ///////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // Select navbar elements
    const navbarLinks = document.querySelectorAll('.nav-link');
    const cursor = document.querySelector('.cursor');
    const navList = document.querySelector('.nav-list');

    // Hover effect for navbar links
    navbarLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('hover');
            cursor.classList.add('active');
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('hover');
            cursor.classList.remove('active');
        });
    });

    // Custom cursor movement
    document.addEventListener('mousemove', e => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Cursor size change when hovering over links
    navbarLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '80px';
            cursor.style.height = '80px';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
        });
    });
});
/////////////////////////////////////////////////////////////image slider //////////////////
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');

// Create and append slider dots
const sliderDots = document.createElement('div');
sliderDots.classList.add('slider-dots');
document.querySelector('.image-slider').appendChild(sliderDots);

// Create a dot for each slide
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i)); // Click dot to navigate to that slide
    sliderDots.appendChild(dot);
}

// Set the initial active dot
const dots = document.querySelectorAll('.slider-dots span');
dots[currentSlide].classList.add('active');

// Function to move to the next slide
function moveSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Wrap around at the end
    updateSlider();
    updateDots();
}

// Function to go to a specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    updateDots();
}

// Function to update the slider container's transform for smooth sliding
function updateSlider() {
    const newTransform = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${newTransform}%)`;
}

// Function to update the active dot
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
    dots[currentSlide].classList.add('active'); // Add active class to the current dot
}

// Set an interval for auto-slide (change every 5 seconds)
setInterval(moveSlide, 4000); // Automatically move every 5 seconds



//////////////////////////////////////////image /////////////////////////////////
/////////////////////////////////////product ///////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    // Glow Effect on Hover
    productCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 8px 30px rgba(255, 255, 255, 0.6)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 6px 50px rgba(0, 0, 0, 0.3)";
        });
    });

    // Scroll-Based Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            } else {
                entry.target.classList.remove("appear");
            }
        });
    });

    productCards.forEach(card => {
        observer.observe(card);
        card.classList.add("hidden"); // Hide initially
    });
});

// Add to CSS for animation
const style = document.createElement("style");
style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.appear {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);





    // JavaScript to trigger animation on scroll
    const footerContent = document.querySelector('.footer-content');
    const footerBottom = document.querySelector('.footer-bottom');

    if (footerContent && footerBottom) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        // Intersection Observer to trigger the animation when footer comes into view
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footerContent.style.animation = 'fadeIn 1s forwards';
                    footerBottom.style.animation = 'fadeIn 1.5s forwards';
                }
            });
        }, observerOptions);

        // Start observing the footer content
        observer.observe(footerContent);
    }

 // Toggle the visibility of the chatbot iframe
 function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block'; // Show the chatbot
    } else {
        chatbotContainer.style.display = 'none'; // Hide the chatbot
    }
}