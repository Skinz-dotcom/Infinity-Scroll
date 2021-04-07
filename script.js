// Global Variables
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "1OmW0ZHtYr-LDhqaJXGCIjJOMzhi4thZkOPS8ZMQ3EI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links & photos, add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> element to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> element for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> element inside the <a> element, then put both inside the imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //   Catch Error Here
    console.log(error);
  }
}

// On Load

getPhotos();
