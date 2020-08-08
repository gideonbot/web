window.onload = () => {
    document.getElementById("menu").onclick = () => {
        let elements = document.querySelectorAll(".show");
        if (elements.length > 0) {
            elements.forEach(x => x.className = "hide");
            return;
        }
    
        elements = document.querySelectorAll(".hide");
        elements.forEach(x => {
            if (x.id != "menu") x.className = "show";
        });
    };
}