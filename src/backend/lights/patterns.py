from PIL import ImageColor
import time

class Patterns (object):
    _PATTERNS = [
        'CHASE_UP',
        'CHASE_DOWN',
        'FILL_UP',
        'FILL_DOWN',
        'FILL_UP_AND_DOWN',
        'FILL_UP_CHASE_UP',
        'ALTERNATING',
        'RANDOM_SETS',
        'RANDOM_ON_OFF',
        'APPEAR_FROM_BACK',
        'FADE_IN_OUT',
        'RAINBOW_COLORS',
        'RANDOM_CYCLE'
    ]


    def __init__(self, name, hexcode):
        self.name       = name
        self.rgb        = ImageColor.getcolor(hexcode, 'RGB')
    


    # Define functions which animate LEDs in various ways.
    def colorWipe(strip, color, wait_ms=50):
        """Wipe color across display a pixel at a time."""
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, color)
            strip.show()
            time.sleep(wait_ms/1000.0)


    def _wheel(pos):
        """Generate rainbow colors across 0-255 positions."""
        if pos < 85:
            return Color(pos * 3, 255 - pos * 3, 0)
        elif pos < 170:
            pos -= 85
            return Color(255 - pos * 3, 0, pos * 3)
        else:
            pos -= 170
            return Color(0, pos * 3, 255 - pos * 3)


    