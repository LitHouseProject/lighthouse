from rpi_ws281x import *
import os


# LED strip configuration:
LED_COUNT      = 300        # Number of LED pixels.
LED_PIN        = 18         # GPIO pin connected to the pixels (18 uses PWM!).
#LED_PIN        = 10        # GPIO pin connected to the pixels (10 uses SPI /dev/spidev0.0).
LED_FREQ_HZ    = 800000     # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 10         # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255        # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False      # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0          # set to '1' for GPIOs 13, 19, 41, 45 or 53

class LightController (Adafruit_NeoPixel):
    _process = None


    def __init__(self, LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_BRIGHTNESS, LED_INVERT, LED_CHANNEL):
        super().__init__(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_BRIGHTNESS, LED_INVERT, LED_CHANNEL)
        

    # to turn on the light
    def turnOnLights(self, turn_on=True, stop_light_process=True):
        pass
        # check if there is an existing light process already here
        if stop_light_process:
            self.stopExistingLightProcess()
        if turn_on:
            # implement color wipe
            pass
        else:
            pass


    def stopExistingLightProcess():
        pass




