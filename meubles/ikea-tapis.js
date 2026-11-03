// Tapis IKEA pour toute la chambre (prix relevés le 2 novembre 2026 sur ikea.com/fr)
(function () {
  const ovale = (c, x, y, rx, ry, col, a) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry || rx, a || 0, 0, 6.2832); c.fill(); };
  const cadre = (c, x, y, w, h, col, e) => { c.strokeStyle = col; c.lineWidth = e; c.strokeRect(x + e / 2, y + e / 2, w - e, h - e); };
  const losange = (c, x, y, rx, ry, col) => { c.fillStyle = col; c.beginPath(); c.moveTo(x, y - ry); c.lineTo(x + rx, y); c.lineTo(x, y + ry); c.lineTo(x - rx, y); c.closePath(); c.fill(); };
  // Un tapis uni n'est jamais parfaitement uni : légères nuances de fibres.
  const nuances = (c, W, D, r) => { c.save(); for (let k = 0; k < 140; k++) { c.globalAlpha = 0.025 + r() * 0.035; ovale(c, r() * W, r() * D, 3 + r() * 9, 2 + r() * 6, r() < 0.5 ? '#000' : '#fff', r() * 3); } c.restore(); };
  // Motif d'Orient délavé : bordures, médaillon, fleurettes, puis usure claire par endroits.
  const orient = (c, W, D, r, col) => {
    cadre(c, 4, 4, W - 8, D - 8, col.bord, 9);
    cadre(c, 15, 15, W - 30, D - 30, col.filet, 1.6);
    for (let x = 10; x < W - 6; x += 7) { losange(c, x, 8.5, 2.4, 3, col.fleur); losange(c, x, D - 8.5, 2.4, 3, col.fleur); }
    for (let y = 16; y < D - 12; y += 7) { losange(c, 8.5, y, 3, 2.4, col.fleur); losange(c, W - 8.5, y, 3, 2.4, col.fleur); }
    losange(c, W / 2, D / 2, W * 0.26, D * 0.22, col.medaillon);
    losange(c, W / 2, D / 2, W * 0.17, D * 0.14, col.coeur);
    losange(c, W / 2, D / 2, W * 0.07, D * 0.06, col.medaillon);
    [[0.25, 0.22], [0.75, 0.22], [0.25, 0.78], [0.75, 0.78]].forEach(([u, v]) => { losange(c, W * u, D * v, 9, 11, col.medaillon); losange(c, W * u, D * v, 4, 5, col.fleur); });
    for (let k = 0; k < 90; k++) ovale(c, 22 + r() * (W - 44), 22 + r() * (D - 44), 1.3, 1.3, k % 2 ? col.fleur : col.filet);
    c.save(); for (let k = 0; k < 40; k++) { c.globalAlpha = 0.12 + r() * 0.2; ovale(c, r() * W, r() * D, 8 + r() * 22, 3 + r() * 8, col.fond, r() * 3); } c.restore();
  };
  const f = { noCheck: true, noOmbre: true, marque: 'IKEA' };
  const antiderapant = 'Envers antidérapant.';

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-stoense', name: 'STOENSE tapis poils ras 133×195', w: 133, d: 195, h: 1.8, color: '#e8e2d6', prix: 59.99,
    couleurs: [{ nom: 'Blanc cassé', hex: '#e8e2d6' }, { nom: 'Beige', hex: '#cdbca3' }, { nom: 'Gris moyen', hex: '#8e8d8a' }, { nom: 'Gris foncé', hex: '#4f5051' }, { nom: 'Rose pâle', hex: '#e4c6c0' }, { nom: 'Vert pâle', hex: '#c3cdb5' }, { nom: 'Vert', hex: '#66805e' }],
    lien: 'https://www.ikea.com/fr/fr/p/stoense-tapis-poils-ras-blanc-casse-10425526/', note: 'Poils de 15 mm, épais et doux. ' + antiderapant,
    build(g, i, h) { const r = h.seeded(i.id + 1); h.tapis(g, i, { motif: (c, W, D) => nuances(c, W, D, r) }); } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-vaxelfel', name: 'VÄXELFEL tapis ondulé 133×195', w: 133, d: 195, h: 0.9, color: '#b98a2f', prix: 39.99,
    couleurs: [{ nom: 'Brun jaune', hex: '#b98a2f' }, { nom: 'Blanc cassé', hex: '#e4dccb' }, { nom: 'Bleu', hex: '#3f5c88' }],
    lien: 'https://www.ikea.com/fr/fr/p/vaexelfel-tapis-poils-ras-brun-jaune-60638714/', note: 'Vagues en relief. Polyester recyclé. ' + antiderapant,
    build(g, i, h) {
      h.tapis(g, i, { motif(c, W, D) {
        c.lineWidth = 2.2;
        for (let y = -10, n = 0; y < D + 10; y += 6.5, n++) {
          c.strokeStyle = n % 2 ? h.shade(i.color, 0.86) : h.shade(i.color, 1.08);
          c.beginPath(); for (let x = 0; x <= W; x += 3) { const yy = y + Math.sin(x / 11 + n * 0.3) * 3.2; if (x) c.lineTo(x, yy); else c.moveTo(x, yy); } c.stroke();
        }
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-onsevig', name: 'ONSEVIG tapis vintage 133×195', w: 133, d: 195, h: 1.5, color: '#e6dccb', prix: 59.99,
    lien: 'https://www.ikea.com/fr/fr/p/onsevig-tapis-poils-ras-multicolore-90497072/', note: 'Motif oriental délavé, aspect ancien.',
    build(g, i, h) {
      const r = h.seeded(i.id + 2);
      h.tapis(g, i, { motif: (c, W, D) => orient(c, W, D, r, { fond: '#e6dccb', bord: '#5f7fa6', filet: '#d68a4c', fleur: '#e4b74e', medaillon: '#c46a4a', coeur: '#7a9cc0' }) });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-jarnvag', name: 'JÄRNVÄG tapis décoré 80×150', w: 80, d: 150, h: 1, color: '#e3d6c2', prix: 39.99,
    lien: 'https://www.ikea.com/fr/fr/p/jaernvaeg-tapis-poils-ras-motif-decoratif-rose-beige-80623066/', note: 'Descente de lit, motif d\'Orient aux tons pastel. ' + antiderapant,
    build(g, i, h) {
      const r = h.seeded(i.id + 3);
      h.tapis(g, i, { motif: (c, W, D) => orient(c, W, D, r, { fond: '#e3d6c2', bord: '#d9a3a0', filet: '#b8746e', fleur: '#c99a8c', medaillon: '#e2b4ae', coeur: '#f0e2d2' }) });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-markblamme', name: 'MARKBLÅMME tapis carreaux 160×230', w: 160, d: 230, h: 1, color: '#e2d3bd', prix: 119,
    lien: 'https://www.ikea.com/fr/fr/p/markblamme-tapis-poils-ras-multicolore-motif-carreaux-90625705/', note: 'Carreaux et rayures rouges et roses.',
    build(g, i, h) {
      h.tapis(g, i, { motif(c, W, D) {
        const s = 20;
        for (let x = 0; x < W; x += s) { c.globalAlpha = 0.55; c.fillStyle = (x / s) % 2 ? '#d98a8f' : '#c2463f'; c.fillRect(x + 6, 0, 8, D); }
        for (let y = 0; y < D; y += s) { c.fillStyle = (y / s) % 2 ? '#e6aeb0' : '#b5463e'; c.fillRect(0, y + 6, W, 8); }
        c.globalAlpha = 1;
        c.strokeStyle = '#8a3b33'; c.lineWidth = 0.6;
        for (let x = 0; x < W; x += s) { c.beginPath(); c.moveTo(x + 10, 0); c.lineTo(x + 10, D); c.stroke(); }
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-vollerslev', name: 'VOLLERSLEV tapis poils hauts 133×195', w: 133, d: 195, h: 2.9, color: '#ece8e0', prix: 99.95,
    lien: 'https://www.ikea.com/fr/fr/p/vollerslev-tapis-poils-hauts-blanc-70492570/', note: 'Poils hauts en relief, très doux pieds nus. ' + antiderapant,
    build(g, i, h) {
      h.tapis(g, i, { poil: 'hauts', motif(c, W, D) {
        c.strokeStyle = h.shade(i.color, 0.88); c.lineWidth = 2.4;
        for (let k = -D; k < W + D; k += 22) { c.beginPath(); c.moveTo(k, 0); c.lineTo(k + D * 0.7, D); c.stroke(); c.beginPath(); c.moveTo(k, 0); c.lineTo(k - D * 0.7, D); c.stroke(); }
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-arende', name: 'ÄRENDE tapis poils hauts 120×180', w: 120, d: 180, h: 3, color: '#979590', prix: 39.99,
    couleurs: [{ nom: 'Gris', hex: '#979590' }, { nom: 'Blanc cassé', hex: '#ebe4d6' }, { nom: 'Jaune', hex: '#e0b43c' }, { nom: 'Orange', hex: '#d6702c' }],
    lien: 'https://www.ikea.com/fr/fr/p/aerende-tapis-poils-hauts-gris-60605073/', note: 'Poils de 30 mm, résistants aux taches.',
    build(g, i, h) { const r = h.seeded(i.id + 4); h.tapis(g, i, { poil: 'hauts', motif: (c, W, D) => nuances(c, W, D, r) }); } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-toftlund', name: 'TOFTLUND tapis fausse fourrure 55×85', w: 55, d: 85, h: 2.5, color: '#e9b9bd', prix: 11.99,
    couleurs: [{ nom: 'Rose', hex: '#e9b9bd' }, { nom: 'Bleu', hex: '#a9c1dc' }, { nom: 'Blanc', hex: '#f1eee8' }, { nom: 'Gris', hex: '#a8a6a2' }],
    lien: 'https://www.ikea.com/fr/fr/p/toftlund-tapis-rose-70642800/', note: 'Petit tapis de chevet, lavable en machine. Glisse sur un sol lisse : ajoute un antidérapant STOPP.',
    build(g, i, h) { h.tapis(g, i, { poil: 'hauts', coin: 12 }); } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-tiphede', name: 'TIPHEDE tapis tissé à plat 120×180', w: 120, d: 180, h: 0.5, color: '#ddd2bd', prix: 9.99,
    lien: 'https://www.ikea.com/fr/fr/p/tiphede-tapis-tisse-a-plat-naturel-noir-40456757/', note: 'Coton, lavable en machine. Glisse sur un sol lisse : ajoute un antidérapant STOPP.',
    build(g, i, h) {
      h.tapis(g, i, { poil: 'plat', franges: 5, frange: '#e8dfcc', coin: 0.3, motif(c, W, D) {
        c.fillStyle = '#2b2926';
        [10, 16, D - 18, D - 12].forEach(y => c.fillRect(0, y, W, 2.4));
        for (let y = 26; y < D - 26; y += 9) for (let x = 6; x < W - 4; x += 9) c.fillRect(x, y, 4.5, 0.9);
      } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-lohals', name: 'LOHALS tapis jute 80×150', w: 80, d: 150, h: 0.6, color: '#c8ae86', prix: 34.99,
    lien: 'https://www.ikea.com/fr/fr/p/lohals-tapis-tisse-a-plat-naturel-20307481/', note: 'Jute tissé à plat, un peu rêche. Pose-le sur un antidérapant STOPP.',
    build(g, i, h) { h.tapis(g, i, { poil: 'plat', grain: 'jute', coin: 0.5 }); } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-strog', name: 'STRÖG tapis jute 155×220', w: 155, d: 220, h: 0.8, color: '#c4a77c', prix: 64.99,
    lien: 'https://www.ikea.com/fr/fr/p/stroeg-tapis-tisse-a-plat-naturel-70527051/', note: 'Jute tissé main. Pose-le sur un antidérapant STOPP.',
    build(g, i, h) {
      h.tapis(g, i, { poil: 'plat', grain: 'jute', coin: 0.5, motif(c, W, D) { cadre(c, 6, 6, W - 12, D - 12, h.shade(i.color, 0.85), 3); } });
    } }));

  Chambre.meuble(Object.assign({}, f, {
    key: 'ikea-kysing', name: 'KYSING tapis rond tressé Ø74', w: 74, d: 74, h: 0.8, color: '#b99e6d', prix: 19.99,
    lien: 'https://www.ikea.com/fr/fr/p/kysing-tapis-tresse-jonc-de-mer-noir-20353086/', note: 'Jonc de mer tressé main. L\'envers ne retient pas : ajoute un antidérapant STOPP.',
    build(g, i, h) {
      h.tapis(g, i, { forme: 'rond', poil: 'plat', grain: 'jute', motif(c, W, D) {
        for (let rr = 2.5, n = 0; rr < W / 2; rr += 2.5, n++) {
          c.strokeStyle = [8, 9, 13].includes(n) ? '#2a2724' : n % 2 ? h.shade(i.color, 0.88) : h.shade(i.color, 1.06);
          c.lineWidth = 2.2; c.beginPath(); c.arc(W / 2, D / 2, rr, 0, 6.2832); c.stroke();
        }
      } });
    } }));
})();
