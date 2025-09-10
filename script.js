// let scrollContainer = document.querySelector(".gallery");
// let backBtn=document.getElementById("backBtn");
// let forwardBtn=document.getElementById("forwardBtn");
// scrollContainer.addEventListener("wheel",(e)=>{
//     e.preventDefault();
//     scrollContainer.style.scrollBehavior = "auto";
//     scrollContainer.scrollLeft += e.deltaY;
// });
// forwardBtn.addEventListener("click", ()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 900;
// });
// backBtn.addEventListener("click", ()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 900;
// })
document.addEventListener("DOMContentLoaded", function() {
    const descriptionShow = document.querySelectorAll('.classes-description');
    descriptionShow.forEach(function(faq) {
        faq.addEventListener('click', function() {
            const targetid = faq.getAttribute('data-target');
            const targetFaq = document.getElementById(targetid);
            targetFaq.style.display = targetFaq.style.display === 'block' ? 'none' : 'block';
        }); // This parenthesis was missing
    });
});
    
function showSidebar() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.style.display = sideBar.style.display === 'flex' ? 'none' : 'flex';
    sideBar.style.transition = sideBar.style.transition === '.3s ease-in-out' ;
    
}

document.querySelectorAll('.img-box img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-img').style.display = 'flex';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
  };
});

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none';
};
document.getElementById('closeup').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none';
};

// Modal functionality (commented out code)
// This code is intended to create a modal popup for images in a gallery.
// It allows users to click on an image to view it in a larger format and close the modal by clicking outside the image, clicking a close button, or pressing the "Escape" key.


// document.addEventListener('DOMContentLoaded', () => {
//   // 1. Select the modal and its elements
//   const showUpModal = document.getElementById('showUp');
//   const modalImage = document.getElementById('modal-image');
//   const closeButton = document.getElementById('close');

//   // 2. Select all images that should open the modal
//   // Assuming your gallery images have a class like "gallery-image"
//   const galleryImages = document.querySelectorAll('.galleryImages');

//   // 3. Create functions to handle opening and closing the modal
//   function openModal(imageSrc) {
//     showUpModal.classList.add('visible'); // Add a class to make it visible
//     modalImage.src = imageSrc; // Set the image source
//   }

//   function closeModal() {
//     showUpModal.classList.remove('visible'); // Remove the class to hide it
//   }

//   // 4. Attach event listeners
  
//   // Listen for clicks on the gallery images
//   galleryImages.forEach(image => {
//     image.addEventListener('click', () => {
//       openModal(image.src); // Get the src of the clicked image and open the modal
//     });
//   });

//   // Listen for clicks on the close button
//   closeButton.addEventListener('click', closeModal);

//   // Listen for clicks outside the modal
//   showUpModal.addEventListener('click', (event) => {
//     // If the click happened on the modal container itself (not the image), close it
//     if (event.target === showUpModal) {
//       closeModal();
//     }
//   });

//   // Listen for the "Escape" key to close the modal
//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape' && showUpModal.classList.contains('visible')) {
//       closeModal();
//     }
//   });
// });
   
       
