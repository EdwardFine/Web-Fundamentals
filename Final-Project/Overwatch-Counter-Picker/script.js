var tank_div = document.querySelector("#tank");
var damage_div = document.querySelector("#damage");
var support_div = document.querySelector("#support");

var active_hero_text = document.querySelector(".current-hero");
var active_hero = "";

var tank_active = true;
var damage_active = true;
var support_active = true;

var tank_filter = document.querySelector("#tank-filter");
var damage_filter = document.querySelector("#damage-filter");
var support_filter = document.querySelector("#support-filter");


var counters = document.querySelector("#counter");
var countered_by = document.querySelector("#countered-by");
var counter_each_other = document.querySelector("#counter-each-other");
var no_effect = document.querySelector("#no-effect");

var heroes = {
    "D.va": { "counters": ["Test", "test", "check"], "countered_by": [], "counter_each_other": [], "no_effect": [] },
    "Doomfist": { "counters": [], "countered_by": ["test","test"],"counter_each_other": [], "no_effect": [] },
    "Junker Queen":{ "counters": [], "countered_by": [],"counter_each_other": ["test"], "no_effect": [] },
    "Orisa":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": ["test"] },
    "Ramattra":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Reinhardt":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Roadhog":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Sigma":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Winston":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Wrecking Ball":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Zarya":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Ashe":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Bastion":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Cassidy":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Echo":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Genji":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Hanzo":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Junkrat":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Mei":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Pharah":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Reaper":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Sojourn":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Soldier: 76":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Sombra":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Symmetra":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Torbjörn":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Tracer":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Widowmaker":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Ana":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Baptiste":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Brigitte":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] }, 
    "Kiriko":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] }, 
    "Lifeweaver":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Lúcio":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Mercy":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Moira":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] },
    "Zenyatta":{ "counters": [], "countered_by": [],"counter_each_other": [], "no_effect": [] }
}

function scale(element, value, hero) {
    element.style.transform = "scale(" + value + ")";
}

function counter(element) {
    clearLists();
    if (active_hero == element.alt) {
        active_hero = ""
        active_hero_text.innerText = "No Active Hero";
    } else {
        active_hero = element.alt;
        active_hero_text.innerText = active_hero;
        //Updates HTML with Counters
        for (var i = 0; i < heroes[element.alt]["counters"].length; i++) {
            counters.innerHTML += `<li>${heroes[element.alt]["counters"][i]}</li>`;
        }
        for (var i = 0; i < heroes[element.alt]["countered_by"].length; i++) {
            countered_by.innerHTML += `<li>${heroes[element.alt]["countered_by"][i]}</li>`;
        }
        for (var i = 0; i < heroes[element.alt]["counter_each_other"].length; i++) {
            counter_each_other.innerHTML += `<li>${heroes[element.alt]["counter_each_other"][i]}</li>`;
        }
        for (var i = 0; i < heroes[element.alt]["no_effect"].length; i++) {
            no_effect.innerHTML += `<li>${heroes[element.alt]["no_effect"][i]}</li>`;
        }
    }
}


function clearLists() {
    // Clears all Lists
    while (counters.firstChild) {
        counters.removeChild(counters.firstChild);
    }
    while (countered_by.firstChild) {
        countered_by.removeChild(countered_by.firstChild);
    }
    while (counter_each_other.firstChild) {
        counter_each_other.removeChild(counter_each_other.firstChild);
    }
    while (no_effect.firstChild) {
        no_effect.removeChild(no_effect.firstChild);
    }
}

function filterRoles(role) {
    switch (role) {
        case 0:
            tank_active = true;
            damage_active = true;
            support_active = true;
            break;
        case 1:
            if (tank_active == true) {
                tank_active = false;
            } else {
                tank_active = true;
            }
            break;
        case 2:
            if (damage_active == true) {
                damage_active = false;
            } else {
                damage_active = true;
            }
            break;
        case 3:
            if (support_active == true) {
                support_active = false;
            } else {
                support_active = true;
            }
            break;
    }
    if (tank_active == true) {
        tank_filter.classList.remove("unselected-role");
        tank_div.classList.remove("hide");
    } else {
        tank_filter.classList.add("unselected-role");
        tank_div.classList.add("hide");
    } if (damage_active == true) {
        damage_filter.classList.remove("unselected-role");
        damage_div.classList.remove("hide");
    } else {
        damage_filter.classList.add("unselected-role");
        damage_div.classList.add("hide");
    } if (support_active == true) {
        support_filter.classList.remove("unselected-role");
        support_div.classList.remove("hide");
    } else {
        support_filter.classList.add("unselected-role");
        support_div.classList.add("hide");
    }
}