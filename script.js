const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// MATRIX AYARLARI (Geliştirilmiş)
const elements = ["Zehra'm", "Zehrosum", "❤️", "🌹", "🌸", "✨", "💛"];
const fontSize = 20; // Yazıları biraz büyüttük
const columns = Math.floor(canvas.width / 120); // Sütunları daha okunaklı yaptık
const drops = Array(columns).fill(1);

function drawMatrix() {
    // Hafif iz bırakma efekti (Yavaş akış için 0.08 idealdir)
    ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = 'bold ' + fontSize + 'px "Poppins", sans-serif';

    drops.forEach((y, i) => {
        const text = elements[Math.floor(Math.random() * elements.length)];
        
        // Dinamik Renklendirme
        if (text === "❤️" || text === "🌹") {
            ctx.fillStyle = "#ff4d4d"; // Kalp ve Gül için kırmızı
        } else if (text === "Zehra'm") {
            ctx.fillStyle = "#39ff14"; // Neon Yeşil
        } else if (text === "Zehrosum") {
            ctx.fillStyle = "#fff01f"; // Parlak Sarı
        } else {
            ctx.fillStyle = "#00f2ff"; // Diğerleri için Canlı Mavi
        }
        
        ctx.fillText(text, i * 120, y * fontSize);

        // Yavaşlatılmış rastgele düşüş hızı
        if (y * fontSize > canvas.height && Math.random() > 0.985) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}
// 50'den 80'e çıkararak animasyonu yavaşlattık
setInterval(drawMatrix, 80);

// SAYAÇ SİSTEMİ (2025'e göre güncel)
function updateCounters() {
    const tanismaTarihi = new Date("2025-06-04T00:00:00");
    const sevgiliTarihi = new Date("2025-06-14T00:00:00");
    const simdi = new Date();

    function diffTime(target) {
        const diff = simdi - target;
        const gun = Math.floor(diff / (1000 * 60 * 60 * 24));
        const saat = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const dk = Math.floor((diff / 1000 / 60) % 60);
        const sn = Math.floor((diff / 1000) % 60); // Saniye eklendi
        return `${gun} Gün, ${saat}s ${dk}d ${sn}s`;
    }

    document.getElementById('tanisma-sayac').innerHTML = diffTime(tanismaTarihi);
    document.getElementById('sevgili-sayac').innerHTML = diffTime(sevgiliTarihi);
}
setInterval(updateCounters, 1000);
updateCounters();

// BÖLÜM AÇMA SİSTEMİ
function openSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.add('hidden'));

    const target = document.getElementById(id);
    if(target) {
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 200 NEDEN OLUŞTURUCU (Sadece boşsa çalışır)
const container = document.getElementById('reasonContainer');
if(container && container.innerHTML === "") {
    for(let i=1; i<=200; i++) {
        const p = document.createElement('p');
        p.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        p.style.padding = "8px 0";
        p.innerHTML = `<span style="color:var(--bright-yellow)">${i}.</span> Seni seviyorum çünkü...`;
        container.appendChild(p);
    }
}