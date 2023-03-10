const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


const themeButton = document.querySelector(".btn-theme");
const mWrapper = document.querySelector(".main-wrapper");
const cardWrapper = document.querySelector(".card-wrapper");
const darkIcon = document.querySelector(".dark-icon");
const lightIcon = document.querySelector(".light-icon");
const designation = document.querySelector(".designation");
const shareButton = document.querySelector(".btn-share");
const followButton = document.querySelector(".btn-follow");
const modalHeader = document.querySelector(".modal-header");

// lightIcon.style.opacity = 0;

let darkTheme = false;
themeButton.addEventListener("click", function () {
  console.log("reaching...")
  if (darkTheme == false) {
    console.log("reaching...2")
    mWrapper.classList.add("dark");
    cardWrapper.classList.add("dark");
    lightIcon.style.opacity = 1;
    darkIcon.style.opacity = 0;
    designation.classList.add("dark");
    shareButton.classList.add("dark");
    followButton.classList.add("dark");
    modal.classList.add("dark");
    modalHeader.classList.add("dark");

    darkTheme = true;
  }
  else{
    console.log("reaching...3")
    mWrapper.classList.remove("dark");
    cardWrapper.classList.remove("dark");
    lightIcon.style.opacity = 0;
    darkIcon.style.opacity = 1;
    designation.classList.remove("dark");
    shareButton.classList.remove("dark");
    followButton.classList.remove("dark");
    modal.classList.remove("dark");
    modalHeader.classList.remove("dark");

    darkTheme = false;
  }
});

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  // modal.classList.add("active");        ooooooooooorrrrrrrrrrrr
  modal.style.scale = '1';
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  // modal.classList.remove("active");     oooooooooooooorrrrrrrrr
  modal.style.scale = '0';
  overlay.classList.remove("overlayactive");
};