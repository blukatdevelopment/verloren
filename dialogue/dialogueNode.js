/*##############################################################################
# A prompt and set of options.
##############################################################################*/
DIALOGUE.Node = {};
DIALOGUE.Node.new = function(_prompt, _options){
    let node = {
        prompt: _prompt,
        options: _options
    };
    return node;
};