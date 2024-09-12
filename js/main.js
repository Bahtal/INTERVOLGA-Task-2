{/* <div class="form__inner">
						<label class='label-inp' for="passport">Паспортные данные</label>
						<div class="seria-num">
							<input class='input' type="text" id='seria' placeholder='Серия' maxlength='4' required>
							<input class='input' type="text" id='num' placeholder='Номер' maxlength='6' required>
						</div>
					</div> */}

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