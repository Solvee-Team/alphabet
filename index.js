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
     document.querySelectorAll('.divWithLetter').forEach(element => element.addEventListener('click' ,function getIndex(){
        let letter = document.createTextNode(element.innerHTML);
        document.querySelector('.leftSide').appendChild(letter) ; 
        document.querySelector('.leftSide').innerHTML = document.querySelector('.leftSide').innerHTML.charAt(document.querySelector('.leftSide').innerHTML.length - 1);     
        document.querySelector('.popup').style.opacity = '1'; 
        document.querySelector('.popup').style.visibility = '1'; 
        document.querySelector('.popup').style.zIndex = '1'
    }))
    document.querySelector('.xForClose').addEventListener('click' , function(){
        document.querySelector('.popup').style.opacity = '0'; 
        document.querySelector('.popup').style.visibility = '0'; 
        document.querySelector('.popup').style.zIndex = '-1'
    })   
}

      