# ProgettoCrowdsourcing

## Link al file .csv originale
[Link dropbox](https://www.dropbox.com/scl/fi/tkkj9agzh5ry9ur1oy5yn/GROUP-1_AMAZON_VIDEO_GAMES.zip?rlkey=55qa04innldsm2zwow4h58hor&dl=0)

## CreationDataframe.ipnby
Genera un file .csv di recensioni da includere negli HITS

## HITs_creator.ipynb
Genera un file .csv in cui vengono accoppiate 5 recensioni casuali ad ognuno dei 15 HIT.






# COSE DA FARE

Sistemare le 5 domande iniziali (ne mancano 1/2)

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

f. Scrivete delle adeguate istruzioni di valutazione, per spiegare al lavoratore cosa
deve fare per valutare ciascuna recensione

g. Configurate le seguenti impostazioni:
