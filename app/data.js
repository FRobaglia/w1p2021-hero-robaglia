/* eslint-disable quotes */

const jpg = require('./assets/img/*.jpg');
const png = require('./assets/img/*.png');

export default {
  "steps": [
    {
      "id": 1,
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
      "id": 9,
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
      "title": "Alors que vous entrez dans la taverne, deux choses vous intriguent : un homme assis seul dans un coin de la taverne, et un groupe d'aventuriers assis à une grande table, qui sont étrangement silencieux.",
      "actions": [
        {
          "description": "Aller voir l'homme seul",
          "path": 12
        },
        {
          "description": "Aller voir le groupe d'aventuriers",
          "path": 16
        }
      ]
    },
    {
      "id": 11,
      "title": "Auberge",
      "actions": [
        {
          "description": "",
          "path": 20
        },
        {
          "description": "",
          "path": 21
        }
      ]
    },
    {
      "id": 12,
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
      "title": "Il est temps de vous recentrer sur votre quête, vous n'avez toujours aucun indice... Peut-être que le groupe d'aventuriers étrangement silencieux assis à l'autre bout de la taverne sauraient vous aider...",
      "actions": [
        {
          "description": "Aller les voir",
          "path": 16
        },
        {
          "description": "Ne pas y aller",
          "lossCause": "Vous avez mis trop de temps à trouver des indices et, dans le village, la rumeur s'était répandue à propos du fait que vous cherchiez la cause des morts inexpliquées. Le soir en allant vous coucher, vous ne vous êtes jamais relevés... Apparemment, quelqu'un ne voulait pas que cette affaire s'ébruite..."
        }
      ]
    },
    {
      "id": 15,
      "title": "Alors que vous vous apprêtez à continuer votre aventure, vous réalisez que les 3 brigands que vous avez éliminés étaient surement les même qui avaient dévalisé la boutique du pauvre marchand, et vous vous rappelez qu'il vous avait promis une surprise si vous les retrouviez. Vous décidez donc de faire un détour par sa boutique. Vous pouvez lire le soulagement dans son visage quand vous lui annoncer que vous l'avez vengé. Il vous donne une paire de bottes pour vous remercier. Lorsque vous les enfilez, vous vous sentez plus agile.",
      "actions": [
        {
          "description": "Super ! Continuer.",
          "path": 9
        }
      ]
    }
  ],
  "characters": [
    {
      "class": "Mage",
      "background": jpg.wizard,
      "description": "“ L'atout principal du magicien réside dans sa puissance exceptionnelle. En revanche, ses autres statistiques sont assez faibles. ”",
      "stats": {
        "luck": 3,
        "power": 16,
        "agility": 4,
        "health": 50
      }
    },
    {
      "class": "Guerrier",
      "background": jpg.warrior,
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
      "background": jpg.rogue,
      "description": "“ Le voleur évite les combats quand il le peut : il préfère ruser et se faufiler pour arriver à ses fins... ”",
      "stats": {
        "luck": 9,
        "power": 2,
        "agility": 8,
        "health": 80
      }
    }
  ]
};