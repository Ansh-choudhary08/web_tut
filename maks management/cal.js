let add = document.querySelector('.add');
        let mul = document.querySelector('.mul');
        let sub = document.querySelector('.sub');
        let div = document.querySelector('.div');
        let del = document.querySelector('.del');
        let result = document.querySelector('.result');

        add.addEventListener('click', function() {
            let inputs = document.querySelectorAll('input');
            let val1 = parseFloat(inputs[0].value) || 0;
            let val2 = parseFloat(inputs[1].value) || 0;
            result.textContent = `Result: ${val1 + val2}`;
        });

        mul.addEventListener('click', function() {
            let inputs = document.querySelectorAll('input');
            let val1 = parseFloat(inputs[0].value) || 0;
            let val2 = parseFloat(inputs[1].value) || 0;
            result.textContent = `Result: ${val1 * val2}`;
        });

        sub.addEventListener('click', function() {
            let inputs = document.querySelectorAll('input');
            let val1 = parseFloat(inputs[0].value) || 0;
            let val2 = parseFloat(inputs[1].value) || 0;
            result.textContent = `Result: ${val1 - val2}`;
        });

        div.addEventListener('click', function() {
            let inputs = document.querySelectorAll('input');
            let val1 = parseFloat(inputs[0].value) || 0;
            let val2 = parseFloat(inputs[1].value) || 1; // Avoid division by zero
            result.textContent = `Result: ${val1 / val2}`;
        });

        del.addEventListener('click', function() {
            let inputs = document.querySelectorAll('input');
            inputs.forEach(input => input.value = '');
            result.textContent = '';
        });