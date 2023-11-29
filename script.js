// Variables
 let btn = document.querySelector('#new-quote');
 let quote =document.querySelector('.quote');
 let person =document.querySelector('.person')

 const quotes =[
    {quote: '"Life is short, but if lived with purpose, it is long enough."',person:'Ralph Waldo Emerson'},
    {quote: '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful"',person:' Albert Schweitzer'},
    {quote: '"The secret of getting ahead is getting started."',person:' Mark Twain'},
    {quote: '"The only thing standing between you and your dream is the will to try and the belief that it is actually possible"',person:' Joel Brown'},
    {quote: '"Your time is limited, do not waste it living someone elses life"',person:'Steve Job'},
    {quote: '""If you wish to excel in knowledge, master its foundations. And if you wish to convince yourself of that, then rectify your character."',person:'Al-Imam  Al-Shafi'},
    {quote: '"Knowledge is a lost treasure unless it is secured"',person:'Al-Imam  Al-Shafi'},
    {quote: '" What matters in life is not to be among the great, but to be great in your field."',person:' Mohammed bin Rashid Al Maktoum'},
    {quote: '" Tomorrow will not be better if you dont work to improve it today."',person:'Abdullah Al Qassimi'},
    {quote: '"He who is patient, God increases his determination ."',person:'Al-Imam  Al-Shafi'},
    {quote: '"The tall tree attracts more wind "',person:'Quddus'},
    {quote: '" Optimism is a positive energy that makes the impossible possible."',person:'Ghayth Abdul Ghani'},
    {quote: '" The best way to predict the future is to create it."',person:'Abraham Lincoln'},
    {quote: '"I cannot change the direction of the wind, but I can adjust my sails to always reach my destination "',person:' Jimmy Dean'},
    {quote: '"A noble person embodies what is good in humanity and avoids what is bad. "',person:'Yuel Fel'},
    {quote: '" In the middle of difficulty lies opportunity."',person:'Albert Einstein'},
    {quote: '" If you want to lift yourself up, lift up someone else."',person:'Booker T. Washington'},
    {quote: '"Work in silence, and let your success scream "',person:'Quddus'},
    {quote: '" It is not enough for a person to claim belief in Allah while their heart inclines towards desires"',person:'Al-Imam  Al-Shafi'},
    {quote: '"Dont be pushed around by the fears in your mind. Be led by the dreams in your heart "',person:'Roy T. Bennet'},
 ]

 btn.addEventListener('click',function () {
    let randomQuotes=Math.floor(Math.random() * quotes.length)

quote.innerText =quotes[randomQuotes].quote;
person.innerText =quotes[randomQuotes].person;
 })