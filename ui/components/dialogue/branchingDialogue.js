/*##############################################################################
# Traverses a graph of dialogue nodes
##############################################################################*/

UI.COMPONENTS.BranchingDialogue = {}
UI.COMPONENTS.BranchingDialogue.new = function(_nodes){
    let ld = {
        nodes: _nodes,
        activeNode: null
    };
    ld.init = function(){
        ld.panel = UI.COMPONENTS.Panel.new(
            SHAPES.RECT.new(
                VECTOR2.new(100,100),
                VECTOR2.new(200,200)
            )
        );
        ld.prompt = UI.COMPONENTS.TextArea.new(
            SHAPES.RECT.new(
                VECTOR2.new(105, 105),
                VECTOR2.new(190, 140)
            ),
            "",
            10
        );
        ld.optionButtons = [
            UI.COMPONENTS.TextButton.new(
                SHAPES.RECT.new(
                    VECTOR2.new(105,246),
                    VECTOR2.new(190,10)
                ),
                "",
                () => { ld.selectOption(0); }
            ),
            UI.COMPONENTS.TextButton.new(
                SHAPES.RECT.new(
                    VECTOR2.new(105,260),
                    VECTOR2.new(190, 10)
                ),
                "",
                () => { ld.selectOption(1); }
            ),
            UI.COMPONENTS.TextButton.new(
                SHAPES.RECT.new(
                    VECTOR2.new(105,270),
                    VECTOR2.new(190, 10)
                ),
                "",
                () => { ld.selectOption(2); }
            ),
            UI.COMPONENTS.TextButton.new(
                SHAPES.RECT.new(
                    VECTOR2.new(105, 280),
                    VECTOR2.new(190, 10)
                ),
                "",
                () => { ld.selectOption(3); }
            )
        ];
        if(ld.nodes && ld.nodes.length > 0){
            ld.setActiveNode(ld.nodes[0]);
        }
    };
    ld.selectOption = function(index){
        let option = ld.activeNode.options[index];
        if(option.onSelect){
            option.onSelect(ld.getDialogueContext());
        }
        if(option.linkedNode){
            ld.setActiveNode(option.linkedNode);    
        }
        else{
            UTILITY.closeDialogue();
        }
    };
    ld.setActiveNode = function(node){
        ld.clearOptionButtons();
        let ctx = ld.getDialogueContext();
        for(let i = 0; i < node.options.length; i++){
            let btn = ld.optionButtons[i];
            let opt = node.options[i];
            if(opt.visibilityCheck == null || opt.visibilityCheck(ctx)){
                btn.text = opt.text;
            }
        }
        ld.prompt.setText(node.prompt);
        ld.activeNode = node;
    };
    ld.clearOptionButtons = function(){
        for(let button of ld.optionButtons){
            button.text = "";
        }
    }
    ld.update = function(){
        if(ld.activeNode == null){
            return;
        }
        ld.panel.update();
        ld.prompt.update();
        for(let i = 0; i < ld.activeNode.options.length; i++){
            ld.optionButtons[i].update();
        }
    };
    ld.getDialogueContext = function(){
        let ctx = DIALOGUE.Context.new(SCENE.getPlayerOne(), SCENE.getInterlocutor());
        return ctx;
    };
    ld.draw = function(){
        if(ld.activeNode == null){
            return;
        }
        ld.panel.draw();
        ld.prompt.draw();
        for(let i = 0; i < ld.activeNode.options.length; i++){
            if(ld.optionButtons[i].text != ""){
                ld.optionButtons[i].draw();
            }
            
        }
    };
    ld.init();
    return ld;
};