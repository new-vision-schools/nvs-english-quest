/* ===== NVS English Quest — Writing Workshop content =====
   Types: order (word tiles), correct (sentence correction), choose (best sentence),
   para (paragraph order), guided (self-assessed open writing — never auto-graded).
   For "choose" items the FIRST option is correct. Activity ids must never change. */
NVS_CONTENT.writing = {
  levels: [
    {
      n: 1,
      name: "Sentence Starter",
      focus: "Word order, capital letters, end punctuation, simple complete sentences"
    },
    {
      n: 2,
      name: "Sentence Builder",
      focus: "Subject and predicate, combining ideas, fixing basic errors, simple conjunctions"
    },
    {
      n: 3,
      name: "Paragraph Builder",
      focus: "Topic sentences, supporting details, sentence order, simple transitions"
    },
    {
      n: 4,
      name: "Organized Writer",
      focus: "Coherence, relevant details, clear explanations, transitions, revising unclear sentences"
    },
    {
      n: 5,
      name: "Independent Writer",
      focus: "Clear opinions, reasons and examples, organizing responses, revising for precision"
    }
  ],
  activities: [
    {
      id: "w1a",
      level: 1,
      type: "order",
      title: "Build Simple Sentences",
      desc: "Put the words in the correct order to make a sentence.",
      items: [
        {
          skill: "Word order",
          tiles: ["every", "reads", "evening", "Omar", "."],
          accept: [["Omar", "reads", "every", "evening", "."]],
          hint: "Start with the person (the subject). Then add the action (the verb).",
          exp: "English sentences usually follow this order: Subject (Omar) + Verb (reads) + Time (every evening)."
        },
        {
          skill: "Word order",
          tiles: ["school", "to", "goes", "bus", "Sara", "by", "."],
          accept: [["Sara", "goes", "to", "school", "by", "bus", "."]],
          hint: "Who does the action? Start with that word. It has a capital letter.",
          exp: "Subject (Sara) + Verb (goes) + Place (to school) + How (by bus): Sara goes to school by bus."
        },
        {
          skill: "End punctuation",
          tiles: ["you", "like", "Do", "football", ".", "?"],
          accept: [["Do", "you", "like", "football", "?"]],
          hint: "This sentence asks something. Which end mark does a question need? You will not use every tile.",
          exp: "Questions with “Do” start with Do + subject + verb, and they end with a question mark: Do you like football?"
        }
      ]
    },
    {
      id: "w1b",
      level: 1,
      type: "correct",
      title: "Fix Capitals and End Marks",
      desc: "Rewrite each sentence with correct capital letters and end punctuation.",
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
          accept: [
            "Ahmed and I play football on Friday.",
            "Ahmed and I play football on Fridays.",
            "Ahmed and I play football on Friday!"
          ],
          hint: "Look for a name, the word “i”, and a day of the week.",
          exp: "Capital letters are needed for the first word, names (Ahmed), the pronoun I, and days of the week (Friday).",
          checks: [
            [" i ", "The word “I” (meaning me) is always a capital letter."],
            ["friday", "Days of the week start with a capital letter: Friday."],
            ["ahmed", "Names of people start with a capital letter: Ahmed."]
          ]
        }
      ]
    },
    {
      id: "w1c",
      level: 1,
      type: "choose",
      title: "Choose the Correct Sentence",
      desc: "Choose the sentence that is written correctly.",
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
        }
      ]
    },
    {
      id: "w1d",
      level: 1,
      type: "para",
      title: "Order a Paragraph: My School Day",
      desc: "Put the sentences in a logical order to make a paragraph.",
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
          accept: [[0, 1, 2, 3]],
          hint: "The first sentence tells the main idea. Look for the words “First” and “Then”.",
          exp: "A paragraph starts with a topic sentence (the main idea), then gives details in order (First, Then), and ends with a concluding sentence."
        }
      ]
    },
    {
      id: "w1e",
      level: 1,
      type: "guided",
      title: "Guided Writing: My Favorite Place at School",
      desc: "Write three or four sentences with help.",
      prompt: "Write three or four sentences about your favorite place at school.",
      minSentences: 3,
      wordBank: ["library", "playground", "classroom", "quiet", "comfortable", "friends", "read", "relax", "because"],
      starters: ["My favorite place at school is…", "I like it because…", "I usually … there.", "It makes me feel…"],
      model: "My favorite place at school is the library. I like it because it is quiet and comfortable. I usually read books there after lunch. It makes me feel calm and happy.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable."
      ]
    },
    {
      id: "w2a",
      level: 2,
      type: "order",
      title: "Join Ideas with Conjunctions",
      desc: "Build sentences that join two ideas with conjunctions such as but, because, and or.",
      items: [
        {
          skill: "Using conjunctions",
          tiles: ["tired", "but", "I", "finished", "was", "my", ",", "I", "homework", "."],
          accept: [["I", "was", "tired", ",", "but", "I", "finished", "my", "homework", "."], ["I", "finished", "my", "homework", ",", "but", "I", "was", "tired", "."]],
          hint: "Use “but” to join two opposite ideas. Put a comma before “but”.",
          exp: "“But” joins two different or opposite ideas. We usually put a comma before it: I was tired, but I finished my homework."
        },
        {
          skill: "Using conjunctions",
          tiles: ["because", "stayed", "he", "home", "He", "sick", "was", "."],
          accept: [["He", "stayed", "home", "because", "he", "was", "sick", "."]],
          hint: "Which word has a capital letter? Start with it. “Because” gives the reason.",
          exp: "“Because” introduces a reason. The result comes first here: He stayed home (result) because he was sick (reason)."
        },
        {
          skill: "Using conjunctions",
          tiles: ["or", "juice", "want", "Do", "water", "you", "?"],
          accept: [["Do", "you", "want", "water", "or", "juice", "?"], ["Do", "you", "want", "juice", "or", "water", "?"]],
          hint: "This is a question with a choice. Start with “Do”.",
          exp: "“Or” gives a choice between two things: Do you want water or juice?"
        }
      ]
    },
    {
      id: "w2b",
      level: 2,
      type: "correct",
      title: "Correct Common Sentence Errors",
      desc: "Each sentence has one grammar mistake. Rewrite it correctly.",
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
        }
      ]
    },
    {
      id: "w2c",
      level: 2,
      type: "choose",
      title: "Choose the Best Combined Sentence",
      desc: "Choose the clearest and most correct sentence.",
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
        }
      ]
    },
    {
      id: "w2d",
      level: 2,
      type: "para",
      title: "Order a Paragraph: My Morning Routine",
      desc: "Put the sentences in a logical order.",
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
          accept: [[0, 1, 2, 3, 4]],
          hint: "Look for time words: First, Next, After that. The last sentence explains the result.",
          exp: "The topic sentence introduces the routine. The details follow time order (First, Next, After that). The concluding sentence shows the result."
        }
      ]
    },
    {
      id: "w2e",
      level: 2,
      type: "guided",
      title: "Guided Writing: A Healthy Daily Habit",
      desc: "Write four or five sentences about a healthy habit.",
      prompt: "Write four or five sentences about a healthy habit.",
      minSentences: 4,
      wordBank: ["exercise", "walk", "water", "sleep", "healthy", "energy", "every day", "because", "also"],
      starters: ["One healthy habit is…", "I practice this habit because…", "For example,…", "This habit helps me…"],
      model: "One healthy habit is drinking water every day. I practice this habit because my body needs water to work well. For example, I always carry a water bottle to school. This habit helps me feel active and focused in class.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable."
      ]
    },
    {
      id: "w3a",
      level: 3,
      type: "order",
      title: "Sentences with Transitions",
      desc: "Build sentences that begin with a transition.",
      items: [
        {
          skill: "Transitions",
          tiles: ["carefully", "the", "read", "First", ",", "we", "instructions", "."],
          accept: [["First", ",", "we", "read", "the", "instructions", "carefully", "."], ["First", ",", "we", "carefully", "read", "the", "instructions", "."]],
          hint: "Start with the transition word and a comma. Then subject + verb.",
          exp: "A transition (First) often begins a sentence and is followed by a comma: First, we read the instructions carefully."
        },
        {
          skill: "Transitions",
          tiles: ["result", "the", "As", "won", "a", ",", "team", "match", "the", "."],
          accept: [["As", "a", "result", ",", "the", "team", "won", "the", "match", "."]],
          hint: "“As a result” is a three-word transition that shows an effect.",
          exp: "“As a result,” introduces an effect: As a result, the team won the match."
        },
        {
          skill: "Transitions",
          tiles: ["example", "walks", "For", "my", ",", "brother", "to", "school", "."],
          accept: [["For", "example", ",", "my", "brother", "walks", "to", "school", "."]],
          hint: "“For example” introduces an example. Put a comma after it.",
          exp: "“For example,” gives an example to support an idea: For example, my brother walks to school."
        }
      ]
    },
    {
      id: "w3b",
      level: 3,
      type: "correct",
      title: "Fix Joining and Transition Errors",
      desc: "Rewrite each item so it is correct and clear.",
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
        }
      ]
    },
    {
      id: "w3c",
      level: 3,
      type: "choose",
      title: "Topic Sentences and Details",
      desc: "Choose the best answer about paragraph parts.",
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
        }
      ]
    },
    {
      id: "w3d",
      level: 3,
      type: "para",
      title: "Order a Paragraph: Why Breakfast Matters",
      desc: "Arrange the sentences into a logical paragraph.",
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
          accept: [[0, 1, 2, 3, 4], [0, 1, 3, 2, 4]],
          hint: "Start with the general idea. “First” comes before “In addition”. “For these reasons” sums up.",
          exp: "The topic sentence states the main idea. “First” and “In addition” introduce reasons, “For example” supports them, and “For these reasons” concludes."
        }
      ]
    },
    {
      id: "w3e",
      level: 3,
      type: "guided",
      title: "Guided Writing: What Makes a Good Friend?",
      desc: "Write a short paragraph with a topic sentence, details, and a conclusion.",
      prompt: "Write a paragraph of five sentences about what makes a good friend. Include a topic sentence, two or three details, and a concluding sentence.",
      minSentences: 5,
      wordBank: [
        "honest",
        "helpful",
        "kind",
        "listen",
        "support",
        "trust",
        "respect",
        "First",
        "Also",
        "For example",
        "In conclusion"
      ],
      starters: ["A good friend is someone who…", "First,…", "Also,…", "For example,…", "In conclusion,…"],
      model: "A good friend is someone who is honest and kind. First, a good friend tells you the truth, even when it is difficult. Also, a good friend listens when you have a problem. For example, my friend helped me when I was worried about an exam. In conclusion, good friends make our lives better.",
      checklist: [
        "I wrote a clear main idea.",
        "I included supporting details.",
        "I used capital letters.",
        "I checked punctuation.",
        "My sentences are understandable.",
        "I used at least two transition words."
      ]
    },
    {
      id: "w4a",
      level: 4,
      type: "order",
      title: "Build Longer Sentences",
      desc: "Arrange the words to build complex sentences.",
      items: [
        {
          skill: "Complex sentences",
          tiles: ["difficult", "Although", "most", "test", "the", ",", "finished", "was", "students", "time", "on", "."],
          accept: [["Although", "the", "test", "was", "difficult", ",", "most", "students", "finished", "on", "time", "."]],
          hint: "Start with “Although”. The comma comes after the first idea.",
          exp: "“Although” introduces a contrast. When the sentence starts with it, put a comma after the first part: Although the test was difficult, most students finished on time."
        },
        {
          skill: "Complex sentences",
          tiles: ["who", "club", "the", "The", "joined", "students", "learned", "skills", "new", "."],
          accept: [["The", "students", "who", "joined", "the", "club", "learned", "new", "skills", "."]],
          hint: "“who joined the club” describes “The students”. Keep those words together.",
          exp: "“Who joined the club” is a clause that describes the subject. The main verb (learned) comes after it."
        },
        {
          skill: "Complex sentences",
          tiles: ["plan", "If", "you", "well", "your", "time", ",", "you", "less", "feel", "will", "stressed", "."],
          accept: [["If", "you", "plan", "your", "time", "well", ",", "you", "will", "feel", "less", "stressed", "."]],
          hint: "Start with “If” + a condition. After the comma, give the result with “will”.",
          exp: "First conditional: If + present simple, will + verb. If you plan your time well, you will feel less stressed."
        }
      ]
    },
    {
      id: "w4b",
      level: 4,
      type: "correct",
      title: "Revise Unclear Sentences",
      desc: "Rewrite each sentence so it is correct and clear.",
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
          accept: [
            "He returned to his classroom after the break.",
            "He went back to his classroom after the break.",
            "He came back to his classroom after the break."
          ],
          hint: "“Return” already means “go back”. One word repeats the meaning.",
          exp: "“Returned back” repeats the same idea. Use “returned” or “went back”, not both.",
          checks: [
            ["returned back", "“Returned” already means “went back”. Remove “back”."]
          ]
        }
      ]
    },
    {
      id: "w4c",
      level: 4,
      type: "choose",
      title: "Clarity, Relevance, and Transitions",
      desc: "Choose the clearest or most relevant sentence.",
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
        }
      ]
    },
    {
      id: "w4d",
      level: 4,
      type: "para",
      title: "Order a Paragraph: Learning a Second Language",
      desc: "Arrange the sentences so the paragraph is coherent.",
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
          accept: [[0, 1, 2, 3, 4]],
          hint: "Use the order words: First, Second, Finally. The topic sentence mentions “several benefits”.",
          exp: "A coherent paragraph introduces the main idea, presents each point in a clear order (First, Second, Finally), and ends with a conclusion (Clearly…)."
        }
      ]
    },
    {
      id: "w4e",
      level: 4,
      type: "guided",
      title: "Guided Writing: A Problem and a Solution",
      desc: "Explain a school problem and suggest a solution.",
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
      ]
    },
    {
      id: "w5a",
      level: 5,
      type: "order",
      title: "Sentences for Opinion Writing",
      desc: "Build sentences that are useful in opinion writing.",
      items: [
        {
          skill: "Stating an opinion",
          tiles: ["opinion", "my", "In", ",", "should", "students", "learn", "coding", "basic", "school", "at", "."],
          accept: [["In", "my", "opinion", ",", "students", "should", "learn", "basic", "coding", "at", "school", "."]],
          hint: "Start with “In my opinion,”. Then: who + should + action.",
          exp: "“In my opinion,” introduces your view. Then use subject + should + verb: students should learn basic coding at school."
        },
        {
          skill: "Giving reasons",
          tiles: ["reason", "One", "is", "that", "skills", "technology", "needed", "are", "in", "careers", "many", "."],
          accept: [["One", "reason", "is", "that", "technology", "skills", "are", "needed", "in", "many", "careers", "."]],
          hint: "Start with “One reason is that…”. Then add a full idea with a subject and verb.",
          exp: "“One reason is that…” introduces a reason. After “that”, write a complete idea: technology skills are needed in many careers."
        },
        {
          skill: "Responding to other views",
          tiles: ["disagree", "Some", "people", ",", "but", "I", "believe", "benefits", "the", "are", "greater", "."],
          accept: [["Some", "people", "disagree", ",", "but", "I", "believe", "the", "benefits", "are", "greater", "."]],
          hint: "First mention the other view. Then use “, but I believe…”.",
          exp: "Good opinion writing recognizes other views and then responds: Some people disagree, but I believe the benefits are greater."
        }
      ]
    },
    {
      id: "w5b",
      level: 5,
      type: "correct",
      title: "Revise for Precision",
      desc: "Rewrite each sentence so it is grammatically correct and precise.",
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
          accept: [
            "If I finish early, I will help you.",
            "If I finish early, I’ll help you.",
            "If I finish early, I can help you."
          ],
          hint: "In the “if” part of the sentence, do we use “will”?",
          exp: "First conditional: If + present simple, will + verb. Do not use “will” after “if”: If I finish early, I will help you.",
          checks: [
            ["If I will", "Do not use “will” after “if”. Use the present simple: If I finish…"]
          ]
        }
      ]
    },
    {
      id: "w5c",
      level: 5,
      type: "choose",
      title: "Opinions, Support, and Precision",
      desc: "Choose the strongest sentence for opinion writing.",
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
        }
      ]
    },
    {
      id: "w5d",
      level: 5,
      type: "para",
      title: "Order an Opinion Paragraph: Volunteering",
      desc: "Arrange the sentences into a well-organized opinion paragraph.",
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
          accept: [[0, 1, 2, 3, 4]],
          hint: "The example must come right after the reason it supports.",
          exp: "An opinion paragraph states the opinion, gives a reason with an example, adds another reason, and ends with a conclusion that restates the opinion."
        }
      ]
    },
    {
      id: "w5e",
      level: 5,
      type: "guided",
      title: "Guided Writing: Phones in the Classroom",
      desc: "Write a short opinion response with reasons and examples.",
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
      ]
    }
  ]
};
