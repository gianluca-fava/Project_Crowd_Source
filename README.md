# ProgettoCrowdsourcing

## Link al file .csv originale
[Link dropbox](https://www.dropbox.com/scl/fi/tkkj9agzh5ry9ur1oy5yn/GROUP-1_AMAZON_VIDEO_GAMES.zip?rlkey=55qa04innldsm2zwow4h58hor&dl=0)

## Link al questionario
https://public-social-computing.s3.eu-central-1.amazonaws.com/task1/batch1/index.html?admin=true

## CreationDataframe.ipnby
Genera un file .csv di recensioni da includere negli HITS

## HITs_creator.ipynb
Genera un file .csv in cui vengono accoppiate 5 recensioni casuali ad ognuno dei 15 HIT.






# COSE DA FARE

Sistemare le 5 domande iniziali (ne mancano 1/2) -> mettere tutte le domande in una sezione (adesso sono tutte in sezioni diverse)

Fare un jupiter Notebook che crea gli hit basato su df_HIT_reviews.csv -> l'insieme delle hits (15 hit) che devono esserer svolte da 15 worker, ogni worker deve rispondere alle 5 domande iniziali (di conoscenza) e poi deve rispondere alle seguenti doamnde per ognuna delle 5 review:
  - Affidabilità (reliability): the review is considered reliable, as opposed to reporting unreliable information.
  - Neutralità (neutrality): the review is expressed in objective terms, as opposed to resulting subjective or biased.
  - Comprensibilità (comprehensibility): the review is understandable/readable as opposed to difficult to understand.
  - Precisione (precision): the review is precise/specific, as opposed to vague.
  - Completezza (completeness): the review is complete as opposed to partial.
  - Informatività (informativeness): the review allows deriving useful information as opposed to well-known facts and/or tautologies.
  
Quindi bisogna crare un programma che crea automaticamente il json contente tutte le unit 


a. Visualizzate un questionario con 5 domande scelte da voi per catturare (alcuni) aspetti demografici o culturali dei lavoratori

_possibili domande:_
  - Qual'è la tua età?
      Sotto 18
      18-24
      25-34
      35-44
      45-54
      Sopra 54
  - Qual'è il tuo sesso (con nani)?
      Maschio
      Femmina
      Preferisco non dirlo
  - frequenza di gioco
      Ogni giorno
      Alcune volte a settimana
      Una volta al mese
      Raramente
      Mai
  - Quanto sei propenso a fare recensioni su prodotti acquistati online:
      Sempre (per quasi tutti i prodotti)
      Spesso (per l'80% dei prodotti)
      Occasionalmente (per il 50% dei prodotti)
      Raramente (20% dei prodotti)
      Mai (non mi interessa fare recensioni)
  - Quanto sei incline a basare l'acquisto di un prodotto onlne sulle recensioni altrui?
      Completamente 
      Abbastanza 
      Poco 
      Per niente   

b. Visualizzate i seguenti attributi per ciascuna recensione: 
  ○ review_time
  ○ product_title 
  ○ product_brand 
  ○ review_text
  
c. Aggiungete ciascuna dimensione di valutazione indicata nella sezione “Obiettivo” con le seguenti caratteristiche
  ○ Nome: nome della dimensione, in minuscolo 
    ■ e.g., reliability
  ○ Descrizione: descrizione della dimensione
    ■ e.g., the review is considered reliable, as opposed to reporting unreliable information
  ○ Scala di valutazione: categoriale a 5 valori:
    ■ Etichetta: Completely Disagree, valore: -2
    ■ Etichetta: Partially Disagree, valore: -1
    ■ Etichetta: Neutral, valore: 0
    ■ Etichetta: Partially Agree, valore: 1
    ■ Etichetta: Completely Agree, valore: 2
  ○ Stile:
    ■ Tipo: matrix
    ■ Orientamento:vertical
    ■ Posizione: middle
    
d. Aggiungete una settima dimensione di valutazione per misurare la confidence del lavoratore nei suoi giudizi, con le seguenti caratteristiche:
  ○ Nome: confidence
  ○ Descrizione: a vostra scelta
  ○ Scala di valutazione: intervallare
    ■ Minimo: 1
    ■ Massimo: 100
    ■ Step: 1
  ○ Giustificazione:
    ■ Almeno 10 parole
  ○ Stile:
    ■ Tipo: list
    ■ Orientamento:vertical
    ■ Posizione: bottom
    
e. Scrivete delle adeguate istruzioni generali, per introdurre e descrivere brevemente il task al lavoratore

Generale: 
Ciao e benvenuto!

Grazie per partecipare a questa breve indagine. Il tuo contributo è importante per noi e ci aiuterà a comprendere meglio determinati aspetti.

Questo task consiste in una serie di domande a risposta multipla. Ti chiederemo informazioni riguardanti diversi argomenti. È importante rispondere in base alla tua esperienza e alle tue opinioni personali.

Si prega di leggere attentamente ciascuna domanda e di selezionare l'opzione che meglio rispecchia la tua situazione o il tuo pensiero. Ricorda che non ci sono risposte sbagliate o giuste, è fondamentale essere onesti e sinceri.

Ti chiediamo di dedicare qualche minuto per completare il questionario in modo accurato. Le tue risposte sono importanti per noi e saranno trattate in modo confidenziale.

Grazie per la tua partecipazione!

Specifica:
Ciao e benvenuto nel nostro sondaggio!

Grazie per dedicare del tempo a rispondere alle nostre domande. Questo questionario riguarda diversi aspetti e abitudini personali.

Età: Seleziona il range d'età che ti rappresenta meglio tra le opzioni proposte: "Sotto 18 anni", "18-24", "25-34", "35-44", "45-54", "Sopra 54".
Sesso: Indica il tuo genere selezionando tra le opzioni "Maschio", "Femmina" o "Preferisco non dirlo".
Frequenza di gioco: Quanto spesso giochi ai videogiochi? Scegli tra le opzioni: "Ogni giorno", "Alcune volte a settimana", "Una volta al mese", "Raramente", "Mai".
Affidamento alle recensioni: Quanto sei propenso a lasciare recensioni sui prodotti acquistati online? Scegli l'opzione che meglio rispecchia la tua abitudine: "Sempre (per quasi tutti i prodotti)", "Spesso (per l'80% dei prodotti)", "Occasionalmente (per il 50% dei prodotti)", "Raramente (20% dei prodotti)", "Mai (non mi interessa fare recensioni)".
Test: Rispondi vero o falso alla domanda "com'è questo test".
Ricorda, le tue risposte sono importanti per noi e saranno trattate in modo confidenziale. Sii sincero e seleziona le opzioni che meglio rappresentano la tua situazione. Ti ringraziamo per il tempo che dedicherai a completare questo questionario.

Grazie per la tua partecipazione!

f. Scrivete delle adeguate istruzioni di valutazione, per spiegare al lavoratore cosa
deve fare per valutare ciascuna recensione

Istruzioni per la valutazione delle recensioni

Grazie per partecipare alla valutazione delle recensioni. Il tuo contributo è fondamentale per valutare accuratamente ciascuna recensione secondo alcuni criteri definiti.

Passaggio 1: Leggi attentamente la recensione

Leggi la recensione fornita e assicurati di capire il contenuto nel suo complesso. Valuta l'esposizione delle informazioni e la completezza della descrizione del prodotto o dell'esperienza.

Passaggio 2: Valuta la chiarezza e la coerenza

Verifica se la recensione è chiara e coerente. Controlla se il contenuto è ben strutturato e se segue un ordine logico. Assicurati che sia facilmente comprensibile da chi legge.

Passaggio 3: Analizza l'attendibilità e l'obiettività

Valuta l'affidabilità della fonte e l'obiettività delle informazioni fornite. Considera se la recensione sembra essere basata sull'esperienza personale o se potrebbe essere influenzata da altri fattori.

Passaggio 4: Esprimi la tua valutazione

Dopo aver analizzato la recensione, attribuisci un voto in base alla tua valutazione complessiva della qualità della recensione stessa, utilizzando una scala da 1 a 5. Ad esempio:

1: Scarsa qualità
2: Poca chiarezza e coerenza
3: Media qualità, migliorabile
4: Buona qualità, informativa
5: Eccellente qualità, completa e affidabile
Passaggio 5: Commento aggiuntivo (opzionale)

Se lo desideri, aggiungi un commento aggiuntivo che spieghi la tua valutazione o fornisca ulteriori dettagli sulla tua valutazione.

Passaggio 6: Conclusione

Ricorda, la tua valutazione sarà fondamentale per comprendere la qualità e l'affidabilità di ciascuna recensione. Cerca di essere il più obiettivo possibile nel tuo giudizio.

Grazie per il tuo impegno e la tua attenzione nel valutare le recensioni!

g. Configurate le seguenti impostazioni:
