// BILLY bibliothèque
(function () {
  function build(g, i, h) {
    const { B, C, bookRow, shade, seeded, creux, lathe, matiere, matiereActuelle } = h;
    const mat0 = matiereActuelle();
    const { w: W, d: D, h: H, color: c, id } = i, t = 2.4, n = 5, base = 6, st = (H - base - t) / n, r = seeded(id + 13);
    [-1, 1].forEach(a => B(g, t, H, D, a * (W / 2 - t / 2), 0, 0, c));
    B(g, W - t * 2, H - base - 1, 0.4, 0, base, -D / 2 + 0.4, shade(c, 0.9));
    B(g, W - t * 2, base, 1.6, 0, 0, D / 2 - 2, c);
    for (let k = 0; k <= n; k++) {
      const y = k === n ? H - t : base + k * st;
      B(g, W - t * 2, t, D - 0.6, 0, y, -0.2, c);
      if (k === n) break;
      creux(g, W - t * 2, st - t, D - 1.2, 0, y + t, D / 2 - 0.5);
      [-1, 1].forEach(a => { matiere(null); C(g, 0.3, 0.3, 0.5, a * (W / 2 - t - 0.3), y - 0.45, D / 2 - 4, '#bfc1c2', 0.3, 0.8); matiere(mat0); });  // taquets
      const end = W / 2 - 5 - r() * 22;
      if (r() > 0.1) bookRow(g, -W / 2 + 4, end, y + t, 0.5, D * 0.85, id + k * 5, st - 9);
      if (end < W / 2 - 20 && r() > 0.3) {       // petit vase en fin de rangée
        matiere('terre');
        lathe(g, h.lisse([[0.01, 0], [4.6, 0], [5.6, 4], [4.2, 9], [2.4, 12], [3, 14], [2.6, 14]]), W / 2 - 11, y + t, 0, ['#c8603d', '#e4dcca', '#8a9a84'][k % 3]);
        matiere(mat0);
      }
    }
  }
  Chambre.meuble({ key: 'billy', prix: 59.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Motif chêne', hex: '#c9a87e', matiere: 'chene' }, { nom: 'Noir motif chêne', hex: '#2f2c2a', matiere: 'chene' }, { nom: 'Brun motif noyer', hex: '#6e4c34', matiere: 'chene' }], name: 'BILLY bibliothèque', w: 80, d: 28, h: 202, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/billy-bibliotheque-blanc-20522046/', note: 'Pour tes livres et ceux de ton père. À fixer au mur : les tablettes du bas restent à portée de ta sœur.', build });
})();
