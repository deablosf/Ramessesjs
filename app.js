// RAMESSES CODE!
// INDEX
// SECTION 01: CHARACATER SHEETS
// SECTION 02: RANDOM NUMBER GEN
// Section 03: SFX
// Section 04: Enemy Generator & Placement


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
        image: "url('assets/Boss1.png')",
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
// ----------------- Visual
let combatScreen = document.getElementById('screen');
let enemyImage = document.getElementById('ene1');
let enemyImage1 = document.getElementById('ene2');
let enemyImage2 = document.getElementById('ene3');
let gameMessage = document.getElementById('textbox');
let itemNumber = document.getElementById('itemnum');
let healthNumber = document.getElementById('healthNum');

//element.classList.add("my-class");
//element.classList.remove("my-class");


let damageAni = () => {
    hitSFX1()
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
}

let damagedAni = () => {
    combatScreen.classList.add("screen")
    setTimeout(() => {
        combatScreen.classList.remove("screen")
    }, 500);
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
    let swingAway = 1 + randN(Ramesses.combat)
    if (swingAway >= target.athl/2){
        target.health -= (2 + randN(Ramesses.str));
        damageAni()
        gameMessage.innerText = "Direct Hit! Enemy Health: " + target.health;
        Ramesses.athl = Ramesses.origathl; 
    } else {
        gameMessage.innerText = "Missed";
        missSFX1()
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
            missSFX1()
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
        missSFX1()
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
        missSFX1()
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
        x()  
    } else {
        snortSFX()
        Ramesses.inventory.brownBetty -= 1;
        Ramesses.health += 5;
        itemNumber.innerText = "X " + Ramesses.inventory.brownBetty; 
        healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        console.log("Healing has happened")
        x()
    }
}

const bandage = (X) => {

}

// NPC ACTIONS -----------------
const attackR = (x) => {
    
    let strikechance = x.aimBonus + randN(x.combat);
    if (strikechance >= Ramesses.athl/2){
        damagedAni()
        damagedSFX()
        setTimeout(() => {
            Ramesses.health -= (2 + randN(x.str));
        x.aimBonus = 0;
        gameMessage.innerText = x.name + "'s attack hit " + "Ramess health: " + Ramesses.health; 
        healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
        console.log("attack happened")
        }, 750);
        
    } else {
        setTimeout(() => {
            x.aimBonus = 0;
            gameMessage.innerText = x.name + " Missed, Now's your chance!";
            missSFX2()
            console.log("missed happened")
        }, 1000);   
    }      
}

const aim = (x) => {
    setTimeout(() => {
        aimingSFX()
        x.aimBonus +=2;
        gameMessage.innerText = "Looks like " + x.name + " is taking aim!  " + x.aimBonus;
        console.log("aim happened")
    }, 1000); 
}

const cocaine = (x) => {
    setTimeout(() => {
        snortSFX()
        x.combat += 2;
        x.str += 2;
        x.health += 5;
        gameMessage.innerText = x.name + " took a bump!"
        console.log("Bump!!")
    }, 800);
}

const badAi = () =>{
    let delay = (y) => {
        setTimeout(() => {
            let picker = versus[y].actions.length +1;
            let i = randN(picker) -1;
            versus[y].actions[i](versus[y])
            console.log(y)
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
    if (versus.length == 1) {
        if (isGameOver(versus[0].health)){
                endFight("Ramesses Wins")
                return
            }
        } else if (versus.length == 2) {
            if (versus[1].health <= 0){
                versus.pop();
                enemyImage.removeAttribute("style");
                enemyImage1.style.display="none";
                enemyImage2.style.display="none";
                enemyImage.style.backgroundImage = versus[0].image;
        }  else if (versus[0].health <= 0){
                versus.shift();
                enemyImage.removeAttribute("style");
                enemyImage1.style.display="none";
                enemyImage2.style.display="none";
                enemyImage.style.backgroundImage = versus[0].image;
        } 
        }
        
}

let fight = () => {
    // document.getElementById("ooc").style.display="none";
    // document.getElementById("combat").removeAttribute("style");
    // document.getElementById("ene2").removeAttribute("style");
    itemNumber.innerText = "X " + Ramesses.inventory.brownBetty; 
    healthNumber.innerText = Ramesses.health + " / " + Ramesses.orighealth;
    monsterGeny();
    if (versus.length == 2){
        enemyImage1.removeAttribute("style")
        enemyImage2.removeAttribute("style")
        enemyImage.style.display="none";
        enemyImage1.style.backgroundImage = versus[0].image;
        enemyImage2.style.backgroundImage = versus[1].image;
        gameMessage.innerText = versus[0].snaps[randN0(4)];
        
    } else {
        enemyImage.removeAttribute("style");
        enemyImage1.style.display="none";
        enemyImage2.style.display="none";
        enemyImage.style.backgroundImage = versus[0].image;
        gameMessage.innerText = versus[0].snaps[randN0(4)];  
    }
     
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


// ---------------------------
// ------ GAME START ---------
// ---------------------------


fight()