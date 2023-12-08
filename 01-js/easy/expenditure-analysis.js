/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spentByCat = {};
  for(const trans of transactions){
    if(spentByCat.hasOwnProperty(trans.category)){
      spentByCat[trans.category] = spentByCat[trans.category] + trans.price;
    } else{
      spentByCat[trans.category] = trans.price;
    }
  }
  const ans = []
  for(let cat in spentByCat){
    ans.push({category:cat,totalSpent:spentByCat[cat]});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
