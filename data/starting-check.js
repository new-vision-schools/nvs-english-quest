/* =====================================================================
   NVS English Quest — Reading Starting-Point Check (Version 3D)
   ---------------------------------------------------------------------
   An INFORMAL check that suggests where a student could start reading.
   It is not a validated placement test and gives no official level.

   • Five short original texts, one for each reading level (1–5).
   • Three questions per text (15 in total).
   • In each "opts" list, the FIRST option is the correct answer in this file.
     The website shuffles the options randomly every time a student takes the
     check, and it tracks the correct answer separately, so students never see
     the correct answer in a fixed position.
   • exp: a short explanation in simple English, shown on the results page.
   • Question ids (c1-q1 …) are used only for the check. They do not affect
     any other progress.
   ===================================================================== */
NVS_CONTENT.startCheck = {
  samples: [
    {
      level: 1,
      title: "Ahmed’s New Bike",
      focus: "Finding details in very simple sentences",
      text: [
        "Ahmed is thirteen years old. He lives in Riyadh with his family. Last week, he got a new bike. It is red and black. Ahmed rides his bike in the park every evening. His sister Noura rides with him. They come home at seven o’clock."
      ],
      questions: [
        { id: "c1-q1", q: "What color is Ahmed’s new bike?",
          opts: [["Red and black"], ["Blue and white"], ["Red and white"], ["Green and black"]],
          exp: "The text says, “It is red and black.”" },
        { id: "c1-q2", q: "Where does Ahmed ride his bike?",
          opts: [["In the park"], ["At school"], ["On the main road"], ["In his garden"]],
          exp: "The text says, “Ahmed rides his bike in the park every evening.”" },
        { id: "c1-q3", q: "Who rides with Ahmed?",
          opts: [["His sister Noura"], ["His father"], ["His friend Khalid"], ["His teacher"]],
          exp: "The text says, “His sister Noura rides with him.”" }
      ]
    },
    {
      level: 2,
      title: "The School Book Swap",
      focus: "Main idea, details, and simple cause and effect",
      text: [
        "Every year, many students at Al-Rawdah School have books that they do not read anymore. Last month, the Grade 9 students had an idea. They started a book swap in the library. Each student brought one old book and took a different book home.",
        "More than eighty students joined in the first week. Because the books were free, students who do not usually buy books were able to read something new. The librarian was so happy that she decided to hold a book swap every term."
      ],
      questions: [
        { id: "c2-q1", q: "What is the text mainly about?",
          opts: [["Students who start a book swap to share their books"], ["A librarian who buys new books for the school library"], ["Grade 9 students who write their own books for a contest"], ["Students who stop reading because books are expensive"]],
          exp: "The whole text describes the book swap: how it started, who joined, and what happened next." },
        { id: "c2-q2", q: "How many students joined in the first week?",
          opts: [["More than eighty"], ["About eighteen"], ["Exactly eight"], ["More than two hundred"]],
          exp: "The text says, “More than eighty students joined in the first week.”" },
        { id: "c2-q3", q: "Why were some students able to read something new?",
          opts: [["The books were free."], ["The library stayed open later."], ["Their teachers gave them extra time."], ["The books were shorter than usual."]],
          exp: "The word “because” shows the reason: “Because the books were free, students who do not usually buy books were able to read something new.”" }
      ]
    },
    {
      level: 3,
      title: "A Garden on the Roof",
      focus: "Main idea, context clues, and simple inference",
      text: [
        "In many big cities, there is little space for parks. One apartment building in Riyadh found a creative solution. The residents turned the empty roof of their building into a garden.",
        "At first, some neighbors were doubtful. They thought plants would not survive the summer heat on a roof. However, the residents chose plants that need little water, such as aloe and desert herbs, and they built shade from palm leaves. They also set up a simple system that collects water from air conditioners and uses it for the plants.",
        "After one year, the roof garden was full of green leaves. Families now meet there in the evenings, and children help water the plants on weekends. The top-floor apartments are also cooler than before, because the plants block some of the sun’s heat. Several other buildings on the street are now planning gardens of their own."
      ],
      questions: [
        { id: "c3-q1", q: "What is the main idea of the text?",
          opts: [["Residents built a roof garden that brought several benefits."], ["Plants cannot survive the summer heat on a roof in Riyadh."], ["Apartment buildings in Riyadh need bigger air conditioners."], ["Children should help water the plants at school every weekend."]],
          exp: "The text explains how the residents built the garden and describes its good results: a meeting place, cooler apartments, and an example for other buildings." },
        { id: "c3-q2", q: "In paragraph 2, “some neighbors were doubtful.” What does “doubtful” mean?",
          opts: [["not sure that something would work"], ["very excited about a new idea"], ["angry with the other residents"], ["too busy to help with the work"]],
          exp: "The next sentence is a clue: “They thought plants would not survive.” Being doubtful means not being sure that something will work." },
        { id: "c3-q3", q: "Why are other buildings on the street most likely planning gardens?",
          opts: [["They saw the good results of the first roof garden."], ["The city told every building to build a garden."], ["Their roofs are too hot to use for anything else at all."], ["They want to sell vegetables from their gardens."]],
          exp: "The text does not say this directly. The last sentence comes right after the benefits, so we can infer that the neighbors were inspired by the results." }
      ]
    },
    {
      level: 4,
      title: "Should Homework Have Limits?",
      focus: "Inference, author’s purpose, and supporting evidence",
      text: [
        "Homework has been part of school life for generations, but many families now ask whether students receive too much of it. Some secondary students report spending three or more hours on homework every night, in addition to a full school day.",
        "Supporters of homework argue that it helps students practice skills and develop responsibility. A student who solves math problems at home, for example, has a chance to discover what she has not fully understood. Homework can also show parents what their children are learning.",
        "Critics, however, point out that the amount of homework matters. Research on secondary students suggests that the benefits of homework increase up to a point and then level off. After about two hours a night, extra work may add stress without improving results. Tired students may also have less time for sleep, exercise, and family.",
        "For this reason, some schools have introduced homework guidelines. Teachers in different subjects coordinate so that students do not receive several large assignments on the same night. The aim is not to remove homework, but to make every assignment count."
      ],
      questions: [
        { id: "c4-q1", q: "What is the author’s main purpose?",
          opts: [["To explain views on homework and describe a balanced response"], ["To argue that schools should remove all homework immediately"], ["To tell the story of one student who had far too much homework"], ["To teach students how to finish their homework more quickly"]],
          exp: "The author presents supporters and critics, then describes guidelines whose aim “is not to remove homework, but to make every assignment count.”" },
        { id: "c4-q2", q: "Which sentence BEST supports the idea that too much homework may not help students?",
          opts: [["“After about two hours a night, extra work may add stress without improving results.”"], ["“Homework can also show parents what their children are learning.”"], ["“Homework has been part of school life for generations, but many families now ask whether students receive too much of it.”"], ["“Teachers in different subjects coordinate so that students do not receive several large assignments on the same night.”"]],
          exp: "This sentence gives evidence that more homework does not always lead to better results. The other sentences describe history, a benefit, or a solution." },
        { id: "c4-q3", q: "What can you infer about the schools that introduced homework guidelines?",
          opts: [["They believe homework is useful when the amount is reasonable."], ["They believe homework has no value for secondary students."], ["They want students to spend more hours studying at home."], ["They think parents should check every single assignment each night."]],
          exp: "The last sentence says the aim is “not to remove homework, but to make every assignment count.” The schools value homework but want a sensible amount." }
      ]
    },
    {
      level: 5,
      title: "The Promise and Limits of Smart Cities",
      focus: "Evaluating ideas, author’s perspective, and conclusions",
      text: [
        "Around the world, cities are using sensors, data, and artificial intelligence to manage traffic, energy, and public services. Supporters call these “smart cities” and describe them as the future of urban life. In a smart city, traffic lights can adjust to the flow of cars, streetlights can dim when streets are empty, and residents can report problems through an app.",
        "The benefits can be real. When traffic lights respond to actual conditions, journeys become shorter and cars burn less fuel. When water systems detect leaks quickly, less water is wasted, which matters greatly in a dry region.",
        "However, technology alone does not create a better city. Sensors collect enormous amounts of information about where people go and what they do. Without clear rules, this data could be misused or poorly protected. Moreover, a system designed only by engineers may overlook the needs of elderly residents or people who do not own smartphones.",
        "Ultimately, a city is smart not because of the number of sensors it installs, but because of the quality of the decisions it makes. The most successful projects will combine new technology with transparent rules and the voices of the people who actually live there."
      ],
      questions: [
        { id: "c5-q1", q: "Which statement best describes the author’s view of smart cities?",
          opts: [["They offer real benefits, but only when good decisions guide the technology."], ["They are a dangerous idea that cities should reject to protect privacy."], ["They will solve every problem in a city once enough sensors are installed."], ["They matter mainly to engineers, so the residents do not need to be involved."]],
          exp: "The author describes real benefits (paragraph 2) and real risks (paragraph 3), then concludes that the quality of decisions is what makes a city smart." },
        { id: "c5-q2", q: "How does the author support the claim that “technology alone does not create a better city”?",
          opts: [["By describing privacy risks and residents whose needs may be overlooked"], ["By giving statistics that show that most smart cities have already failed"], ["By explaining how traffic lights and water systems save resources"], ["By quoting engineers who strongly disagree with the smart city idea"]],
          exp: "Right after the claim, the author gives two reasons: data could be misused, and systems may overlook elderly residents or people without smartphones." },
        { id: "c5-q3", q: "Based on the text, which project would the author most likely call truly “smart”?",
          opts: [["A traffic system planned with residents and clear rules about data"], ["A city that installs more sensors than any other city in the world"], ["An app that collects residents’ locations without telling them"], ["A water system designed by engineers without asking any residents"]],
          exp: "The final paragraph says the best projects combine technology with transparent rules and the voices of residents." }
      ]
    }
  ]
};
