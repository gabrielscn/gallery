const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [0,1,2];
const selectedIndex = null;

imageIndexes.forEach((i)=>{
    const image = document.createElement('img');
    image.src = `/images/gabriel-${i}.jpg`;
    image.alt = `image ${i} of gabriel from grabriel dropout`;
    image.classList.add('galleryImg');

    image.addEventListener('click', ()=>{
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/gabriel-${i}.jpg`;
        selectedImage.alt = `image ${i} of gabriel from grabriel dropout`;
    });

    gallery.appendChild(image);
});

popup.addEventListener('click', ()=>{
    popup.style.transform = `translateY(-100%)`;
    popup.src = ``;
    popup.alt = "";
})