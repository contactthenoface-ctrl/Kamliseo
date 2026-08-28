# Kamliseo — Site Multi-Pages

Site statique multi-pages pour **kamliseo.com**, déployé sur Cloudflare Workers avec Static Assets.

## 📁 Structure

```
kamliseo/
├── wrangler.toml
├── assets/css/style.css
├── assets/js/main.js
├── index.html
├── 404.html
├── services/index.html
├── tarifs/index.html
├── blog/index.html
├── blog/pourquoi-confier-creation-site-web-agence-maroc/index.html
└── contact/index.html
```

## 🚀 Déploiement sans ligne de commande

### Méthode 1 — Via GitHub + Cloudflare Dashboard (recommandé)

1. Créez un repo sur GitHub (ex: `kamliseo-site`)
2. Uploadez tous les fichiers de ce projet dans le repo (via l'interface web GitHub)
3. Allez sur le dashboard Cloudflare → **Workers & Pages**
4. Cliquez **Create application** → **Import a repository**
5. Sélectionnez votre repo GitHub `kamliseo-site`
6. Configurez : Worker name = `kamliseo`, pas de build command nécessaire
7. Cliquez **Save and Deploy**

### Méthode 2 — Connecter le Worker existant à GitHub

1. Allez sur **Workers & Pages** → sélectionnez le Worker `kamliseo`
2. **Settings** → **Builds** → **Connect**
3. Sélectionnez votre repo GitHub
4. Le nom du Worker doit correspondre à `name = "kamliseo"` dans wrangler.toml
5. Poussez un commit pour déclencher le déploiement

## ✨ Fonctionnalités

- Menu hamburger responsive (mobile + desktop)
- 5 pages + 1 article de blog + template d'article
- Page 404 personnalisée
- Page Tarifs avec 6 offres en DH + tableau comparatif + FAQ
- Page Services optimisée SEO local (Maroc, Casablanca)
- Blog avec article à la une + grille + template
- Article d'exemple avec maillage interne (liens vers /services/ et /tarifs/)
- Données structurées JSON-LD (ProfessionalService + Article)
- Formulaire de contact fonctionnel (front-end)
- SEO-ready : meta, Open Graph, balises sémantiques
