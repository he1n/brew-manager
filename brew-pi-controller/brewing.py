#!/usr/bin/python
#import RPi.GPIO as GPIO
import time
import yaml
import os
import datetime
from temperatureSensor import TemperatureSensor
from datetime import datetime

def get_immediate_subdirectories(a_dir):
    return [name for name in os.listdir(a_dir)
            if os.path.isdir(os.path.join(a_dir, name))]

if __name__ == "__main__":
    #Init variables for brewing 
    cartographyName = "brewing-cartography.yaml"
    temperaturePrecision = 2
    cartography = False
    havetoleave = False
    timer = 0
    currentStep = 1
    currentTime = 0
    timerStarted = False
    startTime = 0
    sleeptime = 0.1
    subdir = get_immediate_subdirectories("/sys/bus/w1/devices")
    temperatureSensor = []
    for dir in subdir:
        if(dir != "w1_bus_master1"):
            temperatureSensor.append(TemperatureSensor(dir))

	#Load current brewing cartography
    with open("settings/"+cartographyName, 'r') as stream:
        try:
            cartography = yaml.load(stream)
        except yaml.YAMLError as exc:
            sys.exit(0)

    print cartography["step-" + str(currentStep)]

    while(havetoleave != True):
    	currentTemperature = temperatureSensor[0].read()
    	print currentTemperature
        break
    	#Check if we have to start the timer  
        if timerStarted != True and ( currentTemperature > (cartography.temperature - temperaturePrecision) and currentTemperature < (cartography.temperature + temperaturePrecision)) :
            timerStarted = True
            start_time = time.time()
    	else:
    	    #Update time started we increment time 
    	    if(timerStarted):
    	       currentTime += (time.time() - start_time)
    	    
    	    #if time of current step is over we stop time and increment step   
    	    if currentTime >= cartography["step-" + str(currentStep)]['time'] :
    		    timerStarted = False
    		    currentTime = 0
    		    currentStep += 1
    		    #if we have no more steps we leave 
       		    if not ("step-" + str(currentStep)) in cartography:
       			havetoleave = True
       			break

        #Check if we have to up temperature or not 
        if currentTemperature < cartography["step-" + str(currentStep)]['temperature']:
            # Start resistance
            break 
        else:
            break
            # Stop Resistance	

    #We stop the resistance 


    #Get all sensor name 
    #subdir = get_immediate_subdirectories("/sys/bus/w1/devices")
    #temperatureSensor = []
    #for dir in subdir:
    #    if(dir != "w1_bus_master1"):
    #        temperatureSensor.append(TemperatureSensor(dir))
    #havetoleave = false        
    #while(!havetoleave):
