
let arrOfObj = [
    { id: 0, letter: "Ա", word: "արև", grapar: "այբ", graparEng: "“Ayb”" , voice: "SNDS/A.m4a" , letterOfVoice: "[a]"},
    { id: 1,letter: "Բ",word: "բալ",grapar: "բեն",graparEng: "“Ben”", voice: "SNDS/B.mp3" , letterOfVoice: "[b]"},
    { id: 2, letter: "Գ", word: "գնդակ", grapar: "գիմ", graparEng: "“gim”", voice: "SNDS/G.mp3" , letterOfVoice: "[g]" },
    { id: 3, letter: "Դ", word: "դդում", grapar: "դա", graparEng: "“da”", voice: "SNDS/D.mp3" , letterOfVoice: "[d]" },
    { id: 4, letter: "Ե", word: "ելակ", grapar: "եչ", graparEng: "“yech”" , voice: "SNDS/YE.mp3" , letterOfVoice: "[(j)ɛ]"},
    { id: 5, letter: "Զ", word: "զատիկ", grapar: "զա", graparEng: "“Žhe”", voice: "SNDS/Z.mp3" , letterOfVoice: "[z]"},
    { id: 6, letter: "Է", word: "էշ", grapar: "է", graparEng: "“Ini”", voice: "SNDS/E.mp3" , letterOfVoice: "[ɛ]"},
    { id: 7, letter: "Ը", word: "ընկույզ", grapar: "ըթ", graparEng: "“Ut`”", voice: "SNDS/yy.mp3" , letterOfVoice: "[ə]" },
    { id: 8, letter: "Թ", word: "թութակ", grapar: "թո", graparEng: "“T`o”", voice: "SNDS/t.mp3" , letterOfVoice: "[tʰ]" },
    { id: 9, letter: "Ժ", word: "ժամացույց", grapar: "ժէ", graparEng: "“Žhe”", voice: "SNDS/je.mp3" , letterOfVoice: "[ʒ]" },
    { id: 10, letter: "Ի", word: "իլիկ", grapar: "ինի", graparEng: "“Ini”", voice: "SNDS/I.mp3" , letterOfVoice: "[i]" },
    { id: 11, letter: "Լ", word: "լուսին", grapar: "լիւն",graparEng: "“Lyun”", voice: "SNDS/L.mp3" , letterOfVoice: "[l]" },
    { id: 12, letter: "Խ", word: "խաղող", grapar: "խէ", graparEng: "“Xeh”" , voice: "SNDS/X.mp3" , letterOfVoice: "[x]"},
    { id: 13, letter: "Ծ", word: "ծիածան", grapar: "ծա", graparEng: "“Tza”" , voice: "SNDS/c.mp3" , letterOfVoice: "[ts]"},
    { id: 14, letter: "Կ", word: "կացին", grapar: "կեն", graparEng: "“Ken”" , voice: "SNDS/K.mp3" , letterOfVoice: "[k]"},
    { id: 15, letter: "Հ", word: "հաղարջ", grapar: "հո", graparEng: "“Ho”" , voice: "SNDS/H.mp3" , letterOfVoice: "[h]"},
    { id: 16, letter: "Ձ", word: "ձուկ", grapar: "ձա", graparEng: "“dza”" , voice: "SNDS/DZ.mp3" , letterOfVoice: "[dz]"},
    { id: 17, letter: "Ղ", word: "ղեկ", grapar: "ղատ", graparEng: "“glat”" , voice: "SNDS/GH.mp3" , letterOfVoice: "[ʁ]"},
    { id: 18, letter: "Ճ", word: "ճնճղուկ", grapar: "ճէ", graparEng: "“Cheh”", voice: "SNDS/ch.mp3" , letterOfVoice: "[tʃ]"},
    { id: 19, letter: "Մ", word: "մոմ", grapar: "մեն", graparEng: "“Men”" , voice: "SNDS/M.mp3" , letterOfVoice: "[m]"},
    { id: 20, letter: "Յ", word: "յասաման", grapar: "յի", graparEng: "“Yi”" , voice: "SNDS/Y.mp3" , letterOfVoice: "[j]"},
    { id: 21, letter: "Ն", word: "նապաստակ", grapar: "նու", graparEng: "“Nu”", voice: "SNDS/N.mp3" , letterOfVoice: "[n]"},
    { id: 22, letter: "Շ", word: "շուն", grapar: "շա", graparEng: "“Sha”" , voice: "SNDS/SH.mp3" , letterOfVoice: "[ʃ]"},
    { id: 23, letter: "Ո", word: "ոզնի", grapar: "ո", graparEng: "“vo”" , voice: "SNDS/VO.mp3" , letterOfVoice: "[(v)o]"},
    { id: 24, letter: "Չ", word: "չամիչ", grapar: "չա", graparEng: "“cha”", voice: "SNDS/CHE.mp3" , letterOfVoice: "[tʃʰ]" },
    { id: 25, letter: "Պ", word: "պայուսակ", grapar: "պէ", graparEng: "“Peh”", voice: "SNDS/P.mp3" , letterOfVoice: "[p]" },
    { id: 26, letter: "Ջ", word: "ջայլամ", grapar: "ջէ", graparEng: "“Jeh”" , voice: "SNDS/J.mp3" , letterOfVoice: "[dʒ]"},
    { id: 27, letter: "Ռ", word: "ոազմիկ", grapar: "ռա", graparEng: "“Rra”" , voice: "SNDS/RY.mp3" , letterOfVoice: "[r]"},
    { id: 28, letter: "Ս", word: "սկյուռ", grapar: "սէ", graparEng: "“Seh”" , voice: "SNDS/S.mp3" , letterOfVoice: "[s]"},
    { id: 29, letter: "Վ", word: "վարդ", grapar: "վեւ", graparEng: "“Vew”" , voice: "SNDS/V.mp3" , letterOfVoice: "[v]"},
    { id: 30, letter: "Տ", word: "տանձ", grapar: "տիւն", graparEng: "“Tiun”" , voice: "SNDS/TY.mp3" , letterOfVoice: "[t]"},
    { id: 31, letter: "Ր", word: "րոպե", grapar: "րէ", graparEng: "“Reh”" , voice: "SNDS/r.mp3" , letterOfVoice: "[r]"},
    { id: 32, letter: "Ց", word: "ցուլ", grapar: "ցո", graparEng: "“Co”" , voice: "SNDS/CY.mp3" , letterOfVoice: "[tsʰ]"},
    { id: 33, letter: "ՈՒ", word: "ուղտ", grapar: "ւիւն", graparEng: "“Wyun”" , voice: "SNDS/U.mp3" , letterOfVoice: "[uv]"},
    { id: 34, letter: "Փ", word: "փիղ", grapar: "փիւր", graparEng: "“P`iur”" , voice: "SNDS/PPY.mp3" , letterOfVoice: "[pʰ]"},
    { id: 35, letter: "Ք", word: "քաղաք", grapar: "քէ", graparEng: "“Qeh”" , voice: "SNDS/Q.mp3" , letterOfVoice: "[kʰ]"},
    { id: 36, letter: "ԵՎ", word: "Երևան" , voice: "SNDS/EV.mp3" , letterOfVoice: "[(j)ɛv]"},
    { id: 37, letter: "Օ", word: "օձ" , voice: "SNDS/O.mp3" , letterOfVoice: "[o]"},
    { id: 38, letter: "Ֆ", word: "ֆլամինգո" , voice: "SNDS/F.mp3" , letterOfVoice: "[f]"},
  ];

