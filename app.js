// RAMESSES CODE!
// INDEX
// SECTION 01: CHARACATER SHEETS
// SECTION 02: RANDOM NUMBER GEN
// Section 03: SFX
// Section 04: Enemy Generator & Placement


// THings left to build
// Miss animation for enemies and player, game over screen, redo the continue music, improve item box, make the attack options look better, 

//--------------------- Section 01
// ------ Character Sheets! -------
// ---------------------

const Ramesses = {
    name: "Ramesses",
    str: 7,
    origstr: 7,
    athl: 7,
    origathl: 7,
    refdet: 9,
    origrefdet: 9,
    combat: 11,
    origcombat: 11,
    tough: 7,
    origtough: 7,
    toler: 7,
    origtoler: 7,
    health: 24,
    orighealth: 24,
    aimBonus: 0,
    actions: [],
    bleeding: false,
    bleedingCounter: 0,
    inventory: {
        brownBetty: 2,
        superGlue: 1,
    },
};

class Enemy {
    constructor(name, image, snaps){
        this.name = name,
        this.str = odds(9), //between 2 and 8
        this.athl = odds(7),  //between 2 and 6
        this.refdet = odds(5),  //between 0 and 4
        this.combat = odds(7),  //between 2 and 6
        this.tough = odds(9),  //between 2 and 8
        this.toler = odds(9),  //between 2 and 8
        this.health = eneHealth(25), // between 8 and 24
        this.aimBonus = 0,
        this.actions = [attackR, aim, cocaine, attackR],
        this.image = image,
        this.snaps = snaps,
        this.bleeding = false,
        this.bleedingCounter = 0
    }
}

class BossEnemy {
    constructor(name, image, snaps){
        this.name = name,
        this.str = odds(9), //between 2 and 8
        this.athl = odds(9),  //between 2 and 6
        this.refdet = odds(7),  //between 0 and 4
        this.combat = odds(11),  //between 2 and 6
        this.tough = odds(9),  //between 2 and 8
        this.toler = odds(9),  //between 2 and 8
        this.health = eneHealth(35), // between 8 and 24
        this.aimBonus = 0,
        this.actions = [attackR, aim],
        this.image = image,
        this.snaps = snaps,
        this.bleeding = false,
        this.bleedingCounter = 0
    }
}

const enemyNames = [
    {
        name: "Wrath", 
        image: "url('assets/Enemy1.jpg')",
        snaps: ["You broke in, so you brought this on yourself. Remember that in the ER, boy.", "What the? Get out! Get out of here, now! I’ll kill you!", "I saw what you did to those others, putting down a mad dog like you is the cherry on my day.", "I’d rip them apart if I could reach them, leaving me behind? Me? ARGH, why?!"]
    }, 
    {
        name: "Gluttony", 
        image: "url('assets/enemy2.png')",
        snaps: ["I could have gone too but I needed just one more…why don’t they get it?", "I can let you go, you know...hey is that brown sugar? Give it to me and you won’t have to get hurt.", "I just had some brown sugar. No, wait! Do you have some brown sugar? Give me yours!", "Empty those pockets, boy, put it all in the bag and I might just let you leave here in one piece."]
    }, 
    {
        name: "Lust", 
        image: "url('assets/enemy3.jpg')",
        snaps: ["Look at you, more crafted than born. How’d you get to look so...mmm...good?", "It’s not fair, why leave me behind? Just take a look at me and tell me you don’t want this with you.", "I shouldn’t be here, I should be far away with a face between my legs.", "I don’t want to fight, but I do like it when it gets rough."]
    }, 
    {
        name: "Pride", 
        image: "url('assets/enemy4.jpg')",
        snaps: ["Cute, you got a little stick. This here? This is a real weapon.", "Had a bit of luck getting here huh? Luck ran out when you met me, boy.", "I didn’t get left behind like the rest of these sad sacks, I stayed behind because they needed guidance and strength. They need me. They. Need. Me.", "Take a swing, boy, think of it as giving you a chance."]
    }, 
    {
        name: "Avarus", 
        image: "url('assets/enemy5.jpg')",
        snaps: ["I’m glad they left me behind, how could I leave such cool stuff anyway?", "I knew the moment I saw you, you got what I need but you won’t give it willingly will you? Guess I have to take it.", "I could let you go, we got what we needed but a bonus couldn’t hurt and I want more.", "Stay back, this here is mine, there’s just not enough to share, don’t you get it?!"]
    }, 
    {
        name: "Envy", 
        image: "url('assets/enemy6.jpg')",
        snaps: ["That’s a real nice bat, too good for someone like you. Give it here, I said give it!", "I can’t believe she got to go instead of me, she was a whore and always in everyone else’s trash. Not one of them deserved to go more than me, not one.", "Why fight us for him? I never had a friend like that. If I take you out though, he won’t have a friend like that either.", "Look at those abs, it’s not fair, I should have abs like that. At least I won’t have your hospital bills."]
    }, 
    {
        name: "Sloth", 
        image: "url('assets/enemy7.jpg')",
        snaps: ["Wait, do we even have to do this? Can’t you just, you know, leave?", "Just tap me hard enough to bruise so it looks like I really put up a fight.", "I could have gone too, I really could have, I heard the call but I figured they would come and get me.", "If I stop you here, it ends but that’s a lot of work…"]
    }
]

