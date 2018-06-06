
// Activate Gallery
function activateGallery()  {

  // Get all thumbnail images
  var thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");

  // Get Main Gallery photo node
  var mainImage = document.querySelector("#gallery-photo img");

  // Listener to click on thumbnail
  Array.from(thumbnails).forEach(function(thumbnail)  {
    thumbnail.addEventListener("click", function()  {
      // Set clicked image as main image
      var newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change current image for thumbnail shadow
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update Title and description in the 3rd column
      var title = document.querySelector("#gallery-info .title");
      var desc = document.querySelector("#gallery-info .description");
      title.innerHTML = thumbnail.dataset.title;
      desc.innerHTML = thumbnail.dataset.description;
    });
  });

}
