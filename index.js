function closePopUp(){
    document.getElementById('ac-wrapper').style.display = "none";
}

window.onload = () => {
    let allLetersParent = document.getElementById("allLettersBox");
    aboutAllLetters.map( (val,index) => {
        let letterDivs = document.createElement("div");
        letterDivs.className = "allLetter";
        letterDivs.innerHTML = val.letter;
        allLetersParent.appendChild(letterDivs)
    })
    let allDiv = document.querySelectorAll(".allLetter");
    allDiv.forEach((value,index) => {
        value.addEventListener("click", function(){
            document.getElementById('ac-wrapper').removeAttribute('style');
            aboutAllLetters.map((inf) => {
                if(inf.id == index){
                    let boxForMainLetter = document.getElementById("boxForGeneralLetter");
                    boxForMainLetter.innerHTML = inf.letter;

                    let boxForWord = document.getElementById("littleElement");
                    boxForWord.innerHTML = inf.word;
                    if(inf.word == "Երևան"){
                        let word = document.getElementById("littleElement").innerHTML
                        let newWord= word.replace("և", '<span style="color: rgba(122, 8, 33, 1);">և</span>');
                        document.getElementById("littleElement").innerHTML = newWord;
                    };
                    
                    let boxForLetterInOtherAlphabet = document.getElementById("otherAlphabet");
                    boxForLetterInOtherAlphabet.innerHTML = inf.letterInTheOtherAlphabet;

                    let boxForLetterInEnglish = document.getElementById("inEnglish");
                    boxForLetterInEnglish.innerHTML = inf.letterInEnglish;

                    
                    let voice = document.querySelector("#myAudio");
                    voice.src = inf.voice;

                    let boxForTranscription = document.getElementById("transcription");
                    boxForTranscription.innerHTML = inf.transcription;

                    if(inf.letterInTheOtherAlphabet === undefined){
                        document.querySelector("#word").classList.add("heightreplacement");
                        document.querySelector("#word").classList.add("borderColor");
                        document.querySelector("#voice").classList.add("heightreplacement");
                        document.querySelector("#letterInTheOtherAlphabet").classList.add("styleNone");
                        document.querySelector("#otherAlphabet").classList.add("styleNone");
                        document.querySelector("#inEnglish").classList.add("styleNone");
                        
                    }else {
                        document.querySelector("#letterInTheOtherAlphabet").classList.remove("styleNone");
                        document.querySelector("#word").classList.remove("heightreplacement");
                        document.querySelector("#voice").classList.remove("heightreplacement");
                        document.querySelector("#word").classList.remove("borderColor");
                        document.querySelector("#otherAlphabet").classList.remove("styleNone");
                        document.querySelector("#inEnglish").classList.remove("styleNone");
                    };
                };
            });
        });
    });

    document.getElementById('ac-wrapper').addEventListener("click",function outsideClick(event) {
        if (event.target.matches("#closeButton") || !event.target.closest("#popup")) {
            closePopUp()
        }
      },
      false
    )
}

function voiceSpeaker(){
    document.querySelector("#myAudio").play()

}



