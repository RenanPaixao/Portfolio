const Pagina = {
	mostrarPagina(nomeDaPagina) {
		if (nomeDaPagina === 'sobre' || nomeDaPagina === 'projetos' || nomeDaPagina === 'contato') {
			document.getElementById(`${nomeDaPagina}`).style.display = 'inline';
		} else if (nomeDaPagina === 'experiencia') {
			document.getElementById(`${nomeDaPagina}`).style.display = 'flex';
		} else {
			var erro = new Error('nome da pagina não encontrado para visualizar');
			alert(erro);
		}
	},
	esconderPaginas() {
		document.getElementById('sobre').style.display = 'none';
		document.getElementById('projetos').style.display = 'none';
		document.getElementById('experiencia').style.display = 'none';
		document.getElementById('contato').style.display = 'none';
	},
};
