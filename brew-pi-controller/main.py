#!/usr/bin/python
import RPi.GPIO as GPIO
import os
import time
from lcd import Lcd
from temperatureSensor import TemperatureSensor


def get_immediate_subdirectories(a_dir):
    return [name for name in os.listdir(a_dir)
            if os.path.isdir(os.path.join(a_dir, name))]

if __name__ == "__main__":
    #Initialize lcd and test screen 
    lcd = Lcd()
    
    #Get all sensor name 
    subdir = get_immediate_subdirectories("/sys/bus/w1/devices")
    temperatureSensor = []
    for dir in subdir:
        if(dir != "w1_bus_master1"):
            temperatureSensor.append(TemperatureSensor(dir))
    while(1):
        #display sensor temperature 
        lcd.lcd_string(temperatureSensor[0].read(),1)
        lcd.lcd_string(temperatureSensor[1].read(),2) 
        
        time.sleep(120)     
        
    #If we have new sensor ask for name description and add to api 
    #loop on temperatureSensor
        #Read temperature for each sensor 
        #Update push data in api for each sensor 
        #Display data on lcd screen
        #Check current profil data 
        #if bad temperature Work on fridge temperature 
        #Be carefull to anticipate temperature limit
