basic.forever(function () {
    if (true) {
        led.setBrightness(255 - input.lightLevel())
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
