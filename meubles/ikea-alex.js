// ALEX caisson à tiroirs
(function () {
  function build(g, i, h) {
    const { B, facade, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, plinthe = 0, t = 2, zone = H - t;
    [-1, 1].forEach(a => B(g, t, H, D, a * (W / 2 - t / 2), 0, 0, c));
    B(g, W, t, D, 0, H - t, 0, c);
    B(g, W - t * 2, zone, D - 3, 0, plinthe, -1, shade(c, 0.72));
    const parts = [0.28, 0.28, 0.28, 0.16];        // trois grands tiroirs et un petit, comme sur la fiche
    let y = 0;
    parts.forEach(p => {
      const dh = zone * p;
      facade(g, W - t * 2, dh, 0, y, D / 2, c, { ouvre: 'tiroir', prof: D - 6, e: 1.6, poignee: 'fente', l: 11, hp: 1.2, yp: y + dh - 2.4 });
      y += dh;
    });
  }
  Chambre.meuble({ key: 'alex', prix: 99.99, couleurs: [{ nom: 'Blanc', hex: '#f3f2ee' }, { nom: 'Brun noir', hex: '#3b302a', matiere: 'chene' }, { nom: 'Gris foncé', hex: '#55585a' }, { nom: 'Teinté blanc et motif chêne', hex: '#e6dccb', matiere: 'chene' }], name: 'ALEX caisson à tiroirs', w: 36, d: 58, h: 70, color: '#f3f2ee', matiere: 'laque', surf: true, marque: 'IKEA', lien: 'https://www.ikea.com/fr/fr/p/alex-caisson-a-tiroirs-blanc-00473546/', note: 'Se glisse sous un plateau pour faire un bureau. Tient 12 kg au total.', build });
})();
