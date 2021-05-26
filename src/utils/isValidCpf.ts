function isValidCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    },
  });
}

isValidCpf.prototype.validate = function () {
  if (typeof this.cleanCpf === 'undefined') return false;
  if (this.cleanCpf.length !== 11) return false;
  if (this.isSequence()) return false;

  const partialCpf = this.cleanCpf.slice(0, -2);
  const digitOne = this.createDigit(partialCpf);
  const digitTwo = this.createDigit(partialCpf + digitOne);

  const newCpf = partialCpf + digitOne + digitTwo;
  return newCpf === this.cleanCpf;
};

isValidCpf.prototype.createDigit = function (partialCpf) {
  const cpfArray = Array.from(partialCpf);

  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val: number) => {
    ac = ac + regressive * Number(val);
    regressive--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? '0' : String(digit);
};

isValidCpf.prototype.isSequence = function () {
  const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
  return sequence === this.cleanCpf;
};

export default isValidCpf;
