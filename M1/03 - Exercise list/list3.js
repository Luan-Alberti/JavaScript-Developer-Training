/*
3) Create an algorithm that calculates what should be paid for a product, 
considering the normal sticker price and the choice of payment condition.
Use the codes in the following table to read the chosen payment condition and make the appropriate calculation.

Code Payment terms:
1 - With Debit, you receive a 10% discount;
2 - In cash or PIX, receive a 15% discount;
3 - In two installments, normal interest-free sticker price;
4 - Above two installments, normal sticker price plus 10% interest;
*/

const price = 50;
const paymentType = 1;

if (paymentType === 1) {
    const priceDebit = price * 0.9;
    console.log('You will pay U$' + priceDebit);
} else if (paymentType === 2) {
    const priceCashPix = price * 0.85;
    console.log('You will pay U$' + priceCashPix);
} else if (paymentType === 3) {
    console.log('You will pay U$' + price);
} else if (paymentType === 4) {
    const priceInstallments = price * 1.1;
    console.log('You will pay U$' + priceInstallments);
} else {
    console.log('Enter a valid code');
}


