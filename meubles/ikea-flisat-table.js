// FLISAT table enfant
(function () {
  function build(g, i, h) {
    const { B, C, matiere, shade, plateau, pied, creux } = h;
    const { w: W, d: D, h: H, color: c } = i, top = H - 2.4, plis = 0.25;
    [-1, 1].forEach(a => plateau(g, W, D / 2 - plis, 2.4, 0, top, a * (D / 4), c, { rayon: 0.6, chant: 0.4 }));
    matiere(null);
    [-1, 1].forEach(a => [-1, 1].forEach(b => { C(g, 1.5, 1.5, 0.1, a * (W / 2 - 10), H, b * (D / 4), shade(c, 0.4), 1); }));   // trous pour attraper le plateau
    matiere('pin');
    const cz = D / 2 - 5;
    B(g, W - 10, 10, 1.8, 0, top - 10, -cz, c); B(g, W - 10, 10, 1.8, 0, top - 10, cz, c);
    [-1, 1].forEach(a => B(g, 1.8, 10, D - 10, a * (W / 2 - 5), top - 10, 0, c));
    creux(g, W - 11, 8, D - 11, 0, top - 8, D / 2 - 5.5, 0.6);
    B(g, W - 11, 0.5, D - 11, 0, top - 10, 0, shade(c, 0.9));
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 6), top, b * (D / 2 - 6)], [a * (W / 2 - 5), 0, b * (D / 2 - 5)], 2.2, 1.6, c));
  }
  Chambre.meuble({ key: 'flisat-table', prix: 49.99, name: 'FLISAT table enfant', w: 83, d: 58, h: 48, color: '#e3c79a', matiere: 'pin', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/flisat-table-enfant-50298418/', note: 'Le dessus se retire pour jouer dans les bacs TROFAST placés dessous. Hauteur faite pour un jeune enfant.', build });
})();
