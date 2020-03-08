export default function groupArray(array = [], groupLength) {
  const finalArray = [];
  const input = array.slice(0);

  while(input[0]) {
    finalArray.push(
      input.splice(0, groupLength)
    );
  };

  return finalArray;
}