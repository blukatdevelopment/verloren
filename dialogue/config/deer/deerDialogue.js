/*##############################################################################
# Things you can say to a deer
##############################################################################*/
DIALOGUE.Deer = {};

DIALOGUE.Deer.Merp = function(){
    UTILITY.openLinearDialogue([
      "The deer looks you up and down.",
      "The deer says. \"Merp!\"."
    ]);
};

DIALOGUE.Deer.Apple = function(){
    let nodes = [];
    nodes.push(DIALOGUE.Node.new("Merp", [])); // 0
    nodes.push(DIALOGUE.Node.new("*The deer drops an apple*", [])); // 1
    nodes.push(DIALOGUE.Node.new("Merp", [])); // 2
    nodes.push(DIALOGUE.Node.new("*Crunch crunch crunch* Merp!", [])); // 3
    nodes[0].options = [
        DIALOGUE.Option.new(
            "*Pet the deer.*",
            nodes[1],
            DIALOGUE.Deer.dropApple,
            null
        ),
        DIALOGUE.Option.new(
            "What's your name?",
            nodes[2],
            null,
            null
        ),
        DIALOGUE.Option.new(
            "Deer of the woods, tell me your wisdom.",
            nodes[2],
            null,
            null
        ),
        DIALOGUE.Option.new(
            "*Give the deer an apple.*",
            nodes[3],
            DIALOGUE.Deer.giveApple,
            DIALOGUE.Deer.canGiveApple
        ),

    ];
    nodes[1].options = [
        DIALOGUE.Option.new(
            "...",
            null,
            null,
            null
        ),
    ];
    nodes[2].options = [
        DIALOGUE.Option.new(
            "...",
            null,
            null,
            null
        ),
    ];
    nodes[3].options = [
        DIALOGUE.Option.new(
            "...",
            null,
            null,
            null
        ),
    ];
    return nodes;
};


DIALOGUE.Deer.dropApple = function(context){
    if(context == null || context.npc == null){
        return;
    }
    let deer = context.npc;
    deer.dropItem(ITEMS.create(ITEMS.Names.Apple, 1, 0));
};

DIALOGUE.Deer.canGiveApple = function(context){
    if(context == null || context.player == null){
        return;
    }
    return context.player.queryItemQuantity(ITEMS.Names.Apple) > 0;
};

DIALOGUE.Deer.giveApple = function(context){
    if(context == null || context.player == null){
        return;
    }
    context.player.removeItemQuantity(ITEMS.Names.Apple, 1);
};