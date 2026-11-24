/*##############################################################################
# can be chopped down with an axe, producing wood
##############################################################################*/
ENTITY.Tree = {};
ENTITY.Tree.new = function(_health, _lootTable){
    let d = ENTITY.baseEntity.new();
    d.health = _health;
    d.lootTable = _lootTable;
    d.onAttacked = function(attackData){
        console.log("Tree attacked!");
        if(attackData.tags == null || !attackData.tags.includes(STATS.AttackTags.Axe)){
            console.log("Axe not used. Ignoring attack");
            return;
        }
        d.health += attackData.damage;
        console.log("Axe was used. Damage was " + attackData.damage);
        if(d.health < 1){
            d.destroy();
        }
    };
    return d;
};