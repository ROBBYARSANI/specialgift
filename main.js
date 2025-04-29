onload = () => {
    document.body.classList.remove("container");
};

const texts = [
    "Untuk orang yang benar benarku sayangi \"mutia\"",
    "Tidak ada kata yang cukup untuk menggambarkan",
    "betapa bahagianya aku memiliki kamu di hidupku",
    "Di usiamu yang ke-20 ini aku berdoa supaya",
    "setiap langkahmu selalu dihiasi dengan kebahagiaan dan cinta",
    "Terima kasih telah menjadi bagian terbaik dari hari-hariku",
    "Selamat ulang tahun, cintaku, Semoga kita terus saling menguatkan",
    "tumbuh bersama, dan menciptakan banyak cerita indah lainnya"
];

let index = 0;

function rotateText() {
    const textElement = document.getElementById("rotating-text");
    textElement.style.opacity = 0; // Mulai transisi menghilang
    setTimeout(() => {
        index = (index + 1) % texts.length; // Beralih ke teks berikutnya
        textElement.textContent = texts[index]; // Ganti teks
        textElement.style.opacity = 1; // Transisi muncul kembali
    }, 500); // Waktu sinkron dengan durasi animasi
}

// Ganti teks setiap 4 detik
setInterval(rotateText, 4000);

