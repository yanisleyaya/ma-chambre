// Paniers FLÅDIS et BRANÄS
(function () {
  function fladis(g, i, h) {
    const { lathe, lisse, shade, tube, peluche, matiere } = h;
    const { w: W, h: H, color: c } = i, R = W / 2, haut = H - 6;
    lathe(g, lisse([[0.01, 0], [R * 0.8, 0], [R * 0.96, haut * 0.3], [R, haut * 0.6], [R * 0.92, haut]]), 0, 0, 0, c, 1);
    lathe(g, lisse([[R * 0.92, haut], [R * 0.94, haut + 0.6], [R * 0.84, haut + 0.5], [R * 0.3, haut - 6], [0.01, haut - 6]]), 0, 0, 0, shade(c, 0.66), 1);
    [-1, 1].forEach(a => tube(g, [[a * R * 0.86, haut - 1, -4], [a * R * 0.92, H - 1, -2.4], [a * R * 0.92, H - 1, 2.4], [a * R * 0.86, haut - 1, 4]], 0.6, shade(c, 0.9), 1));
    matiere('velours');
    peluche(g, 0, haut - 5, 0, 12, '#b98d5f', 0.3);
  }
  function branas(g, i, h) {
    const { B, plateau, shade, poignee, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i;
    B(g, W, H - 1.4, D, 0, 0, 0, c, 0.68);
    plateau(g, W + 0.6, D + 0.6, 1.4, 0, H - 1.4, 0, shade(c, 0.92), { rayon: 1.6, chant: 0.5, rough: 0.7 });
    matiere(null);
    B(g, W - 3, 0.2, D - 3, 0, H - 0.1, 0, shade(c, 0.32), 1);
    poignee(g, 'fente', 0, H - 5, D / 2, { l: 10, h: 2 });
  }
  Chambre.meuble({ key: 'fladis', prix: 12.99, sits: true, name: 'FLÅDIS panier jonc de mer', w: 25, d: 25, h: 32, color: '#c9a877', matiere: 'jute', noOmbre: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/fladis-panier-jonc-de-mer-60322173/', note: 'Léger, elle peut le porter seule. Une fiche française l’indique indisponible en ligne : vérifie en magasin.', build: fladis });
  Chambre.meuble({ key: 'branas', prix: 16.99, couleurs: [{ nom: 'Rotin', hex: '#c9a877' }, { nom: 'Blanc', hex: '#efece6' }, { nom: 'Gris foncé', hex: '#55585a' }], sits: true, name: 'BRANÄS panier rotin', w: 32, d: 34, h: 32, color: '#c9a877', matiere: 'rotin', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/branaes-panier-rotin-00138432/', note: 'Entre pile dans une case KALLAX. Existe aussi en blanc et en gris foncé.', build: branas });
})();
