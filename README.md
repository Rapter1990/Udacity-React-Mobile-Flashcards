# Mobile Flash Card

### Live Show

<details>
<summary>Click here to show the live show of project</summary>
  ![Live Demo](./livedemo/livedemo.gif)
</details>

### Screenshoots

<details>
<summary>Click here to show the screenshots of project</summary>
<table style="border: 0px;">
  <tr>
     <td align="center"> Figure 1 </td>
     <td align="center"> Figure 2 </td>
     <td align="center"> Figure 3 </td>
  </tr>
  <tr>
    <td><img width="800" height="600" src ="/screenshots/screenshot1.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot2.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot3.PNG"></td>
  </tr>
  <tr>
     <td align="center"> Figure 4 </td>
     <td align="center"> Figure 5 </td>
     <td align="center"> Figure 6 </td>
  </tr>
  <tr>
    <td><img width="800" height="600" src ="/screenshots/screenshot4.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot5.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot6.PNG"></td>
  </tr>
  <tr>
     <td align="center"> Figure 7 </td>
     <td align="center"> Figure 8 </td>
     <td align="center"> Figure 9 </td>
  </tr>
  <tr>
    <td><img width="800" height="600" src ="/screenshots/screenshot7.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot8.PNG"></td>
    <td><img width="800" height="600" src ="/screenshots/screenshot9.PNG"></td>
  </tr>
</table>
</details>

## 📝 Using the App

- Once started, the app will load any decks you have created. If no decks are present, you can load sample decks to test functionality.
- An user can add a Deck.
- An user can click a deck to see cards in that deck.
- An user can add cards under a deck.
- An user can quiz himself.
- An user can delete a deck.
- When an user enter the quiz without containing quiz questions, the error page appears on the screen.
- When an user answer question as "Incorrect" or "Correct" in quiz without clicking "Show Answer" button, the error message appears on the screen.

## 🔔 Notifications

- The app will set a daily reminder that will be triggered if you have not started any quizzes that day. The notification will trigger between 8:20 PM.
- Starting a quiz resets the notification for the following day.

## TESTING
- App has been tested in Samsung Galaxy S7 emulator (Genymotion)

## 📂Project Structures  
 ┃📂actions        
 ┃ ┗📜index.js    
 ┃📂apk            
 ┃ ┗📜mobile-flashcards-9e63c5b14f55492fa3438dca4bb1ee59-signed.apk    
 ┃📂livedemo                        
 ┃ ┗📜livedemo.gif                      
 ┃📂screenshots                    
 ┃ ┗📜screenshot1.PNG          
 ┃ ┗📜screenshot2.PNG      
 ┃ ┗📜screenshot3.PNG      
 ┃ ┗📜screenshot4.PNG      
 ┃ ┗📜screenshot5.PNG      
 ┃ ┗📜screenshot6.PNG    
 ┃ ┗📜screenshot7.PNG    
 ┃ ┗📜screenshot8.PNG        
 ┃ ┗📜screenshot9.PNG                      
 ┃📂components        
 ┃ ┗📂component        
 ┃ ┃ ┗📜CustomClickButton.js        
 ┃ ┃ ┗📜TextButton.js        
 ┃ ┗📂Deck            
 ┃ ┃ ┗📜index.js     
 ┃ ┗📂DeckDetails    
 ┃ ┃ ┗📜DeckDetails.js       
 ┃ ┗📂Decks    
 ┃ ┃ ┗📜Decks.js          
 ┃ ┗📂HomeScreen    
 ┃ ┃ ┗📜index.js        
 ┃ ┗📂Navigation    
 ┃ ┃ ┗📜index.js      
 ┃ ┗📂NewCard    
 ┃ ┃ ┗📜NewCard.js       
 ┃ ┗📂NewDeck    
 ┃ ┃ ┗📜NewDeck.js      
 ┃ ┗📂Quiz    
 ┃ ┃ ┗📜Quiz.js      
 ┃ ┃ ┗📜QuizError.js    
 ┃ ┃ ┗📜QuizResult.js    
 ┃📂middleware         
 ┃ ┗📜index.js      
 ┃ ┗📜logger.js     
 ┃📂reducer        
 ┃ ┗📜index.js      
 ┃📂utils        
 ┃ ┗📜_DATA_.js      
 ┃ ┗📜api.js      
 ┃ ┗📜colors.js      
 ┃ ┗📜notification.js     
 ┃📜App.js     
 ┃📜store.js     

 ## Project Layout
```bash
├── README.md # Giving Information about Project.
├── index.js # Used for DOM rendering only.
├── package.json # Manager file of npm package.
├── App.js # This is the root of the app. Contains root view and navigational components.
├── store.js # Combines reducer and middleware to show log
├── actions
│   └── index.js # Provides actions and related handlers
├── apk
│   └── mobile-flashcards-9e63c5b14f55492fa3438dca4bb1ee59-signed.apk # apk file of an app
├── livedemo
│   └── livedemo.gif # live demo of app
├── reducers
│   └── index.js # Reducers for related actions
├── middleware
│   ├── index.js # Applies middleware for the store
│   └── logger.js # Provides logging during dispatching actions
├── utils
│   ├── _DATA_.js # Sample initial data of deck object
│   ├── api.js # Provides CRUD methods for decks and cards
│   └── colors.js # Colors used system-wide
│   └── notificatons.js # Helper methods to manage local notifications
├── screenshots
│   ├── screenshot1.PNG 
│   ├── screenshot2.PNG  
│   └── screenshot3.PNG  
│   └── screenshot4.PNG  
│   └── screenshot5.PNG  
│   └── screenshot6.PNG  
│   └── screenshot7.PNG  
│   └── screenshot8.PNG  
│   └── screenshot9.PNG  
└── components
    ├── component
    │    ├── CustomClickButton.js # A custom component for button
    │    ├── TextButton.js  # A custom component for text button              
    ├── Deck
    │    ├── index.js # A component to display an information of deck listed in Decks Component
    ├── DeckDetails
    │    ├── DeckDetails.js # A component to display an information of a specific deck
    ├── Decks
    │    ├── Decks.js # A component to display all decks to be used as a home screen
    ├── HomeScreen
    │    ├── index.js # A component that displays a home page
    ├── Navigation
    │    ├── index.js # A component that displays a bottom tab navigation bar and stack navigation.
    ├── NewCard
    │    ├── NewCard.js # A component to create a new question card for a specific deck.
    ├── NewDeck
    │    ├── NewDeck.js # A component to create a new deck.
    ├── Quiz
    │    ├── Quiz.js # A component to test users' knowledge about a deck of cards.
    │    ├── QuizError.js # A component to throw an error when there is no question card located in a specific deck
    │    ├── QuizResult.js # A component to show the result of quiz
```