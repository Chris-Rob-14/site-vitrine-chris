# SEO, données structurées et Analytics

## Périmètre

Le domaine de référence est `https://christopherrobine.dev` (`src/lib/site.ts`).
Les six chemins publics sont `/`, `/projet`, `/formation`, `/realisations`,
`/a-propos` et `/contact`. Les routes de campagne ne sont pas des pages publiques.

## Metadata et découvrabilité

- `pageMetadata` conserve les titres et descriptions éditoriaux existants.
- Chaque titre final est absolu : le nom n'est pas ajouté deux fois par le template.
- Chaque canonical est construit depuis un chemin public fixe, jamais depuis une URL entrante.
- Open Graph et Twitter reprennent le titre, la description et l'URL de chaque page.
- L'image sociale commune est générée par `next/og` à `/opengraph-image`, sans dépendance supplémentaire.
- Le sitemap contient seulement les six URL canoniques, sans date de modification artificielle.
- `robots.txt` autorise les robots ordinaires et référence le sitemap ; aucune règle spéciale pour les moteurs IA.
- Le contenu métier reste rendu côté serveur. Les disclosures natifs contiennent leur texte dans le HTML initial.
- Les images `fill` ont des `sizes` ; les grilles plafonnées à 1152 px disposent désormais d'un plafond adapté.

`Person` est rendu dans le layout avec l'identifiant stable
`https://christopherrobine.dev/#person`. Le poste vient de l'expérience actuelle,
pas d'un poste recherché. `knowsAbout` vient de `profile.expertise` et `alumniOf`
nomme uniquement l'établissement déjà documenté. Aucun diplôme de Master,
certification pédagogique, entreprise personnelle ou statut freelance n'est déclaré.

`ProfilePage` sur `/a-propos` référence ce même `#person`. Aucun schéma Course,
Product ou organisme de formation n'est ajouté. La transmission reste en préparation.

La démarche GEO repose sur ce contenu explicite, ses liens et son attribution.
Elle ne garantit aucune présence dans une réponse de moteur génératif. Aucun
`llms.txt`, contenu SEO caché ni page `/ressources` n'est créé.

## URL stables pour les supports, redirections temporaires

- `/ecole` : HTTP 307 vers `https://christopherrobine.dev/formation?utm_source=qr&utm_medium=print&utm_campaign=school_outreach`.
- `/carte` : HTTP 307 vers `https://christopherrobine.dev/?utm_source=qr&utm_medium=print&utm_campaign=business_card`.
- `/linkedin` : HTTP 307 vers `https://christopherrobine.dev/?utm_source=linkedin&utm_medium=social&utm_campaign=profile`.

Les réponses ont `Cache-Control: no-store` et `X-Robots-Tag: noindex`.
Les query strings entrantes ne sont pas reprises. Les canonical des destinations
restent sans UTM. Aucune UI ni image de QR code n'est générée.

## GA4 : avant / après

Avant : chargement de gtag via `next/script`, puis `config` avec envoi automatique
initial. Pas de gestion explicite des transitions App Router dans le code.

Après : `GoogleAnalytics` observe les navigations et délègue à `lib/analytics.ts`.
Le tag est initialisé une seule fois avec `send_page_view: false`. Un `page_view`
manuel est émis pour chaque changement de page publique ou de campagne reconnue.
Les répétitions d'effet sur la même URL mesurée sont ignorées. Une navigation A/B/A
est comptée ; les changements de fragment et paramètres non fonctionnels ne le sont pas.

Le tag ne se charge que pour un build de production sur l'origine canonique,
avec un identifiant `NEXT_PUBLIC_GA_MEASUREMENT_ID` valide. Les serveurs locaux,
`next dev` et les domaines de preview Vercel ne sont pas mesurés.
`NEXT_PUBLIC_GA_ENABLED=false` permet de désactiver entièrement le tag ; ces
variables publiques sont prises en compte au build, donc nécessitent un redéploiement.

