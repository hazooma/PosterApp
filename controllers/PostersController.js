export const calculateCost = (req, res) => {
  const body = req.body; //input
  const orders = [];
  for (let packCode in body) {
    const packsLimits = prodcuts[packCode].Packs.map(pack => pack.limit);
    const packsPrices = prodcuts[packCode].Packs.map(pack => pack.price);

    const targetValue = body[packCode];
    const { totalNumberOfPacks, optimalPacks, totalCost } = getOptimalCost(
      packsLimits,
      targetValue,
      packsPrices
    );

    orders.push({
      order: `${body[packCode]} ${packCode}`,
      totalCost,
      optimalPacks,
    });
  }
  const responseObject = {
    Orders: orders,
  };
  res.status(200).json(responseObject);
};
