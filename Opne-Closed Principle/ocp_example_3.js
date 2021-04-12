//OCP_violated

const calculateTax = (income) => {
  if (income >= 50_000) {
    return income * 0.3;
  } else if (income >= 10_000 && income < 50_000) {
    return income * 0.2;
  } else {
    return income * 0.1;
  }
};

//-------------------------------------------------------------//
//functional paradiagm

const calculateTax_ocp = (income, slabCalculator) => {
  return slabCalculator(income);
};

const lowerSlabCalculator = (income) => income * 0.3;
const middleSlabCalculator = (income) => income * 0.2;
const higherSlabCalculator = (income) => income * 0.1;

//----------------------------------------------------------------//
//class paradiagm

class TaxCalculator {
  calculateTax(income, slab) {
    return slab.calculateTax(income);
  }
}

class LowerSlab {
  calculateTax(income) {
    return income * 0.1;
  }
}

class MiddleSlab {
  calculateTax(income) {
    return income * 0.2;
  }
}

class HigherSlab {
  calculateTax(income) {
    return income * 0.3;
  }
}

const taxCalculator = new TaxCalculator();

//When income is 100_000
const higherSlab = new HigherSlab();
const tax_high = taxCalculator.calculateTax(100_000, higherSlab);
console.log(tax_high);

//When income is 50_000
const middleSlab = new MiddleSlab();
const tax_middle = taxCalculator.calculateTax(50_000, middleSlab);
console.log(tax_middle);

//When income is 9_000
const lowerSlab = new LowerSlab();
const tax_lower = taxCalculator.calculateTax(9_000, lowerSlab);
console.log(tax_lower);
