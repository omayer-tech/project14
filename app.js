const btn_yes = document.getElementById("yes");
const btn_neg = document.getElementById("neg");
const btn_cont = document.getElementById("button_container");
const gifCng = document.getElementById("gif");
btn_yes.addEventListener('click', function () {
    if (gifCng.src.endsWith("tkthao219-bubududu.gif")) {
        gifCng.src = "hi-waving.gif";
    }
    else {
        gifCng.src = "tkthao219-bubududu.gif";
    }
});
btn_neg.addEventListener('click', function () {
    btn_neg.textContent = " Are you sure???";
    btn_yes.style.width = "150px";
    btn_yes.style.height = "70px";
    btn_yes.style.fontSize = "25px";
    btn_neg.addEventListener('click', function () {
        btn_neg.textContent = "Seriously?, Think again bb!!";
        btn_yes.style.width = "250px";
        btn_yes.style.height = "170px";
        btn_yes.style.fontSize = "50px";
        btn_neg.addEventListener('click', function () {
            btn_neg.textContent = "So u r determined, click now to get rid of me.";
            btn_yes.style.width = "450px";
            btn_yes.style.height = "270px";
            btn_yes.style.fontSize = "70px";
            btn_neg.addEventListener('click', function () {
                btn_cont.removeChild(btn_neg);
                btn_yes.addEventListener('click', function () {
                    btn_cont.removeChild(btn_neg);
                });
            });
        });
    });
});

