/*##############################################################################
# Manages in-game UI
##############################################################################*/
UI.COMPONENTS.DialogueUIManager = {};
UI.COMPONENTS.DialogueUIManager.new = function(_parent){
    let dm = {
        activeDialogue: null,
        parent: _parent
    };
    dm.update = function(){
        if(dm.activeDialogue){
            dm.activeDialogue.update();
        }
    };
    dm.draw = function(){
        if(dm.activeDialogue){
            dm.activeDialogue.draw();
        }
    };
    dm.openLinearDialogue = function(messages){
        dm.parent.setActiveMenu(MENUS.Dialogue);
        dm.activeDialogue = UI.COMPONENTS.LinearDialogue.new(messages);
        SCENE.setGameState(GAMESTATES.playerMenus);
    };
    dm.openBranchingDialogue = function(nodes){
        dm.parent.setActiveMenu(MENUS.Dialogue);
        dm.activeDialogue = UI.COMPONENTS.BranchingDialogue.new(nodes);
        SCENE.setGameState(GAMESTATES.playerMenus);
    };
    dm.closeDialogue = function(){
        dm.parent.setActiveMenu(MENUS.None);
        SCENE.setGameState(GAMESTATES.play);
        dm.activeDialogue = null;
    };
    return dm;
};