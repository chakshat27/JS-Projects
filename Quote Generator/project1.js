let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes =[{
   // quote: `"Bhen ki Lodhi ,Raand ,Randvi ,bsdki ,chudakar kardu , chal teri maa ki choot bkl"`,
   // person: `Amir Khan`
},  {

quote : `" The greatest glory in living lies not in never falling, but in rising every time we fall "`,
person: `-- Nelson Mandela `

} , {

    quote : `" The best way to predict the future is to create it "`,
    person: ` -- Peter Drucker `

} , {

    quote : `" Success is not final, failure is not fatal: It is the courage to continue that counts. "`,
    person: `--  Winston Churchill  `

} , {


    quote : `" It does not matter how slowly you go as long as you do not stop. "`,
    person: `-- Confucius `

} , {


    quote : `" It does not matter how slowly you go as long as you do not stop. "`,
    person: `-- Steve Jobs `

} , {


    quote : `" The only limit to our realization of tomorrow will be our doubts of today. "`,
    person: `-- Franklin D Roosevelt `


}
]


btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})