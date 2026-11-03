// Série HEMNES : chevet, commodes, bureau
(function () {
  const BOUTON = { couleurPoignee: '#8e6a42', r: 1.4 };
  function corps(g, h, i, plinthe, top) {
    const { B, plateau, shade } = h;
    const { w: W, d: D, h: H, color: c } = i;
    plateau(g, W, D, top, 0, H - top, 0, c, { rayon: 0.6, chant: 0.6 });
    [-1, 1].forEach(a => {
      B(g, 3.2, H - top - 0.4, 3.2, a * (W / 2 - 1.6), 0, D / 2 - 2.2, c);
      B(g, 3.2, H - top - 0.4, 3.2, a * (W / 2 - 1.6), 0, -D / 2 + 2.2, c);
      B(g, 1.4, H - top - plinthe, D - 6, a * (W / 2 - 1.4), plinthe, 0, shade(c, 0.97));
    });
    B(g, W - 5, plinthe, 2, 0, 0, D / 2 - 2.4, c);
    B(g, W - 5, H - top - plinthe, D - 4, 0, plinthe, -0.8, shade(c, 0.72));
  }
  function chevet(g, i, h) {
    const { B, facade, creux, shade, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, top = 2.2, sous = 25, dh = H - top - sous;
    plateau(g, W, D, top, 0, H - top, 0, c, { rayon: 0.6, chant: 0.6 });
    [-1, 1].forEach(a => [-1, 1].forEach(b => B(g, 3.2, H - top, 3.2, a * (W / 2 - 1.6), 0, b * (D / 2 - 1.6), c)));
    B(g, W - 3, 1.8, D - 3, 0, 8, 0, c);                        // tablette basse
    B(g, W - 5, 2, D - 3, 0, sous - 2, 0, c);
    creux(g, W - 5, sous - 10, D - 3, 0, 9.8, D / 2 - 1.5, 0.7);
    B(g, W - 5, dh, D - 4, 0, sous, -0.8, shade(c, 0.72));
    facade(g, W - 6.4, dh, 0, sous, D / 2 - 0.6, c, Object.assign({ ouvre: 'tiroir', prof: D - 8, e: 1.6, poignee: 'bouton' }, BOUTON));
  }
  function commode(g, i, h) {
    const { facade } = h;
    const { w: W, d: D, h: H, color: c } = i, plinthe = 10, top = 2.4, zone = H - plinthe - top;
    corps(g, h, i, plinthe, top);
    if (W > 80) {                 // HEMNES 6 tiroirs : petits tiroirs en haut, grands en bas
      const n = 3, hautes = zone * 0.28, rest = (zone - hautes) / n, wf = W - 6.4;
      [-1, 0, 1].forEach(k => facade(g, wf / 3, hautes, k * wf / 3, plinthe + zone - hautes, D / 2 - 0.6, c, Object.assign({ ouvre: 'tiroir', prof: D - 10, e: 1.6, moulure: 2.6, poignee: 'bouton' }, BOUTON)));
      for (let k = 0; k < n; k++) facade(g, wf, rest, 0, plinthe + k * rest, D / 2 - 0.6, c, Object.assign({ ouvre: 'tiroir', prof: D - 10, e: 1.6, moulure: 3.2, poignee: 'bouton', ecart: wf * 0.26 }, BOUTON));
    } else {
      const n = 2, dh = zone / n;
      for (let k = 0; k < n; k++) facade(g, W - 6.4, dh, 0, plinthe + k * dh, D / 2 - 0.6, c, Object.assign({ ouvre: 'tiroir', prof: D - 10, e: 1.6, moulure: 2.8, poignee: 'bouton' }, BOUTON));
    }
  }
  function bureau(g, i, h) {
    const { B, facade, plateau, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, top = 3, sous = 67, bois = shade(c, 1);
    plateau(g, W, D, top, 0, H - top, 0, bois, { rayon: 0.6, chant: 0.7 });
    [-1, 1].forEach(a => [-1, 1].forEach(b => B(g, 4.2, H - top, 4.2, a * (W / 2 - 2.6), 0, b * (D / 2 - 2.6), c)));
    [-1, 1].forEach(b => B(g, W - 8, 4, 2, 0, H - top - 4, b * (D / 2 - 2.6), c));
    B(g, W - 8, 16, 1.6, 0, 16, -D / 2 + 2.6, c);
    // caisson à deux tiroirs
    const cw = 40, x = W / 2 - cw / 2 - 2;
    B(g, cw, sous - 8, D - 6, x, 8, 0, shade(c, 0.74));
    [0, 1].forEach(k => facade(g, cw - 1, (sous - 8) / 2, x, 8 + k * (sous - 8) / 2, D / 2 - 0.4, c, Object.assign({ ouvre: 'tiroir', prof: D - 10, e: 1.6, moulure: 3, poignee: 'bouton' }, BOUTON)));
  }
  const f = { matiere: 'pin', marque: 'IKEA' };
  Chambre.meuble(Object.assign({}, f, { key: 'hemnes-chevet', categorie: 'Tables de chevet', prix: 89.99, name: 'HEMNES table de chevet', w: 46, d: 35, h: 70, color: '#8f9c8d', surf: true, lien: 'https://www.ikea.com/fr/fr/p/hemnes-table-de-chevet-gris-vert-teinte-brun-clair-50610739/', note: 'Pin massif, un tiroir et une tablette basse.', build: chevet }));
  Chambre.meuble(Object.assign({}, f, { key: 'hemnes-2t', prix: 99.99, name: 'HEMNES commode 2 tiroirs', w: 54, d: 38, h: 66, color: '#e9e3d7', surf: true, lien: 'https://www.ikea.com/fr/fr/p/hemnes-commode-2-tiroirs-teinte-blanc-80242627/', note: 'À fixer au mur, comme toute commode dans une chambre d’enfant.', build: commode }));
  Chambre.meuble(Object.assign({}, f, { key: 'hemnes-6t', prix: 299, name: 'HEMNES commode 6 tiroirs', w: 108, d: 50, h: 131, color: '#e9e3d7', lien: 'https://www.ikea.com/fr/fr/p/hemnes-commode-6-tiroirs-teinte-blanc-60239273/', note: '261 litres de rangement. À fixer impérativement au mur.', build: commode }));
  Chambre.meuble(Object.assign({}, f, { key: 'hemnes-bureau', categorie: 'Bureaux, tables et chaises', prix: 349, name: 'HEMNES bureau', w: 155, d: 65, h: 74, color: '#e9e3d7', surf: true, lien: 'https://www.ikea.com/fr/fr/p/hemnes-bureau-teinte-blanc-brun-clair-20535044/', note: 'Grand bureau en pin massif. 67 cm sous le plateau d’après la fiche.', build: bureau }));
})();
