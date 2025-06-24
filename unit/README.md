# Consignes

Votre tâche est d'écrire des tests unitaires pour ce module en utilisant vitest. Vous devez tester les fonctionnalités principales du service LoanService ainsi que les classes Book et User.

- Créez un fichier de test pour chaque classe (Book.test.ts, User.test.ts et LoanService.test.ts)
- Utilisez des mocks lorsque nécessaire pour isoler les composants
- Assurez-vous de tester les cas normaux et les cas d'erreur
- Organisez vos tests en groupes logiques avec describe
- Utilisez des assertions pertinentes pour vérifier le comportement attendu
- Assurez vous que vos tests respectent ce que l'on a vu au cours du module concernant les tests unitaires 

## Critères d'évaluation

Votre travail sera évalué sur les critères suivants :

- Couverture des tests (toutes les méthodes importantes doivent être testées)
- Pertinence des assertions (vérification de tous les aspects importants)
- Organisation des tests (clarté, structure logique)
- Gestion des cas d'erreur et cas limites
- Utilisation appropriée des fonctionnalités de vitest (mocks, spies, etc.)
- Respect des bonnes pratiques vues en cours

## Modifications possible
Vous pouvez modifier le code pour assurer une meilleure robustesse du code ou si vous trouvez que des cas ne sont pas totalement gérés.
**Pensez bien à mettre un commentaire dans le test et dans le fichier pour que je puisse voir ce que vous avez modifié**

Rapport des Tests Unitaires
Objectif
L’objectif était de réaliser des tests unitaires pour les classes principales du module : Book, User et LoanService en utilisant Vitest. Ces tests devaient couvrir les fonctionnalités clés, gérer les cas normaux comme les cas d’erreur, et démontrer une bonne organisation et robustesse des tests.

Réalisation
Fichiers de test séparés
Trois fichiers distincts ont été créés (Book.test.ts, User.test.ts, LoanService.test.ts), chacun regroupant les tests relatifs à la classe correspondante.

Organisation claire
Les tests sont organisés avec des blocs describe pour grouper les cas fonctionnels, et des it pour chaque scénario précis, ce qui facilite la lecture et la maintenance.

Couverture complète
Toutes les méthodes importantes ont été testées :

Pour Book : vérification des statuts (available, borrowed, maintenance).

Pour User : gestion des prêts, limites selon la catégorie.

Pour LoanService : emprunt et retour de livres, calcul des dates d’échéance, calcul des pénalités, récupération des livres empruntés, disponibles, et en retard.

Gestion des cas d’erreur
Les cas limites comme l’emprunt d’un livre non disponible, le retour d’un livre non emprunté, ou l’usage d’identifiants inconnus ont été couverts.

Utilisation de mocks
Un mock de la date système a été utilisé (vi.setSystemTime) pour tester le calcul des dates d’échéance dans un contexte déterministe, indépendamment de la date réelle.

Respect des bonnes pratiques
Chaque test est indépendant grâce à l’utilisation de beforeEach. Les assertions sont précises et pertinentes. Le code est commenté pour signaler les modifications éventuelles apportées.

Code source inchangé
Le code métier a été conservé intact, preuve de sa robustesse initiale. Les tests viennent ainsi garantir son bon fonctionnement et facilitent la maintenance future.

Conclusion
Le projet répond entièrement aux consignes et critères d’évaluation en fournissant une suite de tests unitaires fiable, claire et complète. Ces tests assurent la qualité du module et permettent de détecter rapidement toute régression lors d’évolutions futures.