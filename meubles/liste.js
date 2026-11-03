// Liste des meubles proposés dans la page, par type de meuble : chaque groupe est un onglet du catalogue.
// Un meuble rangé ailleurs que le reste de son fichier porte `categorie` dans sa fiche.
// Chaque nom correspond à un fichier de ce dossier (sans le .js).
// Seuls les meubles qu'on peut acheter ont leur place ici. Les anciens sont dans retires/.
Chambre.liste = [
  { groupe: 'Lits', fichiers: [
    'lits-enfant',
    'ikea-busunge',
    'ikea-lits-adultes',
    'mdm-lits',
    'ikea-catalogue',          // tout le rayon chambre d'IKEA, rangé dans les onglets par type
  ] },
  { groupe: 'Canapés-lits', fichiers: [] },
  { groupe: 'Armoires et penderies', fichiers: [
    'ikea-pax-auli',
    'ikea-kleppstad',
    'ikea-smastad',
  ] },
  { groupe: 'Commodes', fichiers: [
    'ikea-kullen',
    'ikea-hemnes',
    'ikea-alex',
  ] },
  { groupe: 'Tables de chevet', fichiers: [] },
  { groupe: 'Miroirs', fichiers: [
    'ikea-nissedal',
  ] },
  { groupe: 'Rangements sous le lit', fichiers: [] },
  { groupe: 'Étagères et rangements jouets', fichiers: [
    'ikea-trofast',
    'ikea-kallax',
    'ikea-billy',
    'ikea-flisat-mural',
    'mdm-tobias-coffre',
    'mdm-miffy-coffre',
    'ikea-paniers',
    'ikea-raskog',
  ] },
  { groupe: 'Bureaux, tables et chaises', fichiers: [
    'ikea-malm-bureau',
    'ikea-micke',
    'ikea-markus',
    'mdm-edgar',
    'ikea-flisat-table',
    'ikea-flisat-tabouret',
    'ikea-mammut-table',
    'ikea-mammut-chaise',
    'ikea-lack',
  ] },
  { groupe: 'Fauteuils et poufs', fichiers: [
    'ikea-poang',
    'ikea-poang-enfant',
  ] },
  { groupe: 'Jeux', fichiers: [
    'mdm-tipi',
    'ikea-duktig',
    'ikea-mala',
    'decathlon-escalade',
    'ikea-blahaj',
  ] },
  { groupe: 'Tapis', fichiers: [
    'ikea-tapis-enfant',
    'ikea-tapis',
  ] },
  { groupe: 'Lampes et déco', fichiers: [
    'ikea-tagarp',
    'ikea-fado',
    'ikea-fejka',
  ] },
];

// Vraies textures photo, une par matière : voir le dossier textures/.
Chambre.listeTextures = ['chene', 'bouleau', 'pin', 'bois', 'tissu', 'coton', 'velours', 'cotele', 'plaid', 'jute', 'maille', 'poil', 'parquet'];
