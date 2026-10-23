const nomduclient = "awa"
const nomproduit ="ordinateur"
const prixunitaire = 250000
const quantité = 2
const fraisdelivraison = 5000
const tauxTVA = 18/100
const montanttotaldesproduits = 250000*2
const montantdelaTVA = montanttotaldesproduits*tauxTVA
const MontantTTC = montanttotaldesproduits+montantdelaTVA
const montantfinal = MontantTTC+fraisdelivraison
const prixmoyenTTC = MontantTTC/quantité
console.log (" ")
console.log ("client:",nomduclient)
console.log("produit:",nomproduit)
console.log("prix unitaire:",prixunitaire,"FCFA")
console.log("produit:",nomproduit)
console.log("quantité:",quantité)
console.log(" ")
console.log("frais de livraison:",fraisdelivraison,"FCFA")
console.log("TVA(18%):",montantdelaTVA)
console.log("montant TTC:",MontantTTC)
console.log("livraison:",fraisdelivraison)
console.log("TOTAL A PAYER:",montantfinal)
console.log (" ")
console.log ("Prix moyen TTC par produit:",prixmoyenTTC)
console.log ("Type du nom:",typeof nomduclient)
console.log ("Type du prix:",typeof prixunitaire)
console.log ("Type de la quantité:",typeof quantité)


