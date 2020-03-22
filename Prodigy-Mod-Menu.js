alert("INJECTED")
alert("Thank You For Using GameHackerC's Prodigy Mod Menu!")
javascript:!function(){var checkKeyPressed=e=>{console.log(e.key),
"a"==e.key&&solve(document.querySelector(".questions-text-alignment").childNodes[0].data+"x"+document.querySelector
(".questions-text-alignment").childNodes[2].data)};function solve(func){var out=document.querySelector
(".questions-input-adjustment");if(console.log(out),"H"!=func[1]){func=func.replace("%C3%97","*"),
func=func.replace("%C3%B7","/");var sides=func.split("=");console.log(sides);var tokens=tokenize(sides);console.log(tokens);
var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));console.log(fixedTokens),out.value=eval(evalify(fixedTokens[1]))}
else out.value=parseInt(func.split(" ")[3])/2}function evalify(e){for(var t="",s=0;s<e.length;s++)t+=e[s].type+e[s].val.toString();
return t}function tokenize(e){for(var t=e[0].split(" "),s=e[1].split(" "),l=[],n=[],o=1;o<t.length;o+=2){let e=parseInt(t[o]);
if(e=isNaN(e)?"x":e,1==o)l.push({type:"+",val:e});else switch(t[o-1]){case"+":l.push({type:"+",val:e});
break;case"-":l.push({type:"-",val:e});break;case"*":l.push({type:"*",val:e});break;case"/":l.push({type:"/",val:e})}}
for(o=1;o<s.length-1;o+=2){let e=parseInt(s[o]);if(e=isNaN(e)?"x":e,1==o)n.push({type:"+",val:e});else switch(s[o-1])
{case"+":n.push({type:"+",val:e});break;case"-":n.push({type:"-",val:e});break;case"*":n.push({type:"*",val:e});break;case"/":n.push
({type:"/",val:e})}}return[l,n]}function solveTokens(e){for(var t=e[0],s=e[1],l={"+":"-","-":"+","*":"/","/":"*"},n=0;n<t.length;n++)
{let e=t[n];if("x"==e.val&&"*"==e.type){let e=t[n].type;t[n].type=t[n-1].type,t[n-1].type=e;let s=t[n-1];t[n-1]=t[n],t[n]=s}}
for(n=0;n<s.length;n++){let e=s[n];if("x"==e.val&&"*"==e.type){let e=s[n].type;s[n].type=s[n-1].type,s[n-1].type=e;let 
t=s[n-1];s[n-1]=s[n],s[n]=t}}for(n=0;n<t.length;n++){let e=t[n];"x"!=e.val&&(s.push({val:e.val,type:l[e.type]}),t.splice(n,1),n--)}
for(n=0;n<s.length;n++){let e=s[n];"x"==e.val&&(t.push({val:e.val,type:l[e.type]}),s.splice(n,1),n--)}if("-"==t[0].type){t[0].type="+";
for(n=0;n<s.length;n++)s[n].type=l[s[n].type]}return[t,s]}window.solvetet=function(func){var sides=func.split(" = ")
;console.log(sides);var tokens=tokenize(sides);console.log(tokens);var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));
return console.log(fixedTokens),eval(evalify(fixedTokens[1]))},window.addEventListener("keydown",checkKeyPressed,!1)}();
a=["outfit", "hat", "boots", "weapon", "spellRelic", "fossil"];
for (u of a) {
    PIXI.game.prodigy.player.backpack.data[u]=[];
    x = PIXI.game.state.states.Boot._gameData[u];
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data[u][i] = {"ID": x[i].ID, "N": 1};
    }
}

// special cases
PIXI.game.prodigy.player.backpack.data.currency=[];
x = PIXI.game.state.states.Boot._gameData.currency;
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.currency[i] = {"ID": x[i].ID, "N": 99999999};
}

// furniture
PIXI.game.prodigy.player.house.data.items = []
x = PIXI.game.state.states.Boot._gameData.dorm
for (i in x) {
    PIXI.game.prodigy.player.house.data.items[x[i]["ID"]] = {A: [], N: 999}
}

