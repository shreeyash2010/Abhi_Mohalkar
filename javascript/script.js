
document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById("contactLink");
  const contactSection = document.getElementById("contactSection");

  // Projects Reveal on Click
  const projectsLink = document.getElementById("projectsLink");
  const projectsSection = document.getElementById("projectsSection");

  projectsLink.addEventListener("click", function(e) {
    e.preventDefault();
    projectsSection.style.display = "block";
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const extraProjects = document.querySelectorAll('.extra-project');

  showMoreBtn.addEventListener('click', function () {
    const isHidden = extraProjects[0].style.display === 'none';

    extraProjects.forEach(project => {
      project.style.display = isHidden ? 'block' : 'none';
    });

    this.textContent = isHidden ? 'Show Less Projects' : 'Show More Projects';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const popupLinks = document.querySelectorAll('.popup-link');

  popupLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      // Set image source from link href
      lightboxImg.src = link.href;
      // Show lightbox
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    // Clear image source to free memory
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', e => {
    // Close if click outside image
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });
});




