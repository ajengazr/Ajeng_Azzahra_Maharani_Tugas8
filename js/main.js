// header ketika discroll
window.addEventListener('scroll', function() {
    if (window.scrollY >= 10) {
      document.querySelector('header').classList.add('scroll');
    } else {
      document.querySelector('header').classList.remove('scroll');
    }
});

function utama(){
    const utama = document.querySelector('.utama');
    const h3 = document.createElement('h1');
    h3.textContent = "Rhythm Of Life Music";
    utama.appendChild(h3);
    
    const h1 = document.createElement('h1');
    h1.textContent = "Discover new music every day."
    utama.appendChild(h1);
}
utama();

// artis yang disarankan
const url = 'https://rol-music.vercel.app/api/artist';
fetch(url)
.then(response => response.json())
.then(res => {
        artisPopuler(res[0]);
        artisPopuler(res[1]);
        artisPopuler(res[2]);
        artisPopuler(res[3]);
        artisPopuler(res[4]);
        artisPopuler(res[5]);

});
function judulArtist(){
    const judul = document.querySelector('.judul-artist');
    const h1 = document.createElement('h1');
    h1.textContent = "Artis Yang Disarankan";
    judul.appendChild(h1);

    const tampil = document.createElement('a');
    tampil.textContent = "Tampilkan Selengkapnya";
    tampil.setAttribute('href', "../html/saran-artis.html");
    judul.appendChild(tampil);
}
judulArtist();

function artisPopuler(res){
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src', res.image);
    const figcaption = document.createElement('figcaption');
    const p = document.createElement('p');
    p.textContent = res.name;
    const artist = document.createElement('p');
    artist.textContent = "Artist";
    
    figcaption.appendChild(p);
    figcaption.appendChild(artist);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    const apImg = document.querySelector('.ap-img');
    // apImg.classList.add('ap-img');
    apImg.appendChild(figure);
    
}

// album teratas
const album = 'https://rol-music.vercel.app/api/albums';
fetch(album)
.then(response => response.json())
.then(res => {
    saranAlbum(res[0]);
    saranAlbum(res[6]);
    saranAlbum(res[2]);
    saranAlbum(res[3]);
    saranAlbum(res[4]);
    saranAlbum(res[5]);
});
function judulAlbum(){
    const judul = document.querySelector('.judul-album');
    const h1 = document.createElement('h1');
    h1.textContent = "Album Teratas";
    judul.appendChild(h1);

    const tampil = document.createElement('a');
    tampil.textContent = "Tampilkan Selengkapnya";
    tampil.setAttribute('href', "../html/saran-album.html");
    judul.appendChild(tampil);
}
judulAlbum();


function saranAlbum(res){
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src', res.image);
    figure.appendChild(img);

    const figcaption = document.createElement('figcaption');
    const title = document.createElement('p');
    title.textContent = res.title;
    figcaption.appendChild(title);

    const name = document.createElement('p');
    name.textContent = res.name;
    figcaption.appendChild(name);

    figure.appendChild(figcaption);

    const raImg = document.querySelector('.ra-img');
    raImg.appendChild(figure);
}