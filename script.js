// Dynamically load images into the gallery
const postersGrid = document.getElementById('posters');
const digitalArtGrid = document.getElementById('digital-art');
const logosGrid = document.getElementById('logos');

// Load Posters
for (let i = 1; i <= 21; i++) {
  const img = document.createElement('img');
  img.src = `posters/poster (${i}).jpg`;
  img.alt = `Poster ${i}`;
  postersGrid.appendChild(img);
}

// Load Digital Art
for (let i = 1; i <= 5; i++) {
  const img = document.createElement('img');
  img.src = `digital-art/art (${i}).jpg`;
  img.alt = `Digital Art ${i}`;
  digitalArtGrid.appendChild(img);
}

// Load Logos
for (let i = 1; i <= 9; i++) {
  const img = document.createElement('img');
  img.src = `logos/logo (${i}).jpg`;
  img.alt = `Logo ${i}`;
  logosGrid.appendChild(img);
}