![Kasa Logo](src/images/logo_kasa.svg)

# Kasa - Application de Location de Logements

Kasa est une application de location de logements développée avec React et Vite, permettant aux utilisateurs de parcourir et de réserver des logements.

## Sommaire

1. [Fonctionnalités principales](#fonctionnalités-principales)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Scripts](#scripts)
5. [Structure du projet](#structure-du-projet)
6. [Bundler](#bundler)
7. [Dépendances](#dépendances)
8. [Développement](#développement)
9. [Contribuer](#contribuer)
10. [Licence](#licence)

## Fonctionnalités principales

- Navigation fluide entre les pages grâce à React Router
- Récupération des logements à partir d'un fichier JSON
- Carrousel d'images pour chaque logement
- Système de notation avec des étoiles
- Composants réutilisables
- Design responsive pour une expérience optimale sur tous les appareils
- Animation de collapse pour les informations complémentaires

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

Clonez le dépôt et installez les dépendances :

`git clone https://github.com/votre-utilisateur/kasa.git`

`cd kasa`

`npm install`

## Bundler

- **Vite** : Un outil de build rapide pour les projets modernes en JavaScript, optimisé pour React.

## Scripts

- `npm run dev` : Démarre le serveur de développement.
- `npm run build` : Construit l'application pour la production.
- `npm run preview` : Prévisualise l'application de production.
- `npm run lint` : Lint le code source.

## Dépendances

- `@fortawesome`: ^6.5.2
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.24.0
- `prettier`: ^2.8.3
- `eslint`: ^8.57.0

## Développement

Pour démarrer le serveur de développement, exécutez :

`npm run dev`

L'application sera disponible à l'adresse `http://localhost:3000`.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
