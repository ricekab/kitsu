export default {

  asset_types: {
    all_asset_types: 'Tous les types d\'assets',
    delete_error: 'Une erreur est survenue en supprimant un type d\'asset. Êtes vous sûr qu\'aucun asset est lié à ce type d\'asset?',
    delete_text: 'Êtes vous sur de vouloir enlever {name} de la base de données ?',
    edit_title: 'Modifier le type d\'asset',
    new_asset_type: 'Ajouter un type d\'asset',
    number: 'type d\'asset | types d\'assets',
    production_title: 'Stats types d\'assets',
    title: 'Types d\'assets',
    fields: {
      name: 'Nom'
    }
  },

  assets: {
    cast_in: 'Présent dans',
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue en créant l\'asset, êtes vous sûr de vouloir que l\'asset n\'ait plus aucun lien ?',
    edit_fail: 'La création ou l\'édition a échoué, une erreur est survenue.',
    edit_title: 'Modifier asset',
    edit_success: 'Asset {name} édité avec succès.',
    empty_list: 'Il n\'y a pas d\'asset dans la production. Voulez vous en créer ?',
    empty_list_client: 'Il n\'y a pas d\'asset dans la production.',
    new_asset: 'Ajouter un asset',
    new_assets: 'Ajouter des assets',
    new_success: 'Asset {name} créé avec succès.',
    no_cast_in: 'Cet asset n\'apparait dans aucun shot.',
    number: 'asset | assets',
    restore_text: 'Êtes vous sûr de vouloir restaurer {name} dans votre base de données ?',
    restore_error: 'Une erreur est survenue en restaurant l\'asset.',
    tasks: 'Tâches de fabrication',
    title: 'Assets',
    fields: {
      description: 'Description',
      episode: 'Ép.',
      name: 'Nom',
      production: 'Prod',
      time_spent: 'Jours',
      type: 'Type',
      hidden_from_client: 'Visible par le client'
    }
  },

  breakdown: {
    all_assets: 'Tous les assets disponibles',
    empty: 'Casting vide',
    title: 'Casting',
    edit_label: 'Changer le label de l\'asset',
    label: 'Label',
    options: {
      fixed: 'fixe',
      animate: 'animé'
    }
  },

  comments: {
    add_checklist: 'Ajout checklist',
    add_comment: 'Ajouter un commentaire...',
    add_attachment: 'Ajouter une pièce jointe',
    add_preview: 'Attacher un fichier',
    change_preview: 'Changer previz',
    comment_from_client: 'Commentaire du client',
    edit_title: 'Modifier le commentaire',
    error: 'Une erreur est survenue en postant le commentaire',
    empty_text: 'Ce commentaire est vide',
    no_file_attached: 'Aucun fichier attaché',
    pin: 'Épingler',
    pinned: 'Épinglé',
    post_status: 'Publier',
    retake: 'Reprise',
    revision: 'révision',
    set_status_to: 'Positionner le statut à',
    task_placeholder: 'Nouvel élément...',
    unpin: 'Désépingler',
    text: 'Texte',
    validated: 'Validé !',
    validation_required: 'Validation requise',
    fields: {
      text: 'Texte'
    }
  },

  custom_actions: {
    delete_text: 'Êtes-vous sûr de supprimer l\'action personnalisée {name} de la base de données?',
    delete_error: 'Une erreur est survenue en supprimant l\'action personnalisée.',
    edit_title: 'Modifier une action personnalisée',
    new_custom_action: 'Ajouter une action personnalisée',
    number: 'action pesonnalisée | actions personnalisées',
    run_for_selection: 'Lancer une action personnalisée pour les tâche sélectionnées :',
    title: 'Actions',
    fields: {
      name: 'Nom',
      url: 'URL',
      entity_type: 'Type d\'entité',
      is_ajax: 'Utiliser AJAX'
    },
    entity_types: {
      all: 'Tous',
      shot: 'Plan',
      asset: 'Asset'
    }
  },

  entities: {
    build_filter: {
      assignation: 'Assignation',
      assignation_exists_for: 'Des assignations existent pour',
      assigned_to: 'Assigné à',
      descriptor: 'Metadata',
      equal: 'Égal',
      no_assignation_for: 'Pas d\'assignation pour',
      no_filter: 'Pas de filtre',
      not_equal: 'Pas égal',
      not_assigned_to: 'Pas assigné à',
      status: 'Statut de tâche',
      thumbnail: 'A une vignette',
      title: 'Filtré sur...',
      with_thumbnail: 'Avec vignette',
      without_thumbnail: 'Sans vignette'
    },
    thumbnails: {
      error: 'Une erreur s\'est produite en téléversant les vignettes',
      explaination: 'L\'ajout d\'une vignette nécessite de publier un nouvel aperçu. Afin de définir plusieurs vignettes en même temps, vous devez d\'abord choisir un type de tâche qui sera utilisé pour publier les nouveaux aperçus. Les vignettes seront définies à partir de ce nouvel aperçu.',
      explaination_two: 'Ensuite, vous devez sélectionner les fichiers que vous voulez télécharger. Pour trouver les bonnes entités, les noms de fichiers doivent correspondre au modèle suivant :',
      shots_pattern: '"SequenceName ShotName" ex. SQ01_SH01.',
      assets_pattern: '"AssetType AssetName" ex. Environnement_Forêt.',
      select_files: 'Sélectionner les fichiers',
      selected_files: 'Fichiers sélectionnés',
      select_task_type: 'Sélectionner un type de tâche',
      undefined: 'Non défini',
      undefined_pattern: 'Non défini',
      title: 'Ajouter des vignettes',
      upload: 'Téléverser des vignettes'
    }
  },

  episodes: {
    all_episodes: 'Tous les épisodes',
    edit_title: 'Éditer épisode',
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ? Tous les plans et préviz liés seront supprimés. Pour confirmer, tapez le nom de l\'épisode en dessous',
    delete_error: 'Une erreur est survenue en créant le plan, êtes vous sûr que la séquence n\'a plus aucun lien ?',
    empty_list: 'Il n\'y a pas d\'épisodes dans la production. Voulez vous en créer ?',
    empty_list_client: 'Il n\'y a pas d\'épisode pour cette production.',
    new_episode: 'Nouvel épisode',
    number: 'épisode | épisodes',
    title: 'Stats épisodes',
    fields: {
      name: 'Nom',
      description: 'Description'
    }
  },

  keyboard: {
    altdown: 'Déplace la sélection d\'une tâche vers le bas',
    altj: 'Selectionne le preview précédent',
    altk: 'Selectionne le preview suivant',
    altleft: 'Déplace la sélection d\'une tâche vers la gauche',
    altright: 'Déplace la sélection d\'une tâche vers la droite',
    altup: 'Déplace la sélection d\'une tâche vers le haut',
    annotations: 'Annotations',
    draw: 'Démarre le mode dessin',
    playlist_navigation: 'Navigation dans une playlist',
    navigation: 'Navigation',
    redo: 'Redo',
    undo: 'Undo',
    remove_annotation: 'Supprimme l\'annotation sélectionnée',
    shortcuts: 'Raccourcis claviers'
  },

  login: {
    back_to_login: 'Revenir à la page de connexion',
    forgot_password: 'Mot de passe oublié?',
    login: 'Se connecter',
    login_failed: 'La connexion a échoué, vérifiez vos identifiants',
    login_page: 'Annuler',
    redirecting: 'Redirection dans {secondsLeft} secondes...',
    reset_change_password: 'Changer le mot de passe',
    reset_change_password_form_failed: 'Il y a un problème avec le mot de passe donné. S\'il vous plait, verifiez qu\'il y a au moins 7 caractèrs et que les deux mots de passe correspondent.',
    reset_change_password_failed: 'Le changement de mot de passe a échoué. Recommencez toute la procédure.',
    reset_change_password_succeed: 'Le mot de passe a changé. Revenez à la page de connexion pour vous identifier avec.',
    reset_change_password_title: 'Entrez un nouveau mot de passe',
    reset_password: 'Réinitialiser le mot de passe',
    reset_password_failed: 'La réinitialisation du mot de passe a échoué. S\'il vous plait vérifiez votre email.',
    reset_password_succeed: 'La réinitialisation du mot de passe a réussi. Consultez votre boite mail pour la suite de la procédure.',
    reset_password_title: 'Entrez votre mail pour réinitialiser le mot de passe',
    title: 'Se connecter à Kitsu',
    fields: {
      email: 'Adresse Mail',
      password: 'Mot de passe',
      password2: 'Mot de passe à nouveau'
    }
  },

  main: {
    about: 'À propos',
    add: 'Ajouter',
    all: 'Tous',
    all_assets: 'Tous les assets',
    admin: 'Admin',
    back_to_list: 'retour à la liste',
    cancel: 'Annuler',
    confirmation: 'Confirmer',
    confirmation_and_stay: 'Confirmer et rester',
    clear_selection: 'Effacer la sélection',
    close: 'Fermer',
    date: 'Date',
    days_spent: 'jour passé | jours passés',
    days_spents: 'jours passés',
    days_estimated: 'jour estimaté | jours estimés',
    edit: 'Modifier',
    dark_theme: 'Thème sombre',
    delete: 'Supprimer',
    delete_all: 'Supprimer tout',
    documentation: 'Documentation',
    delete_text: 'Etes vous sûr de vouloir supprimer {name} de la base de données ?',
    empty_comment: 'Commentaire vide',
    end_date: 'Date de fin',
    files_selected: 'Fichiers sélectionnés',
    for: 'Pour',
    go_productions: 'Aller aux productions',
    history: 'Historique',
    info: 'Information',
    loading: 'Chargement...',
    loading_data: 'Chargement des données',
    loading_error: 'Une erreur est survenue en chargeant les données.',
    logout: 'Se déconnecter',
    maximize: 'Maximiser',
    minimize: 'Minimiser',
    modify: 'Modifier',
    nb_frames: 'frames',
    no: 'non',
    or: 'ou',
    production: 'Production',
    profile: 'Profil',
    remove: 'Enlever',
    studio: 'Studio',
    user: 'Utilisateur',
    save: 'Enregistrer',
    sort_by: 'Trier par',
    sorted_by: 'Trié(e)s par',
    start_date: 'Date de début',
    tutorials: 'Tutorials',
    white_theme: 'Thème blanc',
    yes: 'oui',
    csv: {
      choose: 'Choisir',
      unknown: 'Colonne inconnue',
      error_upload: 'Une erreur est survenue en téleversant votre fichier .csv.',
      export_file: 'Exporter',
      import_file: 'Importer',
      import_title: 'Importer depuis un .csv',
      legend: 'Légende',
      legend_ok: 'Données reconnue',
      legend_ignored: 'Données ignorée',
      legend_missing: 'Données manquante',
      legend_disabled: 'Données qui ne seront pas mises à jour',
      legend_overwrite: 'Données qui seront mises à jour',
      paste: 'Coller',
      paste_code: 'Coller vos données CSV :',
      preview: 'Aperçu',
      preview_episode_name: 'Nom de l\'épisode',
      preview_title: 'Aperçu de vos données à importer',
      preview_description: 'Importer un fichier .csv pour peupler votre board avec des posts. Vous pouvez aussi ajouter de nouvelles colonnes.',
      preview_required: 'Note: La première ligne doit spécifier les entêtes.',
      preview_reupload: 'Réimporter un fichier .CSV',
      required_fields: 'Le fichier CSV à importer doit comporter les colonnes suivantes :',
      select_file: 'Sélectionner un fichier depuis votre dossier :',
      tab_select_file: 'Importer un fichier CSV',
      tab_paste_code: 'Coller des données CSV',
      upload_file: 'Parcourir',
      options: {
        title: 'Options',
        update: 'Mettre à jour les données'
      }
    }
  },

  menu: {
    assign_tasks: 'Assigner des tâches',
    create_tasks: 'Créer des tâches',
    change_status: 'Changer le statut',
    change_priority: 'Change priority',
    delete_tasks: 'Supprimer des tâches',
    generate_playlists: 'Générer des playlists',
    run_custom_action: 'Lancer des actions',
    set_estimations: 'Définir estimations'
  },

  not_found: {
    text: 'Le lien que vous avez chargé ne correspond à rien. Retournez sur la page d\'accueil pour reprendre la navigation',
    title: 'Page non trouvé... Est-ce que vous cherchez quelque chose que vous avez supprimé ?'
  },

  notifications: {
    and_change_status: 'et changé le statut à',
    assigned_you: 'vous a assigné à',
    commented_on: 'a commenté',
    mention_you_on: 'vous a mentionné sur',
    no_notifications: 'Il n\'y a pas encore de notifications pour vous pour les projets en cours',
    title: 'Notifications',
    with_preview: 'avec une version'
  },

  news: {
    all: 'Tous',
    commented_on: 'a commenté sur',
    infos: 'Infos',
    no_news: 'Il n\'y a pas de nouveautés pour cette production ou ce filtre',
    only_comments: 'Seulement les commentaires',
    only_previews: 'Seulement les previews',
    set_preview_on: 'a mis un preview sur',
    task_status: 'Statut de tâche',
    task_type: 'Type de tâche',
    title: 'Flux de nouveautés '
  },

  playlists: {
    add_assets: 'Ajouter des assets',
    add_selection: 'Ajouter la sélection',
    add_shots: 'Ajouter des plans',
    add_episode: 'Ajouter l\'épisode',
    add_movie: 'Ajouter tout le film',
    add_sequence: 'Ajouter séquence',
    apply_task_type_change: 'Cela positionnera la dernière révision du type de tâche donné pour tous les plans.',
    available_build: 'Builds disponibles',
    build_daily: 'Valid. quotidienne',
    build_weekly: 'Valid. hebodomadaire',
    build_mp4: 'Construire .mp4 (beta)',
    building: 'En cours...',
    client_playlist: 'Playlist Client',
    created_at: 'Créé le :',
    create_for_selection: 'Créer une playlist pour la sélection courante',
    delete_text: 'Êtes vous sûr de vouloir supprimer {name} de la base de données ?',
    create_title: 'Créer playlist',
    delete_error: 'Une erreur est survenue en supprimant la playlist.',
    download_zip: 'Télécharger en .zip',
    failed: 'Echec',
    for_client: 'Pour le client',
    for_studio: 'Pour le studio',
    edit_title: 'Modifier la playlist',
    last_creation: 'Dernière créations',
    last_modification: 'Dernière modifications',
    no_preview: 'Aucune préviz',
    remove: 'enlever',
    loading_error: 'Une erreur serveur est apparue, les playlists ne peuvent pas être chargées.',
    new_playlist: 'Ajouter une playlist',
    no_build: 'Pas de build',
    no_playlist: 'Il n\'y a pas de playlist pour ce projet.',
    no_selection: 'Séléctionnez une playlist sur la gauche.',
    no_sequence_for_episode: 'Il n\'y a pas de séquence pour cette épisode',
    no_shot_for_production: 'Il n\'y pas de plan pour cette production',
    select_shot: 'Sélectionnez un plan dans la colonne de droite',
    select_playlist: 'Sélectionnez une playlist dans la colonne de gauche',
    select_task_type: 'Changer le type de tâche pour tous les plans',
    title: 'Playlists',
    updated_at: 'Mis à jour le:',
    fields: {
      name: 'Nom',
      created_at: 'Date de création',
      updated_at: 'Date de m.à.j',
      for_client: 'A partager avec',
      for_entity: 'Sélectionne le type d\'entité à afficher'
    },
    actions: {
      comments: 'Montrer/Cacher les commentaires',
      annotation: 'Annotation',
      annotation_text: 'Double clic sur la preview pour ajouter du texte',
      annotation_delete: 'Supprimer l\'annotation',
      annotation_redo: 'Refaire annotation',
      annotation_undo: 'Annuler annotation',
      annotation_big: 'Gros',
      annotation_medium: 'Moyen',
      annotation_small: 'Petit',
      change_task_type: 'Changer le task type',
      delete: 'Supprimer la playlist',
      download: 'Télécharger…',
      edit: 'Modifier la playlist',
      entity_list: 'Montrer/Cacher la liste d\'entités',
      fullscreen: 'Plein écran',
      split_screen: 'Partager l\'écran',
      next_shot: 'Prochain shot',
      previous_shot: 'Shot précédent',
      next_frame: 'Prochaine frame',
      previous_frame: 'Frame précédente',
      play: 'Lecture',
      pause: 'Pause'
    }
  },

  people: {
    active: 'Présents',
    active_persons: 'présent | présents',
    add_member_to_team: 'Ajouter un membre à l\'équipe: ',
    create_invite: 'Créer et envoyer une invitation',
    delete_text: 'Êtes vous sûr de vouloir retirer {personName} de la base de données? Tous les commentaires et préviz liés seront supprimés. Pour confirmer, tapez le nom complet de la personne en dessous',
    delete_error: 'Une erreur est survenue lors de la suppression. Il y a probablement des données liées à elle. Etes vous sur que cette personne n\'a aucune tâche assignée et n\'a fait aucun commentaire ?',
    edit_title: 'Modifier les informations de',
    empty_team: 'Personne n\'a été affecté à cette production.',
    episodes: 'Épisodes',
    history: 'Historique des valeurs de plans',
    invite: 'Envoyer une invitation',
    invite_error: 'Une erreur est survenue en envoyant l\'invitation.',
    invite_success: 'L\'invitation a été envoyé avec succès.',
    no_task_assigned: 'Il n\'y a aucune tâche assignée.',
    new_person: 'Ajouter un employé',
    padding: 'Ecart',
    persons: 'Personnes',
    picture: 'Changer l\'image',
    running_tasks: 'Tâches en cours',
    select_person: 'Sélectionner une personne...',
    team: 'Équipe',
    title: 'Employés',
    unactive: 'Absents',
    csv: {
      error_upload: 'Une erreur est survenue en important votre fichier CSV.',
      export_file: 'Télécharger',
      import_file: 'Importer',
      import_title: 'Import employees from a CSV file',
      required_fields: 'Le fichier CSV à importer doit comporter les colonnes suivantes :',
      select_file: 'Sélectionnez un fichier de votre disque dur :'
    },
    list: {
      active: 'Actif',
      email: 'Adresse Mail',
      name: 'Nom',
      phone: 'Téléphone',
      role: 'Rôle'
    },
    fields: {
      active: 'Actif',
      email: 'Adresse email',
      first_name: 'Prénom',
      last_name: 'Nom',
      old_password: 'Mot de passe actuel',
      password: 'Nouveau mot de passe',
      password_2: 'Répétez le nouveau mot de passe',
      phone: 'Téléphone',
      role: 'Rôle'
    },
    role: {
      admin: 'Studio Manager',
      client: 'Client',
      manager: 'Superviseur',
      undefined: '',
      user: 'Graphiste',
      vendor: 'Fournisseur'
    }
  },

  productions: {
    current: 'Production sélectionnée ',
    delete_text: 'Êtes vous sûr de vouloir retirer {name} de la base de données ? Veuiller indiquer le nom du projet dans le champ.',
    delete_error: 'Une erreur est survenue lors de la suppression. Il y a probablement des données liées à cette production. Etes vous sur que cette production n\'a aucune tâche, shot ou asset lié ? Kitsu n\'autorise pas la suppression de production. Si vous ne souhaitez plus la voir apparaitre, vous pouvez fermer la production.',
    edit_title: 'Modifier la production',
    new_production: 'Ajouter une production',
    number: 'production | productions',
    open_productions: 'Mes productions',
    picture: 'Changer l\'image',
    title: 'Productions',
    home: {
      create_new: 'Créer une nouvelle production',
      empty: 'Vous n\'avez pas de production ouverte, voulez vous en créer une nouvelle ?',
      no_task: 'Vous n\'avez pas de tâches assignées. Demandez à votre superviseur ce que vous pouvez faire !',
      no_prod_for_client: 'Vous n\'avez accès à aucune production. Contactez votre prestataire pour obtenir un accès',
      title: 'Productions en cours',
      welcome: 'Bienvenue sur Kitsu'
    },
    fields: {
      fps: 'FPS',
      name: 'Name',
      ratio: 'Ratio',
      resolution: 'Resolution',
      status: 'Status',
      type: 'Type'
    },
    metadata: {
      add_explaination: 'Ajouter des données spécifiques au projet.',
      add_failed: 'Une erreur s\'est produite en ajoutant des métadonnées au projet.',
      add_new_values: 'Il n\'y a pour le moment aucune valeur enregistrée.',
      available_values: 'Valeurs disponibles',
      choices: 'Liste de valeurs',
      delete_text: 'Êtes vous sûr de vouloir supprimmer cette colonne et toutes les données liées?',
      delete_error: 'Une erreur est survenue en supprimant la colone de métadonnées.',
      error: 'Une erreur est survenue en ajoutant la colone de métadonnées. Assurez vous qu\'aucune colonne ne porte le même nom et que les champs sont bien renseignés. Si le problème persiste, contactez le support.',
      free: 'Valeur libre',
      title: 'Ajouter une colonne de métadonnées'
    },
    status: {
      active: 'Ouvert',
      archived: 'Fermé',
      open: 'Ouvert',
      closed: 'Fermé'
    },
    type: {
      short: 'Format court',
      featurefilm: 'Long Métrage',
      tvshow: 'Série télé'
    }
  },

  profile: {
    change_avatar: 'Changer Avatar',
    info_title: 'Informations',
    language: 'Langue',
    notifications_enabled: 'Notifications mail activées',
    notifications_slack_enabled: 'Notifications Slack activées',
    notifications_slack_user: 'Nom d\'utilisateur Slack',
    password_title: 'Changement de mot de passe',
    timezone: 'Fuseau horaire',
    title: 'Votre Profil',
    avatar: {
      title: 'Changer votre avatar',
      error_upload: 'Une erreur est survenue en envoyant l\'image.'
    },
    change_password: {
      button: 'Changez de mot de passe',
      success: 'Votre mot de passe a été changé avec succès !',
      unvalid: 'Les nouveaux mots de passe sont différents ou votre mot de passe est trop court (7 caractères minimum).',
      error: 'Une erreur s\'est produite lors du changement de mot de passe. Veuillez vérifier votre mot de pass actuel.'
    },
    save: {
      button: 'Sauvegardez vos changements',
      error: 'Une erreur est survenue pendant la sauvegarde de vos changememts.'
    }
  },

  schedule: {
    md: 'jh',
    overall_man_days: 'Jours Homme',
    title: 'Planning',
    title_main: 'Planning principal',
    zoom_level: 'Niveau de zoom',
    milestone: {
      add_milestone: 'Ajouter milestone',
      delete_milestone: 'Supprimer milestone',
      edit_milestone: 'Modifier milestone',
      error: 'Error',
      name: 'Name'
    }
  },

  quota: {
    average: 'Moyenne',
    count_label: 'Mode de comptage',
    detail_label: 'Niveau de détail',
    details_name: 'Nom',
    details_seconds: 'Secondes',
    details_frames: 'Frames',
    month_label: 'Mois',
    no_quota: 'Il n\'y a pas de quota pour ce type de tâche.',
    name: 'Nom',
    quota_day: 'Quota par jour',
    quota_week: 'Quota par semaine',
    quota_month: 'Quota par mois',
    year_label: 'Année',
    title: 'Quotas',
    type_label: 'Type'
  },

  sequences: {
    all_sequences: 'Toutes les séquences',
    title: 'Stats séquences',
    number: 'séquence | séquences',
    new_sequence: 'Nouvelle séquence',
    edit_title: 'Éditer séquence',
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ? Tous les plans et préviz liés seront supprimés. Pour confirmer, tapez le nom de la séquence en dessous',
    delete_error: 'Une erreur est survenue en créant le plan, êtes vous sûr que la séquence n\'a plus aucun lien ?',
    empty_list: 'Il n\'y a pas de séquence dans la production. Voulez vous en créer ?',
    empty_list_client: 'Il n\'y pas de séquences dans cette production.',
    fields: {
      name: 'Nom',
      description: 'Description'
    }
  },

  settings: {
    change_logo: 'Changer logo',
    integrations: 'Intégrations',
    logo: 'Logo du studio',
    no_logo: 'Aucun logo n\' a été positionné.',
    set_logo: 'Changer le logo',
    title: 'Paramètres',
    fields: {
      name: 'Nom du studio',
      slack_token: 'Token Slack (optionnel)',
      hours_by_day: 'Heures par jour',
      use_original_name: 'Utiliser les noms de fichiers originaux pour le téléchargement'
    },
    save: {
      button: 'Sauvegarder les paramètres',
      error: 'Une erreur serveur est survenue en sauvegardant les paramètres'
    }
  },

  server_down: {
    text: 'Contactez votre fournisseur, votre administrateur système ou votre département informatique pour comprendre ce qui ne va pas.',
    title: 'Kitsu a rencontré une erreur en communiquant avec son API de données.'
  },

  shots: {
    casting: 'Casting',
    creation_explaination: 'Pour ajouter des shot, you devez d\'abord créer un épisode. Taper le nom de l\'épisode dans la colonne de gauche en bas. Séléctionnez cette épisode et répétez l\'opération pour créer une séquence. Enfin créez un shot en sélectionnant la séquence créée, en tapant son nom en bas de la colonne de droite. Cliquez sur le bouton add pour ajouter le shot. Vous pouvez maintenant créer de nombreux shots. Si cette production n\'est pas une série, vous pouvez directement créer une séquence).',
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue en créant le plan, êtes vous sûr que le plan n\'a plus aucun lien ?',
    description: 'Description',
    edit_fail: 'La création ou l\'édition a échoué, une erreur est survenue. Assurez-vous qu\'il n\'y pas déjà un shot portant le nom que vous donnez pour la séqence choisie.',
    episodes: 'Épisodes',
    edit_title: 'Modifier plan',
    edit_success: 'Plan {name} édité avec succès.',
    empty_list: 'Il n\'y a pas de plans dans la production. Voulez vous en créer ?',
    empty_list_client: 'Il n\'y pas de plans dans cette production.',
    history: 'historique',
    no_casting: 'Le casting du plan est vide.',
    number: 'plan | plans',
    new_episodes: 'Ajouter des épisodes',
    new_sequences: 'Ajouter des séquences',
    new_shot: 'Ajouter un plan',
    new_shots: 'Ajouter des plans',
    new_success: 'Plan {name} créé avec succès.',
    manage: 'Créer des plans',
    restore_error: 'Une erreur est survenue en restorant le plan.',
    restore_text: 'Etes vous sûr de vouloir restorer {name} dans la base de données ?',
    sequence: 'Séquence',
    sequences: 'Séquences',
    tasks: 'Tâches de fabrication',
    padding: 'Distance',
    title: 'Plans',
    fields: {
      name: 'Plan',
      episode: 'Épisode',
      sequence: 'Séquence',
      frame_in: 'In',
      frame_out: 'Out',
      fps: 'FPS',
      nb_frames: 'Frames',
      description: 'Description',
      production: 'Prod',
      time_spent: 'Temps passé'
    }
  },

  statistics: {
    count: 'Comptages',
    count_mode: 'Mode de comptage',
    display_mode: ' Mode d\'affichage',
    frames: 'Frames',
    pie: 'Graphiques',
    shots: 'Plans'
  },

  task_status: {
    delete_text: 'Êtes vous sur de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue lors de la suppression du statut de tâche. Êtes vous sûr qu\'aucune tâche n\'est lié à ce statut de tâche ?',
    edit_title: 'Modifier statut',
    number: 'statut | statuts de tâche',
    new_task_status: 'Ajouter un statut de tâche',
    title: 'Statuts de tâche',
    fields: {
      color: 'Couleur',
      is_artist_allowed: 'Autorisé aux artistes',
      is_client_allowed: 'Autorisé aux clents',
      is_done: 'Est terminé',
      is_retake: 'A valeur de retake',
      is_reviewable: 'Est vérifiable',
      name: 'Nom',
      short_name: 'Nom court'
    }
  },

  task_types: {
    delete_text: 'Êtes vous sur de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue lors de la suppression du type de tâche. Êtes vous sûr qu\'aucune tâche n\'est lié à ce type de tâche ?',
    edit_title: 'Modifier le type de tâches',
    number: 'type de tâche | types de tâches',
    new_task_type: 'Ajouter un type de tâche',
    title: 'Types de tâches',
    fields: {
      allow_timelog: 'Temps passé',
      name: 'Nom',
      color: 'Couleur',
      priority: 'Priorité',
      dedicated_to: 'Pour'
    }
  },

  tasks: {
    add_preview: 'Attacher une préviz',
    add_preview_error: 'Une erreur est survenue en ajoutant la preview.',
    assign: 'Assigner une tâche à : | Assigner {nbSelectedTasks} tâches à :',
    back_to_list: 'Retour à la liste',
    bigger: 'Élargir le panneau de tâche',
    change_status_to: 'Changer le statut de la tâche à : ',
    change_priority: 'Changer le priorité de la tâche à : ',
    change_preview: 'Modifier preview',
    clear_assignations: 'effacer les assignations',
    comment_image: 'Comment image',
    create_tasks: 'Ajouter des tâches',
    create_tasks_shot: 'Ajouter des tâches pour les plans affichés',
    create_tasks_shot_explaination: 'Vous allez créer une nouvelle tâche pour chaque plan du projet. Est-ce que vous voulez continuer ?',
    create_tasks_shot_failed: 'Une erreur serveur est survenue pendant la création des tâches.',
    create_tasks_asset: 'Ajouter des tâches pour les assets affichés',
    create_tasks_asset_explaination: 'Vous allez créer une nouvelle tâche pour chaque asset du projet. Est-ce que vous voulez continuer ?',
    create_tasks_asset_failed: 'Une erreur serveur est survenue pendant la création des tâches.',
    create_for_selection: 'Créer une tâche pour chaque cellule vide :',
    current: 'Tâches à faire',
    current_status: 'Statut actuel :',
    delete_all_error: 'Supprimer toutes les tâches pour ce type de tâche a échoué',
    delete_all_text: 'Êtes vous sûr de vouloir supprimmer toutes les tâches pour {name}? S\'il vous plait, confirmez en tapant the nom du type de tâches des tâches que vous souhaitez supprimmer.',
    delete_comment: 'Êtes vous sûr de vouloir supprimer ce commentaire ?',
    delete_comment_error: 'Une erreur est survenue en supprimant le commentaire.',
    delete_error: 'Une erreur est survenue en supprimant la tâche.',
    delete_for_selection: 'Delete selected tasks:',
    delete_preview: 'Êtes vous sûr de vouloir supprimer cette préviz ?',
    delete_preview_error: 'Une erreur est survenue en supprimant la preview.',
    edit_comment: 'Éditer commentaire',
    done: 'Terminées',
    download_pdf_file: 'Télécharger le fichier .{extension}',
    feedback: 'retours',
    full_screen: 'Afficher en plein écran',
    hide_assignations: 'Cacher assignations',
    hide_infos: 'Cacher informations additionnelles',
    my_tasks: 'Mes tâches',
    no_preview: 'Il n\'y a pas de préviz pour cette tâche.',
    no_task_selected: 'Pas de tâche sélectionnée',
    no_comment: 'Il n\'y a pas de commentaires pour cette tâche.',
    no_assignation_right: 'vous n\'êtes pas autorisé à gérer les assigations.',
    number: 'tâche | tâches',
    next: 'Suivante',
    preview: 'Pré-visualisation',
    previous: 'Précédente',
    select_image_file: 'Choisissez une image sur votre disque dur:',
    select_preview_file: 'Choisissez une preview sur votre disque dur:',
    set_estimations: 'Donner une estimation pour les tâches sélectionnées :',
    set_preview: 'Utilisez cette previz comme vignette',
    set_preview_error: 'Une erreur est survenue en utilisant cette vignette.',
    set_preview_done: 'Cette previz sert de vignette à l\'entité courante.',
    subscribe_notifications: 'S\'abonner aux notifications',
    show_assignations: 'Voir assignations',
    show_infos: 'Montrer informations additionnelles',
    unsubscribe_notifications: 'Se désabonner des notifications',
    tasks: 'Tâches',
    with_comment: 'Avec un commentaire...',
    validation: 'Validation',
    fields: {
      asset_type: 'Type d\'asset',
      assignees: 'Assignés',
      duration: 'Duration',
      due_date: 'Pour le',
      end_date: 'Date de fin',
      estimation: 'Estimation',
      entity: 'Entité',
      entity_name: 'Nom',
      frames: 'Frames',
      last_comment_date: 'Dernier comm.',
      priority: 'Priorité',
      production: 'Prod',
      real_end_date: 'Date de valid.',
      real_start_date: 'Date de WIP',
      start_date: 'Date de début',
      retake_count: 'Retakes',
      sequence: 'Séquence',
      task_status: 'Statut',
      last_comment: 'Dernier commentaire',
      task_status_short_name: 'Statut',
      task_type: 'Type'
    },
    colors: {
      title: 'Coloration',
      neutral: 'Neutre',
      status: 'Couleur des status',
      late: 'En retard en rouge'
    },
    priority: {
      emergency: 'Urgence',
      normal: 'Normale',
      high: 'Haute',
      very_high: 'Très haute'
    }
  },

  timesheets: {
    detail_level: 'Niveau de détail',
    done_tasks: 'Tâches terminées',
    export_timesheet: 'Exporter la feuille de temps',
    month: 'Mois',
    hours: 'heures',
    title: 'Feuille de temps',
    time_spents: 'Temps passé (heures)',
    year: 'Année'
  },

  wrong_browser: {
    title: 'Votre navigateur n\'est pas pris en charges par Kitsu',
    text: 'Kitsu ne peut être utilisé qu\'avec les navigateurs Firefox et Chrome.'
  }
}
