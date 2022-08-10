   lineWrapper()
    function lineWrapper(){
        document.querySelector('.popup').style.opacity = '0'; 
        document.querySelector('.popup').style.visibility = '0'; 
        document.querySelector('.popup').style.zIndex = '-1'
        let arrOfLetters = ["Ա" , "Բ" , "Գ" , "Դ" , "Ե" , "Զ" , "Է" , "Ը" , "Թ" , "Ժ" , "Ի" , "Լ" , "Խ" , "Ծ" , "Կ" , "Հ" , "Ձ" , "Ղ" , "Ճ" , "Մ" , "Յ" , "Ն" , "Շ" , "Ո" , "Չ" , "Պ" , "Ջ" , "Ռ" , "Ս" , "Վ" , "Տ" , "Ր" , "Ց" , "ՈՒ" , "Փ" , "Ք" , "ԵՎ" , "Օ" , "Ֆ"] ;
        for(let i = 0 ; i < arrOfLetters.length; i++){
            let divForLetters = document.createElement('div');
            divForLetters.className = ('divWithLetter');
            let text = document.createTextNode(arrOfLetters[i]);
            divForLetters.appendChild(text);
            document.querySelector(".divForAllLetters").appendChild(divForLetters);
        
    }
    let arrOfWords = ["արև" , "բալ" , "գնդակ" , "դդում" , "ելակ" , "զատիկ" , "էշ" , "ընկույզ" , "թութակ" , "ժամացույց" , "իլիկ" , "լուսին" , "խաղող" , "ծիածան" , "կացին" , "հաղարջ" , "ձուկ" , "ղեկ" , "ճնճղուկ" , "մոմ" , "յասաման" , "նապաստակ" , "շուն" , "ոզնի" , "չամիչ" , "պայուսակ" , "ջայլամ" , "ռազմիկ" , "սկյուռ" , "վարդ" , "տանձ" , "րոպե" , "ցուլ" , "ուղտ" , "փիղ" , "քաղաք" , "Երևան" , "օձ" , "ֆլամինգո" , ];


    let arrOfGrapar = [ ["այբ" , "“Ayb”"] , ["բեն" , "“Ben”"] , ["գիմ" , "“gim”"] , ["դա" , "“da”"] , ["եչ" , "“yech”"] , ["զա" , "“Žhe”"] ,  ["է" , "“Ini”"] , ["ըթ" , "“Ut`”"] , ["թո" , "“T`o”"] , ["ժէ" , "“Žhe”"] , ["ինի" , "“Ini”"] , ["լիւն" , "“Lyun”"] , ["խէ" , "“Xeh”"] , ["ծա" , "“Tza”"] , ["կեն" , "“Ken”"] , ["հո" , "“Ho”"] , ["ձա" , "“dza”"] , ["ղատ" , "“glat”"] , ["ճէ" , "“Cheh”"] , ["մեն" , "“Men”"] , ["յի" , "“Yi”"] , ["նու" , "“Nu”"] , ["շա" , "“Sha”"] , ["ո" , "“vo”"] , ["չա" , "“cha”"] , ["պէ" , "“Peh”"] , ["Ջէ" , "“Jeh”"] , ["ռա" , "“Rra”"] , ["սէ" , "“Seh”"] , ["վէւ" , "“Vew”"] ,  ["տիւն" , "“Tiun”"] , ["րէ" , "“Reh”"] , ["ցո" , "“Co”"] , ["ւիւն" , "“Wyun”"] , ["փիւր" , "“P`iur”"]  ,  ["փիւր" , "“P`iur”"] , ["քէ" , "“Qeh”"] ] ;
    let objForLetterInfo = Object.fromEntries(arrOfLetters.map((letter) => [letter , ""] ));
   // console.log(objForLetterInfo)
     document.querySelectorAll('.divWithLetter').forEach(element => element.addEventListener('click' ,function getIndex(){
        let letterInfo = document.createTextNode(element.innerHTML);
        let leftSide = document.querySelector('.leftSide');
        leftSide.innerHTML = "";
        leftSide.appendChild(letterInfo);
        document.querySelector('.popup').style.opacity = '1'; 
        document.querySelector('.popup').style.visibility = '1'; 
        document.querySelector('.popup').style.zIndex = '1'
    }))
    document.querySelector('.xForClose' ).addEventListener('click' , function close(){
        document.querySelector('.popup').style.opacity = '0'; 
        document.querySelector('.popup').style.visibility = '0'; 
        document.querySelector('.popup').style.zIndex = '-1'
    })   
}

      