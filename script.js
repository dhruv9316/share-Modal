const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

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