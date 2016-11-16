  var maincharacter = {};

  var sidekick = {
    "species" : "dog"
  };

  maincharacter.firstname = prompt( "what's your first name?");

  sidekick.firstname = prompt( "what is your favorite dog name?");

  var story = {
    "start" : {
      "narrative": maincharacter.firstname + " was walking their " + sidekick.species + " named " + sidekick.firstname + " down the street.  Suddenly they came in front of a house " + maincharacter.firstname + " had never noticed before.",
      "prompt": "Will you walk up or not walk up?",
    },
    "walkUp" : {
      "narrative" : "Hey, I've never seen that place before.  Maybe we should go check it out! " + maincharacter.firstname + " said.",
    },
    "notWalkUp" : {
      "narrative" : "Nah, I changed my mind.  Let's go home instead.",
    },
    "approach" : maincharacter.firstname + " cautiously walked up to the house with " + sidekick.firstname + " trailing behind, whimpering.",
    "door" : "On second thought, I'm not sure this is such a great idea, " + maincharacter.firstname + " said to his trusty " + sidekick.species + "."
  };

  alert( story.start.narrative );

  var response = prompt( story.start.prompt );

    if( response === "walk up"){
        alert( story.walkUp.narrative );
    }
    else if( response === "not walk up"){
        alert( story.notWalkUp.narrative );
    }
    else {alert( "Give me something I can use!" )
  };
