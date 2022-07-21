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
      uuid: "dade69b4-4f5a-8528-247b-219e5a1facd6",
      displayName: "Fade",
      description: "Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.",
      developerName: "BountyHunter",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png",
      backgroundGradientColors: [
        "517cacff",
        "b1414cff",
        "663c6cff",
        "8291a4ff"
      ],
      assetPath: "ShooterGame/Content/Characters/BountyHunter/BountyHunter_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: false,
      isBaseContent: false,
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Iniciador",
        description: "Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.",
        displayIcon: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Clausura",
          description: "EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.",
          displayIcon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Assombrar",
          description: "EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.",
          displayIcon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Espreitador",
          description: "EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo.",
          displayIcon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Véu da Noite",
          description: "EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.",
          displayIcon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.400625,
        maxDuration: 2.400625,
        mediaList: [
          {
            id: 928048987,
            wwise: "https://media.valorant-api.com/sounds/928048987.wem",
            wave: "https://media.valorant-api.com/sounds/928048987.wav"
          }
        ]
      }
    },
    {
      uuid: "5f8d3a7f-467b-97f3-062c-13acf203c006",
      displayName: "Breach",
      description: "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.",
      developerName: "Breach",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png",
      backgroundGradientColors: [
        "bc542dff",
        "58394dff",
        "a06c45ff",
        "50785dff"
      ],
      assetPath: "ShooterGame/Content/Characters/Breach/Breach_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Iniciador",
        description: "Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.",
        displayIcon: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Estopim",
          description: "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.",
          displayIcon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Falha Tectônica",
          description: "EQUIPE um impacto sísmico. SEGURE DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até ela.",
          displayIcon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Pós-choque",
          description: "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede, que causa alto dano a todos que estiverem na área de efeito.",
          displayIcon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Onda Trovejante",
          description: "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone, que estonteia e derruba todos que estiverem na área de efeito.",
          displayIcon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.947562,
        maxDuration: 2.947562,
        mediaList: [
          {
            id: 235256474,
            wwise: "https://media.valorant-api.com/sounds/235256474.wem",
            wave: "https://media.valorant-api.com/sounds/235256474.wav"
          }
        ]
      }
    },
    {
      uuid: "f94c3b30-42be-e959-889c-5aa313dba261",
      displayName: "Raze",
      description: "Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo \"porradeiro\", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!",
      developerName: "Clay",
      characterTags: [
        "Especialista em dano em área"
      ],
      displayIcon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/background.png",
      backgroundGradientColors: [
        "d89e4fff",
        "2c4446ff",
        "3b6f54ff",
        "e36230ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Clay/Clay_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Carga de Explosivos",
          description: "INSTANTANEAMENTE joga uma carga de explosivos que gruda em superfícies. REPITA a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido.",
          displayIcon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Cartuchos de Tinta",
          description: "EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver em seu alcance.",
          displayIcon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Bumba",
          description: "EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando dano pesado se alcançá-los.",
          displayIcon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Estraga-prazeres",
          description: "EQUIPE um lança-mísseis. DISPARE um míssil que causa dano devastador em área ao fazer contato com qualquer coisa.",
          displayIcon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.068542,
        maxDuration: 2.068542,
        mediaList: [
          {
            id: 1303324239,
            wwise: "https://media.valorant-api.com/sounds/1303324239.wem",
            wave: "https://media.valorant-api.com/sounds/1303324239.wav"
          }
        ]
      }
    },
    {
      uuid: "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
      displayName: "Chamber",
      description: "Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.",
      developerName: "Deadeye",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/background.png",
      backgroundGradientColors: [
        "30aae1ff",
        "c83d7bff",
        "947961ff",
        "ffce6fff"
      ],
      assetPath: "ShooterGame/Content/Characters/Deadeye/Deadeye_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinela",
        description: "Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.",
        displayIcon: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability2",
          displayName: "Rendezvous",
          description: "POSICIONE duas âncoras de teleporte. Enquanto estiver no chão e dentro do alcance de uma das âncoras, REATIVE para teleportar rapidamente até a outra âncora. Âncoras podem ser recuperadas para serem REPOSICIONADAS.",
          displayIcon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Marca Registrada",
          description: "POSICIONE uma armadilha que busca por inimigos. Quando um inimigo visível entrar no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que reduz a velocidade dos jogadores.",
          displayIcon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "Caçador de Cabeças",
          description: "ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar.",
          displayIcon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Tour de Force",
          description: "ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto. Abater um inimigo cria um campo duradouro que reduz a velocidade dos jogadores.",
          displayIcon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 1.887083,
        maxDuration: 1.887083,
        mediaList: [
          {
            id: 507658877,
            wwise: "https://media.valorant-api.com/sounds/507658877.wem",
            wave: "https://media.valorant-api.com/sounds/507658877.wav"
          }
        ]
      }
    },
    {
      uuid: "601dbbe7-43ce-be57-2a40-4abd24953621",
      displayName: "KAY/O",
      description: "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate.",
      developerName: "Grenadier",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/background.png",
      backgroundGradientColors: [
        "2bc8ffff",
        "4343b2ff",
        "905ef6ff",
        "ff89ffff"
      ],
      assetPath: "ShooterGame/Content/Characters/Grenadier/Grenadier_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Iniciador",
        description: "Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.",
        displayIcon: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Grenade",
          displayName: "FRAG/mento",
          description: "EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão.",
          displayIcon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "GRANADA/clarão",
          description: "EQUIPE uma granada de clarão. DISPARE para jogá-la. A granada de clarão explode após um curto período, cegando qualquer um que estiver na linha de visão.",
          displayIcon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "PONTO/zero",
          description: "EQUIPE uma lâmina de supressão. DISPARE para atirá-la. A lâmina se fixa à primeira superfície que atingir e explode, suprimindo qualquer um que estiver dentro do raio da explosão.",
          displayIcon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "ANULAR/cmd",
          description: "INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido.",
          displayIcon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 0.817833,
        maxDuration: 0.817833,
        mediaList: [
          {
            id: 522741629,
            wwise: "https://media.valorant-api.com/sounds/522741629.wem",
            wave: "https://media.valorant-api.com/sounds/522741629.wav"
          }
        ]
      }
    },
    {
      uuid: "6f2a04ca-43e0-be17-7f36-b3908627744d",
      displayName: "Skye",
      description: "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.",
      developerName: "Guide",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/background.png",
      backgroundGradientColors: [
        "8ea36fff",
        "364241ff",
        "ae8e4dff",
        "af694dff"
      ],
      assetPath: "ShooterGame/Content/Characters/Guide/Guide_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Iniciador",
        description: "Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.",
        displayIcon: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Predador Explosivo",
          description: "EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar o predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos.",
          displayIcon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Luz Desbravadora",
          description: "EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um clarão de luz.",
          displayIcon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Reflorescer",
          description: "EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.",
          displayIcon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Rastreadores",
          description: "EQUIPE um amuleto de rastreador. DISPARE para enviar três rastreadores que localizarão os três inimigos mais próximos. Se um rastreador alcançar um alvo, ele causará visão turva a esse inimigo.",
          displayIcon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 1.662583,
        maxDuration: 1.662583,
        mediaList: [
          {
            id: 1495339,
            wwise: "https://media.valorant-api.com/sounds/1495339.wem",
            wave: "https://media.valorant-api.com/sounds/1495339.wav"
          }
        ]
      }
    },
    {
      uuid: "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
      displayName: "Cypher",
      description: "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.",
      developerName: "Gumshoe",
      characterTags: [
        "Detecção",
        "Confinamento Defensivo"
      ],
      displayIcon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/background.png",
      backgroundGradientColors: [
        "d18a5bff",
        "6097dfff",
        "48486cff",
        "4b76ccff"
      ],
      assetPath: "ShooterGame/Content/Characters/Gumshoe/Gumshoe_PrimaryAsset",
      isFullPortraitRightFacing: true,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinela",
        description: "Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.",
        displayIcon: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Jaula Cibernética",
          description: "INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. ATIVE para criar uma zona que bloqueia a visão e reproduz um sinal de áudio quando inimigos passarem por ela.",
          displayIcon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Câmera de Vigilância",
          description: "EQUIPE uma câmera de vigilância. DISPARE para colocá-la no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto a controla, DISPARE para lançar um dardo marcador, que revelará a localização de qualquer jogador atingido.",
          displayIcon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Fio-armadilha",
          description: "EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por ele ficarão imobilizados, revelados e estonteados por um breve intervalo se não o destruírem a tempo. A habilidade pode ser recolhida para ser REACIONADA.",
          displayIcon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Assalto Neural",
          description: "Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.",
          displayIcon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.609292,
        maxDuration: 2.609292,
        mediaList: [
          {
            id: 321445067,
            wwise: "https://media.valorant-api.com/sounds/321445067.wem",
            wave: "https://media.valorant-api.com/sounds/321445067.wav"
          }
        ]
      }
    },
    {
      uuid: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
      displayName: "Sova",
      description: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape. ",
      developerName: "Hunter",
      characterTags: [
        "Detecção",
        "Dano em Área"
      ],
      displayIcon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/background.png",
      backgroundGradientColors: [
        "ebccaeff",
        "2947c3ff",
        "997b58ff",
        "567fb5ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Hunter/Hunter_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Iniciador",
        description: "Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.",
        displayIcon: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Flecha de Choque",
          description: "EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha que explode ao impacto, causando dano aos jogadores próximos. SEGURE DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.",
          displayIcon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Flecha Rastreadora",
          description: "EQUIPE um arco com uma flecha de reconhecimento. DISPARO lança a flecha, que é ativada com impacto e revela a localização de inimigos próximos da linha de visão. Inimigos podem destruí-la. SEGURE DISPARO para ampliar o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.",
          displayIcon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Drone Coruja",
          description: "EQUIPE um drone coruja. DISPARE para acionar e pilotá-lo. Enquanto o pilota, DISPARE para atirar um dardo marcador. Eles revelam a localização de quaisquer jogadores atingidos.",
          displayIcon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Fúria do Caçador",
          description: "EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA até mais duas vezes enquanto o cronômetro de habilidade estiver ativo.",
          displayIcon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ultimate/displayicon.png"
        },
        {
          slot: "Passive",
          displayName: "Mira Extraordinária",
          description: "O arco personalizado de Sova pode disparar as flechas e ricocheteá-las em superfícies. Segurar o disparo aumenta o poder do arco, e a flecha é disparada ao soltar. Pressione o disparo alternativo para mudar o número de ricochetes. Suas flechas podem ricochetear no terreno. Segurar o clique esquerdo aumenta a trajetória do alcance do arco. O clique direito alterna o número de ricochetes desejados. A flecha é disparada ao soltar o clique esquerdo.",
          displayIcon: null
        }
      ],
      voiceLine: {
        minDuration: 2.784,
        maxDuration: 2.784,
        mediaList: [
          {
            id: 1045677213,
            wwise: "https://media.valorant-api.com/sounds/1045677213.wem",
            wave: "https://media.valorant-api.com/sounds/1045677213.wav"
          }
        ]
      }
    },
    {
      uuid: "1e58de9c-4950-5125-93e9-a0aee9f98746",
      displayName: "Killjoy",
      description: "Killjoy, uma alemã genial, defende posições-chave no campo de batalha com uma coleção de armadilhas, torretas e minas. Cada invenção foi desenvolvida para punir qualquer atacante burro o suficiente para não bater em retirada.",
      developerName: "Killjoy",
      characterTags: [
        "Confinamento Defensivo",
        "Dano em Área"
      ],
      displayIcon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/background.png",
      backgroundGradientColors: [
        "e6d759ff",
        "58956aff",
        "dd8df8ff",
        "f3ab3dff"
      ],
      assetPath: "ShooterGame/Content/Characters/Killjoy/Killjoy_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinela",
        description: "Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.",
        displayIcon: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Grenade",
          displayName: "Nanoenxame",
          description: "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano.",
          displayIcon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "ROBÔ DE ALARME",
          description: "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, aplicando Vulnerável aos inimigos na área. SEGURE EQUIPAR para retirar um robô ativado.",
          displayIcon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "TORRETA",
          description: "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.",
          displayIcon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Confinamento",
          description: "EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.",
          displayIcon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.376625,
        maxDuration: 2.376625,
        mediaList: [
          {
            id: 776529305,
            wwise: "https://media.valorant-api.com/sounds/776529305.wem",
            wave: "https://media.valorant-api.com/sounds/776529305.wav"
          }
        ]
      }
    },
    {
      uuid: "707eab51-4836-f488-046a-cda6bf494859",
      displayName: "Viper",
      description: "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.",
      developerName: "Pandemic",
      characterTags: [
        "Especialista em controle de visão"
      ],
      displayIcon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/background.png",
      backgroundGradientColors: [
        "51af58ff",
        "6b8690ff",
        "a5ae60ff",
        "def2acff"
      ],
      assetPath: "ShooterGame/Content/Characters/Pandemic/Pandemic_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controlador",
        description: "Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.",
        displayIcon: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Nuvem Venenosa",
          description: "EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez e pode ser apanhada para ser REPOSICIONADA.",
          displayIcon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Cortina Tóxica",
          description: "EQUIPE um lançador de emissores de gás que penetra a área. DISPARE para lançar uma linha de emissores. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA.",
          displayIcon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Veneno de Cobra",
          description: "EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano aos inimigos e aplica Vulnerável a eles.",
          displayIcon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Poço Peçonhento",
          description: "EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão dos jogadores e a Vida máxima dos inimigos dentro dela. SEGURE a tecla de habilidade para dispersar a nuvem mais cedo.",
          displayIcon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png"
        },
        {
          slot: "Passive",
          displayName: "Tóxica",
          description: "Você gradualmente gera e recupera a toxina que abastece as suas habilidades. Inimigos que atravessarem a Nuvem Venenosa, a Cortina Tóxica ou o Poço Peçonhento da Viper instantaneamente sofrem pelo menos 50 de deterioração. O nível de deterioração deles aumenta quanto mais permanecerem em contato com a toxina.",
          displayIcon: null
        }
      ],
      voiceLine: {
        minDuration: 2.810667,
        maxDuration: 2.810667,
        mediaList: [
          {
            id: 2130763373,
            wwise: "https://media.valorant-api.com/sounds/2130763373.wem",
            wave: "https://media.valorant-api.com/sounds/2130763373.wav"
          }
        ]
      }
    },
    {
      uuid: "eb93336a-449b-9c1b-0a54-a891f7921d69",
      displayName: "Phoenix",
      description: "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.",
      developerName: "Phoenix",
      characterTags: [
        "Flexibilidade",
        "Autossustentação"
      ],
      displayIcon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/background.png",
      backgroundGradientColors: [
        "f7bf60ff",
        "ea6d4eff",
        "838ea6ff",
        "7c5b60ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Phoenix/Phoenix_PrimaryAsset",
      isFullPortraitRightFacing: true,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Grenade",
          displayName: "Labareda",
          description: "EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE DISPARAR para curvá-la na direção da mira.",
          displayIcon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "Bola Curva",
          description: "EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita.",
          displayIcon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Mãos Quentes",
          description: "EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura que causa dano aos inimigos.",
          displayIcon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Renascimento",
          description: "INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa e a mesma quantidade de armadura que tinha ao ativa-la.",
          displayIcon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ultimate/displayicon.png"
        },
        {
          slot: "Passive",
          displayName: "Aquecimento",
          description: "PASSIVAMENTE, Phoenix é curado em vez de sofrer dano quando fica parado no fogo do próprio Phoenix.",
          displayIcon: null
        }
      ],
      voiceLine: {
        minDuration: 1.727021,
        maxDuration: 1.727021,
        mediaList: [
          {
            id: 1294955734,
            wwise: "https://media.valorant-api.com/sounds/1294955734.wem",
            wave: "https://media.valorant-api.com/sounds/1294955734.wav"
          }
        ]
      }
    },
    {
      uuid: "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
      displayName: "Astra",
      description: "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.",
      developerName: "Rift",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/background.png",
      backgroundGradientColors: [
        "ef90afff",
        "4e26c9ff",
        "7aa1e8ff",
        "b0ae84ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Rift/Rift_PrimaryAsset",
      isFullPortraitRightFacing: true,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controlador",
        description: "Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.",
        displayIcon: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Pulso Nova",
          description: "Posicione Estrelas na Forma Astral (tecla da Ultimate).\n\nATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois explode, causando concussão a todos os jogadores na área.",
          displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Nebulosa / Dissipar",
          description: "Posicione Estrelas na Forma Astral (tecla da Ultimate). \n\nATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça).\n\nUTILIZE uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo.\n\nDissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.",
          displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Poço Gravitacional",
          description: "Posicione Estrelas na Forma Astral (tecla da Ultimate).\n\nATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando vulneráveis todos que ainda estão presos no centro.",
          displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Forma Astral / Divisa\nCósmica",
          description: "ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional.\n\nQuando Divisa Cósmica estiver carregada, utilize o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, DISPARO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.",
          displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ultimate/displayicon.png"
        },
        {
          slot: "Passive",
          displayName: "Forma Astral",
          description: "ATIVE a Ultimate para entrar na Forma Astral e use DISPARO para posicionar Estrelas. Atinja as Estrelas com Pulso Nova, Nebulosa ou Poço Gravitacional para utilizar essas habilidades.",
          displayIcon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/passive/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 4.239396,
        maxDuration: 4.239396,
        mediaList: [
          {
            id: 112519480,
            wwise: "https://media.valorant-api.com/sounds/112519480.wem",
            wave: "https://media.valorant-api.com/sounds/112519480.wav"
          }
        ]
      }
    },
    {
      uuid: "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
      displayName: "Brimstone",
      description: "Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.  ",
      developerName: "Sarge",
      characterTags: [
        "Controle de Visão",
        "Dano em Área"
      ],
      displayIcon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/background.png",
      backgroundGradientColors: [
        "b35723ff",
        "8b81aaff",
        "5f1c0aff",
        "eb953fff"
      ],
      assetPath: "ShooterGame/Content/Characters/Sarge/Sarge_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controlador",
        description: "Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.",
        displayIcon: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Grenade",
          displayName: "Sinalizador Estimulante",
          description: "INSTANTANEAMENTE arremesse um sinalizador estimulante. Ao pousar, ele criará um campo que concede Tiro Rápido e Impulso de Velocidade aos jogadores.",
          displayIcon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "Incendiário",
          description: "EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.",
          displayIcon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Fumaça Celeste",
          description: "EQUIPE um mapa tático. DISPARE para marcar locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.",
          displayIcon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Ataque Orbital",
          description: "EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada.",
          displayIcon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 4.120687,
        maxDuration: 4.120687,
        mediaList: [
          {
            id: 851413674,
            wwise: "https://media.valorant-api.com/sounds/851413674.wem",
            wave: "https://media.valorant-api.com/sounds/851413674.wav"
          }
        ]
      }
    },
    {
      uuid: "bb2a4828-46eb-8cd1-e765-15848195d751",
      displayName: "Neon",
      description: "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.",
      developerName: "Sprinter",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/background.png",
      backgroundGradientColors: [
        "efe342ff",
        "689affff",
        "9189cbff",
        "4866e4ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Sprinter/Sprinter_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: false,
      isBaseContent: false,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability2",
          displayName: "Equipamento Voltaico",
          description: "INSTANTANEAMENTE canaliza o poder da Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o DISPARO ALTERNATIVO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates.",
          displayIcon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "Ricochete Elétrico",
          description: "INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão.",
          displayIcon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability1/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Via Expressa",
          description: "DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão.",
          displayIcon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Sobrecarga",
          description: "Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento.",
          displayIcon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 1.806854,
        maxDuration: 1.806854,
        mediaList: [
          {
            id: 391600413,
            wwise: "https://media.valorant-api.com/sounds/391600413.wem",
            wave: "https://media.valorant-api.com/sounds/391600413.wav"
          }
        ]
      }
    },
    {
      uuid: "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
      displayName: "Yoru",
      description: "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.",
      developerName: "Stealth",
      characterTags: null,
      displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/background.png",
      backgroundGradientColors: [
        "e18437ff",
        "99412aff",
        "394278ff",
        "0024f5ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Stealth/Stealth_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Grenade",
          displayName: "DISTRAÇÃO",
          description: "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o DISPARO ALTERNATIVO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.",
          displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ability1",
          displayName: "PONTO CEGO",
          description: "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.",
          displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "PASSAGEM DIMENSIONAL",
          description: "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.",
          displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability2/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "ESPIONAGEM DIMENSIONAL",
          description: "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora.",
          displayIcon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 3.059854,
        maxDuration: 3.059854,
        mediaList: [
          {
            id: 218255885,
            wwise: "https://media.valorant-api.com/sounds/218255885.wem",
            wave: "https://media.valorant-api.com/sounds/218255885.wav"
          }
        ]
      }
    },
    {
      uuid: "569fdd95-4d10-43ab-ca70-79becc718b46",
      displayName: "Sage",
      description: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.",
      developerName: "Thorne",
      characterTags: [
        "Recuperação",
        "Impedimento"
      ],
      displayIcon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/background.png",
      backgroundGradientColors: [
        "9254b8ff",
        "67abddff",
        "66357eff",
        "78fad8ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Thorne/Thorne_PrimaryAsset",
      isFullPortraitRightFacing: true,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinela",
        description: "Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.",
        displayIcon: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Orbe de Lentidão",
          description: "EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele.",
          displayIcon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Orbe Curativo",
          description: "EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo.",
          displayIcon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Orbe de Barreira",
          description: "EQUIPE um orbe de barreira. DISPARE para posicionar uma parede que é fortificada após alguns segundos. DISPARO ALTERNATIVO gira o marcador de alvo.",
          displayIcon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Ressurreição",
          description: "EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa.",
          displayIcon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 3.443479,
        maxDuration: 3.443479,
        mediaList: [
          {
            id: 1976285191,
            wwise: "https://media.valorant-api.com/sounds/1976285191.wem",
            wave: "https://media.valorant-api.com/sounds/1976285191.wav"
          }
        ]
      }
    },
    {
      uuid: "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
      displayName: "Reyna",
      description: "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho. ",
      developerName: "Vampire",
      characterTags: [
        "Evasão",
        "Autossustentação"
      ],
      displayIcon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/background.png",
      backgroundGradientColors: [
        "ce53a8ff",
        "2f2664ff",
        "383b3dff",
        "e46c76ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Vampire/Vampire_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Devorar",
          description: "Colheita de Almas: inimigos abatidos por Reyna ou abatidos até 3 segundos após sofrerem dano da Reyna deixam Orbes de Alma que duram 3s.\n\nDevorar: INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o Orbe de Alma.",
          displayIcon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Dispensar",
          description: "INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa.",
          displayIcon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Olhar Voraz",
          description: "EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele.",
          displayIcon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Imperatriz",
          description: "INSTANTANEAMENTE entra em estado de frenesi, aumentando drasticamente as velocidades de disparo, equipagem e recarga de munição. Ganha cargas infinitas das habilidades de Colheita de Almas. A duração é renovada quando um inimigo morrer para Reyna ou em até 3 segundos após sofrer dano de Reyna.",
          displayIcon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 2.982208,
        maxDuration: 2.982208,
        mediaList: [
          {
            id: 1851135618,
            wwise: "https://media.valorant-api.com/sounds/1851135618.wem",
            wave: "https://media.valorant-api.com/sounds/1851135618.wav"
          }
        ]
      }
    },
    {
      uuid: "8e253930-4c05-31dd-1b6c-968525494517",
      displayName: "Omen",
      description: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.",
      developerName: "Wraith",
      characterTags: [
        "Mobilidade",
        "Controle de Visão"
      ],
      displayIcon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/background.png",
      backgroundGradientColors: [
        "7c7fb4ff",
        "3e3c56ff",
        "4a5fa4ff",
        "59bbc5ff"
      ],
      assetPath: "ShooterGame/Content/Characters/Wraith/Wraith_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: false,
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controlador",
        description: "Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.",
        displayIcon: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Paranoia",
          description: "EQUIPE um orbe cegante. DISPARE para lançá-lo, ensurdecendo e reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes.",
          displayIcon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Manto Sombrio",
          description: "EQUIPE um orbe sombrio, entrando num universo distorcido para colocar e alvejar orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera duradoura que bloqueia visão. Enquanto mira, SEGURE DISPARO para afastar o marcador ou SEGURE O DISPARO ALTERNATIVO para aproximar. PRESSIONE RECARREGAR para alternar para a visão de mira normal.",
          displayIcon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Passos Tenebrosos",
          description: "EQUIPE uma habilidade de Passos Tenebrosos para ver o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.",
          displayIcon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Salto das Sombras",
          description: "EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte, ou PRESSIONE EQUIPAR para cancelá-lo.",
          displayIcon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 3.429625,
        maxDuration: 3.429625,
        mediaList: [
          {
            id: 1816348070,
            wwise: "https://media.valorant-api.com/sounds/1816348070.wem",
            wave: "https://media.valorant-api.com/sounds/1816348070.wav"
          }
        ]
      }
    },
    {
      uuid: "add6443a-41bd-e414-f6ad-e58d267f4e95",
      displayName: "Jett",
      description: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
      developerName: "Wushu",
      characterTags: [
        "Evasão",
        "Mobilidade"
      ],
      displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
      displayIconSmall: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png",
      bustPortrait: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/bustportrait.png",
      fullPortrait: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
      fullPortraitV2: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportraitv2.png",
      killfeedPortrait: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png",
      background: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png",
      backgroundGradientColors: [
        "9edaf6ff",
        "5266aaff",
        "2b577cff",
        "90fcfdff"
      ],
      assetPath: "ShooterGame/Content/Characters/Wushu/Wushu_PrimaryAsset",
      isFullPortraitRightFacing: false,
      isPlayableCharacter: true,
      isAvailableForTest: true,
      isBaseContent: true,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelista",
        description: "Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.",
        displayIcon: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath: "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset"
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Corrente Ascendente",
          description: "INSTANTANEAMENTE lança Jett bem alto no ar.",
          displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png"
        },
        {
          slot: "Ability2",
          displayName: "Brisa de Impulso",
          description: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para frente.",
          displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png"
        },
        {
          slot: "Grenade",
          displayName: "Erupção das Brumas",
          description: "INSTANTANEAMENTE lança um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.",
          displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png"
        },
        {
          slot: "Ultimate",
          displayName: "Tormenta de Aço",
          description: "EQUIPE um conjunto de facas de arremesso. DISPARE para lançar uma única faca contra o alvo e recarregá-las ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, sem a opção de recarregá-las ao matar o oponente.",
          displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png"
        },
        {
          slot: "Passive",
          displayName: "Deriva",
          description: "Segurar o botão de pulo durante uma queda permite que você plane no ar.",
          displayIcon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png"
        }
      ],
      voiceLine: {
        minDuration: 1.386688,
        maxDuration: 1.386688,
        mediaList: [
          {
            id: 1798160596,
            wwise: "https://media.valorant-api.com/sounds/1798160596.wem",
            wave: "https://media.valorant-api.com/sounds/1798160596.wav"
          }
        ]
      }
    }
  ]
}

//Api request baseULR https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR