// Série KULLEN : commodes économiques
(function () {
  function build(g, i, h) {
    const { B, facade, plateau, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, plinthe = 4, top = 1.6, zone = H - plinthe - top, t = 1.6;
    const cols = W > 100 ? 2 : 1, rows = W > 100 ? 3 : i.h > 100 ? 5 : 2, fw = (W - t * 2) / cols, dh = zone / rows;
    plateau(g, W, D, top, 0, H - top, 0, c, { rayon: 0.2, chant: 0.2 });
    [-1, 1].forEach(a => B(g, t, H - top, D, a * (W / 2 - t / 2), 0, 0, c));
    B(g, W - t * 2, plinthe, 1.5, 0, 0, D / 2 - 1.8, shade(c, 0.9));
    B(g, W - t * 2, zone, D - 3, 0, plinthe, -1, shade(c, 0.74));
    for (let x = 0; x < cols; x++) for (let k = 0; k < rows; k++) {
      facade(g, fw, dh, -W / 2 + t + fw * (x + 0.5), plinthe + k * dh, D / 2, c, { ouvre: 'tiroir', prof: D - 6, e: 1.6, poignee: 'barre', l: 10, r: 0.35, couleurPoignee: '#9c9fa1' });
    }
  }
  const f = { matiere: 'laque', color: '#f1f0ec', marque: 'IKEA', surf: true, build };
  Chambre.meuble(Object.assign({}, f, { key: 'kullen-2', prix: 35, color: '#3b302a', name: 'KULLEN commode 2 tiroirs', w: 35, d: 40, h: 49, lien: 'https://www.ikea.com/fr/fr/p/kullen-commode-2-tiroirs-brun-noir-60322130/', note: 'Sert aussi de table de chevet.' }));
  Chambre.meuble(Object.assign({}, f, { key: 'kullen-5', prix: 109, color: '#3b302a', name: 'KULLEN commode 5 tiroirs', w: 70, d: 40, h: 112, surf: false, lien: 'https://www.ikea.com/fr/fr/p/kullen-commode-5-tiroirs-brun-noir-40393661/', note: 'Étroite et haute : à fixer impérativement au mur.' }));
  Chambre.meuble(Object.assign({}, f, { key: 'kullen-6', prix: 149, color: '#3b302a', name: 'KULLEN commode 6 tiroirs', w: 140, d: 40, h: 72, lien: 'https://www.ikea.com/fr/fr/p/kullen-commode-6-tiroirs-brun-noir-00309235/', note: 'Basse et large : pratique sous une fenêtre. À fixer au mur.' }));
})();
