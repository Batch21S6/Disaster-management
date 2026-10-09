const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

const alerts = [
    "Stay calm and follow instructions from emergency authorities.",
    "Keep drinking water, food, medicines and a flashlight ready.",
    "During an earthquake, Drop, Cover and Hold On.",
    "During floods, move to higher ground and avoid moving water.",
    "During severe storms, stay indoors and away from windows."
];

let alertNumber = 0;

document.getElementById("nextAlert").addEventListener("click", function () {
    alertNumber++;

    if (alertNumber >= alerts.length) {
        alertNumber = 0;
    }

    document.getElementById("alertText").textContent = alerts[alertNumber];
});

const searchInput = document.getElementById("searchInput");
const disasterCards = document.querySelectorAll(".disaster-card");

searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();

    disasterCards.forEach(function (card) {
        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const checks = document.querySelectorAll(".check");
const percentage = document.getElementById("percentage");
const checkBar = document.getElementById("checkBar");

function updateChecklist() {
    let completed = 0;

    checks.forEach(function (check) {
        if (check.checked) {
            completed++;
        }
    });

    const percent = Math.round((completed / checks.length) * 100);

    percentage.textContent = percent + "%";
    checkBar.style.width = percent + "%";
}

checks.forEach(function (check) {
    check.addEventListener("change", updateChecklist);
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {

        tabs.forEach(function (item) {
            item.classList.remove("active");
        });

        tabContents.forEach(function (content) {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        const target = tab.getAttribute("data-target");

        document.getElementById(target).classList.add("active");
    });
});

const disasterData = {
    Earthquake: {
        icon: "🌎",
        description: "Earthquakes can happen suddenly. Being prepared and knowing how to respond can reduce risks.",
        tips: [
            "Drop, Cover and Hold On.",
            "Stay away from windows.",
            "Move carefully to a safe area after shaking stops."
        ]
    },

    Flood: {
        icon: "🌊",
        description: "Flooding can develop quickly. Avoid floodwater and follow evacuation instructions.",
        tips: [
            "Move to higher ground.",
            "Never walk or drive through moving floodwater.",
            "Follow official evacuation instructions."
        ]
    },

    Cyclone: {
        icon: "🌀",
        description: "Cyclones can bring strong winds and heavy rainfall.",
        tips: [
            "Stay indoors and away from windows.",
            "Secure loose objects.",
            "Follow official warnings."
        ]
    },

    Fire: {
        icon: "🔥",
        description: "Fire can spread rapidly. A clear evacuation plan is important.",
        tips: [
            "Raise the alarm.",
            "Use stairs instead of elevators.",
            "Never return to a burning building."
        ]
    },

    Landslide: {
        icon: "⛰️",
        description: "Landslides can happen on unstable slopes, especially after heavy rainfall.",
        tips: [
            "Move away from steep slopes.",
            "Watch for unusual ground movement.",
            "Follow evacuation warnings."
        ]
    },

    Tsunami: {
        icon: "🌊",
        description: "A tsunami can produce powerful waves after underwater disturbances.",
        tips: [
            "Move to higher ground.",
            "Stay away from coastal areas.",
            "Wait for official confirmation before returning."
        ]
    },

    Drought: {
        icon: "☀️",
        description: "Drought is a prolonged period of unusually low rainfall.",
        tips: [
            "Conserve water.",
            "Avoid unnecessary water usage.",
            "Follow local water conservation instructions."
        ]
    },

    Thunderstorm: {
        icon: "⛈️",
        description: "Thunderstorms can produce lightning, heavy rainfall and strong winds.",
        tips: [
            "Stay indoors during lightning.",
            "Avoid open areas.",
            "Stay away from isolated trees."
        ]
    }
};

const modal = document.getElementById("modal");

function showInfo(type) {

    const data = disasterData[type];

    document.getElementById("modalIcon").textContent = data.icon;
    document.getElementById("modalTitle").textContent = type;
    document.getElementById("modalDescription").textContent = data.description;

    document.getElementById("modalTips").innerHTML = "";

    data.tips.forEach(function (tip) {

        const element = document.createElement("div");

        element.className = "tip";
        element.textContent = "✓ " + tip;

        document.getElementById("modalTips").appendChild(element);
    });

    modal.classList.add("show");
}

document.getElementById("closeModal").addEventListener("click", function () {
    modal.classList.remove("show");
});

document.getElementById("modalButton").addEventListener("click", function () {
    modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

const sosModal = document.getElementById("sosModal");

document.getElementById("sosBtn").addEventListener("click", function () {
    sosModal.classList.add("show");
});

document.getElementById("cancelSos").addEventListener("click", function () {
    sosModal.classList.remove("show");
});

sosModal.addEventListener("click", function (event) {
    if (event.target === sosModal) {
        sosModal.classList.remove("show");
    }
});

function resourceAlert(resource) {
    const toast = document.getElementById("toast");

    toast.textContent = resource + " selected.";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}