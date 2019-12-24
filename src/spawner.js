module.exports = {
    spawn: function () {
        // goal: have 5 harvesters and as many upgraders as possible
        var name = '';
        var minimumNumberOfHarvesters = 4;
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a harvester
        var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        var _type = '';
        // goal have 5 upgraders
        var minimumNumberOfUpgraders = 6;
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a harvester
        var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');

        // goal have 5 builders
        var minimumNumberOfbuilders = 0;
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a harvester
        var numberOfbuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');

        // if not enough harvesters
        if (numberOfHarvesters < minimumNumberOfHarvesters) {
            // try to spawn one
            _type = 'harvester'
            name = Game.spawns.Crazeedemon.createCreep([WORK, WORK, CARRY, MOVE], undefined,
                {role: 'harvester', working: false});
        }
        else if (numberOfUpgraders < minimumNumberOfUpgraders) {
            // else try to spawn an upgrader
            // small change from what you saw in the video: for upgraders it makes
            //  more sense to have two move parts because they have to travel further
            _type = 'upgrader'
            name = Game.spawns.Crazeedemon.createCreep([WORK, CARRY, MOVE, MOVE], undefined,
                {role: 'upgrader', working: false});
        }
        else if (numberOfbuilders < minimumNumberOfbuilders) {
            // else try to spawn an upgrader
            // small change from what you saw in the video: for upgraders it makes
            //  more sense to have two move parts because they have to travel further
            _type = 'builder'
            name = Game.spawns.Crazeedemon.createCreep([WORK, CARRY, MOVE, MOVE], undefined,
                {role: 'builder', working: false});
        }

        // print name to console if spawning was a success
        // name > 0 would not work since string > 0 returns false
        if (!(name < 0)) {
            console.log("Spawned new creep: " + name + _type);
        }
    }
};
