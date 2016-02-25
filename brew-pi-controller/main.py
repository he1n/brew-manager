#!/usr/bin/python
import RPi.GPIO as GPIO
from time import sleep
import lcd
import temperatureSensor

if __name__ == "__main__":
    #Initialize lcd and test screen 

    #Get all sensor name 

    #Initialize all temperatureSensor and check if each exist on raspberry pi and if we have new sensor 

	    #If we have new sensor ask for name description and add to api 

    #loop on temperatureSensor
    	#Read temperature for each sensor 
    	#Update push data in api for each sensor 
    	#Display data on lcd screen
    	#Check current profil data 
    		#if bad temperature Work on fridge temperature 
    		#Be carefull to anticipate temperature limit 