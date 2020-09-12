document.addEventListener('DOMContentLoaded', () => {
    setInterval(UpdateImages, 5000);
    document.getElementById("gideon").onclick = () => UpdateImages();
    
    fetch("/api/discord/stats").then(response => {
        response.json().then(json => {
            let el = document.getElementById("stats");
            let msg = "Processed " + json.commands.toLocaleString() + " commands in " + json.guilds.toLocaleString() + " guilds with over " + json.users.toLocaleString() + " users";
            el.innerText = msg;
        }, failed => console.log(failed));
    }, failed => console.log(failed));
}, false);

function UpdateImages() {
    if (window.screen.width < 768) {
        let elements = document.getElementsByTagName("img");

        let left = [elements[0], elements[1], elements[2]];
        let right = [elements[4], elements[5], elements[6]];

        let f1 = left.find(x => !x.classList.contains("outer"));
        f1.classList.add("outer");

        left.splice(left.indexOf(f1), 1);
        let random = left[Math.floor(Math.random() * left.length)];
        random.classList.remove("outer");

        let f2 = right.find(x => !x.classList.contains("outer"));
        f2.classList.add("outer");

        right.splice(right.indexOf(f2), 1);
        let random2 = right[Math.floor(Math.random() * right.length)];
        random2.classList.remove("outer");
    }
}