/*
 * Copyright 2017 - Olivier Azeau
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

var cards = [
  {
    family:"cover",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1 }
    ]
  },
  {
    family:"leader",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1 }
    ]
  },
  {
    family:"product-team",
    newpage:true,
    cardsByPage:10,
    items: [
      { quantity:10, title:"ADVERGAME", description:"Jeux publicitaires", cost:1, score:1 },
      { quantity:7, title:"EDUCATION", description:"Jeux éducatifs", cost:2, score:1 },
      { quantity:7, title:"SOCIAL", description:"Jeux communautaires", cost:3, score:2 },
      { quantity:7, title:"MMOG", description:"Jeux en ligne massivement multijoueurs", cost:4, score:2 }
    ]
  },
  {
    family:"agile-maturity",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:3, title:"Développeur passionné", cost:1, score:1,
        description:"Votre implication dans la communauté des développeurs facilite le recrutement.",
        activity:"RETROSPECTIVE", gain:"Vous payez une carte en moins pour former une équipe produit." },
      { quantity:3, title:"Praticien agile", cost:1, score:1,
        description:"Votre implication dans la communauté agile vous permet de profiter au mieux des rencontres entre pairs.",
        activity:"CONFERENCE", gain:"Vous pouvez défausser des cartes de votre main à la place des cartes piochées." },
      { quantity:3, title:"Expérience utilisateur", cost:2, score:1,
        description:"Vous portez une attention particulière au métier des utilisateurs.",
        activity:"DEPLOYMENT", gain:"Vous recevez une carte supplémentaire lors d’un déploiement d’au moins deux produits." },
      { quantity:3, title:"Programmation en binôme", cost:2, score:1,
        description:"Le développement systématique en binômes fluidifie les échanges entre vos développeurs.",
        activity:"DEVELOPMENT", gain:"Vous piochez une carte lors d’un développement d’au moins deux produits." },
      { quantity:3, title:"Organisateur agile", cost:3, score:2,
        description:"Vous organisez des rencontres entre praticiens agiles ce qui vous permet de multiplier les échanges.",
        activity:"CONFERENCE", gain:"Vous conservez une carte supplémentaire parmi les cartes piochées." },
      { quantity:3, title:"Retour d’expérience", cost:3, score:2,
        description:"Vous apprenez à mieux vous connaître en analysant l’impact de vos décisions.",
        activity:"RETROSPECTIVE", gain:"Vous piochez une carte après la mise en route d’une action d’amélioration." },
      { quantity:3, title:"Code propre", cost:3, score:2,
        description:"L’attention portée à la qualité de votre code vous permet de coder vite et bien.",
        activity:"DEVELOPMENT", gain:"Vous développez un produit supplémentaire." },
      { quantity:3, title:"Livraison en continu", cost:3, score:2,
        description:"Votre produit est en permanence dans un état prêt à être livré.",
        activity:"DEPLOYMENT", gain:"Vous déployez un produit supplémentaire." },
      { quantity:3, title:"Dev Ops", cost:3, score:2,
        description:"L’absence de barrières entre vos équipes fluidifie l’ensemble du cycle produit.",
        activity:"RETROSPECTIVE", gain:"Vous pouvez payer avec des produits encore non déployés chacun ayant une valeur de 2 cartes." },
      { quantity:3, title:"RH agile", cost:4, score:2,
        description:"L’agilité de votre organisation interne augmente votre capacité d’action",
        activity:"LEADER", gain:"Vous pouvez avoir jusqu’à 10 cartes en mains lors du changement de meneur de jeu." },
      { quantity:3, title:"Utilisateurs impliqués", cost:4, score:2,
        description:"Vous impliquez vos utilisateurs dans le développement de vos produits.",
        activity:"DEPLOYMENT", gain:"Vous recevez une carte supplémentaire lors d’un déploiement." },
      { quantity:3, title:"Coach interne", cost:4, score:2,
        description:"Vous avez un coach en permanence disponible pour faire progresser vos équipes.",
        activity:"RETROSPECTIVE", gain:"Vous payez une carte en moins pour mener une action d’amélioration." },
      { quantity:3, title:"Planification détaillée", cost:1, score:-4,
        description:"La planification détaillée vous permet de prévoir le futur dans les moindres détails.",
        activity:"THEEND", gain:"Cette carte est automatiquement ajoutée à votre entreprise si vous l'avez en main à la fin du jeu." },
      { quantity:3, title:"Equipe de test", cost:1, score:-4,
        description:"Une équipe de test indépendante assure que les produits seront toujours conformes aux attentes.",
        activity:"THEEND", gain:"Cette carte est automatiquement ajoutée à votre entreprise si vous l'avez en main à la fin du jeu." },
      { quantity:3, title:"Framework applicatif", cost:1, score:-5,
        description:"L’utilisation d’un framework applicatif augmente votre productivité en développement.",
        activity:"THEEND", gain:"Cette carte est automatiquement ajoutée à votre entreprise si vous l'avez en main à la fin du jeu." },
      { quantity:3, title:"Certification agile", cost:1, score:-5,
        description:"La certification de vos équipes garantit l'adoption des valeurs, principes et pratiques agiles",
        activity:"THEEND", gain:"Cette carte est automatiquement ajoutée à votre entreprise si vous l'avez en main à la fin du jeu." },
      { quantity:2, title:"Artisanat du logiciel", cost:5, score:"∗",
        description:"Vos développeurs sont animés par un professionalisme à toute épreuve.",
        activity:"THEEND", gain:"Chaque équipe produit vous rapporte deux points supplémentaires." },
      { quantity:2, title:"Sensei agile", cost:5, score:"∗",
        description:"Vous êtes passé maître dans l’art de faire progresser vos équipes.",
        activity:"THEEND", gain:"Chaque valeur ou action d’amélioration vous rapporte un point supplémentaire." },
      { quantity:2, title:"Vision produit", cost:5, score:"∗",
        description:"L’ensemble de votre stratégie est porté par une vision claire de vos produits.",
        activity:"THEEND", gain:"Votre score final est majoré de 30 %" }
    ]
  },
  {
    family:"agile-value",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1, title:"Humour",
        description:"L'humour est-il une valeur agile ? Certains le pensent." },
      { quantity:2, title:"Feedback",
        description:"Le feedback est une des valeurs mise en avant par Extreme Programming." },
      { quantity:2, title:"Simplicité",
        description:"La simplicité est une des valeurs mise en avant par Extreme Programming." },
      { quantity:2, title:"Confiance",
        description:"La confiance est une des valeurs mise en avant par Scrum." },
      { quantity:2, title:"Transparence",
        description:"La transparence est une des valeurs mise en avant par Scrum." },
      { quantity:2, title:"Courage",
        description:"Le courage est une valeur partagée par Scrum et Extreme Programming." },
      { quantity:2, title:"Respect",
        description:"Le respect est une valeur partagée par Scrum et Extreme Programming." }
    ]
  },
  {
    family:"activity",
    newpage:true,
    cardsByPage:10,
    items: [
      { quantity:1, title:"Développement", logo:"DEVELOPMENT",
        description:"Chaque joueur peut développer un produit",
        privilege:"L'initiateur de l'activité peut développer un produit supplémentaire" },
      { quantity:1, title:"Déploiement", logo:"DEPLOYMENT",
        description:"Chaque joueur peut déployer un produit",
        privilege:"L'initiateur de l'activité peut déployer un produit supplémentaire" },
      { quantity:1, title:"Rétrospective", logo:"RETROSPECTIVE",
        description:"Chaque joueur peut mettre en place une équipe ou une action d'amélioration",
        privilege:"L'initiateur de l'activité paie une carte en moins" },
      { quantity:1, title:"Conférence", logo:"CONFERENCE",
        description:"Chaque joueur pioche deux cartes et en conserve une",
        privilege:"L'initiateur de l'activité pioche non pas deux mais cinq cartes" },
      { quantity:1, title:"Coach", logo:"COACH",
        description:"L'intervention du coach est limitée à l'initiateur de l'activité",
        privilege:"L'initiateur de l'activité pioche une carte et la conserve" }
    ]
  },
  {
    family:"profits",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1, ADVERGAME:2, EDUCATION:2, SOCIAL:3, MMOG:3 },
      { quantity:1, ADVERGAME:2, EDUCATION:2, SOCIAL:3, MMOG:4 },
      { quantity:1, ADVERGAME:2, EDUCATION:3, SOCIAL:3, MMOG:4 },
      { quantity:1, ADVERGAME:2, EDUCATION:3, SOCIAL:4, MMOG:4 }
    ]
  }
];


