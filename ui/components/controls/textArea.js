/*##############################################################################
# Displays multiple lines, wrapping within the given rect
##############################################################################*/
UI.COMPONENTS.TextArea = {};
UI.COMPONENTS.TextArea.new = function(_rect, _text, _textSize){
    let ta = {
        rect: _rect,
        text: _text,
        textSize: _textSize,
        margin: 1,
        spacing: 0,
        rows: []
    };
    ta.init = function(){
        ta.initTextHeight();
        ta.initRows();
        ta.setText(ta.text);
    };
    ta.initTextHeight = function(){
        let txt = "a";
        let measurement = GRAPHICS.getTextSize(txt, ta.textSize);
        console.log("measurement " + measurement.toString());
        ta.textHeight = measurement.y;
    };
    ta.initRows = function(){
        let height = ta.rect.size.y;
        height -= (2 * ta.margin); // top and bottom margin
        let rowCount = height / (ta.textHeight + ta.spacing);
        let origin = ta.rect.position;
        console.log("rowCount: " + rowCount);
        for(let i = 0; i < rowCount; i++){
            let rect = SHAPES.RECT.new(origin.clone(), VECTOR2.new(ta.rect.size.x, ta.textHeight));
            rect.position.y += (i * ta.textHeight);
            rect.position.y += (i * ta.spacing);
            console.log("rect: " + rect.toString());
            ta.rows.push(UI.COMPONENTS.TextLabel.new(rect, "", null, null));
        }
    };
    ta.setText = function(text){
        ta.clearText();
        for(let row of ta.rows){
            if(text == null || text.length == 0){
                return;
            }
            let charCount = row.getCharacterCountThatFits(text);
            if(charCount <= text.length){
                row.text = text.substring(0, charCount);
                text = text.slice(charCount);
            }
            else{
                console.log("TextArea.SetText(): character count exceeds text length");
                return;
            }
        }
    };
    ta.clearText = function(){
        for(let row of ta.rows){
            row.text = "";
        }
    };
    ta.update = function(){};
    ta.draw = function(){
        for(let row of ta.rows){
            row.draw();
        }
    };

    ta.init();
    return ta;
};