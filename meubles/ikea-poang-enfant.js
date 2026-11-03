// POÄNG fauteuil enfant
(function () {
  function build(g, i, h) {
    const { matiere, ruban, B, shade, oreiller, peluche } = h;
    const { w: W, d: D, h: H, color: c } = i, wood = '#dcc29a', sx = W / 2 - 1.8;
    matiere('bouleau');
    [-1, 1].forEach(a => {
      ruban(g, a * sx, [[H * 0.3, -D * 0.47], [H * 0.06, -D * 0.46], [1.3, -D * 0.3], [1.3, D * 0.26], [H * 0.09, D * 0.45], [H * 0.3, D * 0.47], [H * 0.46, D * 0.4], [H * 0.5, D * 0.2], [H * 0.47, -D * 0.1], [H * 0.42, -D * 0.34], [H * 0.3, -D * 0.47]], 3, 1.4, wood, { rayon: 0.4, pas: 80 });
    });
    [[H * 0.03, D * 0.2], [H * 0.03, -D * 0.2]].forEach(([y, z]) => B(g, W - 4, 1.5, 3.4, 0, y, z, wood));
    const profil = [[H * 0.33, D * 0.46], [H * 0.31, D * 0.3], [H * 0.27, D * 0.08], [H * 0.3, -D * 0.12], [H * 0.46, -D * 0.28], [H * 0.72, -D * 0.4], [H * 0.97, -D * 0.46]];
    [-1, 1].forEach(a => ruban(g, a * (W * 0.26), profil, 3.2, 1, wood, { rayon: 0.3 }));
    matiere('tissu');
    ruban(g, 0, profil.map(q => [q[0] + 2.4, q[1] + 1.6]), W - 8, 4.6, c, { rayon: 2.1 });
    oreiller(g, W - 16, 6, 14, 0, H * 0.82, -D * 0.34, shade(c, 1.06), { penche: 1.2, graine: 4 });
    peluche(g, 0, H * 0.36, D * 0.08, 18, '#d9c5a8', 0);
  }
  Chambre.meuble({ key: 'poang-enfant', prix: 33, name: 'POÄNG fauteuil enfant', w: 47, d: 56, h: 68, color: '#c7b79c', matiere: 'bouleau', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/poaeng-structure-fauteuil-pour-enfant-plaque-bouleau-80418056/', note: 'Le même fauteuil que le grand, à sa taille : assise à 24 cm. La housse se choisit à part.', build });
})();