const letterMain = document.querySelector(".letterMain")
for(let i=0;i<arrOfObj.length;i++){

console.log(arrOfObj[i])
    let newDiv = document.createElement("div");
    let myText = document.createTextNode(arrOfObj[i].letter );
    newDiv.appendChild(myText);
    letterMain.appendChild(newDiv)
    letterMain.appendChild(newDiv)
    newDiv.className = "letterBox"

}
let letterBox = document.querySelectorAll(".letterBox")

letterBox.forEach((item,index)=>{
item.addEventListener("click",function(){
   const popupContainer = document.querySelector(".popupContainer")
   popupContainer.style.display="flex"  
   arrOfObj.map((item)=>{
    if (item.id===index){
      const divForLetter = document.querySelector(".divForLetter")
      divForLetter.innerHTML = item.letter;
      const divForWord = document.querySelector(".divForWord")
      divForWord.innerHTML = item.word
      const letterOfVoice = document.querySelector(".letterOfVoice")
      letterOfVoice.innerHTML = item.letterOfVoice
      if( item.grapar !== undefined && item.graparEng !== undefined){
      const midWord = document.querySelector(".midWord")
        midWord.innerHTML = item.grapar;
      const subText = document.querySelector(".subText");
      subText.innerHTML = item.graparEng
            document.querySelector(".infoMidDiv").style.display="flex";
            document.querySelector(".infoMidDiv").style.height = "135px";
            document.querySelector(".letterInfo").style.height = "140px";


        } else {
            document.querySelector(".midWord").innerHTML="";
            document.querySelector(".subText").innerHTML="";
            document.querySelector(".infoMidDiv").style.height = "0px";
            document.querySelector(".letterInfo").style.height = "50%";

        }
      const voiceIcon = document.querySelector(".voiceIcon")
      voiceIcon.addEventListener("click",function(){
       const voice = document.querySelector(".voice")
       voice.src = item.voice;
       playPromise = voice.play()
            if (playPromise !== undefined) {
              playPromise.then(_ => {
              })
              .catch(error => {
              });
              }
      })
    } 


    


   }
   )
})
})
const divForX = document.querySelector(".divForX")
divForX.addEventListener("click",function(){
    const popupContainer = document.querySelector(".popupContainer")
    popupContainer.style.display="none"
})