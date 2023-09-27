import { validate } from '../../../src/example02/before/cpf';

test('Deve retornar true com um CPF valido', function () {
	const isValid = validate('574.594.450-10');
	expect(isValid).toBeTruthy();
});

test('Deve retornar false com um CPF invalido', function () {
	const isValid = validate('524.594.450-10');
	expect(isValid).toBeFalsy();
});

test('Deve retornar false se for null', function () {
	const isValid = validate(null);
	expect(isValid).toBeFalsy();
});

test.only('Deve retornar false se for undefined', function () {
	const isValid = validate(undefined);
	expect(isValid).toBeUndefined();
});

test('Deve retornar false se tiver todos os numeros iguais', function () {
	const isValid = validate('111.111.111-11');
	expect(isValid).toBeFalsy();
});
