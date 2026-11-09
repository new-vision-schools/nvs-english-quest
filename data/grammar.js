/* =====================================================================
   NVS English Quest — Grammar Gym content (Version 3E)
   EXACTLY 20 sets, 103 questions (19 sets × 5, Set 3 = g3 × 8). Do not add a 21st set.
   To add practice, append questions to the END of an existing set (HOW_TO_ADD_CONTENT.md, Part E2).
   ---------------------------------------------------------------------
   • id: unique and NEVER changed (saved progress uses it). Next new id: g22 (g21 was used by a retired Version 3D set; never reuse it).
   • order: the set number shown to students (1, 2, 3 …).
   • level: 1 = Foundation, 2 = Developing, 3 = Building, 4 = Advancing.
   • topic: used by the topic filter.
   • learn: the teaching step shown before practice.
   • questions: 5 or more; new ones only at the END (IDs come from position). In each "opts" list, the FIRST option is correct.
     The app shuffles the order for students.
   ===================================================================== */
NVS_CONTENT.grammar = [
  {
    id: "g4",
    order: 1,
    level: 1,
    topic: "Subject Pronouns",
    title: "Subject Pronouns",
    desc: "I, you, he, she, it, we, they.",
    learn: {
      rule: "Use a subject pronoun (I, you, he, she, it, we, they) before the verb. It replaces the name of the person or thing doing the action.",
      examples: ["Omar is my friend. He plays football.", "Sara and I are classmates. We study together."],
      mistake: "Me and Sara are classmates.",
      correction: "Sara and I are classmates."
    },
    questions: [
      {
        skill: "Subject Pronouns",
        q: "Choose the correct pronoun: “Mona is my sister. ______ is twelve years old.”",
        opts: [
          ["She", null],
          ["Her", "“Her” is an object or possessive word (I see her / her bag). Before the verb we need a subject pronoun."],
          ["He", "“He” is for a boy or man. Mona is a girl."],
          ["They", "“They” is for more than one person. Mona is one person."]
        ],
        hint: "Mona is one girl, and the pronoun comes before the verb “is”.",
        exp: "Use “she” for one girl or woman when she is the subject. She is twelve years old."
      },
      {
        skill: "Subject Pronouns",
        q: "Choose the correct pronoun: “My brother and I play tennis. ______ play every Friday.”",
        opts: [
          ["We", null],
          ["They", "“They” does not include the speaker. “My brother and I” includes me."],
          ["Us", "“Us” is an object pronoun. Before the verb we need a subject pronoun."],
          ["Our", "“Our” must come before a noun, like “our team”."]
        ],
        hint: "“My brother and I” = two people, including the speaker.",
        exp: "“My brother and I” includes the speaker, so the subject pronoun is “we”."
      },
      {
        skill: "Subject Pronouns",
        q: "Which sentence is correct?",
        opts: [
          ["He and I went to the market.", null],
          ["Him and me went to the market.", "“Him” and “me” are object pronouns. The subject needs “he” and “I”."],
          ["He and me went to the market.", "“Me” cannot be part of the subject. Use “I”."],
          ["Him and I went to the market.", "“Him” cannot be part of the subject. Use “he”."]
        ],
        hint: "Both people are doing the action, so both pronouns must be subject pronouns.",
        exp: "Subject pronouns (he, I) go before the verb: He and I went to the market."
      },
      {
        skill: "Subject Pronouns",
        q: "Choose the correct pronoun: “The phone is new. ______ has a big screen.”",
        opts: [
          ["It", null],
          ["He", "“He” is for a man or boy, not a thing."],
          ["They", "“They” is for more than one. There is one phone."],
          ["Its", "“Its” shows possession (its screen). Before the verb we need “it”."]
        ],
        hint: "A phone is a thing, not a person.",
        exp: "Use “it” for one thing. It has a big screen."
      },
      {
        skill: "Subject Pronouns",
        q: "Which word is wrong? “My parents are kind. Them always help me.”",
        opts: [
          ["Them", null],
          ["parents", "“Parents” is correct. Look at the word before “always help”."],
          ["kind", "“Kind” is a correct adjective here."],
          ["help", "“Help” is correct with a plural subject."]
        ],
        hint: "Which word is the subject of the second sentence?",
        exp: "The subject must be a subject pronoun: “They always help me.” “Them” is an object pronoun."
      }
    ]
  },
  {
    id: "g5",
    order: 2,
    level: 1,
    topic: "Verb to be",
    title: "Verb to be: am, is, are",
    desc: "Use am, is, and are correctly.",
    learn: {
      rule: "Use “am” with I. Use “is” with he, she, it, and one person or thing. Use “are” with you, we, they, and more than one.",
      examples: ["I am a student.", "The students are in the library."],
      mistake: "My friends is here.",
      correction: "My friends are here."
    },
    questions: [
      {
        skill: "Verb to be",
        q: "Choose the correct word: “I ______ in Grade 8.”",
        opts: [
          ["am", null],
          ["is", "“Is” is for he, she, or it. With “I” we use another form."],
          ["are", "“Are” is for you, we, and they."],
          ["be", "“Be” is the base form. We need a present form here."]
        ],
        hint: "Which form of “be” always goes with “I”?",
        exp: "We always say “I am.”"
      },
      {
        skill: "Verb to be",
        q: "Choose the correct word: “The classroom ______ on the second floor.”",
        opts: [
          ["is", null],
          ["are", "“Are” is for plural subjects. “The classroom” is one room."],
          ["am", "“Am” is only for “I”."],
          ["be", "“Be” is the base form. We need a present form."]
        ],
        hint: "“The classroom” = it.",
        exp: "“The classroom” is one thing (it), so we use “is”."
      },
      {
        skill: "Verb to be",
        q: "Choose the correct word: “Faisal and Turki ______ brothers.”",
        opts: [
          ["are", null],
          ["is", "“Is” is for one person. Faisal and Turki are two people."],
          ["am", "“Am” is only for “I”."],
          ["be", "“Be” is the base form."]
        ],
        hint: "Faisal and Turki = they.",
        exp: "Two people (they) take “are”: Faisal and Turki are brothers."
      },
      {
        skill: "Verb to be",
        q: "Which sentence is correct?",
        opts: [
          ["We are ready for the test.", null],
          ["We is ready for the test.", "“Is” is for one person or thing. “We” is plural."],
          ["We am ready for the test.", "“Am” is only for “I”."],
          ["We be ready for the test.", "“Be” is the base form. We need “are”."]
        ],
        hint: "Which form goes with “we”?",
        exp: "“We” takes “are”: We are ready for the test."
      },
      {
        skill: "Verb to be",
        q: "Which word is wrong? “My shoes is under the bed.”",
        opts: [
          ["is", null],
          ["shoes", "“Shoes” is fine. Check the verb that goes with it."],
          ["under", "“Under” is a correct preposition of place."],
          ["bed", "“Bed” is correct."]
        ],
        hint: "“Shoes” is plural.",
        exp: "“Shoes” is plural, so the verb is “are”: My shoes are under the bed."
      }
    ]
  },
  {
    id: "g6",
    order: 3,
    level: 1,
    topic: "Singular and Plural Nouns",
    title: "Singular and Plural Nouns",
    desc: "One book, two books; one child, two children.",
    learn: {
      rule: "Add -s to most nouns to make them plural (book → books). Add -es after s, sh, ch, and x (box → boxes). Some nouns are irregular (child → children, man → men).",
      examples: ["I have two books.", "There are three boxes in the room."],
      mistake: "I have three child.",
      correction: "I have three children."
    },
    questions: [
      {
        skill: "Singular and Plural Nouns",
        q: "Choose the correct word: “There are five ______ in my bag.”",
        opts: [
          ["books", null],
          ["book", "“Five” means more than one, so the noun must be plural."],
          ["bookes", "We add only -s to “book”, not -es."],
          ["a book", "“A book” means one. The sentence says five."]
        ],
        hint: "Five is more than one. How do we make “book” plural?",
        exp: "Most nouns add -s for the plural: one book, five books."
      },
      {
        skill: "Singular and Plural Nouns",
        q: "Choose the correct word: “We bought two ______ of chocolate.”",
        opts: [
          ["boxes", null],
          ["boxs", "After x, we add -es, not just -s."],
          ["box", "“Two” needs a plural noun."],
          ["boxies", "This is not a correct spelling."]
        ],
        hint: "“Box” ends in x.",
        exp: "Nouns ending in s, sh, ch, or x add -es: box → boxes."
      },
      {
        skill: "Singular and Plural Nouns",
        q: "Choose the correct word: “Many ______ play in the park after school.”",
        opts: [
          ["children", null],
          ["childs", "“Child” is irregular. We do not add -s."],
          ["child", "“Many” needs a plural noun."],
          ["childrens", "“Children” is already plural. Do not add -s."]
        ],
        hint: "“Child” has an irregular plural.",
        exp: "The plural of “child” is “children”."
      },
      {
        skill: "Singular and Plural Nouns",
        q: "Which sentence is correct?",
        opts: [
          ["I have two classes today.", null],
          ["I have two class today.", "“Two” needs a plural noun."],
          ["I have two classs today.", "After s, we add -es, not another s."],
          ["I have two classies today.", "This is not a correct spelling."]
        ],
        hint: "“Class” ends in s.",
        exp: "Nouns ending in s add -es: class → classes."
      },
      {
        skill: "Singular and Plural Nouns",
        q: "Complete: “One man, two ______.”",
        opts: [
          ["men", null],
          ["mans", "“Man” is irregular. We do not add -s."],
          ["mens", "“Men” is already plural. Do not add -s."],
          ["man", "“Two” needs a plural form."]
        ],
        hint: "“Man” is irregular, like “child”.",
        exp: "The plural of “man” is “men”."
      }
    ]
  },
  {
    id: "g2",
    order: 4,
    level: 1,
    topic: "Articles",
    title: "Articles, Pronouns, and Prepositions",
    desc: "Choose a, an, or the, plus pronouns and prepositions.",
    learn: {
      rule: "Articles: use “a” before a consonant sound and “an” before a vowel sound (an hour, an honest man) for one thing you mention for the first time. Use “the” for a specific thing or the only one (the sun). Pronouns: use I, he, she, we, or they before the verb. Mine, yours, his, hers, ours, and theirs stand alone without a noun. Time: use “on” with days (on Monday).",
      examples: [
        "She wants to be an engineer. The sun rises in the east.",
        "Ahmed and I are in the same class. This book is hers."
      ],
      mistake: "He is a honest student.",
      correction: "He is an honest student."
    },
    questions: [
      {
        skill: "Pronouns",
        q: "Choose the correct pronoun: “Ahmed and ______ are in the same class.”",
        opts: [
          ["I", null],
          ["me", "“Me” is an object pronoun. Here we need a subject, because “Ahmed and ___” do the action."],
          ["my", "“My” must come before a noun, like “my book”."],
          ["mine", "“Mine” means “belonging to me”. It cannot be the subject here."]
        ],
        hint: "Remove “Ahmed and”. Would you say “___ am in the class”?",
        exp: "Rule: Use subject pronouns (I, he, she, we, they) before the verb. Ahmed and I are in the same class."
      },
      {
        skill: "Pronouns",
        q: "Choose the correct word: “This book belongs to Layla. It is ______.”",
        opts: [
          ["hers", null],
          ["her", "“Her” needs a noun after it (her book). At the end of the sentence, we need “hers”."],
          ["she", "“She” is a subject pronoun, used before a verb."],
          ["herself", "“Herself” is used when the subject and object are the same person (She taught herself)."]
        ],
        hint: "We need a possessive pronoun that can stand alone, like mine, yours, his…",
        exp: "Rule: Possessive pronouns (mine, yours, his, hers, ours, theirs) stand alone without a noun. It is hers = It is her book."
      },
      {
        skill: "Articles",
        q: "Choose the correct article: “She wants to be ______ engineer.”",
        opts: [
          ["an", null],
          ["a", "“Engineer” starts with a vowel sound (e), so we do not use “a”."],
          ["the", "We are talking about any engineer (a job), not one specific engineer."],
          ["no article", "Jobs need an article in English: a doctor, an engineer."]
        ],
        hint: "Say the word “engineer” aloud. Does it start with a vowel sound?",
        exp: "Rule: Use “an” before a vowel sound (a, e, i, o, u sounds) and “a” before a consonant sound. An engineer, a teacher."
      },
      {
        skill: "Articles",
        q: "Choose the correct article: “______ sun rises in the east.”",
        opts: [
          ["The", null],
          ["A", "There is only one sun in our sky, so we use “the”."],
          ["An", "“An” is for any one thing that starts with a vowel sound. There is only one sun."],
          ["No article", "We use “the” with unique things like the sun and the moon."]
        ],
        hint: "How many suns do we have?",
        exp: "Rule: Use “the” for things that are unique (there is only one): the sun, the moon, the sky."
      },
      {
        skill: "Prepositions",
        q: "Choose the correct preposition: “Our class trip is ______ Monday.”",
        opts: [
          ["on", null],
          ["in", "We use “in” with months and years (in May), not days."],
          ["at", "We use “at” with clock times (at 9:00), not days."],
          ["to", "“To” shows direction (go to school), not a day."]
        ],
        hint: "Which preposition do we use with days of the week?",
        exp: "Rule: Use “on” with days and dates: on Monday, on 5 May."
      }
    ]
  },
  {
    id: "g7",
    order: 5,
    level: 1,
    topic: "Simple Present Tense",
    title: "Simple Present Tense",
    desc: "Habits, routines, and facts.",
    learn: {
      rule: "Use the simple present for habits, routines, and facts. With he, she, or it, add -s or -es to the verb.",
      examples: ["I walk to school every day.", "Water boils at 100°C."],
      mistake: "He go to the gym on Mondays.",
      correction: "He goes to the gym on Mondays."
    },
    questions: [
      {
        skill: "Simple Present Tense",
        q: "Choose the correct verb: “Every day, I ______ my homework after dinner.”",
        opts: [
          ["do", null],
          ["does", "“Does” is for he, she, or it. The subject is “I”."],
          ["doing", "“Doing” needs a helping verb, like “am doing”."],
          ["done", "“Done” needs a helping verb, like “have done”."]
        ],
        hint: "“Every day” shows a routine. The subject is “I”.",
        exp: "For routines with “I”, use the base verb: I do my homework every day."
      },
      {
        skill: "Simple Present Tense",
        q: "Choose the correct verb: “My sister ______ English very well.”",
        opts: [
          ["speaks", null],
          ["speak", "“My sister” is she. The verb needs -s."],
          ["speaking", "“Speaking” needs a helping verb, like “is speaking”."],
          ["is speak", "We cannot use “is” with the base verb."]
        ],
        hint: "“My sister” = she.",
        exp: "With she, add -s: My sister speaks English very well."
      },
      {
        skill: "Simple Present Tense",
        q: "Choose the correct verb: “The sun ______ in the east.”",
        opts: [
          ["rises", null],
          ["rise", "“The sun” is it, so the verb needs -s."],
          ["rising", "“Rising” needs a helping verb."],
          ["risen", "“Risen” needs “has” or “have”."]
        ],
        hint: "This is a fact. The sun = it.",
        exp: "Facts use the simple present. With it, add -s: The sun rises in the east."
      },
      {
        skill: "Simple Present Tense",
        q: "Which sentence is correct?",
        opts: [
          ["Ahmed watches football on TV every weekend.", null],
          ["Ahmed watch football on TV every weekend.", "“Ahmed” is he, so the verb needs -es."],
          ["Ahmed watchs football on TV every weekend.", "Verbs ending in -ch add -es, not -s."],
          ["Ahmed is watch football on TV every weekend.", "We cannot use “is” with the base verb."]
        ],
        hint: "“Watch” ends in -ch.",
        exp: "With he, verbs ending in -ch add -es: Ahmed watches football."
      },
      {
        skill: "Simple Present Tense",
        q: "Choose the correct verb: “Every morning, Huda ______ her bag before she leaves.”",
        opts: [
          ["checks", null],
          ["check", "“Huda” is she, so the verb needs -s."],
          ["checking", "“Checking” needs a helping verb."],
          ["checked", "“Checked” is past, but “every morning” and “leaves” show a present routine."]
        ],
        hint: "This is a routine, and the subject is she.",
        exp: "Routines use the simple present. With she, add -s: Huda checks her bag."
      }
    ]
  },
  {
    id: "g1",
    order: 6,
    level: 2,
    topic: "Subject–Verb Agreement",
    title: "Subject–Verb Agreement and Tenses",
    desc: "Make the verb match the subject, in the present and the past.",
    learn: {
      rule: "With he, she, or it, add -s or -es to most verbs in the simple present. The verb agrees with the real subject, not the noun closest to it. Negatives with he, she, or it use doesn’t + base verb. For finished past actions, use the simple past (go → went), and make past questions with Did + subject + base verb.",
      examples: [
        "She plays football. The students in my class are friendly.",
        "Yesterday, we went to the museum. Did you finish your homework?"
      ],
      mistake: "She play football.",
      correction: "She plays football."
    },
    questions: [
      {
        skill: "Subject–verb agreement",
        q: "Choose the correct verb: “My brother ______ football every Friday.”",
        opts: [
          ["plays", null],
          ["play", "“My brother” is he (one person). In the present simple, he/she/it needs -s."],
          ["playing", "“Playing” needs a helping verb, like “is playing”."],
          ["are play", "We do not use “are” with “play” in the present simple. Also, “my brother” is singular."]
        ],
        hint: "“My brother” = he. What do we add to the verb after he, she, or it?",
        exp: "Rule: In the present simple, add -s or -es to the verb after he, she, it, or a singular noun. My brother (he) plays football."
      },
      {
        skill: "Subject–verb agreement",
        q: "Choose the correct verb: “The students in my class ______ very friendly.”",
        opts: [
          ["are", null],
          ["is", "“Class” is close to the verb, but the real subject is “The students” (plural)."],
          ["be", "“Be” is the base form. We need a present form here: am, is, or are."],
          ["am", "“Am” is only used with “I”."]
        ],
        hint: "Who is friendly: the class or the students? Find the real subject.",
        exp: "Rule: The verb agrees with the subject, not with the nearest noun. The subject is “The students” (plural), so we use “are”."
      },
      {
        skill: "Present simple",
        q: "Choose the correct answer: “Sara ______ coffee. She prefers tea.”",
        opts: [
          ["doesn’t drink", null],
          ["don’t drink", "“Don’t” is used with I, you, we, and they. Sara is she."],
          ["not drink", "We need a helping verb: does not / doesn’t."],
          ["doesn’t drinks", "After “doesn’t”, the verb has no -s: doesn’t drink."]
        ],
        hint: "For he/she/it, the negative is “doesn’t” + base verb (no -s).",
        exp: "Rule: Present simple negative with he/she/it = doesn’t + base verb. Sara doesn’t drink coffee."
      },
      {
        skill: "Past simple",
        q: "Choose the correct verb: “Yesterday, we ______ to the science museum.”",
        opts: [
          ["went", null],
          ["go", "“Go” is present. The word “Yesterday” tells us this is in the past."],
          ["goes", "“Goes” is present simple for he/she/it."],
          ["going", "“Going” needs a helping verb, and it does not show the past by itself."]
        ],
        hint: "“Yesterday” means the past. “Go” is an irregular verb.",
        exp: "Rule: Use the past simple for finished actions in the past. “Go” is irregular: go → went. Yesterday, we went to the museum."
      },
      {
        skill: "Past simple",
        q: "Choose the correct word: “______ you finish your homework last night?”",
        opts: [
          ["Did", null],
          ["Do", "“Do” is for present questions. “Last night” is in the past."],
          ["Does", "“Does” is for present questions with he/she/it."],
          ["Were", "“Were” is used with adjectives or -ing verbs (Were you tired?), not with “finish”."]
        ],
        hint: "“Last night” is in the past. Which helping verb makes past simple questions?",
        exp: "Rule: Past simple questions = Did + subject + base verb. Did you finish your homework last night?"
      }
    ]
  },
  {
    id: "g8",
    order: 7,
    level: 2,
    topic: "Present Continuous",
    title: "Present Continuous",
    desc: "Actions happening now.",
    learn: {
      rule: "Use am/is/are + verb-ing for actions happening now or around now.",
      examples: ["I am reading a book now.", "They are playing football at the moment."],
      mistake: "She is study for her test right now.",
      correction: "She is studying for her test right now."
    },
    questions: [
      {
        skill: "Present Continuous",
        q: "Choose the correct verb: “Look! The children ______ in the park.”",
        opts: [
          ["are playing", null],
          ["play", "“Look!” shows the action is happening now. Use am/is/are + -ing."],
          ["is playing", "“The children” is plural, so use “are”, not “is”."],
          ["playing", "We need “are” before “playing”."]
        ],
        hint: "“Look!” means it is happening now. The children = they.",
        exp: "For actions happening now with “they”, use are + verb-ing: The children are playing."
      },
      {
        skill: "Present Continuous",
        q: "Choose the correct verb: “I can’t talk now. I ______ dinner.”",
        opts: [
          ["am eating", null],
          ["eat", "“Eat” is for habits. “Now” shows an action in progress."],
          ["eating", "We need “am” before “eating”."],
          ["is eating", "With “I”, use “am”, not “is”."]
        ],
        hint: "The action is happening now, and the subject is “I”.",
        exp: "With I, use am + verb-ing: I am eating dinner."
      },
      {
        skill: "Present Continuous",
        q: "Which sentence is correct?",
        opts: [
          ["We are watching a documentary right now.", null],
          ["We watching a documentary right now.", "The helping verb “are” is missing."],
          ["We are watch a documentary right now.", "After “are”, the verb needs -ing."],
          ["We is watching a documentary right now.", "“We” takes “are”, not “is”."]
        ],
        hint: "Present continuous = am/is/are + verb-ing.",
        exp: "We are watching… uses “are” + the -ing form."
      },
      {
        skill: "Present Continuous",
        q: "Choose the correct verb: “Listen! Your phone ______.”",
        opts: [
          ["is ringing", null],
          ["ring", "“Your phone” is it. Also, “Listen!” shows it is happening now."],
          ["are ringing", "“Your phone” is one thing, so use “is”."],
          ["ringing", "We need “is” before “ringing”."]
        ],
        hint: "“Listen!” shows the action is happening now.",
        exp: "For one thing happening now, use is + verb-ing: Your phone is ringing."
      },
      {
        skill: "Present Continuous",
        q: "Which sentence describes an action happening NOW?",
        opts: [
          ["Omar is writing an email.", null],
          ["Omar writes emails every day.", "This describes a habit (every day), not now."],
          ["Omar wrote an email yesterday.", "This is in the past."],
          ["Omar will write an email.", "This is in the future."]
        ],
        hint: "Look for am/is/are + -ing.",
        exp: "“Omar is writing an email” uses the present continuous for an action in progress now."
      }
    ]
  },
  {
    id: "g9",
    order: 8,
    level: 2,
    topic: "Simple Past Tense",
    title: "Simple Past Tense",
    desc: "Finished actions in the past.",
    learn: {
      rule: "Use the simple past for finished actions. Add -ed to regular verbs (play → played). Learn irregular verbs (go → went, eat → ate, see → saw, buy → bought).",
      examples: ["We visited our grandparents last Friday.", "She saw a great movie yesterday."],
      mistake: "I goed to the mall yesterday.",
      correction: "I went to the mall yesterday."
    },
    questions: [
      {
        skill: "Simple Past Tense",
        q: "Choose the correct verb: “Last year, my family ______ to Abha.”",
        opts: [
          ["traveled", null],
          ["travel", "“Last year” is finished time, so the verb must be past."],
          ["travels", "“Travels” is present."],
          ["traveling", "“Traveling” needs a helping verb."]
        ],
        hint: "“Last year” is in the past.",
        exp: "Regular verbs add -ed in the past: travel → traveled."
      },
      {
        skill: "Simple Past Tense",
        q: "Choose the correct verb: “Yesterday, I ______ a delicious kabsa.”",
        opts: [
          ["ate", null],
          ["eated", "“Eat” is irregular. We do not add -ed."],
          ["eat", "“Yesterday” needs the past form."],
          ["eats", "“Eats” is present, and it is for he/she/it."]
        ],
        hint: "“Eat” is an irregular verb.",
        exp: "The past of “eat” is “ate”."
      },
      {
        skill: "Simple Past Tense",
        q: "Which sentence is correct?",
        opts: [
          ["She bought a new phone last week.", null],
          ["She buyed a new phone last week.", "“Buy” is irregular. We do not add -ed."],
          ["She buy a new phone last week.", "“Last week” needs a past verb."],
          ["She buys a new phone last week.", "“Buys” is present, but “last week” is past."]
        ],
        hint: "“Buy” is irregular.",
        exp: "The past of “buy” is “bought”."
      },
      {
        skill: "Simple Past Tense",
        q: "Choose the correct verb: “They ______ the match on TV last night.”",
        opts: [
          ["watched", null],
          ["watch", "“Last night” needs the past form."],
          ["watches", "“Watches” is present."],
          ["watching", "“Watching” needs a helping verb."]
        ],
        hint: "“Last night” is finished time.",
        exp: "Regular verb + -ed: They watched the match last night."
      },
      {
        skill: "Simple Past Tense",
        q: "“We seen the new stadium last month.” What is the correct verb?",
        opts: [
          ["saw", null],
          ["see", "“Last month” needs a past form."],
          ["seeing", "“Seeing” needs a helping verb."],
          ["sees", "“Sees” is present."]
        ],
        hint: "“Seen” needs “have”. The simple past of “see” is different.",
        exp: "The simple past of “see” is “saw”: We saw the new stadium last month."
      }
    ]
  },
  {
    id: "g10",
    order: 9,
    level: 2,
    topic: "Negatives and Questions",
    title: "Negatives and Questions",
    desc: "Using do, does, and did.",
    learn: {
      rule: "Make negatives with do/does/did + not (I don’t like…). Make questions with do/does/did + subject + base verb (Do you like…?). After does or did, use the base verb.",
      examples: ["She doesn’t eat meat.", "Did you finish your project?"],
      mistake: "He doesn’t plays tennis.",
      correction: "He doesn’t play tennis."
    },
    questions: [
      {
        skill: "Negatives and Questions",
        q: "Choose the correct answer: “My father ______ coffee at night.”",
        opts: [
          ["doesn’t drink", null],
          ["don’t drink", "“My father” is he. Use “doesn’t”."],
          ["doesn’t drinks", "After “doesn’t”, use the base verb without -s."],
          ["not drink", "A helping verb (doesn’t) is needed."]
        ],
        hint: "He + doesn’t + base verb.",
        exp: "With he, she, or it, the negative is doesn’t + base verb: My father doesn’t drink coffee."
      },
      {
        skill: "Negatives and Questions",
        q: "Choose the correct word: “______ your brother live in Jeddah?”",
        opts: [
          ["Does", null],
          ["Do", "“Your brother” is he. Use “does”."],
          ["Is", "“Is” does not go with the base verb “live”."],
          ["Are", "“Are” does not go with “live”, and the subject is singular."]
        ],
        hint: "The subject is he, and the main verb is “live”.",
        exp: "Questions with he/she/it use “does” + base verb: Does your brother live in Jeddah?"
      },
      {
        skill: "Negatives and Questions",
        q: "Which sentence is correct?",
        opts: [
          ["I didn’t see the email.", null],
          ["I didn’t saw the email.", "After “didn’t”, use the base verb (see), not the past form."],
          ["I not saw the email.", "A helping verb (didn’t) is needed."],
          ["I don’t saw the email.", "“Don’t” is present, and after it we use the base verb."]
        ],
        hint: "didn’t + base verb.",
        exp: "Past negatives use didn’t + base verb: I didn’t see the email."
      },
      {
        skill: "Negatives and Questions",
        q: "Choose the correct word: “Where ______ you go last weekend?”",
        opts: [
          ["did", null],
          ["do", "“Last weekend” is in the past."],
          ["does", "“Does” is present and for he/she/it."],
          ["were", "“Were” does not go with the base verb “go”."]
        ],
        hint: "“Last weekend” is past. Which helping verb makes past questions?",
        exp: "Past questions use did + subject + base verb: Where did you go last weekend?"
      },
      {
        skill: "Negatives and Questions",
        q: "Which question is correct?",
        opts: [
          ["Do they play basketball?", null],
          ["Does they play basketball?", "“They” takes “do”, not “does”."],
          ["Do they plays basketball?", "After “do”, use the base verb without -s."],
          ["Play they basketball?", "English questions need “do” here: Do they play…?"]
        ],
        hint: "Do/Does + subject + base verb.",
        exp: "With they, use “do” + base verb: Do they play basketball?"
      }
    ]
  },
  {
    id: "g3",
    order: 10,
    level: 2,
    topic: "Prepositions of Time and Place",
    title: "Prepositions of Time and Place, and Word Order",
    desc: "at, on, in for time and place; between, in front of; word order, questions, and facts.",
    learn: {
      rule: "Time: “at” + clock times (at 7:30), “on” + days and dates (on Monday), “in” + months, years, and seasons (in July). Place: “in” a city or room, “on” a street or surface, “at” a specific point or building (at the main gate). Position words: next to, between, behind, in front of, opposite, under. Word order: always, usually, and never go before the main verb. Questions: question word + do/does + subject + verb. Facts use the simple present.",
      examples: [
        "The lesson starts at 7:30 on Sunday. We will meet at the main gate.",
        "The pharmacy is between the bank and the bakery. She always arrives early."
      ],
      mistake: "My birthday is on July.",
      correction: "My birthday is in July."
    },
    questions: [
      {
        skill: "Prepositions",
        q: "Choose the correct preposition: “My birthday is ______ July.”",
        opts: [
          ["in", null],
          ["on", "“On” is for days and dates (on 12 July), but not for a month alone."],
          ["at", "“At” is for clock times (at 3:00)."],
          ["by", "“By” means “not later than”. It does not fit here."]
        ],
        hint: "Which preposition do we use with months and years?",
        exp: "Rule: Use “in” with months, years, and seasons: in July, in 2025, in summer."
      },
      {
        skill: "Prepositions",
        q: "Choose the correct preposition: “The first lesson starts ______ 7:30.”",
        opts: [
          ["at", null],
          ["in", "“In” is for months and years, not exact times."],
          ["on", "“On” is for days and dates, not clock times."],
          ["from", "“From” needs “to” or “until” after it (from 7:30 to 8:15)."]
        ],
        hint: "Which preposition do we use with clock times?",
        exp: "Rule: Use “at” with exact times: at 7:30, at noon, at night."
      },
      {
        skill: "Word order",
        q: "Which sentence is correct?",
        opts: [
          ["She always arrives early.", null],
          ["She arrives always early.", "Adverbs like “always” usually go BEFORE the main verb, not after it."],
          ["Always early she arrives.", "This order is not correct in English. Start with the subject."],
          ["She early arrives always.", "The words are in the wrong order. Subject + always + verb + early."]
        ],
        hint: "Words like always, usually, and never go before the main verb.",
        exp: "Rule: Frequency adverbs (always, usually, often, never) go before the main verb: She always arrives early."
      },
      {
        skill: "Word order",
        q: "Which question is correct?",
        opts: [
          ["Where do you live?", null],
          ["Where you live?", "Present simple questions need a helping verb: do or does."],
          ["Where you do live?", "The helping verb “do” must come before the subject “you”."],
          ["Where does you live?", "“Does” is for he/she/it. With “you”, we use “do”."]
        ],
        hint: "Question order: Question word + do/does + subject + verb.",
        exp: "Rule: Present simple questions = Question word + do/does + subject + base verb. Where do you live?"
      },
      {
        skill: "Present simple",
        q: "Choose the correct verb: “Water ______ at 100 degrees Celsius.”",
        opts: [
          ["boils", null],
          ["boil", "“Water” is singular (it), so the verb needs -s."],
          ["boiling", "“Boiling” needs a helping verb, like “is boiling”."],
          ["is boil", "We cannot use “is” with the base verb “boil”."]
        ],
        hint: "This is a scientific fact. Facts use the present simple. Water = it.",
        exp: "Rule: Use the present simple for facts and general truths. With it/he/she, add -s: Water boils at 100°C."
      },
      {
        skill: "Prepositions of Place",
        q: "Choose the correct word: “The pharmacy is ______ the bank and the bakery.” (The bank is on one side, and the bakery is on the other side.)",
        opts: [
          ["between", null],
          ["opposite", "“Opposite” means across from something, facing it. Here the pharmacy has a building on each side."],
          ["behind", "“Behind” means at the back of something."],
          ["on", "“On” is for surfaces and streets, not for a place with a building on each side."]
        ],
        hint: "There is one building on the left and one on the right.",
        exp: "Use “between” for something in the middle of two things: The pharmacy is between the bank and the bakery."
      },
      {
        skill: "Prepositions of Place",
        q: "Which sentence is correct?",
        opts: [
          ["We will meet at the main gate.", null],
          ["We will meet in the main gate.", "“In” means inside something. A gate is a meeting point, so use “at”."],
          ["We will meet on the main gate.", "“On” means on top of a surface. Nobody stands on top of the gate."],
          ["We will meet to the main gate.", "“To” shows movement toward a place (go to the gate). For a meeting point, use “at”."]
        ],
        hint: "A gate is a point where people meet.",
        exp: "Use “at” for a point or place where something happens: We will meet at the main gate."
      },
      {
        skill: "Prepositions of Place",
        q: "Choose the correct words: “The car is parked ______ the house. You can see it from the front door.”",
        opts: [
          ["in front of", null],
          ["behind", "“Behind” means at the back. From the front door, you see the front of the house."],
          ["under", "A car is not parked under a house."],
          ["between", "“Between” needs two things, one on each side."]
        ],
        hint: "You can see the car when you open the front door.",
        exp: "“In front of” means facing the front of something: The car is parked in front of the house."
      }
    ]
  },
  {
    id: "g11",
    order: 11,
    level: 3,
    topic: "Future Forms",
    title: "Future Forms: will and going to",
    desc: "Plans, decisions, and predictions.",
    learn: {
      rule: "Use “going to” for plans you have already made and for predictions based on what you can see. Use “will” for quick decisions, offers, and promises. After “will”, use the base verb (no “to”).",
      examples: ["I am going to study medicine next year.", "It’s cold. I will close the window."],
      mistake: "I will to visit my uncle tomorrow.",
      correction: "I will visit my uncle tomorrow."
    },
    questions: [
      {
        skill: "Future Forms",
        q: "Choose the correct answer: “We bought the tickets. We ______ travel to Abha next week.”",
        opts: [
          ["are going to", null],
          ["will to", "After “will”, do not use “to”."],
          ["going", "We need “are going to” before the verb."],
          ["are go", "“Are go” is not correct English."]
        ],
        hint: "They already bought tickets. This is a plan.",
        exp: "For plans already made, use am/is/are going to + base verb."
      },
      {
        skill: "Future Forms",
        q: "Choose the correct word: “The phone is ringing. I ______ answer it!”",
        opts: [
          ["will", null],
          ["going", "“Going” alone is not correct. It needs “am going to”."],
          ["am", "“Am answer” is not correct."],
          ["be", "“Be answer” is not correct."]
        ],
        hint: "This is a quick decision made at the moment of speaking.",
        exp: "Use “will” for quick decisions: I will answer it!"
      },
      {
        skill: "Future Forms",
        q: "Which sentence is correct?",
        opts: [
          ["She is going to start a new job in May.", null],
          ["She going to start a new job in May.", "The verb “is” is missing."],
          ["She is going start a new job in May.", "“To” is missing after “going”."],
          ["She is go to start a new job in May.", "We need “going”, not “go”."]
        ],
        hint: "be + going to + base verb.",
        exp: "The form is: She is going to start…"
      },
      {
        skill: "Future Forms",
        q: "“I will to help you with your project.” What is the error?",
        opts: [
          ["“will to help” should be “will help”.", null],
          ["“help” should be “helps”.", "After “will”, use the base verb, so “help” is correct."],
          ["“your” should be “you”.", "“Your project” is correct."],
          ["There is no error.", "There is an error after “will”."]
        ],
        hint: "Look at the words right after “will”.",
        exp: "After “will”, use the base verb without “to”: I will help you."
      },
      {
        skill: "Future Forms",
        q: "Choose the correct answer: “Look at those dark clouds! It ______ rain.”",
        opts: [
          ["is going to", null],
          ["is going", "“To” is missing."],
          ["going to", "The verb “is” is missing."],
          ["will to", "After “will”, do not use “to”."]
        ],
        hint: "You can see the clouds now. This is a prediction based on evidence.",
        exp: "For predictions based on what you can see, use “going to”: It is going to rain."
      }
    ]
  },
  {
    id: "g12",
    order: 12,
    level: 3,
    topic: "Comparatives and Superlatives",
    title: "Comparatives and Superlatives",
    desc: "Taller, the tallest; more interesting, the most interesting.",
    learn: {
      rule: "Compare two things with adjective + -er + than (taller than) or more + long adjective + than (more interesting than). For the top of a group, use the + -est (the tallest) or the most + long adjective.",
      examples: ["Riyadh is bigger than Abha.", "This is the most interesting book in the library."],
      mistake: "This test is more easier than the last one.",
      correction: "This test is easier than the last one."
    },
    questions: [
      {
        skill: "Comparatives and Superlatives",
        q: "Choose the correct word: “My brother is ______ than me.”",
        opts: [
          ["taller", null],
          ["tall", "We compare two people, so we need the comparative form."],
          ["tallest", "“Tallest” is for the top of a group, and it needs “the”."],
          ["more tall", "Short adjectives add -er. Do not use “more”."]
        ],
        hint: "Two people are compared, and “tall” is short.",
        exp: "Short adjectives add -er + than: taller than."
      },
      {
        skill: "Comparatives and Superlatives",
        q: "Choose the correct answer: “The Burj Khalifa is ______ building in the world.”",
        opts: [
          ["the tallest", null],
          ["taller", "We compare it with ALL buildings, so we need the superlative."],
          ["the taller", "“The” + -est is used for the top of a group."],
          ["the most tall", "Short adjectives use -est, not “most”."]
        ],
        hint: "It is number one in the whole world.",
        exp: "For the top of a group, use the + -est: the tallest."
      },
      {
        skill: "Comparatives and Superlatives",
        q: "Choose the correct answer: “This story is ______ than the first one.”",
        opts: [
          ["more interesting", null],
          ["interestinger", "Long adjectives do not add -er."],
          ["most interesting", "We compare two stories, so we need “more”, not “most”."],
          ["more interestinger", "Do not use “more” and -er together."]
        ],
        hint: "“Interesting” is a long adjective.",
        exp: "Long adjectives use more + adjective + than: more interesting than."
      },
      {
        skill: "Comparatives and Superlatives",
        q: "Which sentence is correct?",
        opts: [
          ["Today is hotter than yesterday.", null],
          ["Today is more hot than yesterday.", "“Hot” is short, so we add -er."],
          ["Today is hottest than yesterday.", "“Hottest” is superlative. With “than” we need the comparative."],
          ["Today is hoter than yesterday.", "With short adjectives that end in consonant + vowel + consonant, double the last letter: hotter."]
        ],
        hint: "Hot → hotter (double the t).",
        exp: "Hot → hotter: Today is hotter than yesterday."
      },
      {
        skill: "Comparatives and Superlatives",
        q: "Choose the correct word: “My handwriting is bad, but my brother’s handwriting is ______.”",
        opts: [
          ["worse", null],
          ["badder", "“Bad” is irregular. We do not add -er."],
          ["more bad", "“Bad” is irregular. We do not use “more”."],
          ["worst", "“Worst” is the superlative (the worst). We compare two things."]
        ],
        hint: "“Bad” is irregular: bad → ? → the worst.",
        exp: "Bad → worse → the worst. We compare two people’s handwriting, so “worse”."
      }
    ]
  },
  {
    id: "g13",
    order: 13,
    level: 3,
    topic: "Modals: can, should, must",
    title: "Modals: can, should, must",
    desc: "Ability, advice, and rules.",
    learn: {
      rule: "Use “can” for ability or permission, “should” for advice, and “must” for strong rules. “Mustn’t” means it is not allowed. After a modal, use the base verb (no “to”, no -s).",
      examples: ["I can swim very well.", "You should drink more water."],
      mistake: "She can speaks three languages.",
      correction: "She can speak three languages."
    },
    questions: [
      {
        skill: "Modals",
        q: "Choose the best word: “You look tired. You ______ go to bed early.”",
        opts: [
          ["should", null],
          ["can’t", "“Can’t” means you are not able. That does not give advice."],
          ["mustn’t", "“Mustn’t” means it is not allowed. Going to bed early is good advice."],
          ["shouldn’t", "“Shouldn’t” would mean it is a bad idea to rest. That does not fit."]
        ],
        hint: "This is advice.",
        exp: "Use “should” to give advice: You should go to bed early."
      },
      {
        skill: "Modals",
        q: "Choose the best word: “Students ______ wear a seatbelt on the school bus. It is the rule.”",
        opts: [
          ["must", null],
          ["can", "“Can” means it is possible or allowed. A rule is stronger."],
          ["mustn’t", "“Mustn’t” means it is not allowed. The rule says to wear it."],
          ["couldn’t", "“Couldn’t” is about past ability, not a rule."]
        ],
        hint: "“It is the rule.”",
        exp: "Use “must” for strong rules: Students must wear a seatbelt."
      },
      {
        skill: "Modals",
        q: "Choose the best word: “Lina ______ play the piano. She learned when she was six.”",
        opts: [
          ["can", null],
          ["must", "“Must” is for rules. The sentence is about her skill."],
          ["should", "“Should” is for advice. The sentence is about ability."],
          ["mustn’t", "“Mustn’t” means not allowed."]
        ],
        hint: "She learned it, so she has this skill.",
        exp: "Use “can” for ability: Lina can play the piano."
      },
      {
        skill: "Modals",
        q: "Which sentence is correct?",
        opts: [
          ["He should study for the test.", null],
          ["He should to study for the test.", "Do not use “to” after “should”."],
          ["He shoulds study for the test.", "Modals never take -s."],
          ["He should studies for the test.", "After a modal, use the base verb (study)."]
        ],
        hint: "Modal + base verb.",
        exp: "After a modal, use the base verb: He should study."
      },
      {
        skill: "Modals",
        q: "Choose the best word: “You ______ use your phone during the exam. It is not allowed.”",
        opts: [
          ["mustn’t", null],
          ["must", "“Must” means it is necessary. The sentence says it is NOT allowed."],
          ["should", "“Should” is advice to do something, but this is not allowed."],
          ["can", "“Can” means it is allowed. The sentence says the opposite."]
        ],
        hint: "“It is not allowed.”",
        exp: "“Mustn’t” means something is not allowed."
      }
    ]
  },
  {
    id: "g14",
    order: 14,
    level: 3,
    topic: "Conjunctions",
    title: "Conjunctions: and, but, because, so",
    desc: "Join ideas correctly.",
    learn: {
      rule: "“And” adds an idea. “But” shows a contrast. “Because” gives a reason. “So” gives a result. Use a comma before “but” and “so” when they join two full sentences.",
      examples: ["I was tired, but I finished my homework.", "It was raining, so we stayed inside."],
      mistake: "It was hot, because we went swimming.",
      correction: "It was hot, so we went swimming."
    },
    questions: [
      {
        skill: "Conjunctions",
        q: "Choose the best word: “I wanted to go out, ______ it was raining.”",
        opts: [
          ["but", null],
          ["so", "“So” shows a result. Rain is not a result of wanting to go out."],
          ["because", "“Because” gives a reason. Rain is not the reason for wanting to go out."],
          ["or", "“Or” gives a choice. There is no choice here."]
        ],
        hint: "The two ideas are in contrast.",
        exp: "“But” shows contrast: I wanted to go out, but it was raining."
      },
      {
        skill: "Conjunctions",
        q: "Choose the best word: “She studied hard, ______ she passed the test.”",
        opts: [
          ["so", null],
          ["but", "“But” shows contrast. Passing is an expected result of studying."],
          ["because", "“Because” would make studying the result of passing."],
          ["or", "“Or” gives a choice."]
        ],
        hint: "Passing is the result of studying.",
        exp: "“So” introduces a result: She studied hard, so she passed."
      },
      {
        skill: "Conjunctions",
        q: "Choose the best word: “We stayed inside ______ it was very hot.”",
        opts: [
          ["because", null],
          ["so", "“So” would make the heat a result of staying inside."],
          ["but", "There is no contrast between staying inside and the heat."],
          ["or", "There is no choice here."]
        ],
        hint: "The heat is the reason.",
        exp: "“Because” gives the reason: We stayed inside because it was very hot."
      },
      {
        skill: "Conjunctions",
        q: "Which sentence joins the ideas best?",
        opts: [
          ["Ali plays football, and he swims every weekend.", null],
          ["Ali plays football, because he swims every weekend.", "Swimming is not the reason he plays football."],
          ["Ali plays football, so he swims every weekend.", "Swimming is not a result of playing football."],
          ["Ali plays football, or he swims every weekend.", "“Or” gives a choice, but he does both."]
        ],
        hint: "Ali does two activities.",
        exp: "“And” adds another idea: Ali plays football, and he swims every weekend."
      },
      {
        skill: "Conjunctions",
        q: "“I was hungry, because I ate a sandwich.” What is the problem?",
        opts: [
          ["“because” should be “so”.", null],
          ["“hungry” should be “hungrily”.", "“Hungry” is the correct adjective after “was”."],
          ["“ate” should be “eat”.", "“Ate” is correct for the past."],
          ["There is no problem.", "The sentence says eating made him hungry. That is not logical."]
        ],
        hint: "Did eating cause the hunger, or did hunger cause the eating?",
        exp: "Hunger is the reason; eating is the result: I was hungry, so I ate a sandwich."
      }
    ]
  },
  {
    id: "g15",
    order: 15,
    level: 3,
    topic: "Countable and Uncountable Nouns",
    title: "Countable and Uncountable Nouns",
    desc: "Many or much? A few or a little?",
    learn: {
      rule: "Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot (water, rice, information, advice). Use many/a few with countable nouns and much/a little with uncountable nouns.",
      examples: ["How many apples do we need?", "There isn’t much water in the bottle."],
      mistake: "I need some informations.",
      correction: "I need some information."
    },
    questions: [
      {
        skill: "Countable and Uncountable Nouns",
        q: "Choose the correct word: “How ______ students are in your class?”",
        opts: [
          ["many", null],
          ["much", "“Much” is for uncountable nouns. Students can be counted."],
          ["a little", "“A little” is for uncountable nouns."],
          ["little", "“Little” is for uncountable nouns."]
        ],
        hint: "Can you count students?",
        exp: "Use “many” with countable nouns: How many students?"
      },
      {
        skill: "Countable and Uncountable Nouns",
        q: "Choose the correct word: “There isn’t ______ milk in the fridge.”",
        opts: [
          ["much", null],
          ["many", "“Many” is for countable nouns. Milk is uncountable."],
          ["a few", "“A few” is for countable nouns."],
          ["few", "“Few” is for countable nouns."]
        ],
        hint: "Can you count milk? (We count bottles, not milk.)",
        exp: "Milk is uncountable, so we use “much”."
      },
      {
        skill: "Countable and Uncountable Nouns",
        q: "Which sentence is correct?",
        opts: [
          ["Can you give me some advice?", null],
          ["Can you give me some advices?", "“Advice” is uncountable. It has no plural form."],
          ["Can you give me an advice?", "Uncountable nouns do not use “a” or “an”."],
          ["Can you give me many advice?", "“Many” is for countable nouns."]
        ],
        hint: "“Advice” is uncountable.",
        exp: "Uncountable nouns like “advice” have no plural and no “a/an”: some advice."
      },
      {
        skill: "Countable and Uncountable Nouns",
        q: "Choose the correct word: “I have ______ friends in Jeddah.”",
        opts: [
          ["a few", null],
          ["a little", "“A little” is for uncountable nouns. Friends can be counted."],
          ["much", "“Much” is for uncountable nouns."],
          ["a", "“A” is for one thing, but “friends” is plural."]
        ],
        hint: "“Friends” is a plural countable noun.",
        exp: "Use “a few” with plural countable nouns: a few friends."
      },
      {
        skill: "Countable and Uncountable Nouns",
        q: "“We need more furnitures for the new classroom.” What is the correct word?",
        opts: [
          ["furniture", null],
          ["a furniture", "“Furniture” is uncountable, so it does not take “a”."],
          ["furniture’s", "This is a possessive form. We do not need it here."],
          ["furnishes", "“Furnishes” is a verb, not a noun."]
        ],
        hint: "Think of words like “water” and “rice”. Do they have a plural form? Is “furniture” the same kind of noun?",
        exp: "“Furniture” is uncountable and has no plural: We need more furniture."
      }
    ]
  },
  {
    id: "g16",
    order: 16,
    level: 4,
    topic: "Present Perfect",
    title: "Present Perfect",
    desc: "Experiences and past actions connected to now.",
    learn: {
      rule: "Use have/has + past participle for experiences (ever, never, … times) and for past actions connected to now (already, just, since, for). Do not use it with finished times like yesterday or last year.",
      examples: ["I have visited AlUla twice.", "She has already finished her homework."],
      mistake: "I have seen him yesterday.",
      correction: "I saw him yesterday."
    },
    questions: [
      {
        skill: "Present Perfect",
        q: "Choose the correct answer: “My sister ______ to London three times.”",
        opts: [
          ["has been", null],
          ["have been", "“My sister” is she. Use “has”."],
          ["has went", "After “has”, use the past participle (been/gone), not “went”."],
          ["is been", "Present perfect uses has/have, not “is”."]
        ],
        hint: "This is an experience (three times). She + has + past participle.",
        exp: "For experiences, use has/have + past participle: My sister has been to London three times."
      },
      {
        skill: "Present Perfect",
        q: "Choose the correct word: “______ you ever tried Japanese food?”",
        opts: [
          ["Have", null],
          ["Has", "“Has” is for he, she, or it. The subject is “you”."],
          ["Did", "After “did”, we use the base verb (try), not “tried”."],
          ["Are", "“Are” does not go with “tried”."]
        ],
        hint: "Look at the verb form “tried” and the word “ever”.",
        exp: "Present perfect questions: Have + you + past participle: Have you ever tried…?"
      },
      {
        skill: "Present Perfect",
        q: "Which sentence is correct?",
        opts: [
          ["I have already finished my project.", null],
          ["I have already finish my project.", "After “have”, use the past participle (finished)."],
          ["I has already finished my project.", "With “I”, use “have”, not “has”."],
          ["I already have finish my project.", "The verb needs the past participle (finished)."]
        ],
        hint: "have + past participle.",
        exp: "I have already finished… uses have + past participle."
      },
      {
        skill: "Present Perfect",
        q: "“We have watched that movie last night.” Why is this sentence wrong?",
        opts: [
          ["“Last night” is a finished time, so it needs the simple past: We watched…", null],
          ["“Watched” should be “watch”.", "After “have”, the participle “watched” is correct. The problem is the time phrase."],
          ["“We” should be “us”.", "“We” is the correct subject pronoun."],
          ["The sentence is correct.", "The present perfect cannot be used with “last night”."]
        ],
        hint: "Look at the time phrase at the end.",
        exp: "Finished times (last night, yesterday) need the simple past: We watched that movie last night."
      },
      {
        skill: "Present Perfect",
        q: "Choose the correct answer: “They ______ in Riyadh since 2015.”",
        opts: [
          ["have lived", null],
          ["lived", "“Since 2015” connects the past to now, so we need the present perfect."],
          ["live", "“Since” needs the present perfect, not the simple present."],
          ["are living", "With “since”, use the present perfect, not the present continuous."]
        ],
        hint: "“Since 2015” means from 2015 until now.",
        exp: "For actions from the past until now, use have/has + past participle: They have lived in Riyadh since 2015."
      }
    ]
  },
  {
    id: "g17",
    order: 17,
    level: 4,
    topic: "Past Continuous",
    title: "Past Continuous",
    desc: "Actions in progress in the past.",
    learn: {
      rule: "Use was/were + verb-ing for an action in progress at a time in the past. A shorter action in the simple past often interrupts it (… when the phone rang).",
      examples: ["I was reading when the lights went out.", "They were playing football at 5 p.m."],
      mistake: "We was studying when you called.",
      correction: "We were studying when you called."
    },
    questions: [
      {
        skill: "Past Continuous",
        q: "Choose the correct answer: “At 8 p.m. yesterday, I ______ dinner.”",
        opts: [
          ["was eating", null],
          ["am eating", "“Yesterday” is past, so we need “was”."],
          ["were eating", "With “I”, use “was”, not “were”."],
          ["eat", "The action was in progress at a past time. Use was + -ing."]
        ],
        hint: "An action in progress at a specific past time.",
        exp: "Use was/were + -ing for actions in progress in the past: I was eating dinner."
      },
      {
        skill: "Past Continuous",
        q: "Choose the correct answer: “The students ______ a test when the fire alarm rang.”",
        opts: [
          ["were taking", null],
          ["was taking", "“The students” is plural, so use “were”."],
          ["are taking", "The alarm “rang” in the past, so use the past."],
          ["take", "The test was in progress when the alarm rang. Use were + -ing."]
        ],
        hint: "The longer action was in progress when the alarm rang.",
        exp: "The longer action uses the past continuous: The students were taking a test when the alarm rang."
      },
      {
        skill: "Past Continuous",
        q: "Which sentence is correct?",
        opts: [
          ["She was walking home when it started to rain.", null],
          ["She walking home when it started to rain.", "The helping verb “was” is missing."],
          ["She was walk home when it started to rain.", "After “was”, the verb needs -ing."],
          ["She were walking home when it started to rain.", "With “she”, use “was”."]
        ],
        hint: "was/were + verb-ing.",
        exp: "She was walking… uses was + the -ing form."
      },
      {
        skill: "Past Continuous",
        q: "Choose the correct answer: “While Omar ______ TV, his phone rang.”",
        opts: [
          ["was watching", null],
          ["were watching", "With “Omar” (he), use “was”."],
          ["is watching", "“Rang” is past, so the other action must also be past."],
          ["watches", "“Watches” is present, but the story is in the past."]
        ],
        hint: "“While” + an action in progress in the past.",
        exp: "“While” often introduces the past continuous: While Omar was watching TV, his phone rang."
      },
      {
        skill: "Past Continuous",
        q: "“They was playing football when the rain started.” Which word is wrong?",
        opts: [
          ["was", null],
          ["playing", "“Playing” is the correct -ing form."],
          ["started", "“Started” is correct for the short action."],
          ["rain", "“Rain” is correct."]
        ],
        hint: "Check the helping verb with “they”.",
        exp: "“They” takes “were”: They were playing football when the rain started."
      }
    ]
  },
  {
    id: "g18",
    order: 18,
    level: 4,
    topic: "First Conditional",
    title: "First Conditional",
    desc: "Real possibilities in the future.",
    learn: {
      rule: "Use if + simple present, will + base verb for real possible situations in the future. Do not use “will” in the if-part.",
      examples: ["If it rains, we will stay home.", "If you study, you will pass."],
      mistake: "If I will see him, I will tell him.",
      correction: "If I see him, I will tell him."
    },
    questions: [
      {
        skill: "First Conditional",
        q: "Choose the correct answer: “If you ______ hard, you will pass the exam.”",
        opts: [
          ["study", null],
          ["will study", "Do not use “will” in the if-part."],
          ["studied", "The first conditional uses the present in the if-part."],
          ["studying", "“Studying” needs a helping verb."]
        ],
        hint: "If + simple present.",
        exp: "First conditional: If + present simple, will + base verb: If you study hard, you will pass."
      },
      {
        skill: "First Conditional",
        q: "Choose the correct answer: “If it is hot tomorrow, we ______ to the beach.”",
        opts: [
          ["will go", null],
          ["went", "“Tomorrow” is future, so we need “will”."],
          ["going", "“Going” needs a helping verb."],
          ["would went", "This form is not correct English."]
        ],
        hint: "The result part uses will + base verb.",
        exp: "The result part uses will + base verb: we will go to the beach."
      },
      {
        skill: "First Conditional",
        q: "Which sentence is correct?",
        opts: [
          ["If she calls, I will answer.", null],
          ["If she will call, I will answer.", "Do not use “will” after “if”."],
          ["If she calls, I answer will.", "The word order is wrong. Use “I will answer”."],
          ["If she calling, I will answer.", "“Calling” needs a helping verb. Use “calls”."]
        ],
        hint: "If + present, will + base verb.",
        exp: "If she calls (present), I will answer (will + base verb)."
      },
      {
        skill: "First Conditional",
        q: "Choose the correct answer: “We ______ late if we don’t leave now.”",
        opts: [
          ["will be", null],
          ["are being", "This is the present continuous. The result is in the future."],
          ["were", "“Were” is past. The situation is in the future."],
          ["be", "We need “will” before “be”."]
        ],
        hint: "The result part can come first. It still uses will + base verb.",
        exp: "The result uses will + base verb: We will be late if we don’t leave now."
      },
      {
        skill: "First Conditional",
        q: "“If I will finish early, I will help you.” Which is the correct version?",
        opts: [
          ["If I finish early, I will help you.", null],
          ["If I finished early, I will help you.", "The first conditional uses the present (finish), not the past."],
          ["If I will finish early, I help you.", "“Will” is still in the if-part, and the result needs “will”."],
          ["If I finish early, I helping you.", "The result needs “will help”."]
        ],
        hint: "Remove “will” from the if-part.",
        exp: "If + present, will + base verb: If I finish early, I will help you."
      }
    ]
  },
  {
    id: "g19",
    order: 19,
    level: 4,
    topic: "Relative Clauses",
    title: "Relative Clauses: who, which, where",
    desc: "Give more information about people, things, and places.",
    learn: {
      rule: "Use “who” for people, “which” for things, and “where” for places. The relative clause gives more information about a noun.",
      examples: ["The teacher who teaches us English is from Abha.", "This is the phone which I bought yesterday."],
      mistake: "The boy which won the prize is my cousin.",
      correction: "The boy who won the prize is my cousin."
    },
    questions: [
      {
        skill: "Relative Clauses",
        q: "Choose the correct word: “The woman ______ works in the library is very helpful.”",
        opts: [
          ["who", null],
          ["which", "“Which” is for things. The woman is a person."],
          ["where", "“Where” is for places."],
          ["what", "“What” cannot start a relative clause after a noun."]
        ],
        hint: "The woman is a person.",
        exp: "Use “who” for people: The woman who works in the library…"
      },
      {
        skill: "Relative Clauses",
        q: "Choose the correct word: “This is the book ______ I told you about.”",
        opts: [
          ["which", null],
          ["who", "“Who” is for people. A book is a thing."],
          ["where", "“Where” is for places."],
          ["what", "“What” cannot follow “the book” in a relative clause."]
        ],
        hint: "A book is a thing.",
        exp: "Use “which” for things: the book which I told you about."
      },
      {
        skill: "Relative Clauses",
        q: "Choose the correct word: “Riyadh is the city ______ I was born.”",
        opts: [
          ["where", null],
          ["which", "“Which” would need a preposition: “the city which I was born in”. With no preposition, use “where”."],
          ["who", "“Who” is for people."],
          ["what", "“What” cannot follow “the city” in a relative clause."]
        ],
        hint: "The relative clause tells us about a place.",
        exp: "Use “where” for places: the city where I was born."
      },
      {
        skill: "Relative Clauses",
        q: "Which sentence is correct?",
        opts: [
          ["The student who won the competition is in my class.", null],
          ["The student which won the competition is in my class.", "“Which” is for things. A student is a person."],
          ["The student where won the competition is in my class.", "“Where” is for places."],
          ["The student who he won the competition is in my class.", "Do not repeat the subject (he) after “who”."]
        ],
        hint: "Person → who. Do not add an extra pronoun.",
        exp: "The student who won the competition… uses “who” for a person, with no extra pronoun."
      },
      {
        skill: "Relative Clauses",
        q: "“The car who is parked outside belongs to my uncle.” Which word should change?",
        opts: [
          ["“who” should be “which”.", null],
          ["“parked” should be “park”.", "“Is parked” is correct here."],
          ["“belongs” should be “belong”.", "“The car” is singular, so “belongs” is correct."],
          ["“outside” should be “out”.", "“Outside” is correct."]
        ],
        hint: "Is a car a person or a thing?",
        exp: "A car is a thing, so use “which”: The car which is parked outside…"
      }
    ]
  },
  {
    id: "g20",
    order: 20,
    level: 4,
    topic: "Sentence Errors and Editing",
    title: "Sentence Errors and Editing",
    desc: "Find and fix common mistakes.",
    learn: {
      rule: "When you edit a sentence, check five things: subject–verb agreement, verb tense, capital letters, end punctuation, and prepositions (in a city, on a street or surface, at a place).",
      examples: ["My brother lives in Dammam.", "We met at the library on Sunday."],
      mistake: "my friend live on Jeddah.",
      correction: "My friend lives in Jeddah."
    },
    questions: [
      {
        skill: "Sentence Errors and Editing",
        q: "Which sentence is correct?",
        opts: [
          ["My cousins live in Riyadh.", null],
          ["My cousins lives in Riyadh.", "“Cousins” is plural, so the verb has no -s."],
          ["My cousins live at Riyadh.", "Use “in” with cities."],
          ["my cousins live in riyadh.", "The first word and city names need capital letters."]
        ],
        hint: "Check the verb, the preposition, and the capital letters.",
        exp: "Plural subject + base verb, “in” + city, and capital letters: My cousins live in Riyadh."
      },
      {
        skill: "Sentence Errors and Editing",
        q: "“She don’t like cold weather.” What is the error?",
        opts: [
          ["“don’t” should be “doesn’t”.", null],
          ["“like” should be “likes”.", "After “doesn’t”, we use the base verb “like”. The error is the helping verb."],
          ["“cold” should be “colder”.", "“Cold weather” is correct."],
          ["There is no error.", "“She” needs “doesn’t”."]
        ],
        hint: "Check the helping verb with “she”.",
        exp: "With she, use “doesn’t” + base verb: She doesn’t like cold weather."
      },
      {
        skill: "Sentence Errors and Editing",
        q: "Which sentence has correct capital letters and punctuation?",
        opts: [
          ["Where is the science lab?", null],
          ["Where is the science lab.", "This is a question, so it needs a question mark."],
          ["where is the science lab?", "The first word needs a capital letter."],
          ["Where, is the science lab?", "There should be no comma after “Where”."]
        ],
        hint: "It is a question.",
        exp: "A question starts with a capital letter and ends with a question mark."
      },
      {
        skill: "Sentence Errors and Editing",
        q: "“Yesterday, we go to the museum.” What should change?",
        opts: [
          ["“go” should be “went”.", null],
          ["“we” should be “us”.", "“We” is the correct subject pronoun."],
          ["“the” should be “a”.", "The article is not the problem. Look at the verb and the time word."],
          ["“museum” should be “museums”.", "One museum is fine. Look at the verb."]
        ],
        hint: "“Yesterday” is in the past.",
        exp: "“Yesterday” needs the simple past: Yesterday, we went to the museum."
      },
      {
        skill: "Sentence Errors and Editing",
        q: "Which is the correct version of “The keys are in the table.”?",
        opts: [
          ["The keys are on the table.", null],
          ["The keys is on the table.", "“Keys” is plural, so use “are”."],
          ["The keys are on table.", "We need “the” before “table”."],
          ["The keys are into the table.", "“Into” shows movement inside something."]
        ],
        hint: "The keys are on the surface of the table.",
        exp: "Use “on” for surfaces: The keys are on the table."
      }
    ]
  }
];
