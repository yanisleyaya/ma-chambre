// Tobias coffre à jouets
(function () {
  function build(g, i, h) {
    const { B, matiere, tube, shade, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, slats = 4, sh = (H - 8) / slats;
    for (let k = 0; k < slats; k++) {
      [-1, 1].forEach(a => B(g, W - 6, sh - 0.8, 1.8, 0, 3 + k * sh, a * (D / 2 - 1.2), c));
      [-1, 1].forEach(a => B(g, 1.8, sh - 0.8, D - 6, a * (W / 2 - 1.2), 3 + k * sh, 0, c));
    }
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, 4, H - 3, 4, a * (W / 2 - 2), 0, b * (D / 2 - 2), shade(c, 0.97)));
    B(g, W - 6, H - 8, D - 6, 0, 3, 0, shade(c, 0.3));      // l'intérieur reste sombre, entre les lattes
    plateau(h.ouvrant(g, 'couvercle', { y: H, z: -D / 2 - 0.5 }), W + 1, D + 1, 2.6, 0, H - 2.6, 0, c, { rayon: 1.2, chant: 0.6 });
    matiere(null);
    [-1, 1].forEach(a => tube(g, [[a * (W / 2 + 0.2), H * 0.72, -7], [a * (W / 2 + 2.5), H * 0.66, 0], [a * (W / 2 + 0.2), H * 0.72, 7]], 0.7, '#b7a483', 1));
  }
  Chambre.meuble({ key: 'tobias-coffre', prix: 59.99, name: 'Tobias coffre à jouets', w: 80, d: 40, h: 40, color: '#efebe4', matiere: 'pin', marque: 'Maisons du Monde', lien: 'https://www.maisonsdumonde.com/FR/fr/p/coffre-a-jouet-en-bois-massif-pin-naturel-blanc-tobias-M21070739.htm', note: 'Pin massif blanc, 98 litres. Vérifie que le couvercle ne peut pas se refermer sur ses doigts.', build });
})();
