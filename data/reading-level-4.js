/* =====================================================================
   NVS English Quest — Reading Library — LEVEL 4 PASSAGES  (Version 3D)
   ---------------------------------------------------------------------
   To add a passage, copy one passage block, paste it at the end of the list
   (before the final "]);"), and change its content.
   See HOW_TO_ADD_CONTENT.md for step-by-step instructions.

   FIELDS
   • id: unique, pattern r4-NN (e.g. r4-11). Never change an existing id.
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
    id: "r4a",
    level: 4,
    title: "Petrol Cars and Electric Cars",
    category: "Technology",
    topic: "Technology",
    status: "retained",
    text: [
      "Cars have changed a great deal in the last twenty years. Today, drivers can choose between traditional petrol cars and electric cars. Both types have advantages and disadvantages.",
      "Petrol cars have been popular for more than a century. One of their biggest advantages is convenience. Petrol stations are found almost everywhere, and filling a tank takes only a few minutes. Petrol cars can also travel long distances without stopping. However, they burn fuel, which releases gases that pollute the air and contribute to climate change.",
      "Electric cars, on the other hand, run on batteries instead of fuel. They produce no exhaust gases while driving, so they help keep city air cleaner. They are also quieter and usually cost less to run, because electricity is often cheaper than petrol. Nevertheless, electric cars have some challenges. Charging a battery can take thirty minutes or even several hours, and charging stations are still limited in some areas. In addition, electric cars are often more expensive to buy.",
      "Many countries are now investing in electric vehicles. Saudi Arabia, for example, has announced plans to produce electric cars locally and to build more charging stations. As technology improves, batteries are becoming cheaper and lasting longer.",
      "So, which car is better? The answer depends on a driver’s needs. Someone who often drives long distances in remote areas may prefer a petrol car for now. A person who drives mostly in the city may find that an electric car is the smarter choice."
    ],
    before: {
      words: [
        { word: "convenience", def: "Being easy and quick to use.", ex: "Online shopping offers convenience." },
        { word: "pollute", def: "To make air, water, or land dirty.", ex: "Factories can pollute rivers." },
        { word: "investing", def: "Putting money into something to make it grow.", ex: "The country is investing in new schools." },
        { word: "remote", def: "Far away from towns and cities.", ex: "They live in a remote village." }
      ],
      predict: "What are the good and bad points of electric cars?"
    },
    questions: [
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose in this passage?",
        opts: [
          ["To compare the advantages and disadvantages of two kinds of cars", null],
          ["To persuade readers that everyone should buy a petrol car", "The author describes both kinds fairly and does not tell everyone what to buy."],
          ["To tell the story of one family’s long road trip in an electric car", "No family or road trip appears in the passage."],
          ["To teach readers how to repair car batteries", "The passage does not give any repair instructions."]
        ],
        hint: "Look at the last sentence of paragraph 1 and the conclusion in paragraph 5.",
        exp: "The author explains the strengths and weaknesses of both car types and lets readers decide based on their needs. The purpose is to inform by comparing.",
        ev: "Both types have advantages and disadvantages."
      },
      {
        skill: "Comparison and contrast",
        q: "According to the passage, how are electric cars DIFFERENT from petrol cars?",
        opts: [
          ["They produce no exhaust gases while driving.", null],
          ["They can be refueled in only a few minutes.", "This describes petrol cars. Charging an electric car can take thirty minutes or more."],
          ["Their stations are found almost everywhere.", "This describes petrol stations. Charging stations are “still limited in some areas”."],
          ["They are cheaper to buy than petrol cars of the same size.", "The passage says electric cars are often MORE expensive to buy."]
        ],
        hint: "The phrase “on the other hand” in paragraph 3 introduces the differences.",
        exp: "Paragraph 3 says electric cars produce no exhaust gases while driving, unlike petrol cars, which burn fuel and release polluting gases.",
        ev: "They produce no exhaust gases while driving"
      },
      {
        skill: "Supporting evidence",
        q: "Which sentence from the passage BEST supports the idea that petrol cars are convenient?",
        opts: [
          ["“Petrol stations are found almost everywhere, and filling a tank takes only a few minutes.”", null],
          ["“However, they burn fuel, which releases gases that pollute the air and contribute to climate change.”", "This sentence shows a DISADVANTAGE of petrol cars, not convenience."],
          ["“They are also quieter and usually cost less to run.”", "This sentence is about electric cars."],
          ["“Many countries are now investing in electric vehicles.”", "This sentence is about countries and electric cars, not petrol cars."]
        ],
        hint: "Convenience means something is easy and quick to use. Which sentence shows that?",
        exp: "Finding stations everywhere and filling up in minutes are clear examples of convenience. The author introduces this evidence right after saying “One of their biggest advantages is convenience.”",
        ev: "Petrol stations are found almost everywhere, and filling a tank takes only a few minutes."
      },
      {
        skill: "Inference",
        q: "Why might a person living in a remote village prefer a petrol car for now?",
        opts: [
          ["There may be few charging stations in remote areas.", null],
          ["Electric cars are not allowed on roads outside cities.", "The passage never says electric cars are banned anywhere."],
          ["Petrol is free in remote areas.", "The passage does not say petrol is free anywhere."],
          ["Petrol cars are quieter than electric cars.", "The passage says electric cars are quieter."]
        ],
        hint: "Read about the challenges of electric cars in paragraph 3. Then read paragraph 5.",
        exp: "The author does not say this directly, but we can infer it: charging stations are “still limited in some areas”, and charging takes a long time. This would be a problem for someone who drives long distances in remote places.",
        ev: "charging stations are still limited in some areas"
      },
      {
        skill: "Comparison and contrast",
        q: "In paragraph 3, what does the word “Nevertheless” show?",
        opts: [
          ["A contrast: the author turns from advantages to challenges.", null],
          ["An example that supports the advantages mentioned before", "“Nevertheless” does not introduce an example. It signals a change in direction."],
          ["The order of events in time", "Words like “then” or “after” show time order."],
          ["The final conclusion of the whole passage about cars and fuel", "The conclusion comes in paragraph 5, introduced by “So”."]
        ],
        hint: "Read the sentences before and after “Nevertheless”. Are they positive or negative?",
        exp: "“Nevertheless” means “but” or “however”. Before it, the author lists advantages of electric cars. After it, the author lists challenges, so it signals a contrast.",
        ev: "Nevertheless, electric cars have some challenges."
      }
    ]
  },
  {
    id: "r4b",
    level: 4,
    title: "A Different Kind of Engineer",
    category: "Personal Development",
    topic: "Careers",
    status: "retained",
    text: [
      "Noura had never thought of herself as an engineer. She liked drawing and designing posters, but math and science made her nervous. So when her teacher, Ms. Hala, invited her to join the school robotics team, Noura almost said no.",
      "“We need someone who can design,” Ms. Hala explained. “A robot is not only wires and code. It also needs a smart shape.”",
      "Noura joined, but the first weeks were hard. The other team members talked about sensors and motors, and she did not understand most of their words. She stayed quiet in meetings and often went home feeling that she did not belong.",
      "Then the team faced a problem. Their robot kept falling over when it turned quickly. The programmers tried changing the code again and again, but nothing worked. Noura studied the robot carefully and sketched a new design with a wider, lower base. “Maybe it falls because it is too tall and narrow,” she suggested.",
      "The team built her design over the weekend. On Monday, the robot turned smoothly without falling once. Everyone cheered, and Yara, the team captain, gave Noura a high five.",
      "At the regional competition two months later, the team won second place. The judges especially praised the robot’s stable design. On the bus home, Noura looked out the window and smiled. She realized that there are many different ways to be good at science."
    ],
    before: {
      words: [
        { word: "nervous", def: "Worried and a little afraid.", ex: "I feel nervous before exams." },
        { word: "sensors", def: "Small devices that measure things like light or movement.", ex: "Robots use sensors to “see”." },
        { word: "narrow", def: "Not wide.", ex: "The road is very narrow." },
        { word: "stable", def: "Steady; not likely to fall.", ex: "A wide base makes a table stable." }
      ],
      predict: "Can a student who loves drawing be good at engineering? How?"
    },
    questions: [
      {
        skill: "Inference",
        q: "How did Noura feel during her first weeks on the team?",
        opts: [
          ["Uncomfortable and unsure that she belonged", null],
          ["Confident and proud of her skills", "She stayed quiet and did not understand the others’ words, so she was not confident yet."],
          ["Bored because the work was too easy", "She did not understand most of the words, so the work was not too easy for her."],
          ["Angry with Ms. Hala for inviting her to the team", "Nothing suggests anger. She felt she did not belong."]
        ],
        hint: "Read paragraph 3. What did she do in meetings, and how did she feel going home?",
        exp: "Noura stayed quiet, did not understand the technical words, and felt she did not belong. These clues show she felt uncomfortable and unsure.",
        ev: "often went home feeling that she did not belong"
      },
      {
        skill: "Supporting evidence",
        q: "Which detail BEST shows that Noura’s design solved the problem?",
        opts: [
          ["On Monday, the robot turned smoothly without falling once.", null],
          ["The programmers tried changing the code again and again.", "This happened BEFORE Noura’s design, and it did not work."],
          ["The other team members talked about sensors and motors.", "This describes the first weeks, not the solution."],
          ["She had always liked drawing and designing colorful posters.", "This is background about Noura, not evidence that the design worked."]
        ],
        hint: "The problem was that the robot kept falling. Which detail shows it stopped falling?",
        exp: "The problem was that the robot fell when it turned. After the team built Noura’s design, it turned smoothly without falling once. That is direct evidence.",
        ev: "On Monday, the robot turned smoothly without falling once."
      },
      {
        skill: "Comparison and contrast",
        q: "How was Noura’s approach to the problem different from the programmers’ approach?",
        opts: [
          ["She changed the robot’s shape, while they kept changing the code.", null],
          ["She wrote new code, while they built a new base.", "This is reversed. The programmers worked on the code, and Noura worked on the design."],
          ["She gave up, while they kept trying.", "Noura did not give up. She studied the robot and sketched a solution."],
          ["She asked the judges for advice, while they worked alone on the code.", "The judges are not asked for help in the story."]
        ],
        hint: "Paragraph 4: What did the programmers try? What did Noura sketch?",
        exp: "The programmers tried to fix the problem with code. Noura looked at the robot’s physical shape and designed a wider, lower base.",
        ev: "sketched a new design with a wider, lower base"
      },
      {
        skill: "Inference",
        q: "Why did Ms. Hala say, “A robot is not only wires and code”?",
        opts: [
          ["To show Noura that her design skills were valuable to the team", null],
          ["To explain that robots do not need any code", "She says “not ONLY wires and code”, which means code is needed, but other skills are needed too."],
          ["To warn Noura that robotics is dangerous", "Nothing in her words is about danger."],
          ["To tell Noura that she must learn programming before she can help", "Ms. Hala says the opposite: Noura’s design skills already helped."]
        ],
        hint: "What skill did Noura already have? Read paragraph 1 and Ms. Hala’s first sentence.",
        exp: "Noura thought robotics was only for math and science students. Ms. Hala explained that robots also need good design, which is Noura’s strength.",
        ev: "“We need someone who can design,” Ms. Hala explained."
      },
      {
        skill: "Author’s purpose",
        q: "What message does the author most likely want readers to understand?",
        opts: [
          ["People can contribute to science and technology in different ways.", null],
          ["Only students who love math and coding can become real engineers.", "Noura’s success shows the opposite: design skills mattered too."],
          ["Winning competitions is the most important goal.", "The team won second place, but the story focuses on what Noura learned."],
          ["Robots are too difficult for most students.", "The team succeeded by working together, so the story is not saying this."]
        ],
        hint: "Read the last sentence. What did Noura realize?",
        exp: "Noura realized “there are many different ways to be good at science.” The author uses her story to share this message.",
        ev: "She realized that there are many different ways to be good at science."
      }
    ]
  },
  {
    id: "r4-03",
    level: 4,
    title: "Should Schools Limit Smartphone Use?",
    category: "Technology",
    topic: "Argument",
    status: "revised",
    revisionNote: "Replaced “restrict” and “point to” with plainer words; simplified “applied consistently”.",
    text: [
      "In recent years, several countries have made rules that limit smartphone use in schools. Supporters say that phones distract students. Critics say that phones can be valuable learning tools. Which side is more convincing?",
      "Those who support limits talk about the problem of attention. A single notification can pull a student’s focus away from a lesson, and it may take several minutes to concentrate fully again. Teachers also report that phones contribute to cyberbullying during breaks and reduce face-to-face conversation. Some schools that introduced phone-free policies say students now talk and play together more at lunchtime.",
      "Opponents raise reasonable concerns. Phones allow quick research, translation, and access to digital textbooks. For families, phones provide a way to contact children in an emergency. Critics also argue that banning phones does not teach students how to use technology responsibly; it simply postpones the lesson.",
      "A balanced approach may combine the strengths of both positions. Schools could require phones to stay in bags or lockers during lessons, while teachers allow them for specific activities, such as a research task. Clear rules that everyone follows would reduce distraction without ignoring the educational potential of devices that students carry every day.",
      "Ultimately, the goal is not to defeat technology but to make sure that it serves learning rather than interrupting it."
    ],
    before: {
      words: [
        { word: "notification", def: "A message or sound on a phone that tells you something new.", ex: "I turned off my notifications while studying." },
        { word: "cyberbullying", def: "Being unkind or hurtful to someone online.", ex: "Cyberbullying can make students feel unsafe." },
        { word: "translation", def: "Changing words from one language into another.", ex: "I used translation to understand the word." },
        { word: "potential", def: "The possibility to be useful or good in the future.", ex: "This app has great potential for learning." }
      ],
      predict: "Should students be allowed to use phones at school? What do you think?"
    },
    questions: [
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose?",
        opts: [
          ["To examine both sides of the debate and suggest a balanced approach", null],
          ["To persuade schools to ban all phones completely during the school day", "The author presents both sides and suggests a balanced approach."],
          ["To explain how smartphones are made", "The passage is about school rules, not technology design."],
          ["To tell the story of one student’s phone", "There is no individual story in the passage."]
        ],
        hint: "Look at what the author does in paragraph 4.",
        exp: "The author presents arguments for and against limits, then proposes a middle path that combines both.",
        ev: "A balanced approach may combine the strengths of both positions."
      },
      {
        skill: "Text structure",
        q: "How is the passage organized?",
        opts: [
          ["A question, arguments for and against limits, then a solution", null],
          ["A list of events in the order they happened at one particular school", "The passage presents arguments, not a sequence of events."],
          ["A problem followed by many examples that are not connected", "The arguments are connected and lead to a proposed solution."],
          ["A story followed by a moral lesson", "There is no story."]
        ],
        hint: "Summarize each paragraph in two or three words.",
        exp: "Paragraph 1 asks a question, paragraph 2 gives supporters’ arguments, paragraph 3 gives opponents’ arguments, and paragraph 4 offers a balanced solution.",
        ev: "Which side is more convincing?"
      },
      {
        skill: "Evaluating evidence",
        q: "Which detail supports the argument that phones harm students’ attention?",
        opts: [
          ["After a notification, it may take minutes to concentrate again.", null],
          ["Phones allow students to do quick research and translation in class.", "This is an argument FOR phones, not about harm to attention."],
          ["Families can contact children in an emergency.", "This supports keeping phones."],
          ["Teachers can allow phones for research tasks.", "This is part of the proposed solution, not evidence of harm."]
        ],
        hint: "Look in paragraph 2 for the “problem of attention”.",
        exp: "The detail about notifications directly explains how phones interrupt attention.",
        ev: "A single notification can pull a student’s focus away from a lesson, and it may take several minutes to concentrate fully again."
      },
      {
        skill: "Comparing ideas",
        q: "Which argument comes from people who OPPOSE phone limits?",
        opts: [
          ["Banning phones does not teach students to use technology responsibly.", null],
          ["Phones contribute to cyberbullying during breaks and after school.", "This is an argument used by people who SUPPORT limits."],
          ["Students talk more at lunch in phone-free schools.", "This supports limits."],
          ["Notifications reduce concentration.", "This supports limits."]
        ],
        hint: "Read paragraph 3, which begins “Opponents raise reasonable concerns.”",
        exp: "Critics argue that a ban only delays learning how to use technology responsibly.",
        ev: "Critics also argue that banning phones does not teach students how to use technology responsibly"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 3, “postpones the lesson” means the ban…",
        opts: [
          ["delays learning about responsible use until later", null],
          ["cancels the lesson about phones for the whole year", "“Postpone” means to delay, not to cancel."],
          ["makes lessons shorter", "Length of classes is not discussed."],
          ["teaches the lesson faster", "The critics argue the opposite."]
        ],
        hint: "The critics say a ban does not teach responsible use now. What happens to that learning?",
        exp: "To postpone means to delay. Critics believe students will still need to learn responsible use later.",
        ev: "it simply postpones the lesson"
      },
      {
        skill: "Inference",
        q: "What would the author most likely think of a school that bans phones with no exceptions?",
        opts: [
          ["It is too strict because it ignores phones’ value for learning.", null],
          ["It is the perfect solution.", "The author prefers allowing phones for specific activities."],
          ["Phones should instead be used freely in every lesson without rules.", "The author suggests clear limits, not free use in every lesson."],
          ["The author would have no opinion.", "The author clearly proposes a middle path."]
        ],
        hint: "Reread the author’s proposal in paragraph 4.",
        exp: "The author wants rules that reduce distraction “without ignoring the educational potential” of phones. A total ban would ignore that potential.",
        ev: "Clear rules that everyone follows would reduce distraction without ignoring the educational potential of devices that students carry every day."
      },
      {
        skill: "Tone",
        q: "Which word best describes the author’s tone?",
        opts: [
          ["Balanced", null],
          ["Angry", "The author calls opponents’ concerns “reasonable”. This is not angry language."],
          ["Humorous", "The passage does not use jokes."],
          ["Confused", "The author reaches a clear conclusion."]
        ],
        hint: "How does the author describe the people who disagree with limits?",
        exp: "The author treats both sides with respect, calling opponents’ concerns “reasonable”, and suggests a compromise. The tone is balanced.",
        ev: "Opponents raise reasonable concerns."
      }
    ]
  },
  {
    id: "r4-04",
    level: 4,
    title: "How Social Media Changes Communication",
    category: "Society",
    topic: "Informational",
    status: "retained",
    text: [
      "Only a generation ago, keeping in touch with a friend in another city meant a phone call or a letter that took days to arrive. Today, a teenager in Riyadh can share a photo with a cousin in Canada in seconds. Social media has transformed not only how quickly we communicate, but also how we communicate.",
      "One major change is the shift from long conversations to short, frequent updates. Instead of telling a story in detail, people post a picture, a short video, or a few words. Emojis and reactions replace tone of voice and facial expressions. This style is fast and convenient, but it can also lead to misunderstandings, because a short message may lack context.",
      "Another change involves audience. When we speak face to face, we usually know exactly who is listening. Online, a post may be seen by close friends, distant relatives, and even strangers. As a result, many users present a carefully edited version of their lives, sharing successes and hiding difficulties. Researchers have suggested that constantly comparing ourselves with these polished images can affect self-esteem.",
      "Despite these challenges, social media has clear benefits. It helps families stay connected across distances, allows students to collaborate on projects, and gives people a platform to raise awareness about important causes.",
      "Understanding these changes can help us communicate more thoughtfully, both online and offline."
    ],
    before: {
      words: [
        { word: "transformed", def: "Changed completely.", ex: "The internet transformed how we shop." },
        { word: "context", def: "The situation or information around something that helps explain it.", ex: "Without context, a short message can be confusing." },
        { word: "self-esteem", def: "How much you value and respect yourself.", ex: "Kind words can build self-esteem." },
        { word: "platform", def: "A website or app where people share things.", ex: "This platform lets students share projects." }
      ],
      predict: "How is sending a short message different from talking face to face?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Social media has changed communication, with benefits and challenges.", null],
          ["Letters are better than social media.", "The writer does not say this. Letters are mentioned only to describe the past."],
          ["Teenagers should stop using emojis.", "Emojis are one detail, and the writer does not tell readers to stop."],
          ["Social media is harmful and has no real benefits for young people today.", "The writer describes benefits as well as challenges."]
        ],
        hint: "Consider paragraphs 2, 3, and 4 together.",
        exp: "The writer explains changes in style and audience, describes challenges, and then lists benefits.",
        ev: "Social media has transformed not only how quickly we communicate, but also how we communicate."
      },
      {
        skill: "Text structure",
        q: "How does the writer begin the passage?",
        opts: [
          ["By contrasting past communication with communication today", null],
          ["By telling a long personal story", "The opening uses brief examples, not a long story."],
          ["By listing statistics about how many people use social media", "The writer begins with a comparison, not statistics."],
          ["By arguing against social media", "The opening describes change without arguing against it."]
        ],
        hint: "Look at the time words in paragraph 1: “a generation ago” and “Today”.",
        exp: "The writer compares slow letters and calls in the past with instant sharing today.",
        ev: "Only a generation ago, keeping in touch with a friend in another city meant a phone call or a letter that took days to arrive."
      },
      {
        skill: "Cause and effect",
        q: "According to the writer, why can short messages lead to misunderstandings?",
        opts: [
          ["They may lack context.", null],
          ["They are sent too slowly.", "Short messages are fast."],
          ["They always contain mistakes.", "The writer does not say this."],
          ["Only strangers read them.", "Audiences include friends and relatives too."]
        ],
        hint: "Find the word “because” in paragraph 2.",
        exp: "A short message may lack context, so readers can misunderstand it.",
        ev: "because a short message may lack context"
      },
      {
        skill: "Inference",
        q: "Why do many users share successes and hide difficulties online?",
        opts: [
          ["Their posts may be seen by many people they do not know well.", null],
          ["Social media companies require it.", "No such rule is mentioned."],
          ["They have no difficulties in their lives.", "The passage says they HIDE difficulties."],
          ["Short messages are too brief to describe difficult problems.", "The writer explains this with the audience, not message length."]
        ],
        hint: "Look at the phrase “As a result” in paragraph 3. What comes before it?",
        exp: "The writer explains that posts may be seen by friends, relatives, and strangers. As a result, people present an edited version of their lives.",
        ev: "Online, a post may be seen by close friends, distant relatives, and even strangers. As a result, many users present a carefully edited version of their lives"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 3, “polished images” are…",
        opts: [
          ["carefully improved photos that show only the best side", null],
          ["photos of shiny objects", "Here “polished” is used figuratively."],
          ["old photographs", "The age of photos is not discussed."],
          ["images that are blurry and hard to see clearly on a phone", "“Polished” means improved and perfected, not blurry."]
        ],
        hint: "Connect “polished images” with “a carefully edited version of their lives”.",
        exp: "Polished images are carefully edited pictures that show successes and hide difficulties.",
        ev: "many users present a carefully edited version of their lives, sharing successes and hiding difficulties"
      },
      {
        skill: "Comparing ideas",
        q: "According to the writer, how is speaking face to face different from posting online?",
        opts: [
          ["Face to face, we usually know exactly who is listening.", null],
          ["Face to face, our messages are always shorter and simpler.", "Message length is not the difference the writer describes."],
          ["Online, nobody can see our posts.", "Posts may be seen by many people."],
          ["Face to face, we use more emojis.", "Emojis are part of online communication."]
        ],
        hint: "Read the first two sentences of paragraph 3.",
        exp: "The writer contrasts knowing your listeners face to face with not knowing who might see an online post.",
        ev: "When we speak face to face, we usually know exactly who is listening."
      },
      {
        skill: "Tone",
        q: "Which statement best describes the writer’s perspective on social media?",
        opts: [
          ["It is balanced, recognizing both benefits and challenges.", null],
          ["It is completely negative.", "Paragraph 4 lists clear benefits."],
          ["It is completely positive.", "Paragraphs 2 and 3 describe real challenges."],
          ["It is uninterested and refuses to discuss either side of the question.", "The writer discusses both sides in detail."]
        ],
        hint: "Look at the word “Despite” at the start of paragraph 4.",
        exp: "“Despite these challenges” shows the writer accepts the problems but also sees clear benefits.",
        ev: "Despite these challenges, social media has clear benefits."
      }
    ]
  },
  {
    id: "r4-05",
    level: 4,
    title: "The Future of Renewable Energy",
    category: "Science",
    topic: "Science",
    status: "revised",
    revisionNote: "Split three long sentences with “which” clauses; replaced the idioms “around the clock” and “overnight”.",
    text: [
      "For more than a century, most of the world’s electricity has come from burning fossil fuels such as coal, oil, and natural gas. These fuels are reliable, but burning them releases carbon dioxide. Carbon dioxide is a major cause of climate change. As a result, many countries are turning to renewable energy. This energy comes from sources that are naturally replaced, such as sunlight and wind.",
      "Solar and wind power have grown rapidly because their costs have fallen dramatically. In many parts of the world, building a new solar farm is now cheaper than building a new coal power plant. Saudi Arabia, with its intense sunshine and wide open land, is developing large solar projects as part of Vision 2030.",
      "However, renewable energy faces a significant challenge: it is intermittent. The sun does not shine at night, and the wind does not always blow. To provide electricity all day and all night, power companies need ways to store energy. Large batteries are one solution, and engineers are also exploring green hydrogen. Green hydrogen can be produced using renewable electricity and stored for later use.",
      "The transition will take many years. Power grids must be upgraded, and workers need new skills. Nevertheless, many experts believe that the combination of falling costs, new storage technology, and concern about climate change makes a renewable future increasingly likely."
    ],
    before: {
      words: [
        { word: "fossil fuels", def: "Coal, oil, and gas that come from the ground.", ex: "Cars that use petrol burn fossil fuels." },
        { word: "renewable", def: "Coming from a source that does not run out, like the sun.", ex: "Solar power is renewable energy." },
        { word: "grids", match: "grids", def: "Networks of power lines that carry electricity.", ex: "Power grids bring electricity to our homes." },
        { word: "transition", def: "A change from one situation to another.", ex: "The transition to a new school can be hard." }
      ],
      predict: "Why are many countries building solar and wind power?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Renewable energy is growing, although storage is still a challenge.", null],
          ["Fossil fuels will disappear completely within the next year.", "The passage does not predict this. It says change will take time."],
          ["Solar power is more expensive than coal in every country of the world.", "The passage says the costs of solar power have fallen dramatically."],
          ["Wind power is the only renewable energy source.", "Solar and green hydrogen are also discussed."]
        ],
        hint: "Consider the growth, the challenge, and the final prediction.",
        exp: "The passage explains why renewables are growing, the challenge of intermittency, and why experts expect a renewable future.",
        ev: "many experts believe that the combination of falling costs, new storage technology, and concern about climate change makes a renewable future increasingly likely"
      },
      {
        skill: "Context clues",
        q: "In paragraph 3, “intermittent” means…",
        opts: [
          ["not continuous; starting and stopping", null],
          ["very powerful and always available", "If it were always available, storage would not be a problem."],
          ["extremely expensive to produce", "Cost is discussed elsewhere. This word is about the supply stopping and starting."],
          ["dangerous to use", "Danger is not mentioned."]
        ],
        hint: "Read the sentence after “intermittent”: the sun at night, the wind not always blowing.",
        exp: "Intermittent means happening at intervals, not all the time. The sun and wind are not always available.",
        ev: "The sun does not shine at night, and the wind does not always blow."
      },
      {
        skill: "Cause and effect",
        q: "Why have solar and wind power grown rapidly?",
        opts: [
          ["Their costs have fallen dramatically.", null],
          ["Fossil fuels have become impossible to find.", "The passage says fossil fuels are reliable, not impossible to find."],
          ["They work equally well at night.", "Solar does not work at night."],
          ["Power grids no longer need upgrades.", "The passage says grids MUST be upgraded."]
        ],
        hint: "Look for the word “because” in paragraph 2.",
        exp: "Solar and wind have grown because their costs have fallen dramatically.",
        ev: "Solar and wind power have grown rapidly because their costs have fallen dramatically."
      },
      {
        skill: "Problem and solution",
        q: "Which solution to intermittency does the passage describe?",
        opts: [
          ["Storing energy in large batteries or as green hydrogen", null],
          ["Building more coal power plants as a backup supply", "The passage does not suggest coal as the solution."],
          ["Using electricity only during the daytime hours when the sun shines", "The passage does not suggest limiting electricity use."],
          ["Moving solar panels at night", "This would not help, because there is no sunlight at night."]
        ],
        hint: "Read the end of paragraph 3.",
        exp: "Power companies need ways to store energy, such as large batteries and green hydrogen.",
        ev: "Large batteries are one solution, and engineers are also exploring green hydrogen"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer mention Saudi Arabia in paragraph 2?",
        opts: [
          ["To give an example of a sunny country investing in solar power", null],
          ["To argue that Saudi Arabia should stop producing oil immediately", "The writer does not make this argument."],
          ["To show that solar power only works in deserts", "The writer says solar is cheaper in many parts of the world."],
          ["To explain how green hydrogen is made", "Green hydrogen is explained in paragraph 3."]
        ],
        hint: "What features of Saudi Arabia does the writer mention?",
        exp: "The writer points out Saudi Arabia’s intense sunshine and open land as advantages for its large solar projects.",
        ev: "Saudi Arabia, with its intense sunshine and wide open land, is developing large solar projects as part of Vision 2030."
      },
      {
        skill: "Text structure",
        q: "What is the function of the word “However” at the start of paragraph 3?",
        opts: [
          ["It introduces a challenge after the benefits described earlier.", null],
          ["It introduces another benefit of renewable energy sources for the future.", "“However” signals a contrast, not another benefit."],
          ["It shows the order of events in time.", "“However” signals contrast, not time order."],
          ["It gives an example of fossil fuels.", "Paragraph 3 is about renewables."]
        ],
        hint: "Is paragraph 2 positive or negative? What about paragraph 3?",
        exp: "Paragraph 2 explains why renewables are growing. “However” shifts to a significant challenge: intermittency.",
        ev: "However, renewable energy faces a significant challenge: it is intermittent."
      },
      {
        skill: "Evaluating evidence",
        q: "Which conclusion is best supported by the passage?",
        opts: [
          ["A renewable future is likely, but it will take time and investment.", null],
          ["Renewable energy has no problems at all.", "The writer describes intermittency and grid upgrades as challenges."],
          ["Energy storage is impossible.", "The writer describes batteries and green hydrogen as solutions."],
          ["Experts expect fossil fuels to grow in importance over time.", "The passage says renewable energy is likely to expand."]
        ],
        hint: "Read the last paragraph carefully, including “will take many years”.",
        exp: "The last paragraph says the change will take time (grids, skills) but is increasingly likely because of falling costs and new storage.",
        ev: "The transition will take many years."
      }
    ]
  },
  {
    id: "r4-06",
    level: 4,
    title: "Why Failure Can Lead to Success",
    category: "Personal Development",
    topic: "Explanatory",
    status: "retained",
    text: [
      "We often treat failure as something to hide. Students fear low marks, athletes dread losing, and many adults avoid trying new things because they might look foolish. Yet experience and psychology suggest that failure, when handled well, is often an essential step toward success.",
      "Consider the inventor James Dyson. Frustrated with vacuum cleaners that lost suction, he spent about five years building more than 5,000 prototypes before creating a design that worked. Each failed model taught him something specific about what to change. Without those failures, his successful product would not exist.",
      "Psychologists explain this process through the idea of a growth mindset, a term made popular by the researcher Carol Dweck. People with a growth mindset believe that abilities can be developed through effort and good strategies. When they fail, they ask, “What can I learn from this?” In contrast, people with a fixed mindset believe their abilities cannot change, so failure feels like proof that they are not good enough.",
      "Of course, failure is not automatically useful. Repeating the same mistake without reflection leads nowhere. The value comes from analyzing what went wrong, adjusting the approach, and trying again.",
      "For students, this means that a disappointing test result can be a valuable map. It shows exactly which skills need more work. The real failure is not getting a low score; it is refusing to learn from it."
    ],
    before: {
      words: [
        { word: "dread", def: "To feel very worried about something in the future.", ex: "I dread speaking in front of many people." },
        { word: "suction", def: "The pulling force that makes a vacuum cleaner pick up dirt.", ex: "The old vacuum cleaner lost its suction." },
        { word: "mindset", def: "A way of thinking.", ex: "A positive mindset helps you learn." },
        { word: "reflection", def: "Careful thinking about something you did.", ex: "After the test, I spent time in reflection." }
      ],
      predict: "Can failing at something help you succeed later? How?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the main idea of the passage?",
        opts: [
          ["Failure can lead to success when we learn from it.", null],
          ["Failure should always be hidden.", "The writer argues against hiding failure."],
          ["Only inventors can learn from failure.", "The writer applies the idea to students too."],
          ["Repeating the same mistake many times leads to success.", "Success comes from learning and adjusting, not repeating the same mistake."]
        ],
        hint: "Read the last sentence of paragraph 1.",
        exp: "The writer argues that failure, when handled well, is often an essential step toward success.",
        ev: "failure, when handled well, is often an essential step toward success"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer include the example of James Dyson?",
        opts: [
          ["To show how many failures led to a successful invention", null],
          ["To advertise vacuum cleaners", "The writer does not encourage readers to buy anything."],
          ["To prove that successful inventors never make mistakes", "Dyson made many failed prototypes before succeeding."],
          ["To explain how vacuum cleaners work", "The mechanics are not explained."]
        ],
        hint: "What did each failed model teach Dyson?",
        exp: "Dyson’s thousands of prototypes illustrate how learning from failure can lead to success.",
        ev: "Each failed model taught him something specific about what to change."
      },
      {
        skill: "Comparing ideas",
        q: "How does a growth mindset differ from a fixed mindset?",
        opts: [
          ["Growth sees abilities as developable; fixed sees them as unchangeable.", null],
          ["A growth mindset avoids challenges, while a fixed mindset actively seeks them.", "This is reversed and not supported by the passage."],
          ["They are the same, but they have different names.", "The writer uses “In contrast” to show they are different."],
          ["A fixed mindset learns more from failure.", "People with a fixed mindset see failure as proof they are not good enough."]
        ],
        hint: "Find the words “In contrast” in paragraph 3.",
        exp: "People with a growth mindset believe abilities can be developed; people with a fixed mindset believe their abilities cannot change.",
        ev: "In contrast, people with a fixed mindset believe their abilities cannot change"
      },
      {
        skill: "Context clues",
        q: "In paragraph 2, “prototypes” are…",
        opts: [
          ["early test versions of a product", null],
          ["finished products sold in shops", "These models failed, so they were not finished products."],
          ["customer complaints", "Complaints are not mentioned."],
          ["instruction manuals", "Manuals are not mentioned."]
        ],
        hint: "The next sentence calls each one a “failed model”.",
        exp: "A prototype is an early version used for testing. The text describes them as failed models that taught Dyson what to change.",
        ev: "Each failed model taught him something specific about what to change."
      },
      {
        skill: "Evaluating arguments",
        q: "Why does the writer add that “failure is not automatically useful”?",
        opts: [
          ["To make clear that failure helps only when we reflect and adjust", null],
          ["To change the argument and say failure is usually harmful for students", "The writer still believes failure can help, if we reflect and adjust."],
          ["To criticize James Dyson", "Dyson is presented positively."],
          ["To suggest that students should avoid tests", "The writer says test results can be useful."]
        ],
        hint: "Read the rest of paragraph 4.",
        exp: "The writer adds a limit to the argument: failure has value only if we analyze it, adjust, and try again.",
        ev: "The value comes from analyzing what went wrong, adjusting the approach, and trying again."
      },
      {
        skill: "Inference",
        q: "How would a person with a fixed mindset probably react to a low test score?",
        opts: [
          ["They would feel the score proves they are not good enough.", null],
          ["They would ask what they can learn from it.", "This describes a growth mindset."],
          ["They would make a new study plan with excitement and hope for next time.", "This is a growth-mindset reaction."],
          ["They would ask the teacher for extra practice.", "This shows a belief that abilities can grow."]
        ],
        hint: "Reread the description of a fixed mindset.",
        exp: "The passage says people with a fixed mindset feel failure is proof they are not good enough.",
        ev: "so failure feels like proof that they are not good enough"
      },
      {
        skill: "Context clues",
        q: "What does the writer mean by calling a disappointing test result “a valuable map”?",
        opts: [
          ["It shows the student which skills need more work.", null],
          ["It shows the way to the school building.", "The word “map” is used figuratively."],
          ["It means the student should change schools next year.", "The writer does not suggest changing schools."],
          ["It proves the test was unfair.", "The writer does not criticize the test."]
        ],
        hint: "Read the sentence that follows the word “map”.",
        exp: "Like a map shows where to go, the test result shows which skills need more work.",
        ev: "It shows exactly which skills need more work."
      }
    ]
  },
  {
    id: "r4-07",
    level: 4,
    title: "The Benefits and Challenges of Online Learning",
    category: "Technology",
    topic: "Compare and contrast",
    status: "retained",
    text: [
      "During the COVID-19 pandemic, millions of students around the world suddenly moved from classrooms to computer screens. Saudi Arabia launched the Madrasati platform, which allowed students to attend lessons, submit homework, and take quizzes from home. The experience revealed both the strengths and the weaknesses of online learning.",
      "One clear advantage is flexibility. Recorded lessons allow students to pause, rewind, and review difficult explanations as many times as they need. Students who are ill or live far from school can continue learning. Online platforms can also offer a wider range of courses than a single school might provide.",
      "Traditional classrooms, however, have strengths that are difficult to replace. In a classroom, a teacher can notice confusion on a student’s face and immediately explain an idea in a different way. Students also learn social skills through group work, discussion, and simply spending time together.",
      "Online learning can also expose inequalities. Not every family has a reliable internet connection or a quiet place to study. Younger students, in particular, may struggle to manage their time without an adult nearby.",
      "For these reasons, many educators now favor blended learning, which combines face-to-face teaching with online tools. In a blended model, students might watch a short video lesson at home and then use class time for practice, questions, and collaboration."
    ],
    before: {
      words: [
        { word: "pandemic", def: "A disease that spreads across many countries.", ex: "Schools closed during the pandemic." },
        { word: "flexibility", def: "The ability to change easily to fit different needs.", ex: "Online lessons give students flexibility." },
        { word: "inequalities", def: "Unfair differences between people or groups.", ex: "Some families lack the internet, which creates inequalities." },
        { word: "collaboration", def: "Working together with others.", ex: "The project needed collaboration between students." }
      ],
      predict: "What did you like and dislike about learning from home?"
    },
    questions: [
      {
        skill: "Text structure",
        q: "How is the passage mainly organized?",
        opts: [
          ["It compares online and classroom learning, then suggests a mix.", null],
          ["It tells the history of the Madrasati platform in the order things happened.", "Madrasati is one example, not the structure of the passage."],
          ["It lists problems with no solutions.", "The last paragraph offers blended learning as a solution."],
          ["It describes one student’s experience.", "No single student’s story is told."]
        ],
        hint: "Look at what paragraphs 2, 3, and 5 each do.",
        exp: "The passage presents advantages of online learning, strengths of classrooms, challenges, and finally blended learning as a combination.",
        ev: "many educators now favor blended learning, which combines face-to-face teaching with online tools"
      },
      {
        skill: "Comparing ideas",
        q: "According to the passage, what can a classroom teacher do that is difficult online?",
        opts: [
          ["Notice a student’s confusion and explain differently right away", null],
          ["Offer a wide range of courses", "This is listed as an ADVANTAGE of online platforms."],
          ["Let students pause and rewind lessons whenever they want", "This is an advantage of ONLINE learning."],
          ["Help students who live far from school", "Online learning helps these students."]
        ],
        hint: "Read paragraph 3.",
        exp: "In a classroom, a teacher can see confusion and immediately explain in another way.",
        ev: "a teacher can notice confusion on a student’s face and immediately explain an idea in a different way"
      },
      {
        skill: "Supporting details",
        q: "Which detail is an example of the flexibility of online learning?",
        opts: [
          ["Students can pause, rewind, and review recorded lessons.", null],
          ["Students learn social skills through group work in class.", "This describes a benefit of the classroom, not online flexibility."],
          ["Some families lack a quiet place to study.", "This is a challenge, not flexibility."],
          ["Teachers notice confusion immediately.", "This is a classroom strength."]
        ],
        hint: "Find the word “flexibility” in paragraph 2.",
        exp: "Recorded lessons let students pause, rewind, and review as many times as they need.",
        ev: "Recorded lessons allow students to pause, rewind, and review difficult explanations as many times as they need."
      },
      {
        skill: "Cause and effect",
        q: "Why might online learning increase inequality between students?",
        opts: [
          ["Some families lack reliable internet or a quiet place to study.", null],
          ["Online lessons are always shorter.", "Lesson length is not mentioned."],
          ["Teachers give better grades to students who choose to learn online.", "The passage does not say this."],
          ["All online courses are too difficult.", "Difficulty is not discussed."]
        ],
        hint: "Read paragraph 4.",
        exp: "Students without reliable internet or a quiet space cannot benefit equally from online learning.",
        ev: "Not every family has a reliable internet connection or a quiet place to study."
      },
      {
        skill: "Vocabulary in context",
        q: "What is “blended learning”?",
        opts: [
          ["A mix of face-to-face teaching and online tools", null],
          ["Learning only through recorded videos at home", "Blended learning combines face-to-face and online learning."],
          ["Learning in very large classes", "Class size is not discussed."],
          ["A method that uses only printed books and worksheets", "Blended learning includes online tools."]
        ],
        hint: "The passage defines the term right after it.",
        exp: "The passage explains that blended learning combines face-to-face teaching with online tools.",
        ev: "blended learning, which combines face-to-face teaching with online tools"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer mention the Madrasati platform?",
        opts: [
          ["To give a real, local example of large-scale online learning", null],
          ["To criticize the platform’s design", "The writer does not criticize Madrasati."],
          ["To explain how to log in to the platform", "No instructions are given."],
          ["To prove that classrooms are no longer needed in Saudi Arabia", "The writer suggests combining both, not replacing classrooms."]
        ],
        hint: "When and why was Madrasati used?",
        exp: "Madrasati is a real Saudi example of how students moved online during the pandemic.",
        ev: "Saudi Arabia launched the Madrasati platform, which allowed students to attend lessons, submit homework, and take quizzes from home."
      },
      {
        skill: "Inference",
        q: "Which student would benefit MOST from the recorded lessons described in paragraph 2?",
        opts: [
          ["A student who needs to hear an explanation several times", null],
          ["A student who wants more group discussion", "Group discussion is a classroom strength."],
          ["A young student who needs an adult nearby to help manage study time", "Young students may need adult support. This is a challenge, not a benefit of recordings."],
          ["A student without internet at home", "This student could not access recorded lessons."]
        ],
        hint: "What do recorded lessons allow students to do?",
        exp: "Recorded lessons let students review explanations “as many times as they need,” which helps a student who needs repetition.",
        ev: "review difficult explanations as many times as they need"
      }
    ]
  },
  {
    id: "r4-08",
    level: 4,
    title: "Can One Person Make a Difference?",
    category: "Society",
    topic: "Persuasive",
    status: "retained",
    text: [
      "When we hear about global problems such as plastic pollution or poverty, it is easy to feel powerless. What difference can one teenager make when a problem involves millions of people? The question is understandable, but history suggests that individual action matters more than we think.",
      "Consider Boyan Slat, who was sixteen when he went diving in Greece and saw more plastic bags than fish. Rather than accepting the problem, he began researching ways to remove plastic from the ocean. A few years later, he founded The Ocean Cleanup, an organization that develops technology to collect plastic from oceans and rivers.",
      "Of course, not everyone will start an international organization. However, individual actions also influence others in quieter ways. When a student brings a reusable bottle, organizes a beach cleanup, or tutors a younger classmate, others notice. Researchers who study social behavior have found that people are more likely to adopt a habit when they see others around them doing it. In this way, one person’s choice can spread through a class, a family, or a neighborhood.",
      "Critics argue that real change requires governments and large companies, not individuals. They are partly right: laws and investments are essential. Yet governments often act when citizens demand change, and companies respond to what customers choose to buy.",
      "So the next time you wonder whether your actions matter, remember that every movement begins with someone who decided to act."
    ],
    before: {
      words: [
        { word: "organization", def: "A group of people who work together for a purpose.", ex: "She joined an organization that helps children." },
        { word: "founded", def: "Started an organization or company.", ex: "He founded a club at his school." },
        { word: "adopt", def: "To start using a new idea or habit.", ex: "Our family adopted a recycling habit." },
        { word: "movement", def: "A group of people working together for a goal.", ex: "The clean-beach movement grew quickly." }
      ],
      predict: "Can one teenager help solve a big problem like pollution?"
    },
    questions: [
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose?",
        opts: [
          ["To persuade readers that individual actions can make a difference", null],
          ["To explain how to dive safely", "Diving is part of an example, not the purpose."],
          ["To argue that governments should do nothing about plastic", "The author does not argue this."],
          ["To describe the history of plastic", "The history of plastic is not discussed."]
        ],
        hint: "Read the first and last paragraphs.",
        exp: "The author argues that individual action matters and encourages readers to act.",
        ev: "history suggests that individual action matters more than we think"
      },
      {
        skill: "Evaluating evidence",
        q: "Why does the author include the story of Boyan Slat?",
        opts: [
          ["To show one young person’s idea growing into a large project", null],
          ["To show that Greece has the most plastic pollution", "The author does not compare countries."],
          ["To prove that only trained engineers with experience can make a difference", "The story shows a young person starting with an idea."],
          ["To explain why fish are disappearing", "Fish are mentioned only in his diving experience."]
        ],
        hint: "How old was he, and what did he create?",
        exp: "Slat was a teenager whose research led to an international organization, supporting the claim that individuals matter.",
        ev: "A few years later, he founded The Ocean Cleanup"
      },
      {
        skill: "Cause and effect",
        q: "According to researchers, how can one person’s choice spread to others?",
        opts: [
          ["People often adopt a habit when they see others doing it.", null],
          ["Governments force people to copy the good habits of others.", "Researchers describe people choosing to copy others, not being forced."],
          ["Companies pay people to change their habits.", "This is not mentioned."],
          ["People always ignore what others do.", "The research shows the opposite."]
        ],
        hint: "Find the word “Researchers” in paragraph 3.",
        exp: "Researchers found people tend to adopt habits they see around them, so one person’s choice can spread.",
        ev: "people are more likely to adopt a habit when they see others around them doing it"
      },
      {
        skill: "Evaluating arguments",
        q: "How does the author respond to critics who say only governments and companies create real change?",
        opts: [
          ["The author agrees partly but says citizens and customers influence them.", null],
          ["The author ignores the critics.", "Paragraph 4 directly discusses the critics."],
          ["The author says the critics are completely wrong about everything they claim.", "The author agrees with part of the critics’ point."],
          ["The author changes their mind and agrees fully.", "The author still concludes that individual action matters."]
        ],
        hint: "Look for “They are partly right” and the word “Yet”.",
        exp: "The author accepts that laws and investments are essential, but argues that governments and companies respond to citizens and customers.",
        ev: "Yet governments often act when citizens demand change, and companies respond to what customers choose to buy."
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 1, “powerless” means…",
        opts: [
          ["unable to change or control something", null],
          ["very strong and important", "“Powerless” means the opposite of strong."],
          ["without electricity in the home", "Here “powerless” is about having no ability to change things, not about electricity."],
          ["very angry", "Anger is not described."]
        ],
        hint: "Read the question that follows: “What difference can one teenager make…?”",
        exp: "Feeling powerless means feeling unable to make a difference. The next sentence expresses this feeling.",
        ev: "What difference can one teenager make when a problem involves millions of people?"
      },
      {
        skill: "Text structure",
        q: "Which sequence best describes the organization of the passage?",
        opts: [
          ["Question, example, quieter influence, counterargument, conclusion", null],
          ["Problem, statistics, solution", "The passage uses examples and arguments, not statistics."],
          ["Story told from beginning to end", "Only one paragraph is a story."],
          ["Definition, history of plastic, prediction about the future", "The passage does not define terms or give a history."]
        ],
        hint: "Summarize each of the five paragraphs.",
        exp: "The passage opens with a question, gives Slat’s example, discusses everyday influence, answers critics, and concludes.",
        ev: "Critics argue that real change requires governments and large companies, not individuals."
      },
      {
        skill: "Tone",
        q: "Which word best describes the tone of the final paragraph?",
        opts: [
          ["Encouraging", null],
          ["Doubtful", "The author is confident that actions matter."],
          ["Angry", "There is no angry language."],
          ["Disappointed", "The final paragraph is hopeful, not disappointed."]
        ],
        hint: "How does the author want readers to feel after reading?",
        exp: "The final paragraph motivates readers to act, so the tone is encouraging.",
        ev: "every movement begins with someone who decided to act"
      }
    ]
  },
  {
    id: "r4-09",
    level: 4,
    title: "The Importance of Digital Literacy",
    category: "Critical Thinking",
    topic: "Informational",
    status: "revised",
    revisionNote: "Split a 34-word sentence describing the Stanford study.",
    text: [
      "Most teenagers today have grown up with smartphones and the internet. Because they can use apps quickly, adults often call them “digital natives.” However, being comfortable with technology is not the same as being digitally literate.",
      "Digital literacy is the ability to find, evaluate, create, and communicate information safely and responsibly using digital tools. It includes practical skills, such as searching effectively, but also thinking skills, such as judging whether a website is reliable.",
      "Research suggests that many young people struggle with these thinking skills. In a well-known study by researchers at Stanford University, middle school students were tested on news websites. Most of them could not tell the difference between a real news article and an advertisement designed to look like news.",
      "Digital literacy also involves protecting yourself. Strong passwords, privacy settings, and caution about sharing personal information help prevent scams. Equally important is understanding your digital footprint: the lasting record of what you post, like, and share. A careless comment made at fifteen could be found by a university or employer years later.",
      "Finally, digitally literate people are creators, not just consumers. They can build a presentation or edit a video that communicates ideas clearly and gives credit to sources.",
      "In a world where information spreads instantly, digital literacy is no longer optional. It is a basic skill for learning, working, and participating in society."
    ],
    before: {
      words: [
        { word: "literate", def: "Able to read, write, and understand well.", ex: "Digitally literate students check their sources." },
        { word: "evaluate", def: "To judge how good or true something is.", ex: "Evaluate the website before you trust it." },
        { word: "reliable", def: "Able to be trusted.", ex: "A reliable website has correct information." },
        { word: "scams", def: "Dishonest plans to trick people and take their money.", ex: "Never share your password; it could be a scam." }
      ],
      predict: "How can you tell if information on a website is true?"
    },
    questions: [
      {
        skill: "Main idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Digital literacy is an essential skill, not just comfort with technology.", null],
          ["Teenagers are naturally experts at evaluating websites and apps.", "The writer says growing up with technology is not enough."],
          ["People should avoid using the internet.", "The writer wants people to use it well, not avoid it."],
          ["Passwords are the most important part of technology.", "Passwords are one small part of digital literacy."]
        ],
        hint: "Read the last sentence of paragraph 1 and the final paragraph.",
        exp: "The writer argues that digital literacy involves thinking, safety, and creating, and that it is now a basic skill.",
        ev: "being comfortable with technology is not the same as being digitally literate"
      },
      {
        skill: "Comparing ideas",
        q: "How is a “digital native” different from a digitally literate person, according to the writer?",
        opts: [
          ["Digital natives use technology easily but may not judge information.", null],
          ["They mean exactly the same thing, according to the writer.", "The writer explains an important difference."],
          ["A digital native cannot use apps.", "The writer says they can use apps quickly."],
          ["A digitally literate person never uses social media or apps of any kind.", "Digital literacy is about using technology wisely, not avoiding it."]
        ],
        hint: "Read paragraph 1, especially the word “However”.",
        exp: "Digital natives use apps quickly, but digital literacy also requires judging information and using technology responsibly.",
        ev: "Because they can use apps quickly, adults often call them “digital natives.”"
      },
      {
        skill: "Evaluating evidence",
        q: "Which evidence supports the claim that young people struggle with digital thinking skills?",
        opts: [
          ["The Stanford study on students and disguised advertisements", null],
          ["The fact that today’s teenagers grew up with smartphones", "This shows familiarity with technology, not a lack of thinking skills."],
          ["The advice to use strong passwords", "This is advice, not evidence of a struggle."],
          ["The description of creating videos", "This describes a skill, not research evidence."]
        ],
        hint: "Look for research in paragraph 3.",
        exp: "The Stanford study provides research evidence that many students could not distinguish real news from advertising.",
        ev: "Most of them could not tell the difference between a real news article and an advertisement designed to look like news."
      },
      {
        skill: "Vocabulary in context",
        q: "What is a “digital footprint”?",
        opts: [
          ["The lasting record of what you post and share online", null],
          ["A step-counting app that records where you walk", "This is not what the writer means."],
          ["A type of strong password", "Passwords are a different topic."],
          ["The amount of storage space you have used on a computer or phone", "Storage space is not discussed."]
        ],
        hint: "The writer defines the term after the colon.",
        exp: "The passage defines a digital footprint as the lasting record of what you post, like, and share.",
        ev: "your digital footprint: the lasting record of what you post, like, and share"
      },
      {
        skill: "Inference",
        q: "Based on paragraph 4, what would the writer most likely advise a student to do before posting a comment?",
        opts: [
          ["Think about how the comment might be seen in the future.", null],
          ["Post it quickly before forgetting the idea or the moment.", "The writer advises thinking before posting."],
          ["Share it only with strangers.", "Strangers are not safer readers."],
          ["Use a longer password.", "Passwords do not affect what others read later."]
        ],
        hint: "What could happen to a careless comment years later?",
        exp: "Because a comment could be found by a university or employer years later, the writer would advise thinking before posting.",
        ev: "A careless comment made at fifteen could be found by a university or employer years later."
      },
      {
        skill: "Text structure",
        q: "How does the writer develop the explanation of digital literacy after defining it?",
        opts: [
          ["By explaining its parts in turn: evaluating, protecting, creating", null],
          ["By telling a story about one student’s experience online", "There is no single student’s story."],
          ["By listing apps in alphabetical order", "No list of apps is given."],
          ["By comparing digital literacy in different countries", "No countries are compared."]
        ],
        hint: "Look at how paragraphs 3, 4, and 5 begin.",
        exp: "After the definition, the writer discusses evaluating information (with research), protecting yourself, and creating content.",
        ev: "Digital literacy also involves protecting yourself."
      },
      {
        skill: "Author’s purpose",
        q: "What is the purpose of the final paragraph?",
        opts: [
          ["To emphasize that digital literacy is necessary for everyone", null],
          ["To introduce a new research study about how teenagers behave online", "The final paragraph sums up. It does not introduce new research."],
          ["To warn readers to stop using technology", "The writer does not say this."],
          ["To summarize the history of the internet", "The internet’s history is not discussed."]
        ],
        hint: "Look at the phrase “no longer optional”.",
        exp: "The final paragraph stresses that digital literacy is now a basic skill for learning, working, and society.",
        ev: "digital literacy is no longer optional"
      }
    ]
  },
  {
    id: "r4-10",
    level: 4,
    title: "Should Students Learn Financial Skills at School?",
    category: "Society",
    topic: "Argument",
    status: "retained",
    text: [
      "Every day, young people make decisions about money. They choose whether to buy a snack, save for a new phone, or spend their allowance on a game. Soon, they will face bigger decisions about bank accounts, loans, and budgets. Yet many students leave school without learning how to manage money. Should financial education be part of the curriculum?",
      "Supporters say yes. They argue that financial skills are as important as any academic subject because everyone needs them. Without basic knowledge, people may borrow more than they can repay or fall for online scams that promise quick profits. Surveys in many countries have found that large numbers of adults cannot answer simple questions about interest or inflation.",
      "Opponents do not deny that money skills matter. However, they argue that the school day is already full, and adding a new subject could mean less time for math, science, or languages. Some also believe that families, not schools, should teach children about money, because financial values differ from household to household.",
      "There is a possible middle path. Instead of creating a separate course, schools could include financial skills in existing subjects. In math, students could calculate savings growth or compare phone plans. In English, they could analyze advertisements and identify persuasive techniques.",
      "Ultimately, the question is not whether young people need financial knowledge, but how and where they can best learn it."
    ],
    before: {
      words: [
        { word: "allowance", def: "Money that parents give children regularly.", ex: "I save part of my allowance every week." },
        { word: "budget", match: "budgets", def: "A plan for how to spend money.", ex: "We made a budget for our trip." },
        { word: "scams", def: "Dishonest plans to take people’s money.", ex: "Be careful of online scams." },
        { word: "inflation", def: "When prices keep rising over time.", ex: "Because of inflation, food costs more this year." }
      ],
      predict: "Should schools teach students how to manage money? Why?"
    },
    questions: [
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose?",
        opts: [
          ["To explore arguments about financial education and suggest a middle path", null],
          ["To teach readers how to open a bank account", "No instructions are given."],
          ["To argue that schools should remove math and science classes to teach money", "The author does not suggest removing subjects."],
          ["To criticize parents who talk about money", "Parents are not criticized."]
        ],
        hint: "Look at paragraph 4.",
        exp: "The author presents supporters’ and opponents’ views, then suggests including financial skills in existing subjects.",
        ev: "There is a possible middle path."
      },
      {
        skill: "Comparing viewpoints",
        q: "On what point do supporters and opponents AGREE?",
        opts: [
          ["Money skills matter.", null],
          ["Financial education should be a separate subject.", "Opponents disagree with adding a new subject."],
          ["The school day has plenty of free time.", "Opponents say the school day is already full."],
          ["Families should never teach about money.", "Some opponents believe families SHOULD teach about money."]
        ],
        hint: "Read the first sentence of paragraph 3.",
        exp: "The passage says opponents “do not deny that money skills matter.” Both sides agree on this.",
        ev: "Opponents do not deny that money skills matter."
      },
      {
        skill: "Evaluating evidence",
        q: "Which evidence do supporters use to show the need for financial education?",
        opts: [
          ["Surveys of adults who cannot answer simple money questions", null],
          ["The fact that the school day is full", "This is an opponent’s argument."],
          ["Financial values differ from one family to another", "This is an argument used by opponents."],
          ["Students can compare phone plans during math class.", "This is part of the middle path, not evidence of need."]
        ],
        hint: "Look for research or data in paragraph 2.",
        exp: "The surveys show that many adults lack basic financial knowledge, supporting the need for education.",
        ev: "Surveys in many countries have found that large numbers of adults cannot answer simple questions about interest or inflation."
      },
      {
        skill: "Cause and effect",
        q: "According to supporters, what can happen to people without basic financial knowledge?",
        opts: [
          ["They may borrow more than they can repay or fall for scams.", null],
          ["They will become rich quickly.", "Scams that promise quick profits are a danger, not a benefit."],
          ["They will study more science.", "This is not connected to supporters’ argument."],
          ["They will never need to open a bank account or borrow money.", "The passage does not say this."]
        ],
        hint: "Read the third sentence of paragraph 2.",
        exp: "Supporters warn that people without knowledge may borrow too much or fall for online scams.",
        ev: "people may borrow more than they can repay or fall for online scams that promise quick profits"
      },
      {
        skill: "Evaluating arguments",
        q: "Which opponent argument is based on differences in values between families?",
        opts: [
          ["Families, not schools, should teach children about money.", null],
          ["The school day is already full.", "This argument is about time, not values."],
          ["Adding a new subject would reduce time for math and science.", "This argument is about time, not family values."],
          ["Money skills do not matter.", "Opponents do NOT make this argument."]
        ],
        hint: "Find the word “values” in paragraph 3.",
        exp: "Some opponents believe families should teach about money because financial values differ from household to household.",
        ev: "because financial values differ from household to household"
      },
      {
        skill: "Problem and solution",
        q: "What does the “middle path” suggest?",
        opts: [
          ["Teaching money skills inside subjects such as math and English", null],
          ["Creating a new, separate financial course for students in all grades", "The middle path uses existing subjects instead of a new course."],
          ["Letting only parents teach money skills", "The middle path keeps money skills in school."],
          ["Removing English classes to make time", "The middle path uses English classes."]
        ],
        hint: "Read paragraph 4.",
        exp: "Schools could include financial skills in subjects they already teach, avoiding the problem of a full school day.",
        ev: "schools could include financial skills in existing subjects"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 1, the word “curriculum” means…",
        opts: [
          ["the subjects and content taught at a school", null],
          ["a type of bank account", "Bank accounts are mentioned, but this word refers to school."],
          ["a student’s pocket money for the school week", "Pocket money is not the meaning here."],
          ["the school building", "The word refers to what is taught, not the building."]
        ],
        hint: "The question asks whether financial education should be “part of the curriculum.” Part of what?",
        exp: "The curriculum is the set of subjects and content a school teaches.",
        ev: "Should financial education be part of the curriculum?"
      }
    ]
  }
]);