PIXI.game.prodigy.player.backpack.data.follow=[];
x = PIXI.game.state.states.Boot._gameData.follow;
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.follow[i] = {"ID": x[i].ID};
}

// Gives player all items.
PIXI.game.prodigy.player.backpack.data.item=[];
x = PIXI.game.state.states.Boot._gameData.item;
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.item[i] = {"ID": x[i].ID, "N": 99999999};
}
function closeit(){ 
prodigydiv.remove()
} 
setTimeout("closeit", 3000);
function FreeMembership(){
PIXI.game.prodigy.player.it=true
}
function FreeAtSchool(){
PIXI.game.prodigy.classModeController.lockedZones=0
}
function TrialmastersGear() {
PIXI.game.prodigy.player.backpack.data.outfit.push({"N":999999,"ID":24});
PIXI.game.prodigy.player.backpack.data.boots.push({"N":999999,"ID":18});
PIXI.game.prodigy.player.backpack.data.hat.push({"N":999999,"ID":23});
PIXI.game.prodigy.player.backpack.data.weapon.push({"N":1,"ID":47});
}
function GodMode() {
PIXI.game.prodigy.player.modifiers.damage=5000000;
PIXI.game.prodigy.player.modifiers.maxHearts=5000000;
}
function LeaveBattle() {
PIXI.game.prodigy.debugMisc.escapeBattle();
}
function FillEnergy() {
PIXI.game.prodigy.debugMisc.setBattleEnergy(10);
}
function TeleportPlayer(e) {

    e = e || window.event;

    if (e.keyCode == '33') {
PIXI.game.prodigy.user.x=PIXI.game.input.mousePointer.position.x
PIXI.game.prodigy.user.y=PIXI.game.input.mousePointer.position.y
    }
}
document.onkeydown = TeleportPlayer;
function setLevel() {
  PIXI.game.prodigy.player.data.level = prompt("What level do you want to be?", "100");
}
function levelUpPets() {
    for (let PetLoopTest = 0; PetLoopTest < PIXI.game.prodigy.player.kennel.data.length; PetLoopTest++) { 
     PIXI.game.prodigy.player.kennel.data[PetLoopTest].level=10
    };
}
function SuperPowerfulStuff() {
x = PIXI.game.state.states.Boot._gameData.affix
for (i in x) {
    PIXI.game.state.states.Boot._gameData.affix[i].data.value=1000
PIXI.game.state.states.Boot._gameData.affix[i].data.valuePercent=1000.00
}
}

