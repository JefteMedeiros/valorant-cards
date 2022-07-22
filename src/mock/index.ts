export interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface MediaList {
  id: number;
  wwise: string;
  wave: string;
}

export interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList: MediaList[];
}

export interface Datum {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
}

export interface RootObject {
  status: number;
  data: Datum[];
}

export const mock = {
  data: [
    {
      uuid: 'dade69b4-4f5a-8528-247b-219e5a1facd6',
      displayName: 'Fade',
      description:
        'Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.',
      developerName: 'BountyHunter',
      characterTags: null,
      displayIcon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png',
      backgroundGradientColors: ['517cacff', 'b1414cff', '663c6cff', '8291a4ff'],
      assetPath: 'ShooterGame/Content/Characters/BountyHunter/BountyHunter_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: false,
      isBaseContent: false,
      role: {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        displayName: 'Iniciador',
        description: 'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Clausura',
          description:
            'EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.',
          displayIcon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Assombrar',
          description:
            'EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.',
          displayIcon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Espreitador',
          description:
            'EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo.',
          displayIcon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Véu da Noite',
          description:
            'EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.',
          displayIcon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 2.400625,
        maxDuration: 2.400625,
        mediaList: [
          {
            id: 928048987,
            wwise: 'https://media.valorant-api.com/sounds/928048987.wem',
            wave: 'https://media.valorant-api.com/sounds/928048987.wav',
          },
        ],
      },
    },
    {
      uuid: '5f8d3a7f-467b-97f3-062c-13acf203c006',
      displayName: 'Breach',
      description:
        'Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.',
      developerName: 'Breach',
      characterTags: null,
      displayIcon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png',
      backgroundGradientColors: ['bc542dff', '58394dff', 'a06c45ff', '50785dff'],
      assetPath: 'ShooterGame/Content/Characters/Breach/Breach_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        displayName: 'Iniciador',
        description: 'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Estopim',
          description:
            'EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.',
          displayIcon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Falha Tectônica',
          description:
            'EQUIPE um impacto sísmico. SEGURE DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até ela.',
          displayIcon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Pós-choque',
          description:
            'EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede, que causa alto dano a todos que estiverem na área de efeito.',
          displayIcon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Onda Trovejante',
          description:
            'EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone, que estonteia e derruba todos que estiverem na área de efeito.',
          displayIcon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 2.947562,
        maxDuration: 2.947562,
        mediaList: [
          {
            id: 235256474,
            wwise: 'https://media.valorant-api.com/sounds/235256474.wem',
            wave: 'https://media.valorant-api.com/sounds/235256474.wav',
          },
        ],
      },
    },
    {
      uuid: 'f94c3b30-42be-e959-889c-5aa313dba261',
      displayName: 'Raze',
      description:
        'Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!',
      developerName: 'Clay',
      characterTags: ['Especialista em dano em área'],
      displayIcon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/background.png',
      backgroundGradientColors: ['d89e4fff', '2c4446ff', '3b6f54ff', 'e36230ff'],
      assetPath: 'ShooterGame/Content/Characters/Clay/Clay_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4',
        displayName: 'Duelista',
        description:
          'Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Carga de Explosivos',
          description:
            'INSTANTANEAMENTE joga uma carga de explosivos que gruda em superfícies. REPITA a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido.',
          displayIcon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Cartuchos de Tinta',
          description:
            'EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver em seu alcance.',
          displayIcon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Bumba',
          description:
            'EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando dano pesado se alcançá-los.',
          displayIcon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Estraga-prazeres',
          description: 'EQUIPE um lança-mísseis. DISPARE um míssil que causa dano devastador em área ao fazer contato com qualquer coisa.',
          displayIcon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 2.068542,
        maxDuration: 2.068542,
        mediaList: [
          {
            id: 1303324239,
            wwise: 'https://media.valorant-api.com/sounds/1303324239.wem',
            wave: 'https://media.valorant-api.com/sounds/1303324239.wav',
          },
        ],
      },
    },
    {
      uuid: '22697a3d-45bf-8dd7-4fec-84a9e28c69d7',
      displayName: 'Chamber',
      description:
        'Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.',
      developerName: 'Deadeye',
      characterTags: null,
      displayIcon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/background.png',
      backgroundGradientColors: ['30aae1ff', 'c83d7bff', '947961ff', 'ffce6fff'],
      assetPath: 'ShooterGame/Content/Characters/Deadeye/Deadeye_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: '5fc02f99-4091-4486-a531-98459a3e95e9',
        displayName: 'Sentinela',
        description:
          'Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability2',
          displayName: 'Rendezvous',
          description:
            'POSICIONE duas âncoras de teleporte. Enquanto estiver no chão e dentro do alcance de uma das âncoras, REATIVE para teleportar rapidamente até a outra âncora. Âncoras podem ser recuperadas para serem REPOSICIONADAS.',
          displayIcon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Marca Registrada',
          description:
            'POSICIONE uma armadilha que busca por inimigos. Quando um inimigo visível entrar no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que reduz a velocidade dos jogadores.',
          displayIcon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ability1',
          displayName: 'Caçador de Cabeças',
          description: 'ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar.',
          displayIcon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Tour de Force',
          description:
            'ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto. Abater um inimigo cria um campo duradouro que reduz a velocidade dos jogadores.',
          displayIcon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 1.887083,
        maxDuration: 1.887083,
        mediaList: [
          {
            id: 507658877,
            wwise: 'https://media.valorant-api.com/sounds/507658877.wem',
            wave: 'https://media.valorant-api.com/sounds/507658877.wav',
          },
        ],
      },
    },
    {
      uuid: '601dbbe7-43ce-be57-2a40-4abd24953621',
      displayName: 'KAY/O',
      description:
        'KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate.',
      developerName: 'Grenadier',
      characterTags: null,
      displayIcon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/background.png',
      backgroundGradientColors: ['2bc8ffff', '4343b2ff', '905ef6ff', 'ff89ffff'],
      assetPath: 'ShooterGame/Content/Characters/Grenadier/Grenadier_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        displayName: 'Iniciador',
        description: 'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Grenade',
          displayName: 'FRAG/mento',
          description:
            'EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão.',
          displayIcon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ability1',
          displayName: 'GRANADA/clarão',
          description:
            'EQUIPE uma granada de clarão. DISPARE para jogá-la. A granada de clarão explode após um curto período, cegando qualquer um que estiver na linha de visão.',
          displayIcon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'PONTO/zero',
          description:
            'EQUIPE uma lâmina de supressão. DISPARE para atirá-la. A lâmina se fixa à primeira superfície que atingir e explode, suprimindo qualquer um que estiver dentro do raio da explosão.',
          displayIcon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'ANULAR/cmd',
          description:
            'INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido.',
          displayIcon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 0.817833,
        maxDuration: 0.817833,
        mediaList: [
          {
            id: 522741629,
            wwise: 'https://media.valorant-api.com/sounds/522741629.wem',
            wave: 'https://media.valorant-api.com/sounds/522741629.wav',
          },
        ],
      },
    },
    {
      uuid: '6f2a04ca-43e0-be17-7f36-b3908627744d',
      displayName: 'Skye',
      description:
        'Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.',
      developerName: 'Guide',
      characterTags: null,
      displayIcon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/background.png',
      backgroundGradientColors: ['8ea36fff', '364241ff', 'ae8e4dff', 'af694dff'],
      assetPath: 'ShooterGame/Content/Characters/Guide/Guide_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        displayName: 'Iniciador',
        description: 'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Predador Explosivo',
          description:
            'EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar o predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos.',
          displayIcon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Luz Desbravadora',
          description:
            'EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um clarão de luz.',
          displayIcon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Reflorescer',
          description:
            'EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.',
          displayIcon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Rastreadores',
          description:
            'EQUIPE um amuleto de rastreador. DISPARE para enviar três rastreadores que localizarão os três inimigos mais próximos. Se um rastreador alcançar um alvo, ele causará visão turva a esse inimigo.',
          displayIcon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 1.662583,
        maxDuration: 1.662583,
        mediaList: [
          {
            id: 1495339,
            wwise: 'https://media.valorant-api.com/sounds/1495339.wem',
            wave: 'https://media.valorant-api.com/sounds/1495339.wav',
          },
        ],
      },
    },
    {
      uuid: '117ed9e3-49f3-6512-3ccf-0cada7e3823b',
      displayName: 'Cypher',
      description:
        'Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.',
      developerName: 'Gumshoe',
      characterTags: ['Detecção', 'Confinamento Defensivo'],
      displayIcon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/background.png',
      backgroundGradientColors: ['d18a5bff', '6097dfff', '48486cff', '4b76ccff'],
      assetPath: 'ShooterGame/Content/Characters/Gumshoe/Gumshoe_PrimaryAsset',
      isFullPortraitRightFacing: true,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: '5fc02f99-4091-4486-a531-98459a3e95e9',
        displayName: 'Sentinela',
        description:
          'Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Jaula Cibernética',
          description:
            'INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. ATIVE para criar uma zona que bloqueia a visão e reproduz um sinal de áudio quando inimigos passarem por ela.',
          displayIcon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Câmera de Vigilância',
          description:
            'EQUIPE uma câmera de vigilância. DISPARE para colocá-la no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto a controla, DISPARE para lançar um dardo marcador, que revelará a localização de qualquer jogador atingido.',
          displayIcon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Fio-armadilha',
          description:
            'EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por ele ficarão imobilizados, revelados e estonteados por um breve intervalo se não o destruírem a tempo. A habilidade pode ser recolhida para ser REACIONADA.',
          displayIcon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Assalto Neural',
          description:
            'Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.',
          displayIcon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ultimate/displayicon.png',
        },
      ],
      voiceLine: {
        minDuration: 2.609292,
        maxDuration: 2.609292,
        mediaList: [
          {
            id: 321445067,
            wwise: 'https://media.valorant-api.com/sounds/321445067.wem',
            wave: 'https://media.valorant-api.com/sounds/321445067.wav',
          },
        ],
      },
    },
    {
      uuid: '320b2a48-4d9b-a075-30f1-1f93a9b638fa',
      displayName: 'Sova',
      description:
        'Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. ',
      developerName: 'Hunter',
      characterTags: ['Detecção', 'Dano em Área'],
      displayIcon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png',
      displayIconSmall: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayiconsmall.png',
      bustPortrait: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png',
      fullPortrait: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png',
      fullPortraitV2: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportraitv2.png',
      killfeedPortrait: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png',
      background: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/background.png',
      backgroundGradientColors: ['ebccaeff', '2947c3ff', '997b58ff', '567fb5ff'],
      assetPath: 'ShooterGame/Content/Characters/Hunter/Hunter_PrimaryAsset',
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        displayName: 'Iniciador',
        description: 'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.',
        displayIcon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
        assetPath: 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
      },
      abilities: [
        {
          slot: 'Ability1',
          displayName: 'Flecha de Choque',
          description:
            'EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha que explode ao impacto, causando dano aos jogadores próximos. SEGURE DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.',
          displayIcon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability1/displayicon.png',
        },
        {
          slot: 'Ability2',
          displayName: 'Flecha Rastreadora',
          description:
            'EQUIPE um arco com uma flecha de reconhecimento. DISPARO lança a flecha, que é ativada com impacto e revela a localização de inimigos próximos da linha de visão. Inimigos podem destruí-la. SEGURE DISPARO para ampliar o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.',
          displayIcon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability2/displayicon.png',
        },
        {
          slot: 'Grenade',
          displayName: 'Drone Coruja',
          description:
            'EQUIPE um drone coruja. DISPARE para acionar e pilotá-lo. Enquanto o pilota, DISPARE para atirar um dardo marcador. Eles revelam a localização de quaisquer jogadores atingidos.',
          displayIcon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/grenade/displayicon.png',
        },
        {
          slot: 'Ultimate',
          displayName: 'Fúria do Caçador',
          description:
            'EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA até mais duas vezes enquanto o cronômetro de habilidade estiver ativo.',
          displayIcon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ultimate/displayicon.png',
        },
        {
          slot: 'Passive',
          displayName: 'Mira Extraordinária',
          description:
            'O arco personalizado de Sova pode disparar as flechas e ricocheteá-las em superfícies. Segurar o disparo aumenta o poder do arco, e a flecha é disparada ao soltar. Pressione o disparo alternativo para mudar o número de ricochetes. Suas flechas podem ricochetear no terreno. Segurar o clique esquerdo aumenta a trajetória do alcance do arco. O clique direito alterna o número de ricochetes desejados. A flecha é disparada ao soltar o clique esquerdo.',
          displayIcon: null,
        },
      ],
      voiceLine: {
        minDuration: 2.784,
        maxDuration: 2.784,
        mediaList: [
          {
            id: 1045677213,
            wwise: 'https://media.valorant-api.com/sounds/1045677213.wem',
            wave: 'https://media.valorant-api.com/sounds/1045677213.wav',
          },
        ],
      },
    },
  ],
};

//Api request baseULR https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR
