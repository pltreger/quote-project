# Quote-project
Réalisé par : Pauline Treger


## Pour commencer
Le principe de cette page web est d'afficher dynamiquement la citation du jour issue de l'API de TheySaidSo.<br/>

### Pré-requis
Installer Node.js.<br/>
Pour cela, suivre les indications d'installation sur <https://nodejs.org/en/>.

### Démarrage
Pour lancer le site web, écrire dans la console : `node .`<br/>
Le serveur va ainsi se lancer et vous pourrez accéder à la page web à l'adresse de votre localhost (<http://127.0.0.1/>).

## Ressources
Cette page web a été réalisée avec un serveur web se basant sur Node.js et Express.<br/>

Les langages de programmation utilisés sont :
- HTML
- CSS (boosté avec du Bootstrap)
- Javascript

Un appel à l'API <http://quotes.rest/qod.json> a été réalisé afin de récupérer les informations nécessaires.

## Gestion des erreurs
Lorsqu'une erreur survient, la page web affiche le code de l'erreur ainsi que son message.

### A noter
En utilisant cette page web, il faut savoir que seulement 10 requêtes par heure à l'API sont réalisables.<br/>
Si on lance plus de fois la page web, un message d'erreur apparaît.