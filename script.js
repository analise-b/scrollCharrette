if (document.body.id === "body1") {
    window.addEventListener("scroll", () => {
        document.body.style.backgroundColor = "#D4A08B";
    });
}

if (document.body.id === "body2") {
    window.addEventListener("scroll", () => {
        const text = document.querySelector(".fadeText");
        const textPosition = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        const text2 = document.querySelector(".fadeText2");
        const textPosition2 = text2.getBoundingClientRect().top;

        if (textPosition < screenPosition) {
            text.classList.add("visible");
        }

        if (textPosition2 < screenPosition) {
            text2.classList.add("visible");
        }
    });
}

if (document.body.id === "body3") {
    window.addEventListener("scroll", () => {
        const textColour = document.querySelector("#textColour");
        textColour.style.color = "orchid";
    });
}

if (document.body.id === "body4") {
    window.addEventListener("scroll", () => {
        const textColourGradualElements = document.querySelectorAll(".textColourGradual");
        const scrollPosition = window.scrollY;

        textColourGradualElements.forEach((textColourGradual) => {
            if (scrollPosition > 900) {
                textColourGradual.style.color = "orchid";
            } else if (scrollPosition > 700) {
                textColourGradual.style.color = "red";
            } else if (scrollPosition > 500) {
                textColourGradual.style.color = "blue";
            } else if (scrollPosition > 100) {
                textColourGradual.style.color = "green";
            }
        });
    });
}

if (document.body.id === "body5") {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const newWidth = 100 - scrollPosition / 10 + "%";
        document.querySelector("#spotify").style.width = newWidth;
        document.querySelector("#spotify").style.transform = `translateY(${scrollPosition}px)`;
    });
}

if (document.body.id === "body6") {
    window.addEventListener("scroll", () => {
        window.open("https://www.youtube.com/watch?v=Hki6RqI-eMA", "_blank");
    });
}

if (document.body.id === "body7") {
    window.addEventListener("scroll", () => {
        const textShadowElements = document.querySelectorAll(".textShadow");

        textShadowElements.forEach((textShadow) => {
            textShadow.classList.add("visible");
        });
    });
}

if (document.body.id === "body8") {
    window.addEventListener("scroll", () => {
        const textShadowGradualElements = document.querySelectorAll(".textShadowGradual");
        const scrollPosition = window.scrollY;
        const newBlur = scrollPosition * 0.01;

        textShadowGradualElements.forEach((textShadowGradual) => {
            textShadowGradual.style.filter = `blur(${newBlur}px)`;

        });
    });
}

if (document.body.id === "body9") {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const newColour1 = scrollPosition * 0.1;
        const newColour2 = scrollPosition * 0.5;
        const newColour3 = scrollPosition * 0.9;
        document.body.style.backgroundColor = `rgb(${newColour1}, ${newColour2}, ${newColour3})`;
    });
}

if (document.body.id === "body10") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".dietPepsiImage");
        image.style.transform = `rotate(${window.scrollY}deg)`;
    });
}

if (document.body.id === "body11") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".dietPepsiImage");
        image.style.transform = `rotateY(${window.scrollY}deg)`;
    });
}

if (document.body.id === "body12") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".mentosImage");
        const maxScroll = 750;

        if (window.scrollY <= maxScroll) {
            image.style.transform = `translateY(${window.scrollY}px)`;
        } else {
            image.style.transform = `translateY(${maxScroll}px)`;
        }
    });
}

if (document.body.id === "body13") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".dietPepsiImage");
        const vibrationEffect = (window.scrollY % 20);
        image.style.transform = `translateX(${vibrationEffect}px)`;

    });
}

if (document.body.id === "body14") {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            let image = document.querySelector(".dietPepsiImage2");
            image.style.backgroundImage = "url(images/boom.jpg)";
        }
    });
}

if (document.body.id === "body15") {
    window.addEventListener("scroll", () => {
        let lyrics = document.querySelector(".lyrics");
        lyrics.style.transform = `translateX(-${window.scrollY}px)`;

        let lyrics2 = document.querySelector(".lyrics2");
        lyrics2.style.transform = `translateX(${window.scrollY}px)`;

        let lyrics3 = document.querySelector(".lyrics3");
        lyrics3.style.transform = `translateX(${-window.scrollY}px)`;

        let lyrics4 = document.querySelector(".lyrics4");
        lyrics4.style.transform = `translateX(${window.scrollY}px)`;
    });
}