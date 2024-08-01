const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');

function openModal(index) {
  const thumbnails = document.querySelectorAll('.thumbnail img');
  const selectedImage = thumbnails[index];
  modal.style.display = 'flex';
  modalImage.src = selectedImage.src;
  caption.textContent = selectedImage.alt;
}

function closeModal() {
  modal.style.display = 'none';
}

// Close the modal when the user clicks outside the image
modal.addEventListener('click', (e) => {
  if (e.target !== modalImage) {
    closeModal();
  }
});
