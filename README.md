# 🏦 E-banking-app-Angular-Frontend

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Project Status](https://img.shields.io/badge/Status-Active-success.svg)](https://github.com/yourusername/E-banking-app-Angular-Frontend)

## 📑 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Description Générale](#description-générale)
3. [Objectifs du Projet](#objectifs-du-projet)
4. [Fonctionnalités Principales](#fonctionnalités-principales)
5. [Technologies Utilisées](#technologies-utilisées)
6. [Prérequis Techniques](#prérequis-techniques)
7. [Installation et Lancement](#installation-et-lancement)
8. [Structure du Projet](#structure-du-projet)
9. [Aperçu Visuel](#aperçu-visuel)
10. [Auteur](#auteur)

## Vue d'Ensemble

L'E-banking-app-Angular-Frontend est une application web bancaire moderne qui offre une interface utilisateur intuitive pour la gestion des opérations bancaires en ligne. Cette application est développée dans le cadre d'un projet académique à l'ENSET Mohammedia, sous la supervision du Professeur Mohamed YOUSSFI.

### Points Clés
- **Type de Projet**: Application Web Bancaire
- **Framework**: Angular 17+
- **Architecture**: Client-Server avec SSR (Server-Side Rendering)
- **Objectif Principal**: Simulation d'une plateforme bancaire numérique
- **Public Cible**: Étude académique et démonstration technique

### Composants Principaux
1. **Module Client**
   - Gestion des nouveaux clients
   - Interface d'inscription
   - Profils utilisateurs

2. **Module Comptes**
   - Visualisation des comptes
   - Opérations bancaires
   - Historique des transactions

3. **Module Navigation**
   - Barre de navigation sécurisée
   - Gestion des routes
   - Interface responsive

## Description Générale

Ce projet est une application web bancaire moderne développée avec Angular, offrant une interface utilisateur intuitive et sécurisée pour la gestion des opérations bancaires en ligne. L'application simule les fonctionnalités essentielles d'une plateforme bancaire numérique tout en mettant l'accent sur l'expérience utilisateur et la sécurité.

## Objectifs du Projet

- Développer une interface bancaire moderne et responsive
- Implémenter un système d'authentification sécurisé
- Créer une expérience utilisateur fluide et intuitive
- Démontrer les bonnes pratiques de développement Angular
- Mettre en œuvre les principes de sécurité bancaire

## Fonctionnalités Principales

- 👥 **Gestion des Clients**
  - Création de nouveaux comptes clients
  - Gestion des informations clients
  - Interface dédiée aux nouveaux clients

- 💳 **Gestion des Comptes**
  - Consultation des comptes
  - Détails des comptes
  - Opérations bancaires

- 🔐 **Sécurité et Navigation**
  - Barre de navigation sécurisée
  - Protection des routes
  - Gestion des sessions

## Technologies Utilisées

- **Framework Principal**: Angular 17+
- **Routing**: Angular Router
- **HTTP Client**: Angular HttpClient
- **State Management**: RxJS
- **Styling**: CSS/SCSS
- **Testing**: Jasmine & Karma
- **Build Tools**: Angular CLI
- **Server-Side Rendering**: Angular Universal

## Prérequis Techniques

- Node.js (v18.x ou supérieur)
- npm (v9.x ou supérieur)
- Angular CLI (v17.x ou supérieur)
- Git

## Installation et Lancement

1. **Cloner le Repository**
   ```bash
   git clone https://github.com/yourusername/E-banking-app-Angular-Frontend.git
   cd E-banking-app-Angular-Frontend
   ```

2. **Installer les Dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'Application en Mode Développement**
   ```bash
   ng serve
   ```

4. **Accéder à l'Application**
   Ouvrez votre navigateur et accédez à `http://localhost:4200`

## 📁 Structure du Projet

```
E-banking-app-Angular-Frontend/
├── src/
│   ├── app/
│   │   ├── accounts/           # Gestion des comptes
│   │   ├── customers/          # Gestion des clients
│   │   ├── new-costumer/       # Création de nouveaux clients
│   │   ├── navbar/            # Barre de navigation
│   │   ├── model/             # Modèles de données
│   │   ├── services/          # Services Angular
│   │   └── app.routes.ts      # Configuration des routes
│   ├── assets/
│   └── environments/
├── public/
└── ...
```

## 📸 Aperçu Visuel

### Interface d'Authentification
![Interface d'Authentification](.angular/cache/19.2.12/digital-banking-web/assets/auth.png)

### Barre de Navigation avec Recherche
![Barre de Navigation](.angular/cache/19.2.12/digital-banking-web/assets/navbar_search.png)

## 👨‍💻 Auteur

**Nom**: DAOUDI Oumayma 

**Établissement**: ENSET Mohammedia  

**Filière**: GLSID 2 

**Encadrant**: Professeur Mohamed YOUSSFI

*Ce projet a été développé dans le cadre d'un projet académique.*

