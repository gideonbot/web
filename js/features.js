window.onload = () => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width >= 768) {
        window.onresize = () => {
            let max = -1;
    
            document.querySelectorAll(".card").forEach(x => {
                if (x.clientHeight > max) max = x.clientHeight;
            });
    
            max += "px";
            
            for (let item of document.querySelectorAll(".card")) {
                item.style.height = max;
            }
        };
        window.onresize();
    }
}