const bossNames = [
    {
        name: "RoadKill",
        image: "url('assets/boss1.png')",
        snaps: ["So you're guy Ruby was screaming about; the friend of that disrespectful asshole and the guy that burned down Grustigies Arcade. "]
    }
]

let seeFoo = ["Are you getting paid to be a punching bag or do you just like getting hit? Not judging if that’s what you’re into. Just thought you wanted to save someone.", "Was that your best hit? I thought you were trying to hurt them, not seduce them with light tickles and love taps.", "Any fight that they walk away from is another failure in your book. Worst student I ever had.", "I thought I taught you to win a fight you need to get hit less than the other guy, unless you’re trying to wear down his fists with your face.", "Is this for intimidation? Stand there and let them beat you until they are tired because it is futile?", " wouldn’t have done that but what do I know, I just taught you how to fight.", "Your body is strong and your brain is equally as weak. That means you’re stupid, BWAH HA HA HA.", "You know why they call it dead weight? If you try to lift it, you die too. Leave him. If he was weak enough to get caught, he is too weak for what’s coming."];


// ------------------------ Section 02
// ---------- Random Number gen --------
// ------------------------


let odds = (max) => {
    let num = Math.floor(Math.random() * (max - 2) + 2);
    if((num % 2) == 0){
        return num + 1;
        }
        else {
        return num;
        }    
}

