from logging import debug
from flask import Flask, redirect, request
from neopixel_controller import *

strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
strip.begin()
strip_controller = StripController(strip)
app = Flask(__name__)


@app.route('/api', methods=['POST'])
def change():
    # DATA being POSTED
    content = request.get_json()
    print(content, flush=True)
    
    # Set Color and Pattern
    strip_controller.setColor(content['color'])
    strip_controller.setPattern(content['pattern'])
    
    # Turn Off LED Lights or Create Process 
    if content['pattern'] == 'TURN_OFF':
        strip_controller.turnOffLEDLights()
    else:
        strip_controller.createLEDLightProcess()
    
    return 'SUCCESSFULLY SUBMITTED'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')