function like(param1) {
    let span = param1.parentElement.children[1];
    let prevVal = span.innerHTML;
  
    let newVal = parseInt(prevVal) + 1;
    span.innerHTML = newVal;
  }