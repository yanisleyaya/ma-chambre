// Lits adultes IKEA 140×200 : MALM, SLATTUM, BRIMNES
(function () {
  function literie(g, h, W, D, top, zc, col, gr) {
    const { matiere, couette, oreiller, shade } = h;
    matiere('coton');
    couette(g, W, D * 0.72, 0, top + 4, zc + D * 0.13, col, { chute: 16, pied: 13, gonfle: 2.6, graine: gr });
    couette(g, W + 1, D * 0.12, 0, top + 7.4, zc + D * 0.13 - D * 0.36 + D * 0.06, shade(col, 1.5), { chute: 15, pied: 0, gonfle: 0.6, graine: gr + 2, rond: 8 });
    const px = W * 0.25, pz = zc - D / 2 + 25;
    [-1, 1].forEach((a, k) => {
      oreiller(g, W * 0.46, 17, 42, a * px, top - 1, pz, '#f2f0ea', { penche: 0.44, tourne: -a * 0.04, graine: k + 2 });
      oreiller(g, W * 0.38, 14, 36, a * (px - 2), top + 3, pz + 12, shade(col, 0.82), { penche: 0.66, tourne: a * 0.1, graine: k + 6 });
    });
  }
  function malm(g, i, h) {
    const { B, matelas, panneau, shade, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, sous = 21, cadre = 38, tete = 4, mw = 140, md = 200, zc = tete / 2 + 0.5;
    panneau(g, W, H, tete, 0, 0, -D / 2, c, { rayon: 0.4, chant: 0.25 });
    [-1, 1].forEach(a => B(g, 2.2, cadre - sous, D - tete, a * (W / 2 - 1.1 - 1), sous, zc, c));
    B(g, W - 2, cadre - sous, 2.2, 0, sous, D / 2 - 1.1, c);
    matiere(null);
    [[-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1]].forEach(([a, b]) => B(g, 3, sous, 3, a * (W / 2 - 8), 0, zc + b * (D / 2 - 14), '#d8d6d0', 0.4));
    B(g, W - 8, 2, D - 12, 0, sous, zc, shade('#d9c8a8', 0.9));
    matelas(g, mw, 18, md - 2, 0, sous + 4, zc - 1, '#efece6');
    literie(g, h, mw, md - 2, sous + 22, zc - 1, '#9fb2bd', 3);
  }
  function slattum(g, i, h) {
    const { B, matelas, ruban, matiere, shade, pied } = h;
    const { w: W, d: D, h: H, color: c } = i, sol = 7, cadre = 33;
    // tête de lit et cadre entièrement rembourrés
    ruban(g, 0, [[sol, -D / 2 + 5], [H * 0.6, -D / 2 + 5], [H - 3, -D / 2 + 5.5]], W, 9, c, { rayon: 4 });
    [-1, 1].forEach(a => ruban(g, a * (W / 2 - 3.5), [[sol + (cadre - sol) / 2, -D / 2 + 8], [sol + (cadre - sol) / 2, D / 2 - 7]], 7, cadre - sol, c, { rayon: 3 }));
    ruban(g, 0, [[sol + (cadre - sol) / 2, D / 2 - 3.5], [sol + (cadre - sol) / 2 + 0.01, D / 2 - 3.4]], W, cadre - sol, c, { rayon: 3, pas: 2 });
    B(g, W - 8, 3, D - 12, 0, sol + 6, 0, shade(c, 0.6));
    matelas(g, 140, 18, 196, 0, sol + 9, 1, '#efece6');
    matiere('bois');
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 9), sol, b * (D / 2 - 9)], [a * (W / 2 - 8), 0, b * (D / 2 - 8)], 2, 1.6, '#2c2a28', 0.6));
    literie(g, h, 140, 194, sol + 27, 3, '#d9d2c4', 5);
  }
  function brimnes(g, i, h) {
    const { B, matelas, panneau, shade, matiere, facade } = h;
    const { w: W, d: D, h: H, color: c } = i, tiroir = 21, sol = 24;
    panneau(g, W, H, 3, 0, 0, -D / 2, c, { rayon: 1, chant: 0.4 });
    B(g, W, 22, 2.2, 0, 0, D / 2 - 1.1, c);
    [-1, 1].forEach(a => {
      B(g, 2.2, sol, D - 4, a * (W / 2 - 1.1), 0, 0, shade(c, 0.86));
      [-1, 1].forEach(s => {
        const w = D / 2 - 6, cote = new THREE.Group();          // repère tourné : son avant regarde le côté du lit
        cote.position.set(a * W / 200, 0, s * (D / 4 - 0.5) / 100); cote.rotation.y = a * Math.PI / 2; g.add(cote);
        facade(cote, w, tiroir, 0, 1.5, 1.3, c, { ouvre: 'tiroir', prof: Math.min(W / 2 - 8, 60), e: 1.6 });
      });
    });
    matiere(null);
    B(g, W - 6, 3, D - 6, 0, sol - 3, 0, '#c8b896', 0.8);
    matelas(g, 140, 18, 198, 0, sol, 1, '#efece6');
    literie(g, h, 140, 196, sol + 18, 2, '#b98f7c', 8);
  }
  Chambre.meuble({ key: 'malm-lit', prix: 199, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Brun noir', hex: '#3b302a', matiere: 'chene' }], surf: true, dessus: 49, name: 'MALM lit 140×200', w: 156, d: 209, h: 100, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/malm-cadre-de-lit-haut-blanc-s29931596/', note: '21 cm de vide dessous pour glisser des bacs. Occupe plus de la moitié de la largeur de ta chambre (269 cm). Sommier à lattes et matelas à part.', build: malm });
  Chambre.meuble({ key: 'slattum', prix: 99, surf: true, dessus: 40, name: 'SLATTUM lit rembourré 140×200', w: 144, d: 206, h: 85, color: '#4d5154', matiere: 'tissu', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/slattum-cadre-de-lit-matelasse-vissle-gris-fonce-00571245/', note: 'Sans angles durs : le plus doux si ta sœur court autour du lit.', build: slattum });
  Chambre.meuble({ key: 'brimnes-lit', prix: 199, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Gris', hex: '#8b8d8e' }], surf: true, dessus: 48, name: 'BRIMNES lit à tiroirs 140×200', w: 146, d: 206, h: 47, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/brimnes-cadre-lit-avec-rangement-gris-s09590032/', note: 'Quatre tiroirs dessous : du rangement sans meuble en plus. Prévois de la place sur les côtés pour les ouvrir. Sommier à lattes et matelas à part.', build: brimnes });
})();
