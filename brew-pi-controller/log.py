#!/usr/bin/python
import httplib, urllib

class Logger:

    def __init__(self, apikey):
        self.apikey = apikey
    
    def write(self,temp,field):
        params = urllib.urlencode({field: temp, 'key':self.apikey})
        headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
        conn = httplib.HTTPConnection("api.thingspeak.com:80")
        try:
            conn.request("POST", "/update", params, headers)
            print("write temp "+temp+" in "+field)
        except:
            print "Api connection failed"
    def logBrewingApi(self,model,datas):


