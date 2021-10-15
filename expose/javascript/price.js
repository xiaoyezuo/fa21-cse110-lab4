function discountedPrices(prices, discount){
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i]*(1-discount);
        //finalPrice = Math.round(discountedPrice*100)/100;
        discounted.push(discountedPrice)
    }

    //console.log(length);
    //console.log(discountedPrice)
    //console.log(finalPrice);
    console.log(discounted);
    return discounted;
}

discountedPrices([100, 200, 300], 0.5)
