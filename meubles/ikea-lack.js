// LACK table d’appoint
(function () {
  function build(g, i, h) {
    const { B, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, top = 5, leg = 5;
    plateau(g, W, D, top, 0, H - top, 0, c, { rayon: 0.5, chant: 0.3 });
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, leg, H - top, leg, a * (W / 2 - leg / 2 - 0.2), 0, b * (D / 2 - leg / 2 - 0.2), c));
  }
  Chambre.meuble({ key: 'lack', prix: 9.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Brun noir', hex: '#3b302a', matiere: 'chene' }, { nom: 'Effet chêne blanchi', hex: '#dccfb9', matiere: 'chene' }], name: 'LACK table d’appoint', w: 55, d: 55, h: 45, color: '#f3f2ee', matiere: 'laque', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/lack-table-dappoint-blanc-30449908/', note: 'Légère et pas chère : sert de table de chevet ou de petit plateau. Ses coins sont anguleux à hauteur de ta sœur.', build });
})();
