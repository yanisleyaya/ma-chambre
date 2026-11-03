// FADO lampe de table
(function () {
  function build(g, i, h) {
    const { glow, lampLight, lathe, lisse, matiere } = h;
    const { w: W, h: H, color: c } = i, R = W / 2, base = 3.2;
    // boule de verre opalin, posée sur un petit socle
    matiere(null);
    const pts = [];
    for (let k = 0; k <= 26; k++) { const a = -1.1 + (k / 26) * (1.1 + Math.PI / 2); pts.push(new THREE.Vector2(Math.max(Math.cos(a) * R, 0.001) / 100, (Math.sin(a) * (H - base) * 0.56 + (H - base) * 0.5) / 100)); }
    const boule = glow(g, new THREE.LatheGeometry(pts, 40), 0, base, 0);
    boule.material.color.copy(h.lin(c)); boule.material.roughness = 0.35;
    lathe(g, lisse([[0.01, 0], [R * 0.56, 0], [R * 0.58, 1], [R * 0.48, base + 1], [R * 0.46, base + 1.4]]), 0, 0, 0, c, 0.5);
    lampLight(g, 0, H * 0.55, 0, 0.4);
  }
  Chambre.meuble({ key: 'fado', prix: 19.99, couleurs: [{ nom: 'Blanc', hex: '#f0eee9' }, { nom: 'Rose', hex: '#e6b9b7' }], name: 'FADO lampe de table', w: 25, d: 25, h: 24, color: '#f0eee9', sits: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/fado-lampe-de-table-blanc-80096372/', note: 'Lumière douce, parfaite en veilleuse. Le verre et le fil (1,8 m) doivent rester hors de portée de ta sœur.', build });
})();