Les URL Analytics n'incluent que les trois combinaisons UTM prédéfinies ci-dessus.
Les autres paramètres et fragments sont supprimés. Le référent externe est limité
à son origine ; le référent interne est un chemin public sans query string.
Les événements personnalisés ne contiennent ni adresse e-mail, ni sujet d'e-mail,
ni texte libre, ni URL LinkedIn. Aucun événement n'est envoyé pendant les contrôles de build.

## Réglages distants indispensables avant publication

Le code ne peut pas modifier les paramètres du flux GA4.

1. Vérifier que l'identifiant Vercel cible bien la propriété souhaitée.
2. Dans le flux Web, désactiver la mesure améliorée automatique des pages vues,
   notamment les changements d'historique. `send_page_view: false` ne suffit pas
   à désactiver cette mesure distante. Ne pas ajouter une seconde balise GA4/GTM
   qui mesure les mêmes pages.
3. Vérifier/désactiver les autres mesures améliorées automatiques (clics sortants,
   formulaires, etc.) si elles envoient des paramètres non maîtrisés. Le contrat
   de minimisation décrit ici concerne les événements émis par ce code.
4. Valider la collecte en temps réel / DebugView lors de la QA autorisée : un
   seul événement de page par navigation et les campagnes QR / LinkedIn correctement attribuées.

Référence : [Google, mesure des pages vues](https://developers.google.com/analytics/devguides/collection/ga4/views).

## Événements

| Événement | Déclencheur réel | Paramètres métier |
| --- | --- | --- |
| `page_view` | Navigation vers une page publique | Chemin, URL nettoyée, titre, référent nettoyé |
| `click_email` | Clic sur un lien mailto | `placement` : header, footer ou content |
| `click_linkedin` | Clic vers LinkedIn | `placement` |
| `click_training_cta` | CTA programme ou coordonnées du bloc contact de Formation | `placement` |
| `select_facet` | Clic sur une des trois facettes de la home | `facet` : project, training ou development |
| `select_project` | Clic sur le titre d'un projet de la home vers son ancre dans Réalisations | `project_id` public |

Un CTA e-mail de Formation peut produire `click_email` et `click_training_cta` :
ce sont deux dimensions distinctes, pas deux pages vues. `select_project` mesure
une intention d'ouverture, pas une lecture, d'où l'absence de faux `view_project`.
Les événements de clic sont centralisés par délégation ; les sections restent serveur.
Pour explorer les paramètres dans GA4, leur déclaration en dimensions personnalisées
peut être nécessaire. Les UTM servent à l'acquisition, sans événement QR supplémentaire.

## Consentement et QA restante

Aucun mécanisme de consentement n'existait dans l'intégration inspectée et aucune
bannière improvisée n'a été ajoutée. Sur le domaine de production, GA4 est donc
activé par défaut si l'identifiant existe, sans décision de consentement préalable.
**Ce point est à valider avant production selon la configuration et les obligations
applicables.** La variable de désactivation permet de suspendre la collecte en attendant.
Cette implémentation ne constitue pas une validation juridique de conformité.

La QA navigateur reste séparée : consentement/bloqueurs, requêtes GA4 et doublons,
attribution UTM, redirections réelles, aperçu social (dont rendu de l'image), canonical
dans le HTML final, données structurées, responsive et accessibilité. Aucun navigateur
automatisé ni QR graphique n'est utilisé ou créé dans cette phase.

## Fichiers de cette phase

Créés : `src/lib/site.ts`, `metadata.ts`, `structured-data.ts`, `analytics.ts` ;
`src/components/JsonLd.tsx` ; `src/app/sitemap.ts`, `robots.ts`, `opengraph-image.tsx`,
`ecole/route.ts`, `carte/route.ts` ; ce compte rendu.

Modifiés : `src/app/layout.tsx`, les six fichiers `page.tsx` publics,
`src/components/GoogleAnalytics.tsx`, `classic/FacetsSection.tsx`,
`classic/ProjectSection.tsx`, `classic/ThinkingCardsSection.tsx`.
