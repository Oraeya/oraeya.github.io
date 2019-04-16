function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genChar() {
    var raceRoll = roll(1,100);
    var raceTable = [
        ["Aasimar", 1, 1], 
        ["Dragonborn", 2, 4], 
        ["Dwarf", 5, 19], 
        ["Elf", 20, 29], 
        ["Firbolg", 30, 31], 
        ["Gith", 32, 33], 
        ["Gnome", 34, 39], 
        ["Goliath", 40, 41], 
        ["Half-Elf", 42, 42], 
        ["Half-Orc", 43, 43], 
        ["Halfling", 44, 50], 
        ["Human", 51, 90], 
        ["Kenku", 91, 91], 
        ["Lizardfolk", 92, 92], 
        ["Monstrous", 93, 93], 
        ["Tabaxi", 94, 94], 
        ["Tiefling", 95, 98], 
        ["Triton", 99, 99], 
        ["Choose", 100, 100]];
        var race = "";
    raceTable.forEach(element => {
        if(element[1] <= raceRoll && element[2] >= raceRoll) {
            race = element[0];
        }
    });
    var subrace = "";
    var subraceRoll = 0;
    if (race === "Aasimar") {
        var subraceTable = [["Fallen", 1, 33],["Protector", 34, 67],["Scourge", 68, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Dwarf") {
        var subraceTable = [["Hill", 1, 45],["Mountain", 46, 90],["Duergar", 91, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Elf" ) {
        var subraceTable = [["Drow", 1, 10],["Eladrin", 11, 20],["High", 21,50],["Sea", 51,60],["Shadar-kai", 60, 70],["Wood", 71, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Gith" ) {
        var subraceTable = [["Githyanki", 1, 50],["Githzerai", 51, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Gnome" ) {
        var subraceTable = [["Forest", 1, 45],["Rock", 46, 90],["Deep", 91, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Halfling" ) {
        var subraceTable = [["Lightfoot", 1, 50],["Stout", 51, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Monstrous" ) {
        var subraceTable = [["Bugbear", 1, 10],["Goblin", 11, 35],["Hobgoblin", 36,50],["Kobold", 51,75],["Orc", 76, 90],["Yuan-ti", 91, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    if (race === "Tiefling") {
        var subraceTable = [["Asmodeus", 1, 12],["Baalzebul", 13, 23],["Dispater", 24, 34],["Fierna", 35, 45],["Glasya", 46, 56],["Levistus-ti", 57, 67],["Mammon", 68, 78],["Mephistopheles", 79, 89],["Zariel", 90, 100]];
        subraceRoll = roll(1, 100);
        subraceTable.forEach(element => {
            if(element[1] <= subraceRoll && element[2] >= subraceRoll) {
                subrace = element[0];
            }
        });
    }
    document.getElementById("race").innerHTML = race + (subrace ? " (" + subrace + ")" : "");

    /* BACKGROUND */
    var bgRoll = roll(1, 100);
    var bgTable = [
        ["Acolyte", 1, 7], 
        ["Charlatan", 8, 14], 
        ["Criminal", 15, 21], 
        ["Entertainer", 22, 28], 
        ["Folk Hero", 29, 35], 
        ["Guild Artisan", 36, 42], 
        ["Hermit", 43, 49], 
        ["Noble", 50, 56], 
        ["Outlander", 57, 63], 
        ["Sage", 64, 70], 
        ["Sailor", 71, 77], 
        ["Soldier", 78, 84], 
        ["Urchin", 85, 91], 
        ["Choose", 92, 100]];
    var bg = "";
    bgTable.forEach(element => {
        if(element[1] <= bgRoll && element[2] >= bgRoll) {
            bg = element[0];
        }
    });
    document.getElementById("bg").innerHTML = bg;

    /* CLASS */
    var classRoll = roll(1, 100);
    var classTable = [
        ["Barbarian", 1, 8], 
        ["Bard", 9, 16], 
        ["Cleric", 17, 24], 
        ["Druid", 25, 32], 
        ["Fighter", 33, 40], 
        ["Monk", 41, 48], 
        ["Paladin", 49, 56], 
        ["Ranger", 57, 64], 
        ["Rogue", 65, 72], 
        ["Sorcerer", 73, 80], 
        ["Warlock", 81, 88], 
        ["Wizard", 89, 96],
        ["Choose", 97, 100]];
    var Class = "";
    classTable.forEach(element => {
        if(element[1] <= classRoll && element[2] >= classRoll) {
            Class = element[0];
        }
    });
    var subclass = "";
    var subclassRoll = 0;
    if (Class === "Cleric") {
        var subclassTable = [
            ["Forge", 1, 10],
            ["Grave", 11, 20],
            ["Knowledge", 21, 30],
            ["Life", 31, 40],
            ["Light", 41, 50],
            ["Nature", 51, 60],
            ["Tempest", 61, 70],
            ["Trickery", 71, 80],
            ["War", 81, 90],
            ["Choose", 91, 100]];
        subclassRoll = roll(1, 100);
        subclassTable.forEach(element => {
            if(element[1] <= subclassRoll && element[2] >= subclassRoll) {
                subclass = element[0];
            }
        });
    }
    if (Class === "Fighter") {
        var subclassTable = [
            ["Archery", 1, 16],
            ["Defense", 17, 32],
            ["Dueling", 33, 48],
            ["Great Weapon", 49, 64],
            ["Protection", 65, 80],
            ["Two-Weapon", 81, 96],
            ["Choose", 97, 100]];
        subclassRoll = roll(1, 100);
        subclassTable.forEach(element => {
            if(element[1] <= subclassRoll && element[2] >= subclassRoll) {
                subclass = element[0];
            }
        });
    }
    if (Class === "Sorcerer") {
        var subclassTable = [
            ["Divine Soul", 1, 19],
            ["Draconic Blood", 20, 38],
            ["Shadow Magic", 39, 57],
            ["Storm Sorcery", 58, 76],
            ["Wild Magic", 77, 95],
            ["Choose", 96, 100]];
        subclassRoll = roll(1, 100);
        subclassTable.forEach(element => {
            if(element[1] <= subclassRoll && element[2] >= subclassRoll) {
                subclass = element[0];
            }
        });
    }
    if (Class === "Warlock") {
        var subclassTable = [
            ["Archfey", 1, 19],
            ["Celestial", 20, 38],
            ["Fiend", 39, 57],
            ["Great Old One", 58, 76],
            ["Hexblade", 77, 95],
            ["Choose", 96, 100]];
        subclassRoll = roll(1, 100);
        subclassTable.forEach(element => {
            if(element[1] <= subclassRoll && element[2] >= subclassRoll) {
                subclass = element[0];
            }
        });
    }
    document.getElementById("class").innerHTML = Class + (subclass ? " (" + subclass + ")" : "");

    /* STATS */
    var STR = roll(3, 18);
    var DEX = roll(3, 18);
    var CON = roll(3, 18);
    var INT = roll(3, 18);
    var WIS = roll(3, 18);
    var CHA = roll(3, 18);
    document.getElementById("str").innerHTML = STR
    document.getElementById("dex").innerHTML = DEX
    document.getElementById("con").innerHTML = CON
    document.getElementById("int").innerHTML = INT
    document.getElementById("wis").innerHTML = WIS
    document.getElementById("cha").innerHTML = CHA

    /* AGE */
    var ageRoll = roll(1, 100);
    var ageTable = [
        ["Young adult", 1, 39], 
        ["Early middle-age", 40, 74], 
        ["Late middle-age", 75, 91], 
        ["Old", 92, 97], 
        ["Very old", 98, 100]];
    var age = "";
    ageTable.forEach(element => {
        if(element[1] <= ageRoll && element[2] >= ageRoll) {
            age = element[0];
        }
    });
    document.getElementById("age").innerHTML = age;

    /* HEIGHT */
    var heightRoll = roll(1, 100);
    var heightTable = [
        ["Very short", 1, 5], 
        ["Short", 6, 30], 
        ["Average", 31, 70], 
        ["Tall", 71, 95], 
        ["Very tall", 96, 100]];
    var height = "";
    heightTable.forEach(element => {
        if(element[1] <= heightRoll && element[2] >= heightRoll) {
            height = element[0];
        }
    });
    document.getElementById("height").innerHTML = height;

    /* WEIGHT */
    var weightRoll = roll(1, 100);
    var weightTable = [
        ["Very thin", 1, 5], 
        ["Thin", 6, 30], 
        ["Average", 31, 70], 
        ["Fat", 71, 95], 
        ["Very fat", 96, 100]];
    var weight = "";
    weightTable.forEach(element => {
        if(element[1] <= weightRoll && element[2] >= weightRoll) {
            weight = element[0];
        }
    });
    document.getElementById("weight").innerHTML = weight;

    /* FEATURE */
    var featureRoll = roll(1, 100);
    var featureTable = [
        ["Scar", 1, 20], 
        ["Tattoo", 21, 40], 
        ["Piercing", 41, 60], 
        ["Birthmark", 61, 80], 
        ["Accent", 81, 100]];
    var feature = "";
    featureTable.forEach(element => {
        if(element[1] <= featureRoll && element[2] >= featureRoll) {
            feature = element[0];
        }
    });
    document.getElementById("feature").innerHTML = feature;

    /* FAMILY */
    var familyRoll = roll(1, 100);
    var familyTable = [
        ["None", 1, 5], 
        ["Small", 6, 30], 
        ["Average", 31, 70], 
        ["Large", 71, 95], 
        ["Disowned", 96, 100]];
    var family = "";
    familyTable.forEach(element => {
        if(element[1] <= familyRoll && element[2] >= familyRoll) {
            family = element[0];
        }
    });
    document.getElementById("family").innerHTML = family;

    /* RAISEDBY */
    var raisedbyRoll = roll(1, 100);
    var raisedbyTable = [
        ["Natural Parent(s)", 1, 40], 
        ["Close Family", 41, 60], 
        ["Adopted Parent(s)", 61, 70], 
        ["An Institution", 71, 90], 
        ["Yourself", 91, 100]];
    var raisedby = "";
    raisedbyTable.forEach(element => {
        if(element[1] <= raisedbyRoll && element[2] >= raisedbyRoll) {
            raisedby = element[0];
        }
    });
    document.getElementById("raisedby").innerHTML = raisedby;

    /* MEMORIES */
    var memoriesTable =[
        ["Achievement - A goal you helped complete", 1, 20], 
        ["Conflict - Someone opposed you", 21, 40], 
        ["Friendship - A close bond forged or tested", 41, 60], 
        ["Loss - Something precious was taken", 61, 80], 
        ["Love - A love gained or lost", 81, 100]];
    var memories = [];
    var memoryCount = 0;
    switch(age) {
        case "Young adult":
        memoryCount = 1;
        break;
        case "Early middle-age":
        memoryCount = 2;
        break;
        case "Late middle-age":
        memoryCount = 3;
        break;
        case "Old":
        memoryCount = 4;
        break;
        case "Very old":
        memoryCount = 5;
        break;
    }
    for(var i = 0; i < memoryCount; i++) {
        var memoriesRoll = roll(1, 100);
        memoriesTable.forEach(element => {
            if (element[1] <= memoriesRoll && element[2] >= memoriesRoll) {
                memories.push(element[0]);
            }
        });
    }
    document.getElementById("memories").innerHTML = "<li>" + memories.join("</li><li>") + "</li>";
}