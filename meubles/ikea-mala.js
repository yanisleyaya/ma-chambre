// MÅLA chevalet
(function () {
  function build(g, i, h) {
    const { B, matiere, pied, tube } = h;
    const { w: W, d: D, h: H, color: c } = i, sx = W / 2 - 3, zb = D / 2 - 2, ztop = 3;
    // deux cadres inclinés, assemblés en haut
    [-1, 1].forEach(s => {
      [-1, 1].forEach(x => pied(g, [x * sx, H - 1, s * ztop], [x * sx, 0, s * zb], 1.6, 1.6, c));
      [H * 0.12].forEach(y => B(g, W - 6, 2, 1.6, 0, y, s * (zb - (zb - ztop) * (y / H)), c));
    });
    // tableau blanc et ardoise, de chaque côté
    matiere(null);
    const pente = Math.atan2(zb - ztop, H);
    [[1, '#fbfbf9', 0.28], [-1, '#2a2f2c', 0.8]].forEach(([s, col, ru]) => {
      const m = B(g, W - 11, H * 0.55, 0.8, 0, 0, 0, col, ru);
      const yc = H * 0.62;
      m.position.set(0, yc / 100, s * (ztop + (zb - ztop) * (1 - yc / H) - 0.3) / 100);
      m.rotation.x = s * pente;
    });
    // tablette à feutres et rouleau de papier
    matiere('pin');
    B(g, W - 8, 1.2, 7, 0, H * 0.33, ztop + (zb - ztop) * 0.67 + 2, c);
    matiere(null);
    tube(g, [[-W / 2 + 4, H - 2, 4.2], [W / 2 - 4, H - 2, 4.2]], 2.6, '#f3efe6', 0.9);
    ['#d9483b', '#2f7fb8', '#e5b92c', '#3f9a5a'].forEach((col, k) => {
      const x = -14 + k * 8, z = ztop + (zb - ztop) * 0.67 + 3;
      tube(g, [[x, H * 0.33 + 1.8, z], [x + 7, H * 0.33 + 1.8, z + 1]], 0.55, col, 0.5);
    });
  }
  Chambre.meuble({ key: 'mala', prix: 29.99, name: 'MÅLA chevalet', w: 66, d: 48, h: 112, color: '#e4c79c', matiere: 'pin', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/mala-chevalet-bois-de-conifere-30488966/', note: 'Surface de dessin basse : elle y arrive sans escabeau.', build });
})();
