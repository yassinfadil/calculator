document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (button.value === 'AC') {
                display.value = '';
            } else if (button.value === 'Del') {
                display.value = display.value.toString().slice(0, -1);
            } else if (button.value === '=') {
                display.value = eval(display.value);
            }  else if (button.value === '2^') {
                display.value = Math.pow(display.value,2)
                
            } 
            else {
                display.value += button.value;
            }
        });
    });
});
