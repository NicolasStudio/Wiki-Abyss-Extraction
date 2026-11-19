
 // ============================================================
 //  EDITE AQUI. Este é o único arquivo que você mexe para publicar.
 //  Vídeos: coloque os arquivos na pasta "imagens/" e cite o nome em "video".
 // ============================================================

const SOBRE = {
  jogo: "Um jogo 3D de extração e exploração espacial em primeira pessoa. O jogador desembarca em planetas desconhecidos em busca de objetos valiosos, utilizando um raio de força para coletar, carregar e transportar loot até sua nave.\n\nCada objeto possui física própria e pode sofrer danos durante o transporte. Quedas, colisões e movimentos bruscos podem comprometer seu valor, transformando cada coleta em uma decisão de risco.\n\nO objetivo é explorar o planeta, coletar o máximo de recursos possível, sobreviver às criaturas e retornar à nave com sua carga intacta. Após a extração, o jogador viaja até o Mercado Espacial, onde pode vender seus itens, comprar equipamentos e investir em melhorias.\n\nA morte tem consequências: todo loot não extraído é perdido. Porém, os créditos acumulados, as melhorias adquiridas e as compras realizadas permanecem.\n\nDesenvolvido em Unity 6. Atualmente, o jogo é single-player, com multiplayer planejado para o futuro.",

  proposito: "Criar uma experiência de exploração baseada em risco, recompensa e sobrevivência, na qual cada decisão pode impactar diretamente o resultado da expedição.\n\nO jogador precisa decidir o que coletar, quanto consegue carregar, quais ameaças enfrentar e, principalmente, quando é hora de abandonar a exploração e retornar à nave.\n\nA física é parte fundamental da experiência. Os objetos possuem peso, fragilidade e valor, tornando o transporte uma mecânica que exige cuidado. Arremessar, carregar ou derrubar um item pode representar a diferença entre uma extração lucrativa e um prejuízo.\n\nEste diário de desenvolvimento documenta a evolução do projeto, apresentando novas mecânicas, sistemas, criaturas, cenários e melhorias por meio de vídeos e registros de cada etapa.",

  inspiracoes: ["REPO", "Lethal Company", "No Man's Sky"]
};

// Ordem do array não importa: a página ordena pelo número (maior primeiro).
// numero: número do registro
// data: texto livre (opcional)
// titulo: opcional
// video: nome do arquivo dentro de "imagens/"
// texto: explicação. Use \n\n para separar parágrafos.

