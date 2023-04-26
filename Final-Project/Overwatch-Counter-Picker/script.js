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


var strong_against = document.querySelector("#strong-against");
var weak_against = document.querySelector("#weak-against");
var counter_each_other = document.querySelector("#counter-each-other");
var no_effect = document.querySelector("#no-effect");

var heroes = {
    "D.va": { "strong_against": ["D.va","Orisa","Reinhardt","Roadhog","Winston","Wrecking Ball","Ashe","Bastion","Cassidy","Junkrat","Sojourn","Soldier: 76","Sombra","Tracer","Widowmaker","Ana","Baptiste","Lifeweaver","Mercy"],
        "weak_against": ["Doomfist","Junker Queen","Ramattra","Roadhog","Sigma","Zarya","Echo","Genji","Hanzo","Mei","Pharah","Reaper","Symmetra","Torbjörn","Ana","Brigitte","Kiriko","Lúcio","Moira","Zenyatta"]},
    "Doomfist": { "strong_against": ["D.va","Doomfist","Ramattra","Sigma","Winston","Wrecking Ball","Sojourn","Soldier: 76","Torbjörn","Widowmaker","Mercy","Zenyatta"],
        "weak_against": ["Junker Queen","Orisa","Reinhardt","Roadhog","Zarya","Ashe","Bastion","Cassidy","Echo","Genji","Hanzo","Junkrat","Mei","Pharah","Reaper","Sombra","Symmetra","Tracer","Ana","Baptiste","Brigitte","Kiriko","Lifeweaver","Lúcio","Moira"]},
    "Junker Queen":{ "strong_against": ["D.va", "Doomfist","Junker Queen","Orisa","Roadhog","Winston","Wrecking Ball","Genji","Reaper","Symmetra","Tracer","Brigitte","Mercy","Zenyatta"],
        "weak_against": ["Ramattra","Reinhardt","Sigma","Zarya","Ashe","Bastion","Cassidy","Echo","Hanzo","Junkrat","Mei","Pharah","Sojourn","Soldier:76","Sombra","Torbjörn","Widowmaker","Ana","Kiriko","Lifeweaver","Lúcio","Moira"]},
    "Orisa":{ "strong_against": ["D.va","Doomfist","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Junkrat","Mei","Symmetra","Brigitte","Lifeweaver","Lúcio","Mercy","Moira"],
        "weak_against": ["Junker Queen","Zarya", "Ashe","Bastion","Cassidy","Echo","Genji","Hanzo","Pharah","Reaper","Sojourn","Soldier: 76","Sombra","Torbjörn", "Tracer","Widowmaker","Ana","Baptiste","Kiriko","Zenyatta"]},
    "Ramattra":{ "strong_against": ["D.va","Junker Queen","Ramattra","Reinhardt","Sigma","Winston","Genji","Sojourn","Soldier:76","Symmetra","Torbjörn","Tracer","Widowmaker","Brigitte","Lifeweaver","Lúcio"],
        "weak_against": ["Doomfist","Orisa","Roadhog","Wrecking Ball","Zarya","Ashe","Bastion","Cassidy","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sombra","Ana","Kiriko","Mercy","Moira","Zenyatta"]},
    "Reinhardt":{ "strong_against": ["Doomfist","Junker Queen","Reinhardt","Roadhog","Cassidy","Genji","Tracer","Widowmaker","Moira","Zenyatta"],
        "weak_against": ["D.va","Orisa","Ramattra","Winston","Wrecking Ball","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sojourn","Soldier: 76","Sombra","Symmetra","Torbjörn","Ana","Baptiste","Brigitte","Kiriko","Lifeweaver","Lúcio","Mercy"]},
    "Roadhog":{ "strong_against": ["D.va","Doomfist","Ramattra","Roadhog","Winston","Wrecking Ball","Cassidy","Genji","Sombra","Symmetra","Tracer","Baptiste","Brigitte","Lúcio","Mercy","Moira"],
        "weak_against": ["D.va","Junker Queen","Orisa","Reinhardt","Sigma","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Mei","Pharah","Reaper","Sojourn","Soldier: 76","Tracer","Torbjörn","Widowmaker","Ana","Kiriko","Lifeweaver","Zenyatta"]},
    "Sigma":{ "strong_against": ["D.va","Junker Queen","Roadhog","Sigma","Wrecking Ball","Bastion","Cassidy","Echo","Genji","Junkrat","Pharah","Sojourn","Soldier: 76","Torbjörn","Widowmaker","Brigitte","Kiriko","Mercy","Moira"],
        "weak_against": ["Ana","Doomfist","Orisa","Ramattra","Winston","Zarya","Ashe","Mei","Reaper","Sombra","Symmetra","Tracer","Baptiste","Lifeweaver","Lúcio","Zenyatta"]},
    "Winston":{ "strong_against": ["Reinhardt","Sigma","Winston","Cassidy","Genji","Mei","Sojourn","Soldier:76","Sombra","Symmetra","Tracer","Widowmaker","Ana","Lifeweaver","Lúcio","Mercy","Moira"],
        "weak_against": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Roadhog","Wrecking Ball","Zarya","Ashe","Bastion","Echo","Hanzo","Junkrat","Pharah","Reaper","Torbjörn","Baptiste","Brigitte","Kiriko"]},
    "Wrecking Ball":{ "strong_against": ["Ramattra","Reinhardt","Winston","Wrecking Ball","Zarya","Cassidy","Genji","Hanzo","Reaper","Sojourn","Soldier: 76","Widowmaker","Lúcio","Zenyatta"],
        "weak_against": ["D.va","Doomfist","Junker Queen","Orisa","Roadhog","Sigma","Ashe","Bastion","Echo","Junkrat","Mei","Pharah","Sombra","Symmetra","Torbjörn","Tracer","Ana","Baptiste","Kiriko","Lifeweaver","Mercy","Moira"]},
    "Zarya":{ "strong_against": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya","Echo","Genji","Junkrat","Mei","Sombra","Symmetra","Torbjörn","Tracer","Ana","Baptiste","Brigitte","Lúcio","Mercy","Moira","Zenyatta"],
        "weak_against": ["Wrecking Ball","Ashe","Bastion","Cassidy","Hanzo","Pharah","Reaper","Sojourn","Soldier: 76","Widowmaker","Kiriko","Lifeweaver"]},
    "Ashe":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Zarya","Ashe","Bastion","Cassidy","Echo","Junkrat","Mei","Pharah","Soldier: 76","Symmetra","Torbjörn","Ana","Baptiste","Brigitte","Kiriko","Lifeweaver"],
        "weak_against": ["D.va","Genji","Hanzo","Reaper","Sojourn","Sombra","Tracer","Widowmaker","Lúcio","Mercy","Moira","Zenyatta"]},
    "Bastion":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya","Bastion","Cassidy","Echo","Mei","Pharah","Torbjörn","Baptiste","Brigitte","Lifeweaver"],
        "weak_against": ["D.va","Sigma","Ashe","Genji","Hanzo","Junkrat","Reaper","Sojourn","Soldier: 76","Sombra","Symmetra","Tracer","Widowmaker","Ana","Lúcio","Mercy","Moira","Zenyatta"]},
    "Cassidy":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Zarya","Cassidy","Echo","Genji","Pharah","Soldier: 76","Sombra","Symmetra","Torbjörn","Tracer","Ana","Lifeweaver","Lúcio","Mercy"],
        "weak_against": ["D.va","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Ashe","Bastion","Hanzo","Junkrat","Mei","Reaper","Sojourn","Widowmaker","Baptiste","Brigitte","Kiriko","Moira","Zenyatta"]},
    "Echo":{ "strong_against": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Echo","Genji","Hanzo","Junkrat","Mei","Pharah","Reaper","Symmetra","Tracer","Widowmaker","Brigitte","Kiriko","Lifeweaver","Lúcio","Mercy","Zenyatta"],
        "weak_against": ["Sigma","Zarya","Ashe","Bastion","Cassidy","Sojourn","Soldier: 76","Sombra","Torbjörn","Ana","Baptiste","Moira"]},
    "Genji":{ "strong_against": ["D.va","Orisa","Doomfist","Ashe","Bastion"],
        "weak_against": ["Junker Queen","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Wrecking Ball","Zarya","Cassidy","Echo"]},
    "Hanzo":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya","Ashe","Bastion","Cassidy"],
        "weak_against": ["D.va","Wrecking Ball","Echo"]},
    "Junkrat":{ "strong_against": ["Doomfist","Junker Queen","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Bastion","Cassidy"],
        "weak_against": ["D.va","Orisa","Sigma","Zarya","Ashe","Echo"]},
    "Mei":{ "strong_against": ["D.va","Doomfist","Junker Queen","Ramattra","Reinhardt","Roadhog","Sigma","Wrecking Ball","Cassidy"],
        "weak_against": ["Orisa","Winston","Zarya","Ashe","Bastion","Echo"]},
    "Pharah":{ "strong_against": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya"],
        "weak_against": ["Sigma","Ashe","Bastion","Cassidy","Echo"]},
    "Reaper":{ "strong_against": ["D.va","Doomfist","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Winston","Zarya","Bastion","Cassidy"],
        "weak_against": ["Junker Queen","Wrecking Ball","Ashe","Echo"]},
    "Sojourn":{ "strong_against": ["Junker Queen","Orisa","Reinhardt","Roadhog","Wrecking Ball","Zarya","Ashe","Bastion","Cassidy","Echo"],
        "weak_against": ["D.va","Doomfist","Ramattra","Sigma","Winston"]},
    "Soldier: 76":{ "strong_against": ["Junker Queen","Orisa","Reinhardt","Roadhog","Wrecking Ball","Zarya","Bastion","Echo"],
        "weak_against": ["D.va","Doomfist","Ramattra","Sigma","Winston","Ashe","Cassidy"]},
    "Sombra":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Sigma","Wrecking Ball","Ashe","Bastion","Cassidy","Echo"],
        "weak_against": ["D.va","Roadhog","Winston","Zarya"]},
    "Symmetra":{ "strong_against": ["D.va","Doomfist","Junker Queen","Reinhardt","Sigma","Wrecking Ball","Bastion"],
        "weak_against": ["Orisa","Ramattra","Roadhog","Winston","Zarya","Ashe","Cassidy","Echo"]},
    "Torbjörn":{ "strong_against": ["D.va","Junker Queen","Orisa","Reinhardt","Roadhog","Winston","Wrecking Ball","Echo"],
        "weak_against": ["Doomfist","Ramattra","Sigma","Zarya","Ashe","Bastion","Cassidy"]},
    "Tracer":{ "strong_against": ["Doomfist","Orisa","Roadhog","Sigma","Wrecking Ball","Bastion"],
        "weak_against": ["D.va","Junker Queen","Ramattra","Reinhardt","Roadhog","Winston","Zarya","Ashe","Cassidy","Echo"]},
    "Widowmaker":{ "strong_against": ["Junker Queen","Orisa","Roadhog","Zarya","Bastion","Cassidy"],
        "weak_against": ["D.va","Doomfist","Ramattra","Reinhardt","Sigma","Winston","Wrecking Ball","Ashe","Echo"]},
    "Ana":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Sigma","Wrecking Ball","Bastion","Echo"],
        "weak_against": ["D.va","Winston","Zarya","Ashe","Cassidy"]},
    "Baptiste":{ "strong_against": ["Doomfist","Junker Queen","Orisa","Reinhardt","Sigma","Winston","Wrecking Ball","Cassidy","Echo"],
        "weak_against": ["D.va","Ramattra","Roadhog","Zarya","Ashe","Bastion"]},
    "Brigitte":{ "strong_against": ["D.va","Doomfist","Reinhardt","Winston","Wrecking Ball"],
        "weak_against": ["Junker Queen","Orisa","Ramattra","Roadhog","Sigma","Zarya","Ashe","Bastion","Cassidy","Echo"]}, 
    "Kiriko":{ "strong_against": ["D.va","Doomfist","Junker Queen","Orisa","Ramattra","Reinhardt","Roadhog","Winston","Wrecking Ball","Zarya","Bastion","Cassidy"],
        "weak_against": ["Sigma","Ashe","Echo"]}, 
    "Lifeweaver":{ "strong_against": ["Doomfist","Junker Queen","Reinhardt","Roadhog","Sigma","Wrecking Ball","Zarya"],
        "weak_against": ["D.va","Orisa","Ramattra","Winston","Ashe","Bastion","Cassidy","Echo"]},
    "Lúcio":{ "strong_against": ["D.va","Doomfist","Junker Queen","Reinhardt","Sigma","Ashe","Bastion"],
        "weak_against": ["Orisa","Ramattra","Roadhog","Winston","Wrecking Ball","Zarya","Cassidy","Echo"]},
    "Mercy":{ "strong_against": ["Junker Queen","Ramattra","Reinhardt","Wrecking Ball","Ashe","Bastion"],
        "weak_against": ["D.va","Doomfist","Orisa","Roadhog","Sigma","Winston","Zarya","Cassidy","Echo"]},
    "Moira":{ "strong_against": ["D.va","Doomfist","Junker Queen","Ramattra","Wrecking Ball","Ashe","Bastion","Cassidy","Echo"],
        "weak_against": ["Orisa","Reinhardt","Roadhog","Sigma","Winston","Zarya"]},
    "Zenyatta":{ "strong_against": ["D.va","Orisa","Ramattra","Roadhog","Sigma","Winston","Ashe","Bastion","Cassidy"],
        "weak_against": ["Doomfist","Junker Queen","Reinhardt","Wrecking Ball","Zarya","Echo"]}
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
        for (var i = 0; i < heroes[element.alt]["strong_against"].length; i++) {
            strong_against.innerHTML += `<li>${heroes[element.alt]["strong_against"][i]}</li>`;
        }
        for (var i = 0; i < heroes[element.alt]["weak_against"].length; i++) {
            weak_against.innerHTML += `<li>${heroes[element.alt]["weak_against"][i]}</li>`;
        }
    }
}


function clearLists() {
    // Clears all Lists
    while (strong_against.firstChild) {
        strong_against.removeChild(strong_against.firstChild);
    }
    while (weak_against.firstChild) {
        weak_against.removeChild(weak_against.firstChild);
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