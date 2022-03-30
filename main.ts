basic.forever(function () {
    if (30 == input.lightLevel()) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
        basic.showString("egun on")
    }
})
