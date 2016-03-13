#!/usr/bin/python
class TemperatureSensor:

    def __init__(self, sensorName):
        self.sensorName = sensorName
    
    def read(self):
        tfile = open("/sys/bus/w1/devices/"+self.sensorName+"/w1_slave") 
        text = tfile.read()
        tfile.close()
        secondline = text.split("\n")[1] 
        temperaturedata = secondline.split(" ")[9]
        temperature = float(temperaturedata[2:])
        temperature = temperature / 1000
        return str(temperature)

    def getName(self):
        return self.sensorName    
    