function setLocation() {
  PIXI.game.prodigy.player.locationSelectionType = prompt("What will your location string be?", "your kitchen making a sandwich");
}
function setNickname() {
  PIXI.game.state.states.Boot._gameData.nickname[PIXI.game.prodigy.player.name.nickname] = prompt("Set your clientside nickname (nobody else can see it but you) here.", "{first} {last}, but you can call me Einstein");
}
function getallItem() {
PIXI.game.prodigy.player.backpack.data.item=[]
x = PIXI.game.state.states.Boot._gameData.item
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.item[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallCurrency() {
PIXI.game.prodigy.player.backpack.data.currency=[]
x = PIXI.game.state.states.Boot._gameData.currency
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.currency[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallFollow() {
PIXI.game.prodigy.player.backpack.data.follow=[]
x = PIXI.game.state.states.Boot._gameData.follow
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.follow[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallOutfit() { //so yall can shut up
PIXI.game.prodigy.player.backpack.data.outfit=[]
x = PIXI.game.state.states.Boot._gameData.outfit
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.outfit[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallRelic() { //these arent spell relics but i dont know what they are
PIXI.game.prodigy.player.backpack.data.relic=[]
x = PIXI.game.state.states.Boot._gameData.relic
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.relic[i] = {"ID": x[i].ID, "N": 999999999}
}
}
var prodigydiv = document.createElement("prodigydiv");
prodigydiv.style.width = "100px";
prodigydiv.style.height = "100px";
prodigydiv.style.color = "black";
prodigydiv.innerHTML = '<a href="javascript:prodigydiv.remove();"> <font color="red">|Close|</font> </a> <a href="javascript:LeaveBattle();"><font color="red"> |Leave Battle| </font></a><a href="javascript:window.PIXI.game.prodigy.user.source.data.level=100"><font color="red">|Level 100 Player|</font><a href="javascript:GodMode();"> <font color="red">|God Mode|</font> </a><a href="javascript:FreeMembership();"> <font color="red">|Free Membership|</font> <a href="javascript:FillEnergy();"><font color="red">|Fill Energy|</font></a> <a href="javascript:PIXI.game.prodigy.debugMisc.getAllPets();"><font color="red">|Get All Pets|</font></a><a href="javascript:FreeAtSchool()"><font color="red"> |Unlock All Zones|</font></a><a href="javascript:levelUpPets()"><font color="red"> |Level 100 Pets|</font></a><a href="javascript:getallFollow()"> <font color="red">|Get All Buddies|</font></button><a href="javascript:getallItem()"> <font color="red">|Get All Items|</font></a><a href="javascript:getallCurrency()"> <font color="red">|Get All Currencies|</font></a>';
javascript:!function(){var checkKeyPressed=e=>{console.log(e.key),
"a"==e.key&&solve(document.querySelector(".questions-text-alignment").childNodes[0].data+"x"+document.querySelector
(".questions-text-alignment").childNodes[2].data)};function solve(func){var out=document.querySelector
(".questions-input-adjustment");if(console.log(out),"H"!=func[1]){func=func.replace("%C3%97","*"),
func=func.replace("%C3%B7","/");var sides=func.split("=");console.log(sides);var tokens=tokenize(sides);console.log(tokens);
var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));console.log(fixedTokens),out.value=eval(evalify(fixedTokens[1]))}
else out.value=parseInt(func.split(" ")[3])/2}function evalify(e){for(var t="",s=0;s<e.length;s++)t+=e[s].type+e[s].val.toString();
return t}function tokenize(e){for(var t=e[0].split(" "),s=e[1].split(" "),l=[],n=[],o=1;o<t.length;o+=2){let e=parseInt(t[o]);
if(e=isNaN(e)?"x":e,1==o)l.push({type:"+",val:e});else switch(t[o-1]){case"+":l.push({type:"+",val:e});
break;case"-":l.push({type:"-",val:e});break;case"*":l.push({type:"*",val:e});break;case"/":l.push({type:"/",val:e})}}
for(o=1;o<s.length-1;o+=2){let e=parseInt(s[o]);if(e=isNaN(e)?"x":e,1==o)n.push({type:"+",val:e});else switch(s[o-1])
{case"+":n.push({type:"+",val:e});break;case"-":n.push({type:"-",val:e});break;case"*":n.push({type:"*",val:e});break;case"/":n.push
({type:"/",val:e})}}return[l,n]}function solveTokens(e){for(var t=e[0],s=e[1],l={"+":"-","-":"+","*":"/","/":"*"},n=0;n<t.length;n++)
{let e=t[n];if("x"==e.val&&"*"==e.type){let e=t[n].type;t[n].type=t[n-1].type,t[n-1].type=e;let s=t[n-1];t[n-1]=t[n],t[n]=s}}
for(n=0;n<s.length;n++){let e=s[n];if("x"==e.val&&"*"==e.type){let e=s[n].type;s[n].type=s[n-1].type,s[n-1].type=e;let 
t=s[n-1];s[n-1]=s[n],s[n]=t}}for(n=0;n<t.length;n++){let e=t[n];"x"!=e.val&&(s.push({val:e.val,type:l[e.type]}),t.splice(n,1),n--)}
for(n=0;n<s.length;n++){let e=s[n];"x"==e.val&&(t.push({val:e.val,type:l[e.type]}),s.splice(n,1),n--)}if("-"==t[0].type){t[0].type="+";
for(n=0;n<s.length;n++)s[n].type=l[s[n].type]}return[t,s]}window.solvetet=function(func){var sides=func.split(" = ")
;console.log(sides);var tokens=tokenize(sides);console.log(tokens);var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));
return console.log(fixedTokens),eval(evalify(fixedTokens[1]))},window.addEventListener("keydown",checkKeyPressed,!1)}();

document.body.insertBefore(prodigydiv, document.body.firstChild);
