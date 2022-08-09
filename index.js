   lineWrapper()
    function lineWrapper(){
        let arrOfLetters = ["Ա" , "Բ" , "Գ" , "Դ" , "Ե" , "Զ" , "Է" , "Ը" , "Թ" , "Ժ" , "Ի" , "Լ" , "Խ" , "Ծ" , "Կ" , "Հ" , "Ձ" , "Ղ" , "Ճ" , "Մ" , "Յ" , "Ն" , "Շ" , "Ո" , "Չ" , "Պ" , "Ջ" , "Ռ" , "Ս" , "Վ" , "Տ" , "Ր" , "Ց" , "ՈՒ" , "Փ" , "Ք" , "ԵՎ" , "Օ" , "Ֆ"] ;
        for(let i = 0 ; i < arrOfLetters.length; i++){
            let divForLetters = document.createElement('div');
            divForLetters.className = ('divWithLetter');
            let text = document.createTextNode(arrOfLetters[i]);
            divForLetters.appendChild(text);
            document.querySelector(".divForAllLetters").appendChild(divForLetters);
        }
    }


//   document.querySelectorAll('.newdiv').forEach(element => element.addEventListener('click' ,function getIndex(){
//         let indexText = document.createTextNode(arrOfLetters.indexOf(element.innerHTML) + "");
//         document.querySelector('.divforindexes').appendChild(indexText) ;      
//         document.querySelector('.divforindexes').style.display = "block" ;  
//         document.querySelector('.divforindexes').innerHTML = document.querySelector('.divforindexes').innerHTML.charAt(document.querySelector('.divforindexes').innerHTML.length - 1);
//         let myBtn = document.createElement('button');
//         myBtn.className = ('btn');
//         let xForClose = document.createTextNode("x");
//         myBtn.appendChild(xForClose);
//         document.querySelector('.divforindexes').appendChild(myBtn) ;   
//         myBtn.addEventListener('click' , function(){
//             document.querySelector('.divforindexes').style.display = 'none'; 
//         })   
//     }))