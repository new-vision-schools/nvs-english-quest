/* ===== NVS English Quest — Listening Corner content =====
   25 activities: five per level. Level 1 = simplest; Level 5 = academic talks and discussions.
   intro: one sentence that sets the scene. vocab: 3–5 useful words shown before listening.
   script: what the device reads aloud (browser speech synthesis, not a recording).
   ev: the line the answer comes from (shown only after the student answers).
   In every "opts" list, the FIRST option is the correct answer (the app shuffles the order).
   Activity ids must never change. Next new ids: l1f, l2f, l3f, l4f, l5f. */
NVS_CONTENT.listening = {
  levels: [
    {
      n: 1,
      name: "Foundation Listener",
      range: "20–40 words",
      focus: "Understanding simple everyday English"
    },
    {
      n: 2,
      name: "Developing Listener",
      range: "40–70 words",
      focus: "Understanding short conversations and descriptions"
    },
    {
      n: 3,
      name: "Building Listener",
      range: "70–110 words",
      focus: "Identifying main ideas, details, and sequence"
    },
    {
      n: 4,
      name: "Advancing Listener",
      range: "110–160 words",
      focus: "Understanding extended speech, opinions, and inference"
    },
    {
      n: 5,
      name: "Independent Listener",
      range: "160–220 words",
      focus: "Understanding academic discussions, arguments, and viewpoints"
    }
  ],
  activities: [
    {
      id: "l1a",
      level: 1,
      title: "Where Is the Library?",
      topic: "Asking for directions",
      format: "Short conversation",
      intro: "Faisal is new to the building. He asks a teacher for directions to the library.",
      vocab: [
        ["floor", "one level of a building (first floor, second floor)"],
        ["next to", "very close to; beside"],
        ["return", "to give something back"]
      ],
      speakers: {
        Faisal: "Student",
        "Mr. Saleh": "Teacher"
      },
      voices: {
        Faisal: "a",
        "Mr. Saleh": "b"
      },
      script: [
        {
          sp: "Faisal",
          t: "Excuse me, Mr. Saleh. Where is the library?"
        },
        {
          sp: "Mr. Saleh",
          t: "It is on the second floor, next to the computer room. It opens at eight o’clock every morning."
        },
        {
          sp: "Faisal",
          t: "Thank you. I need to return a book."
        }
      ],
      questions: [
        {
          skill: "Identifying people",
          q: "Who does Faisal ask for help?",
          opts: [
            ["Mr. Saleh", null],
            ["His friend Omar", "Omar is not in the conversation. Listen to the first sentence."],
            ["The librarian", "Faisal is looking for the library, so he is not talking to the librarian."],
            ["His father", "Listen to the name Faisal says after “Excuse me”."]
          ],
          hint: "Listen to the first sentence. Faisal says a name after “Excuse me”.",
          exp: "Faisal says, “Excuse me, Mr. Saleh,” so he is asking Mr. Saleh for help.",
          ev: "Excuse me, Mr. Saleh. Where is the library?"
        },
        {
          skill: "Identifying places",
          q: "Where is the library?",
          opts: [
            ["On the second floor", null],
            ["On the first floor", "Listen again for the floor number. It is not the first floor."],
            ["Near the school gate", "The school gate is not mentioned."],
            ["On the third floor", "Listen for the word “floor”. The number is not three."]
          ],
          hint: "Listen for the word “floor”.",
          exp: "Mr. Saleh says the library is on the second floor.",
          ev: "It is on the second floor, next to the computer room."
        },
        {
          skill: "Identifying places",
          q: "What is next to the library?",
          opts: [
            ["The computer room", null],
            ["The science lab", "The science lab is not mentioned."],
            ["The cafeteria", "The cafeteria is not mentioned. Listen for “next to”."],
            ["The gym", "The gym is not mentioned. Listen for “next to”."]
          ],
          hint: "Listen for the words “next to”.",
          exp: "Mr. Saleh says the library is next to the computer room.",
          ev: "It is on the second floor, next to the computer room."
        },
        {
          skill: "Identifying times",
          q: "What time does the library open?",
          opts: [
            ["At eight o’clock", null],
            ["At seven o’clock", "Listen for the word “opens”. The time is not seven."],
            ["At nine o’clock", "Listen again. The library opens earlier than nine."],
            ["At ten o’clock", "Ten o’clock is not mentioned."]
          ],
          hint: "Listen for the word “opens”.",
          exp: "Mr. Saleh says, “It opens at eight o’clock every morning.”",
          ev: "It opens at eight o’clock every morning."
        },
        {
          skill: "Identifying actions",
          q: "Why does Faisal want to go to the library?",
          opts: [
            ["To return a book", null],
            ["To borrow a laptop", "A laptop is not mentioned. Listen to Faisal’s last sentence."],
            ["To study for a test", "A test is not mentioned. Listen to the end of the conversation."],
            ["To meet a friend", "Faisal does not mention a friend."]
          ],
          hint: "Listen to the last sentence. Faisal says, “I need to…”",
          exp: "At the end, Faisal says, “I need to return a book.”",
          ev: "I need to return a book."
        }
      ]
    },
    {
      id: "l1b",
      level: 1,
      title: "Morning Announcement",
      topic: "School announcements",
      format: "Announcement",
      intro: "It is the start of the school day. Listen to an announcement from the school office.",
      vocab: [
        ["announcement", "important information for everyone"],
        ["sports field", "the place outside where students play sports"],
        ["museum", "a building where you can see important objects"]
      ],
      speakers: {
        Announcer: "School office"
      },
      voices: {
        Announcer: "b"
      },
      script: [
        {
          sp: "Announcer",
          t: "Good morning, students. Today is Tuesday. The school football match is at two o’clock on the sports field. Please bring your water bottles. The Grade 8 bus to the science museum leaves at nine."
        }
      ],
      questions: [
        {
          skill: "Identifying times",
          q: "What day is it today?",
          opts: [
            ["Tuesday", null],
            ["Monday", "Listen to the second sentence: “Today is…”."],
            ["Thursday", "Thursday is not mentioned."],
            ["Sunday", "Sunday is not mentioned."]
          ],
          hint: "Listen for “Today is…”.",
          exp: "The announcer says, “Today is Tuesday.”",
          ev: "Today is Tuesday."
        },
        {
          skill: "Identifying times",
          q: "What time is the football match?",
          opts: [
            ["At two o’clock", null],
            ["At nine o’clock", "Nine o’clock is the time for the museum bus, not the match."],
            ["At three o’clock", "Three o’clock is not mentioned."],
            ["At twelve o’clock", "Twelve o’clock is not mentioned."]
          ],
          hint: "Listen for the words “football match”.",
          exp: "The announcer says the football match is at two o’clock.",
          ev: "The school football match is at two o’clock on the sports field."
        },
        {
          skill: "Identifying places",
          q: "Where is the football match?",
          opts: [
            ["On the sports field", null],
            ["In the sports hall", "Listen again. The match is outside, not in a hall."],
            ["At the science museum", "The museum is where the Grade 8 bus is going."],
            ["In the cafeteria", "The cafeteria is not mentioned."]
          ],
          hint: "Listen to the end of the sentence about the football match.",
          exp: "The match is on the sports field.",
          ev: "The school football match is at two o’clock on the sports field."
        },
        {
          skill: "Identifying actions",
          q: "What should students bring?",
          opts: [
            ["Their water bottles", null],
            ["Their lunch boxes", "Lunch boxes are not mentioned. Listen for “Please bring…”."],
            ["Their sports shoes", "Sports shoes are not mentioned."],
            ["Their notebooks", "Notebooks are not mentioned."]
          ],
          hint: "Listen for “Please bring…”.",
          exp: "The announcer says, “Please bring your water bottles.”",
          ev: "Please bring your water bottles."
        },
        {
          skill: "Identifying places",
          q: "Where is the Grade 8 bus going?",
          opts: [
            ["To the science museum", null],
            ["To the sports field", "The sports field is where the football match is."],
            ["To the zoo", "The zoo is not mentioned."],
            ["To the library", "The library is not mentioned."]
          ],
          hint: "Listen to the last sentence about the bus.",
          exp: "The Grade 8 bus is going to the science museum.",
          ev: "The Grade 8 bus to the science museum leaves at nine."
        }
      ]
    },
    {
      id: "l1c",
      level: 1,
      title: "At the School Shop",
      topic: "Buying something at a shop",
      format: "Short conversation",
      intro: "Nasser is buying school supplies at the school shop before class.",
      vocab: [
        ["notebook", "a book with empty pages for writing"],
        ["each", "for one of them"],
        ["riyal", "the money used in Saudi Arabia"],
        ["Here you are.", "what you say when you give something to someone"]
      ],
      speakers: {
        Nasser: "Student",
        "Mr. Adel": "Shopkeeper"
      },
      voices: {
        Nasser: "a",
        "Mr. Adel": "b"
      },
      script: [
        {
          sp: "Nasser",
          t: "Good morning. I need a blue notebook and two pens, please."
        },
        {
          sp: "Mr. Adel",
          t: "Here you are. The notebook is five riyals, and the pens are two riyals each."
        },
        {
          sp: "Nasser",
          t: "So that is nine riyals. Here is ten."
        },
        {
          sp: "Mr. Adel",
          t: "Thank you. Here is one riyal."
        }
      ],
      questions: [
        {
          skill: "Identifying things",
          q: "What color notebook does Nasser want?",
          opts: [
            ["Blue", null],
            ["Red", "Red is not mentioned. Listen to Nasser’s first sentence."],
            ["Black", "Listen again for the color before the word “notebook”."],
            ["Green", "Green is not mentioned."]
          ],
          hint: "Listen for a color word before “notebook”.",
          exp: "Nasser says, “I need a blue notebook.”",
          ev: "I need a blue notebook and two pens, please."
        },
        {
          skill: "Identifying numbers",
          q: "How many pens does Nasser buy?",
          opts: [
            ["Two", null],
            ["One", "Listen again. Nasser asks for more than one pen."],
            ["Three", "Three is not mentioned."],
            ["Five", "Five is the price of the notebook in riyals, not the number of pens."]
          ],
          hint: "Listen for a number before the word “pens”.",
          exp: "Nasser asks for “two pens”.",
          ev: "I need a blue notebook and two pens, please."
        },
        {
          skill: "Identifying numbers",
          q: "How much is the notebook?",
          opts: [
            ["Five riyals", null],
            ["Two riyals", "Two riyals is the price of one pen."],
            ["Nine riyals", "Nine riyals is the price of everything together."],
            ["Ten riyals", "Nasser pays with ten riyals, but that is not the price of the notebook."]
          ],
          hint: "Listen to Mr. Adel. He says the price of the notebook first.",
          exp: "Mr. Adel says, “The notebook is five riyals.”",
          ev: "The notebook is five riyals, and the pens are two riyals each."
        },
        {
          skill: "Identifying numbers",
          q: "What is the total price?",
          opts: [
            ["Nine riyals", null],
            ["Ten riyals", "Nasser gives ten riyals, but the total is less. He gets money back."],
            ["Seven riyals", "Add the notebook (five riyals) and two pens (two riyals each)."],
            ["Five riyals", "Five riyals is only the notebook."]
          ],
          hint: "Nasser says the total before he pays.",
          exp: "The notebook is five riyals and the two pens are four riyals, so the total is nine riyals.",
          ev: "So that is nine riyals."
        },
        {
          skill: "Identifying actions",
          q: "What does Mr. Adel give Nasser at the end?",
          opts: [
            ["One riyal", null],
            ["A receipt", "A receipt is not mentioned. Listen to Mr. Adel’s last sentence."],
            ["A bag", "A bag is not mentioned."],
            ["Another pen", "Nasser does not get another pen. Listen to the last sentence."]
          ],
          hint: "Listen to the last sentence: “Here is…”",
          exp: "Nasser paid ten riyals for nine riyals of supplies, so Mr. Adel gives him one riyal back.",
          ev: "Thank you. Here is one riyal."
        }
      ]
    },
    {
      id: "l1d",
      level: 1,
      title: "Majid’s School Day",
      topic: "Daily routines",
      format: "Short talk",
      intro: "Majid talks about what he does on a normal school day.",
      vocab: [
        ["wake up", "to stop sleeping"],
        ["breakfast", "the first meal of the day"],
        ["half past six", "6:30"]
      ],
      speakers: {
        Majid: "Student"
      },
      voices: {
        Majid: "a"
      },
      script: [
        {
          sp: "Majid",
          t: "Hi, I’m Majid. On school days, I wake up at six o’clock. I eat breakfast with my family. My father drives me to school at half past six. After school, I do my homework. I go to bed at ten o’clock."
        }
      ],
      questions: [
        {
          skill: "Identifying times",
          q: "What time does Majid wake up?",
          opts: [
            ["At six o’clock", null],
            ["At half past six", "At half past six, his father drives him to school."],
            ["At seven o’clock", "Seven o’clock is not mentioned."],
            ["At ten o’clock", "Majid goes to bed at ten o’clock."]
          ],
          hint: "Listen for the words “wake up”.",
          exp: "Majid says, “I wake up at six o’clock.”",
          ev: "On school days, I wake up at six o’clock."
        },
        {
          skill: "Identifying people",
          q: "Who does Majid eat breakfast with?",
          opts: [
            ["His family", null],
            ["His friends", "Friends are not mentioned."],
            ["His teacher", "Majid eats breakfast at home, not with a teacher."],
            ["Nobody", "Majid does not eat alone. Listen for the word “with”."]
          ],
          hint: "Listen for “breakfast with…”.",
          exp: "Majid says, “I eat breakfast with my family.”",
          ev: "I eat breakfast with my family."
        },
        {
          skill: "Identifying actions",
          q: "How does Majid get to school?",
          opts: [
            ["His father drives him.", null],
            ["He walks.", "Walking is not mentioned."],
            ["He takes the bus.", "A bus is not mentioned. Listen for “drives”."],
            ["His brother drives him.", "Listen again. A different person drives Majid."]
          ],
          hint: "Listen for the word “drives”.",
          exp: "Majid says, “My father drives me to school.”",
          ev: "My father drives me to school at half past six."
        },
        {
          skill: "Identifying actions",
          q: "What does Majid do after school?",
          opts: [
            ["He does his homework.", null],
            ["He plays football.", "Football is not mentioned."],
            ["He watches TV.", "TV is not mentioned."],
            ["He goes to bed.", "He goes to bed at ten o’clock, not right after school."]
          ],
          hint: "Listen for the words “After school”.",
          exp: "Majid says, “After school, I do my homework.”",
          ev: "After school, I do my homework."
        },
        {
          skill: "Identifying times",
          q: "Which days is Majid talking about?",
          opts: [
            ["School days", null],
            ["The weekend", "Majid does not talk about the weekend. Listen to his second sentence."],
            ["Holidays", "Holidays are not mentioned."],
            ["Only Fridays", "Fridays are not mentioned."]
          ],
          hint: "Listen to the start of the second sentence.",
          exp: "Majid says, “On school days…”, so he describes a normal school day.",
          ev: "On school days, I wake up at six o’clock."
        }
      ]
    },
    {
      id: "l1e",
      level: 1,
      title: "After-School Hobbies",
      topic: "Talking about hobbies",
      format: "Short conversation",
      intro: "Two friends, Reem and Noura, talk about what they do in their free time.",
      vocab: [
        ["hobby", "something you enjoy doing in your free time"],
        ["drawing", "making pictures with a pencil or pen"],
        ["building", "a house, school, or other structure"]
      ],
      speakers: {
        Reem: "Student",
        Noura: "Student"
      },
      voices: {
        Reem: "a",
        Noura: "c"
      },
      script: [
        {
          sp: "Reem",
          t: "Noura, what do you do after school?"
        },
        {
          sp: "Noura",
          t: "I like drawing. I draw animals and buildings. What about you?"
        },
        {
          sp: "Reem",
          t: "I go swimming on Mondays and Wednesdays."
        },
        {
          sp: "Noura",
          t: "That sounds fun."
        }
      ],
      questions: [
        {
          skill: "Identifying actions",
          q: "What is Noura’s hobby?",
          opts: [
            ["Drawing", null],
            ["Swimming", "Swimming is Reem’s hobby, not Noura’s."],
            ["Reading", "Reading is not mentioned."],
            ["Cooking", "Cooking is not mentioned."]
          ],
          hint: "Listen to Noura’s first answer: “I like…”",
          exp: "Noura says, “I like drawing.”",
          ev: "I like drawing."
        },
        {
          skill: "Identifying things",
          q: "What does Noura draw?",
          opts: [
            ["Animals and buildings", null],
            ["People and cars", "Listen again. Noura names two other things."],
            ["Flowers and trees", "Flowers and trees are not mentioned."],
            ["Maps of famous cities", "Maps are not mentioned."]
          ],
          hint: "Listen for “I draw…”.",
          exp: "Noura says, “I draw animals and buildings.”",
          ev: "I draw animals and buildings."
        },
        {
          skill: "Identifying actions",
          q: "What is Reem’s hobby?",
          opts: [
            ["Swimming", null],
            ["Drawing", "Drawing is Noura’s hobby."],
            ["Running", "Running is not mentioned."],
            ["Football", "Football is not mentioned."]
          ],
          hint: "Listen to Reem’s answer: “I go…”",
          exp: "Reem says, “I go swimming.”",
          ev: "I go swimming on Mondays and Wednesdays."
        },
        {
          skill: "Identifying times",
          q: "When does Reem go swimming?",
          opts: [
            ["On Mondays and Wednesdays", null],
            ["On Sundays and Tuesdays", "Listen again for the two days."],
            ["Every day", "Reem names two days, not every day."],
            ["On Fridays", "Friday is not mentioned."]
          ],
          hint: "Listen for two days of the week.",
          exp: "Reem goes swimming on Mondays and Wednesdays.",
          ev: "I go swimming on Mondays and Wednesdays."
        },
        {
          skill: "Identifying feelings",
          q: "What does Noura think about Reem’s hobby?",
          opts: [
            ["It sounds fun.", null],
            ["It sounds boring.", "Noura does not say this. Listen to her last sentence."],
            ["It sounds dangerous.", "Danger is not mentioned."],
            ["It sounds expensive.", "Money is not mentioned."]
          ],
          hint: "Listen to the last sentence.",
          exp: "Noura says, “That sounds fun,” so she likes the idea.",
          ev: "That sounds fun."
        }
      ]
    },
    {
      id: "l2a",
      level: 2,
      title: "A Visit to the Doctor",
      topic: "Visiting a doctor",
      format: "Conversation",
      intro: "Yousef does not feel well, so he visits a doctor. Listen to their conversation.",
      vocab: [
        ["headache", "a pain in your head"],
        ["tired", "needing rest or sleep"],
        ["teenager", "a person aged 13 to 19"]
      ],
      speakers: {
        Doctor: "Doctor",
        Yousef: "Student"
      },
      voices: {
        Doctor: "b",
        Yousef: "a"
      },
      script: [
        {
          sp: "Doctor",
          t: "Hello, Yousef. What seems to be the problem?"
        },
        {
          sp: "Yousef",
          t: "I have a headache, and I feel tired every day."
        },
        {
          sp: "Doctor",
          t: "How many hours do you sleep at night?"
        },
        {
          sp: "Yousef",
          t: "About five hours. I play games on my phone late."
        },
        {
          sp: "Doctor",
          t: "Teenagers need eight to ten hours of sleep. Try to stop using your phone one hour before bed, and drink more water."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the conversation mainly about?",
          opts: [
            ["Yousef feels tired, and the doctor gives him advice about sleep.", null],
            ["Yousef broke his arm while he was playing football with his friends.", "Yousef does not talk about football or his arm."],
            ["Yousef wants to buy a new phone.", "His phone is mentioned, but he does not want a new one."],
            ["The doctor explains how to play games.", "The doctor gives health advice, not game advice."]
          ],
          hint: "Think about the problem at the start and the advice at the end.",
          exp: "Yousef has a headache and feels tired. The doctor finds out he sleeps only five hours and gives advice about sleep and water.",
          ev: "I have a headache, and I feel tired every day."
        },
        {
          skill: "Explicit details",
          q: "What problems does Yousef have?",
          opts: [
            ["A headache and tiredness", null],
            ["A stomachache and a fever", "Listen to Yousef’s first answer. He does not mention a fever."],
            ["A cough and a sore throat", "A cough is not mentioned."],
            ["Back pain", "Back pain is not mentioned."]
          ],
          hint: "Listen to Yousef’s first answer.",
          exp: "Yousef says he has a headache and feels tired every day.",
          ev: "I have a headache, and I feel tired every day."
        },
        {
          skill: "Explicit details",
          q: "How many hours does Yousef usually sleep?",
          opts: [
            ["About five hours", null],
            ["About eight hours", "Eight is part of the number teenagers NEED, not what Yousef sleeps."],
            ["About ten hours", "Ten is part of the doctor’s advice, not Yousef’s sleep."],
            ["About six hours", "Listen again to Yousef’s second answer."]
          ],
          hint: "Listen to Yousef’s answer to “How many hours…?”",
          exp: "Yousef says, “About five hours.”",
          ev: "About five hours. I play games on my phone late."
        },
        {
          skill: "Explicit details",
          q: "According to the doctor, how much sleep do teenagers need?",
          opts: [
            ["Eight to ten hours", null],
            ["Five to six hours", "Five hours is how much Yousef sleeps. The doctor says that is not enough."],
            ["Six to seven hours", "Listen to the doctor’s last sentence again."],
            ["Ten to twelve hours", "Listen again. The doctor’s numbers are lower."]
          ],
          hint: "Listen to the doctor’s last turn: “Teenagers need…”.",
          exp: "The doctor says, “Teenagers need eight to ten hours of sleep.”",
          ev: "Teenagers need eight to ten hours of sleep."
        },
        {
          skill: "Explicit details",
          q: "What does the doctor tell Yousef to do?",
          opts: [
            ["Stop using his phone one hour before bed", null],
            ["Play games earlier in the evening", "The doctor does not mention playing games at another time."],
            ["Sleep in the afternoon", "Afternoon sleep is not mentioned."],
            ["Take medicine three times a day", "Medicine is not mentioned."]
          ],
          hint: "Listen for “Try to…” in the doctor’s last turn.",
          exp: "The doctor says to stop using the phone one hour before bed and to drink more water.",
          ev: "Try to stop using your phone one hour before bed, and drink more water."
        }
      ]
    },
    {
      id: "l2b",
      level: 2,
      title: "Join the Science Club",
      topic: "A school club meeting",
      format: "Announcement",
      intro: "A science teacher is inviting students to join a school club.",
      vocab: [
        ["member", "a person who belongs to a club or group"],
        ["weather station", "equipment that measures heat, wind, and rain"],
        ["curious", "wanting to know and learn about things"]
      ],
      speakers: {
        "Ms. Amal": "Science teacher"
      },
      voices: {
        "Ms. Amal": "a"
      },
      script: [
        {
          sp: "Ms. Amal",
          t: "Attention, students. The Science Club is looking for new members. Our first meeting is next Wednesday after school in Lab 3. This year, we will build a weather station and enter the science fair in March. You do not need to be an expert. You only need to be curious. To join, write your name on the list outside Lab 3 by Monday."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the main purpose of the announcement?",
          opts: [
            ["To invite students to join the Science Club", null],
            ["To give the results of the science fair", "The science fair is in March. There are no results yet."],
            ["To say that Lab 3 is closed", "Lab 3 is where the club meets. It is not closed."],
            ["To explain how to build a weather station at home", "The club will build one, but the announcement does not explain how."]
          ],
          hint: "Listen to the second sentence. What is the club looking for?",
          exp: "The announcement invites new members and explains how to join.",
          ev: "The Science Club is looking for new members."
        },
        {
          skill: "Explicit details",
          q: "When is the first meeting?",
          opts: [
            ["Next Wednesday after school", null],
            ["Next Monday morning", "Monday is the last day to write your name on the list."],
            ["In March", "March is when the science fair is."],
            ["Wednesday morning before classes", "Listen again. The meeting is after school."]
          ],
          hint: "Listen for “Our first meeting is…”.",
          exp: "The first meeting is next Wednesday after school in Lab 3.",
          ev: "Our first meeting is next Wednesday after school in Lab 3."
        },
        {
          skill: "Explicit details",
          q: "What will the club build this year?",
          opts: [
            ["A weather station", null],
            ["A robot", "A robot is not mentioned."],
            ["A small rocket", "A rocket is not mentioned."],
            ["A school garden", "A garden is not mentioned."]
          ],
          hint: "Listen for “This year, we will build…”.",
          exp: "The teacher says, “This year, we will build a weather station.”",
          ev: "This year, we will build a weather station and enter the science fair in March."
        },
        {
          skill: "Explicit details",
          q: "What does the teacher say students need to be?",
          opts: [
            ["Curious", null],
            ["Experts in science", "The teacher says, “You do not need to be an expert.”"],
            ["In Grade 12", "Grades are not mentioned."],
            ["Very good at math", "Math is not mentioned."]
          ],
          hint: "Listen for “You only need to be…”.",
          exp: "The teacher says, “You only need to be curious.”",
          ev: "You only need to be curious."
        },
        {
          skill: "Explicit details",
          q: "How can students join the club?",
          opts: [
            ["Write their name on the list outside Lab 3 by Monday", null],
            ["Send an email to the teacher", "Email is not mentioned."],
            ["Go to Lab 3 in March", "March is the science fair, not how to join."],
            ["Pay a small fee at the office", "A fee is not mentioned."]
          ],
          hint: "Listen to the last sentence: “To join…”.",
          exp: "Students write their name on the list outside Lab 3 by Monday.",
          ev: "To join, write your name on the list outside Lab 3 by Monday."
        }
      ]
    },
    {
      id: "l2c",
      level: 2,
      title: "Plans for the Weekend",
      topic: "Planning a weekend",
      format: "Conversation",
      intro: "Khalid invites his friend Fahad to play football. Listen to them make a plan.",
      vocab: [
        ["free", "not busy"],
        ["grandparents", "the parents of your mother or father"],
        ["cooler", "less hot"],
        ["bring", "to take something with you"]
      ],
      speakers: {
        Khalid: "Student",
        Fahad: "Student"
      },
      voices: {
        Khalid: "a",
        Fahad: "b"
      },
      script: [
        {
          sp: "Khalid",
          t: "Fahad, are you free on Friday? A few of us want to play football at the park."
        },
        {
          sp: "Fahad",
          t: "I’d like to, but in the morning I’m visiting my grandparents. What time are you playing?"
        },
        {
          sp: "Khalid",
          t: "At five o’clock, after it gets cooler."
        },
        {
          sp: "Fahad",
          t: "Perfect. I’ll be back by four. Should I bring anything?"
        },
        {
          sp: "Khalid",
          t: "Just bring water. Saad is bringing the ball."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What are Khalid and Fahad mainly talking about?",
          opts: [
            ["A plan to play football on Friday", null],
            ["A football match on TV", "They plan to play football, not to watch it."],
            ["A visit to Fahad’s grandparents", "Fahad mentions this visit, but it is not the main topic."],
            ["Buying a new football", "Nobody is buying a ball. Saad is bringing one."]
          ],
          hint: "What is the whole conversation about, from start to end?",
          exp: "Khalid invites Fahad to play football, and they agree on the time and what to bring.",
          ev: "A few of us want to play football at the park."
        },
        {
          skill: "Explicit details",
          q: "What will Fahad do on Friday morning?",
          opts: [
            ["Visit his grandparents", null],
            ["Play football", "They play football later, at five o’clock."],
            ["Go shopping for water", "Shopping is not mentioned."],
            ["Study for a test", "A test is not mentioned."]
          ],
          hint: "Listen for the words “in the morning”.",
          exp: "Fahad says, “In the morning I’m visiting my grandparents.”",
          ev: "I’d like to, but in the morning I’m visiting my grandparents."
        },
        {
          skill: "Cause and effect",
          q: "Why will they play at five o’clock?",
          opts: [
            ["Because it will be cooler then", null],
            ["Because the park opens at five", "The park’s opening time is not mentioned."],
            ["Because Fahad finishes work at five", "Fahad will be back by four, and work is not mentioned."],
            ["Because Saad asked for that time", "Saad is only bringing the ball."]
          ],
          hint: "Listen to Khalid’s answer about the time.",
          exp: "Khalid says they will play “after it gets cooler”.",
          ev: "At five o’clock, after it gets cooler."
        },
        {
          skill: "Sequencing",
          q: "What will Fahad do first on Friday?",
          opts: [
            ["Visit his grandparents", null],
            ["Play football", "Football is at five o’clock, after his visit."],
            ["Meet Saad", "Fahad meets Saad at the game, later in the day."],
            ["Go back home at four", "He comes back by four, after the visit."]
          ],
          hint: "Put Fahad’s day in order: morning, four o’clock, five o’clock.",
          exp: "Fahad visits his grandparents in the morning, comes back by four, and plays football at five.",
          ev: "I’d like to, but in the morning I’m visiting my grandparents."
        },
        {
          skill: "Explicit details",
          q: "Who is bringing the ball?",
          opts: [
            ["Saad", null],
            ["Khalid", "Khalid says someone else is bringing the ball."],
            ["Fahad", "Fahad only needs to bring water."],
            ["Fahad’s grandfather", "Fahad’s grandparents are not going to the park."]
          ],
          hint: "Listen to the last sentence.",
          exp: "Khalid says, “Saad is bringing the ball.”",
          ev: "Saad is bringing the ball."
        }
      ]
    },
    {
      id: "l2d",
      level: 2,
      title: "At the Public Library",
      topic: "Visiting a library",
      format: "Conversation",
      intro: "Ghada visits the public library for the first time. She talks to the librarian.",
      vocab: [
        ["borrow", "to take something and give it back later"],
        ["library card", "a card that lets you borrow books"],
        ["form", "a paper with questions you answer"],
        ["renew", "to keep a book for more time"]
      ],
      speakers: {
        Ghada: "Student",
        "Ms. Salma": "Librarian"
      },
      voices: {
        Ghada: "c",
        "Ms. Salma": "a"
      },
      script: [
        {
          sp: "Ghada",
          t: "Hello. I’d like to borrow these three books for my history project."
        },
        {
          sp: "Ms. Salma",
          t: "Of course. Do you have a library card?"
        },
        {
          sp: "Ghada",
          t: "No, this is my first visit."
        },
        {
          sp: "Ms. Salma",
          t: "No problem. Fill in this form, and I’ll make a card for you now. You can keep the books for two weeks. If you need more time, you can renew them online."
        },
        {
          sp: "Ghada",
          t: "That’s great. Thank you."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "Why is Ghada at the library?",
          opts: [
            ["To borrow books for a project", null],
            ["To return some books", "Ghada wants to take books home, not give them back."],
            ["To study for an exam", "An exam is not mentioned."],
            ["To get a job at the library", "A job is not mentioned."]
          ],
          hint: "Listen to Ghada’s first sentence.",
          exp: "Ghada says she would like to borrow three books for her history project.",
          ev: "I’d like to borrow these three books for my history project."
        },
        {
          skill: "Explicit details",
          q: "How many books does Ghada want to borrow?",
          opts: [
            ["Three", null],
            ["Two", "Two is the number of weeks, not books."],
            ["Four", "Four is not mentioned."],
            ["One", "Ghada wants more than one book."]
          ],
          hint: "Listen for a number before “books”.",
          exp: "Ghada says, “these three books”.",
          ev: "I’d like to borrow these three books for my history project."
        },
        {
          skill: "Cause and effect",
          q: "Why does Ghada need to fill in a form?",
          opts: [
            ["She has no library card yet.", null],
            ["She lost her old library card.", "Ghada never had a card. This is her first visit."],
            ["She wants to join a history club.", "A club is not mentioned."],
            ["She needs to pay for the books.", "Paying is not mentioned."]
          ],
          hint: "Ghada says it is her first visit. What does she not have?",
          exp: "It is Ghada’s first visit, so she has no card. The form is for a new library card.",
          ev: "Fill in this form, and I’ll make a card for you now."
        },
        {
          skill: "Explicit details",
          q: "How long can Ghada keep the books?",
          opts: [
            ["Two weeks", null],
            ["One week", "Listen again for the time. It is longer than one week."],
            ["Three weeks", "Three is the number of books."],
            ["One month", "A month is not mentioned."]
          ],
          hint: "Listen for the words “keep the books”.",
          exp: "Ms. Salma says, “You can keep the books for two weeks.”",
          ev: "You can keep the books for two weeks."
        },
        {
          skill: "Explicit details",
          q: "What can Ghada do if she needs more time?",
          opts: [
            ["Renew the books online", null],
            ["Call the librarian", "Calling is not mentioned. Listen for the word “online”."],
            ["Buy the books", "Buying is not mentioned."],
            ["Ask her teacher for a letter", "A letter is not mentioned."]
          ],
          hint: "Listen for the words “more time”.",
          exp: "Ms. Salma says Ghada can renew the books online.",
          ev: "If you need more time, you can renew them online."
        }
      ]
    },
    {
      id: "l2e",
      level: 2,
      title: "Sports Day at Our School",
      topic: "Describing an event",
      format: "Short description",
      intro: "Ziyad describes what happened at his school’s Sports Day last week.",
      vocab: [
        ["relay race", "a race where team members run one after another"],
        ["tent", "a large cover that gives shade"],
        ["principal", "the head of a school"],
        ["medal", "a metal prize for winners"]
      ],
      speakers: {
        Ziyad: "Student"
      },
      voices: {
        Ziyad: "a"
      },
      script: [
        {
          sp: "Ziyad",
          t: "Last Thursday was Sports Day at our school. In the morning, every class ran in the relay race. My class came second, so we were very happy. After that, we had lunch outside under big tents. In the afternoon, the teachers played a football match against the Grade 12 students. The teachers won three goals to two. At the end of the day, the principal gave medals to the winners."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is Ziyad describing?",
          opts: [
            ["A sports day at his school", null],
            ["A football tournament", "There was one football match, but it was only part of the day."],
            ["A class trip", "The class did not travel anywhere."],
            ["A prize ceremony for teachers", "The principal gave medals to the winners, not only to teachers."]
          ],
          hint: "Listen to the first sentence.",
          exp: "Ziyad says, “Last Thursday was Sports Day at our school,” and then describes the day.",
          ev: "Last Thursday was Sports Day at our school."
        },
        {
          skill: "Explicit details",
          q: "How did Ziyad’s class do in the relay race?",
          opts: [
            ["They came second.", null],
            ["They won the race.", "Ziyad’s class was happy, but they did not come first."],
            ["They came last.", "Listen again. They did well."],
            ["They did not run.", "Every class ran in the relay race."]
          ],
          hint: "Listen for the words “My class came…”.",
          exp: "Ziyad says, “My class came second.”",
          ev: "My class came second, so we were very happy."
        },
        {
          skill: "Sequencing",
          q: "What happened right after the relay race?",
          opts: [
            ["Lunch outside", null],
            ["The football match", "The football match was in the afternoon, after lunch."],
            ["The medals for the winners", "The medals were given at the end of the day."],
            ["A class photo", "A photo is not mentioned."]
          ],
          hint: "Listen for the words “After that”.",
          exp: "After the relay race, “we had lunch outside under big tents.”",
          ev: "After that, we had lunch outside under big tents."
        },
        {
          skill: "Explicit details",
          q: "Who played in the football match?",
          opts: [
            ["The teachers and the Grade 12 students", null],
            ["Two different Grade 12 classes", "One team was not students. Listen again."],
            ["The teachers and the students’ parents", "Parents are not mentioned."],
            ["Ziyad’s class and another class", "Ziyad’s class ran in the relay race."]
          ],
          hint: "Listen for the word “against”.",
          exp: "The teachers played against the Grade 12 students.",
          ev: "In the afternoon, the teachers played a football match against the Grade 12 students."
        },
        {
          skill: "Explicit details",
          q: "What was the result of the football match?",
          opts: [
            ["The teachers won 3–2.", null],
            ["The students won 3–2.", "Listen again. The teachers won, not the students."],
            ["It was a 2–2 draw.", "One team won. Listen for “won”."],
            ["The teachers won 2–0.", "The students scored two goals."]
          ],
          hint: "Listen for the word “won”.",
          exp: "Ziyad says, “The teachers won three goals to two.”",
          ev: "The teachers won three goals to two."
        }
      ]
    },
    {
      id: "l3a",
      level: 3,
      title: "Planning a Study Schedule",
      topic: "Planning a study schedule",
      format: "Conversation",
      intro: "Maha is worried about her exams. Her friend Lina explains how she plans her studying.",
      vocab: [
        ["schedule", "a plan that shows what you will do and when"],
        ["earliest", "the one that comes first in time"],
        ["focused", "giving all your attention to one thing"]
      ],
      speakers: {
        Lina: "Student",
        Maha: "Student"
      },
      voices: {
        Lina: "a",
        Maha: "b"
      },
      script: [
        {
          sp: "Lina",
          t: "Maha, you look worried. What’s wrong?"
        },
        {
          sp: "Maha",
          t: "We have three exams next week, and I haven’t started studying. I don’t know where to begin."
        },
        {
          sp: "Lina",
          t: "Last term I had the same problem, so I made a schedule. First, write down the date of each exam. Then, study for the earliest exam first. I study for forty minutes and then take a ten-minute break."
        },
        {
          sp: "Maha",
          t: "Only forty minutes? Is that enough?"
        },
        {
          sp: "Lina",
          t: "Yes, because short sessions help me stay focused. And don’t study all night. Sleep helps your brain remember."
        },
        {
          sp: "Maha",
          t: "Okay. I’ll start tonight with math. It’s on Sunday."
        }
      ],
      questions: [
        {
          skill: "Cause and effect",
          q: "Why is Maha worried?",
          opts: [
            ["She has three exams next week and has not started studying.", null],
            ["She failed her math test last week and must take it again.", "Maha does not say she failed a test."],
            ["She lost her study schedule.", "Maha does not have a schedule yet. Lina suggests making one."],
            ["Lina is angry with her.", "Lina is helping Maha. She is not angry."]
          ],
          hint: "Listen to Maha’s first answer.",
          exp: "Maha says they have three exams next week and she has not started studying.",
          ev: "We have three exams next week, and I haven’t started studying."
        },
        {
          skill: "Sequencing",
          q: "According to Lina, what should Maha do FIRST?",
          opts: [
            ["Write down the date of each exam", null],
            ["Study for forty minutes", "This comes later. Listen for the word “First”."],
            ["Take a ten-minute break", "The break comes after studying."],
            ["Study all night", "Lina says NOT to study all night."]
          ],
          hint: "Listen for the word “First”.",
          exp: "Lina says, “First, write down the date of each exam. Then, study for the earliest exam first.”",
          ev: "First, write down the date of each exam."
        },
        {
          skill: "Cause and effect",
          q: "Why does Lina study in short sessions?",
          opts: [
            ["Short sessions help her stay focused.", null],
            ["She does not have much free time after school.", "Lina does not talk about her free time."],
            ["Her teacher told her to do it.", "A teacher is not mentioned."],
            ["She gets bored of math.", "Lina does not say she is bored. Listen for the word “because” in her answer."]
          ],
          hint: "Listen for the word “because”.",
          exp: "Lina says, “Short sessions help me stay focused.”",
          ev: "Yes, because short sessions help me stay focused."
        },
        {
          skill: "Simple inference",
          q: "Why does Maha decide to start with math?",
          opts: [
            ["The math exam is probably her earliest exam.", null],
            ["Math is her favorite subject.", "Maha never says she likes math."],
            ["Math is the easiest subject.", "Maha does not say math is easy."],
            ["Lina says math is the most important subject.", "Lina does not talk about math."]
          ],
          hint: "Remember Lina’s advice about which exam to study for first. Then listen to Maha’s last sentence.",
          exp: "Maha does not say this directly. Lina advised studying for the earliest exam first, and Maha says math is on Sunday. We can infer math is her first exam.",
          ev: "Okay. I’ll start tonight with math. It’s on Sunday."
        },
        {
          skill: "Simple inference",
          q: "What does Lina think about studying all night?",
          opts: [
            ["It is not helpful, because sleep helps you remember.", null],
            ["It is the best way to prepare well for difficult exams.", "Lina tells Maha NOT to study all night."],
            ["It is fine before a math exam.", "Lina does not make an exception for math."],
            ["It helps you stay focused.", "Lina says short sessions help focus, not studying all night."]
          ],
          hint: "Listen to what Lina says after “And don’t…”.",
          exp: "Lina says, “Don’t study all night. Sleep helps your brain remember.” She thinks sleep is important for learning.",
          ev: "And don’t study all night. Sleep helps your brain remember."
        }
      ]
    },
    {
      id: "l3b",
      level: 3,
      title: "Screen Time and Balance",
      topic: "Technology and screen time",
      format: "Short informational talk",
      intro: "A health presenter gives a short talk about how much time teenagers spend on screens.",
      vocab: [
        ["screen time", "time spent looking at phones, computers, or TVs"],
        ["social media", "apps and websites for sharing messages and photos"],
        ["balance", "the right amount of different activities"]
      ],
      speakers: {
        Speaker: "Health presenter"
      },
      voices: {
        Speaker: "b"
      },
      script: [
        {
          sp: "Speaker",
          t: "Did you know that many teenagers spend more than seven hours a day looking at screens? Some of this time is for schoolwork, but much of it is for social media, videos, and games. Too much screen time can cause problems. For example, looking at a bright screen late at night can make it harder to fall asleep. Sitting for many hours can also make our bodies weaker. However, screens are not bad on their own. The key is balance. Try a simple rule: for every hour on a screen, spend some time moving, reading a book, or talking with your family."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the main idea of the talk?",
          opts: [
            ["Screen time can cause problems, so we need balance.", null],
            ["Screens should be banned for all teenagers at home and school.", "The speaker says screens are not bad on their own."],
            ["Teenagers should make more videos.", "The talk does not encourage making videos."],
            ["Schoolwork does not need screens.", "The speaker says some screen time is for schoolwork."]
          ],
          hint: "Listen for the sentence “The key is…”.",
          exp: "The speaker explains problems with too much screen time and says, “The key is balance.”",
          ev: "However, screens are not bad on their own. The key is balance."
        },
        {
          skill: "Cause and effect",
          q: "What can happen if you look at a bright screen late at night?",
          opts: [
            ["It can be harder to fall asleep.", null],
            ["You can get better grades.", "Grades are not mentioned."],
            ["Your eyes become stronger.", "The speaker does not say this."],
            ["You will have more energy in the morning.", "The speaker describes a sleep problem, not more energy."]
          ],
          hint: "Listen for “For example…”.",
          exp: "The speaker says a bright screen late at night can make it harder to fall asleep.",
          ev: "For example, looking at a bright screen late at night can make it harder to fall asleep."
        },
        {
          skill: "Cause and effect",
          q: "According to the speaker, what effect can sitting for many hours have?",
          opts: [
            ["It can make our bodies weaker.", null],
            ["It can make us taller.", "Height is not mentioned."],
            ["It can help us sleep better.", "Sitting is not connected to better sleep in the talk."],
            ["It can improve our memory.", "Memory is not mentioned."]
          ],
          hint: "Listen for the word “Sitting”.",
          exp: "The speaker says sitting for many hours can make our bodies weaker.",
          ev: "Sitting for many hours can also make our bodies weaker."
        },
        {
          skill: "Simple inference",
          q: "What is the speaker’s opinion about screens?",
          opts: [
            ["They are useful if we use them in a balanced way.", null],
            ["They are always harmful.", "The speaker says screens are “not bad on their own”."],
            ["They should be used only for games.", "The speaker does not say this."],
            ["They are more important than spending time with family.", "The speaker suggests spending time with family."]
          ],
          hint: "Listen to the sentence that starts with “However”.",
          exp: "The speaker says screens are not bad on their own, but we need balance. So screens are useful when used carefully.",
          ev: "However, screens are not bad on their own."
        },
        {
          skill: "Explicit details",
          q: "What simple rule does the speaker suggest?",
          opts: [
            ["Balance each hour on a screen with moving, reading, or family time.", null],
            ["Never use screens after school.", "The speaker does not say this. The rule is about balance."],
            ["Use screens for only one hour each week, even for schoolwork.", "This is not the rule in the talk."],
            ["Use screens only for social media.", "The speaker does not suggest this."]
          ],
          hint: "Listen to the last sentence: “Try a simple rule…”.",
          exp: "The rule is: for every hour on a screen, spend some time moving, reading a book, or talking with your family.",
          ev: "Try a simple rule: for every hour on a screen, spend some time moving, reading a book, or talking with your family."
        }
      ]
    },
    {
      id: "l3c",
      level: 3,
      title: "The Neighborhood Clean-Up",
      topic: "A community project",
      format: "Short interview",
      intro: "Turki, a student reporter, interviews Mr. Waleed, who leads a volunteer clean-up in his neighborhood.",
      vocab: [
        ["litter", "rubbish left on the ground"],
        ["complain", "to say that something is wrong or not good enough"],
        ["municipality", "the local government of a city"],
        ["make a difference", "to have a good effect"]
      ],
      speakers: {
        Turki: "Student reporter",
        "Mr. Waleed": "Volunteer leader"
      },
      voices: {
        Turki: "a",
        "Mr. Waleed": "b"
      },
      script: [
        {
          sp: "Turki",
          t: "Mr. Waleed, how did the neighborhood clean-up start?"
        },
        {
          sp: "Mr. Waleed",
          t: "Last year, people complained that the small park near the mosque was full of litter. So a few neighbors and I decided to clean it on the first Saturday of every month."
        },
        {
          sp: "Turki",
          t: "How many people help now?"
        },
        {
          sp: "Mr. Waleed",
          t: "We started with six. Now about forty people come, including many students. The municipality also gave us bags and gloves."
        },
        {
          sp: "Turki",
          t: "Has it made a difference?"
        },
        {
          sp: "Mr. Waleed",
          t: "Yes. Families use the park again, and people are more careful with their rubbish. But the best change is that children now remind adults not to drop litter."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the interview mainly about?",
          opts: [
            ["How a clean-up project started and grew", null],
            ["Why a park near the mosque was closed", "The park was dirty, not closed."],
            ["How the municipality cleans the streets", "The municipality only gave bags and gloves. Volunteers do the cleaning."],
            ["New rules for families who use the park", "No new rules are mentioned."]
          ],
          hint: "Think about all of Turki’s questions together.",
          exp: "Turki asks how the project started, how many people help, and whether it made a difference. The interview is about the project’s story.",
          ev: "Mr. Waleed, how did the neighborhood clean-up start?"
        },
        {
          skill: "Cause and effect",
          q: "Why did the clean-up start?",
          opts: [
            ["People complained about litter in a park.", null],
            ["The municipality asked for volunteers.", "The municipality helped later. It did not start the project."],
            ["Students needed volunteer hours.", "Volunteer hours are not mentioned."],
            ["A new park was opening.", "The park already existed. It was full of litter."]
          ],
          hint: "Listen to Mr. Waleed’s first answer.",
          exp: "People complained that the park was full of litter, so neighbors decided to clean it.",
          ev: "Last year, people complained that the small park near the mosque was full of litter."
        },
        {
          skill: "Explicit details",
          q: "How many people help with the clean-up now?",
          opts: [
            ["About forty", null],
            ["Six", "Six people helped at the start, not now."],
            ["About fourteen", "Listen again. The number is bigger."],
            ["About four hundred", "Listen again. The number is much smaller."]
          ],
          hint: "Listen for the word “Now”.",
          exp: "Mr. Waleed says, “We started with six. Now about forty people come.”",
          ev: "Now about forty people come, including many students."
        },
        {
          skill: "Explicit details",
          q: "What does Mr. Waleed say is the best change?",
          opts: [
            ["Children remind adults about litter.", null],
            ["Families use the park again.", "He mentions this, but then he says another change is the best."],
            ["The municipality gives free gloves.", "Gloves are help for the project, not a change in the neighborhood."],
            ["The park won a city prize for cleanliness.", "A prize is not mentioned."]
          ],
          hint: "Listen for the words “the best change”.",
          exp: "Mr. Waleed says, “The best change is that children now remind adults not to drop litter.”",
          ev: "But the best change is that children now remind adults not to drop litter."
        },
        {
          skill: "Simple inference",
          q: "What can you infer about the people in the neighborhood now?",
          opts: [
            ["They care more about keeping the park clean.", null],
            ["They want the municipality to build a new park.", "A new park is not mentioned."],
            ["They have stopped visiting the park.", "The opposite is true. Families use the park again."],
            ["They pay money to use the park.", "Money is not mentioned."]
          ],
          hint: "Listen to the last answer. What do people do differently now?",
          exp: "People are more careful with their rubbish and children remind adults, so the neighborhood cares more about the park.",
          ev: "Families use the park again, and people are more careful with their rubbish."
        }
      ]
    },
    {
      id: "l3d",
      level: 3,
      title: "The Water Fountain Problem",
      topic: "Solving a school problem",
      format: "Student council meeting",
      intro: "At a student council meeting, two students and their teacher adviser discuss a problem at school.",
      vocab: [
        ["water fountain", "a machine at school that gives drinking water"],
        ["maintenance office", "the people who repair things in a building"],
        ["report", "a written or spoken description of a problem"],
        ["refillable", "can be filled again and again"]
      ],
      speakers: {
        Leen: "Student council president",
        Dana: "Student council member",
        "Ms. Nada": "Teacher adviser"
      },
      voices: {
        Leen: "a",
        Dana: "c",
        "Ms. Nada": "b"
      },
      script: [
        {
          sp: "Leen",
          t: "Our first item today is the water fountains. Students say two of the three fountains on the second floor do not work."
        },
        {
          sp: "Dana",
          t: "Yes, and the line at the last fountain is very long at break, so some students go back to class thirsty."
        },
        {
          sp: "Ms. Nada",
          t: "Have you reported it to the maintenance office?"
        },
        {
          sp: "Leen",
          t: "Not yet. We wanted to collect information first."
        },
        {
          sp: "Ms. Nada",
          t: "Good idea. Write down which fountains are broken and when the problem started. Then I’ll take your report to the office tomorrow."
        },
        {
          sp: "Dana",
          t: "Until they are fixed, could students bring refillable bottles?"
        },
        {
          sp: "Leen",
          t: "Yes. Let’s announce that on the school radio."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What problem are they discussing?",
          opts: [
            ["Most of the fountains on one floor do not work.", null],
            ["The water in the fountains is dirty.", "Dirty water is not mentioned."],
            ["Students waste water at break.", "Wasting water is not mentioned."],
            ["There are no fountains on the second floor.", "There are three fountains. Two of them do not work."]
          ],
          hint: "Listen to Leen’s first sentence.",
          exp: "Leen says two of the three fountains on the second floor do not work.",
          ev: "Students say two of the three fountains on the second floor do not work."
        },
        {
          skill: "Explicit details",
          q: "How many fountains on the second floor work?",
          opts: [
            ["One", null],
            ["Two", "Two fountains do NOT work."],
            ["Three", "There are three fountains, but not all of them work."],
            ["None", "Dana talks about “the last fountain”, so one still works."]
          ],
          hint: "There are three fountains. Two do not work. How many are left?",
          exp: "Two of the three do not work, so only one fountain works.",
          ev: "Students say two of the three fountains on the second floor do not work."
        },
        {
          skill: "Cause and effect",
          q: "What happens because of the problem?",
          opts: [
            ["Some students go back to class thirsty.", null],
            ["Students miss the start of break.", "Students have break, but the line is long."],
            ["The maintenance office closes early.", "The office is not closing."],
            ["Classes start later.", "Class times do not change."]
          ],
          hint: "Listen to Dana’s first sentence. Find the word “so”.",
          exp: "The line is long, so some students go back to class thirsty.",
          ev: "Yes, and the line at the last fountain is very long at break, so some students go back to class thirsty."
        },
        {
          skill: "Speaker’s purpose",
          q: "What will Ms. Nada do?",
          opts: [
            ["Take the students’ report to the office", null],
            ["Repair the broken fountains herself after school", "She will not repair them. She will take a report to the people who do."],
            ["Buy bottles for all students", "Students may bring their own bottles."],
            ["Announce the problem on the school radio", "The students will make the radio announcement."]
          ],
          hint: "Listen to Ms. Nada’s last sentence: “Then I’ll…”",
          exp: "Ms. Nada says, “I’ll take your report to the office tomorrow.”",
          ev: "Then I’ll take your report to the office tomorrow."
        },
        {
          skill: "Simple inference",
          q: "Why did Leen want to collect information before reporting the problem?",
          opts: [
            ["So the report would be clear and useful", null],
            ["Because she does not trust the teacher", "Leen works with the teacher. Trust is not the issue."],
            ["Because the office is closed this month", "The office is not closed. Ms. Nada will go tomorrow."],
            ["Because students asked her to wait", "Nobody asked her to wait."]
          ],
          hint: "What does Ms. Nada ask them to write down?",
          exp: "Ms. Nada calls it a good idea and asks for exact details, which make the report clear and useful.",
          ev: "Write down which fountains are broken and when the problem started."
        }
      ]
    },
    {
      id: "l3e",
      level: 3,
      title: "Sleep and Study",
      topic: "Healthy study habits",
      format: "Short interview",
      intro: "On the school radio, a student presenter asks the school nurse for advice about studying before exams.",
      vocab: [
        ["stay up late", "to go to bed very late"],
        ["brain", "the part of your head that thinks and remembers"],
        ["concentrate", "to give all your attention to something"],
        ["session", "a period of time for one activity"]
      ],
      speakers: {
        Rana: "Student radio presenter",
        "Nurse Mona": "School nurse"
      },
      voices: {
        Rana: "c",
        "Nurse Mona": "a"
      },
      script: [
        {
          sp: "Rana",
          t: "Today we’re talking with Nurse Mona about studying before exams. Nurse Mona, many students stay up late to study. Is that a good idea?"
        },
        {
          sp: "Nurse Mona",
          t: "Not really. When you sleep, your brain stores what you learned during the day. If you sleep for only four or five hours, you often forget more and find it harder to concentrate."
        },
        {
          sp: "Rana",
          t: "So what do you recommend?"
        },
        {
          sp: "Nurse Mona",
          t: "Teenagers need about eight to ten hours of sleep. Study in short sessions in the afternoon, take a break every forty minutes, and stop using your phone an hour before bed."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the main message of the interview?",
          opts: [
            ["Enough sleep helps students learn.", null],
            ["Students should study late at night.", "Nurse Mona says this is not a good idea."],
            ["Exams should be shorter.", "The length of exams is not discussed."],
            ["Phones help students relax before bed.", "She says to stop using phones before bed."]
          ],
          hint: "What does Nurse Mona say about sleep and learning?",
          exp: "Nurse Mona explains that sleep helps the brain store learning, so students need enough of it.",
          ev: "When you sleep, your brain stores what you learned during the day."
        },
        {
          skill: "Cause and effect",
          q: "Why is sleep important for learning, according to Nurse Mona?",
          opts: [
            ["Your brain stores new learning during sleep.", null],
            ["Sleeping early gives you more hours to study the next day.", "She does not say this. Sleep is not study time."],
            ["Students can study in their dreams.", "This is not mentioned."],
            ["Sleep stops you from using your phone.", "Phones are mentioned later, as separate advice."]
          ],
          hint: "Listen to her first answer: “When you sleep…”",
          exp: "She says, “When you sleep, your brain stores what you learned during the day.”",
          ev: "When you sleep, your brain stores what you learned during the day."
        },
        {
          skill: "Explicit details",
          q: "How much sleep do teenagers need?",
          opts: [
            ["About eight to ten hours", null],
            ["Four or five hours", "This is too little. She says it makes students forget more."],
            ["Exactly six hours", "Six hours is not mentioned."],
            ["More than twelve hours", "Listen again for the numbers."]
          ],
          hint: "Listen for the word “Teenagers”.",
          exp: "Nurse Mona says, “Teenagers need about eight to ten hours of sleep.”",
          ev: "Teenagers need about eight to ten hours of sleep."
        },
        {
          skill: "Explicit details",
          q: "How often should students take a break when they study?",
          opts: [
            ["Every forty minutes", null],
            ["Every four hours", "Four hours is not mentioned for breaks."],
            ["Once an hour", "“An hour” is about phones before bed, not about breaks."],
            ["Only after they finish", "She recommends regular breaks."]
          ],
          hint: "Listen for the word “break”.",
          exp: "She says, “Take a break every forty minutes.”",
          ev: "Study in short sessions in the afternoon, take a break every forty minutes, and stop using your phone an hour before bed."
        },
        {
          skill: "Speaker’s purpose",
          q: "Why does Rana interview Nurse Mona?",
          opts: [
            ["To give students advice before exams", null],
            ["To ask about the clinic’s opening hours", "Clinic hours are not mentioned."],
            ["To complain that students get too much homework", "Rana does not complain."],
            ["To advertise a phone app", "No app is mentioned."]
          ],
          hint: "Listen to Rana’s first sentence.",
          exp: "Rana says they are “talking with Nurse Mona about studying before exams”, so the purpose is to give students advice.",
          ev: "Today we’re talking with Nurse Mona about studying before exams."
        }
      ]
    },
    {
      id: "l4a",
      level: 4,
      title: "Interview: From Four Losses to Champions",
      topic: "A sports interview",
      format: "Radio interview",
      intro: "On the school radio, a presenter interviews the captain of the basketball team after a big win.",
      vocab: [
        ["tournament", "a competition with many teams and matches"],
        ["in a row", "one after another, with no break"],
        ["individual", "one person, not a group"]
      ],
      speakers: {
        Host: "School radio presenter",
        Hamad: "Basketball team captain"
      },
      voices: {
        Host: "b",
        Hamad: "a"
      },
      script: [
        {
          sp: "Host",
          t: "Today on School Radio, we’re talking with Hamad, captain of our basketball team, which won the city tournament last weekend. Congratulations, Hamad!"
        },
        {
          sp: "Hamad",
          t: "Thank you. Honestly, it still feels like a dream."
        },
        {
          sp: "Host",
          t: "At the start of the season, your team lost four games in a row. What changed?"
        },
        {
          sp: "Hamad",
          t: "Our coach made us watch videos of our games. We saw that we were not passing the ball enough. Everyone wanted to score alone. So we practiced passing every day for two weeks, even when it was boring."
        },
        {
          sp: "Host",
          t: "And the result?"
        },
        {
          sp: "Hamad",
          t: "We won our next eight games. I learned that a team with good teamwork can beat a team with better individual players."
        },
        {
          sp: "Host",
          t: "What advice would you give younger students?"
        },
        {
          sp: "Hamad",
          t: "Don’t give up after a bad start. Find the problem and work on it every day."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the interview mainly about?",
          opts: [
            ["How a basketball team improved after a bad start", null],
            ["How to become a radio presenter", "The host is a presenter, but the interview is about the team."],
            ["The rules of basketball", "Rules are not explained."],
            ["Why Hamad wants to leave the team", "Hamad is the captain and proud of the team."]
          ],
          hint: "Think about the beginning of the season and the end of the season.",
          exp: "The team lost four games, found the problem, practiced, and then won the tournament.",
          ev: "At the start of the season, your team lost four games in a row. What changed?"
        },
        {
          skill: "Supporting details",
          q: "What problem did the videos show?",
          opts: [
            ["The players were not passing the ball enough.", null],
            ["The players were too slow.", "Speed is not mentioned."],
            ["The coach was too strict.", "Hamad does not criticize the coach."],
            ["The players had the wrong shoes for the indoor court.", "Shoes are not mentioned."]
          ],
          hint: "Listen to what Hamad says after “Our coach made us watch videos”.",
          exp: "Hamad says, “We saw that we were not passing the ball enough. Everyone wanted to score alone.”",
          ev: "We saw that we were not passing the ball enough."
        },
        {
          skill: "Supporting details",
          q: "How many games did the team win after practicing passing?",
          opts: [
            ["Eight", null],
            ["Four", "Four is the number of games they LOST at the start."],
            ["Two", "Two is the number of weeks they practiced."],
            ["Ten", "Ten is not mentioned."]
          ],
          hint: "Listen to Hamad’s answer to “And the result?”",
          exp: "Hamad says, “We won our next eight games.”",
          ev: "We won our next eight games."
        },
        {
          skill: "Speaker intention",
          q: "Why does Hamad say, “It still feels like a dream”?",
          opts: [
            ["To show he is still surprised and happy about winning", null],
            ["To say he was asleep during the final game", "This is an expression. He does not mean he was sleeping."],
            ["To show that he did not play in any games in the tournament", "Hamad is the captain and played."],
            ["To say he is sad about the season", "He is thanking the host after a win, so he is not sad."]
          ],
          hint: "He says this right after the host congratulates him. How does a winner feel?",
          exp: "“It feels like a dream” is an expression people use when something is so good it is hard to believe. Hamad is surprised and happy.",
          ev: "Thank you. Honestly, it still feels like a dream."
        },
        {
          skill: "Inference",
          q: "What does Hamad believe about teamwork?",
          opts: [
            ["Good teamwork can be more important than having the best players.", null],
            ["The best individual players always win.", "Hamad says the opposite."],
            ["Passing is boring, so good teams should not spend time practicing it.", "He says it was boring, but they practiced anyway and it worked."],
            ["Coaches should not use videos.", "The videos helped the team find the problem."]
          ],
          hint: "Listen for “I learned that…”.",
          exp: "Hamad says a team with good teamwork can beat a team with better individual players.",
          ev: "I learned that a team with good teamwork can beat a team with better individual players."
        }
      ]
    },
    {
      id: "l4b",
      level: 4,
      title: "Planning Environment Week",
      topic: "Environmental awareness",
      format: "School discussion",
      intro: "A teacher and two students are choosing a project for Environment Week.",
      vocab: [
        ["recycling", "using old materials to make new things"],
        ["bin", "a container for rubbish"],
        ["cafeteria", "the place at school where students buy and eat food"]
      ],
      speakers: {
        "Ms. Reem": "Teacher",
        Huda: "Student",
        Jana: "Student"
      },
      voices: {
        "Ms. Reem": "b",
        Huda: "a",
        Jana: "c"
      },
      script: [
        {
          sp: "Ms. Reem",
          t: "Okay, group, you need to choose one project for Environment Week. What are your ideas?"
        },
        {
          sp: "Huda",
          t: "I think we should put recycling bins in every classroom. Right now, most plastic bottles end up in the normal trash."
        },
        {
          sp: "Jana",
          t: "That’s a good idea, but bins alone won’t work. Last year, the school put two bins in the cafeteria, and people still threw food in them. Students need to understand why recycling matters."
        },
        {
          sp: "Huda",
          t: "So what do you suggest?"
        },
        {
          sp: "Jana",
          t: "We could do both. First, we make short videos explaining what can be recycled. Then we place the bins."
        },
        {
          sp: "Ms. Reem",
          t: "I like that you’re thinking about the reason behind the problem, Jana. Huda, can you find out how much the bins cost?"
        },
        {
          sp: "Huda",
          t: "Sure. I’ll ask the school office tomorrow."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the main purpose of the discussion?",
          opts: [
            ["To choose and plan a recycling project for Environment Week", null],
            ["To decide what healthy food the school cafeteria should sell next term", "The cafeteria is mentioned only as an example."],
            ["To complain about the school office", "Huda will ask the office a question. Nobody complains."],
            ["To make a video about sports", "The videos are about recycling."]
          ],
          hint: "Listen to Ms. Reem’s first sentence.",
          exp: "Ms. Reem asks the group to choose one project for Environment Week, and they plan a recycling project.",
          ev: "Okay, group, you need to choose one project for Environment Week."
        },
        {
          skill: "Supporting details",
          q: "According to Jana, what happened last year?",
          opts: [
            ["People threw food into the recycling bins in the cafeteria.", null],
            ["The school had no recycling bins.", "Jana says the school put two bins in the cafeteria."],
            ["Students made recycling videos.", "Videos are Jana’s new idea for this year."],
            ["The recycling bins were too expensive for the school to buy.", "Cost is discussed for this year, not last year."]
          ],
          hint: "Listen for “Last year…”.",
          exp: "Jana says the school put two bins in the cafeteria, and people still threw food in them.",
          ev: "Last year, the school put two bins in the cafeteria, and people still threw food in them."
        },
        {
          skill: "Speaker intention",
          q: "Why does Jana mention what happened last year?",
          opts: [
            ["To show that bins alone may not solve the problem", null],
            ["To blame Huda for the problem", "Jana says Huda’s idea is good. She is not blaming her."],
            ["To praise the cafeteria workers", "The cafeteria workers are not mentioned."],
            ["To change the topic of the discussion to something else", "Her example is about recycling, the same topic."]
          ],
          hint: "Listen to what Jana says just before the example: “…but bins alone won’t work.”",
          exp: "Jana uses last year as evidence. Bins were there, but people used them wrongly, so students also need to understand recycling.",
          ev: "That’s a good idea, but bins alone won’t work."
        },
        {
          skill: "Supporting details",
          q: "What plan does the group finally agree on?",
          opts: [
            ["Make short videos first, then place the bins", null],
            ["Place bins only", "Jana says bins alone won’t work."],
            ["Make videos only", "Jana says, “We could do both.”"],
            ["Cancel the project", "The teacher supports the plan and asks about cost."]
          ],
          hint: "Listen for “We could do both.”",
          exp: "Jana suggests doing both: first videos, then bins. Ms. Reem supports the idea.",
          ev: "First, we make short videos explaining what can be recycled. Then we place the bins."
        },
        {
          skill: "Inference",
          q: "What will Huda most likely do tomorrow?",
          opts: [
            ["Ask the school office about the cost of the bins", null],
            ["Make a recycling video", "The teacher gives Huda a different job."],
            ["Clean the cafeteria", "This is not mentioned."],
            ["Choose a new project", "The group already has a plan."]
          ],
          hint: "Listen to the last two sentences.",
          exp: "Ms. Reem asks Huda to find out the cost, and Huda says she will ask the school office tomorrow.",
          ev: "Sure. I’ll ask the school office tomorrow."
        }
      ]
    },
    {
      id: "l4c",
      level: 4,
      title: "Think Before You Post",
      topic: "Digital responsibility",
      format: "Short talk",
      intro: "An IT teacher speaks to students at morning assembly about posting messages and photos online.",
      vocab: [
        ["screenshot", "a picture of what is on a screen"],
        ["share", "to send something you received to other people"],
        ["embarrassed", "feeling uncomfortable because people know something about you"],
        ["comfortable", "relaxed, without worry"]
      ],
      speakers: {
        "Mr. Fares": "IT teacher"
      },
      voices: {
        "Mr. Fares": "b"
      },
      script: [
        {
          sp: "Mr. Fares",
          t: "Good morning, everyone. Today I want to talk about something that happens in seconds but can last for years: posting online. Many students think a message disappears when they delete it. In reality, someone may already have taken a screenshot, and it can be shared again and again."
        },
        {
          sp: "Mr. Fares",
          t: "Last year, a student at another school posted a joke about a classmate. He deleted it after ten minutes, but by then it had been shared in three different groups. The classmate was hurt, and the student who posted it was embarrassed for months."
        },
        {
          sp: "Mr. Fares",
          t: "So, before you post, ask yourself three questions. Is it true? Is it kind? Would I be comfortable if my teacher or my family saw it? If the answer to any question is no, don’t post it."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is Mr. Fares’s main point?",
          opts: [
            ["Posts can last, so think before you post.", null],
            ["Delete your old messages and photos every day.", "He says deleting may not help, so this is not his advice."],
            ["Screenshots should be banned.", "He does not suggest banning anything."],
            ["Do not use phones at school.", "Phones at school are not discussed."]
          ],
          hint: "Listen to his first and last sentences.",
          exp: "He opens by saying posting “can last for years” and ends with questions to ask before posting.",
          ev: "Today I want to talk about something that happens in seconds but can last for years: posting online."
        },
        {
          skill: "Supporting details",
          q: "Why does he say deleting a message may not help?",
          opts: [
            ["Someone may already have taken a screenshot.", null],
            ["Deleted messages come back after a week.", "This is not mentioned."],
            ["Teachers can read deleted messages.", "This is not mentioned."],
            ["The phone saves a hidden copy.", "He does not talk about hidden copies. Listen for “screenshot”."]
          ],
          hint: "Listen for the words “In reality”.",
          exp: "He says someone may already have taken a screenshot, which can be shared again and again.",
          ev: "In reality, someone may already have taken a screenshot, and it can be shared again and again."
        },
        {
          skill: "Speaker’s purpose",
          q: "Why does Mr. Fares tell the story about a student at another school?",
          opts: [
            ["To give a real example of a post that caused harm", null],
            ["To warn students about a dangerous app", "No app is mentioned."],
            ["To explain how to take a screenshot", "He does not explain how to do this."],
            ["To praise the student for deleting the post quickly", "The student deleted it, but it was already too late. The story is a warning."]
          ],
          hint: "What happened to the people in the story?",
          exp: "The story shows his point in real life: a deleted post still spread and hurt people.",
          ev: "The classmate was hurt, and the student who posted it was embarrassed for months."
        },
        {
          skill: "Supporting details",
          q: "How long was the joke online before the student deleted it?",
          opts: [
            ["Ten minutes", null],
            ["Three days", "“Three” is the number of groups, not days."],
            ["Several months", "He was embarrassed for months, but the post was online for a short time."],
            ["One hour", "An hour is not mentioned."]
          ],
          hint: "Listen for the word “deleted”.",
          exp: "He deleted it after ten minutes, but it had already been shared.",
          ev: "He deleted it after ten minutes, but by then it had been shared in three different groups."
        },
        {
          skill: "Inference",
          q: "Which post would Mr. Fares probably advise a student not to share?",
          opts: [
            ["A funny photo of a friend, taken without asking", null],
            ["A photo of a finished science project", "This is true, kind, and fine for family to see."],
            ["Congratulations to the school football team", "This passes all three of his questions."],
            ["A reminder about tomorrow’s quiz", "This is true and helpful."]
          ],
          hint: "Use his three questions: Is it true? Is it kind? Would I be comfortable if my family saw it?",
          exp: "A photo taken without asking may not be kind, and the friend may be hurt, so it fails his test.",
          ev: "Is it true? Is it kind? Would I be comfortable if my teacher or my family saw it?"
        }
      ]
    },
    {
      id: "l4d",
      level: 4,
      title: "What We Learned from Losing",
      topic: "Learning from mistakes",
      format: "Radio interview",
      intro: "The school radio interviews Yara, a member of the robotics team, about how her team improved.",
      vocab: [
        ["robotics", "building and programming robots"],
        ["disappointed", "sad because something was not as good as you hoped"],
        ["code", "instructions written for a computer"],
        ["coach", "a person who trains a team"]
      ],
      speakers: {
        Host: "School radio presenter",
        Yara: "Robotics team member"
      },
      voices: {
        Host: "b",
        Yara: "a"
      },
      script: [
        {
          sp: "Host",
          t: "Yara, your robotics team finished last in its first competition. This year, you won second place. What changed?"
        },
        {
          sp: "Yara",
          t: "Honestly, losing was the best thing that happened to us. After the first competition, we were disappointed, but our coach asked us to write down every problem we had. The list was long. Our robot was too heavy, our code had errors, and we only practiced in the last week."
        },
        {
          sp: "Host",
          t: "That sounds difficult to hear."
        },
        {
          sp: "Yara",
          t: "It was. But the list showed us exactly what to fix. This year, we built a lighter robot, tested the code every week, and practiced for three months."
        },
        {
          sp: "Host",
          t: "What advice would you give other students?"
        },
        {
          sp: "Yara",
          t: "Don’t hide your mistakes. Study them. A mistake is information, not a final result."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is Yara’s main message?",
          opts: [
            ["Mistakes help you improve if you study them.", null],
            ["Robotics competitions are too difficult for students.", "Her team did well in the end. She does not say this."],
            ["A team cannot win without an expensive robot.", "Money and price are not mentioned."],
            ["Second place is better than first place.", "She does not compare places like this."]
          ],
          hint: "Listen to her advice at the end.",
          exp: "Yara explains how studying their problems helped them improve, and she says, “Don’t hide your mistakes. Study them.”",
          ev: "Don’t hide your mistakes. Study them."
        },
        {
          skill: "Supporting details",
          q: "Which problem did the team have in the first competition?",
          opts: [
            ["Their robot was too heavy.", null],
            ["They had no coach.", "They had a coach. The coach asked them to write the list."],
            ["Their robot was too small.", "The problem was weight, not size."],
            ["They practiced for too long.", "The opposite is true. They practiced only in the last week."]
          ],
          hint: "Listen to the list of problems.",
          exp: "Yara says, “Our robot was too heavy, our code had errors, and we only practiced in the last week.”",
          ev: "Our robot was too heavy, our code had errors, and we only practiced in the last week."
        },
        {
          skill: "Speaker’s purpose",
          q: "Why did the coach ask the team to write down every problem?",
          opts: [
            ["So they could see what to fix", null],
            ["To punish the team for losing", "Nothing suggests a punishment."],
            ["To send the list to the judges", "The judges are not mentioned."],
            ["To decide which students should leave the team", "Nobody left the team."]
          ],
          hint: "Listen to what the list showed them.",
          exp: "Yara says, “The list showed us exactly what to fix.”",
          ev: "But the list showed us exactly what to fix."
        },
        {
          skill: "Supporting details",
          q: "How did the team prepare differently this year?",
          opts: [
            ["They practiced for months and tested often.", null],
            ["They bought a lighter robot from a technology company.", "They built a lighter robot themselves. They did not buy one."],
            ["They found a new coach.", "The coach did not change."],
            ["They practiced only in the last week.", "That was the problem in the first competition."]
          ],
          hint: "Listen for the words “This year”.",
          exp: "This year they built a lighter robot, tested the code every week, and practiced for three months.",
          ev: "This year, we built a lighter robot, tested the code every week, and practiced for three months."
        },
        {
          skill: "Inference",
          q: "What does Yara mean when she says, “A mistake is information, not a final result”?",
          opts: [
            ["A mistake shows you what to work on next.", null],
            ["Mistakes should be reported to teachers.", "She is not talking about reporting mistakes."],
            ["After one mistake, you have failed for good.", "This is the opposite of her meaning."],
            ["Information is more important than winning.", "She is not comparing information and winning."]
          ],
          hint: "Think about what the list of problems did for her team.",
          exp: "For Yara’s team, the mistakes showed what to fix. So a mistake tells you what to improve. It is not the end.",
          ev: "A mistake is information, not a final result."
        }
      ]
    },
    {
      id: "l4e",
      level: 4,
      title: "Are You Really Listening?",
      topic: "Effective communication",
      format: "Discussion with a counselor",
      intro: "Two students tell the school counselor about a problem in their group project.",
      vocab: [
        ["argue", "to talk angrily because you disagree"],
        ["misunderstanding", "when people understand something in different ways"],
        ["out loud", "so that other people can hear"],
        ["prevent", "to stop something before it happens"]
      ],
      speakers: {
        "Mr. Sami": "School counselor",
        Bader: "Student",
        Talal: "Student"
      },
      voices: {
        "Mr. Sami": "b",
        Bader: "a",
        Talal: "c"
      },
      script: [
        {
          sp: "Mr. Sami",
          t: "So, Bader, you said your group project isn’t going well. What’s the problem?"
        },
        {
          sp: "Bader",
          t: "We argue all the time. Everyone talks at once, and nobody listens. Yesterday, Talal and I both thought the other person was making the poster, so nobody made it."
        },
        {
          sp: "Talal",
          t: "That’s true. I thought we had agreed, but we never actually checked."
        },
        {
          sp: "Mr. Sami",
          t: "This is very common. Good communication isn’t only about speaking clearly. It’s also about listening and checking. Try this: at the end of every meeting, one person repeats the plan out loud: who is doing what, and by when. Then write it in your group chat."
        },
        {
          sp: "Talal",
          t: "That sounds almost too simple."
        },
        {
          sp: "Mr. Sami",
          t: "It is simple, but it prevents most misunderstandings."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "What is the main problem in Bader’s group?",
          opts: [
            ["They do not listen or check plans.", null],
            ["They do not have enough time.", "Time is not mentioned as the problem."],
            ["Their topic is too difficult.", "The topic is not discussed."],
            ["One member is often absent from their meetings.", "Nobody is absent. They all talk at once."]
          ],
          hint: "Listen to Bader’s first answer.",
          exp: "Bader says everyone talks at once and nobody listens, and Talal says they never checked their plan.",
          ev: "We argue all the time. Everyone talks at once, and nobody listens."
        },
        {
          skill: "Supporting details",
          q: "What happened with the poster?",
          opts: [
            ["Each boy thought the other was making it.", null],
            ["Talal made it, but Bader did not like it.", "Nobody made the poster."],
            ["It was too small for the project.", "The size is not mentioned."],
            ["They made two different posters by mistake, one each.", "The opposite happened. There was no poster."]
          ],
          hint: "Listen for the word “poster”.",
          exp: "Bader says each of them thought the other person was making it, so nobody made it.",
          ev: "Yesterday, Talal and I both thought the other person was making the poster, so nobody made it."
        },
        {
          skill: "Identifying viewpoints",
          q: "According to Mr. Sami, good communication includes…",
          opts: [
            ["listening and checking.", null],
            ["speaking louder than the others.", "He never suggests speaking louder."],
            ["always agreeing with the group.", "Agreeing is not his point."],
            ["using the group chat for every discussion and decision.", "He suggests the chat only for writing down the plan."]
          ],
          hint: "Listen for the words “Good communication isn’t only…”.",
          exp: "Mr. Sami says, “It’s also about listening and checking.”",
          ev: "Good communication isn’t only about speaking clearly. It’s also about listening and checking."
        },
        {
          skill: "Speaker’s purpose",
          q: "Why does Mr. Sami suggest repeating the plan at the end of each meeting?",
          opts: [
            ["So everyone knows who does what", null],
            ["So the meeting lasts longer", "Length is not his reason."],
            ["So the teacher can give the whole group a fair grade", "The teacher is not mentioned."],
            ["So the group can choose a new leader", "A leader is not mentioned."]
          ],
          hint: "Listen to what the person repeats out loud.",
          exp: "Repeating “who is doing what, and by when” makes sure everyone understands the same plan.",
          ev: "Try this: at the end of every meeting, one person repeats the plan out loud: who is doing what, and by when."
        },
        {
          skill: "Inference",
          q: "What does Talal think of the advice at first?",
          opts: [
            ["He doubts such an easy idea will work.", null],
            ["He thinks it will be too difficult.", "He says the opposite: it sounds very simple."],
            ["He is angry with Mr. Sami.", "Talal is polite. He is not angry."],
            ["He thinks Bader should do all of the project work.", "Talal does not say this."]
          ],
          hint: "Listen to how Talal reacts: “almost too simple”.",
          exp: "“Almost too simple” suggests Talal is not sure such an easy idea will work. Mr. Sami answers that it prevents most misunderstandings.",
          ev: "That sounds almost too simple."
        }
      ]
    },
    {
      id: "l5a",
      level: 5,
      title: "Advice from a Former Student",
      topic: "Preparing for university",
      format: "Short presentation",
      intro: "A former student, now at university, visits the school to give advice to older students.",
      vocab: [
        ["semester", "half of a university year"],
        ["employer", "a company or person who gives people jobs"],
        ["deadline", "the last time or day to finish something"],
        ["planner", "a book or app for planning your time"]
      ],
      speakers: {
        Abdullah: "Engineering student and former NVS student"
      },
      voices: {
        Abdullah: "a"
      },
      script: [
        {
          sp: "Abdullah",
          t: "Good morning, everyone. My name is Abdullah, and five years ago I was sitting exactly where you are now. Today I study engineering at university, and I want to share three things I wish someone had told me in Grade 11."
        },
        {
          sp: "Abdullah",
          t: "First, English matters more than you think. At my university, most textbooks and many lectures are in English. In my first semester, I spent hours translating every page, while some classmates simply read and moved on."
        },
        {
          sp: "Abdullah",
          t: "Second, grades are important, but they are not everything. Universities and employers also look at what you did outside class. Did you volunteer? Did you join a club? Did you finish a project you cared about?"
        },
        {
          sp: "Abdullah",
          t: "Third, learn how to manage your own time. At school, teachers remind you about homework. At university, nobody will chase you. If you don’t plan, the deadlines arrive very quickly."
        },
        {
          sp: "Abdullah",
          t: "Some of you may think university is still far away. Believe me, it isn’t. So start small: read one English article a week, join one activity, and keep a simple planner. Your future self will thank you."
        }
      ],
      questions: [
        {
          skill: "Speaker’s purpose",
          q: "What is Abdullah’s main purpose?",
          opts: [
            ["To advise students to build useful habits now to prepare for university", null],
            ["To persuade everyone to study engineering", "He mentions engineering only to introduce himself."],
            ["To complain about his university", "He gives advice. He does not complain."],
            ["To explain how to translate textbooks", "Translating is an example of a problem he had."]
          ],
          hint: "Listen to the end of the first paragraph and to his final advice.",
          exp: "Abdullah shares three things he wishes he had known and ends with small steps students can start now.",
          ev: "So start small: read one English article a week, join one activity, and keep a simple planner."
        },
        {
          skill: "Implied meaning",
          q: "What does Abdullah mean when he says, “At university, nobody will chase you”?",
          opts: [
            ["Students must remember their deadlines and manage time themselves.", null],
            ["University buildings are too big, so students are often late for class.", "“Chase” here is not about running."],
            ["Nobody will talk to new students.", "He is talking about reminders for work, not friendship."],
            ["Teachers at university are very fast.", "“Chase” is not about speed here. Compare what teachers do at school with what happens at university."]
          ],
          hint: "Listen to the sentence before it: “At school, teachers remind you about homework.”",
          exp: "He contrasts school, where teachers remind you, with university, where nobody reminds you. You must manage your own time.",
          ev: "At school, teachers remind you about homework. At university, nobody will chase you."
        },
        {
          skill: "Drawing conclusions",
          q: "Why did Abdullah most likely spend hours translating every page?",
          opts: [
            ["His English was not strong enough to read the textbooks easily.", null],
            ["He enjoyed translating as a hobby.", "He presents it as a problem, not a hobby."],
            ["His professors asked him to translate the books.", "Professors are not mentioned."],
            ["His textbooks were written in Arabic.", "He says most textbooks are in English."]
          ],
          hint: "Compare Abdullah with the classmates who “simply read and moved on”.",
          exp: "He does not say this directly, but his point is that “English matters more than you think.” His classmates could read easily, so his English was weaker.",
          ev: "In my first semester, I spent hours translating every page, while some classmates simply read and moved on."
        },
        {
          skill: "Identifying viewpoints",
          q: "What is Abdullah’s view about grades?",
          opts: [
            ["Grades are important, but activities outside class also matter.", null],
            ["Grades are not important at all.", "He says grades ARE important."],
            ["Grades are the only thing universities look at.", "He says universities also look at what you did outside class."],
            ["Students should stop studying so hard and only join clubs and activities.", "He never says to stop studying."]
          ],
          hint: "Listen for “Second…”.",
          exp: "He says, “Grades are important, but they are not everything,” and lists volunteering, clubs, and projects.",
          ev: "Second, grades are important, but they are not everything."
        },
        {
          skill: "Implied meaning",
          q: "What does “Your future self will thank you” mean?",
          opts: [
            ["You will be glad later that you built these habits now.", null],
            ["You will receive a thank-you letter at university.", "This is an expression, not a real letter."],
            ["You should thank your teachers today.", "He is not talking about thanking teachers."],
            ["These habits are too difficult for most students.", "He says to “start small”, so he thinks they are possible."]
          ],
          hint: "Who is your “future self”? It is you, a few years from now.",
          exp: "The expression means that the person you become later will benefit from the good choices you make now.",
          ev: "Your future self will thank you."
        }
      ]
    },
    {
      id: "l5b",
      level: 5,
      title: "Podcast: Passion or the Job Market?",
      topic: "Choosing a future career",
      format: "Student podcast discussion",
      intro: "Three students discuss an important question on the school podcast: how should you choose a career?",
      vocab: [
        ["passion", "something you love doing"],
        ["job market", "the jobs that are available and the people looking for them"],
        ["renewable energy", "power from the sun, wind, or water that does not run out"],
        ["major", "the main subject you study at university"]
      ],
      speakers: {
        Sara: "Podcast host",
        Lama: "Guest",
        Rawan: "Guest"
      },
      voices: {
        Sara: "b",
        Lama: "a",
        Rawan: "c"
      },
      script: [
        {
          sp: "Sara",
          t: "Welcome back to the NVS Student Podcast. Today’s question is a big one: should you choose a career based on your passion or on the job market? Lama, let’s start with you."
        },
        {
          sp: "Lama",
          t: "I believe passion should come first. If you love what you do, you’ll work harder and keep learning. My aunt studied art even though people told her there were no jobs. Now she designs apps for a technology company."
        },
        {
          sp: "Rawan",
          t: "I understand that, but I think it’s risky. Passion doesn’t pay the bills. Before choosing a major, students should research which jobs will be needed in the future. Saudi Arabia is investing heavily in fields like tourism, renewable energy, and healthcare."
        },
        {
          sp: "Sara",
          t: "So, Rawan, should students ignore what they love?"
        },
        {
          sp: "Rawan",
          t: "Not at all. I’m saying they should look for the place where their interests and real opportunities meet. For example, someone who loves science could consider renewable energy."
        },
        {
          sp: "Lama",
          t: "Actually, I agree with that. Maybe the question isn’t passion or the job market. Maybe it’s how to connect them."
        },
        {
          sp: "Sara",
          t: "That sounds like a great place to end."
        }
      ],
      questions: [
        {
          skill: "Identifying viewpoints",
          q: "What is Lama’s opinion at the start of the discussion?",
          opts: [
            ["Passion should come first when choosing a career.", null],
            ["Students should choose only jobs that pay well.", "This is closer to Rawan’s concern, not Lama’s."],
            ["Art is not a good subject to study.", "Lama’s aunt studied art and succeeded."],
            ["Students should not go to university.", "University is not discussed in this way."]
          ],
          hint: "Listen for “I believe…”.",
          exp: "Lama says, “I believe passion should come first.”",
          ev: "I believe passion should come first."
        },
        {
          skill: "Identifying viewpoints",
          q: "What is Rawan’s main concern?",
          opts: [
            ["Choosing only by passion is risky without researching future jobs.", null],
            ["Students should never follow their interests.", "Rawan says “Not at all” when asked if students should ignore what they love."],
            ["Tourism is a bad career choice.", "Rawan lists tourism as a growing field."],
            ["Podcasts are not useful for students.", "Rawan does not talk about podcasts."]
          ],
          hint: "Listen to Rawan’s first turn: “I think it’s risky…”.",
          exp: "Rawan thinks choosing only by passion is risky and that students should research which jobs will be needed.",
          ev: "Before choosing a major, students should research which jobs will be needed in the future."
        },
        {
          skill: "Speaker’s purpose",
          q: "Why does Lama talk about her aunt?",
          opts: [
            ["To show that following your passion can still lead to a good job", null],
            ["To show that art students cannot find jobs", "Her aunt found a good job, so this is the opposite."],
            ["To explain how to design apps", "She does not explain app design."],
            ["To prove that technology companies only hire people who studied art", "This is an over-generalization from one example."]
          ],
          hint: "What happened to the aunt in the end?",
          exp: "People told her aunt there were no jobs in art, but now she designs apps. Lama uses this example to support her opinion.",
          ev: "Now she designs apps for a technology company."
        },
        {
          skill: "Implied meaning",
          q: "What does Rawan mean by “Passion doesn’t pay the bills”?",
          opts: [
            ["Loving your work does not guarantee that you will earn enough money.", null],
            ["People with passion never pay their bills.", "This is an expression, not a statement about real bills."],
            ["Passion is more important than money.", "Rawan is warning about money, so she means the opposite."],
            ["Bills should be paid by companies.", "Rawan is not talking about companies. Think about money and what a job needs to give you."]
          ],
          hint: "Rawan says this right after “I think it’s risky.” What is the risk?",
          exp: "The expression means that you also need practical income, not only love for your work.",
          ev: "Passion doesn’t pay the bills."
        },
        {
          skill: "Drawing conclusions",
          q: "By the end of the podcast, what do the speakers agree on?",
          opts: [
            ["Students should connect their interests with real job opportunities.", null],
            ["Students should always choose renewable energy.", "Renewable energy is only one example."],
            ["Passion is not important at all.", "Both speakers agree interests matter."],
            ["The job market is impossible to predict, so researching it is useless.", "Rawan recommends research."]
          ],
          hint: "Listen to Lama’s last turn: “Actually, I agree with that.”",
          exp: "Rawan suggests finding where interests and opportunities meet, and Lama agrees the question is how to connect them.",
          ev: "Maybe the question isn’t passion or the job market. Maybe it’s how to connect them."
        }
      ]
    },
    {
      id: "l5c",
      level: 5,
      title: "Debate: Can Online Learning Replace the Classroom?",
      topic: "The impact of technology on learning",
      format: "Student debate",
      intro: "In a school debate, two students give opposite views. A teacher chairs the debate.",
      vocab: [
        ["pace", "the speed at which you do something"],
        ["well-designed", "planned and made carefully"],
        ["motivated", "wanting to do something and keep working"],
        ["replace", "to take the place of something"]
      ],
      speakers: {
        "Ms. Hind": "Debate chair (teacher)",
        Ahmed: "Student speaker",
        Lujain: "Student speaker"
      },
      voices: {
        "Ms. Hind": "b",
        Ahmed: "a",
        Lujain: "c"
      },
      script: [
        {
          sp: "Ms. Hind",
          t: "Today’s question is: Can online learning replace the classroom? Ahmed will speak first."
        },
        {
          sp: "Ahmed",
          t: "Online learning gives students something a classroom cannot: control over their pace. A student who does not understand a video can watch it again, and a student who already understands can move ahead. Studies in several countries have found that students in well-designed online courses can learn as much as students in traditional classes. Also, online lessons can reach students who live far from good schools."
        },
        {
          sp: "Lujain",
          t: "Ahmed’s points are fair, but notice the word well-designed. Many online courses are not. More importantly, school is not only about information. In a classroom, a teacher notices when a student looks confused, and students learn to discuss, disagree politely, and work in teams. When schools closed during the pandemic, many students said they felt lonely and found it hard to stay motivated at home. So I believe technology should support teachers, not replace them."
        },
        {
          sp: "Ms. Hind",
          t: "Thank you both. It seems you agree on one thing: technology is useful, but how we use it matters."
        }
      ],
      questions: [
        {
          skill: "Identifying claims",
          q: "What is Ahmed’s main claim?",
          opts: [
            ["Online learning can work as well as a class.", null],
            ["Classrooms should close immediately.", "He never says this. He argues that online learning can work well."],
            ["Teachers should make their own videos.", "This is not his claim."],
            ["Students learn best when they study alone at home.", "He talks about pace, not about studying alone."]
          ],
          hint: "What is Ahmed trying to prove?",
          exp: "Ahmed argues that online learning gives control over pace and can teach as much as traditional classes.",
          ev: "Studies in several countries have found that students in well-designed online courses can learn as much as students in traditional classes."
        },
        {
          skill: "Identifying reasons",
          q: "Which reason does Ahmed give to support his claim?",
          opts: [
            ["Students can learn at their own speed.", null],
            ["Online courses are cheaper than schools.", "Cost is not mentioned."],
            ["Teachers prefer teaching online.", "Teachers’ preferences are not mentioned."],
            ["Students make more friends online.", "Lujain says students felt lonely, so this is not supported."]
          ],
          hint: "Listen for “control over their pace”.",
          exp: "Ahmed says students can watch a video again or move ahead, so they control their pace.",
          ev: "Online learning gives students something a classroom cannot: control over their pace."
        },
        {
          skill: "Evaluating evidence",
          q: "Why does Lujain point to the word “well-designed”?",
          opts: [
            ["The studies were about good courses only.", null],
            ["She thinks the word is too difficult for the audience.", "She is questioning the evidence, not the vocabulary."],
            ["She agrees that all online courses today are carefully designed.", "She says the opposite: “Many online courses are not.”"],
            ["She wants to change the topic of the debate.", "She stays on the topic."]
          ],
          hint: "Listen to what she says right after “well-designed”.",
          exp: "Ahmed’s evidence only supports well-designed courses. Lujain says many courses are not, so the evidence does not prove his general claim.",
          ev: "Ahmed’s points are fair, but notice the word well-designed. Many online courses are not."
        },
        {
          skill: "Identifying viewpoints",
          q: "What is Lujain’s position?",
          opts: [
            ["Technology should support teachers, not replace them.", null],
            ["Technology should not be used in schools at all.", "She accepts technology. She only says it should not replace teachers."],
            ["Online learning is better for students who feel lonely.", "She says online learning made many students feel lonely."],
            ["Every classroom needs more computers.", "She does not ask for more computers."]
          ],
          hint: "Listen to her last sentence.",
          exp: "Lujain concludes, “Technology should support teachers, not replace them.”",
          ev: "So I believe technology should support teachers, not replace them."
        },
        {
          skill: "Drawing conclusions",
          q: "What does Ms. Hind conclude at the end?",
          opts: [
            ["Technology helps, but how we use it matters.", null],
            ["Ahmed clearly won the debate.", "She does not choose a winner."],
            ["Lujain clearly won the debate.", "She does not choose a winner."],
            ["Schools should replace all classrooms with online learning.", "This is not her conclusion."]
          ],
          hint: "Listen to the last sentence.",
          exp: "Ms. Hind says they agree that technology is useful, but how we use it matters.",
          ev: "It seems you agree on one thing: technology is useful, but how we use it matters."
        }
      ]
    },
    {
      id: "l5d",
      level: 5,
      title: "Using AI Responsibly",
      topic: "Responsible use of artificial intelligence",
      format: "Short lecture",
      intro: "A computer science teacher gives a short talk about how students should and should not use AI tools.",
      vocab: [
        ["artificial intelligence (AI)", "computer programs that can do tasks such as writing or answering questions"],
        ["reliable source", "a website, book, or person you can trust"],
        ["submit", "to give your work to a teacher"],
        ["confident", "sure; certain"]
      ],
      speakers: {
        "Ms. Lubna": "Computer science teacher"
      },
      voices: {
        "Ms. Lubna": "a"
      },
      script: [
        {
          sp: "Ms. Lubna",
          t: "Artificial intelligence tools can now write essays, solve math problems, and summarize books in seconds. Some people say students should never use them. I disagree, but I also think the risks are real. Let me explain three of them."
        },
        {
          sp: "Ms. Lubna",
          t: "First, AI tools can be wrong. They sometimes give confident answers that are completely false, so you must check important facts in reliable sources. Second, if AI does your thinking for you, you do not build your own skills. A calculator helps you only if you already understand the math. The same is true for AI. Third, honesty matters. If you submit work written by AI as your own, it is not your work, and your teacher cannot see what you really know."
        },
        {
          sp: "Ms. Lubna",
          t: "So here is a simple rule: use AI to help you think, not to think for you. For example, ask it to explain a difficult idea, or to give feedback on a paragraph you wrote, but write the paragraph yourself."
        }
      ],
      questions: [
        {
          skill: "Identifying viewpoints",
          q: "What is Ms. Lubna’s view of AI tools for students?",
          opts: [
            ["They are useful if used responsibly.", null],
            ["Students should never use them.", "She says, “I disagree,” with people who say this."],
            ["They always give correct answers if you ask clearly.", "She says they can be completely wrong."],
            ["They should replace homework.", "She does not suggest this."]
          ],
          hint: "Listen to the first part: “Some people say… I disagree, but…”",
          exp: "She disagrees with banning AI, but she warns that the risks are real, so she supports careful use.",
          ev: "Some people say students should never use them. I disagree, but I also think the risks are real."
        },
        {
          skill: "Identifying reasons",
          q: "Why must students check important facts?",
          opts: [
            ["AI can sound sure but be wrong.", null],
            ["Teachers do not allow students to use AI tools at all.", "This is not her reason."],
            ["Reliable sources are faster than AI.", "Speed is not mentioned."],
            ["AI tools cannot summarize books.", "She says they can summarize books."]
          ],
          hint: "Listen to her first point.",
          exp: "She says AI tools “sometimes give confident answers that are completely false”.",
          ev: "They sometimes give confident answers that are completely false, so you must check important facts in reliable sources."
        },
        {
          skill: "Evaluating evidence",
          q: "Why does Ms. Lubna mention a calculator?",
          opts: [
            ["A tool only helps if you understand the skill", null],
            ["To say that calculators are better than AI", "She is comparing them, not ranking them."],
            ["To show that math is easier than writing", "She does not compare math and writing."],
            ["To argue that calculators should be banned in exams", "Exams are not mentioned."]
          ],
          hint: "Listen to the sentence after “A calculator…”: “The same is true for AI.”",
          exp: "The calculator is a comparison: just as a calculator helps only if you understand the math, AI helps only if you build your own skills.",
          ev: "A calculator helps you only if you already understand the math. The same is true for AI."
        },
        {
          skill: "Implied meaning",
          q: "According to Ms. Lubna, what is the problem with submitting AI-written work as your own?",
          opts: [
            ["Your teacher cannot see what you know.", null],
            ["The company that made the AI tool will charge you money.", "Money is not mentioned."],
            ["It takes too long to do.", "Time is not the problem she describes."],
            ["AI writing is always too short.", "Length is not mentioned."]
          ],
          hint: "Listen to her third point, about honesty.",
          exp: "She says the work is not yours, and your teacher cannot see what you really know.",
          ev: "If you submit work written by AI as your own, it is not your work, and your teacher cannot see what you really know."
        },
        {
          skill: "Drawing conclusions",
          q: "Which use of AI would Ms. Lubna most likely approve of?",
          opts: [
            ["Asking for feedback on your own paragraph", null],
            ["Asking it to write your essay, then submitting it as yours", "This is exactly what she warns against."],
            ["Copying its answers into your homework", "This means AI is thinking for you."],
            ["Using it secretly during a test", "This breaks her rule about honesty."]
          ],
          hint: "Remember her rule: “use AI to help you think, not to think for you.”",
          exp: "She gives this as an example of good use: ask for feedback, but write the paragraph yourself.",
          ev: "For example, ask it to explain a difficult idea, or to give feedback on a paragraph you wrote, but write the paragraph yourself."
        }
      ]
    },
    {
      id: "l5e",
      level: 5,
      title: "What Makes a Community Sustainable?",
      topic: "Sustainable communities",
      format: "Academic talk",
      intro: "A city planner gives a talk to students about what makes a community sustainable.",
      vocab: [
        ["sustainable", "able to continue for a long time without causing harm"],
        ["native", "growing naturally in a place"],
        ["critic", "a person who says what is wrong with an idea"],
        ["luxury", "something nice but not necessary"]
      ],
      speakers: {
        "Dr. Ibrahim": "City planner"
      },
      voices: {
        "Dr. Ibrahim": "b"
      },
      script: [
        {
          sp: "Dr. Ibrahim",
          t: "When people hear the word sustainable, they often think only about the environment. But a sustainable community is one that meets the needs of people today without making life harder for people in the future. That includes the environment, the economy, and the way people live together."
        },
        {
          sp: "Dr. Ibrahim",
          t: "Let me give three examples. First, transport. When schools, shops, and parks are within walking distance, families use their cars less, which reduces traffic and pollution. Second, water. In a dry country like ours, planting native trees that need little water is wiser than planting large green lawns. Third, people. A neighborhood with safe public spaces, where neighbors meet and children play, is more likely to last, because people care about places they feel connected to."
        },
        {
          sp: "Dr. Ibrahim",
          t: "Some critics argue that sustainable design is too expensive. It can cost more at the start. However, lower energy and water bills often save money over time. My conclusion is simple: sustainable communities are not a luxury; they are good planning."
        }
      ],
      questions: [
        {
          skill: "Main idea",
          q: "How does Dr. Ibrahim define a sustainable community?",
          opts: [
            ["One that meets needs today without harming the future", null],
            ["One that is designed only to protect the natural environment", "He says the idea is bigger than the environment alone."],
            ["One that has many large green lawns", "He says native trees are wiser than large lawns."],
            ["One where cars are not allowed", "He says families use cars less, not that cars are banned."]
          ],
          hint: "Listen for the words “a sustainable community is one that…”.",
          exp: "He defines it as a community that meets people’s needs today without making life harder for people in the future.",
          ev: "But a sustainable community is one that meets the needs of people today without making life harder for people in the future."
        },
        {
          skill: "Identifying reasons",
          q: "Why does he recommend native trees?",
          opts: [
            ["They need little water.", null],
            ["They grow faster than lawns.", "Growth speed is not mentioned."],
            ["They are cheaper to buy.", "The price of trees is not mentioned."],
            ["Children prefer to play under them in summer.", "This is not his reason."]
          ],
          hint: "Listen to his second example, about water.",
          exp: "He says native trees “need little water”, which is wise in a dry country.",
          ev: "In a dry country like ours, planting native trees that need little water is wiser than planting large green lawns."
        },
        {
          skill: "Identifying reasons",
          q: "Why are safe public spaces important, according to the speaker?",
          opts: [
            ["People care about places they feel part of.", null],
            ["They reduce water and energy bills.", "Bills are part of his answer to critics, not this example."],
            ["They help shops make more money.", "Shops are mentioned only in the transport example."],
            ["The law requires them in every new neighborhood.", "Laws are not mentioned."]
          ],
          hint: "Listen to his third example, about people. Find the word “because”.",
          exp: "He says such neighborhoods last “because people care about places they feel connected to”.",
          ev: "A neighborhood with safe public spaces, where neighbors meet and children play, is more likely to last, because people care about places they feel connected to."
        },
        {
          skill: "Evaluating evidence",
          q: "How does Dr. Ibrahim respond to critics who say sustainable design is too expensive?",
          opts: [
            ["It costs more at first but saves money later.", null],
            ["He says it costs nothing.", "He admits it can cost more at the start."],
            ["He agrees that it is too expensive.", "He accepts a higher first cost, but he does not agree it is too expensive."],
            ["He says the government should pay the extra cost for families.", "The government is not mentioned."]
          ],
          hint: "Listen for the word “However”.",
          exp: "He accepts that it can cost more at the start, then argues that lower bills save money over time.",
          ev: "However, lower energy and water bills often save money over time."
        },
        {
          skill: "Drawing conclusions",
          q: "What is the speaker’s conclusion?",
          opts: [
            ["They are simply good planning.", null],
            ["Sustainable communities are a luxury.", "He says they are NOT a luxury."],
            ["Only rich countries can build them.", "He does not say this."],
            ["Cars should be banned from all city centers.", "He never suggests a ban."]
          ],
          hint: "Listen to his final sentence.",
          exp: "He concludes, “Sustainable communities are not a luxury; they are good planning.”",
          ev: "My conclusion is simple: sustainable communities are not a luxury; they are good planning."
        }
      ]
    }
  ]
};
