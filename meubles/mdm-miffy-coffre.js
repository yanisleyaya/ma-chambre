// Miffy coffre banc
(function () {
  function build(g, i, h) {
    const { B, matiere, plateau, shade, soft } = h;
    const { w: W, d: D, h: H, color: c } = i, gris = '#9a9c9e', z = D / 2 + 0.05;
    B(g, W, H - 3, D, 0, 0, 0, c);
    plateau(h.ouvrant(g, 'couvercle', { y: H, z: -D / 2 - 0.5 }), W + 1, D + 1, 2.4, 0, H - 2.4, 0, shade(c, 0.98), { rayon: 1.5, chant: 0.6 });
    matiere(null);
    B(g, W - 1, 0.25, D - 1, 0, H - 2.9, 0, shade(c, 0.45), 1);
    // lapin peint sur la façade
    soft(g, 13, 11, 0.3, 0, 3, z, gris);
    soft(g, 11, 9, 0.3, 0, 11, z, gris);
    soft(g, 3.6, 10, 0.3, -2.8, 18, z, gris);
    soft(g, 3.6, 10, 0.3, 2.8, 18, z, gris);
    soft(g, 0.9, 0.9, 0.2, -2.2, 15, z + 0.15, '#1c1c1c');
    soft(g, 0.9, 0.9, 0.2, 2.2, 15, z + 0.15, '#1c1c1c');
  }
  Chambre.meuble({ key: 'miffy-coffre', prix: 79.9, name: 'Miffy coffre banc', w: 60, d: 32, h: 30, color: '#f3f2ee', matiere: 'laque', marque: 'Maisons du Monde', lien: 'https://www.maisonsdumonde.com/FR/fr/p/coffre-a-jouets-en-bois-blanc-motif-lapin-gris-miffy-M23078108.htm', note: 'Petit coffre qui sert aussi de banc. Fait pour les tout-petits, dès environ 18 mois.', build });
})();
