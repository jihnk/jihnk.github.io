const quotes = [
    {
        quote: "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        movie: "Lion King",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        movie: "Aladdin.",
    },
    {
        quote: "Venture outside your comfort zone. The rewards are worth it.",
        movie: "Tangled",
    },
    {
        quote: "Sometimes the right path is not the easiest one.",
        movie: "Pocahontas",
    },
    {
        quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
        movie: "Mulan",
    },
    {
        quote: "The only way to get what you want in this world is through hard work.",
        movie: "The princess and the Frog"
    },
    {
        quote: "If watching is all you're gonna do, then you're gonna watch your life go by without ya.",
        movie: "Notre Dame"
    },
    {
        quote: "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming.",
        movie: "Finding Nemo"
    },
    {
        quote: " If you keep on believing the dream that you wish will come true.",
        movie: "Cinderella"
    },
    {
        quote: "Life is a journey to be experienced, not a problem to be solved.",
        movie: "Winnie the Pooh"
    },
]

const quote = document.querySelector("#quote div:first-child");
const movie = document.querySelector("#quote div:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todaysQuote.quote;
movie.innerText = `- movie ${todaysQuote.movie}`;
