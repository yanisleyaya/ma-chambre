// Espalier et panneau d'escalade vendus chez Decathlon
(function () {
  function espalier(g, i, h) {
    const { B, C, shade, panneau, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, n = Math.floor((H - 15) / 15);
    [-1, 1].forEach(a => {
      panneau(g, 6, H, 2.6, a * (W / 2 - 3), 0, D / 2 - 2.6, c, { rayon: 1.2, chant: 0.6 });
      [H - 16, 10].forEach(y => {
        B(g, 4.4, 8, D - 2.6, a * (W / 2 - 3), y, -1.3, c);
        matiere(null); C(g, 0.5, 0.5, 0.15, a * (W / 2 - 3), y + 4, -D / 2 + 0.2, '#555759', 0.35, 0.8); matiere('bouleau');
      });
    });
    for (let k = 0; k < n; k++) {
      const m = C(g, 1.5, 1.5, W - 8, 0, 0, D / 2 - 1.4, shade(c, 1.12), 0.42);
      m.rotation.z = Math.PI / 2; m.position.y = (15 + k * 15) / 100;
    }
  }
  function hexa(g, i, h) {
    const { add, mat, matiere, seeded } = h;
    const { w: W, d: D, h: H, color: c } = i, r = seeded(i.id + 7), Rh = H / 2, s = new THREE.Shape();
    // hexagone pointe en haut : 86,6 cm de haut et 75 cm de large
    for (let k = 0; k < 6; k++) {
      const a = Math.PI / 2 + k * Math.PI / 3, x = Math.cos(a) * Rh / 100, y = Math.sin(a) * Rh / 100;
      if (k) s.lineTo(x, y); else s.moveTo(x, y);
    }
    s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, { depth: D / 100, bevelEnabled: false });
    add(g, geo, mat(c), 0, Rh, -D / 2);
    const prise = seed => {
      const q0 = new THREE.IcosahedronGeometry(0.5, 2), q = q0.attributes.position;
      for (let k = 0; k < q.count; k++) {
        const x = q.getX(k), y = q.getY(k), z = q.getZ(k), f = 1 + 0.22 * Math.sin(x * 7 + seed * 20) * Math.sin(y * 6 + seed * 11) + 0.14 * Math.sin(z * 9 + seed * 7);
        q.setXYZ(k, x * f * 0.1, y * f * 0.075, z * f * 0.045);
      }
      q0.computeVertexNormals();
      return q0;
    };
    matiere('plastique');
    const cols = ['#b4472f', '#26788a', '#d3a52c', '#7e8f3c', '#c58a54'];
    [[0, 0.5], [-0.42, 0.16], [0.42, 0.16], [-0.26, -0.3], [0.28, -0.34]].forEach(([u, v], k) => {
      const m = add(g, prise(r()), mat(cols[k], 0.8), u * W * 0.9, Rh + v * Rh, D / 2 + 1.5);
      m.rotation.z = r() * 3;
    });
  }
  const f = { marque: 'Decathlon', wall: true, movable: true };
  Chambre.meuble(Object.assign({}, f, { key: 'espalier-decathlon', prix: 387, name: 'Espalier en bois mural', w: 80, d: 8, h: 210, color: '#cd9f63', matiere: 'bouleau', lien: 'https://decathlon.ch/en/p/mp/gladiatorfit/espalier-en-bois-mural-echelle-suedoise-de-gymnastique/_/R-p-3c038610-2f64-4a47-a9a5-7ae3760a4c15', note: 'Modèle GladiatorFit vendu par un partenaire Decathlon. Prix relevé sur Decathlon.fr pour la marque : le modèle exact est à confirmer. À visser dans un mur solide, à utiliser sous surveillance à 3 ans.', build: espalier }));
  Chambre.meuble(Object.assign({}, f, { key: 'decathlon-hexa', prix: 86.99, name: 'Panneau d’escalade hexagonal', y: 25, w: 75, d: 1.5, h: 86.6, color: '#d9b884', matiere: 'bouleau', noCheck: true, lien: 'https://www.decathlon.be/fr/p/mp/panneau-de-mur-descalade-hexagonal-en-bois/70b3d36a-ea6c-42ee-b3f2-ee6eb2ff9c05/c314c2', note: 'Vendu par un partenaire Decathlon. Prix de la version blanche, sans certitude sur les prises fournies. Se pose bas pour ses 3 ans. Vérifie l’âge conseillé et la fixation sur la fiche, et mets un tapis dessous.', build: hexa }));
})();