let eneHealth = (max) => {
    var min = 8,
        max = max,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

const randE = () => {
    var min = 0,
        max = 7,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

let randN = (max) => {
    var min = 1,
        max = max,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

let randN0 = (max) => {
    var min = 0,
        max = max,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

// -------------------- Section 03
// --------------------- SFX 
// --------------------
// ----------------- Visuals (Combat)
const combatScreen = document.getElementById('screen');
let enemyImage = document.getElementById('ene1');
let enemyImage1 = document.getElementById('ene2');
let enemyImage2 = document.getElementById('ene3');
let gameMessage = document.getElementById('textbox');
let itemNumber = document.getElementById('itemnum');
let healthNumber = document.getElementById('healthNum');
let healthNumber1 = document.getElementById('healthNumOOC');
let eneAct1 = document.getElementById('eneact1');
let eneAct2 = document.getElementById('eneact2');
let eneAct3 = document.getElementById('eneact3');

// ----------------- Visuals (OOC)
let bGI = document.getElementById('screenOOC');
let npcs = document.getElementById('person');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('selectBox')

const roomRevisit = () => {
    if (state.currentRoom == 9) {
        if (state.firstRoom == false) {
            setTimeout(() => {
                npcs.style.backgroundImage = "url('assets/Ruby.jpg')"
            }, 1500);
        }  
    } 
    if (state.firstRoom == true) {
        textNodes[7].options[0].nextText = 17;
    }
    
    if (state.secondRoom == true) {
        textNodes[7].options[1].nextText = 18;
    }
    
}
//element.classList.add("my-class");
//element.classList.remove("my-class");


const damageAni = () => {
    hitSFX1()
    if (versus.length == 2) {
        if (target == versus[0]) {
            enemyImage1.style.border = "solid red";
    setTimeout(() => {
            enemyImage1.style.border = "none";
            }, 100);
    setTimeout(() => {
            enemyImage1.style.border = "solid red";
            }, 200);
    setTimeout(() => {
            enemyImage1.style.border = "none";
            }, 300);
    setTimeout(() => {
            enemyImage1.style.border = "solid red";
            }, 500);
    setTimeout(() => {
            enemyImage1.style.border = "none";
            }, 600);
        } else if (target == versus[1]) {
                enemyImage2.style.border = "solid red";
                setTimeout(() => {
                    enemyImage2.style.border = "none";
                }, 125);
                setTimeout(() => {
                    enemyImage2.style.border = "solid red";
                    }, 250);
                setTimeout(() => {
                    enemyImage2.style.border = "none";
                    }, 375);
                setTimeout(() => {
                    enemyImage2.style.border = "solid red";
                    }, 500);
                setTimeout(() => {
                    enemyImage2.style.border = "none";
                    }, 625);
        }
    } else {
        enemyImage.style.border = "solid red";
        setTimeout(() => {
            enemyImage.style.border = "none";
            }, 125);
        setTimeout(() => {
            enemyImage.style.border = "solid red";
            }, 250);
        setTimeout(() => {
            enemyImage.style.border = "none";
            }, 375);
        setTimeout(() => {
            enemyImage.style.border = "solid red";
            }, 500);
        setTimeout(() => {
            enemyImage.style.border = "none";
            }, 625);
    }
}

const damagedAni = () => {
    combatScreen.classList.add("screen")
    setTimeout(() => {
        combatScreen.classList.remove("screen")
    }, 500);
}

const cantTouchThis = () => {
    missSFX2()
    let x = randN(3);
    if (x == 1) {
        combatScreen.classList.add("missing1")
        setTimeout(() => {
            combatScreen.classList.remove("missing1")
        }, 500);
    } else {
        combatScreen.classList.add("missing2")
        setTimeout(() => {
            combatScreen.classList.remove("missing2")
        }, 500);
    }
}

const couldntTouchThat = () => {
    missSFX1()
    let y = randN(4)
    if (target = versus[1]) {
        if (y == 1){
            enemyImage2.classList.add("missed1")
            setTimeout(() => {
                enemyImage2.classList.remove("missed1")
            }, 500);
        }

        if (y == 2){
            enemyImage2.classList.add("missed2")
            setTimeout(() => {
                enemyImage2.classList.remove("missed2")
            }, 500);
        }

        if (y == 3){
            enemyImage2.classList.add("missed3")
            setTimeout(() => {
                enemyImage2.classList.remove("missed3")
            }, 500);
        }
        }

    if (versus.length == 2 && target == versus[0]) {
        if (y == 1){
            enemyImage1.classList.add("missed1")
            setTimeout(() => {
                enemyImage1.classList.remove("missed1")
            }, 500);
        }

        if (y == 2){
            enemyImage1.classList.add("missed2")
            setTimeout(() => {
                enemyImage1.classList.remove("missed2")
            }, 500);
        }

        if (y == 3){
            enemyImage1.classList.add("missed3")
            setTimeout(() => {
                enemyImage1.classList.remove("missed3")
            }, 500);
        }
    }  
    
    if (versus.length == 1) {
        if (y == 1){
            enemyImage.classList.add("missed1")
            setTimeout(() => {
                enemyImage.classList.remove("missed1")
            }, 500);
        }

        if (y == 2){
            enemyImage.classList.add("missed2")
            setTimeout(() => {
                enemyImage.classList.remove("missed2")
            }, 500);
        }

        if (y == 3){
            enemyImage.classList.add("missed3")
            setTimeout(() => {
                enemyImage.classList.remove("missed3")
            }, 500);
        }
    }
}

const aimed = (x) => {
    aimingSFX()
    if (x == 1) {
            eneAct3.classList.add("aimed")
            setTimeout(() => {
                eneAct3.classList.remove("aimed")
            }, 800);
        }

    if (x == 0 && versus.length == 2) {
            eneAct2.classList.add("aimed")
            setTimeout(() => {
                eneAct2.classList.remove("aimed")
            }, 800);
        
    }  
    
    if (versus.length == 1) {
        eneAct1.classList.add("aimed")
            setTimeout(() => {
                eneAct1.classList.remove("aimed")
            }, 800);
    }
}

const snorted = (x) => {
    snortSFX()
    if (x == 1) {
            eneAct3.classList.add("snorted")
            setTimeout(() => {
                eneAct3.classList.remove("snorted")
            }, 1500);
        }

    if (x == 0 && versus.length == 2) {
            eneAct2.classList.add("snorted")
            setTimeout(() => {
                eneAct2.classList.remove("snorted")
            }, 1500);
        
    }  
    
    if (versus.length == 1) {
        eneAct1.classList.add("snorted")
            setTimeout(() => {
                eneAct1.classList.remove("snorted")
            }, 1500);
    }
}


// ------------- AUDIO

let music = document.getElementById("flash");
let battleMusic = document.getElementById("lines");
let flOneBoss = document.getElementById("Rasputin");
let roundabout = document.getElementById("coninued");
let whap  = document.getElementById("whap");
let snort = document.getElementById('snort');
let strike1 = document.getElementById('strike1');
let strike2 = document.getElementById('strike2');
let strike3  = document.getElementById("bonk");
let glassBreak = document.getElementById('glassBreak');
let aiming = document.getElementById('aiming');
let miss1 = document.getElementById('miss1')
let miss2 = document.getElementById('miss2')

let grandMaster = () => {
    battleMusic.pause()
    music.play()
    flOneBoss.pause()
}
let fightclub = () => {
    music.pause()
    battleMusic.play()
}
let flrOneBoss = () => {
    flOneBoss.play()
    battleMusic.pause()
    music.pause()
}
let endsong = () => {
    music.pause()
    battleMusic.pause()
    music.pause()
    roundabout.play()
    

}
let hitSFX1 = () => {
    whap.play()
}
let hitSFX2 = () => {
    strike1.play()
}
let hitSFX3 = () => {
    strike2.play()
}
let hitSFX4 = () => {
    strike3.play()
}
let missSFX1 = () => {
    miss1.play()
}
let missSFX2 = () => {
    miss2.play()
}
let snortSFX = () => {
    snort.play()
}
let aimingSFX = () => {
    aiming.play()
}

let damagedSFX = () => {
    let hits = [hitSFX2, hitSFX3, hitSFX4];
    let picker = hits.length +1;
    let i = randN(picker) -1;
    hits[i]()
}

// ------------------------- Section 04
// ----------- Enemy Generator & Placement
// -------------------------

let versus = [];
let target = 1;

let monsterGeny = () => {
    let y = randN(3)
    for (let i = 0; i < y; i++) {
        let x = randE()
        versus.push(new Enemy(enemyNames[x].name, enemyNames[x].image, enemyNames[x].snaps))
    }
    return versus;
}

let bossGeny = () => {
    let y = 1
    for (let i = 0; i < y; i++) {
        versus.push(new Enemy(bossNames[0].name, bossNames[0].image, bossNames[0].snaps))
    }
    return versus;
}

let enemySelect = () => {
    document.getElementById("ene1").style.border = "solid gold";
    document.getElementById("ene2").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    target =  versus[0];
    console.log(target)
}

let enemySelect1 = () => {
    document.getElementById("ene2").style.border = "solid gold";
    document.getElementById("ene1").style.border = "none";
    document.getElementById("ene3").style.border = "none";
    target =  versus[0];
    console.log(target)
}

let enemySelect2 = () => {
    document.getElementById("ene3").style.border = "solid gold";
    document.getElementById("ene1").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    target =  versus[1];
    console.log(target)
}

// ------------------
// -------------- ACTIONS!
// ------------------
// PLAYER ACTIONS ------------
const clubStrike = () => { // Normal Player attack
    let swingAway = 2 + randN(Ramesses.combat)
    if (swingAway >= target.athl/2){
        target.health -= (4 + randN(Ramesses.str));
        damageAni()
        gameMessage.innerText = "Direct Hit! Enemy Health: " + target.health;
        Ramesses.athl = Ramesses.origathl; 
    } else {
        gameMessage.innerText = "Missed";
        couldntTouchThat()
    }
    target = 1;
}

const violentThrust = () => {  // lowers next attacks damage by 6 but adds athl to the attacks damage.
    let swingAway = 1 + randN(Ramesses.combat)
    if (swingAway >= target.athl/2){
        Ramesses.str += 6;
        gameMessage.innerText = "You get low, low-rider, turning your legs into high tention spring and let loose, launchin' yourself parallel to the floor right at that sucka!";
        setTimeout(() => {
            target.health -= (4 + randN(Ramesses.str));
            gameMessage.innerText = "Struck True! Enemy Health: " + target.health;
            damageAni()
        }, 1000);
        Ramesses.athl -= 5;
        Ramesses.str = Ramesses.origstr;
    } else {
        gameMessage.innerText = "You get low, low-rider, turning your legs into high tention spring and let loose, launchin' yourself parallel to the floor right at that sucka!";
        setTimeout(() => {
            Ramesses.athl -= 5;
            gameMessage.innerText = " Only to miss ...";
            couldntTouchThat()
        }, 1000);
    }
    target = 1;
}

const ravanaBackHand = () => { //multiple attacks 拉瓦那的反手, less chance of hitting after each strike. maybe a for loop
    let swingAway = 1 + randN(Ramesses.combat)
    let delay = (i) => {
        setTimeout(() => {
            damageAni()
            gameMessage.innerText = "Hit!" + i;
            target.health -= (1 + randN(Ramesses.str));
        }, 500);
    }
    console.log(swingAway)
    if (swingAway > target.athl/2) {
        for (i = swingAway; i > target.athl/2; i -= 2) {
            delay(i)
        }
    } else {
        couldntTouchThat()
        gameMessage.innerText = "Way to swing mighty Casey"  ;
}
target = 1;
}

const thirstyBat = () => {
    let swingAway = 1 + randN(Ramesses.combat)
    if (swingAway >= target.athl/2){
        target.health -= (4);
        target.bleeding = true;
        gameMessage.innerText = "Doing the impossible you're blunt bat has drawn blood! Enemy Health: " + target.health;
    } else {
        gameMessage.innerText = "Missed";
        couldntTouchThat()
    }
    target = 1;
}

const usedItem = () => {
    gameMessage.innerText = "Item used ";
    target = 1;
    document.getElementById("ene1").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    streetSweeper()

    setTimeout(() => {
        gameMessage.innerText = "opponent is about to strike!"
    }, 1250);
    setTimeout(() => {
        badAi()
        streetSweeper()
        if (isGameOver(Ramesses.health)) {
            endgame("game Over")
        return
        }
    }, 2000);
    if (Ramesses.bleeding == true) {
        Ramesses.health -= Math.floor(Ramesses.tough / 2)
        gameMessage.innerText = "Your losing blood " + Ramesses.health;
    };
}

const brownBetty = (x) => {
    if (Ramesses.health == Ramesses.orighealth){
        gameMessage.innerText = "Already in top shape, not need to Over Do it."
        console.log()
    } else if (Ramesses.health + 5 > Ramesses.orighealth) {
        snortSFX()
        Ramesses.health = Ramesses.orighealth;
        Ramesses.inventory.brownBetty -= 1;
        console.log("Healing has happened")
        itemNumber.innerText = "X " + Ramesses.inventory.brownBetty; 
        healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        
        x()  
    } else {
        snortSFX()
        Ramesses.inventory.brownBetty -= 1;
        Ramesses.health += 5;
        itemNumber.innerText = "X " + Ramesses.inventory.brownBetty; 
        healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        console.log("Healing has happened")
        x()
    }
}

const bandage = (X) => {

}

// NPC ACTIONS -----------------
const attackR = (x, z) => {
    console.log(z)
    let strikechance = x.aimBonus + randN(x.combat);
    if (strikechance >= Ramesses.athl/2){
        damagedAni()
        damagedSFX()
        setTimeout(() => {
            Ramesses.health -= (2 + randN(x.str));
        x.aimBonus = 0;
        gameMessage.innerText = x.name + "'s attack hit " + "Ramess health: " + Ramesses.health; 
        healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        console.log("attack happened")
        }, 750);
        
    } else {
        setTimeout(() => {
            x.aimBonus = 0;
            gameMessage.innerText = x.name + " Missed, Now's your chance!";
            cantTouchThis()
            console.log("missed happened")
        }, 1000);   
    }      
}

const aim = (x, z) => {
    setTimeout(() => {
        console.log(x)
        aimed(z)
        x.aimBonus +=2;
        gameMessage.innerText = "Looks like " + x.name + " is taking aim!  " + x.aimBonus;
    }, 1000); 
}

const cocaine = (x, z) => {
    setTimeout(() => {
        console.log(x)
        snorted(z)
        x.combat += 2;
        x.str += 2;
        x.health += 5;
        gameMessage.innerText = x.name + " took a bump!"
        
    }, 800);
}

const badAi = () =>{
    let delay = (y) => {
        setTimeout(() => {
            let picker = versus[y].actions.length +1;
            let i = randN(picker) -1;
            versus[y].actions[i](versus[y], y)
            //console.log(y)
        }, 1000 + (1700 * y));
    }
    for (y = 0; y < versus.length; y++) {
        if (versus[y].bleeding == true){
            console.log(versus[y].name + " is Bleeding!")
            versus[y].health -= (2)
            gameMessage.innerText = versus[y].name + " is Bleeding! " + versus[y].health;        
        };
       delay(y)
            
    }
    
}

// --------------------
// --------------- FIGHT LOOP
// --------------------

const isGameOver = (health) => {
    return health <= 0;
}

const streetSweeper = () => {
    healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    if (versus.length == 1) {
        if (isGameOver(versus[0].health)){
                endFight("Ramesses Wins")
                return
            }
        } else if (versus.length == 2) {
            if (versus[1].health <= 0){
                versus.pop();
                enemyImage.removeAttribute("style");
                eneAct1.removeAttribute("style");
                enemyImage1.style.display="none";
                enemyImage2.style.display="none";
                eneAct2.style.display="none";
                eneAct3.style.display="none";
                enemyImage.style.backgroundImage = versus[0].image;
        }  else if (versus[0].health <= 0){
                versus.shift();
                enemyImage.removeAttribute("style");
                eneAct1.removeAttribute("style");
                enemyImage1.style.display="none";
                enemyImage2.style.display="none";
                eneAct2.style.display="none";
                eneAct3.style.display="none";
                enemyImage.style.backgroundImage = versus[0].image;
        } 
        }
        
}

let fight = () => {
    document.getElementById("ooc").style.display="none";
    document.getElementById("combat").removeAttribute("style");
    document.getElementById("ene2").removeAttribute("style");
    itemNumber.innerText = "X " + Ramesses.inventory.brownBetty; 
    healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    monsterGeny();
    fightclub()
    if (versus.length == 2){
        enemyImage1.removeAttribute("style")
        enemyImage2.removeAttribute("style")
        eneAct2.removeAttribute("style");
        eneAct3.removeAttribute("style");
        enemyImage.style.display="none";
        eneAct1.style.display="none";
        enemyImage1.style.backgroundImage = versus[0].image;
        enemyImage2.style.backgroundImage = versus[1].image;
        gameMessage.innerText = versus[0].snaps[randN0(4)];
        
    } else {
        enemyImage.removeAttribute("style");
        eneAct1.removeAttribute("style");
        enemyImage1.style.display="none";
        enemyImage2.style.display="none";
        enemyImage.style.backgroundImage = versus[0].image;
        gameMessage.innerText = versus[0].snaps[randN0(4)];  
        eneAct2.style.display="none";
        eneAct3.style.display="none";
    }
}

let bossFight = () => {
    flrOneBoss()
    document.getElementById("ooc").style.display="none";
    document.getElementById("combat").removeAttribute("style");
    document.getElementById("ene1").removeAttribute("style");
    bossGeny()
    enemyImage.style.backgroundImage = versus[0].image;
    gameMessage.innerText = versus[0].snaps[0];
         
}

// Players attack and computer's reaction
const attack = (x) => { 
    if (target == 1) {
        gameMessage.innerText = "Please Choose a Target";
        return
    }
    // if (Ramesses.inventory.brownBetty > 1 && target == 1) {
    //     gameMessage.innerText = "All out"
    // }
    let attackButton = document.getElementsByClassName('attack')
    let continueButton = document.getElementById("continue-button"); 
    x(target)
    target = 1;
    document.getElementById("ene1").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    document.getElementById("ene2").style.border = "none";
    //Alter to check each enemies health, for loop based on versus length.
    // if (isGameOver(versus[0].health)){
    //     endFight("Ramesses Wins")
    //     return
    // }
    streetSweeper()

    setTimeout(() => {
        gameMessage.innerText = "opponent is about to strike!"
    }, 1250);
    setTimeout(() => {
        badAi()
        streetSweeper()
        if (isGameOver(Ramesses.health)) {
            endgame("game Over")
        return
        }
    }, 2000);
    if (Ramesses.bleeding == true) {
        Ramesses.health -= Math.floor(Ramesses.tough / 2)
        gameMessage.innerText = "Your losing blood " + Ramesses.health;
    };
}

const endFight = (message) => {
    document.getElementById('textbox').innerText = message;
    setTimeout(() => {
        document.getElementById('textbox').innerText = "Seefoo always say: " + seeFoo[randN0(7)]
    }, 900);
    setTimeout(() => {
        grandMaster()
        document.getElementById("ooc").removeAttribute("style");
        document.getElementById("combat").style.display="none";
        versus.shift()
        showTextNode(nextTextNodeId++)
        
    }, 7000);
    document.getElementsByClassName('attack-btn').hidden = true;
    document.getElementById("continue-button").hidden = false;
}

// ---------------------
// --------------- TEXT ADVENTURE
// --------------------

let state = {
    firstRoom: false,
    secondRoom: false,
    thirdRoom: false
}

const startGame = () => {
    grandMaster()
    document.getElementById("combat").style.display="none";
    document.getElementById("startScreen").style.display="none";
    document.getElementById("ooc").removeAttribute("style");
    bGI.style.backgroundImage = "url('assets/startBG11.jpg')";
    healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    healthNumber1.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    showTextNode(1)
    state = {
        currentRoom: '',
        firstRoom: false,
        secondRoom: false,
        thirdRoom: false
    }
}



let showTextNode = (textNodeIndex) => {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

    if (textNode.sideEffect) {
        textNode.sideEffect();
    }

}

const showOption = (option) => {
    return option.requiredState == null || option.requiredState(state)
}

const selectOption = (option) => {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state.currentRoom = nextTextNodeId;
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "The Bronx was no peaceful farm town but it was home. Ramesses the Bold and his brothers from the orphanage-dojo enjoyed their lives together until the Di Trullio crime family let greed make their choices for them. New faces roamed the streets, criminals from all over visiting and accepting the Di Trullio hospitality.",
        options: [
            {
                text: 'Continue',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "These outsiders didn’t know the Bronx, didn’t care for the people, took what they wanted and all was forgiven; if they paid off the Di Trullio’s. The streets are reaching a braking point and now enters the straw. A gang of jive turkeys from upstate have provoked the wrong Mofo. They have taken one of Ramesses’ oath brothers, Eclipse. Eclipse has a sharp tongue and not enough sense to sheath it, so it's easy to figure out why they snatched him.",
        options: [
            {
                text: "Continue",
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: {bluegoo: false, sword: true },
                nextText: 3
            },
            // {
            //     text: 'Trade the goo for a shield',
            //     requiredState: (currentState) => currentState.blueGoo,
            //     setState: {bluegoo: false, shield: true },
            //     nextText: 3
            // },
            
        ]
    },
    {
        id: 3,
        text: "Their dojo Master Teacher See Foo commands Ramesses and his remaining oath brother, “Anchor of the Unmoored kingdom“ to stay in the orphanage dojo; “Anyone weak enough to be taken deserves their fate” he says.",
        sideEffect: () => {
            npcs.style.backgroundImage = "url('assets/Shifu.jpg')"
            npcs.style.opacity = "0.6";
        },
        options: [
            {
                text: "Continue",
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: "Ignoring their master’s words, the two of them head to the abandoned Harriet Stowe Housing community or what the local’s called “Tomny’s Projects”. They will face off against the Raptures Wronged to get their brother back or die trying. Ramesses- 'I told you that you didn’t have to come, see foo’s gonna come down on me for this'.",
        sideEffect: () => {
            npcs.style.backgroundImage = "none"
            bGI.style.backgroundImage = "url('assets/mainbuilding.png')";
        },
        options: [
            {
                text: "Continue",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "Anchor- 'You knew I wasn’t going to listen to your punk ass'. The two oath brothers stand at the heavy metal magnetically locked door of the project building. As they prepare to enter the building, the sound of vehicles pulling up draws their attention. Members of the Raptures Wronged slowly stepped out of the cars and off motorcycles. As the two prepare to face them, a buzzing comes from the door.",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/greydoor.png')"
            bGI.style.backgroundColor = "brown"
            
        },
        options: [
            {
                text: "Continue",
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "Anchor- 'Go, get Eclipsing Moon. I’ll keep your back free and clear'. The Rapture's Wronged- 'Get away from tha do-'. Unmoored Anchor leaps onto the mass of thugs. With steel nerves, you open the building security door and walk away from the sounds of fists and screams. You cannot let doubt slow you down now. Trusting in the oath you three swore at your Master Teacher See Foo's Dojo, you enter the lair of the Rapture's Wronged.",
        sideEffect: () => {
            fight()  
        },
        options: [
            {
                text: "Continue",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Stretched out before you is the broken down lobby of the project building. A wall of what was once mailboxes to your right and a graffiti covered wall to your left. In front of you, a second security door that is folded in on itself like cardboard. Past the door is a wider space, an elevator bay; bombed with graffiti from squatters long gone.",
        sideEffect: () => { // place the elevator backgroound
            bGI.style.backgroundImage = "url('assets/BGe.png')"
        },
        options: [
            {
                text: "Continue",
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "A winding staircase of faux marble is covered with a layer of dust with footprints marking the passing of people and of the five apartments on this first floor only three of them have doors.",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/BG5.jpg')";
            npcs.style.backgroundImage = "none";
        },
        options:[
            {
                text: "Door One",
                nextText: 9
            },
            {
                text: "Door Two",
                nextText: 10
            },
            {
                text: "Door Three",
                nextText: 15
            }
        ]
    },
    {
        id: 9,
        text: "Ramesses~What kind of jive ass, silly, sad sack, narrow assed attempt at security is this?~ you think as you press the door open with your bat. Inside the bombed out room a woman sits on stacks of magazine, she looks up startled when you enter. Ruby~ Who are you?!",
        sideEffect: () => { // add first person 
            bGI.style.backgroundImage = "url('assets/floor1R1.jpg')"
            npcs.style.opacity = "1.0";
            roomRevisit()
            
        },
        options: [
            {
                text: "I'm a new member", // I know all the members because I give them their tats
                nextText: 13
            },
            {
                text: "I am Ramesses.", // You say it like it means something.
                nextText: 13
            },
            {
                text: "close door and walk away",
                nextText: 8

            }
        ]
    },
    {
        id: 10,
        text: "The sounds of vermin attempting to get away from you as you force open the door alerts you to the fact that you’re not alone here. The vermin whips around with weapon in hand. That punk Eclipse said somebody would be dumb enough to try and save him. ",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/room2.jpg')"
        },
        options: [
            {
                text: "Where Is Eclipse!",
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: "Now you know you're in the right place. Don't know if Eclipse's fat mouth is still shooting off. But they're all gonna pay for their Transgressions. ",
        sideEffect: () => {
            state.secondRoom = true;
            fight()
            roomRevisit()
            
        },
        options: [
            {
                text: "Search the room and the knocked out sucka",
                nextText: 12
            },
            {
                text: "Go back to the Hallway",
                nextText: 8
            }
        ]
    },
    {
        id: 12,
        text: "Nothing of use in this wreckage but the punk on the floor had a pocket full of candy.",
        sideEffect: () => {
            Ramesses.inventory.brownBetty += 2;
            itemNumber.innerText = "X " + Ramesses.inventory.brownBetty;
        },
        options: [
            {
                text: "Back to hallway",
                nextText: 8
            }
        ]
    },
    {
        id: 13,
        text: "Wait a minute, I know who you are! Your the asshole that burned down Grustigies Arcade! HE'S IN HERE! ",
        options: [
            {
                text: "Fight",
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: "Ruby ran out while you fighting. Don't worry, the arcade wasn't entirely your fault.",
        sideEffect: () => {
            npcs.style.backgroundImage = "none"
            state.firstRoom = true
            roomRevisit()
            fight()
        },
        options: [
            {
                text: "Back to the hallway",
                nextText: 8
            }
        ]
    },
    {
        id: 15,
        text: "After beating the brakes off that handy capable sucka you find the keys to the stairwell. Perfect place, no one would ever think he'd be the one with the keys. One floor down not sure how many to go. But you're damn sure they know you're coming and they better be ready. Cause when Ramesses comes, he comes hard.",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/bossstage.jpg')"
            bossFight()
        },
        options: [
            {
                text: "continue",
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: "",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/continued.png')";
            endsong()
        },
        options: [
            {
                text: "The end ... For now",
                nextText: 19
            }
        ]
    },
    {
        id: 17,
        text: "No Ruby, no enemies, no Eclipes.",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/floor1R1.jpg')"
        },
        options: [
            {
                text: "Back to the hallway.",
                nextText: 8
            }
        ]
    },
    {
        id: 18,
        text: "Nothing left to do here.",
        sideEffect: () => {
            bGI.style.backgroundImage = "url('assets/room2.jpg')"
        },
        options: [
            {
                text: "Back to the Hallway",
                nextText: 8
            }
        ]
    },
    {
        id: 19,
        text: "",
        sideEffect: () => {
            startGame()
        },
        options: [
            {
                text: "",
                nextText: 17
            }
        ]
    }
]

// ---------------------------
// ------ GAME START ---------
// ---------------------------


//startGame()
 //fight()