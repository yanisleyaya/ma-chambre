// SMÅSTAD armoire basse
(function () {
  function build(g, i, h) {
    const { B, shade, facade, poignee, matiere, penderie } = h;
    const { w: W, d: D, h: H, color: c } = i, base = 6, bois = '#dcc096';
    [-1, 1].forEach(a => B(g, 1.8, H, D - 2, a * (W / 2 - 0.9), 0, -1, c));
    B(g, W, 1.8, D - 2, 0, H - 1.8, -1, c);
    B(g, W - 3.6, H - base - 1.8, 1, 0, base, -D / 2 + 0.5, shade(c, 0.82));     // fond : l'armoire est creuse
    B(g, W - 4, base, D - 6, 0, 0, -1, shade(c, 0.4));
    B(g, W - 3.6, 1.6, D - 5, 0, base, -1.5, shade(c, 0.92));
    B(g, W - 3.6, 1.6, D - 5, 0, H - 26, -1.5, c);
    penderie(g, W - 3.6, 0, H - 31, -1, D - 4, { long: 55 });                     // habits d'enfant, plus courts
    const dy = base, dhh = H - dy - 1.8;
    const p = h.ouvrant(g, 'gauche', { x: -W / 2 + 1.8, y: dy, z: D / 2 });
    facade(p, W - 3.6, dhh, 0, dy, D / 2, c, { e: 1.7 });
    poignee(p, 'ronde', W / 2 - 7, dy + Math.min(dhh * 0.46, 48), D / 2, { color: bois, r: 2.2 });      // grosse poignée en bois, facile à attraper pour une petite main
    matiere(null);
    [0.2, 0.8].forEach(t => B(g, 0.3, 6, 0.4, -W / 2 + 1.9, dy + dhh * t, D / 2 + 0.02, '#aeb0b2', 0.3, 0.8));   // charnières
  }
  Chambre.meuble({ key: 'smastad-123', prix: 153, name: 'SMÅSTAD armoire basse', w: 60, d: 57, h: 123, color: '#f3f2ee', matiere: 'laque', marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/smastad-platsa-armoire-penderie-blanc-blanc-s89428273/', note: 'Assez basse pour qu’elle prenne ses habits seule. À fixer au mur.', build });
})();
