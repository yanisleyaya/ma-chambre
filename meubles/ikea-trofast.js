// TROFAST rangement à bacs
(function () {
  function build(g, i, h) {
    const { B, matiere, shade, plateau, creux } = h;
    const { w: W, d: D, h: H, color: c } = i, cols = W > 60 ? 2 : 1, t = 2, cw = (W - t * (cols + 1)) / cols;
    B(g, W, t, D, 0, H - t, 0, c); B(g, W, t, D, 0, 4, 0, c);
    for (let k = 0; k <= cols; k++) B(g, t, H, D, -W / 2 + t / 2 + k * (cw + t), 0, 0, c);
    matiere(null);
    B(g, W - 1, H - 6, 0.25, 0, 5, -D / 2 + 0.2, '#6d675f');
    const tones = W > 60 ? ['#e9574f', '#f2c230', '#4aa6d8', '#62b36a', '#f08bb0', '#f4f3ee', '#8a6fc2', '#f39a3b'] : ['#f4f3ee', '#f4f3ee', '#f4f3ee', '#f4f3ee'];
    matiere('plastique');
    for (let k = 0; k < cols; k++) {
      const x = -W / 2 + t + cw / 2 + k * (cw + t), slots = [23, 23, 10, 10];
      let y = 7;
      const gap = (H - 11 - slots.reduce((s, v) => s + v, 0)) / slots.length;
      creux(g, cw, H - 6, D - 0.4, x, 6, D / 2 - 0.1);
      slots.forEach((bh, n) => {
        const col = tones[(k * 4 + n) % tones.length], zf = D / 2 - 1.6;
        const bac = h.ouvrant(g, 'tiroir', { x, y, z: D / 2, course: (D - 5) * 0.7 });
        B(bac, cw - 2.4, bh, D - 5, x, y, -0.8, col, 0.42);
        plateau(bac, cw - 0.8, D - 3.4, 1.1, x, y + bh - 0.6, -0.8, shade(col, 0.96), { rayon: 2.4, chant: 0.4, rough: 0.4 });
        plateau(bac, cw * 0.36, 1.2, 1.5, x, y + bh - 3.4, zf - 0.1, shade(col, 0.82), { rayon: 0.5, chant: 0.3, rough: 0.5 });
        y += bh + gap;
      });
    }
  }
  Chambre.meuble({ key: 'trofast-99', prix: 127, surf: true, name: 'TROFAST rangement à bacs', w: 99, d: 44, h: 94, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/trofast-combinaison-structure-bacs-blanc-multicolore-s99573405/', note: 'Les bacs sont à sa hauteur : elle peut ranger seule. À fixer au mur.', build });
  Chambre.meuble({ key: 'trofast-46', prix: 73.99, name: 'TROFAST étroit', w: 46, d: 30, h: 94, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/trofast-combinaison-structure-bacs-blanc-blanc-s19574951/', note: 'Version étroite, pratique dans ta chambre tout en longueur. À fixer au mur.', build });
})();
