// Tapis IKEA pour chambre d'enfant (prix relevés le 2 novembre 2026 sur ikea.com/fr)
(function () {
  // Petits outils de dessin, en cm, vus de dessus : y du canevas = profondeur du tapis.
  const ovale = (c, x, y, rx, ry, col, a) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry || rx, a || 0, 0, 6.2832); c.fill(); };
  const boite = (c, x, y, w, h, r, col) => {
    c.fillStyle = col; c.beginPath(); c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r);
    c.closePath(); c.fill();
  };
  const taches = (c, W, D, col, n, s, r) => { c.save(); c.globalAlpha = 0.35; for (let k = 0; k < n; k++) ovale(c, r() * W, r() * D, s * (0.5 + r()), s * (0.4 + r() * 0.6), col, r() * 3); c.restore(); };
  const arbre = (c, x, y, s) => { ovale(c, x + s * 0.25, y + s * 0.3, s, s, 'rgba(0,0,0,.2)'); ovale(c, x, y, s, s, '#3c6a34'); ovale(c, x - s * 0.3, y - s * 0.3, s * 0.45, s * 0.45, '#5f8f4a'); };
  const maison = (c, x, y, s, mur, toit) => {
    boite(c, x - s / 2, y - s / 2, s, s, 0.4, mur);
    c.fillStyle = toit; c.beginPath(); c.moveTo(x - s / 2, y - s / 2); c.lineTo(x + s / 2, y - s / 2); c.lineTo(x, y + s * 0.05); c.closePath(); c.fill();
    boite(c, x - s * 0.12, y + s * 0.18, s * 0.24, s * 0.32, 0.2, '#5a3e2e');
  };
  const route = (c, chemin, large, ligne) => {
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = '#68696b'; c.lineWidth = large; c.beginPath(); chemin(); c.stroke();
    c.strokeStyle = ligne || '#f1eee4'; c.lineWidth = 0.7; c.setLineDash([3, 3]); c.beginPath(); chemin(); c.stroke(); c.setLineDash([]);
  };
  const boucle = (c, x, y, w, h, r) => { c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
  const coeur = (c, x, y, s, col) => {
    c.fillStyle = col; c.beginPath(); c.moveTo(x, y + s * 0.35);
    c.bezierCurveTo(x - s, y - s * 0.3, x - s * 0.35, y - s, x, y - s * 0.4);
    c.bezierCurveTo(x + s * 0.35, y - s, x + s, y - s * 0.3, x, y + s * 0.35); c.fill();
  };
  const patte = (c, x, y, s, col, a) => {
    c.save(); c.translate(x, y); c.rotate(a);
    ovale(c, 0, s * 0.35, s * 0.55, s * 0.45, col);
    [[-0.55, -0.25], [-0.2, -0.6], [0.2, -0.6], [0.55, -0.25]].forEach(([dx, dy]) => ovale(c, dx * s, dy * s, s * 0.2, s * 0.26, col));
    c.restore();
  };
  const f = { noCheck: true, noOmbre: true, marque: 'IKEA' };
  const antiderapant = 'Envers antidérapant : il ne glisse pas quand elle court dessus.';

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-vallaby', name: 'VALLABY tapis ville et nature 100×133', w: 100, d: 133, h: 0.8, color: '#6f9a58', prix: 19.99,
    lien: 'https://www.ikea.com/fr/fr/p/vallaby-tapis-vert-10548216/', note: 'Routes, maisons et arbres pour jouer aux petites voitures.',
    build(g, i, h) {
      const r = h.seeded(i.id + 1);
      h.tapis(g, i, { motif(c, W, D) {
        taches(c, W, D, '#4f7d40', 40, 5, r);
        ovale(c, W * 0.72, D * 0.78, 13, 9, '#5d93c4'); ovale(c, W * 0.7, D * 0.76, 9, 5, '#86b4dc');
        route(c, () => boucle(c, 12, 12, W - 24, D - 24, 14), 8);
        route(c, () => { c.moveTo(12, D * 0.48); c.bezierCurveTo(W * 0.4, D * 0.4, W * 0.6, D * 0.58, W - 12, D * 0.5); }, 7);
        [[28, 30, '#e46f53', '#7d3a2c'], [48, 30, '#f2c14e', '#a3462f'], [70, 32, '#f2efe6', '#5b6f8e'], [30, 70, '#9bc1e6', '#7d3a2c'], [62, 72, '#f2a6a0', '#5b6f8e']]
          .forEach(([x, y, m, t]) => maison(c, x, y, 9, m, t));
        [[20, 100], [36, 108], [50, 96], [85, 60], [86, 40], [20, 52]].forEach(([x, y]) => arbre(c, x, y, 4.2));
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-lillabo-tapis', name: 'LILLABO tapis route 75×133', w: 75, d: 133, h: 0.6, color: '#7ea763', prix: 12.99,
    lien: 'https://www.ikea.com/fr/fr/p/lillabo-tapis-vert-70609990/', note: 'Une route en huit pour les petites voitures et le train LILLABO.',
    build(g, i, h) {
      const r = h.seeded(i.id + 2);
      h.tapis(g, i, { poil: 'plat', motif(c, W, D) {
        taches(c, W, D, '#5f8a4c', 30, 5, r);
        route(c, () => { boucle(c, 10, 10, W - 20, D / 2 - 6, 16); boucle(c, 10, D / 2 - 4, W - 20, D / 2 - 6, 16); }, 9);
        [[W / 2, D * 0.26], [W / 2, D * 0.74]].forEach(([x, y]) => { arbre(c, x - 8, y, 4.5); arbre(c, x + 7, y - 4, 3.6); maison(c, x + 4, y + 8, 7, '#f2efe6', '#c0533d'); });
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-markkrypare', name: 'MARKKRYPARE tapis circuit 74×100', w: 74, d: 100, h: 0.6, color: '#4b4e52', prix: 7.99,
    lien: 'https://www.ikea.com/fr/fr/p/markkrypare-tapis-gris-fonce-20558573/', note: 'Petit circuit gris foncé, à poser près des jouets.',
    build(g, i, h) {
      h.tapis(g, i, { poil: 'plat', motif(c, W, D) {
        c.strokeStyle = '#d9d6cc'; c.lineWidth = 1; c.setLineDash([4, 3]);
        c.beginPath(); boucle(c, 12, 12, W - 24, D - 24, 12); c.stroke();
        c.beginPath(); c.moveTo(W / 2, 12); c.lineTo(W / 2, D - 12); c.stroke(); c.setLineDash([]);
        c.strokeStyle = '#f1eee4'; c.lineWidth = 0.8;
        for (let k = 0; k < 5; k++) { c.beginPath(); c.moveTo(16 + k * 4, D - 22); c.lineTo(16 + k * 4, D - 14); c.stroke(); }     // parking
        for (let k = 0; k < 6; k++) boite(c, W / 2 - 4 + (k % 2) * 4, 40 + Math.floor(k / 2) * 4, 4, 4, 0, k % 2 === Math.floor(k / 2) % 2 ? '#f1eee4' : '#4b4e52');   // damier d'arrivée
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-hussparv', name: 'HUSSPARV tapis jardin 100×133', w: 100, d: 133, h: 0.8, color: '#79a35e', prix: 19.99,
    lien: 'https://www.ikea.com/fr/fr/p/hussparv-tapis-vert-30612174/', note: 'Un jardin avec piscine, balançoire et allées.',
    build(g, i, h) {
      const r = h.seeded(i.id + 3);
      h.tapis(g, i, { motif(c, W, D) {
        taches(c, W, D, '#5d8b48', 40, 5, r);
        boite(c, 52, 14, 34, 46, 6, '#f1ece0'); boite(c, 55, 17, 28, 40, 5, '#4f9fd4'); boite(c, 58, 20, 22, 14, 4, '#79bce6');
        c.strokeStyle = '#d8c8a2'; c.lineWidth = 7; c.lineCap = 'round';
        c.beginPath(); c.moveTo(W / 2, D - 6); c.bezierCurveTo(W * 0.3, D * 0.7, W * 0.7, D * 0.55, W * 0.45, D * 0.35); c.stroke();
        c.strokeStyle = '#8a5a3a'; c.lineWidth = 1.6;            // balançoire vue de dessus
        c.beginPath(); c.moveTo(14, 82); c.lineTo(40, 82); c.stroke();
        boite(c, 20, 80, 4, 4, 0.5, '#e05a45'); boite(c, 31, 80, 4, 4, 0.5, '#f2c14e');
        for (let k = 0; k < 30; k++) ovale(c, 8 + r() * (W - 16), 95 + r() * 30, 1.2, 1.2, ['#f2c14e', '#e46f8a', '#f6f3ea'][k % 3]);
        [[14, 20], [30, 40], [16, 60], [90, 80], [86, 110]].forEach(([x, y]) => arbre(c, x, y, 4.8));
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-barndrom', name: 'BARNDRÖM tapis petits cœurs 133×160', w: 133, d: 160, h: 1, color: '#e7b5bc', prix: 39.99,
    lien: 'https://www.ikea.com/fr/fr/p/barndroem-tapis-rose-80548208/', note: 'Poils doux en polyester recyclé.',
    build(g, i, h) {
      h.tapis(g, i, { motif(c, W, D) {
        for (let y = 8, n = 0; y < D; y += 11, n++) for (let x = 8 + (n % 2) * 5.5; x < W; x += 11) coeur(c, x, y, 2.6, h.shade(i.color, 0.82));
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-len-tapis', name: 'LEN tapis à pois 133×160', w: 133, d: 160, h: 1, color: '#8f9396', prix: 34.99,
    couleurs: [{ nom: 'Gris, pois blancs', hex: '#8f9396' }, { nom: 'Beige', hex: '#d3c4aa' }],
    lien: 'https://www.ikea.com/fr/fr/p/len-tapis-a-pois-gris-90589043/', note: antiderapant,
    build(g, i, h) {
      const clair = i.color === '#8f9396' ? '#f3f1ec' : '#f7f2e6';
      h.tapis(g, i, { motif(c, W, D) {
        for (let y = 7, n = 0; y < D; y += 10, n++) for (let x = 6 + (n % 2) * 5; x < W; x += 10) ovale(c, x, y, 2.2, 2.2, clair);
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-busenkel', name: 'BUSENKEL tapis arlequin 130×160', w: 130, d: 160, h: 1, color: '#e9dcc4', prix: 59.99,
    lien: 'https://www.ikea.com/fr/fr/p/busenkel-tapis-motif-losange-multicolore-60520427/', note: 'Dès 3 ans. ' + antiderapant,
    build(g, i, h) {
      const cols = ['#e3a33c', '#d65a4a', '#6c9fd2', '#8dbf78', '#f0d064', '#c48cc0', '#f3ece0'];
      h.tapis(g, i, { motif(c, W, D) {
        const lx = 26, lz = 32;
        for (let row = -1, n = 0; row * lz / 2 < D + lz; row++) for (let col = -1; col * lx < W + lx; col++, n++) {
          const x = col * lx + (row % 2 ? lx / 2 : 0), y = row * lz / 2;
          c.fillStyle = cols[(col * 3 + row * 5 + 70) % cols.length];
          c.beginPath(); c.moveTo(x, y - lz / 2); c.lineTo(x + lx / 2, y); c.lineTo(x, y + lz / 2); c.lineTo(x - lx / 2, y); c.closePath(); c.fill();
        }
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-stappsparv', name: 'STÄPPSPARV tapis marelle 100×160', w: 100, d: 160, h: 1, color: '#c9c3b8', prix: 29.99,
    lien: 'https://www.ikea.com/fr/fr/p/staeppsparv-tapis-beige-60603026/', note: 'Une marelle numérotée pour sauter d\'une case à l\'autre.',
    build(g, i, h) {
      const cols = ['#e7a07b', '#f0cf6a', '#9cc2a1', '#9fb9dc', '#e6a9b8', '#c9b4dd', '#f2eee5'];
      h.tapis(g, i, { motif(c, W, D) {
        const s = 22, x0 = W / 2, cases = [[0, 1], [0, 2], [0, 3], [-1, 4], [1, 4], [0, 5], [-1, 6], [1, 6]];
        c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = '700 11px sans-serif';
        cases.forEach(([dx, row], n) => {
          const x = x0 + dx * s / 2 - s / 2 + (dx ? dx * 0.5 : 0), y = D - 8 - row * s;
          boite(c, x + 1, y + 1, s - 2, s - 2, 3, cols[n % cols.length]);
          c.fillStyle = '#4a4540'; c.fillText(String(n + 1), x + s / 2, y + s / 2);
        });
        ovale(c, x0, 12, 18, 8, '#e7a07b'); c.fillStyle = '#4a4540'; c.fillText('9', x0, 12);
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-alptall', name: 'ALPTALL tapis empreintes 90×130', w: 90, d: 130, h: 1, color: '#d9cbb2', prix: 29.99,
    lien: 'https://www.ikea.com/fr/fr/p/alptall-tapis-beige-imprime-empreinte-de-patte-90625164/', note: 'Des traces de pattes à suivre.',
    build(g, i, h) {
      const r = h.seeded(i.id + 4);
      h.tapis(g, i, { motif(c, W, D) {
        for (let k = 0; k < 9; k++) {
          const x = 14 + r() * (W - 28), y = 10 + k * 14, a = (r() - 0.5) * 1.2;
          patte(c, x + (k % 2 ? -5 : 5), y, 3.6, '#8a6a4a', a);
        }
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-natthager', name: 'NATTHÄGER tapis toucan 83×125', w: 83, d: 125, h: 1, color: '#2f5f9c', prix: 29.99,
    lien: 'https://www.ikea.com/fr/fr/p/natthaeger-tapis-poils-ras-bleu-orange-toucan-50595324/', note: antiderapant,
    build(g, i, h) {
      h.tapis(g, i, { motif(c, W, D) {
        [[12, 20, 0.6], [70, 18, -0.5], [16, 100, 0.9], [68, 108, -1]].forEach(([x, y, a]) => { ovale(c, x, y, 14, 5, '#3f8a5a', a); ovale(c, x + 4, y + 4, 11, 4, '#5aa06c', a + 0.6); });
        ovale(c, 42, 66, 17, 27, '#1d1d22');          // corps
        ovale(c, 42, 44, 11, 11, '#1d1d22');          // tête
        ovale(c, 42, 52, 8, 9, '#f6efe0');            // gorge
        c.fillStyle = '#ef8a2c'; c.beginPath(); c.moveTo(36, 40); c.quadraticCurveTo(42, 14, 56, 18); c.quadraticCurveTo(50, 30, 48, 42); c.closePath(); c.fill();
        ovale(c, 38, 42, 2.2, 2.2, '#9fd0e8'); ovale(c, 38, 42, 1, 1, '#111');
        c.fillStyle = '#1d1d22'; c.beginPath(); c.moveTo(34, 88); c.lineTo(50, 88); c.lineTo(46, 108); c.lineTo(38, 108); c.closePath(); c.fill();
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-skogsduva', name: 'SKOGSDUVA tapis poils hauts herbe 133×160', w: 133, d: 160, h: 3, color: '#6f9a4e', prix: 39.99,
    lien: 'https://www.ikea.com/fr/fr/p/skogsduva-tapis-poils-hauts-vert-40578278/', note: 'Comme une pelouse, dedans ou dehors.',
    build(g, i, h) {
      const r = h.seeded(i.id + 5);
      h.tapis(g, i, { poil: 'hauts', motif(c, W, D) { taches(c, W, D, '#86b25e', 50, 7, r); taches(c, W, D, '#557f3c', 40, 6, r); } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-blaskata', name: 'BLÅSKATA tapis carrés noirs 105×160', w: 105, d: 160, h: 1.2, color: '#b9bab7', prix: 39.99,
    lien: 'https://www.ikea.com/fr/fr/p/blaskata-tapis-noir-gris-00569520/', note: antiderapant,
    build(g, i, h) {
      const r = h.seeded(i.id + 6);
      h.tapis(g, i, { motif(c, W, D) {
        for (let y = 6; y < D - 10; y += 18) for (let x = 6; x < W - 10; x += 18) if (r() < 0.45) boite(c, x, y, r() < 0.5 ? 14 : 32, 14, 1, '#262626');
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-dromslott', name: 'DRÖMSLOTT tapis chien 66×110', w: 66, d: 110, h: 1, color: '#efebe3', prix: 19.99,
    lien: 'https://www.ikea.com/fr/fr/p/droemslott-tapis-forme-chien-blanc-casse-gris-30526379/', note: 'Un chien couché, tout doux.',
    build(g, i, h) {
      const gris = '#8f8e8b', noir = '#262422';
      h.tapis(g, i, {
        forme: [[0, 12, 25, 38], [0, -37, 17, 17], [-17, -33, 7, 14], [17, -33, 7, 14], [-15, -17, 6, 8], [15, -17, 6, 8], [0, 50, 4, 5]],
        motif(c, W, D) {
          const x = W / 2, y = D / 2;
          ovale(c, x - 17, y - 33, 7, 14, gris); ovale(c, x + 17, y - 33, 7, 14, gris);
          ovale(c, x + 9, y + 18, 9, 12, gris, 0.4); ovale(c, x - 11, y + 2, 6, 7, gris);
          ovale(c, x - 15, y - 13, 5, 4, noir); ovale(c, x + 15, y - 13, 5, 4, noir);
          ovale(c, x - 6, y - 40, 2, 2, noir); ovale(c, x + 6, y - 40, 2, 2, noir); ovale(c, x, y - 28, 3.4, 2.4, noir);
          ovale(c, x, y + 52, 4, 4, gris);
        } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-brummig', name: 'BRUMMIG tapis hérisson 94×150', w: 94, d: 150, h: 1.2, color: '#7a5638', prix: 29.99,
    lien: 'https://www.ikea.com/fr/fr/p/brummig-tapis-forme-de-herisson-brun-50521187/', note: 'Envers antidérapant en caoutchouc.',
    build(g, i, h) {
      const piq = [];
      for (let k = 0; k < 13; k++) { const a = Math.PI * (0.08 + k / 12 * 0.84); piq.push([Math.cos(a) * 40, 10 + Math.sin(a) * 55, 7, 9]); }
      h.tapis(g, i, {
        forme: [[0, 12, 42, 58], [0, -48, 26, 24], [0, -66, 9, 8], ...piq],
        motif(c, W, D) {
          const x = W / 2, y = D / 2;
          for (let k = 0; k < 160; k++) { const a = (k * 2.4) % 6.28, rr = 8 + (k % 9) * 4.5; c.strokeStyle = k % 2 ? '#5e402a' : '#8f6a48'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(x + Math.cos(a) * rr * 0.9, y + 14 + Math.sin(a) * rr * 1.2); c.lineTo(x + Math.cos(a) * (rr + 6) * 0.9, y + 14 + Math.sin(a) * (rr + 6) * 1.2); c.stroke(); }
          ovale(c, x, y - 46, 27, 25, '#e8d6b8'); ovale(c, x, y - 66, 9, 8, '#e8d6b8');
          ovale(c, x, y - 72, 3.5, 3, '#2a1d14'); ovale(c, x - 9, y - 52, 2.4, 2.4, '#2a1d14'); ovale(c, x + 9, y - 52, 2.4, 2.4, '#2a1d14');
          ovale(c, x - 15, y - 40, 4, 2.6, '#e6a7a0'); ovale(c, x + 15, y - 40, 4, 2.6, '#e6a7a0');
        } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-sandlopare', name: 'SANDLÖPARE tapis rond serpent Ø100', w: 100, d: 100, h: 0.5, color: '#c7a67e', prix: 24.99,
    lien: 'https://www.ikea.com/fr/fr/p/sandloepare-tapis-tisse-a-plat-brun-clair-motif-serpent-20603231/', note: 'Coton tissé à plat. Pose-le sur une sous-couche antidérapante.',
    build(g, i, h) {
      h.tapis(g, i, { forme: 'rond', poil: 'plat', motif(c, W, D) {
        c.strokeStyle = '#e9dcc4'; c.lineWidth = 2; c.beginPath(); c.ellipse(W / 2, D / 2, W / 2 - 4, D / 2 - 4, 0, 0, 6.2832); c.stroke();
        c.strokeStyle = '#5f7a4a'; c.lineWidth = 7; c.lineCap = 'round';
        c.beginPath(); c.moveTo(22, 70); c.bezierCurveTo(30, 40, 46, 82, 54, 52); c.bezierCurveTo(60, 30, 76, 46, 74, 30); c.stroke();
        c.strokeStyle = '#86a06a'; c.lineWidth = 2; c.setLineDash([2, 3]); c.stroke(); c.setLineDash([]);
        ovale(c, 75, 27, 5.5, 4.5, '#5f7a4a'); ovale(c, 77, 25, 0.9, 0.9, '#1d1d1d');
      } });
    } }));
})();
