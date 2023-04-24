const Quote = require('../models/quoteModel');
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/quotes');
    console.log('Connected to mongo quotes db');
  } catch (error) {
    console.error(error);
  }
}

connect();

const quotes = [
  {
    id: 1,
    text: 'Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.',
    author: 'Lord Krishna',
  },
  {
    id: 2,
    text: 'As they approach me, so I receive them. All paths, Arjuna, lead to me.',
    author: 'Lord Krishna',
  },
  {
    id: 3,
    text: 'I am the beginning, middle, and end of creation.',
    author: 'Lord Krishna',
  },
  {
    id: 4,
    text: 'Among animals I am the lion; among birds, the eagle Garuda. I am Prahlada, born among the demons, and of all that measures, I am time.',
    author: 'Lord Krishna',
  },
  {
    id: 5,
    text: 'I am death, which overcomes all, and the source of all beings still to be born.',
    author: 'Lord Krishna',
  },
  {
    id: 6,
    text: 'Just remember that I am, and that I support the entire cosmos with only a fragment of my being.',
    author: 'Lord Krishna',
  },
  {
    id: 7,
    text: 'Behold, Arjuna, a million divine forms, with an infinite variety of color and shape. Behold the gods of the natural world, and many more wonders never revealed before. Behold the entire cosmos turning within my body, and the other things you desire to see.',
    author: 'Lord Krishna',
  },
  {
    id: 8,
    text: 'I am time, the destroyer of all; I have come to consume the world.',
    author: 'Lord Krishna',
  },
  {
    id: 9,
    text: 'That one is dear to me who runs not after the pleasant or away from the painful, grieves not, lusts not, but lets things come and go as they happen.',
    author: 'Lord Krishna',
  },
  {
    id: 10,
    text: 'Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man or woman, who sees the Lord everywhere.',
    author: 'Lord Krishna',
  },
  {
    id: 11,
    text: 'They alone see truly who see the Lord the same in every creature, who see the deathless in the hearts of all that die. Seeing the same Lord everywhere, they do not harm themselves or others. Thus they attain the supreme goal.',
    author: 'Lord Krishna',
  },
  {
    id: 12,
    text: 'With a drop of my energy I enter the earth and support all creatures. Through the moon, the vessel of life-giving fluid, I nourish all plants. I enter breathing creatures and dwell within as the life-giving breath. I am the fire in the stomach which digests all food.',
    author: 'Lord Krishna',
  },
  {
    id: 13,
    text: 'There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.',
    author: 'Lord Krishna',
  },
  {
    id: 14,
    text: 'Pleasure from the senses seems like nectar at first, but it is bitter as poison in the end.',
    author: 'Lord Krishna',
  },
  {
    id: 15,
    text: 'That which seems like poison at first, but tastes like nectar in the end - this is the joy of sattva, born of a mind at peace with itself.',
    author: 'Lord Krishna',
  },
  {
    id: 16,
    text: 'The Lord dwells in the hearts of all creatures and whirls them round upon the wheel of maya. Run to him for refuge with all your strength, and peace profound will be yours through his grace.',
    author: 'Lord Krishna',
  },
  {
    id: 17,
    text: 'Whatever you do, make it an offering to me - the food you eat, the sacrifices you make, the help you give, even your suffering.',
    author: 'Lord Krishna',
  },
  {
    id: 18,
    text: 'I am heat; I give and withhold the rain. I am immortality and I am death; I am what is and what is not.',
    author: 'Lord Krishna',
  },
  {
    id: 19,
    text: 'Those who worship other gods with faith and devotion also worship me, Arjuna, even if they do not observe the usual forms. I am the object of all worship, its enjoyer and Lord.',
    author: 'Lord Krishna',
  },
  {
    id: 20,
    text: 'Those who remember me at the time of death will come to me. Do not doubt this. Whatever occupies the mind at the time of death determines the destination of the dying; always they will tend toward that state of being.',
    author: 'Lord Krishna',
  },
  {
    id: 21,
    text: 'When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.',
    author: 'Lord Krishna',
  },
  {
    id: 22,
    text: 'They are forever free who renounce all selfish desires and break away from the egocage of "I", "me", and "mine" to be united with the Lord. This is the supreme state. Attain to this, and pass from death to immortality.',
    author: 'Lord Krishna',
  },
  {
    id: 23,
    text: 'They live in wisdom who see themselves in all and all in them, who have renounced every selfish desire and sense-craving tormenting the heart.',
    author: 'Lord Krishna',
  },
  {
    id: 24,
    text: 'The meaning of Karma is in the intention. The intention behind action is what matters. Those who are motivated only by desire for the fruits of action are miserable, for they are constantly anxious about the results of what they do.',
    author: 'Lord Krishna',
  },
  {
    id: 25,
    text: 'You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.',
    author: 'Lord Krishna',
  },
  {
    id: 26,
    text: 'Perform work in this world, Arjuna, as a man established within himself - without selfish attachments, and alike in success and defeat. For yoga is perfect evenness of mind.',
    author: 'Lord Krishna',
  },
  {
    id: 27,
    text: 'At the beginning of time I declared two paths for the pure heart: jnana yoga, the contemplative path of spiritual wisdom, and karma yoga, the active path of selfless service. There are the fundamental different types of yoga.',
    author: 'Lord Krishna',
  },
  {
    id: 28,
    text: 'Do your work with the welfare of others always in mind. It was by such work that Janaka attained perfection; others too have followed this path.',
    author: 'Lord Krishna',
  },
  {
    id: 29,
    text: 'There is nothing in the three worlds for me to gain, Arjuna, nor is there anything I do not have; I continue to act, but I am not driven by any need of my own.',
    author: 'Lord Krishna',
  },
  {
    id: 30,
    text: 'The ignorant work for their own profit, Arjuna; the wise work for the welfare of the world, without thought for themselves.',
    author: 'Lord Krishna',
  },
  {
    id: 31,
    text: "It is better to strive in one's own dharma than to succeed in the dharma of another. Nothing is ever lost in following one's own dharma, but competition in another's dharma breeds fear and insecurity.",
    author: 'Lord Krishna',
  },
  {
    id: 32,
    text: 'The senses are higher than the body, the mind higher than the senses; above the mind is the intellect, and above the intellect is the Atman. Thus, knowing that which is supreme, let the Atman rule the ego. Use your mighty arms to slay the fierce enemy that is selfish desire.',
    author: 'Lord Krishna',
  },
  {
    id: 33,
    text: 'You and I have passed through many births, Arjuna. You have forgotten, but I remember them all.',
    author: 'Lord Krishna',
  },
  {
    id: 34,
    text: 'My true being is unborn and changeless. I am the Lord who dwells in every creature. Through the power of my own maya, I manifest myself in a finite form.',
    author: 'Lord Krishna',
  },
  {
    id: 35,
    text: 'Those who know me as their own divine Self break through the belief that they are the body and are not reborn as separate creatures. Such a one, Arjuna, is united with me.',
    author: 'Lord Krishna',
  },
  {
    id: 36,
    text: 'Delivered from selfish attachment, fear, and anger, filled with me, surrendering themselves to me, purified in the fire of my being, many have reached the state of unity in me.',
    author: 'Lord Krishna',
  },
  {
    id: 37,
    text: 'Actions do not cling to me because I am not attached to their results. Those who understand this and practice it live in freedom.',
    author: 'Lord Krishna',
  },
  {
    id: 38,
    text: 'The wise see that there is action in the midst of inaction and inaction in the midst of action. Their consciousness is unified, and every act is done with complete awareness.',
  },
  {
    id: 39,
    text: 'The process of offering is Brahman; that which is offered is Brahman. Brahman offers the sacrifice in the fire of Brahman. Brahman is attained by those who see Brahman in every action.',
  },
  {
    id: 40,
    text: 'The offering of wisdom is better than any material offering, Arjuna; for the goal of all work is spiritual wisdom.',
  },
  {
    id: 41,
    text: 'Approach those who have realized the purpose of life and question them with reverence and devotion; they will instruct you in this wisdom.',
  },
  {
    id: 42,
    text: 'Even if you were the most sinful of sinners, Arjuna, you could cross beyond all sin by the raft of spiritual wisdom.',
  },
  {
    id: 43,
    text: 'Krishna delivers the Gita to Arjuna.',
  },
  {
    id: 44,
    text: 'As the heat of a fire reduces wood to ashes, the fire of knowledge burns to ashes all karma.',
  },
  {
    id: 45,
    text: 'Those who surrender to Brahman all selfish attachments are like the leaf of a lotus floating clean and dry in water. Sin cannot touch them.',
  },
  {
    id: 46,
    text: 'Those who renounce attachment in all their deeds live content in the "city of nine gates", the body, as its master. They are not driven to act, nor do they involve others in action.',
  },
  {
    id: 47,
    text: 'Those who possess this wisdom have equal regard for all. They see the same Self in a spiritual aspirant and an outcaste, in an elephant, a cow, and a dog.',
  },
  {
    id: 48,
    text: 'Pleasures conceived in the world of the senses have a beginning and an end and give birth to misery, Arjuna. The wise do not look for happiness in them. But those who overcome the impulses of lust and anger which arise in the body are made whole and live in joy. They find their joy, their rest, and their light completely within themselves. United with the Lord, they attain nirvana in Brahman.',
  },
  {
    id: 49,
    text: 'Free from anger and selfish desire, unified in mind, those who follow the path of yoga and realize the Self are established forever in that supreme state.',
  },
  {
    id: 50,
    text: 'Knowing me as the friend of all creatures, the Lord of the universe, the end of all offerings and all spiritual disciplines, they attain eternal peace.',
  },
  {
    id: 51,
    text: 'It is not those who lack energy or refrain from action, but those who work without expectation of reward who attain the goal of meditation.',
  },
  {
    id: 52,
    text: 'Those who cannot renounce attachment to the results of their work are far from the path.',
  },
  {
    id: 53,
    text: 'Reshape yourself through the power of your will; never let yourself be degraded by self-will. The will is the only friend of the Self, and the will is the only enemy of the Self.',
  },
  {
    id: 54,
    text: 'To those who have conquered themselves, the will is a friend. But it is the enemy of those who have not found the Self within them.',
  },
  {
    id: 55,
    text: 'The supreme Reality stands revealed in the consciousness of those who have conquered themselves. They live in peace, alike in cold and heat, pleasure and pain, praise and blame.',
  },
  {
    id: 56,
    text: 'With all fears dissolved in the peace of the Self and all actions dedicated to Brahman, controlling the mind and fixing it on me, sit in meditation with me as your only goal.',
  },
  {
    id: 57,
    text: 'Arjuna, those who eat too much or eat too little, who sleep too much or sleep too little, will not succeed in meditation. But those who are temperate in eating and sleeping, work and recreation, will come to the end of sorrow through meditation.',
  },
  {
    id: 58,
    text: 'In the still mind, in the depths of meditation, the Self reveals itself. Beholding the Self by means of the Self, an aspirant knows the joy and peace of complete fulfillment.',
  },
  {
    id: 59,
    text: 'Wherever the mind wanders, restless and diffuse in its search for satisfaction without, lead it within; train it to rest in the Self.',
  },
  {
    id: 60,
    text: 'I am ever present to those who have realized me in every creature. Seeing all life as my manifestation, they are never separated from me.',
  },
  {
    id: 61,
    text: 'When a person responds to the joys and sorrows of others as if they were his own, he has attained the highest state of spiritual union.',
  },
  {
    id: 62,
    text: 'No one who does good work will ever come to a bad end, either here or in the world to come.',
  },
  {
    id: 63,
    text: 'Through constant effort over many lifetimes, a person becomes purified of all selfish desires and attains the supreme goal of life.',
  },
  {
    id: 64,
    text: 'Meditation is superior to severe asceticism and the path of knowledge. It is also superior to selfless service. May you attain the goal of meditation, Arjuna!',
  },
  {
    id: 65,
    text: 'Even among those who meditate, that man or woman who worships me with perfect faith, completely absorbed in me, is the most firmly established in yoga.',
  },
  {
    id: 66,
    text: 'With your mind intent on me, Arjuna, discipline yourself with the practice of yoga. Depend on me completely. Listen, and I will dispel all your doubts; you will come to know me fully and be united with me.',
  },
  {
    id: 67,
    text: 'The birth and dissolution of the cosmos itself take place in me. There is nothing that exists separate from me, Arjuna. The entire universe is suspended from me as my necklace of jewels.',
  },
  {
    id: 68,
    text: 'Arjuna, I am the taste of pure water and the radiance of the sun and moon. I am the sacred word and the sound heard in air, and the courage of human beings. I am the sweet fragrance in the earth and the radiance of fire; I am the life in every creature and the striving of the spiritual aspirant.',
  },
  {
    id: 69,
    text: 'My eternal seed, Arjuna, is to be found in every creature. I am the power of discrimination in those who are intelligent, and the glory of the noble. In those who are strong, I am strength, free from passion and selfish attachment. I am desire itself, if that desire is in harmony with the purpose of life.',
  },
  {
    id: 70,
    text: 'The states of sattva, rajas, and tamas come from me, but I am not in them.',
  },
  {
    id: 71,
    text: 'The three gunas make up my divine maya, difficult to overcome. But they cross over this maya who take refuge in me.',
  },
  {
    id: 72,
    text: "Some come to the spiritual life because of suffering, some in order to understand life; some come through a desire to achieve life's purpose, and some come who are men and women of wisdom. Unwavering in devotion, always united with me, the man or woman of wisdom surpasses all the others.",
  },
  {
    id: 73,
    text: 'After many births the wise seek refuge in me, seeing me everywhere and in everything. Such great souls are very rare.',
  },
  {
    id: 74,
    text: 'The world, deluded, does not know that I am without birth and changeless. I know everything about the past, the present, and the future, Arjuna; but there is no one who knows me completely.',
  },
  {
    id: 75,
    text: 'Delusion arises from the duality of attraction and aversion, Arjuna; every creature is deluded by these from birth.',
  },
  {
    id: 76,
    text: 'Those who see me ruling the cosmos, who see me in the adhibhuta, the adhidaiva, and the adhiyajna, are conscious of me even at the time of death.',
  },
  {
    id: 77,
    text: 'The Lord is the supreme poet, the first cause, the sovereign ruler, subtler than the tiniest particle, the support of all, inconceivable, bright as the sun, beyond darkness.',
  },
  {
    id: 78,
    text: 'Remembering me at the time of death, close down the doors of the senses and place the mind in the heart. Then, while absorbed in meditation, focus all energy upwards to the head. Repeating in this state the divine name, the syllable Om that represents the changeless Brahman, you will go forth from the body and attain the supreme goal.',
  },
  {
    id: 79,
    text: 'I am easily attained by the person who always remembers me and is attached to nothing else. Such a person is a true yogi, Arjuna.',
  },
  {
    id: 80,
    text: 'Every creature in the universe is subject to rebirth, Arjuna, except the one who is united with me.',
  },
  {
    id: 81,
    text: 'The six months of the northern path of the sun, the path of light, of fire, of day, of the bright fortnight, leads knowers of Brahman to the supreme goal. The six months of the southern path of the sun, the path of smoke, of night, of the dark fortnight, leads other souls to the light of the moon and to rebirth.',
  },
  {
    id: 82,
    text: 'Under my watchful eye the laws of nature take their course. Thus is the world set in motion; thus the animate and the inanimate are created.',
  },
  {
    id: 83,
    text: 'I am the ritual and the sacrifice; I am true medicine and the mantram. I am the offering and the fire which consumes it, and the one to whom it is offered.',
  },
  {
    id: 84,
    text: 'I am the father and mother of this universe, and its grandfather too; I am its entire support. I am the sum of all knowledge, the purifier, the syllable Om; I am the sacred scriptures, the Rig, Yajur, and Sama Vedas.',
  },
  {
    id: 85,
    text: 'I am the goal of life, the Lord and support of all, the inner witness, the abode of all. I am the only refuge, the one true friend; I am the beginning, the staying, and the end of creation; I am the womb and the eternal seed.',
  },
  {
    id: 86,
    text: 'Those who follow the rituals given in the Vedas, who offer sacrifices and take soma, free themselves from evil and attain the vast heaven of the gods, where they enjoy celestial pleasures. When they have enjoyed these fully, their merit is exhausted and they return to this land of death. Thus observing Vedic rituals but caught in an endless chain of desires, they come and go.',
  },
  {
    id: 87,
    text: 'Those who worship me and meditate on me constantly, without any other thought - I will provide for all their needs.',
  },
  {
    id: 88,
    text: 'Those who worship the devas will go to the realm of the devas; those who worship their ancestors will be united with them after death. Those who worship phantoms will become phantoms; but my devotees will come to me. Those who worship the devas will go to the realm of the devas; those who worship their ancestors will be united with them after death. Those who worship phantoms will become phantoms; but my devotees will come to me.',
  },
  {
    id: 89,
    text: 'Fill your mind with me; love me; serve me; worship me always. Seeking me in your heart, you will at last be united with me.',
  },
  {
    id: 90,
    text: 'All the scriptures lead to me; I am their author and their wisdom.',
  },
  {
    id: 91,
    text: 'Bhishma, Drona, Jayadratha, Karna, and many others are already slain. Kill those whom I have killed. Do not hesitate. Fight in this battle and you will conquer your enemies.',
  },
  {
    id: 92,
    text: 'Not by knowledge of the Vedas, nor sacrifice, nor charity, nor rituals, nor even by severe asceticism has any other mortal seen what you have seen, O heroic Arjuna.',
  },
  {
    id: 93,
    text: 'Better indeed is knowledge than mechanical practice. Better than knowledge is meditation. But better still is surrender of attachment to results, because there follows immediate peace.',
  },
  {
    id: 94,
    text: 'Some realize the Self within them through the practice of meditation, some by the path of wisdom, and others by selfless service. Others may not know these paths; but hearing and following the instructions of an illumined teacher, they too go beyond death.',
  },
  {
    id: 95,
    text: 'The brightness of the sun, which lights up the world, the brightness of the moon and of fire - these are my glory.',
  },
  {
    id: 96,
    text: 'Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.',
  },
  {
    id: 97,
    text: 'To refrain from selfish acts is one kind of renunciation, called sannyasa; to renounce the fruit of action is another, called tyaga.',
  },
  {
    id: 98,
    text: 'By serving me with steadfast love, a man or woman goes beyond the gunas. Such a one is fit for union with Brahman.',
  },
  {
    id: 99,
    text: 'When they see the variety of creation rooted in that unity and growing out of it, they attain fulfillment in Brahman.',
  },
  {
    id: 100,
    text: ' I have shared this profound truth with you, Arjuna. Those who understand it will attain wisdom; they will have done that which has to be done.',
  },
];

// Insert all the quotes into the database
// Quote.insertMany(quotes, (err, docs) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`${docs.length} quotes were successfully inserted.`);
//   }
//   mongoose.connection.close();
// });

// Export a function that inserts all the quotes into the database
module.exports = async function insertQuotes() {
  try {
    const result = await Quote.insertMany(quotes);
    console.log(`${result.length} quotes were successfully inserted.`);
  } catch (error) {
    console.error(error);
  }
};