const REGISTROS = [
  {
    numero: 1,
    data: "13/11/2026",
    titulo: "Primeiro registro",
    video: "Primeiro video.mp4",
    texto: "Neste primeiro registro, apresento as mecânicas iniciais de combate e as primeiras criaturas do planeta, cada uma com comportamentos e formas diferentes de ameaçar o jogador.\n\nUma criatura cega depende de outros sentidos para localizar sua presa, enquanto outra possui uma visão aguçada e consegue identificar o jogador à distância. Há também uma criatura que só se movimenta quando não está sendo observada, obrigando o jogador a manter a atenção constante.\n\nA proposta é fazer com que cada inimigo exija uma estratégia diferente, enquanto o loot continua sendo o principal objetivo da expedição.\n\nTambém apresento as primeiras implementações de combate, incluindo armas de fogo, além de um sistema provisório de mercado para compra de equipamentos.\n\nO projeto reúne inspirações de REPO, Lethal Company e No Man's Sky, buscando construir uma experiência própria de exploração, coleta e sobrevivência."
  },

  {
    numero: 2,
    data: "13/11/2026",
    titulo: "Segundo registro",
    video: "Segundo video.mp4",
    texto: "Neste registro, apresento a mecânica principal do jogo: a coleta e o transporte de loot.\n\nO jogador precisa encontrar objetos pelo planeta e levá-los até a nave, tomando cuidado para não danificá-los durante o percurso. Como os itens possuem física e fragilidade, colisões e quedas podem reduzir seu valor de venda.\n\nTambém foram implementados novos sistemas de progressão, incluindo a compra de melhorias para os atributos do astronauta, permitindo evoluir suas capacidades ao longo do jogo.\n\nEntre as novidades estão os potes de atributos, cada um com um efeito específico: recuperação de vida, aumento do fôlego, velocidade, força e capacidade de carga. O jogador também pode equipar mais de dois itens, ampliando as possibilidades de combinação.\n\nAlém disso, foi implementada a possibilidade de atirar nos objetos de loot, assim como novos elementos da HUD, incluindo interface para arma, lanterna e identificação do jogador."
  },

  {
    numero: 3,
    data: "13/11/2026",
    titulo: "Terceiro registro",
    video: "Terceiro video.mp4",
    texto: "Neste registro, apresento as mecânicas de agarrão das criaturas e seus impactos durante a exploração.\n\nO jogador pode ser surpreendido por ataques que comprometem sua movimentação e colocam a expedição em risco. Também demonstro como o peso dos objetos influencia o deslocamento do personagem, tornando o transporte de loot mais desafiador.\n\nOutra mecânica apresentada é a possibilidade de arremessar objetos para longe, permitindo que o jogador tente recuperar itens, afastá-los de ameaças ou lidar com situações inesperadas durante a exploração."
  },

  {
    numero: 4,
    data: "13/11/2026",
    titulo: "Quarto registro",
    video: "Quarto video.mp4",
    texto: "Neste registro, começo a apresentar a construção do Mercado Espacial, um dos pontos centrais da progressão do jogo.\n\nA proposta é permitir que o jogador venda o loot coletado durante suas expedições e utilize os créditos para adquirir equipamentos e melhorias. Cada objeto possui seu próprio valor, criando a necessidade de avaliar a carga e decidir o melhor momento para realizar a venda.\n\nTambém apresento os primeiros passos da construção do ambiente comercial e a implementação do primeiro NPC com dublagem, trazendo mais personalidade e imersão ao mercado."
  },

  {
    numero: 5,
    data: "18/11/2026",
    titulo: "Quinto registro",
    video: "Quinto video.mp4",
    texto: "Neste registro, apresento a evolução do sistema de criaturas, incluindo seus diferentes tipos de ataque e comportamentos durante a perseguição ao jogador.\n\nForam implementadas mecânicas de audição, detecção, perseguição e ataque, permitindo que as criaturas reajam de diferentes maneiras aos acontecimentos do ambiente.\n\nTambém demonstro novas animações de ataque e morte, além da apresentação de novas criaturas que ampliam a variedade de ameaças encontradas durante a exploração."
  },

  {
    numero: 6,
    data: "18/11/2026",
    titulo: "Sexto registro",
    video: "Sexto video.mp4",
    texto: "Neste registro, apresento uma evolução significativa do Mercado Espacial, incluindo o ambiente interno, a cabine e a ambientação noturna ao redor da loja.\n\nO sistema de comércio recebeu novas funcionalidades, permitindo vender loot com valores específicos para cada objeto e utilizar os créditos para adquirir melhorias permanentes para o astronauta.\n\nEntre as melhorias disponíveis estão o aumento de vida, fôlego, velocidade, força e capacidade de carga, permitindo que o jogador prepare seu personagem para expedições cada vez mais perigosas.\n\nTambém foram aprimorados os sistemas de interação e dublagem dos NPCs, tornando o mercado um ambiente mais completo e funcional."
  },

  {
    numero: 7,
    data: "19/11/2026",
    titulo: "Sétimo registro",
    video: "Sétimo video.mp4",
    texto: "Neste registro, apresento um combate real durante uma expedição, mostrando como as criaturas reagem ao jogador e como funciona o processo de coleta e transporte de loot até a nave.\n\nO foco está no comportamento dos monstros durante a extração, demonstrando como algumas criaturas podem interferir diretamente no transporte e até destruir os objetos coletados.\n\nA extração deixa de ser apenas o momento de finalizar uma expedição e passa a ser uma das etapas mais perigosas, exigindo que o jogador proteja sua carga até conseguir escapar do planeta."
  },

  {
    numero: 8,
    data: "19/11/2026",
    titulo: "Oitavo registro",
    video: "Oitavo video.mp4",
    texto: "Neste registro, apresento a primeira versão da área de extração, onde o jogador poderá organizar e transportar os objetos coletados para dentro da nave.\n\nDemonstro também o funcionamento da lanterna durante a exploração de ambientes escuros, destacando a iluminação dos cenários e a importância de enxergar o que está ao redor sem perder a atenção às ameaças.\n\nDurante o vídeo, apresento diferentes estruturas exploráveis, incluindo casas pequenas, médias e grandes, ampliando as possibilidades de exploração e coleta.\n\nTambém mostro o sistema de bateria da lanterna, que possui carga limitada e pode se esgotar durante a exploração, exigindo que o jogador administre seu uso."
  },

  // {
  //   numero: 9,
  //   data: "19/11/2026",
  //   titulo: "Nono registro",
  //   video: "Nono video.mp4",
  //   texto: "Neste registro, apresento uma nova arma para o jogador: a besta (crossbow), uma opção de combate de longo alcance que utiliza munição limitada e pode ser recarregada por meio de uma aljava.\n\nA arma possui um sistema de recuperação de flechas, permitindo que o jogador procure e reutilize os projéteis disparados. Porém, nem todas as flechas poderão ser recuperadas, pois existe a possibilidade de se perderem ou quebrarem durante o uso.\n\nA mecânica adiciona uma nova camada de estratégia ao combate, fazendo com que cada disparo precise ser pensado, especialmente durante encontros com criaturas perigosas.\n\nTambém demonstro o que acontece quando o jogador tenta atacar o vendedor do Mercado Espacial, explorando as possibilidades de interação e as consequências de suas ações."
  // }
];