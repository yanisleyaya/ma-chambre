// PAX / AULI armoire à portes miroir coulissantes
(function () {
  function build(g0, i, h) {
    let g = g0;
    const { B, shade, mirrorPane, matiere, penderie } = h;
    const { w: W, d: D, h: H, color: c } = i, door = W / 2 + 1.5, alu = '#c3c6c7', rail = 6, t = 2;
    [-1, 1].forEach(a => B(g, t, H, D - rail, a * (W / 2 - t / 2), 0, -rail / 2, c));
    B(g, W, t, D - rail, 0, H - t, -rail / 2, c);
    B(g, W - 2 * t, H - 7, 1, 0, 5, -D / 2 + 0.5, shade(c, 0.8));                   // fond : l'armoire est creuse
    B(g, t, H - 7, D - rail - 2, 0, 5, -rail / 2 - 1, c);                            // séparation au milieu
    [-1, 1].forEach(a => {
      const x = a * (W / 4 - t / 4), w = W / 2 - t * 1.5;
      B(g, w, 1.8, D - rail - 2, x, H - 36, -rail / 2 - 1, c);
      penderie(g, w, x, H - 42, -rail / 2 - 1, D - rail - 2);
      if (a > 0) penderie(g, w, x, H / 2 - 20, -rail / 2 - 1, D - rail - 2, { long: 60 });     // deux tringles d'un côté
    });
    B(g, W, 5, D - rail, 0, 0, -rail / 2, shade(c, 0.9));
    matiere(null);
    B(g, W, 3.4, rail, 0, H - 3.4, D / 2 - rail / 2, alu, 0.35, 0.85);
    B(g, W, 1.4, rail, 0, 0, D / 2 - rail / 2, alu, 0.35, 0.85);
    [[-W / 4 + 0.75, D / 2 - 4.2, 1], [W / 4 - 0.75, D / 2 - 1.6, -1]].forEach(([x, z, sens]) => {
      g = h.ouvrant(g0, 'glisse', { x, z, course: door - 8, sens });        // derrière vers la droite, devant vers la gauche
      B(g, door, H - 6, 1, x, 2, z - 0.6, '#3a3d3e', 0.5);
      [-1, 1].forEach(a => B(g, 1.6, H - 5, 1.4, x + a * (door / 2 - 0.8), 1.6, z, alu, 0.3, 0.9));
      [1.6, H - 4.6].forEach(y => B(g, door, 1.4, 1.4, x, y, z, alu, 0.3, 0.9));
      mirrorPane(g, door - 3.2, H - 7.8, x, 3, z + 0.1);
    });
  }
  Chambre.meuble({ key: 'pax-auli', prix: 637, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Gris-beige', hex: '#b5ab9c' }], name: 'PAX / AULI armoire miroir', w: 150, d: 66, h: 236, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/pax-auli-armoire-pte-coul-blanc-miroir-s39561311/', note: 'Le vrai modèle le plus proche de ton armoire à miroir : elle entre en largeur dans ton renfoncement (161,5 cm) et dépasse de 10 cm en profondeur. À fixer au mur.', build });
})();
