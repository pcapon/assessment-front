export const FR = {
  shared: {
    edit: 'Modifier',
    save: 'Enregistrer',
    next: 'Suivant',
    cancel: 'Annuler',
    delete: 'Supprimer',
    create: 'Créer',
    refuse: 'Refuser',
    share: 'Partager',
    clipboard: 'Copier dans le presse-papier',
    showMore: 'Voir plus',
    showAll: 'Tout voir',
    noTeam: 'No teams',
    optional: '(facultatif)',
    noData: 'Aucune donnée à afficher',
    noDataSubtitle: 'Aucun résultat ne correspond à votre recherche',
    reply: 'Répondre',
    search: 'Rechercher',
    period: 'Période',
    priorities: {
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    },
    status: {
      title: 'Status',
      incoming: 'À venir',
      ongoing: 'En cours',
      ended: 'Terminé',
    },
    dateFilter: {
      week: 'Semaine',
      month: 'Mois',
      trimester: '3 Mois',
      year: 'Année',
    },
    rollingDateFilter: {
      year: '12 mois',
      trimester: '3 mois',
      month: '1 mois',
    },
  },
  leadHome: {
    title: 'Bonjour ',
    subtitle: "Retrouvez l'ensemble des statistiques de vos équipes.",
    comments: ['{{}} commentaire', '{{}} commentaires'],
    subtitleComment: [
      'Vos utilisateurs ont laissé {{}} nouveau commentaire.',
      'Vos utilisateurs ont laissé {{}} nouveaux commentaires.',
    ],
    question: ['{{}} question suggérée', '{{}} questions suggérées'],
    subtitleQuestion: ['Vous avez {{}} question en attente.', 'Vous avez {{}} questions en attente.'],
    statistics: {
      title: 'Statistiques',
      globalScore: 'Score global',
      globalScoreToolTip: 'Score moyen de toutes les questions répondues sur la période donnée',
      averageCompletion: 'Complétion moyenne',
      averageCompletionToolTip: 'Nombre de programs réussis sur nombre de programmes assignés',
      activeMembers: 'Membres réguliers',
      activeMembersToolTip: 'Nombre de membres ayant interagi avec Alto sur une période donnée',
      inactiveMembers: 'Membres irréguliers',
      inactiveMembersToolTip: "Nombre de membres n'ayant pas interagi avec Alto sur une période donnée",
    },
    graph: {
      period: 'Période',
      score: 'Score (%)',
    },
    globalEvolution: {
      title: 'Évolution globale',
      score: 'Score moyen',
      tabs: {
        program: 'Programmes',
        tag: 'Tags',
        team: 'Équipe',
        member: 'Membre',
      },
      top: 'Top',
      flop: 'Flop',
    },
    ongoingPrograms: {
      title: 'Programmes en cours',
      involvement: 'Participation',
      progress: 'Avancement',
      score: 'Score',
      filters: {
        team: 'Équipe',
      },
    },
    ongoingChallenges: {
      title: 'Challenges en cours',
      byTeam: 'Par équipe',
      individual: 'Individuel',
      noTeamChallenges: 'Aucun challenge par équipe disponible',
      noTeamChallengesSubtitle: 'Créez, ou importez, vos premiers challenges et assignez à des équipes',
      noIndividualChallenges: 'Aucun challenge individuel disponible',
      noIndividualChallengesSubtitle: 'Créez, ou importez, vos premiers challenges',
      table: {
        name: 'Nom',
        teams: 'Équipes en compétition',
        leader: 'Leader',
        startDate: 'Date de début',
        endDate: 'Date de fin',
        end: 'Fin',
        status: 'Status',
      },
    },
  },
  programs: {
    title: 'Programmes',
    subtitle: "Retrouvez l'ensemble des trainings de vos équipes.",
    programs: {
      title: 'Programmes',
      subtitle: "Retrouvez l'ensemble des trainings de vos équipes.",
      createProgram: 'Créer',
      involvement: 'Participation',
      involvementToolTip: 'Nombre de membres ayant commencé le programme sur le nombre de membres assignés',
      progress: 'Avancement',
      progressToolTip: 'Nombre de questions répondues par tout les membres sur le nombre total de questions',
      score: 'Score',
      filters: {
        team: 'Équipe',
      },
    },
    questions: {
      title: 'Questions',
      subtitle: "Retrouvez l'ensemble des questions présentes dans vos programmes.",
      createQuestion: 'Ajouter',
      table: {
        question: 'Question',
        score: 'Score',
        author: 'Ajoutée par',
        tags: 'Tags',
        programs: 'Programmes',
      },
      filters: {
        programs: 'Programmes',
        tags: 'Tags',
        contributors: 'Contributeurs',
      },
    },
    awaitQuestions: {
      title: 'Questions en attente',
      subtitle: 'Ces questions ont été suggérées par vos utilisateurs et attendent votre validation.',
      table: {
        question: 'Intitulé',
        author: 'Ajouté par',
      },
    },
    tags: {
      title: 'Tags',
      subtitle: "Retrouvez l'ensemble des tags présents dans vos programmes et questions.",
      createTag: 'Créer',
      table: {
        name: 'Nom',
        score: 'Score',
        author: 'Créé par',
        associatedPrograms: 'Programmes associés',
      },
      filters: {
        programs: 'Programmes',
      },
    },
    forms: {
      create: 'Création de programme',
      edit: 'Éditeur de programme',
      questionCount: 'Nombre de questions',
      step1: {
        title: 'Informations',
        subtitle: 'Renseignez les informations générales à propos de ce programme',
        name: 'Nom du programme',
        nameSubtitle: 'Visible par tout le monde',
        namePlaceholder: 'Exemple : Onboarding',
        description: 'Description',
        descriptionSubtitle: 'Ecrivez une brève description du contenu du programme',
        descriptionPlaceholder:
          "Exemple : I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.",
        tags: 'Tags',
        tagsSubtitle: 'Les sujets abordés dans le programme',
        tagsPlaceholder: 'Rechercher dans vos tags',
        teams: 'Équipes',
        teamsSubtitle: 'Les utilisateurs qui seront assignés à ce programme',
        teamsPlaceholder: 'Rechercher dans vos équipes',
        priority: 'Priorité',
        prioritySubtitle: '',
        priorityPlaceholder: 'Choisir un niveau',
        expectation: 'Score attendu',
        expectationSubtitle: '',
      },
      step2: {
        title: 'Questions',
        subtitle: 'Renseignez les informations de ce programme',
        new: 'Nouvelle question',
        newSubtitle: 'Créer une nouvelle question qui sera automatiquement associée à ce programme.',
        newText: 'Cliquer ici pour créer une nouvelle question.',
        newText2: 'Elle sera automatiquement associée à ce programme.',
        existing: 'Questions existantes',
        existingSubtitle: 'Ajouter des questions déjà créées sur les tags associés.',
      },
      step3: {
        title: 'Partage',
        title2: 'Partager votre programme',
        subtitle: 'Retrouvez les options de partage à vos équipes.',
        summary: 'Récapitulatif',
        summarySubtitle: 'Les informations que vous avez rempli à propos de ce programme.',
      },
    },
  },
  statistics: {
    title: 'Statistiques',
    subtitle: "Retrouvez l'ensemble des statistiques de vos équipes.",
    globalEngagement: {
      title: 'Engagement global',
      subtitle: "Retrouvez l'engagement global de vos équipes.",
      activity: {
        activity: 'Activité',
        activitySubtitle: "Suivez l'évolution du nombre de questions auxquelles répondent vos équipes.",
        teamFilter: 'Équipe',
      },
      contributon: {
        contribution: 'Contribution',
        contributionSubtitle: 'Retrouver les équipes ayant suggéré ou commenté des questions.',
      },
    },
    globalPerformance: {
      navbarTitle: 'Performance globale',
      perTeamPerformance: {
        title: 'Performance par équipes',
        subtitle: 'Retrouvez les performances global de vos équipes.',
        teamFilter: 'Équipes',
        scoreEvolution: {
          title: 'Évolution du score',
          subtitle: "Suivez l'évolution du score de vos équipes.",
        },
        leaderboard: {
          title: 'Leaderboard',
          top: 'Top',
          flop: 'Flop',
        },
      },
      perThemePerformance: {
        title: 'Performance par thèmatiques',
        subtitle: 'Retrouvez les performances global de vos équipes.',
        filters: {
          teams: 'Équipes',
          tags: 'Tags',
          programs: 'Programmes',
        },
        scoreEvolutionChart: {
          title: 'Évolution du score',
        },
        performanceChart: {
          title: {
            tags: 'Performance par tag',
            programs: 'Performance par programme',
          },
        },
        control: {
          title: 'Maitrise',
          top: 'Top',
          flop: 'Flop',
        },
        nav: {
          tags: 'Tags',
          programs: 'Programmes',
        },
      },
    },
    perTeams: {
      title: 'Par équipe',
    },
  },
  questions: {
    form: {
      title: {
        create: 'Créer une question',
        edit: 'Éditer une question',
        submitted: 'Question suggérée',
      },
      subtitle: {
        question: 'Indiquer la question, les réponses possibles et les informations complémentaires.',
        submitted:
          " a suggéré une question. Vous pouvez choisir de la rejeter, la valider en l'état ou d'apporter des modifications et informations complémentaires.",
      },
      name: 'Question',
      namePlaceholder: 'Intitulé de la question',
      goodAnswer: 'Bonne(s) réponse(s)',
      answerPlaceholder: 'Réponse',
      badAnswer: 'Mauvaise(s) réponse(s) (1 minimum)',
      programs: 'Programmes',
      programsPlaceholder: 'Rechercher dans vos programmes',
      tags: 'Tags',
      tagsPlaceholder: 'Rechercher dans vos tags',
      explanation: 'Explication (facultatif)',
      explanationPlaceholder: 'Écrire une brève explication de la question.',
      link: 'Référence (facultatif)',
      linkPlaceholder: 'Lien vers une ressource utile',
    },
  },
  tags: {
    form: {
      title: {
        create: 'Créer un tag',
        edit: 'Éditer un tag',
      },
      subtitle:
        "Indiquer le nom de votre nouveau tag ainsi que les programmes et questions auxquels vous souhaitez l'associer.",
      tagName: 'Nom du tage',
      tagNamePlaceholder: 'Exemple: RGPD',
      programs: 'Programmes',
      programsPlaceholder: 'Rechercher dans vos programmes',
      questions: 'Questions',
      questionsPlaceholder: 'Rechercher dans vos questions',
      description: 'Description',
    },
  },
  leadTeam: {
    title: 'Équipes',
    subtitle: "Retrouvez une vue d'ensemble sur vos collaborateurs.",
    createTeam: 'Créer',
    members: {
      title: 'Vos membres',
      shortTitle: 'Membres',
      subtitle: "Retrouvez l'ensemble des membres de votre entreprise.",
      invite: 'Inviter',
      filters: {
        activity: 'Activité',
        teams: 'Équipe',
        score: 'Score',
      },
      statistics: {
        total: 'Total',
        active: 'Membres réguliers',
        inactive: 'Membres irréguliers',
      },
      table: {
        name: 'Nom',
        team: 'Équipe',
        averageScore: 'Score moyen',
        questionsPerMonth: 'Questions sur 30j',
        active: 'Actif',
        inactive: 'Inactif',
      },
      forms: {
        edition: {
          title: 'Modifier un membre',
          subtitle: 'Modifiez le role de vos collaborateurs et assignez leur une équipe.',
          teams: 'Équipes',
          teamsPlaceholder: 'Rechercher dans vos équipes',
          type: "Type d'utilisateur",
          standardType: 'Standard',
          adminType: 'Administrateur',
          typeSubtitle:
            'Les utilisateurs de type "Administrateur" peuvent créer des programmes, des challenges et ont accés à plus de statistiques détaillées sur les résultats de leurs équipes.',
        },
      },
    },
    teams: {
      title: 'Vos équipes',
      shortTitle: 'Équipes',
      subtitle: "Retrouvez l'ensemble des équipes de votre entreprise.",
      table: {
        name: 'Nom',
        initials: 'Initiales',
        usersCount: 'Nombre de membres',
        users: ['Aucun', '{{}} user', '{{}} users'],
        averageScore: 'Score moyen',
        creationDate: 'Date de création',
      },
      form: {
        title: 'Créer une équipe',
        subtitle: 'Donner un nom à votre équipe et inviter vos collaborateurs',
        shortName: 'Nom (version abrégé)',
        shortNamePlaceholder: "Nom de l'équipe",
        shortNameExemple: 'Exemple : SDR',
        longName: 'Nom (version longue)',
        longNamePlaceholder: "Nom complet de l'équipe",
        longNameExemple: 'Exemple : Sales Development Representative',
        invitationEmails: 'Invitation par mail',
        invitationEmailsPlaceholder: 'Séparer les emails par une virgule',
        invitationEmailsSubtitle: "Vos collaborateurs recevront un email pour s'inscrire à Alto",
        Programs: 'Programmes',
        programsPlaceholder: 'Rechercher dans vos programmes',
        ProgramsSubtitle: 'Sélectionner les programmes que vous auxquels cette équipe doit être assignée.',
      },
    },
  },
  challenges: {
    title: 'Challenges',
    subtitle: "Retrouvez l'ensemble des challenges de vos équipes.",
    team: {
      title: 'Challenges par équipe',
      shortTitle: 'Par équipes',
      subtitle: "Retrouvez l'ensemble des challenges assignés à vos équipes.",
      createChallenge: 'Créer',
      table: {
        name: 'Nom',
        teams: 'Équipes',
        leader: 'Leader',
        endDate: 'Fin',
      },
      statusFilter: 'Status',
    },
    individual: {
      title: 'Challenges individuels',
      shortTitle: 'Individuels',
      subtitle: "Retrouvez l'ensemble des challenges assignés à vos vos membres.",
      createChallenge: 'Créer',
      table: {
        name: 'Nom',
        teams: 'Équipes',
        leader: 'Leader',
        endDate: 'Fin',
      },
    },
    form: {
      create: "Création d'un challenge",
      edit: 'Édition de challenge',
      name: 'Nom du challenge',
      namePlaceholder: 'Exemple : SalesForce',
      type: {
        label: 'Type',
        byTeam: 'La meilleure équipe',
        byTeamSubtitle: "La récompense sera remise à l'équipe ayant le plus haut score.",
        byUser: 'Le meilleur membre',
        byUserSubtitle: "La récompense sera remise à l'utilisateur avec le plus haut score.",
      },
      teamsSubtitle: 'Sélectionnez au minimum 2 équipes concernées par ce challenge.',
      minimum: 'Seuils minimum',
      minimumSubtitle: 'Définissez les seuils à atteindre pour pouvoir participer à ce challenge.',
      activity: 'Activité',
      activitySubtitle:
        'Les participants doivent répondre en moyenne à plus que X questions par jour ouvrés pour pouvoir participer à ce challenge',
      questions: ['{{}} question', '{{}} questions'],
      score: 'Score',
      scoreSubtitle:
        'Les participants doivent obtenir un score minimum pour pouvoir participer à ce challenge.',
      duration: 'Durée',
      durationSubtitle: 'Choisissez une date de début et de fin pour ce challenge.',
      reward: 'Récompense',
      rewardSubtitle: "Choisissez une récompense pour la personne ou l'équipe remportant ce challenge.",
    },
  },
  menu: {
    home: 'Accueil',
    programs: 'Programmes',
    statistics: 'Statistiques',
    team: 'Équipe',
    challenges: 'Challenges',
    settings: 'Paramètres',
    profile: 'Profil',
    training: 'Training',
    adminMode: 'Mode Administrateur',
  },
  settings: {
    title: 'Paramètres',
    users: {
      title: 'Utilisateurs',
      subtitle: 'Gérez les permissions des utilisateurs de vos équipes.',
      admins: 'Administrateurs',
      adminsDesc:
        'Les administrateurs peuvent créer des programmes, des challenges et ont accès à des statistiques détaillées sur les résultats des équipes.',
      users: 'Utilisateurs',
      usersDesc:
        'Les utilisateurs peuvent participer aux programmes, suggérer des questions et ont accès à des statistiques détaillées sur leurs résultats seulement.',
      table: {
        name: 'Nom',
        createdAt: "Date d'ajout",
        lastConnection: 'Dernière activité',
        connexion: 'Connection',
      },
    },
    integrations: {
      title: 'Intégrations',
      subtitle: 'Gérez les connexions avec vos applications',
      learnMore: 'En savoir plus',
    },
  },
  profile: {
    title: 'Compte',
    profile: {
      title: 'Informations personnelles',
      shortTitle: 'Profil',
      subtitle: 'Modifiez votre photo de profil et vos informations.',
      name: 'Nom',
      firstName: 'Prénom',
      email: 'Adresse email',
      profilePicture: 'Photo de profil',
      downloadPicture: 'Cliquez pour télécharger ou faites glisser et déposez',
      company: 'Company',
      team: 'Equipe',
      roles: 'Rôles',
    },
    password: {
      title: 'Mot de passe',
      subtitle: 'Modifier votre mot de passe.',
      newPassword: 'Nouveau mot de passe',
      newPasswordRules: `<p>Votre mot de passe doit contenir:</p>
      <ul>
        <li>Au moins 8 caractères</li>
        <li>
          Au moins 3 des éléments suivants:
          <ul>
            <li>Lettres minuscules (a-z)</li>
            <li>Lettres majuscules (A-Z)</li>
            <li>Nombre (0-9)</li>
            <li>caractères spéciaux (par exemple !@#$%^&*)</li>
          </ul>
        </li>
      </ul>`,
      confirmNewPassword: 'Confirmer le nouveau mot de passe',
      update: 'Mettre à jour',
    },
  },
  errors: {
    BadParameters: {
      title: 'Bad parameters sent',
    },
    ApiOff: {
      title: 'Server unreachable',
      message: 'The server is unreachable. Please, check your internet connection or retry in a moment.',
    },
    Unauthorized: {
      title: 'Unauthorized',
      message: 'You are not logged in!',
    },
    Notfound: {
      title: 'Item not found',
      message: "We can't find what you are looking for.",
    },
    UserNotFound: {
      title: 'User not found',
      message: 'User is not allowed to connect here. Please, contact an administrator.',
    },
    ServerError: {
      title: 'Server Error',
      message: 'The server encountered an error. Please contact the technical service.',
    },
    OverLoad: {
      title: 'Too many requests',
      message: 'The server encountered an error. Please contact the technical service.',
    },
    ClientError: {
      title: 'Client Error',
      message: '',
    },
    BadGateway: {
      title: 'Gateway Error',
      message: '',
    },
    ServiceUnavailable: {
      title: 'Maintenance',
      message: '',
    },
    Timeout: {
      title: 'Timeout',
      message: 'The server took too long to respond. Please, retry in a moment.',
    },
    form: {
      title: 'Form Error',
    },
    msg: {
      tooBig: {
        title: 'Size limit exceeded!',
        message: "This file is too big (> 20 Mo) and won't be uploaded: ",
      },
      tooManyFiles: {
        title: 'File limit exceeded!',
        message: 'You have reached the max. number of files for this ressource: ',
      },
    },
  },
  test: 'test',
};
