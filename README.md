# Acervo Litúrgico — Objetos e Livros da Liturgia

Site educativo, responsivo e interativo sobre objetos e livros litúrgicos da tradição católica, com foco introdutório no **Rito Romano**. O projeto foi feito em HTML, CSS e JavaScript puro: não precisa de banco de dados, build, npm ou servidor próprio e pode ser publicado gratuitamente no GitHub Pages.

> **Nota editorial:** o Acervo Litúrgico é um projeto independente para estudo e divulgação. Não é um site oficial do Vaticano, da CNBB ou de uma diocese. Os usos concretos devem seguir os livros litúrgicos aprovados, as normas vigentes e a orientação da comunidade local.

## O que está incluído

- Página inicial com apresentação visual e navegação por seções.
- Catálogo de 16 objetos/utensílios e 10 livros ou repertórios litúrgicos.
- Busca por nome, categoria, função e termos relacionados.
- Filtros para todos os itens, objetos ou livros; ordenação alfabética ou por categoria.
- Fichas detalhadas com descrição, função, contexto, cuidados, curiosidades e fonte da imagem.
- Favoritos guardados no `localStorage` do navegador, sem enviar dados a um servidor.
- Alternância entre tema claro e escuro, também guardada no navegador.
- Guia de cores litúrgicas, quiz com cinco perguntas e pontuação, opção de imprimir ficha, compartilhamento do endereço e atalho `/` para focar a busca.
- Layout adaptável a celular, tablet e computador; navegação por teclado, textos alternativos e preferência por movimento reduzido.
- Fontes de referência e créditos das imagens.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Estrutura e conteúdo das seções do site. |
| `styles.css` | Identidade visual, layout responsivo, cartões, modal, tema e impressão. |
| `script.js` | Catálogo, busca, filtros, favoritos, fichas, tema, quiz e compartilhamento. |
| `favicon.svg` | Ícone do site. |
| `README.md` | Documentação, personalização e publicação. |
| `CREDITOS-IMAGENS.md` | Relação de imagens, autores e licenças consultadas. |
| `.nojekyll` | Indica ao GitHub Pages que o site é estático e não precisa do processamento Jekyll. |

## Como abrir no computador

1. Baixe e extraia o ZIP do projeto, se ele foi recebido compactado.
2. Abra a pasta `Acervo-Liturgico`.
3. Dê dois cliques em `index.html` para abrir no navegador.
4. A busca, os filtros, as fichas, os favoritos e o quiz funcionam localmente no navegador moderno. O compartilhamento nativo depende do navegador; em alguns contextos locais, a cópia do link pode ser bloqueada.
5. As imagens vêm do Wikimedia Commons por URLs externas. Para ver as fotografias, é necessário estar conectado à internet. Se uma imagem não carregar, os cartões mostram um símbolo substituto e as demais funções continuam disponíveis.

Não é necessário instalar extensões, Python, Node.js ou qualquer pacote para visualizar ou publicar o site.

## Publicar gratuitamente no GitHub Pages

### 1. Criar o repositório

