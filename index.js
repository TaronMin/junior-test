const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  let sum = 0;
  cartItemsPrices.forEach((val)=>{
      sum+= val * 100;
  })

  return (sum/100) === WINNING_SUM;
}

module.exports = doesCartWinPrize;
