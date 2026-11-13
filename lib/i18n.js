/* Smaakkaart: talen.
   De app is in het Nederlands geschreven. Dit bestand vertaalt alle teksten op het scherm
   terwijl de app draait. Een nieuwe taal toevoegen = een nieuwe lijst zoals EN hieronder. */
(function () {
  'use strict';

  /* ---------- Engels: vaste teksten ---------- */
  var EN = {
    /* algemeen, menu */
    'Smaakkaart': 'Smaakkaart',
    'Start': 'Home', 'Zoeken': 'Search', 'Vraag de AI': 'Ask the AI', 'Review': 'Review', 'Profiel': 'Profile', 'Kaart': 'Map',
    'Hoofdmenu': 'Main menu', 'Vraag het de AI': 'Ask the AI', 'Review schrijven': 'Write a review',
    'Terug': 'Back', '‹ Terug': '‹ Back', 'Later': 'Later', 'Opslaan': 'Save', 'Opslaan…': 'Saving…', 'Annuleren': 'Cancel', 'Sluiten': 'Close',
    'Verwijder': 'Delete', 'Verwijderen': 'Remove', 'Nieuw': 'New', 'Alles': 'All', 'Zoek': 'Search', 'Onbekend': 'Unknown', 'Gast': 'Guest', 'gast': 'guest',
    'Laden…': 'Loading…', 'Jij:': 'You:', 'Je kijkt als': 'You are browsing as', 'Inloggen': 'Log in', 'Uitloggen': 'Log out', 'Koppel e-mail': 'Link email',

    /* startscherm / inloggen */
    'Welkom bij Smaakkaart': 'Welcome to Smaakkaart',
    'Eten dat jij en je vrienden goed vinden. Echte reviews, geen gesponsorde plekken.': 'Food you and your friends love. Real reviews, no sponsored spots.',
    'Account maken': 'Create account', 'Inloggen met bestaand account': 'Log in with existing account', 'Doorgaan als gast': 'Continue as guest',
    'Een gast kan alles bekijken, maar geen reviews plaatsen. Je maakt een account met je e-mailadres en een code, een wachtwoord is niet nodig.': 'Guests can see everything but can’t post reviews. You create an account with your email address and a code, no password needed.',
    'Terug naar de kaart': 'Back to the map', 'Jouw naam': 'Your name', 'Bijvoorbeeld Stef': 'For example Sam', 'E-mailadres': 'Email address', 'naam@voorbeeld.nl': 'name@example.com',
    'Stuur mij een code': 'Send me a code', 'We hebben een code gestuurd naar': 'We sent a code to', '. Kijk ook in je spam, het kan even duren.': '. Check your spam folder too, it can take a moment.',
    'Code uit de mail': 'Code from the email', 'Stuur opnieuw': 'Send again', 'Ander e-mailadres': 'Different email address',
    'Koppel je e-mailadres': 'Link your email address', 'Dan blijven je reviews van jou en kun je ook op een ander apparaat inloggen.': 'That way your reviews stay yours and you can log in on another device.',
    'Code verstuurd naar': 'Code sent to', 'Koppelen': 'Link',
    'Vul je naam in.': 'Please enter your name.', 'Vul een geldig e-mailadres in.': 'Please enter a valid email address.', 'Vul de code uit de mail in.': 'Please enter the code from the email.',
    'Nieuwe code verstuurd': 'New code sent', 'E-mail gekoppeld. Je reviews blijven van jou.': 'Email linked. Your reviews stay yours.',
    'Naam gewijzigd': 'Name changed',
    'geen verbinding met de server. Controleer je internet.': 'no connection to the server. Check your internet.',
    'de database is nog niet ingericht. Voer supabase-setup.sql uit in Supabase.': 'the database has not been set up yet. Run supabase-setup.sql in Supabase.',
    'Even geduld: je kunt pas over ongeveer een minuut weer een code aanvragen.': 'Hold on: you can request a new code in about a minute.',
    'Die code klopt niet of is verlopen. Controleer hem of vraag een nieuwe aan.': 'That code is wrong or has expired. Check it or request a new one.',
    'Voor dit e-mailadres bestaat nog geen account. Ga terug en kies Account maken.': 'There is no account for this email address yet. Go back and choose Create account.',
    'De mail kon niet worden verstuurd. Controleer de mail-instellingen (SMTP) in Supabase.': 'The email could not be sent. Check the mail settings (SMTP) in Supabase.',
    'De verbinding met de database kon niet worden geladen. Ververs de pagina.': 'Could not connect to the database. Refresh the page.',

    /* Voor jou */
    'Waar gaan we eten?': 'Where shall we eat?', 'Waar gaan we eten,': 'Where shall we eat,', 'Keukens': 'Cuisines',
    'Voeg de eerste foto toe': 'Add the first photo',
    'Toppers': 'Top rated', 'Van je vrienden': 'From your friends', 'Nieuw op Smaakkaart': 'New on Smaakkaart', 'Wil ik nog proberen': 'Want to try',
    'Op de kaart': 'On the map', 'Op je lijstje': 'On your list', 'Nog geen review': 'No review yet',

    /* kaart */
    'Kaart met restaurants': 'Map with restaurants', 'Alle restaurants in beeld': 'Show all restaurants', 'Alleen vrienden': 'Friends only',
    'De kaart kon niet laden. Controleer je internetverbinding en ververs de pagina.': 'The map could not load. Check your internet connection and refresh the page.',
    'Legenda': 'Legend', 'onder 7,5': 'below 7.5', '7,5 tot 8,5': '7.5 to 8.5', '8,5 en hoger': '8.5 and up',
    'Cijfer in de pin: gemiddelde van jullie reviews.': 'Score in the pin: average of your group’s reviews.',
    'land van de keuken': 'country of the cuisine', 'mix van keukens': 'mix of cuisines', 'Europees': 'European', 'veel verschillende keukens': 'many different cuisines',
    'Kaart van OpenStreetMap (via OpenFreeMap). Sleep om te verschuiven, knijp of gebruik + en − om te zoomen.': 'Map from OpenStreetMap (via OpenFreeMap). Drag to move, pinch or use + and − to zoom.',
    'Alle restaurants': 'All restaurants', 'Alle restaurants bekijken': 'View all restaurants',
    'Nog geen restaurants': 'No restaurants yet', 'Schrijf de eerste review, dan verschijnt het restaurant met een pin op de kaart.': 'Write the first review and the restaurant will appear as a pin on the map.',
    'Keuken onbekend': 'Cuisine unknown', 'Foto\'s': 'Photos', 'Nog geen foto\'s. Voeg ze toe als je een review schrijft.': 'No photos yet. Add them when you write a review.',
    'Reviews van vrienden': 'Reviews from friends', 'Website': 'Website', 'Website zoeken': 'Find website', 'Menukaart': 'Menu', 'Menukaart zoeken': 'Find menu',
    'Bewerk': 'Edit', 'Verwijder mijn review': 'Delete my review', 'Tik nogmaals om te verwijderen': 'Tap again to delete', 'bewerkt': 'edited',
    '♥ Op mijn lijstje': '♥ On my list', '♡ Wil ik proberen': '♡ Want to try', '♡ Bewaar voor later': '♡ Save for later',
    'Foto laadt niet': 'Photo won’t load', 'Bij review': 'With review', 'Je foto': 'Your photo', 'Nieuwe foto': 'New photo', 'Voorbeeld van je foto': 'Preview of your photo',
    'Nog geen reviews van jou of je vrienden.': 'No reviews from you or your friends yet.', 'Nog niets om te laten zien.': 'Nothing to show yet.',
    'Review bewerken': 'Edit review', 'Je foto\'s': 'Your photos', 'Toch houden': 'Keep it', 'Foto\'s toevoegen (in totaal maximaal 10)': 'Add photos (10 max in total)',
    'Vul een cijfer tussen 1 en 10 in.': 'Enter a score between 1 and 10.',
    'Bewerken kan niet meer: de review is langer dan 48 uur geleden geplaatst.': 'Editing is no longer possible: the review was posted more than 48 hours ago.',
    'Review aangepast': 'Review updated', 'Review verwijderd': 'Review deleted', 'Cijfer': 'Score',

    /* zoeken */
    'Locatie: overal': 'Location: anywhere', 'Locatie': 'Location', 'Keuken, naam restaurant …': 'Cuisine, restaurant name …', 'Zoek op keuken of naam': 'Search by cuisine or name',
    'Je zoekt alleen in restaurants met een review op Smaakkaart.': 'You only search restaurants with a review on Smaakkaart.',
    'Mijn hartjes': 'My hearts', '♥ Mijn hartjes': '♥ My hearts', 'Recente zoekopdrachten': 'Recent searches', 'Hoogste cijfer': 'Highest score', 'Dichtstbij': 'Nearest', '✕ Wissen': '✕ Clear',
    'Hartje': 'Heart', 'Niets gevonden. Probeer een andere keuken, naam of plaats.': 'Nothing found. Try another cuisine, name or place.',
    '📍 In de buurt': '📍 Nearby', 'In de buurt': 'Nearby', 'In de buurt…': 'Nearby…', 'Overal': 'Anywhere',
    'Locatie is niet beschikbaar op dit apparaat.': 'Location is not available on this device.',
    'Je locatie kon niet worden bepaald. Geef de app toestemming in je instellingen.': 'Your location could not be found. Give the app permission in your settings.',

    /* vraag de AI */
    'Waar gaan we eten? ': 'Where shall we eat?', 'Vertel wat je zoekt': 'Tell me what you’re looking for', 'Zoek restaurants': 'Find restaurants',
    'Ik wil graag Spaans eten volgende week. Ik zoek een lage prijsklasse, maar wel veel sfeer. Maximaal 45 minuten rijden.': 'I’d like Spanish food next week. Low price range, but lots of atmosphere. Max 45 minutes drive.',
    'Ik wil graag Spaans eten volgende week. Lage prijsklasse, maar wel veel sfeer. Maximaal 45 minuten rijden.': 'I’d like Spanish food next week. Low price range, but lots of atmosphere. Max 45 minutes drive.',
    'Italiaans, goedkoop, max 30 minuten': 'Italian, cheap, max 30 minutes', 'Iets bijzonders, duur mag, Frans of Japans, binnen 40 minuten': 'Something special, pricey is fine, French or Japanese, within 40 minutes',
    'Demo: dit leest nu alleen trefwoorden (keuken, prijs, sfeer, minuten) in jullie eigen reviews. Later beantwoordt Claude je vraag.': 'Demo: for now this only reads keywords (cuisine, price, atmosphere, minutes) in your own reviews. Later Claude will answer your question.',
    'Er staan nog geen restaurants in de app. Schrijf eerst een review, dan kan ik zoeken.': 'There are no restaurants in the app yet. Write a review first, then I can search.',
    'Ik herkende geen voorkeuren. Probeer bijvoorbeeld: Italiaans, goedkoop, max 30 minuten.': 'I didn’t recognise any preferences. Try for example: Italian, cheap, max 30 minutes.',
    'Geen restaurant voldoet aan alles. Probeer een hogere prijsklasse of meer minuten.': 'No restaurant matches everything. Try a higher price range or more minutes.',
    'Ik zoek:': 'Looking for:', 'lage prijsklasse': 'low price range', 'middenklasse': 'mid-range', 'prijs maakt niet uit': 'price doesn’t matter', 'veel sfeer': 'lots of atmosphere',
    'Toon op kaart': 'Show on map',

    /* review schrijven */
    'Gasten kunnen reviews bekijken, maar niet plaatsen. Maak een account of log in om een review te schrijven.': 'Guests can read reviews but not post them. Create an account or log in to write a review.',
    'Inloggen of account maken': 'Log in or create account', 'Restaurant': 'Restaurant', 'Typ de naam, bijvoorbeeld Takumi': 'Type the name, for example Takumi', 'Gevonden restaurants': 'Restaurants found',
    'Waar is het?': 'Where is it?', 'We vonden dit restaurant niet. Vul de plaats in, dan zoeken we de plek op de kaart.': 'We couldn’t find this restaurant. Enter the town and we’ll find it on the map.',
    'Plaats (verplicht)': 'Town (required)', 'Bijvoorbeeld Dordrecht': 'For example Rotterdam', 'Straat (niet verplicht)': 'Street (optional)', 'Helpt bij het vinden van de juiste plek': 'Helps find the right place',
    'Zoek de plek': 'Find the place', 'Cijfer (per 0,1)': 'Score (per 0.1)', '0,1 lager': '0.1 lower', '0,1 hoger': '0.1 higher', 'Cijfer schuifbalk': 'Score slider',
    'Wat vond je ervan?': 'What did you think?', 'Eten, sfeer, prijs, tip voor de volgende keer': 'Food, atmosphere, price, tip for next time', 'Foto\'s (maximaal 10)': 'Photos (10 max)',
    'Foto\'s die je hier toevoegt krijgen het label "Bij review" en zijn alleen zichtbaar voor mensen die de app gebruiken.': 'Photos you add here get the label "With review" and are only visible to people using the app.',
    'Review opslaan': 'Save review', 'Restaurantgegevens komen van OpenStreetMap-bijdragers (© OpenStreetMap). Niet elk restaurant staat erin.': 'Restaurant data comes from OpenStreetMap contributors (© OpenStreetMap). Not every restaurant is listed.',
    'Staat al op de kaart': 'Already on the map', 'Zoeken op de kaart…': 'Searching the map…', 'Typ nog een paar letters, dan verschijnen de restaurants vanzelf.': 'Type a few more letters and restaurants will appear.',
    'Even geduld, of tik op Zoek.': 'Hold on, or tap Search.', 'Staat het er niet bij? Voeg het zelf toe': 'Not listed? Add it yourself', 'Nieuw restaurant': 'New restaurant',
    'Kies keuken': 'Choose cuisine', 'Anders…': 'Other…', 'Keuken': 'Cuisine', 'Prijs': 'Price', 'Sfeer': 'Atmosphere',
    'Plek en adres komen van de kaart.': 'Location and address come from the map.', 'De pin komt op de gevonden plek.': 'The pin goes on the place found.', 'Controleer de rest even.': 'Please check the rest.',
    'Welke keuken?': 'Which cuisine?', 'Ander restaurant kiezen': 'Choose another restaurant', 'plaats onbekend': 'town unknown',
    'Typ eerst de naam van het restaurant.': 'Type the restaurant name first.', 'Vul bovenaan eerst de naam van het restaurant in.': 'Enter the restaurant name at the top first.',
    'Vul de plaats in. Zonder plaats kunnen we de plek niet vinden.': 'Enter the town. Without a town we can’t find the place.', 'Plek zoeken…': 'Finding place…',
    'Die plaats kennen we niet. Controleer de spelling en probeer het opnieuw.': 'We don’t know that town. Check the spelling and try again.',
    'Niets gevonden op de kaart met deze naam.': 'Nothing found on the map with this name.', 'Zoekdienst gaf fout': 'Search service returned an error',
    'Niets gevonden. Probeer een andere schrijfwijze, tik op Zoek, of voeg het zelf toe.': 'Nothing found. Try another spelling, tap Search, or add it yourself.',
    'Automatisch zoeken lukt nu niet. Tik op Zoek.': 'Automatic search isn’t working right now. Tap Search.',
    'Kies eerst een restaurant uit de lijst, of voeg het zelf toe.': 'Pick a restaurant from the list first, or add it yourself.',
    'Dit restaurant staat niet meer in de database. Zoek het opnieuw op.': 'This restaurant is no longer in the database. Search for it again.',
    'Kies de keuken van het restaurant.': 'Choose the restaurant’s cuisine.', 'Vul in welke keuken het is.': 'Enter which cuisine it is.',
    'Review opgeslagen': 'Review saved', 'Review opgeslagen en restaurant toegevoegd': 'Review saved and restaurant added', 'Die foto kon niet worden gelezen.': 'That photo could not be read.',

    /* profiel */
    'Je activiteit': 'Your activity', 'Mijn reviews': 'My reviews', '★ Mijn reviews': '★ My reviews', 'Vrienden': 'Friends', 'Over jou': 'About you', 'Persoonlijke gegevens': 'Personal details',
    'Instellingen': 'Settings', 'Account': 'Account', 'E-mailadres koppelen': 'Link email address', 'Voeg je woonplaats toe': 'Add your home town',
    'Mijn profiel': 'My profile', 'Foto kiezen': 'Choose photo', 'Foto weghalen': 'Remove photo', 'Naam': 'Name', 'Woonplaats': 'Home town', 'Waar woon je?': 'Where do you live?',
    'Over mij (optioneel)': 'About me (optional)', 'Een korte bio': 'A short bio', 'Favoriete keukens': 'Favourite cuisines', 'Wie ziet mijn profiel?': 'Who can see my profile?',
    'Openbaar': 'Public', 'Helemaal privé': 'Completely private',
    'Je reviews zijn altijd zichtbaar voor iedereen, met alleen je naam erbij. Deze instelling bepaalt wie je woonplaats, bio, foto en favoriete keukens ziet.': 'Your reviews are always visible to everyone, with just your name. This setting decides who sees your home town, bio, photo and favourite cuisines.',
    'Profiel opslaan': 'Save profile', 'Profiel opgeslagen': 'Profile saved', 'Vul een naam in.': 'Please enter a name.',
    'Plekken die je wilt proberen. Tik op het hartje bij een restaurant om het hier te bewaren.': 'Places you want to try. Tap the heart on a restaurant to save it here.',
    'Nog niets op je lijstje. Tik bij een restaurant op "Wil ik proberen".': 'Nothing on your list yet. Tap "Want to try" on a restaurant.',
    'Van je lijstje gehaald': 'Removed from your list', 'Op je lijstje gezet': 'Added to your list', 'Van lijstje halen': 'Remove from list', 'Bekijk': 'View',
    'Zoek een vriend op naam': 'Search for a friend by name', 'Verzoeken': 'Requests', 'Verstuurd': 'Sent', 'Mijn vrienden': 'My friends', 'Accepteren': 'Accept', 'Weigeren': 'Decline', 'Intrekken': 'Withdraw', 'Toevoegen': 'Add',
    'Nog geen vrienden. Zoek hierboven op naam.': 'No friends yet. Search by name above.', 'Niemand gevonden (of al je vriend).': 'No one found (or already your friend).',
    'Verzoek verstuurd': 'Request sent', 'Jullie zijn nu vrienden': 'You are now friends', 'Vriend toevoegen': 'Add friend', '✓ Jullie zijn vrienden': '✓ You are friends',
    'Verzoek verstuurd, wacht op acceptatie.': 'Request sent, waiting for approval.', 'Verzoek accepteren': 'Accept request', 'Dit profiel is privé of alleen zichtbaar voor vrienden.': 'This profile is private or only visible to friends.',
    'Je hebt nog geen reviews geschreven.': 'You haven’t written any reviews yet.',

    /* weergave en taal */
    'Weergave': 'Appearance', 'Kies hoe Smaakkaart eruitziet. Je keuze wordt op dit apparaat onthouden.': 'Choose how Smaakkaart looks. Your choice is saved on this device.',
    'Automatisch': 'Automatic', 'Licht': 'Light', 'Donker': 'Dark', 'Zwart': 'Black',
    'Volgt de instelling van je telefoon': 'Follows your phone’s setting', 'Lichte achtergrond, ook in het donker': 'Light background, even at night',
    'Warm donkerbruin, rustig voor je ogen': 'Warm dark brown, easy on the eyes', 'Helemaal zwart, bespaart batterij op OLED-schermen': 'Pure black, saves battery on OLED screens',
    'Taal': 'Language',
    'Vertaal': 'Translate', 'Vertalen…': 'Translating…', 'Toon origineel': 'Show original', 'Deze review is al in jouw taal.': 'This review is already in your language.',
    'Vertalen staat nog niet aan.': 'Translation isn’t switched on yet.', 'De vertaal-limiet van deze maand is bereikt.': 'This month’s translation limit has been reached.', 'Vertalen lukt nu niet.': 'Translation isn’t working right now.', 'Kies je taal. Reviews blijven in de taal waarin ze zijn geschreven.': 'Choose your language. Reviews stay in the language they were written in.',

    /* keukens */
    'Spaans': 'Spanish', 'Italiaans': 'Italian', 'Japans': 'Japanese', 'Grieks': 'Greek', 'Frans': 'French', 'Nederlands': 'Dutch', 'Mediterraan': 'Mediterranean', 'Wereldkeuken': 'World cuisine',
    'Amerikaans': 'American', 'Argentijns': 'Argentinian', 'Belgisch': 'Belgian', 'Braziliaans': 'Brazilian', 'Brits': 'British', 'Chinees': 'Chinese', 'Duits': 'German', 'Egyptisch': 'Egyptian', 'Ethiopisch': 'Ethiopian',
    'Indiaas': 'Indian', 'Indonesisch': 'Indonesian', 'Israëlisch': 'Israeli', 'Koreaans': 'Korean', 'Libanees': 'Lebanese', 'Marokkaans': 'Moroccan', 'Mexicaans': 'Mexican', 'Peruaans': 'Peruvian', 'Pools': 'Polish',
    'Portugees': 'Portuguese', 'Surinaams': 'Surinamese', 'Thais': 'Thai', 'Turks': 'Turkish', 'Vietnamees': 'Vietnamese', 'Zwitsers': 'Swiss'
  };

  /* ---------- Engels: teksten met een getal of naam erin ---------- */
  function num(x) { return String(x).replace(/(\d),(\d)/g, '$1.$2'); }
  var PAT_EN = [
    [/^Laden mislukt: ([\s\S]+)$/, function (m, a) { return 'Loading failed: ' + tr(a); }],
    [/^Naam wijzigen mislukt: ([\s\S]+)$/, function (m, a) { return 'Changing name failed: ' + tr(a); }],
    [/^Opslaan mislukt: ([\s\S]+)$/, function (m, a) { return 'Saving failed: ' + tr(a); }],
    [/^Verwijderen mislukt: ([\s\S]+)$/, function (m, a) { return 'Deleting failed: ' + tr(a); }],
    [/^Mislukt: ([\s\S]+)$/, function (m, a) { return 'Failed: ' + tr(a); }],
    [/^Wacht nog (\d+) seconden voordat je een nieuwe code aanvraagt\.$/, 'Wait $1 more seconds before requesting a new code.'],
    [/^\(nog (\d+) uur\)$/, '($1 hours left)'],
    [/^(\d+) reviews?$/, function (m, n) { return n + (n === '1' ? ' review' : ' reviews'); }],
    [/^(\d+) restaurants?$/, function (m, n) { return n + (n === '1' ? ' restaurant' : ' restaurants'); }],
    [/^Review (aangepast|opgeslagen), maar (\d+) foto('s)? lukte niet$/, function (m, a, n) { return 'Review ' + (a === 'aangepast' ? 'updated' : 'saved') + ', but ' + n + ' photo' + (n === '1' ? '' : 's') + ' failed'; }],
    [/^Maximaal 10 foto's per review\. Er zijn er (\d+) toegevoegd\.$/, 'Max 10 photos per review. $1 were added.'],
    [/^♥ ([\s\S]+) staat op je lijstje\. Nog niemand heeft hier een review geschreven\.$/, '♥ $1 is on your list. Nobody has reviewed it yet.'],
    [/^([\s\S]+) \(op je lijstje\)$/, '$1 (on your list)'],
    [/^([\s\S]+), op mijn lijstje$/, '$1, on my list'],
    [/^([\s\S]+), cijfer (\d+,\d)$/, function (m, a, s) { return a + ', score ' + num(s); }],
    [/^\(([\s\S]*), cijfer (\d+,\d)\) zit net buiten je grens: ca\. (\d+) min rijden\.$/, function (m, c, s, n) { return '(' + c + ', score ' + num(s) + ') is just outside your limit: approx. ' + n + ' min drive.'; }],
    [/^Foto van ([\s\S]+)$/, 'Photo by $1'],
    [/^Sfeer ([●○]+)$/, 'Atmosphere $1'],
    [/^Sfeer (\d) van 5$/, 'Atmosphere $1 of 5'],
    [/^sfeer (\d) van 5$/, 'atmosphere $1 of 5'],
    [/^(\d) van 5$/, '$1 of 5'],
    [/^ca\. (\d+) min rijden$/, 'approx. $1 min drive'],
    [/^max\. (\d+) min rijden$/, 'max. $1 min drive'],
    [/^ca\. (\d+) km$/, 'approx. $1 km'],
    [/^([\s\S]+?) zegt: ([\s\S]*)$/, '$1 says: $2'],
    [/^Zoeken op de kaart lukt nu niet \(([\s\S]*)\)\. Je kunt het restaurant ook zelf toevoegen\.$/, function (m, a) { return 'Map search isn’t working right now (' + tr(a) + '). You can also add the restaurant yourself.'; }],
    [/^Zoeken lukt nu niet \(([\s\S]*)\)\.$/, function (m, a) { return 'Search isn’t working right now (' + tr(a) + ').'; }],
    [/^(\d+),(\d)$/, '$1.$2'],
    [/^([\s\S]+?) of ([\s\S]+)$/, function (m, a, b) { var x = EN[a], y = EN[b]; return (x && y) ? x + ' or ' + y : m; }]
  ];

  var LANGS = { nl: { naam: 'Nederlands', vlag: '🇳🇱', dict: null, pat: [] }, en: { naam: 'English', vlag: '🇬🇧', dict: EN, pat: PAT_EN } };
  var L = 'nl';
  try { L = localStorage.getItem('taal') || ''; } catch (e) {}
  if (!LANGS[L]) L = /^nl\b/i.test((navigator.languages && navigator.languages[0]) || navigator.language || 'nl') ? 'nl' : 'en';

  /* vertaal één tekst (het Nederlands is de sleutel) */
  function tr(s) {
    var D = LANGS[L].dict; if (!D || s == null) return s;
    s = String(s);
    var m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), core = m[2];
    if (!core || !/[A-Za-zÀ-ÿ0-9]/.test(core)) return s;
    var out = D[core];
    if (out === undefined && core.indexOf(' · ') > -1) {
      var parts = core.split(' · '), changed = false;
      parts = parts.map(function (p) { var q = tr(p); if (q !== p) changed = true; return q; });
      if (changed) out = parts.join(' · ');
    }
    if (out === undefined) {
      var P = LANGS[L].pat;
      for (var i = 0; i < P.length; i++) { if (P[i][0].test(core)) { var o = core.replace(P[i][0], P[i][1]); if (o !== core) { out = o; break; } } }
    }
    return out === undefined ? s : m[1] + out + m[3];
  }

  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  function noTr(el) { return el && el.closest && el.closest('[translate="no"]'); }
  function doText(n) {
    var p = n.parentNode; if (!p || SKIP[p.nodeName] || noTr(p)) return;
    if (n.__o === undefined || n.data !== n.__t) n.__o = n.data;
    var out = tr(n.__o);
    n.__t = out;
    if (out !== n.data) n.data = out;
  }
  function doAttrs(el) {
    if (!el.getAttribute || noTr(el)) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], v = el.getAttribute(a); if (v == null) continue;
      el.__oa = el.__oa || {}; el.__ta = el.__ta || {};
      if (el.__oa[a] === undefined || v !== el.__ta[a]) el.__oa[a] = v;
      var out = tr(el.__oa[a]); el.__ta[a] = out;
      if (out !== v) el.setAttribute(a, out);
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1) { if (SKIP[root.nodeName]) return; doAttrs(root); }
    var w = document.createTreeWalker(root, 5, null), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else if (!SKIP[n.nodeName]) doAttrs(n); }
  }
  var busy = false;
  var obs = new MutationObserver(function (list) {
    if (busy) return;
    busy = true;
    try {
      list.forEach(function (m) {
        if (m.type === 'childList') m.addedNodes.forEach(walk);
        else if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'attributes') doAttrs(m.target);
      });
    } finally { obs.takeRecords(); busy = false; }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  function setLang(l) {
    if (!LANGS[l]) return;
    L = l;
    try { localStorage.setItem('taal', l); } catch (e) {}
    document.documentElement.lang = l;
    busy = true; walk(document.documentElement); obs.takeRecords(); busy = false;
    document.dispatchEvent(new CustomEvent('taal', { detail: l }));
  }
  document.documentElement.lang = L;
  document.addEventListener('DOMContentLoaded', function () { busy = true; walk(document.documentElement); obs.takeRecords(); busy = false; });

  window.I18N = { get: function () { return L; }, set: setLang, t: tr, langs: LANGS };
})();
