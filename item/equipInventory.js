/*##############################################################################
# An inventory which equps or unequips items for a linked actor
##############################################################################*/
ITEMS.EquipInventory = {};
ITEMS.EquipInventory.new = function(size, linkedActor){
    let ei = ITEMS.Inventory.new(size);
    ei.linkedActor = linkedActor;
    ei.setItem = function(slot, item){
        if(slot > -1 && slot < ei.size){
            let prevItem = ei.slots[slot];
            ei.slots[slot] = item;
            if(prevItem && ei.linkedActor){
                ei.linkedActor.unequip(prevItem, slot);
            }
            if(item && ei.linkedActor){
                ei.linkedActor.equip(item, slot);
            }
        }
        else{
            console.log("Invalid slot: " + slot);
        }
        // Re-equip all items, in case of swapping slots
        for(let item of ei.slots){
            if(item){
                ei.linkedActor.equip(item, slot, true);
            }
        }
    };
    return ei;
};