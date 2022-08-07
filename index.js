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
    // document.querySelectorAll('.divWithLetter').forEach(element => element.addEventListener('click' ,function getIndex(){
    //     let indexText = document.createTextNode(arrOfLetters.indexOf(element.innerHTML) + "");
    //     document.querySelector('.divForLetterInfo').appendChild(indexText) ;      
    //     document.querySelector('.divForLetterInfo').style.display = "block" ;  
    //     document.querySelector('.divForLetterInfo').innerHTML = document.querySelector('.divForLetterInfo').innerHTML.charAt(document.querySelector('.divForLetterInfo').innerHTML.length - 1);
    //     let myBtn = document.createElement('button');
    //     myBtn.className = ('btn');
    //     let xForClose = document.createTextNode("x");
    //     myBtn.appendChild(xForClose);
    //     document.querySelector('.divForLetterInfo').appendChild(myBtn) ;   
    //     myBtn.addEventListener('click' , function(){
    //         document.querySelector('.divForLetterInfo').style.display = 'none'; 
    //     })   
    // }))

