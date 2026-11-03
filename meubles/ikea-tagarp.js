// TÅGARP lampadaire 1m80
(function () {
  function build(g, i, h) {
    const { C, glow, lampLight, lathe, lisse, matiere } = h;
    const { h: H, color: c } = i, pied = 10.5, abat = 12;
    lathe(g, lisse([[0.01, 0], [pied, 0], [pied, 0.8], [pied * 0.6, 1.8], [1.4, 2.6], [0.9, 3.2]]), 0, 0, 0, c, 0.4, 0.5);
    C(g, 0.9, 0.9, H - 17, 0, 3, 0, c, 0.4, 0.5);
    matiere(null);
    const pts = lisse([[1.6, -7], [abat * 0.5, -3.5], [abat * 0.86, 2], [abat, 7]], 16).map(q => new THREE.Vector2(q[0] / 100, q[1] / 100));
    const cone = glow(g, new THREE.LatheGeometry(pts, 32), 0, H - 7, 0);
    cone.material.side = THREE.DoubleSide;
    lampLight(g, 0, H - 4, 0, 0.9);
  }
  Chambre.meuble({ key: 'tagarp', prix: 9.99, name: 'TÅGARP lampadaire', w: 24, d: 24, h: 180, color: '#232527', noOmbre: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/tagarp-lampadaire-noir-blanc-20404095/', note: 'Le lampadaire de 1m80 que tu voulais. Pied de 21 cm : garde le fil hors de portée de ta sœur et cale la lampe contre un mur.', build });
})();
