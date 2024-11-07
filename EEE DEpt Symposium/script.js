
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
}

function openPopup(popupId) {
  closeAllPopups();
  document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

function openRegistrationPopup() {
  closeAllPopups();
  document.getElementById('registration-popup').style.display = 'block';
}

function closeRegistrationPopup() {
  document.getElementById('registration-popup').style.display = 'none';
}

function redirectToGoogleFormii() {
  window.location.href = 'https://forms.gle/aoxZ5Taf2pkjk7fq5';
}
function redirectToGoogleFormsi() {
  window.location.href ='https://forms.gle/rnajHc2E3UJQfG6M7'; 
}
function redirectToGoogleFormsg() {
  window.location.href ='https://forms.gle/wCPf8wwyFFToAweM6'; 
}
function redirectToGoogleFormvv() {
  window.location.href ='https://forms.gle/Ye5LBnN8bmFKoEG69'; 
}
function redirectToGoogleFormaa() {
  window.location.href ='https://forms.gle/2TG7jDUk2TjuERuZ7'; 
}
function redirectToGoogleForee() {
  window.location.href ='https://forms.gle/bRQQvcufQhKpoTiA6'; 
}
function redirectToGoogleFormcl() {
  window.location.href ='https://forms.gle/N9vwUCyRGQ5qp4KX6'; 
}
window.onload = function() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.classList.remove('hidden');
}

// Close the pop-up when the button is clicked
function closePopupa() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.classList.add('hidden');
}