const search = document.querySelector('.search');
const btn = document.querySelector('.btn'); 
const biodata = document.querySelector('.bio');
const uName = document.querySelector('[userName]');
const joinedData = document.querySelector('[joined]');
const userName = document.querySelector(".gitUsername");
const repodata = document.querySelector(".repo");
const followerdata = document.querySelector(".followers");
const followingdata = document.querySelector(".following");
const twitterlink = document.querySelector('.twitter');
const companylink = document.querySelector('.company');
const locationlink = document.querySelector('.location');
const websitelink = document.querySelector('.website');
const imgData = document.querySelector('.imgData');

async function data(){
    let username = search.value;
    const apiData = await fetch(`https://api.github.com/users/${username}`);
    const response = await apiData.json();
    console.log(response);

    biodata.innerText = response?.bio;
    uName.innerHTML = response?.name;
    let at = response?.created_at;
    let bt = at.split('T');
    joinedData.innerText = `joined `+" "+bt[0];
    userName.innerText = response?.login; 
    userName.href = `${response?.html_url}`;
    repodata.innerText = "repo "+"\n"+response?.public_repos;
    followerdata.innerText = "followers "+"\n"+response?.followers;
    followingdata.innerText = "following "+"\n"+response?.following;
    imgData.src = `${response?.avatar_url}`;
    if(response?.company !== null){
        companylink.innerText = response?.company;
        companylink.href = `${response?.organizations_url}`;
    }
    if(response?.twitter_username !== null){
        companylink.innerText = response?.twitter_username;
        companylink.href = `www.twitter.com/${response?.twitter_username}`;
    }
    locationlink.innerText = response?.location;
    if(response?.blog !== ""){
        websitelink.innerText = 'website';
        websitelink.href = response?.blog;
    }
}

btn.addEventListener('click',()=>{
    if(search.value === ''){
        return;
    }else{
        data();
    }
});