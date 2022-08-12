lineWrapper();

function lineWrapper() {

  let data = [
    { id: 0, letter: "Ա", word: "արև", grapar: "այբ", graparEng: "“Ayb”" , voice: "SNDS/A.mp3" , letterOfVoice: "[a]"},
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

  for (let i = 0; i < data.length; i++) {
    let divForLetters = document.createElement("div");
    divForLetters.className = "divWithLetter";
    let text = document.createTextNode(data[i].letter);
    divForLetters.appendChild(text);
    document.querySelector(".divForAllLetters").appendChild(divForLetters);
  }

  let popup = document.querySelector(".popup");

  document.querySelectorAll(".divWithLetter").forEach((element, index) =>
    element.addEventListener("click", function() {

      popup.style.opacity = "1";
      popup.style.visibility = "1";
      popup.style.zIndex = "1";

      data.map((obj) => {
        if (index === obj.id) {
          document.querySelector('.leftSide').innerHTML = obj.letter;
          let word = document.querySelector('.word');
          word.innerHTML = obj.word;
          if(obj.id === 36){
            word.innerHTML = word.innerHTML.replace('և', '<span style="color: #7A0821;">և</span>');
            word.classList.add("justifyCenter");
          }

          let w = window.innerWidth;
          if(w !== undefined ) { 
            if(w > 881 && word.innerHTML.length > 5){
              word.style.fontSize = "16px";
            } else if(w > 881 && word.innerHTML.length < 5){
              word.style.fontSize = "24px";
            } else if(w < 881 && w > 572 && word.innerHTML.length > 4){      
              word.style.fontSize = "12px";
            } else if(w < 881 && w > 572 && word.innerHTML.length < 4){      
              word.style.fontSize = "20px";
            } else if(w < 571 && word.innerHTML.length > 4){
              word.style.fontSize = "8px";
            } else if(w < 571 && word.innerHTML.length < 4){
              word.style.fontSize = "16px";
            }
        }

          let divForVoiceLetter = document.querySelector('.divForVoiceLetter');
          divForVoiceLetter.innerHTML = obj.letterOfVoice
          if( obj.grapar !== undefined && obj.graparEng !== undefined){
          document.querySelector(".textTop").innerHTML = obj.grapar;
          document.querySelector(".textBottom").innerHTML = obj.graparEng;
          } else {
            document.querySelector(".textTop").innerHTML = "";
            document.querySelector(".textBottom").innerHTML = "";
          }

          document.querySelector(".voiceIcon").addEventListener("click", function () {
            let sound = document.querySelector(".sound");
            sound.src = obj.voice;
            playPromise = sound.play()
            if (playPromise !== undefined) {
              playPromise.then(_ => {
              })
              .catch(error => {
              });
              }
            });

        }

      });

    })

  );

  function showHidePopup(){

    popup.style.zIndex = "-1";
    popup.style.opacity = "0";
    popup.style.visibility = "0";

  }

   document.querySelector(".xForClose").addEventListener("click", showHidePopup );

   popup.addEventListener("click",function outsideClick(event) {
      if (
        event.target.matches(".xForClose") ||
        !event.target.closest(".popupBody")
      ) {
        showHidePopup()
      }
    },
    false
  )
}
