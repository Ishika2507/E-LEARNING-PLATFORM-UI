// JavaScript for Dynamic Page Loading
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll(".nav-link");

  // Pages content
  const pages = {
    home: `
      <section class="hero">
        <h2>Welcome to E-Learning Platform</h2>
        <button onclick="navigateTo('courses')">Browse Courses</button>
      </section>
    `,
    courses: `
      <section class="course-list">
        <h2>Our Courses</h2>
        <div class="course">
          <h3>JavaScript Basics</h3>
          <p>Learn the fundamentals of JavaScript.</p>
          <button>Enroll Now</button>
        </div>
        <div class="course">
          <h3>Web Development</h3>
          <p>Master HTML, CSS, and JavaScript.</p>
          <button>Enroll Now</button>
        </div>
        <div class="course">
          <h3>Data Structures</h3>
          <p>Understand algorithms and data structures.</p>
          <button>Enroll Now</button>
        </div>
      </section>
    `,
    dashboard: `
      <section>
        <h2>Your Progress</h2>
        <canvas id="progressChart" width="400" height="400"></canvas>
      </section>
    `,
  };

  // Navigation logic
  const navigateTo = (page) => {
    content.innerHTML = pages[page];

    // Highlight active link
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });

    // Initialize chart if on dashboard
    if (page === "dashboard") renderChart();
  };

  // Render chart
  const renderChart = () => {
    const ctx = document.getElementById("progressChart").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress", "Pending"],
        datasets: [
          {
            data: [60, 30, 10],
            backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  // Set default page
  navigateTo("home");

  // Add event listeners to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
});
