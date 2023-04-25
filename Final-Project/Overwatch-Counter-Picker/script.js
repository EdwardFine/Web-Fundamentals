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
    "D.va": { "counters": ["Orisa","Reinhardt","Wrecking Ball","Ashe","Bastion","Cassidy","Junkrat","Sojourn","Soldier: 76","Sombra","Tracer","Widowmaker","Baptiste","Lifeweaver","Mercy"],
        "countered_by": ["Doomfist","Junker Queen","Ramattra","Sigma","Zarya","Echo","Genji","Hanzo","Mei","Pharah","Reaper","Symmetra","Torbjörn","Brigitte","Kiriko","Lúcio","Moira","Zenyatta"],
        "counter_each_other": ["D.va","Roadhog","Winston","Ana"], "no_effect": [] },
    "Doomfist": { "counters": ["D.va","Ramattra","Sigma","Winston","Wrecking Ball","Sojourn","Soldier: 76","Torbjörn","Widowmaker","Mercy","Zenyatta"],
        "countered_by": ["Junker Queen","Orisa","Reinhardt","Roadhog","Zarya","Ashe","Bastion","Cassidy","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sombra","Symmetra","Tracer","Ana","Baptiste","Brigitte","Kiriko","Lifeweaver","Lúcio","Moira"],
        "counter_each_other": ["Doomfist","Genji"], "no_effect": [] },
    "Junker Queen":{ "counters": ["D.va", "Doomfist","Orisa","Roadhog","Winston","Wrecking Ball","Genji","Reaper","Symmetra","Brigitte","Mercy","Zenyatta"],
        "countered_by": ["Ramattra","Reinhardt","Sigma","Zarya","Ashe","Bastion","Cassidy","Echo","Hanzo","Junkrat","Mei","Pharah","Sojourn","Soldier:76","Sombra","Torbjörn","Widowmaker","Ana","Kiriko","Lifeweaver","Lúcio","Moira"],
        "counter_each_other": ["Junker Queen","Tracer"], "no_effect": [] },
    "Orisa":{ "counters": ["D.va","Doomfist","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Junkrat","Mei","Symmetra","Brigitte","Lifeweaver","Lúcio","Mercy","Moira"],
        "countered_by": ["Junker Queen","Zarya", "Ashe","Bastion","Echo","Genji","Hanzo","Pharah","Reaper","Sojourn","Soldier: 76","Sombra","Torbjörn", "Tracer","Widowmaker","Ana","Baptiste","Kiriko","Zenyatta"],
        "counter_each_other": ["Orisa","Cassidy"], "no_effect": [] },
    "Ramattra":{ "counters": ["D.va","Junker Queen","Reinhardt","Sigma","Winston","Genji","Sojourn","Soldier:76","Symmetra","Torbjörn","Tracer","Widowmaker","Brigitte","Lifeweaver","Lúcio"],
        "countered_by": ["Doomfist","Orisa","Roadhog","Wrecking Ball","Zarya","Ashe","Bastion","Cassidy","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sombra","Ana","Kiriko","Mercy","Moira","Zenyatta"],
        "counter_each_other": ["Ramattra"], "no_effect": [] },
    "Reinhardt":{ "counters": ["Doomfist","Junker Queen","Roadhog","Cassidy","Genji","Tracer","Widowmaker","Moira","Zenyatta"],
        "countered_by": ["D.va","Orisa","Ramattra","Winston","Wrecking Ball","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sojourn","Soldier: 76","Sombra","Symmetra","Torbjörn","Ana","Baptiste","Brigitte","Kiriko","Lifeweaver","Lúcio","Mercy"],
        "counter_each_other": ["Reinhardt"], "no_effect": [] },
    "Roadhog":{ "counters": ["Doomfist","Ramattra","Winston","Wrecking Ball","Cassidy","Genji","Sombra","Symmetra","Baptiste","Brigitte","Lúcio","Mercy","Moira"],
        "countered_by": ["Junker Queen","Orisa","Reinhardt","Sigma","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sojourn","Soldier: 76","Torbjörn","Widowmaker","Ana","Kiriko","Lifeweaver","Zenyatta"],
        "counter_each_other": ["D.va","Roadhog","Tracer"], "no_effect": [] },
    "Sigma":{ "counters": ["D.va","Junker Queen","Roadhog","Wrecking Ball","Bastion","Cassidy","Echo","Genji","Junkrat","Pharah","Sojourn","Soldier: 76","Torbjörn","Widowmaker","Brigitte","Kiriko","Mercy","Moira"],
        "countered_by": ["Doomfist","Orisa","Ramattra","Winston","Zarya","Ashe","Mei","Reaper","Sombra","Symmetra","Baptiste","Lifeweaver","Lúcio","Zenyatta"],
        "counter_each_other": ["Reinhardt","Sigma","Tracer","Ana"], "no_effect": [] },
    "Winston":{ "counters": ["Reinhardt","Sigma","Winston","Cassidy","Genji","Mei","Sojourn","Soldier:76","Sombra","Symmetra","Tracer","Widowmaker","Ana","Lifeweaver","Lúcio","Mercy","Moira"],
        "countered_by": ["Doomfist","Junker Queen","Orisa","Ramattra","Roadhog","Wrecking Ball","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Pharah","Reaper","Torbjörn","Baptiste","Brigitte","Kiriko"],
        "counter_each_other": ["D.va"], "no_effect": [] },
    "Wrecking Ball":{ "counters": ["Ramattra","Reinhardt","Winston","Wrecking Ball","Zarya","Cassidy","Genji","Hanzo","Reaper","Sojourn","Soldier: 76","Widowmaker","Lúcio","Zenyatta"],
        "countered_by": ["D.va","Doomfist","Junker Queen","Orisa","Roadhog","Sigma","Ashe","Bastion","Echo","Junkrat","Mei","Pharah","Sombra","Symmetra","Torbjörn","Tracer","Ana","Baptiste","Kiriko","Lifeweaver","Mercy","Moira"],
        "counter_each_other": [], "no_effect": [] },
    "Zarya":{ "counters": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya","Echo","Genji","Junkrat","Sombra","Symmetra","Torbjörn","Tracer","Ana","Baptiste","Brigitte","Lúcio","Mercy","Moira","Zenyatta"],
        "countered_by": ["Wrecking Ball","Ashe","Bastion","Cassidy","Hanzo","Mei","Pharah","Reaper","Sojourn","Soldier: 76","Widowmaker","Kiriko","Lifeweaver"],
        "counter_each_other": [], "no_effect": [] },
    "Ashe":{ "counters": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Zarya"],
        "countered_by": ["D.va"],
        "counter_each_other": [], "no_effect": [] },
    "Bastion":{ "counters": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya"],
        "countered_by": ["D.va","Sigma"],
        "counter_each_other": [], "no_effect": [] },
    "Cassidy":{ "counters": ["Doomfist","Junker Queen","Ramattra","Zarya"],
        "countered_by": ["D.va","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball"],
        "counter_each_other": ["Orisa"], "no_effect": [] },
    "Echo":{ "counters": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball"],
        "countered_by": ["Sigma","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Genji":{ "counters": ["D.va","Orisa"],
        "countered_by": ["Junker Queen","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Zarya"],
        "counter_each_other": ["Doomfist"], "no_effect": [] },
    "Hanzo":{ "counters": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya"],
        "countered_by": ["D.va","Wrecking Ball"],
        "counter_each_other": [], "no_effect": [] },
    "Junkrat":{ "counters": ["Doomfist","Junker Queen","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball"],
        "countered_by": ["D.va","Orisa","Sigma","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Mei":{ "counters": ["D.va","Doomfist","Junker Queen","Ramattra","Reinhardt","Roadhog","Sigma","Wrecking Ball","Zarya"],
        "countered_by": ["Orisa","Winston"],
        "counter_each_other": [], "no_effect": [] },
    "Pharah":{ "counters": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya"],
        "countered_by": ["Sigma"],
        "counter_each_other": [], "no_effect": [] },
    "Reaper":{ "counters": ["D.va","Doomfist","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya"],
        "countered_by": ["Junker Queen","Wrecking Ball"],
        "counter_each_other": [], "no_effect": [] },
    "Sojourn":{ "counters": ["Junker Queen","Orisa","Reinhardt","Roadhog","Wrecking Ball","Zarya"],
        "countered_by": ["D.va","Doomfist","Ramattra","Sigma","Winston"],
        "counter_each_other": [], "no_effect": [] },
    "Soldier: 76":{ "counters": ["Junker Queen","Orisa","Reinhardt","Roadhog","Wrecking Ball","Zarya"],
        "countered_by": ["D.va","Doomfist","Ramattra","Sigma","Winston"],
        "counter_each_other": [], "no_effect": [] },
    "Sombra":{ "counters": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Sigma","Wrecking Ball"],
        "countered_by": ["D.va","Roadhog","Winston","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Symmetra":{ "counters": ["D.va","Doomfist","Junker Queen","Reinhardt","Sigma","Wrecking Ball"],
        "countered_by": ["Orisa","Ramattra","Roadhog","Winston","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Torbjörn":{ "counters": ["D.va","Junker Queen","Orisa","Reinhardt","Roadhog","Winston","Wrecking Ball"],
        "countered_by": ["Doomfist","Ramattra","Sigma","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Tracer":{ "counters": ["Doomfist","Orisa","Wrecking Ball"],
        "countered_by": ["D.va","Ramattra","Reinhardt","Winston","Zarya"],
        "counter_each_other": ["Junker Queen","Roadhog","Sigma"], "no_effect": [] },
    "Widowmaker":{ "counters": ["Junker Queen","Orisa","Roadhog","Zarya"],
        "countered_by": ["D.va","Doomfist","Ramattra","Reinhardt","Sigma","Winston","Wrecking Ball"],
        "counter_each_other": [], "no_effect": [] },
    "Ana":{ "counters": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Wrecking Ball"],
        "countered_by": ["Winston","Zarya"],
        "counter_each_other": ["D.va","Sigma"], "no_effect": [] },
    "Baptiste":{ "counters": ["Doomfist","Junker Queen","Orisa","Reinhardt","Sigma","Winston","Wrecking Ball"],
        "countered_by": ["D.va","Ramattra","Roadhog","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Brigitte":{ "counters": ["D.va","Doomfist","Reinhardt","Winston","Wrecking Ball"],
        "countered_by": ["Junker Queen","Orisa","Ramattra","Roadhog","Sigma","Zarya"],
        "counter_each_other": [], "no_effect": [] }, 
    "Kiriko":{ "counters": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya"],
        "countered_by": ["Sigma"],
        "counter_each_other": [], "no_effect": [] }, 
    "Lifeweaver":{ "counters": ["Doomfist","Junker Queen","Reinhardt","Roadhog","Sigma","Wrecking Ball","Zarya"],
        "countered_by": ["D.va","Orisa","Ramattra","Winston"],
        "counter_each_other": [], "no_effect": [] },
    "Lúcio":{ "counters": ["D.va","Doomfist","Junker Queen","Reinhardt","Sigma"],
        "countered_by": ["Orisa","Ramattra","Roadhog","Winston","Wrecking Ball","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Mercy":{ "counters": ["Junker Queen","Ramattra","Reinhardt","Wrecking Ball"],
        "countered_by": ["D.va","Doomfist","Orisa","Roadhog","Sigma","Winston","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Moira":{ "counters": ["D.va","Doomfist","Junker Queen","Ramattra","Wrecking Ball"],
        "countered_by": ["Orisa","Reinhardt","Roadhog","Sigma","Winston","Zarya"],
        "counter_each_other": [], "no_effect": [] },
    "Zenyatta":{ "counters": ["D.va","Orisa","Ramattra","Roadhog","Sigma","Winston"],
        "countered_by": ["Doomfist","Junker Queen","Reinhardt","Wrecking Ball","Zarya"],
        "counter_each_other": [], "no_effect": [] }
}

function scale(element, value, hero) {
    element.style.transform = "scale(" + value + ")";
    element.firstChild.style.transform = "scale(" + value + ")";
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