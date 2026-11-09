/* ===== NVS English Quest — Writing Workshop content =====
   25 activities: five per level (four checked activities and one guided writing task).
   Types: order (word tiles), correct (rewrite a sentence: fix, combine, or revise), choose (best sentence),
   para (paragraph order), guided (self-assessed open writing — never auto-graded).
   learn: the short lesson shown before practice (Learn, See an Example, Remember, Check and Improve).
   task (optional, order/correct items): an instruction that replaces the default one.
   For "choose" items the FIRST option is correct. Add new items only at the END of an activity:
   item ids come from their position. Activity ids must never change. */
NVS_CONTENT.writing = {
  levels: [
    {
      n: 1,
      name: "Sentence Starter",
      focus: "Words and basic sentences: word order, capital letters, end punctuation, subject–verb agreement, describing people and places"
    },
    {
      n: 2,
      name: "Sentence Builder",
      focus: "Building complete sentences, correcting errors, combining ideas, adding descriptive details"
    },
    {
      n: 3,
      name: "Paragraph Builder",
      focus: "Topic sentences, supporting details, logical order, simple transitions, coherent paragraphs"
    },
    {
      n: 4,
      name: "Organized Writer",
      focus: "Developing ideas with explanations and examples, unity, coherence, transitions, revising vague or repetitive language"
    },
    {
      n: 5,
      name: "Independent Writer",
      focus: "Clear claims, reasons and evidence, counterarguments, logical organization, formal tone, editing"
    }
  ],
  activities: [
    {
      id: "w1a",
      level: 1,
      type: "order",
      title: "Build Simple Sentences",
      desc: "Learn the basic order of an English sentence, then build six sentences from word tiles.",
      learn: {
        skill: "Word order in simple sentences",
        explain: "Most English sentences follow this order: Subject (who or what) + Verb (the action) + the rest (what, where, or when). Questions with do or does start with Do/Does + subject + verb.",
        example: "Sara | eats | breakfast | at seven o’clock.",
        notes: ["Sara = subject (who)", "eats = verb (the action)", "breakfast = what", "at seven o’clock = when"],
        tips: [
          "Find the person or thing first. It is usually the subject.",
          "Put the verb right after the subject.",
          "Time words (every day, at seven o’clock) usually go at the end.",
          "A question needs a question mark (?)."
        ],
        check: ["Does my sentence start with a capital letter?", "Is the verb right after the subject?", "Does it end with . or ?"]
      },
      items: [
        {
          skill: "Word order",
          tiles: ["every", "reads", "evening", "Omar", "."],
          accept: [
            ["Omar", "reads", "every", "evening", "."]
          ],
          hint: "Start with the person (the subject). Then add the action (the verb).",
          exp: "English sentences usually follow this order: Subject (Omar) + Verb (reads) + Time (every evening)."
        },
        {
          skill: "Word order",
          tiles: ["school", "to", "goes", "bus", "Sara", "by", "."],
          accept: [
            ["Sara", "goes", "to", "school", "by", "bus", "."]
          ],
          hint: "Who does the action? Start with that word. It has a capital letter.",
          exp: "Subject (Sara) + Verb (goes) + Place (to school) + How (by bus): Sara goes to school by bus."
        },
        {
          skill: "End punctuation",
          tiles: ["you", "like", "Do", "football", ".", "?"],
          accept: [
            ["Do", "you", "like", "football", "?"]
          ],
          hint: "This sentence asks something. Which end mark does a question need? You will not use every tile.",
          exp: "Questions with “Do” start with Do + subject + verb, and they end with a question mark: Do you like football?"
        },
        {
          skill: "Word order",
          tiles: ["English", "studies", "Faisal", "every", "day", "."],
          accept: [
            ["Faisal", "studies", "English", "every", "day", "."]
          ],
          hint: "Start with the name. Then the verb. The time words go at the end.",
          exp: "Subject (Faisal) + Verb (studies) + What (English) + When (every day): Faisal studies English every day."
        },
        {
          skill: "Word order",
          tiles: ["is", "classroom", "Our", "big", "."],
          accept: [
            ["Our", "classroom", "is", "big", "."]
          ],
          hint: "Start with the word that has a capital letter. What comes after “classroom”?",
          exp: "“Our classroom” is the subject. The verb “is” comes next, then the describing word “big”: Our classroom is big."
        },
        {
          skill: "End punctuation",
          tiles: ["she", "Does", "basketball", "play", "?", "."],
          accept: [
            ["Does", "she", "play", "basketball", "?"]
          ],
          hint: "This is a question with “Does”. You will not use every tile.",
          exp: "Questions with “Does” follow this order: Does + subject (she) + verb (play) + the rest, and they end with a question mark."
        }
      ]
    },
    {
      id: "w1b",
      level: 1,
      type: "correct",
      title: "Fix Capitals and End Marks",
      desc: "Learn when to use capital letters and end marks, then correct six sentences.",
      learn: {
        skill: "Capital letters and end punctuation",
        explain: "Use a capital letter for the first word of a sentence, the word I, and names of people, places, days, and months. End a statement with a full stop (.) and a question with a question mark (?).",
        example: "On Sunday, Ali and I visited Jeddah. Did you go too?",
        notes: [
          "On = first word of the sentence",
          "Sunday = a day",
          "Ali = a name",
          "I = always a capital letter",
          "Jeddah = a city",
          "? = the second sentence is a question"
        ],
        tips: ["Check the first word of every sentence.", "Look for names, days, months, cities, and countries.", "Ask: is this sentence telling or asking?"],
        check: ["Every sentence starts with a capital letter.", "Names, days, and the word I have capitals.", "Every sentence has the right end mark."]
      },
      items: [
        {
          skill: "Capital letters",
          wrong: "my brother lives in riyadh",
          accept: ["My brother lives in Riyadh.", "My brother lives in Riyadh!"],
          hint: "Two words need capital letters: the first word, and the name of a city.",
          exp: "Use a capital letter at the start of a sentence and for names of places (Riyadh). A statement ends with a full stop.",
          checks: [
            ["riyadh", "Names of cities always start with a capital letter: Riyadh."],
            ["^my", "The first word of a sentence needs a capital letter."]
          ]
        },
        {
          skill: "End punctuation",
          wrong: "where is your classroom",
          accept: ["Where is your classroom?"],
          hint: "Is this sentence telling or asking?",
          exp: "This sentence asks a question, so it needs a question mark. The first word needs a capital letter: Where is your classroom?",
          checks: [
            ["\\.$", "This sentence asks a question. A question ends with a question mark (?), not a full stop."],
            ["^where", "The first word of a sentence needs a capital letter."]
          ]
        },
        {
          skill: "Capital letters",
          wrong: "ahmed and i play football on friday",
          accept: ["Ahmed and I play football on Friday.", "Ahmed and I play football on Fridays.", "Ahmed and I play football on Friday!"],
          hint: "Look for a name, the word “i”, and a day of the week.",
          exp: "Capital letters are needed for the first word, names (Ahmed), the pronoun I, and days of the week (Friday).",
          checks: [
            [" i ", "The word “I” (meaning me) is always a capital letter."],
            ["friday", "Days of the week start with a capital letter: Friday."],
            ["ahmed", "Names of people start with a capital letter: Ahmed."]
          ]
        },
        {
          skill: "Capital letters",
          wrong: "we visited abha in july.",
          accept: ["We visited Abha in July."],
          hint: "Three words need capital letters: the first word, a city, and a month.",
          exp: "Capitals are needed for the first word (We), the name of a city (Abha), and the name of a month (July).",
          checks: [
            ["^we", "The first word of a sentence needs a capital letter."],
            ["abha", "Names of cities start with a capital letter: Abha."],
            ["july", "Months start with a capital letter: July."]
          ]
        },
        {
          skill: "End punctuation",
          wrong: "do you have a pencil.",
          accept: ["Do you have a pencil?"],
          hint: "Is this sentence telling or asking?",
          exp: "This sentence asks a question, so it starts with a capital letter and ends with a question mark: Do you have a pencil?",
          checks: [
            ["\\.$", "This sentence asks a question. Use a question mark (?) at the end."],
            ["^do", "The first word of a sentence needs a capital letter."]
          ]
        },
        {
          skill: "Capital letters",
          wrong: "my teacher is mr. hassan.",
          accept: ["My teacher is Mr. Hassan."],
          hint: "Look at the first word, the title (mr.), and the name.",
          exp: "Use capitals for the first word (My), titles before names (Mr.), and names (Hassan): My teacher is Mr. Hassan.",
          checks: [
            ["^my", "The first word of a sentence needs a capital letter."],
            ["mr\\.", "Titles before names need a capital letter: Mr."],
            ["hassan", "Names of people start with a capital letter: Hassan."]
          ]
        }
      ]
    },
    {
      id: "w1c",
      level: 1,
      type: "choose",
      title: "Choose the Correct Sentence",
      desc: "Learn what makes a simple sentence correct, then choose the correct sentence in six sets.",
      learn: {
        skill: "Simple, correct sentences",
        explain: "A correct simple sentence has a subject and a verb that agree, words in the right order, a capital letter, and an end mark. With he, she, it, or one person, a present-tense verb usually ends in -s: she plays, he lives.",
        example: "My sister plays tennis. My brothers play football.",
        notes: ["My sister = one person, so the verb is plays (-s)", "My brothers = more than one, so the verb is play (no -s)"],
        tips: ["Check the subject: one person or more than one?", "Check the verb ending: -s for he, she, it.", "Then check the capital letter and the end mark."],
        check: ["Does the verb agree with the subject?", "Are the words in the right order?", "Is there a capital letter and an end mark?"]
      },
      items: [
        {
          skill: "Simple complete sentences",
          q: "Which sentence is written correctly?",
          opts: [
            ["The students are in the library.", null],
            ["the students are in the library.", "The first word of a sentence needs a capital letter."],
            ["The students in the library are.", "The words are in the wrong order. The verb “are” should come after “students”."],
            ["Are the students in the library.", "This is a question, so it needs a question mark."]
          ],
          hint: "Check three things: capital letter, word order, and end mark.",
          exp: "“The students are in the library.” has a capital letter, correct word order (subject + verb + place), and a full stop."
        },
        {
          skill: "End punctuation",
          q: "Which sentence is written correctly?",
          opts: [
            ["I have a cat and a dog.", null],
            ["I have a cat and a dog", "This sentence has no end punctuation."],
            ["i have a cat and a dog.", "The word “I” is always a capital letter."],
            ["I a cat and a dog have.", "The verb “have” should come right after “I”."]
          ],
          hint: "One sentence has a capital I, good word order, AND a full stop.",
          exp: "“I have a cat and a dog.” is correct: capital I, subject + verb + object, and a full stop."
        },
        {
          skill: "End punctuation",
          q: "Which question is written correctly?",
          opts: [
            ["What time is it?", null],
            ["What time is it.", "A question needs a question mark, not a full stop."],
            ["what time is it?", "The first word needs a capital letter."],
            ["What time it is?", "In a question, “is” comes before “it”: What time is it?"]
          ],
          hint: "In questions, the verb usually comes before the subject.",
          exp: "“What time is it?” has a capital letter, question word order (is + it), and a question mark."
        },
        {
          skill: "Subject–verb agreement",
          q: "Which sentence is written correctly?",
          opts: [
            ["My father works in an office.", null],
            ["My father work in an office.", "“My father” is one person, so the verb needs -s: works."],
            ["My father working in an office.", "“Working” alone is not a complete verb. Use “works” or “is working”."],
            ["My father works in an office", "This sentence needs a full stop at the end."]
          ],
          hint: "Is “my father” one person or more than one? Check the end mark too.",
          exp: "“My father works in an office.” The verb “works” agrees with one person, and the sentence ends with a full stop."
        },
        {
          skill: "Describing people and places",
          q: "Which sentence describes a place correctly?",
          opts: [
            ["The park near my house is quiet.", null],
            ["The park near my house quiet.", "This sentence has no verb. Add “is”: The park near my house is quiet."],
            ["the park near my house is quiet.", "The first word needs a capital letter."],
            ["The park near my house are quiet.", "“The park” is one place, so use “is”, not “are”."]
          ],
          hint: "A describing sentence needs the verb “is” or “are”. Which one is correct here?",
          exp: "“The park near my house is quiet.” has a subject, the correct verb (is), a describing word (quiet), a capital letter, and a full stop."
        },
        {
          skill: "Subject–verb agreement",
          q: "Which sentence is written correctly?",
          opts: [
            ["The students have a test today.", null],
            ["The students has a test today.", "“The students” means more than one, so use “have”, not “has”."],
            ["The students have a test today", "This sentence needs a full stop."],
            ["The students a test have today.", "The verb “have” should come right after “The students”."]
          ],
          hint: "“Students” means more than one. Which verb goes with more than one person?",
          exp: "With a plural subject (the students), use “have”: The students have a test today."
        }
      ]
    },
    {
      id: "w1d",
      level: 1,
      type: "para",
      title: "Order a Paragraph: My School Day",
      desc: "Learn the three parts of a short paragraph, then put the sentences of three paragraphs in order.",
      learn: {
        skill: "A short paragraph",
        explain: "A short paragraph has three parts: a topic sentence that tells the main idea, supporting sentences that give details, and a concluding sentence that finishes the idea. Words like First, Then, and Also help the reader follow the order.",
        example: "My grandmother is a kind person. She always helps our neighbors. Also, she cooks for our family every Friday. I love spending time with her.",
        notes: [
          "Topic sentence: My grandmother is a kind person.",
          "Details: She always helps… / Also, she cooks…",
          "Concluding sentence: I love spending time with her."
        ],
        tips: [
          "Find the sentence that tells the main idea. It comes first.",
          "Look for order words such as First, Then, and Also.",
          "The last sentence often repeats the main idea in a new way."
        ],
        check: ["Does my paragraph start with the main idea?", "Do the details come in a sensible order?", "Does the last sentence finish the idea?"]
      },
      items: [
        {
          skill: "Paragraph organization",
          sentences: [
            "I have a busy school day.",
            "First, I have English and math in the morning.",
            "Then, I eat lunch with my friends at twelve o’clock.",
            "My school day is busy, but I enjoy it."
          ],
          roles: ["Topic sentence", "Supporting detail", "Supporting detail", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3]
          ],
          hint: "The first sentence tells the main idea. Look for the words “First” and “Then”.",
          exp: "A paragraph starts with a topic sentence (the main idea), then gives details in order (First, Then), and ends with a concluding sentence."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "My best friend’s name is Hamza.",
            "He is tall, and he has short black hair.",
            "He is very funny, and he always helps me with math.",
            "I am lucky to have a friend like Hamza."
          ],
          roles: ["Topic sentence", "Detail: how he looks", "Detail: what he is like", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3],
            [0, 2, 1, 3]
          ],
          hint: "Start with the sentence that introduces Hamza. End with the sentence about being lucky.",
          exp: "The topic sentence introduces Hamza, two details describe him, and the concluding sentence gives the writer’s feeling."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "My classroom is bright and comfortable.",
            "It has three big windows, so there is a lot of sunlight.",
            "There is also a small library corner with interesting books.",
            "I enjoy learning in my classroom every day."
          ],
          roles: ["Topic sentence", "Detail", "Detail (Also)", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3]
          ],
          hint: "“Also” shows that a detail was already given before it.",
          exp: "The topic sentence describes the classroom, the details give examples, “also” adds a second detail, and the last sentence concludes."
        }
      ]
    },
    {
      id: "w1e",
      level: 1,
      type: "guided",
      title: "Guided Writing: My Favorite Place at School",
      desc: "Write three or four sentences with help.",
      learn: {
        skill: "Describing a place",
        explain: "To describe a place, say what the place is, then give two or three details: what it looks like, what you do there, and how it makes you feel. Use describing words such as quiet, bright, big, clean, and comfortable.",
        example: "My favorite room at home is the kitchen. It is big and bright. My family eats dinner there every evening. I feel happy in the kitchen.",
        notes: ["Sentence 1 names the place.", "Sentence 2 says what it looks like.", "Sentence 3 says what happens there.", "Sentence 4 says how the writer feels."],
        tips: [
          "Choose a place you know well.",
          "Use one describing word in each sentence if you can.",
          "Start every sentence with a capital letter and end it with a full stop."
        ]
      },
      prompt: "Write three or four sentences about your favorite place at school.",
      minSentences: 3,
      wordBank: ["library", "playground", "classroom", "quiet", "comfortable", "friends", "read", "relax", "because"],
      starters: ["My favorite place at school is…", "I like it because…", "I usually … there.", "It makes me feel…"],
      model: "My favorite place at school is the library. I like it because it is quiet and comfortable. I usually read books there after lunch. It makes me feel calm and happy.",
      checklist: ["I wrote a clear main idea.", "I included supporting details.", "I used capital letters.", "I checked punctuation.", "My sentences are understandable."],
      plan: ["Which place will you write about?", "What does it look like? (two describing words)", "What do you do there?", "How does it make you feel?"],
      criteria: [
        "I named my favorite place in the first sentence.",
        "I gave at least two details about the place.",
        "I said how the place makes me feel.",
        "Every sentence has a capital letter and an end mark."
      ],
      revise: [
        "Add one describing word (for example quiet, big, bright, or clean).",
        "Check that every sentence has a subject and a verb.",
        "Change “good” or “nice” to a more exact word."
      ]
    },
    {
      id: "w2a",
      level: 2,
      type: "order",
      title: "Join Ideas with Conjunctions",
      desc: "Learn how and, but, because, so, and or join ideas, then build six longer sentences.",
      learn: {
        skill: "Joining ideas with conjunctions",
        explain: "Conjunctions join two ideas in one sentence. Use and to add, but to show a difference, because to give a reason, so to show a result, and or to give a choice. Put a comma before and, but, so, and or when they join two full sentences.",
        example: "It was late, so we went home. We went home because it was late.",
        notes: [
          "so = result (It was late → we went home)",
          "because = reason (why did we go home? it was late)",
          "The comma comes before “so”, but not before “because”."
        ],
        tips: [
          "Ask: is the second idea a reason, a result, a difference, or a choice?",
          "Put a comma before but, so, and, or when each part is a full sentence.",
          "Do not start the sentence with the conjunction unless it is “Because…,”."
        ],
        check: ["Did I choose the conjunction that matches the meaning?", "Did I use a comma correctly?", "Does the sentence end with the right end mark?"]
      },
      items: [
        {
          skill: "Using conjunctions",
          tiles: ["tired", "but", "I", "finished", "was", "my", ",", "I", "homework", "."],
          accept: [
            ["I", "was", "tired", ",", "but", "I", "finished", "my", "homework", "."],
            ["I", "finished", "my", "homework", ",", "but", "I", "was", "tired", "."]
          ],
          hint: "Use “but” to join two opposite ideas. Put a comma before “but”.",
          exp: "“But” joins two different or opposite ideas. We usually put a comma before it: I was tired, but I finished my homework."
        },
        {
          skill: "Using conjunctions",
          tiles: ["because", "stayed", "he", "home", "He", "sick", "was", "."],
          accept: [
            ["He", "stayed", "home", "because", "he", "was", "sick", "."]
          ],
          hint: "Which word has a capital letter? Start with it. “Because” gives the reason.",
          exp: "“Because” introduces a reason. The result comes first here: He stayed home (result) because he was sick (reason)."
        },
        {
          skill: "Using conjunctions",
          tiles: ["or", "juice", "want", "Do", "water", "you", "?"],
          accept: [
            ["Do", "you", "want", "water", "or", "juice", "?"],
            ["Do", "you", "want", "juice", "or", "water", "?"]
          ],
          hint: "This is a question with a choice. Start with “Do”.",
          exp: "“Or” gives a choice between two things: Do you want water or juice?"
        },
        {
          skill: "Using conjunctions",
          tiles: ["it", "We", "stayed", "inside", "was", "raining", "because", "."],
          accept: [
            ["We", "stayed", "inside", "because", "it", "was", "raining", "."]
          ],
          hint: "Start with what happened (We stayed inside). Then give the reason with “because”.",
          exp: "“Because” introduces the reason: We stayed inside because it was raining."
        },
        {
          skill: "Using conjunctions",
          tiles: ["so", "the", "missed", "bus", ",", "He", "woke", "late", "he", "."],
          accept: [
            ["He", "woke", "late", ",", "so", "he", "missed", "the", "bus", "."]
          ],
          hint: "First the cause (He woke late), then a comma and “so”, then the result.",
          exp: "“So” shows a result. Put a comma before it: He woke late, so he missed the bus."
        },
        {
          skill: "Adding descriptive details",
          tiles: ["a", "Mona", "red", "bought", "new", "bag", "."],
          accept: [
            ["Mona", "bought", "a", "new", "red", "bag", "."]
          ],
          hint: "Describing words go before the noun “bag”. Size and age words (new) usually come before colors (red).",
          exp: "Describing words come before the noun. Opinion, size, and age words come before color: a new red bag."
        }
      ]
    },
    {
      id: "w2b",
      level: 2,
      type: "correct",
      title: "Correct Common Sentence Errors",
      desc: "Learn to spot common sentence errors, then correct and combine six sentences.",
      learn: {
        skill: "Fixing common sentence errors",
        explain: "Check three things in every sentence: the verb agrees with the subject, the sentence has only one subject (not “My father he”), and every sentence is complete. Two complete ideas need a joining word or a full stop between them.",
        example: "✗ My brother he like pizza. → ✓ My brother likes pizza.",
        notes: ["Remove the extra subject “he”.", "“My brother” is one person, so add -s: likes."],
        tips: ["Read the sentence slowly. Find the subject and the verb.", "Change only the part with the mistake.", "Keep the meaning the same."],
        check: ["Does the verb agree with the subject?", "Is there only one subject?", "Is the sentence complete, with an end mark?"]
      },
      items: [
        {
          skill: "Subject–verb agreement",
          wrong: "She go to school every day.",
          accept: ["She goes to school every day."],
          hint: "“She” is one person. In the present simple, what do we add to the verb?",
          exp: "Subject–verb agreement: with he, she, or it, the present simple verb takes -s or -es. She goes to school every day.",
          checks: [
            ["\\bgo\\b", "Check the verb. With “she”, the verb needs -es: go → goes."]
          ]
        },
        {
          skill: "Subject–verb agreement",
          wrong: "They was at the park yesterday.",
          accept: ["They were at the park yesterday."],
          hint: "“They” is plural. Which past form of “be” goes with they?",
          exp: "In the past, use “was” with I, he, she, it, and “were” with you, we, they. They were at the park yesterday.",
          checks: [
            ["\\bwas\\b", "“They” is plural, so use “were”, not “was”."]
          ]
        },
        {
          skill: "Subject and predicate",
          wrong: "My father he works in a hospital.",
          accept: ["My father works in a hospital.", "My father works at a hospital."],
          hint: "The sentence has two subjects for one verb. Remove one.",
          exp: "A sentence needs only one subject for each verb. “My father” and “he” are the same person, so remove “he”.",
          checks: [
            ["father he", "“My father” and “he” are the same person. Use only one subject."]
          ]
        },
        {
          skill: "Subject–verb agreement",
          wrong: "My friends plays football after school.",
          accept: ["My friends play football after school."],
          hint: "“My friends” means more than one person. Does the verb need -s?",
          exp: "With a plural subject (my friends), the verb has no -s: My friends play football after school.",
          checks: [
            ["\\bplays\\b", "“My friends” is plural, so use “play”, not “plays”."]
          ]
        },
        {
          skill: "Combining ideas",
          task: "Join the two sentences into one sentence using “but”.",
          wrong: "I like coffee. My brother does not.",
          accept: [
            "I like coffee, but my brother does not.",
            "I like coffee but my brother does not.",
            "I like coffee, but my brother doesn’t.",
            "I like coffee, but my brother doesn't."
          ],
          hint: "Change the full stop to a comma, then add “but”. The second part starts with a small letter.",
          exp: "“But” joins two different ideas. Use a comma before it: I like coffee, but my brother does not.",
          checks: [
            ["\\bbut\\b", "Check the comma before “but” and use a small letter for “my”."],
            ["\\.\\s+[A-Z]", "This is still two sentences. Join them with “, but”."]
          ]
        },
        {
          skill: "Complete sentences",
          task: "This is not a complete sentence. Rewrite it with the verb “is”.",
          wrong: "My school very big.",
          accept: ["My school is very big."],
          hint: "Every sentence needs a verb. Where does “is” go?",
          exp: "A complete sentence needs a verb. Put “is” after the subject: My school is very big.",
          checks: [
            ["school very", "Add the verb “is” after “My school”."]
          ]
        }
      ]
    },
    {
      id: "w2c",
      level: 2,
      type: "choose",
      title: "Choose the Best Combined Sentence",
      desc: "Learn how to combine ideas and add details, then choose the best sentence in six sets.",
      learn: {
        skill: "Combining ideas and adding details",
        explain: "Short sentences can sound choppy. You can combine two ideas with and, but, because, or so. You can also make a sentence more interesting by adding details: who, what kind, where, when, or why.",
        example: "Simple: Ali read a book. → Better: Ali read an exciting adventure book in the library after school.",
        notes: ["what kind = exciting adventure", "where = in the library", "when = after school"],
        tips: ["Choose the joining word that matches the meaning.", "Add details that answer where, when, what kind, or why.", "Do not repeat the same word twice."],
        check: ["Is the combined sentence clear and correct?", "Did the detail make the sentence more exact?", "Is the punctuation correct?"]
      },
      items: [
        {
          skill: "Combining ideas",
          q: "Which sentence best combines these ideas? “The weather was hot. We stayed inside.”",
          opts: [
            ["The weather was hot, so we stayed inside.", null],
            ["The weather was hot, but we stayed inside.", "“But” shows contrast. Staying inside is a result of the heat, not a contrast."],
            ["The weather was hot because we stayed inside.", "This says staying inside caused the hot weather. The cause and effect are reversed."],
            ["The weather was hot so, we stayed inside.", "The comma should come before “so”, not after it."]
          ],
          hint: "The second idea is a RESULT of the first idea. Which conjunction shows a result?",
          exp: "“So” shows a result: the weather was hot (cause), so we stayed inside (result). Put the comma before “so”."
        },
        {
          skill: "Subject and predicate",
          q: "Which one is a complete sentence?",
          opts: [
            ["The new student sat next to me.", null],
            ["The new student next to me.", "There is no verb, so this is not a complete sentence."],
            ["Sat next to me in class.", "There is no subject. Who sat?"],
            ["Because the new student sat next to me.", "This starts with “Because” and is not finished. It is only part of a sentence."]
          ],
          hint: "A complete sentence needs a subject (who) and a predicate (what they did).",
          exp: "“The new student” is the subject, and “sat next to me” is the predicate. Together they make a complete sentence."
        },
        {
          skill: "Combining ideas",
          q: "Which sentence best combines these ideas? “I like math. My sister likes science.”",
          opts: [
            ["I like math, and my sister likes science.", null],
            ["I like math, my sister likes science.", "A comma alone cannot join two sentences. Add “and”."],
            ["I like math and, my sister likes science.", "The comma should come before “and”."],
            ["I like math, because my sister likes science.", "“Because” gives a reason, but one idea is not the reason for the other."]
          ],
          hint: "These are two facts that go together. Use a comma + a joining word.",
          exp: "Use a comma + “and” to join two related complete ideas: I like math, and my sister likes science."
        },
        {
          skill: "Adding descriptive details",
          q: "Which sentence adds the most useful details to “The boy ran.”?",
          opts: [
            ["The tall boy ran quickly to catch the bus.", null],
            ["The boy ran and ran and ran.", "Repeating the same word does not add new information."],
            ["The boy he ran very.", "This sentence has two subjects and an incomplete phrase (“very”)."],
            ["The boy was running he ran.", "This sentence repeats the idea and needs better joining."]
          ],
          hint: "Which sentence tells you what kind of boy, how he ran, and why?",
          exp: "“The tall boy ran quickly to catch the bus.” adds what kind (tall), how (quickly), and why (to catch the bus)."
        },
        {
          skill: "Combining ideas",
          q: "Which sentence best combines these ideas? “I was hungry. I made a sandwich.”",
          opts: [
            ["I was hungry, so I made a sandwich.", null],
            ["I was hungry, but I made a sandwich.", "“But” shows a difference. Here the second idea is a result."],
            ["I was hungry because I made a sandwich.", "This changes the meaning. Making a sandwich did not cause the hunger."],
            ["I was hungry I made a sandwich.", "Two sentences need a joining word or punctuation between them."]
          ],
          hint: "Is making a sandwich a result of being hungry?",
          exp: "“So” shows a result: I was hungry, so I made a sandwich."
        },
        {
          skill: "Completing missing details",
          q: "Choose the best detail to complete the description: “Our school garden is beautiful. ______”",
          opts: [
            ["It has colorful flowers and two tall palm trees.", null],
            ["My cousin lives in Dammam.", "This detail is not about the garden."],
            ["Gardens.", "This is not a complete sentence."],
            ["It is a garden at a school.", "This only repeats information. It does not show why it is beautiful."]
          ],
          hint: "Which sentence shows WHY the garden is beautiful?",
          exp: "A good detail supports the main idea. “Colorful flowers and two tall palm trees” shows why the garden is beautiful."
        }
      ]
    },
    {
      id: "w2d",
      level: 2,
      type: "para",
      title: "Order a Paragraph: My Morning Routine",
      desc: "Learn how order words guide the reader, then put the sentences of three paragraphs in order.",
      learn: {
        skill: "Order words in a paragraph",
        explain: "When a paragraph describes steps or events, order words help the reader: First, Next, Then, After that, and Finally. The topic sentence comes first and the concluding sentence comes last.",
        example: "Making tea is easy. First, boil the water. Next, put a tea bag in a cup. Then, pour in the hot water. Finally, wait three minutes. Now your tea is ready.",
        notes: ["Topic sentence: Making tea is easy.", "Steps: First → Next → Then → Finally", "Conclusion: Now your tea is ready."],
        tips: ["Find the topic sentence first.", "Use the order words to put the steps in order.", "The concluding sentence finishes the paragraph."],
        check: ["Is the topic sentence first?", "Do the order words make sense from start to finish?", "Is the concluding sentence last?"]
      },
      items: [
        {
          skill: "Paragraph organization",
          sentences: [
            "Every morning, I follow a simple routine to get ready for school.",
            "First, I wake up at six o’clock and wash my face.",
            "Next, I put on my uniform and eat breakfast.",
            "After that, I check my bag to make sure I have my books.",
            "Because of this routine, I am never late for school."
          ],
          roles: ["Topic sentence", "Detail", "Detail", "Detail", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "Look for time words: First, Next, After that. The last sentence explains the result.",
          exp: "The topic sentence introduces the routine. The details follow time order (First, Next, After that). The concluding sentence shows the result."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "Last weekend, my family had a picnic in the park.",
            "First, we found a shady place under a big tree.",
            "Next, my mother served sandwiches and fruit.",
            "After that, my brothers and I played football.",
            "It was a relaxing day for all of us."
          ],
          roles: ["Topic sentence", "First event", "Next event", "Event after that", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "Follow the order words: First, Next, After that.",
          exp: "The topic sentence introduces the picnic, the order words show the sequence, and the last sentence concludes."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "Preparing for a test takes good planning.",
            "First, find out which lessons the test will cover.",
            "Then, make a short study plan for each day.",
            "Finally, sleep well the night before the test.",
            "With a good plan, you will feel calm and ready."
          ],
          roles: ["Topic sentence", "Step 1", "Step 2", "Step 3", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "First, Then, Finally: the steps go in that order.",
          exp: "The paragraph moves from the main idea through three steps in order and ends with the result."
        }
      ]
    },
    {
      id: "w2e",
      level: 2,
      type: "guided",
      title: "Guided Writing: A Healthy Daily Habit",
      desc: "Write four or five sentences about a healthy habit.",
      learn: {
        skill: "Writing about a habit",
        explain: "When you write about a habit, name the habit in the first sentence. Then explain why it is good, give an example from your own life, and say how it helps you. Use because and for example to connect your ideas.",
        example: "One good habit is going to bed early. I do this because my body needs rest. For example, I stop using my phone at nine o’clock. As a result, I feel awake in class.",
        notes: [
          "Sentence 1: names the habit",
          "Sentence 2: gives the reason (because)",
          "Sentence 3: gives an example (For example)",
          "Sentence 4: says the result (As a result)"
        ],
        tips: ["Choose a habit you really have, or want to have.", "Use because to give a reason.", "Use For example to show it in your life."]
      },
      prompt: "Write four or five sentences about a healthy habit.",
      minSentences: 4,
      wordBank: ["exercise", "walk", "water", "sleep", "healthy", "energy", "every day", "because", "also"],
      starters: ["One healthy habit is…", "I practice this habit because…", "For example,…", "This habit helps me…"],
      model: "One healthy habit is drinking water every day. I practice this habit because my body needs water to work well. For example, I always carry a water bottle to school. This habit helps me feel active and focused in class.",
      checklist: ["I wrote a clear main idea.", "I included supporting details.", "I used capital letters.", "I checked punctuation.", "My sentences are understandable."],
      plan: ["What is the habit?", "Why is it healthy? (because…)", "Give one example from your life.", "How does it help you?"],
      criteria: [
        "My first sentence names the habit.",
        "I explained why it is healthy, using because.",
        "I gave one example from my own life.",
        "I wrote at least four complete sentences."
      ],
      revise: [
        "Add a detail that answers when or how often.",
        "Join two short sentences with because, so, or and.",
        "Check the verb in each sentence: I drink / she drinks."
      ]
    },
    {
      id: "w3a",
      level: 3,
      type: "order",
      title: "Sentences with Transitions",
      desc: "Learn which transition words to use, then build six sentences that start with transitions.",
      learn: {
        skill: "Transition words",
        explain: "Transitions connect ideas between sentences. Use First, Next, and Finally for order; Also and In addition to add an idea; For example to give an example; However to show a difference; and As a result to show a result. Put a comma after a transition at the start of a sentence.",
        example: "Exercise is good for you. For example, walking makes your heart stronger. However, many people do not exercise enough.",
        notes: ["For example = gives an example", "However = shows a difference", "A comma comes after each transition."],
        tips: ["Decide how the two ideas are connected.", "Choose the transition that matches that connection.", "Put a comma after the transition."],
        check: ["Does my transition match the meaning?", "Is there a comma after it?", "Is the sentence complete?"]
      },
      items: [
        {
          skill: "Transitions",
          tiles: ["carefully", "the", "read", "First", ",", "we", "instructions", "."],
          accept: [
            ["First", ",", "we", "read", "the", "instructions", "carefully", "."],
            ["First", ",", "we", "carefully", "read", "the", "instructions", "."]
          ],
          hint: "Start with the transition word and a comma. Then subject + verb.",
          exp: "A transition (First) often begins a sentence and is followed by a comma: First, we read the instructions carefully."
        },
        {
          skill: "Transitions",
          tiles: ["result", "the", "As", "won", "a", ",", "team", "match", "the", "."],
          accept: [
            ["As", "a", "result", ",", "the", "team", "won", "the", "match", "."]
          ],
          hint: "“As a result” is a three-word transition that shows an effect.",
          exp: "“As a result,” introduces an effect: As a result, the team won the match."
        },
        {
          skill: "Transitions",
          tiles: ["example", "walks", "For", "my", ",", "brother", "to", "school", "."],
          accept: [
            ["For", "example", ",", "my", "brother", "walks", "to", "school", "."]
          ],
          hint: "“For example” introduces an example. Put a comma after it.",
          exp: "“For example,” gives an example to support an idea: For example, my brother walks to school."
        },
        {
          skill: "Transitions",
          tiles: ["However", ",", "the", "was", "cold", "water", "."],
          accept: [
            ["However", ",", "the", "water", "was", "cold", "."]
          ],
          hint: "Start with the transition and a comma. Then the subject (the water) and the verb (was).",
          exp: "“However” shows a difference from the sentence before. A comma follows it: However, the water was cold."
        },
        {
          skill: "Transitions",
          tiles: ["addition", "In", ",", "she", "Spanish", "speaks", "."],
          accept: [
            ["In", "addition", ",", "she", "speaks", "Spanish", "."]
          ],
          hint: "“In addition” is a two-word transition. Put it first, then a comma.",
          exp: "“In addition” adds another idea: In addition, she speaks Spanish."
        },
        {
          skill: "Transitions",
          tiles: ["Finally", ",", "the", "check", "answers", "your", "."],
          accept: [
            ["Finally", ",", "check", "your", "answers", "."]
          ],
          hint: "This sentence is an instruction. It starts with a verb after the transition. You will not use every tile.",
          exp: "“Finally” shows the last step. An instruction starts with the verb: Finally, check your answers."
        }
      ]
    },
    {
      id: "w3b",
      level: 3,
      type: "correct",
      title: "Fix Joining and Transition Errors",
      desc: "Learn how to join sentences correctly, then fix and combine six sentences.",
      learn: {
        skill: "Joining sentences correctly",
        explain: "Two complete sentences cannot be joined with only a comma. Join them with a conjunction (and, but, so), or use a full stop and a transition (However, As a result). A part that starts with because cannot stand alone; join it to a complete sentence.",
        example: "✗ It was hot, we went swimming. → ✓ It was hot, so we went swimming.",
        notes: ["“It was hot” and “we went swimming” are both complete sentences.", "A comma alone is not enough. Add “so” to show the result."],
        tips: ["Check whether each part is a complete sentence.", "Choose a joining word that matches the meaning.", "Use a transition only if its meaning fits."],
        check: ["Did I join complete sentences correctly?", "Does the joining word match the meaning?", "Are the commas and full stops correct?"]
      },
      items: [
        {
          skill: "Joining sentences",
          wrong: "I wanted to play outside, it was raining.",
          accept: [
            "I wanted to play outside, but it was raining.",
            "I wanted to play outside. However, it was raining.",
            "I wanted to play outside; however, it was raining.",
            "I wanted to play outside, yet it was raining.",
            "I wanted to play outside. But it was raining.",
            "I wanted to play outside, but it was raining outside."
          ],
          hint: "A comma alone cannot join two sentences. Add a joining word that shows contrast.",
          exp: "Two complete ideas joined only by a comma is an error (a comma splice). Use “, but” or start a new sentence with “However,”.",
          checks: [
            ["outside, it was", "A comma alone cannot join two sentences. Add a joining word like “but”."]
          ]
        },
        {
          skill: "Complete sentences",
          wrong: "Because the bus was late. We missed the first lesson.",
          accept: [
            "Because the bus was late, we missed the first lesson.",
            "We missed the first lesson because the bus was late.",
            "The bus was late, so we missed the first lesson.",
            "The bus was late. We missed the first lesson.",
            "The bus was late, and we missed the first lesson.",
            "The bus was late. As a result, we missed the first lesson."
          ],
          hint: "“Because the bus was late.” is not a complete sentence. Join it to the other idea.",
          exp: "A sentence that starts with “Because” needs another part to be complete. Join the two parts: Because the bus was late, we missed the first lesson.",
          checks: [
            ["Because the bus was late\\. We", "“Because the bus was late.” is not complete on its own. Join it to the next idea with a comma."]
          ]
        },
        {
          skill: "Transitions",
          wrong: "I studied hard. However, I passed the test.",
          accept: [
            "I studied hard. As a result, I passed the test.",
            "I studied hard, so I passed the test.",
            "I studied hard. Therefore, I passed the test.",
            "I studied hard, and I passed the test.",
            "I studied hard. Because of this, I passed the test.",
            "I studied hard. That is why I passed the test.",
            "I studied hard. So, I passed the test."
          ],
          hint: "Passing the test is a RESULT of studying hard. Does “However” show a result?",
          exp: "“However” shows contrast. Here, passing is a result of studying, so use a result transition: As a result, / Therefore, / so.",
          checks: [
            ["However", "“However” shows contrast. Passing the test is a result of studying hard. Use a result word like “As a result” or “so”."]
          ]
        },
        {
          skill: "Combining with transitions",
          task: "Join the ideas with “As a result” at the start of the second sentence.",
          wrong: "The road was closed. We took a different way.",
          accept: ["The road was closed. As a result, we took a different way."],
          hint: "Keep the first sentence. Start the second sentence with “As a result,”.",
          exp: "“As a result” shows the effect. It starts a new sentence, with a capital A and a comma after it.",
          checks: [
            ["[Aa]s a result [a-z]", "Put a comma after “As a result”."],
            ["\\. as a result", "“As” starts a new sentence, so it needs a capital letter."]
          ]
        },
        {
          skill: "Complete sentences",
          task: "Join the two parts into one complete sentence.",
          wrong: "When the bell rang. The students left the room.",
          accept: ["When the bell rang, the students left the room.", "The students left the room when the bell rang."],
          hint: "“When the bell rang” is not complete. Join it to the next part with a comma.",
          exp: "A part that starts with “When” must join a complete sentence: When the bell rang, the students left the room.",
          checks: [
            ["rang\\.", "“When the bell rang” cannot stand alone. Replace the full stop with a comma."],
            ["rang, The", "After the comma, “the” should start with a small letter."]
          ]
        },
        {
          skill: "Combining with transitions",
          task: "Rewrite the second sentence with the correct transition: For example.",
          wrong: "Many fruits are rich in vitamins. However, oranges have a lot of vitamin C.",
          accept: ["Many fruits are rich in vitamins. For example, oranges have a lot of vitamin C."],
          hint: "The second sentence gives an example of the first idea.",
          exp: "Oranges are an example of fruits rich in vitamins, so “For example” fits. “However” shows a difference, which is wrong here.",
          checks: [
            ["However", "“However” shows a difference. The second sentence is an example, so use “For example”."]
          ]
        }
      ]
    },
    {
      id: "w3c",
      level: 3,
      type: "choose",
      title: "Topic Sentences and Details",
      desc: "Learn about topic sentences, details, and conclusions, then answer six questions about paragraph parts.",
      learn: {
        skill: "Topic sentences, details, and conclusions",
        explain: "The topic sentence states the main idea of the whole paragraph. Every supporting detail must be about that idea. The concluding sentence repeats the main idea in new words or gives a final thought.",
        example: "Topic: Our school library is a great place to study. Detail: It is quiet. Detail: It has fast computers. Conclusion: For these reasons, I study there every week.",
        notes: ["The topic sentence is general.", "The details are specific and support it.", "The conclusion links back to the main idea."],
        tips: [
          "A topic sentence is general. Details are specific.",
          "Remove any sentence that is not about the main idea.",
          "A conclusion often starts with In conclusion or For these reasons."
        ],
        check: [
          "Does every sentence support the topic sentence?",
          "Is the topic sentence general enough to cover all the details?",
          "Does the conclusion repeat the main idea?"
        ]
      },
      items: [
        {
          skill: "Topic sentences",
          q: "Choose the best topic sentence for a paragraph with these details: “Reading improves vocabulary. It helps you relax. It teaches you about the world.”",
          opts: [
            ["Reading has many benefits for students.", null],
            ["I read a book yesterday.", "This is a personal detail. It does not introduce all three benefits."],
            ["The library opens at eight o’clock.", "This is not connected to the benefits of reading."],
            ["Some books have pictures.", "This is a small detail, not the main idea."]
          ],
          hint: "A topic sentence is general. It covers ALL the details.",
          exp: "All three details are benefits of reading. “Reading has many benefits for students.” introduces them all."
        },
        {
          skill: "Supporting details",
          q: "Which sentence does NOT belong in a paragraph about keeping the classroom clean?",
          opts: [
            ["My cousin has a new bicycle.", null],
            ["Students should throw trash in the bin.", "This sentence is about keeping the classroom clean, so it belongs."],
            ["Each group can clean their desks at the end of the day.", "This is a good detail about keeping the classroom clean."],
            ["A clean classroom helps everyone focus.", "This explains why a clean classroom matters, so it belongs."]
          ],
          hint: "Find the sentence that is about a different topic.",
          exp: "Every detail in a paragraph must support the main idea. A cousin’s bicycle has nothing to do with a clean classroom."
        },
        {
          skill: "Transitions",
          q: "Choose the best transition: “We practiced every day. ______, we won the competition.”",
          opts: [
            ["As a result", null],
            ["However", "“However” shows contrast, but winning is a result of practicing."],
            ["For example", "Winning is not an example of practicing."],
            ["In contrast", "“In contrast” shows a difference, not a result."]
          ],
          hint: "Winning happened BECAUSE they practiced.",
          exp: "“As a result” shows that the second idea happened because of the first idea."
        },
        {
          skill: "Concluding sentences",
          q: "Choose the best concluding sentence for a paragraph about why students should drink water.",
          opts: [
            ["For these reasons, students should drink enough water every day.", null],
            ["Water is made of hydrogen and oxygen.", "This is a science fact, not a conclusion about students drinking water."],
            ["Some students like juice.", "This sentence changes the topic."],
            ["First, water helps you think clearly.", "“First” introduces a reason. It does not conclude."]
          ],
          hint: "A conclusion repeats the main idea. It often starts with “For these reasons”.",
          exp: "The concluding sentence repeats the main idea in new words: students should drink enough water every day."
        },
        {
          skill: "Supporting details",
          q: "Which detail BEST supports this topic sentence: “Riding a bicycle is a good way to exercise.”?",
          opts: [
            ["Cycling strengthens your legs and your heart.", null],
            ["Bicycles can be red, blue, or black.", "The color of a bicycle is not about exercise."],
            ["My uncle sells bicycles in his shop.", "This is about selling bicycles, not exercise."],
            ["Some people ride bicycles to work.", "This is about transport, not about why it is good exercise."]
          ],
          hint: "Which detail explains how cycling helps your body?",
          exp: "“Cycling strengthens your legs and your heart” explains why cycling is good exercise."
        },
        {
          skill: "Topic sentences",
          q: "Choose the best topic sentence for these details: “You can learn new skills. You can meet new friends. You can help other people.”",
          opts: [
            ["Joining a school club has many benefits.", null],
            ["I joined the chess club last year.", "This is one specific fact. It does not cover all three details."],
            ["Clubs meet after school.", "This does not connect to the benefits listed."],
            ["Helping people is important.", "This covers only one of the three details."]
          ],
          hint: "Find a sentence that covers ALL three details.",
          exp: "All three details are benefits of a club, so the topic sentence must be about the benefits of joining a club."
        }
      ]
    },
    {
      id: "w3d",
      level: 3,
      type: "para",
      title: "Order a Paragraph: Why Breakfast Matters",
      desc: "Learn how reasons and examples build a paragraph, then order three paragraphs.",
      learn: {
        skill: "Reasons and examples in a paragraph",
        explain: "Many paragraphs give a main idea, then reasons, and then an example for a reason. Transitions show the role of each sentence: First and In addition introduce reasons, For example introduces an example, and For these reasons introduces the conclusion.",
        example: "Walking to school is a good choice. First, it is healthy. For example, a twenty-minute walk gives you exercise before class. In addition, walking saves fuel. For these reasons, I walk to school when I can.",
        notes: ["Topic sentence → Reason 1 → Example → Reason 2 → Conclusion"],
        tips: ["Find the general sentence for the start.", "An example comes right after the reason it supports.", "The conclusion comes last."],
        check: ["Does the topic sentence come first?", "Does each example follow its reason?", "Does the conclusion come last?"]
      },
      items: [
        {
          skill: "Paragraph organization",
          sentences: [
            "Eating breakfast is an important habit for students.",
            "First, breakfast gives your body energy for the morning.",
            "In addition, students who eat breakfast often find it easier to concentrate in class.",
            "For example, a simple meal of eggs, bread, and fruit can keep you full until lunch.",
            "For these reasons, students should try to eat breakfast every day."
          ],
          roles: ["Topic sentence", "Reason", "Reason", "Example", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4],
            [0, 1, 3, 2, 4]
          ],
          hint: "Start with the general idea. “First” comes before “In addition”. “For these reasons” sums up.",
          exp: "The topic sentence states the main idea. “First” and “In addition” introduce reasons, “For example” supports them, and “For these reasons” concludes."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "Learning to cook is a useful skill for teenagers.",
            "First, it helps you eat healthier food.",
            "For example, a homemade sandwich has less salt than fast food.",
            "In addition, cooking teaches you to plan and follow steps.",
            "For these reasons, every teenager should learn to cook a few simple meals."
          ],
          roles: ["Topic sentence", "Reason 1", "Example for reason 1", "Reason 2", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "“For example” must follow the reason it explains.",
          exp: "The example about a homemade sandwich explains reason 1 (healthier food), so it comes right after it."
        },
        {
          skill: "Paragraph organization",
          sentences: [
            "Keeping a planner can help students succeed.",
            "First, a planner reminds you about homework and tests.",
            "Also, it helps you divide big projects into small steps.",
            "For example, you can plan to write one part of a report each day.",
            "In conclusion, a planner is a simple tool that makes school easier."
          ],
          roles: ["Topic sentence", "Reason 1", "Reason 2", "Example for reason 2", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "Which reason is the example about: reminders, or dividing projects into steps?",
          exp: "Writing one part each day is an example of dividing a project into steps, so it follows reason 2."
        }
      ]
    },
    {
      id: "w3e",
      level: 3,
      type: "guided",
      title: "Guided Writing: What Makes a Good Friend?",
      desc: "Write a short paragraph with a topic sentence, details, and a conclusion.",
      learn: {
        skill: "Writing a complete paragraph",
        explain: "A complete paragraph has a topic sentence, two or three supporting details, and a concluding sentence. Each detail should be about the main idea. Transitions such as First, Also, For example, and In conclusion connect the sentences.",
        example: "A good teacher is patient and clear. First, a good teacher explains lessons step by step. Also, a good teacher answers questions kindly. For example, my science teacher never rushes when we do not understand. In conclusion, good teachers help us learn with confidence.",
        notes: ["Topic sentence: A good teacher is patient and clear.", "Detail 1 (First) and Detail 2 (Also)", "Example (For example)", "Conclusion (In conclusion)"],
        tips: [
          "Write your topic sentence first, then check every detail against it.",
          "Give a real example from your life.",
          "End by repeating your main idea in new words."
        ]
      },
      prompt: "Write a paragraph of five sentences about what makes a good friend. Include a topic sentence, two or three details, and a concluding sentence.",
      minSentences: 5,
      wordBank: ["honest", "helpful", "kind", "listen", "support", "trust", "respect", "First", "Also", "For example", "In conclusion"],
      starters: ["A good friend is someone who…", "First,…", "Also,…", "For example,…", "In conclusion,…"],
      model: "A good friend is someone who is honest and kind. First, a good friend tells you the truth, even when it is difficult. Also, a good friend listens when you have a problem. For example, my friend helped me when I was worried about an exam. In conclusion, good friends make our lives better.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable.",
        "I used at least two transition words."
      ],
      plan: ["Topic sentence: A good friend is someone who…", "Detail 1:", "Detail 2:", "Example from your life:", "Concluding sentence:"],
      criteria: [
        "My topic sentence tells the main idea.",
        "I gave two or three details that support it.",
        "I used at least two transitions.",
        "My concluding sentence repeats the main idea in new words."
      ],
      revise: [
        "Read each detail. If it is not about a good friend, remove it.",
        "Make your example more specific: who, when, what happened.",
        "Do not start every sentence the same way."
      ]
    },
    {
      id: "w4a",
      level: 4,
      type: "order",
      title: "Build Longer Sentences",
      desc: "Learn how to build longer sentences with although, who, if, and when, then build six sentences.",
      learn: {
        skill: "Building longer sentences",
        explain: "Longer sentences join a main idea with a second idea. Use although for a contrast, because for a reason, if for a condition, when for time, and who or which to give more information about a noun. When the sentence starts with although, if, or when, put a comma after that part.",
        example: "Although it was late, we finished the project. If you practice, you will improve.",
        notes: [
          "Although it was late = contrast part, followed by a comma",
          "we finished the project = main idea",
          "If you practice = condition, followed by a comma"
        ],
        tips: [
          "Find the main idea (a complete sentence).",
          "Add the second part with the right joining word.",
          "Use a comma if the sentence starts with the joining part."
        ],
        check: ["Does my sentence have one main idea?", "Does the joining word match the meaning?", "Is the comma in the right place?"]
      },
      items: [
        {
          skill: "Complex sentences",
          tiles: ["difficult", "Although", "most", "test", "the", ",", "finished", "was", "students", "time", "on", "."],
          accept: [
            ["Although", "the", "test", "was", "difficult", ",", "most", "students", "finished", "on", "time", "."]
          ],
          hint: "Start with “Although”. The comma comes after the first idea.",
          exp: "“Although” introduces a contrast. When the sentence starts with it, put a comma after the first part: Although the test was difficult, most students finished on time."
        },
        {
          skill: "Complex sentences",
          tiles: ["who", "club", "the", "The", "joined", "students", "learned", "skills", "new", "."],
          accept: [
            ["The", "students", "who", "joined", "the", "club", "learned", "new", "skills", "."]
          ],
          hint: "“who joined the club” describes “The students”. Keep those words together.",
          exp: "“Who joined the club” is a clause that describes the subject. The main verb (learned) comes after it."
        },
        {
          skill: "Complex sentences",
          tiles: ["plan", "If", "you", "well", "your", "time", ",", "you", "less", "feel", "will", "stressed", "."],
          accept: [
            ["If", "you", "plan", "your", "time", "well", ",", "you", "will", "feel", "less", "stressed", "."]
          ],
          hint: "Start with “If” + a condition. After the comma, give the result with “will”.",
          exp: "First conditional: If + present simple, will + verb. If you plan your time well, you will feel less stressed."
        },
        {
          skill: "Complex sentences",
          tiles: ["When", "the", "rain", "stopped", ",", "we", "outside", "went", "."],
          accept: [
            ["When", "the", "rain", "stopped", ",", "we", "went", "outside", "."]
          ],
          hint: "Start with the time part (When…), then a comma, then the main idea.",
          exp: "“When the rain stopped” tells us the time. The main idea is “we went outside”. A comma separates them."
        },
        {
          skill: "Complex sentences",
          tiles: ["The", "book", "which", "I", "borrowed", "was", "interesting", "very", "."],
          accept: [
            ["The", "book", "which", "I", "borrowed", "was", "very", "interesting", "."]
          ],
          hint: "“which I borrowed” gives more information about “the book”. Put it right after “book”.",
          exp: "“Which I borrowed” describes the book, so it comes right after it: The book which I borrowed was very interesting."
        },
        {
          skill: "Complex sentences",
          tiles: ["Because", "she", "practiced", "daily", ",", "Huda", "the", "won", "competition", "."],
          accept: [
            ["Because", "she", "practiced", "daily", ",", "Huda", "won", "the", "competition", "."]
          ],
          hint: "Start with the reason (Because…), then a comma, then the main idea about Huda.",
          exp: "The reason comes first, followed by a comma and the main idea: Because she practiced daily, Huda won the competition."
        }
      ]
    },
    {
      id: "w4b",
      level: 4,
      type: "correct",
      title: "Revise Unclear Sentences",
      desc: "Learn how to revise unclear, repetitive, or incorrect sentences, then revise six sentences.",
      learn: {
        skill: "Revising unclear sentences",
        explain: "Clear writing says exactly what you mean, with no extra or repeated words. Remove words that repeat an idea (return back, more better), choose exact words instead of vague ones (thing, stuff, very good), and check pronouns and agreement.",
        example: "✗ The movie was very very good and it was good. → ✓ The movie was exciting and well acted.",
        notes: ["“Very very good” and “it was good” repeat the same vague idea.", "“Exciting” and “well acted” are more exact."],
        tips: ["Look for repeated words and ideas.", "Replace vague words with exact ones.", "Keep the original meaning."],
        check: ["Did I remove repeated words?", "Are my words exact, not vague?", "Is the grammar correct?"]
      },
      items: [
        {
          skill: "Pronouns and agreement",
          wrong: "Me and my friend was late for class.",
          accept: ["My friend and I were late for class.", "My friend and I were late to class."],
          hint: "Two people are the subject. Use a subject pronoun and a plural verb. It is polite to put yourself last.",
          exp: "Use the subject pronoun “I” (not “me”), put the other person first, and use the plural verb “were”: My friend and I were late for class.",
          checks: [
            ["\\b[Mm]e\\b", "“Me” cannot be part of the subject. Use “I”."],
            ["\\bwas\\b", "Two people are the subject, so the verb is plural: were."]
          ]
        },
        {
          skill: "Clear comparisons",
          wrong: "This exercise is more easier than the last one.",
          accept: ["This exercise is easier than the last one.", "This exercise is much easier than the last one."],
          hint: "“Easier” already means “more easy”. Do you need “more”?",
          exp: "Short adjectives take -er (easier). Do not use “more” with an -er adjective.",
          checks: [
            ["more easier", "Do not use “more” and “-er” together. Choose “easier”."]
          ]
        },
        {
          skill: "Precise word choice",
          wrong: "He returned back to his classroom after the break.",
          accept: ["He returned to his classroom after the break.", "He went back to his classroom after the break.", "He came back to his classroom after the break."],
          hint: "“Return” already means “go back”. One word repeats the meaning.",
          exp: "“Returned back” repeats the same idea. Use “returned” or “went back”, not both.",
          checks: [
            ["returned back", "“Returned” already means “went back”. Remove “back”."]
          ]
        },
        {
          skill: "Removing repetition",
          task: "Remove the words that repeat an idea. Keep the meaning.",
          wrong: "In my opinion, I think reading is important.",
          accept: ["In my opinion, reading is important.", "I think reading is important."],
          hint: "“In my opinion” and “I think” mean the same thing. Keep only one.",
          exp: "“In my opinion” and “I think” repeat the same idea. Use only one: In my opinion, reading is important.",
          checks: [
            ["opinion, I think", "“In my opinion” and “I think” mean the same. Remove one of them."]
          ]
        },
        {
          skill: "Clear comparisons",
          wrong: "My new phone is more better than my old one.",
          accept: ["My new phone is better than my old one.", "My new phone is much better than my old one."],
          hint: "“Better” is already a comparative. Do not add “more”.",
          exp: "“Better” already means “more good”, so “more better” is incorrect: My new phone is better than my old one.",
          checks: [
            ["more better", "“Better” is already a comparison. Remove “more”."]
          ]
        },
        {
          skill: "Pronouns and agreement",
          wrong: "Each of the students have a laptop.",
          accept: ["Each of the students has a laptop.", "Each student has a laptop."],
          hint: "The subject is “Each”, which means one. Which verb goes with one?",
          exp: "“Each” is singular, so the verb is “has”: Each of the students has a laptop.",
          checks: [
            ["\\bhave\\b", "“Each” means one, so use “has”, not “have”."]
          ]
        }
      ]
    },
    {
      id: "w4c",
      level: 4,
      type: "choose",
      title: "Clarity, Relevance, and Transitions",
      desc: "Learn about unity and coherence, then choose the clearest and most relevant answers in six questions.",
      learn: {
        skill: "Unity, coherence, and clear explanation",
        explain: "A paragraph has unity when every sentence supports the main idea. It has coherence when the sentences follow a logical order and are connected with suitable transitions. Strong paragraphs explain ideas: they say why or how, and they give an example.",
        example: "Main idea: Libraries help students. Weak support: Libraries are useful. Strong support: Libraries give students free books, quiet space, and help from trained librarians.",
        notes: ["The weak sentence only repeats the main idea.", "The strong sentence explains how libraries help."],
        tips: [
          "Remove sentences that are not about the main idea.",
          "Choose the transition that matches the relationship between ideas.",
          "Prefer sentences that explain why or how."
        ],
        check: ["Does every sentence support the main idea?", "Are the transitions logical?", "Did I explain, not just repeat?"]
      },
      items: [
        {
          skill: "Clear explanations",
          q: "Which sentence explains the idea most clearly?",
          opts: [
            ["Exercise improves health because it strengthens the heart and muscles.", null],
            ["Exercise is good because it is good.", "This repeats the same idea. It does not explain anything."],
            ["Exercise, health, heart, good.", "This is a list of words, not a sentence."],
            ["Exercise improves things in many ways and stuff.", "“Things” and “stuff” are too vague. The reader learns nothing specific."]
          ],
          hint: "A clear explanation says exactly HOW or WHY.",
          exp: "The first sentence gives a specific reason (it strengthens the heart and muscles), so the reader understands the idea."
        },
        {
          skill: "Relevant details",
          q: "A paragraph argues that school uniforms save time in the morning. Which detail BEST supports this idea?",
          opts: [
            ["Students do not need to choose their clothes every morning.", null],
            ["Uniforms come in many different colors.", "Colors are not connected to saving time."],
            ["My uniform is blue.", "This is a personal fact, not support for saving time."],
            ["Some schools are very large.", "School size has nothing to do with uniforms saving time."]
          ],
          hint: "The detail must be about SAVING TIME.",
          exp: "Not having to choose clothes is a clear way uniforms save time in the morning. The other details are not relevant."
        },
        {
          skill: "Transitions",
          q: "Choose the best transition: “Electric cars are quiet. ______, they can be expensive to buy.”",
          opts: [
            ["However", null],
            ["As a result", "Being expensive is not a result of being quiet."],
            ["For example", "Being expensive is not an example of being quiet."],
            ["In addition", "“In addition” adds a similar point, but this is a disadvantage after an advantage."]
          ],
          hint: "The first sentence is positive. The second is negative.",
          exp: "“However” shows contrast between an advantage (quiet) and a disadvantage (expensive)."
        },
        {
          skill: "Paragraph unity",
          q: "A paragraph explains why recycling is important. Which sentence does NOT belong?",
          opts: [
            ["My favorite color is green.", null],
            ["Recycling reduces the amount of waste in landfills.", "This supports the main idea, so it belongs."],
            ["Recycled paper saves trees.", "This is a clear benefit of recycling, so it belongs."],
            ["Recycling aluminum uses much less energy than making new cans.", "This supports the main idea with a fact."]
          ],
          hint: "Which sentence is not about recycling at all?",
          exp: "Every sentence must support the main idea. “My favorite color is green” is not about why recycling is important."
        },
        {
          skill: "Revising vague language",
          q: "Which is the best revision of this vague sentence: “The trip was good and stuff.”?",
          opts: [
            ["The museum trip was interesting because we saw ancient objects.", null],
            ["The trip was very very good and stuff.", "This adds more vague words. It does not explain anything."],
            ["The trip was good, and it was really good.", "This repeats the same vague word."],
            ["Trip good.", "This is not a complete sentence."]
          ],
          hint: "A good revision is specific and explains why.",
          exp: "The revision names the trip, uses an exact word (interesting), and gives a reason (we saw ancient objects)."
        },
        {
          skill: "Coherence",
          q: "Choose the best transition: “Many students feel nervous before speaking in public. ______, practicing in front of a mirror can help.”",
          opts: [
            ["Fortunately", null],
            ["For example", "The second sentence is a solution, not an example of nervousness."],
            ["As a result", "Practicing is not caused by nervousness here. It is a helpful solution."],
            ["Similarly", "The second idea is not similar. It offers help."]
          ],
          hint: "The second sentence offers good news: a way to solve the problem.",
          exp: "“Fortunately” introduces a positive solution to the problem in the first sentence."
        }
      ]
    },
    {
      id: "w4d",
      level: 4,
      type: "para",
      title: "Order a Paragraph: Learning a Second Language",
      desc: "Learn how coherent paragraphs develop ideas, then order three paragraphs.",
      learn: {
        skill: "Developing a coherent paragraph",
        explain: "A well-developed paragraph does not only list ideas. It states a point, explains it, and gives an example or evidence. Transitions and repeated key words link each sentence to the one before it.",
        example: "Teamwork matters in sports. When players pass the ball, the team keeps control of the game. For instance, our team scored more goals after we practiced passing. This shows that teamwork can be more important than individual skill.",
        notes: ["Point → Explanation → Example → What it shows"],
        tips: [
          "Look for the general point first.",
          "An explanation follows the point; an example follows the explanation.",
          "Words like This shows or Therefore usually come near the end."
        ],
        check: ["Does each sentence connect to the one before it?", "Is each point explained and supported?", "Does the ending show what the paragraph proves?"]
      },
      items: [
        {
          skill: "Paragraph coherence",
          sentences: [
            "Learning a second language has several important benefits.",
            "First, it allows you to communicate with people from other countries.",
            "Second, it can open more job opportunities, since many companies need employees who speak more than one language.",
            "Finally, studying another language can improve your memory and problem-solving skills.",
            "Clearly, the effort of learning a new language is worth it."
          ],
          roles: ["Topic sentence", "Benefit 1", "Benefit 2", "Benefit 3", "Concluding sentence"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "Use the order words: First, Second, Finally. The topic sentence mentions “several benefits”.",
          exp: "A coherent paragraph introduces the main idea, presents each point in a clear order (First, Second, Finally), and ends with a conclusion (Clearly…)."
        },
        {
          skill: "Paragraph coherence",
          sentences: [
            "Reading for pleasure can improve students’ writing.",
            "When students read often, they see many examples of well-written sentences.",
            "Over time, they begin to use similar sentence patterns in their own writing.",
            "For instance, students who read stories often learn to use dialogue and description.",
            "Therefore, reading for fun is also a way to become a better writer."
          ],
          roles: ["Topic sentence", "Explanation", "Result over time", "Example", "Conclusion"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "“Over time” follows the explanation. “Therefore” comes last.",
          exp: "The paragraph moves from the claim to an explanation, the result over time, an example, and a conclusion (Therefore)."
        },
        {
          skill: "Paragraph coherence",
          sentences: [
            "Small changes at home can save a lot of water.",
            "For example, turning off the tap while brushing your teeth saves several liters a day.",
            "Similarly, fixing a dripping tap can prevent hundreds of liters of waste each month.",
            "These savings matter because water is limited in dry countries.",
            "Clearly, every family can help to protect this important resource."
          ],
          roles: ["Topic sentence", "Example 1", "Example 2 (Similarly)", "Why it matters", "Conclusion"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "“Similarly” adds a second example, so it follows the first example.",
          exp: "Two examples are linked by “Similarly”, then the writer explains why the savings matter and concludes."
        }
      ]
    },
    {
      id: "w4e",
      level: 4,
      type: "guided",
      title: "Guided Writing: A Problem and a Solution",
      desc: "Explain a school problem and suggest a solution.",
      learn: {
        skill: "Explaining a problem and a solution",
        explain: "A problem–solution paragraph has four parts: describe the problem, explain why it is a problem (with an example), suggest a solution, and explain how the solution would help. Transitions such as This is a problem because, For example, One solution is, and As a result link the parts.",
        example: "Many students forget their homework. This is a problem because they lose marks and fall behind. For example, three students in my class missed a project deadline last month. One solution is to use a shared online class calendar. As a result, students would get reminders on their phones.",
        notes: ["Problem → Why (because) → Example → Solution → How it helps"],
        tips: [
          "Choose a real, specific problem, not a very big one.",
          "Explain why it matters with an example.",
          "Make sure your solution is realistic for a school."
        ]
      },
      prompt: "Write five or six sentences about a problem at school and a possible solution. Explain why it is a problem and how your solution would help.",
      minSentences: 5,
      wordBank: ["problem", "solution", "because", "for example", "as a result", "however", "students", "improve", "suggest"],
      starters: [
        "One problem at our school is…",
        "This is a problem because…",
        "For example,…",
        "One solution is…",
        "This solution would help because…",
        "In conclusion,…"
      ],
      model: "One problem at our school is that the cafeteria lines are very long at lunchtime. This is a problem because some students have only a few minutes to eat. For example, last week many students in my class returned to lessons hungry. One solution is to give different grades different lunch times. This solution would help because fewer students would wait in line at the same time. As a result, everyone would have enough time to eat.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable.",
        "I explained WHY it is a problem.",
        "I explained HOW my solution helps.",
        "I used transitions to connect my ideas."
      ],
      plan: ["The problem:", "Why it is a problem (because…):", "An example:", "My solution:", "How the solution would help:"],
      criteria: [
        "I described one specific problem.",
        "I explained why it is a problem and gave an example.",
        "I suggested a realistic solution.",
        "I explained how the solution would help, using transitions."
      ],
      revise: [
        "Replace vague words (thing, bad, a lot) with exact words.",
        "Check that your example really supports the problem.",
        "Remove any sentence that is not about the problem or the solution."
      ]
    },
    {
      id: "w5a",
      level: 5,
      type: "order",
      title: "Sentences for Opinion Writing",
      desc: "Learn the sentence patterns of academic argument, then build six sentences for opinion writing.",
      learn: {
        skill: "Sentences for an academic argument",
        explain: "An academic argument uses clear sentence patterns: a claim (In my view, schools should…), reasons (One reason is that…), evidence (According to…, For instance…), a counterargument (Some people argue that…; however,…), and a conclusion (Overall,…). Formal writing avoids slang and very personal language.",
        example: "Some people argue that homework causes stress. However, short and regular homework helps students remember what they learned.",
        notes: ["Some people argue that… = introduces the other side fairly", "However,… = the writer’s response"],
        tips: ["Start with the signal phrase (In my view, One reason is that, However).", "Keep a formal tone.", "Check the commas after introductory phrases."],
        check: ["Is my claim clear?", "Does each sentence use a suitable signal phrase?", "Is the tone formal?"]
      },
      items: [
        {
          skill: "Stating an opinion",
          tiles: ["opinion", "my", "In", ",", "should", "students", "learn", "coding", "basic", "school", "at", "."],
          accept: [
            ["In", "my", "opinion", ",", "students", "should", "learn", "basic", "coding", "at", "school", "."]
          ],
          hint: "Start with “In my opinion,”. Then: who + should + action.",
          exp: "“In my opinion,” introduces your view. Then use subject + should + verb: students should learn basic coding at school."
        },
        {
          skill: "Giving reasons",
          tiles: ["reason", "One", "is", "that", "skills", "technology", "needed", "are", "in", "careers", "many", "."],
          accept: [
            ["One", "reason", "is", "that", "technology", "skills", "are", "needed", "in", "many", "careers", "."]
          ],
          hint: "Start with “One reason is that…”. Then add a full idea with a subject and verb.",
          exp: "“One reason is that…” introduces a reason. After “that”, write a complete idea: technology skills are needed in many careers."
        },
        {
          skill: "Responding to other views",
          tiles: ["disagree", "Some", "people", ",", "but", "I", "believe", "benefits", "the", "are", "greater", "."],
          accept: [
            ["Some", "people", "disagree", ",", "but", "I", "believe", "the", "benefits", "are", "greater", "."]
          ],
          hint: "First mention the other view. Then use “, but I believe…”.",
          exp: "Good opinion writing recognizes other views and then responds: Some people disagree, but I believe the benefits are greater."
        },
        {
          skill: "Giving evidence",
          tiles: ["According", "to", "a", "survey", ",", "most", "students", "prefer", "group", "work", "."],
          accept: [
            ["According", "to", "a", "survey", ",", "most", "students", "prefer", "group", "work", "."]
          ],
          hint: "Start with “According to” and the source. Then a comma and the finding.",
          exp: "“According to a survey,” introduces evidence. The finding follows the comma."
        },
        {
          skill: "Responding to other views",
          tiles: ["Some", "argue", "people", "that", "uniforms", "limit", "self-expression", "."],
          accept: [
            ["Some", "people", "argue", "that", "uniforms", "limit", "self-expression", "."]
          ],
          hint: "“Some people argue that…” introduces the other side. Then say what they think.",
          exp: "This pattern presents a counterargument fairly: Some people argue that uniforms limit self-expression."
        },
        {
          skill: "Concluding an argument",
          tiles: ["Overall", ",", "benefits", "the", "outweigh", "the", "costs", "."],
          accept: [
            ["Overall", ",", "the", "benefits", "outweigh", "the", "costs", "."]
          ],
          hint: "“Overall,” starts a conclusion. Then: the benefits (subject) + outweigh (verb) + the costs.",
          exp: "“Overall” signals the conclusion. “Outweigh” means “are greater than”: Overall, the benefits outweigh the costs."
        }
      ]
    },
    {
      id: "w5b",
      level: 5,
      type: "correct",
      title: "Revise for Precision",
      desc: "Learn how to revise for accuracy and formal tone, then revise six sentences.",
      learn: {
        skill: "Revising for accuracy and formal tone",
        explain: "Academic writing is accurate and formal. Check agreement, verb forms, and word choice. Replace informal words (kids, stuff, a lot of, gonna) with formal ones (children, materials, many, going to). Avoid contractions such as don’t in formal essays.",
        example: "Informal: Lots of kids don’t get enough sleep. → Formal: Many children do not get enough sleep.",
        notes: ["Lots of → Many", "kids → children", "don’t → do not"],
        tips: ["Find informal words and replace them.", "Write contractions in full.", "Check the subject and verb agree."],
        check: ["Is every sentence grammatically correct?", "Did I replace informal words?", "Did I avoid contractions?"]
      },
      items: [
        {
          skill: "Agreement",
          wrong: "Everyone have their own opinion about homework.",
          accept: [
            "Everyone has their own opinion about homework.",
            "Everyone has his or her own opinion about homework.",
            "Everybody has their own opinion about homework."
          ],
          hint: "“Everyone” looks plural, but grammatically it is singular.",
          exp: "Words like everyone, everybody, and someone take a singular verb: Everyone has…",
          checks: [
            ["\\bhave\\b", "“Everyone” takes a singular verb: has."]
          ]
        },
        {
          skill: "Precise word choice",
          wrong: "The amount of students in the class are increasing.",
          accept: [
            "The number of students in the class is increasing.",
            "The number of students in the class is growing.",
            "The number of students in the class is rising."
          ],
          hint: "Can you count students? Also, what is the real subject: “the number” or “students”?",
          exp: "Use “number” for things you can count (students) and “amount” for things you cannot count (water). The subject “The number” is singular, so use “is”.",
          checks: [
            ["amount", "Students can be counted, so use “number”, not “amount”."],
            ["\\bare\\b", "The subject is “The number” (singular), so the verb should be “is”."]
          ]
        },
        {
          skill: "Verb forms",
          wrong: "If I will finish early, I will help you.",
          accept: ["If I finish early, I will help you.", "If I finish early, I’ll help you.", "If I finish early, I can help you."],
          hint: "In the “if” part of the sentence, do we use “will”?",
          exp: "First conditional: If + present simple, will + verb. Do not use “will” after “if”: If I finish early, I will help you.",
          checks: [
            ["If I will", "Do not use “will” after “if”. Use the present simple: If I finish…"]
          ]
        },
        {
          skill: "Formal tone",
          task: "Rewrite the sentence in a formal tone. Replace “kids” and write “don’t” in full.",
          wrong: "Many kids don’t get enough exercise.",
          accept: ["Many children do not get enough exercise.", "Many young people do not get enough exercise.", "Many students do not get enough exercise."],
          hint: "Replace “kids” with a formal word (children) and write “don’t” as two words.",
          exp: "Formal writing avoids informal words and contractions: Many children do not get enough exercise.",
          checks: [
            ["\\bkids\\b", "“Kids” is informal. Use “children”."],
            ["don[’']t", "In formal writing, write “do not” instead of “don’t”."]
          ]
        },
        {
          skill: "Agreement",
          wrong: "The results of the study shows that sleep is important.",
          accept: ["The results of the study show that sleep is important."],
          hint: "What is the subject: “the results” or “the study”?",
          exp: "The subject is “the results” (plural), so the verb is “show”: The results of the study show that sleep is important.",
          checks: [
            ["\\bshows\\b", "The subject is “the results” (plural). Use “show”."]
          ]
        },
        {
          skill: "Precise word choice",
          task: "Make the sentence more formal and precise. Replace “a lot of stuff”.",
          wrong: "Students learn a lot of stuff from projects.",
          accept: [
            "Students learn many skills from projects.",
            "Students learn many things from projects.",
            "Students learn a great deal from projects.",
            "Students learn many useful skills from projects."
          ],
          hint: "“A lot of stuff” is informal and vague. Try “many skills”.",
          exp: "“A lot of stuff” is informal. “Many skills” is formal and more precise.",
          checks: [
            ["stuff", "“Stuff” is informal. Use a precise word such as “skills”."],
            ["a lot of", "“A lot of” is informal. Use “many” or “a great deal”."]
          ]
        }
      ]
    },
    {
      id: "w5c",
      level: 5,
      type: "choose",
      title: "Opinions, Support, and Precision",
      desc: "Learn what makes a claim strong and supported, then choose the best answers in six questions.",
      learn: {
        skill: "Claims, evidence, and counterarguments",
        explain: "A strong claim is specific and arguable: people could disagree with it. Good support explains a reason and gives evidence or an example. A fair argument also mentions a counterargument and responds to it, using a calm, formal tone.",
        example: "Claim: Schools should offer a daily reading period. Reason: Regular reading builds vocabulary. Evidence: Students who read for fifteen minutes a day often learn thousands of new words each year. Counterargument: Some say there is no time; however, the period can replace part of a free lesson.",
        notes: ["Specific, arguable claim", "Reason + evidence", "Counterargument + response (however)"],
        tips: [
          "A fact is not a claim; a claim can be argued.",
          "Evidence should support the exact reason given.",
          "Respond to the other side fairly; do not insult it."
        ],
        check: ["Is the claim specific and arguable?", "Does the evidence support the reason?", "Did I respond to a counterargument fairly?"]
      },
      items: [
        {
          skill: "Stating an opinion",
          q: "Which sentence states a clear opinion?",
          opts: [
            ["Schools should start thirty minutes later so that students can get more sleep.", null],
            ["Many schools start at seven o’clock.", "This is a fact, not an opinion. It does not say what should happen."],
            ["Sleep is something people do at night.", "This is a general fact, not an opinion."],
            ["Some people think things about school times.", "This is vague and does not state a clear position."]
          ],
          hint: "An opinion says what SHOULD happen or what someone believes, and it is clear.",
          exp: "The first sentence takes a clear position (schools should start later) and gives a reason (more sleep)."
        },
        {
          skill: "Supporting with reasons",
          q: "Which sentence BEST supports this opinion: “Students should read for pleasure every day”?",
          opts: [
            ["Regular reading builds vocabulary, which helps students in every subject.", null],
            ["I like pizza more than books.", "This is unrelated and does not support the opinion."],
            ["Reading is an activity.", "This is true but too general. It gives no reason."],
            ["Libraries have many chairs.", "Chairs are not a reason to read every day."]
          ],
          hint: "Strong support gives a specific reason connected to the opinion.",
          exp: "This sentence gives a clear reason (vocabulary) and explains why it matters (it helps in every subject)."
        },
        {
          skill: "Revising for precision",
          q: "Which is the most precise revision of: “A lot of people use their phones a lot.”",
          opts: [
            ["Many teenagers spend several hours a day on their phones.", null],
            ["People use stuff a lot.", "“People” and “stuff” are even less precise."],
            ["A lot of people use phones a lot of times a lot.", "This repeats “a lot” and is still unclear."],
            ["Phones are used.", "This is shorter, but it gives less information."]
          ],
          hint: "Precise writing names WHO and gives a clearer idea of HOW MUCH.",
          exp: "The revision names a specific group (teenagers) and a clearer amount (several hours a day), so the meaning is precise."
        },
        {
          skill: "Responding to counterarguments",
          q: "Which sentence responds to a counterargument most effectively?",
          opts: [
            ["Although online lessons are flexible, students still need face-to-face discussion to build communication skills.", null],
            ["People who like online lessons are wrong and lazy.", "This insults the other side instead of answering it."],
            ["Online lessons are flexible.", "This states the other side but does not respond to it."],
            ["Online lessons are bad, bad, bad.", "Repetition is not an argument, and the tone is not formal."]
          ],
          hint: "A good response accepts part of the other view, then explains why the writer still disagrees.",
          exp: "The sentence accepts a point (flexibility) and then gives a reason to disagree, in a formal tone."
        },
        {
          skill: "Evaluating evidence",
          q: "Which evidence BEST supports this claim: “Schools should provide healthy cafeteria food.”?",
          opts: [
            ["A school that added fruit and salads saw fewer students feeling tired in class.", null],
            ["Many students like pizza.", "This shows a preference. It does not support healthy food."],
            ["The cafeteria opens at ten o’clock.", "The opening time is not evidence for healthy food."],
            ["My friend prefers to bring lunch from home.", "This is one person’s choice. It does not support the claim."]
          ],
          hint: "Which choice shows a result of healthy food?",
          exp: "The example shows a positive result of healthy food, so it directly supports the claim."
        },
        {
          skill: "Formal tone",
          q: "Which sentence is most suitable for a formal essay?",
          opts: [
            ["Many teenagers spend more than three hours a day on social media.", null],
            ["Teens are like, always on their phones.", "“Like” and “always” are informal and imprecise."],
            ["Everyone is addicted to social media, obviously.", "This is an exaggeration, and “obviously” is not formal evidence."],
            ["Social media is super bad for kids.", "“Super” and “kids” are informal."]
          ],
          hint: "A formal sentence is calm, precise, and has no slang.",
          exp: "The first sentence is precise (more than three hours a day) and uses formal language."
        }
      ]
    },
    {
      id: "w5d",
      level: 5,
      type: "para",
      title: "Order an Opinion Paragraph: Volunteering",
      desc: "Learn how an argument paragraph is organized, then order three argument paragraphs.",
      learn: {
        skill: "Organizing an argument paragraph",
        explain: "An argument paragraph usually follows this order: claim, reason with evidence, a second reason, a counterargument with a response, and a conclusion. Signal phrases show each part: First, For example, Another reason, Some people argue that…, However, and In conclusion.",
        example: "Claim → Reason 1 → Evidence → Reason 2 → Counterargument → Response → Conclusion",
        notes: ["The counterargument comes after your own reasons.", "“However” introduces your response to the other side."],
        tips: ["Find the claim first.", "Evidence comes right after the reason it supports.", "“Some people argue” is followed by “However”."],
        check: ["Does the claim come first?", "Is the counterargument followed by a response?", "Does the conclusion restate the claim?"]
      },
      items: [
        {
          skill: "Organizing an opinion",
          sentences: [
            "I believe every secondary student should volunteer in the community.",
            "First, volunteering teaches responsibility and teamwork.",
            "For example, students who help at a food bank must arrive on time and work with others to pack boxes.",
            "Another reason is that volunteering helps students discover interests that may lead to future careers.",
            "In conclusion, volunteering benefits both students and their communities."
          ],
          roles: ["Opinion (topic sentence)", "Reason 1", "Example for reason 1", "Reason 2", "Conclusion"],
          accept: [
            [0, 1, 2, 3, 4]
          ],
          hint: "The example must come right after the reason it supports.",
          exp: "An opinion paragraph states the opinion, gives a reason with an example, adds another reason, and ends with a conclusion that restates the opinion."
        },
        {
          skill: "Argument organization",
          sentences: [
            "Secondary schools should teach basic financial skills.",
            "First, young people will soon make decisions about saving and spending.",
            "For example, many students receive pocket money but do not know how to plan a budget.",
            "Some people argue that families should teach these skills at home.",
            "However, not every family has the time or knowledge to do so.",
            "In conclusion, financial education at school would prepare all students for adult life."
          ],
          roles: ["Claim", "Reason", "Evidence / example", "Counterargument", "Response", "Conclusion"],
          accept: [
            [0, 1, 2, 3, 4, 5]
          ],
          hint: "“However” answers “Some people argue”.",
          exp: "The claim is followed by a reason and an example, then a counterargument, the writer’s response (However), and a conclusion."
        },
        {
          skill: "Argument organization",
          sentences: [
            "Cities should create more bicycle lanes.",
            "One reason is that cycling reduces traffic and air pollution.",
            "Another reason is that regular cycling improves people’s health.",
            "Critics claim that bicycle lanes take space away from cars.",
            "Nevertheless, fewer cars on the road would make journeys faster for everyone.",
            "Overall, bicycle lanes are a sensible investment for growing cities."
          ],
          roles: ["Claim", "Reason 1", "Reason 2", "Counterargument", "Response", "Conclusion"],
          accept: [
            [0, 1, 2, 3, 4, 5]
          ],
          hint: "“One reason” comes before “Another reason”. “Nevertheless” responds to the critics.",
          exp: "Two reasons support the claim; the critics’ view is answered with “Nevertheless”; “Overall” concludes."
        }
      ]
    },
    {
      id: "w5e",
      level: 5,
      type: "guided",
      title: "Guided Writing: Phones in the Classroom",
      desc: "Write a short opinion response with reasons and examples.",
      learn: {
        skill: "Writing a short argument",
        explain: "A short argument states a clear opinion, supports it with two reasons and examples, responds fairly to the other side, and ends with a conclusion. Use a formal tone: no slang, no exaggeration, and no insults toward people who disagree.",
        example: "In my view, students should take a short break between lessons. One reason is that breaks help students concentrate. For example, a five-minute walk can make students more alert. Another reason is that breaks reduce stress. Some argue that breaks waste time. However, focused students learn faster, so the time is not lost. Overall, short breaks benefit learning.",
        notes: ["Opinion → Reason 1 + example → Reason 2 → Counterargument → Response → Conclusion"],
        tips: [
          "Decide your opinion before you write.",
          "Each reason needs an example or explanation.",
          "Respond to the other side calmly, then return to your opinion."
        ]
      },
      prompt: "Should students be allowed to use mobile phones in class? Write six to eight sentences. State your opinion, give two reasons with examples, respond to the other side, and write a conclusion.",
      minSentences: 6,
      wordBank: [
        "In my opinion",
        "One reason",
        "Another reason",
        "For example",
        "However",
        "Some people believe",
        "In conclusion",
        "distraction",
        "research",
        "responsible"
      ],
      starters: [
        "In my opinion, students should / should not…",
        "One reason is that…",
        "For example,…",
        "Another reason is that…",
        "Some people believe…, but…",
        "In conclusion,…"
      ],
      model: "In my opinion, students should not use mobile phones in class unless the teacher asks them to. One reason is that phones are a big distraction. For example, a single notification can make a student stop listening to the lesson. Another reason is that students learn better when they write notes by hand and talk with classmates. Some people believe phones are useful for research. However, teachers can plan special times for phone research instead of allowing phones all the time. In conclusion, limiting phones in class helps students focus and learn more.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable.",
        "I stated my opinion clearly.",
        "I gave two reasons with examples.",
        "I responded to the other side.",
        "My conclusion repeats my opinion in new words."
      ],
      plan: [
        "My opinion:",
        "Reason 1 and an example:",
        "Reason 2 and an example:",
        "The other side (Some people argue that…):",
        "My response (However,…):",
        "Conclusion:"
      ],
      criteria: [
        "My opinion is clear in the first sentence.",
        "I gave two reasons, each with an example.",
        "I described the other side fairly and responded to it.",
        "My tone is formal and my conclusion restates my opinion."
      ],
      revise: [
        "Replace informal words (kids, a lot, stuff) with formal ones.",
        "Check that each example supports its reason.",
        "Make your conclusion restate the opinion in new words, not copy the first sentence."
      ]
    }
  ]
};
