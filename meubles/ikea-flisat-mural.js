// FLISAT rangement mural
(function () {
  function build(g, i, h) {
    const { B, bookRow, creux, panneau } = h;
    const { w: W, d: D, h: H, color: c, id } = i;
    B(g, W, H, 1.2, 0, 0, -D / 2 + 0.6, c);
    B(g, W, 1.2, D, 0, 0, 0, c);
    B(g, W - 2.4, H * 0.3, 1, 0, 1, D / 2 - 0.5, c);
    [-1, 1].forEach(a => panneau(g, D, H, 1.2, a * (W / 2 - 0.6), 0, 0, c, { rayon: 2, chant: 0.3 }).rotation.set(Math.PI / 2, 0, Math.PI / 2, 'YXZ'));
    creux(g, W - 2.4, H, D - 2, 0, 1.2, D / 2 - 1, 0.5);
    bookRow(g, -W / 2 + 3, W / 2 - 3, 1.2, -0.5, D * 0.6, id + 2, H + 5);
  }
  Chambre.meuble({ key: 'flisat-mural', prix: 16.99, name: 'FLISAT rangement mural', w: 70, d: 9, h: 16, y: 60, color: '#efe6d6', matiere: 'pin', wall: true, movable: true, noCheck: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/flisat-rangement-mural-pin-teinte-blanc-clair-00290778/', note: 'Pour poser ses livres de face, à sa hauteur.', build });
})();
