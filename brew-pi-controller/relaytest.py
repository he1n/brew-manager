#!/usr/bin/python
import RPi.GPIO as GPIO



if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(11, GPIO.OUT, initial = GPIO.HIGH)
    while True:
        GPIO.output(11, not GPIO.input(11))
        time.sleep(20)