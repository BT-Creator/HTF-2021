# hack-the-future-2021

Jij bent de frontend rechercheur die een blitse applicatie zal maken die de backend API aanspreekt. Gebruik je kennis, kunde en doorzettingsvermogen om een coole, maar ook gebruiksvriendelijke, intuïtieve UI ineen te steken die uiteindelijk een echt Cluedo spel zal worden.
Je spreekt de API aan om de verschillende “clues” van een “suggestie” in te laden en te visualiseren: de kamers, de verdachten en de wapens.
Door suggesties in te sturen, kan er vanuit jouw app geraden worden. Je krijgt dan een antwoord met het aantal juist geraden clues én één willekeurige verkeerde clue.
Zo kan er verder gezocht worden, tot op het moment dat je klaar bent om een “beschuldiging” te maken.

## Setup
Je kan vanuit het startproject in je lokale ontwikkelomgeving werken. De git repo, vind je hier https://gitlab.codana.dev/hack-the-future/hack-the-future-2021
Voor je begint te ontwikkelen, neem je een kopie van `.env.example` naar `.env`, en je vult in dat bestand je teamnaam in, in de plaats van %TEAMNAAM%, dit laat ons toe om jou en je team te volgen en bij eventuele problemen makkelijker in te grijpen. De andere variabelen hoef je niet aan te passen.

## Development
Op https://htf-2021.calibrate.be/api vind je alle documentatie over de API die je kan gebruiken.
Voor elke call naar de API, moet je de Authentication header vullen met je username:password Base64 encoded. Een voorbeeldje vind je in de codebase.
Ook een CSRF token is nodig, deze kan je bekomen via de API en stuur je daarna mee via de X-CSRF-Token header van je calls.
De authenticatie op deze API gebeurt over Basic Authentication, de gegevens in de .env file in REACT_APP_USERNAME en REACT_APP_PASSWORD zal je dus op de juiste manier daar moeten krijgen.

## De Challenges
1. Haal verdachten, wapens en kamers op uit de API en lijst deze op op de Clues pagina
2. Start een spel en toon de kamers van het huis.
   - Extra punt: Maak een visuele weergave van het huis.
3. Maak een formulier om een suggestie te doen na het klikken op een kamer. Stuur een verdachte en een wapen naar de API endpoint en handel de response af.
   - Extra punt: Houd de historiek van gemaakte suggesties bij en toon deze op het scherm.
4. Maak een formulier om een arrestatie/beschuldiging te maken en zo het spel te beëindigen.
   - Extra punt: Maak een aantrekkelijke pagina voor het einde van het spel. 
5. Lijst in aparte “notities” de verdachten, wapens en kamers op en maak aan de hand van de antwoorden op je suggesties een shortlist. 
6. Voeg een knop toe die het spel automatisch wint.
   - Extra punt: Zorg dat je het automatische spel visueel kan volgen. 

Algemeen extra punt: Propere foutafhandeling en feedback naar de gebruiker