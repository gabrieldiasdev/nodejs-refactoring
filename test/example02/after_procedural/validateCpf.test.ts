import { validateCpf } from '../../../src/example02/after_procedural/validateCpf';

test('Deve retornar true com um CPF valido', function () {
	const isValid = validateCpf('574.594.450-10');
	expect(isValid).toBeTruthy();
});

test('Deve retornar false com um CPF invalido', function () {
	const isValid = validateCpf('524.594.450-10');
	expect(isValid).toBeFalsy();
});

test('Deve retornar false se for null', function () {
	const isValid = validateCpf(null);
	expect(isValid).toBeFalsy();
});

test('Deve retornar false se for undefined', function () {
	const isValid = validateCpf(undefined);
	expect(isValid).toBeFalsy();
});

const wrongSameDigitCpf = [
	'111.111.111-11',
	'222.222.222-22',
	'333.333.333-33',
];

test.each(wrongSameDigitCpf)(
	'Deve retornar false se tiver todos os numeros iguais',
	function (cpf) {
		const isValid = validateCpf(cpf);
		expect(isValid).toBeFalsy();
	}
);
