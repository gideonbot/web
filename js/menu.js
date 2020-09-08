document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementsByTagName('body')[0];

    if (body.className == "" && !window.nomax) body.className = "maxheight";

    document.getElementById("menu").onclick = () => {
        let elements = document.querySelectorAll(".show");
        if (elements.length > 0) {
            if (body.className == "maxheight" && !window.nomax) body.className = "";
            elements.forEach(x => x.className = "hide");
            return;
        }

        if (body.className == "" && !window.nomax) body.className = "maxheight";
    
        elements = document.querySelectorAll(".hide");
        elements.forEach(x => {
            if (x.id != "menu") x.className = "show";
        });
    };
}, false);