// TODO navbar

document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}


// TODO Main

// * Portfolio

function filterProjects(category) {
    var projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


// * Certificates

function filterCertificates(category) {
    var certificates = document.querySelectorAll('.certificate-item');
    var showMoreLink = document.getElementById('show-more-button');

    certificates.forEach(cert => {
        if (cert.dataset.category === category) {
            cert.style.display = 'block';
        } else {
            cert.style.display = 'none';
        }
    });

    // Actualizar el botón 'Show More'
    showMoreLink.href = "./Certifications/" + category + "-certificates.html"; // Ejemplo: 'web-dev-certificates.html'
}