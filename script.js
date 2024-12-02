// Data gambar berdasarkan kategori
const images = {
  kanopi: ["images/kanopi1.jpg", "images/kanopi2.jpg", "images/kanopi3.jpg"],
  balkon: [
    "images/furniture1.jpg",
    "images/furniture2.jpg",
    "images/furniture3.jpg",
  ],
  pagarpintu: Array.from(
    { length: 23 },
    (_, i) => `images/pagarpintu${i + 1}.jpg`
  ), // Optimasi daftar
  teralis: [
    "images/furniture1.jpg",
    "images/furniture2.jpg",
    "images/furniture3.jpg",
  ],
  relingtangga: [
    "images/teralis1.jpg",
    "images/teralis2.jpg",
    "images/teralis3.jpg",
  ],
  kisikisibesi: [
    "images/konstruksi1.jpg",
    "images/konstruksi2.jpg",
    "images/konstruksi3.jpg",
  ],
  furnitur: [
    "images/dekorasi1.jpg",
    "images/dekorasi2.jpg",
    "images/dekorasi3.jpg",
  ],
  rak: ["images/kandang1.jpg", "images/kandang2.jpg", "images/kandang3.jpg"],
  costum: ["images/rak1.jpg", "images/rak2.jpg", "images/rak3.jpg"],
  lainlain: ["images/custom1.jpg", "images/custom2.jpg", "images/custom3.jpg"],
};

// Fungsi untuk menampilkan gambar berdasarkan kategori
function showImages(category) {
  const imageContainer = document.getElementById("image-container");
  if (!imageContainer) {
    console.error("Elemen 'image-container' tidak ditemukan.");
    return;
  }

  imageContainer.innerHTML = ""; // Hapus gambar sebelumnya

  const categoryImages = images[category];
  if (categoryImages) {
    categoryImages.forEach((imageSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.alt = `${category} image`;
      imgElement.className = "image-item"; // Gunakan CSS untuk gaya
      imageContainer.appendChild(imgElement);
    });
  } else {
    imageContainer.textContent = "Gambar tidak tersedia untuk kategori ini.";
  }
}

// Fungsi untuk menampilkan konten berdasarkan ID
function showContent(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Sembunyikan semua bagian
  sections.forEach((section) => (section.style.display = "none"));

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  } else {
    console.warn(`Bagian dengan ID '${sectionId}' tidak ditemukan.`);
  }

  // Perbarui kelas aktif pada navigasi
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href").includes(sectionId)
    );
  });
}

// Tampilkan konten awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showContent("beranda");
});

// Fungsi untuk menampilkan modal dengan gambar besar
function showModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block"; // Tampilkan modal
  modalImg.src = imageSrc; // Atur gambar besar
}

// Fungsi untuk menyembunyikan modal
function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Sembunyikan modal
}

// Tambahkan event pada gambar setelah membuat elemen
function addImageClickEvent(imgElement, imageSrc) {
  imgElement.addEventListener("click", () => showModal(imageSrc));
}

// Update bagian showImages
function showImages(category) {
  const imageContainer = document.getElementById("image-container");
  if (!imageContainer) {
    console.error("Elemen 'image-container' tidak ditemukan.");
    return;
  }

  imageContainer.innerHTML = ""; // Hapus gambar sebelumnya

  const categoryImages = images[category];
  if (categoryImages) {
    categoryImages.forEach((imageSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.alt = `${category} image`;
      imgElement.className = "image-item"; // Gunakan CSS untuk gaya
      addImageClickEvent(imgElement, imageSrc); // Tambahkan event klik
      imageContainer.appendChild(imgElement);
    });
  } else {
    imageContainer.textContent = "Gambar tidak tersedia untuk kategori ini.";
  }
}
