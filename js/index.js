// create cetagory button
const loadCetagory = () =>{
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then(res => res.json())
.then(data => displayCetagory(data.categories))
.catch((error) => console.log(error));
};

// display cetagories
const  displayCetagory = (cetagories) =>{
 const cetagoriContainer =document.getElementById('cetagory-container');
 cetagories.forEach(item => {
    const cetagoryItem = document.createElement('div');
 cetagoryItem.innerHTML = `
    <button onclick="buttonClick(${item.category_id})" class="btn">
       ${item.category}
    </button>
 `
 cetagoriContainer.append(cetagoryItem)
 });
};

// const buttonclick = document.getElementById('');
// buttonclick.addEventListener('click', btnClick =(btn)=>{
// btn.classlist.add('bg-black')
// })

// create video catagory
const loadVideos = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => error)
};

// display videos
const  displayVideos = (video) =>{
    const videoConteiner = document.getElementById('videos');
    video.forEach(videos =>{
        const video =document.createElement('div');
        video.innerHTML = `
        <figure class="h-[200px] relative">
        <img
        src=${videos.thumbnail}
        class="h-full w-full object-cover"
        alt="videos" />
        <span class="absolute right-2 bottom-2 bg-gray-400 text-black rounded-2xl">${videos.others?.posted_date || 'No Published'}</span>
    </figure>
        `
        videoConteiner.append(video)
    });
}
loadCetagory()
loadVideos()