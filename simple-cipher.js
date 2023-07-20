//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  // If key is not given, it is set to shift to default value
  constructor(key =  'dddddddddddddddd') {
    this._key = key; 
    this._lowerBound = 'a'.charCodeAt(0);
    this._amountLetters = 26;
    }

    /**
     * Step one: get message and move 3 letters to the right
     */
    encode(secrets) {
      return secrets.split('').reduce((acc, char, i) => {
        const zCharCode = 'z'.charCodeAt(0);
        const shiftBy = this._key.charCodeAt(i % this._key.length);

        let newChar = (char.charCodeAt(0) - this._lowerBound) + shiftBy;

        // if char < 0 then subtract shiftBy this._amountLetters 

        if (newChar > zCharCode) {
          newChar -= this._amountLetters;
        }

        return acc + String.fromCharCode(newChar);
      }, '');
    }

    decode(secrets) {
      return secrets.split('').reduce((acc, char, i) => {
        const shiftBy = this._key.charCodeAt(i % this._key.length) - this._lowerBound; 

        let newChar = char.charCodeAt(0) - shiftBy;

        // if char < 0 then subtract shiftBy this._amountLetters 

        if (newChar < this._lowerBound) {
          newChar += this._amountLetters;
        }


        return acc + String.fromCharCode(newChar);
      }, '');
    }

    get key() {
          return this._key;
        }
}