'use strict';

/*
 * Acervo Litúrgico — catálogo educativo estático.
 * Para editar itens: altere os objetos do array ACERVO abaixo.
 * Imagens de Wikimedia Commons são carregadas por URL; cada ficha aponta para a página da imagem.
 */

const MEDIA = {
  porto: {
    file: 'Sé do Porto-Museu de Arte Sacra-Objetos de culto-20140910.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Sé_do_Porto-Museu_de_Arte_Sacra-Objetos_de_culto-20140910.jpg',
    credit: 'Daniel VILLAFRUELA · CC BY-SA 4.0',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  vessels: {
    file: 'Liturgical vessel Chalice ,Paten ,Ciborium Cruets and Bible.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Liturgical_vessel_Chalice_,Paten_,Ciborium_Cruets_and_Bible.jpg',
    credit: 'MARkarani · CC BY-SA 4.0',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  missal: {
    file: 'Roman missal (15th century).jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Roman_missal_(15th_century).jpg',
    credit: 'Autor desconhecido · imagem em domínio público (ver página do arquivo)',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/'
  },
  rubrics: {
    file: 'Catholic liturgical rubrics.png',
    page: 'https://commons.wikimedia.org/wiki/File:Catholic_liturgical_rubrics.png',
    credit: 'Louis La Ravoire Morrow · domínio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/'
  },
  chalice: {
    file: 'Clevelandart 1990.3.1.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Clevelandart_1990.3.1.jpg',
    credit: 'Cleveland Museum of Art · CC0',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  paten: {
    file: 'Clevelandart 1990.3.2.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Clevelandart_1990.3.2.jpg',
    credit: 'Cleveland Museum of Art · CC0',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  chaliceMet: {
    file: 'Chalice and paten MET 20268.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Chalice_and_paten_MET_20268.jpg',
    credit: 'The Metropolitan Museum of Art · CC0',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  monstrance: {
    file: "Monstrance st. Andrew's Catholic Church, Krásno nad Kysucou, Slovakia.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Monstrance_st._Andrew's_Catholic_Church,_Krásno_nad_Kysucou,_Slovakia.jpg",
    credit: 'Kuc-kuc-Hm · CC BY-SA 4.0',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  evangeliary: {
    file: "Hugo d'Oignies Evangeliary.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Hugo_d'Oignies_Evangeliary.jpg",
    credit: 'Goodness Shamrock · fotografia CC BY 3.0; peça medieval em domínio público',
    license: 'https://creativecommons.org/licenses/by/3.0/'
  },
  breviary: {
    file: 'Breviario romanum, 1568.jpg',
    page: 'https://commons.wikimedia.org/wiki/File:Breviario_romanum,_1568.jpg',
    credit: 'IL PONTE - Palazzo Crivelli · domínio público indicado no Commons',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/'
  }
};

const ACERVO = [
  {
    id: 'calice', kind: 'objeto', title: 'Cálice', category: 'Vaso sagrado', icon: '♜', image: 'chalice',
    short: 'O vaso utilizado para o vinho que, na celebração eucarística, se torna o Sangue de Cristo.',
    description: 'O cálice é uma taça litúrgica, geralmente provida de haste e base, usada na celebração da Eucaristia. É um dos vasos sagrados mais diretamente associados à mesa do altar.',
    purpose: 'Na Missa, recebe o vinho que será consagrado. A forma, os materiais e os cuidados de uso devem respeitar as normas litúrgicas vigentes e a dignidade da celebração.',
    context: 'O cálice aparece junto da patena e de outros elementos preparados para a Liturgia Eucarística. A Instrução Geral do Missal Romano trata especificamente dos vasos sagrados.',
    care: 'Deve ser manuseado e purificado conforme as orientações litúrgicas. Materiais, revestimentos internos e procedimentos de conservação não devem ser improvisados.',
    curious: 'O desenho do cálice varia de época para época: hastes, nós, bases e ornamentos refletem diferentes estilos artísticos e tradições locais.',
    imageAlt: 'Cálice litúrgico histórico, registrado em coleção de arte sacra.', sourceNote: 'Exemplo histórico de cálice; o modelo fotografado pode não corresponder ao usado em sua comunidade.'
  },
  {
    id: 'patena', kind: 'objeto', title: 'Patena', category: 'Vaso sagrado', icon: '◒', image: 'paten',
    short: 'Pequeno prato litúrgico usado com o pão que será consagrado na Eucaristia.',
    description: 'A patena é um prato raso, normalmente de metal, associado à preparação e à consagração do pão eucarístico. É tradicionalmente usada com o cálice.',
    purpose: 'Na Liturgia Eucarística, serve para apresentar ou conter a hóstia que será consagrada. O tamanho e o formato dependem do uso previsto e das normas aplicáveis.',
    context: 'O cálice e a patena são reconhecidos na tradição romana como vasos sagrados de especial importância na celebração da Missa.',
    care: 'A limpeza e a guarda devem preservar a peça e observar os procedimentos indicados pelos responsáveis pela sacristia.',
    curious: 'Patena e cálice podem formar um conjunto artístico, mas não precisam ter o mesmo estilo ou ornamentação em todas as comunidades.',
    imageAlt: 'Patena histórica em acervo de arte sacra.', sourceNote: 'Fotografia de uma peça histórica catalogada no Cleveland Museum of Art; uso ilustrativo.'
  },
  {
    id: 'ciborio', kind: 'objeto', title: 'Cibório', category: 'Vaso sagrado', icon: '♜', image: 'vessels',
    short: 'Recipiente, muitas vezes com tampa, destinado às hóstias consagradas.',
    description: 'O cibório é um vaso utilizado para conter hóstias. É comum que possua uma tampa e uma forma de taça com haste, embora o desenho varie conforme a tradição e a época.',
    purpose: 'Pode ser utilizado para a reserva ou distribuição das hóstias consagradas, conforme a organização da celebração e as normas locais.',
    context: 'O termo e o formato podem variar regionalmente. Em alguns lugares, palavras como âmbula são usadas para recipientes de finalidade próxima; convém respeitar a nomenclatura adotada pela comunidade.',
    care: 'A guarda, o tratamento e a purificação seguem as normas para vasos sagrados e as orientações do responsável pela sacristia.',
    curious: 'Peças antigas de cibório são também importantes registros de ourivesaria, doações comunitárias e estilos artísticos.',
    imageAlt: 'Conjunto de vasos de uso litúrgico cristão, incluindo recipientes para a Eucaristia.', sourceNote: 'A fotografia reúne peças de uso cristão; o uso exato de cada recipiente pode variar entre tradições.'
  },
  {
    id: 'ostensorio', kind: 'objeto', title: 'Ostensório', category: 'Exposição eucarística', icon: '☼', image: 'monstrance',
    short: 'Peça destinada à exposição solene da hóstia consagrada para adoração.',
    description: 'O ostensório, também chamado custódia em determinados contextos, possui um centro onde se coloca a hóstia consagrada para exposição. Muitos exemplares têm raios, cruz ou decoração simbólica.',
    purpose: 'É empregado em momentos de exposição e adoração eucarística conforme os livros litúrgicos e as normas da Igreja.',
    context: 'A arquitetura da peça procura direcionar o olhar para o centro da exposição. A forma circular, os raios e outros elementos são soluções artísticas frequentes, não um padrão universal.',
    care: 'O uso exige os cuidados reverentes previstos pela disciplina eucarística e o acompanhamento de ministros autorizados segundo as normas aplicáveis.',
    curious: 'O nome está relacionado à ideia de mostrar ou apresentar. O termo “custódia” também pode designar a peça em português, especialmente em Portugal.',
    imageAlt: 'Ostensório dourado fotografado no interior de uma igreja católica na Eslováquia.', sourceNote: 'Fotografia de Kuc-kuc-Hm, Wikimedia Commons, licença CC BY-SA 4.0.'
  },
  {
    id: 'pixide', kind: 'objeto', title: 'Píxide', category: 'Vaso sagrado', icon: '◉', image: 'vessels',
    short: 'Pequeno recipiente usado para levar a Eucaristia a pessoas impossibilitadas de ir à igreja.',
    description: 'A píxide é um pequeno recipiente para guardar e transportar hóstias consagradas, frequentemente usado na comunhão levada aos enfermos, de acordo com as normas e a prática pastoral locais.',
    purpose: 'Permite transportar a Eucaristia com segurança e reverência. A forma pode ser simples e compacta, adequada ao transporte.',
    context: 'Não se deve confundir automaticamente píxide, cibório e ostensório: embora possam ter relação com a Eucaristia, possuem formatos e funções distintos.',
    care: 'A píxide deve ser mantida limpa, guardada com dignidade e utilizada por ministros que estejam autorizados para essa função.',
    curious: 'Em contextos históricos, o nome píxide também foi utilizado para recipientes de formatos variados; consulte a nomenclatura do rito e da comunidade.',
    imageAlt: 'Vasos litúrgicos cristãos em exposição, usados como referência visual para recipientes eucarísticos.', sourceNote: 'Imagem de conjunto; não representa necessariamente uma píxide identificável.'
  },
  {
    id: 'galhetas', kind: 'objeto', title: 'Galhetas', category: 'Preparação do altar', icon: '♧', image: 'vessels',
    short: 'Pequenos recipientes para a água e o vinho usados na preparação da celebração.',
    description: 'As galhetas são pequenos recipientes, muitas vezes acompanhados por uma bandeja, destinados a conter a água e o vinho utilizados na preparação da Missa.',
    purpose: 'São levadas à preparação do altar, onde se apresentam os dons e se prepara o cálice segundo o rito.',
    context: 'Podem ser de vidro, cristal, metal ou outros materiais adequados. Marcações ou formatos ajudam a distinguir água e vinho.',
    care: 'Devem estar limpas e identificadas de forma clara para evitar confusões durante a celebração.',
    curious: 'O conjunto de galhetas faz parte dos objetos comuns na sacristia e na credência, mesa auxiliar próxima do espaço celebrativo.',
    imageAlt: 'Conjunto de vasos litúrgicos de uma igreja cristã, incluindo recipientes de serviço.', sourceNote: 'Imagem contextual de utensílios de culto; as galhetas podem não estar isoladas na fotografia.'
  },
  {
    id: 'turibulo', kind: 'objeto', title: 'Turíbulo', category: 'Incensação', icon: '♨', image: 'porto',
    short: 'Recipiente suspenso por correntes em que se queima incenso durante algumas celebrações.',
    description: 'O turíbulo é um recipiente metálico suspenso por correntes, onde se coloca carvão próprio e incenso. O conjunto permite movimentá-lo de maneira controlada.',
    purpose: 'O incenso pode ser utilizado em momentos previstos pelo rito, como sinal de honra, oração e reverência. Seu uso não ocorre em todas as celebrações.',
    context: 'A incensação tem indicações específicas nos livros litúrgicos. A equipe deve conhecer o rito, os percursos e os cuidados com brasas e fumaça.',
    care: 'Utilize carvão e utensílios apropriados, mantenha distância de tecidos e pessoas, e espere que o metal esfrie antes de guardar.',
    curious: 'O incenso é usado em várias tradições religiosas. O sentido concreto de cada incensação depende do contexto celebrativo.',
    imageAlt: 'Objetos históricos de arte sacra expostos em museu, entre eles vasos e peças metálicas de culto.', sourceNote: 'Fotografia de conjunto de objetos sacros; o turíbulo pode não estar em destaque.'
  },
  {
    id: 'naveta', kind: 'objeto', title: 'Naveta', category: 'Incensação', icon: '⌁', image: 'porto',
    short: 'Pequeno recipiente, frequentemente em forma de barco, que guarda o incenso.',
    description: 'A naveta é um recipiente para o incenso que será utilizado no turíbulo. Seu nome remete à forma de pequena nave, comum em muitos modelos.',
    purpose: 'É apresentada ao ministro que coloca o incenso no turíbulo, conforme os momentos previstos para a incensação.',
    context: 'Naveta e turíbulo trabalham em conjunto: uma guarda o incenso e o outro permite queimá-lo com carvão próprio.',
    care: 'Mantenha o recipiente seco, limpo e identificado; o incenso deve ser guardado conforme as recomendações do fabricante e da sacristia.',
    curious: 'A naveta costuma possuir uma pequena colher para retirar o incenso, que pode estar decorada de modo semelhante ao turíbulo.',
    imageAlt: 'Coleção de objetos de culto e arte sacra em exposição.', sourceNote: 'Imagem de coleção; a naveta não está individualizada na fotografia.'
  },
  {
    id: 'cruz-processional', kind: 'objeto', title: 'Cruz processional', category: 'Procissão', icon: '✝', image: 'porto',
    short: 'Cruz levada à frente da procissão para orientar visualmente o caminho celebrativo.',
    description: 'A cruz processional é montada em uma haste e portada à frente de determinadas procissões. É um sinal cristão que reúne a assembleia em torno do caminho celebrado.',
    purpose: 'Pode abrir a procissão de entrada, a procissão de saída e outros deslocamentos previstos no rito e no costume local.',
    context: 'O formato, a imagem de Cristo ou outros detalhes iconográficos variam conforme a comunidade, a época e o estilo artístico.',
    care: 'Deve ser transportada e guardada com segurança, respeitando a altura, o peso e a estabilidade da haste.',
    curious: 'O termo “cruz processional” descreve principalmente a função da peça, que é distinta de uma cruz fixa no altar ou na parede.',
    imageAlt: 'Objetos de culto de uma coleção de arte sacra.', sourceNote: 'Imagem de conjunto de objetos sacros; a cruz processional pode não ser o foco da fotografia.'
  },
  {
    id: 'casticais', kind: 'objeto', title: 'Castiçais e velas', category: 'Iluminação ritual', icon: '♧', image: 'porto',
    short: 'Sustentam as velas utilizadas conforme a forma e o grau da celebração.',
    description: 'Castiçais são suportes para velas. A quantidade, a posição e o tipo de vela podem variar conforme a celebração, o espaço e as normas litúrgicas.',
    purpose: 'A luz das velas está associada à oração, à vigilância e ao caráter festivo ou solene de muitas celebrações cristãs.',
    context: 'Velas também possuem usos específicos em ritos como batismo e exéquias. Sua função deve ser interpretada de acordo com a celebração concreta.',
    care: 'Mantenha velas firmes, longe de materiais inflamáveis e de circulação intensa; siga os cuidados de segurança do espaço.',
    curious: 'A luz aparece com frequência na linguagem bíblica e na arte cristã, mas o significado ritual de uma vela não é idêntico em todos os contextos.',
    imageAlt: 'Peças de arte sacra e objetos de culto em exposição.', sourceNote: 'Imagem de conjunto; os castiçais podem não estar individualizados na fotografia.'
  },
  {
    id: 'aspersorio', kind: 'objeto', title: 'Aspersório e hissope', category: 'Água benta', icon: '✣', image: 'porto',
    short: 'Instrumento utilizado para aspergir água benta em ritos próprios.',
    description: 'O aspersório é um instrumento que ajuda a aspergir água benta. “Hissope” é um nome tradicional também utilizado em português para instrumentos desse tipo.',
    purpose: 'É empregado em bênçãos e em ritos que incluem aspersão, de acordo com o livro litúrgico correspondente.',
    context: 'A água benta é utilizada em diversos contextos rituais. O gesto, as palavras e as circunstâncias são definidos pelo rito, não apenas pelo instrumento.',
    care: 'Deve ser mantido limpo e guardado junto aos materiais próprios do rito. Evite misturar recipientes ou instrumentos de usos diferentes.',
    curious: 'O uso de água como sinal de purificação e bênção tem raízes bíblicas e aparece em diversas tradições cristãs.',
    imageAlt: 'Coleção de objetos de culto em museu de arte sacra.', sourceNote: 'Imagem contextual de utensílios de culto; o aspersório pode não estar em destaque.'
  },
  {
    id: 'lavabo', kind: 'objeto', title: 'Lavabo: jarra e bacia', category: 'Preparação do altar', icon: '♧', image: 'porto',
    short: 'Conjunto para o gesto de lavar as mãos do celebrante durante a Missa.',
    description: 'O conjunto de lavabo inclui normalmente uma jarra, uma bacia e um pequeno pano. A água é derramada sobre as mãos do sacerdote no momento previsto da celebração.',
    purpose: 'Na Missa, o gesto do lavabo acompanha a oração própria e manifesta simbolicamente o desejo de purificação interior.',
    context: 'O gesto é simples e não substitui a higiene cotidiana; sua interpretação litúrgica depende das orações que o acompanham.',
    care: 'Jarra e bacia devem estar limpas e prontas antes do início. O pano utilizado deve ser lavado e guardado conforme a organização da sacristia.',
    curious: 'O termo “lavabo” também designa o gesto de lavar as mãos, não apenas os recipientes empregados.',
    imageAlt: 'Peças de ourivesaria e objetos de culto expostos no Museu de Arte Sacra da Sé do Porto.', sourceNote: 'Imagem de coleção de objetos de culto; o conjunto do lavabo pode não estar isolado.'
  },
  {
    id: 'corporal', kind: 'objeto', title: 'Corporal', category: 'Linho litúrgico', icon: '▦', image: 'vessels',
    short: 'Tecido branco dobrado que é colocado sobre o altar para receber os vasos eucarísticos.',
    description: 'O corporal é um pano litúrgico, tradicionalmente de linho branco, que é aberto sobre o altar durante a preparação e a celebração da Eucaristia.',
    purpose: 'Sobre ele são colocados os vasos eucarísticos conforme as rubricas. Sua forma dobrada ajuda a organizar a peça e o cuidado com eventuais fragmentos.',
    context: 'Pertence ao conjunto de alfaias litúrgicas, ao lado de outros panos que possuem funções distintas, como o purificatório, a pala e o manustérgio.',
    care: 'A preparação, a lavagem e a guarda de panos litúrgicos devem seguir as orientações da comunidade e o tratamento adequado ao tecido.',
    curious: 'Apesar de parecer simples, a dobra tradicional do corporal ajuda a mantê-lo organizado quando é levado e guardado.',
    imageAlt: 'Vasos litúrgicos e Bíblia dispostos em conjunto sobre superfície de culto.', sourceNote: 'Imagem contextual de vasos; o corporal não está em destaque.'
  },
  {
    id: 'purificatorio', kind: 'objeto', title: 'Purificatório', category: 'Linho litúrgico', icon: '▤', image: 'chaliceMet',
    short: 'Pano utilizado para a purificação e secagem do cálice e de outros vasos, conforme as rubricas.',
    description: 'O purificatório é um pequeno pano litúrgico usado nos cuidados com os vasos sagrados durante a celebração, em especial no contexto da purificação do cálice.',
    purpose: 'Serve para auxiliar o cuidado reverente e organizado com os vasos, seguindo os procedimentos indicados pelos livros litúrgicos.',
    context: 'Não deve ser confundido com o corporal, que cobre uma área do altar, nem com o manustérgio, usado para secar as mãos no lavabo.',
    care: 'A lavagem e a destinação de tecidos que tiveram contato com os vasos sagrados devem seguir a disciplina e as orientações da comunidade.',
    curious: 'Nomes regionais podem variar; a função é a melhor maneira de distinguir as alfaias semelhantes.',
    imageAlt: 'Cálice e patena históricos fotografados em coleção museológica.', sourceNote: 'Imagem de vasos sagrados, utilizada como contexto visual para os cuidados com os panos.'
  },
  {
    id: 'manustergio', kind: 'objeto', title: 'Manustérgio', category: 'Linho litúrgico', icon: '▤', image: 'vessels',
    short: 'Toalha destinada a secar as mãos no rito do lavabo.',
    description: 'O manustérgio é um pano usado para secar as mãos do celebrante após o lavabo. É diferente do corporal e do purificatório, que têm outras funções.',
    purpose: 'É apresentado junto ao conjunto do lavabo quando a celebração prevê o gesto de lavar as mãos.',
    context: 'A distinção entre os panos litúrgicos é útil para a preparação da sacristia e para evitar que sejam intercambiados sem critério.',
    care: 'Deve ser mantido limpo, dobrado e guardado em local apropriado junto dos elementos necessários à celebração.',
    curious: 'A palavra vem da ideia de “toalha para as mãos” e ajuda a lembrar a função específica da peça.',
    imageAlt: 'Conjunto de utensílios de culto e livro disposto em contexto cristão.', sourceNote: 'Imagem contextual; o manustérgio é um tecido e não está isolado nesta fotografia.'
  },
  {
    id: 'sacrario', kind: 'objeto', title: 'Sacrário', category: 'Mobiliário litúrgico', icon: '▣', image: 'porto',
    short: 'Local seguro e digno destinado à reserva eucarística, segundo as normas da Igreja.',
    description: 'O sacrário é um recipiente fixo, seguro e digno, destinado à reserva da Eucaristia. Sua localização e seus sinais devem respeitar as normas litúrgicas e as orientações diocesanas.',
    purpose: 'A reserva eucarística permite, entre outras finalidades, levar a comunhão a enfermos e favorecer a adoração, conforme a disciplina da Igreja.',
    context: 'O sacrário é diferente dos vasos móveis, como o cibório ou a píxide. O conjunto do espaço eucarístico é definido pelas normas aplicáveis.',
    care: 'Seu acesso, fechamento e organização são responsabilidades a serem tratadas com reverência e segundo os procedimentos da comunidade.',
    curious: 'A presença do sacrário pode ser indicada por uma lâmpada própria, conforme as normas e os costumes legítimos.',
    imageAlt: 'Objetos de culto em exposição de arte sacra.', sourceNote: 'Imagem de objetos litúrgicos; o sacrário não está necessariamente representado nesta fotografia.'
  },
  {
    id: 'missal', kind: 'livro', title: 'Missal Romano', category: 'Livro da Eucaristia', icon: '▤', image: 'missal',
    short: 'Livro que reúne orações, textos e rubricas para a celebração da Missa.',
    description: 'O Missal Romano contém as orações presidenciais, as fórmulas eucarísticas, prefácios, bênçãos e outras partes próprias da celebração da Missa, de acordo com a edição aprovada.',
    purpose: 'Orienta o sacerdote e os ministros na celebração e traz textos próprios dos dias, tempos e solenidades do calendário litúrgico.',
    context: 'O Missal não substitui o Lecionário: as leituras bíblicas proclamadas na Missa são organizadas em livros próprios, embora as celebrações possam indicar suas referências.',
    care: 'É importante utilizar a edição aprovada e vigente para o lugar onde se celebra, mantendo fitas e marcadores organizados sem danificar as páginas.',
    curious: 'A imagem histórica deste acervo mostra um missal antigo; ela não representa necessariamente a edição oficial atualmente usada no Brasil.',
    imageAlt: 'Missal romano histórico do século XV, em fotografia de obra antiga.', sourceNote: 'Imagem de um missal romano do século XV; a edição fotografada é histórica.'
  },
  {
    id: 'lecionario', kind: 'livro', title: 'Lecionário', category: 'Livro da Palavra', icon: '▤', image: 'rubrics',
    short: 'Organiza as leituras bíblicas proclamadas nas celebrações, segundo o calendário e o rito.',
    description: 'O Lecionário reúne as leituras bíblicas selecionadas para as celebrações litúrgicas. A organização prevê domingos, dias de semana, solenidades, festas e celebrações específicas.',
    purpose: 'É a fonte das leituras proclamadas na Liturgia da Palavra. A seleção e a sequência variam conforme o dia litúrgico e a edição aprovada.',
    context: 'O Lecionário é distinto do Evangeliário, que reúne os textos dos Evangelhos para determinadas proclamações e celebrações solenes.',
    care: 'A preparação deve conferir o dia litúrgico e as leituras corretas. O leitor deve verificar previamente a passagem e a pronúncia dos nomes.',
    curious: 'Os ciclos de leitura ajudam a comunidade a escutar passagens variadas das Escrituras ao longo do ano litúrgico.',
    imageAlt: 'Ilustração histórica sobre livros litúrgicos da Igreja Católica.', sourceNote: 'Ilustração de 1949 que reúne diferentes livros litúrgicos; não é fotografia de um lecionário atual.'
  },
  {
    id: 'evangeliario', kind: 'livro', title: 'Evangeliário', category: 'Livro da Palavra', icon: '▤', image: 'evangeliary',
    short: 'Livro que contém os textos dos Evangelhos proclamados na liturgia.',
    description: 'O Evangeliário contém as perícopes dos Evangelhos previstas para as celebrações em que se utiliza esse livro. Pode receber ornamentação especial por causa de sua função litúrgica.',
    purpose: 'Em celebrações solenes, o Evangeliário pode ser levado em procissão e apresentado à assembleia antes da proclamação do Evangelho, de acordo com as rubricas.',
    context: 'Não é um livro com toda a Bíblia nem um substituto do Lecionário completo. A seleção dos Evangelhos segue a organização litúrgica aprovada.',
    care: 'Deve ser preparado para a celebração correta, manuseado com cuidado e guardado em local apropriado.',
    curious: 'Na arte cristã, os Evangelhos e seus livros aparecem frequentemente com capas ornamentadas, cruzes, símbolos dos evangelistas ou pedras decorativas.',
    imageAlt: 'Livro litúrgico histórico com página aberta, utilizado como referência visual.', sourceNote: 'Imagem de missal antigo para ilustrar a tradição dos livros litúrgicos, não um Evangeliário identificado.'
  },
  {
    id: 'liturgia-horas', kind: 'livro', title: 'Liturgia das Horas', category: 'Oração da Igreja', icon: '▤', image: 'breviary',
    short: 'Oração oficial que santifica as horas do dia com salmos, leituras, hinos e preces.',
    description: 'A Liturgia das Horas é a oração pública da Igreja distribuída ao longo do dia. Suas celebrações incluem salmos, hinos, leituras bíblicas, responsórios, cânticos e preces.',
    purpose: 'Convida clérigos, religiosos e fiéis que participam dela a rezar em diferentes momentos do dia, em comunhão com toda a Igreja.',
    context: '“Breviário” é um termo tradicional associado aos livros que reúnem essa oração. A organização, os volumes e as edições dependem da forma aprovada.',
    care: 'Confira o calendário, a semana do saltério e as partes próprias do dia, seguindo a edição usada em sua comunidade.',
    curious: 'Os salmos, textos antigos de oração, ocupam lugar central na Liturgia das Horas.',
    imageAlt: 'Ilustração histórica de livros de oração e celebração da tradição católica.', sourceNote: 'A ilustração de livros litúrgicos inclui referência ao breviário; não representa a edição brasileira vigente.'
  },
  {
    id: 'ritual-romano', kind: 'livro', title: 'Ritual Romano', category: 'Sacramentos e bênçãos', icon: '▤', image: 'rubrics',
    short: 'Livro ou conjunto de livros com ritos para sacramentos e outras celebrações.',
    description: 'O Ritual Romano reúne, em livros e edições próprios, orientações, orações e fórmulas para ritos sacramentais e outras celebrações, de acordo com a edição aprovada.',
    purpose: 'Ajuda ministros e celebrantes a seguir a sequência, as palavras e os gestos previstos para cada rito.',
    context: 'Os textos e os livros usados variam conforme o sacramento ou a celebração: batismo, matrimônio, exéquias, bênçãos e outros ritos possuem orientações específicas.',
    care: 'É necessário consultar a edição vigente, as adaptações legítimas e as orientações pastorais e diocesanas pertinentes.',
    curious: '“Ritual Romano” pode designar historicamente a coleção de ritos ou, em sentido específico, um livro ritual determinado.',
    imageAlt: 'Ilustração histórica com diversos livros de uso litúrgico católico.', sourceNote: 'Ilustração de 1949 que cita o Ritual Romano entre outros livros litúrgicos.'
  },
  {
    id: 'pontifical', kind: 'livro', title: 'Pontifical Romano', category: 'Celebrações episcopais', icon: '▤', image: 'rubrics',
    short: 'Livro litúrgico com ritos próprios do ministério episcopal.',
    description: 'O Pontifical Romano reúne celebrações reservadas ao bispo ou que envolvem de modo especial seu ministério, segundo as normas da Igreja.',
    purpose: 'Orienta ritos como ordenações e outras celebrações episcopais, conforme o livro e a edição aplicáveis.',
    context: 'O Pontifical não é o mesmo que o Missal: ele trata de ritos específicos, enquanto o Missal organiza a celebração da Missa.',
    care: 'O rito concreto e as funções dos participantes devem ser conferidos na edição oficial, com preparação prévia adequada.',
    curious: 'O nome remete ao pontífice, termo tradicional para o bispo em contextos litúrgicos.',
    imageAlt: 'Ilustração histórica que identifica o Pontifical entre os livros litúrgicos católicos.', sourceNote: 'Ilustração de 1949, útil para reconhecer a família de livros litúrgicos.'
  },
  {
    id: 'cerimonial-bispos', kind: 'livro', title: 'Cerimonial dos Bispos', category: 'Normas celebrativas', icon: '▤', image: 'rubrics',
    short: 'Orientações para celebrações presididas pelo bispo e para a organização ritual.',
    description: 'O Cerimonial dos Bispos descreve o modo de organizar e realizar diversas celebrações episcopais, incluindo funções, gestos, posições e sequência dos ritos.',
    purpose: 'Auxilia o planejamento de celebrações em que participa o bispo, favorecendo a clareza das funções e a unidade da ação litúrgica.',
    context: 'É um livro de caráter orientador e rubrical. Deve ser utilizado junto com os livros próprios do rito celebrado.',
    care: 'A equipe deve consultar a versão aprovada, as orientações diocesanas e a realidade concreta do espaço celebrativo.',
    curious: 'A organização ritual não serve apenas à formalidade: ajuda todos os ministros e participantes a saber qual é sua função na celebração.',
    imageAlt: 'Ilustração de referência histórica sobre livros da liturgia católica.', sourceNote: 'A imagem reúne diferentes títulos históricos de livros litúrgicos.'
  },
  {
    id: 'martirologio', kind: 'livro', title: 'Martirológio Romano', category: 'Memória dos santos', icon: '▤', image: 'rubrics',
    short: 'Livro que apresenta a memória dos santos e beatos em dias próprios.',
    description: 'O Martirológio Romano é um catálogo litúrgico de santos e beatos, organizado segundo o calendário e as referências próprias da tradição da Igreja.',
    purpose: 'Sua leitura ocorre em contextos específicos da vida litúrgica e comunitária; não substitui o calendário nem o livro próprio da Missa.',
    context: 'O martirológio tem uma função diferente do lecionário e do missal: organiza a memória de santos e beatos, e não as leituras ordinárias da celebração.',
    care: 'Utilize a edição vigente e confirme as indicações locais para as memórias e celebrações próprias.',
    curious: 'Historicamente, os martirológios ajudaram comunidades a preservar e transmitir a memória de testemunhas da fé.',
    imageAlt: 'Ilustração de 1949 que mostra uma coleção de livros litúrgicos históricos.', sourceNote: 'Ilustração histórica; o Martirológio aparece como um dos livros da tradição.'
  },
  {
    id: 'gradual', kind: 'livro', title: 'Gradual Romano', category: 'Canto litúrgico', icon: '♫', image: 'rubrics',
    short: 'Livro que reúne cantos próprios da Missa, historicamente ligado ao canto gregoriano.',
    description: 'O Gradual Romano reúne repertório de canto litúrgico para a celebração da Missa, especialmente as peças tradicionais associadas ao canto gregoriano.',
    purpose: 'Apoia a execução dos cantos próprios previstos para os diferentes dias e celebrações, segundo o repertório e as normas aplicáveis.',
    context: 'É diferente do Missal e do Lecionário: seu foco é o repertório musical. A prática musical varia conforme a comunidade e as possibilidades locais.',
    care: 'A seleção deve respeitar os textos litúrgicos, o rito, o tempo do ano e as orientações responsáveis pela música na liturgia.',
    curious: 'A palavra “gradual” está historicamente associada a um canto próprio entre as leituras, embora o repertório do livro seja mais amplo.',
    imageAlt: 'Ilustração histórica de livros litúrgicos católicos; repertórios de canto integram essa tradição.', sourceNote: 'A imagem é uma ilustração de livros litúrgicos, não uma edição musical do Gradual.'
  },
  {
    id: 'antifonario', kind: 'livro', title: 'Antifonário', category: 'Canto litúrgico', icon: '♫', image: 'breviary',
    short: 'Livro de repertório para cantos e antífonas, especialmente no Ofício Divino.',
    description: 'O antifonário é um livro litúrgico musical que reúne antífonas e outros cantos associados às celebrações, com usos que dependem da tradição e do repertório.',
    purpose: 'Serve de apoio ao canto litúrgico, incluindo tradições ligadas à Liturgia das Horas e a outros momentos do Ofício Divino.',
    context: 'Não confundir com um hinário genérico: o antifonário está ligado a repertórios próprios e a funções litúrgicas específicas.',
    care: 'A edição utilizada deve corresponder ao repertório e à forma de celebração adotados pela comunidade.',
    curious: 'Manuscritos de antifonários podem conter notações musicais antigas e são importantes fontes para a história da música sacra.',
    imageAlt: 'Missal romano histórico fotografado como referência de livros litúrgicos antigos.', sourceNote: 'Imagem de um livro litúrgico histórico; não é um antifonário identificado.'
  }
];

const QUIZ = [
  { q: 'Qual objeto é usado para expor solenemente a hóstia consagrada à adoração?', options: ['Patena', 'Ostensório', 'Galheta', 'Manustérgio'], correct: 1, explanation: 'O ostensório (ou custódia, em alguns usos) é a peça destinada à exposição eucarística.' },
  { q: 'Qual livro reúne as orações e as partes próprias para celebrar a Missa?', options: ['Missal Romano', 'Martirológio Romano', 'Antifonário', 'Cerimonial dos Bispos'], correct: 0, explanation: 'O Missal contém as orações e rubricas da Missa. O Lecionário organiza as leituras bíblicas.' },
  { q: 'Para que serve o corporal?', options: ['Guardar o incenso', 'Transportar a cruz', 'Ser colocado sobre o altar para os vasos eucarísticos', 'Conter água benta'], correct: 2, explanation: 'O corporal é um pano litúrgico que se abre sobre o altar para receber os vasos previstos nas rubricas.' },
  { q: 'Qual livro organiza as leituras bíblicas proclamadas nas celebrações?', options: ['Lecionário', 'Pontifical Romano', 'Ritual Romano', 'Gradual Romano'], correct: 0, explanation: 'O Lecionário reúne as leituras selecionadas para domingos, dias de semana e celebrações específicas.' },
  { q: 'Qual cor está especialmente associada a Pentecostes e à memória dos mártires?', options: ['Verde', 'Roxo', 'Vermelho', 'Rosa'], correct: 2, explanation: 'O vermelho remete ao fogo do Espírito Santo e ao testemunho dos mártires; é usado também na celebração da Paixão do Senhor.' }
];

const state = { filter: 'all', search: '', favoritesOnly: false, sort: 'featured', currentQuiz: 0, quizScore: 0, quizAnswered: false };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key, fallback) { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* armazenamento pode estar bloqueado */ } }
};
let favorites = new Set(storage.get('acervoLiturgicoFavoritos', []));
let toastTimer;

function wikimediaImage(mediaKey, width = 1000) {
  const media = MEDIA[mediaKey] || MEDIA.porto;
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(media.file)}?width=${width}`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function currentMedia(item) { return MEDIA[item.image] || MEDIA.porto; }
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2700);
}
function updateCounts() {
  const objects = ACERVO.filter(item => item.kind === 'objeto').length;
  const books = ACERVO.filter(item => item.kind === 'livro').length;
  $('#objectStat').textContent = objects;
  $('#bookStat').textContent = books;
  $('#allFilterCount').textContent = ACERVO.length;
  $('#objectFilterCount').textContent = objects;
  $('#bookFilterCount').textContent = books;
  $('#favoritesCount').textContent = favorites.size;
  $('#currentYear').textContent = new Date().getFullYear();
}
function visibleItems() {
  const search = state.search.trim().toLocaleLowerCase('pt-BR');
  let items = ACERVO.filter(item => {
    const matchesKind = state.filter === 'all' || item.kind === state.filter;
    const matchesFavorite = !state.favoritesOnly || favorites.has(item.id);
    const text = [item.title, item.category, item.short, item.description, item.purpose, item.context, item.curious].join(' ').toLocaleLowerCase('pt-BR');
    return matchesKind && matchesFavorite && (!search || text.includes(search));
  });
  if (state.sort === 'az') items.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  if (state.sort === 'category') items.sort((a, b) => a.category.localeCompare(b.category, 'pt-BR') || a.title.localeCompare(b.title, 'pt-BR'));
  return items;
}
function cardHtml(item, index) {
  const media = currentMedia(item);
  const kindLabel = item.kind === 'objeto' ? 'Objeto litúrgico' : 'Livro litúrgico';
  const favorite = favorites.has(item.id);
  return `<article class="catalog-card" style="animation-delay:${Math.min(index * 28, 260)}ms">
    <figure class="card-media">
      <div class="image-placeholder" aria-hidden="true"><span>${escapeHtml(item.icon)}</span></div>
      <img src="${escapeHtml(wikimediaImage(item.image, 900))}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async" onerror="this.classList.add('img-missing')">
      <span class="card-kind">${kindLabel}</span>
      <button class="card-favorite ${favorite ? 'is-favorite' : ''}" type="button" data-favorite="${item.id}" aria-label="${favorite ? 'Remover' : 'Adicionar'} ${escapeHtml(item.title)} ${favorite ? 'dos' : 'aos'} favoritos" aria-pressed="${favorite}">${favorite ? '♥' : '♡'}</button>
    </figure>
    <div class="card-body"><p class="card-kicker">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><p class="card-description">${escapeHtml(item.short)}</p>
      <div class="card-footer"><span class="card-category">${item.kind === 'objeto' ? 'FORMA · FUNÇÃO' : 'TEXTO · CELEBRAÇÃO'}</span><button class="card-open" type="button" data-open="${item.id}" aria-haspopup="dialog">Ver ficha <span aria-hidden="true">→</span></button></div>
    </div></article>`;
}
function renderCatalog() {
  const items = visibleItems();
  $('#catalogGrid').innerHTML = items.map(cardHtml).join('');
  $('#catalogGrid').setAttribute('aria-busy', 'false');
  $('#resultCount').textContent = items.length;
  $('#emptyState').hidden = items.length !== 0;
  $('#catalogGrid').hidden = items.length === 0;
  const filters = { all: 'Tudo', objeto: 'Objetos litúrgicos', livro: 'Livros litúrgicos' };
  const parts = [];
  if (state.filter !== 'all') parts.push(filters[state.filter]);
  if (state.search.trim()) parts.push(`busca “${state.search.trim()}”`);
  if (state.favoritesOnly) parts.push('somente favoritos');
  $('#activeSearchNote').textContent = parts.length ? `Exibindo: ${parts.join(' · ')}` : '';
  $('#favoritesToggle').classList.toggle('is-active', state.favoritesOnly);
  $('#favoritesToggle').setAttribute('aria-pressed', String(state.favoritesOnly));
  $('#favoritesToggle').innerHTML = `<span aria-hidden="true">${state.favoritesOnly ? '♥' : '♡'}</span> Meus favoritos <span>${favorites.size}</span>`;
}
function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    toast('Item removido dos favoritos.');
  } else {
    favorites.add(id);
    toast('Item salvo nos favoritos deste navegador.');
  }
  storage.set('acervoLiturgicoFavoritos', [...favorites]);
  updateCounts();
  renderCatalog();
  const activeId = $('#detailDialog').dataset.itemId;
  if (activeId === id && $('#detailDialog').open) renderDetail(ACERVO.find(item => item.id === id));
}
function renderDetail(item) {
  if (!item) return;
  const media = currentMedia(item);
  const favorite = favorites.has(item.id);
  const kindLabel = item.kind === 'objeto' ? 'Objeto litúrgico' : 'Livro litúrgico';
  $('#detailDialog').dataset.itemId = item.id;
  $('#dialogContent').innerHTML = `<div class="detail-layout">
    <div class="detail-image-wrap"><div class="image-placeholder" aria-hidden="true"><span>${escapeHtml(item.icon)}</span></div><img src="${escapeHtml(wikimediaImage(item.image, 1200))}" alt="${escapeHtml(item.imageAlt)}" onerror="this.classList.add('img-missing')"><div class="detail-image-credit"><span>${escapeHtml(media.credit)}</span><a href="${escapeHtml(media.page)}" target="_blank" rel="noopener noreferrer">Fonte da imagem ↗</a></div></div>
    <div class="detail-content"><span class="detail-label"><span aria-hidden="true">✦</span> ${kindLabel} · ${escapeHtml(item.category)}</span><h2 id="detailTitle">${escapeHtml(item.title)}</h2><p class="detail-lead">${escapeHtml(item.short)}</p>
    <div class="detail-block"><h3>O que é?</h3><p>${escapeHtml(item.description)}</p></div>
    <div class="detail-block"><h3>Função na liturgia</h3><p>${escapeHtml(item.purpose)}</p></div>
    <div class="detail-block"><h3>Contexto e uso</h3><p>${escapeHtml(item.context)}</p></div>
    <div class="detail-block"><h3>Cuidados e preparação</h3><p>${escapeHtml(item.care)}</p></div>
    <div class="detail-note"><strong>Você sabia?</strong> ${escapeHtml(item.curious)}<br><br><strong>Sobre a imagem:</strong> ${escapeHtml(item.sourceNote)} Licença e informações completas: <a href="${escapeHtml(media.page)}" target="_blank" rel="noopener noreferrer">página do arquivo</a> · <a href="${escapeHtml(media.license)}" target="_blank" rel="noopener noreferrer">licença</a>.</div>
    <div class="detail-actions"><button type="button" class="button button-primary" data-detail-favorite="${item.id}">${favorite ? '♥ Salvo nos favoritos' : '♡ Salvar nos favoritos'}</button><button type="button" class="button button-outline" data-print>Imprimir ficha ⎙</button></div>
    </div></div>`;
}
function openDetail(id) {
  const item = ACERVO.find(entry => entry.id === id);
  if (!item) return;
  renderDetail(item);
  const dialog = $('#detailDialog');
  if (typeof dialog.showModal === 'function') {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}
function closeDetail() {
  const dialog = $('#detailDialog');
  if (typeof dialog.close === 'function' && dialog.open) dialog.close();
  else dialog.removeAttribute('open');
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  storage.set('acervoLiturgicoTema', theme);
  const dark = theme === 'dark';
  $('#themeIcon').textContent = dark ? '☼' : '☾';
  $('#themeToggle').setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
}
function renderQuiz() {
  const q = QUIZ[state.currentQuiz];
  const panel = $('#quizPanel');
  const percent = (state.currentQuiz / QUIZ.length) * 100;
  $('#quizStep').textContent = `PERGUNTA ${state.currentQuiz + 1} DE ${QUIZ.length}`;
  $('#quizScore').textContent = `${state.quizScore} ${state.quizScore === 1 ? 'ponto' : 'pontos'}`;
  $('#quizProgress').style.width = `${percent}%`;
  $('#quizQuestion').textContent = q.q;
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz-feedback';
  $('#quizHint').textContent = 'Escolha uma resposta para continuar.';
  $('#quizOptions').innerHTML = q.options.map((opt, i) => `<button class="quiz-option" type="button" data-quiz-answer="${i}"><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${escapeHtml(opt)}</span></button>`).join('');
  $('#quizNext').disabled = true;
  $('#quizNext').innerHTML = state.currentQuiz === QUIZ.length - 1 ? 'Ver resultado <span aria-hidden="true">→</span>' : 'Próxima pergunta <span aria-hidden="true">→</span>';
  state.quizAnswered = false;
  panel.classList.remove('quiz-result');
}
function answerQuiz(index) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const q = QUIZ[state.currentQuiz];
  const buttons = $$('[data-quiz-answer]', $('#quizOptions'));
  buttons.forEach(button => {
    button.disabled = true;
    const answer = Number(button.dataset.quizAnswer);
    if (answer === q.correct) button.classList.add('correct');
    else if (answer === index) button.classList.add('wrong');
  });
  const correct = index === q.correct;
  if (correct) state.quizScore += 1;
  $('#quizScore').textContent = `${state.quizScore} ${state.quizScore === 1 ? 'ponto' : 'pontos'}`;
  $('#quizFeedback').textContent = `${correct ? 'Muito bem! ' : 'Quase! '}${q.explanation}`;
  $('#quizFeedback').classList.add(correct ? 'is-correct' : 'is-wrong');
  $('#quizHint').textContent = 'Resposta registrada. Você pode avançar.';
  $('#quizNext').disabled = false;
  $('#quizProgress').style.width = `${((state.currentQuiz + 1) / QUIZ.length) * 100}%`;
}
function nextQuiz() {
  if (!state.quizAnswered) return;
  if (state.currentQuiz < QUIZ.length - 1) {
    state.currentQuiz += 1;
    renderQuiz();
    return;
  }
  const score = state.quizScore;
  const message = score === 5 ? 'Excelente! Você demonstrou conhecer muito bem estes sinais.' : score >= 3 ? 'Muito bom! Você já reconhece vários objetos e livros. Explore as fichas para aprofundar.' : 'Bom começo! Volte ao acervo, leia algumas fichas e tente novamente.';
  $('#quizStep').textContent = 'QUIZ CONCLUÍDO';
  $('#quizScore').textContent = `${score}/5 pontos`;
  $('#quizProgress').style.width = '100%';
  $('#quizQuestion').textContent = `Você acertou ${score} de ${QUIZ.length} perguntas.`;
  $('#quizOptions').innerHTML = '';
  $('#quizFeedback').textContent = message;
  $('#quizFeedback').className = 'quiz-feedback is-correct';
  $('#quizHint').textContent = 'O conhecimento se aprofunda com a observação.';
  $('#quizNext').disabled = false;
  $('#quizNext').textContent = 'Tentar novamente ↻';
  $('#quizNext').dataset.restart = 'true';
  state.currentQuiz = QUIZ.length;
}
function restartQuiz() {
  state.currentQuiz = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  delete $('#quizNext').dataset.restart;
  renderQuiz();
}

function bindEvents() {
  $('#searchInput').addEventListener('input', event => { state.search = event.target.value; renderCatalog(); });
  $$('.filter-tab').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    $$('.filter-tab').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderCatalog();
  }));
  $('#sortSelect').addEventListener('change', event => { state.sort = event.target.value; renderCatalog(); });
  $('#favoritesToggle').addEventListener('click', () => { state.favoritesOnly = !state.favoritesOnly; renderCatalog(); });
  $('#clearFilters').addEventListener('click', () => {
    state.search = '';
    state.filter = 'all';
    state.favoritesOnly = false;
    state.sort = 'featured';
    $('#searchInput').value = '';
    $('#sortSelect').value = 'featured';
    $$('.filter-tab').forEach(button => {
      const active = button.dataset.filter === 'all';
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderCatalog();
  });
  $('#catalogGrid').addEventListener('click', event => {
    const favoriteButton = event.target.closest('[data-favorite]');
    if (favoriteButton) { toggleFavorite(favoriteButton.dataset.favorite); return; }
    const openButton = event.target.closest('[data-open]');
    if (openButton) openDetail(openButton.dataset.open);
  });
  $('#dialogContent').addEventListener('click', event => {
    const favButton = event.target.closest('[data-detail-favorite]');
    if (favButton) { toggleFavorite(favButton.dataset.detailFavorite); return; }
    if (event.target.closest('[data-print]')) window.print();
  });
  $('#dialogClose').addEventListener('click', closeDetail);
  $('#detailDialog').addEventListener('click', event => { if (event.target === $('#detailDialog')) closeDetail(); });
  $('#themeToggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  $('#menuToggle').addEventListener('click', () => {
    const expanded = $('#menuToggle').getAttribute('aria-expanded') === 'true';
    $('#menuToggle').setAttribute('aria-expanded', String(!expanded));
    $('#mainNav').classList.toggle('is-open', !expanded);
    $('#menuToggle').setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  });
  $$('#mainNav a').forEach(link => link.addEventListener('click', () => {
    $('#mainNav').classList.remove('is-open');
    $('#menuToggle').setAttribute('aria-expanded', 'false');
    $('#menuToggle').setAttribute('aria-label', 'Abrir menu');
  }));
  $('#shareButton').addEventListener('click', async () => {
    const shareData = { title: document.title, text: 'Conheça o Acervo Litúrgico — guia visual de objetos e livros litúrgicos.', url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (error) { if (error && error.name !== 'AbortError') toast('Não foi possível abrir o compartilhamento.'); }
      return;
    }
    try { await navigator.clipboard.writeText(window.location.href); toast('Link do acervo copiado.'); }
    catch { toast('Copie o endereço deste site na barra do navegador para compartilhá-lo.'); }
  });
  $('#quizOptions').addEventListener('click', event => {
    const answer = event.target.closest('[data-quiz-answer]');
    if (answer) answerQuiz(Number(answer.dataset.quizAnswer));
  });
  $('#quizNext').addEventListener('click', () => {
    if ($('#quizNext').dataset.restart === 'true') { restartQuiz(); return; }
    nextQuiz();
  });
  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => $('#backToTop').classList.toggle('is-visible', window.scrollY > 550), { passive: true });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !$('#detailDialog').open) {
      event.preventDefault(); $('#searchInput').focus();
    }
    if (event.key === 'Escape' && $('#mainNav').classList.contains('is-open')) {
      $('#mainNav').classList.remove('is-open'); $('#menuToggle').setAttribute('aria-expanded', 'false');
    }
  });
  $('#heroPhoto').addEventListener('error', () => {
    $('#heroPhoto').style.display = 'none';
    $('#heroPhoto').parentElement.style.background = 'radial-gradient(circle at center, #e2d2ac, #9a9f83)';
    $('#heroPhoto').parentElement.style.minHeight = '280px';
    toast('As fotografias dependem de conexão com a internet; o restante do site continua funcionando.');
  }, { once: true });
}

function init() {
  const savedTheme = storage.get('acervoLiturgicoTema', 'light');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
  updateCounts();
  bindEvents();
  renderCatalog();
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', init);
