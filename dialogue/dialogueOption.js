/*##############################################################################
# A single option within a dialogue node
##############################################################################*/
DIALOGUE.Option = {};
DIALOGUE.Option.new = function(_text, _linkedNode, _onSelect, _visibilityCheck){
    let opt = {
        text: _text,
        linkedNode: _linkedNode,
        onSelect: _onSelect,
        visibilityCheck: _visibilityCheck
    };
    return opt;
};