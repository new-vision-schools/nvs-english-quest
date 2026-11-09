/* =====================================================================
   NVS English Quest — Reading Library — LEVEL 2 PASSAGES  (Version 3D)
   ---------------------------------------------------------------------
   To add a passage, copy one passage block, paste it at the end of the list
   (before the final "]);"), and change its content.
   See HOW_TO_ADD_CONTENT.md for step-by-step instructions.

   FIELDS
   • id: unique, pattern r2-NN (e.g. r2-11). Never change an existing id.
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
    id: "r2a",
    level: 2,
    title: "The School Garden",
    category: "Environment",
    topic: "Environmental awareness",
    status: "retained",
    text: [
      "Last year, the students at Al-Noor School started a garden behind the science building. At first, the ground was dry and full of rocks. The students removed the rocks and added rich soil. Then they planted tomatoes, mint, and peppers.",
      "Every morning, a different class waters the plants. The students also keep a notebook where they record how tall the plants grow each week.",
      "The garden has taught the students many things. They learned that plants need patience and care. They also learned to work as a team. In the spring, the students made a salad with the vegetables and shared it with their teachers."
    ],
    before: {
      words: [
        { word: "soil", def: "The top part of the ground where plants grow.", ex: "Plants need good soil." },
        { word: "patience", def: "The ability to wait calmly.", ex: "Learning a language takes patience." },
        { word: "vegetables", def: "Plants we eat, like tomatoes and peppers.", ex: "I eat vegetables every day." },
        { word: "share", match: "shared", def: "To give part of something to others.", ex: "We shared our food with our friends." }
      ],
      predict: "What can students learn from growing a garden at school?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["How students built a garden and what they learned", null],
          ["How to make a healthy salad", "The salad is only one small detail at the end. The whole passage is about something bigger."],
          ["Why the science building is old", "The science building only tells us where the garden is."],
          ["A teacher who grows tomatoes and peppers at her home", "The students, not a teacher, grow the plants, and the garden is at school."]
        ],
        hint: "The main idea is what the WHOLE passage talks about, not only one sentence.",
        exp: "Every paragraph is about the school garden: how students built it, how they care for it, and what they learned.",
        ev: "the students at Al-Noor School started a garden behind the science building"
      },
      {
        skill: "Sequencing",
        q: "What did the students do FIRST?",
        opts: [
          ["They removed the rocks.", null],
          ["They planted tomatoes, mint, and peppers.", "They planted after they prepared the ground. Look for the word “Then”."],
          ["They made a salad.", "The salad happened last, in the spring."],
          ["They added rich soil.", "They added soil, but they did something before that in the same sentence."]
        ],
        hint: "Read the first paragraph. Look at the order of the actions in “removed … and added …”.",
        exp: "The students first removed the rocks, then added soil, and then planted the vegetables.",
        ev: "The students removed the rocks and added rich soil."
      },
      {
        skill: "Supporting details",
        q: "What do the students write in their notebook?",
        opts: [
          ["How tall the plants grow each week", null],
          ["The names of their teachers", "Teachers are mentioned only at the end, for the salad."],
          ["Recipes for salads", "Recipes are not mentioned. Find the word “notebook”."],
          ["Which class waters the plants each morning", "A different class waters the plants each morning, but this is not what they write in the notebook."]
        ],
        hint: "Find the word “notebook” in the second paragraph.",
        exp: "The students keep a notebook where they record how tall the plants grow each week.",
        ev: "keep a notebook where they record how tall the plants grow each week"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 2, the word “record” means…",
        opts: [
          ["write down", null],
          ["play music", "“Record” can mean music in some sentences, but here students are using a notebook."],
          ["break", "Breaking does not make sense with a notebook and plant heights."],
          ["forget", "If they forgot the heights, they would not need a notebook."]
        ],
        hint: "What do people usually do with a notebook?",
        exp: "In this sentence, “record” means to write down information. The students write the heights of the plants in a notebook.",
        ev: "keep a notebook where they record how tall the plants grow each week"
      },
      {
        skill: "Supporting details",
        q: "Which lesson did the students learn from the garden?",
        opts: [
          ["How to work as a team", null],
          ["That plants grow without any care", "The passage says the opposite: plants need patience and care."],
          ["That rocks are good for gardens", "The students removed the rocks because they were a problem."],
          ["That gardening is boring", "The passage does not say this. It describes positive lessons."]
        ],
        hint: "Read the third paragraph. Look for the word “learned”.",
        exp: "The third paragraph says the students learned to work as a team.",
        ev: "They also learned to work as a team."
      }
    ]
  },
  {
    id: "r2b",
    level: 2,
    title: "Ali’s First Phone",
    category: "Technology",
    topic: "Technology",
    status: "retained",
    text: [
      "When Ali turned fourteen, his parents gave him his first smartphone. He was very excited. In the first week, he used it for hours every night. He watched videos and played games until very late.",
      "Soon, Ali felt tired in class. He could not focus on his lessons, and his grades began to drop. His mother noticed the problem and talked with him.",
      "Together, they made a simple plan. Ali would put his phone in the kitchen at nine o’clock every night. At first, this was difficult for him. After two weeks, however, he was sleeping better and paying more attention in class. Ali realized that technology is useful, but it needs limits."
    ],
    before: {
      words: [
        { word: "excited", def: "Very happy about something that is happening.", ex: "I was excited about my new bike." },
        { word: "grades", def: "Marks or scores at school.", ex: "My grades are better this term." },
        { word: "attention", def: "Watching, listening, or thinking carefully.", ex: "Please pay attention to the teacher." },
        { word: "limit", match: "limits", def: "The most that is allowed.", ex: "My parents set a time limit for games." }
      ],
      predict: "What problems can a new phone cause for a teenager?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Ali learned that his phone needs limits.", null],
          ["Smartphones should be banned for teenagers.", "The passage says technology is useful. It does not say phones should be banned."],
          ["Ali’s mother bought a new kitchen.", "The kitchen is only where Ali leaves his phone at night."],
          ["Ali became very good at video games.", "Games are a small detail. The passage is about a problem and a solution."]
        ],
        hint: "Read the last sentence. It often tells the main lesson.",
        exp: "The passage shows a problem (too much phone time), a plan, and the lesson Ali learned: technology needs limits.",
        ev: "Ali realized that technology is useful, but it needs limits."
      },
      {
        skill: "Sequencing",
        q: "What happened soon after Ali started using his phone late at night?",
        opts: [
          ["He felt tired in class.", null],
          ["He made a plan with his mother.", "The plan came later, after his mother noticed a problem."],
          ["He started sleeping better.", "Better sleep came at the end, after the plan."],
          ["He turned fourteen.", "He turned fourteen before he got the phone."]
        ],
        hint: "Look at the first word of paragraph 2: “Soon”.",
        exp: "Paragraph 2 begins, “Soon, Ali felt tired in class.” This happened after he stayed up late with his phone.",
        ev: "Soon, Ali felt tired in class."
      },
      {
        skill: "Supporting details",
        q: "Where does Ali put his phone at nine o’clock?",
        opts: [
          ["In the kitchen", null],
          ["In his bedroom", "Keeping the phone in his bedroom would not solve the problem. Read paragraph 3."],
          ["In his school bag", "The school bag is not mentioned. Find “nine o’clock”."],
          ["In the living room", "The living room is not mentioned. Find “nine o’clock”."]
        ],
        hint: "Find “nine o’clock” in paragraph 3.",
        exp: "The plan was that Ali would put his phone in the kitchen at nine o’clock every night.",
        ev: "Ali would put his phone in the kitchen at nine o’clock every night."
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 2, the word “focus” means…",
        opts: [
          ["pay attention", null],
          ["fall asleep", "Ali was tired, but “focus on his lessons” is about his mind working in class."],
          ["laugh with friends", "Laughing does not connect to lessons and dropping grades."],
          ["travel", "Ali is in class. He is not going anywhere."]
        ],
        hint: "Ali was tired, so his grades dropped. What could he not do well in class?",
        exp: "“Focus” means to pay attention. Because Ali was tired, he could not pay attention to his lessons. Later the passage says he was “paying more attention”.",
        ev: "He could not focus on his lessons, and his grades began to drop."
      },
      {
        skill: "Supporting details",
        q: "How long did it take before Ali was sleeping better?",
        opts: [
          ["Two weeks", null],
          ["Two days", "The passage does not say two days. Look for “After”."],
          ["One month", "One month is not in the passage. Find the word “weeks”."],
          ["One week", "One week is when he used the phone for hours. Read paragraph 3."]
        ],
        hint: "Look in paragraph 3 for the word “After”.",
        exp: "The passage says, “After two weeks, however, he was sleeping better.”",
        ev: "After two weeks, however, he was sleeping better"
      }
    ]
  },
  {
    id: "r2-03",
    level: 2,
    title: "The Science Fair Project",
    category: "Science",
    topic: "School achievement",
    status: "revised",
    revisionNote: "Split two 19-word sentences into shorter ones.",
    text: [
      "Khalid and Fahad had a project for the school science fair. They wanted to find out which material keeps water cold the longest. They filled three bottles with ice water. They wrapped one bottle in cloth and one in aluminum foil. They left the third bottle uncovered. Every hour, they measured the temperature of the water.",
      "After four hours, the bottle wrapped in cloth was the coldest. The uncovered bottle was the warmest. The boys made a clear poster with a chart of their results.",
      "At the fair, the judges were impressed because the boys explained each step carefully. Khalid and Fahad won second place."
    ],
    before: {
      words: [
        { word: "material", def: "What something is made of, such as cloth or metal.", ex: "Wood is a strong material." },
        { word: "temperature", def: "How hot or cold something is.", ex: "The temperature today is 40 degrees." },
        { word: "uncovered", def: "With nothing on it or around it.", ex: "Do not leave food uncovered." },
        { word: "judges", def: "People who decide who wins a competition.", ex: "The judges chose the best project." }
      ],
      predict: "Which material do you think keeps water cold the longest: cloth, foil, or nothing?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["Two boys who test materials and win a science fair prize", null],
          ["How to make ice at home", "Ice water is used in the experiment, but the passage is not about making ice."],
          ["Why aluminum foil is dangerous", "Foil is one material they tested. Nothing says it is dangerous."],
          ["A judge who visits many schools to choose the best projects", "The judges appear only at the end. The passage is about the two boys."]
        ],
        hint: "Think about all three paragraphs: the question, the results, and the fair.",
        exp: "The passage describes the boys’ experiment, their results, and how they did at the fair.",
        ev: "They wanted to find out which material keeps water cold the longest."
      },
      {
        skill: "Sequencing",
        q: "What did the boys do AFTER they wrapped the bottles?",
        opts: [
          ["They measured the temperature every hour.", null],
          ["They filled all three bottles with ice water.", "They filled the bottles before wrapping them."],
          ["They made a poster.", "The poster came later, after they had results."],
          ["They won second place.", "Winning happened at the fair, at the very end."]
        ],
        hint: "Read the end of the first paragraph. What happened “every hour”?",
        exp: "First they filled the bottles, then wrapped two of them, and then measured the temperature every hour.",
        ev: "Every hour, they measured the temperature of the water."
      },
      {
        skill: "Supporting details",
        q: "Which bottle stayed the coldest?",
        opts: [
          ["The bottle wrapped in cloth", null],
          ["The bottle wrapped in foil", "The foil bottle was not the coldest. Read the second paragraph."],
          ["The uncovered bottle", "The uncovered bottle was the warmest."],
          ["All the bottles were the same.", "The results were different for each bottle."]
        ],
        hint: "Find the word “coldest”.",
        exp: "After four hours, the bottle wrapped in cloth was the coldest.",
        ev: "After four hours, the bottle wrapped in cloth was the coldest."
      },
      {
        skill: "Cause and effect",
        q: "Why were the judges impressed?",
        opts: [
          ["The boys explained each step carefully.", null],
          ["The boys used expensive equipment.", "Expensive equipment is not mentioned."],
          ["The boys won first place.", "They won second place, and winning came after the judges were impressed."],
          ["The boys’ poster had many colorful pictures.", "The poster had a chart, but the passage gives a different reason. Look for “because”."]
        ],
        hint: "Look for the word “because” in the last paragraph.",
        exp: "The judges were impressed because the boys explained each step carefully.",
        ev: "the judges were impressed because the boys explained each step carefully"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 3, “impressed” means the judges…",
        opts: [
          ["thought the project was very good", null],
          ["felt confused about how the project worked", "If they were confused, the boys would probably not win a prize."],
          ["were angry with the boys", "Nothing shows anger. The boys won a prize."],
          ["did not look at the project", "They listened to the explanation, so they did look at it."]
        ],
        hint: "What happened after the judges were impressed?",
        exp: "“Impressed” means having a very good opinion of something. The clue is that the boys won second place.",
        ev: "Khalid and Fahad won second place."
      }
    ]
  },
  {
    id: "r2-04",
    level: 2,
    title: "A Day Without the Internet",
    category: "Technology",
    topic: "Technology",
    status: "revised",
    revisionNote: "Split a 20-word compound sentence so the meaning of “felt lost” is easier to find.",
    text: [
      "Last month, the internet in Sara’s neighborhood stopped working for a whole day. At first, Sara felt lost. She could not check messages or watch videos. She did not know what to do with her free time.",
      "By noon, she decided to try something different. She found an old puzzle in the cupboard and finished it with her younger brother. In the afternoon, she helped her mother bake bread and read three chapters of a novel.",
      "That night, Sara noticed that she felt calm and less tired than usual. She decided to keep one evening each week free from screens."
    ],
    before: {
      words: [
        { word: "neighborhood", def: "The area around your home.", ex: "There is a park in my neighborhood." },
        { word: "puzzle", def: "A game where you put pieces together.", ex: "We finished a puzzle with 500 pieces." },
        { word: "chapter", match: "chapters", def: "One part of a book.", ex: "I read one chapter every night." },
        { word: "calm", def: "Relaxed and not worried.", ex: "I feel calm when I read." }
      ],
      predict: "What would you do if the internet stopped working for a whole day?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["A day offline showed Sara the value of screen-free time.", null],
          ["Sara learned how to fix the internet in her neighborhood.", "Sara does not fix anything. The internet comes back on its own."],
          ["Sara’s brother is very good at puzzles.", "The puzzle is one small detail."],
          ["Baking bread with family is easier than it looks.", "Baking is one activity, not the main idea."]
        ],
        hint: "How does Sara feel at the start and at the end? What does she decide?",
        exp: "Sara starts feeling lost but ends the day calm and decides to have a screen-free evening every week.",
        ev: "She decided to keep one evening each week free from screens."
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 1, “Sara felt lost” means she…",
        opts: [
          ["did not know what to do", null],
          ["could not find her way home", "Sara is at home. Here “lost” describes a feeling."],
          ["lost her phone", "Her phone is not lost. The internet stopped."],
          ["was sad because she lost a game", "No game is mentioned."]
        ],
        hint: "Read the next two sentences. They explain the feeling.",
        exp: "Here, “lost” means confused and unsure. The next sentences say she could not use her phone and did not know what to do with her free time.",
        ev: "She did not know what to do with her free time."
      },
      {
        skill: "Sequencing",
        q: "What did Sara do first when she decided to try something different?",
        opts: [
          ["She did a puzzle with her brother.", null],
          ["She baked bread with her mother.", "She baked bread in the afternoon, after the puzzle."],
          ["She read three chapters of a novel.", "Reading happened in the afternoon."],
          ["She planned a screen-free evening.", "This decision came that night, at the end."]
        ],
        hint: "Read the second paragraph. Which activity comes right after “By noon…”?",
        exp: "After deciding to try something different, Sara first did the puzzle. Baking and reading came in the afternoon.",
        ev: "She found an old puzzle in the cupboard and finished it with her younger brother."
      },
      {
        skill: "Supporting details",
        q: "How did Sara feel that night?",
        opts: [
          ["Calm and less tired than usual", null],
          ["Bored and angry", "She felt bored and lost in the morning, not at night."],
          ["Worried about the messages she was missing", "The passage does not say this. Find the words “That night”."],
          ["Sick and sleepy", "She felt less tired, not sick."]
        ],
        hint: "Find the words “That night”.",
        exp: "That night, Sara felt calm and less tired than usual.",
        ev: "That night, Sara noticed that she felt calm and less tired than usual."
      },
      {
        skill: "Cause and effect",
        q: "What was the RESULT of Sara’s day without the internet?",
        opts: [
          ["She chose to have one screen-free evening every week.", null],
          ["She stopped using the internet forever.", "She decided on one evening each week, not forever."],
          ["She bought a new computer.", "A computer is not mentioned."],
          ["She decided to read a novel every morning before school.", "She read in the afternoon, and there is no morning reading plan."]
        ],
        hint: "Read the last sentence.",
        exp: "Because the day made her feel calm, Sara decided to keep one evening a week screen-free.",
        ev: "She decided to keep one evening each week free from screens."
      }
    ]
  },
  {
    id: "r2-05",
    level: 2,
    title: "The Class Recycling Project",
    category: "Environment",
    topic: "Environment",
    status: "revised",
    revisionNote: "Split three long sentences (17–19 words); replaced “so pleased that” with simpler wording.",
    text: [
      "Mr. Tariq’s Grade 8 class noticed that a lot of paper ended up in the trash. Students often printed one page, found a small mistake, and threw it away. The class decided to start a paper recycling project.",
      "First, they placed a blue box in each classroom for used paper. Next, they asked teachers to print on both sides of the page. Every Thursday, two students weighed the paper in the boxes. They recorded the results in a chart.",
      "After one month, the boxes were collecting about ten kilograms of paper every week. Teachers were also printing less. The principal was very pleased. She asked the class to explain their idea to the whole school."
    ],
    before: {
      words: [
        { word: "recycling", def: "Using old things again to make new things.", ex: "Paper recycling saves trees." },
        { word: "mistake", def: "Something that is wrong.", ex: "I found a mistake in my answer." },
        { word: "chart", def: "A picture that shows information, like numbers.", ex: "The chart shows our test scores." },
        { word: "principal", def: "The head of a school.", ex: "The principal spoke at the assembly." }
      ],
      predict: "How can a class waste less paper?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["A class project to reduce and recycle paper", null],
          ["How to print on both sides of a page to save paper", "Printing on both sides is one step of the project, not the whole passage."],
          ["A principal who gives a speech", "The principal is mentioned only at the end."],
          ["Why Mr. Tariq likes the color blue", "The boxes are blue, but that is not the main idea."]
        ],
        hint: "What did the class decide to start?",
        exp: "The passage explains why the class started a paper recycling project, what they did, and the results.",
        ev: "The class decided to start a paper recycling project."
      },
      {
        skill: "Cause and effect",
        q: "Why did the class start the project?",
        opts: [
          ["A lot of paper was ending up in the trash.", null],
          ["The principal told them to start a recycling project.", "The principal became involved later, after the project worked."],
          ["They needed money for a trip.", "Money is not mentioned."],
          ["The printer was broken.", "The printer is not broken. Students used it often."]
        ],
        hint: "Read the first paragraph. What did the class notice?",
        exp: "The class noticed that a lot of paper ended up in the trash, so they decided to start the project.",
        ev: "Mr. Tariq’s Grade 8 class noticed that a lot of paper ended up in the trash."
      },
      {
        skill: "Sequencing",
        q: "What did the class do FIRST?",
        opts: [
          ["They placed a blue box in each classroom.", null],
          ["They asked teachers to print on both sides.", "This was the second step. Look for the word “Next”."],
          ["They weighed the paper.", "Weighing happened every Thursday, after the boxes were in place."],
          ["They explained their idea to the school.", "This happened at the end."]
        ],
        hint: "Look for the word “First”.",
        exp: "First, they placed blue boxes. Next, they asked teachers to print on both sides.",
        ev: "First, they placed a blue box in each classroom for used paper."
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 2, students “weighed the paper.” This means they…",
        opts: [
          ["measured how heavy it was", null],
          ["counted how many pages there were", "Counting pages is different. The results are in kilograms."],
          ["cleaned it", "Cleaning paper does not make sense here."],
          ["sorted it by color", "Color is not mentioned."]
        ],
        hint: "Look at paragraph 3. What unit do they use for the results?",
        exp: "To “weigh” something means to measure how heavy it is. The results are given in kilograms.",
        ev: "the boxes were collecting about ten kilograms of paper every week"
      },
      {
        skill: "Cause and effect",
        q: "Why did the principal ask the class to explain their idea to the whole school?",
        opts: [
          ["She was pleased with the project’s results.", null],
          ["The class had broken a school rule about printing.", "Nothing suggests the class broke a rule."],
          ["The blue boxes were too expensive.", "Cost is not mentioned."],
          ["Mr. Tariq was leaving the school.", "This is not in the passage."]
        ],
        hint: "Read the last two sentences.",
        exp: "The principal was very pleased with the results, so she asked the class to share their idea with the whole school.",
        ev: "The principal was very pleased. She asked the class to explain their idea to the whole school."
      }
    ]
  },
  {
    id: "r2-06",
    level: 2,
    title: "Learning to Cook",
    category: "Personal Development",
    topic: "Life skills",
    status: "retained",
    text: [
      "When Abdulaziz was fifteen, his parents traveled for a week, and he stayed with his older brother, Turki. On the first night, they ordered fast food. By the third night, they were tired of burgers and wanted something healthier.",
      "Turki decided to teach his brother how to make a simple chicken and rice dish. Abdulaziz washed the rice and cut the onions. Then he watched carefully as Turki cooked the chicken with spices. The kitchen became messy, and the rice was a little dry, but the meal tasted good.",
      "Now Abdulaziz cooks dinner for his family once a week. He says cooking makes him feel independent."
    ],
    before: {
      words: [
        { word: "healthier", def: "Better for your body.", ex: "Fruit is healthier than candy." },
        { word: "dish", def: "Food made in a special way.", ex: "Kabsa is my favorite dish." },
        { word: "spices", def: "Powders or seeds that give food flavor.", ex: "My mother uses many spices." },
        { word: "messy", def: "Not clean or tidy.", ex: "My room is messy after the party." }
      ],
      predict: "Why is it useful for teenagers to learn to cook?"
    },
    questions: [
      {
        skill: "Cause and effect",
        q: "Why did the brothers decide to cook?",
        opts: [
          ["They were tired of fast food and wanted something healthier.", null],
          ["Their parents asked them to cook dinner every night of the week.", "The parents were traveling, and they did not ask this."],
          ["The restaurants were closed.", "Restaurants being closed is not mentioned."],
          ["Turki wanted to become a chef.", "Turki’s career is not mentioned."]
        ],
        hint: "Read the end of the first paragraph.",
        exp: "By the third night, they were tired of burgers and wanted something healthier, so Turki taught his brother to cook.",
        ev: "By the third night, they were tired of burgers and wanted something healthier."
      },
      {
        skill: "Sequencing",
        q: "What happened on the first night?",
        opts: [
          ["The brothers ordered fast food.", null],
          ["Turki cooked chicken with spices.", "This happened later, when they decided to cook."],
          ["Their parents came home.", "The parents were away for a week."],
          ["Abdulaziz cooked dinner for his family.", "This is what he does now, much later."]
        ],
        hint: "Find the words “On the first night”.",
        exp: "On the first night, they ordered fast food.",
        ev: "On the first night, they ordered fast food."
      },
      {
        skill: "Supporting details",
        q: "Which job did Abdulaziz do?",
        opts: [
          ["He cut the onions.", null],
          ["He cooked the chicken with spices.", "Turki cooked the chicken. Abdulaziz watched."],
          ["He bought the chicken.", "Buying the food is not mentioned."],
          ["He ordered the burgers.", "They ordered fast food together on the first night, but this question is about the cooking."]
        ],
        hint: "Read paragraph 2. What did Abdulaziz do before he watched?",
        exp: "Abdulaziz washed the rice and cut the onions. Turki cooked the chicken.",
        ev: "Abdulaziz washed the rice and cut the onions."
      },
      {
        skill: "Supporting details",
        q: "What was one problem with their first meal?",
        opts: [
          ["The rice was a little dry.", null],
          ["The chicken was burned and too dry.", "The passage does not say the chicken burned. Look for the word “but”."],
          ["The food had no taste.", "The passage says the meal tasted good."],
          ["They forgot the onions.", "Abdulaziz cut the onions, so they did not forget them."]
        ],
        hint: "Look for the word “but” in paragraph 2.",
        exp: "The kitchen became messy and the rice was a little dry, but the meal still tasted good.",
        ev: "the rice was a little dry, but the meal tasted good"
      },
      {
        skill: "Vocabulary in context",
        q: "In the last sentence, “independent” means…",
        opts: [
          ["able to do things for yourself", null],
          ["very hungry", "Hunger is not connected to cooking for others every week."],
          ["tired after working hard in the kitchen", "Cooking can be tiring, but the word describes a positive feeling here."],
          ["lonely and sad", "Abdulaziz cooks for his family, so he is not lonely."]
        ],
        hint: "Abdulaziz can now make dinner without help. How does that make him feel?",
        exp: "“Independent” means able to take care of yourself without help. Cooking dinner on his own makes Abdulaziz feel this way.",
        ev: "He says cooking makes him feel independent."
      }
    ]
  },
  {
    id: "r2-07",
    level: 2,
    title: "A Difficult Decision",
    category: "Personal Development",
    topic: "Responsibility",
    status: "revised",
    revisionNote: "Replaced two conditional sentences (“If she went…, she might…”) with simpler sentences; split a long sequence sentence.",
    text: [
      "Lama had a big math test on Sunday. On Saturday afternoon, her best friend called and invited her to a birthday party that evening. Lama really wanted to go, but she had not finished studying.",
      "She thought about her choices. A whole evening at the party could hurt her test score. But if she stayed home, she would miss the fun. In the end, Lama studied until six o’clock. Then she went to the party for one hour. She came home early to sleep.",
      "On Sunday, she felt prepared. She scored 88 percent, and she was glad she had found a way to do both."
    ],
    before: {
      words: [
        { word: "invite", match: "invited", def: "To ask someone to come to an event.", ex: "My friend invited me to his party." },
        { word: "choice", match: "choices", def: "Something you can choose.", ex: "I had two choices: stay or go." },
        { word: "percent", def: "A part of 100. 50 percent is half.", ex: "I got 90 percent on the quiz." }
      ],
      predict: "What would you do if you had a test and a party on the same weekend?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["Lama finds a way to study and go to a party.", null],
          ["Lama misses her best friend’s birthday party.", "Lama goes to the party for one hour."],
          ["Lama fails her math test.", "She scored 88 percent."],
          ["Lama buys a birthday gift.", "A gift is not mentioned."]
        ],
        hint: "Read the last sentence. What was Lama glad about?",
        exp: "Lama has to choose between studying and a party, and she finds a way to do both.",
        ev: "she was glad she had found a way to do both"
      },
      {
        skill: "Cause and effect",
        q: "Why was the decision difficult for Lama?",
        opts: [
          ["She wanted to go, but she had not finished studying.", null],
          ["She did not like her best friend.", "The friend is her BEST friend."],
          ["She did not know where her friend’s party was going to be.", "The location is not a problem in the passage."],
          ["Her parents said she could not go.", "Her parents are not mentioned."]
        ],
        hint: "Look for the word “but” in the first paragraph.",
        exp: "Lama really wanted to go, but she had not finished studying for a big test.",
        ev: "Lama really wanted to go, but she had not finished studying."
      },
      {
        skill: "Sequencing",
        q: "What did Lama do right after she studied until six o’clock?",
        opts: [
          ["She went to the party for one hour.", null],
          ["She went to sleep.", "She slept after she came home from the party."],
          ["She took the math test.", "The test was the next day, Sunday."],
          ["She called her friend to say she would be late.", "Her friend called her earlier in the afternoon. Read paragraph 2 in order."]
        ],
        hint: "Read the end of paragraph 2 in order.",
        exp: "Lama studied until six, then went to the party for one hour, and then came home early to sleep.",
        ev: "Then she went to the party for one hour."
      },
      {
        skill: "Supporting details",
        q: "What score did Lama get on the test?",
        opts: [
          ["88 percent", null],
          ["68 percent", "Look again at the first digit. Find the sentence that begins “She scored”."],
          ["98 percent", "Check the number again. It is a little lower."],
          ["80 percent", "Close, but read the whole number in the sentence that begins “She scored”."]
        ],
        hint: "Read the last paragraph.",
        exp: "Lama scored 88 percent on the test.",
        ev: "She scored 88 percent"
      },
      {
        skill: "Vocabulary in context",
        q: "“On Sunday, she felt prepared.” What does “prepared” mean?",
        opts: [
          ["ready", null],
          ["nervous", "If she felt nervous, she would probably not be glad about her choice."],
          ["sleepy", "She went to sleep early, so she was not sleepy."],
          ["late", "Being late is not connected to her studying."]
        ],
        hint: "She studied and slept well. How did she feel before the test?",
        exp: "“Prepared” means ready. Lama had studied and slept, so she was ready for the test.",
        ev: "On Sunday, she felt prepared."
      }
    ]
  },
  {
    id: "r2-08",
    level: 2,
    title: "The School Sports Tournament",
    category: "Sports",
    topic: "Teamwork",
    status: "revised",
    revisionNote: "Shortened two long sentences (average sentence length was above the Level 2 guide); explained what a school “house” is.",
    text: [
      "Every spring, the school holds a sports tournament. Students are divided into four teams called houses. This year, the Blue House volleyball team had strong players. But they lost their first two games. The players argued and blamed each other for every mistake.",
      "Their coach called a team meeting. She told them that winning depends on communication, not only on talent. After that, the players began to call out the ball and encourage each other. They also planned their positions before each serve.",
      "Blue House did not win the tournament, but they won their last three games. The players agreed that the meeting was the turning point of their season."
    ],
    before: {
      words: [
        { word: "tournament", def: "A competition with many games or teams.", ex: "Our school won the football tournament." },
        { word: "blame", match: "blamed", def: "To say a problem is someone’s fault.", ex: "Do not blame your friend for your mistake." },
        { word: "communication", def: "Sharing information with others.", ex: "Good communication helps a team." },
        { word: "encourage", def: "To help someone feel brave or confident.", ex: "Teachers encourage students to try." }
      ],
      predict: "What makes a sports team strong: talent or teamwork?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["A team improves when players learn to communicate.", null],
          ["Blue House wins the tournament.", "The passage says Blue House did NOT win the tournament."],
          ["The rules of volleyball are difficult to learn.", "The rules are not explained."],
          ["The coach decides to leave the team after two losses.", "The coach helps the team. She does not leave."]
        ],
        hint: "What changed the team’s results?",
        exp: "After the coach’s meeting, the players communicated better and won their last three games.",
        ev: "She told them that winning depends on communication, not only on talent."
      },
      {
        skill: "Supporting details",
        q: "What was the team’s problem at the start?",
        opts: [
          ["The players argued and blamed each other.", null],
          ["The team did not have a coach.", "They had a coach who called a meeting."],
          ["The players were weak.", "The passage says they had strong players."],
          ["The team did not have enough time to practice.", "Practice time is not mentioned."]
        ],
        hint: "Read the last sentence of paragraph 1.",
        exp: "The players argued and blamed each other for every mistake.",
        ev: "The players argued and blamed each other for every mistake."
      },
      {
        skill: "Supporting details",
        q: "According to the coach, what does winning depend on?",
        opts: [
          ["Communication, not only talent", null],
          ["Having the tallest players", "Height is not mentioned."],
          ["Practicing every single day of the week", "Daily practice is not mentioned."],
          ["Talent only", "She says winning depends on communication, NOT ONLY talent."]
        ],
        hint: "Find the words “winning depends on”.",
        exp: "The coach said winning depends on communication, not only on talent.",
        ev: "winning depends on communication, not only on talent"
      },
      {
        skill: "Cause and effect",
        q: "What happened after the team changed how they played?",
        opts: [
          ["They won their last three games.", null],
          ["They won the whole tournament.", "They did not win the tournament."],
          ["They lost every game.", "They won their last three games."],
          ["They got a new coach for the last games.", "The same coach helped them."]
        ],
        hint: "Read the first sentence of the last paragraph.",
        exp: "After they began to communicate, Blue House won their last three games.",
        ev: "they won their last three games"
      },
      {
        skill: "Vocabulary in context",
        q: "The players said the meeting was the “turning point” of their season. What is a turning point?",
        opts: [
          ["The moment when things begin to change", null],
          ["The last and most important game of the season", "The meeting was not a game."],
          ["A place on the volleyball court", "Here the phrase describes a time, not a place."],
          ["A big argument between players", "The arguments happened before the meeting, not because of it."]
        ],
        hint: "What was different before and after the meeting?",
        exp: "A “turning point” is a moment when a situation starts to change. After the meeting, the team started winning.",
        ev: "The players agreed that the meeting was the turning point of their season."
      }
    ]
  },
  {
    id: "r2-09",
    level: 2,
    title: "Why Sleep Matters",
    category: "Health",
    topic: "Health",
    status: "revised",
    revisionNote: "Split a 22-word sentence with “such as” into short instructions; simplified “reaction time”.",
    text: [
      "Many teenagers believe they can stay up late and still do well at school. However, scientists say that sleep is when the brain organizes what we learned during the day. Without enough sleep, it is harder to remember new information.",
      "Lack of sleep also affects our mood. Tired students are more likely to feel stressed or get angry quickly. Their reactions are slower, and this can be dangerous during sports.",
      "Doctors recommend that teenagers sleep eight to ten hours each night. Simple habits can help. Try to go to bed at the same time every night. Keep your phone out of the bedroom."
    ],
    before: {
      words: [
        { word: "organize", match: "organizes", def: "To put things in order.", ex: "I organize my books on a shelf." },
        { word: "mood", def: "How you feel at a certain time.", ex: "Sleep can change your mood." },
        { word: "recommend", def: "To say something is a good idea.", ex: "Doctors recommend drinking water." },
        { word: "habit", match: "habits", def: "Something you do often, usually without thinking.", ex: "Reading every night is a good habit." }
      ],
      predict: "How do you feel at school after a short night of sleep?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Sleep is important for learning, mood, and safety.", null],
          ["Teenagers should play more sports.", "Sports are mentioned only as an example of danger."],
          ["Phones are bad for teenagers.", "Phones are one small tip, not the main idea."],
          ["Scientists do not agree about how much sleep we need.", "The passage does not describe any disagreement."]
        ],
        hint: "Each paragraph gives a different reason or tip about the same topic.",
        exp: "The passage explains how sleep affects memory, mood, and reaction time, and it gives tips for better sleep.",
        ev: "Without enough sleep, it is harder to remember new information."
      },
      {
        skill: "Supporting details",
        q: "According to scientists, what does the brain do during sleep?",
        opts: [
          ["It organizes what we learned during the day.", null],
          ["It stops working completely.", "The passage says the brain is busy organizing."],
          ["It forgets most of what happened during the day.", "The passage says the opposite: the brain organizes what we learned."],
          ["It makes us angry.", "Anger comes from NOT sleeping enough."]
        ],
        hint: "Find the word “scientists”.",
        exp: "Scientists say sleep is when the brain organizes what we learned during the day.",
        ev: "sleep is when the brain organizes what we learned during the day"
      },
      {
        skill: "Cause and effect",
        q: "What is one effect of not getting enough sleep?",
        opts: [
          ["Feeling stressed or getting angry quickly", null],
          ["Remembering new information more easily than usual", "The passage says it is HARDER to remember."],
          ["Faster reaction time", "Reaction time becomes slower."],
          ["Having more energy in class", "Tired students do not have more energy."]
        ],
        hint: "Read paragraph 2.",
        exp: "Tired students are more likely to feel stressed or get angry quickly.",
        ev: "Tired students are more likely to feel stressed or get angry quickly."
      },
      {
        skill: "Supporting details",
        q: "How many hours of sleep do doctors recommend for teenagers?",
        opts: [
          ["Eight to ten hours", null],
          ["Five to six hours", "That is much less than the doctors recommend."],
          ["Six to seven hours", "Check the numbers in the last paragraph."],
          ["Ten to twelve hours", "Check the numbers again. They are a little lower."]
        ],
        hint: "Find the word “recommend”.",
        exp: "Doctors recommend eight to ten hours of sleep each night for teenagers.",
        ev: "Doctors recommend that teenagers sleep eight to ten hours each night."
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 2, “lack of sleep” means…",
        opts: [
          ["not enough sleep", null],
          ["too much sleep", "The paragraph describes tired students, so they are not getting too much sleep."],
          ["a bad dream", "Dreams are not mentioned."],
          ["a comfortable bed", "A bed is not the meaning here."]
        ],
        hint: "Read the next sentence. What kind of students does it describe?",
        exp: "“Lack” means not having enough of something. The next sentence talks about tired students.",
        ev: "Tired students are more likely to feel stressed"
      }
    ]
  },
  {
    id: "r2-10",
    level: 2,
    title: "The Community Volunteer",
    category: "Society",
    topic: "Helping others",
    status: "retained",
    text: [
      "Every Saturday morning, Mr. Ibrahim, a retired teacher, volunteers at the neighborhood center. He teaches English to workers who want to improve their speaking. His students are often tired after a long week, so he keeps his lessons short and practical.",
      "In his classes, students practice useful phrases for shopping, asking for directions, and visiting a doctor. High school students sometimes help by practicing conversations with the workers in small groups.",
      "One of his students, Ravi, recently got a better job because he could speak with customers confidently. Mr. Ibrahim says that helping others gives his week meaning."
    ],
    before: {
      words: [
        { word: "retired", def: "No longer working, usually because of age.", ex: "My grandfather is a retired engineer." },
        { word: "volunteer", match: "volunteers", def: "To do useful work without being paid.", ex: "She volunteers at the hospital." },
        { word: "practical", def: "Useful in real life.", ex: "Cooking is a practical skill." },
        { word: "customers", def: "People who buy things or use a service.", ex: "The shop has many customers." }
      ],
      predict: "How can learning English help a worker in daily life?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the passage mainly about?",
        opts: [
          ["A retired teacher who teaches English to workers", null],
          ["A worker who wants to become an English teacher one day", "Ravi gets a better job, but he does not become a teacher."],
          ["How to visit a doctor", "Visiting a doctor is one topic in the lessons."],
          ["A high school English competition", "There is no competition in the passage."]
        ],
        hint: "Who is the passage mostly about, and what does he do?",
        exp: "The passage describes Mr. Ibrahim’s volunteer English classes for workers and their results.",
        ev: "He teaches English to workers who want to improve their speaking."
      },
      {
        skill: "Cause and effect",
        q: "Why does Mr. Ibrahim keep his lessons short and practical?",
        opts: [
          ["His students are often tired after a long week.", null],
          ["He does not have much free time on Saturday mornings.", "His own time is not the reason given. Look for the word “so”."],
          ["The center closes early.", "The center’s hours are not mentioned."],
          ["The workers already speak English well.", "They want to improve their speaking."]
        ],
        hint: "Look for the word “so” in paragraph 1.",
        exp: "His students are often tired after a long week, so he keeps lessons short and practical.",
        ev: "His students are often tired after a long week, so he keeps his lessons short and practical."
      },
      {
        skill: "Supporting details",
        q: "Which phrases do the students practice?",
        opts: [
          ["Phrases for shopping, directions, and visiting a doctor", null],
          ["Phrases for writing emails and business letters at work", "Emails and letters are not mentioned."],
          ["Phrases for job interviews only", "Job interviews are not mentioned."],
          ["Phrases for telling stories", "Stories are not mentioned."]
        ],
        hint: "Read the first sentence of paragraph 2.",
        exp: "Students practice useful phrases for shopping, asking for directions, and visiting a doctor.",
        ev: "students practice useful phrases for shopping, asking for directions, and visiting a doctor"
      },
      {
        skill: "Cause and effect",
        q: "Why did Ravi get a better job?",
        opts: [
          ["He could speak with customers confidently.", null],
          ["He moved to a new city.", "Moving is not mentioned."],
          ["Mr. Ibrahim gave him a job at the neighborhood center.", "Mr. Ibrahim teaches him. He does not employ him."],
          ["He finished university.", "University is not mentioned."]
        ],
        hint: "Look for the word “because” in the last paragraph.",
        exp: "Ravi got a better job because he could speak with customers confidently.",
        ev: "One of his students, Ravi, recently got a better job because he could speak with customers confidently."
      },
      {
        skill: "Vocabulary in context",
        q: "In the last paragraph, “confidently” means…",
        opts: [
          ["feeling sure and not afraid", null],
          ["very quietly, without looking at people", "Speaking quietly would not help with customers."],
          ["angrily", "Speaking angrily would not help him get a better job."],
          ["very slowly", "Speed is not the meaning here."]
        ],
        hint: "His speaking helped him get a better job. How did he feel when he spoke?",
        exp: "“Confidently” means in a way that shows you feel sure of yourself. This helped Ravi with customers.",
        ev: "he could speak with customers confidently"
      }
    ]
  }
]);
