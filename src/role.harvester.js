module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is bringing energy to the spawn but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
            creep.say('🔄 harvest');
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
            creep.say('📩 delivery');
        }

        // if creep is supposed to transfer energy to the spawn
        if (creep.memory.working == true) {
            // try to transfer energy, if the spawn is not in range
            if (creep.transfer(Game.spawns.Crazeedemon, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards the spawn
                creep.moveTo(Game.spawns.Crazeedemon, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            else if(Game.getObjectById('EXTENSION_ID')) {
                var extension = Game.getObjectById('EXTENSION_ID')
                console.log('found extension')
                var closestEmptyExtension = extension.pos.findClosestByRange(FIND_STRUCTURES);
                if(closestEmptyExtension){
                    if (creep.transfer(closestEmptyExtension, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)

                    creep.moveTo(Game.getObjectById('5dfdb70dd8a9ed8422b1daff'), {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // find closest source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            // try to harvest energy, if the source is not in range
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards the source
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
};