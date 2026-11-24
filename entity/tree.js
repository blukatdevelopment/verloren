/*##############################################################################
# can be chopped down with an axe, producing wood
##############################################################################*/
ENTITY.Tree = {};
ENTITY.Tree.new = function(_health, _lootTable){
    let d = ENTITY.baseEntity.new();
    d.health = _health;
    d.lootTable = _lootTable;
    d.onAttacked = function(attackData){
        if(attackData.tags == null || !attackData.tags.includes(STATS.AttackTags.Axe)){
            return;
        }
        d.health += attackData.damage;
        if(d.health < 1){
            d.destroy();
        }
        d.damageLabel = UTILITY.formatDamage(attackData.damage);
        d.damageLabelFrames = 12;
    };
    return d;
};