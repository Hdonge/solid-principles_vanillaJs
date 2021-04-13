//OCP Violated

class Invoice {
  getInvoiceDiscount(amount, invoiceType) {
    let finalAmount = 0;
    if (invoiceType == "FinalInvoice") {
      finalAmount = amount - 100;
    } else if (invoiceType == "ProposedInvoice") {
      finalAmount = amount - 50;
    }
    return finalAmount;
  }
}

//---------------------------OCP Implemented----------------------------------------//
//functional paradiagm
const getInvoiceDiscount = (amount, getDiscount) => getDiscount(amount);

const getFinalInvoiceDiscount = (amount) => amount - 100;
const getproposedInvoiceDiscount = (amount) => amount - 50;

const finalDiscount = getInvoiceDiscount(5000, getFinalInvoiceDiscount);
const proposeDiscount = getInvoiceDiscount(5000, getproposedInvoiceDiscount);

console.log(finalDiscount, proposeDiscount);

//class paradiagm

class Invoice_OCP {
  getInvoiceDiscount(amount, invoiceType) {
    return invoiceType.getDiscount(amount);
  }
}

class FinalInvoice {
  getDiscount(amount) {
    return amount - 100;
  }
}

class ProposedInvoice {
  getDiscount(amount) {
    return amount - 50;
  }
}

const invoice = new Invoice_OCP();

const invoiceType = new FinalInvoice();
console.log(invoice.getInvoiceDiscount(10000, invoiceType));
