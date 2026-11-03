// Lits enfant 70×140 : 1m50 au maximum, à sa taille
(function () {
  function literie(g, h, W, D, top, col, gr, ours) {
    const { matiere, couette, oreiller, peluche } = h;
    matiere('coton');
    couette(g, W - 4, D * 0.66, 0, top + 2.6, D * 0.13, col, { chute: 5, pied: 4, gonfle: 1.8, graine: gr, rond: 3.5 });
    oreiller(g, W * 0.64, 9, 30, 0, top - 1, -D / 2 + 19, '#f4f1ea', { penche: 0.16, graine: gr + 1 });
    peluche(g, W * 0.18, top + 2.6, -D / 2 + 42, 19, ours, -0.2);
  }
  function sonho(g, i, h) {            // lit au sol : barrières basses tout autour, ouvert sur un côté
    const { B, matelas, panneau, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 6, t = 2.6;
    panneau(g, W, H, t, 0, 0, -D / 2, c, { rayon: 3, chant: 0.6 });
    panneau(g, W, H, t, 0, 0, D / 2 - t, c, { rayon: 3, chant: 0.6 });
    [-1, 1].forEach(a => {
      B(g, t, 6, D - 2 * t, a * (W / 2 - t / 2), 2, 0, c);
      if (a > 0) B(g, t, 5, D - 2 * t, W / 2 - t / 2, H - 5, 0, c);
    });
    for (let k = 0; k < 6; k++) B(g, t, H - 13, 3.6, W / 2 - t / 2, 8, -D / 2 + 20 + k * (D - 40) / 5, c);
    for (let k = 0; k < 9; k++) B(g, W - 2 * t - 1, 1, 7, 0, sol, -D / 2 + 11 + k * (D - 22) / 8, shade(c, 0.94));
    matelas(g, W - 6, 14, D - 2 * t - 2, 0, sol + 1, 0, '#f1eee7');
    literie(g, h, W - 6, D - 8, sol + 15, '#e6bfb0', 6, '#b98d5f');
  }
  function wiki(g, i, h) {             // lit bas sur pieds, deux têtes et un demi-garde-corps
    const { B, matelas, panneau, pied, shade, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 13.5, t = 2.2;
    panneau(g, W, H - 6, t, 0, 6, -D / 2, c, { rayon: 6, chant: 0.5 });
    panneau(g, W, H - 14, t, 0, 6, D / 2 - t, c, { rayon: 6, chant: 0.5 });
    [-1, 1].forEach(a => B(g, t, 8, D - 2 * t, a * (W / 2 - t / 2), sol - 3, 0, c));
    B(g, t, 9, D * 0.5, W / 2 - t / 2, sol + 8, -D * 0.2, c);
    for (let k = 0; k < 9; k++) B(g, W - 2 * t - 1, 1, 7, 0, sol, -D / 2 + 11 + k * (D - 22) / 8, shade(c, 0.94));
    matiere('bouleau');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 4), 8, b * (D / 2 - 4)], [a * (W / 2 - 3), 0, b * (D / 2 - 3)], 1.9, 1.3, '#d9bd92'));
    matelas(g, W - 6, 11, D - 2 * t - 2, 0, sol + 1, 0, '#f1eee7');
    literie(g, h, W - 6, D - 8, sol + 12, '#a9c3cf', 4, '#d9c5a8');
  }
  function romane(g, i, h) {           // chêne massif : deux têtes à barreaux, côté ouvert
    const { B, C, matelas, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 14, t = 3;
    [-1, 1].forEach(b => {
      const z = b * (D / 2 - t / 2), haut = b < 0 ? H : H * 0.8;
      [-1, 1].forEach(a => B(g, t, haut, t, a * (W / 2 - t / 2), 0, z, c));
      B(g, W - 2 * t, 3.4, 2.4, 0, haut - 3.4, z, c);
      B(g, W - 2 * t, 5, 2.4, 0, sol - 4, z, c);
      for (let k = 0; k < 6; k++) C(g, 0.9, 0.9, haut - sol - 3, -W / 2 + 12 + k * (W - 24) / 5, sol, z, c);
    });
    [-1, 1].forEach(a => B(g, 2.4, 7, D - 2 * t, a * (W / 2 - 1.5), sol - 4, 0, c));
    for (let k = 0; k < 9; k++) B(g, W - 2 * t - 1, 1, 7, 0, sol, -D / 2 + 11 + k * (D - 22) / 8, shade(c, 1.1));
    matelas(g, W - 5, 11, D - 2 * t - 1, 0, sol + 1, 0, '#efece6');
    literie(g, h, W - 5, D - 8, sol + 12, '#c9cdb6', 8, '#b98d5f');
  }
  function tipi(g, i, h) {             // cadre en forme de maison, posé au sol
    const { B, matelas, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, t = 4, eave = H * 0.58, rise = H - eave - 3, lon = Math.hypot(W / 2, rise), a = Math.atan2(rise, W / 2), sol = 5;
    [-1, 1].forEach(b => {
      const z = b * (D / 2 - t / 2);
      [-1, 1].forEach(s => {
        B(g, t, eave, t, s * (W / 2 - t / 2), 0, z, c);
        const m = B(g, lon, t, t, s * W / 4, 0, z, c);
        m.position.y = (eave + rise / 2) / 100; m.rotation.z = -s * a;
      });
      B(g, W, 7, t, 0, 0, z, c);
    });
    [-1, 1].forEach(s => B(g, t, 7, D, s * (W / 2 - t / 2), 0, 0, c));
    B(g, t, t, D, 0, H - t, 0, c);
    for (let k = 0; k < 9; k++) B(g, W - 2 * t - 1, 1, 7, 0, sol, -D / 2 + 11 + k * (D - 22) / 8, shade(c, 0.94));
    matelas(g, W - 8, 12, D - 2 * t - 1, 0, sol + 1, 0, '#efece6');
    literie(g, h, W - 8, D - 8, sol + 13, '#e3d6c5', 3, '#f2e9dc');
  }
  function confetti(g, i, h) {         // lit évolutif, montré en version enfant
    const { B, matelas, panneau, pied, shade, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 13, t = 2.2;
    panneau(g, W, H - 6, t, 0, 6, -D / 2, c, { rayon: 2, chant: 0.5 });
    panneau(g, W, H - 6, t, 0, 6, D / 2 - t, c, { rayon: 2, chant: 0.5 });
    [-1, 1].forEach(a => B(g, t, 9, D - 2 * t, a * (W / 2 - t / 2), sol - 4, 0, c));
    for (let k = 0; k < 9; k++) B(g, W - 2 * t - 1, 1, 7, 0, sol, -D / 2 + 11 + k * (D - 22) / 8, shade(c, 0.94));
    matiere('bouleau');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 4), 8, b * (D / 2 - 4)], [a * (W / 2 - 2.6), 0, b * (D / 2 - 2.6)], 2, 1.3, '#d9bd92'));
    matelas(g, W - 6, 10, D - 2 * t - 2, 0, sol + 1, 0, '#f1eee7');
    literie(g, h, W - 6, D - 8, sol + 11, '#efd9a6', 9, '#b98d5f');
  }
  const mdm = { marque: 'Maisons du Monde' }, vb = { marque: 'Vertbaudet' };
  Chambre.meuble(Object.assign({}, mdm, { key: 'mdm-sonho', prix: 279.9, surf: true, dessus: 25, name: 'Sonho lit au sol 70×140', w: 76, d: 148, h: 41.5, color: '#f4f1ea', matiere: 'pin', lien: 'https://www.maisonsdumonde.com/FR/fr/p/lit-enfant-au-sol-en-bois-70x140-blanc-perle-sonho-M25103306.htm', note: '148 cm de long et 41,5 cm de haut : il passe sous ta fenêtre, dont l’appui est à 60 cm. Pour un enfant qui monte et descend seul. Matelas 70×140 à part, 18 cm d’épaisseur maximum.', build: sonho }));
  Chambre.meuble(Object.assign({}, vb, { key: 'vb-wiki', prix: 149, surf: true, dessus: 28, name: 'WIKI lit enfant 70×140', w: 76, d: 145, h: 54, color: '#f4f3ef', matiere: 'laque', lien: 'https://www.vertbaudet.fr/lit-enfant-70x140-cm-wiki-blanc.htm?ProductId=341006761&FiltreCouleur=0402', note: '145 cm de long et 54 cm de haut : il passe sous ta fenêtre. Sommier inclus, matelas à part. Charge conseillée : 50 kg.', build: wiki }));
  Chambre.meuble(Object.assign({}, mdm, { key: 'mdm-romane', prix: 454, surf: true, dessus: 29, name: 'Romane petit lit chêne 70×140', w: 74, d: 144, h: 60, color: '#cdaa7c', matiere: 'chene', lien: 'https://www.maisonsdumonde.com/FR/fr/p/petit-lit-enfant-en-chene-massif-70x140-romane-M24143543.htm', note: '144 cm de long. Avec ses 60 cm de haut, il arrive juste à l’appui de ta fenêtre. Forme redessinée : compare avec la photo.', build: romane }));
  Chambre.meuble(Object.assign({}, vb, { key: 'vb-confetti', prix: 379, surf: true, dessus: 27, name: 'CONFETTI lit évolutif 70×140', w: 77.5, d: 143.5, h: 45, color: '#f4f3ef', matiere: 'laque', lien: 'https://www.vertbaudet.fr/lit-bebe-evolutif-70x140-cm-confetti-blanc.htm?ProductId=341014556&FiltreCouleur=0402', note: 'Montré en version enfant (45 cm de haut) : elle passe sous ta fenêtre. En version bébé, il monte à 91 cm.', build: confetti }));
  Chambre.meuble(Object.assign({}, mdm, { key: 'mdm-tipi-lit', prix: 89.98, surf: true, dessus: 21, name: 'Lit cabane au sol 70×140', w: 78, d: 148, h: 137, color: '#d4d3cf', matiere: 'pin', lien: 'https://www.maisonsdumonde.com/FR/fr/p/lit-enfant-tipi-au-sol-70x140-cm-gris-clair-bois-massif-avec-sommier-M23094976.htm', note: 'Prévu de 2 à 6 ans, sommier inclus. Il tient en longueur devant ta fenêtre, mais ses 137 cm de haut passent devant le vitrage.', build: tipi }));
})();
