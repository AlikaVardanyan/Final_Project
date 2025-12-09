
let slides = document.querySelectorAll('.bg-slide');
let index = 0;

function slideShow() {
    if (slides.length === 0) return;

    slides.forEach(sl => sl.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

if (slides.length > 0) setInterval(slideShow, 3000);



let thumbImages = document.querySelectorAll(".thumb");
let mainImage = document.getElementById("mainImage");
let currentGalleryIndex = 0;

function changeMain(img) {
    if (!mainImage) return;

    mainImage.src = img.src;
    currentGalleryIndex = Array.from(thumbImages).indexOf(img);

    thumbImages.forEach(t => t.classList.remove("active-thumb"));
    img.classList.add("active-thumb");
}


document.querySelectorAll(".click-image").forEach(img => {
    img.addEventListener("click", () => changeMain(img));
});

function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % thumbImages.length;
    changeMain(thumbImages[currentGalleryIndex]);
}

function showPrevImage() {
    currentGalleryIndex =
        (currentGalleryIndex - 1 + thumbImages.length) % thumbImages.length;
    changeMain(thumbImages[currentGalleryIndex]);
}

document.querySelector(".arrow-left")?.addEventListener("click", showPrevImage);
document.querySelector(".arrow-right")?.addEventListener("click", showNextImage);

const btn = document.getElementById("toggle-btn");
const fullText = document.getElementById("full-text");

btn.onclick = () => {
    if (fullText.style.display === "block") {
        fullText.style.display = "none";
        btn.textContent = "Подробнее";
    } else {
        fullText.style.display = "block";
        btn.textContent = "Скрыть";
    }
};
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

// սա է բոլոր պլանների thumbnails ցուցակը
let planThumbs = document.querySelectorAll(".plan-thumb");
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = planThumbs[index].src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function nextLightbox() {
    currentIndex = (currentIndex + 1) % planThumbs.length;
    lightboxImg.src = planThumbs[currentIndex].src;
}

function prevLightbox() {
    currentIndex = (currentIndex - 1 + planThumbs.length) % planThumbs.length;
    lightboxImg.src = planThumbs[currentIndex].src;
}
function flipCard(card) {
    card.classList.toggle("flipped");
}
