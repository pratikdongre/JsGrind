//6
///////////////

alert(alert(1) || 2 || alert(3));
// in this it goes inside the outer alert see alert(1) executes it alert return undefined so outer alert goes further get truthy value 2 

alert(alert(1) && alert(2));
// alert(1) alerts 1 and return undefined so && found one false value why it shoudl bother going further the output is undefiend 
// it found the first falsy value 



alert(null || 2 && 3 || 4);
// precendecen && has more so 2 && 3 gives 3 
// now null || 3 || 4 
// || looks for first truthy value and prints that 
alert(null && 3) // null 
alert(2 && 3) // 3 