const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const carousselContent = document.getElementById("caroussel-content")

const colorClasses = ["bg-aqua", "bg-tomato", "bg-orange"]

let currentIndex = 0;

function updateCaroussel() {
    carousselContent.classList.remove(...colorClasses);
    carousselContent.classList.add(colorClasses[currentIndex])
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= colorClasses.length) {
        currentIndex = 0;
    }
    updateCaroussel();
})

prevBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= colorClasses.length) {
        currentIndex = -1;
    }
    updateCaroussel();
})