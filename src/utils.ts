function isFunction(x: any): x is () => any {
    return typeof x === 'function';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

function isObject(x: any): x is object {
    return x === Object(x);
}

function isPromise<T>(x: any): x is Promise<T> {
    return (
        !!x && (typeof x === 'object' || typeof x === 'function') && typeof x.then === 'function'
    );
}

enum keyCodes {
    'BREAK' = 3,
    'BACKSPACE_/_DELETE' = 8,
    'TAB' = 9,
    'CLEAR' = 12,
    'ENTER' = 13,
    'SHIFT' = 16,
    'CTRL' = 17,
    'ALT' = 18,
    'PAUSE/BREAK' = 19,
    'CAPS_LOCK' = 20,
    'ESCAPE' = 27,
    'SPACEBAR' = 32,
    'PAGE_UP' = 33,
    'PAGE_DOWN' = 34,
    'END' = 35,
    'HOME' = 36,
    'LEFT_ARROW' = 37,
    'UP_ARROW' = 38,
    'RIGHT_ARROW' = 39,
    'DOWN_ARROW' = 40,
    'SELECT' = 41,
    'PRINT' = 42,
    'EXECUTE' = 43,
    'PRINT_SCREEN' = 44,
    'INSERT' = 45,
    'DELETE' = 46,
    'KEY_0' = 48,
    'KEY_1' = 49,
    'KEY_2' = 50,
    'KEY_3' = 51,
    'KEY_4' = 52,
    'KEY_5' = 53,
    'KEY_6' = 54,
    'KEY_7' = 55,
    'KEY_8' = 56,
    'KEY_9' = 57,
    'KEY_=' = 58,
    'SEMICOLON_(FIREFOX),_EQUALS' = 59,
    '<' = 60,
    'EQUALS_(FIREFOX)' = 61,
    'SS' = 63,
    '@_(FIREFOX)' = 64,
    'A' = 65,
    'B' = 66,
    'C' = 67,
    'D' = 68,
    'E' = 69,
    'F' = 70,
    'G' = 71,
    'H' = 72,
    'I' = 73,
    'J' = 74,
    'K' = 75,
    'L' = 76,
    'M' = 77,
    'N' = 78,
    'O' = 79,
    'P' = 80,
    'Q' = 81,
    'R' = 82,
    'S' = 83,
    'T' = 84,
    'U' = 85,
    'V' = 86,
    'W' = 87,
    'X' = 88,
    'Y' = 89,
    'Z' = 90,
    'WINDOWS_KEY_/_LEFT_?_/_CHROMEBOOK_SEARCH_KEY' = 91,
    'RIGHT_WINDOW_KEY' = 92,
    'WINDOWS_MENU_/_RIGHT_?' = 93,
    'NUMPAD_0' = 96,
    'NUMPAD_1' = 97,
    'NUMPAD_2' = 98,
    'NUMPAD_3' = 99,
    'NUMPAD_4' = 100,
    'NUMPAD_5' = 101,
    'NUMPAD_6' = 102,
    'NUMPAD_7' = 103,
    'NUMPAD_8' = 104,
    'NUMPAD_9' = 105,
    'MULTIPLY' = 106,
    'ADD' = 107,
    'NUMPAD_PERIOD_(FIREFOX)' = 108,
    'SUBTRACT' = 109,
    'DECIMAL_POINT' = 110,
    'DIVIDE' = 111,
    'F1' = 112,
    'F2' = 113,
    'F3' = 114,
    'F4' = 115,
    'F5' = 116,
    'F6' = 117,
    'F7' = 118,
    'F8' = 119,
    'F9' = 120,
    'F10' = 121,
    'F11' = 122,
    'F12' = 123,
    'F13' = 124,
    'F14' = 125,
    'F15' = 126,
    'F16' = 127,
    'F17' = 128,
    'F18' = 129,
    'F19' = 130,
    'F20' = 131,
    'F21' = 132,
    'F22' = 133,
    'F23' = 134,
    'F24' = 135,
    'NUM_LOCK' = 144,
    'SCROLL_LOCK' = 145,
    '^' = 160,
    '!' = 161,
    '#' = 163,
    '$' = 164,
    'Ù' = 165,
    'PAGE_BACKWARD' = 166,
    'PAGE_FORWARD' = 167,
    'CLOSING_PAREN_(AZERTY)' = 169,
    '*' = 170,
    '~_+_*_KEY' = 171,
    'MINUS_(FIREFOX),_MUTE/UNMUTE' = 173,
    'DECREASE_VOLUME_LEVEL' = 174,
    'INCREASE_VOLUME_LEVEL' = 175,
    'NEXT' = 176,
    'PREVIOUS' = 177,
    'STOP' = 178,
    'PLAY/PAUSE' = 179,
    'E-MAIL' = 180,
    'MUTE/UNMUTE_(FIREFOX)' = 181,
    'DECREASE_VOLUME_LEVEL_(FIREFOX)' = 182,
    'INCREASE_VOLUME_LEVEL_(FIREFOX)' = 183,
    'SEMI-COLON_/_Ñ' = 186,
    'EQUAL_SIGN' = 187,
    'COMMA' = 188,
    'DASH' = 189,
    'PERIOD' = 190,
    'FORWARD_SLASH_/_Ç' = 191,
    'GRAVE_ACCENT_/_Ñ' = 192,
    '?,_/_OR_°' = 193,
    'NUMPAD_PERIOD_(CHROME)' = 194,
    'OPEN_BRACKET' = 219,
    'BACK_SLASH' = 220,
    'CLOSE_BRACKET' = 221,
    'SINGLE_QUOTE' = 222,
    '`' = 223,
    'LEFT_OR_RIGHT_?_KEY_(FIREFOX)' = 224,
    'ALTGR' = 225,
    '<_/GIT_>' = 226,
    'GNOME_COMPOSE_KEY' = 230,
    'XF86FORWARD' = 233,
    'XF86BACK' = 234,
    'TOGGLE_TOUCHPAD' = 255
}

export { isFunction, isString, isObject, isPromise, keyCodes };
