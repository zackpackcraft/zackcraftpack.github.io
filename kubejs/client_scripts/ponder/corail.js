onEvent("ponder.registry", event => {
    event.create([
        "tombstone:decorative_grave_simple",
        "tombstone:decorative_grave_normal",
        "tombstone:decorative_grave_cross",
        "tombstone:decorative_tombstone",
        "tombstone:decorative_subaraki_grave",
        "tombstone:decorative_grave_original",
        "tombstone:grave_dust",
        "tombstone:essence_of_undeath"
    ]).scene("tomb1", "Getting Started with Corail Tombstone", (scene, util) => {
        scene.showBasePlate()
        scene.idle(10)

        const pos1 = util.grid.at(1, 0, 1)
        const pos1top = util.vector.topOf(pos1)
        const pos2 = util.grid.at(1, 0, 3)
        const pos2top = util.vector.topOf(pos2)
        const pos3 = util.grid.at(3, 0, 3)
        const pos3top = util.vector.topOf(pos3)
        const pos4 = util.grid.at(3, 0, 1)
        const pos4top = util.vector.topOf(pos4)
        const center = util.grid.at(2, 0, 2)
        const centerTop = util.vector.topOf(center)

        const zombie = scene.world.createEntity("zombie", pos1top)
        scene.idle(10)
        const skellie = scene.world.createEntity("skeleton", pos2top)
        scene.idle(10)
        scene.text(60, "Kill Undead Mobs", [1.5, 1, 1.5]).placeNearTarget()
        const stray = scene.world.createEntity("stray", pos3top)
        scene.idle(10)
        const zpiglin = scene.world.createEntity("zombified_piglin", pos4top)
        scene.idle(9)
        scene.world.modifyEntity(zombie, (e) => {
            e.discard();
        })
        scene.idle(1)
        const drowned = scene.world.createEntity("drowned", pos1top)
        scene.idle(9)
        scene.world.modifyEntity(skellie, (e) => {
            e.discard();
        })
        scene.idle(1)
        const wskellie = scene.world.createEntity("wither_skeleton", pos2top)
        scene.idle(9)
        scene.world.modifyEntity(stray, (e) => {
            e.discard();
        })
        scene.idle(1)
        const husk = scene.world.createEntity("husk", pos3top)
        scene.idle(9)
        scene.world.modifyEntity(zpiglin, (e) => {
            e.discard();
        })
        scene.idle(1)
        const hoglin = scene.world.createEntity("zoglin", pos4top)
        scene.idle(10)
        scene.world.modifyEntity(drowned, (e) => {
            e.discard();
        })
        scene.idle(10)
        scene.world.modifyEntity(wskellie, (e) => {
            e.discard();
        })
        scene.text(60, "This has a rare chance to drop Grave's Dust", [1.5, 1, 1.5]).placeNearTarget()
        scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.4, -0.06), "tombstone:grave_dust")
        scene.idle(10)
        scene.world.modifyEntity(husk, (e) => {
            e.discard();
        })
        scene.idle(10)
        scene.world.modifyEntity(hoglin, (e) => {
            e.discard();
        })
        scene.text(60, "And a rarer chance to drop Essence of Undeath", [3.5, 1, 3.5]).placeNearTarget()
        scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.4, 0.06), "tombstone:essence_of_undeath")
    })
        .scene("tomb2", "Graves", (scene, util) => {
            scene.showBasePlate()
            scene.idle(10)
            scene.world.showSection([1, 1, 2], Facing.down)
            scene.world.showSection([3, 1, 2], Facing.down)
            scene.overlay.showText(100)
                .text("Graves come in two marble colors")
                .independent(50)
                .placeNearTarget()
            scene.overlay.showText(100)
                .text("and six different styes")
                .independent(66)
                .placeNearTarget();
            ["tombstone:decorative_grave_simple", "tombstone:decorative_grave_normal", "tombstone:decorative_grave_cross", "tombstone:decorative_tombstone", "tombstone:decorative_subaraki_grave", "tombstone:decorative_grave_original"].forEach(name => {
                scene.world.setBlock([1, 1, 2], Block.id(name), false)
                scene.idle(10)
                scene.world.setBlock([3, 1, 2], Block.id(name).with("model_texture", "1"), false)
                scene.idle(10)
            })
            scene.overlay.showText(100)
                .text("30 minutes after a grave is placed")
                .independent(40)
                .placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(100)
                .text("or the previous soul is used")
                .independent(56)
                .placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(100)
                .text("a new soul will spawn")
                .independent(72)
                .placeNearTarget()
            scene.idle(20)
            scene.addKeyframe()
            const black = util.grid.at(1, 0, 2)
            const blackTop = util.vector.topOf(black)
            const lightning1 = scene.world.createEntity("lightning_bolt", blackTop)
            scene.idle(10)
            scene.world.modifyEntity(lightning1, (e) => {
                e.discard();
            })
            const white = util.grid.at(3, 0, 2)
            const whiteTop = util.vector.topOf(white)
            const lightning2 = scene.world.createEntity("lightning_bolt", whiteTop)
            scene.idle(10)
            scene.world.modifyEntity(lightning2, (e) => {
                e.discard();
            })
            scene.particles.rotationIndicator(60, [1, 2, 2], 0.3, 0.3, "Y").rotationSpeed(5).color("#D133ED")
            scene.idle(10)
            scene.particles.rotationIndicator(60, [3, 2, 2], 0.3, 0.3, "Y").rotationSpeed(5).color("#00FFFC")
            scene.idle(100)
        })
})