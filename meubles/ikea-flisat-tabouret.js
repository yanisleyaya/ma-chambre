// FLISAT tabouret
(function () {
  function build(g, i, h) {
    const { B, matiere, shade, plateau, pied } = h;
    const { w: W, d: D, h: H, color: c } = i;
    plateau(g, W, D, 2.2, 0, H - 2.2, 0, c, { rayon: 2, chant: 0.5 });
    matiere(null);
    B(g, 8, 0.1, 2.2, 0, H, 0, shade(c, 0.35), 1);
    matiere('pin');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 4), H - 2.2, b * (D / 2 - 4)], [a * (W / 2 - 2.2), 0, b * (D / 2 - 2.2)], 1.5, 1.1, c));
    [-1, 1].forEach(a => B(g, W - 8, 3, 1.4, 0, H * 0.34, a * (D / 2 - 3.6), c));
  }
  Chambre.meuble({ key: 'flisat-tabouret', prix: 19.99, name: 'FLISAT tabouret', w: 24, d: 24, h: 28, color: '#e3c79a', matiere: 'pin', marque: 'IKEA', lien: 'https://m2.ikea.com/fr/fr/p/flisat-tabouret-enfant-40273593/', build });
})();
