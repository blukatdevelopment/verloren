/*##############################################################################
# Displays text, can be given an onClick
##############################################################################*/
UI.COMPONENTS.TextLabel = {}; 
UI.COMPONENTS.TextLabel.new = function(rect, text, tooltip, onClick){
    let tl = {
        rect: rect,
        text: text,
        textSize: SETTINGS.defaultFontSize,
        color: SETTINGS.defaultColor,
        tooltip: tooltip,
        onClick: onClick
    };
    tl.update = function(){
        if(!tl.isHovered()){
            return;
        }
        if(tl.tooltip != null){
            GRAPHICS.drawTooltip(tl.toolTip);
        }
        if(!INPUT.mouseClick(INPUT.LEFT_MOUSE)){
            return;
        }
        if(tl.onClick != null){
            tl.onClick();
        }
    };
    tl.isHovered = function(){
        let mPos = INPUT.getDownScaledMousePosition();
        return tl.rect.contains(mPos);
    };
    tl.draw = function(){
        let pos = tl.rect.position;
        let yOff = GRAPHICS.getTextSize(tl.text, tl.textSize).y/2;
        GRAPHICS.drawText(tl.text, pos.x, pos.y + yOff, tl.textSize, tl.color);
    };
    tl.getCharacterCountThatFits = function(text){
        let substr = "";
        let scaledX = GRAPHICS.scale(tl.rect.size.x);
        for(let i = 0; i < text.length; i++){
            substr = substr + text[i];
            let measurements = GRAPHICS.getTextSize(substr);
            if(measurements.x == scaledX){
                return substr.length;
            }
            else if(measurements.x > scaledX){
                return substr.length-1;
            }
        }
        return text.length;
    };
    return tl;
};