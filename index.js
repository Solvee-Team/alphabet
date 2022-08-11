window.onload = () => {
    let allLetersParent = document.getElementById("allLettersBox");
    console.log(allLetersParent)
    let alphabetArray = ["Ա","Բ","Գ","Դ","Ե","Զ","Է","Ը","Թ",
                        "Ժ","Ի","Լ","Խ","Ծ","Կ","Հ","Ձ","Ղ","Ճ",
                        "Մ","Յ","Ն","Շ","Ո","Չ","Պ","Ջ","Ռ","Ս",
                        "Վ","Տ","Ր","Ց","Ու","Փ","Ք","Եվ","Օ","Ֆ",
                        
    ];
    alphabetArray.map( (val) => {
        let letterDivs = document.createElement("div");
        letterDivs.className = "allLetter";
        letterDivs.innerHTML = val;
        letterDivs.onclick = function(){PopUp("show")}
        allLetersParent.appendChild(letterDivs)
    })
}

