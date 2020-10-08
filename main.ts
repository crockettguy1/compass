basic.forever(function () {
    if (input.compassHeading() < 22.5 && input.compassHeading() >= 337.5) {
        basic.showString("N")
    } else if (input.compassHeading() >= 22.5 && input.compassHeading() < 67.5) {
        basic.showString("NE")
    } else if (input.compassHeading() >= 67.5 && input.compassHeading() < 112.5) {
        basic.showString("E")
    } else if (input.compassHeading() >= 112.5 && input.compassHeading() < 157.5) {
        basic.showString("SE")
    } else if (input.compassHeading() >= 157.5 && input.compassHeading() < 202.5) {
        basic.showString("S")
    } else if (input.compassHeading() >= 202.5 && input.compassHeading() < 247.5) {
        basic.showString("SW")
    } else if (input.compassHeading() >= 247.5 && input.compassHeading() < 292.5) {
        basic.showString("W")
    } else if (input.compassHeading() >= 292.5 && input.compassHeading() < 337.5) {
        basic.showString("NW")
    } else {
    	
    }
})
