// NISSEDAL miroir
(function () {
  function build(g, i, h) {
    const { B, mirrorPane } = h;
    const { w: W, d: D, h: H, color: c } = i, cadre = 3.4;
    [-1, 1].forEach(a => { B(g, cadre, H, D, a * (W / 2 - cadre / 2), 0, 0, c); });
    [0, H - cadre].forEach(y => B(g, W - cadre * 2, cadre, D, 0, y, 0, c));
    B(g, W - cadre * 2, H - cadre * 2, 0.4, 0, cadre, -D / 2 + 0.3, '#333');
    mirrorPane(g, W - cadre * 2, H - cadre * 2, 0, cadre, D / 2 - 1);
  }
  Chambre.meuble({ key: 'nissedal', prix: 59.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Noir', hex: '#222426' }, { nom: 'Effet chêne blanchi', hex: '#dccfb9', matiere: 'chene' }, { nom: 'Motif noyer', hex: '#6e4c34', matiere: 'chene' }], name: 'NISSEDAL miroir', w: 65, d: 3, h: 150, y: 40, color: '#f3f2ee', matiere: 'laque', wall: true, movable: true, noCheck: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/nissedal-miroir-blanc-10320317/', note: 'Film de sécurité au dos d’après la fiche. Se pose en hauteur ou en largeur. À fixer solidement au mur, jamais posé au sol.', build });
})();
