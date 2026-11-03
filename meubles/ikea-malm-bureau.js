// MALM bureau
(function () {
  function build(g, i, h) {
    const { B, shade, plateau, facade } = h;
    const { w: W, d: D, h: H, color: c } = i, t = 4;
    plateau(g, W, D, t, 0, H - t, 0, c, { rayon: 0.3, chant: 0.25 });
    [-1, 1].forEach(a => B(g, t, H - t, D - 1, a * (W / 2 - t / 2), 0, 0, c));
    B(g, W - 8, 34, 1.4, 0, H - t - 34, -D / 2 + 3, shade(c, 0.94));
    B(g, 44, 14, D - 6, W / 2 - t - 22, H - t - 14, -0.5, shade(c, 0.86));
    facade(g, 44, 14, W / 2 - t - 22, H - t - 14, D / 2 - 1.2, c, { ouvre: 'tiroir', prof: D - 12, e: 1.8, poignee: 'fente', l: 16, hp: 0.9, yp: H - t - 2.4 });
  }
  Chambre.meuble({ key: 'malm-bureau', prix: 219, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Plaqué chêne blanchi', hex: '#dccfb9', matiere: 'chene' }], name: 'MALM bureau', w: 151, d: 65, h: 73, color: '#f3f2ee', matiere: 'laque', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/malm-bureau-avec-tablette-coulissante-blanc-70214192/', note: 'Grand plan de travail, avec une tablette qui coulisse à gauche ou à droite.', build });
})();
