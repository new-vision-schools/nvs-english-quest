/* =====================================================================
   NVS English Quest — Vocabulary Lab content (Version 3D)
   20 sets × 5 questions. See HOW_TO_ADD_CONTENT.md to add a set.
   ---------------------------------------------------------------------
   • id: unique and NEVER changed (saved progress uses it). Next new id: v21.
   • order: the set number shown to students (1, 2, 3 …).
   • level: 1 = Foundation, 2 = Developing, 3 = Building, 4 = Advancing.
   • topic: used by the topic filter.
   • learn: the teaching step shown before practice.
   • questions: exactly 5. In each "opts" list, the FIRST option is correct.
     The app shuffles the order for students.
   ===================================================================== */
NVS_CONTENT.practiceLevels = [
  {
    n: 1,
    name: "Foundation"
  },
  {
    n: 2,
    name: "Developing"
  },
  {
    n: 3,
    name: "Building"
  },
  {
    n: 4,
    name: "Advancing"
  }
];
NVS_CONTENT.vocab = [
  {
    id: "v1",
    order: 1,
    level: 1,
    topic: "Everyday Actions",
    title: "Everyday Words",
    desc: "Common words you use at home, at school, and with friends.",
    learn: [
      {
        word: "borrow",
        def: "To take something and give it back later.",
        ex: "Can I borrow your pen? I will return it after class."
      },
      {
        word: "noisy",
        def: "Full of loud sounds.",
        ex: "The cafeteria is noisy at lunchtime."
      },
      {
        word: "begin",
        def: "To start.",
        ex: "The lesson will begin at 8:00."
      },
      {
        word: "arrive",
        def: "To come to a place.",
        ex: "We arrive at school at 7:15."
      },
      {
        word: "fasten",
        def: "To close or lock something so it is safe.",
        ex: "Please fasten your seatbelt."
      }
    ],
    questions: [
      {
        skill: "Word meaning",
        q: "What does the word “borrow” mean?",
        opts: [
          ["To take something and give it back later", null],
          ["To buy something from a shop and keep it forever", "When you buy something, you keep it. You do not give it back."],
          ["To throw something away", "Throwing away means you do not want it anymore."],
          ["To give something as a gift", "A gift is given to someone to keep, not to return."]
        ],
        hint: "Think: “Can I borrow your pen? I will return it after class.”",
        exp: "“Borrow” means to take something for a short time and then return it. Example: I borrowed a book from the library."
      },
      {
        skill: "Vocabulary in context",
        q: "Read: “The classroom was so noisy that I could not hear the teacher.” What does “noisy” mean?",
        opts: [
          ["Full of loud sounds", null],
          ["Very clean", "Being clean would not stop you from hearing the teacher."],
          ["Very dark", "Darkness affects seeing, not hearing."],
          ["Completely empty, with nobody inside", "An empty room would be quiet, so it would be easy to hear."]
        ],
        hint: "The clue is “I could not hear the teacher.” What stops you from hearing?",
        exp: "“Noisy” means full of loud sounds. The clue is that the student could not hear the teacher."
      },
      {
        skill: "Synonyms",
        q: "Which word is a synonym (same meaning) of “begin”?",
        opts: [
          ["start", null],
          ["finish", "“Finish” is the opposite of “begin”."],
          ["wait", "“Wait” means to stay until something happens. It is not the same as begin."],
          ["follow", "“Follow” means to go after someone or something."]
        ],
        hint: "“The lesson will begin at 8:00.” Which word could replace “begin”?",
        exp: "“Begin” and “start” have the same meaning: The lesson will start at 8:00."
      },
      {
        skill: "Antonyms",
        q: "Which word is an antonym (opposite) of “arrive”?",
        opts: [
          ["leave", null],
          ["come", "“Come” has a similar meaning to “arrive”, not the opposite."],
          ["reach", "“Reach” is close in meaning to “arrive”: We reached the school at 7:00."],
          ["enter", "“Enter” means to go into a place. It is not the opposite of arrive."]
        ],
        hint: "When you arrive, you come to a place. What do you do at the end of the day?",
        exp: "“Arrive” means to come to a place. “Leave” means to go away from a place. They are opposites."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Please ______ your seatbelt before the car starts.”",
        opts: [
          ["fasten", null],
          ["borrow", "You do not borrow your own seatbelt."],
          ["carry", "You do not carry a seatbelt. It stays in the car."],
          ["paint", "Painting a seatbelt does not make sense for safety."]
        ],
        hint: "This word means to close or lock something so it is safe.",
        exp: "We “fasten” a seatbelt, which means we close it so it holds us safely."
      }
    ]
  },
  {
    id: "v2",
    order: 2,
    level: 1,
    topic: "School and Classroom",
    title: "School and Study Words",
    desc: "Words that help you understand instructions and classwork.",
    learn: [
      {
        word: "deadline",
        def: "The last day or time to finish something.",
        ex: "The deadline for the project is Thursday."
      },
      {
        word: "revise",
        def: "To change something to make it better.",
        ex: "I revised my essay after reading the teacher’s comments."
      },
      {
        word: "assist",
        def: "To help.",
        ex: "The teacher will assist you with the experiment."
      },
      {
        word: "include",
        def: "To make something part of a group or list.",
        ex: "Please include your name on the paper."
      },
      {
        word: "look up",
        def: "To search for information, for example in a dictionary.",
        ex: "I look up new words in a dictionary."
      }
    ],
    questions: [
      {
        skill: "Word meaning",
        q: "What does “deadline” mean?",
        opts: [
          ["The last day or time to finish something", null],
          ["A very long line of students waiting outside", "The word has “line” in it, but it is about time, not a line of people."],
          ["A type of science test", "A deadline is not a test. It is a time limit."],
          ["A school holiday", "A holiday is a day off. A deadline is a day when work is due."]
        ],
        hint: "“The deadline for the project is Thursday.” What happens on Thursday?",
        exp: "A “deadline” is the latest time or date to finish something. Example: The deadline for the project is Thursday."
      },
      {
        skill: "Vocabulary in context",
        q: "Read: “Hassan revised his essay three times. He fixed spelling mistakes, changed weak words, and added examples.” What does “revised” mean?",
        opts: [
          ["Improved by making changes", null],
          ["Lost", "If Hassan lost his essay, he could not fix mistakes in it."],
          ["Printed", "Printing does not fix mistakes or add examples."],
          ["Read aloud to the whole class", "The sentence describes changes he made, not reading aloud."]
        ],
        hint: "Look at the second sentence. What did Hassan do to his essay?",
        exp: "“Revised” means changed something to make it better. The second sentence lists the changes: fixing spelling, changing words, and adding examples."
      },
      {
        skill: "Synonyms",
        q: "Which word is a synonym of “assist”?",
        opts: [
          ["help", null],
          ["stop", "“Stop” means to end an action. It does not mean assist."],
          ["ignore", "“Ignore” means to give no attention, which is almost the opposite of assist."],
          ["watch", "Watching someone is not the same as helping them."]
        ],
        hint: "“The teacher will assist you with the experiment.” What will the teacher do?",
        exp: "“Assist” and “help” have the same meaning: The teacher will help you with the experiment."
      },
      {
        skill: "Antonyms",
        q: "Which word is an antonym of “include”?",
        opts: [
          ["exclude", null],
          ["add", "“Add” is similar to include: Add your name to the list."],
          ["contain", "“Contain” is similar to include: The box contains books."],
          ["join", "“Join” means to become part of something, which is close to include."]
        ],
        hint: "“In” means inside and “ex” means outside. Look at the start of each word.",
        exp: "“Include” means to make something part of a group. “Exclude” means to leave something out. They are opposites."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “If you do not understand a word, you can ______ it in a dictionary.”",
        opts: [
          ["look up", null],
          ["give up", "“Give up” means to stop trying. It does not go with a dictionary."],
          ["turn on", "We turn on machines, like a light or a computer, not words."],
          ["wake up", "“Wake up” means to stop sleeping."]
        ],
        hint: "This phrasal verb means to search for information.",
        exp: "We “look up” a word in a dictionary. It means to search for information in a book or online."
      }
    ]
  },
  {
    id: "v4",
    order: 3,
    level: 1,
    topic: "Family and People",
    title: "Family and People",
    desc: "Words for the people in your life.",
    learn: [
      {
        word: "parents",
        def: "Your mother and your father.",
        ex: "My parents work in Riyadh."
      },
      {
        word: "relatives",
        def: "People in your family, like aunts, uncles, and cousins.",
        ex: "We visit our relatives during Eid."
      },
      {
        word: "neighbor",
        def: "A person who lives next to you or near you.",
        ex: "Our neighbor gave us dates from his farm."
      },
      {
        word: "twins",
        def: "Two children born to the same mother on the same day.",
        ex: "Sara and Lama are twins."
      },
      {
        word: "adult",
        def: "A grown-up person, not a child.",
        ex: "An adult must come with the children."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Ahmed lives with his parents. His mother is a teacher, and his father is an engineer.” What does “parents” mean?",
        opts: [
          ["A mother and a father", null],
          ["His brothers and sisters", "Brothers and sisters are siblings. The sentence talks about his mother and father."],
          ["Grandparents", "Grandparents are your parents’ parents. Look at who is named in the sentence."],
          ["Cousins", "Cousins are your aunt’s or uncle’s children. They are not named here."]
        ],
        hint: "Look at the second sentence. Which two people are named?",
        exp: "“Parents” means a mother and a father. The sentence names his mother and his father."
      },
      {
        skill: "Choosing the correct word",
        q: "Complete the sentence: “My aunts, uncles, and cousins are my ______.”",
        opts: [
          ["relatives", null],
          ["neighbors", "Neighbors live near you, but they are not always family."],
          ["classmates", "Classmates are students in your class, not family members."],
          ["teachers", "Teachers work at your school. They are not your aunts and uncles."]
        ],
        hint: "Which word means people in your family?",
        exp: "Aunts, uncles, and cousins are relatives: people in your family."
      },
      {
        skill: "Best word for a situation",
        q: "“The family that lives next door is not related to us, but they are very kind.” What are they?",
        opts: [
          ["Our neighbors", null],
          ["Our relatives", "The sentence says they are NOT related to us, so they are not relatives."],
          ["Our parents", "Parents are your mother and father, not the family next door."],
          ["Our twins", "Twins are two children born on the same day. This does not fit."]
        ],
        hint: "Where does this family live? Are they part of our family?",
        exp: "People who live next door or near you are your neighbors."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Sara and Lama were born on the same day to the same mother. They are ______.”",
        opts: [
          ["twins", null],
          ["cousins", "Cousins have different parents. Sara and Lama have the same mother."],
          ["neighbors", "They are sisters, not just people who live near each other."],
          ["adults", "The sentence is about how they were born, not their age."]
        ],
        hint: "Two children, same mother, same birthday.",
        exp: "Two children born to the same mother on the same day are twins."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “adult”?",
        opts: [
          ["child", null],
          ["parent", "A parent is usually an adult. It is not the opposite."],
          ["man", "A man is an adult. It is not the opposite."],
          ["person", "Both adults and children are people."]
        ],
        hint: "An adult is a grown-up. What is the opposite of a grown-up?",
        exp: "An adult is a grown-up person. The opposite is a child."
      }
    ]
  },
  {
    id: "v5",
    order: 4,
    level: 1,
    topic: "Time and Daily Routines",
    title: "Time and Daily Routines",
    desc: "Words to talk about your day and your week.",
    learn: [
      {
        word: "usually",
        def: "Most of the time.",
        ex: "I usually wake up at six o’clock."
      },
      {
        word: "early",
        def: "Before the usual or planned time.",
        ex: "I arrived early, so I waited for my friend."
      },
      {
        word: "late",
        def: "After the usual or planned time.",
        ex: "The bus was late because of traffic."
      },
      {
        word: "weekday",
        def: "A day of the school or work week (Sunday to Thursday in Saudi Arabia).",
        ex: "On weekdays, I go to bed at ten."
      },
      {
        word: "schedule",
        def: "A plan that shows times for activities.",
        ex: "My schedule shows math at 8:00."
      }
    ],
    questions: [
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “usually”?",
        opts: [
          ["normally", null],
          ["never", "“Never” means not at any time. “Usually” means most of the time."],
          ["rarely", "“Rarely” means not often. That is almost the opposite."],
          ["suddenly", "“Suddenly” means quickly and unexpectedly. It is not about how often."]
        ],
        hint: "“I usually walk to school” means I walk to school most days.",
        exp: "“Usually” and “normally” both mean most of the time."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “early”?",
        opts: [
          ["late", null],
          ["soon", "“Soon” means in a short time. It is not the opposite of early."],
          ["first", "“First” is about order. It is not the opposite of early."],
          ["quick", "“Quick” means fast. Early is about time, not speed."]
        ],
        hint: "If you are not early, and not on time, you are…",
        exp: "“Early” means before the planned time. “Late” means after the planned time."
      },
      {
        skill: "Meaning in context",
        q: "Read: “From Sunday to Thursday, I go to school. These are weekdays.” What is a weekday?",
        opts: [
          ["A school or work day", null],
          ["A holiday", "Holidays are days without school. The sentence says these are school days."],
          ["A day at the weekend, like Friday", "In Saudi Arabia, Friday and Saturday are the weekend. Weekdays are Sunday to Thursday."],
          ["A birthday", "A birthday is not connected to the days of the school week."]
        ],
        hint: "Which days does the sentence describe?",
        exp: "Weekdays are the days of the school or work week: Sunday to Thursday in Saudi Arabia."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “My ______ shows that I have math at 8:00 and English at 9:00.”",
        opts: [
          ["schedule", null],
          ["dictionary", "A dictionary gives meanings of words, not lesson times."],
          ["address", "An address shows where someone lives."],
          ["recipe", "A recipe shows how to cook something."]
        ],
        hint: "Which word means a plan with times for activities?",
        exp: "A schedule shows the times of your lessons and activities."
      },
      {
        skill: "Best word for a situation",
        q: "“Faisal arrived at school at 7:45. Class starts at 7:30.” How was Faisal?",
        opts: [
          ["late", null],
          ["early", "He arrived AFTER class started, so he was not early."],
          ["on time", "On time means at 7:30. He arrived at 7:45."],
          ["ready", "The question is about time. Arriving at 7:45 means he missed the start."]
        ],
        hint: "Compare 7:45 with 7:30. Which is later?",
        exp: "Faisal arrived 15 minutes after class started, so he was late."
      }
    ]
  },
  {
    id: "v6",
    order: 5,
    level: 1,
    topic: "Places and Directions",
    title: "Places and Directions",
    desc: "Words to ask for and give directions.",
    learn: [
      {
        word: "straight",
        def: "In a line, without turning.",
        ex: "Go straight for two minutes."
      },
      {
        word: "turn",
        def: "To change direction, to the left or right.",
        ex: "Turn left at the traffic lights."
      },
      {
        word: "opposite",
        def: "On the other side, facing something.",
        ex: "The mosque is opposite the school."
      },
      {
        word: "between",
        def: "In the space in the middle of two things.",
        ex: "The bank is between the pharmacy and the bakery."
      },
      {
        word: "corner",
        def: "The place where two streets meet.",
        ex: "The café is on the corner."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Go straight for two minutes. Do not turn.” What does “straight” mean?",
        opts: [
          ["In a line, without turning", null],
          ["Very quickly, without stopping", "Speed is not the meaning. The next sentence says “Do not turn.”"],
          ["Backwards", "Going backwards means going the other way. That is not the meaning."],
          ["Slowly", "“Straight” is about direction, not speed."]
        ],
        hint: "Read the second sentence: “Do not turn.”",
        exp: "“Straight” means in a line without turning. The clue is “Do not turn.”"
      },
      {
        skill: "Choosing the correct word",
        q: "“The bank is in the middle. The pharmacy is on its left, and the bakery is on its right.” Complete: “The bank is ______ the pharmacy and the bakery.”",
        opts: [
          ["between", null],
          ["opposite", "“Opposite” means across from something, facing it. The bank is in the middle."],
          ["under", "“Under” means below something. The buildings are side by side."],
          ["inside", "The bank is not inside the other buildings."]
        ],
        hint: "The bank is in the middle of two places.",
        exp: "“Between” means in the middle of two things."
      },
      {
        skill: "Best word for a situation",
        q: "“The school is on one side of the street. The mosque is on the other side, facing it.” Where is the mosque?",
        opts: [
          ["Opposite the school", null],
          ["Between the schools", "There is only one school. “Between” needs two things."],
          ["Next to the school, on the same side", "“Next to” means beside it on the same side. The mosque is across the street."],
          ["Behind the school", "“Behind” means at the back. The mosque is facing the school."]
        ],
        hint: "The mosque is on the other side of the street, facing the school.",
        exp: "When something is on the other side and facing another place, it is opposite it."
      },
      {
        skill: "Sentence completion",
        q: "Complete the directions: “At the traffic lights, ______ left. The library is there.”",
        opts: [
          ["turn", null],
          ["straight", "“Straight” means not turning, and “straight left” is not correct English."],
          ["between", "“Between” needs two places. It does not give a direction here."],
          ["opposite", "“Opposite left” does not make sense."]
        ],
        hint: "Which word means to change direction?",
        exp: "We say “turn left” or “turn right” to change direction."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The café is on the corner of King Fahd Road and Olaya Street.” What is a corner?",
        opts: [
          ["The place where two streets meet", null],
          ["The middle part of a long street", "Two streets are named in the sentence. Where do they meet?"],
          ["A parking area", "A parking area is a place for cars, not a meeting point of streets."],
          ["A road far from the city", "The sentence names two city streets."]
        ],
        hint: "Two streets are named. Think about where they touch.",
        exp: "A corner is the place where two streets meet."
      }
    ]
  },
  {
    id: "v7",
    order: 6,
    level: 2,
    topic: "Feelings and Emotions",
    title: "Feelings and Emotions",
    desc: "Words to describe how people feel.",
    learn: [
      {
        word: "proud",
        def: "Happy because you or someone else did something well.",
        ex: "My parents were proud of my grades."
      },
      {
        word: "nervous",
        def: "Worried and a little afraid.",
        ex: "I feel nervous before a speech."
      },
      {
        word: "disappointed",
        def: "Sad because something did not happen as you hoped.",
        ex: "I was disappointed when the match was canceled."
      },
      {
        word: "grateful",
        def: "Thankful.",
        ex: "I am grateful for my teacher’s help."
      },
      {
        word: "relieved",
        def: "Happy because a worry has ended.",
        ex: "I was relieved when I found my keys."
      }
    ],
    questions: [
      {
        skill: "Best word for a situation",
        q: "“Huda practiced for weeks and won first prize.” How do her parents probably feel?",
        opts: [
          ["proud", null],
          ["nervous", "Nervous means worried. The competition is over, and she won."],
          ["disappointed", "Disappointed means sad because something went wrong. She won first prize."],
          ["bored", "Winning first prize is exciting, not boring."]
        ],
        hint: "How do parents feel when their child does something very well?",
        exp: "People feel proud when someone they love does something well."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Before his speech, Omar’s hands were shaking. He was nervous.” What does “nervous” mean?",
        opts: [
          ["Worried and a little afraid", null],
          ["Very angry with the audience", "Shaking hands before a speech usually show worry, not anger."],
          ["Very sleepy", "Sleepy people are calm and tired. Omar’s hands were shaking."],
          ["Very happy", "Shaking hands before a speech is a sign of worry."]
        ],
        hint: "Why do some people’s hands shake before a speech?",
        exp: "“Nervous” means worried and a little afraid. The clue is his shaking hands."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “I was ______ when the trip was canceled. I really wanted to go.”",
        opts: [
          ["disappointed", null],
          ["grateful", "Grateful means thankful. You are not thankful when a trip you wanted is canceled."],
          ["relieved", "Relieved means happy that a worry ended. The speaker wanted to go."],
          ["proud", "Proud is about doing something well. It does not fit a canceled trip."]
        ],
        hint: "How do you feel when something you wanted does not happen?",
        exp: "We feel disappointed when something we hoped for does not happen."
      },
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “grateful”?",
        opts: [
          ["thankful", null],
          ["jealous", "Jealous means wanting what someone else has."],
          ["careless", "Careless means not careful."],
          ["tired", "Tired means needing rest."]
        ],
        hint: "When someone helps you, you say “thank you.” How do you feel?",
        exp: "“Grateful” and “thankful” have the same meaning."
      },
      {
        skill: "Best word for a situation",
        q: "“Maha thought she had lost her phone. Then she found it in her bag.” How did she feel?",
        opts: [
          ["relieved", null],
          ["disappointed", "She found her phone, so things went well, not badly."],
          ["nervous", "She WAS nervous before. After finding it, her worry ended."],
          ["proud", "Finding your own phone is not an achievement to feel proud of."]
        ],
        hint: "Her worry ended. Which word describes that feeling?",
        exp: "We feel relieved when a worry ends. Maha found her phone."
      }
    ]
  },
  {
    id: "v8",
    order: 7,
    level: 2,
    topic: "Health and Healthy Habits",
    title: "Health and Healthy Habits",
    desc: "Words about your body and staying healthy.",
    learn: [
      {
        word: "balanced",
        def: "Having the right amount of different things.",
        ex: "A balanced meal has vegetables, protein, and grains."
      },
      {
        word: "prevent",
        def: "To stop something from happening.",
        ex: "Washing your hands can prevent illness."
      },
      {
        word: "symptoms",
        def: "Signs that show you are ill.",
        ex: "A fever is a symptom of the flu."
      },
      {
        word: "injury",
        def: "Damage to the body, often from an accident.",
        ex: "He had a knee injury after the match."
      },
      {
        word: "exercise",
        def: "Physical activity to keep your body healthy.",
        ex: "I do thirty minutes of exercise every day."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “A balanced diet includes vegetables, protein, fruit, and grains.” What does “balanced” mean?",
        opts: [
          ["Having the right amount of different things", null],
          ["Having only one kind of food in every single meal", "The sentence lists four kinds of food, not one."],
          ["Very expensive", "Price is not mentioned in the sentence."],
          ["Very small", "Size is not the meaning. Look at the list of foods."]
        ],
        hint: "How many kinds of food are in the list?",
        exp: "A balanced diet has the right amount of different kinds of food."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Washing your hands can ______ illness.”",
        opts: [
          ["prevent", null],
          ["cause", "Washing hands does not cause illness. It does the opposite."],
          ["spread", "Spreading illness is what happens when people DON’T wash their hands."],
          ["increase", "Clean hands reduce illness. They do not increase it."]
        ],
        hint: "Clean hands help you stay healthy. What do they do to illness?",
        exp: "“Prevent” means to stop something from happening. Washing your hands helps stop illness."
      },
      {
        skill: "Meaning in context",
        q: "Read: “A fever and a sore throat are symptoms of the flu.” What are “symptoms”?",
        opts: [
          ["Signs that show you are ill", null],
          ["Medicines that doctors give for the flu", "A fever is not a medicine. It is something you feel when you are ill."],
          ["Doctors who treat the flu", "Symptoms are not people."],
          ["Exercises to stay healthy", "A fever is not an exercise."]
        ],
        hint: "A fever and a sore throat tell you something is wrong.",
        exp: "Symptoms are signs that show you are ill, like a fever or a sore throat."
      },
      {
        skill: "Best word for a situation",
        q: "“Yasser hurt his knee during football. He cannot play for two weeks.” What does Yasser have?",
        opts: [
          ["An injury", null],
          ["A diet", "A diet is the food you eat. It is not caused by football."],
          ["An exercise", "Exercise is physical activity, not damage to the body."],
          ["A habit", "A habit is something you do often. It is not a hurt knee."]
        ],
        hint: "He hurt part of his body in an accident.",
        exp: "An injury is damage to the body, often from an accident or sport."
      },
      {
        skill: "Synonyms",
        q: "Which phrase is closest in meaning to “exercise”?",
        opts: [
          ["physical activity", null],
          ["medicine from a doctor", "Medicine helps you when you are ill. Exercise is moving your body."],
          ["rest", "Rest is the opposite: stopping activity."],
          ["sleep", "Sleep is a kind of rest, not exercise."]
        ],
        hint: "Running, swimming, and playing football are examples.",
        exp: "Exercise means physical activity that keeps your body healthy."
      }
    ]
  },
  {
    id: "v9",
    order: 8,
    level: 2,
    topic: "Food and Shopping",
    title: "Food and Shopping",
    desc: "Words for cooking, food, and buying things.",
    learn: [
      {
        word: "ingredients",
        def: "The foods you use to make a dish.",
        ex: "Flour, eggs, and sugar are the ingredients for this cake."
      },
      {
        word: "discount",
        def: "A lower price than usual.",
        ex: "The shop has a 30% discount today."
      },
      {
        word: "receipt",
        def: "A paper that shows what you bought and paid.",
        ex: "Keep the receipt if you want to return something."
      },
      {
        word: "expensive",
        def: "Costing a lot of money.",
        ex: "This phone is too expensive for me."
      },
      {
        word: "fresh",
        def: "Recently made or picked; not old.",
        ex: "The bread is fresh. It was baked this morning."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Flour, eggs, and sugar are the ingredients for this cake.” What are “ingredients”?",
        opts: [
          ["The foods used to make a dish", null],
          ["The tools and machines used for cooking", "Flour and eggs are not tools. Tools are things like spoons and bowls."],
          ["The price of the cake", "The sentence lists foods, not a price."],
          ["The plates for serving", "Eggs and sugar are not plates."]
        ],
        hint: "Look at the list: flour, eggs, sugar. What are they used for?",
        exp: "Ingredients are the foods you use to make a dish."
      },
      {
        skill: "Best word for a situation",
        q: "“Yesterday the shirt cost 100 riyals. Today it costs 70 riyals.” What is the shop offering?",
        opts: [
          ["A discount", null],
          ["A receipt", "A receipt is the paper you get after you pay."],
          ["An ingredient", "Ingredients are foods for cooking."],
          ["A delivery", "Delivery means bringing things to your home. The price changed."]
        ],
        hint: "The price is lower than usual.",
        exp: "A discount is a lower price than usual."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Keep the ______. You need it if you want to return the shoes.”",
        opts: [
          ["receipt", null],
          ["discount", "A discount is a lower price. You cannot keep a discount to return shoes."],
          ["ingredient", "Ingredients are for cooking, not for returning shoes."],
          ["menu", "A menu shows food in a restaurant."]
        ],
        hint: "Which paper shows what you bought and paid?",
        exp: "A receipt shows what you bought. Shops usually ask for it when you return something."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “expensive”?",
        opts: [
          ["cheap", null],
          ["costly", "“Costly” means the same as expensive."],
          ["valuable", "“Valuable” means worth a lot. It is not the opposite."],
          ["fresh", "“Fresh” is about food being new, not about price."]
        ],
        hint: "Expensive things cost a lot. What do we call things that cost little?",
        exp: "“Expensive” means costing a lot. “Cheap” means costing a little."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The bread is fresh. It was baked this morning.” What does “fresh” mean?",
        opts: [
          ["Recently made", null],
          ["Old, hard, and dry", "The bread was baked this morning, so it is not old."],
          ["Frozen", "Frozen food is very cold. The sentence is about when it was made."],
          ["Expensive", "The sentence does not mention price."]
        ],
        hint: "Look at the second sentence. When was the bread baked?",
        exp: "“Fresh” means recently made. The clue is “baked this morning.”"
      }
    ]
  },
  {
    id: "v10",
    order: 9,
    level: 2,
    topic: "Travel and Transportation",
    title: "Travel and Transportation",
    desc: "Words for trips, airports, and getting around.",
    learn: [
      {
        word: "departure",
        def: "The time when a plane, train, or bus leaves.",
        ex: "Our departure time is 9:00 p.m."
      },
      {
        word: "passengers",
        def: "People who travel in a vehicle but do not drive it.",
        ex: "The bus has forty passengers."
      },
      {
        word: "luggage",
        def: "The bags you take on a trip.",
        ex: "Our luggage was very heavy."
      },
      {
        word: "delay",
        def: "A time when something happens later than planned.",
        ex: "There was a two-hour delay at the airport."
      },
      {
        word: "destination",
        def: "The place you are traveling to.",
        ex: "Our destination is AlUla."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “The flight’s departure time is 9:00 p.m., so we must leave home at 6:00.” What does “departure” mean?",
        opts: [
          ["The time a plane leaves", null],
          ["The time a plane arrives", "That is “arrival.” They leave home early so they will not miss the plane leaving."],
          ["The time a plane is cleaned", "Cleaning is not mentioned."],
          ["The price of the ticket", "The sentence gives a time, not a price."]
        ],
        hint: "They must leave home early. What happens at 9:00 p.m.?",
        exp: "“Departure” is the time a plane, train, or bus leaves."
      },
      {
        skill: "Best word for a situation",
        q: "What do we call the people who travel on a bus but do not drive it?",
        opts: [
          ["passengers", null],
          ["pilots", "Pilots fly planes."],
          ["drivers", "The question says these people do NOT drive."],
          ["mechanics", "Mechanics repair vehicles."]
        ],
        hint: "They ride on the bus but do not drive it.",
        exp: "Passengers are people who travel in a vehicle but do not drive it."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Our ______ was too heavy, so we paid extra at the airport.”",
        opts: [
          ["luggage", null],
          ["destination", "A destination is a place. It cannot be heavy."],
          ["departure", "A departure is a time. It cannot be heavy."],
          ["delay", "A delay is waiting time. It cannot be heavy."]
        ],
        hint: "What can be heavy at an airport?",
        exp: "Luggage means the bags you take on a trip. Airlines charge extra for heavy luggage."
      },
      {
        skill: "Synonyms",
        q: "Which phrase is closest in meaning to “delay”?",
        opts: [
          ["a late start", null],
          ["an early start", "This is the opposite. A delay means things happen later."],
          ["a short trip", "A delay is about time, not the length of a trip."],
          ["a ticket", "A ticket lets you travel. It is not a delay."]
        ],
        hint: "“There was a delay, so the plane left two hours late.”",
        exp: "A delay is when something starts or happens later than planned."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Our destination is AlUla. We will arrive there tomorrow.” What is a “destination”?",
        opts: [
          ["The place you are traveling to", null],
          ["The place where you start your trip", "You arrive at a destination. You do not start there."],
          ["A hotel room", "A destination can be a city, like AlUla, not only a hotel."],
          ["A type of car", "AlUla is a place, not a car."]
        ],
        hint: "Read the second sentence: “We will arrive there tomorrow.”",
        exp: "A destination is the place you are going to."
      }
    ]
  },
  {
    id: "v11",
    order: 10,
    level: 2,
    topic: "Technology and Communication",
    title: "Technology and Communication",
    desc: "Words for phones, computers, and the internet.",
    learn: [
      {
        word: "device",
        def: "A machine or tool made for a special job.",
        ex: "A tablet is a useful device for reading."
      },
      {
        word: "password",
        def: "Secret letters or numbers that protect an account.",
        ex: "Never share your password."
      },
      {
        word: "connection",
        def: "A link to the internet or to another device.",
        ex: "The internet connection is slow today."
      },
      {
        word: "download",
        def: "To copy a file or app from the internet to your device.",
        ex: "I download my homework from the school website."
      },
      {
        word: "update",
        def: "A newer version of software that fixes or improves it.",
        ex: "My phone needs an update."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Smartphones, tablets, and laptops are all devices.” What is a “device”?",
        opts: [
          ["A machine made for a special job", null],
          ["An app that you install on a phone", "Smartphones and laptops are machines, not apps."],
          ["A website", "A laptop is not a website."],
          ["A phone number", "A tablet is not a number."]
        ],
        hint: "Look at the examples: smartphones, tablets, laptops.",
        exp: "A device is a machine or tool made for a special purpose, like a phone or laptop."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Never share your ______ with anyone. It keeps your account safe.”",
        opts: [
          ["password", null],
          ["download", "A download is a file you copy. It does not keep your account safe."],
          ["connection", "A connection links you to the internet. It is not secret."],
          ["device", "A device is a machine. You can share it, but that is not the meaning here."]
        ],
        hint: "Which word is secret and protects your account?",
        exp: "A password is secret. It keeps your account safe."
      },
      {
        skill: "Best word for a situation",
        q: "“Ahmad’s video call keeps stopping, and the picture freezes.” What problem does he probably have?",
        opts: [
          ["A weak internet connection", null],
          ["A wrong password for his account", "A wrong password would stop him from logging in, not freeze a call that has started."],
          ["A new update", "An update is a newer version of software. It does not usually freeze calls."],
          ["A large download", "The problem is with the live call, not copying a file."]
        ],
        hint: "Video calls need a good link to the internet.",
        exp: "A weak internet connection makes calls stop and pictures freeze."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “download”?",
        opts: [
          ["upload", null],
          ["install", "To install is to put an app on your device. It often comes after a download."],
          ["save", "Saving keeps a file. It is not the opposite of downloading."],
          ["open", "Opening a file is not the opposite of downloading it."]
        ],
        hint: "Download = from the internet to your device. What is from your device to the internet?",
        exp: "To download is to copy from the internet to your device. To upload is to send from your device to the internet."
      },
      {
        skill: "Meaning in context",
        q: "Read: “My phone needs an update. The new version fixes some problems.” What is an “update”?",
        opts: [
          ["A newer version of software", null],
          ["A broken or cracked phone screen", "A broken screen is damage, not a new version."],
          ["A phone charger", "A charger gives power. It is not software."],
          ["A deleted app", "Deleting removes an app. An update improves it."]
        ],
        hint: "Read the second sentence: “The new version…”",
        exp: "An update is a newer version of software that fixes or improves it."
      }
    ]
  },
  {
    id: "v12",
    order: 11,
    level: 3,
    topic: "Education and Learning",
    title: "Education and Learning",
    desc: "Words about studying and learning.",
    learn: [
      {
        word: "curious",
        def: "Wanting to know or learn about something.",
        ex: "Lina is curious about space."
      },
      {
        word: "concentrate",
        def: "To give all your attention to something.",
        ex: "I can’t concentrate when the TV is on."
      },
      {
        word: "research",
        def: "Careful study to find information.",
        ex: "She did research for her science project."
      },
      {
        word: "achieve",
        def: "To succeed in reaching a goal.",
        ex: "If you study regularly, you can achieve your goals."
      },
      {
        word: "knowledge",
        def: "Information and understanding you have learned.",
        ex: "Reading gives us knowledge about the world."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Lina is curious about space. She always asks questions about planets and stars.” What does “curious” mean?",
        opts: [
          ["Wanting to know or learn more", null],
          ["Afraid of new and unknown things", "Afraid people avoid things. Lina asks questions to learn more."],
          ["Tired", "Tired people usually do not ask many questions."],
          ["Bored", "Bored people are not interested. Lina is very interested."]
        ],
        hint: "What does Lina always do?",
        exp: "“Curious” means wanting to know more. The clue is that she always asks questions."
      },
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “concentrate”?",
        opts: [
          ["focus", null],
          ["relax", "Relaxing is resting, not giving attention."],
          ["forget", "Forgetting is the opposite of paying attention."],
          ["hurry", "Hurrying means doing something fast."]
        ],
        hint: "“Please concentrate on the question” means give it all your attention.",
        exp: "“Concentrate” and “focus” both mean to give all your attention."
      },
      {
        skill: "Best word for a situation",
        q: "“To write her report, Noura read three articles and interviewed a scientist.” What did Noura do?",
        opts: [
          ["research", null],
          ["exercise", "Exercise is physical activity, not reading articles."],
          ["shopping", "She was not buying anything."],
          ["a puzzle", "She was finding information, not solving a game."]
        ],
        hint: "She looked carefully for information.",
        exp: "Research is careful study to find information, such as reading articles and interviewing experts."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “If you study regularly, you can ______ your goals.”",
        opts: [
          ["achieve", null],
          ["avoid", "Studying helps you reach goals, not avoid them."],
          ["forget", "Studying does not make you forget your goals."],
          ["lose", "You lose things by accident. Studying helps you succeed."]
        ],
        hint: "Which word means to succeed in reaching something?",
        exp: "To achieve a goal means to succeed in reaching it."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Books and teachers help us gain knowledge about history and science.” What is “knowledge”?",
        opts: [
          ["Information and understanding you learn", null],
          ["Money that you earn from working at a job", "Books and teachers help us learn, not earn money."],
          ["Physical strength", "Strength comes from exercise, not books."],
          ["Free time", "Free time is not something books give us."]
        ],
        hint: "What do we get from books and teachers?",
        exp: "Knowledge is the information and understanding you gain by learning."
      }
    ]
  },
  {
    id: "v13",
    order: 12,
    level: 3,
    topic: "Environment and Nature",
    title: "Environment and Nature",
    desc: "Words to talk about nature and protecting it.",
    learn: [
      {
        word: "pollution",
        def: "Making air, water, or land dirty and harmful.",
        ex: "Smoke from factories causes air pollution."
      },
      {
        word: "protect",
        def: "To keep something safe from harm.",
        ex: "We must protect rare animals."
      },
      {
        word: "species",
        def: "A group of animals or plants of the same kind.",
        ex: "The Arabian oryx is a desert species."
      },
      {
        word: "conserve",
        def: "To use carefully so it does not run out.",
        ex: "We conserve water by taking short showers."
      },
      {
        word: "desert",
        def: "A dry area with very little rain.",
        ex: "The Empty Quarter is a huge desert."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Smoke from cars and factories causes air pollution.” What is “pollution”?",
        opts: [
          ["Making air, water, or land dirty and harmful", null],
          ["Fresh, clean air in cities and in the countryside", "Smoke does not make air clean."],
          ["Rain", "Rain is weather, not something caused by smoke."],
          ["Traffic lights", "The sentence is about smoke, not traffic signals."]
        ],
        hint: "What does smoke do to the air?",
        exp: "Pollution means making the air, water, or land dirty and harmful."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “We must ______ endangered animals so they do not disappear.”",
        opts: [
          ["protect", null],
          ["hunt", "Hunting would make them disappear faster."],
          ["ignore", "Ignoring the problem will not save the animals."],
          ["sell", "Selling animals does not keep them safe."]
        ],
        hint: "The goal is to keep the animals safe.",
        exp: "To protect means to keep something safe from harm."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The Arabian oryx is a species that lives in desert areas.” What is a “species”?",
        opts: [
          ["A group of animals or plants of the same kind", null],
          ["A kind of food", "The oryx is an animal, not food in this sentence."],
          ["A type of weather", "Weather is about rain and sun, not animals."],
          ["A national park where wild animals are kept safe", "A park is a place. The oryx is an animal."]
        ],
        hint: "The oryx is one kind of animal.",
        exp: "A species is a group of animals or plants of the same kind."
      },
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “conserve” (as in “conserve water”)?",
        opts: [
          ["save", null],
          ["waste", "Wasting is the opposite of conserving."],
          ["spend", "Spending uses something up. Conserving keeps it."],
          ["damage", "Damaging harms something."]
        ],
        hint: "When you conserve water, you use less of it.",
        exp: "“Conserve” means to save or use carefully so it does not run out."
      },
      {
        skill: "Best word for a situation",
        q: "“This place gets very little rain, and it is covered with sand.” What kind of place is it?",
        opts: [
          ["A desert", null],
          ["A forest", "Forests have many trees and usually lots of rain."],
          ["An ocean", "An ocean is water, not sand."],
          ["An island", "An island is land surrounded by water. The clues are little rain and sand."]
        ],
        hint: "Very little rain + sand.",
        exp: "A desert is a dry area with very little rain, often covered with sand."
      }
    ]
  },
  {
    id: "v14",
    order: 13,
    level: 3,
    topic: "Jobs and Careers",
    title: "Jobs and Careers",
    desc: "Words for work and planning your future.",
    learn: [
      {
        word: "career",
        def: "The job or type of work you do for a long time.",
        ex: "Faisal wants a career in medicine."
      },
      {
        word: "apply",
        def: "To ask formally for a job or a place.",
        ex: "She applied for a job at the hospital."
      },
      {
        word: "interview",
        def: "A meeting where someone asks you questions, for example for a job.",
        ex: "My job interview is on Monday."
      },
      {
        word: "experience",
        def: "Knowledge and skill you get by doing something.",
        ex: "He has five years of experience as a teacher."
      },
      {
        word: "colleague",
        def: "A person you work with.",
        ex: "My colleague helped me finish the report."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Faisal wants a career in medicine. He hopes to work as a doctor for many years.” What is a “career”?",
        opts: [
          ["The work you do for a long part of your life", null],
          ["A short holiday", "A holiday is time away from work."],
          ["A school subject that you study for a final exam", "Medicine can be studied, but a career is the work you do later."],
          ["A hobby", "A hobby is something you do for fun in your free time."]
        ],
        hint: "Read the second sentence: “for many years.”",
        exp: "A career is the job or type of work you do for a long time."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “To get the job, you must ______ online before Sunday.”",
        opts: [
          ["apply", null],
          ["retire", "To retire is to stop working, usually because of age."],
          ["relax", "Relaxing will not get you a job."],
          ["borrow", "You borrow things, not jobs."]
        ],
        hint: "Which word means to ask formally for a job?",
        exp: "To apply means to ask formally for a job or a place, often by filling in a form."
      },
      {
        skill: "Best word for a situation",
        q: "“The company asked Reem to come and answer questions about herself before they chose her for the job.” What is this?",
        opts: [
          ["An interview", null],
          ["A monthly salary", "A salary is the money you earn."],
          ["A colleague", "A colleague is a person you work with."],
          ["A holiday", "A holiday is time off work."]
        ],
        hint: "A meeting where someone asks you questions.",
        exp: "An interview is a meeting where you answer questions, for example to get a job."
      },
      {
        skill: "Meaning in context",
        q: "Read: “She has five years of experience as an engineer, so she knows how to solve difficult problems.” What does “experience” mean?",
        opts: [
          ["Knowledge and skill from doing something", null],
          ["A university certificate on her office wall", "A certificate is a document. Experience comes from years of doing the job."],
          ["The money she earns", "Money is a salary, not experience."],
          ["The building where she works", "Experience is not a place."]
        ],
        hint: "She has done the job for five years. What does she have now?",
        exp: "Experience is the knowledge and skill you get from doing something over time."
      },
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “colleague”?",
        opts: [
          ["co-worker", null],
          ["customer", "A customer buys from a company. A colleague works with you."],
          ["stranger", "A stranger is someone you do not know."],
          ["neighbor", "A neighbor lives near you."]
        ],
        hint: "A colleague is someone you work with.",
        exp: "A colleague is a co-worker: a person who works with you."
      }
    ]
  },
  {
    id: "v15",
    order: 14,
    level: 3,
    topic: "Problem Solving and Decisions",
    title: "Problem Solving and Decisions",
    desc: "Words to talk about problems, choices, and results.",
    learn: [
      {
        word: "solution",
        def: "A way to solve a problem.",
        ex: "One solution to traffic is more buses."
      },
      {
        word: "option",
        def: "A choice.",
        ex: "We have two options: walk or take a taxi."
      },
      {
        word: "consequence",
        def: "A result of an action.",
        ex: "A low grade can be a consequence of not studying."
      },
      {
        word: "consider",
        def: "To think carefully about something.",
        ex: "Consider all the results before you decide."
      },
      {
        word: "effective",
        def: "Working well; producing the result you want.",
        ex: "Short study sessions are effective."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Traffic is a big problem in the city. One solution is more public buses.” What is a “solution”?",
        opts: [
          ["A way to solve a problem", null],
          ["The main cause of a problem", "Buses are not the cause of traffic. They help reduce it."],
          ["A difficult question", "A solution answers a problem. It is not a question."],
          ["A mistake", "More buses are presented as a good idea, not a mistake."]
        ],
        hint: "The first sentence names a problem. What does the second sentence offer?",
        exp: "A solution is a way to solve a problem."
      },
      {
        skill: "Synonyms",
        q: "Which word is closest in meaning to “option”?",
        opts: [
          ["choice", null],
          ["problem", "A problem is something difficult. An option is something you can choose."],
          ["reason", "A reason explains why. It is not a choice."],
          ["result", "A result comes after an action."]
        ],
        hint: "“You have two options: walk or take the bus.”",
        exp: "An option is a choice."
      },
      {
        skill: "Meaning in context",
        q: "Read: “If you do not study, one consequence may be a low grade.” What is a “consequence”?",
        opts: [
          ["A result of an action", null],
          ["A reason for an action", "A low grade is not the reason for not studying. It comes after."],
          ["A plan", "A plan is made before you act."],
          ["A choice", "The low grade is not chosen. It happens because of an action."]
        ],
        hint: "What happens AFTER you do not study?",
        exp: "A consequence is a result of an action."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Before you decide, ______ all the possible results.”",
        opts: [
          ["consider", null],
          ["ignore", "Ignoring results would lead to bad decisions."],
          ["forget", "Forgetting results does not help you decide."],
          ["repeat", "Repeating results makes no sense here."]
        ],
        hint: "Which word means to think carefully about something?",
        exp: "To consider means to think carefully about something before deciding."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “effective”?",
        opts: [
          ["useless", null],
          ["successful", "Successful is close in meaning to effective."],
          ["helpful", "Helpful is close in meaning to effective."],
          ["powerful", "Powerful is not the opposite of effective."]
        ],
        hint: "Effective means it works well. What is the opposite?",
        exp: "“Effective” means working well. “Useless” means not working or not helpful."
      }
    ]
  },
  {
    id: "v16",
    order: 15,
    level: 3,
    topic: "Describing People and Situations",
    title: "Describing People and Situations",
    desc: "Adjectives to describe people, places, and situations.",
    learn: [
      {
        word: "generous",
        def: "Happy to give things or time to others.",
        ex: "Ali is generous; he shares his food."
      },
      {
        word: "patient",
        def: "Able to wait calmly without getting upset.",
        ex: "The teacher was patient with us."
      },
      {
        word: "crowded",
        def: "Full of people.",
        ex: "The mall is crowded on Thursday evenings."
      },
      {
        word: "peaceful",
        def: "Quiet and calm.",
        ex: "The park is peaceful in the morning."
      },
      {
        word: "serious",
        def: "Important and possibly dangerous; not funny.",
        ex: "This is a serious problem."
      }
    ],
    questions: [
      {
        skill: "Best word for a situation",
        q: "“Ali gave half of his lunch to a classmate who forgot his food.” What is Ali like?",
        opts: [
          ["generous", null],
          ["patient", "Patient means waiting calmly. Ali shared his food."],
          ["serious", "Serious means not funny or very important. It does not describe sharing."],
          ["crowded", "Crowded describes places full of people, not a person."]
        ],
        hint: "Ali gave something to another person.",
        exp: "A generous person is happy to give things to others."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The teacher was patient. She explained the lesson again without getting angry.” What does “patient” mean?",
        opts: [
          ["Able to wait or repeat calmly without getting upset", null],
          ["Sick and staying in a hospital bed to get treatment", "This is a different meaning (a patient in hospital). The teacher is not sick."],
          ["Very quick", "Explaining again takes time. She was calm, not quick."],
          ["Very strict", "Strict teachers may get angry. This teacher did not."]
        ],
        hint: "Read the second sentence: “without getting angry.”",
        exp: "Here, “patient” means calm and not upset when things take time."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “crowded”?",
        opts: [
          ["empty", null],
          ["busy", "A busy place has many people, like a crowded place."],
          ["full", "Full is close in meaning to crowded."],
          ["noisy", "Crowded places are often noisy, so this is not the opposite."]
        ],
        hint: "Crowded means full of people. What is the opposite?",
        exp: "“Crowded” means full of people. “Empty” means with no people."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “The park was ______ in the early morning. We heard only birds.”",
        opts: [
          ["peaceful", null],
          ["crowded", "If it were crowded, we would hear people, not only birds."],
          ["noisy", "Hearing only birds means it was quiet."],
          ["generous", "Generous describes people who give, not places."]
        ],
        hint: "They heard only birds. Was it quiet or loud?",
        exp: "“Peaceful” means quiet and calm. Hearing only birds shows the park was quiet."
      },
      {
        skill: "Meaning in context",
        q: "Read: “This is a serious problem. We must solve it quickly.” What does “serious” mean here?",
        opts: [
          ["Important and possibly dangerous", null],
          ["Funny", "A funny problem would not need to be solved quickly."],
          ["Very small and not important at all", "A small problem would not need quick action."],
          ["Easy", "The sentence suggests the problem is important, not easy."]
        ],
        hint: "Why must we solve it quickly?",
        exp: "“Serious” here means important and possibly dangerous, so it needs quick action."
      }
    ]
  },
  {
    id: "v3",
    order: 16,
    level: 4,
    topic: "Academic Words",
    title: "Academic Words",
    desc: "Words you will see in science, reading, and other subjects.",
    learn: [
      {
        word: "compare",
        def: "To look at how things are similar or different.",
        ex: "Compare the two maps and find the differences."
      },
      {
        word: "accurate",
        def: "Correct and exact.",
        ex: "Every number in the report was accurate."
      },
      {
        word: "significant",
        def: "Important or meaningful.",
        ex: "The discovery was a significant event in science."
      },
      {
        word: "increase",
        def: "To become bigger or higher.",
        ex: "The number of students will increase next year."
      },
      {
        word: "test",
        def: "To check if an idea is true.",
        ex: "Scientists test their ideas with experiments."
      }
    ],
    questions: [
      {
        skill: "Word meaning",
        q: "What does “compare” mean?",
        opts: [
          ["To look at how things are similar or different", null],
          ["To choose your favorite thing from a group of things", "Choosing is not the same as looking at similarities and differences."],
          ["To count the number of things", "Counting gives a number. Comparing looks at two or more things together."],
          ["To repeat something many times", "Repeating means doing again, not comparing."]
        ],
        hint: "“Compare the two maps.” What would you look for?",
        exp: "“Compare” means to look at two or more things to find how they are alike and how they are different."
      },
      {
        skill: "Vocabulary in context",
        q: "Read: “The results were accurate. Every number in the report was correct.” What does “accurate” mean?",
        opts: [
          ["Correct and exact", null],
          ["Late", "The sentence is about the numbers being right, not about time."],
          ["Confusing and hard to read", "If the numbers were correct, the results were not confusing."],
          ["Expensive", "Price is not mentioned in the sentences."]
        ],
        hint: "The second sentence explains the first one.",
        exp: "“Accurate” means correct and exact. The clue is the second sentence: every number was correct."
      },
      {
        skill: "Synonyms",
        q: "Which word is a synonym of “important”?",
        opts: [
          ["significant", null],
          ["tiny", "“Tiny” means very small in size, not important."],
          ["simple", "“Simple” means easy. Something simple can be unimportant."],
          ["boring", "“Boring” means not interesting. It is not the same as important."]
        ],
        hint: "This academic word is often used in science: “a ______ discovery”.",
        exp: "“Significant” means important or meaningful. Example: The discovery of electricity was a significant event."
      },
      {
        skill: "Antonyms",
        q: "Which word is an antonym of “increase”?",
        opts: [
          ["decrease", null],
          ["grow", "“Grow” has a similar meaning to increase."],
          ["raise", "“Raise” means to make something higher, which is like increase."],
          ["improve", "“Improve” means to make better. It is not the opposite of increase."]
        ],
        hint: "If prices increase, they go up. Which word means go down?",
        exp: "“Increase” means to become bigger or higher. “Decrease” means to become smaller or lower. They are opposites."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Scientists do experiments to ______ their ideas.”",
        opts: [
          ["test", null],
          ["forget", "Scientists do not do experiments to forget their ideas."],
          ["hide", "Experiments share and check ideas. They do not hide them."],
          ["sell", "Experiments are for checking ideas, not selling them."]
        ],
        hint: "An experiment checks if an idea is true or not.",
        exp: "Scientists “test” their ideas with experiments to see if the ideas are correct."
      }
    ]
  },
  {
    id: "v17",
    order: 17,
    level: 4,
    topic: "Cause and Effect Vocabulary",
    title: "Cause and Effect Vocabulary",
    desc: "Words that show why things happen and what happens next.",
    learn: [
      {
        word: "due to",
        def: "Because of.",
        ex: "The match was canceled due to heavy rain."
      },
      {
        word: "result in",
        def: "To cause something to happen.",
        ex: "Late nights can result in poor sleep."
      },
      {
        word: "therefore",
        def: "For that reason; so.",
        ex: "He studied every day; therefore, he passed."
      },
      {
        word: "cause",
        def: "The reason something happens.",
        ex: "Heavy traffic was the cause of the delay."
      },
      {
        word: "effect",
        def: "A change that happens because of something.",
        ex: "Pollution has a negative effect on health."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “The match was canceled due to heavy rain.” What does “due to” mean?",
        opts: [
          ["Because of", null],
          ["In spite of", "“In spite of” means even with. The rain was the reason, not something they ignored."],
          ["Before", "“Due to” is not about time order."],
          ["Instead of", "The rain did not replace the match. It was the reason."]
        ],
        hint: "Why was the match canceled?",
        exp: "“Due to” means because of. The rain was the reason for cancelling the match."
      },
      {
        skill: "Choosing the correct word",
        q: "Complete the sentence: “Using phones late at night can ______ poor sleep.”",
        opts: [
          ["result in", null],
          ["result from", "“Result from” reverses the meaning: it would say phones come FROM poor sleep."],
          ["due to", "“Due to” needs a different structure: “Poor sleep can be due to phone use.”"],
          ["therefore", "“Therefore” joins two sentences. It does not fit here."]
        ],
        hint: "Phone use is the cause. Poor sleep is the effect. Which phrase means “cause”?",
        exp: "“Result in” means to cause. Phone use (cause) can result in poor sleep (effect)."
      },
      {
        skill: "Choosing the correct word",
        q: "Complete the sentence: “He studied every day; ______, he passed the exam easily.”",
        opts: [
          ["therefore", null],
          ["however", "“However” shows contrast, but passing is a result of studying."],
          ["although", "“Although” introduces a contrast and needs a different structure."],
          ["because", "“Because” introduces a reason, but here the reason comes first."]
        ],
        hint: "Passing the exam is the RESULT of studying.",
        exp: "“Therefore” introduces a result: he studied, therefore he passed."
      },
      {
        skill: "Identifying cause and effect",
        q: "In the sentence “Heavy traffic caused the delay,” what is the EFFECT?",
        opts: [
          ["The delay", null],
          ["Heavy traffic", "Heavy traffic is the CAUSE. It made the delay happen."],
          ["The traffic lights", "Traffic lights are not mentioned."],
          ["The drivers", "The drivers are not mentioned."]
        ],
        hint: "The effect is what happened because of something else.",
        exp: "Heavy traffic is the cause. The delay is the effect: what happened because of the traffic."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Pollution has a negative effect on our health.” What is an “effect”?",
        opts: [
          ["A change caused by something", null],
          ["A reason why something happens", "A reason is a cause. An effect comes after the cause."],
          ["A medicine", "A medicine treats illness. It is not the meaning here."],
          ["A solution", "A solution solves a problem. Pollution creates a problem."]
        ],
        hint: "Pollution does something to our health. What do we call that change?",
        exp: "An effect is a change that happens because of something. Pollution causes harm to health."
      }
    ]
  },
  {
    id: "v18",
    order: 18,
    level: 4,
    topic: "Compare and Contrast Vocabulary",
    title: "Compare and Contrast Vocabulary",
    desc: "Words that show how things are alike or different.",
    learn: [
      {
        word: "similar",
        def: "Almost the same.",
        ex: "Riyadh and Jeddah are similar in size."
      },
      {
        word: "whereas",
        def: "But; used to show a difference between two facts.",
        ex: "Riyadh is dry, whereas Jeddah is humid."
      },
      {
        word: "unlike",
        def: "Different from.",
        ex: "Unlike his brother, Fahad loves reading."
      },
      {
        word: "differ",
        def: "To be not the same.",
        ex: "The two plans differ in cost."
      },
      {
        word: "both",
        def: "The two together.",
        ex: "Both girls like science."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Riyadh and Jeddah are similar in size. Both are very large cities.” What does “similar” mean?",
        opts: [
          ["Almost the same", null],
          ["Very different in every way", "The next sentence says both are very large, so they are alike."],
          ["Opposite", "Opposite means completely different."],
          ["Far apart", "The sentence is about size, not distance."]
        ],
        hint: "Read the second sentence: “Both are very large cities.”",
        exp: "“Similar” means almost the same. Both cities are very large."
      },
      {
        skill: "Choosing the correct word",
        q: "Complete the sentence: “Riyadh is dry, ______ Jeddah is humid.”",
        opts: [
          ["whereas", null],
          ["because", "Being dry is not the reason Jeddah is humid."],
          ["so", "“So” shows a result. Jeddah’s weather is not a result of Riyadh’s."],
          ["therefore", "“Therefore” shows a result, not a difference."]
        ],
        hint: "The sentence shows a DIFFERENCE between two cities.",
        exp: "“Whereas” shows a contrast between two facts: dry vs. humid."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “______ his brother, Fahad enjoys reading more than sports.”",
        opts: [
          ["Unlike", null],
          ["Both", "“Both” needs two subjects: “Both brothers…”."],
          ["Similar", "“Similar” cannot start the sentence this way. You would need “Similar to…”."],
          ["Whereas", "“Whereas” must join two full clauses, for example “…, whereas his brother…”."]
        ],
        hint: "The sentence shows that Fahad is different from his brother.",
        exp: "“Unlike” means different from: Fahad is different from his brother."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The two plans differ in cost. One costs 500 riyals, and the other costs 2,000.” What does “differ” mean?",
        opts: [
          ["Are not the same", null],
          ["Are exactly equal in price", "500 and 2,000 are not equal."],
          ["Are cheaper", "One plan is cheaper, but “differ” means they are not the same."],
          ["Are finished", "The sentence compares cost, not whether plans are finished."]
        ],
        hint: "Compare the two prices.",
        exp: "“Differ” means to be not the same. The two plans have different costs."
      },
      {
        skill: "Best word for a situation",
        q: "“Lama and Huda ______ like science, so they joined the club together.”",
        opts: [
          ["both", null],
          ["unlike", "“Unlike” shows a difference, but the girls share the same interest."],
          ["whereas", "“Whereas” shows contrast and needs two clauses."],
          ["differ", "If they differed, they would not both join the science club."]
        ],
        hint: "The two girls have the same interest.",
        exp: "“Both” means the two together: Lama and Huda both like science."
      }
    ]
  },
  {
    id: "v19",
    order: 19,
    level: 4,
    topic: "Argument and Opinion Vocabulary",
    title: "Argument and Opinion Vocabulary",
    desc: "Words for giving and judging opinions.",
    learn: [
      {
        word: "claim",
        def: "To say something is true, often without proof.",
        ex: "The advertisement claims the drink makes you smarter."
      },
      {
        word: "evidence",
        def: "Facts or information that show something is true.",
        ex: "Give evidence to support your opinion."
      },
      {
        word: "support",
        def: "To agree with an idea and help it.",
        ex: "Many teachers support the new program."
      },
      {
        word: "oppose",
        def: "To disagree with an idea and try to stop it.",
        ex: "Some parents oppose the new rule."
      },
      {
        word: "convince",
        def: "To make someone believe or agree.",
        ex: "She convinced her parents to let her join the club."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “The advertisement claims the drink makes you smarter, but there is no proof.” What does “claim” mean?",
        opts: [
          ["To say something is true without proving it", null],
          ["To prove that something is true by using facts", "The sentence says there is NO proof."],
          ["To deny something", "To deny is to say something is NOT true."],
          ["To sell something", "Advertisements sell, but “claim” is about saying something is true."]
        ],
        hint: "Look at the end of the sentence: “but there is no proof.”",
        exp: "To claim is to say something is true, often without proof."
      },
      {
        skill: "Sentence completion",
        q: "Complete the sentence: “Your opinion is stronger when you give ______, such as facts and examples.”",
        opts: [
          ["evidence", null],
          ["doubts", "Doubts make an opinion weaker."],
          ["questions", "Questions do not support an opinion."],
          ["feelings", "Feelings alone are not facts or examples."]
        ],
        hint: "Facts and examples are kinds of…",
        exp: "Evidence is facts or information that show something is true. It makes opinions stronger."
      },
      {
        skill: "Antonyms",
        q: "Which word is the opposite of “support” (as in “support a plan”)?",
        opts: [
          ["oppose", null],
          ["agree with", "“Agree with” means the same as support."],
          ["help", "“Help” is close in meaning to support."],
          ["defend", "To defend a plan is to support it."]
        ],
        hint: "If you do not support a plan, you are against it.",
        exp: "To support is to agree with and help. To oppose is to disagree with and try to stop."
      },
      {
        skill: "Best word for a situation",
        q: "“Nora wants her parents to agree to a school trip. She gives them three good reasons.” What is Nora trying to do?",
        opts: [
          ["convince them", null],
          ["oppose them strongly", "Nora wants them to agree, not to fight against them."],
          ["ignore them", "She is talking to them and giving reasons."],
          ["confuse them", "Good reasons make things clear, not confusing."]
        ],
        hint: "She wants them to agree with her.",
        exp: "To convince someone is to make them believe or agree, often by giving good reasons."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Many teachers support the new reading program and want every class to use it.” What does “support” mean here?",
        opts: [
          ["Agree with and help", null],
          ["Disagree with and reject", "They want every class to use it, so they agree."],
          ["Ignore", "They are interested and want it used."],
          ["Question", "They are not asking questions about it. They want it."]
        ],
        hint: "Read the end of the sentence: “want every class to use it.”",
        exp: "To support an idea is to agree with it and help it succeed."
      }
    ]
  },
  {
    id: "v20",
    order: 20,
    level: 4,
    topic: "Vocabulary in Context",
    title: "Vocabulary in Context",
    desc: "Use clues in a sentence to work out new words.",
    learn: [
      {
        word: "scarce",
        def: "Not available in large amounts; hard to find.",
        ex: "Water is scarce in the desert."
      },
      {
        word: "reluctant",
        def: "Not wanting to do something.",
        ex: "He was reluctant to speak in class."
      },
      {
        word: "enormous",
        def: "Very large.",
        ex: "The new stadium is enormous."
      },
      {
        word: "fragile",
        def: "Easily broken.",
        ex: "Be careful; the glass is fragile."
      },
      {
        word: "obvious",
        def: "Easy to see or understand.",
        ex: "The answer was obvious to everyone."
      }
    ],
    questions: [
      {
        skill: "Meaning in context",
        q: "Read: “Water is scarce in the desert, so people use it very carefully.” What does “scarce” mean?",
        opts: [
          ["Not available in large amounts", null],
          ["Very clean", "Clean water would not explain why people use it carefully."],
          ["Very cold", "The temperature of water is not the clue."],
          ["Easy to find in almost every place", "If it were easy to find, people would not need to be careful."]
        ],
        hint: "Why do people use it carefully?",
        exp: "“Scarce” means there is not much of something. The clue is “so people use it very carefully.”"
      },
      {
        skill: "Meaning in context",
        q: "Read: “Khalid was reluctant to speak in front of the class. He looked down and said nothing.” What does “reluctant” mean?",
        opts: [
          ["Not wanting to do something", null],
          ["Excited", "An excited person would want to speak."],
          ["Ready and happy to do something", "He said nothing, so he was not ready or willing."],
          ["Proud", "Looking down and saying nothing does not show pride."]
        ],
        hint: "What did Khalid do: speak or stay silent?",
        exp: "“Reluctant” means not wanting to do something. Khalid looked down and said nothing."
      },
      {
        skill: "Meaning in context",
        q: "Read: “The new stadium is enormous. It can hold more than 60,000 people.” What does “enormous” mean?",
        opts: [
          ["Very large", null],
          ["Very old", "It is a NEW stadium."],
          ["Very small", "60,000 people need a very big place."],
          ["Very expensive", "Price is not the clue. The clue is the number of people."]
        ],
        hint: "How many people can it hold?",
        exp: "“Enormous” means very large. A place for 60,000 people is very big."
      },
      {
        skill: "Meaning in context",
        q: "Read: “Be careful with that glass vase. It is fragile and can break easily.” What does “fragile” mean?",
        opts: [
          ["Easily broken", null],
          ["Very heavy", "Heaviness is not the clue. The sentence says it can break easily."],
          ["Very valuable", "It may be valuable, but the clue is “can break easily.”"],
          ["Very beautiful", "Beauty is not mentioned."]
        ],
        hint: "Read the end of the sentence.",
        exp: "“Fragile” means easily broken. The clue is “can break easily.”"
      },
      {
        skill: "Meaning in context",
        q: "Read: “The answer was obvious. Everyone in the class knew it immediately.” What does “obvious” mean?",
        opts: [
          ["Easy to see or understand", null],
          ["Difficult to see or understand", "If it were difficult, not everyone would know it immediately."],
          ["Secret", "A secret is hidden. Everyone knew this answer."],
          ["Wrong", "The class knew the answer, so it was not wrong."]
        ],
        hint: "Everyone knew it immediately.",
        exp: "“Obvious” means easy to see or understand. Everyone knew it right away."
      }
    ]
  }
];
