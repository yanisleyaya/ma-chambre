// Tipi de jeu
(function () {
  function build(g, i, h) {
    const { add, mat, matiere, tube, shade, soft } = h;
    const { w: W, d: D, h: H, color: c } = i, a = W / 200, b = D / 200, top = (H - 6) / 100, t = 0.13;
    const tri = pts => pts.flatMap(q => q);
    const lerpP = (u, v, k) => u.map((n, j) => n + (v[j] - n) * k);
    const A = [-a, 0, -b], E = [a, 0, -b], F = [a, 0, b], G = [-a, 0, b], T = [0, top, 0];
    const m1 = lerpP(G, F, 0.42), m2 = lerpP(G, F, 0.58);
    const quad = [...A, ...E, ...T, ...E, ...F, ...T, ...G, ...A, ...T, ...G, ...m1, ...T, ...m2, ...F, ...T];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(quad, 3));
    geo.computeVertexNormals();
    add(g, geo, mat(c, 0.95), 0, 0, 0);
    matiere('bois');
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([p, q]) => tube(g, [[p * W / 2, 0, q * D / 2], [p * -W * 0.05, H, q * -D * 0.05]], 1.2, '#d9b98a'));
    matiere('tissu');
    soft(g, W * 0.72, 5, D * 0.72, 0, 0, -D * 0.05, '#f1ebe1');
    soft(g, 32, 12, 24, -W * 0.14, 5, -D * 0.2, shade(c, 0.85), 0.4);
    soft(g, 28, 11, 22, W * 0.16, 5, -D * 0.16, '#f4f1ea', -0.3);
  }
  Chambre.meuble({ key: 'mdm-tipi', prix: 65, name: 'Tipi de jeu', w: 103, d: 103, h: 160, color: '#eabfc0', matiere: 'toile', noCheck: true, marque: 'Maisons du Monde', lien: 'https://www.maisonsdumonde.com/FR/fr/p/tente-de-jeu-pour-enfant-tipi-rose-M21087894.htm', note: 'Son coin à elle pour jouer et lire. Se plie quand il n’est pas utilisé.', build });
})();
