// DUKTIG mini cuisine
(function () {
  function build(g, i, h) {
    const { B, C, matiere, tube, soft, facade, creux, poignee, lathe, lisse, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, top = 53, steel = '#c6cacb', blanc = '#f4f3ef';
    // caisson bas en bouleau
    plateau(g, W, D - 2, 3, 0, top - 2, 0, c, { rayon: 0.8 });
    [-1, 1].forEach(a => B(g, 2.2, top - 2, D - 2, a * (W / 2 - 1.1), 0, 0, c));
    B(g, 2.2, top - 8, D - 4, 0, 6, 0, c);
    B(g, W - 3, 2, D - 4, 0, 6, 0, c);
    B(g, W - 3, top - 8, 0.4, 0, 6, -D / 2 + 1.4, '#c2ad8a');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => lathe(g, lisse([[0.01, 0], [1.6, 0], [2.2, 4], [2.2, 6]]), a * (W / 2 - 4), 0, b * (D / 2 - 4), '#e6d9bf'));
    // crédence et étagère haute
    B(g, W - 3, H - top - 1, 1.2, 0, top + 1, -D / 2 + 1.5, c);
    [-1, 1].forEach(a => B(g, 2, H - top - 1, 18, a * (W / 2 - 1), top + 1, -D / 2 + 9.5, c));
    B(g, W, 2, 18, 0, H - 2, -D / 2 + 9.5, c);
    B(g, W - 4, 2, 17, 0, H - 21, -D / 2 + 9.5, c);
    creux(g, W - 4, 17, 17, 0, H - 19, -D / 2 + 18, 0.7);
    // portes laquées et four
    const dw = W / 2 - 2.2, dz = D / 2 - 0.1, dh = top - 10;
    matiere('laque');
    const four = h.ouvrant(g, 'abattant', { x: -W / 4 - 0.2, y: 8, z: dz }), placard = h.ouvrant(g, 'gauche', { x: W / 4 + 0.2 - dw / 2, y: 8, z: dz });
    facade(four, dw, dh, -W / 4 - 0.2, 8, dz, blanc, { e: 1.5 });
    facade(placard, dw, dh, W / 4 + 0.2, 8, dz, blanc, { e: 1.5 });
    matiere(null);
    plateau(four, dw - 10, 22, 0.5, -W / 4 - 0.2, 0, 0, '#1f2528', { rayon: 2, chant: 0.1, rough: 0.14 }).rotation.x = Math.PI / 2;
    four.children[four.children.length - 1].position.set((-W / 4 - 0.2) / 100, 0.27, dz / 100);
    poignee(four, 'barre', -W / 4 - 0.2, top - 7, dz, { l: dw - 12 });
    tube(placard, [[W / 2 - 6, top - 26, dz + 0.1], [W / 2 - 6, top - 26, dz + 2], [W / 2 - 6, top - 24, dz + 2.6], [W / 2 - 6, top - 12, dz + 2.6], [W / 2 - 6, top - 10, dz + 2], [W / 2 - 6, top - 10, dz + 0.1]], 0.45, steel, 0.3, 0.85);
    // plaques et boutons
    B(g, W / 2 - 4, 0.3, D - 8, -W / 4, top + 1, 0, '#191b1d', 0.25);
    [-9, 8].forEach(z => { C(g, 6, 6, 0.3, -W / 4, top + 1.2, z, '#26292b', 0.5); C(g, 3.4, 3.4, 0.1, -W / 4, top + 1.5, z, '#47494b', 0.5); });
    [-1, 0, 1].forEach(k => {
      const m = C(g, 1.2, 1.4, 1.4, -W / 4 + k * 8, top - 3.6, dz + 0.7, k ? '#c94a3b' : '#e7bd38', 0.4); m.rotation.x = Math.PI / 2;
    });
    // évier et robinet
    lathe(g, lisse([[0.01, -5], [7.5, -5], [9.6, -2], [10, 0.2]]), W / 4 + 0.5, top + 1, 1, steel, 0.25, 0.85);
    C(g, 1, 1, 0.1, W / 4 + 0.5, top - 3.9, 1, '#55585a', 0.3, 0.9);
    tube(g, [[W / 4 + 0.5, top + 1, -D / 2 + 4], [W / 4 + 0.5, top + 17, -D / 2 + 4], [W / 4 + 0.5, top + 20, -D / 2 + 7.5], [W / 4 + 0.5, top + 16, -D / 2 + 11]], 0.8, steel, 0.25, 0.9);
    // dînette
    lathe(g, lisse([[0.01, 0], [6, 0], [7, 1], [7.2, 8], [7.5, 8.4], [6.8, 8.4]]), -W / 2 + 13, top + 1.5, 7, '#c54b3d', 0.4, 0.1);
    tube(g, [[-W / 2 + 19, top + 8, 7], [-W / 2 + 29, top + 9, 7]], 0.6, '#222', 0.5);
    lathe(g, lisse([[0.01, 0], [2.4, 0], [3.2, 2], [3.2, 5.5], [2.9, 5.8], [2.7, 1]]), W / 2 - 14, H - 19, -D / 2 + 10, '#f4c64e', 0.5);
    lathe(g, lisse([[0.01, 0], [2.4, 0], [3.2, 2], [3.2, 5.5], [2.9, 5.8], [2.7, 1]]), W / 2 - 22, H - 19, -D / 2 + 10, '#d9e9f0', 0.5);
    soft(g, 7, 7, 7, -8, H - 19, -D / 2 + 10, '#d9483b');
    soft(g, 6, 6, 6, -16, H - 19, -D / 2 + 10, '#f2a93b');
  }
  Chambre.meuble({ key: 'duktig', prix: 99.95, name: 'DUKTIG mini cuisine', w: 72, d: 40, h: 109, color: '#e8d3ad', matiere: 'bouleau', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/duktig-mini-cuisine-bouleau-60319972/', note: 'IKEA la conseille à partir de 3 ans : pile son âge. À fixer au mur.', build });
})();
