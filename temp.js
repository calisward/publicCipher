class Cipher {
  // If key is not given, it is set to shift to default value
  constructor(key = 'dddddddddddddddd') {
    this._key = key; 
    this._lowerBound = 'a'.charCodeAt(0);
    this._amountLetters = 26;
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

const key = 'dddddddddddddddd';
const input = 'iamapandabear';
const expected = 'ldpdsdqgdehdu';

const cipher = new Cipher(key);


if (input !== cipher.decode(input)) {
  console.error(`expected ${input} but code ${cipher.decode(input)}`)
} else {
  console.log('You did it!');
}


/**
if (expected !== cipher.encode(input)) {
  console.error(`expected ${expected} but code ${cipher.encode(input)}`)
} else {
  console.log('You did it!');
} 
*/