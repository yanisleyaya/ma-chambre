// FEJKA fougère artificielle
(function () {
  function build(g, i, h) {
    const { lathe, lisse, matiere, tube, leaf, seeded } = h;
    const { w: W, h: H, color: c } = i, pot = 9, r = seeded(i.id + 9);
    lathe(g, lisse([[0.01, 0], [3.6, 0], [4.5, pot - 1], [4.6, pot], [4, pot], [3.8, pot - 1], [0.01, pot - 1]]), 0, 0, 0, c, 0.6);
    matiere(null);
    const verts = ['#3f6b44', '#4e7f50', '#335a3a', '#5b8b58'];
    for (let k = 0; k < 14; k++) {
      const a = k * 2.4, ht = (H - pot) * (0.6 + r() * 0.38), pen = W * 0.46 * (0.5 + r() * 0.5), tx = Math.cos(a) * pen, tz = Math.sin(a) * pen;
      tube(g, [[0, pot, 0], [tx * 0.4, pot + ht * 0.7, tz * 0.4], [tx, pot + ht * 0.8, tz]], 0.14, '#5a7044', 0.8);
      for (let f = 0; f < 6; f++) {
        const t = 0.35 + f * 0.11;
        [-1, 1].forEach(s => leaf(g, tx * t, pot + ht * (t < 0.7 ? t : 0.7 + (t - 0.7) * 0.3), tz * t, W * 0.2, W * 0.07, a + s * 1.2, 0.8 + r() * 0.3, verts[Math.floor(r() * 4)]));
      }
    }
  }
  Chambre.meuble({ key: 'fejka', prix: 5.99, name: 'FEJKA fougère artificielle', w: 26, d: 26, h: 34, color: '#ece8e0', matiere: 'plastique', sits: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/fejka-plante-artificielle-interieur-exterieur-fougere-40615252/', note: 'Sans terre ni arrosage : plus sûr à côté de ta sœur. Pot de 9 cm et plante de 34 cm d’après la fiche, largeur estimée.', build });
})();
