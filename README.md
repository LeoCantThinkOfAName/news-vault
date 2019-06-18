# \<News Vault\>
## Play around New York Times search api with React hooks and Typescript :D
---

![\<News Vault\>](/src/images/news-vault.gif "\<News Vault\>")

This is a tiny side project for practicing react hook and typscript, and is actually the first time using useReducer hook, I liked it a lot :P

The app is pretty simple, When you open it the first time, it will show the latest (it's actually last day's) news from New York Times API.

Then you can refresh the news by pressing "More on this day..." button to randomly fetch another news, if you wanna browsing news from different day, you can use the date input right beside refresh button, by pick up a date from the calendar, this app will navigate you back in time!

New York Times claim they have tons of news way back to about a hundred years ago, but i only set the earliest date to 2000/01/01, since it's not cool if there's no image as background. and I think the multimedia field is only sihpped with content from 2010ish... so...

The NYT API comes with some limitation, so the app may stop working some time, you will see the status shows under loading animation.

LCTOAN.
