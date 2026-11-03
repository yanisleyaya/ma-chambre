// MAMMUT chaise enfant
(function () {
  function build(g, i, h) {
    const { lathe, lisse, plateau, ruban } = h;
    const { w: W, d: D, h: H, color: c } = i, seat = 30;
    plateau(g, W, D - 1, 5, 0, seat - 5, 0, c, { rayon: 7, chant: 2.2, rough: 0.42 });
    ruban(g, 0, [[seat + 9, -D / 2 + 3.6], [seat + 18, -D / 2 + 2.8], [H - 8, -D / 2 + 2.6], [H, -D / 2 + 3]], W - 4, 4, c, { rayon: 1.9, rough: 0.42 });
    [-1, 1].forEach(a => ruban(g, a * (W / 2 - 7), [[seat - 3, -D / 2 + 5], [seat + 5, -D / 2 + 4], [seat + 12, -D / 2 + 3.6]], 5, 3, c, { rayon: 1.4, rough: 0.42 }));
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => lathe(g, lisse([[0.01, 0], [3.4, 0], [3.8, 1], [4.3, seat - 6], [4.6, seat - 4]]), a * (W / 2 - 6), 0, b * (D / 2 - 6), c, 0.42));
  }
  Chambre.meuble({ key: 'mammut-chaise', prix: 14.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Bleu clair', hex: '#bfe1f2' }, { nom: 'Vert vif', hex: '#7cc35e' }], name: 'MAMMUT chaise enfant', w: 39, d: 36, h: 67, color: '#f3f2ee', matiere: 'plastique', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/mammut-chaise-enfant-interieur-exterieur-blanc-40365371/', note: 'Plastique solide, utilisable aussi sur le balcon. Assise à 30 cm.', build });
})();
