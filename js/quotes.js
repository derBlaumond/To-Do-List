const quotes = [
  {
    quote: "The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.",
    author: "John C. Maxwell"
  }, {
    quote:"Life is not a problem to be solved, but a reality to be experienced." ,
    author:"Soren Kierkegaard"
  }, {
    quote:"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
    author:"Wayne Dyer"
  }, {
    quote:"Life is ten percent what happens to you and ninety percent how you respond to it.",
    author:"Lou Holtz"
  }, {
    quote:"Believe that life is worth living and your belief will help create the fact.",
    author:"William James"
  }, {
    quote:"The only disability in life is a bad attitude.",
    author:"Scott Hamilton"
  }, {
    quote:"Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
    author:"Leo Buscaglia"
  }, {
    quote:"Life isn't about finding yourself. Life is about creating yourself.",
    author:"George Bernard Shaw"
  }, {
    quote:"Life is really simple, but we insist on making it complicated.",
    author:"Confucius"
  }, {
    quote:"Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
    author:"Dalai Lama"
  }, {
    quote:"There are three constants in life...change, choice and principles.",
    author:"Stephen Covey"
  }, {
    quote:"Life is a series of natural and spontaneous changes. Don't resist them--that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
    author:"Lao Tzu"
  }, {
    quote:"Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author:"John F. Kennedy"
  }, {
    quote:"Only a life lived for others is a life worthwhile.",
    author:"Albert Einstein"
  }, {
    quote:"When life is too easy for us, we must beware or we may not be ready to meet the blows which sooner or later come to everyone, rich or poor.",
    author:"Eleanor Roosevelt"
  }, {
    quote:"God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    author:"Voltaire"
  }, {
    quote:"We make a living by what we get, but we make a life by what we give.",
    author:"Winston Churchill"
  }, {
    quote:"All life is an experiment. The more experiments you make the better.",
    author:"Ralph Waldo Emerson"
  }, {
    quote:"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    author:"Maya Angelou"
  }, {
    quote:"The ultimate value of life depends upon awareness and the power of contemplation rather than upon mere survival.",
    author:"Aristotle"
  }, {
    quote:"Life is a daring adventure or nothing at all.",
    author:"Helen Keller"
  }, {
    quote:"We have always held to the hope, the belief, the conviction that there is a better life, a better world, beyond the horizon.",
    author:"Franklin D. Roosevelt"
  }, {
    quote:"Today is life--the only life you are sure of. Make the most of today. Get interested in something. Shake yourself awake. Develop a hobby. Let the winds of enthusiasm sweep through you. Live today with gusto.",
    author:"Dale Carnegie"
  }, {
    quote:"Once you say you're going to settle for second, that's what happens to you in life.",
    author:"John F. Kennedy"
  }, {
    quote: "Literature adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides; and in this respect, it irrigates the deserts that our lives have already become.",
    author:"C. S. Lewis"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;