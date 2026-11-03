// MARKUS chaise de bureau
(function () {
  function build(g, i, h) {
    const { B, C, matiere, tube, shade, oreiller, ruban, lathe, roulette, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, seat = 50, steel = '#222527', nyl = '#191b1d';
    // assise et dossier à résille
    matiere('tissu');
    oreiller(g, W * 0.8, 9, D * 0.76, 0, seat - 5, 4, c, { graine: 2 });
    matiere('feutre');
    const dos = [[seat + 5, -D * 0.16], [seat + 22, -D * 0.32], [seat + 50, -D * 0.34], [H - 14, -D * 0.4]];
    ruban(g, 0, dos, W * 0.68, 3.6, c, { rayon: 1.6 });
    matiere('tissu');
    ruban(g, 0, [[H - 14, -D * 0.4], [H - 8, -D * 0.42], [H - 2, -D * 0.44]], W * 0.5, 5, shade(c, 0.92), { rayon: 2.2 });
    matiere(null);
    ruban(g, 0, dos.map(q => [q[0] - 2, q[1] - 2.4]), 6, 1.6, steel, { rough: 0.4, metal: 0.6, rayon: 0.6 });
    ruban(g, 0, [[seat - 8, 0], [seat - 8, -D * 0.18], [seat + 2, -D * 0.34], [seat + 12, -D * 0.36]], 6, 1.6, steel, { rough: 0.4, metal: 0.6, rayon: 0.6 });
    B(g, 20, 4, 22, 0, seat - 9, 0, nyl, 0.5);
    // accoudoirs
    [-1, 1].forEach(a => {
      tube(g, [[a * W * 0.3, seat - 6, -2], [a * W * 0.43, seat - 3, -4], [a * W * 0.46, seat + 14, -4]], 1.2, steel, 0.4, 0.6);
      plateau(g, 7, 25, 2.6, a * W * 0.46, seat + 15, 4, '#17191b', { rayon: 3, chant: 1, rough: 0.7 });
    });
    // vérin et piétement cinq branches
    C(g, 1.6, 1.6, 14, 0, seat - 23, 0, '#a7a9ab', 0.25, 0.9);
    C(g, 2.6, 3, 17, 0, 12, 0, nyl, 0.45);
    lathe(g, [[0.01, 7], [6, 7.5], [5, 11], [3, 13], [0.01, 13]], 0, 0, 0, nyl, 0.45);
    for (let k = 0; k < 5; k++) {
      const a = k * 1.2566 + 0.3, x = Math.cos(a) * W * 0.46, z = Math.sin(a) * D * 0.46;
      tube(g, [[0, 10, 0], [x * 0.55, 9, z * 0.55], [x * 0.96, 7.4, z * 0.96]], 1.7, nyl, 0.4, 0.2);
      roulette(g, x, 0, z, 2.8, a);
    }
  }
  Chambre.meuble({ key: 'markus', prix: 199, name: 'MARKUS chaise de bureau', w: 62, d: 60, h: 140, color: '#42474a', matiere: 'tissu', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/markus-chaise-de-bureau-vissle-gris-fonce-70261150/', note: 'Dossier haut réglable, très confortable pour de longues journées. Testée jusqu’à 110 kg.', build });
})();
