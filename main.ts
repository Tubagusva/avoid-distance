let jarak = 0
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    jarak = Tinybit.Ultrasonic_Car()
    if (jarak < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
        basic.pause(100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
