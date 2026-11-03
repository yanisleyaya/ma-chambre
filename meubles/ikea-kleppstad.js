// KLEPPSTAD armoires
(function () {
  function corps(g, h, i) {
    const { B, shade, penderie } = h;
    const { w: W, d: D, h: H, color: c } = i, t = 1.6, pl = 5;
    [-1, 1].forEach(a => B(g, t, H, D - 2, a * (W / 2 - t / 2), 0, -1, c));
    B(g, W, t, D - 2, 0, H - t, -1, c);
    B(g, W - t * 2, H - pl - t, 1, 0, pl, -D / 2 + 0.5, shade(c, 0.8));          // fond : l'armoire est creuse, on voit dedans en ouvrant
    B(g, W - t * 2, pl, D - 5, 0, 0, -2, shade(c, 0.5));
    B(g, W - t * 2, 1.6, D - 5, 0, pl, -2, shade(c, 0.92));
    B(g, W - t * 2, 1.6, D - 5, 0, H - 32, -2, c);                                // étagère du haut
    penderie(g, W - t * 2, 0, H - 38, -1, D - 4);
  }
  function battantes(g, i, h) {
    const { facade, tube } = h;
    const { w: W, d: D, h: H, color: c } = i, t = 1.6, pl = 5, dh = H - pl - t, pw = (W - t * 2) / 2;
    corps(g, h, i);
    [-1, 1].forEach(a => {
      const p = h.ouvrant(g, a < 0 ? 'gauche' : 'droite', { x: a * pw, y: pl, z: D / 2 });
      facade(p, pw, dh, a * pw / 2, pl, D / 2, c, { e: 1.6 });
      tube(p, [[a * 5, H * 0.4, D / 2], [a * 5, H * 0.4, D / 2 + 1.6], [a * 5, H * 0.42, D / 2 + 2.2], [a * 5, H * 0.52, D / 2 + 2.2], [a * 5, H * 0.54, D / 2 + 1.6], [a * 5, H * 0.54, D / 2]], 0.4, '#8a8d8f', 0.3, 0.85);
    });
  }
  function coulissantes(g, i, h) {
    const { B, shade, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, door = W / 2 + 1.2, alu = '#b8bbbc', pl = 5;
    corps(g, h, i);
    matiere(null);
    B(g, W - 3.2, 2, 4, 0, H - 3.6, D / 2 - 2, alu, 0.35, 0.85);
    B(g, W - 3.2, 1, 4, 0, pl - 1, D / 2 - 2, alu, 0.35, 0.85);
    matiere('laque');
    // la porte de derrière glisse vers la droite, celle de devant vers la gauche
    const arr = h.ouvrant(g, 'glisse', { x: -W / 4 + 0.6, z: D / 2 - 3, course: door - 6, sens: 1 });
    const av = h.ouvrant(g, 'glisse', { x: W / 4 - 0.6, z: D / 2 - 1, course: door - 6, sens: -1 });
    B(arr, door, H - pl - 3.6, 1.4, -W / 4 + 0.6, pl, D / 2 - 3, c);
    B(av, door, H - pl - 3.6, 1.4, W / 4 - 0.6, pl, D / 2 - 1, c);
    matiere(null);
    B(arr, 2.6, H - pl - 3.6, 0.5, -W / 4 + 0.6 - door / 2 + 2, pl, D / 2 - 2.2, shade(c, 0.86), 0.4);
    B(av, 2.6, H - pl - 3.6, 0.5, W / 4 - 0.6 + door / 2 - 2, pl, D / 2 - 0.2, shade(c, 0.86), 0.4);
  }
  const f = { color: '#f2f1ed', matiere: 'laque', marque: 'IKEA' };
  Chambre.meuble(Object.assign({}, f, { key: 'kleppstad-79', prix: 99.99, name: 'KLEPPSTAD armoire 2 portes', w: 79, d: 55, h: 176, lien: 'https://www.ikea.com/fr/fr/p/kleppstad-armoire-2-portes-blanc-80437234/', note: 'Armoire simple et peu chère. À fixer au mur.', build: battantes }));
  Chambre.meuble(Object.assign({}, f, { key: 'kleppstad-117', prix: 199, name: 'KLEPPSTAD armoire coulissante', w: 117, d: 55, h: 176, lien: 'https://www.ikea.com/fr/fr/p/kleppstad-armoire-a-portes-coulissantes-blanc-90437238/', note: 'Portes coulissantes : aucun besoin de place devant, utile dans ta chambre étroite. À fixer au mur.', build: coulissantes }));
})();