1. Entre em [github.com](https://github.com/) e faça login.
2. Clique em **New repository**.
3. Escolha um nome, por exemplo `acervo-liturgico`.
4. Para um portfólio público, escolha **Public**. Você pode adicionar o `README` depois de enviar os arquivos.
5. Clique em **Create repository**.

### 2. Enviar os arquivos

**Pelo site do GitHub (mais simples):**

1. Dentro do repositório, clique em **Add file → Upload files**.
2. Arraste os arquivos e pastas do projeto para a área de envio. Envie `index.html`, `styles.css`, `script.js`, `favicon.svg`, `README.md`, `CREDITOS-IMAGENS.md` e `.nojekyll`.
3. Clique em **Commit changes** para salvar os arquivos na branch principal (`main`).

**Pelo Git, se já estiver instalado:**

```bash
git init
git add .
git commit -m "Cria site Acervo Litúrgico"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/acervo-liturgico.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo nome da sua conta e ajuste a URL pelo endereço real do repositório. Se ele já tiver sido inicializado pelo GitHub, siga o fluxo correspondente ou clone o repositório primeiro.

### 3. Ativar o GitHub Pages

1. No repositório, abra **Settings**.
2. No menu lateral, escolha **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`.
5. Clique em **Save**.
6. Aguarde a publicação concluir; o endereço aparecerá na própria seção **Pages**. Para um repositório chamado `acervo-liturgico`, o endereço normalmente terá o formato `https://SEU-USUARIO.github.io/acervo-liturgico/`.

Após alterações futuras, envie o commit para `main`; o Pages atualizará o site. A primeira publicação pode levar alguns minutos, e o endereço exato é o que o GitHub mostrar nas configurações.

## Como personalizar o conteúdo

### Adicionar ou editar uma ficha

Abra `script.js` e localize a constante `ACERVO`. Cada item segue este modelo:

```js
{
  id: 'nome-sem-espacos',
  kind: 'objeto', // use 'objeto' ou 'livro'
  title: 'Nome da peça',
  category: 'Categoria',
  icon: '✦',
  image: 'porto', // chave de imagem definida em MEDIA
  short: 'Resumo curto exibido no cartão.',
  description: 'Descrição mais completa.',
  purpose: 'Função litúrgica.',
  context: 'Contexto e distinções úteis.',
  care: 'Cuidados e preparação.',
  curious: 'Curiosidade educativa.',
  imageAlt: 'Descrição acessível da imagem.',
  sourceNote: 'Observação sobre o que aparece na foto.'
}
```

Dicas:

- Use um `id` exclusivo, simples e sem espaços.
- Em `kind`, use apenas `objeto` ou `livro`, pois os filtros dependem desses valores.
- Para criar outra imagem, adicione uma entrada a `MEDIA` com nome do arquivo, página de origem, crédito e licença; depois use a chave no campo `image`.
- Ajuste os números no HTML se quiser outro texto de contagem inicial, embora os números do catálogo sejam atualizados pelo JavaScript ao carregar.
- Revise conteúdo e referências antes de apresentar o site como material de formação. A descrição didática não substitui normas oficiais.

### Mudar aparência e cores

As principais cores estão no início de `styles.css`, dentro de `:root`. As variáveis `--forest`, `--gold`, `--paper`, `--white` e `--ink` são usadas pelo tema claro. O tema escuro tem valores separados no seletor `html[data-theme="dark"]`.

A família tipográfica usa Playfair Display e DM Sans via Google Fonts. Se o serviço não estiver acessível, o site recorre às fontes alternativas do sistema.

## Fontes de referência do conteúdo

- **Instrução Geral do Missal Romano (IGMR)**, portal da Santa Sé: [texto em inglês](https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html). Referência para a celebração da Missa e os vasos sagrados.
- **Sacrosanctum Concilium**, Constituição sobre a Sagrada Liturgia, Concílio Vaticano II: [texto em português](https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html).
- **Dicastério para o Culto Divino e a Disciplina dos Sacramentos**: [portal oficial](https://www.vatican.va/roman_curia/congregations/ccdds/index_po.htm).

As páginas de referência podem mudar de endereço, e algumas páginas oficiais podem estar disponíveis apenas em certos idiomas. Para aplicação prática, utilize a edição litúrgica aprovada para sua região e as orientações oficiais locais.

## Créditos das imagens

Consulte [`CREDITOS-IMAGENS.md`](CREDITOS-IMAGENS.md). As páginas do Wikimedia Commons registram autoria e licença em cada arquivo. O uso de arquivos com licença Creative Commons pode exigir atribuição, indicação de licença e, em alguns casos, compartilhamento sob a mesma licença. Confira as condições originais antes de redistribuir imagens ou fazer modificações.

## Privacidade e limitações

- A busca, o quiz, o tema e os favoritos funcionam no navegador; este site não coleta contas nem envia favoritos para um servidor.
- O site não utiliza API de banco de dados nem serviços de autenticação.
- As imagens são externas; se quiser uma versão completamente independente de serviços externos, baixe os arquivos de imagem a partir das páginas de origem, confira as licenças e atualize `MEDIA` para apontar para arquivos locais dentro de uma pasta como `assets/images/`.
- O projeto foi preparado para hospedagem estática. Recursos de compartilhamento dependem do suporte do navegador e do contexto seguro.

## Licença do código

O código original deste projeto é disponibilizado sob a licença MIT, conforme o arquivo [`LICENSE`](LICENSE). Essa licença não substitui nem altera as licenças próprias das fotografias, ilustrações, marcas ou documentos externos referenciados aqui.
