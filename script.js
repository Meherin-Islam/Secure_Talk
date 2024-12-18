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

    static generate(keysize) {
        const e = bigInt(65537);
        let p;
        let q;
        let totient;
    
        do {
          p = this.randomPrime(keysize / 2);
          q = this.randomPrime(keysize / 2);
          totient = bigInt.lcm(p.prev(), q.prev());
        } while (
          bigInt.gcd(e, totient).notEquals(1) ||
          p.minus(q).abs().shiftRight(keysize / 2 - 100).isZero()
        );