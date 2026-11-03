// Tout le rayon chambre d'IKEA France (relevé le 2 novembre 2026) : lits, canapés-lits, armoires et penderies,
// commodes, tables de chevet, miroirs et rangements sous le lit.
// Un modèle 3D par type de meuble, aux cotes de chaque fiche. Les données sont en bas du fichier ;
// les meubles dessinés à la main (MALM lit, BRIMNES, KULLEN…) gardent leur propre fichier.
(function () {
  const DONNEES = [
    ["lit","BRIMNES","Cadre lit avec rangement, blanc/Lönset","160x200 cm",166,206,111,359,"s49018739","Gris",{"ht":111,"hp":47,"mw":160,"ml":200}],
    ["lit","MALM","Cadre de lit haut, blanc/Luröy","140x190 cm",156,199,100,249,"s69598332","Brun noir|Plaqué chêne blanchi",{"ht":100,"hp":38,"hs":21,"mw":140,"ml":190}],
    ["lit","NEIDEN","Cadre de lit, pin","140x200 cm",144,205,65,69,"70395239","",{"ht":65,"hp":30,"hs":20,"mw":140,"ml":200}],
    ["lit","MALM","Cadre lit coffre, blanc","140x200 cm",155,210,100,549,"90404799","Brun noir|Plaqué chêne blanchi",{"ht":100,"hp":38,"mw":140,"ml":200}],
    ["lit","MANDAL","Cadre lit avec rangement, bouleau/blanc","160x200 cm",160,202,27,399,"90280483","Bouleau/gris",{"mw":160,"ml":200}],
    ["lit","RAMNEFJÄLL","Cadre de lit matelassé, Idekulla beige","140x200 cm",150,210,100,199,"s39627208","Kilanda bleu foncé|Klovsta gris/blanc",{"ht":100,"hp":43,"mw":140,"ml":200}],
    ["lit","BRIMNES","Lit banquette 2 places (structure), blanc","80x200 cm",87,205,58,299,"00228705","Gris",{"mw":80,"ml":200}],
    ["lit","VIHALS","Cadre de lit+2boîtes de rangement, blanc/Luröy","140x200 cm",146,206,66,264,"s99581976","",{"ht":66,"hp":41,"mw":140,"ml":200}],
    ["lit","HEMNES","Lit banquette 2 places (structure), blanc","80x200 cm",89,209,83,399,"90349326","Gris|Gris vert",{"mw":80,"ml":200}],
    ["lit","MALM","Cadre de lit, haut, 2 rangements, blanc/Lönset","160x200 cm",176,209,100,424,"s79176082","Brun noir",{"ht":100,"hp":38,"mw":160,"ml":200}],
    ["lit","MANDAL","Structure lit avec tête de lit, bouleau/blanc","160x200 cm",160,202,95,599,"s89094948","Bouleau/gris",{"mw":160,"ml":200,"est":1}],
    ["lit","KLEPPSTAD","Cadre de lit, blanc/Vissle beige","140x200 cm",146,207,86,149,"00492677","",{"hp":27,"hs":20,"mw":140,"ml":200}],
    ["lit","BRIMNES","Cadre de lit+rangement/tête de lit, blanc/Lönset","160x200 cm",166,234,111,469,"s69157456","Gris",{"mw":160,"ml":200}],
    ["lit","BRIMNES","Cadre lit avec rangement, blanc","90x200 cm",96,206,47,149,"20400691","",{"mw":90,"ml":200}],
    ["lit","VEVELSTAD","Cadre de lit, blanc","140x200 cm",146,207,27,149,"00505528","",{"hp":27,"hs":20,"mw":140,"ml":200}],
    ["lit","STORKLINTA","Cadre de lit, blanc","140x200 cm",149,209,101,179,"00615541","Brun foncé motif chêne|Motif chêne",{"ht":101,"hp":39,"hs":20,"mw":140,"ml":200}],
    ["lit","NEIDEN","Cadre de lit, pin","90x200 cm",94,205,65,49,"40395245","",{"ht":65,"hp":30,"hs":20,"mw":90,"ml":200}],
    ["lit","VIHALS","Cadre de lit, blanc","140x200 cm",146,206,66,149,"20602439","",{"ht":66,"hp":41,"hs":26,"mw":140,"ml":200}],
    ["lit","TAXÅSKLINT","Cadre de lit, pin","140x200 cm",148,210,76,149,"60621520","",{"ht":76,"hp":39,"hs":25,"mw":140,"ml":200}],
    ["lit","RÅDMANSÖ","Cadre de lit, brun motif noyer","140x200 cm",148,220,40,249,"60599166","",{"hp":40,"mw":140,"ml":200}],
    ["lit","FÅGELFJÄLLET","Cadre de lit, blanc cassé","140x200 cm",152,207,101,199,"20607154","",{"ht":101,"hp":39,"hs":20,"mw":140,"ml":200}],
    ["lit","TARVA","Cadre de lit, pin","140x200 cm",148,209,92,129,"s89929232","Teinté blanc",{"ht":92,"hp":32,"mw":140,"ml":200}],
    ["lit","GULLABERG","Cadre de lit, blanc","140x200 cm",151,208,113,279,"00608121","Gris",{"ht":113,"hp":41,"hs":20,"mw":140,"ml":200}],
    ["lit","IDANÄS","Lit coffre matelassé, Naggen beige","160x200 cm",170,224,120,899,"70588087","Gunnared gris foncé",{"ht":120,"hp":39,"mw":160,"ml":200}],
    ["lit","SLATTUM","Cadre de lit matelassé, Vissle gris foncé","90x200 cm",94,206,85,79,"80571251","",{"ht":85,"hp":40,"mw":90,"ml":200}],
    ["lit","TONSTAD","Cadre lit avec rangement, plaqué chêne","160x200 cm",169,209,116,549,"40489135","Blanc cassé|Brun placage chêne teinte",{"ht":116,"hp":46,"mw":160,"ml":200}],
    ["lit","SLATTUM","Cadre de lit matelassé, Vissle gris foncé/housse de tête de lit incluse Öreryd gris/beige","140x200 cm",144,206,85,119,"s99613487","",{"ht":85,"hp":40,"mw":140,"ml":200}],
    ["lit","VIHALS","Cadre de lit + 1 lit gigogne, blanc/Luröy","90x200 cm",96,206,66,209.95,"s69582034","",{"ht":66,"hp":41,"mw":90,"ml":200}],
    ["lit","SLÄKT","Cadre lit av rangt+sommier à lattes, blanc","90x200 cm",96,206,89,389,"s29291956","",{"ht":89,"hp":71,"mw":90,"ml":200}],
    ["lit","STJÄRNÖ","Cadre de lit, anthracite","160x200 cm",168,209,135,219,"50570187","",{"ht":135,"hp":74,"hs":26,"mw":160,"ml":200}],
    ["lit","TÄRNKULLEN","Cadre de lit matelassé, Vissle beige/Luröy","160x200 cm",184,210,114,349,"s19564363","",{"ht":114,"hp":41,"mw":160,"ml":200}],
    ["lit","MANDAL","Cadre lit avec rangement, bouleau/blanc","120x200 cm",120,202,45,329,"10272076","Bouleau/gris",{"mw":120,"ml":200,"est":1}],
    ["lit","IDANÄS","Lit avec rangement matelassé, Naggen beige","160x200 cm",170,223,121,849,"30588094","Gunnared gris foncé",{"ht":121,"hp":49,"mw":160,"ml":200}],
    ["lit","MALM","Cadre lit, haut+4rgt, blanc/Lönset","160x200 cm",176,209,100,489,"s19019226","Brun noir",{"ht":100,"hp":38,"mw":160,"ml":200}],
    ["lit","FÅGELFJÄLLET","Cadre de lit+2boîtes de rangement, blanc cassé","140x200 cm",207,207,101,249,"s09630896","",{"ht":101,"hp":39,"mw":140,"ml":200}],
    ["lit","SONGESAND","Cadre de lit+2boîtes de rangement, blanc/Luröy","140x200 cm",207,206,153,299,"s89241242","",{"ht":95,"hp":41,"mw":140,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier tapissier, Valevåg mi-ferme/bleu clair blanc","160x200 cm",160,200,64,678,"s79611291","Gris foncé",{"mw":160,"ml":200}],
    ["lit","MALM","Cadre de lit haut, blanc","90x200 cm",105,209,100,149,"00249487","Brun noir",{"ht":100,"hp":38,"hs":21,"mw":90,"ml":200}],
    ["lit","VIHALS","Cadre de lit, blanc","90x200 cm",96,206,66,99.95,"40602424","",{"ht":66,"hp":41,"hs":26,"mw":90,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier tapissier, Valevåg ferme/bleu clair Kilanda bleu foncé","140x200 cm",140,200,64,588,"s99637737","Knisa beige clair|Tibbleby beige/gris",{"hs":20,"mw":140,"ml":200}],
    ["lit","TÄRNKULLEN","Cadre de lit matelassé, Kelinge beige/Luröy","160x200 cm",179,210,112,349,"s69608128","Tibbleby beige/gris",{"ht":112,"hp":41,"mw":160,"ml":200}],
    ["lit","SLÄKT","Structure lit av lit tiroir + rangt, blanc","90x200 cm",96,206,78,369,"s89227731","",{"ht":78,"hp":57,"mw":90,"ml":200}],
    ["lit","STORKLINTA","Cadre de lit+2boîtes de rangement, blanc","140x200 cm",149,209,101,239,"s19630805","Brun foncé motif chêne|Motif chêne",{"ht":101,"hp":39,"mw":140,"ml":200}],
    ["lit","SONGESAND","Cadre lit coffre, blanc","160x200 cm",173,208,94,599,"70443315","",{"ht":94,"hp":39,"mw":160,"ml":200}],
    ["lit","VIHALS","Cadre de lit+4boîtes de rangement, blanc/Luröy","140x200 cm",146,206,66,329,"s99581995","",{"ht":66,"hp":41,"mw":140,"ml":200}],
    ["lit","TONSTAD","Cadre de lit, plaqué chêne/Leirsund","140x200 cm",150,209,116,499,"s19577704","Blanc cassé",{"hp":47,"hs":23,"mw":140,"ml":200}],
    ["lit","BRIMNES","Lit banquette 2p (struct + matelas), blanc/Ågotnes ferme","80x200 cm",86,205,57,377,"s19497340","Gris",{"mw":80,"ml":200}],
    ["lit","VIHALS","Cadre de lit+2boîtes de rangement, blanc/Luröy","90x200 cm",96,206,66,194.95,"s59581983","",{"ht":66,"hp":41,"mw":90,"ml":200}],
    ["lit","FLEKKE","Lit banquette 2 places (structure), blanc","80x200 cm",91,207,86,379,"00320134","",{"mw":80,"ml":200}],
    ["lit","KURA","Lit réversible, blanc/pin","90x200 cm",99,209,116,189,"80253809","",{"hs":83,"mw":90,"ml":200}],
    ["lit","VIHALS","Cadre de lit + 1 lit gigogne, blanc/Luröy","140x200 cm",146,206,66,279,"s09582027","",{"ht":66,"hp":41,"mw":140,"ml":200}],
    ["lit","SMÅSTAD","Lit mezzanine, blanc blanc/avec bureau avec 4 tiroirs","90x200 cm",104,207,182,599,"s99428866","Blanc bleu/avec bureau avec 4 tiroirs|Blanc vert clair/avec bureau avec 4 tiroirs",{"hs":142,"mw":90,"ml":200}],
    ["lit","IDANÄS","Cadre lit avec rangement, blanc","160x200 cm",171,207,112,549,"30458870","Brun foncé teinté",{"ht":112,"hp":63,"mw":160,"ml":200}],
    ["lit","UTÅKER","Lit empilable, pin","80x200 cm",83,205,23,199,"00360484","",{"mw":80,"ml":200}],
    ["lit","RAMNEFJÄLL","Cadre de lit matelassé, Klovsta gris/blanc/Luröy","90x200 cm",104,210,100,159,"s79552753","",{"ht":100,"hp":43,"mw":90,"ml":200}],
    ["lit","NORDLI","Cadre lit avec rangement, blanc","140x200 cm",140,202,30,459,"40349847","",{"mw":140,"ml":200}],
    ["lit","SONGESAND","Cadre de lit, blanc","140x200 cm",153,207,95,199,"s39241225","",{"ht":95,"hp":41,"hs":20,"mw":140,"ml":200}],
    ["lit","STORKLINTA","Cadre de lit+4boîtes de rangement, motif chêne/Luröy","140x200 cm",149,209,101,349,"s69628555","Blanc|Brun foncé motif chêne",{"ht":101,"hp":39,"mw":140,"ml":200}],
    ["lit","TUFJORD","Cadre de lit matelassé, Tallmyra blanc/noir/Leirsund","160x200 cm",184,223,109,649,"s79555365","Tallmyra bleu noir",{"ht":109,"hp":38,"mw":160,"ml":200}],
    ["lit","IDANÄS","Cadre de lit, brun foncé/Luröy","140x200 cm",151,207,112,349,"s89392194","",{"ht":112,"hp":63,"mw":140,"ml":200}],
    ["lit","GLADSTAD","Lit matelassé av 2 rangements, Kabusa gris clair","160x200 cm",167,212,95,369,"s29406797","",{"ht":95,"hp":33,"mw":160,"ml":200}],
    ["lit","VEVELSTAD","Cadre de lit avec 2 têtes de lit, blanc/Tolkning rotin","160x200 cm",166,207,98,268.98,"s39441738","Blanc",{"ht":98,"hp":27,"hs":20,"mw":160,"ml":200}],
    ["lit","VEVELSTAD","Cadre de lit, blanc","90x200 cm",96,207,27,99.95,"40518270","",{"hp":27,"hs":20,"mw":90,"ml":200}],
    ["lit","FÅGELFJÄLLET","Cadre de lit+2 boîtes de rangement, blanc cassé","90x200 cm",102,207,101,199,"s99630892","",{"ht":101,"hp":39,"mw":90,"ml":200}],
    ["lit","STORKLINTA","Cadre de lit, motif chêne","90x190 cm",99,199,101,119,"00618262","Blanc|Brun foncé motif chêne",{"ht":101,"hp":39,"hs":20,"mw":90,"ml":190}],
    ["lit","TÄLLÅSEN","Cadre de lit matelassé, Kulsta beige clair","160x200 cm",175,213,107,279,"90564778","Kulsta gris vert",{"ht":107,"hp":38,"mw":160,"ml":200}],
    ["lit","LYNGÖR","Sommier tapissier, Valevåg ferme/bleu clair Knisa beige clair","160x200 cm",160,200,91,928,"s39639169","Tibbleby beige/gris",{"ht":91,"hs":20}],
    ["lit","FÅGELFJÄLLET","Cadre de lit, blanc cassé","90x200 cm",102,207,101,149,"50607162","",{"ht":101,"hp":39,"hs":20,"mw":90,"ml":200}],
    ["lit","FÅGELFJÄLLET","Cadre de lit+4boîtes de rangement, blanc cassé/Lönset","140x200 cm",152,207,101,399,"s19621090","",{"ht":101,"hp":39,"mw":140,"ml":200}],
    ["lit","VIHALS","Cadre de lit, 2 rgmts/1 lit-tiroir, blanc/Luröy","140x200 cm",146,206,66,344,"s69582010","",{"ht":66,"hp":41,"mw":140,"ml":200}],
    ["lit","STORÅ","Structure lit mezzanine, teinté blanc","140x200 cm",152,213,214,399,"70242086","",{"mw":140,"ml":200}],
    ["lit","MALM","Cadre de lit, haut, 2 rangements, blanc/Lönset","90x200 cm",105,209,100,274,"s89032738","Brun noir",{"ht":100,"hp":38,"mw":90,"ml":200}],
    ["lit","UTÅKER","Lit empilable avec 2 matelas, pin/Åfjäll mi-ferme","80x200 cm",83,205,23,378.98,"s89521515","",{"mw":80,"ml":200}],
    ["lit","GLADSTAD","Lit matelassé av 4 rgmts, Kabusa gris clair","160x200 cm",167,212,95,439,"s59407012","",{"ht":95,"hp":33,"mw":160,"ml":200}],
    ["lit","MALM","Cadre lit coffre, blanc","90x200 cm",106,209,100,449,"70404837","",{"ht":100,"hp":38,"mw":90,"ml":200}],
    ["lit","NORDLI","Cadre de lit+rangement/tête de lit, blanc","160x200 cm",240,202,114,689,"s69241422","",{"ht":114,"mw":160,"ml":200}],
    ["lit","VIHALS","Structure lit banquette, blanc","80x200 cm",86,206,75,119,"00595086","",{"mw":80,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier, Valevåg ferme/bleu clair blanc","90x200 cm",90,200,57,448,"s59611254","Gris foncé",{"mw":90,"ml":200}],
    ["lit","VIHALS","Structure divan avec lit gigogne, blanc","80x200 cm",86,206,75,199,"s09580537","",{"mw":80,"ml":200}],
    ["lit","TYSSEDAL","Cadre de lit, blanc","140x200 cm",147,210,140,339,"s69057522","",{"ht":140,"hp":44,"hs":20,"mw":140,"ml":200}],
    ["lit","SLÄKT","Cadre de lit avec sommier à lattes, blanc","90x200 cm",96,206,78,159,"s79227755","",{"ht":78,"hp":57,"hs":36,"mw":90,"ml":200}],
    ["lit","KLIPPUGGLA","Cadre lit avec rangement, blanc","90x200 cm",96,206,89,219,"s19627346","",{"ht":89,"hp":71,"mw":90,"ml":200}],
    ["lit","SNIGLAR","Lit bébé, hêtre","60x120 cm",66,124,80,59.99,"30248537","",0],
    ["lit","LYNGÖR","Lit/sommier, Vesteröy mi-ferme/bleu clair Tibbleby beige/gris","160x200 cm",160,200,40,658,"s69639605","Kilanda bleu foncé|Knisa beige clair",0],
    ["lit","GULLABERG","Cadre de lit+2boîtes de rangement, blanc/Luröy","140x200 cm",151,208,113,389,"s59614709","Gris",{"ht":113,"hp":41,"mw":140,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier tapissier, Vesteröy mi-ferme/bleu clair blanc","90x200 cm",90,200,53,308,"s89608943","Gris foncé",{"mw":90,"ml":200}],
    ["lit","HEMNES","Lit banquette 2p (struct + matelas), blanc/Ågotnes ferme","80x200 cm",89,209,83,477,"s79428117","Gris|Gris vert",{"mw":80,"ml":200}],
    ["lit","SONGESAND","Cadre de lit+4boîtes de rangement, blanc","140x200 cm",153,207,95,299,"s29241320","",{"ht":95,"hp":41,"mw":140,"ml":200}],
    ["lit","SNIGLAR","Cadre de lit avec sommier à lattes, hêtre","70x160 cm",77,165,57,79,"s19185433","",{"ht":57,"hp":36,"hs":22,"mw":70,"ml":160}],
    ["lit","GLAMBERGET","Lit extensible avec rangement, pin","80-160x200 cm",87,211,35,349,"60564845","",{"mw":80,"ml":200}],
    ["lit","VITARNA","Structure lit à baldaquin, blanc","140x200 cm",146,207,199,169,"60573680","",{"hp":27,"hs":20,"mw":140,"ml":200}],
    ["lit","SAGESUND","Cadre de lit matelassé, Gräsbo blanc","160x200 cm",166,223,100,389,"00559371","Diseröd brun",{"ht":100,"hp":42,"mw":160,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier tapissier, Valevåg ferme/bleu clair Tibbleby beige/gris","180x200 cm",180,200,111,933,"s29638194","Knisa beige clair",{"ht":91,"hs":20,"mw":180,"ml":200}],
    ["lit","GLADSTAD","Cadre de lit matelassé, Kabusa gris clair","160x200 cm",167,212,95,299,"80490453","",{"ht":95,"hp":33,"mw":160,"ml":200}],
    ["lit","MYDAL","Structure lits superposés, blanc","90x200 cm",97,206,157,249,"20467629","",{"mw":90,"ml":200}],
    ["lit","GULLABERG","Cadre de lit, blanc","90x200 cm",101,208,113,229,"70608066","Gris",{"ht":113,"hp":41,"hs":20,"mw":90,"ml":200}],
    ["canape","GRUNNARP","Canapé 3 places convertible, Gunnared beige","",232,89,87,579,"30583384","Gunnared brun-rose clair|Gunnared gris moyen",{"as":46}],
    ["lit","TUFFING","Structure lits superposés, gris foncé","90x200 cm",96.5,207,130.5,149,"00239233","",{"hs":14.5,"mw":90,"ml":200}],
    ["lit","VITVAL","Structure lit mezzanine, blanc/gris clair","90x200 cm",97,207,195,359,"10411242","",{"hs":151,"mw":90,"ml":200}],
    ["lit","VIHALS","Structure divan avec rangement, blanc","80x200 cm",86,206,70,184,"s89571586","",{"mw":80,"ml":200,"est":1}],
    ["lit","STORKLINTA","Cadre de lit+2boîtes de rangement, motif chêne/Leirsund","90x200 cm",99,209,101,279,"s99628356","Blanc|Brun foncé motif chêne",{"ht":101,"hp":39,"mw":90,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier, Valevåg mi-ferme/bleu clair blanc","160x200 cm",160,200,64,768,"s89611337","Gris foncé",{"mw":160,"ml":200}],
    ["lit","SLÄKT","Cadre de lit + 3 boîtes rangement, blanc","90x200 cm",96,206,78,369,"s89386070","",{"ht":78,"hp":57,"mw":90,"ml":200}],
    ["lit","VIHALS","Lit gigogne, blanc","80x200 cm",86,206,25,80,"60595111","",{"mw":80,"ml":200}],
    ["lit","SUNDVIK","Cadre de lit ext av sommier lattes, blanc","80x200 cm",92,206,81,229,"s09046070","Gris",{"ht":81,"hp":66,"mw":80,"ml":200}],
    ["lit","BJÖRKSNÄS","Cadre de lit, bouleau/plaqué bouleau/Luröy","160x200 cm",180,214,109,489,"s29501695","",{"ht":109,"hp":55,"hs":24,"mw":160,"ml":200}],
    ["lit","FLEKKE","Lit banquette 2p (struct + matelas), blanc/Åfjäll mi-ferme","80x200 cm",91,207,86,558.98,"s79521455","",{"mw":80,"ml":200}],
    ["lit","KRITTER","Cadre de lit avec sommier à lattes, blanc","70x160 cm",75,165,68,129,"s69185435","",{"ht":68,"hp":48,"hs":22,"mw":70,"ml":160}],
    ["canape","LYCKSELE LÖVÅS","Canapé 2 places convertible, Ransta naturel","",142,100,87,349,"s99387007","Grindtorp multicolore|Knisa gris clair|Vansbro gris foncé|Vansbro jaune",{"as":39}],
    ["lit","NORRUDDEN","Lit d'appoint, noir","80x193 cm",80,193,30,129,"90531354","",0],
    ["lit","VIHALS","Struct divan av lit gigogne/2 mat, blanc/Ågotnes ferme","80x200 cm",86,206,70,277,"s69580638","",{"mw":80,"ml":200,"est":1}],
    ["lit","SMYGA","Cadre de lit, gris clair","90x200 cm",97,208,93,199,"60480780","",{"ht":93,"hp":68,"mw":90,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier tapissier, Valevåg ferme/extra ferme/bleu clair gris foncé","160x200 cm",160,200,57,687,"s49611117","Blanc",{"mw":160,"ml":200}],
    ["lit","MINNEN","Cadre de lit ext av sommier lattes, blanc","80x200 cm",86,206,92,159,"s99124619","Bleu gris|Rose clair",{"ht":92,"hp":72,"hs":22,"mw":80,"ml":200}],
    ["lit","SMÅGÖRA","Lit bébé, blanc","60x120 cm",66,124,79,129,"50461230","",0],
    ["lit","MYDAL","Structure lits superposés, pin","90x200 cm",97,206,157,249,"00102452","",{"hs":20,"mw":90,"ml":200}],
    ["lit","TUFFING","Structure lit mezzanine, gris foncé","90x200 cm",97,208,179,149,"90299449","",{"hs":145,"mw":90,"ml":200}],
    ["lit","SLÄKT","Cadre lit avec rangement, tête de lit incluse/Vissle beige","90x200 cm",96,206,106,459,"s69612045","",{"ht":106,"hp":71,"mw":90,"ml":200}],
    ["lit","VEVELSTAD","Cadre de lit avec 1 tête de lit, blanc/Tolkning rotin","90x200 cm",96,207,98,149.94,"s99441778","",{"ht":98,"hp":27,"hs":20,"mw":90,"ml":200}],
    ["lit","VITVAL","Structure lits superposés, blanc/gris clair","90x200 cm",97,207,162,379,"80411272","",{"hs":23,"mw":90,"ml":200}],
    ["lit","LYNGÖR","Lit/sommier, Valevåg ferme/extra ferme/bleu clair gris foncé","180x200 cm",180,200,64,937,"s99611271","Blanc",{"mw":180,"ml":200}],
    ["lit","GLAMBERGET","Cadre de lit av rangt et matelas, pin/Vesteröy mi-ferme","90x200 cm",87,211,35,508,"s29568474","",{"mw":90,"ml":200}],
    ["canape","VIMLE","Convertible 3 places + méridienne, Knäbäck gris vert","",271,98,83,1649,"s99631938","Gunnared beige|Gunnared gris moyen|Kelinge beige|Kelinge bleu foncé|Kelinge gris turquoise|Avec méridienne/Hillared bleu foncé|Knäbäck anthracite|Knäbäck beige clair",{"as":48}],
    ["lit","SMYGA","Cadre lit avec rangement, gris clair","90x200 cm",97,208,93,289,"s59444142","",{"ht":93,"hp":68,"mw":90,"ml":200}],
    ["lit","GULLABERG","Cadre de lit+4boîtes de rangement, blanc/Lönset","140x200 cm",151,208,113,499,"s69614742","Gris",{"ht":113,"hp":41,"mw":140,"ml":200}],
    ["lit","MALM","Cadre de lit avec matelas, blanc/Vesteröy mi-ferme","90x200 cm",105,209,100,338,"s59544641","Brun noir|Plaqué chêne blanchi",{"ht":100,"hp":38,"hs":21,"mw":90,"ml":200}],
    ["lit","KLIPPUGGLA","Cadre lit avec rangement, blanc/barrière de sécurité incluse","90x200 cm",96,206,53,239,"s09627827","",{"ht":53,"hp":53,"mw":90,"ml":200}],
    ["lit","VIHALS","Lit banquette av 1 matelas, blanc/Ågotnes ferme","80x200 cm",86,206,70,158,"s19580565","",{"mw":80,"ml":200,"est":1}],
    ["lit","SLÄKT / NATTAPA","Struct lit barrière+sommier lattes, blanc","90x200 cm",96,206,78,179,"s69563889","",{"ht":78,"hp":57,"hs":36,"mw":90,"ml":200}],
    ["canape","TORNSBORG","Fauteuil convertible, Naggen beige/pin","",84,95,82,299,"50582411","",{"as":38}],
    ["canape","LYCKSELE MURBO","Canapé 2 places convertible, Ransta naturel","",142,100,87,399,"s49387019","Grindtorp multicolore|Knisa gris clair|Vansbro gris foncé|Vansbro jaune",{"as":39}],
    ["canape","KIVIK","Canapé convertible 1 place, Tibbleby beige/gris","",90,97,86,449,"s39470231","Kelinge gris turquoise|Tresund anthracite|Tresund beige clair|Gunnared beige|Gunnared bleu|Gunnared brun-rose clair|Gunnared gris moyen|Gunnared vert clair",{"as":43}],
    ["canape","FRIHETEN","Convertible 3 places, Skiftebo gris foncé","",225,105,83,499,"50341148","Faringe brun orangé|Faringe gris clair|Bomstad noir",{"as":46}],
    ["lit","GLAMBERGET","Lit extensible+rangement/2 matelas, pin/Åfjäll ferme","80x200 cm",87,211,35,528.98,"s69568354","",{"mw":80,"ml":200}],
    ["canape","LINDÅKRA","Canapé 2 places convertible, Vissle gris foncé","",206,87,87,399,"20582610","Vissle gris-vert clair",{"as":43}],
    ["canape","VIMLE","Convertible 3 places + méridienne, av accoudoirs larges/Knäbäck beige clair","",285,98,83,1699,"s99631924","Av accoudoirs larges Gunnared/gris moyen|Av accoudoirs larges/Gunnared beige|Av accoudoirs larges/Kelinge beige|Av accoudoirs larges/Kelinge bleu foncé|Av accoudoirs larges/Kelinge gris turquoise|Av accoudoirs larges/Hillared bleu foncé|Av accoudoirs larges/Knäbäck anthracite|Av accoudoirs larges/Knäbäck gris vert",{"as":48}],
    ["canape","SKÖNABÄCK","Canapé 2 places convertible, Knisa gris foncé","",158,75,74,299,"70582542","Vissle jaune vert",{"as":39}],
    ["lit","VIHALS","Lit banquette+rangement/1 matelas, blanc/Ågotnes ferme","80x200 cm",86,206,70,223,"s19580594","",{"mw":80,"ml":200,"est":1}],
    ["canape","SALTSJÖBADEN","Canapé 2 places convertible, Vittangi beige clair/blanc","",185,105,100,749,"s59621432","Blekinge blanc|Tonerud brun-rouge|Tonerud gris|Fridtuna beige clair|Fridtuna jaune|Gunnared beige|Gunnared gris moyen|Gunnared vert clair",{"as":46}],
    ["canape","HAMMARN","Convertible, Knisa gris foncé/noir","",128,85,78,99.95,"90354327","",{"as":38}],
    ["canape","VIMLE","Canapé 2 places convertible, Johanneshov brun-beige","",190,98,83,1249,"s19631975","Hallarp beige|Hallarp gris|Gunnared beige|Gunnared gris moyen|Kelinge beige|Kelinge bleu foncé|Kelinge gris turquoise|Hillared bleu foncé",{"as":48}],
    ["lit","SLÄKT","Lit tiroir rangement, blanc","90x200 cm",95,201,38,210,"s99239451","",{"mw":90,"ml":200}],
    ["lit","SMÅSTAD","Cadre lit mezz + plateau/rangt, blanc","90x200 cm",205,104,182,476,"50454036","",{"hs":142,"mw":90,"ml":200}],
    ["canape","VIMLE","Canapé 3 places convertible, Johanneshov brun-beige","",261,98,83,1488,"s59631884","Gunnared beige|Gunnared gris moyen|Kelinge beige|Kelinge bleu foncé|Kelinge gris turquoise|Hillared bleu foncé|Knäbäck anthracite|Knäbäck beige clair",{"as":48}],
    ["canape","TORNSBORG","Canapé 2 places convertible, Naggen beige/pin","",154,95,82,399,"90584658","",{"as":38}],
    ["canape","FRIDHULT","Convertible, Knisa gris clair","",126,76,73,249,"70351725","Skiftebo jaune",{"as":37}],
    ["canape","DÅNHULT","Canapé 3 places convertible, Silkeryd rouille","",222,96,78,599,"70629950","Silkeryd beige-gris foncé|Kelinge gris turquoise",{"as":46}],
    ["canape","ÄLVDALEN","Convertible 3 places + méridienne, Knisa gris-beige","",196,82,81,499,"10530669","Knisa gris foncé",{"as":42}],
    ["lit","TONSTAD","Cadre lit avec rangement, plaqué chêne","90x200 cm",99,209,116,379,"20489141","Blanc cassé|Brun placage chêne teinte",{"ht":116,"hp":46,"mw":90,"ml":200}],
    ["lit","ÄLSKVÄRD","Lit bébé, bouleau/blanc","60x120 cm",65,126,93,299,"50314809","",{"mw":60,"ml":120}],
    ["canape","FRIHETEN","Canapé convertible angle+rangement, Skiftebo gris foncé","",230,151,86,549,"s39216754","Faringe brun orangé|Faringe gris clair|Bomstad noir",0],
    ["canape","IKEA PS 2026","Chauffeuse convertible, Skiftebo orange vif","",80,85,75,249,"60620375","Skiftebo beige-gris clair",{"as":41}],
    ["canape","VIMLE","Can conv d'angle 5p + méridienne, Grann/Bomstad noir","",349,98,83,3449,"s79477377","",{"as":48}],
    ["canape","VIMLE","Can conv d'angle 5p + méridienne, av accoudoirs larges/Gunnared gris moyen","",356,98,83,2549,"s69545249","Av accoudoirs larges/Gunnared beige|Av accoudoirs larges/Hillared bleu foncé|Av accoudoirs larges/Lejde gris/noir|Av accoudoirs larges/Djuparp gris foncé",{"as":48}],
    ["lit","MYLLRA","Lit bébé avec tiroir, blanc","60x120 cm",70,124,97,399,"90483584","Beige",{"mw":60,"ml":120}],
    ["lit","SUNDVIK","Lit bébé, blanc","60x120 cm",67,125,85,199,"00248567","",0],
    ["canape","VRETSTORP","Canapé 3 places convertible, Kilanda beige clair","",244,96,91,849,"s79491236","Hakebo gris foncé|Hakebo gris vert|Kilanda bleu foncé|Karlshov gris-beige",{"as":46}],
    ["lit","GONATT","Lit bébé avec tiroir, blanc","60x120 cm",66,123,107,249,"30467092","",{"mw":60,"ml":120}],
    ["canape","SALTSJÖBADEN","Convertible 3 places + méridienne, Tonerud gris","",234,153,86,949,"s89579219","Blekinge blanc|Vittangi beige clair/blanc|Tonerud brun-rouge|Fridtuna beige clair|Fridtuna jaune|Gunnared beige|Gunnared gris moyen|Gunnared vert clair",{"as":47}],
    ["canape","FRIHETEN / KLAGSHAMN","Canapé convertible angle+rangement, Skiftebo gris foncé","",230,151,86,669,"s69444330","Faringe brun orangé|Faringe gris clair",0],
    ["canape","ÄLVDALEN","Canapé 3 places convertible, Knisa gris-beige","",194,82,81,399,"50530648","Knisa gris foncé",{"as":42}],
    ["canape","LYCKSELE LÖVÅS","Chauffeuse convertible, Ransta naturel","",80,100,87,249,"s59386967","Grindtorp multicolore|Knisa gris clair|Vansbro gris foncé|Vansbro jaune",{"as":39}],
    ["lit","GULLIVER","Lit bébé, blanc","60x120 cm",66,124,80,149,"50248522","",{"mw":60,"ml":120}],
    ["canape","GRÄLVIKEN","Canapé 3 places convertible, gris foncé","",225,93,89,599,"40445392","",{"as":43}],
    ["canape","LYCKSELE MURBO","Chauffeuse convertible, Ransta naturel","",80,100,87,299,"s99386970","Grindtorp multicolore|Knisa gris clair|Vansbro gris foncé|Vansbro jaune",{"as":39}],
    ["lit","VITVAL","Structure lit mezzanine+plateau, blanc/gris clair","90x200 cm",97,207,195,429,"s69302566","",{"hs":150,"mw":90,"ml":200}],
    ["canape","VIMLE","Canapé 2 places convertible, av accoudoirs larges/Johanneshov brun-beige","",204,98,83,1299,"s69631949","Av accoudoirs larges/Gunnared beige|Av accoudoirs larges/Gunnared gris moyen|Av accoudoirs larges/Kelinge beige|Av accoudoirs larges/Kelinge bleu foncé|Av accoudoirs larges/Kelinge gris turquoise|Av accoudoirs larges/Hillared bleu foncé|Av accoudoirs larges/Knäbäck anthracite|Av accoudoirs larges/Knäbäck beige clair",{"as":48}],
    ["canape","BÅRSLÖV","Convertible 3 places + méridienne, Tibbleby beige/gris","",236,153,90,799,"80541594","Tibbleby gris clair-turquoise",{"as":46}],
    ["canape","HYLTARP","Canapé 2 places convertible, Gransel naturel","",182,93,91,1149,"s29489603","Kilanda bleu pâle|Hallarp blanc|Gransel gris|Gransel gris brun|Tallmyra blanc/noir|Tallmyra bleu|Tallmyra vert foncé|Hemmesta beige clair",{"as":48}],
    ["canape","VIMLE","Canapé 3 places convertible, av accoudoirs larges/Gunnared gris moyen","",275,98,83,1408,"s99545257","Av accoudoirs larges/Gunnared beige|Av accoudoirs larges/Hillared bleu foncé|Av accoudoirs larges/Lejde gris/noir|Av accoudoirs larges/Djuparp gris foncé",{"as":48}],
    ["lit","GULLABERG","Cadre de lit+2boîtes de rangement, blanc/Leirsund","90x200 cm",101,208,113,389,"s79614690","Gris",{"ht":113,"hp":41,"mw":90,"ml":200}],
    ["canape","NYHAMN","Canapé 3 places convertible, avec matelas à ressorts ensachés/Knisa gris/beige","",200,97,90,429,"s89306361","",{"as":31}],
    ["canape","LANDSKRONA","Canapé 3 places convertible, Gunnared gris foncé/bois","",223,92,84,999,"s39491276","Gunnared gris foncé/métal|Gunnared vert clair/bois|Gunnared vert clair/métal",{"as":46}],
    ["canape","NYHAMN","Canapé 3 places convertible, avec matelas en mousse/Skartofta noir/gris clair","",200,97,90,399,"s99499991","Avec matelas en mousse/Knisa gris/beige|Avec matelas en mousse/Skartofta rouge/brun|Avec matelas à ressorts ensachés/Skartofta noir/gris clair|Avec matelas à ressorts ensachés/Skartofta rouge/brun",{"as":31}],
    ["lit","SLÄKT / NATTAPA","Struct lit av rgt+barrière+som latt, blanc","90x200 cm",96,206,89,409,"s89563911","",{"ht":89,"hp":71,"mw":90,"ml":200}],
    ["canape","BÅRSLÖV","Canapé 3 places convertible, Tibbleby beige/gris","",236,109,86,699,"80541589","Tibbleby gris clair-turquoise",{"as":46}],
    ["lit","SMÅSTAD","Lit mezzanine, blanc blanc/avec bureau avec 3 tiroirs","90x200 cm",104,207,182,589,"s59428873","Blanc bleu/avec bureau avec 3 tiroirs|Blanc vert clair/avec bureau avec 3 tiroirs",{"hs":142,"mw":90,"ml":200}],
    ["lit","VEVELSTAD","Cadre de lit avec 2 têtes de lit, blanc/Tolkning rotin","90x200 cm",96,207,98,199.93,"s79441802","",{"ht":98,"hp":27,"hs":20,"mw":90,"ml":200}],
    ["lit","SMÅSTAD","Lit mezzanine, blanc blanc/avec bureau avec 2 tablettes","90x200 cm",104,207,182,608,"s89520158","",{"hs":142,"mw":90,"ml":200}],
    ["lit","GRYSNA","Cadre de lit matelassé, Vissle beige/multicolore","90x200 cm",96,208,110,199,"s69628433","",{"ht":110,"hp":40,"mw":90,"ml":200}],
    ["lit","SLÄKT","Cadre de lit, accessoire pour lit inclus/gris","90x200 cm",96,206,150,209,"s99608419","",{"ht":150,"hp":57,"hs":36,"mw":90,"ml":200}],
    ["lit","GULLIVER","Lit bébé, vert","60x120 cm",66,124,80,149,"20589503","",0],
    ["canape","VIMLE","Can conv d'angle 5p + méridienne, Gunnared beige","",349,98,83,2499,"s69545225","Gunnared gris moyen|Avec méridienne/Hillared bleu foncé|Avec méridienne/Lejde gris/noir|Avec méridienne/Djuparp gris foncé",{"as":48}],
    ["lit","VITARNA","Structure lit à baldaquin, blanc/Skådis blanc","140x200 cm",146,207,95,243,"s09634696","Skådis bois|Skådis noir",{"hs":20,"mw":140,"ml":200,"est":1}],
    ["lit","SLÄKT","Cadre de lit, tête de lit incluse/Vissle beige","90x200 cm",96,206,106,229,"s99612039","",{"ht":106,"hp":57,"hs":36,"mw":90,"ml":200}],
    ["canape","IKEA PS 2026","Canapé 3 places convertible, Skiftebo beige-gris clair","",204,102,82,649,"20620344","",{"as":41}],
    ["lit","VEVELSTAD","Cadre de lit avec 3 têtes de lit, blanc/Tolkning rotin","90x200 cm",96,207,98,249.92,"s99441820","",{"ht":98,"hp":27,"hs":20,"mw":90,"ml":200}],
    ["canape","VIMLE","Canapé 2 places convertible, Grann/Bomstad noir","",190,98,83,1599,"s09477333","",{"as":48}],
    ["canape","VÅRKUMLA","Chauffeuse convertible, Vansta bleu","",91,90,81,279,"80587704","",{"as":43}],
    ["canape","EKHOLMA","Canapé 2 places convertible, Kilanda beige clair","",189,105,100,999,"s69598563","Kilanda brun-rouge|Kilanda gris brun|Hemmesta gris vert|Hemmesta gris-beige",{"as":46}],
    ["canape","VIMLE","Convertible 3 places + méridienne, av accoudoirs larges/Mosshed brun-rouge","",285,98,83,1849,"s09640838","",{"as":48}],
    ["canape","VIMLE","Convertible 3 places + méridienne, Grann/Bomstad noir","",271,98,83,2299,"s59477359","",{"as":48}],
    ["canape","VIMLE","Canapé 3 places convertible, Grann/Bomstad noir","",261,98,83,1899,"s89477372","",{"as":48}],
    ["armoire","BRIMNES","Armoire 3 portes, blanc","117x50x190 cm",117,50,190,199,"40407922","",0],
    ["armoire","KLEPPSTAD","Armoire 3 portes, blanc","117x55x176 cm",117,55,176,149,"00441758","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","120x62x201 cm",120,62,201,273,"s89603035","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","80x62x201 cm",80,62,201,104,"s89602875","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x62x201 cm",60,62,201,159,"s49603551","",0],
    ["armoire","RAKKESTAD","Armoire 3 portes, brun noir","117x176 cm",117,55,176,189,"70453762","",0],
    ["armoire","BRIMNES","Armoire 2 portes, blanc","78x50x190 cm",78,50,190,149,"40400478","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x42x201 cm",60,42,201,153,"s79613308","",0],
    ["armoire","PAX","Armoire-penderie, blanc","175x58x201 cm",175,58,201,408,"s49502632","",0],
    ["armoire","VISTHUS","Armoire-penderie, gris/blanc","122x59x216 cm",122,59,216,369,"90493446","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","80x62x237 cm",80,62,237,139,"s69602975","",0],
    ["armoire","VILHATTEN","Penderie avec 2 portes et 2 tiroirs, motif chêne","98x57x190 cm",98,57,190,189,"70530609","",0],
    ["armoire","PAX / HASVIK","Armoire-penderie, blanc/blanc","150x66x201 cm",150,66,201,414,"s79502796","",0],
    ["armoire","BRIMNES","Armoire 3 portes, gris","117x50x190 cm",117,50,190,199,"70602804","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","180x42x201 cm",180,42,201,378,"s19611821","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x42x101 cm",60,42,101,54,"s09613316","",0],
    ["armoire","SMÅSTAD / PLATSA","Armoire-penderie, blanc blanc/avec 3 tiroirs","60x57x181 cm",60,57,181,210,"s89428310","",0],
    ["armoire","PAX / BERGSBO","Armoire-penderie, blanc/blanc","100x60x201 cm",100,60,201,271,"s09503011","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,494,"s69502773","",0],
    ["armoire","RÅDMANSÖ","Armoire-penderie, brun motif noyer","118x64x190 cm",118,64,190,349,"70593606","",0],
    ["armoire","ANKARUDDEN","Armoire à portes coulissantes, motif chêne","98x60x190 cm",98,60,190,259,"50626250","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,434,"s69502768","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige gris-beige/motif chêne","185x60x236 cm",185,60,236,593,"s99607274","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x42x201 cm",60,42,201,132,"s79613469","",0],
    ["armoire","HAUGA","Armoire à portes coulissantes, blanc","118x55x199 cm",118,55,199,279,"60456916","",0],
    ["armoire","GULLABERG","Armoire-penderie, blanc","128x64x201 cm",128,64,201,399,"80609904","",0],
    ["armoire","FÅGELFJÄLLET","Armoire 2 portes, blanc cassé","82x60x194 cm",82,60,194,199,"40598610","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","250x60x201 cm",250,60,201,688,"s09502728","",0],
    ["armoire","SMÅSTAD / PLATSA","Armoire-penderie, blanc blanc/avec 3 tablettes","60x57x123 cm",60,57,123,146,"s49483313","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x62x201 cm",60,62,201,148,"s29602883","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","80x62x201 cm",80,62,201,235,"s89603422","",0],
    ["armoire","GURSKEN","Armoire-penderie, beige clair","49x55x186 cm",49,55,186,79.99,"20486326","",0],
    ["armoire","VIHALS","Armoire 2 portes, blanc","105x57x200 cm",105,57,200,279,"60483255","",0],
    ["armoire","PAX / HASVIK","Armoire-penderie, blanc/blanc","200x66x236 cm",200,66,236,554,"s19503162","",0],
    ["armoire","KRONÖREN","Armoire ouverte, pin","90x49x181 cm",90,49,181,59.99,"40610805","",0],
    ["armoire","NORDKISA","Armoire ouverte av porte couliss, bambou","120x186 cm",120,47,186,369,"00439468","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","120x62x237 cm",120,62,237,297,"s59602985","",0],
    ["armoire","PLATSA","Armoire avec 4 portes+3 tiroirs, blanc/Fonnes blanc","120x57x241 cm",120,57,241,517.5,"s39624912","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","160x42x201 cm",160,42,201,245,"s79603559","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,515,"s79503121","",0],
    ["armoire","PLATSA","Armoire 2 portes, blanc miroir en verre STRAUMEN/blanc FONNES","120x57x181 cm",120,57,181,355,"s69615341","",0],
    ["armoire","SONGESAND","Armoire, blanc","120x60x191 cm",120,60,191,239,"90347351","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige gris-beige/motif chêne","170x60x236 cm",170,60,236,614,"s89606915","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, blanc/miroir","150x60x201 cm",150,60,201,434,"s79553644","",0],
    ["armoire","RAKKESTAD","Armoire à portes coulissantes, brun noir","117x176 cm",117,55,176,239,"60453767","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/blanc","100x60x236 cm",100,60,236,242,"s59552787","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige/gris-beige","75x60x236 cm",75,60,236,253,"s99626244","",0],
    ["armoire","SMÅSTAD / PLATSA","Armoire-penderie, blanc blanc/avec 4 tiroirs","60x57x181 cm",60,57,181,204,"s69428325","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc double face/blanc miroir","200x66x236 cm",200,66,236,702,"s69561362","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige/gris-beige","150x60x201 cm",150,60,201,509,"s29562212","",0],
    ["armoire","PAX / HASVIK","Combinaison armoire, blanc/blanc","150x43x201 cm",150,43,201,449,"s79503003","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","50x51x70 cm",50,51,70,54,"s99297144","",0],
    ["armoire","BRIMNES","Armoire 2 portes, gris","78x50x190 cm",78,50,190,149,"90602803","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant/blanc","50x38x236 cm",50,38,236,180,"s79552772","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,619,"s99563086","",0],
    ["armoire","VISTHUS","Armoire-penderie, gris/blanc","63x59x216 cm",63,59,216,199,"70493447","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc/motif chêne","100x38x236 cm",100,38,236,312,"s49562616","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","250x60x236 cm",250,60,236,1053,"s79603347","",0],
    ["armoire","SUNDVIK","Armoire, blanc","80x50x171 cm",80,50,171,279,"10269696","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/gris-beige","100x38x236 cm",100,38,236,378,"s59603664","",0],
    ["armoire","PAX / MEHAMN","Combinaison armoire, blanc double face/blanc effet chêne blanchi","200x43x236 cm",200,43,236,699,"s29502614","",0],
    ["armoire","HAUGA","Armoire ouverte avec 3 tiroirs, blanc","70x199 cm",70,46,199,199,"40456922","Gris",0],
    ["armoire","PAX / VIKANES","Armoire-penderie, blanc/blanc","175x60x201 cm",175,60,201,608,"s69502645","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","150x58x236 cm",150,58,236,643,"s99603191","",0],
    ["armoire","PAX / AULI","Armoire pte coul, blanc/miroir","150x66x201 cm",150,66,201,578,"s99561351","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant/blanc","100x38x201 cm",100,38,201,280,"s59552773","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","180x42x201 cm",180,42,201,271,"s39612626","",0],
    ["armoire","PLATSA","Armoire avec 1 porte et 6 tiroirs, blanc Kalbåden/effet pin blanc FONNES","120x57x181 cm",120,57,181,363.5,"s19623744","",0],
    ["armoire","IDANÄS","Armoire-penderie, blanc","121x211 cm",121,59,211,399,"60458835","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris-beige/motif chêne","185x58x201 cm",185,58,201,578,"s39625068","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","100x60x201 cm",100,60,201,289,"s79562605","",0],
    ["armoire","SMÅSTAD","Armoire-penderie, blanc blanc/avec 2 tringles à vêtements","60x42x181 cm",60,42,181,162,"s49390875","",0],
    ["armoire","IDANÄS","Élément avec portes pliantes, blanc","121x135 cm",121,50,135,349,"20458823","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, blanc/miroir","50x38x236 cm",50,38,236,294.98,"s29590328","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","150x60x201 cm",150,60,201,574,"s89579295","",0],
    ["armoire","PAX / KAMMARTORP/GRIMO","Combinaison armoire, gris foncé miroir/gris gris vert","150x60x201 cm",150,60,201,568,"s49579259","",0],
    ["armoire","SMÅGÖRA","Armoire, blanc","80x50x187 cm",80,50,187,179,"10460888","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","200x60x236 cm",200,60,236,538,"s69503174","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige gris-beige/motif chêne","220x60x236 cm",220,60,236,728,"s29607060","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc/Fonnes blanc","180x57x241 cm",180,57,241,616,"s79624972","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc blanc/blanc","235x60x201 cm",235,60,201,818,"s79607294","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","60x42x201 cm",60,42,201,126,"s79603861","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","100x60x236 cm",100,60,236,284,"s49502665","",0],
    ["armoire","NORDKISA","Armoire ouverte av porte couliss, bambou","120x123 cm",120,47,123,279,"30439476","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris foncé noir/double face noyer","200x66x236 cm",200,66,236,838,"s69608779","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/blanc","50x60x236 cm",50,60,236,151,"s19552789","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","100x38x236 cm",100,38,236,312,"s79562653","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/effet chêne blanchi","250x60x236 cm",250,60,236,817,"s79502715","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/blanc","200x66x201 cm",200,66,201,582,"s69502848","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","25x51x70 cm",25,51,70,34,"s89297130","",0],
    ["armoire","PAX / BERGSBO","Armoire-penderie, blanc/blanc","150x60x236 cm",150,60,236,597,"s39502331","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige gris-beige/motif chêne","235x60x236 cm",235,60,236,818,"s39607333","",0],
    ["armoire","PAX / HASVIK","Armoire-penderie, blanc/blanc","200x66x236 cm",200,66,236,558,"s69502546","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","200x66x236 cm",200,66,236,788,"s29562801","",0],
    ["armoire","PAX / GRIMO","Armoire à portes coulissantes, blanc/blanc","150x43x236 cm",150,43,236,578,"s79590142","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc/motif chêne","150x60x236 cm",150,60,236,659,"s09562557","",0],
    ["armoire","PAX / AULI","Armoire pte coul, effet chêne blanchi/miroir","150x43x236 cm",150,43,236,669,"s79561333","",0],
    ["armoire","PAX","Combinaison armoire, blanc","250x58x236 cm",250,58,236,768,"s09503134","",0],
    ["armoire","PAX / GRIMO","Armoire-penderie, blanc/blanc","150x66x201 cm",150,66,201,554,"s09502648","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc/double face vert clair","200x66x236 cm",200,66,236,788,"s99551738","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc blanc/double face blanc","220x66x236 cm",220,66,236,913,"s59607105","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","100x60x236 cm",100,60,236,324,"s49579235","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","200x60x236 cm",200,60,236,983,"s59603310","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris foncé noir/double face noyer","150x66x236 cm",150,66,236,759,"s39608752","",0],
    ["armoire","LASTARE","Combinaison de rangement, blanc","60x42x201 cm",60,42,201,116,"s19620731","",0],
    ["armoire","PLATSA","Combinaison rangement portes, blanc/Fonnes blanc","60x42x221 cm",60,42,221,222.5,"s39615743","",0],
    ["armoire","PAX / FLISBERGET","Armoire-penderie, blanc/beige clair","100x60x236 cm",100,60,236,364,"s19502662","",0],
    ["armoire","PAX / KAMMARTORP/GRIMO","Combinaison armoire, blanc miroir/gris blanc","150x60x236 cm",150,60,236,623,"s09572537","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc blanc/blanc","120x60x236 cm",120,60,236,381,"s09606863","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","250x60x236 cm",250,60,236,1003,"s99561582","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","160x62x237 cm",160,62,237,477,"s69602999","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, blanc/miroir","50x60x201 cm",50,60,201,209,"s49502321","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","100x60x201 cm",100,60,201,359,"s39603014","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc double face/bleu clair miroir","150x43x236 cm",150,43,236,604,"s69551706","",0],
    ["armoire","VUKU","Armoire-penderie, blanc","74x51x149 cm",74,51,149,14.99,"80331973","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,427,"s49503127","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi effet chêne blanchi/blanc","170x60x236 cm",170,60,236,614,"s79606911","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","200x60x201 cm",200,60,201,602,"s59579268","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","250x60x201 cm",250,60,201,908,"s59562913","",0],
    ["armoire","PAX","Combinaison armoire, blanc","150x58x236 cm",150,58,236,349,"s59502740","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire-penderie, blanc double face/effet chêne blanchi miroir","250x66x236 cm",250,66,236,1084,"s79561427","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé brun/placage chêne teinte verre","150x60x201 cm",150,60,201,734,"s89549067","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, effet chêne blanchi","150x60x201 cm",150,60,201,719,"s09502568","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc/motif chêne","100x60x201 cm",100,60,201,399,"s39609134","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","245x40x216 cm",245,40,216,580,"s49188166","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc","160x62x201 cm",160,62,201,288,"s69603003","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, plaqué chêne blanchi/miroir","125x60x236 cm",125,60,236,567,"s99621821","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, blanc/blanc","75x60x201 cm",75,60,201,357,"s99622137","",0],
    ["armoire","SMÅSTAD / PLATSA","Armoire-penderie, blanc blanc/avec 2 tringles à vêtements","60x57x181 cm",60,57,181,176,"s99428277","",0],
    ["armoire","LASTARE","Combinaison de rangement, blanc","240x42x201 cm",240,42,201,407,"s09603893","",0],
    ["armoire","PLATSA","Armoire 7 portes + 6 tiroirs, blanc/Fonnes blanc","300x42x241 cm",300,42,241,685,"s19613556","",0],
    ["armoire","PAX / GRIMO","Armoire-penderie, blanc/blanc","100x60x236 cm",100,60,236,324,"s89502668","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, blanc/blanc","75x60x236 cm",75,60,236,379,"s69502612","",0],
    ["armoire","VIHALS","Combinaison de rangement, blanc","190x47x90 cm",190,47,90,228.99,"s29440616","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","50x51x104 cm",50,51,104,35,"s49311492","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","120x62x237 cm",120,62,237,301,"s79603644","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc blanc/blanc","255x60x201 cm",255,60,201,1020,"s19607305","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","99x51x173 cm",99,51,173,149.98,"s09297657","",0],
    ["armoire","PAX / HASVIK","Combinaison armoire, blanc/blanc","150x66x201 cm",150,66,201,419,"s89503168","",0],
    ["armoire","PAX / KAMMARTORP/GRIMO","Combinaison armoire, gris foncé miroir/gris gris vert","150x60x236 cm",150,60,236,623,"s49579264","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","84x55x216 cm",84,55,216,170,"s29158212","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,834,"s49563569","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris-beige/motif chêne","150x60x201 cm",150,60,201,483,"s09562637","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","100x60x236 cm",100,60,236,389,"s09562982","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc blanc/blanc","285x60x236 cm",285,60,236,1092,"s99607429","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","250x60x201 cm",250,60,201,838,"s69579277","",0],
    ["armoire","PAX / FLISBERGET","Armoire-penderie, blanc/beige clair","200x60x236 cm",200,60,236,868,"s29502633","",0],
    ["armoire","SKYTTA / BOAXEL","Armoire avec portes coulissantes, noir double face/Mehamn gris foncé","177x65x205 cm",177,65,205,456,"s39516007","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, effet chêne blanchi effet chêne blanchi/blanc","170x60x236 cm",170,60,236,622,"s79606949","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, blanc blanc/miroir","50x38x201 cm",50,38,201,282,"s19621269","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc aluminium/double face motif chêne","150x43x201 cm",150,43,201,526,"s19608828","",0],
    ["armoire","PAX / HASVIK","Armoire à portes coulissantes, blanc/blanc","150x43x201 cm",150,43,201,469.99,"s29626539","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","200x60x201 cm",200,60,201,602,"s89562742","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,735,"s99157577","",0],
    ["armoire","PAX / MEHAMN","Armoire-penderie, gris foncé/double face gris foncé","150x66x236 cm",150,66,236,537,"s89500301","",0],
    ["armoire","GLAMBERGET","Armoire avec 3 portes coulissantes, pin/noir","117x63x150 cm",117,63,150,349,"20564512","",0],
    ["armoire","PAX / MEHAMN","Combinaison armoire, blanc/double face effet chêne blanchi","150x43x236 cm",150,43,236,554,"s49500303","",0],
    ["armoire","PAX / BERGSBO/ÅHEIM","Combinaison armoire, gris foncé gris foncé/miroir","150x60x201 cm",150,60,201,502.99,"s19503044","",0],
    ["armoire","PAX / KAMMARTORP","Combinaison armoire, blanc miroir/gris","100x60x201 cm",100,60,201,363,"s49572427","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/blanc","200x60x236 cm",200,60,236,744.99,"s59639234","",0],
    ["armoire","PLATSA","Armoire-penderie 3 portes, blanc/Fonnes blanc","180x57x181 cm",180,57,181,365.5,"s19615452","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","200x60x236 cm",200,60,236,868,"s89563751","",0],
    ["armoire","PAX / TYSSEDAL","Armoire-penderie, blanc/verre blanc","175x60x201 cm",175,60,201,628,"s39568096","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, gris foncé/bleu","250x60x201 cm",250,60,201,1128,"s89581745","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","100x60x201 cm",100,60,201,399,"s69579239","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","125x40x201 cm",125,40,201,194,"s19332373","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, effet chêne blanchi/miroir","150x38x201 cm",150,38,201,714,"s99502601","",0],
    ["armoire","PAX / BERGSBO/ÅHEIM","Combinaison armoire, blanc/miroir","150x38x236 cm",150,38,236,699,"s29502567","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc double face/vert clair miroir","200x66x236 cm",200,66,236,702,"s59551735","",0],
    ["armoire","PAX / GRIMO","Armoire d'angle, blanc/blanc","110/110x236 cm",110.2,110.2,236.4,496,"s89502654","",{"angle":110.2}],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","25x51x70 cm",25,51,70,44,"s59297141","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","250x60x236 cm",250,60,236,1003,"s29626110","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","50x51x70 cm",50,51,70,46,"s09297134","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc blanc/blanc","170x60x236 cm",170,60,236,758,"s59606889","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, blanc/blanc","100x60x201 cm",100,60,201,281,"s69568212","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","250x60x236 cm",250,60,236,1053,"s89563765","",0],
    ["armoire","PAX / FLISBERGET","Armoire-penderie, blanc/beige clair","100x60x201 cm",100,60,201,319,"s99503016","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","148x51x173 cm",148,51,173,224.97,"s09306204","",0],
    ["armoire","PAX / GRIMO","Armoire-penderie, blanc/blanc","150x66x201 cm",150,66,201,453,"s89502791","",0],
    ["armoire","PAX / KAMMARTORP/GULLABERG","Combinaison armoire, blanc miroir/gris blanc","200x60x236 cm",200,60,236,908,"s79572586","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","84x40x216 cm",84,40,216,205,"s69157475","",0],
    ["armoire","PAX / KAMMARTORP","Combinaison armoire, blanc/miroir gris","100x38x236 cm",100,38,236,412,"s89613869","",0],
    ["armoire","LASTARE","Combinaison de rangement, blanc/avec banc","170x42x201 cm",170,42,201,179,"s19603265","",0],
    ["armoire","VIHALS","Combinaison armoire, blanc/miroir","305x57x200 cm",305,57,200,537.99,"s49442191","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc/Kalbåden effet pin","180x57x221 cm",180,57,221,595,"s59624987","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","150x60x236 cm",150,60,236,443,"s09503172","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc motif chêne/blanc","120x60x236 cm",120,60,236,484,"s59606870","",0],
    ["armoire","VIHALS","Combinaison armoire, blanc/miroir","200x57x200 cm",200,57,200,428,"s59442195","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","142-178x51x173 cm",178,51,173,215.98,"s79305102","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc motif chêne/blanc","185x60x201 cm",185,60,201,704,"s69607218","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc blanc/double face motif chêne","200x66x236 cm",200,66,236,728,"s39608870","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris-beige gris-beige/motif chêne","185x60x201 cm",185,60,201,647,"s69607280","",0],
    ["armoire","PLATSA","Armoire 2 portes+2 tiroirs, blanc/Fonnes blanc","180x57x123 cm",180,57,123,315.5,"s29624979","",0],
    ["armoire","PAX / BERGSBO","Armoire-penderie, gris foncé/gris foncé","200x60x236 cm",200,60,236,772,"s79502635","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige/gris-beige","200x60x236 cm",200,60,236,619,"s19581471","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","50x51x104 cm",50,51,104,63,"s19297138","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","84x55x216 cm",84,55,216,245,"s59157353","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris foncé noir/double face motif chêne brun foncé","150x66x236 cm",150,66,236,571,"s49608822","",0],
    ["armoire","PAX / KAMMARTORP/TYSSEDAL","Combinaison armoire, blanc miroir/gris gris-beige","150x60x201 cm",150,60,201,679,"s99603252","",0],
    ["armoire","PAX / HASVIK","Armoire-penderie, blanc/brillant/blanc","150x66x236 cm",150,66,236,567,"s59502801","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","125x55x216 cm",125,55,216,285,"s79158144","",0],
    ["armoire","PAX / HASVIK","Combinaison armoire, blanc/blanc","150x66x236 cm",150,66,236,634,"s39515611","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,588,"s89575358","",0],
    ["armoire","HAUGA","Combinaison de rangement, gris","139x46x199 cm",139,46,199,328.99,"s69388635","",0],
    ["armoire","PAX / KAMMARTORP/GULLABERG","Combinaison armoire, blanc miroir/gris blanc","100x60x236 cm",100,60,236,484,"s29572522","",0],
    ["armoire","PAX","Combinaison armoire, blanc","200x58x201 cm",200,58,201,902,"s99502615","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc gris vert/blanc","185x60x236 cm",185,60,236,693,"s29607159","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris foncé/gris foncé","100x60x201 cm",100,60,201,421,"s99623047","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","50x51x70 cm",50,51,70,54,"s79305098","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, effet chêne blanchi effet chêne blanchi/blanc","235x60x201 cm",235,60,201,612,"s09607396","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Armoire d'angle, brillant blanc/miroir","111/88x201 cm",110.5,87.9,201,496,"s19502657","",{"angle":87.9}],
    ["armoire","JONAXEL","Combinaison de rangement ouverte, blanc","182x51x160 cm",182,51,160,139.97,"s69297287","",0],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris-beige/plaqué noyer","150x58x201 cm",150,58,201,688,"s09575263","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x40x216 cm",165,40,216,490,"s09183689","",0],
    ["armoire","PAX / HASVIK","Armoire pte coul, gris-beige gris-beige/motif chêne","220x66x201 cm",220,66,201,683,"s59607110","",0],
    ["armoire","VIHALS","Combinaison armoire, blanc/miroir","270x57x200 cm",270,57,200,507.99,"s59442181","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","99x51x173 cm",99,51,173,162,"s49297660","",0],
    ["armoire","PLATSA","Armoire 2 portes, blanc/Kalbåden effet pin","60x57x221 cm",60,57,221,206,"s89623222","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","250x60x236 cm",250,60,236,928,"s29562839","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","200x60x236 cm",200,60,236,1111,"s29625714","",0],
    ["armoire","IDANÄS","Combinaison armoire, blanc","180x59x211 cm",180,59,211,628,"s89388291","",0],
    ["armoire","PAX","Armoire d'angle, effet chêne blanchi","161/188x201 cm",160.5,187.8,201.2,709,"s69502315","Gris foncé",{"angle":187.8}],
    ["armoire","PLATSA","Armoire-penderie 5 portes+3 tiroirs, blanc/Fonnes blanc","240x42x241 cm",240,42,241,448.5,"s89624995","",0],
    ["armoire","PAX / SVARTISDAL","Combinaison armoire, blanc blanc/effet papier","200x66x201 cm",200,66,201,959,"s99552808","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","148x51x207 cm",148,51,207,330,"s59311463","",0],
    ["armoire","PAX / HASVIK","Combinaison armoire, gris foncé gris foncé/motif chêne","170x66x201 cm",170,66,201,624,"s99606967","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc aluminium/blanc blanc","170x66x201 cm",170,66,201,623,"s29606980","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc brillant/blanc blanc","235x60x201 cm",235,60,201,938,"s89607284","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","50x51x104 cm",50,51,104,75,"s09297488","",0],
    ["armoire","SKYTTA / BOAXEL","Armoire avec portes coulissantes, noir double face/Mehamn effet chêne blanchi","152x65x240 cm",152,65,240,517,"s89523114","",0],
    ["armoire","HAUGA","Combinaison de rangement, gris","139x46x199 cm",139,46,199,378,"s29388637","",0],
    ["armoire","PAX / MEHAMN","Armoire-penderie, gris foncé/double face gris foncé","200x66x236 cm",200,66,236,728,"s49500299","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, blanc blanc/blanc","185x60x201 cm",185,60,201,794,"s59607214","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","160x62x237 cm",160,62,237,308,"s89603648","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","142-178x51x139 cm",178,51,139,176.98,"s59317554","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,539,"s99561544","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, noir/Auli miroir","276x160x240 cm",276,160,240,1513,"s29562170","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","150x60x201 cm",150,60,201,388,"s79502353","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé/brun placage chêne teinte","150x60x236 cm",150,60,236,784,"s59549016","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, blanc/brillant/blanc miroir","150x60x201 cm",150,60,201,819,"s99515608","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/blanc","300x60x236 cm",300,60,236,1631,"s89590090","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc blanc/blanc","200x60x236 cm",200,60,236,1153,"s39618157","",0],
    ["armoire","PAX / FÄRVIK","Combinaison armoire, blanc/verre blanc","150x66x236 cm",150,66,236,766,"s99502347","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","100x60x236 cm",100,60,236,604,"s89581613","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc gris vert/blanc","220x60x201 cm",220,60,201,833,"s49606998","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne verre","300x60x201 cm",300,60,201,1518,"s79566712","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","205x55x216 cm",205,55,216,560,"s49188005","",0],
    ["armoire","PAX / BERGSBO","Armoire-penderie, blanc/effet chêne blanchi","200x60x236 cm",200,60,236,582,"s19502544","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","100x60x236 cm",100,60,236,504,"s89603177","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc/motif chêne","150x60x201 cm",150,60,201,723,"s99562671","",0],
    ["armoire","PAX / KAMMARTORP/GULLABERG","Combinaison armoire, blanc miroir/gris blanc","150x60x236 cm",150,60,236,748,"s69572558","",0],
    ["armoire","HAUGA","Combinaison armoire, blanc","258x55x199 cm",258,55,199,677,"s79388164","",0],
    ["armoire","JONAXEL","Combinaison armoire, blanc","173x51x173 cm",173,51,173,234.98,"s89297663","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","240x62x237 cm",240,62,237,363,"s99612015","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris foncé gris foncé/motif chêne","235x60x236 cm",235,60,236,702,"s69607402","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc blanc/motif chêne miroir","200x66x236 cm",200,66,236,838,"s09608881","",0],
    ["armoire","PLATSA","Armoire 2 portes, blanc miroir en verre STRAUMEN/blanc FONNES","60x57x251 cm",60,57,251,297,"s99623735","",0],
    ["armoire","PLATSA","Armoire 2 portes+2 tiroirs, blanc Kalbåden/effet pin blanc FONNES","180x57x123 cm",180,57,123,322.5,"s49624983","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, blanc blanc/miroir","125x60x201 cm",125,60,201,553,"s39621824","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","235x60x236 cm",235,60,236,658,"s19635412","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris-beige/gris-beige","100x60x201 cm",100,60,201,491,"s79562200","",0],
    ["armoire","PAX","Armoire d'angle, blanc","161/188x201 cm",160.5,187.8,201.2,693,"s99552771","",{"angle":187.8}],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","92x36x222-350 cm",92,36,222,200,"s79157615","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","150x58x236 cm",150,58,236,533,"s69625095","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","125x40x201 cm",125,40,201,146,"s49332376","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","44x55x216 cm",44,55,216,180,"s59158121","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, gris gris/blanc","235x60x201 cm",235,60,201,878,"s39611839","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","258x51x222-350 cm",258,51,222,335,"s99157370","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","200x60x236 cm",200,60,236,838,"s89549091","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, blanc/blanc","220x60x236 cm",220,60,236,613,"s19635426","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","300x60x236 cm",300,60,236,1884,"s09578431","",0],
    ["armoire","PAX / KAMMARTORP/TYSSEDAL","Combinaison armoire, blanc miroir/gris blanc","150x60x201 cm",150,60,201,791,"s89572562","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","150x60x236 cm",150,60,236,784,"s09548986","",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","150x66x201 cm",150,66,201,490,"s49503165","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","150x60x236 cm",150,60,236,659,"s69562564","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, gris foncé gris foncé/miroir motif chêne","95x60x236 cm",95,60,236,469,"s29606843","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris-beige gris-beige/motif chêne","220x60x201 cm",220,60,201,762,"s79607091","",0],
    ["armoire","SKYTTA / BOAXEL","Armoire avec portes coulissantes, aluminium Mehamn/Auli/gris-beige miroir","177x65x205 cm",177,65,205,549,"s09562171","",0],
    ["armoire","PLATSA","Armoire avec 4 portes+3 tiroirs, blanc Fonnes/blanc","240x42x181 cm",240,42,181,566,"s29615395","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,550,"s89158214","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc blanc/blanc","255x60x236 cm",255,60,236,1348,"s99612435","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc aluminium/motif chêne miroir","150x66x236 cm",150,66,236,790,"s89608858","",0],
    ["armoire","PAX","Combinaison armoire, blanc","250x58x236 cm",250,58,236,770.99,"s39503137","",0],
    ["armoire","PAX","Armoire-penderie, blanc","150x58x236 cm",150,58,236,473,"s79502560","",0],
    ["armoire","PLATSA","Armoire 9 portes et 3 tiroirs, blanc Kalbåden/effet pin blanc FONNES","240x57x221 cm",240,57,221,907,"s99624990","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, blanc/miroir","75x60x236 cm",75,60,236,425,"s99502578","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, blanc/miroir","150x60x236 cm",150,60,236,599,"s79502782","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","200x66x201 cm",200,66,201,778,"s69625825","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","175x51x222-350 cm",175,51,222,440,"s79302995","",0],
    ["armoire","PAX / FLISBERGET","Armoire d'angle, blanc/beige clair","161/88x201 cm",160.5,87.9,201.2,659,"s89502649","",{"angle":87.9}],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","100x60x201 cm",100,60,201,464,"s59575227","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","185x60x201 cm",185,60,201,749,"s79626117","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,525,"s59157555","",0],
    ["armoire","PAX / FORSAND","Armoire d'angle, effet chêne blanchi/effet chêne blanchi","111/88x201 cm",110.5,88,201.2,391,"s49600029","",{"angle":88}],
    ["armoire","PAX / FLISBERGET","Armoire-penderie, blanc/blanc cassé","200x60x236 cm",200,60,236,678,"s49625162","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","258x51x222-350 cm",258,51,222,760,"s39157387","",0],
    ["armoire","PAX / KAMMARTORP/FLISBERGET","Combinaison armoire, blanc miroir/gris beige clair","100x60x236 cm",100,60,236,504,"s59572498","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, blanc aluminium/double face motif chêne","150x66x236 cm",150,66,236,571,"s49608817","",0],
    ["armoire","PLATSA","Armoire avec 8 portes et 3 tiroirs, blanc miroir en verre STRAUMEN/SANNIDAL blanc","240x57x221 cm",240,57,221,1007.5,"s59615365","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc/Sannidal blanc","240x57x231 cm",240,57,231,650,"s99625046","",0],
    ["armoire","VIHALS","Combinaison armoire+banc rangement, blanc/miroir","251x57x200 cm",251,57,200,398,"s19442197","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, blanc/miroir","150x66x236 cm",150,66,236,805,"s49561424","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, brillant blanc/miroir","150x60x201 cm",150,60,201,679,"s89503031","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, gris-beige/beige clair","200x60x201 cm",200,60,201,1097,"s29562207","",0],
    ["armoire","PLATSA","Armoire-penderie 3 portes, blanc/Fonnes blanc","180x57x133 cm",180,57,133,337.5,"s39624969","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi/effet chêne blanchi","100x60x236 cm",100,60,236,479,"s99502583","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne verre","150x60x236 cm",150,60,236,683,"s89549029","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/blanc verre","150x60x236 cm",150,60,236,779,"s69575378","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","62x40x201 cm",62,40,201,91,"s19332368","",0],
    ["armoire","PLATSA","Rangement 5 portes, blanc/Kalbåden effet pin","180x42x103 cm",180,42,103,345,"s99614255","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé brun/placage chêne teinte verre","200x60x236 cm",200,60,236,1081,"s89549374","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,335,"s69562620","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","100x60x236 cm",100,60,236,621,"s69548931","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,440,"s49157565","",0],
    ["armoire","PAX / LUNDBRÄSMA","Armoire pte coul, gris foncé noir/verre à carreaux","150x66x236 cm",150,66,236,895,"s89618466","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x55x216 cm",165,55,216,425,"s49212067","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi effet chêne blanchi/blanc","235x60x236 cm",235,60,236,818,"s59607365","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","180x42x237 cm",180,42,237,262,"s39603325","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris foncé","150x60x201 cm",150,60,201,492,"s39502741","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, gris-beige/gris-beige","250x58x236 cm",250,58,236,1311,"s89603549","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, effet chêne blanchi/double face bleu clair","150x66x236 cm",150,66,236,654,"s99551700","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","100x60x236 cm",100,60,236,469,"s49581605","",0],
    ["armoire","PAX / REINSVOLL","Combinaison armoire, effet chêne blanchi/gris vert","100x60x236 cm",100,60,236,579,"s69502594","",0],
    ["armoire","PAX / REINSVOLL","Armoire-penderie, blanc/gris vert","100x60x236 cm",100,60,236,394,"s89502673","",0],
    ["armoire","PAX / KAMMARTORP/FLISBERGET","Combinaison armoire, blanc miroir/gris blanc cassé","200x60x236 cm",200,60,236,1151,"s59625576","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris-beige/double face gris-beige","150x66x236 cm",150,66,236,646,"s89562247","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, noir gris foncé/Mehamn bleu clair/vert clair","251x115x240 cm",251,115,240,1293,"s49552523","",0],
    ["armoire","HAUGA","Combinaison de rangement, blanc","208x199 cm",208,46,199,428,"s69611649","Gris",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne verre","250x60x201 cm",250,60,201,1162,"s79551268","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/gris-beige","150x60x201 cm",150,60,201,723,"s79590849","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","180x62x236 cm",180,62,236,329,"s69612516","",0],
    ["armoire","PAX / FLISBERGET","Armoire d'angle, blanc/blanc cassé","111/88x236 cm",110.5,87.9,236.4,494,"s79626160","",{"angle":87.9}],
    ["armoire","PAX / LUNDBRÄSMA","Armoire pte coul, gris-beige noir/verre à carreaux gris foncé","150x66x236 cm",150,66,236,840,"s79617896","",0],
    ["armoire","PLATSA","Armoire-penderie 3 portes, blanc/Sannidal blanc","180x42x191 cm",180,42,191,341,"s69613530","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi/effet chêne blanchi","200x60x236 cm",200,60,236,904,"s79502621","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","165x55x216 cm",165,55,216,380,"s79562629","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","200x60x201 cm",200,60,201,770.99,"s99563736","",0],
    ["armoire","PAX / MEHAMN","Combinaison armoire, gris foncé/double face gris foncé","150x66x236 cm",150,66,236,790,"s49523069","",0],
    ["armoire","PAX / GRIMO/ÅHEIM","Armoire d'angle, blanc/blanc miroir","211/161x236 cm",210.5,160.5,236.4,1321,"s09502988","",{"angle":160.5}],
    ["armoire","BOAXEL","Combinaison armoire, blanc","82x40x201 cm",82,40,201,89,"s49332362","",0],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","100x60x201 cm",100,60,201,539,"s29575238","",0],
    ["armoire","PAX","Combinaison armoire, effet chêne blanchi","150x58x201 cm",150,58,201,541,"s99502564","",0],
    ["armoire","PAX / AULI","Armoire pte coul, gris-beige/miroir","150x66x236 cm",150,66,236,785,"s09561317","",0],
    ["armoire","FLISAT","Rangement ouvert, pin teinté blanc clair/blanc","88x38x117 cm",88,38,117,139,"60620120","",0],
    ["armoire","PAX / FORSAND/ÅHEIM","Combinaison armoire, blanc miroir/blanc","95x60x201 cm",95,60,201,427,"s79606826","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","100x60x201 cm",100,60,201,354,"s09626050","",0],
    ["armoire","PAX / FORSAND","Armoire-penderie, effet chêne blanchi/effet chêne blanchi","150x60x201 cm",150,60,201,533,"s89502324","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, gris foncé gris foncé/motif chêne","170x60x236 cm",170,60,236,622,"s89606958","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","303x51x222-350 cm",303,51,222,615,"s79393071","",0],
    ["armoire","PAX / KAMMARTORP/TYSSEDAL","Combinaison armoire, blanc miroir/gris blanc","285x60x236 cm",285,60,236,1358,"s89607444","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, brillant/blanc","75x60x201 cm",75,60,201,422,"s89502606","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","200x60x236 cm",200,60,236,1028,"s09581730","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/blanc cassé","150x60x201 cm",150,60,201,578,"s99625112","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, gris foncé noir/noyer miroir","150x66x236 cm",150,66,236,672,"s89608542","",0],
    ["armoire","PAX / KAMMARTORP/FLISBERGET","Combinaison armoire, blanc miroir/gris blanc cassé","100x60x201 cm",100,60,201,374,"s89625909","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, blanc brillant/blanc miroir","200x60x201 cm",200,60,201,788,"s49503033","",0],
    ["armoire","HAUGA","Combinaison de rangement, blanc","140x199 cm",140,46,199,338,"s19575597","Gris",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","200x66x201 cm",200,66,201,663,"s99503035","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc/chêne","125x40x201 cm",125,40,201,158,"s59575784","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, gris foncé/gris","100x60x236 cm",100,60,236,470,"s29613853","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige/effet chêne blanchi gris-beige","250x60x236 cm",250,60,236,983,"s69562229","",0],
    ["armoire","PAX / KAMMARTORP/GULLABERG","Combinaison armoire, blanc/miroir gris","200x60x236 cm",200,60,236,752,"s49572583","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris-beige gris-beige/motif chêne","255x60x236 cm",255,60,236,893,"s69607341","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","250x60x236 cm",250,60,236,1523,"s29581946","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,583,"s79563025","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi/effet chêne blanchi","100x60x236 cm",100,60,236,509,"s49502585","",0],
    ["armoire","JONAXEL","Combinaison de rangement ouverte, blanc","148x51x173 cm",148,51,173,344.97,"s19297685","",0],
    ["armoire","PLATSA","Armoire 2 portes+3 tiroirs, blanc/blanc FONNES","300x57x241 cm",300,57,241,628,"s19625205","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,633,"s49561565","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé brun/placage chêne teinte verre","300x60x236 cm",300,60,236,1623,"s59566708","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","165x40x216 cm",165,40,216,355,"s99564528","",0],
    ["armoire","PAX / LUNDBRÄSMA","Armoire pte coul, gris foncé noir/verre à carreaux","200x66x236 cm",200,66,236,938,"s29617907","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","125x40x101 cm",125,40,101,100,"s89384014","",0],
    ["armoire","PAX / TYSSEDAL","Armoire-penderie, blanc/verre blanc","200x60x236 cm",200,60,236,918,"s69503292","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, blanc/miroir","150x60x236 cm",150,60,236,670.99,"s29503133","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/blanc","100x60x236 cm",100,60,236,564,"s39502623","",0],
    ["armoire","PAX / KAMMARTORP/GULLABERG","Combinaison armoire, blanc/miroir gris","150x60x236 cm",150,60,236,689,"s99572547","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc Fonnes/blanc","300x42x241 cm",300,42,241,473,"s69615505","",0],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","250x60x236 cm",250,60,236,1598,"s99575334","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/gris","200x60x236 cm",200,60,236,793,"s69563709","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","92x51x222-350 cm",92,51,222,190,"s99157902","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc blanc brillant/blanc","170x60x201 cm",170,60,201,724,"s89606878","",0],
    ["armoire","SKYTTA / BOAXEL","Armoire avec portes coulissantes, blanc Mehamn/Auli/effet chêne blanchi miroir","202x65x205 cm",202,65,205,584,"s29562194","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris foncé/gris foncé","100x60x201 cm",100,60,201,439,"s59502580","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,903,"s89602432","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","175x51x222-350 cm",175,51,222,320,"s29387567","",0],
    ["armoire","PAX / FLISBERGET","Armoire d'angle, gris-beige/beige clair","161/111x236 cm",160.5,110.5,236.4,879,"s29600025","",{"angle":110.5}],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","100x60x236 cm",100,60,236,464,"s69563016","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc/bambou","385x51x222-350 cm",385,51,222,1160,"s99302895","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,670,"s49563545","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris foncé noir/double face motif chêne brun foncé","150x43x236 cm",150,43,236,588,"s49608841","",0],
    ["armoire","PLATSA","Armoire-penderie 3 portes, blanc/Sannidal blanc","180x57x191 cm",180,57,191,364,"s29613527","",0],
    ["armoire","PAX","Armoire d'angle, blanc","211/161x201 cm",210.5,160.5,201.2,788,"s69502985","",{"angle":160.5}],
    ["armoire","PAX / VIKANES","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,694,"s79515614","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","62x40x201 cm",62,40,201,79,"s49332357","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, gris foncé/brun-rouge","150x60x201 cm",150,60,201,776,"s89626616","",0],
    ["armoire","PLATSA","Armoire-penderie 5 portes, blanc miroir en verre STRAUMEN/blanc FONNES","300x42x241 cm",300,42,241,893,"s09625197","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","200x60x236 cm",200,60,236,678,"s99563595","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne","100x60x236 cm",100,60,236,621,"s69548969","",0],
    ["armoire","PAX / KAMMARTORP/TYSSEDAL","Combinaison armoire, blanc miroir/gris blanc","150x60x236 cm",150,60,236,903,"s99572566","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris vert","300x60x201 cm",300,60,201,1006,"s79579286","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/gris","200x60x236 cm",200,60,236,808,"s99502639","",0],
    ["armoire","LASTARE","Combinaison armoire, blanc/avec surmeuble","180x62x237 cm",180,62,237,377,"s69608114","",0],
    ["armoire","PLATSA","Armoire-penderie 5 portes, blanc/Kalbåden effet pin","180x57x241 cm",180,57,241,550,"s09624975","",0],
    ["armoire","JONAXEL","Combinaison de rangement ouverte, blanc","99x51x173 cm",99,51,173,229.98,"s39323990","",0],
    ["armoire","PAX / GULLABERG","Armoire d'angle, gris foncé/gris","161/111x201 cm",160.5,110.5,201.2,818,"s39600015","",{"angle":110.5}],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/verre transparent blanc","150x66x201 cm",150,66,201,608,"s59503179","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, gris foncé noir/noyer bleu","150x66x236 cm",150,66,236,740,"s29608559","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc miroir en verre STRAUMEN/blanc FONNES","240x57x221 cm",240,57,221,604,"s29615499","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/gris","150x60x236 cm",150,60,236,718,"s99563821","",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","150x66x236 cm",150,66,236,664,"s79502895","",0],
    ["armoire","PLATSA","Armoire 6 portes, blanc/Fonnes blanc","240x57x221 cm",240,57,221,552,"s09615495","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, blanc/blanc","200x60x236 cm",200,60,236,942,"s79563799","",0],
    ["armoire","SKYTTA / BOAXEL","Dressing avec portes coulissantes, aluminium/Auli miroir","251x115x240 cm",251,115,240,1017,"s79562177","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc blanc brillant/blanc","100x60x236 cm",100,60,236,421.99,"s69626518","",0],
    ["armoire","PAX / GULLABERG","Armoire d'angle, blanc/blanc","161/111x236 cm",160.5,110.5,236.4,879,"s39600020","",{"angle":110.5}],
    ["armoire","PAX / FORSAND","Combinaison armoire, effet chêne blanchi/effet chêne blanchi","100x60x236 cm",100,60,236,556,"s99502998","",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","150x66x236 cm",150,66,236,695,"s99502880","",0],
    ["armoire","PLATSA","Combinaison rangement portes, blanc Fonnes/blanc","122x42x220 cm",122,42,220,389,"s49585873","",0],
    ["armoire","PLATSA","Armoire-penderie 4 portes, blanc/Fonnes blanc","240x57x191 cm",240,57,191,468,"s69625057","",0],
    ["armoire","PAX / GULLABERG","Combinaison armoire, gris foncé/gris","300x60x236 cm",300,60,236,1748,"s59602711","",0],
    ["armoire","PAX / ÅHEIM","Combinaison armoire, gris-beige/miroir","150x60x201 cm",150,60,201,851,"s49562249","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","250x60x236 cm",250,60,236,1213,"s59549907","",0],
    ["armoire","PAX / MEHAMN","Armoire pte coul, effet chêne blanchi aluminium/motif noyer bleu","150x66x201 cm",150,66,201,558,"s99608546","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris foncé/gris foncé","75x60x236 cm",75,60,236,384,"s09622349","",0],
    ["armoire","PAX / GRIMO","Combinaison armoire, blanc/blanc","100x60x236 cm",100,60,236,549,"s09502587","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,659,"s69502339","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, blanc/brun-rouge","100x60x236 cm",100,60,236,484,"s69626580","",0],
    ["armoire","PAX / REINSVOLL/ÅHEIM","Combinaison armoire, blanc/gris-beige","200x60x201 cm",200,60,201,1162,"s69502730","",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","200x66x201 cm",200,66,201,709,"s99503177","",0],
    ["armoire","PAX / REINSVOLL","Combinaison armoire, blanc/gris-beige","200x60x201 cm",200,60,201,1302,"s69502626","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, gris foncé/brun-rouge","200x60x236 cm",200,60,236,1002,"s79626674","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, noir gris foncé/Mehamn bleu clair","276x160x205 cm",276,160,205,1238,"s69552485","",0],
    ["armoire","PLATSA","Armoire 10 portes, blanc/Fonnes blanc","360x42x133 cm",360,42,133,758,"s59625213","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris-beige/plaqué chêne verre","200x60x201 cm",200,60,201,975,"s99551168","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, gris foncé/brun foncé effet chêne teinté","100x60x236 cm",100,60,236,361.99,"s89626536","",0],
    ["armoire","PAX / FLISBERGET","Combinaison armoire, blanc/beige clair","150x60x236 cm",150,60,236,633,"s69503126","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne verre","300x60x201 cm",300,60,201,1356,"s79549911","",0],
    ["armoire","PAX","Combinaison armoire, blanc","375x58x236 cm",375,58,236,1150,"s39502543","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","150x60x236 cm",150,60,236,848,"s99581655","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne","200x60x201 cm",200,60,201,768,"s99549095","",0],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","150x60x236 cm",150,60,236,893,"s09575277","",0],
    ["armoire","PAX / REINSVOLL","Combinaison armoire, blanc/gris-beige","200x60x201 cm",200,60,201,1029,"s29502628","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, gris foncé/bleu","150x60x236 cm",150,60,236,794,"s19581635","",0],
    ["armoire","PAX / FARDAL","Armoire-penderie, blanc/gris clair brillant","200x60x236 cm",200,60,236,868,"s69502551","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, gris-beige/brillant orange clair","200x60x201 cm",200,60,201,668,"s29590875","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","150x60x201 cm",150,60,201,683,"s99581617","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé brun/placage chêne teinte verre","150x60x201 cm",150,60,201,797,"s99549081","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc/bambou","245x55x216 cm",245,55,216,690,"s89315153","",0],
    ["armoire","PLATSA","Armoire avec 6 portes+3 tiroirs, blanc/Sannidal blanc","300x57x231 cm",300,57,231,894,"s39625209","",0],
    ["armoire","PAX / FYRUDDEN","Armoire d'angle, gris foncé/bleu","161/111x236 cm",160.5,110.5,236.4,999,"s99581764","Blanc/bleu",{"angle":110.5}],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","178x51x222-350 cm",178,51,222,1020,"s59384322","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, noir gris foncé/Mehamn vert clair","226x160x205 cm",226,160,205,953,"s99552498","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, gris-beige/brun-rouge","150x60x201 cm",150,60,201,724,"s29626596","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, blanc Mehamn/Auli/gris-beige miroir","251x115x240 cm",251,115,240,1343,"s69562192","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant blanc","150x60x201 cm",150,60,201,529,"s49502750","",0],
    ["armoire","PLATSA","Armoire-penderie 3portes+6tiroirs, blanc miroir en verre STRAUMEN/blanc FONNES","300x57x181 cm",300,57,181,699,"s69625123","",0],
    ["armoire","JONAXEL","Combinaison de rangement, blanc","148x51x104 cm",148,51,104,171,"s89297677","",0],
    ["armoire","PLATSA","Armoire-penderie 3portes+6tiroirs, blanc/Fonnes blanc","300x57x181 cm",300,57,181,647,"s39625105","",0],
    ["armoire","PAX","Armoire d'angle, blanc","211/213x236 cm",210.5,213,236,1192,"s99503139","",{"angle":213}],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","200x60x201 cm",200,60,201,1258.99,"s99575367","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc blanc brillant/blanc","120x60x236 cm",120,60,236,569,"s39606852","",0],
    ["armoire","SKYTTA / PAX","Dressing avec portes coulissantes, noir gris foncé/Mehamn bleu clair/vert clair","301x160x240 cm",301,160,240,1626,"s89552535","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/plaqué chêne","150x60x201 cm",150,60,201,714,"s99566730","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","150x60x201 cm",150,60,201,851,"s89581769","",0],
    ["armoire","PAX / MEHAMN/AULI","Armoire pte coul, gris foncé noir/double face noyer","200x66x236 cm",200,66,236,862,"s79608788","",0],
    ["armoire","PAX / BERGSBO","Combinaison armoire, effet chêne blanchi/effet chêne blanchi","300x60x236 cm",300,60,236,1604,"s89602639","",0],
    ["armoire","PAX / BERGSBO","Armoire d'angle, gris foncé/gris foncé","111/88x236 cm",110.5,88,236.4,446,"s69600047","",{"angle":88}],
    ["armoire","ELVARLI","Combinaison armoire, blanc","135x51x222-350 cm",135,51,222,420,"s09158152","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, gris-beige brillant/orange clair miroir","200x60x201 cm",200,60,201,793,"s89596704","",0],
    ["armoire","PAX / BJÖRNESKOGEN","Combinaison armoire, gris foncé/plaqué noyer","200x66x236 cm",200,66,236,1068,"s19575286","",0],
    ["armoire","PAX / LUNDBRÄSMA","Armoire pte coul, gris foncé noir/verre à carreaux","150x66x236 cm",150,66,236,722,"s29617889","",0],
    ["armoire","PAX / TYSSEDAL","Armoire d'angle, gris-beige/gris-beige","161/111x201 cm",160.5,110.5,201.2,878,"s39603392","",{"angle":110.5}],
    ["armoire","PAX / BJÖRNESKOGEN/ÅHEIM","Combinaison armoire, gris foncé/plaqué noyer","250x60x236 cm",250,60,236,1158,"s89575315","",0],
    ["armoire","PAX / FARDAL/ÅHEIM","Combinaison armoire, brillant blanc/miroir","150x60x236 cm",150,60,236,727,"s89502357","",0],
    ["armoire","PAX / STORKLINTA","Combinaison armoire, blanc/motif chêne","300x60x201 cm",300,60,201,1444,"s39562928","",0],
    ["armoire","PAX / VIKANES","Combinaison armoire, blanc blanc/blanc","220x60x201 cm",220,60,201,1076,"s99607009","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","125x55x216 cm",125,55,216,360,"s99562633","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","100x60x201 cm",100,60,201,569,"s69581609","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","100x60x201 cm",100,60,201,384,"s59590794","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/blanc","300x60x201 cm",300,60,201,1758,"s59602396","",0],
    ["armoire","PAX / KAMMARTORP/GRIMO","Combinaison armoire, blanc miroir/gris gris vert","200x60x236 cm",200,60,236,850.99,"s99578498","",0],
    ["armoire","PAX","Armoire d'angle, blanc","211/161x236 cm",210.5,160.5,236.4,932,"s99590725","",{"angle":160.5}],
    ["armoire","PAX / FARDAL","Armoire-penderie, blanc/brillant/blanc","150x60x201 cm",150,60,201,658,"s89502381","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, gris foncé gris-beige/gris foncé","250x60x236 cm",250,60,236,813,"s89554394","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, gris foncé brun/placage chêne teinte verre","200x60x236 cm",200,60,236,858,"s99549364","",0],
    ["armoire","PAX / REINSVOLL","Combinaison armoire, blanc/gris-beige","200x60x201 cm",200,60,201,1119,"s89503007","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","300x60x201 cm",300,60,201,1106,"s49590822","",0],
    ["armoire","PAX / GRIMO","Armoire pte coul, blanc/verre transparent blanc","200x66x201 cm",200,66,201,602,"s89502847","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","175x51x222-350 cm",175,51,222,255,"s59157541","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","250x60x201 cm",250,60,201,1123,"s19590814","",0],
    ["armoire","BOAXEL","Combinaison armoire, blanc","62x40x201 cm",62,40,201,79,"s89527503","",0],
    ["armoire","PAX / TYSSEDAL","Combinaison armoire, blanc/blanc","150x60x236 cm",150,60,236,599,"s79502777","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","100x60x201 cm",100,60,201,459,"s29590804","",0],
    ["armoire","PAX / KAMMARTORP/TYSSEDAL","Combinaison armoire, blanc miroir/gris gris-beige","200x66x236 cm",200,66,236,928,"s69603300","",0],
    ["armoire","PAX / BERGSBO/ÅHEIM","Armoire d'angle, effet chêne blanchi/plaqué chêne","211/161x236 cm",210.5,160.5,236.4,1368,"s99600041","",{"angle":160.5}],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","150x60x201 cm",150,60,201,568,"s69596738","",0],
    ["armoire","FLISAT","Combinaison de rangement ouverte, pin teinté blanc clair blanc/blanc","88x38x117 cm",88,38,117,144,"s99624928","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","150x60x201 cm",150,60,201,718,"s79596752","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/gris clair brillant","150x60x201 cm",150,60,201,836,"s89502574","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","100x60x201 cm",100,60,201,384,"s29590795","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","200x60x236 cm",200,60,236,1102,"s99581938","",0],
    ["armoire","PAX / REINSVOLL/ÅHEIM","Combinaison armoire, blanc/gris-beige miroir","200x60x201 cm",200,60,201,1307,"s19502624","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, gris-beige/brillant orange clair","200x60x201 cm",200,60,201,888,"s19597924","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc/bambou","218x51x222-350 cm",218,51,222,610,"s79161617","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","175x51x222-350 cm",175,51,222,340,"s69157376","",0],
    ["armoire","FLISAT","Combinaison de rangement ouverte, pin teinté blanc clair/blanc","88x38x117 cm",88,38,117,208.98,"s79624934","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","205x55x216 cm",205,55,216,505,"s49562824","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte, blanc","258x51x222-350 cm",258,51,222,1090,"s09187809","",0],
    ["armoire","PAX / REINSVOLL","Combinaison armoire, blanc/gris-beige","200x60x201 cm",200,60,201,1157,"s29502732","",0],
    ["armoire","ELVARLI","Combinaison armoire, blanc","205x55x216 cm",205,55,216,585,"s19315156","",0],
    ["armoire","PAX / TONSTAD","Combinaison armoire, blanc/blanc cassé","150x60x201 cm",150,60,201,613,"s79549020","",0],
    ["armoire","PAX / FORSAND","Combinaison armoire, blanc/blanc","150x60x201 cm",150,60,201,623,"s49529293","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, blanc/brillant orange clair","250x60x201 cm",250,60,201,1028,"s99596770","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","150x60x236 cm",150,60,236,943,"s59581662","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","200x60x236 cm",200,60,236,892,"s69581713","",0],
    ["armoire","ELVARLI","Combinaison de rangement ouverte","258x51x222-350 cm",258,51,222,640,"s59315159","",0],
    ["armoire","PAX / FARDAL","Combinaison armoire, gris-beige/brillant orange clair","150x60x201 cm",150,60,201,708,"s89590858","",0],
    ["armoire","PAX / FYRUDDEN","Combinaison armoire, blanc/bleu","200x60x236 cm",200,60,236,1000.99,"s99581721","",0],
    ["armoire","IDANÄS","Armoire ouverte, blanc","59x211 cm",59,49,211,229,"20458842","",0],
    ["commode","PLATSA","Banc avec rangement, blanc/Sannidal blanc","120x57x63 cm",120,57,63,198,"s69638111","",0],
    ["commode","STORKLINTA","Commode 6 tiroirs, blanc","140x50x75 cm",140,50,75,189,"70627550","",0],
    ["commode","STORKLINTA","Commode 3 tiroirs, blanc","70x50x75 cm",70,50,75,99.99,"30627533","",0],
    ["commode","STORKLINTA","Commode 6 tiroirs, blanc","70x50x120 cm",70,50,120,169,"70627545","",0],
    ["commode","STORKLINTA","Commode 4 tiroirs, blanc","70x50x98 cm",70,50,98,139,"40627537","",0],
    ["commode","LASTARE","Commode 4 tiroirs, blanc","80x42x100 cm",80,42,100,119,"60599350","",0],
    ["commode","GURSKEN","Commode 3 tiroirs, beige clair","69x67 cm",69,38,67,59.99,"00486327","",0],
    ["commode","STORKLINTA","Commode 5 tiroirs, blanc","40x50x120 cm",40,50,120,159,"40627542","",0],
    ["commode","LILLBERGET","Commode 6 tiroirs, blanc","140x43x68 cm",140,43,68,149,"40630479","",0],
    ["commode","ANKARUDDEN","Commode 6 tiroirs, avec 2 tiroirs intérieurs/motif chêne","139x48x87 cm",139,48,87,249,"20627147","",0],
    ["commode","RAST","Commode 3 tiroirs, pin","60x35x59 cm",60,35,59,59.99,"20609860","",0],
    ["commode","FÅGELFJÄLLET","Commode 6 tiroirs, blanc cassé","160x51x78 cm",160,51,78,329,"00611642","",0],
    ["commode","HEMNES","Commode 3 tiroirs, teinté blanc","108x96 cm",108,50,96,229,"80424745","Gris vert/teinté brun clair",{"hs":11}],
    ["commode","RÅDMANSÖ","Commode 6 tiroirs, brun motif noyer","159x48x81 cm",159,48,81,279,"90593605","",0],
    ["commode","LILLBERGET","Commode 3 tiroirs, blanc","70x43x68 cm",70,43,68,79.99,"80630477","",0],
    ["commode","KILBERGET","Commode 3 tiroirs, blanc","86x78 cm",86,41,78,109,"70609914","",{"hs":11}],
    ["commode","KILBERGET","Commode 6 tiroirs, blanc","144x78 cm",144,41,78,199,"20609916","",{"hs":11}],
    ["commode","HEMNES","Commode 8 tiroirs, teinté blanc","160x96 cm",160,50,96,399,"10239280","",{"hs":11}],
    ["commode","BRIMNES","Commode 3 tiroirs, blanc/verre givré","78x46x95 cm",78,46,95,99.99,"00392041","",0],
    ["commode","RÅDMANSÖ","Commode 3 tiroirs, brun motif noyer","90x48x81 cm",90,48,81,179,"20593604","",0],
    ["commode","BRIMNES","Commode 4 tiroirs, blanc/verre givré","78x46x124 cm",78,46,124,129,"90392046","",0],
    ["commode","FÅGELFJÄLLET","Commode 8 tiroirs, blanc cassé","160x51x101 cm",160,51,101,369,"90611647","",0],
    ["commode","FÅGELFJÄLLET","Commode 3 tiroirs, blanc cassé","82x51x78 cm",82,51,78,169,"40611640","",0],
    ["commode","LILLBERGET","Commode 5 tiroirs, blanc","70x43x108 cm",70,43,108,129,"60630478","",0],
    ["commode","GULLABERG","Commode 8 tiroirs, blanc","168x48x100 cm",168,48,100,349,"20609902","",0],
    ["commode","FÅGELFJÄLLET","Commode 4 tiroirs, blanc cassé","82x51x101 cm",82,51,101,199,"60611639","",0],
    ["commode","HAUGA","Commode 6 tiroirs, blanc","138x46x84 cm",138,46,84,229,"00581536","",0],
    ["commode","BRIMNES","Commode 4 tiroirs, blanc/verre givré","39x46x124 cm",39,46,124,99.99,"40392044","",0],
    ["commode","VIHALS","Commode 4 tiroirs, blanc/fonction ouverture/fixation","70x47x90 cm",70,47,90,149,"00483239","",0],
    ["commode","FÅGELFJÄLLET","Commode 6 tiroirs, blanc cassé","82x51x123 cm",82,51,123,259,"70611648","",0],
    ["commode","RÅDMANSÖ","Commode 5 tiroirs, brun motif noyer","70x48x132 cm",70,48,132,219,"40593603","",0],
    ["commode","KRONÖREN","Commode 2 tiroirs, pin","76x48x55 cm",76,48,55,55,"90610799","",0],
    ["commode","HAVSTA","Commode 6 tiroirs, gris-beige","121x47x89 cm",121,47,89,359,"30599479","",0],
    ["commode","KILBERGET","Commode 5 tiroirs, blanc","76x102 cm",76,41,102,179,"40609915","",{"hs":11}],
    ["commode","VIHALS","Commode 6 tiroirs, blanc/fonction ouverture/fixation","70x47x120 cm",70,47,120,189,"30483247","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x99 cm",160,47,99,399,"s29239505","",0],
    ["commode","BRIMNES","Commode 4 tiroirs, gris/verre givré","78x46x124 cm",78,46,124,129,"10602802","",0],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","120x76 cm",120,47,76,274,"s09239498","",0],
    ["commode","NORDLI","Commode 4 tiroirs, blanc","160x54 cm",160,47,54,239,"s49239496","",0],
    ["commode","TONSTAD","Commode 6 tiroirs, blanc cassé","120x47x91 cm",120,47,91,339,"80614627","",0],
    ["commode","GULLABERG","Commode 3 tiroirs, blanc","99x48x100 cm",99,48,100,199,"80609895","",0],
    ["commode","HAVSTA","Commode 3 tiroirs, gris-beige","81x47x89 cm",81,47,89,249,"90599476","",0],
    ["commode","TONSTAD","Commode 6 tiroirs, plaqué chêne","120x47x90 cm",120,47,90,339,"50614624","",0],
    ["commode","BJÖRKSNÄS","Commode 5 tiroirs, bouleau","90x47x90 cm",90,47,90,349,"70407299","",0],
    ["commode","HAUGA","Commode 3 tiroirs, blanc","70x46x84 cm",70,46,84,129,"20581521","",0],
    ["commode","LOTE","Commode 3 tiroirs, blanc","55x36x62 cm",55,36,62,39.99,"50293722","",0],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","120x99 cm",120,47,99,334,"s69276633","",0],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","120x54 cm",120,47,54,274,"s29239497","",0],
    ["commode","TONSTAD","Commode 4 tiroirs, plaqué chêne","82x47x90 cm",82,47,90,259,"30614615","",0],
    ["commode","SONGESAND","Commode 4 tiroirs, blanc","82x104 cm",82,50,104,159,"10366777","",0],
    ["commode","BRIMNES","Commode 3 tiroirs, gris/verre givré","78x46x95 cm",78,46,95,99.99,"30602801","",0],
    ["commode","NORDLI","Commode modulable 2 tir, blanc","80x45 cm",80,47,45,80,"10383461","",0],
    ["commode","VIHALS","Combinaison de rangement, blanc","165x47x90 cm",165,47,90,298,"s29442173","",0],
    ["commode","IDANÄS","Commode 6 tiroirs, blanc","162x95 cm",162,50,95,399,"10458710","",{"hs":16}],
    ["commode","IDANÄS","Commode 4 tiroirs, blanc","104x118 cm",104,50,118,299,"10458767","",{"hs":16}],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","80x145 cm",80,47,145,299,"s89239499","",0],
    ["commode","NORDLI","Commode modulable 3 tir, blanc","80x68 cm",80,47,68,120,"40383469","",0],
    ["commode","NORDLI","Commode 3 tiroirs, blanc","40x76 cm",40,47,76,139.99,"s39239835","",0],
    ["commode","TONSTAD","Commode 4 tiroirs, blanc cassé","82x47x91 cm",82,47,91,259,"70614618","",0],
    ["commode","HAUGA","Combinaison de rangement, blanc","208x116 cm",208,46,116,358.99,"s99575579","Gris",0],
    ["commode","VISTHUS","Commode 8 tiroirs, gris/blanc","122x96 cm",122,49,96,259,"10493445","",0],
    ["commode","SONGESAND","Commode 6 tiroirs, blanc","82x126 cm",82,50,126,229,"90366783","",0],
    ["commode","HAUGA","Commode 3 tiroirs avec tablette, blanc","70x46x116 cm",70,46,116,139,"50581529","",0],
    ["commode","SONGESAND","Commode 3 tiroirs, blanc","82x81 cm",82,50,81,139,"90366839","",0],
    ["commode","NORDLI","Commode 4 tiroirs, blanc","40x99 cm",40,47,99,189.99,"s79239843","",0],
    ["commode","NORDLI","Commode avec 12 tiroirs, blanc","160x145 cm",160,47,145,559,"s79239490","",0],
    ["commode","GULLABERG","Commode 6 tiroirs, blanc","89x48x122 cm",89,48,122,279,"40609897","",0],
    ["commode","NORDLI","Commode 2 tiroirs, blanc","80x54 cm",80,47,54,139,"s99239494","",0],
    ["commode","RACKNÄS","Commode 3 tiroirs, blanc/fixation murale","69x78 cm",69,40,78,79.99,"10594524","",{"hs":13}],
    ["commode","NORDLI","Commode modulable 3 tir, blanc","40x68 cm",40,47,68,90,"20383465","",0],
    ["commode","NORDLI","Commode 3 tiroirs, blanc","80x76 cm",80,47,76,179,"s69239495","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x54 cm",160,47,54,359,"s59239504","",0],
    ["commode","NORDLI","Commode 3 tiroirs, blanc","120x54 cm",120,47,54,229,"s69276567","",0],
    ["commode","NORDLI","Commode 9 tiroirs, blanc","160x76 cm",160,47,76,379,"s89239507","",0],
    ["commode","IDANÄS","Commode 6 tiroirs, blanc","84x135 cm",84,50,135,349,"20458700","",{"hs":16}],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","120x99 cm",120,47,99,364,"s79239503","",0],
    ["commode","NORDLI","Commode 2 tiroirs, blanc","40x54 cm",40,47,54,119.99,"s09239827","",0],
    ["commode","NORDLI","Commode avec 12 tiroirs, blanc","160x99 cm",160,47,99,519,"s59239491","",0],
    ["commode","NORDLI","Commode avec 12 tiroirs, blanc","120x145 cm",120,47,145,514,"s99239489","",0],
    ["commode","HAUGA","Combinaison de rangement, blanc","139x46x116 cm",139,46,116,268.99,"s29612071","",0],
    ["commode","NORDLI","Commode, blanc","40x54 cm",40,47,54,104.99,"s19276522","",0],
    ["commode","NORDLI","Commode modulable 2 tir, blanc","40x45 cm",40,47,45,70,"90383457","",0],
    ["commode","NORDLI","Commode modulable 2 tir, blanc","80x23 cm",80,47,23,65,"70471619","",0],
    ["commode","NORDLI","Commode 7 tiroirs, blanc","120x76 cm",120,47,76,299,"s39336884","",0],
    ["commode","NORDLI","Commode 3 tiroirs, blanc","80x192 cm",80,47,192,219,"s59295217","",0],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","160x54 cm",160,47,54,329,"s49276629","",0],
    ["commode","PLATSA","Commode 2 tiroirs, blanc/Fonnes blanc","60x57x53 cm",60,57,53,131,"s09277211","",0],
    ["commode","NORDLI","Commode 2 tiroirs, blanc","40x99 cm",40,47,99,159.99,"s49276549","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","80x99 cm",80,47,99,304,"s69336887","",0],
    ["commode","NORDLI","Commode 5 tiroirs, blanc","80x122 cm",80,47,122,289,"s29276550","",0],
    ["commode","NORDLI","Commode 7 tiroirs, blanc","80x122 cm",80,47,122,319,"s99239502","",0],
    ["commode","NORDLI","Commode modulable, blanc","40x45 cm",40,47,45,55,"40401901","",0],
    ["commode","NORDLI","Commode 7 tiroirs, blanc","80x99 cm",80,47,99,329.98,"s09248006","",0],
    ["commode","NORDLI","Commode 4 tiroirs, blanc","80x192 cm",80,47,192,244,"s89336872","",0],
    ["commode","NORDLI","Commode 9 tiroirs, blanc","160x99 cm",160,47,99,488.98,"s19248015","",0],
    ["commode","HAUGA","Combinaison de rangement, blanc","244x46x116 cm",244,46,116,447.99,"s99612077","",0],
    ["commode","NORDLI","Commode 5 tiroirs, blanc","120x76 cm",120,47,76,278.99,"s49248033","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x169 cm",160,47,169,488,"s69295349","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x169 cm",160,47,169,439,"s49295208","",0],
    ["commode","NORDLI","Commode 3 tiroirs, blanc","120x169 cm",120,47,169,269,"s39295138","",0],
    ["commode","NORDLI","Commode 5 tiroirs, blanc","120x169 cm",120,47,169,318.99,"s09295286","",0],
    ["commode","NORDLI","Commode 10 tiroirs, blanc","160x99 cm",160,47,99,478,"s29248010","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x192 cm",160,47,192,513.98,"s79295377","",0],
    ["commode","NORDLI","Commode 8 tiroirs, blanc","160x99 cm",160,47,99,448,"s19276621","",0],
    ["commode","NORDLI","Commode 6 tiroirs, blanc","160x169 cm",160,47,169,369,"s89295169","",0],
    ["chevet","STORKLINTA","Commode 2 tiroirs, blanc","40x50x53 cm",40,50,53,59.99,"00631414","",0],
    ["chevet","FÅGELFJÄLLET","Table chevet, blanc cassé","42x41x56 cm",42,41,56,59.99,"40627684","",0],
    ["chevet","KNARREVIK","Table chevet, noir","37x28x45 cm",37,28,45,12.99,"00576318","",0],
    ["chevet","STORKLINTA","Commode 2 tiroirs, motif chêne","40x50x53 cm",40,50,53,59.99,"20631413","",0],
    ["chevet","RÅDMANSÖ","Table de chevet, brun motif noyer","54x38x58 cm",54,38,58,99.99,"80593597","",0],
    ["chevet","GLADOM","Table/plateau, noir","45x53 cm",45,45,53,14.99,"50411990","Blanc|Bleu clair|Gris-vert foncé",{"rond":1}],
    ["chevet","KRONÖREN","Table de chevet, pin","39x32x55 cm",39,32,55,19.99,"00610807","",0],
    ["chevet","BRIMNES","Table de chevet, blanc","39x41x53 cm",39,41,53,49.99,"10234942","",0],
    ["chevet","GRÅFJÄLLET","Table de chevet, anthracite","45x36x59 cm",45,36,59,39.99,"20570221","",0],
    ["chevet","BLÄSTÅSEN","Table de chevet, gris-beige","50x37x76 cm",50,37,76,79.99,"70617570","",0],
    ["chevet","EKET","Rangement, effet chêne blanchi","35x25x35 cm",35,25,35,17.99,"90428842","",0],
    ["chevet","GILLERSBERG","Table de chevet, bambou/blanc","39x39x56 cm",39,39,56,29.99,"30608983","",0],
    ["chevet","NORDKISA","Table de chevet, bambou","40x40 cm",40,40,67,69.99,"60447677","",0],
    ["chevet","STORKLINTA","Commode 2 tiroirs, brun foncé motif chêne","40x50x53 cm",40,50,53,59.99,"60631411","",0],
    ["chevet","EKET","Élément mural à 2 tiroirs, blanc","35x35x35 cm",35,35,35,55,"s69329387","",0],
    ["chevet","TONSTAD","Table chevet, plaqué chêne","40x40x59 cm",40,40,59,129,"80489322","",0],
    ["chevet","GULLABERG","Table chevet, avec 1 tiroirs avec tablette/blanc","53x43x69 cm",53,43,69,69.99,"20561740","",0],
    ["chevet","HATTÅSEN","Table de chevet/étagère, blanc","",27,43,58,24.99,"80569234","",0],
    ["chevet","GULLABERG","Table de chevet, avec 1 tiroirs avec porte/blanc","38x40x75 cm",38,40,75,89.99,"20561764","",0],
    ["chevet","BLANKHÄLLAN","Table de chevet, vert/turquoise","",45,45,61,59.99,"70620997","Beige/rose",{"hs":26,"rond":1}],
    ["chevet","LACK","Étagère murale, blanc","30x26 cm",30,26,5,5.99,"50282177","Brun noir|Effet chêne blanchi|Rouge",0],
    ["chevet","STOMSÖ","Table de chevet à fixer au mur, motif bouleau blanc/bleu","36x29x20 cm",36,29,20,29.99,"70567805","",0],
    ["chevet","GRÅFJÄLLET","Table de chevet à fixer au mur, anthracite","42x29x31 cm",42,29,31,29.99,"00603114","",0],
    ["chevet","PLÖJKER","Table de chevet, gris foncé","41x41x50 cm",41,41,50,69.99,"30613550","",0],
    ["chevet","VIKHAMMER","Table chevet, blanc","40x39 cm",40,39,65,79.99,"00381764","",0],
    ["chevet","SKRUVBY","Table d'appoint, blanc","40x32 cm",32,40,58,49.99,"80532009","Bleu noir",{"hs":2}],
    ["chevet","VIKHAMMER","Table chevet, noir","40x39 cm",40,39,65,79.99,"20388972","",0],
    ["chevet","TOLKNING","Table de chevet, fait main, 52 cm","",52,52,70,89.99,"20512660","",{"rond":1}],
    ["chevet","PLATSA","Table de chevet, blanc/Kalbåden effet pin","60x42x83 cm",60,42,83,153,"s39585802","",0],
    ["chevet","HAUGA","Table de chevet, blanc","40x36 cm",40,36,63,49.99,"00488963","",0],
    ["chevet","IKEA PS 2026","Table de chevet, pin avec porte rabattable","30x30x50 cm",30,30,50,49.99,"60619942","",0],
    ["chevet","EKET","Combinaison rangement avec pieds, blanc/effet chêne blanchi","35x35x80 cm",35,35,80,89.99,"s19286413","",0],
    ["chevet","PERJOHAN","Tabouret avec rangement, pin","",49,28,45,34.99,"80485338","",0],
    ["chevet","VIHALS","Table de chevet, blanc","37x37 cm",37,37,58,39.99,"80488737","",0],
    ["chevet","LIXHULT","Rangement, métal/anthracite","35x60 cm",35,35,82,54.99,"20476520","",{"hs":21}],
    ["chevet","KVISTBRO","Table de rangement, noir, 44 cm","",44,44,42,29.99,"90480401","Blanc",{"rond":1}],
    ["chevet","BJÖRKSNÄS","Table de chevet, bouleau","48x38 cm",48,38,69,99.99,"70407360","",{"hs":20}],
    ["chevet","JONAXEL","Étagère, blanc","50x51x70 cm",50,51,70,39.99,"70419971","",0],
    ["chevet","BAGGBODA","Table d'appoint, blanc","71x50 cm",50,71,47,79.99,"20556507","",0],
    ["chevet","VITTSJÖ","Table pour ordinateur portable, brun noir/verre","35x65 cm",35,55,65,35,"00250249","",0],
    ["chevet","BURVIK","Table d'appoint, blanc, 38 cm","",38,38,45,39.99,"60340389","Noir",{"rond":1}],
    ["chevet","TÅNEBRO","Table d'appoint, intérieur/extérieur/beige-gris clair, 46 cm","",46,46,60.5,19.99,"60554988","Intérieur/extérieur/anthracite|Intérieur/extérieur/jaune pâle|Intérieur/extérieur/rose clair",{"rond":1}],
    ["chevet","TYSSEDAL","Table chevet, blanc","51x40 cm",51,40,59,99.99,"70299959","",{"hs":16}],
    ["chevet","BJÖRKÅSEN","Table pour ordinateur portable, beige","",46,35,65,39.99,"90467838","Jaune vert",0],
    ["chevet","BRÄNNBOLL","Étagère sur roulettes, blanc","56x62 cm",56,40,62,59.99,"60586258","",0],
    ["chevet","BORGEBY","Table d'appoint, plaqué bouleau, 46 cm","",46,46,55,69.99,"80619880","Noir",{"hs":6,"rond":1}],
    ["chevet","LIXHULT","Rangement, métal/gris","60x35 cm",60,35,57,54.99,"70328669","",{"hs":21}],
    ["chevet","EKET","Élément mural porte vitrée, gris foncé","35x35x35 cm",35,35,35,44.99,"s69336359","",0],
    ["chevet","STORKLINTA","Commode 2 tiroirs, motif chêne/avec plateau en verre","40x50x53 cm",40,50,53,64.99,"s99654878","",0],
    ["chevet","TINGBY","Desserte roulante, blanc","50x50 cm",50,50,45,49.99,"20295930","Gris",0],
    ["chevet","STORKLINTA","Table de chevet avec plateau verre, brun foncé motif chêne/avec plateau en verre","40x50x53 cm",40,50,53,64.99,"s69654865","",0],
    ["chevet","STORKLINTA","Commode 2 tiroirs, blanc/avec plateau en verre","40x50x53 cm",40,50,53,64.99,"s79654879","",0],
    ["miroir","LINDBYN","Miroir, couleur or","60x170 cm",60,3,170,89.99,"60597959","Noir",0],
    ["miroir","HOVET","Miroir, noir","78x196 cm",78,6,196,149,"70515915","Aluminium|Couleur or",0],
    ["miroir","LILJETRÄD","Miroir, blanc","30x115 cm",30,3,115,24.99,"20592100","Noir",0],
    ["miroir","LÖNSÅS","Miroir","21x30 cm",21,3,30,1.79,"50471026","",0],
    ["miroir","LINDBYN","Miroir, couleur or, 50 cm","",50,2,50,34.99,"50600293","Noir",{"rond":1}],
    ["miroir","LINDBYN","Miroir, couleur or","60x120 cm",60,3,120,69.99,"90485597","Noir",0],
    ["miroir","IKORNNES","Miroir sur pied, frêne","52x167 cm",52,52,167,99.99,"30298396","",0],
    ["miroir","STOCKHOLM","Miroir, plaqué noyer, 60 cm","",60,10,60,69.99,"30446896","",{"rond":1}],
    ["miroir","LINDBYN","Miroir, couleur or","80x80 cm",80,3,80,69.99,"00633936","Noir",0],
    ["miroir","NISSEDAL","Miroir, effet chêne blanchi","40x150 cm",40,3,150,49.99,"80390868","Blanc|Motif noyer|Noir",0],
    ["miroir","KNAPPER","Miroir sur pied, blanc","48x160 cm",48,53,160,49.99,"00396242","",0],
    ["miroir","LÄRBRO","Miroir","48x120 cm",48,3,120,19.99,"00601775","",0],
    ["miroir","LINDBYN","Miroir, noir","40x130 cm",40,3,130,59.99,"20458615","",0],
    ["miroir","SVARTBJÖRK","Miroir décoratif convexe, noir, 41 cm","",41,5,41,29.99,"80517122","",{"rond":1}],
    ["miroir","LINDBYN","Miroir, noir, 80 cm","",80,3,80,59.99,"50458614","Couleur or",{"rond":1}],
    ["miroir","LÄRBRO","Miroir","20x120 cm",20,3,120,9.99,"70601772","",0],
    ["miroir","GRINSBOL","Miroir, rotin, 55 cm","",55,3,55,29.99,"30518464","",{"rond":1}],
    ["miroir","LETTAN","Miroir","60x95 cm",60,1,95,35,"80556401","",0],
    ["miroir","DAGGKAPRIFOL","Miroir, jaune foncé","60x100 cm",60,1.5,100,44.99,"00617922","",0],
    ["miroir","NYPONBUSKE","Miroir, noir","65x135 cm",65,3.5,135,49.99,"70609886","Gris-beige",0],
    ["miroir","NYPONBUSKE","Miroir, gris-beige","40x135 cm",40,3.5,135,39.99,"00609880","Noir",0],
    ["miroir","NISSEDAL","Miroir, blanc","65x65 cm",65,3,65,39.99,"20320312","Motif noyer|Noir|Effet chêne blanchi",0],
    ["miroir","BLÅSER","Miroir, 38 cm","",38,3,38,5.99,"10534337","",{"rond":1}],
    ["miroir","DVÄRGSYREN","Miroir, plaqué chêne","40x50 cm",40,8,50,39.99,"30591591","Plaqué noyer",0],
    ["miroir","TOFTBYN","Miroir, blanc","75x165 cm",75,3,165,99.95,"60641405","Noir",0],
    ["miroir","STOCKHOLM","Miroir, plaqué chêne, 80 cm","",80,10,80,99.95,"90591588","",{"rond":1}],
    ["miroir","SVANSELE","Miroir, couleur or","78x78 cm",78,3,78,79.99,"30433747","",0],
    ["miroir","TRENSUM","Miroir, acier inoxydable","",17,3,33,6.99,"24524485","",{"rond":1}],
    ["miroir","SVANSELE","Miroir, couleur or","73x158 cm",73,3,158,129,"70479291","",0],
    ["miroir","DAGGKAPRIFOL","Miroir, rose clair, 40 cm","",40,1.5,40,19.99,"50595649","",{"rond":1}],
    ["miroir","SONGE","Miroir, couleur argent","91x130 cm",91,3,130,119,"10336950","",0],
    ["miroir","DAGGKAPRIFOL","Miroir, vert foncé, 60 cm","",60,1.5,60,39.99,"30617925","",{"rond":1}],
    ["miroir","LINDBYN","Miroir, noir","28x60 cm",28,2,60,19.99,"30590445","",0],
    ["miroir","RUNDOXEL","Miroir, blanc","30x40 cm",30,3,40,5.99,"30602132","",0],
    ["miroir","IKORNNES","Miroir de table, frêne","27x40 cm",27,3,40,29.99,"00306920","",0],
    ["miroir","LINDBYN","Miroir, noir, 110 cm","",110,3,110,99.95,"90439218","Couleur or",{"rond":1}],
    ["miroir","IKEA PS 2026","Miroir","26x38 cm",26,11,38,9.99,"40622790","",0],
    ["miroir","NYPONBUSKE","Miroir, gris-beige","65x65 cm",65,3.5,65,29.99,"20609884","Noir",0],
    ["miroir","KANDLENÖT","Miroir, rotin","60x140 cm",60,2,140,89.99,"30611018","",0],
    ["miroir","STOCKHOLM","Miroir, plaqué chêne, 60 cm","",60,10,60,69.99,"50591585","",{"rond":1}],
    ["miroir","KARMSUND","Miroir sur pied, noir","40x167 cm",40,45,167,79.99,"40294982","",0],
    ["miroir","DVÄRGSYREN","Miroir, plaqué noyer","28x37 cm",28,3,37,24.99,"00591597","Plaqué chêne",0],
    ["miroir","NISSEDAL","Combinaison de miroirs, noir","130x150 cm",40,3,150,149.97,"s19275301","Blanc|Effet chêne blanchi",0],
    ["miroir","HOLMÖARNA","Miroir, forme de nuage","30x18 cm",30,3,18,3.99,"00632282","En forme de coeur",0],
    ["miroir","EDSGARN","Miroir, motif chêne, 80 cm","",80,2,80,69.99,"00635308","Motif noyer",{"rond":1}],
    ["miroir","RAGGARÖN","Miroir, noir","60x90 cm",60,2,90,49.99,"10620274","",0],
    ["miroir","STOCKHOLM","Miroir, plaqué noyer, 80 cm","",80,10,80,99.95,"60249960","",{"rond":1}],
    ["miroir","KARMSUND","Miroir de table, noir","27x43 cm",27,3,43,12.99,"00294979","",0],
    ["miroir","PINGSTSYREN","Miroir, blanc","60x80 cm",60,4,80,49.99,"10610091","Jaune-beige clair",0],
    ["miroir","KVALMSÖ","Miroir, beige, 90 cm","",90,2,90,79.99,"90635304","",{"rond":1}],
    ["miroir","GRYTÅS","Miroir, couleur or, 40 cm","",40,3,40,24.99,"40516228","Couleur argent",{"rond":1}],
    ["miroir","NYSJÖN","Miroir avec étagère, blanc","50x60 cm",50,14,60,19.99,"60470837","",0],
    ["miroir","LINDBYN","Miroir de table, noir","14x27 cm",14,3,27,19.99,"50486339","",0],
    ["miroir","STOCKHOLM 2025","Miroir, plaqué chêne","90x90 cm",90,3,90,149,"00590814","",0],
    ["miroir","HOLMÖARNA","Miroir, en forme de coeur","27x27 cm",27,3,27,4.99,"30632285","Forme de nuage",0],
    ["miroir","EKFÄNN","Miroir avec éclairage intégré, intensité lumineuse réglable fixation murale/noir","",20,40,20,29.99,"90594006","",{"rond":1}],
    ["miroir","PINGSTSYREN","Miroir, jaune-beige clair","60x120 cm",60,4,120,79.99,"70610093","Blanc",0],
    ["miroir","FRÄCK","Miroir, acier inoxydable","",17,3,17,7.99,"38006200","",{"rond":1}],
    ["miroir","KOMPISHÄNG","Miroir, pin","20x40 cm",20,16,40,14.99,"50628800","",0],
    ["miroir","KONSTRUNDA","Miroir, noir","60x170 cm",60,3,170,99.95,"80611431","",0],
    ["miroir","GRYTÅS","Miroir, couleur argent, 25 cm","",25,3,25,12.99,"20516229","Couleur or",{"rond":1}],
    ["miroir","FAXÄLVEN","Miroir avec éclairage intégré","60x95 cm",60,8,95,149.99,"s79516703","",0],
    ["miroir","EKFÄNN","Miroir de table éclairage intégré, intensité lumineuse réglable/noir","",20,40,20,24.99,"90591852","",{"rond":1}],
    ["miroir","FAXÄLVEN","Miroir avec éclairage intégré, 80 cm","",80,13.5,80,159.99,"s29516705","",{"rond":1}],
    ["miroir","KÄRRSJÖN","Miroir avec éclairage intégré, anti-buée","60x80 cm",60,3,80,99.95,"60613394","",0],
    ["miroir","SMULTRONTRÄD","Miroir","20x40 cm",20,3,40,7.99,"80608570","",0],
    ["soulit","SOCKERBIT","Boîte de rangement avec couvercle, blanc","50x77x19 cm",50,77,19,19.99,"20411524","",0],
    ["soulit","LENAST","Rangement pour lit, gris clair","57x60 cm",57,60,12,14.99,"40617562","",0],
    ["soulit","MALM","Rangement pr lit haut, blanc, 200 cm","",100,62,29,65,"40249541","Brun noir",{"ml":200}],
    ["soulit","SONGESAND","Rangements lit, 2 p, blanc, 200 cm","",199,67,23,50,"30372536","",{"ml":200}],
    ["soulit","GLADSTAD","Boîte rangement lit matelassé, Kabusa gris clair, 200 cm","",100,60,19,70,"10498424","",{"ml":200}],
    ["soulit","VIHALS","Rangements lit, 2 p, blanc, 200 cm","",201,58,24,65,"30595117","",{"ml":200}],
    ["soulit","SMYGA","Rangement lit, gris clair","99x91x29 cm",99,91,29,90,"70507821","",0],
  ];
  // Couleur de la fiche IKEA -> teinte et matière. Le plus précis d'abord.
  const TEINTES = [
    [/miroir/, '#d4d8d8', 'miroir'], [/verre/, '#cfd8d6', 'verre'],
    [/blanc cass|cr[eè]me|[eé]cru/, '#ece6d9'], [/teint[eé] blanc|blanchi/, '#e4dacb', 'chene'],
    [/noir-brun|brun noir|brun-noir/, '#3b302a', 'chene'], [/noyer/, '#6a4a34', 'bois'],
    [/ch[eê]ne fonc/, '#7d5b3f', 'chene'], [/ch[eê]ne/, '#c9a67a', 'chene'], [/bouleau/, '#dfc7a0', 'bouleau'], [/h[eê]tre/, '#d9b68b', 'bouleau'],
    [/pin/, '#d8b585', 'pin'], [/bambou/, '#d0ae78', 'bois'], [/rotin|jonc|osier/, '#c09a60', 'rotin'], [/acacia|teck|eucalyptus/, '#a5754c', 'bois'],
    [/anthracite/, '#3c3f42'], [/gris fonc|gris-fonc/, '#5a5d5f'], [/gris clair|gris-clair/, '#c9c9c5'], [/gris-beige|gris beige|beige-gris/, '#aaa396'],
    [/gris-vert|gris vert/, '#8e9a8c'], [/gris-bleu|bleu gris/, '#7d8b98'], [/gris/, '#8f9090'],
    [/brun fonc|brun-fonc/, '#4e3b2e', 'bois'], [/brun clair/, '#a88563', 'bois'], [/brun-beige|brun beige/, '#9c826a'], [/brun/, '#7a5a42', 'bois'],
    [/beige fonc/, '#b9a383'], [/beige clair/, '#e2d7c3'], [/beige/, '#d6c6aa'], [/naturel/, '#d8c3a0'],
    [/vert fonc/, '#3f5a48'], [/vert clair|vert p[aâ]le/, '#b7c9a8'], [/vert/, '#6c8a64'], [/turquoise/, '#4f9a96'],
    [/bleu fonc/, '#2f4560'], [/bleu clair/, '#a9c0d6'], [/bleu/, '#4f6f95'],
    [/rose/, '#e3b8b6'], [/jaune/, '#e2c160'], [/orange|rouille/, '#c8693a'], [/rouge|bordeaux/, '#9a3b34'],
    [/noir/, '#262626'], [/blanc/, '#f2f1ec'], [/argent|acier|alu|m[eé]tal/, '#b9bcbe'],
  ];
  const teinte = s => { s = (s || '').toLowerCase(); for (const [re, hex, m] of TEINTES) if (re.test(s)) return { hex, m }; return null; };
  const TISSU = /matelass|rembourr|convertible|canap|chauffeuse|fauteuil|banquette 2p|kelinge|vissle|naggen|knisa|kabusa|gunnared|skiftebo|idekulla|tibbleby|ransta|kilanda|vansta|tallmyra|kulsta|gr[aä]sbo|silkeryd|johanneshov|grann|mosshed|fridtuna|tonerud|vittangi|gransel|kn[aä]b[aä]ck|klovsta|bomstad|gunnared|vissle/i;
  const nombre = (s, re) => { const m = (s || '').match(re); return m ? +m[1] : 0; };

  // ---------- Literie, commune à tous les lits ----------
  function literie(g, h, W, D, top, zc, col, gr) {
    const { matiere, couette, oreiller, shade } = h;
    matiere('coton');
    couette(g, W, D * 0.72, 0, top + 4, zc + D * 0.13, col, { chute: Math.min(16, W * 0.12), pied: 13, gonfle: 2.6, graine: gr });
    couette(g, W + 1, D * 0.12, 0, top + 7.4, zc + D * 0.13 - D * 0.36 + D * 0.06, shade(col, 1.5), { chute: Math.min(15, W * 0.11), pied: 0, gonfle: 0.6, graine: gr + 2, rond: 8 });
    const deux = W >= 120, px = deux ? W * 0.25 : 0, pz = zc - D / 2 + 22;
    (deux ? [-1, 1] : [0]).forEach((a, k) => oreiller(g, Math.min(W * 0.46, 64), 15, 40, a * px, top - 1, pz, '#f2f0ea', { penche: 0.44, tourne: -a * 0.04, graine: k + 2 }));
    matiere(null);
  }
  const COUETTES = ['#9fb2bd', '#d9d2c4', '#b98f7c', '#a9b49a', '#e7e3da', '#c7b7a3'];

  // ---------- Lits ----------
  // i.x : ht (tête de lit), hp (pied de lit), hs (vide dessous), mw / ml (matelas)
  function lit(g, i, h) {
    const { B, matelas, panneau, shade, matiere, pied, facade } = h;
    const { w: W, d: D, h: H, color: c } = i, x = i.x || {}, t = (i.label || '').toLowerCase();
    const mw = Math.min(x.mw || W - 10, W - 2), ml = Math.min(x.ml || D - 10, D - 2), mou = TISSU.test(t), col = COUETTES[(i.n || 0) % COUETTES.length];
    if (/superpos/.test(t)) return superpose(g, i, h, mw, ml, col);
    if (/mezzanine/.test(t)) return mezzanine(g, i, h, mw, ml, col);
    if (/b[eé]b[eé]/.test(t)) return bebe(g, i, h, mw, ml);
    if (/banquette|divan|d'appoint|empilable/.test(t)) return banquette(g, i, h, mw, ml, col);
    const hs = x.hs != null ? x.hs : /coffre|rangement|tiroir|bo[iî]tes/.test(t) ? 0 : 12;
    const ht = x.ht || H, hp = x.hp || Math.min(H, 40);
    const base = Math.max(8, Math.min(hp > 20 ? hp - 14 : hp, hs + 8, 34)), cadre = base + 4;
    const zc = 0, epT = mou ? 9 : 4;
    if (mou) matiere('tissu');
    // tête de lit
    panneau(g, W, ht, epT, 0, 0, -D / 2, c, { rayon: mou ? 4 : 0.6, chant: mou ? 3 : 0.3 });
    // pied de lit, s'il dépasse le matelas
    if (hp > cadre + 6 && !/tapissier|sommier/.test(t)) panneau(g, W, hp, mou ? 7 : 3.5, 0, 0, D / 2 - (mou ? 7 : 3.5), c, { rayon: mou ? 3 : 0.5, chant: mou ? 2 : 0.3 });
    // côtés : coffre plein, tiroirs ou longerons sur pieds
    const plein = hs < 4, y0 = plein ? 0 : hs, haut = cadre - y0;
    [-1, 1].forEach(a => B(g, mou ? 6 : 2.4, haut, D - epT - 1, a * (W / 2 - (mou ? 3 : 1.2)), y0, epT / 2, c));
    B(g, W - 2, haut, mou ? 6 : 2.4, 0, y0, D / 2 - (mou ? 3 : 1.2), c);
    if (/rangement|tiroir|bo[iî]tes|gigogne/.test(t) && !/coffre/.test(t)) {      // tiroirs ou boîtes sur les côtés
      const n = /4/.test(t) ? 2 : 1, lg = (D - 30) / n;
      matiere(null);
      [-1, 1].forEach(a => { for (let k = 0; k < n; k++) {
        const z = -D / 2 + 22 + lg * (k + 0.5), hh = Math.max(12, cadre - 8), cote = new THREE.Group();     // repère tourné vers le côté du lit
        cote.position.set(a * W / 200, 0, z / 100); cote.rotation.y = a * Math.PI / 2; g.add(cote);
        facade(cote, lg - 3, hh, 0, 2, 1.4, c, { ouvre: 'tiroir', prof: Math.min(W / 2 - 8, 60), e: 1.6 });
      } });
    }
    matiere(null);
    if (!plein) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 6), hs, b * (D / 2 - 6)], [a * (W / 2 - 6), 0, b * (D / 2 - 6)], 2.2, 1.8, mou ? '#2c2a28' : shade(c, 0.9), 0.6));
    if (/tapissier|sommier/.test(t)) {      // sommier tapissier : un socle épais habillé de tissu
      matiere('tissu'); B(g, mw, cadre - y0 + 10, ml, 0, y0, epT / 2, c); matiere(null);
      matelas(g, mw, 22, ml - 2, 0, cadre + 10, epT / 2, '#efece6');
      literie(g, h, mw, ml - 4, cadre + 32, epT / 2, col, i.n || 1);
      return;
    }
    if (/baldaquin/.test(t)) {
      matiere(null);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, 3, H, 3, a * (W / 2 - 1.5), 0, b * (D / 2 - 1.5), c, 0.4, 0.6));
      [-1, 1].forEach(a => { B(g, 2, 2, D, a * (W / 2 - 1.5), H - 2, 0, c, 0.4, 0.6); B(g, W, 2, 2, 0, H - 2, a * (D / 2 - 1.5), c, 0.4, 0.6); });
    }
    let dessus = g;
    if (/coffre/.test(t) && plein) {         // lit coffre : on soulève le sommier par le pied, le rangement est dessous
      B(g, W - 6, 1, D - epT - 4, 0, 1, epT / 2, shade(c, 0.62));
      dessus = h.ouvrant(g, 'couvercle', { y: base, z: -D / 2 + epT + 2, angle: 0.62 });
    }
    B(dessus, W - 8, 2, D - 10, 0, base - 2, zc, '#cdbd9c', 0.8);       // sommier à lattes
    matelas(dessus, mw, 18, ml - 2, 0, base, zc + epT / 2 - 1, '#efece6');
    literie(dessus, h, mw, ml - 4, base + 18, zc + epT / 2 - 1, col, i.n || 1);
  }
  function banquette(g, i, h, mw, ml, col) {         // lit de jour : dossier sur un grand côté, accoudoirs aux bouts
    const { B, matelas, panneau, oreiller, matiere, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, x = i.x || {}, base = Math.max(20, Math.min(40, (x.hs || 12) + 18)), bout = Math.min(H, x.ht || H);
    [-1, 1].forEach(b => panneau(g, W, bout, 3.5, 0, 0, b * (D / 2) - (b > 0 ? 3.5 : 0), c, { rayon: 0.5, chant: 0.3 }));
    panneau(g, 3.5, Math.min(H, bout + 10), D - 7, -W / 2 + 1.75, 0, -D / 2 + 3.5, c, { rayon: 0.5, chant: 0.3 });
    B(g, 2.4, base, D - 7, W / 2 - 1.2, 0, 0, c);
    B(g, W - 6, base, 2.4, 0, 0, 0, shade(c, 0.85));
    matelas(g, mw, 14, ml - 4, 1.5, base, 0, '#efece6');
    matiere('coton');
    [-1, 0, 1].forEach((k, n) => oreiller(g, 46, 40, 14, -W / 2 + 12, base + 14, k * (ml / 3.2), shade(col, 0.95 + n * 0.05), { roule: 0.5, tourne: Math.PI / 2, graine: n + 4 }));
    matiere(null);
  }
  function mezzanine(g, i, h, mw, ml, col) {
    const { B, matelas, matiere, plateau, facade } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase(), haut = Math.max(100, H - 45), p = 5;
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, p, H, p, a * (W / 2 - p / 2), 0, b * (D / 2 - p / 2), c, 0.5, /gris|noir/.test(t) ? 0.5 : 0));
    [-1, 1].forEach(a => { B(g, 2.5, 14, D - p * 2, a * (W / 2 - 1.25), haut - 14, 0, c); B(g, W - p * 2, 14, 2.5, 0, haut - 14, a * (D / 2 - 1.25), c); });
    // garde-corps
    B(g, 2.5, 4, D - p * 2, W / 2 - 1.25, H - 4, 0, c); B(g, 2.5, 4, D - p * 2, -W / 2 + 1.25, H - 4, 0, c);
    B(g, W - p * 2, 4, 2.5, 0, H - 4, -D / 2 + 1.25, c); B(g, W - p * 2, 4, 2.5, 0, H - 4, D / 2 - 1.25, c);
    // échelle sur le grand côté
    const ez = D / 2 - 30;
    [-1, 1].forEach(a => B(g, 2.5, haut + 30, 4, W / 2 + 2, 0, ez + a * 18, c));
    for (let y = 25; y < haut; y += 28) B(g, 2.5, 2.5, 36, W / 2 + 2, y, ez, c);
    B(g, W - 6, 2, D - 8, 0, haut - 2, 0, '#cdbd9c', 0.8);
    matelas(g, mw - 4, 12, ml - 6, 0, haut, 0, '#efece6');
    literie(g, h, mw - 4, ml - 8, haut + 12, 0, col, i.n || 1);
    if (/bureau|plateau|table/.test(t)) {
      plateau(g, W - p * 2 - 2, 55, 2.5, 0, 72, -D / 2 + 30, c, { rayon: 0.4 });
      if (/tiroir/.test(t)) {           // caisson à tiroirs sous le plateau
        B(g, 42, 70, 50, W / 2 - p - 22, 0, -D / 2 + 30, c);
        for (let k = 0; k < 3; k++) facade(g, 42, 23, W / 2 - p - 22, k * 23.3, -D / 2 + 55.5, c, { ouvre: 'tiroir', prof: 42, e: 1.4, poignee: 'barre', l: 8, couleurPoignee: '#8a8d8f' });
      }
    }
  }
  function superpose(g, i, h, mw, ml, col) {
    const { B, matelas, shade } = h;
    const { w: W, d: D, h: H, color: c } = i, p = 5, bas = 22, haut = Math.max(100, H - 50);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, p, H, p, a * (W / 2 - p / 2), 0, b * (D / 2 - p / 2), c));
    [bas, haut].forEach((y, n) => {
      [-1, 1].forEach(a => { B(g, 2.5, 12, D - p * 2, a * (W / 2 - 1.25), y - 12, 0, c); B(g, W - p * 2, 12, 2.5, 0, y - 12, a * (D / 2 - 1.25), c); });
      B(g, W - 6, 2, D - 8, 0, y - 2, 0, '#cdbd9c', 0.8);
      matelas(g, mw - 4, 12, ml - 6, 0, y, 0, '#efece6');
      literie(g, h, mw - 4, ml - 8, y + 12, 0, n ? col : shade(col, 1.1), (i.n || 1) + n);
    });
    [-1, 1].forEach(a => B(g, 2.5, 4, D - p * 2, a * (W / 2 - 1.25), H - 4, 0, c));
    const ez = D / 2 - 30;
    [-1, 1].forEach(a => B(g, 2.5, H - 10, 4, W / 2 + 2, 0, ez + a * 18, c));
    for (let y = 30; y < haut; y += 28) B(g, 2.5, 2.5, 36, W / 2 + 2, y, ez, c);
  }
  function bebe(g, i, h, mw, ml) {
    const { B, matelas, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, base = Math.max(20, H - 70), p = 4;
    matiere(null);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B(g, p, H, p, a * (W / 2 - p / 2), 0, b * (D / 2 - p / 2), c));
    [-1, 1].forEach(a => {
      [base - 6, H - 4].forEach(y => { B(g, 2.5, 4, D - p * 2, a * (W / 2 - 1.5), y, 0, c); B(g, W - p * 2, 4, 2.5, 0, y, a * (D / 2 - 1.5), c); });
      for (let z = -D / 2 + 9; z < D / 2 - 6; z += 8) B(g, 1.8, H - base - 2, 1.8, a * (W / 2 - 1.5), base - 2, z, c);
      for (let xx = -W / 2 + 9; xx < W / 2 - 6; xx += 8) B(g, 1.8, H - base - 2, 1.8, xx, base - 2, a * (D / 2 - 1.5), c);
    });
    B(g, W - 6, 2, D - 6, 0, base - 2, 0, '#cdbd9c', 0.8);
    matelas(g, Math.min(mw, W - 8), 10, Math.min(ml, D - 8), 0, base, 0, '#f3f1ec');
  }

  // ---------- Canapés convertibles ----------
  function canape(g, i, h) {
    const { B, soft, matiere, shade, pied } = h;
    const { w: W, d: D, h: H, color: c } = i, x = i.x || {}, t = (i.label || '').toLowerCase();
    const assise = x.as || 44, accoudoir = /chauffeuse|sans accoudoir|fauteuil convertible|hammarn/.test(t) ? 0 : /larges/.test(t) ? 24 : 15;
    const meri = /m[eé]ridienne|angle/.test(t) && D > 120, prof = meri ? Math.min(100, D * 0.6) : D, sol = 12;
    matiere('tissu');
    B(g, W - accoudoir * 2, assise - sol - 12, prof - 18, 0, sol, -D / 2 + prof / 2 + 9, shade(c, 0.9));        // socle
    const n = Math.max(1, Math.round((W - accoudoir * 2) / 70)), cw = (W - accoudoir * 2) / n;
    for (let k = 0; k < n; k++) soft(g, cw - 1, 14, prof - 22, -W / 2 + accoudoir + cw * (k + 0.5), assise - 14, -D / 2 + prof / 2 + 10, c);
    for (let k = 0; k < n; k++) soft(g, cw - 2, H - assise + 4, 22, -W / 2 + accoudoir + cw * (k + 0.5), assise - 6, -D / 2 + 13, c);
    B(g, W, Math.min(H, assise + 22) - sol, 12, 0, sol, -D / 2 + 6, shade(c, 0.94));
    if (accoudoir) [-1, 1].forEach(a => soft(g, accoudoir, Math.min(H, assise + 20) - sol + 6, prof, a * (W / 2 - accoudoir / 2), sol - 4, -D / 2 + prof / 2, c));
    if (meri) {
      const mw = Math.min(95, W * 0.4);
      B(g, mw, assise - sol - 12, D - prof + 10, W / 2 - accoudoir - mw / 2, sol, -D / 2 + prof + (D - prof) / 2 - 5, shade(c, 0.9));
      soft(g, mw - 2, 14, D - prof + 8, W / 2 - accoudoir - mw / 2, assise - 14, -D / 2 + prof + (D - prof) / 2 - 4, c);
    }
    matiere(null);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 8), sol, b * (D / 2 - 8)], [a * (W / 2 - 8), 0, b * (D / 2 - 8)], 1.8, 1.4, '#2c2a28', 0.5));
  }

  // ---------- Armoires et penderies ----------
  const STYLE = s => {
    s = (s || '').toLowerCase();
    if (/miroir|auli|vikedal|[aå]nstad/.test(s)) return 'miroir';
    if (/sekken|f[aå]rvik|verre|givr/.test(s)) return 'verre';
    if (/bergsbo|flisberget|sandvikodden|fevik|grimo/.test(s)) return 'moulure';
    if (/hasvik|hokksund|brillant/.test(s)) return 'brillant';
    if (/mehamn/.test(s)) return 'barres';
    return 'lisse';
  };
  function portes(g0, h, W, H, y0, z, coul, style, n, c, coulissant) {
    const { B, facade, matiere, mat, add, shade } = h;
    const pw = W / n;
    for (let k = 0; k < n; k++) {
      const x0 = -W / 2 + pw * (k + 0.5), zz = coulissant ? z - (k % 2) * 2.2 : z, ww = coulissant ? pw + 2 : pw;
      // Portes battantes : une porte seule à gauche si leur nombre est impair, puis des paires qui s'ouvrent par le milieu ;
      // la poignée est du côté opposé aux charnières. Coulissantes : chacune glisse vers le milieu.
      const droite = (k - n % 2) % 2 === 1, sens = droite ? -1 : 1;
      const g = coulissant ? h.ouvrant(g0, 'glisse', { x: x0, z: zz, course: pw - 4, sens: x0 < 0 ? 1 : -1 })
        : h.ouvrant(g0, droite ? 'droite' : 'gauche', { x: x0 - sens * pw / 2, y: y0, z: zz, angle: n > 2 ? 1.5 : undefined });
      if (style === 'miroir' || style === 'verre') {
        B(g, ww - 0.3, H, 1.8, x0, y0, zz - 0.9, shade(coul.cadre, 1), 0.4);
        matiere(null);
        const m = add(g, new THREE.BoxGeometry((ww - 5) / 100, (H - 5) / 100, 0.004), mat(style === 'miroir' ? '#e2e6e6' : '#dfe6e3', style === 'miroir' ? 0.04 : 0.35, style === 'miroir' ? 1 : 0.1), x0, y0 + H / 2, zz + 0.2);
        m.castShadow = false;
      } else {
        facade(g, ww, H, x0, y0, zz, coul.porte, { e: 1.8, moulure: style === 'moulure' ? 6 : 0, rough: style === 'brillant' ? 0.18 : undefined, poignee: coulissant ? null : 'barre', l: 14, xp: x0 + sens * (pw / 2 - 5), yp: y0 + H * 0.5, couleurPoignee: '#8a8d8f' });
        if (style === 'barres') for (let y = y0 + H / 5; y < y0 + H; y += H / 5) B(g, ww - 2, 1.2, 0.6, x0, y, zz + 0.3, shade(coul.porte, 0.8), 0.5);
      }
    }
  }
  function vetements(g, h, x0, W, y, z, d) {         // tringle et vêtements suspendus
    h.penderie(g, W, x0, y, z, d || 46);
  }
  function armoire(g, i, h) {
    const { B, shade, facade, matiere, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase(), x = i.x || {}, ep = 1.8, pl = 5;
    if (x.angle) {          // armoire d'angle : deux ailes de 58 cm de profondeur, en L contre le fond et le côté gauche
      const prof = 58, aile = (grp, w, px, pz, rot) => {
        const s = new THREE.Group(); s.position.set(px / 100, 0, pz / 100); s.rotation.y = rot; grp.add(s);
        armoire(s, Object.assign({}, i, { w, d: prof, x: {}, label: t.replace(/d'angle/, '') }), h);
      };
      aile(g, W, 0, -D / 2 + prof / 2, 0);
      aile(g, D - prof, -W / 2 + prof / 2, prof / 2, Math.PI / 2);
      return;
    }
    const parts = (i.coul || '').split('/'), tc = teinte(parts[0]) || { hex: c }, tp = teinte(parts[parts.length - 1]) || tc;
    // Une autre couleur choisie dans la palette habille tout le meuble.
    const coul = i.color !== i.base ? { cadre: c, porte: c } : { cadre: tc.hex, porte: tp.hex }, style = i.color !== i.base ? 'lisse' : STYLE(i.coul);
    const ouvert = /ouvert|rangement ouvert/.test(t) && !/porte/.test(t.replace('ouverte av porte', ''));
    const coulissant = /coul/.test(t), tiroirs = nombre(t, /(\d+)\s*tir/);
    let n = nombre(t, /(\d+)\s*p(?:or)?te/) || (coulissant ? (W > 160 ? 3 : 2) : Math.max(1, Math.round(W / 50)));
    // caisson
    matiere(tc.m && tc.m !== 'miroir' ? tc.m : 'laque');
    [-1, 1].forEach(a => B(g, ep, H, D - 2, a * (W / 2 - ep / 2), 0, -1, coul.cadre));
    B(g, W, ep, D - 2, 0, H - ep, -1, coul.cadre);
    B(g, W - ep * 2, H - pl - ep, 1, 0, pl, -D / 2 + 1, shade(coul.cadre, 0.7));
    B(g, W - ep * 2, pl, D - 5, 0, 0, -2, shade(coul.cadre, 0.55));
    for (let k = 1; k < Math.round(W / 50); k++) if (W / Math.round(W / 50) > 40) B(g, ep, H - pl - ep, D - 4, -W / 2 + k * W / Math.round(W / 50), pl, -2, coul.cadre);
    if (ouvert || /^combinaison de rangement ouverte|^rangement ouvert/.test(t)) {
      const sec = Math.max(1, Math.round(W / 50)), sw = W / sec;
      B(g, W - ep * 2, H - pl - ep, D - 6, 0, pl, -3.5, shade(coul.cadre, 0.62));
      for (let k = 0; k < sec; k++) {
        const x0 = -W / 2 + sw * (k + 0.5);
        if (k % 2 === 0 && H > 150) vetements(g, h, x0, sw - ep, H - 22, 0, D - 6);
        else for (let y = pl + 35; y < H - 20; y += 38) B(g, sw - ep * 2, 1.6, D - 6, x0, y, -1, coul.cadre);
      }
      if (/porte/.test(t)) portes(g, h, W / 2, H - pl - ep, pl, D / 2 + 1, coul, style, 1, c, true);
      matiere(null);
      return;
    }
    const hT = tiroirs ? Math.min(H * 0.4, 20 * Math.ceil(tiroirs / (W > 90 ? 2 : 1))) : 0;
    {
      const sec = Math.max(1, Math.round(W / 50)), sw = W / sec, bas = pl + hT, libre = H - ep - bas;
      for (let k = 0; k < sec; k++) {
        const x0 = -W / 2 + sw * (k + 0.5), lw = sw - ep * 2;
        if (libre > 60) B(g, lw, 1.6, D - 6, x0, H - ep - Math.min(30, libre * 0.2), -1, coul.cadre);      // étagère du haut
        if (libre > 110 && (k % 2 === 0 || sec === 1)) vetements(g, h, x0, lw, H - ep - Math.min(30, libre * 0.2) - 6, -1, D - 6);
        else for (let y = bas + 38; y < H - ep - 34; y += 36) B(g, lw, 1.6, D - 6, x0, y, -1, coul.cadre);
      }
      if (hT) B(g, W - ep * 2, 1.6, D - 5, 0, bas, -1.5, coul.cadre);
    }
    if (tiroirs) {
      const cols = W > 90 && tiroirs > 1 ? 2 : 1, rows = Math.ceil(tiroirs / cols), fw = (W - ep * 2) / cols, dh = hT / rows;
      for (let a = 0; a < cols; a++) for (let k = 0; k < rows; k++) facade(g, fw, dh, -W / 2 + ep + fw * (a + 0.5), pl + k * dh, D / 2, coul.porte, { ouvre: 'tiroir', prof: D - 10, e: 1.8, poignee: 'barre', l: 10, couleurPoignee: '#8a8d8f' });
    }
    if (coulissant) {
      matiere(null);
      B(g, W - 2, 2, 5, 0, H - 4, D / 2 - 2.5, '#b8bbbc', 0.35, 0.85);
      matiere(tp.m && tp.m !== 'miroir' ? tp.m : 'laque');
    } else matiere(tp.m && tp.m !== 'miroir' && tp.m !== 'verre' ? tp.m : 'laque');
    portes(g, h, W - (coulissant ? 2 : 0), H - pl - ep - hT - (coulissant ? 4 : 0), pl + hT, D / 2 + (coulissant ? 2 : 0), coul, style, n, c, coulissant);
    matiere(null);
  }

  // ---------- Commodes ----------
  function commode(g, i, h) {
    const { B, facade, plateau, shade, pied, matiere } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase(), x = i.x || {}, ep = 1.8;
    const hs = x.hs != null ? x.hs : 4, legs = hs > 5;
    let n = nombre(t, /(\d+)\s*tir/) || nombre(t, /(\d+)\s*\+/) + nombre(t, /\+\s*(\d+)/) || Math.max(2, Math.round((H - hs) / 22));
    const cols = W >= 100 && n % 2 === 0 ? 2 : W >= 100 && n >= 5 ? 2 : 1;
    const rows = Math.ceil(n / cols), haut = H - hs - 2, dh = haut / rows, fw = (W - ep * 2) / cols;
    plateau(g, W, D, 2, 0, H - 2, 0, c, { rayon: 0.3, chant: 0.3 });
    [-1, 1].forEach(a => B(g, ep, haut, D - 1, a * (W / 2 - ep / 2), hs, -0.5, c));
    B(g, W - ep * 2, haut, D - 3, 0, hs, -1.5, shade(c, 0.72));
    if (!legs) B(g, W - ep * 2, Math.max(2, hs), 1.5, 0, 0, D / 2 - 2, shade(c, 0.85));
    let k = 0;
    for (let r = 0; r < rows; r++) {
      const nr = r === 0 && n % cols ? 1 : cols, w = (W - ep * 2) / nr;
      for (let a = 0; a < nr && k < n; a++, k++) facade(g, w, dh, -W / 2 + ep + w * (a + 0.5), hs + (rows - 1 - r) * dh, D / 2, c, { ouvre: 'tiroir', prof: D - 8, e: 1.8, moulure: /hemnes|havsta|songesand|gullaberg/.test(t) ? 3 : 0, poignee: /hemnes|songesand|havsta/.test(t) ? 'bouton' : 'barre', l: 10, ecart: w > 70 ? w * 0.25 : 0, couleurPoignee: '#8a8d8f' });
    }
    matiere(null);
    if (legs) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 4), hs, b * (D / 2 - 4)], [a * (W / 2 - 4.5), 0, b * (D / 2 - 4.5)], 1.8, 1.3, /noir|anthracite/.test(t) ? '#2a2a2a' : shade(c, 0.85), 0.5));
  }

  // ---------- Tables de chevet ----------
  function chevet(g, i, h) {
    const { B, facade, plateau, shade, pied, matiere, roulette } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase(), x = i.x || {}, ep = 1.6;
    const mural = !!i.wall, hs = mural ? 0 : x.hs != null ? x.hs : /pied|plateau|table d'appoint|tabouret/.test(t) ? 10 : 0;
    const n = nombre(t, /(\d+)\s*tir/) || (/tiroir/.test(t) ? 1 : 0), ouvert = /[eé]tag[eè]re|table\/plateau|appoint|ordinateur/.test(t) && !n;
    const y0 = hs, haut = H - hs - 2;
    plateau(g, W, D, 2, 0, H - 2, 0, /verre/.test(t) ? '#cfd8d6' : c, { rayon: 0.4, chant: 0.3, rough: /verre/.test(t) ? 0.1 : undefined });
    if (ouvert) {
      [-1, 1].forEach(a => B(g, ep, haut, D, a * (W / 2 - ep / 2), y0, 0, c));
      B(g, W - ep * 2, ep, D, 0, y0 + haut * 0.45, 0, c); B(g, W - ep * 2, ep, D, 0, y0, 0, c);
    } else {
      [-1, 1].forEach(a => B(g, ep, haut, D - 1, a * (W / 2 - ep / 2), y0, -0.5, c));
      B(g, W - ep * 2, haut, D - 3, 0, y0, -1.5, shade(c, 0.7));
      if (n) { const dh = haut / Math.max(n, 1); for (let k = 0; k < n; k++) facade(g, W - ep * 2, dh, 0, y0 + k * dh, D / 2, c, { ouvre: 'tiroir', prof: D - 8, e: 1.6, poignee: 'barre', l: 8, couleurPoignee: '#8a8d8f' }); }
      else { facade(g, W - ep * 2, haut * 0.4, 0, y0 + haut * 0.6, D / 2, c, { ouvre: 'tiroir', prof: D - 8, e: 1.6, poignee: 'barre', l: 8, couleurPoignee: '#8a8d8f' }); B(g, W - ep * 2, ep, D - 2, 0, y0, 0, c); }
    }
    matiere(null);
    if (/roulette/.test(t)) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => roulette(g, a * (W / 2 - 4), 0, b * (D / 2 - 4), 2.5, 0));
    else if (hs > 3) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => pied(g, [a * (W / 2 - 3), hs, b * (D / 2 - 3)], [a * (W / 2 - 3.5), 0, b * (D / 2 - 3.5)], 1.5, 1.1, shade(c, 0.85), 0.5));
  }

  // ---------- Miroirs ----------
  function miroir(g, i, h) {
    const { B, add, mat, matiere, shade, glow, plateau } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase(), x = i.x || {}, rond = !!x.rond, cad = /sans cadre|convexe/.test(t) ? 0 : 2.5;
    matiere(null);
    const verre = mat('#e2e6e6', 0.04, 1), z = i.wall ? 0 : 0;
    if (i.wall || /de table|ventouse/.test(t) || !/pied/.test(t)) {
      const prof = i.wall ? Math.min(D, 4) : 2;
      if (rond) {
        const r = Math.min(W, H) / 2;
        add(g, new THREE.CylinderGeometry(r / 100, r / 100, prof / 100, 64).rotateX(Math.PI / 2), mat(c, 0.5), 0, H / 2, -D / 2 + prof / 2);
        add(g, new THREE.CylinderGeometry((r - cad) / 100, (r - cad) / 100, 0.004, 64).rotateX(Math.PI / 2), verre, 0, H / 2, -D / 2 + prof + 0.2).castShadow = false;
      } else {
        if (cad) B(g, W, H, prof, 0, 0, -D / 2 + prof / 2, c, 0.5);
        add(g, new THREE.BoxGeometry((W - cad * 2) / 100, (H - cad * 2) / 100, 0.004), verre, 0, H / 2, -D / 2 + prof + 0.2).castShadow = false;
      }
      if (/[eé]tag[eè]re/.test(t)) plateau(g, W, Math.max(10, D), 1.8, 0, 0, 0, c, { rayon: 0.3 });
      if (/[eé]clairage/.test(t)) glow(g, new THREE.BoxGeometry(W * 0.8 / 100, 0.012, 0.012), 0, H - 1, -D / 2 + prof + 0.8);
      if (!i.wall) B(g, W * 0.4, 1.5, Math.max(8, D), 0, 0, 0, c, 0.5);     // petit pied, miroir de table
      return;
    }
    // miroir sur pied, légèrement penché contre son pied arrière
    const m = new THREE.Group(); m.rotation.x = -0.08; m.position.z = (D / 2 - 4) / 100; g.add(m);
    B(m, W, H, 2.5, 0, 0, 0, c, 0.5);
    add(m, new THREE.BoxGeometry((W - 5) / 100, (H - 5) / 100, 0.004), verre, 0, H / 2, 1.5).castShadow = false;
    B(g, 3, H * 0.75, 2.5, 0, 0, -D / 2 + 6, shade(c, 0.9), 0.5).rotation.x = 0.35;
  }

  // ---------- Rangements sous le lit ----------
  function sousLit(g, i, h) {
    const { B, shade, matiere, roulette } = h;
    const { w: W, d: D, h: H, color: c } = i, t = (i.label || '').toLowerCase();
    matiere(TISSU.test(t) || /sac|tissu/.test(t) ? 'tissu' : /plastique|smyga|samla/.test(t) ? null : 'laque');
    B(g, W, H - 1.5, D, 0, 1, 0, c, /plastique/.test(t) ? 0.35 : undefined);
    B(g, W - 2, 0.2, D - 2, 0, H - 1.45, 0, shade(c, 0.4));
    B(h.ouvrant(g, 'couvercle', { y: H, z: -D / 2 - 0.3, angle: 1.1 }), W + 0.6, 1.4, D + 0.6, 0, H - 1.4, 0, shade(c, 0.94));
    B(g, 14, 2.5, 0.8, 0, H * 0.55, D / 2 + 0.3, shade(c, 0.6), 0.6);
    matiere(null);
    if (/roulette/.test(t) || H > 15) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => roulette(g, a * (W / 2 - 4), 0, b * (D / 2 - 4), 1.2, 0));
  }

  const BUILD = { lit, canape, armoire, commode, chevet, miroir, soulit: sousLit };
  const ONGLET = { lit: 'Lits', canape: 'Canapés-lits', armoire: 'Armoires et penderies', commode: 'Commodes', chevet: 'Tables de chevet', miroir: 'Miroirs', soulit: 'Rangements sous le lit' };
  const NOTE = {
    lit: 'Sommier à lattes et matelas souvent vendus à part : regarde la fiche.',
    canape: 'Canapé qui se déplie en lit : prévois la place devant pour l\'ouvrir.',
    armoire: 'À fixer au mur : une armoire peut basculer si ta sœur s\'y accroche.',
    commode: 'À fixer au mur : une commode peut basculer quand on ouvre les tiroirs.',
    chevet: '',
    miroir: 'Accroche-le solidement, hors de portée de ta sœur s\'il est en verre.',
    soulit: 'Vérifie la hauteur sous ton lit avant d\'acheter.',
  };

  // Une ligne par meuble : [type, nom, libellé de la fiche, taille de la fiche, largeur, profondeur, hauteur, prix, numéro d'article, couleurs vendues, cotes en plus]
  DONNEES.forEach(([type, nom, label, taille, w, d, h, prix, num, autres, x], n) => {
    const coulTxt = label.split(',').slice(1).join(',').trim();
    const tt = teinte(coulTxt) || teinte(label) || { hex: '#d9d6cf' };
    const mou = TISSU.test(label + ' ' + coulTxt);
    const def = {
      key: 'ikea-' + num, categorie: ONGLET[type], marque: 'IKEA', prix,
      name: nom + ' ' + label.split(',')[0].toLowerCase() + (coulTxt ? ', ' + coulTxt : '') + (taille ? ', ' + taille : ''),
      w, d, h, color: tt.hex, matiere: mou ? 'tissu' : tt.m && !['miroir', 'verre'].includes(tt.m) ? tt.m : 'laque',
      lien: 'https://www.ikea.com/fr/fr/p/-' + num + '/', label: label.toLowerCase(), coul: coulTxt, x: x || {}, n,
      note: NOTE[type],
    };
    if (autres) {
      const cs = [{ nom: coulTxt || 'Couleur de la fiche', hex: tt.hex }];
      autres.split('|').forEach(nm => { const a = teinte(nm); if (a && !cs.some(q => q.hex === a.hex)) cs.push({ nom: nm, hex: a.hex, matiere: a.m && !['miroir', 'verre'].includes(a.m) ? a.m : undefined }); });
      if (cs.length > 1) def.couleurs = cs;
    }
    if (type === 'lit' || type === 'canape' || type === 'commode' || type === 'chevet') { def.surf = true; if (type === 'lit') def.dessus = Math.min(h, 55); }
    if (type === 'chevet' && /mural|fixer au mur/.test(def.label)) { def.wall = true; def.movable = true; def.y = 45; }
    if (type === 'miroir') {
      if (/de table|ventouse/.test(def.label)) def.sits = true;
      else if (!/pied/.test(def.label)) { def.wall = true; def.movable = true; def.y = Math.max(0, Math.round(150 - h / 2)); }
    }
    if (type === 'soulit') { def.noCheck = true; def.noOmbre = true; }
    const b = BUILD[type];
    def.build = (g, i, hh) => b(g, Object.assign({}, i, { label: def.label, coul: def.coul, x: def.x, n, base: def.color }), hh);
    Chambre.meuble(def);
  });
})();
