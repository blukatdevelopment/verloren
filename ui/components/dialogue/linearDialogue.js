/*##############################################################################
# Shows a sequence of dialogue
##############################################################################*/

UI.COMPONENTS.LinearDialogue = {}
UI.COMPONENTS.LinearDialogue.new = function(_messages){
    let ld = {
        messages: _messages,
        index: 0
    };
    ld.panel = UI.COMPONENTS.Panel.new(
        SHAPES.RECT.new(
            VECTOR2.new(100,100),
            VECTOR2.new(200,200)
        )
    );
    ld.textArea = UI.COMPONENTS.TextArea.new(
        SHAPES.RECT.new(
            VECTOR2.new(105, 105),
            VECTOR2.new(190, 140)
        ),
        "",
        10
    );
    if(_messages && _messages.length > 0){
        ld.textArea.setText(_messages[0]);
    }
    ld.button = UI.COMPONENTS.TextButton.new(
        SHAPES.RECT.new(
            VECTOR2.new(100, 250),
            VECTOR2.new(200, 50)
        ),
        "continue",
        () => { ld.continue(); }
    );
    ld.update = function(){
        ld.panel.update();
        ld.textArea.update();
        ld.button.update();
    };
    ld.draw = function(){
        ld.panel.draw();
        ld.textArea.draw();
        ld.button.draw();

    };
    ld.continue = function(){
        console.log("Continue");
        ld.index++;
        if(ld.index >= ld.messages.length){
            console.log("Close");
            UTILITY.closeDialogue();
            return;
        }
        console.log("progress");
        ld.textArea.setText(ld.messages[ld.index]);
    };

    return ld;
};