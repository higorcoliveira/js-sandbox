var nome = 'Bia', anoNascimento = 1981;
function idade() {
	return new Date().getFullYear() - this.anoNascimento;
}

var pessoa = {
	nome,
	anoNascimento,
	idade,
	toString: function() {return `${this.nome} = ${this.idade()}`;}
};
console.log(pessoa.toString());