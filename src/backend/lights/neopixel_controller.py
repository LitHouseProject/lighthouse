from rpi_ws281x         import *
from PIL                import ImageColor
from multiprocessing    import Process
import os
import signal
import logging
import time

# LED strip configuration:
LED_COUNT      = 300      # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (18 uses PWM!).
#LED_PIN        = 10      # GPIO pin connected to the pixels (10 uses SPI /dev/spidev0.0).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 10      # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0       # set to '1' for GPIOs 13, 19, 41, 45 or 53


class StripController (object):
    _process  = None
    
    def __init__(self, neopixelObject):
        self.stripObject        = neopixelObject            # Adafruit_Neopixel Object: Need it to pass to certain functions
        self.selectedPattern    = 'STRANDTEST'              # Selected Pattern: Pattern to be displayed
        self.selectedColor      = Color(0, 255, 0)          # Selected Color: Color to be displayed on LED lights 
        
        
    # Create a new process
    # New process will execute the pattern the user wants
    def createLEDLightProcess(self, wait_ms=10, forever=1):
        self.stopExistingProcess()
        self._process = Process(target=globals()[self.selectedPattern.lower()], args=(self.stripObject, self.selectedColor, forever, wait_ms) )
        self._process.start()
    
    def turnOffLEDLights(self):
        self.stopExistingProcess()
        for i in range(self.stripObject.numPixels()):
            strip.setPixelColor(i, Color(0, 0, 0))
            strip.show()
            time.sleep(10.0/1000.0)
            
            
    # Stop current process for LED Lights
    # Do this to switch patterns or colors
    def stopExistingProcess(self):
        if self._process is not None and self._process.is_alive():
            try:
                os.kill(self._process.pid, signal.SIGKILL)
                
                # wait for the process in order to reap it 
                # (avoids having defunct zombie processes leftover)
                os.waitpid(self._process.pid, 0)
                
                self._process = None
            except OSError:
                logging.exception('OSERROR: Fail to kill')
            except Exception as e:
                logging.exception('ERROR: In trying to stop existing LED Light process')
                
    
    def setColor(self, hexcode):
        rgb = ImageColor.getcolor(hexcode, 'RGB')
        self.color = Color(rgb[0], rgb[1], rgb[2])
    
    def setPattern(self, newPattern):
        self.selectedPattern = newPattern



def color_wipe(strip, color, forever, wait_ms=50):
    """Wipe color across display a pixel at a time."""
    
    while forever >= 0: 
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, color)
            strip.show()
            time.sleep(wait_ms/1000.0)
        if forever == 0:
            forever = -1
            
        
def theater_chase(strip, color, forever, wait_ms=50, iterations=10):
    """Movie theater light style chaser animation."""
    while forever >= 0:
        for j in range(iterations):
            for q in range(3):
                for i in range(0, strip.numPixels(), 3):
                    strip.setPixelColor(i+q, color)
                strip.show()
                time.sleep(wait_ms/1000.0)
                for i in range(0, strip.numPixels(), 3):
                    strip.setPixelColor(i+q, 0)
        if forever == 0:
            forever = -1

def wheel(pos):
    """Generate rainbow colors across 0-255 positions."""
    if pos < 85:
        return Color(pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return Color(255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return Color(0, pos * 3, 255 - pos * 3)
    

def rainbow(strip, color, forever, wait_ms=20, iterations=1):
    """Draw rainbow that fades across all pixels at once."""
    while forever >= 0:
        
        for j in range(256*iterations):
            for i in range(strip.numPixels()):
                strip.setPixelColor(i, wheel((i+j) & 255))
            strip.show()
            time.sleep(wait_ms/1000.0)
            
        if forever == 0:
            forever = -1


def rainbow_cycle(strip, color, forever, wait_ms=20, iterations=5):
    """Draw rainbow that uniformly distributes itself across all pixels."""
    while forever >= 0:
        for j in range(256*iterations):
            for i in range(strip.numPixels()):
                strip.setPixelColor(i, wheel((int(i * 256 / strip.numPixels()) + j) & 255))
            strip.show()
            time.sleep(wait_ms/1000.0)
        
        if forever == 0:
            forever = -1
        
def theater_chase_rainbow(strip, color, forever, wait_ms=50):
    """Rainbow movie theater light style chaser animation."""
    while forever >= 0:
        for j in range(256):
            for q in range(3):
                for i in range(0, strip.numPixels(), 3):
                    strip.setPixelColor(i+q, wheel((i+j) % 255))
                strip.show()
                time.sleep(wait_ms/1000.0)
                for i in range(0, strip.numPixels(), 3):
                    strip.setPixelColor(i+q, 0)

        if forever == 0:
            forever = -1

def strandtest(strip, color, forever, wait_ms=50):
        while forever >= 0:
            color_wipe(strip, Color(255, 0, 0), 0)  # Red wipe
            color_wipe(strip, Color(0, 0, 255), 0)  # Blue wipe
            color_wipe(strip, Color(0, 255, 0), 0)  # Green wipe
            theater_chase(strip, Color(127, 127, 127), 0)  # White theater chase
            theater_chase(strip, Color(127,   0,   0), 0)  # Red theater chase
            theater_chase(strip, Color(  0,   0, 127), 0)  # Blue theater chase
            rainbow(strip, forever=0, color=None)
            rainbow_cycle(strip, color=None, forever=0)
            theater_chase_rainbow(strip, color=None, forever=0)

        if forever == 0:
            forever = -1

if __name__ == '__main__':
    strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
    strip.begin()
    strip_controller = StripController(strip)
    strip_controller.createLEDLightProcess()
 