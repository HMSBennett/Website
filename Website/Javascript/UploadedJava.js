//
//NameSetup System
//

var nameChoice;
var named = false;

function On_Load(){
  nameChoice = localStorage.getItem("Name");
  NameReset();
  Update();
  Pictures();
}

function btn_ChooseName(){
    nameChoice = nameID.value;
    UpdateName();
    StoreName();
    named = true;
}

function NameReset(){
  document.getElementById('ChosenName').innerHTML = "Name: ";
}

function UpdateName(){
  document.getElementById('ChosenName').innerHTML = "Name: " + nameChoice;
}

function StoreName(){
  localStorage.setItem("Name", nameChoice);
}

//
//PlayCode System
//

var index = 0;
var currentRoom = 0;
var count = 0;
var rando = 0;

var foodChoice;
var drinkChoice;

var roomItems = false;
var toolBelt = false;
var docsID = false;
var escapeCodes = false;
var distressCodes = false;
var captainsPassword = false;
var pistol = false;
var incriminatingFiles = false;
var leavable = false;
var engineOn = false;
var capsCabin = false;
var capsComp = false;
var distressBeacon = false;
var escapeSystem = false;
var checkpointOne = false;
var deaths = 0;

function BridgeOne(){
  if (capsCabin == false){
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(51)'>" + 'Enter Captains Cabin' + "</button>" + "</br>";
  }
}
function BridgeTwo(){
  if (capsComp == false){
   document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(65)'>" + 'Access Captains Computer' + "</button>" + "</br>";
 }
}
function BridgeThree(){
  if (distressBeacon == false){
   document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(68)'>" + 'Send Out Distress Beacon' + "</button>" + "</br>";
 }
}
function BridgeFour(){
  if (escapeSystem == false){
   document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(69)'>" + 'Activate Escape System' + "</button>" + "</br>";
 }
}

function ExtraButtons(){
  if (docsID == true && currentRoom == 41){
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(43)'>" + 'Open With ID' + "</button>" + "</br>";
  }else if (docsID == true && currentRoom == 78) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(80)'>" + 'Open With ID' + "</button>" + "</br>";
  }else if (escapeCodes == true && currentRoom == 69) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(50)'>" + 'Activate Escape Pod' + "</button>" + "</br>";
  }else if (distressCodes == true && currentRoom == 68) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(50)'>" + 'Activate Distress Beacon' + "</button>" + "</br>";
    distressBeacon = true;
  }else if (captainsPassword == true && currentRoom == 65) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(67)'>" + 'Use Password: Delta Tango - 49726' + "</button>" + "</br>";
  }else if (leavable == true && currentRoom == 50) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(71)'>" + 'Head To Escape Hatch' + "</button>" + "</br>";
  }else if (engineOn == true && currentRoom == 40) {
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(45)'>" + 'Leave Engine Room' + "</button>" + "</br>";
  }else if (currentRoom == 50){
    BridgeOne();
    BridgeTwo();
    BridgeThree();
    BridgeFour();
  }else if (currentRoom == 74 && checkpointOne == true){
    document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom(38)'>" + 'Checkpoint' + "</button>" + "</br>";
  }
}

function Update(){

  document.getElementById('shipStory').innerHTML = shipArray[currentRoom].text;
  document.getElementById("shipChoices").innerHTML = "";

if (currentRoom == 5){
  localStorage.setItem("Food", foodChoice);
}

if (currentRoom == 6 || currentRoom == 7 || currentRoom == 13 || currentRoom == 19 || currentRoom == 26 || currentRoom == 27 || currentRoom == 35 || currentRoom == 52 || currentRoom == 54 || currentRoom == 70){
  deaths += 1
  document.getElementById('DeathCount').innerHTML = "Death Count: " + deaths;
}
if (currentRoom == 36 || currentRoom == 37){
  checkpointOne = true;
}
if (currentRoom == 73){
  document.getElementById('DeathCount').innerHTML = "People Murdered: " + deaths;
}

  for(var i = 0; i < shipArray[currentRoom].choices.length; i++){
        document.getElementById('shipChoices').innerHTML += "<button class='choiceButton' onclick='SelectRoom("+ shipArray[currentRoom].choices[i].index +")'>" + shipArray[currentRoom].choices[i].text + "</button>" + "</br>";
  }

  ExtraButtons();
}

function SelectRoom(index){
  currentRoom = index;
  Update();
  MainScript();
  Pictures();
}


function Pictures(){
  if (currentRoom == 1){
    imgSpace.src = "../Website/images/Watch.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 16){
    imgSpace.src = "../Website/images/Dr.GastlyID.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 38 || currentRoom == 39 || currentRoom == 81 || currentRoom == 82){
    imgSpace.src = "../Website/images/EngineOff.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 40 || currentRoom == 83){
    imgSpace.src = "../Website/images/EngineOn.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 65 || currentRoom == 68 || currentRoom == 69){
    imgSpace.src = "../Website/images/PasswordOne.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 10 || currentRoom == 11 || currentRoom == 12){
    imgSpace.src = "../Website/images/Split.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 67){
    imgSpace.src = "../Website/images/TopSecret.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 64){
    imgSpace.src = "../Website/images/Charts.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else if (currentRoom == 61 || currentRoom == 59){
    imgSpace.src = "../Website/images/Chest.png";
    imgSpace.style.height = '20%';
    imgSpace.style.width = '20%';
  }else {
    imgSpace.src = "../Website/images/Blank.png";
    imgSpace.style.height = '1px';
    imgSpace.style.width = '1px';
  }
}

