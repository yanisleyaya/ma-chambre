// Edgar bureau enfant
(function () {
  function build(g, i, h) {
    const { B, bookRow, shade, facade, plateau, creux, pied, matiere } = h;
    const { w: W, d: D, h: H, color: c, id } = i, top = 52, t = 2, leg = 40;
    plateau(g, W, D, 2.4, 0, top, 0, c, { rayon: 0.8, chant: 0.4 });
    B(g, W - 4, 11, D - 3, 0, top - 11, -0.5, shade(c, 0.85));
    facade(g, W - 6, 11, 0, top - 11, D / 2 - 0.4, c, { ouvre: 'tiroir', prof: D - 8, e: 1.5, poignee: 'ronde', couleurPoignee: '#c9a97c', r: 1.2 });
    matiere('bouleau');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 4), leg + 1, b * (D / 2 - 4)], [a * (W / 2 - 2), 0, b * (D / 2 - 2)], 1.9, 1.2, '#d6b88c'));
    matiere('laque');
    [-1, 1].forEach(a => B(g, t, H - top - 2, 20, a * (W / 2 - t / 2), top + 2, -D / 2 + 10, c));
    B(g, W, t, 20, 0, H - t, -D / 2 + 10, c);
    B(g, W - t * 2, t, 20, 0, top + 22, -D / 2 + 10, c);
    B(g, W - t, H - top - 2, 0.4, 0, top + 2, -D / 2 + 0.4, shade(c, 0.88));
    creux(g, W - t * 2, H - top - 24 - t, 19, 0, top + 24, -D / 2 + 20);
    creux(g, W - t * 2, 20, 19, 0, top + 2.2, -D / 2 + 20, 0.8);
    bookRow(g, -W / 2 + 5, W / 2 - 18, top + 24, -D / 2 + 10, 15, id + 5, 16);
  }
  Chambre.meuble({ key: 'edgar', prix: 119.99, dessus: 54.4, name: 'Edgar bureau enfant', w: 80, d: 50, h: 96, color: '#f1eee7', matiere: 'laque', surf: true, marque: 'Maisons du Monde', lien: 'https://www.maisonsdumonde.com/FR/fr/p/bureau-enfant-avec-tiroir-et-etageres-edgar-M24099359.htm', note: 'Livré avec un kit anti-basculement : à utiliser.', build });
})();
