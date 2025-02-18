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

if (document.body.id === "body16") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".dietPepsiImagePosition");

        const randomX = Math.random() * (window.innerWidth - image.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - image.offsetHeight);

        image.style.left = `${randomX + window.scrollY}px`;
        image.style.top = `${randomY + window.scrollY}px`;
    });
}

if (document.body.id === "body17") {
    window.addEventListener("scroll", () => {
        let image = document.querySelector(".dietPepsiImageReveal");
        const maxHeight = 520;

        if (window.scrollY <= maxHeight) {

            image.style.height = `${window.scrollY}px`;
            image.style.width = `${window.scrollY}px`;
        } else {
            image.style.height = `${maxHeight}px`;
            image.style.width = `${maxHeight}px`;
        }
    });
}

if (document.body.id === "body18") {
    window.addEventListener("scroll", () => {
        const progressBar = document.querySelector(".progressBar");
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progressHeight}%`;
    });
} // inspiration from: https://www.30secondsofcode.org/css/s/scroll-progress-bar/

if (document.body.id === "body19") {
    window.addEventListener("scroll", () => {
        text = document.querySelector(".textSize");
        text.style.fontSize = `${window.scrollY}px`;

    });
}

if (document.body.id === "body20") {
    window.addEventListener("scroll", () => {
        const buttons = document.querySelectorAll(".button");

        buttons.forEach((button, index) => {
            button.style.transform = `translateX(${window.scrollY}px)`;
            if (index % 2 === 0) {
                button.style.transform = `scale(${1 + window.scrollY / 1000})`;
                button.style.backgroundColor = "#A4292A";
            }
        });
    });
}

if (document.body.id === "body21") {
    window.addEventListener("scroll", () => {
        const buttons = document.querySelectorAll(".button");

        buttons.forEach((button, index) => {
            if (index % 2 === 1) {
                button.style.transform = `rotateY(${window.scrollY}deg)`;
            }
            else {
                button.style.transform = `rotateX(${window.scrollY}deg)`;
            }
        });
    });
}

if (document.body.id === "body22") {
    window.addEventListener("scroll", () => {
        const D = document.querySelector("#D");
        const I = document.querySelector("#I");
        const E = document.querySelector("#E");
        const T = document.querySelector("#T");
        const P = document.querySelector("#P");
        const E2 = document.querySelector("#E2");
        const S = document.querySelector("#S");
        const P2 = document.querySelector("#P2");
        const I2 = document.querySelector("#I2");

        if (window.scrollY > 10) {
            D.style.opacity = "1";
        } if (window.scrollY > 50) {
            I.style.opacity = "1";
        } if (window.scrollY > 80) {
            E.style.opacity = "1";
        } if (window.scrollY > 110) {
            T.style.opacity = "1";
        } if (window.scrollY > 140) {
            P.style.opacity = "1";
        } if (window.scrollY > 170) {
            E2.style.opacity = "1";
        } if (window.scrollY > 200) {
            S.style.opacity = "1";
        } if (window.scrollY > 230) {
            P2.style.opacity = "1";
        } if (window.scrollY > 260) {
            I2.style.opacity = "1";
        }

    });
}

if (document.body.id === "body23") {
    window.addEventListener("scroll", () => {
        const buttons = document.querySelectorAll(".button");

        buttons.forEach((button, index) => {
            if (index === 1 || index === 7 || index === 13 || index === 19 || index === 25 || index === 31 || index === 37 || index === 43 || index === 49) {
                button.style.borderRadius = "50%";
            }
        });
    });
}

if (document.body.id === "body24") {
    window.addEventListener("scroll", () => {
        const container = document.querySelector(".container");
        if(window.scrollY > 10) {
            container.style.gap = "10px";
        }
        if(window.scrollY > 50) {
            container.style.gap = "5px";
        }
        if(window.scrollY > 100) {
            container.style.gap = "2px";
        }
        if(window.scrollY > 150) {
            container.style.gap = "1px";
        }
        if(window.scrollY > 200) {
            container.style.gap = "0px";
        }
    });
}

if (document.body.id === "body25") {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 101) {
            document.body.style.cursor = "pointer";
        }
        if(window.scrollY > 250) {
            document.body.style.cursor = "crosshair";
        }
        if(window.scrollY > 350) {
            document.body.style.cursor = "wait";
        }
        if(window.scrollY > 1450) {
            document.body.style.cursor = "help";
        }
        if(window.scrollY > 550) {
            document.body.style.cursor = "progress";
        }
        if(window.scrollY > 650) {
            document.body.style.cursor = "not-allowed";
        }
        if(window.scrollY > 750) {
            document.body.style.cursor = "grab";
        }
        if(window.scrollY > 850) {
            document.body.style.cursor = "zoom-in";
        }
    });
}