function MainScript(){
  if (currentRoom == 0 || currentRoom == 1){
    document.getElementById('Items').innerHTML = ""
    count = 0;
    roomItems = false;
    toolBelt = false;
    docsID = false;
    escapeCodes = false;
    distressCodes = false;
    captainsPassword = false;
    capsUniform = false;
    incriminatingFiles = false;
    pistol = false;
    leavable = false;
    engineOn = false;
    capsCabin = false;
    checkpoint = false;
    document.getElementById('DeathCount').innerHTML = "Death Count: " + deaths;

    }else if (currentRoom == 5 && roomItems == false){

    rando = 1 + parseInt(Math.random() * 5);

    if(rando == 1){
      drinkChoice = "Lucozade";
      foodChoice = "Kinder Bueno";
      localStorage.setItem("Food", foodChoice);
    }else if(rando == 2){
      drinkChoice = "Water";
      foodChoice = "Apple";
      localStorage.setItem("Food", foodChoice);
    }else if(rando == 3){
      drinkChoice = "Chocolate Milkshake";
      foodChoice = "Brownie Bites";
      localStorage.setItem("Food", foodChoice);
    }else if(rando == 4){
      drinkChoice = "Apple Juice";
      foodChoice = "Carrot Sticks";
      localStorage.setItem("Food", foodChoice);
    }else if(rando == 5){
      drinkChoice = "Vodka";
      foodChoice = "Potatoes";
      localStorage.setItem("Food", foodChoice);
    }

    document.getElementById('Items').innerHTML += "Clothes, </br>" + drinkChoice + ",</br>" + foodChoice + ",</br>" + nameChoice + "\'s ID,</br>"
    roomItems = true;

    }else  if (currentRoom == 16 && docsID == false){
      document.getElementById('Items').innerHTML += "Dr.Gastly's ID',</br>"
      docsID = true;
    }else if (currentRoom == 32 && toolBelt == false){

    if (toolBelt == false){
      document.getElementById('Items').innerHTML += "Tool Belt,</br>"
      toolBelt = true;
    }else{
      document.getElementById('Items').innerHTML += ""
    }
  }else if (currentRoom == 38 && toolBelt == false){
    if (toolBelt == false){
      document.getElementById('Items').innerHTML += "Tool Belt,</br>"
      toolBelt = true;
    }else{
      document.getElementById('Items').innerHTML += ""
    }
  }else if (currentRoom == 67 && incriminatingFiles == false){
    document.getElementById('Items').innerHTML += "Incriminating Files,</br>"
    incriminatingFiles = true;
    capsComp = true;
  }else if (currentRoom == 58 && capsUniform == false){
    document.getElementById('Items').innerHTML += "Captains Uniform,</br>"
    capsUniform = true;
  } else if (currentRoom == 60 && escapeCodes == false && distressCodes == false && captainsPassword == false){
    document.getElementById('Items').innerHTML += "Escape Codes,</br>" + "Captains Password,</br>" + "Distress Codes,</br>";
    escapeCodes = true;
    captainsPassword = true;
    distressCodes = true;
    capsCabin = true;
  }else if ((currentRoom == 42 && pistol == false) || (currentRoom == 43 && pistol == false)){
    document.getElementById('Items').innerHTML += "Empty Pistol,</br>"
    pistol = true;
  }else if ((currentRoom == 79 && pistol == false) || (currentRoom == 80 && pistol == false)){
    document.getElementById('Items').innerHTML += "Loaded Pistol,</br>"
    pistol = true;
  }else if (currentRoom == 69 && leavable == false && escapeCodes == true){
    leavable = true;
  }else if (currentRoom == 39 && engineOn == false){
    engineOn = true;
  }
}

