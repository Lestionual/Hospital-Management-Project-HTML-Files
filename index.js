document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".patientCard");
    const doctorCards = document.querySelectorAll(".card");
    const closeBtn = document.getElementById("close");
    const connectBtn = document.getElementById("connectBtn");
    const contentBox = document.querySelector(".content");
    const contentDetail = document.querySelector(".contentDetail");
    const navLinks = document.querySelector("nav ul");
    const bar = document.getElementById("bar");

    let count = 0;

    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === 0) {
                slide.classList.add("active");
            }
        });

        setInterval(function () {
            slides[count].classList.remove("active");
            count = (count + 1) % slides.length;
            slides[count].classList.add("active");
        }, 2000);
    }

    doctorCards.forEach(function (card) {
        card.addEventListener("click", function () {
            if (!contentBox || !contentDetail) return;

            const img = card.querySelector("img");
            const imgSrc = img ? img.src : "";
            const doctorName = card.children[1] ? card.children[1].innerText : "Doctor";
            const doctorType = card.children[2] ? card.children[2].innerText : "Specialist";

            contentBox.style.display = "block";
            contentDetail.innerHTML = `
                <img src="${imgSrc}" alt="${doctorName}">
                <div>
                    <h1>${doctorName}</h1>
                    <p>${doctorType}</p>
                </div>
            `;
        });
    });

    if (closeBtn && contentBox) {
        closeBtn.addEventListener("click", function () {
            contentBox.style.display = "none";
        });
    }

    if (connectBtn) {
        connectBtn.addEventListener("click", function () {
            const email = document.getElementById("email");
            const pass = document.getElementById("pass");

            if (!email || !pass) return;

            const emailVal = email.value.trim();
            const passVal = pass.value.trim();

            const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            const passPattern = /^.{6,}$/;

            if (emailVal === "" || passVal === "") {
                alert("Please enter all details");
                return;
            }

            if (!gmailPattern.test(emailVal)) {
                alert("Please enter a valid Gmail address");
                return;
            }

            if (!passPattern.test(passVal)) {
                alert("Password must be at least 6 characters long");
                return;
            }

            window.location.href = "services.html";
        });
    }

    if (bar && navLinks) {
        bar.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }
});

function goToSignup() {
    window.location.href = "signup.html";
}

function goToLogin() {
    window.location.href = "login.html";
}