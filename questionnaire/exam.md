# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?
   - B) Vérifier le comportement d'une unité de code isolée

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :
   - B) Décrire le comportement attendu dans un format compréhensible par tous

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

Le principe d'isolation consiste à tester une unité de code (fonction, méthode, classe) indépendamment des autres parties du système. Cela évite que les tests échouent à cause de dépendances externes. C’est important pour s’assurer que les bugs sont localisés et que les tests sont fiables, rapides et reproductibles.

### Origine du BDD
Le BDD est une extension du :
   - B) Test Driven Development

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :
   - B) L'interaction entre différents composants ou modules

### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.

Feature: Nom de la fonctionnalité
  Scenario: Nom du scénario
    Given (Étant donné) un état initial
    When (Quand) une action est effectuée
    Then (Alors) un résultat est attendu

Exemple :
Feature: Authentification
  Scenario: Connexion avec des identifiants valides
    Given un utilisateur avec l'email "test@example.com" et le mot de passe "123456"
    When il saisit ces identifiants dans le formulaire de connexion
    Then il est redirigé vers son tableau de bord


### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?
   - B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end
Les tests end-to-end visent à :
   - B) Tester l'application de bout en bout du point de vue de l'utilisateur

### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

Le cycle Red-Green-Refactor comprend trois étapes :
- Red : Écrire un test qui échoue (car le code n’est pas encore implémenté).
- Green : Écrire le minimum de code pour faire passer le test.
- Refactor : Réorganiser le code (le nettoyer) sans modifier son comportement, les tests doivent rester au vert.

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?
    - B) Il doit être rapide à exécuter, isolé et répétable

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?
    - C) Feature, Scenario, Given, When, Then

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?

Tests unitaires vs tests d'intégration
Tests unitaires : testent des fonctions/méthodes isolées.

Tests d’intégration : vérifient que plusieurs composants fonctionnent ensemble correctement.
Les tests d’intégration sont plus lents, moins isolés, mais permettent de détecter des problèmes de communication entre modules.

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - B) Red-Green-Refactor

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :
    - C) Le comportement du système par rapport aux spécifications

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

Le BDD utilise un langage commun (comme Gherkin) pour décrire les comportements attendus. Cela permet aux développeurs, testeurs et métiers de collaborer plus efficacement, en partageant une compréhension commune des exigences.

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - C) Il favorise un design modulaire et des interfaces claires

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

Avantages et défis des tests end-to-end

Avantages :

Valident le système du point de vue utilisateur
Repèrent les bugs d’intégration ou de parcours

Défis :

Lents à exécuter
Fragiles (peuvent casser pour des raisons non liées au bug)
Difficiles à maintenir


### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - B) Étant donné-Quand-Alors

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

Avantages et limites des tests unitaires

Avantages :

Rapides, précis
Isolent les bugs
Facilitent le refactoring

Limites :

Ne couvrent pas les interactions entre modules
Ne valident pas les scénarios utilisateurs globaux

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - B) Background

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - C) Les développeurs et les testeurs QA

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - C) Après avoir exécuté les tests et constaté leur échec

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?
    - C) Playwright

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

TDD : commence par les tests techniques, orientés code.
BDD : commence par les comportements attendus, en langage naturel, orientés métier.

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?
    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?
    - B) Il doit simuler avec précision le comportement réel des utilisateurs

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?
Résistance au changement
Temps initial plus long
Manque de compétences
Solutions : formation, accompagnement, intégration progressive, bonnes pratiques.

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?
    - C) Selenium

### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?
Utiliser des sélecteurs stables
Limiter les dépendances externes
Refactoriser régulièrement
Ne tester que les parcours critiques
Prioriser les tests à forte valeur

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?
    - B) Ils sont généralement lents et coûteux à exécuter

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?
Gherkin peut être utilisé dès la rédaction des user stories. Les critères d’acceptation sont écrits en Given/When/Then. Cela améliore la clarté, évite les malentendus et facilite les tests automatisés.

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - D) Écrire tous les tests à la fin du développement

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?
Unitaires : code isolé
Intégration : interaction modules
Fonctionnels : comportement global selon les exigences, sans se soucier du code sous-jacent

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - B) Specification By Example

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.
Par domaine métier (ex : panier, paiement)
Structurés par Gherkin
Exécutables en CI
Ciblés sur les cas d’usage métier

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?
    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?
Analyser les besoins métier, les risques techniques, la complexité du projet. Favoriser la pyramide de tests : beaucoup de tests unitaires, un peu moins d’intégration, peu de E2E. Couvrir les cas critiques avec E2E.

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)
Trop tester avec les tests E2E : vouloir tout couvrir avec eux alors qu’ils sont lents et coûteux à maintenir. Il faut les réserver aux parcours critiques uniquement.