   lineWrapper()
    function lineWrapper(){
        let arrOfLetters = ["Ա" , "Բ" , "Գ" , "Դ" , "Ե" , "Զ" , "Է" , "Ը" , "Թ" , "Ժ" , "Ի" , "Լ" , "Խ" , "Ծ" , "Կ" , "Հ" , "Ձ" , "Ղ" , "Ճ" , "Մ" , "Յ" , "Ն" , "Շ" , "Ո" , "Չ" , "Պ" , "Ջ" , "Ռ" , "Ս" , "Վ" , "Տ" , "Ր" , "Ց" , "ՈՒ" , "Փ" , "Ք" , "ԵՎ" , "Օ" , "Ֆ" , "" , "" , "" , "" , "" , "" , "" , "" , "" ] ;
        for(let i = 0 ; i < arrOfLetters.length; i++){
            let divForLetters = document.createElement('div');
            if(arrOfLetters[i] !== ""){
            divForLetters.className = ('divWithLetter')
            } else {
                divForLetters.className = ('emptyDiv')
            }
            let text = document.createTextNode(arrOfLetters[i]);
            divForLetters.appendChild(text);
            document.querySelector(".divForAllLetters").appendChild(divForLetters);
        }

    }


