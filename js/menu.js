document.addEventListener('DOMContentLoaded', () => {
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

    let days_since_alert_dismissed = (Date.now() - Number(localStorage.getItem("last_alert_time"))) / 1000 / 60 / 60 / 24;
    if (days_since_alert_dismissed >= 30) {
        let element = document.querySelectorAll(".alert")[0];
        element.classList.remove("hidden");
    }
}, false);

function RemoveAlert(automatic = false) {
    let element = document.querySelectorAll(".alert")[0];
    element.classList.add("hidden");

    if (!automatic) localStorage.setItem("last_alert_time", Date.now());
}