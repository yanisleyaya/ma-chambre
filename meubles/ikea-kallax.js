// KALLAX étagère 4 ou 8 cases
(function () {
  function build(g, i, h) {
    const { B, matiere, matiereActuelle, bookRow, seeded, creux, shade, poignee, peluche } = h;
    const mat0 = matiereActuelle();
    const { w: W, d: D, h: H, color: c, id } = i, t = 3.9, inner = 1.6, cols = 2, rows = Math.round(H / 38), cw = (W - t * 2 - inner) / 2, ch = (H - t * 2 - inner * (rows - 1)) / rows, r = seeded(id + 11);
    B(g, W, t, D, 0, H - t, 0, c); B(g, W, t, D, 0, 0, 0, c);
    [-1, 1].forEach(a => B(g, t, H, D, a * (W / 2 - t / 2), 0, 0, c));
    B(g, inner, H - t * 2, D - 0.4, 0, t, 0, c);
    for (let k = 1; k < rows; k++) B(g, W - t * 2, inner, D - 0.4, 0, t + k * ch + (k - 1) * inner, 0, c);
    B(g, W - 1, H - 1, 0.25, 0, 0.5, -D / 2 + 0.2, shade(c, 0.86));
    const boites = ['#b9a58a', '#8f9aa0', '#c9c1b3'];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const px = (x ? 1 : -1) * (cw / 2 + inner / 2), py = t + y * (ch + inner), kind = r();
      creux(g, cw, ch, D - 0.5, px, py, D / 2 - 0.1);
      if (kind < 0.4) {                                 // boîte en tissu DRÖNA
        matiere('feutre'); const col = boites[Math.floor(r() * 3)];
        B(g, cw - 1.6, ch - 2.4, D - 3, px, py + 0.1, 0.2, col, 1);
        poignee(g, 'fente', px, py + ch * 0.72, D / 2 - 1.3, { l: 9, h: 2.2 });
        matiere(mat0);
      } else if (kind < 0.8) bookRow(g, px - cw / 2 + 0.6, px + cw / 2 - 0.6, py, 0, D * 0.78, id + x * 3 + y * 7, ch - 6);
      else peluche(g, px, py, 2, Math.min(24, ch * 0.7), ['#b98d5f', '#d9c5a8'][x], (x - 0.5) * 0.3);
    }
  }
  Chambre.meuble({ key: 'kallax-77', prix: 39.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Effet chêne blanchi', hex: '#dccfb9', matiere: 'chene' }, { nom: 'Brun noir', hex: '#3b302a', matiere: 'chene' }, { nom: 'Brun motif noyer', hex: '#6e4c34', matiere: 'chene' }], name: 'KALLAX étagère 4 cases', w: 77, d: 39, h: 77, color: '#f3f2ee', matiere: 'laque', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/kallax-etagere-blanc-20275814/', note: 'Le meuble à tout faire : posée au sol, elle est à la hauteur de ta sœur. À fixer au mur.', build });
  Chambre.meuble({ key: 'kallax-147', prix: 74.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Gris effet bois', hex: '#8e8c86', matiere: 'chene' }], name: 'KALLAX étagère 8 cases', w: 77, d: 39, h: 147, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/kallax-etagere-blanc-80275887/', note: 'À fixer au mur.', build });
})();
