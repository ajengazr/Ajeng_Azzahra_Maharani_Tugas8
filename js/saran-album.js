// saran album
const album = 'https://rol-music.vercel.app/api/albums';
fetch(album)
.then(response => response.json())
.then(res => {
    res.forEach((res) => {
        saranAlbum(res);
    });
});

const icon = document.querySelector('.bx').addEventListener("click", () => {
    location.href = "../html/index.html"
});
function judulAlbum(){
    const judul = document.querySelector('.judul-album');
    const h1 = document.createElement('h1');
    h1.textContent = "Album Teratas";
    judul.appendChild(h1);
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
    
    figure.addEventListener("click", () => {
        const iframe = document.querySelector('iframe');
        iframe.parentNode.removeChild(iframe);
        
        const newIframe = document.createElement('iframe');
        newIframe.setAttribute('style', "width:100%;height:440px;margin-top:50px;overflow:hidden;border-radius:10px;");
        newIframe.setAttribute('src', res.embed);
        
        document.querySelector('.req-album').appendChild(newIframe);
    });
}
