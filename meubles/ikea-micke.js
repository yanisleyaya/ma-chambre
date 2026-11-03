// MICKE bureau
(function () {
  function build(g, i, h) {
    const { B, C, matiere, shade, plateau, facade } = h;
    const { w: W, d: D, h: H, color: c } = i, t = 2.6;
    plateau(g, W, D, t, 0, H - t, 0, c, { rayon: 0.4, chant: 0.25 });
    [-1, 1].forEach(a => B(g, 2, H - t, D - 1, a * (W / 2 - 1), 0, 0, c));
    B(g, W - 4, H * 0.42, 1.2, 0, H * 0.54, -D / 2 + 1, shade(c, 0.94));
    B(g, 34, H - t, D - 4, W / 2 - 19, 0, -1, shade(c, 0.86));
    facade(g, 32, 11, W / 2 - 19, H - t - 11, D / 2 - 0.3, c, { ouvre: 'tiroir', prof: D - 8, poignee: 'fente', l: 14, hp: 0.9, yp: H - t - 1.8 });
    facade(g, 32, H - t - 13, W / 2 - 19, 2, D / 2 - 0.3, c, { ouvre: 'gauche', poignee: 'fente', l: 14, hp: 0.9, yp: H - t - 13.4 });
    B(g, 32, 2, D - 6, W / 2 - 19, 0, -1, shade(c, 0.5));
    matiere(null);
    C(g, 3, 3, 0.1, -W / 2 + 12, H, -D / 2 + 8, '#222426', 0.6);      // passe-câbles
    C(g, 2.4, 2.4, 0.12, -W / 2 + 12, H, -D / 2 + 8, '#0e0f10', 0.9);
  }
  Chambre.meuble({ key: 'micke', prix: 89.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Effet chêne blanchi', hex: '#dccfb9', matiere: 'chene' }, { nom: 'Brun noir', hex: '#3b302a', matiere: 'chene' }], name: 'MICKE bureau', w: 105, d: 50, h: 75, color: '#f3f2ee', matiere: 'laque', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/catalog/products/80213074/', note: 'Compact, il tient bien le long d’un mur. Le tiroir laisse 67 cm sous le plateau : essaie ta chaise en magasin.', build });
})();
