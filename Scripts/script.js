const Pagina = {
	mostrarPagina(nomeDaPagina) {
		if (nomeDaPagina === 'sobre' || nomeDaPagina === 'projetos' || nomeDaPagina === 'contato') {
			document.getElementById(`${nomeDaPagina}`).style.display = 'inline';
			Utils.rolarParaConteudo('inline');
		} else if (nomeDaPagina === 'experiencia') {
			document.getElementById(`${nomeDaPagina}`).style.display = 'flex';
			Utils.rolarParaConteudo('flex');
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

const Utils = {
	Placeholder: {
		escondePlaceholder() {
			var input = document.getElementsByTagName('input');

			document.getElementById('textareaContato').addEventListener('click', () => {
				document.getElementById('textareaContato').placeholder = '';
			});

			Array.from(input).forEach((element) => {
				element.addEventListener('click', function () {
					element.placeholder = '';
				});
			});
		},
		mostrarPlaceholder() {
			var input = document.getElementsByTagName('input');
			document.getElementById('textareaContato').addEventListener('focusout', () => {
				document.getElementById('textareaContato').placeholder = 'Mensagem';
			});

			input = Array.from(input);
			input[0].addEventListener('focusout', () => {
				input[0].placeholder = 'Nome Completo';
			});
			input[1].addEventListener('focusout', () => {
				input[1].placeholder = 'Email';
			});
		},
	},
	rolarParaConteudo(display) {
		if (display === 'inline') document.getElementById('botaoContato').scrollIntoView({ behavior: 'smooth' });
		else {
			var experiencia = document.getElementById('experiencia');

			if (experiencia.style.display === 'flex') {
				document.getElementById('containerExperiencia').scrollIntoView({ behavior: 'smooth', block: 'end' });
			} else {
				document.getElementById('conteudoPrincipal').scrollIntoView({ behavior: 'smooth' });
			}
		}
	},
};

function init() {
	try {
		Utils.Placeholder.escondePlaceholder();
		Utils.Placeholder.mostrarPlaceholder();
	} catch (error) {
		alert(error.message);
	}
}

init();
