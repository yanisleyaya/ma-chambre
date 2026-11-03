// Lits adultes Maisons du Monde 140×190
(function () {
  function literie(g, h, W, D, top, zc, col, gr, coussin) {
    const { matiere, couette, oreiller, shade } = h;
    matiere('coton');
    couette(g, W, D * 0.72, 0, top + 4, zc + D * 0.13, col, { chute: 15, pied: 13, gonfle: 2.8, graine: gr });
    couette(g, W + 1, D * 0.12, 0, top + 7.6, zc + D * 0.13 - D * 0.36 + D * 0.06, shade(col, 1.45), { chute: 14, pied: 0, gonfle: 0.6, graine: gr + 2, rond: 8 });
    const px = W * 0.25, pz = zc - D / 2 + 25;
    [-1, 1].forEach((a, k) => oreiller(g, W * 0.46, 17, 42, a * px, top - 1, pz, '#f2f0ea', { penche: 0.44, tourne: -a * 0.04, graine: k + 2 }));
    matiere('velours');
    oreiller(g, 44, 13, 30, 0, top + 3, pz + 14, coussin, { penche: 0.86, graine: 4 });
  }
  function aina(g, i, h) {
    const { B, matelas, shade, pied } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 15, zc = 1;
    // cadre en chêne massif, sans tête de lit
    [-1, 1].forEach(a => B(g, 4, H - sol, D, a * (W / 2 - 2), sol, 0, c));
    [-1, 1].forEach(a => B(g, W - 8, H - sol, 4, 0, sol, a * (D / 2 - 2), c));
    B(g, W - 8, 1.4, D - 8, 0, sol + 4, 0, shade(c, 0.9));
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 8), sol, b * (D / 2 - 8)], [a * (W / 2 - 8), 0, b * (D / 2 - 8)], 3, 3, c));
    matelas(g, 140, 18, 190, 0, sol + 6, zc, '#efece6');
    literie(g, h, 140, 190, sol + 24, zc, '#b9a3a1', 7, '#e4b13a');
  }
  function capitonne(g, i, h) {
    const { B, matelas, panneau, shade, pied, soft, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 13, top = sol + 20, zc = 3;
    // grande tête de lit capitonnée : boutons et creux réguliers
    panneau(g, W, H - 4, 8, 0, 4, -D / 2, c, { rayon: 3, chant: 2.6 });
    const nx = 6, ny = 3, x0 = -W / 2 + 14, dx = (W - 28) / (nx - 1), y0 = H * 0.48, dy = (H * 0.46) / ny;
    for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) {
      const px = x0 + x * dx + (y % 2 ? dx / 2 : 0);
      if (px > W / 2 - 12) continue;
      soft(g, 2.6, 2.6, 1.2, px, y0 + y * dy, -D / 2 + 8, shade(c, 0.78));
    }
    [-1, 1].forEach(a => B(g, 4, sol + 10, D - 8, a * (W / 2 - 2), sol - 3, 4, c));
    B(g, W, sol + 7, 4, 0, sol - 3, D / 2 - 2, c);
    B(g, W - 8, 2, D - 12, 0, sol + 1, zc, shade(c, 0.6));
    matelas(g, 140, 18, 186, 0, sol + 3, zc, '#efece6');
    matiere('bois');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 7), sol - 3, b * (D / 2 - 7)], [a * (W / 2 - 5), 0, b * (D / 2 - 5)], 2.2, 1.3, '#3b2c1f'));
    literie(g, h, 140, 186, top + 2, zc, '#e8e2d6', 3, '#7f9a7b');
  }
  const f = { marque: 'Maisons du Monde' };
  Chambre.meuble(Object.assign({}, f, { key: 'mdm-aina', prix: 349.99, surf: true, dessus: 45, name: 'Aina lit chêne massif 140×190', w: 150, d: 200, h: 35, color: '#cdaa7c', matiere: 'chene', lien: 'https://www.maisonsdumonde.com/FR/fr/p/lit-adulte-140x190-cm-en-chene-massif-aina-M23107943.htm', note: 'Cadre bas en chêne massif, sans tête de lit. La hauteur de 35 cm ne compte que le cadre, pas le matelas.', build: aina }));
  Chambre.meuble(Object.assign({}, f, { key: 'mdm-capitonne', prix: 489, surf: true, dessus: 41, name: 'Lit tête capitonnée velours 140×190', w: 147, d: 205, h: 115, color: '#8a7b70', matiere: 'velours', lien: 'https://www.maisonsdumonde.com/FR/fr/p/lit-140x190-avec-sommier-et-tete-de-lit-capitonnee-en-velours-taupe-M26088042.htm', note: 'Sommier inclus, grande tête de lit en velours taupe.', build: capitonne }));
})();
