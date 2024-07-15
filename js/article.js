const data = [
    {
        image: "https://cdn.idntimes.com/content-images/post/20240627/img-20240627-wa0079-b8efad54e59f52c8e2ec0f83dade26d0_600x400.jpg",
        title: "Band Metal Asal Garut, VoB Unjuk Gigi di Glastonbury 2024",
        date: "28 Juni 2024 | News",
        url: "https://jabar.idntimes.com/news/jabar/azzis-zilkhairil/band-metal-asal-garut-vob-unjuk-gigi-di-glastonbury-2024"
    },
    {
        image: "https://cdn.idntimes.com/content-images/post/20230717/01-aca84f4b724638547338c8f58fadb04c_600x400.jpg",
        title: "Sejarah Gelaran Prambanan Jazz, Datangkan Kenny G hingga Rugi",
        date: "26 Juni 2024 | Hype",
        url: "https://jogja.idntimes.com/hype/entertainment/dyar-ayu-1/awal-prambanan-jazz-festival-datangkan-kenny-g-hingga-merugi"
    },
    {
        image: "https://cdn.idntimes.com/content-images/community/2024/06/conductor-5157153-1280-f96a2f31398211c36c1d614d2c908814-2d0f47601b8a415b1c0e040e9fa08aa5_600x400.jpg",
        title: "4 Peran dan Fungsi Konduktor pada Orkestra, Sudah Tahu?",
        date: "25 Juni 2024 | Hype",
        url: "https://www.idntimes.com/hype/fun-fact/theodore-siagian/peran-konduktor-orkestra-c1c2"
    },
    {
        image: "https://cdn.idntimes.com/content-images/community/2023/11/pexels-gustavo-fring-3885595-1-ee935e9ea79a32351151a63f3d9c8cb7-03fa5143867b9cfd1622c3407f59637f_600x400.jpg",
        title: "5 Manfaat Pemutaran Musik di Ruang Tunggu Bandara, Temani Penumpang",
        date: "24 Juni 2024 | Travel",
        url: "https://jogja.idntimes.com/travel/destination/eva-yuniarti/5-manfaat-pemutaran-musik-di-ruang-tunggu-bandara-temani-penumpang-c1c2"
    },
    {
        image: "https://cdn.idntimes.com/content-images/community/2024/06/pexels-bertellifotografia-2608519-d5138c46fe7d65482dd194621f65d74b-b5af177a9a09389f8e53c46c1798e870_600x400.jpg",
        title: "7 Daftar Lagu buat Iringi Video Cinematic, Catchy Banget!",
        date: "23 Juni 2024 | Hype",
        url: "https://www.idntimes.com/hype/entertainment/ilma-angela-f-a/lagu-video-cinematic-c1c2"
    },
    {
        image: "https://cdn.idntimes.com/content-images/community/2020/07/musik-f68972d9fa6dfba107c336479dbd715b_600x400.jpg",
        title: "21 Juni Hari Musik Dunia: Ini Sejarah dan Cara Merayakannya",
        date: "21 Juni 2024 | News",
        url: "https://www.idntimes.com/news/world/seo-intern/21-juni-hari-musik-dunia-ini-sejarah-dan-cara-merayakannya"
    },
    {
        image: "https://cdn.idntimes.com/content-images/community/2024/06/viktor-forgacs-b88pgqxs4qg-unsplash-ec4aa92aa557b03fed737914fdd8262e-6fb22d3ce1dd963f9b74eb183808f311_600x400.jpg",
        title: "5 Manfaat Psikologi Musik dalam Meditasi, Menenangkan",
        date: "14 Juni 2024 | Life",
        url: "https://sulsel.idntimes.com/life/inspiration/ign-1690715685-msw/5-manfaat-psikologis-musik-dalam-meditasi-menenangkan-c1c2"
    },
    {
        image: "https://cdn.idntimes.com/content-images/post/20240612/screenshot-20240612-123614-instagram-f4b11609f8391721d3ed54092c08f98f_600x400.jpg",
        title: "Festival Musik Tradisi Indonesia Digelar di Lampung, Catat Tanggalnya!",
        date: "12 Juni 2024 | Hype",
        url: "https://lampung.idntimes.com/hype/entertainment/silviana-4/festival-musik-tradisi-indonesia-digelar-di-lampung-catat-tanggalnya"
    }
];

function news(data){
    const article = document.querySelector('article');

    const h1 = document.createElement('h1');
    h1.textContent = data.title;
    const span = document.createElement('span');
    span.textContent = data.date;
    const figcaption = document.createElement('figcaption');
    figcaption.appendChild(h1);
    figcaption.appendChild(span);

    const img = document.createElement('img');
    img.setAttribute('src', data.image);
    const figure = document.createElement('figure');
    figure.appendChild(img);
    figure.appendChild(figcaption);

    const a = document.createElement('a');
    a.setAttribute('href', data.url);
    article.appendChild(a);
    article.appendChild(figure);
}

// judul
const article = document.querySelector('article');
const title = document.createElement('h1');
title.textContent = "Musik";
article.appendChild(title);
// menampilkan konten article dgn perulangan
data.forEach((data) => {
    news(data);
})