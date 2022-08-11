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
    let arrOfWords = [ ["արև" , "այբ" , "“Ayb”"] , ["բալ" , "բեն" , "“Ben”"] , ["գնդակ" , "գիմ" , "“gim”"] , ["դդում" , "դա" , "“da”"] , ["ելակ" ,"եչ" , "“yech”"] , ["զատիկ" , "զա" , "“Žhe”"] ,  ["էշ" ,"է" , "“Ini”"] , ["ընկույզ" , "ըթ" , "“Ut`”"] , ["թութակ" , "թո" , "“T`o”"] , ["ժամացույց" , "ժէ" , "“Žhe”"] , ["իլիկ" ,"ինի" , "“Ini”"] , ["լուսին" ,"լիւն" , "“Lyun”"] , ["խաղող" , "խէ" , "“Xeh”"] , [ "ծիածան"  , "ծա" , "“Tza”"] , ["կացին" ,"կեն" , "“Ken”"] , ["հաղարջ" ,"հո" , "“Ho”"] , ["ձուկ" , "ձա" , "“dza”"] , ["ղեկ" , "ղատ" , "“glat”"] , ["ճնճղուկ" , "ճէ" , "“Cheh”"] , ["մեն" , "“Men”"] , ["յասաման" , "յի" , "“Yi”"] , ["նապաստակ" , "նու" , "“Nu”"] , ["շուն" , "շա" , "“Sha”"] , ["ոզնի" , "ո" , "“vo”"] , ["չամիչ" , "չա" , "“cha”"] , ["պայուսակ" , "պէ" , "“Peh”"] , ["ջայլամ" , "Ջէ" , "“Jeh”"] , ["ռազմիկ" , "ռա" , "“Rra”"] , ["սկյուռ" , "սէ" , "“Seh”"] , ["վարդ" , "վէւ" , "“Vew”"] ,  ["տանձ" , "տիւն" , "“Tiun”"] , ["րոպե" ,"րէ" , "“Reh”"] , ["ցուլ" , "ցո" , "“Co”"] , ["ուղտ" ,"ւիւն" , "“Wyun”"] , ["փիղ" ,"փիւր" , "“P`iur”"]  , ["քաղաք" , "քէ" , "“Qeh”"] , ["Երևան"] , [ "օձ"] , ["ֆլամինգո"] ] ;
     let objForLetterInfo = Object.fromEntries(arrOfLetters.map((letter , index) => [letter , arrOfWords[index]] ));
     console.log(objForLetterInfo)
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

      