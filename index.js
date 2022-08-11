lineWrapper();
function lineWrapper() {
  document.querySelector(".popup").style.opacity = "0";
  document.querySelector(".popup").style.visibility = "0";
  document.querySelector(".popup").style.zIndex = "-1";
  let arrOfLetters = [
    "Ա",
    "Բ",
    "Գ",
    "Դ",
    "Ե",
    "Զ",
    "Է",
    "Ը",
    "Թ",
    "Ժ",
    "Ի",
    "Լ",
    "Խ",
    "Ծ",
    "Կ",
    "Հ",
    "Ձ",
    "Ղ",
    "Ճ",
    "Մ",
    "Յ",
    "Ն",
    "Շ",
    "Ո",
    "Չ",
    "Պ",
    "Ջ",
    "Ռ",
    "Ս",
    "Վ",
    "Տ",
    "Ր",
    "Ց",
    "ՈՒ",
    "Փ",
    "Ք",
    "ԵՎ",
    "Օ",
    "Ֆ",
  ];
  for (let i = 0; i < arrOfLetters.length; i++) {
    let divForLetters = document.createElement("div");
    divForLetters.className = "divWithLetter";
    let text = document.createTextNode(arrOfLetters[i]);
    divForLetters.appendChild(text);
    document.querySelector(".divForAllLetters").appendChild(divForLetters);
  }
    let arrOfObj = [
    { id: 0, letter: "Ա", word: "արև", grapar: "այբ", graparEng: "“Ayb”" },
    { id: 1, letter: "Բ", word: "բալ", grapar: "բեն", graparEng: "“Ben”" , voice: "SNDS/B.mp3"},
    { id: 2, letter: "Գ", word: "գնդակ", grapar: "գիմ", graparEng: "“gim”" },
    { id: 3, letter: "Դ", word: "դդում", grapar: "դա", graparEng: "“da”" },
    { id: 4, letter: "Ե", word: "ելակ", grapar: "եչ", graparEng: "“yech”" },
    { id: 5, letter: "Զ", word: "զատիկ", grapar: "զա", graparEng: "“Žhe”" },
    { id: 6, letter: "Է", word: "էշ", grapar: "է", graparEng: "“Ini”" },
    { id: 7, letter: "Ը", word: "ընկույզ", grapar: "ըթ", graparEng: "“Ut`”" },
    { id: 8, letter: "Թ", word: "թութակ", grapar: "թո", graparEng: "“T`o”" },
    { id: 9, letter: "Ժ", word: "ժամացույց", grapar: "ժէ", graparEng: "“Žhe”" },
    { id: 10, letter: "Ի", word: "իլիկ", grapar: "ինի", graparEng: "“Ini”" },
    { id: 11, letter: "Լ", word: "լուսին", grapar: "լիւն", graparEng: "“Lyun”" },
    { id: 12, letter: "Խ", word: "խաղող", grapar: "խէ", graparEng: "“Xeh”" },
    { id: 13, letter: "Ծ", word: "ծիածան", grapar: "ծա", graparEng: "“Tza”" },
    { id: 14, letter: "Կ", word: "կացին", grapar: "կեն", graparEng: "“Ken”" },
    { id: 15, letter: "Հ", word: "հաղարջ", grapar: "հո", graparEng: "“Ho”" },
    { id: 16, letter: "Ձ", word: "ձուկ", grapar: "ձա", graparEng: "“dza”" },
    { id: 17, letter: "Ղ", word: "ղեկ", grapar: "ղատ", graparEng: "“glat”" },
    { id: 18, letter: "Ճ", word: "ճնճղուկ", grapar: "ճէ", graparEng: "“Cheh”" },
    { id: 19, letter: "Մ", word: "մոմ", grapar: "մեն", graparEng: "“Men”" },
    { id: 20, letter: "Յ", word: "յասաման", grapar: "յի", graparEng: "“Yi”" },
    { id: 21, letter: "Ն", word: "նապաստակ", grapar: "նու", graparEng: "“Nu”" },
    { id: 22, letter: "Շ", word: "շուն", grapar: "շա", graparEng: "“Sha”" },
    { id: 23, letter: "Ո", word: "ոզնի", grapar: "ո", graparEng: "“vo”" },
    { id: 24, letter: "Չ", word: "չամիչ", grapar: "չա", graparEng: "“cha”" },
    { id: 25, letter: "Պ", word: "պայուսակ", grapar: "պէ", graparEng: "“Peh”" },
    { id: 26, letter: "Ջ", word: "ջայլամ", grapar: "ջէ", graparEng: "“Jeh”" },
    { id: 27, letter: "Ռ", word: "ոազմիկ", grapar: "ռա", graparEng: "“Rra”" },
    { id: 28, letter: "Ս", word: "սկյուռ", grapar: "սէ", graparEng: "“Seh”" },
    { id: 29, letter: "Վ", word: "վարդ", grapar: "վեւ", graparEng: "“Vew”" },
    { id: 30, letter: "Տ", word: "տանձ", grapar: "տիւն", graparEng: "“Tiun”" },
    { id: 31, letter: "Ր", word: "րոպե", grapar: "րէ", graparEng: "“Reh”" },
    { id: 32, letter: "Ց", word: "ցուլ", grapar: "ցո", graparEng: "“Co”" },
    { id: 33, letter: "ՈՒ", word: "ուղտ", grapar: "ւիւն", graparEng: "“Wyun”" },
    { id: 34, letter: "Փ", word: "փիղ", grapar: "փիւր", graparEng: "“P`iur”" },
    { id: 35, letter: "Ք", word: "քաղաք", grapar: "քէ", graparEng: "“Qeh”" },
    { id: 36, letter: "ԵՎ", word: "Երևան"},
    { id: 37, letter: "Օ", word: "օձ"},
    { id: 38, letter: "Ֆ", word: "ֆլամինգո"},
  ];
  document.querySelectorAll(".divWithLetter").forEach((element, index) =>
    element.addEventListener("click", function getIndex() {
        console.log(index)
      let letterInfo = document.createTextNode(element.innerHTML);
      let leftSide = document.querySelector(".leftSide");
      leftSide.innerHTML = "";
      leftSide.appendChild(letterInfo);
      arrOfObj.map((obj) => {
        if (index === obj.id) {
            console.log(obj.word);
            document.querySelector(".word").innerHTML = obj.word;
            let x = document.querySelector('.h')
            x.src = obj.voice;
            document.querySelector('input').addEventListener('click' , function foo(){
                let x = document.querySelector('.h');
                x.play()
            })
        }
      });
      document.querySelector(".popup").style.opacity = "1";
      document.querySelector(".popup").style.visibility = "1";
      document.querySelector(".popup").style.zIndex = "1";
    })
  );
  document
    .querySelector(".xForClose")
    .addEventListener("click", function close() {
      document.querySelector(".popup").style.opacity = "0";
      document.querySelector(".popup").style.visibility = "0";
      document.querySelector(".popup").style.zIndex = "-1";
    });
}
