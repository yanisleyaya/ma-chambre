// RÅSKOG desserte
(function () {
  function build(g, i, h) {
    const { C, B, matiere, roulette, tube, plateau, shade, lathe, lisse } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 6, sx = W / 2 - 1.2, sz = D / 2 - 1.2, n = 3, st = (H - sol - 8) / (n - 1);
    matiere(null);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => {
      C(g, 0.9, 0.9, H - sol, a * sx, sol, b * sz, c, 0.45, 0.35);
      roulette(g, a * sx, 0, b * sz, 2.4, 0.6);
    });
    tube(g, [[-sx, H - 2, sz], [-sx * 0.7, H + 0.01, sz], [sx * 0.7, H + 0.01, sz], [sx, H - 2, sz]], 0.7, c, 0.45, 0.35);
    for (let k = 0; k < n; k++) {
      const y = sol + 2 + k * st, ws = W - 3, ds = D - 3;
      B(g, ws, 0.5, ds, 0, y, 0, c, 0.5, 0.3);
      [-1, 1].forEach(a => { B(g, 0.5, 3.4, ds, a * (ws / 2), y, 0, c, 0.5, 0.3); B(g, ws, 3.4, 0.5, 0, y, a * (ds / 2), c, 0.5, 0.3); });
      for (let t = 1; t < 7; t++) B(g, ws - 1, 0.15, 0.8, 0, y + 0.5, -ds / 2 + t * ds / 7, shade(c, 0.76), 0.6);
    }
    // quelques crayons et pots, comme un vrai chariot de coloriage
    matiere('plastique');
    const y2 = sol + 2 + 2 * st + 0.6;
    lathe(g, lisse([[0.01, 0], [3, 0], [3.3, 4], [3.3, 8], [3, 8]]), -W * 0.2, y2, 0, '#f2c230', 0.45);
    ['#d9483b', '#2f7fb8', '#3f9a5a'].forEach((col, k) => tube(g, [[-W * 0.2 + (k - 1), y2 + 3, (k - 1) * 0.8], [-W * 0.2 + (k - 1) * 1.6, y2 + 13, (k - 1) * 1.6]], 0.35, col, 0.5));
    plateau(g, W * 0.34, D * 0.5, 2.4, W * 0.16, y2, 0, '#f1ece2', { rayon: 0.4, chant: 0.2 });
  }
  const f = { color: '#f1f0ec', marque: 'IKEA', build };
  Chambre.meuble(Object.assign({}, f, { key: 'raskog-77', prix: 29.99, color: '#f1f0ec', couleurs: [{ nom: 'Blanc', hex: '#f1f0ec' }, { nom: 'Noir', hex: '#222426' }], name: 'RÅSKOG desserte', w: 45, d: 35, h: 77, lien: 'https://www.ikea.com/fr/fr/p/raskog-desserte-blanc-30586783/', note: 'Sur roulettes : se déplace entre le bureau et le coin de jeu. 18 kg au maximum.' }));
  Chambre.meuble(Object.assign({}, f, { key: 'raskog-61', prix: 24.99, color: '#f1f0ec', couleurs: [{ nom: 'Blanc', hex: '#f1f0ec' }, { nom: 'Noir', hex: '#222426' }], name: 'RÅSKOG petite desserte', w: 38, d: 28, h: 61, lien: 'https://www.ikea.com/fr/fr/p/raskog-desserte-blanc-00586789/', note: 'À sa hauteur pour ses crayons. Bloque-la : ses roulettes peuvent partir si elle s’y appuie.' }));
})();
