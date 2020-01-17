let ImgOne = document.getElementById('modalArbitration'),
    ImgTwo = document.getElementById('modalKindCardboard'),
    ImgTree = document.getElementById('modalEdisCar'),
    CancelOne = document.getElementById('cancelOne'),
    CancelTwo = document.getElementById('cancelTwo'),
    CancelTree = document.getElementById('cancelTree')
    ModalOne = document.querySelector(".modalArbitation__item"),
    ModalTwo = document.querySelector(".modalKindCardboard__item"),
    ModalTree = document.querySelector(".modalEdisCar__item"),

    ImgOne.addEventListener("click", function(){
        ModalOne.classList.add("show")
    });
    CancelOne.addEventListener("click", function(){
        ModalOne.classList.remove("show")
    });
    ImgTwo.addEventListener("click", function(){
        ModalTwo.classList.add("show")
    });
    CancelTwo.addEventListener("click", function(){
        ModalTwo.classList.remove("show")
    });
    ImgTree.addEventListener("click", function(){
        ModalTree.classList.add("show")
    });
    CancelTree.addEventListener("click", function(){
        ModalTree.classList.remove("show")
    });
    document.addEventListener("click", (event)=> {
        if (event.target.classList.contains("modalArbitation__item"))
            ModalOne.classList.remove("show")
        });
    document.addEventListener("click", (event)=> {
        if (event.target.classList.contains("modalKindCardboard__item"))
            ModalTwo.classList.remove("show")
        });

    document.addEventListener("click", (event)=> {
    if (event.target.classList.contains("modalEdisCar__item"))
        ModalTree.classList.remove("show")
    });



console.log(`
Made with ❤️ Galexis Team.

░░░░░▄▄▀██▀▀▀▄▄
░░▄██░░▄░░▀░▀░░▀▄
░█▀░░▀░░░░░░░░░░█
█▀░░░░▄▄▄░░░░░░░█
█▀░▄█████▄░░░░░▄▀░▄▄▄░░░░░░░░░░░░▄▄▀▀▀▀▄
▀▄░▀█▀▀▄▄░█▄▄█▀▀██▄▄▄▀░░░░░░░░▄▀▀░░▄▄██▀
░░▀▄██▄▀██▀░░░▄███▀▀░░░░░░░▄▀▀░░▄▄█▀▀▀
░░░░░██▀░░▄▄█▀█▄░█░░░░░▄▄▄▀░░▄█▀
░░░▄▀░░░▄▀▀███████████████▀▀▀
░░░█░░▄██░░░▀████████████
░░░█░████░░░░░██████████▀
░░░█▄█████░░░░░█████▀▀
░░░▀███████▄▄▄██████
░░░░░▀░█████████████
░░░░░░▄█████████████▄
░░░░░░██▀▀▀▀▀▀▀▀▀▀▀██
░░░░░░█░░░░░░░░░░░░░█
                `);
        

                new WOW().init();