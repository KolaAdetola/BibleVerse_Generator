const backgrounds = document.getElementById("#background")
let btn = document.getElementById('#newquote');
let bibleChapter = document.getElementById('#chapter');
let verse = document.getElementById('#bibleverse');


const quotes = [
    {
        bibleChapter: "1 Corinthians 13:4-7",
        verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
    },
    {
        bibleChapter: "2 Timothy 1:7",
        verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline."
    },
    {
        bibleChapter: "John 3:16",
        verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    },
    {
        bibleChapter: "Philippians 4:13",
        verse: "I can do all things through Christ who strengthens me.",
    },
    {
        bibleChapter: "Romans 8:28",
        verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
    },
    {
        bibleChapter: "Proverbs 3:5-6",
        verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
    },
    {
        bibleChapter: "Psalm 23:1",
        verse: "The Lord is my shepherd; I shall not want."
    },
    {
        bibleChapter: "Isaiah 40:31",
        verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    },
    {
        bibleChapter: "Matthew 6:33",
        verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
    },
    {
        bibleChapter: "Hebrews 11:1",
        verse: "Now faith is confidence in what we hope for and assurance about what we do not see."
    },
    {
        bibleChapter: "2 Timothy 1:7",
        verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    },
    {
        bibleChapter: "James 1:2-4",
        verse: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    },
    {
        bibleChapter: "Romans 12:2",
        verse: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.",
    },
    {
        bibleChapter: "Ephesians 2:8-9",
        verse: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."
    },
    {
        bibleChapter: "Joshua 1:9",
        verse: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
    },
    {
        bibleChapter: "Isaiah 41:10",
        verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
    },
    {
        bibleChapter: "1 Peter 5:7",
        verse: "Cast all your anxiety on him because he cares for you."
    },
    {
        bibleChapter: "Psalm 119:105",
        verse: "Your word is a lamp for my feet, a light on my path."
    },
    {
        bibleChapter: "2 Corinthians 5:7",
        verse: "For we live by faith, not by sight."
    },
    {
        bibleChapter: "Matthew 11:28-30",
        verse: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."
    },
    {
        bibleChapter: "Galatians 5:22-23",
        verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
    }
]

let newbackground = [
    {
        img: "url(assets/14490.jpg)"
    },
    {
       img: "url(assets/826953.jpg)"
    },
    {
        img: "url(assets/999948.jpg)"
    },
    {
        img: "url(assets/5477484.jpg)"
    },
    {
       img: "url(assets/10868592.jpg)"
    },
    {
        img: "url(assets/10868596.jpg)"
    },
    {
        img: "url(assets/10868598.jpg)"
    },
    {
        img: "url(assets/10868599.jpg)"
    },
    {
        img: "url(assets/10868601.jpg)"
    },
    {
        img: "url(assets/10868606.jpg)"
    },
    {
        img: "url(assets/10868617.jpg)"
    },
    {
        img: "url(assets/10868621.jpg)"
    },
    {
        img: "url(assets/10868672.jpg)"
    },
    {
        img: "url(assets/10868735.jpg)"
    },
    {
        img: "url(assets/10868764.png)"
    },
    {
        img: "url(assets/10880172.jpg)"
    },
    {
        img: "url(assets/10880383.jpg)"
    },

]

newquote.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    chapter.textContent = quotes[random].bibleChapter
    bibleverse.textContent = quotes[random].verse
    let randomBackground = Math.floor(Math.random() * newbackground.length);
    background.style.backgroundImage = newbackground[randomBackground].img
})
console.log(quotes.length)
console.log(newbackground.length)