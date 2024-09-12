//Маска для паспорта
let seriesInp = document.getElementById('seria');
let numberInp = document.getElementById('num');

function onlyNum(inp, maxlength) {
	let inpValue = inp.value;
	inpValue = inpValue.replace(/\D/g, '');

	inpValue = inpValue.slice(0, maxlength);

	inp.value = inpValue;
}

seriesInp.addEventListener('input', () => {
	onlyNum(seriesInp, 4)
})

numberInp.addEventListener('input', () => {
	onlyNum(numberInp, 6)
})




//Маска для госномера
document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.letter-number');
    if (!input) {
        console.error('Input element not found');
        return;
    }

    function formatInput(value) {
        let formattedValue = value.toUpperCase();
        formattedValue = formattedValue.replace(/^([А-Я]?)(\d{0,3})([А-Я]{0,2})(\d{0,3})$/, function(_, letter1, digits1, letters2, digits2) {
            let result = letter1 || '';
            result += digits1 || '';
            result += letters2 || '';
            result += digits2 || '';
            return result;
        });

        return formattedValue;
    }

    function handleInput(event) {
        let value = event.target.value;
        value = value.replace(/[^А-Яа-я\d]/gi, '');
        value = formatInput(value);
        event.target.value = value;
    }

    function handleKeyDown(event) {
        const key = event.key;
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (allowedKeys.includes(key)) {
            return;
        }

        const value = event.target.value;

        if (value.length >= 9 && !allowedKeys.includes(key)) {
            event.preventDefault();
            return;
        }

        if (value.length === 0 && !/[А-Яа-я]/.test(key)) {
            event.preventDefault();
        }
        else if (value.length > 0 && value.length < 4 && !/\d/.test(key)) {
            event.preventDefault();
        }
        else if (value.length >= 4 && value.length < 6 && !/[А-Яа-я]/.test(key)) {
            event.preventDefault();
        }
        else if (value.length >= 6 && value.length < 9 && !/\d/.test(key)) {
            event.preventDefault();
        }
    }
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeyDown);
})