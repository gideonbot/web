document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("menu").onclick = () => {
        let elements = document.querySelectorAll(".show");
        if (elements.length > 0) {
            elements.forEach(x => {
                x.classList.add("hide");
                x.classList.remove("show");
            });
            return;
        }
    
        elements = document.querySelectorAll(".hide");
        elements.forEach(x => {
            if (x.id != "menu") {
                x.classList.add("show");
                x.classList.remove("hide");
            }
        });
    };

    let days_since_alert_dismissed = (Date.now() - Number(localStorage.getItem("last_alert_time"))) / 1000 / 60 / 60 / 24;
    if (days_since_alert_dismissed >= 30) {
        let element = document.querySelectorAll(".alert")[0];
        element.classList.remove("hidden");
    }

    fetch("https://status.gideonbot.com/api/v2/status.json").then(response => {
        response.json().then(json => {
            if (json.status.description != "All Systems Operational") {
                AddStatusPageScript();
            }
        }, failed => console.log(failed));
    }, failed => console.log(failed));
}, false);

function RemoveAlert(automatic = false) {
    let element = document.querySelectorAll(".alert")[0];
    element.classList.add("hidden");

    if (!automatic) localStorage.setItem("last_alert_time", Date.now());
}

function AddStatusPageScript() {
    let script = document.createElement("script");
    script.src = "https://zbt1drg946v5.statuspage.io/embed/script.js";

    document.head.appendChild(script);
}