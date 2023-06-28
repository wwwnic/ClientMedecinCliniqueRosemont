# Application de Gestion de Prescriptions Médicales (Projet Scolaire)

Ce projet est le résultat d'un travail scolaire dont l'objectif était de créer une application de gestion de prescriptions médicales pour les médecins. L'application permet aux utilisateurs de rechercher des patients et d'accéder à leurs informations et prescriptions. Le projet est structuré en deux parties principales : une API REST et une application qui consomme cette API.

## Contexte

Ce projet a été développé dans le cadre d'un cours au cegep visant à mettre en pratique les concepts d'API REST et de consommation d'API dans une application. L'application est destinée à être utilisée par les médecins pour faciliter la gestion de leurs prescriptions médicales.

## Fonctionnalités

- **Recherche de patients** : Permet aux utilisateurs de rechercher des patients par divers critères, tels que le nom, le prénom, id, etc.
- **Accès aux informations des patients** : Une fois le patient recherché, l'utilisateur peut accéder à toutes les informations associées au patient.
- **Gestion des prescriptions** : Les utilisateurs peuvent visualiser les prescriptions existantes d'un patient et en ajouter de nouvelles.

## Aperçu

### Page de connexion
![Page de Connexion](photos/Page%20connexion.jpg)

### Page de création d'événement
![Page de Création d'événement](photos/Page%20creer%20evenement.jpg)

### Page d'enregistrement
![Page d'Enregistrement](photos/Page%20enregistrement.jpg)

### Page événement
![Page Événement](photos/Page%20evenement.jpg)

### Page info et de tchat
![Page de Chat](photos/Page%20info%20chat%20seulement.jpg)

### Page de modification de compte
![Page de Modification de Compte](photos/Page%20modifier%20compte.jpg)

### Page de recherche
![Page de Recherche](photos/Page%20recherche.png)

## Installation

Suivez les instructions ci-dessous pour configurer et exécuter ce projet sur votre machine locale.

1. Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/wwwnic/ClientMedecinCliniqueRosemont.git
```

2. Accédez au répertoire du projet :

```bash
cd ClientMedecinCliniqueRosemont
```

3. Installez les dépendances (Assurez-vous d'avoir Node.js et npm installés sur votre machine) :

```bash
npm install
```

4. Lancez le serveur :

```bash
ng serve
```

Votre application devrait être accessible à `http://localhost:3000` ou à l'URL que vous avez configurée.

## Utilisation

Après avoir installé et lancé l'application, vous pouvez accéder à l'interface utilisateur pour rechercher des patients et gérer leurs prescriptions.

**Note** : Cette application nécessite une connexion à une base de données pour stocker et récupérer les informations sur les patients et leurs prescriptions. Assurez-vous d'avoir correctement configuré la connexion à la base de données.

## Contributions

Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre les étapes suivantes :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## License

Ce projet est sous licence MIT. Pour plus de détails, veuillez vous référer au fichier [LICENSE](LICENSE).

## Contact

Si vous avez des questions, n'hésitez pas à me contacter.

## Auteur

- [Nicolas Brunet](https://github.com/wwwnic)
