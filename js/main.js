//Burger menu

const iconMenu = document.querySelector(".header__menu-icon");
const menuBody = document.querySelector(".header__menu-body");
const lowerForm = document.querySelector(".form-contact-us");

if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

const menuLinks = document.querySelectorAll(".header__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBody.classList.remove("active");
    iconMenu.classList.remove("active");
    document.body.classList.remove("lock");
  });
});

//Tiles

const tiles = document.querySelectorAll(".tabs__tile");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    tiles.forEach((tile) => {
      tile.classList.remove("active");
    });
    tile.classList.toggle("active");
  });
});

//
//First uploader
//

const fileInput = document.getElementById("fileInput");
const fileLabel = document.getElementById("fileLabel");
const imageContainer = document.getElementById("imageContainer");
const resetButton = document.getElementById("resetButton");

fileInput.addEventListener("change", function () {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.alt = "Inserted Picture";
      // image.style.width = "100%";
      // image.style.height = "100%";
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
      resetButton.style.display = "block";
    };

    reader.readAsDataURL(selectedFile);
  }
});

function resetImage() {
  fileInput.value = ""; // Clear the file input
  imageContainer.innerHTML =
    '<label for="fileInput" id="fileLabel" style="cursor: pointer;" class="picture-upload">Insert your picture here</label>'; // Reset the image container
  resetButton.style.display = "none"; // Hide the reset button
}

//
//Second uploader
//

const fileInput2 = document.getElementById("fileInput2");
const fileLabel2 = document.getElementById("fileLabel2");
const imageContainer2 = document.getElementById("imageContainer2");
const resetButton2 = document.getElementById("resetButton2");

fileInput2.addEventListener("change", function () {
  const selectedFile = fileInput2.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.alt = "Inserted Picture";
      // image.style.width = "100%";
      // image.style.height = "100%";
      imageContainer2.innerHTML = "";
      imageContainer2.appendChild(image);
      resetButton2.style.display = "block";
    };

    reader.readAsDataURL(selectedFile);
  }
});

function resetImage2() {
  fileInput2.value = ""; // Clear the file input
  imageContainer2.innerHTML =
    '<label for="fileInput2" id="fileLabel2" style="cursor: pointer;" class="picture-upload">Insert your picture here</label>'; // Reset the image container
  resetButton2.style.display = "none"; // Hide the reset button
}
