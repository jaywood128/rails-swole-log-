var tree2str = function(t) {
  if (!t) return '';
//1) check to see if the tree (t) is null. This will happen when tree2str is called 
//recursivley for each parent element in the tree. This if statement will also act as 
//our break point prevent an infinite loop

  const left = tree2str(t.left);
  const right = tree2str(t.right);
  
  // omit printing empty right node in the string
  if (right) return `${t.val}(${left})(${right})`;
  // if right exists, we will always include left, even if it's null.  
  else if (left) return `${t.val}(${left})`;
  // if left is truthy, we know right is falsey because we exited the if statement. 
  //Therefore, omit the right parenthesis. 
  else return `${t.val}`;
};