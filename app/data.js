/* eslint-disable max-len */
/* eslint-disable quotes */

const jpg = require('./assets/img/*.jpg');

export default {
  "steps": [
    {
      "id": 1,
      "background": jpg.village,
      "title": "Votre aventure épique commence ici. Pour découvrir la raison de ces terribles disparitions, il faudrait commencer à enquêter au plus vite. Cependant, vous vous apprêtiez à aller a la boutique pour acheter des équipements qui pourraient peut-être vous aider pour votre quête...",
      "actions": [
        {
          "description": "Aller à la boutique d'équipements",
          "path": 2
        },
        {
          "description": "Enquêter, le temps presse !",
          "path": 5
        }
      ]
    },
    {
      "id": 2,
      "background": jpg.marchandarme,
      "title": "Alors que vous arrivez à la boutique, vous remarquez quelque chose de louche: les vitrines sont vides ! Le marchand, dépité, vous raconte que 3 brigands sont arrivés peu avant vous et ont dévalisé le magasin, et ont tout voler sauf un mystérieux anneau magique. Le marchand vous dit qu'il vaut plus de 1 000 pièces d'or, mais qu'il est prêt à vous le vendre pour 200 pièces d'or si vous l'aidez à retrouver les brigands.",
      "actions": [
        {
          "description": "Accepter l'offre du marchand",
          "path": 3,
          "newState": {
            "gold": -200,
            "luck": 5,
            "merchant": true
          }
        },
        {
          "description": "Refuser l'offre du marchand",
          "path": 4
        }
      ]
    },
    {
      "id": 3,
      "background": jpg.marchandarme,
      "title": "Le marchand vous remercie et vous promets une surprise si vous retrouvez les brigands ! De plus, dès lors que vous mettez l'anneau à votre doigt, vous sentez votre chance augmenter... Vous avez maintenant 2 quêtes à résoudre, il est temps d'enquêter!",
      "actions": [
        {
          "description": "Aller enquêter",
          "path": 5
        }
      ]
    },
    {
      "id": 4,
      "background": jpg.marchandarme,
      "title": "Le marchand vous jette un regard triste et desespéré. Le pauvre homme a 4 enfants à nourrir et n'a désormais plus de boutique,n'avez-vous donc aucun coeur ? Quoi qu'il en soit, il est temps d'enquêter sur votre quête principale : trouver la cause des morts inexpliquées de villageois.",
      "actions": [
        {
          "description": "Aller enquêter",
          "path": 5
        }
      ]
    },
    {
      "id": 5,
      "background": jpg.village,
      "title": "Alors que vous arpentez les rues à la recherche d'indices, vous apercevez 3 brigands en train d'agresser une villageoise sans défense dans une petite rue déserte. Ils sont armés, mais n'ont pas l'air très futés.",
      "actions": [
        {
          "description": "Courir vers les brigands et les attaquer",
          "path": 6,
          "type": "pow",
          "tooltip": "Ce choix prend en compte votre puissance",
          "newState": {
            "health": -90,
            "gold": 300
          }
        },
        {
          "description": "Approcher discrètement sans vous faire remarquer",
          "path": 7,
          "type": "agi",
          "tooltip": "Ce choix prend en compte votre agilité",
          "newState": {
            "gold": 300,
            "agilityTry": 3
          }
        },
        {
          "description": "Les ignorer et continuer votre route",
          "path": 9
        }
      ]
    },
    {
      "id": 6,
      "background": jpg.village,
      "title": "Après un combat acharné, vous parvenez à vaincre les brigands, mais votre santé en a pris un coup. La villageoise, terrifiée mais soulagée, vous remercie. Pour vous remercier de l'avoir défendu, elle vous tend une petite bourse remplie de pièces d'or. Il est temps de continuer l'aventure !",
      "actions": [
        {
          "description": "C'est parti !",
          "path": 9,
          "goMerchant": true
        }
      ]
    },
    {
      "id": 7,
      "background": jpg.village,
      "title": "Grâce à votre agilité, vous parvenez à approcher les bandits sans vous faire remarquer... Alors que vous êtes dans leur dos, vous les éliminer 1 à 1 sans qu'ils aient le temps de réagir. La villageoise, terrifiée mais soulagée, vous remercie. Pour vous remercier de l'avoir défendu, elle vous tend une petite bourse remplie de pièces d'or. Il est temps de continuer l'aventure !",
      "actions": [
        {
          "description": "C'est parti !",
          "path": 9,
          "goMerchant": true
        }
      ]
    },
    {
      "id": 8,
      "background": jpg.village,
      "title": "Alors que vous vous apprêtez à continuer votre aventure, vous réalisez que les 3 brigands que vous avez éliminés étaient surement les même qui avaient dévalisé la boutique du pauvre marchand, et vous vous rappelez qu'il vous avait promis une surprise si vous les retrouviez. Vous décidez donc de faire un détour par sa boutique. Vous pouvez lire le soulagement dans son visage quand vous lui annoncer que vous l'avez vengé. Il vous donne une paire de bottes pour vous remercier. Lorsque vous les enfilez, vous vous sentez plus agile.",
      "actions": [
        {
          "description": "Super ! Continuer.",
          "path": 9
        }
      ]
    },
    {
      "id": 9,
      "background": jpg.village,
      "title": "Il est donc enfin temps d'enquêter sur votre quête. Pour trouver des indices sur la menace pesant sur le village, deux endroits peuvent être intéressants : l'auberge ou la taverne du village.",
      "actions": [
        {
          "description": "La taverne",
          "path": 10
        },
        {
          "description": "L'auberge",
          "path": 11
        }
      ]
    },
    {
      "id": 10,
      "background": jpg.Taverne,
      "title": "Alors que vous entrez dans la taverne, deux choses vous intriguent : un homme assis seul dans un coin de la taverne, et un groupe d'aventuriers assis à une grande table, qui sont étrangement silencieux.",
      "actions": [
        {
          "description": "Aller voir l'homme seul",
          "path": 12
        },
        {
          "description": "Aller voir le groupe d'aventuriers",
          "path": 15
        }
      ]
    },
    {
      "id": 11,
      "background": jpg.auberge,
      "title": "Vous arrivez à l'auberge, qui est presque vide. Deux choix s'offrent à vous, vous payer une nuit à l'auberge pour guérir de vos blessures, ou bien trouver de nouveaux indices. Justement, le tenancier de l'auberge en sait peut être quelque chose...",
      "actions": [
        {
          "description": "Passer la nuit",
          "path": 19,
          "tooltip": "Coûte 100 pièces d'or. Restaure tous vos points de vie.",
          "newState": {
            "gold": -100
          },
          "auberge": true,
        },
        {
          "description": "Interroger l'homme",
          "path": 20
        }
      ]
    },
    {
      "id": 12,
      "background": jpg.Taverne,
      "title": "Vous vous approchez de l'homme seul, et lui demandez si il sait quelque chose à propos des morts inexpliquées de villageois autour du village. Il vous répond qu'il n'en sait rien, mais vous propose de parier avec lui. Pour 50 pièces d'or, l'homme lance une pièce. Si elle tombe sur pile, vous doublez votre mise, mais si elle tombe sur face, vous perdez vos 50 pièces d'or. Seulement l'homme semble louche, en conséquence la pièce est peut être truquée... Parier avec l'homme ?",
      "actions": [
        {
          "description": "Jouer",
          "path": 13,
          "type": "lck",
          "tooltip": "Ce choix prend en compte votre chance",
          "bet": true
        },
        {
          "description": "Ne pas tenter sa chance",
          "path": 14
        }
      ]
    },
    {
      "id": 13,
      "background": jpg.Taverne,
      "title": "L'homme lance la pièce, elle atteint quasiment le plafond de la taverne, puis retombe sur la table en bois, et...",
      "actions": [
        {
          "description": "Rejouer",
          "path": 13,
          "type": "lck",
          "tooltip": "Ce choix prend en compte votre chance",
          "bet": true
        },
        {
          "description": "Il serait peut-être temps de continuer votre quête...",
          "path": 14
        }
      ]
    },
    {
      "id": 14,
      "background": jpg.Taverne,
      "title": "Il est temps de vous recentrer sur votre quête, vous n'avez toujours aucun indice... Peut-être que le groupe d'aventuriers étrangement silencieux assis à l'autre bout de la taverne sauraient vous aider...",
      "actions": [
        {
          "description": "Aller les voir",
          "path": 15
        },
        {
          "description": "Ne pas y aller",
          "lossCause": "Vous avez mis trop de temps à trouver des indices et, dans le village, la rumeur s'était répandue à propos du fait que vous cherchiez la cause des morts inexpliquées. Le soir en allant vous coucher, vous ne vous êtes jamais relevés... Apparemment, quelqu'un ne voulait pas que cette affaire s'ébruite..."
        }
      ]
    },
    {
      "id": 15,
      "background": jpg.Taverne,
      "title": "Vous vous approchez du groupe d’aventuriers.. Lorsque vous leur demander si ils ont des informations concernant les morts inexpliquées, un silence pesant se créé. Peu de  temps après, ils vous apprennent qu’ils ont perdu un camarade au combat en essayant d’éliminer la créature à l’origine de tout cela... Ils vous conseille d’abandonner votre quête, vous n’avez aucune chance contre ce monstre.. Il vous indique tout de même que la créature est située dans une grotte au nord du village.",
      "actions": [
        {
          "description": "Direction la grotte !",
          "path": 16
        },
        {
          "description": "Abandonner",
          "lossCause": "Vous venez d'abandonner, à vous attendiez-vous au juste ?"
        }
      ]
    },
    {
      "id": 16,
      "background": jpg.Sortirvillage,
      "title": "Vous sortez du village, déterminé à venger les villageois morts ces derniers jours. Vous marchez, de longues heures, au nord comme on vous l'a indiqué. La nuit ne va pas tarder à tomber, vous commencez à fatiguer...",
      "actions": [
        {
          "description": "Etablir un campement pour passer la nuit.",
          "lossCause": "Vous vous êtes endormi, extenué par la route. Seulement, dans la nuit, vous avez entendu un bruit, et en ouvrant les yeux, une silhouette imposante se tenait devant vous. Vous vous empressez de sortir votre arme, mais la créature vous assène un coup fatal. Quelle idée de s'endormir après s'être approcher de la menace..."
        },
        {
          "description": "Continuer sa route.",
          "path": 17
        }
      ]
    },
    {
      "id": 17,
      "background": jpg.Sortirvillage,
      "title": "Vous continuez votre route en direction du nord, et vous voyez au loin une cabane avec de la lumière. Les rumeurs disent justement qu'une sorcière vit au nord du village, elle connaît peut-être un elixir magique qui pourrait en venir à bout de la créature.",
      "actions": [
        {
          "description": "Aller voir.",
          "path": 18
        },
        {
          "description": "Continuer sa route.",
          "path": 21
        }
      ]
    },
    {
      "id": 18,
      "background": jpg.Sortirvillage,
      "title": "Vous arrivez devant la porte et toquez. Après un long moment d'attente, la porte s'ouvre doucement... Une dame agée avec une longue robe noire se tient devant vous, vous lui expliquez votre situation. Elle vous laisse entrer, autour de vous des fioles sont posées sur toutes les étagères. La sorcière vous montre une fiole d'un liquide rouge vif et vous indique que cette potion pourrait venir à bout de la créature, il suffirait de jeter la potion sur son visage, mais elle vous la cédera seulement pour 500 pièces d'or.",
      "actions": [
        {
          "description": "Acheter la potion.",
          "path": 25,
          "tooltip": "Coûte 500 pièces d'or.",
          "newState": {
            "gold": -500
          }
        },
        {
          "description": "Tuer la sorcière et lui voler la potion.",
          "type": "pow",
          "tooltip": "Ce choix prend en compte votre puissance",
          "path": 26,
          "newState": {
            "health": -75
          }
        },
        {
          "description": "Ne pas acheter la potion",
          "path": 27,
        }
      ]
    },
    {
      "id": 19,
      "background": jpg.auberge,
      "title": "Après cette bonne nuit de repos, il est temps de continuer l'aventure ! En remerciant l'aubergiste, il vous dit qu'il a entendu un groupe d'aventuriers parler d'une grotte au nord du village abritant une créature qui serait à l'origine de tout cela..",
      "actions": [
        {
          "description": "Y aller !",
          "path": 16,
        },
      ]
    },
    {
      "id": 20,
      "background": jpg.auberge,
      "title": "Vous interrogez l'homme, et il vous dit qu'il a entendu un groupe d'aventuriers parler de ça il y a quelque temps... Ils ont parlé d'une grotte au nord du village abritant une créature étant à l'origine de tout cela...",
      "actions": [
        {
          "description": "Y aller !",
          "path": 16,
        },
      ]
    },
  ],
  "characters": [
    {
      "class": "Mage",
      "description": "“ L'atout principal du magicien réside dans sa puissance exceptionnelle. En revanche, ses autres statistiques sont assez faibles. ”",
      "stats": {
        "luck": 3,
        "power": 33,
        "agility": 4,
        "health": 80
      }
    },
    {
      "class": "Guerrier",
      "description": "“ Le guerrier est très fort au combat grâce à sa puissance et ses points de vie élevés, mais il est peu agile. ”",
      "stats": {
        "luck": 4,
        "power": 9,
        "agility": 1,
        "health": 150
      }
    },
    {
      "class": "Voleur",
      "description": "“ Le voleur évite les combats quand il le peut : il préfère ruser et se faufiler pour arriver à ses fins... ”",
      "stats": {
        "luck": 9,
        "power": 2,
        "agility": 8,
        "health": 100
      }
    }
  ]
};
