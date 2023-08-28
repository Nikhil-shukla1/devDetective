const search = document.querySelector('.search');
const btn = document.querySelector('.btn'); 
const biodata = document.querySelector('.bio');
const uName = document.querySelector('[userName]');
const joinedData = document.querySelector('[joined]');
const userName = document.querySelector(".gitUsername");


async function data(){
    let username = search.value;
    const apiData = await fetch(`https://api.github.com/users/${username}`);
    const response = await apiData.json();
    console.log(response);

    biodata.innerText = response?.bio;
    uName.innerHTML = response?.name;
    let at = response?.created_at;
    let bt = at.split('T');
    joinedData.innerText = `joined on`+" "+bt[0];
    
}

btn.addEventListener('click',()=>{
    if(search.value === ''){
        return;
    }else{
        data();
    }
});