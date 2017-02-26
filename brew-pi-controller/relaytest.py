#!/usr/bin/python
import RPi.GPIO as GPIO
import time


if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)
    gpionb = 11
    GPIO.setup(gpionb, GPIO.OUT, initial = GPIO.HIGH)
    #while True:
    #    GPIO.output(gpionb, not GPIO.input(gpionb))
    #    time.sleep(10)
