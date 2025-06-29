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

document.getElementById('search').addEventListener('click', inputField = ()=>{
const input = document.getElementById('input').value;
 searchVideos(input)
});

document.getElementById('input').addEventListener('keyup', inputType =(e = " ") =>{
    const input = e.target.value
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`)
    .then((res) => res.json())
    .then((data) =>{
        displayVideos(data.videos);
    });
})

const searchVideos =(searchText) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then((res) => res.json())
        .then((data) =>{
            displayVideos(data.videos);
        });
       

};
const buttonClick = (id) =>{
    
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => displayVideos(data.category))
    .catch(error => error)
}

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
    videoConteiner.innerHTML = "";
    if (video.length == 0) {
        videoConteiner.innerHTML = `
        <div class="card bg-gray-400 md:col-span-3 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="Icon.png"
            alt="erros"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">No Information Available</h2>
          <p>Please click another button to show pets information</p>
        </div>
      </div>
`
};
    video.forEach(videos =>{
        const video =document.createElement('div');
        video.innerHTML = `
        <figure class="h-[200px] relative">
        <img
        src=${videos.thumbnail}
        class="h-full w-full object-cover"
        alt="videos" />
        <span class="absolute right-2 text-xs bottom-2 p-2 bg-gray-400 text-black rounded-2xl">${getTime(videos.others.posted_date)}</span>
    </figure>
        `
        videoConteiner.append(video)
    });
}

function getTime(time){
    const year = parseInt(time/31104000);
    let remainingSecond = time%31104000;
    const month = parseInt(remainingSecond/2592000);
    remainingSecond = remainingSecond%2592000;
    const day = parseInt(remainingSecond/86400);
    remainingSecond = remainingSecond%86400;
   const hour = parseInt(remainingSecond/3600);
    remainingSecond = remainingSecond%3600;
  const minute  = parseInt(remainingSecond/60);
  remainingSecond = remainingSecond % 60;
  if(time.length > 0){
     return `${year ? year + 'year' : ""} ${month ? month + 'month' : ""} ${day ? day + 'day' : ""} ${hour ? hour + 'hour' : ""} ${minute} minute ${remainingSecond} second ago`
  }
  else{
    return "";
  }
 
}

loadCetagory()
loadVideos()
searchVideos()