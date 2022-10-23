const btn = document.querySelector(".emoji");

const lyrics = document.querySelector(".lyrics");


const music_title = document.querySelector('.music_title')
const bg_video = document.querySelector(".bg-video");
const music = document.querySelector(".music");


const higa = document.querySelector(".higa");
const binhi = document.querySelector(".binhi");
const pagsamo = document.querySelector(".pagsamo");
let i = 2;

btn.addEventListener("click", () => {
    console.log(i);
    if (i % 2 == 0) {
      music.play();
    } else {
      music.pause();
  
    }
    i++;
  });
  


let MusicLyrics = [
    "Playing...",
    "Instrumental",
    "Kailangan mong malaman Kung kailan ka kailangan Parang 'di na naranasang Ikaw naman ang ipaglaban",
    "Bakit palaging isinasantabi Ang iyong sarili para sa iba? Naghahangad sa taong 'di babalik Subukan mo namang magpahinga",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "Mayro'n ngang puso Ngunit hindi mo nakikita ito Kahit pa tayo'y nasa sulok 'Di ka pa rin magpapasuyo",
    "Konting pilit pa ba ang kailangan? O sadyang 'di ako ang gusto? Kaunting silip naman Sa aking nararamdaman sa 'yo",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga Ika'y mahalaga",
    "Instrumental",
    "At dahan-dahang... At dahan-dahang... At dahan-dahang... Ihiga, oh, oh",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "",
    "At dahan-dahang... At dahan-dahang... At dahan-dahang... Ihiga, oh, oh",
    "Lyrics"
  ];
let z = [0,10,25,40,55,86,100,117,157,170,187,216,254,270,290];
let verse = 0;

higa.addEventListener('click',()=>{
    i = 2
    z = []
    z.push(0,25,40,55,86,100,117,157,170,187,216,254,270);
    MusicLyrics = []
    MusicLyrics.push("Instrumental",
    "Kailangan mong malamanKung kailan ka kailangan Parang 'di na naranasang Ikaw naman ang ipaglaban",
    "Bakit palaging isinasantabi Ang iyong sarili para sa iba? Naghahangad sa taong 'di babalik Subukan mo namang magpahinga",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "Mayro'n ngang puso Ngunit hindi mo nakikita ito Kahit pa tayo'y nasa sulok 'Di ka pa rin magpapasuyo",
    "Konting pilit pa ba ang kailangan? O sadyang 'di ako ang gusto? Kaunting silip naman Sa aking nararamdaman sa 'yo",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga Ika'y mahalaga",
    "Instrumental",
    "At dahan-dahang... At dahan-dahang... At dahan-dahang... Ihiga, oh, oh",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "At dahan-dahang ihiga ang katawan Nang 'yong malamang 'di ka nag-iisa Halika na't 'di kailangang pilitin Dahil para sa 'kin, ika'y mahalaga",
    "",
    "At dahan-dahang... At dahan-dahang... At dahan-dahang... Ihiga, oh, oh")
    verse = 0
    music_title.textContent = "HIGA"
    bg_video.src = "resources/video/video.mp4"
    music.src = "resources/video/music.mp3" 
})

binhi.addEventListener('click',()=>{
    i = 2
    z = []
    z.push(0,8,24,39,57,73,87,103,123,160,176,190,212)
    MusicLyrics = []
    MusicLyrics.push("Instrumental",
    "'Di ko na nadiligan Ang binhi ng iyong pagmamahal Ayoko nang sapilitang Ibuhos ang lahat ng dinadamdam",
    "Ang tangi kong hiling ay mahawakan Ang iyong mga kamay at daliri Habang dahan-dahang haplusin ng mga salita Ang puso mong sabik mayakap 'pag nag-iisa",
    "Kaya tahan na, ooh Sumandal ka, ooh Hayaan mo na aking paglaruan Apoy ng iyong labi, oh paraluman",
    "Binibining natutulog Sa ilalim ng aking mga bulaklak 'Di mababaon sa limot Ang ligayang hatid ng iyong halimuyak",
    "Alak lamang ang pamunas sa natira Mong alaalang 'di kumupas at kahit na Ipilit ko mang ibalik pa ang dati Tayo'y mawawala pa rin",
    "Kaya tahan na, ooh Sumandal ka, ooh Hayaan mo na aking paglaruan Apoy ng iyong labi, oh paraluman",
    "Ilang araw nang nakahiga Tuluyan na nga bang ako'y iyong nilisan? Kahit saglit, pwede bang mahawakan?","Instrumental",
    "'Di na kailangang lumayo, halika sa akin 'Di na muling mabibigo, ako ay yakapin",
    "Kaya tahan na, ooh Sumandal ka, ooh Hayaan mo na aking paglaruan Apoy ng iyong labi, oh paraluman",
    "Ilang araw nang nakahiga Tuluyan na nga bang ako'y iyong nilisan? Kahit saglit, pwede bang mahawakan?","Lyrics"
    
    
    )
    music_title.textContent = "BINHI"
    verse = 0
    bg_video.src = "resources/video/video1.mp4"
    music.src = "resources/video/music1.mp3" 
})



music.addEventListener("timeupdate", () => {
  if (Math.floor(music.currentTime) > z[verse]) {
    lyrics.textContent = MusicLyrics[verse];
    verse++;
  }
});

