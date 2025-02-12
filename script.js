gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save preference to local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
    const newBlogBtn = document.getElementById("new-blog-btn");

    // Sample Blog Posts (Can be replaced with a database later)
    const blogPosts = [
        {
            title: "Recent Advances in Computer Vision",
            content: "A discussion on the latest breakthroughs in deep learning models for image processing.",
            date: "February 10, 2025"
        },
        {
            title: "Ethical Considerations in AI Research",
            content: "Exploring the ethical challenges that arise with AI decision-making models.",
            date: "February 8, 2025"
        }
    ];

    function displayBlogPosts() {
        blogContainer.innerHTML = ""; // Clear container before adding posts
        blogPosts.forEach(post => {
            const blogPost = document.createElement("div");
            blogPost.classList.add("blog-post");

            blogPost.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p class="date">${post.date}</p>
            `;

            blogContainer.appendChild(blogPost);
        });
    }

    newBlogBtn.addEventListener("click", () => {
        const title = prompt("Enter the title of your blog post:");
        const content = prompt("Write your blog content:");
        const date = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        if (title && content) {
            blogPosts.unshift({ title, content, date });
            displayBlogPosts();
        }
    });

    // Initial Display of Blogs
    displayBlogPosts();
});