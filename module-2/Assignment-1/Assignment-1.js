let name ='LG Monitor';
let basePrice = 16500;
let discountPercent = 55;
let texRate = 18;
let stockStatus ='in_stock';
console.log('Product=',name);

console.log('Price=',basePrice);


  function calculateDiscountedPrice(basePrice, discountPercent){
    return basePrice-(basePrice*(discountPercent/100));

  }
  let Price = calculateDiscountedPrice(basePrice,discountPercent);
  console.log('Discounted Price=',Price);
  

   function calculateTexRate(Price,texRate){
    return Price*(texRate/100)

   } 
   const texprice=calculateTexRate(Price,texRate);
   console.log('Tex Rate=',texprice);
    
   function calculatefinalPrice(Price,texprice){
    return (Price+texprice)
   }
   let finalPrice =calculatefinalPrice(Price,texprice)
   console.log('Final Price=',finalPrice);
   
   function isFreeShipping(finalPrice){
  if(finalPrice>=500) return'Free Shipping'
  return'shipping charge',49;
 
     }
     let freeorNot = isFreeShipping(finalPrice)
     console.log(freeorNot);
     
     function getStockMessage (stockStatus){
      switch(stockStatus){
        case 'in_stock':
        return'in stock'

        case 'limited_Stock':
          return 'Limited Stock'
          case 'Out_of_stock':
            return 'Out of Stock'
      }
     }
  let message=  getStockMessage(stockStatus);
  console.log(message);
  