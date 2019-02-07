export const removeDuplicates = (arr, objKey) => {
  const newArray = arr.reverse().map( obj => obj[objKey])
    .map( (objKey, index, finalArr) => {
      return finalArr.indexOf(objKey) === index && index
    } )
    .filter(e => arr[e]).map(e => arr[e])
    .sort((a,b) => {
      return a.id - b.id;
    });
  
  return newArray;
}