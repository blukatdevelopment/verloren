/*##############################################################################
# Data passed to onSelect and checkVisibility functions for dialogue options
##############################################################################*/
DIALOGUE.Context = {};
DIALOGUE.Context.new = function(_player, _npc){
    let ctx = {
        player: _player,
        npc: _npc
    };
    return ctx;
};