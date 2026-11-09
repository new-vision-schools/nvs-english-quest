/* ===== NVS English Quest — Listening Corner content =====
   script: what the device reads aloud. ev: the line the answer comes from (shown only after a correct answer).
   In every "opts" list, the FIRST option is the correct answer (the app shuffles the order). */
NVS_CONTENT.listening = {
  levels: [
    {
      n: 1,
      name: "Foundation Listener",
      range: "20–40 words",
      focus: "People, places, times, and actions"
    },
    {
      n: 2,
      name: "Developing Listener",
      range: "40–70 words",
      focus: "Main idea and clear details"
    },
    {
      n: 3,
      name: "Building Listener",
      range: "70–110 words",
      focus: "Sequence, cause and effect, simple inference"
    },
    {
      n: 4,
      name: "Advancing Listener",
      range: "110–160 words",
      focus: "Main ideas, details, speaker intention, inference"
    },
    {
      n: 5,
      name: "Independent Listener",
      range: "160–220 words",
      focus: "Conclusions, viewpoints, implied meaning"
    }
  ],
  activities: [
    {
      id: "l1a",
      level: 1,
      title: "Where Is the Library?",
      topic: "Asking for directions",
      format: "Short conversation",
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
      id: "l2a",
      level: 2,
      title: "A Visit to the Doctor",
      topic: "Visiting a doctor",
      format: "Conversation",
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
      id: "l3a",
      level: 3,
      title: "Planning a Study Schedule",
      topic: "Planning a study schedule",
      format: "Conversation",
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
      id: "l4a",
      level: 4,
      title: "Interview: From Four Losses to Champions",
      topic: "A sports interview",
      format: "Radio interview",
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
      id: "l5a",
      level: 5,
      title: "Advice from a Former Student",
      topic: "Preparing for university",
      format: "Short presentation",
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
    }
  ]
};
