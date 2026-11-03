// MAMMUT table ronde
(function () {
  function build(g, i, h) {
    const { lathe, lisse, plateau, shade } = h;
    const { w: W, h: H, color: c } = i;
    plateau(g, W, W, 3.6, 0, H - 3.6, 0, c, { rayon: W / 2, chant: 1.5, rough: 0.42 });
    lathe(g, [[0.01, H - 7], [W / 2 - 6, H - 7], [W / 2 - 6, H - 3.6]], 0, 0, 0, shade(c, 0.92), 0.5);
    for (let k = 0; k < 4; k++) {
      const a = k * 1.5708 + 0.785, r = W * 0.32;
      lathe(g, lisse([[0.01, 0], [3.8, 0], [4.2, 1], [5, H - 8], [5.6, H - 5]]), Math.cos(a) * r, 0, Math.sin(a) * r, c, 0.42);
    }
  }
  Chambre.meuble({ key: 'mammut-table', prix: 35, name: 'MAMMUT table ronde', w: 85, d: 85, h: 48, color: '#bfe1f2', matiere: 'plastique', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/mammut-table-enfant-interieur-exterieur-bleu-clair-10581994/', noOmbre: true, build });
})();