var shipArray = [
  // index 0
  {
    text:'Welcome to a BazzyMuffin Text Adventure. You have been hiding from the monsters, they are coming for you... </br></br>Good Luck...',
    choices:[
      {
        text: 'Begin',
        index:77
      }
  ]
},    // index 1
  {
    text:'You glance at your watch, it\'s broken, you\'re sure it\'s dark, hell it\'s always dark, you close your eyes, preparing yourself, bolstering your confidence, time to move, time to escape...',
    choices:[
      {
        text: 'Peer Through Vent',
        index:2
      },
      {
        text: 'Climb Out Vent',
        index:3
      }
    ]
  },    // index 2
    {
      text:'The coast looks clear, they aren\'t out there, they are, but not in sight. You shudder and carefully remove the vent cover, holding it as you drop the ground, you place it on the floor, you want your hidey hole open for quick use.',
      choices:[
        {
          text: 'Continue',
          index:4
        }
      ]
    },    // index 3
      {
        text:'The vent cover clatters to the ground, shattering on impact, you squirm further in the vent, hiding from the noise, you take another moment to swallow your fear, and climb out.',
        choices:[
          {
            text: 'Continue',
            index:4
          }
        ]
      },    // index 4
        {
          text:'You look around your room, it\'s dead silent, nothing moves. You glance at your bed, the covers shredded, the monsters aren\'t stupid, hiding under your covers can\'t protect you anymore...',
          choices:[
            {
              text: 'Search Room',
              index:5
            },
            {
              text: 'Leave Room',
              index:6
            }
          ]
        },    // index 5
          {
            text:'You frantically move across the room, grab a bag, and start stuffing it with a spare pair of clothes, you grab your ID off the desk, you\'ll need that to escape. You grab a drink and some food from your snack draw. You hear footsteps.',
            choices:[
              {
                text: 'Hide In Vent',
                index:7
              },
              {
                text: 'Hide Under Bed',
                index:8
              },
              {
                text: 'Hide Under Covers',
                index:9
              }
            ]
          },    // index 6
            {
              text:'You walk to the door, it\'s hanging off its hinges, you take a step outside, you hear a loud bang, you see a flash of light, you look down, you\'re bleeding, your body crumples to the ground, the light fades to darkness. It\'s always dark.',
              choices:[
                {
                  text: 'Death Consumes You',
                  index:74
                }
              ]
            },    // index 7
              {
                text:'A shape looms in the door, it glances around the room, you can see it\'s misshapen feet, it takes a step, a hollow bang reverberates through the room, echoing through your heart. It steps towards the bed, then in a flash attacks the vent, tearing into it and the wall, it slices your leg, you scream out, and before you know it your body is hanging from the vent, you watch, confused by the perspective, you realise, you\'ve been decapitated, the light fades to darkness. It\'s always dark.',
                choices:[
                  {
                    text: 'Death Consumes You',
                    index:74
                  }
                ]
              },    // index 8
                {
                  text:'A shape looms in the door, it glances around the room, you can see it\'s misshapen feet, it takes a step, a hollow bang reverberates through the room, echoing through your heart. It steps towards the bed, it flips the bed, throwing you into the wall, you stifle a yell, it didn\'t notice you, you lie under the tipped over bed, the monster growls and turns, it leaves the room, you let out a breath you didn\'t know you were holding.',
                  choices:[
                    {
                      text: 'Leave Room',
                      index:10
                    }
                  ]
                },    // index 9
                  {
                    text:'A shape looms in the door, it glances around the room, you can see it\'s misshapen feet, it takes a step, a hollow bang reverberates through the room, echoing through your heart. It steps towards the bed, then in a flash attacks the vent, tearing into it and the wall, finding nothing the monster leaves the room, each footstep louder than your beating heart.',
                    choices:[
                      {
                        text: 'Leave Room',
                        index:10
                      }
                    ]
                  },    // index 10
                    {
                      text:'The corridor splits. Left to the Bridge. Right to the Engine Room.',
                      choices:[
                        {
                          text: 'Left To Bridge',
                          index:14
                        },
                        {
                          text: 'Right To Engine Room',
                          index:14
                        },
                        {
                          text: 'Wait And Consider Options',
                          index:11
                        }
                      ]
                    },    // index 11
                      {
                        text:'You wait, the options aren\'t great. Probably gruesome death either way.',
                        choices:[
                          {
                            text: 'Left To Bridge',
                            index:14
                          },
                          {
                            text: 'Right To Engine Room',
                            index:14
                          },
                          {
                            text: 'Try And Suss Out The Statistics',
                            index:12
                          }
                        ]
                      },    // index 12
                        {
                          text:'In a maze you stick to the the left wall, or was it right? What if i flip a coin? I don\'t have a coin...',
                          choices:[
                            {
                              text: 'Left To Bridge',
                              index:14
                            },
                            {
                              text: 'Right To Engine Room',
                              index:14
                            },
                            {
                              text: 'Which Is More Walking?',
                              index:13
                            }
                          ]
                        },    // index 13
                      {
                        text:'While being an idiot and waiting for some reason, the monster appear above you, squashing you underfoot, you body tears apart, like horses have been tied to your limbs and sent off in different directions, guts pouring out your mouth, covering your eyes.',
                        choices:[
                          {
                            text: 'Death Consumes You',
                            index:74
                          }
                        ]
                      },    // index 14
                        {
                          text:'You head right, it feels like the correct path to take. The corridor is long and dark, the lights still aren\'t working',
                          choices:[
                            {
                              text: 'Run Down Corridor',
                              index:15
                            },
                            {
                              text: 'Sneak Down Corridor',
                              index:16
                            }
                          ]
                        },    // index 15
                          {
                            text:'You run down the corridor, no point waiting around, you wanna get out, gotta go fast. You hope and pray to Poseidon that you won\'t get grabbed as you make your way down the corridor.',
                            choices:[
                              {
                                text: 'Peer Through Doorway',
                                index:17
                              }
                            ]
                          },    // index 16
                            {
                              text:'You crouch and slowly work your way down the corridor, no point running if you get nabbed. The hallway seems longer than you remember, where there this many alcoves? What\'s that? You find Dr.Gastly\'s ID, better grab that. You eventually reach the end of the corridor',
                              choices:[
                                {
                                  text: 'Peer Through Doorway',
                                  index:17
                                }
                              ]
                            },    // index 17
                              {
                                text:'You see an outline, its got to be one of them. You need to cross this room, but it\'s in the way...',
                                choices:[
                                  {
                                    text: 'Sneak To Cover',
                                    index:18
                                  },
                                  {
                                    text: 'Dash To Cover',
                                    index:21
                                  }
                                ]
                              },    // index 18
                                {
                                  text:'You crawl into cover, it didn\'t turn around, you\'re miles from safe, but you feel safe. Bravado fills your body, you could take him couldn\'t you, jump his quick like.',
                                  choices:[
                                    {
                                      text: 'Attempt Knockout',
                                      index:19
                                    },
                                    {
                                      text: 'Sneak To Next Corridor',
                                      index:20
                                    }
                                  ]
                                },    // index 19
                                  {
                                    text:'You step up behind the monster, raise your ' + localStorage.getItem("Food") + ' and smash it over its head...</br></br>It passes through, the monster looks you in the eye, its face is a blur, but it\'s eyes are bemused. It tears your head off, and stuffs it down your gaping neck hole.',
                                    choices:[
                                      {
                                        text: 'Death Consumes You',
                                        index:74
                                      }
                                    ]
                                  },    // index 20
                                    {
                                      text:'You skirt round the edge of the room, it doesn\'t see you, you can do this. Only a few more meters. Almost there.</br></br></br> Oh damn, it\'s looking right at you.',
                                      choices:[
                                        {
                                          text: 'RUN',
                                          index:24
                                        }
                                      ]
                                    },    // index 21
                                      {
                                        text:'The sight of the monster terrifies you, you dash to cover, you need to get by, sharpish.',
                                        choices:[
                                          {
                                            text: 'Hold Your Ground',
                                            index:22
                                          },
                                          {
                                            text: 'Sprint Across Room',
                                            index:23
                                          }
                                        ]
                                      },    // index 22
                                        {
                                          text:'Sneak or run, you have to get passed. Nothing else matters right now.',
                                          choices:[
                                            {
                                              text: 'Sneak To Next Corridor',
                                              index:20
                                            },
                                            {
                                              text: 'Sprint Across Room',
                                              index:23
                                            }
                                          ]
                                        },    // index 23
                                          {
                                            text:'You prepare yourself. Ready. Set. Go. You fly through the room, you hear the monster lumber around. It watches you. You enter the corridor. It comes for you...',
                                            choices:[
                                              {
                                                text: 'RUN',
                                                index:24
                                              }
                                            ]
                                          },    // index 24
                                            {
                                              text:'You stop to catch your breath, it\'s still coming. You\'ve given yourself a second.',
                                              choices:[
                                                {
                                                  text: 'Keep Running',
                                                  index:25
                                                },
                                                {
                                                  text: 'Enter Side Room',
                                                  index:28
                                                },
                                                {
                                                  text: 'Enter Engine Room',
                                                  index:34
                                                }
                                              ]
                                            },    // index 25
                                              {
                                                text:'You jog away, watching it approach over your shoulder. Until you run into a wall. It\'s a dead end. This part of the ship has been closed off for maintenance, you can\'t break through the door.',
                                                choices:[
                                                  {
                                                    text: 'Accept Death',
                                                    index:26
                                                  },
                                                  {
                                                    text: 'Cower Before Death',
                                                    index:27
                                                  }
                                                ]
                                              },    // index 26
                                                {
                                                  text:'You turn and face the monster. You roar defiantly, similar to a mighty lion. It tears into you. Tearing you asunder.',
                                                  choices:[
                                                    {
                                                      text: 'Death Consumes You',
                                                      index:74
                                                    }
                                                  ]
                                                },    // index 27
                                                  {
                                                    text:'You draw to the floor, curling up and crying for your mother. Mummy can\'t save you, no one can save you. The monster watches you with disgust. Before stomping you out of existence.',
                                                    choices:[
                                                      {
                                                        text: 'Death Consumes You',
                                                        index:74
                                                      }
                                                    ]
                                                  },    // index 28
                                                    {
                                                      text:'You duck into the side room, it\'s an office, probably for the lead engineer, you need to hide.',
                                                      choices:[
                                                        {
                                                          text: 'Hide Under Desk',
                                                          index:30
                                                        },
                                                        {
                                                          text: 'Hide In Cupboard',
                                                          index:29
                                                        }
                                                      ]
                                                    },    // index 29
                                                      {
                                                        text:'You jump in the Cupboard, it\'s full of tools that dig into your flesh, you restrain yourself from whimpering. The monster looks into the office. </br></br>  Then leaves back down the corridor.',
                                                        choices:[
                                                          {
                                                            text: 'Leave Hiding',
                                                            index:31
                                                          }
                                                        ]
                                                      },    // index 30
                                                        {
                                                          text:'You dive under the desk, curl up and patiently wait. The monster walks by the office without stopping.',
                                                          choices:[
                                                            {
                                                              text: 'Leave Hiding',
                                                              index:31
                                                            }
                                                          ]
                                                        },    // index 31
                                                          {
                                                            text:'The office is a mess, there is blood on the floor. Congealed in a pool under the desk.',
                                                            choices:[
                                                              {
                                                                text: 'Search Office',
                                                                index:32
                                                              },
                                                              {
                                                                text: 'Check Corridor',
                                                                index:33
                                                              }
                                                            ]
                                                          },    // index 32
                                                            {
                                                              text:'All the desks draws are locked. The Cupboard is full of tools, but they are all locked down. Doesn\'t matter anyway, fighting that thing would be suicide.',
                                                              choices:[
                                                                {
                                                                  text: 'Check Corridor',
                                                                  index:33
                                                                }
                                                              ]
                                                            },    // index 33
                                                              {
                                                                text:'You peek round the corner, the monster isn\'t the way you came, nor is he further down. The engine room is in front of you...',
                                                                choices:[
                                                                  {
                                                                    text: 'Enter Engine Room',
                                                                    index:37
                                                                  }
                                                                ]
                                                              },    // index 34
                                                                {
                                                                  text:'You dive into the engine room, it\'s pounding down the corridor behind you. Hide. You need to hide.',
                                                                  choices:[
                                                                    {
                                                                      text: 'Climb In Vent',
                                                                      index:35
                                                                    },
                                                                    {
                                                                      text: 'Hide Behing Pipes',
                                                                      index:36
                                                                    }
                                                                  ]
                                                                },    // index 35
                                                                  {
                                                                    text:'You dash to the wall, jumping up to tear the vent cover off. You manage to get it, triumphantly you turn to throw it at the approaching monster. It\'s not there. You hear a cough behind you. Followed by the sound of bones snapping, you look down, its hand is coming out off your stomach.',
                                                                    choices:[
                                                                      {
                                                                        text: 'Death Consumes You',
                                                                        index:74
                                                                      }
                                                                    ]
                                                                  },    // index 36
                                                                    {
                                                                      text:'You disappear behind a wall of pipes. You find a hole to peer through, the monster lumbers into view. It cocks it\'s head listening. Then turns and walks back into the corridor, after it\'s next victim.',
                                                                      choices:[
                                                                        {
                                                                          text: 'Look Around Room',
                                                                          index:38
                                                                        }
                                                                      ]
                                                                    },    // index 37
                                                                      {
                                                                        text:'You cross the hallway and enter the engine room. Its packed with pipes and parts.',
                                                                        choices:[
                                                                          {
                                                                            text: 'Look Around Room',
                                                                            index:38
                                                                          }
                                                                        ]
                                                                      },    // index 38
                                                                        {
                                                                          text:'You glance around the room. You need to restore the power, the tool belt you found should help. There is also a weapons locker, you wonder if it has anything inside',
                                                                          choices:[
                                                                            {
                                                                              text: 'Fix Power Couplings',
                                                                              index:39
                                                                            },
                                                                            {
                                                                              text: 'Open Weapons Locker',
                                                                              index:78
                                                                            }
                                                                          ]
                                                                        },    // index 39
                                                                          {
                                                                            text:'As you have zero skills as an engineer you try to tighten things with your adjustable spanner. Occasionally smashing it into a pipe or component. You eventually see a button labelled power',
                                                                            choices:[
                                                                              {
                                                                                text: 'Push Button',
                                                                                index:40
                                                                              }
                                                                            ]
                                                                          },    // index 40
                                                                            {
                                                                              text:'The engine whirs to life, hopefully there should be power throughout the ship now, enough to escape. Now you just need to activate the escape pods on the Bridge.',
                                                                              choices:[
                                                                                {
                                                                                  text: 'Open Weapons Locker',
                                                                                  index:41
                                                                                }
                                                                              ]
                                                                            },    // index 41
                                                                              {
                                                                                text:'You approach the weapons locker. Of course it\'s locked.',
                                                                                choices:[
                                                                                  {
                                                                                    text: 'Break Lock',
                                                                                    index:42
                                                                                  }
                                                                                ]
                                                                              },    // index 42
                                                                                {
                                                                                  text:'The lock breaks under your supreme strength, there is only one pistol, you grab it and check the magazine. Of course, it\'s empty...',
                                                                                  choices:[
                                                                                    {
                                                                                      text: 'Scream In Frustration',
                                                                                      index:44
                                                                                    },
                                                                                    {
                                                                                      text: 'Laugh At Your Misfortune',
                                                                                      index:44
                                                                                    }
                                                                                  ]
                                                                                },    // index 43
                                                                                  {
                                                                                    text:'The lock opens with Dr.Gastly\'s ID, there is only one pistol, you grab it and check the magazine. Of course, it\'s empty...',
                                                                                    choices:[
                                                                                      {
                                                                                        text: 'Scream In Frustration',
                                                                                        index:44
                                                                                      },
                                                                                      {
                                                                                        text: 'Laugh At Your Misfortune',
                                                                                        index:44
                                                                                      }
                                                                                    ]
                                                                                  },    // index 44
                                                                                    {
                                                                                      text:'You calm yourself, time to get on with this.',
                                                                                      choices:[
                                                                                        {
                                                                                          text: 'Leave Engine Room',
                                                                                          index:45
                                                                                        }
                                                                                      ]
                                                                                    },    // index 45
                                                                                      {
                                                                                        text:'You peer round the doorway, it\'s clear, time to head back. You make it to the room, empty. Where is it? You make it back to the split.',
                                                                                        choices:[
                                                                                          {
                                                                                            text: 'Left To Bridge',
                                                                                            index:46
                                                                                          }
                                                                                        ]
                                                                                      },    // index 46
                                                                                        {
                                                                                          text:'You look at the corridor, is the monster down there?',
                                                                                          choices:[
                                                                                            {
                                                                                              text: 'Sneak Down Corridor',
                                                                                              index:47
                                                                                            },
                                                                                            {
                                                                                              text: 'Run Down Corridor',
                                                                                              index:48
                                                                                            }
                                                                                          ]
                                                                                        },    // index 47
                                                                                          {
                                                                                            text:'As you make your way down the corridor, you notice a side door, you stop to look at it. The escape bay. This is how you get out, you just need to finish your chores.',
                                                                                            choices:[
                                                                                              {
                                                                                                text: 'Continue Down Corridor',
                                                                                                index:48
                                                                                              }
                                                                                            ]
                                                                                          },    // index 48
                                                                                            {
                                                                                              text:'You reach the end of the corridor. The bridges door is open, you look inside, it looks clear.',
                                                                                              choices:[
                                                                                                {
                                                                                                  text: 'Enter Bridge',
                                                                                                  index:49
                                                                                                }
                                                                                              ]
                                                                                            },    // index 49
                                                                                              {
                                                                                                text:'As you step onto the bridge, blood and decay assaults your nose. So strong you almost throw up. You take a second to settle your stomach.',
                                                                                                choices:[
                                                                                                  {
                                                                                                    text: 'Look Around Bridge',
                                                                                                    index:50
                                                                                                  }
                                                                                                ]
                                                                                              },    // index 50
                                                                                                {
                                                                                                  text:'You need to get off this tub. Activate the life pods.',
                                                                                                  choices:[
                                                                                                    {
                                                                                                      text: 'Check Ship\'s Course',
                                                                                                      index:64
                                                                                                    }
                                                                                                  ]
                                                                                                },    // index 51
                                                                                                  {
                                                                                                    text:'You make your way towards the Captain\'s Cabin, checking around corners, making sure it\'s safe. You feel pride for your caution as a monster appears in your path. This pride is quickly replaced by fear.',
                                                                                                    choices:[
                                                                                                      {
                                                                                                        text: 'Sneak Around',
                                                                                                        index:52
                                                                                                      },
                                                                                                      {
                                                                                                        text: 'Distract It With Shoe',
                                                                                                        index:52
                                                                                                      },
                                                                                                      {
                                                                                                        text: 'Leave Captain\'s Cabin',
                                                                                                        index:50
                                                                                                      },
                                                                                                      {
                                                                                                        text: 'Attempt Knockout',
                                                                                                        index:53
                                                                                                      }
                                                                                                    ]
                                                                                                  },    // index 52
                                                                                                    {
                                                                                                      text:'Well that didn\'t work. The monster turns towards you, it does not look pleased. You swallow loudly, as the monster picks you up, and tears you in two. Throwing your remains across the room.',
                                                                                                      choices:[
                                                                                                        {
                                                                                                          text: 'Death Consumes You',
                                                                                                          index:74
                                                                                                        }
                                                                                                      ]
                                                                                                    },    // index 53
                                                                                                      {
                                                                                                        text:'You move behind the monster, and swing your ' + localStorage.getItem("Food") + ' into the back of its head. The monster disappears into smoke, and you end up smashing your food on the ground.',
                                                                                                        choices:[
                                                                                                          {
                                                                                                            text: 'Have A Nap',
                                                                                                            index:54
                                                                                                          },
                                                                                                          {
                                                                                                            text: 'Get Into Vent',
                                                                                                            index:61
                                                                                                          },
                                                                                                          {
                                                                                                            text: 'Ransack Room',
                                                                                                            index:56
                                                                                                          }
                                                                                                        ]
                                                                                                      },    // index 54
                                                                                                        {
                                                                                                          text:'You climb into the Captain\'s bed feeling exhausted. Too tired to fear death. You blink as the world fades to black.',
                                                                                                          choices:[
                                                                                                            {
                                                                                                              text: 'Darkness Consumes You',
                                                                                                              index:55
                                                                                                            }
                                                                                                          ]
                                                                                                        },    // index 55
                                                                                                          {
                                                                                                            text:'You wake up, feeling surprisingly refreshed, you look at your watch again. Unsurprisingly still broken. You climb out of bed.',
                                                                                                            choices:[
                                                                                                              {
                                                                                                                text: 'Ransack Room',
                                                                                                                index:56
                                                                                                              }
                                                                                                            ]
                                                                                                          },    // index 56
                                                                                                            {
                                                                                                              text:'Right, what can you steal from the Captain?',
                                                                                                              choices:[
                                                                                                                {
                                                                                                                  text: 'Look In Wardrobe',
                                                                                                                  index:57
                                                                                                                },
                                                                                                                {
                                                                                                                  text: 'Look In Chest',
                                                                                                                  index:61
                                                                                                                },
                                                                                                                {
                                                                                                                  text: 'Look In Desk',
                                                                                                                  index:60
                                                                                                                }
                                                                                                              ]
                                                                                                            },    // index 57
                                                                                                              {
                                                                                                                text:'You open the Captain\'s wardrobe. It\'s got his dress uniform in it, plus some space undergarments',
                                                                                                                choices:[
                                                                                                                  {
                                                                                                                    text: 'Put On Dress Uniform',
                                                                                                                    index:58
                                                                                                                  }
                                                                                                                ]
                                                                                                              },    // index 58
                                                                                                                {
                                                                                                                  text:'What else might i need?',
                                                                                                                  choices:[
                                                                                                                    {
                                                                                                                      text: 'Look In Wardrobe',
                                                                                                                      index:57
                                                                                                                    },
                                                                                                                    {
                                                                                                                      text: 'Look In Chest',
                                                                                                                      index:59
                                                                                                                    },
                                                                                                                    {
                                                                                                                      text: 'Look In Desk',
                                                                                                                      index:60
                                                                                                                    }
                                                                                                                  ]
                                                                                                                },    // index 59
                                                                                                                  {
                                                                                                                    text:'You peer into the chest. Just a bottle of brandy. No need for that.',
                                                                                                                    choices:[
                                                                                                                      {
                                                                                                                        text: 'Look In Wardrobe',
                                                                                                                        index:57
                                                                                                                      },
                                                                                                                      {
                                                                                                                        text: 'Look In Chest',
                                                                                                                        index:59
                                                                                                                      },
                                                                                                                      {
                                                                                                                        text: 'Look In Desk',
                                                                                                                        index:60
                                                                                                                      }
                                                                                                                    ]
                                                                                                                  },    // index 60
                                                                                                                    {
                                                                                                                      text:'You find several sets of codes, Escape Codes, The Captain\'s PC Password and Distress Codes.',
                                                                                                                      choices:[
                                                                                                                        {
                                                                                                                          text: 'Leave Captain\'s Cabin',
                                                                                                                          index:50
                                                                                                                        }
                                                                                                                      ]
                                                                                                                    },    // index 61
                                                                                                                      {
                                                                                                                        text:'You climb into the vent, you\'re not sure why. But it\'s been safe for you before.',
                                                                                                                        choices:[
                                                                                                                          {
                                                                                                                            text: 'Feel Silly And Climb Out',
                                                                                                                            index:53
                                                                                                                          },
                                                                                                                          {
                                                                                                                            text: 'Stay In Vent',
                                                                                                                            index:62
                                                                                                                          }
                                                                                                                        ]
                                                                                                                      },    // index 62
                                                                                                                        {
                                                                                                                          text:'Better here than out with the monster, what\'s it going to do if your up hear, can\'t tear someone apart in a small space.',
                                                                                                                          choices:[
                                                                                                                            {
                                                                                                                              text: 'Feel Silly And Climb Out',
                                                                                                                              index:53
                                                                                                                            },
                                                                                                                            {
                                                                                                                              text: 'Stay In Vent',
                                                                                                                              index:63
                                                                                                                            }
                                                                                                                          ]
                                                                                                                        },    // index 63
                                                                                                                          {
                                                                                                                            text:'I wonder if i stay here, will someone come rescue me?',
                                                                                                                            choices:[
                                                                                                                              {
                                                                                                                                text: 'Feel Silly And Climb Out',
                                                                                                                                index:53
                                                                                                                              },
                                                                                                                              {
                                                                                                                                text: 'Stay In Vent',
                                                                                                                                index:70
                                                                                                                              }
                                                                                                                            ]
                                                                                                                          },    // index 64
                                                                                                                            {
                                                                                                                              text:'You study the charts, The ship doesn\'t seem to be progressing along its course. It\'s barely moving, drifting freely through space.',
                                                                                                                              choices:[
                                                                                                                                {
                                                                                                                                  text: 'Leave Charts',
                                                                                                                                  index:50
                                                                                                                                }
                                                                                                                              ]
                                                                                                                            },    // index 65
                                                                                                                              {
                                                                                                                                text:'You wake the Captain\'s Computer. It\'s locked.',
                                                                                                                                choices:[
                                                                                                                                  {
                                                                                                                                    text: 'Try Password: Chicken Nugget',
                                                                                                                                    index:66
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    text: 'Try Password: SpaceIsCool1',
                                                                                                                                    index:66
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    text: 'Leave PC',
                                                                                                                                    index:50
                                                                                                                                  }
                                                                                                                                ]
                                                                                                                              },    // index 66
                                                                                                                                {
                                                                                                                                  text:'Incorrect Password',
                                                                                                                                  choices:[
                                                                                                                                    {
                                                                                                                                      text: 'Try Again?',
                                                                                                                                      index:65
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                      text: 'Leave PC',
                                                                                                                                      index:50
                                                                                                                                    }
                                                                                                                                  ]
                                                                                                                                },    // index 67
                                                                                                                                  {
                                                                                                                                    text:'Password Correct. You open recent files. The Captain had orders, orders not from Admiral Bennett. He was going to nuke a colony planet. The Captain was a terrorist? You store the incriminating files',
                                                                                                                                    choices:[
                                                                                                                                      {
                                                                                                                                        text: 'Leave PC',
                                                                                                                                        index:50
                                                                                                                                      },
                                                                                                                                    ]
                                                                                                                                  },    // index 68
                                                                                                                                    {
                                                                                                                                      text:'You approach a work station. Insert distress codes to send out distress beacon.',
                                                                                                                                      choices:[
                                                                                                                                        {
                                                                                                                                          text: 'Leave Workstation',
                                                                                                                                          index:50
                                                                                                                                        }
                                                                                                                                      ]
                                                                                                                                    },    // index 69
                                                                                                                                      {
                                                                                                                                        text:'You approach the Lieutenants work station. Insert escape codes to activate escape system.',
                                                                                                                                        choices:[
                                                                                                                                          {
                                                                                                                                            text: 'Leave Workstation',
                                                                                                                                            index:50
                                                                                                                                          }
                                                                                                                                        ]
                                                                                                                                      },    // index 70
                                                                                                                                        {
                                                                                                                                          text:'Yeah this vents comfy, just have a nap. you\'re safe. It\'s cool.',
                                                                                                                                          choices:[
                                                                                                                                            {
                                                                                                                                              text: 'Death Consumes You',
                                                                                                                                              index:74
                                                                                                                                            }
                                                                                                                                          ]
                                                                                                                                        },    // index 71
                                                                                                                                          {
                                                                                                                                            text:'The power is on, the escape pod is primed. Time to get of this tub.',
                                                                                                                                            choices:[
                                                                                                                                              {
                                                                                                                                                text: 'Enter Escape Pod',
                                                                                                                                                index:72
                                                                                                                                              }
                                                                                                                                            ]
                                                                                                                                          },    // index 72
                                                                                                                                            {
                                                                                                                                              text:'You climb into the escape pod. Now to go to sleep until you\'re rescued. Your eyes blink, ice overcomes you. Cryo-Sleep, is the best sleep.',
                                                                                                                                              choices:[
                                                                                                                                                {
                                                                                                                                                  text: 'Darkness Consumes You',
                                                                                                                                                  index:73
                                                                                                                                                }
                                                                                                                                              ]
                                                                                                                                            },    // index 73
                                                                                                                                              {
                                                                                                                                                text:'Admiral Bennett sits in his quarters. Watching the security footage from the passenger vessel, Barbara. No matter how many times he watches it, it doesnt get easier. Watching ' + localStorage.getItem("Name") + ' run around killing every crew member was hard. Watching him curl up in  a pile of corpses and go to sleep was harder. The Admiral signs a form on his desk. The immediete annihalation of the Barbara. This is the biggest tradegy in space faring history.',
                                                                                                                                                choices:[
                                                                                                                                                  {
                                                                                                                                                    text: 'END',
                                                                                                                                                    index:76
                                                                                                                                                  }
                                                                                                                                                ]
                                                                                                                                              },    // index 74
                                                                                                                                                {
                                                                                                                                                  text:'Death has taken you. But death is not the end...',
                                                                                                                                                  choices:[
                                                                                                                                                    {
                                                                                                                                                      text: 'Continue?',
                                                                                                                                                      index:1
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                      text: 'Quit?',
                                                                                                                                                      index:75
                                                                                                                                                    }
                                                                                                                                                  ]
                                                                                                                                                },    // index 75
                                                                                                                                                  {
                                                                                                                                                    text:'Thanks for playing. I hope you enjoyed this text based adventure.',
                                                                                                                                                    choices:[
                                                                                                                                                      {
                                                                                                                                                        text: 'Menu',
                                                                                                                                                        index:0
                                                                                                                                                      },
                                                                                                                                                      {
                                                                                                                                                        text: 'New Character',
                                                                                                                                                        index:77
                                                                                                                                                      }
                                                                                                                                                    ]
                                                                                                                                                  },    // index 76
                                                                                                                                                    {
                                                                                                                                                      text:'Thanks for playing. I hope you enjoyed this text based adventure. Well done on completing it. You didn\'t die once! Technically.',
                                                                                                                                                      choices:[
                                                                                                                                                        {
                                                                                                                                                          text: 'Menu',
                                                                                                                                                          index:0
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                          text: 'New Character',
                                                                                                                                                          index:77
                                                                                                                                                        }
                                                                                                                                                      ]
                                                                                                                                                    },     // index 77
                                                                                                                                                      {
                                                                                                                                                        text:'Choose Your Characters Name.</br></br></br></br> Name:' + '<input id="nameID" type="text" name="nameText" />' + '</br></br><input type="button" value="Choose Name" onclick="btn_ChooseName()"/>',
                                                                                                                                                        choices:[
                                                                                                                                                          {
                                                                                                                                                            text: 'Proceed',
                                                                                                                                                            index:1
                                                                                                                                                          }
                                                                                                                                                        ]
                                                                                                                                                      },     // index 78
                                                                                                                                                        {
                                                                                                                                                          text:'You approach the weapons locker. Of course its locked.',
                                                                                                                                                          choices:[
                                                                                                                                                            {
                                                                                                                                                              text: 'Break Lock',
                                                                                                                                                              index:79
                                                                                                                                                            }
                                                                                                                                                          ]
                                                                                                                                                        },     // index 79
                                                                                                                                                          {
                                                                                                                                                            text:'The lock breaks under your supreme strength, there is only one pistol, you grab it and check the magazine. It\'s loaded.',
                                                                                                                                                            choices:[
                                                                                                                                                              {
                                                                                                                                                                text: 'Breathe And Move On',
                                                                                                                                                                index:81
                                                                                                                                                              }
                                                                                                                                                            ]
                                                                                                                                                          },     // index 80
                                                                                                                                                            {
                                                                                                                                                              text:'The lock opens with Dr.Gastly\'s ID, there is only one pistol, you grab it and check the magazine. It\'s loaded.',
                                                                                                                                                              choices:[
                                                                                                                                                                {
                                                                                                                                                                  text: 'Breathe And Move On',
                                                                                                                                                                  index:81
                                                                                                                                                                }
                                                                                                                                                              ]
                                                                                                                                                            },     // index 81
                                                                                                                                                              {
                                                                                                                                                                text:'Now to turn on the power, then the Bridge.',
                                                                                                                                                                choices:[
                                                                                                                                                                  {
                                                                                                                                                                    text: 'Go To Engine',
                                                                                                                                                                    index:82
                                                                                                                                                                  }
                                                                                                                                                                ]
                                                                                                                                                              },     // index 82
                                                                                                                                                                {
                                                                                                                                                                  text:'As you have zero skills as an engineer you try to tighten things with your adjustable spanner. Occasionally smashing it into a pipe or component. You eventually see a button labelled power.',
                                                                                                                                                                  choices:[
                                                                                                                                                                    {
                                                                                                                                                                      text: 'Push Button',
                                                                                                                                                                      index:83
                                                                                                                                                                    }
                                                                                                                                                                  ]
                                                                                                                                                                },     // index 83
                                                                                                                                                                  {
                                                                                                                                                                    text:'The engine whirs to life, hopefully there should be power throughout the ship now, enough to escape. Now you just need to activate the escape pods on the Bridge.',
                                                                                                                                                                    choices:[
                                                                                                                                                                      {
                                                                                                                                                                        text: 'Leave Engine Room',
                                                                                                                                                                        index:45
                                                                                                                                                                      }
                                                                                                                                                                    ]
                                                                                                                                                                  },
                    ]
