/* =====================================================================
   NVS English Quest — Reading Library — LEVEL 1 PASSAGES  (Version 3D)
   ---------------------------------------------------------------------
   To add a passage, copy one passage block, paste it at the end of the list
   (before the final "]);"), and change its content.
   See HOW_TO_ADD_CONTENT.md for step-by-step instructions.

   FIELDS
   • id: unique, pattern r1-NN (e.g. r1-11). Never change an existing id.
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
    id: "r1a",
    level: 1,
    title: "A Busy Monday",
    category: "School Life",
    topic: "School life",
    status: "retained",
    text: [
      "Omar is in Grade 7. On Monday, he wakes up at six o’clock. He eats eggs and bread for breakfast. His father drives him to school. Omar’s first class is science. He likes science because his teacher shows them fun experiments. At lunch, Omar sits with his friend Khalid in the cafeteria. After school, Omar does his homework at the kitchen table."
    ],
    before: {
      words: [
        { word: "breakfast", def: "The first meal of the day.", ex: "I eat eggs for breakfast." },
        { word: "cafeteria", def: "A room at school where students eat.", ex: "We eat lunch in the cafeteria." },
        { word: "experiment", match: "experiments", def: "A test in science to learn something.", ex: "We did an experiment with water." }
      ],
      predict: "What do you think Omar does on a school day?"
    },
    questions: [
      {
        skill: "Finding details (when)",
        q: "What time does Omar wake up on Monday?",
        opts: [
          ["At six o’clock", null],
          ["At seven o’clock", "Seven o’clock is not in the passage. Look for the word “wakes”."],
          ["At five o’clock", "The passage does not say five. Find the sentence with “wakes up”."],
          ["At eight o’clock", "Eight o’clock would be too late for school. Read the second sentence again."]
        ],
        hint: "Look at the second sentence. Find the words “wakes up”.",
        exp: "The passage says Omar wakes up at six o’clock on Monday.",
        ev: "On Monday, he wakes up at six o’clock."
      },
      {
        skill: "Finding details (what)",
        q: "What does Omar eat for breakfast?",
        opts: [
          ["Eggs and bread", null],
          ["Eggs and juice", "Juice is not mentioned. Omar eats two foods. What is the second food?"],
          ["Bread and cheese", "Cheese is not in the passage. Check the word after “eats”."],
          ["Rice and eggs", "Rice is not in the passage. Look for the word “breakfast”."]
        ],
        hint: "Find the word “breakfast” in the passage.",
        exp: "The passage says, “He eats eggs and bread for breakfast.”",
        ev: "He eats eggs and bread for breakfast."
      },
      {
        skill: "Finding details (who)",
        q: "Who drives Omar to school?",
        opts: [
          ["His father", null],
          ["His mother", "His mother is not in the passage. Look for the word “drives”."],
          ["His friend Khalid", "Khalid is Omar’s friend at lunch. He does not drive Omar."],
          ["His science teacher", "The teacher shows experiments. The teacher does not drive Omar."]
        ],
        hint: "Find the word “drives”. Who is the person in that sentence?",
        exp: "The passage says, “His father drives him to school.”",
        ev: "His father drives him to school."
      },
      {
        skill: "Finding details (where)",
        q: "Where does Omar sit with Khalid at lunch?",
        opts: [
          ["In the cafeteria", null],
          ["In the science lab", "Omar has science in the morning, but he eats lunch in a different place."],
          ["In the library", "The library is not mentioned. Look for the word “lunch”."],
          ["At the kitchen table", "The kitchen table is where Omar does his homework after school."]
        ],
        hint: "Find the sentence that begins with “At lunch”.",
        exp: "The passage says Omar sits with his friend Khalid in the cafeteria at lunch.",
        ev: "At lunch, Omar sits with his friend Khalid in the cafeteria."
      },
      {
        skill: "Finding details (where)",
        q: "Where does Omar do his homework?",
        opts: [
          ["At the kitchen table", null],
          ["In his bedroom", "His bedroom is not mentioned. Read the last sentence."],
          ["In the cafeteria", "Omar eats lunch in the cafeteria. He does homework in a different place."],
          ["In the classroom", "Omar does homework after school, so he is not in the classroom."]
        ],
        hint: "Read the last sentence of the passage.",
        exp: "The last sentence says Omar does his homework at the kitchen table.",
        ev: "After school, Omar does his homework at the kitchen table."
      }
    ]
  },
  {
    id: "r1b",
    level: 1,
    title: "Sara’s Water Bottle",
    category: "Health",
    topic: "Healthy habits",
    status: "revised",
    revisionNote: "Shortened a 14-word sentence with “especially”; split the two results into short sentences.",
    text: [
      "Sara has a blue water bottle. She takes it to school every day. In the morning, she fills it with cold water. Her teacher says, “Drink water often.” This is very important on hot days. Sara drinks from her bottle between classes. She does not buy plastic bottles from the shop now. Now she saves money. She helps the environment too."
    ],
    before: {
      words: [
        { word: "bottle", def: "A container for drinks.", ex: "My bottle has cold water in it." },
        { word: "fill", match: "fills", def: "To put something in until it is full.", ex: "I fill my cup with milk." },
        { word: "environment", def: "The air, water, and land around us.", ex: "Plastic can hurt the environment." }
      ],
      predict: "Why do you think Sara uses her own water bottle?"
    },
    questions: [
      {
        skill: "Finding details (what)",
        q: "What color is Sara’s water bottle?",
        opts: [
          ["Blue", null],
          ["Green", "Green is not in the passage. Read the first sentence."],
          ["Red", "Red is not in the passage. Look at the first sentence."],
          ["Clear", "The passage gives a color for the bottle. Read the first sentence again."]
        ],
        hint: "The answer is in the first sentence.",
        exp: "The first sentence says, “Sara has a blue water bottle.”",
        ev: "Sara has a blue water bottle."
      },
      {
        skill: "Finding details (when)",
        q: "When does Sara fill her bottle?",
        opts: [
          ["In the morning", null],
          ["At lunch", "Lunch is not mentioned. Find the word “fills”."],
          ["After school", "The passage does not say “after school”. Look for the word “fills”."],
          ["At night", "Night is not mentioned. Read the third sentence."]
        ],
        hint: "Find the word “fills”. What time of day is in that sentence?",
        exp: "The passage says, “In the morning, she fills it with cold water.”",
        ev: "In the morning, she fills it with cold water."
      },
      {
        skill: "Finding details (who)",
        q: "Who says students should drink water often?",
        opts: [
          ["Sara’s teacher", null],
          ["Sara’s mother", "Sara’s mother is not in the passage. Find the word “says”."],
          ["A doctor", "A doctor is not mentioned. Look for the word “says”."],
          ["Sara’s friend", "Sara’s friend is not in the passage. Read the fourth sentence."]
        ],
        hint: "Find the word “says” in the passage.",
        exp: "The passage says, “Her teacher says, ‘Drink water often.’”",
        ev: "Her teacher says, “Drink water often.”"
      },
      {
        skill: "Finding details (what)",
        q: "What does Sara NOT buy from the shop anymore?",
        opts: [
          ["Plastic bottles", null],
          ["Snacks", "Snacks are not mentioned. Find the words “does not buy”."],
          ["Juice", "Juice is not in the passage. Look for the words “does not buy”."],
          ["Notebooks", "Notebooks are not in the passage. Read the sixth sentence."]
        ],
        hint: "Look for the words “does not buy”.",
        exp: "The passage says Sara does not buy plastic bottles from the shop now.",
        ev: "She does not buy plastic bottles from the shop now."
      },
      {
        skill: "Finding details (what)",
        q: "What are two good results of Sara’s new habit?",
        opts: [
          ["She saves money and helps the environment.", null],
          ["She gets better grades and makes new friends.", "Grades and friends are not mentioned. Read the last sentence."],
          ["She sleeps better and runs faster.", "Sleep and running are not in the passage. Read the last sentence."],
          ["She buys more bottles and drinks more juice.", "Sara stopped buying plastic bottles, and juice is not mentioned."]
        ],
        hint: "Read the last two sentences.",
        exp: "The last two sentences give two results: she saves money, and she helps the environment.",
        ev: "Now she saves money. She helps the environment too."
      }
    ]
  },
  {
    id: "r1-03",
    level: 1,
    title: "The New Student",
    category: "School Life",
    topic: "School life and friendship",
    status: "revised",
    revisionNote: "Removed the idiom “find his way around”; split a 15-word sentence.",
    text: [
      "A new student came to our class on Sunday. His name is Hassan. He is from Jeddah. At first, Hassan was quiet. He sat alone at break. I asked him to play basketball with us. He smiled and said yes. Now Hassan sits next to me in math. He helps me with numbers. I show him the rooms in our school."
    ],
    before: {
      words: [
        { word: "quiet", def: "Not talking much; not loud.", ex: "The new boy was quiet in class." },
        { word: "alone", def: "Without other people.", ex: "She ate lunch alone." },
        { word: "smile", match: "smiled", def: "To make a happy face.", ex: "He smiled at his friend." }
      ],
      predict: "How can you help a new student at your school?"
    },
    questions: [
      {
        skill: "Finding details",
        q: "Where is Hassan from?",
        opts: [
          ["Jeddah", null],
          ["Riyadh", "The writer’s school may be in Riyadh, but the passage says Hassan comes from a different city."],
          ["Dammam", "Dammam is not in the passage. Find the sentence that begins “He is from…”."],
          ["Makkah", "Makkah is not mentioned. Look at the first three sentences."]
        ],
        hint: "Look for the words “He is from”.",
        exp: "The passage says, “He is from Jeddah.”",
        ev: "He is from Jeddah."
      },
      {
        skill: "Finding details",
        q: "What did Hassan do at break before he made friends?",
        opts: [
          ["He sat alone.", null],
          ["He played basketball with everyone.", "He played basketball later, after the writer invited him."],
          ["He talked with the teacher.", "The teacher is not mentioned at break."],
          ["He read a book in the library.", "The library is not mentioned."]
        ],
        hint: "Find the sentence with the word “break”.",
        exp: "At first, Hassan was quiet and sat alone at break. This changed after the writer invited him to play.",
        ev: "He sat alone at break."
      },
      {
        skill: "Finding details",
        q: "Which game did the writer invite Hassan to play?",
        opts: [
          ["Basketball", null],
          ["Football", "Football is a popular game, but it is not the one in the passage."],
          ["Volleyball", "Volleyball is not mentioned."],
          ["Chess", "Chess is not mentioned."]
        ],
        hint: "Find the sentence that begins “I asked him…”.",
        exp: "The writer says, “I asked him to play basketball with us.”",
        ev: "I asked him to play basketball with us."
      },
      {
        skill: "Finding details",
        q: "In which class does Hassan sit next to the writer now?",
        opts: [
          ["Math", null],
          ["Science", "Science is not mentioned."],
          ["English", "English is not mentioned."],
          ["Art", "Art is not mentioned."]
        ],
        hint: "Look for the word “Now”.",
        exp: "The passage says, “Now Hassan sits next to me in math.”",
        ev: "Now Hassan sits next to me in math."
      },
      {
        skill: "Main idea",
        q: "What is the passage mostly about?",
        opts: [
          ["A new student who becomes the writer’s friend", null],
          ["A math test that the whole class found difficult", "Math is mentioned, but there is no test in the story."],
          ["A basketball match that the class won", "They play basketball together, but no match or winner is described."],
          ["A family trip to Jeddah", "Jeddah is where Hassan is from. Nobody takes a trip."]
        ],
        hint: "Think about the beginning and the end. How is Hassan different at the end?",
        exp: "The story begins with Hassan alone and ends with Hassan and the writer helping each other. It is about a new friendship.",
        ev: "He helps me with numbers. I show him the rooms in our school."
      }
    ]
  },
  {
    id: "r1-04",
    level: 1,
    title: "A Visit to the Library",
    category: "School Life",
    topic: "Reading habits",
    status: "retained",
    text: [
      "On Tuesday, Mona went to the city library with her sister. The library was big and quiet. Mona wanted a book about space. A kind librarian showed her where to look. Mona chose two books about planets. She can keep them for two weeks. At home, she read for thirty minutes before bed."
    ],
    before: {
      words: [
        { word: "library", def: "A place with many books you can read or borrow.", ex: "I go to the library on Tuesday." },
        { word: "librarian", def: "A person who works in a library.", ex: "The librarian helped me find a book." },
        { word: "planet", match: "planets", def: "A very big round object in space, like Earth.", ex: "Mars is a red planet." }
      ],
      predict: "What kind of book would you look for in a library?"
    },
    questions: [
      {
        skill: "Finding details",
        q: "Who went to the library with Mona?",
        opts: [
          ["Her sister", null],
          ["Her mother", "Her mother is not in the passage. Read the first sentence."],
          ["Her friend", "A friend is not mentioned."],
          ["Her teacher", "A teacher is not mentioned."]
        ],
        hint: "The answer is in the first sentence.",
        exp: "Mona went to the city library with her sister.",
        ev: "On Tuesday, Mona went to the city library with her sister."
      },
      {
        skill: "Finding details",
        q: "What kind of book did Mona want?",
        opts: [
          ["A book about space", null],
          ["A book about animals", "Animals are not mentioned."],
          ["A cookbook", "Cooking is not mentioned."],
          ["A book about football", "Football is not mentioned."]
        ],
        hint: "Find the word “wanted”.",
        exp: "The passage says, “Mona wanted a book about space.”",
        ev: "Mona wanted a book about space."
      },
      {
        skill: "Finding details",
        q: "Who helped Mona find the books?",
        opts: [
          ["A librarian", null],
          ["Her sister", "Her sister went with her, but the passage says someone else showed her where to look."],
          ["Another student", "No other student is mentioned."],
          ["Her father", "Her father is not in the passage."]
        ],
        hint: "Find the words “showed her where to look”.",
        exp: "A kind librarian showed Mona where to look.",
        ev: "A kind librarian showed her where to look."
      },
      {
        skill: "Finding details",
        q: "How long can Mona keep the books?",
        opts: [
          ["Two weeks", null],
          ["Two days", "Look at the number and the time word together. It is not days."],
          ["One month", "One month is not mentioned."],
          ["One week", "Check the number. It is more than one."]
        ],
        hint: "Find the words “keep them”.",
        exp: "The passage says, “She can keep them for two weeks.”",
        ev: "She can keep them for two weeks."
      },
      {
        skill: "Finding details",
        q: "When did Mona read at home?",
        opts: [
          ["Before bed", null],
          ["After lunch", "Lunch is not mentioned."],
          ["In the morning", "The morning is not mentioned. Read the last sentence."],
          ["On the bus", "A bus is not mentioned."]
        ],
        hint: "Read the last sentence.",
        exp: "At home, Mona read for thirty minutes before bed.",
        ev: "At home, she read for thirty minutes before bed."
      }
    ]
  },
  {
    id: "r1-05",
    level: 1,
    title: "My Weekend Plan",
    category: "Personal Development",
    topic: "Everyday activities",
    status: "retained",
    text: [
      "This weekend, I have a plan. On Friday morning, I will clean my room. In the afternoon, I will visit my grandmother with my family. On Saturday, I will finish my English homework first. Then I will play video games for one hour. In the evening, I will go to the park with my cousins."
    ],
    before: {
      words: [
        { word: "plan", def: "Something you decide to do later.", ex: "My plan is to study on Saturday." },
        { word: "visit", def: "To go and see a person or place.", ex: "We visit my uncle on Fridays." },
        { word: "cousin", match: "cousins", def: "The child of your aunt or uncle.", ex: "My cousin lives in Dammam." }
      ],
      predict: "What do you usually do at the weekend?"
    },
    questions: [
      {
        skill: "Finding details",
        q: "What will the writer do on Friday morning?",
        opts: [
          ["Clean the bedroom", null],
          ["Visit grandmother", "The visit is on Friday afternoon, not in the morning."],
          ["Do English homework", "Homework is on Saturday."],
          ["Go to the park", "The park is on Saturday evening."]
        ],
        hint: "Find the words “Friday morning”.",
        exp: "The writer says, “On Friday morning, I will clean my room.”",
        ev: "On Friday morning, I will clean my room."
      },
      {
        skill: "Finding details",
        q: "Who will the writer visit on Friday afternoon?",
        opts: [
          ["Grandmother", null],
          ["Cousins", "The writer will see the cousins on Saturday evening."],
          ["A teacher", "A teacher is not mentioned."],
          ["A friend", "A friend is not mentioned."]
        ],
        hint: "Find the word “afternoon”.",
        exp: "In the afternoon, the writer will visit grandmother with the family.",
        ev: "In the afternoon, I will visit my grandmother with my family."
      },
      {
        skill: "Sequencing",
        q: "On Saturday, what will the writer do FIRST?",
        opts: [
          ["Finish the English homework", null],
          ["Play video games", "Video games come after something else. Look for the word “Then”."],
          ["Go to the park", "The park is in the evening, at the end of the day."],
          ["Clean the room", "Cleaning is on Friday."]
        ],
        hint: "Look for the word “first” in the Saturday sentences.",
        exp: "The writer will finish the English homework first, then play video games, then go to the park.",
        ev: "On Saturday, I will finish my English homework first."
      },
      {
        skill: "Finding details",
        q: "How long will the writer play video games?",
        opts: [
          ["One hour", null],
          ["Two hours", "Two hours is too long. Find the sentence with “video games” and read the number in it."],
          ["Thirty minutes", "Minutes are not mentioned."],
          ["All evening", "In the evening, the writer goes to the park."]
        ],
        hint: "Find the words “video games”.",
        exp: "The writer will play video games for one hour.",
        ev: "Then I will play video games for one hour."
      },
      {
        skill: "Finding details",
        q: "Where will the writer go on Saturday evening?",
        opts: [
          ["To the park", null],
          ["To grandmother’s house", "That visit is on Friday afternoon."],
          ["To the library", "The library is not mentioned."],
          ["To the shopping mall", "A mall is not mentioned."]
        ],
        hint: "Read the last sentence.",
        exp: "In the evening, the writer will go to the park with the cousins.",
        ev: "In the evening, I will go to the park with my cousins."
      }
    ]
  },
  {
    id: "r1-06",
    level: 1,
    title: "The School Bus",
    category: "School Life",
    topic: "Daily routines",
    status: "revised",
    revisionNote: "Split a 17-word sentence and a sentence with an appositive (“The driver, Mr. Nasser, …”).",
    text: [
      "Every morning, the school bus stops near Ali’s house at 6:30. The driver is Mr. Nasser. He always says good morning. Ali sits by the window. The ride takes twenty minutes. On the way, Ali reviews his spelling words. One day, the bus was late because of heavy traffic. So Ali’s mother drove him to school."
    ],
    before: {
      words: [
        { word: "driver", def: "A person who drives a car or bus.", ex: "The bus driver is kind." },
        { word: "review", match: "reviews", def: "To study something again.", ex: "I review my notes before a test." },
        { word: "traffic", def: "Many cars on the road at the same time.", ex: "There is a lot of traffic in the morning." }
      ],
      predict: "What can happen when there is a lot of traffic in the morning?"
    },
    questions: [
      {
        skill: "Finding details",
        q: "What time does the bus stop near Ali’s house?",
        opts: [
          ["At 6:30", null],
          ["At 7:30", "Check the time in the first sentence."],
          ["At 6:00", "Look at the minutes in the first sentence."],
          ["At 7:00", "The time is earlier than seven."]
        ],
        hint: "The time is in the first sentence.",
        exp: "The bus stops near Ali’s house at 6:30 every morning.",
        ev: "Every morning, the school bus stops near Ali’s house at 6:30."
      },
      {
        skill: "Finding details",
        q: "Who is Mr. Nasser?",
        opts: [
          ["The bus driver", null],
          ["Ali’s teacher", "A teacher is not mentioned in the passage."],
          ["Ali’s father", "Ali’s mother is mentioned, but not his father."],
          ["The school principal", "The principal is not mentioned."]
        ],
        hint: "Find the sentence with his name.",
        exp: "The passage says, “The driver is Mr. Nasser.”",
        ev: "The driver is Mr. Nasser."
      },
      {
        skill: "Finding details",
        q: "How long does the bus ride take?",
        opts: [
          ["Twenty minutes", null],
          ["Ten minutes", "Ten minutes is not in the passage. Find the sentence that begins “The ride takes”."],
          ["Thirty minutes", "Thirty is close to 6:30, but the ride is a different number."],
          ["One hour", "One hour is not mentioned."]
        ],
        hint: "Find the word “ride”.",
        exp: "The passage says, “The ride takes twenty minutes.”",
        ev: "The ride takes twenty minutes."
      },
      {
        skill: "Finding details",
        q: "What does Ali do on the way to school?",
        opts: [
          ["He reviews his spelling words.", null],
          ["He sleeps.", "Sleeping is not mentioned."],
          ["He eats breakfast.", "Breakfast is not mentioned."],
          ["He talks to the driver.", "The driver says good morning, but Ali does something else on the way."]
        ],
        hint: "Find the words “On the way”.",
        exp: "On the way, Ali reviews his spelling words.",
        ev: "On the way, Ali reviews his spelling words."
      },
      {
        skill: "Cause and effect",
        q: "Why was the bus late one day?",
        opts: [
          ["There was heavy traffic.", null],
          ["The driver was sick.", "The passage does not say the driver was sick."],
          ["Ali woke up late.", "Ali was not the reason. Look for the word “because”."],
          ["It was raining.", "Rain is not mentioned."]
        ],
        hint: "Look for the word “because”.",
        exp: "The bus was late because of heavy traffic. As a result, Ali’s mother drove him.",
        ev: "One day, the bus was late because of heavy traffic."
      }
    ]
  },
  {
    id: "r1-07",
    level: 1,
    title: "A Healthy Breakfast",
    category: "Health",
    topic: "Healthy choices",
    status: "retained",
    text: [
      "Reem used to skip breakfast. She felt hungry and tired in her first lesson. Her mother made a new plan. Now Reem eats oats with milk and a banana every morning. Sometimes she has an egg too. She drinks water, not soda. Reem feels better now, and she can focus in class."
    ],
    before: {
      words: [
        { word: "plan", def: "An idea of what you will do.", ex: "We made a plan for the weekend." },
        { word: "oats", def: "A healthy grain food. People often eat it with milk.", ex: "I eat oats with milk and honey." },
        { word: "focus", def: "To give all your attention to something.", ex: "I focus on my teacher in class." }
      ],
      predict: "How do you feel at school when you do not eat breakfast?"
    },
    questions: [
      {
        skill: "Vocabulary in context",
        q: "“Reem used to skip breakfast.” What does “skip breakfast” mean?",
        opts: [
          ["Not eat breakfast", null],
          ["Cook breakfast", "The next sentence says she felt hungry. Would she be hungry if she cooked and ate?"],
          ["Eat a very big breakfast", "A big breakfast would not make her hungry in her first lesson."],
          ["Eat breakfast quickly", "Eating quickly is still eating. The clue is that she felt hungry."]
        ],
        hint: "Read the next sentence. How did Reem feel in her first lesson?",
        exp: "To “skip” a meal means not to eat it. The clue is that Reem felt hungry in her first lesson.",
        ev: "Reem used to skip breakfast. She felt hungry and tired in her first lesson."
      },
      {
        skill: "Finding details",
        q: "How did Reem feel in her first lesson before the new plan?",
        opts: [
          ["Hungry and tired", null],
          ["Happy and excited", "These are good feelings. The passage describes a problem."],
          ["Sick and cold", "Being sick or cold is not mentioned."],
          ["Bored and angry", "These feelings are not mentioned."]
        ],
        hint: "Look at the second sentence.",
        exp: "Reem felt hungry and tired in her first lesson.",
        ev: "She felt hungry and tired in her first lesson."
      },
      {
        skill: "Finding details",
        q: "Who made a new plan?",
        opts: [
          ["Reem’s mother", null],
          ["Reem’s teacher", "A teacher is not mentioned."],
          ["A doctor", "A doctor is not mentioned."],
          ["Reem’s friend", "A friend is not mentioned."]
        ],
        hint: "Find the words “new plan”.",
        exp: "Reem’s mother made a new plan.",
        ev: "Her mother made a new plan."
      },
      {
        skill: "Finding details",
        q: "What does Reem eat every morning now?",
        opts: [
          ["Oats with milk and a banana", null],
          ["An egg and bread", "Reem has an egg only sometimes, and bread is not mentioned."],
          ["Cake and juice", "Cake and juice are not mentioned."],
          ["Rice and chicken", "Rice and chicken are not mentioned."]
        ],
        hint: "Find the words “every morning”.",
        exp: "Now Reem eats oats with milk and a banana every morning. She has an egg only sometimes.",
        ev: "Now Reem eats oats with milk and a banana every morning."
      },
      {
        skill: "Finding details",
        q: "What does Reem drink?",
        opts: [
          ["Water", null],
          ["Soda", "The passage says she drinks water, NOT soda."],
          ["Tea", "Tea is not mentioned."],
          ["Orange juice", "Juice is not mentioned."]
        ],
        hint: "Find the word “drinks”.",
        exp: "The passage says, “She drinks water, not soda.”",
        ev: "She drinks water, not soda."
      }
    ]
  },
  {
    id: "r1-08",
    level: 1,
    title: "The Football Match",
    category: "Sports",
    topic: "Sports",
    status: "revised",
    revisionNote: "Replaced the score notation “0–1” at half time with plain words; shortened the first sentence.",
    text: [
      "On Thursday, our school team played football against Al-Fajr School. The match started at four o’clock. Many students came to watch. At half time, Al-Fajr had one goal. We had zero. In the second half, our captain, Saad, scored two goals. We won 2–1. After the match, the players shook hands with the other team."
    ],
    before: {
      words: [
        { word: "match", def: "A game between two teams.", ex: "We watched a football match." },
        { word: "captain", def: "The leader of a team.", ex: "Saad is the team captain." },
        { word: "goal", def: "A point in football when the ball goes into the net.", ex: "He scored a goal." }
      ],
      predict: "What do good players do at the end of a match?"
    },
    questions: [
      {
        skill: "Finding details",
        q: "Which school did our team play against?",
        opts: [
          ["Al-Fajr School", null],
          ["Al-Noor School", "Al-Noor is not in this passage. Read the first sentence."],
          ["A team from Jeddah", "Jeddah is not mentioned."],
          ["The teachers’ team", "Teachers are not mentioned."]
        ],
        hint: "Find the word “against”.",
        exp: "Our school team played against Al-Fajr School.",
        ev: "On Thursday, our school team played football against Al-Fajr School."
      },
      {
        skill: "Finding details",
        q: "What time did the match start?",
        opts: [
          ["At four o’clock", null],
          ["At two o’clock", "Two is the number of goals Saad scored, not the time."],
          ["At five o’clock", "Five o’clock is not the start time. Find the sentence with the word “started”."],
          ["At one o’clock", "One is part of the score, not the time."]
        ],
        hint: "Find the word “started”.",
        exp: "The match started at four o’clock.",
        ev: "The match started at four o’clock."
      },
      {
        skill: "Finding details",
        q: "What was the score at half time?",
        opts: [
          ["Our team was losing 0–1.", null],
          ["Our team was winning 1–0.", "Look carefully: “our” team had zero goals at half time."],
          ["Our team was winning 2–1.", "2–1 was the final score, not the half-time score."],
          ["The score was 0–0.", "One team had already scored at half time."]
        ],
        hint: "Find the words “half time”.",
        exp: "At half time, Al-Fajr had one goal and our team had zero, so our team was losing 0–1. Then Saad scored two goals.",
        ev: "At half time, Al-Fajr had one goal. We had zero."
      },
      {
        skill: "Finding details",
        q: "Who scored two goals?",
        opts: [
          ["Saad, the captain", null],
          ["The goalkeeper", "The goalkeeper is not mentioned."],
          ["A player from Al-Fajr", "Al-Fajr scored one goal. The two goals were scored by our team."],
          ["The coach", "Coaches do not play in the match."]
        ],
        hint: "Find the word “captain”.",
        exp: "Our captain, Saad, scored two goals in the second half.",
        ev: "In the second half, our captain, Saad, scored two goals."
      },
      {
        skill: "Sequencing",
        q: "What happened AFTER the match?",
        opts: [
          ["The players shook hands with the other team.", null],
          ["Saad scored two goals.", "Saad scored during the second half, before the match ended."],
          ["Many students came to watch.", "Students came at the beginning."],
          ["The score was 0–1.", "That was at half time."]
        ],
        hint: "Find the words “After the match”.",
        exp: "After the match, the players shook hands with the other team.",
        ev: "After the match, the players shook hands with the other team."
      }
    ]
  },
  {
    id: "r1-09",
    level: 1,
    title: "A Message from My Teacher",
    category: "School Life",
    topic: "School communication",
    status: "retained",
    text: [
      "Dear students, our class trip to the science museum is next Wednesday. The bus will leave school at eight o’clock. Please wear your school uniform and bring a packed lunch. You do not need money. Give the signed permission form to me by Monday. See you soon! Ms. Dalia"
    ],
    before: {
      words: [
        { word: "trip", def: "A short visit to a place.", ex: "Our class trip is to the zoo." },
        { word: "uniform", def: "Special clothes that all students wear.", ex: "I wear my school uniform every day." },
        { word: "permission", def: "When someone says you can do something.", ex: "My father gave me permission to go." }
      ],
      predict: "What information does a teacher give before a class trip?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "Why did Ms. Dalia write this message?",
        opts: [
          ["To give details about a class trip", null],
          ["To tell students about a test", "A test is not mentioned."],
          ["To invite parents to a meeting", "The message is to students, and there is no meeting."],
          ["To thank students for a project", "There is no project in the message."]
        ],
        hint: "What is the first sentence about? The rest of the message gives details about the same thing.",
        exp: "Every sentence gives information about the class trip: where, when, what to wear, what to bring, and the form.",
        ev: "Dear students, our class trip to the science museum is next Wednesday."
      },
      {
        skill: "Finding details",
        q: "Where are the students going?",
        opts: [
          ["To the science museum", null],
          ["To the zoo", "The zoo is not mentioned."],
          ["To the park", "The park is not mentioned."],
          ["To the library", "The library is not mentioned."]
        ],
        hint: "Read the first sentence.",
        exp: "The class trip is to the science museum.",
        ev: "our class trip to the science museum is next Wednesday"
      },
      {
        skill: "Finding details",
        q: "What should students wear?",
        opts: [
          ["Their school uniform", null],
          ["Sports clothes", "Sports clothes are not mentioned."],
          ["Any clothes they like", "The teacher asks for something specific."],
          ["A warm jacket", "A jacket is not mentioned."]
        ],
        hint: "Find the word “wear”.",
        exp: "Ms. Dalia asks students to wear their school uniform.",
        ev: "Please wear your school uniform and bring a packed lunch."
      },
      {
        skill: "Finding details",
        q: "What do students NOT need to bring?",
        opts: [
          ["Money", null],
          ["A packed lunch", "Students SHOULD bring a packed lunch."],
          ["The permission form", "Students must give the form by Monday."],
          ["Their uniform", "Students should wear their uniform."]
        ],
        hint: "Look for the words “do not need”.",
        exp: "The message says, “You do not need money.”",
        ev: "You do not need money."
      },
      {
        skill: "Finding details",
        q: "When must students give the permission form to Ms. Dalia?",
        opts: [
          ["By Monday", null],
          ["On Wednesday", "Wednesday is the day of the trip."],
          ["At eight o’clock", "Eight o’clock is when the bus leaves."],
          ["By Friday", "Friday is not mentioned."]
        ],
        hint: "Find the words “permission form”.",
        exp: "Students must give the signed permission form by Monday.",
        ev: "Give the signed permission form to me by Monday."
      }
    ]
  },
  {
    id: "r1-10",
    level: 1,
    title: "Saving Water at Home",
    category: "Environment",
    topic: "Environmental responsibility",
    status: "retained",
    text: [
      "Water is very important in Saudi Arabia because we have little rain. My family wants to save water. We turn off the tap when we brush our teeth. We take short showers, not long baths. My father fixed a dripping tap in the kitchen. We also water our plants in the evening, when it is cooler."
    ],
    before: {
      words: [
        { word: "save", def: "To use less of something so it does not run out.", ex: "We save water at home." },
        { word: "tap", def: "The thing you turn to get water.", ex: "Turn off the tap." },
        { word: "dripping", def: "Letting small drops of water fall.", ex: "The dripping tap wastes water." }
      ],
      predict: "How can a family use less water at home?"
    },
    questions: [
      {
        skill: "Cause and effect",
        q: "Why is water very important in Saudi Arabia, according to the passage?",
        opts: [
          ["There is little rain.", null],
          ["Many people like to swim.", "Swimming is not mentioned."],
          ["Water is very cheap.", "The price of water is not mentioned."],
          ["There are many plants.", "Plants are mentioned later, but they are not the reason."]
        ],
        hint: "Look for the word “because” in the first sentence.",
        exp: "The first sentence says water is important “because we have little rain.”",
        ev: "Water is very important in Saudi Arabia because we have little rain."
      },
      {
        skill: "Finding details",
        q: "What does the family do when they brush their teeth?",
        opts: [
          ["They turn off the tap.", null],
          ["They take a short shower.", "Short showers are a different way they save water."],
          ["They brush very quickly.", "Brushing quickly is not mentioned. Find the words “brush our teeth”."],
          ["They leave the water running.", "This would waste water. The family wants to save water."]
        ],
        hint: "Find the words “brush our teeth”.",
        exp: "The family turns off the tap when they brush their teeth.",
        ev: "We turn off the tap when we brush our teeth."
      },
      {
        skill: "Finding details",
        q: "Who fixed the dripping tap?",
        opts: [
          ["The writer’s father", null],
          ["The writer", "The writer tells us who fixed it. It was someone else."],
          ["The writer’s mother", "The mother is not mentioned."],
          ["A plumber", "A plumber is not mentioned."]
        ],
        hint: "Find the word “fixed”.",
        exp: "The passage says, “My father fixed a dripping tap in the kitchen.”",
        ev: "My father fixed a dripping tap in the kitchen."
      },
      {
        skill: "Finding details",
        q: "Where was the dripping tap?",
        opts: [
          ["In the kitchen", null],
          ["In the bathroom", "The bathroom is not mentioned. Read the sentence about the tap again."],
          ["In the garden", "The garden is not mentioned."],
          ["In the bedroom", "The bedroom is not mentioned."]
        ],
        hint: "Find the word “dripping”.",
        exp: "The dripping tap was in the kitchen.",
        ev: "My father fixed a dripping tap in the kitchen."
      },
      {
        skill: "Finding details",
        q: "When does the family water the plants?",
        opts: [
          ["In the evening", null],
          ["In the morning", "The morning is not mentioned."],
          ["At noon", "Noon is the hottest time. The family chooses a cooler time."],
          ["At night", "Night is not mentioned. Read the last sentence."]
        ],
        hint: "Read the last sentence.",
        exp: "The family waters the plants in the evening, when it is cooler.",
        ev: "We also water our plants in the evening, when it is cooler."
      }
    ]
  }
]);
