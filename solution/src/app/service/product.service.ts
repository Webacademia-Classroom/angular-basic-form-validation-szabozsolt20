import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [
    { "id": 1, "name": "Oxtail - Cut", "price": 97, "description": "Mv collision NOS-pedest", "active": true },
    { "id": 2, "name": "Bread - Dark Rye", "price": 71, "description": "Malig neo cervix NEC", "active": false },
    { "id": 3, "name": "Barramundi", "price": 35, "description": "3rd burn w loss-breast", "active": true },
    { "id": 4, "name": "Nori Sea Weed", "price": 47, "description": "Attem abort w pelv damag", "active": false },
    { "id": 5, "name": "Beef - Ground Lean Fresh", "price": 100, "description": "Harada's disease", "active": true },
    { "id": 6, "name": "Peas - Frozen", "price": 34, "description": "Cholelith/ac gb inf-obst", "active": false },
    { "id": 7, "name": "Tarragon - Primerba, Paste", "price": 78, "description": "Conduction disorder NOS", "active": false },
    { "id": 8, "name": "Tea - Apple Green Tea", "price": 43, "description": "Achlorhydria", "active": false },
    { "id": 9, "name": "Instant Coffee", "price": 92, "description": "Dental caries - arrested", "active": false },
    { "id": 10, "name": "Coke - Classic, 355 Ml", "price": 53, "description": "TB of ureter-cult dx", "active": false },
    { "id": 11, "name": "Chips - Doritos", "price": 21, "description": "Vitamin A deficiency NEC", "active": false },
    { "id": 12, "name": "Taro Root", "price": 46, "description": "Mal hyp ht/kd stg V w hf", "active": false },
    { "id": 13, "name": "Gingerale - Diet - Schweppes", "price": 45, "description": "1st deg burn thumb", "active": false },
    { "id": 14, "name": "Cocktail Napkin Blue", "price": 77, "description": "Pinguecula", "active": true },
    { "id": 15, "name": "Pork - Inside", "price": 20, "description": "Cutan leishmanias asian", "active": true },
    { "id": 16, "name": "Wine - Gewurztraminer Pierre", "price": 87, "description": "Ac bulbar polio-type NOS", "active": true },
    { "id": 17, "name": "Pepper - Green, Chili", "price": 91, "description": "Ganglion of joint", "active": false },
    { "id": 18, "name": "Seedlings - Buckwheat, Organic", "price": 21, "description": "Hydrops fetalis no isoim", "active": true },
    { "id": 19, "name": "Ecolab - Mikroklene 4/4 L", "price": 74, "description": "Exfoliation of teeth", "active": false },
    { "id": 20, "name": "Sea Bass - Fillets", "price": 39, "description": "Cl skul base fx-coma NOS", "active": true },
    { "id": 21, "name": "Tea - Green", "price": 85, "description": "Acq hemolytic anemia NOS", "active": true },
    { "id": 22, "name": "Breadfruit", "price": 6, "description": "Brain hem NEC-proln coma", "active": true },
    { "id": 23, "name": "Pepper - Chipotle, Canned", "price": 76, "description": "Assault-shotgun", "active": false },
    { "id": 24, "name": "Ham - Cooked Italian", "price": 4, "description": "Borderline personality", "active": false },
    { "id": 25, "name": "Sobe - Liz Blizz", "price": 82, "description": "Spon abort w shock-unsp", "active": true },
  ];

}
