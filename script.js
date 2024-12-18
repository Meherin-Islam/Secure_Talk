// RSA Implementation
class RSA {
    static randomPrime(bits) {
      const min = bigInt.one.shiftLeft(bits - 1);
      const max = bigInt.one.shiftLeft(bits).prev();
  
      while (true) {
        let p = bigInt.randBetween(min, max);
        if (p.isProbablePrime(256)) {
          return p;
        }
      }
    }