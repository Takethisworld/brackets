module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const bracketPairs={};
  const openBrackets = new Set();

bracketsConfig.map(([open,close])=>{
  bracketPairs[close]=open;
  openBrackets.add(open)
});

for(item of str){
  const isOpening = openBrackets.has(item);
  const isClosing = item in bracketPairs;

  if(isOpening && (!isClosing || stack[stack.length - 1] !== item)){
    stack.push(item);
  }else if(isClosing){
    if(stack.pop() !== bracketPairs[item]){
      return false
    }
  }
}
  return stack.length === 0;
}
