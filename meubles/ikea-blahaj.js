// BLÅHAJ peluche requin
(function () {
  function build(g, i, h) {
    const { add, mat, soft, matiere } = h;
    const { w: W, h: H, color: c } = i, ventre = '#eef0ee';
    // corps fuselé : un volume tourné, couché sur la longueur
    const profil = [[0.001, -W / 2], [3, -W * 0.47], [7, -W * 0.35], [11.5, -W * 0.16], [12.5, 0], [10.5, W * 0.17], [6.5, W * 0.33], [3.2, W * 0.42], [1.6, W * 0.47]];
    const geo = new THREE.LatheGeometry(new THREE.SplineCurve(profil.map(q => new THREE.Vector2(q[0] / 100, q[1] / 100))).getPoints(40), 28);
    geo.rotateZ(-Math.PI / 2);
    geo.scale(1, 0.95, 1.05);
    add(g, geo, mat(c, 1), 0, H * 0.48, 0);
    const v = new THREE.LatheGeometry(new THREE.SplineCurve(profil.slice(1, 7).map(q => new THREE.Vector2(q[0] * 0.92 / 100, q[1] * 0.9 / 100))).getPoints(30), 18);
    v.rotateZ(-Math.PI / 2); v.scale(1, 0.72, 0.86);
    add(g, v, mat(ventre, 1), 0, H * 0.38, 0);
    // ailerons, nageoires et queue
    const aileron = (w, ht, e, x, y, z, rx, rz, col) => {
      const s = new THREE.Shape();
      s.moveTo(-w / 200, 0); s.quadraticCurveTo(0, ht * 0.7 / 100, w * 0.32 / 100, ht / 100); s.quadraticCurveTo(w * 0.3 / 100, ht * 0.3 / 100, w / 200, 0); s.closePath();
      const f = new THREE.ExtrudeGeometry(s, { depth: e / 100, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 10 });
      f.translate(0, 0, -e / 200);
      const m = add(g, f, mat(col, 1), x, y, z);
      m.rotation.set(rx, 0, rz, 'YXZ');
    };
    aileron(22, 15, 1.4, 2, H * 0.72, 0, 0, 0, c);
    [-1, 1].forEach(a => aileron(16, 14, 1.2, -W * 0.16, H * 0.38, a * 11, a * 2.15, 0, c));
    aileron(16, 19, 1.6, W * 0.45, H * 0.5, 0, 0, -0.4, c);
    aileron(13, 14, 1.6, W * 0.45, H * 0.48, 0, 0, -2.5, c);
    matiere(null);
    [-1, 1].forEach(a => soft(g, 1.5, 1.5, 0.8, -W * 0.34, H * 0.58, a * 6.5, '#14171a'));
    soft(g, 7, 0.8, 8, -W * 0.42, H * 0.32, 0, '#3a2c2c');
  }
  Chambre.meuble({ key: 'blahaj', prix: 24.99, sits: true, name: 'BLÅHAJ peluche requin', w: 100, d: 30, h: 28, color: '#6c8fb0', matiere: 'velours', noCheck: true, noOmbre: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/blahaj-peluche-requin-30373588/', note: 'Longueur 100 cm d’après la fiche. La largeur et la hauteur sont estimées, car la fiche ne les donne que pour le colis.', build });
})();
