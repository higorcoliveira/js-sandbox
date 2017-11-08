function tag(strings, ...values) {
	console.log(strings);
	console.log(values);
	return 'TESTE';
}
var aluno = 'Gui';
var status = 'Aprovado';
console.log(tag `${aluno} está ${status}`);