const aboutAllLetters = [
    {
        id: 0,
        letter: "Ա",
        word :"արև",
        letterInTheOtherAlphabet:"այբ",
        letterInEnglish: "“Ayb”",
        voice: "SNDS/A.mp3",
        transcription: "[a]",

    },
    {
        id: 1,
        letter: "Բ",
        word :"բալ",
        letterInTheOtherAlphabet:"բեն",
        letterInEnglish: "“Ben”",
        voice: "SNDS/B.mp3",
        transcription: "[b]",

    },
    { 
        id: 2, 
        letter: "Գ", 
        word: "գնդակ", 
        letterInTheOtherAlphabet: "գիմ", 
        letterInEnglish: "“gim”", 
        voice: "SNDS/G.mp3" , 
        transcription: "[g]" 
    },
    { 
        id: 3, 
        letter: "Դ", 
        word: "դդում", 
        letterInTheOtherAlphabet: "դա", 
        letterInEnglish: "“da”", 
        voice: "SNDS/D.mp3" , 
        transcription: "[d]" 
    },
    { 
        id: 4, 
        letter: "Ե",
        word: "ելակ", 
        letterInTheOtherAlphabet: "եչ", 
        letterInEnglish: "“yech”" , 
        voice: "SNDS/YE.mp3" , 
        transcription: "[(j)ɛ]"
    },
    { 
        id: 5, 
        letter: "Զ", 
        word: "զատիկ", 
        letterInTheOtherAlphabet: "զա", 
        letterInEnglish: "“Žhe”", 
        voice: "SNDS/Z.mp3" , 
        transcription: "[z]"
    },
    { 
        id: 6, 
        letter: "Է", 
        word: "էշ", 
        letterInTheOtherAlphabet: "է",
        letterInEnglish: "“Ini”", 
        voice: "SNDS/E.mp3" , 
        transcription: "[ɛ]"
    },
    { 
        id: 7, 
        letter: "Ը", 
        word: "ընկույզ", 
        letterInTheOtherAlphabet: "ըթ", 
        letterInEnglish: "“Ut`”", 
        voice: "SNDS/yy.mp3" , 
        transcription: "[ə]" 
    },
    { 
        id: 8, 
        letter: "Թ", 
        word: "թութակ", 
        letterInTheOtherAlphabet: "թո", 
        letterInEnglish: "“T`o”", 
        voice: "SNDS/t.mp3" , 
        transcription: "[tʰ]" 
    },
    { 
        id: 9, 
        letter: "Ժ", 
        word: "ժամացույց", 
        letterInTheOtherAlphabet: "ժէ", 
        letterInEnglish: "“Žhe”", 
        voice: "SNDS/je.mp3" , 
        transcription: "[ʒ]" 
    },
    { 
        id: 10, 
        letter: "Ի", 
        word: "իլիկ", 
        letterInTheOtherAlphabet: "ինի", 
        letterInEnglish: "“Ini”", 
        voice: "SNDS/I.mp3" , 
        transcription: "[i]" 
    },
    { 
        id: 11, 
        letter: "Լ", 
        word: "լուսին", 
        letterInTheOtherAlphabet: "լիւն",
        letterInEnglish: "“Lyun”", 
        voice: "SNDS/L.mp3" , 
        transcription: "[l]" 
    },
    { 
        id: 12, 
        letter: "Խ", 
        word: "խաղող", 
        letterInTheOtherAlphabet: "խէ", 
        letterInEnglish: "“Xeh”" , 
        voice: "SNDS/X.mp3" , 
        transcription: "[x]"
    },
    { 
        id: 13, 
        letter: "Ծ", 
        word: "ծիածան",
        letterInTheOtherAlphabet: "ծա", 
        letterInEnglish: "“Tza”" , 
        voice: "SNDS/c.mp3" , 
        transcription: "[ts]"
    },
    { 
        id: 14, 
        letter: "Կ", 
        word: "կացին", 
        letterInTheOtherAlphabet: "կեն", 
        letterInEnglish: "“Ken”" , 
        voice: "SNDS/K.mp3" , 
        transcription: "[k]"
    },
    { 
        id: 15, 
        letter: "Հ", 
        word: "հաղարջ", 
        letterInTheOtherAlphabet: "հո", 
        letterInEnglish: "“Ho”" , 
        voice: "SNDS/H.mp3" , 
        transcription: "[h]"
    },
    { 
        id: 16, 
        letter: "Ձ", 
        word: "ձուկ", 
        letterInTheOtherAlphabet: "ձա", 
        letterInEnglish: "“dza”" , 
        voice: "SNDS/DZ.mp3" , 
        transcription: "[dz]"
    },
    { 
        id: 17, 
        letter: "Ղ", 
        word: "ղեկ", 
        letterInTheOtherAlphabet: "ղատ", 
        letterInEnglish: "“glat”" , 
        voice: "SNDS/GH.mp3" , 
        transcription: "[ʁ]"
    },
    { 
        id: 18, 
        letter: "Ճ", 
        word: "ճնճղուկ", 
        letterInTheOtherAlphabet: "ճէ", 
        letterInEnglish: "“Cheh”", 
        voice: "SNDS/ch.mp3" , 
        transcription: "[tʃ]"
    },
    { 
        id: 19, 
        letter: "Մ", 
        word: "մոմ", 
        letterInTheOtherAlphabet: "մեն", 
        letterInEnglish: "“Men”" , 
        voice: "SNDS/M.mp3" , 
        transcription: "[m]"
    },
    { 
        id: 20, 
        letter: "Յ", 
        word: "յասաման", 
        letterInTheOtherAlphabet: "յի", 
        letterInEnglish: "“Yi”" , 
        voice: "SNDS/Y.mp3" , 
        transcription: "[j]"
    },
    { 
        id: 21, 
        letter: "Ն", 
        word: "նապաստակ", 
        letterInTheOtherAlphabet: "նու", 
        letterInEnglish: "“Nu”", 
        voice: "SNDS/N.mp3" , 
        transcription: "[n]"
    },
    { 
        id: 22, 
        letter: "Շ", 
        word: "շուն", 
        letterInTheOtherAlphabet: "շա", 
        letterInEnglish: "“Sha”" , 
        voice: "SNDS/SH.mp3" , 
        transcription: "[ʃ]"
    },
    { 
        id: 23, 
        letter: "Ո", 
        word: "ոզնի", 
        letterInTheOtherAlphabet: "ո", 
        letterInEnglish: "“vo”" , 
        voice: "SNDS/VO.mp3" , 
        transcription: "[(v)o]"
    },
    { 
        id: 24, 
        letter: "Չ", 
        word: "չամիչ", 
        letterInTheOtherAlphabet: "չա", 
        letterInEnglish: "“cha”", 
        voice: "SNDS/CHE.mp3" , 
        transcription: "[tʃʰ]" 
    },
    { 
        id: 25, 
        letter: "Պ", 
        word: "պայուսակ", 
        letterInTheOtherAlphabet: "պէ", 
        letterInEnglish: "“Peh”", 
        voice: "SNDS/P.mp3" ,
        transcription: "[p]" 
    },
    { 
        id: 26, 
        letter: "Ջ", 
        word: "ջայլամ", 
        letterInTheOtherAlphabet: "ջէ", 
        letterInEnglish: "“Jeh”" , 
        voice: "SNDS/J.mp3" , 
        transcription: "[dʒ]"
    },
    { 
        id: 27, 
        letter: "Ռ", 
        word: "ոազմիկ", 
        letterInTheOtherAlphabet: "ռա", 
        letterInEnglish: "“Rra”" , 
        voice: "SNDS/RY.mp3" , 
        transcription: "[r]"
    },
    { 
        id: 28, 
        letter: "Ս", 
        word: "սկյուռ", 
        letterInTheOtherAlphabet: "սէ", 
        letterInEnglish: "“Seh”" , 
        voice: "SNDS/S.mp3" , 
        transcription: "[s]"
    },
    { 
        id: 29, 
        letter: "Վ", 
        word: "վարդ", 
        letterInTheOtherAlphabet: "վեւ", 
        letterInEnglish: "“Vew”" , 
        voice: "SNDS/V.mp3" , 
        transcription: "[v]"
    },
    { 
        id: 30, 
        letter: "Տ", 
        word: "տանձ", 
        letterInTheOtherAlphabet: "տիւն", 
        letterInEnglish: "“Tiun”" , 
        voice: "SNDS/TY.mp3" , 
        transcription: "[t]"
    },
    { 
        id: 31, 
        letter: "Ր",
        word: "րոպե",
        letterInTheOtherAlphabet: "րէ", 
        letterInEnglish: "“Reh”" , 
        voice: "SNDS/r.mp3" , 
        transcription: "[r]"
    },
    { 
        id: 32, 
        letter: "Ց", 
        word: "ցուլ", 
        letterInTheOtherAlphabet: "ցո", 
        letterInEnglish: "“Co”" , 
        voice: "SNDS/CY.mp3" , 
        transcription: "[tsʰ]"
    },
    { 
        id: 33, 
        letter: "ՈՒ",
        word: "ուղտ", 
        letterInTheOtherAlphabet: "ւիւն", 
        letterInEnglish: "“Wyun”" , 
        voice: "SNDS/U.mp3" , 
        transcription: "[uv]"
    },
    { 
        id: 34, 
        letter: "Փ", 
        word: "փիղ", 
        letterInTheOtherAlphabet: "փիւր", 
        letterInEnglish: "“P`iur”" , 
        voice: "SNDS/PPY.mp3" , 
        transcription: "[pʰ]"
    },
    { 
        id: 35, 
        letter: "Ք", 
        word: "քաղաք", 
        letterInTheOtherAlphabet: "քէ", 
        letterInEnglish: "“Qeh”" , 
        voice: "SNDS/Q.mp3" , 
        transcription: "[kʰ]"
    },
    { 
        id: 36, 
        letter: "ԵՎ", 
        word: "Երևան" , 
        voice: "SNDS/EV.mp3" , 
        transcription: "[(j)ɛv]"
    },
    { 
        id: 37, 
        letter: "Օ", 
        word: "օձ" , 
        voice: "SNDS/O.mp3" , 
        transcription: "[o]"
    },
    { 
        id: 38, 
        letter: "Ֆ", 
        word: "ֆլամինգո" , 
        voice: "SNDS/F.mp3" , 
        transcription: "[f]"
    },
]


