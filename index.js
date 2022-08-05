
    let arrOfLetters = ["Ա" , "Բ" , "Գ" , "Դ" , "Ե" , "Զ" , "Է" , "Ը" , "Թ" , "Ժ" , "Ի" , "Լ" , "Խ" , "Ծ" , "Կ" , "Հ" , "Ձ" , "Ղ" , "Ճ" , "Մ" , "Յ" , "Ն" , "Շ" , "Ո" , "Չ" , "Պ" , "Ջ" , "Ռ" , "Ս" , "Վ" , "Տ" , "Ր" , "Ց" , "ՈՒ" , "Փ" , "Ք" , "և" , "Օ" , "Ֆ"] ;
       let arrForFirstLine = arrOfLetters.slice(0,9);
       let arrForSecondLine = arrOfLetters.slice(9,18);
       let arrForThirdLine = arrOfLetters.slice(18,27);
       let arrForFourthLine = arrOfLetters.slice(27,36);
       let arrForFifthLine = arrOfLetters.slice(36,39);
    function lineWrapper(array){
        let divForLines = document.createElement('div');
        divForLines.className = ("lines");
        for(let i = 0 ; i < array.length ; i++){
            let divForLetters = document.createElement('div');
            divForLetters.className = "divWithLetters";
            let text = document.createTextNode(array[i]);
            divForLetters.appendChild(text);
            divForLines.appendChild(divForLetters);
        }
        document.querySelector(".letters").appendChild(divForLines);
    }
    lineWrapper(arrForFirstLine);
    lineWrapper(arrForSecondLine);
    lineWrapper(arrForThirdLine);
    lineWrapper(arrForFourthLine);
    lineWrapper(arrForFifthLine);
    // document.querySelectorAll('.newdiv').forEach(element => element.addEventListener('click' ,function getIndex(){
    //     let indexText = document.createTextNode(arrOfLetters.indexOf(element.innerHTML) + "");
    //     document.querySelector('.divforindexes').appendChild(indexText) ;      
    //     document.querySelector('.divforindexes').style.display = "block" ;  
    //     document.querySelector('.divforindexes').innerHTML = document.querySelector('.divforindexes').innerHTML.charAt(document.querySelector('.divforindexes').innerHTML.length - 1);
    //     let myBtn = document.createElement('button');
    //     myBtn.className = ('btn');
    //     let xForClose = document.createTextNode("x");
    //     myBtn.appendChild(xForClose);
    //     document.querySelector('.divforindexes').appendChild(myBtn) ;   
    //     myBtn.addEventListener('click' , function(){
    //         document.querySelector('.divforindexes').style.display = 'none'; 
    //     })   
    // }))

