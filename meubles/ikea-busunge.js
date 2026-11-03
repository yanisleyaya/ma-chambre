// BUSUNGE lit extensible
(function () {
  function lit(g, i, h) {
    const { B, panneau, matelas, matiere, couette, oreiller, peluche } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 23, top = sol + 11;
    // deux têtes arrondies et un cadre qui coulisse : ici replié
    panneau(g, W, H, 2.4, 0, 0, -D / 2, c, { rayon: 12, chant: 0.6 });
    panneau(g, W, H * 0.68, 2.4, 0, 0, D / 2 - 2.4, c, { rayon: 12, chant: 0.6 });
    [-1, 1].forEach(a => {
      B(g, 2, 12, D - 5, a * (W / 2 - 1), sol - 6, 0, c);
      B(g, 0.15, 0.6, 0.6, a * (W / 2 + 0.01), sol, 0, '#9f9f9f');
    });
    B(g, W - 4, 1.4, D - 5, 0, sol - 2, 0, '#e4d4b8');
    matelas(g, W - 8, 11, D - 6, 0, sol, 0, '#efece6');
    matiere('coton');
    couette(g, W - 10, D * 0.68, 0, top + 3, D * 0.13, c, { chute: 8, pied: 7, gonfle: 2.2, graine: 7, rond: 5 });
    oreiller(g, W * 0.62, 11, 36, 0, top - 1, -D / 2 + 26, '#f4f1ea', { penche: 0.2, graine: 5 });
    peluche(g, 12, top + 3, -D / 2 + 48, 24, '#b98d5f', -0.25);
  }
  Chambre.meuble({ key: 'busunge-lit', prix: 229, surf: true, dessus: 37, name: 'BUSUNGE lit extensible', w: 90, d: 138, h: 100, color: '#f6efe6', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/busunge-lit-extensible-blanc-30305702/', note: 'Montré replié, à sa taille : 138 cm de long. Il s’allonge jusqu’à 209 cm quand elle grandit. Sa tête de 100 cm dépasse l’appui de ta fenêtre.', build: lit });
})();
