/* =====================================================================
   NVS English Quest — Reading Library — LEVEL 3 PASSAGES  (Version 3D)
   ---------------------------------------------------------------------
   To add a passage, copy one passage block, paste it at the end of the list
   (before the final "]);"), and change its content.
   See HOW_TO_ADD_CONTENT.md for step-by-step instructions.

   FIELDS
   • id: unique, pattern r3-NN (e.g. r3-11). Never change an existing id.
   • level, title, category, topic: see the guide.
   • text: one string per paragraph.
   • before: "Before You Read" support. words: 3–5 words with a simple meaning
     (def) and an example (ex). If the word appears in a different form in the
     text (for example "skipped"), put that exact form in "match". These words
     are also highlighted in the passage so students can tap them.
     predict: one prediction question for thinking (not scored).
   • questions: in each "opts" list, the FIRST option is the correct answer.
     ev (evidence) must be copied exactly from the passage text.
   • status / revisionNote: review notes for teachers (not shown to students).
   ===================================================================== */
NVS_CONTENT.addReadingPassages([
  {
    id: "r3a",
    level: 3,
    title: "Why Bees Matter",
    category: "Science",
    topic: "Science",
    status: "retained",
    text: [
      "Many people are afraid of bees because they can sting. However, bees are some of the most important insects on Earth. Without them, our food would be very different.",
      "Bees help plants by carrying pollen from one flower to another. This process is called pollination. When a flower is pollinated, it can produce fruit and seeds. Apples, almonds, and watermelons all depend on pollination. In fact, scientists estimate that about one out of every three bites of food we eat comes from plants that need pollinators like bees.",
      "Sadly, the number of bees in many countries is declining. In some areas, there are far fewer bees than there were thirty years ago. One reason is the use of strong chemicals on farms. Another reason is the loss of wild flowers, which bees need for food.",
      "Fortunately, people can help. Families can plant flowers in their gardens or on their balconies. Farmers can use safer methods to protect their crops. Even small actions can make a big difference for these tiny workers."
    ],
    before: {
      words: [
        { word: "pollen", def: "A fine powder made by flowers.", ex: "Bees carry pollen from flower to flower." },
        { word: "pollination", def: "Moving pollen between flowers so plants can make fruit and seeds.", ex: "Many fruits need pollination." },
        { word: "insects", def: "Small animals with six legs, like bees and ants.", ex: "Many insects live in the garden." },
        { word: "chemicals", def: "Strong substances, sometimes used on farms to kill insects.", ex: "Some chemicals can harm bees." }
      ],
      predict: "What would happen to our food if there were no bees?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Bees are important for food and need our protection.", null],
          ["Bees are dangerous insects because they can sting people.", "The first sentence mentions stinging, but the next word “However” shows the writer disagrees with this fear."],
          ["Watermelons are the most popular fruit.", "Watermelons are only one example of food that needs pollination."],
          ["Farmers should stop growing apples.", "The passage never says this. It says farmers can use safer methods."]
        ],
        hint: "Think about all four paragraphs: why bees matter, the problem, and the solution.",
        exp: "The passage explains why bees are important (pollination and food), the problem (fewer bees), and how people can help.",
        ev: "However, bees are some of the most important insects on Earth."
      },
      {
        skill: "Context clues",
        q: "In paragraph 3, the word “declining” means…",
        opts: [
          ["becoming smaller in number", null],
          ["growing very quickly", "The next sentence says there are “far fewer bees”, which is the opposite of growing."],
          ["moving to big cities", "The passage does not talk about bees moving."],
          ["staying exactly the same over many years", "If the number stayed the same, there would not be “far fewer bees”."]
        ],
        hint: "Read the next sentence. It explains the word: “far fewer bees than … thirty years ago”.",
        exp: "“Declining” means becoming less or smaller. The context clue is the next sentence: there are far fewer bees than thirty years ago.",
        ev: "In some areas, there are far fewer bees than there were thirty years ago."
      },
      {
        skill: "Cause and effect",
        q: "According to the passage, what is ONE cause of the problem for bees?",
        opts: [
          ["The use of strong chemicals on farms", null],
          ["Too many wild flowers", "The passage says the LOSS of wild flowers is a problem, not too many."],
          ["People eating too many apples", "Apples are an example of food that needs bees, not a cause of the problem."],
          ["Families planting flowers on balconies", "Planting flowers is a solution in paragraph 4, not a cause."]
        ],
        hint: "Look for the words “One reason is” in paragraph 3.",
        exp: "Paragraph 3 gives two causes. One is the use of strong chemicals on farms. The other is the loss of wild flowers.",
        ev: "One reason is the use of strong chemicals on farms."
      },
      {
        skill: "Cause and effect",
        q: "What happens when a flower is pollinated?",
        opts: [
          ["It can produce fruit and seeds.", null],
          ["It loses its color and dies quickly.", "The passage does not say this. Pollination helps the plant."],
          ["It becomes dangerous to bees.", "Nothing in the passage says flowers become dangerous."],
          ["It turns into pollen.", "Pollen is carried between flowers. The flower does not turn into pollen."]
        ],
        hint: "Find the sentence that begins with “When a flower is pollinated”.",
        exp: "Pollination is the cause, and fruit and seeds are the effect: “When a flower is pollinated, it can produce fruit and seeds.”",
        ev: "When a flower is pollinated, it can produce fruit and seeds."
      },
      {
        skill: "Simple inference",
        q: "Why does the writer call bees “tiny workers” at the end?",
        opts: [
          ["Because bees are small but do useful work", null],
          ["Because farmers pay bees for their work on farms", "This is a comparison, not a fact. Bees are not really paid."],
          ["Because bees work in factories", "Bees work in nature, carrying pollen between flowers."],
          ["Because bees do not do much", "The whole passage shows that bees do a lot of important work."]
        ],
        hint: "Think about what bees DO in paragraph 2. Is it important work?",
        exp: "The writer did not say this directly, but we can infer it. Bees are small (“tiny”), and they do important work (“workers”) by pollinating the plants we eat.",
        ev: "Even small actions can make a big difference for these tiny workers."
      }
    ]
  },
  {
    id: "r3b",
    level: 3,
    title: "The Lost Wallet",
    category: "Society",
    topic: "Everyday decisions",
    status: "retained",
    text: [
      "On Thursday afternoon, Faisal and his friend Majed were walking home from school when Faisal noticed something brown on the sidewalk. He picked it up. It was a leather wallet with two hundred riyals inside and an ID card.",
      "“We should keep it,” Majed joked. “Nobody saw us.”",
      "Faisal shook his head. He looked at the ID card and saw the name and photo of an elderly man. “This man might need this money for medicine or food,” he said. “Imagine how worried he must feel right now.”",
      "The address on the card was only two streets away, so the boys walked there together. An old man opened the door. When he saw the wallet, his eyes filled with tears. He explained that he had searched for it all afternoon.",
      "The man thanked the boys many times and offered them a reward, but Faisal politely refused. On the way home, Majed was quiet for a long time. Finally, he said, “You did the right thing. Next time, I will too.”"
    ],
    before: {
      words: [
        { word: "wallet", def: "A small case for money and cards.", ex: "I keep my money in my wallet." },
        { word: "sidewalk", def: "The path for people to walk on beside a road.", ex: "We walked home on the sidewalk." },
        { word: "reward", def: "Something given to thank a person for good actions.", ex: "He refused the reward." },
        { word: "refuse", match: "refused", def: "To say no.", ex: "She refused to take the money." }
      ],
      predict: "What should you do if you find a wallet on the street?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "Which sentence best describes the main idea of the story?",
        opts: [
          ["A boy returns a wallet, and his honesty changes his friend.", null],
          ["Two boys find a wallet and use the money to buy food.", "The boys do not spend the money. They return it."],
          ["An old man loses his house and asks the two boys for help.", "The man lost his wallet, not his house."],
          ["Majed teaches Faisal how to be honest.", "It is the other way around. Faisal shows honesty, and Majed learns from him."]
        ],
        hint: "Think about the beginning (the wallet) and the end (what Majed says).",
        exp: "Faisal chooses to return the wallet. At the end, Majed says he will do the same next time, so Faisal’s honesty changed him.",
        ev: "You did the right thing. Next time, I will too."
      },
      {
        skill: "Context clues",
        q: "In paragraph 3, the word “elderly” means…",
        opts: [
          ["old", null],
          ["young", "Paragraph 4 describes the same person in a different way. Is he young?"],
          ["angry", "“Elderly” describes age, not feelings."],
          ["rich", "Faisal thinks the man may need the money, so the word is not about being rich."]
        ],
        hint: "Read paragraph 4. Who opens the door? The writer uses a different word for the same man.",
        exp: "“Elderly” means old. The context clue is in paragraph 4: “An old man opened the door.”",
        ev: "An old man opened the door."
      },
      {
        skill: "Cause and effect",
        q: "Why did the boys walk to the man’s house?",
        opts: [
          ["Because the address was close by", null],
          ["Because the man called them on the phone", "There is no phone call in the story."],
          ["Because Majed wanted a reward", "Majed wanted to keep the wallet at first. A reward was not the reason they walked there."],
          ["Because a police officer told them to go", "No police officer is in the story."]
        ],
        hint: "Look for the word “so” in paragraph 4. It shows a cause and an effect.",
        exp: "The cause is that the address was only two streets away. The effect (“so”) is that the boys walked there together.",
        ev: "The address on the card was only two streets away, so the boys walked there together."
      },
      {
        skill: "Simple inference",
        q: "How did the old man most likely feel when he saw his wallet?",
        opts: [
          ["Relieved and thankful", null],
          ["Angry and upset", "He thanked the boys many times. Angry people do not usually do this."],
          ["Bored", "His eyes filled with tears, which shows strong feelings, not boredom."],
          ["Confused and a little afraid", "He understood what happened and thanked the boys, so he was not confused."]
        ],
        hint: "His eyes filled with tears and he thanked the boys many times. Were these happy or sad tears?",
        exp: "The story does not name his feeling, but the clues show it: he had searched all afternoon, his eyes filled with tears, and he thanked the boys many times. He felt relieved and thankful.",
        ev: "When he saw the wallet, his eyes filled with tears."
      },
      {
        skill: "Simple inference",
        q: "What can we infer about Majed at the end of the story?",
        opts: [
          ["He has changed his mind about keeping lost things.", null],
          ["He is angry with Faisal for refusing the money and reward.", "Majed says Faisal “did the right thing”, so he is not angry."],
          ["He still wants to keep the money.", "He says, “Next time, I will too.” This shows he will return things."],
          ["He did not understand what happened.", "He clearly understood, because he said Faisal did the right thing."]
        ],
        hint: "Compare what Majed says in paragraph 2 with what he says at the very end.",
        exp: "At first, Majed wanted to keep the wallet. At the end, he says he will do the right thing next time, so he changed his mind.",
        ev: "You did the right thing. Next time, I will too."
      }
    ]
  },
  {
    id: "r3-03",
    level: 3,
    title: "The Power of Small Habits",
    category: "Personal Development",
    topic: "Personal development",
    status: "retained",
    text: [
      "Many people try to change their lives with one huge decision. They promise to study for four hours every day or exercise for two hours, but after a week, they usually give up. The goal was simply too big.",
      "A better strategy is to start with a tiny habit. For example, instead of promising to read a whole book, a student can read two pages every night after brushing her teeth. Because the habit is small, it is easy to repeat. Connecting it to something she already does also helps her remember.",
      "Over time, small habits grow. Two pages become five, and five become a chapter. More importantly, the student starts to see herself as a reader. This change in identity is powerful. When people believe they are the kind of person who reads, exercises, or studies, they are more likely to continue.",
      "So, if you want to improve, do not wait for a big moment of motivation. Choose one small action and repeat it today."
    ],
    before: {
      words: [
        { word: "strategy", def: "A plan to reach a goal.", ex: "My strategy is to study a little every day." },
        { word: "repeat", def: "To do something again.", ex: "Repeat the new words every night." },
        { word: "habit", def: "Something you do often, usually without thinking.", ex: "Reading before bed is a good habit." },
        { word: "motivation", def: "The feeling that makes you want to do something.", ex: "Good grades give me motivation." }
      ],
      predict: "Why do people often stop following big plans after one week?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Small habits are a better way to make lasting changes.", null],
          ["Reading two pages a night is enough to finish many books.", "This is an example, not the main idea of the whole passage."],
          ["People should exercise for two hours every day.", "The writer uses this as an example of a goal that is too big."],
          ["Motivation is the most important part of success.", "The writer says NOT to wait for motivation."]
        ],
        hint: "Compare paragraph 1 with paragraph 2. Which approach does the writer prefer?",
        exp: "The writer explains why big goals often fail and argues that small, repeated habits lead to lasting change.",
        ev: "A better strategy is to start with a tiny habit."
      },
      {
        skill: "Cause and effect",
        q: "According to the writer, why do people often give up on big promises?",
        opts: [
          ["The goal is too big.", null],
          ["They do not have enough books.", "Books are only part of an example."],
          ["Their friends do not help them.", "Friends are not mentioned."],
          ["They choose habits that are too easy.", "The writer says easy, small habits are the BETTER choice."]
        ],
        hint: "Read the last sentence of paragraph 1.",
        exp: "The writer says people give up after a week because “the goal was simply too big.”",
        ev: "The goal was simply too big."
      },
      {
        skill: "Supporting details",
        q: "Why does the writer suggest reading right after brushing your teeth?",
        opts: [
          ["Linking it to an existing habit helps you remember it.", null],
          ["Brushing your teeth first makes it easier to read well.", "Brushing teeth does not change reading ability. The timing is the point."],
          ["Bathrooms are quiet places to read.", "The writer does not say where to read."],
          ["Parents can check that you are reading.", "Parents are not mentioned."]
        ],
        hint: "Read the last sentence of paragraph 2.",
        exp: "The writer explains that connecting a new habit to something you already do helps you remember it.",
        ev: "Connecting it to something she already does also helps her remember."
      },
      {
        skill: "Context clues",
        q: "In paragraph 3, the word “identity” means…",
        opts: [
          ["how a person sees who they are", null],
          ["an ID card with your photo", "That is a different meaning of a related word. Here it is about how she sees herself."],
          ["a difficult book", "The word is not about a book."],
          ["a strong feeling of tiredness after reading", "Nothing in the paragraph describes tiredness."]
        ],
        hint: "Read the sentence just before “This change in identity”.",
        exp: "The clue is “the student starts to see herself as a reader.” Identity is how you see yourself.",
        ev: "the student starts to see herself as a reader"
      },
      {
        skill: "Inference",
        q: "What advice would the writer most likely give a student who wants to get fit?",
        opts: [
          ["Start with five minutes of exercise every day.", null],
          ["Join a two-hour training program right away.", "The writer warns that goals like this are usually too big."],
          ["Wait until you feel very motivated.", "The writer says not to wait for motivation."],
          ["Exercise only on free weekends when you have time.", "The writer stresses repeating a small action often."]
        ],
        hint: "Apply the writer’s idea about reading to exercise.",
        exp: "The writer’s main advice is to choose a tiny habit and repeat it. Five minutes of daily exercise follows this idea.",
        ev: "Choose one small action and repeat it today."
      },
      {
        skill: "Author’s purpose",
        q: "What is the purpose of the last paragraph?",
        opts: [
          ["To encourage readers to take one small action now", null],
          ["To explain the science of motivation", "The last paragraph gives advice, not scientific explanation."],
          ["To tell a story about a famous person who changed", "No famous person is mentioned."],
          ["To argue that change is impossible", "The writer believes change is possible with small habits."]
        ],
        hint: "Look at the verbs in the last paragraph: “do not wait”, “choose”, “repeat”.",
        exp: "The last paragraph speaks directly to the reader and urges them to start a small habit today.",
        ev: "So, if you want to improve, do not wait for a big moment of motivation."
      }
    ]
  },
  {
    id: "r3-04",
    level: 3,
    title: "The Student Who Started a Club",
    category: "School Life",
    topic: "Leadership",
    status: "revised",
    revisionNote: "Split two 27-word sentences.",
    text: [
      "Yara loved chess, but her school did not have a chess club. She asked the activities coordinator, Ms. Basma, about starting one. Ms. Basma said the school would need at least ten interested students and a teacher to supervise.",
      "Yara was shy, and the idea of talking to so many people made her nervous. Still, she wanted other girls to enjoy the game she loved. She designed a poster and spoke for two minutes during the morning assembly. She also set up a chessboard in the library at lunch so students could try playing.",
      "Within two weeks, fourteen students had signed up. Yara’s math teacher, Ms. Hind, agreed to supervise because she had played in tournaments at university.",
      "At the first meeting, Yara noticed that some beginners felt embarrassed when they lost quickly. She paired each beginner with an experienced player. By the end of the term, the club had twenty members and had organized its first school tournament."
    ],
    before: {
      words: [
        { word: "coordinator", def: "A person who organizes activities.", ex: "The activities coordinator plans school trips." },
        { word: "supervise", def: "To watch and help a group as the person in charge.", ex: "A teacher supervises the club." },
        { word: "assembly", def: "A meeting of all the students at school.", ex: "The principal spoke at the morning assembly." },
        { word: "embarrassed", def: "Feeling silly or uncomfortable in front of others.", ex: "I was embarrassed when I fell." }
      ],
      predict: "What would you need to start a new club at your school?"
    },
    questions: [
      {
        skill: "Problem and solution",
        q: "What problem did Yara face at the beginning?",
        opts: [
          ["She needed ten students and a teacher to start a club.", null],
          ["She did not know how to play chess.", "Yara loved chess and already knew how to play."],
          ["Ms. Basma refused to allow any new clubs at the school.", "Ms. Basma explained the requirements. She did not refuse."],
          ["The library did not have any chessboards.", "Yara set up a chessboard in the library, so this was not the problem."]
        ],
        hint: "Read paragraph 1. What did the school need?",
        exp: "There was no chess club, and Ms. Basma said Yara needed at least ten students and a teacher supervisor.",
        ev: "the school would need at least ten interested students and a teacher to supervise"
      },
      {
        skill: "Character motivation",
        q: "Why did Yara speak at the morning assembly even though she was shy?",
        opts: [
          ["She wanted other girls to enjoy chess too.", null],
          ["Ms. Basma forced her to speak.", "Nothing shows that Ms. Basma made her speak."],
          ["She wanted to win a prize.", "No prize is mentioned."],
          ["She wanted to become class president next year.", "Class elections are not mentioned."]
        ],
        hint: "Look for the word “Still” in paragraph 2. What made her act despite her nerves?",
        exp: "Even though she was nervous, Yara wanted other girls to enjoy the game she loved. This motivated her to speak.",
        ev: "Still, she wanted other girls to enjoy the game she loved."
      },
      {
        skill: "Cause and effect",
        q: "Why did Ms. Hind agree to supervise the club?",
        opts: [
          ["She had played in chess tournaments at university.", null],
          ["She was the activities coordinator for all school clubs.", "Ms. Basma was the coordinator, not Ms. Hind."],
          ["Yara was her best student in math.", "The passage does not give this reason."],
          ["She wanted to start her own club.", "This is not mentioned."]
        ],
        hint: "Look for the word “because” in paragraph 3.",
        exp: "Ms. Hind agreed because she had played in tournaments at university.",
        ev: "Yara’s math teacher, Ms. Hind, agreed to supervise because she had played in tournaments at university."
      },
      {
        skill: "Problem and solution",
        q: "How did Yara help beginners who felt embarrassed when they lost?",
        opts: [
          ["She paired each beginner with an experienced player.", null],
          ["She told beginners to practice at home first.", "This is not what she did."],
          ["She stopped beginners from playing in the tournament.", "The passage does not say this."],
          ["She asked Ms. Hind to teach them separately.", "Yara found her own solution."]
        ],
        hint: "Read the last paragraph.",
        exp: "Yara paired each beginner with an experienced player so they could learn with support.",
        ev: "She paired each beginner with an experienced player."
      },
      {
        skill: "Inference",
        q: "Why did Yara most likely set up a chessboard in the library at lunch?",
        opts: [
          ["To let students try chess before deciding to join", null],
          ["Because the library was the only room with tables", "The passage does not say this, and it ignores the words “so students could try”."],
          ["To practice alone without other students", "She wanted others to play, not to play alone."],
          ["Because Ms. Basma asked her to work in the library", "No one asked her to do this."]
        ],
        hint: "Look at the words after “so” in that sentence.",
        exp: "The sentence says she did it “so students could try playing.” We can infer she wanted to attract new members by letting them try the game first.",
        ev: "set up a chessboard in the library at lunch so students could try playing"
      },
      {
        skill: "Main idea",
        q: "Which sentence best states the main idea of the passage?",
        opts: [
          ["A shy student overcomes her nerves to start a club.", null],
          ["Chess is the most popular game at the school.", "The club grew, but the passage does not compare it to other games."],
          ["Teachers should always supervise school clubs.", "Supervision is one requirement, not the main idea."],
          ["Beginners should not play against experienced players.", "Yara does the opposite: she pairs them together."]
        ],
        hint: "Think about how Yara changed and what she achieved.",
        exp: "The passage follows Yara from a shy student with an idea to the leader of a twenty-member club.",
        ev: "By the end of the term, the club had twenty members and had organized its first school tournament."
      }
    ]
  },
  {
    id: "r3-05",
    level: 3,
    title: "Can Technology Help Us Learn?",
    category: "Technology",
    topic: "Educational technology",
    status: "retained",
    text: [
      "Today, many classrooms use tablets, laptops, and learning apps. Some people believe technology makes learning more exciting and personal. Others worry that it distracts students. Both views contain some truth.",
      "Technology can be very helpful when it is used for a clear purpose. For example, a vocabulary app can give each student practice at the right level and show the teacher which words are difficult. Students can also watch science simulations that show processes they cannot see, such as blood moving through the heart.",
      "However, technology does not automatically improve learning. If students switch between games, messages, and homework, their attention is divided, and they remember less. A tablet used only to read a textbook is not better than a paper book.",
      "The key question, then, is not whether to use technology, but how. Teachers and students need to choose tools that support thinking, not replace it."
    ],
    before: {
      words: [
        { word: "distract", match: "distracts", def: "To take someone’s attention away.", ex: "Noise distracts me when I study." },
        { word: "purpose", def: "The reason for doing something.", ex: "The purpose of the app is to practice words." },
        { word: "automatically", def: "By itself, without anyone doing anything.", ex: "The lights turn on automatically." },
        { word: "divided", def: "Split into parts.", ex: "My attention was divided between two tasks." }
      ],
      predict: "Does technology always help students learn? Why or why not?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Technology helps learning when used for a clear purpose.", null],
          ["Schools should stop using tablets because they distract students.", "The writer does not say to stop. The question is HOW to use technology."],
          ["Paper books are always better than technology.", "The writer only says a tablet used like a book is not better."],
          ["Learning apps are only useful for vocabulary.", "Vocabulary apps are one example, along with simulations."]
        ],
        hint: "Read the last paragraph. What does the writer say the key question is?",
        exp: "The writer explains benefits and problems, then concludes that what matters is how technology is used.",
        ev: "Technology can be very helpful when it is used for a clear purpose."
      },
      {
        skill: "Supporting details",
        q: "Which example shows technology helping learning?",
        opts: [
          ["A vocabulary app that gives practice at the right level", null],
          ["Students switching between games, messages, and homework", "This is an example of technology causing a problem."],
          ["Using a tablet only to read a textbook", "The writer says this is no better than a paper book."],
          ["Checking messages during class", "This is a distraction, not a benefit."]
        ],
        hint: "Look at paragraph 2.",
        exp: "Paragraph 2 gives the vocabulary app as an example of technology used for a clear purpose.",
        ev: "a vocabulary app can give each student practice at the right level"
      },
      {
        skill: "Cause and effect",
        q: "According to the passage, what happens when students switch between games, messages, and homework?",
        opts: [
          ["Their attention is divided, and they remember less.", null],
          ["They learn faster because they are busy.", "The passage says they remember LESS."],
          ["They become better at using many kinds of technology.", "This is not mentioned. The passage says they remember less."],
          ["Their teachers give them more homework.", "This is not mentioned."]
        ],
        hint: "Read the second sentence of paragraph 3.",
        exp: "Switching between activities divides attention, and students remember less.",
        ev: "their attention is divided, and they remember less"
      },
      {
        skill: "Context clues",
        q: "In paragraph 2, “simulations” are most likely…",
        opts: [
          ["computer models that show how something works", null],
          ["paper tests about science", "Tests do not “show processes”."],
          ["science teachers", "Students watch simulations. They are not people."],
          ["games that are not related to school or science", "These simulations show science processes."]
        ],
        hint: "Look at the words after “simulations”: they “show processes they cannot see”.",
        exp: "The context says simulations show processes students cannot see, like blood moving through the heart. They are models that show how something works.",
        ev: "simulations that show processes they cannot see"
      },
      {
        skill: "Inference",
        q: "What would the writer most likely think about a class that uses tablets only to read the same textbook?",
        opts: [
          ["The tablets add little compared with paper books.", null],
          ["It is the best way to use technology.", "The writer says this use is not better than paper."],
          ["The students will remember much more.", "The writer gives no reason to think so."],
          ["The school should buy more tablets for every student.", "Buying more tablets would not solve the problem the writer describes."]
        ],
        hint: "Find the sentence about a tablet and a paper book.",
        exp: "The writer says a tablet used only to read a textbook is not better than a paper book, so such use adds little value.",
        ev: "A tablet used only to read a textbook is not better than a paper book."
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer say “Both views contain some truth” in paragraph 1?",
        opts: [
          ["To show that both sides will be considered fairly", null],
          ["To show that the writer cannot decide", "The writer does reach a clear conclusion at the end."],
          ["To say that both groups of people are completely wrong", "“Some truth” means both are partly right."],
          ["To end the discussion quickly", "The discussion continues for three more paragraphs."]
        ],
        hint: "How is the rest of the passage organized?",
        exp: "The writer then discusses both the benefits (paragraph 2) and the problems (paragraph 3), showing a balanced approach.",
        ev: "Both views contain some truth."
      }
    ]
  },
  {
    id: "r3-06",
    level: 3,
    title: "The Mystery of the Missing Project",
    category: "School Life",
    topic: "Narrative inference",
    status: "retained",
    text: [
      "On Monday morning, Rashid opened his locker and gasped. His model volcano, which was due in science that day, was not there. He had worked on it for two weeks.",
      "He rushed to his teacher, Mr. Fouad. “Someone stole my project!” he said. Mr. Fouad asked him to think carefully about where he had last seen it.",
      "Rashid remembered carrying it to school on Thursday. Because it was too big for his locker, he had left it on a shelf in the art room. Then he remembered that the school had been cleaned over the weekend.",
      "Mr. Fouad and Rashid walked to the art room. The shelf was empty, but a cleaning cart was parked outside the storage room. Inside, between boxes of paint, sat the volcano with a note: “Found on shelf — whose is this?”",
      "Rashid laughed with relief. He felt a little embarrassed about accusing someone, and he decided to write his name on his projects from now on."
    ],
    before: {
      words: [
        { word: "locker", def: "A small cupboard at school where students keep things.", ex: "I keep my books in my locker." },
        { word: "storage", def: "A place where things are kept until they are needed.", ex: "The chairs are in the storage room." },
        { word: "accuse", match: "accusing", def: "To say someone did something wrong.", ex: "Do not accuse people without proof." },
        { word: "relief", def: "A happy feeling when a worry ends.", ex: "I felt relief when I found my keys." }
      ],
      predict: "What should you do before you say someone took your things?"
    },
    questions: [
      {
        skill: "Inference",
        q: "Why did Rashid first think his project had been stolen?",
        opts: [
          ["He had forgotten where he left it.", null],
          ["He saw someone take it from his locker.", "The story never says he saw anyone."],
          ["Mr. Fouad told him it was stolen.", "Mr. Fouad asked him to think, not that it was stolen."],
          ["His locker was broken.", "Nothing suggests the locker was broken."]
        ],
        hint: "Where did he look first? Where had he really left it?",
        exp: "Rashid looked in his locker, but he had actually left the project in the art room. Because he forgot this, he assumed someone stole it.",
        ev: "Because it was too big for his locker, he had left it on a shelf in the art room."
      },
      {
        skill: "Context clues",
        q: "In paragraph 1, Rashid “gasped.” What does this mean?",
        opts: [
          ["He took a quick breath because of shock.", null],
          ["He laughed loudly.", "He laughs at the end of the story, not at the beginning."],
          ["He closed the locker gently and walked away.", "“Gasped” is not about the locker. Think about how he felt."],
          ["He shouted angrily at another student.", "No other student is there."]
        ],
        hint: "What did he see, or not see, in his locker? How would you react?",
        exp: "To gasp is to take a quick breath because of surprise or shock. Rashid was shocked that his project was missing.",
        ev: "His model volcano, which was due in science that day, was not there."
      },
      {
        skill: "Cause and effect",
        q: "Why had Rashid left the volcano in the art room?",
        opts: [
          ["It was too big for his locker.", null],
          ["The art teacher wanted to see it.", "This is not mentioned."],
          ["He wanted to paint it again.", "This is not mentioned."],
          ["Mr. Fouad told him to leave it there.", "Mr. Fouad did not tell him this."]
        ],
        hint: "Look for the word “Because” in paragraph 3.",
        exp: "Rashid left it in the art room because it was too big for his locker.",
        ev: "Because it was too big for his locker"
      },
      {
        skill: "Inference",
        q: "Who most likely moved the volcano into the storage room?",
        opts: [
          ["A member of the cleaning staff", null],
          ["Mr. Fouad", "Mr. Fouad walked to the art room with Rashid and seemed surprised too."],
          ["A student who wanted to steal it", "The note asks whose it is. A thief would not leave a note."],
          ["Rashid himself", "Rashid did not remember doing this, and the note shows someone else found it."]
        ],
        hint: "Look at the clues: when was the school cleaned, what was outside the storage room, and what did the note say?",
        exp: "The school was cleaned over the weekend, a cleaning cart was outside, and the note says “Found on shelf.” Together, these clues suggest a cleaner moved it.",
        ev: "a cleaning cart was parked outside the storage room"
      },
      {
        skill: "Character motivation",
        q: "Why did Rashid feel embarrassed at the end?",
        opts: [
          ["He accused someone of stealing when nobody had.", null],
          ["His volcano was broken.", "The volcano was found safely."],
          ["He was late for his science class that morning.", "Being late is not mentioned."],
          ["Mr. Fouad was angry with him.", "Mr. Fouad helped him calmly."]
        ],
        hint: "What did Rashid say to Mr. Fouad in paragraph 2?",
        exp: "Rashid said someone stole his project, but it had only been moved. He felt embarrassed about accusing someone.",
        ev: "He felt a little embarrassed about accusing someone"
      },
      {
        skill: "Problem and solution",
        q: "What will Rashid do to avoid this problem in the future?",
        opts: [
          ["Write his name on his projects", null],
          ["Keep his projects at home", "The story does not say this. Read the last sentence to find his decision."],
          ["Buy a bigger locker", "A bigger locker is not mentioned. Read the last sentence."],
          ["Ask the cleaners to leave his things alone", "The cleaners kept his project safe. Read the last sentence to find his decision."]
        ],
        hint: "Read the last sentence.",
        exp: "He decided to write his name on his projects from now on, so anyone who finds them will know they are his.",
        ev: "he decided to write his name on his projects from now on"
      }
    ]
  },
  {
    id: "r3-07",
    level: 3,
    title: "Why Cities Need Green Spaces",
    category: "Environment",
    topic: "Environment",
    status: "retained",
    text: [
      "As cities grow, more land is covered with roads, buildings, and car parks. Green spaces such as parks, gardens, and tree-lined streets are often the first things to disappear. Yet these areas are much more than decoration.",
      "First, trees and plants help cool cities. Concrete and asphalt absorb heat during the day and release it at night, making urban areas hotter than the countryside. This is called the urban heat island effect. The shade from trees and the water that plants release into the air can lower nearby temperatures by several degrees.",
      "Green spaces also benefit people’s health. People who spend time in parks often feel less stressed, and parks give families a safe place to walk, play, and meet neighbors.",
      "For these reasons, many cities are planting more trees. Riyadh, for example, has launched the Green Riyadh project, which aims to plant millions of trees across the city. Such projects show that green spaces are not a luxury but a necessity."
    ],
    before: {
      words: [
        { word: "decoration", def: "Something that makes a place look nice.", ex: "The flowers are only decoration." },
        { word: "absorb", def: "To take in and hold something, like heat or water.", ex: "Dark roads absorb heat." },
        { word: "shade", def: "A cooler, darker area where the sun does not reach.", ex: "We sat in the shade of a tree." },
        { word: "asphalt", def: "The black material used to make roads.", ex: "The asphalt gets very hot in summer." }
      ],
      predict: "Why do you think cities are often hotter than the countryside?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Green spaces are necessary for cooler, healthier cities.", null],
          ["Cities should stop building roads.", "The writer does not argue against roads."],
          ["The countryside is a better place to live than the city.", "The countryside is mentioned only to compare temperatures."],
          ["Parks are mainly for decoration.", "The writer says green spaces are “much more than decoration”."]
        ],
        hint: "What two benefits does the writer explain? What is the conclusion?",
        exp: "The writer explains that green spaces cool cities and benefit health, and concludes they are a necessity.",
        ev: "Such projects show that green spaces are not a luxury but a necessity."
      },
      {
        skill: "Context clues",
        q: "What is the “urban heat island effect”?",
        opts: [
          ["Cities getting hotter because concrete and asphalt hold heat", null],
          ["An island where the weather is always hot", "This is not a real island. Read the sentence before the term."],
          ["A park that is cooler than the city", "Parks help REDUCE the effect."],
          ["Hot weather caused only by strong summer sunshine in the city", "The passage explains it is caused by concrete and asphalt."]
        ],
        hint: "The sentence just before the term explains it.",
        exp: "The passage explains that concrete and asphalt absorb and release heat, making urban areas hotter than the countryside. This is the urban heat island effect.",
        ev: "Concrete and asphalt absorb heat during the day and release it at night, making urban areas hotter than the countryside."
      },
      {
        skill: "Cause and effect",
        q: "How do trees and plants lower nearby temperatures?",
        opts: [
          ["Through shade and the water they release into the air", null],
          ["By absorbing heat in the day and releasing it at night", "This is what concrete and asphalt do."],
          ["By covering roads with leaves", "This is not mentioned."],
          ["By making the wind stronger", "Wind is not mentioned."]
        ],
        hint: "Read the last sentence of paragraph 2.",
        exp: "The shade from trees and the water plants release into the air can lower temperatures by several degrees.",
        ev: "The shade from trees and the water that plants release into the air can lower nearby temperatures by several degrees."
      },
      {
        skill: "Supporting details",
        q: "Which health benefit of green spaces does the passage mention?",
        opts: [
          ["People in parks often feel less stressed.", null],
          ["Parks cure many common illnesses.", "The passage does not make this claim."],
          ["Trees make people taller.", "This is not mentioned."],
          ["Parks help people sleep longer every night.", "Sleep is not mentioned."]
        ],
        hint: "Read paragraph 3.",
        exp: "People who spend time in parks often feel less stressed.",
        ev: "People who spend time in parks often feel less stressed"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer mention the Green Riyadh project?",
        opts: [
          ["To give a real example of a city planting trees", null],
          ["To complain that Riyadh has too many trees already", "The writer supports planting trees."],
          ["To explain how to plant a tree", "No planting instructions are given."],
          ["To compare Riyadh with the countryside", "The project is not compared with the countryside."]
        ],
        hint: "Look at the words “for example” in the last paragraph.",
        exp: "The writer uses Green Riyadh as an example of a city acting on the benefits explained earlier.",
        ev: "Riyadh, for example, has launched the Green Riyadh project"
      },
      {
        skill: "Context clues",
        q: "What does “not a luxury but a necessity” mean?",
        opts: [
          ["Something we truly need, not just something nice", null],
          ["Something very expensive that only rich people can buy", "This describes a luxury. The writer says green spaces are NOT a luxury."],
          ["Something that is not useful", "The whole passage explains how useful green spaces are."],
          ["Something that should be removed", "The writer wants more green spaces."]
        ],
        hint: "“Not A but B” means the writer rejects A and chooses B.",
        exp: "A luxury is a nice extra. A necessity is something we need. The writer says green spaces are needed.",
        ev: "green spaces are not a luxury but a necessity"
      }
    ]
  },
  {
    id: "r3-08",
    level: 3,
    title: "The Value of Learning from Mistakes",
    category: "Personal Development",
    topic: "Growth mindset",
    status: "retained",
    text: [
      "In Grade 9, Nawaf failed his first English writing assignment. His teacher’s comments covered the page: unclear sentences, no paragraphs, too many spelling errors. Nawaf felt angry and pushed the paper into his bag. “I’m just bad at writing,” he told his friend.",
      "The next day, his teacher, Mr. Hamdan, asked to speak with him. Instead of repeating every problem, he asked Nawaf to choose just one thing to improve. Nawaf chose paragraphs. Mr. Hamdan showed him how each paragraph should focus on one idea.",
      "On the next assignment, Nawaf’s paragraphs were clear, although he still made spelling mistakes. Mr. Hamdan wrote, “Real progress!” For the following assignment, Nawaf focused on spelling by keeping a list of words he often misspelled.",
      "By the end of the year, Nawaf was not the best writer in the class, but he was one of the most improved. He realized that a mistake is information, not a final judgment."
    ],
    before: {
      words: [
        { word: "assignment", def: "A piece of work a teacher gives you.", ex: "My English assignment is due Sunday." },
        { word: "improve", def: "To make something better.", ex: "I want to improve my spelling." },
        { word: "progress", def: "Moving forward and getting better.", ex: "The teacher saw real progress in my writing." },
        { word: "comments", def: "Written or spoken opinions about something.", ex: "My teacher wrote helpful comments on my essay." }
      ],
      predict: "What can you learn from a test you did badly on?"
    },
    questions: [
      {
        skill: "Inference",
        q: "How did Nawaf feel about himself after he failed the first assignment?",
        opts: [
          ["He believed he could never be good at writing.", null],
          ["He felt proud of his work.", "He failed and felt angry, so he was not proud."],
          ["He was excited to start again.", "His reaction shows the opposite."],
          ["He thought the teacher had made a grading mistake.", "He blamed himself, not the teacher."]
        ],
        hint: "Read what Nawaf told his friend.",
        exp: "Nawaf said, “I’m just bad at writing.” This shows he believed his writing ability could not change.",
        ev: "“I’m just bad at writing,” he told his friend."
      },
      {
        skill: "Character motivation",
        q: "Why did Mr. Hamdan most likely ask Nawaf to choose only one thing to improve?",
        opts: [
          ["So the task felt manageable and he could make progress", null],
          ["Because the other problems did not matter", "All the problems mattered. Nawaf worked on spelling later."],
          ["Because Mr. Hamdan did not have time to explain everything", "The passage does not suggest this."],
          ["To make the next assignment easier to grade", "Grading is not mentioned."]
        ],
        hint: "Think about how Nawaf felt after seeing the page full of comments.",
        exp: "Nawaf felt overwhelmed by many problems. Focusing on one thing at a time made improvement possible, as the following assignments show.",
        ev: "Instead of repeating every problem, he asked Nawaf to choose just one thing to improve."
      },
      {
        skill: "Sequencing",
        q: "What did Nawaf work on AFTER he improved his paragraphs?",
        opts: [
          ["Spelling", null],
          ["Paragraphs again", "His paragraphs were already clear on the next assignment."],
          ["Handwriting", "Handwriting is not mentioned."],
          ["Speaking", "Speaking is not mentioned."]
        ],
        hint: "Look for the words “For the following assignment”.",
        exp: "After his paragraphs improved, Nawaf focused on spelling for the following assignment.",
        ev: "For the following assignment, Nawaf focused on spelling"
      },
      {
        skill: "Problem and solution",
        q: "How did Nawaf work on his spelling problem?",
        opts: [
          ["He kept a list of words he often misspelled.", null],
          ["He asked a friend to check his spelling for him.", "This is not mentioned. Read the end of paragraph 3."],
          ["He stopped writing long sentences.", "This is not mentioned."],
          ["He used only short, easy words.", "This is not mentioned."]
        ],
        hint: "Read the end of paragraph 3.",
        exp: "Nawaf kept a list of words he often misspelled.",
        ev: "keeping a list of words he often misspelled"
      },
      {
        skill: "Main idea",
        q: "What is the main lesson of the story?",
        opts: [
          ["Mistakes help us improve when we work on them step by step.", null],
          ["Only talented students can become good writers.", "Nawaf improved through effort, which shows the opposite."],
          ["Teachers should not write so many comments on students’ work.", "The comments helped Nawaf know what to improve."],
          ["Spelling is more important than paragraphs.", "The story does not compare their importance."]
        ],
        hint: "Read the last sentence.",
        exp: "Nawaf learned from his mistakes one step at a time and became one of the most improved writers.",
        ev: "He realized that a mistake is information, not a final judgment."
      },
      {
        skill: "Inference",
        q: "What does Nawaf mean when he says “a mistake is information, not a final judgment”?",
        opts: [
          ["Mistakes show what to improve; they do not prove you are bad.", null],
          ["Mistakes should be hidden from teachers.", "Nawaf learned to use his mistakes, not hide them."],
          ["Teachers judge students only by the mistakes they make.", "This is the opposite of his new belief."],
          ["Making mistakes means you will probably fail the whole year.", "Nawaf made mistakes and still improved greatly."]
        ],
        hint: "Compare this sentence with what Nawaf said at the beginning.",
        exp: "At first, Nawaf saw his failure as proof he was bad at writing. Later, he saw mistakes as useful information about what to work on.",
        ev: "a mistake is information, not a final judgment"
      }
    ]
  },
  {
    id: "r3-09",
    level: 3,
    title: "A Young Inventor’s Idea",
    category: "Science",
    topic: "Innovation",
    status: "revised",
    revisionNote: "Split a 28-word opening sentence and a participle clause (“…, telling workers…”).",
    text: [
      "Maryam often visits her grandfather’s farm near Al-Kharj. On one visit, she noticed that the workers watered the date palms by hand, even on days when the soil was still wet. A lot of water was wasted, and some trees received too much.",
      "Maryam, a Grade 10 student, wondered if a simple sensor could help. She learned that soil moisture sensors measure how wet the ground is. With help from her school’s robotics teacher, she connected a sensor to a small computer board and a buzzer. When the soil became dry, the buzzer sounded. This told the workers it was time to water.",
      "Her first version failed because sand got inside the wires. Maryam protected them with a plastic case and tested the device again. This time, it worked.",
      "Her grandfather used the device for one summer and reported that the farm used noticeably less water. Maryam entered her invention in a national student competition, where she won an award for innovation."
    ],
    before: {
      words: [
        { word: "sensor", def: "A small device that measures something.", ex: "The sensor measures heat." },
        { word: "competition", def: "An event where people try to win.", ex: "She won a science competition." },
        { word: "device", def: "A small machine made for a special job.", ex: "A phone is a useful device." },
        { word: "noticeably", def: "Clearly, so people can see it.", ex: "The room was noticeably cooler." }
      ],
      predict: "How could technology help farmers use less water?"
    },
    questions: [
      {
        skill: "Problem and solution",
        q: "What problem did Maryam notice on the farm?",
        opts: [
          ["Workers watered the trees even when the soil was wet.", null],
          ["The date palms were not getting enough water in summer.", "The trees were watered, sometimes too much."],
          ["The farm had no workers.", "Workers are mentioned in the first sentence."],
          ["Her grandfather wanted to sell the farm.", "This is not mentioned."]
        ],
        hint: "Read the first paragraph carefully.",
        exp: "The workers watered by hand even when the soil was wet, so water was wasted.",
        ev: "the workers watered the date palms by hand, even on days when the soil was still wet"
      },
      {
        skill: "Context clues",
        q: "In paragraph 2, the word “moisture” means…",
        opts: [
          ["wetness", null],
          ["heat level", "The sensor measures something else about the soil."],
          ["sand", "Sand is mentioned later as a problem, not as the meaning of moisture."],
          ["sound", "The buzzer makes sound, but moisture is what the sensor measures."]
        ],
        hint: "Read the rest of the sentence: the sensors “measure how wet the ground is”.",
        exp: "Moisture means wetness. The sentence explains that moisture sensors measure how wet the ground is.",
        ev: "soil moisture sensors measure how wet the ground is"
      },
      {
        skill: "Cause and effect",
        q: "What happened when the soil became dry?",
        opts: [
          ["The buzzer sounded.", null],
          ["The sensor turned off.", "The sensor did its job by signaling the buzzer."],
          ["The trees were watered automatically.", "The buzzer told the workers. It did not water the trees itself."],
          ["The computer board broke.", "This is not mentioned."]
        ],
        hint: "Read the last sentence of paragraph 2.",
        exp: "When the soil became dry, the buzzer sounded to tell workers to water.",
        ev: "When the soil became dry, the buzzer sounded"
      },
      {
        skill: "Problem and solution",
        q: "Why did the first version fail, and how did Maryam fix it?",
        opts: [
          ["Sand got into the wires, so she added a plastic case.", null],
          ["The buzzer was too quiet, so she bought a louder one.", "The buzzer was not the problem."],
          ["The sensor was too expensive, so she made her own.", "Cost is not mentioned."],
          ["Her teacher did not help, so she worked alone.", "Her robotics teacher did help her."]
        ],
        hint: "Read paragraph 3.",
        exp: "The first version failed because sand got inside the wires. Maryam solved this with a plastic case.",
        ev: "Her first version failed because sand got inside the wires."
      },
      {
        skill: "Character motivation",
        q: "What does Maryam’s response to her first failure show about her?",
        opts: [
          ["She was persistent and kept trying.", null],
          ["She gave up easily.", "She fixed the problem and tested again."],
          ["She blamed her teacher for the problem.", "She did not blame anyone."],
          ["She did not care about the farm.", "Her whole project shows she cared."]
        ],
        hint: "What did she do right after it failed?",
        exp: "Instead of giving up, Maryam found the cause, fixed it, and tested again. This shows persistence.",
        ev: "Maryam protected them with a plastic case and tested the device again."
      },
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["A student who invents a device to save water", null],
          ["How date palms grow in the desert", "Date palms are part of the setting, not the main topic."],
          ["A national competition for farmers in Al-Kharj", "The competition was for students, and it is only at the end."],
          ["Why robotics teachers are important", "The teacher helped, but the passage focuses on Maryam."]
        ],
        hint: "Think about the problem, the invention, and the result.",
        exp: "The passage follows Maryam from noticing wasted water to building a sensor that helped the farm use less water.",
        ev: "reported that the farm used noticeably less water"
      }
    ]
  },
  {
    id: "r3-10",
    level: 3,
    title: "The Problem with Food Waste",
    category: "Environment",
    topic: "Sustainability",
    status: "retained",
    text: [
      "Imagine buying three bags of groceries, then throwing one bag straight into the trash. That is roughly what happens to food around the world. According to the United Nations, about one-third of all food produced is lost or wasted.",
      "Food waste is a problem for several reasons. First, it wastes the water, energy, and land used to grow and transport the food. Second, when food rots in landfills, it releases methane, a gas that traps heat and contributes to climate change. Finally, while food is thrown away, millions of people do not have enough to eat.",
      "Much waste happens at home. Families buy more than they need, cook too much, or throw away food because they misunderstand the date on the label.",
      "There are simple solutions. Families can plan meals, write shopping lists, store leftovers properly, and share extra food. During large gatherings, some Saudi charities collect untouched food and deliver it to families in need."
    ],
    before: {
      words: [
        { word: "produce", match: "produced", def: "To make or grow something.", ex: "Saudi farms produce dates." },
        { word: "landfills", def: "Large places where trash is buried.", ex: "Much plastic ends up in landfills." },
        { word: "methane", def: "A gas that traps heat in the air.", ex: "Rotting food releases methane." },
        { word: "leftovers", def: "Food that is not eaten and can be eaten later.", ex: "We ate the leftovers for lunch." }
      ],
      predict: "What happens to the food we throw away?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Food waste is serious, but simple actions can reduce it.", null],
          ["Families should never cook large meals for their gatherings.", "The passage suggests planning, not never cooking large meals."],
          ["The United Nations grows most of the world’s food.", "The UN is only the source of a statistic."],
          ["Methane is the only problem caused by food waste.", "Methane is one of three reasons given."]
        ],
        hint: "Paragraphs 2 and 3 describe a problem. What does paragraph 4 offer?",
        exp: "The passage explains why food waste is a problem and ends with simple solutions.",
        ev: "There are simple solutions."
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer begin by asking us to imagine throwing away a bag of groceries?",
        opts: [
          ["To help readers picture how much food is wasted", null],
          ["To give advice about shopping", "Shopping advice comes at the end, not in the opening."],
          ["To tell a true story about the writer’s own family", "It is an imagined example, not a real story."],
          ["To show that groceries are expensive", "Price is not the point of the example."]
        ],
        hint: "Compare the example with the statistic that follows.",
        exp: "Throwing away one of three bags matches the statistic that about one-third of food is wasted. The image makes the number easy to understand.",
        ev: "That is roughly what happens to food around the world."
      },
      {
        skill: "Cause and effect",
        q: "Why is rotting food in landfills harmful to the environment?",
        opts: [
          ["It releases methane, a gas that traps heat.", null],
          ["It uses too much water.", "Water is wasted in growing food, not by food rotting in landfills."],
          ["It makes the land too wet for farmers to use.", "This is not mentioned."],
          ["It attracts too many animals.", "Animals are not mentioned."]
        ],
        hint: "Find the word “landfills”.",
        exp: "When food rots in landfills, it releases methane, which traps heat and contributes to climate change.",
        ev: "when food rots in landfills, it releases methane, a gas that traps heat and contributes to climate change"
      },
      {
        skill: "Supporting details",
        q: "According to paragraph 3, what is one reason families waste food?",
        opts: [
          ["They misunderstand the date on the label.", null],
          ["They grow too much food in their gardens.", "Gardens are not mentioned."],
          ["They give food to charities.", "Giving food to charity reduces waste."],
          ["They eat leftovers every day.", "Eating leftovers would reduce waste."]
        ],
        hint: "Read paragraph 3.",
        exp: "Families sometimes throw away food because they misunderstand the date on the label.",
        ev: "throw away food because they misunderstand the date on the label"
      },
      {
        skill: "Problem and solution",
        q: "Which of these is a solution suggested in the passage?",
        opts: [
          ["Planning meals and writing shopping lists", null],
          ["Buying more food to be safe", "Buying more than needed is one of the causes of waste."],
          ["Throwing food away as soon as the date passes", "Misunderstanding dates is a cause of waste."],
          ["Cooking extra food every day", "Cooking too much is a cause of waste."]
        ],
        hint: "Read the last paragraph.",
        exp: "Families can plan meals, write shopping lists, store leftovers properly, and share extra food.",
        ev: "Families can plan meals, write shopping lists, store leftovers properly, and share extra food."
      },
      {
        skill: "Inference",
        q: "Why does the writer mention that millions of people do not have enough to eat?",
        opts: [
          ["To show that food waste is unfair, not only harmful", null],
          ["To prove that the world does not produce enough food", "The passage says a third of food is WASTED, so enough is produced."],
          ["To blame those people for wasting food", "The writer does not blame them."],
          ["To show that charities are not working", "The passage praises charities that deliver food."]
        ],
        hint: "Look at the word “while” in that sentence. What two things are happening at the same time?",
        exp: "The word “while” contrasts wasted food with people who are hungry. This suggests that food waste is unfair as well as harmful.",
        ev: "while food is thrown away, millions of people do not have enough to eat"
      }
    ]
  }
]);
