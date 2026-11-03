// POÄNG fauteuil
(function () {
  function build(g, i, h) {
    const { matiere, ruban, B, shade, oreiller } = h;
    const { w: W, d: D, h: H, color: c } = i, wood = '#dcc29a', sx = W / 2 - 2.4;
    // Bois cintré : le patin part du sol, remonte à l'avant et porte l'accoudoir en boucle.
    matiere('bouleau');
    [-1, 1].forEach(a => {
      ruban(g, a * sx, [[H * 0.3, -D * 0.47], [H * 0.06, -D * 0.46], [1.8, -D * 0.3], [1.8, D * 0.26], [H * 0.09, D * 0.45], [H * 0.3, D * 0.47], [H * 0.46, D * 0.4], [H * 0.5, D * 0.2], [H * 0.47, -D * 0.1], [H * 0.42, -D * 0.34], [H * 0.3, -D * 0.47]], 4, 1.8, wood, { rayon: 0.5, pas: 80 });
    });
    [[H * 0.03, D * 0.2], [H * 0.03, -D * 0.2]].forEach(([y, z]) => B(g, W - 6, 2, 4.5, 0, y, z, wood));
    // Coque et coussin d'un seul tenant, de l'avant de l'assise jusqu'à la tête
    const profil = [[H * 0.33, D * 0.46], [H * 0.31, D * 0.3], [H * 0.27, D * 0.08], [H * 0.3, -D * 0.12], [H * 0.46, -D * 0.28], [H * 0.72, -D * 0.4], [H * 0.97, -D * 0.46]];
    [[-1, 0.26], [1, 0.26]].forEach(([a]) => ruban(g, a * (W * 0.26), profil, 4.4, 1.2, wood, { rayon: 0.4 }));
    ruban(g, 0, profil.map(q => [q[0] - 2, q[1] + 1]), 3, 1, shade(wood, 0.9), { rayon: 0.3 });
    matiere('tissu');
    ruban(g, 0, profil.map(q => [q[0] + 3.4, q[1] + 2.2]), W - 11, 6.5, c, { rayon: 3 });
    oreiller(g, W - 22, 8, 20, 0, H * 0.82, -D * 0.34, shade(c, 1.06), { penche: 1.2, graine: 4 });
  }
  Chambre.meuble({ key: 'poang', prix: 89.99, couleurs: [{ nom: 'Knisa beige clair', hex: '#cfc4b0' }, { nom: 'Gunnared beige', hex: '#b9ab94' }], name: 'POÄNG fauteuil', w: 68, d: 82, h: 100, color: '#cfc4b0', matiere: 'bouleau', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/poaeng-fauteuil-plaque-bouleau-knisa-beige-clair-s39240787/', note: 'Bois cintré souple : un coin lecture pour ton père. Existe aussi à bascule (68×94×95 cm).', build });
})();
