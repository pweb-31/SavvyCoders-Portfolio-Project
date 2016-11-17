  var maincharacter = {};

  var sidekick = {
    "species" : "dog"
  };

  maincharacter.firstname = prompt( "what's your first name?");

  sidekick.firstname = prompt( "what is your favorite dog name?");

  var story = {
    "start" : {
      "narrative": maincharacter.firstname + " was walking their " + sidekick.species + " named " + sidekick.firstname + " down the street.  Suddenly they came in front of a house " + maincharacter.firstname + " had never noticed before.",
      "choices": {
        "good" : "walk up",
        "bad" : "not walk up"
      },
    },
    "walkUp" : {
      "narrative" : "Hey, I've never seen that place before.  Maybe we should go check it out! " + maincharacter.firstname + " said.",
      "choices": {
        "good" : "knock on the door",
        "bad" : "run away"
      },
    },
    "notWalkUp" : {
      "narrative" : "Nah, I changed my mind," + maincharacter.firstname + " said.  Let's go home instead.",
    },
    "knock on the door" : {
      "narrative" : maincharacter.firstname + " cautiously walked up to the house with " + sidekick.firstname + " trailing behind, whimpering.  Do you think we should knock on the door?, " + maincharacter.firstname + " said",
    },
    "run away" : {
      "narrative" : "On second thought, I'm not sure this is such a great idea, " + maincharacter.firstname + " said to his trusty " + sidekick.species + "."
    },
  };

  var runStory = function( storyNode ){
    alert( storyNode.narrative );

    if (storyNode.choices ){
        var promptString = "Will you " + storyNode.choices.good + " or " + storyNode.choices.bad + " ?"
        var response = prompt( promptString );

        if( response === storyNode.choices.good ){
          runStory( story [ storyNode.choices.good ] );
        }
        else if( response === storyNode.choices.bad ){
          runStory( story[ storyNode.choices.bad ] );
        }
        else{
          alert( "Give me something I can use!")

          runStory ( storyNode );
        }
      }
    };

    runStory( story.start );
