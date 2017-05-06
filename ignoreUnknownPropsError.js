const original = console.error 
console.error = function(){
    if (arguments.length == 1 && arguments[0].includes('Warning: Unknown props')) return;
    original(...arguments);
}

