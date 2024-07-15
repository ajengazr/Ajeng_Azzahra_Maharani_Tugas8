// artis yang disarankan
const artist = 'https://rol-music.vercel.app/api/artist';
fetch(artist)
.then(response => response.json())
.then(res => {
    res.forEach((res) => {
        artisPopuler(res);
    });
});

const icon = document.querySelector('.bx').addEventListener("click", () => {
    location.href = "../html/index.html"
});

function judulArtist(){
    const judul = document.querySelector('.judul-artist');
    const h1 = document.createElement('h1');
    h1.textContent = "Artis Yang Disarankan";
    judul.appendChild(h1);
}
judulArtist();

function artisPopuler(res){
    const arPop = document.querySelector('.arPop');
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
    apImg.appendChild(figure);  

    figure.addEventListener("click", () => {
        figure.setAttribute('style', '    transition: color 0.3s ease;');
        const iframe = document.querySelector('iframe');
        iframe.parentNode.removeChild(iframe);
        
        const newIframe = document.createElement('iframe');
        newIframe.setAttribute('style', "width:100%;height:440px;margin-top:50px;overflow:hidden;border-radius:10px;");
        newIframe.setAttribute('src', res.embed);
        
        document.querySelector('.ar-pop').appendChild(newIframe);
    });
}