/* =====================================================================
   NVS English Quest — Reading Library — LEVEL 5 PASSAGES  (Version 3D)
   ---------------------------------------------------------------------
   To add a passage, copy one passage block, paste it at the end of the list
   (before the final "]);"), and change its content.
   See HOW_TO_ADD_CONTENT.md for step-by-step instructions.

   FIELDS
   • id: unique, pattern r5-NN (e.g. r5-11). Never change an existing id.
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
    id: "r5a",
    level: 5,
    title: "Before You Press Share",
    category: "Critical Thinking",
    topic: "Technology and responsibility",
    status: "retained",
    text: [
      "Every day, millions of messages, videos, and pictures travel across social media. Some of them are true and useful. Others are partly true, and some are completely false. Because information spreads so quickly online, a false story can reach thousands of people before anyone checks whether it is accurate.",
      "Consider a simple example. Imagine a message appears in your family group chat claiming that drinking hot water every fifteen minutes prevents all illnesses. It sounds scientific, and it was forwarded by your uncle, whom you trust. Many people would share it without thinking. However, there is no scientific evidence for this claim, and believing it could make people feel safe when they actually need to see a doctor.",
      "Why do false stories spread so easily? Researchers have found that false news often spreads faster than true news, partly because it is surprising or emotional. When a message makes us feel shocked, afraid, or excited, we are more likely to share it immediately. In other words, our feelings can move faster than our thinking.",
      "Fortunately, there are simple habits that can protect us. First, check the source. Is the information from a reliable organization, such as a ministry of health, a university, or a well-known news agency? Second, look for the date. Old news is sometimes shared as if it happened today. Third, search for the same information on other trusted websites. If no reliable source reports it, be careful. Finally, pause before sharing. Ask yourself, “How do I know this is true?”",
      "Some people argue that checking every message takes too much time. It is true that we cannot investigate everything we read. But we can be more careful about what we pass on to others. When we share something, we are, in a way, telling our friends and family that we believe it. That is a responsibility.",
      "The internet has given young people more access to information than any generation before them. This is a great opportunity, but it also requires a new kind of skill. Being a smart reader today means not only understanding what a text says, but also asking who wrote it, why they wrote it, and whether it can be trusted."
    ],
    before: {
      words: [
        { word: "accurate", def: "Correct and true.", ex: "Check that the information is accurate." },
        { word: "evidence", def: "Facts that show something is true.", ex: "There is no evidence for this claim." },
        { word: "reliable", def: "Able to be trusted.", ex: "The ministry of health is a reliable source." },
        { word: "responsibility", def: "Something you should do because it is your duty.", ex: "Sharing true information is a responsibility." }
      ],
      predict: "Have you ever received a message that you were not sure was true? What did you do?"
    },
    questions: [
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose?",
        opts: [
          ["To encourage readers to check information carefully before sharing it", null],
          ["To entertain readers with a funny story about an uncle", "The uncle is part of a short example, not a funny story. The passage gives advice."],
          ["To argue that young people should stop using social media completely and forever", "The author wants careful sharing, not stopping."],
          ["To explain how to make popular videos", "The passage is about checking information, not creating videos."]
        ],
        hint: "Look at the advice in paragraph 4 and the question the author wants you to ask.",
        exp: "The author explains why false information spreads and gives habits to check it. The purpose is to persuade readers to pause and check before sharing.",
        ev: "Finally, pause before sharing."
      },
      {
        skill: "Inference",
        q: "Why does the author mention that the message was forwarded by “your uncle, whom you trust”?",
        opts: [
          ["To show that trust in the sender can lead people to share false claims", null],
          ["To show that uncles usually share more false information than other relatives", "The uncle is an example of a trusted person, not a claim about uncles."],
          ["To prove that hot water prevents all illnesses", "The author says there is “no scientific evidence” for this claim."],
          ["To show that family chats are not important", "The author does not say this. The example shows how false messages travel."]
        ],
        hint: "Read the next sentence: “Many people would share it without thinking.” Why would they?",
        exp: "When a message comes from someone we trust, we may not question it. The author uses this detail to explain why people share false claims without checking.",
        ev: "it was forwarded by your uncle, whom you trust"
      },
      {
        skill: "Text evidence",
        q: "Which sentence BEST supports the idea that emotions affect what people share?",
        opts: [
          ["“When a message makes us feel shocked, afraid, or excited, we are more likely to share it immediately.”", null],
          ["“Second, look for the date.”", "This is a checking habit. It does not discuss emotions."],
          ["“Every day, millions of messages, videos, and pictures travel across social media.”", "This shows how much information there is, not how emotions affect sharing."],
          ["“Because information spreads so quickly online, a false story can reach thousands of people before anyone checks whether it is accurate.”", "This explains how fast false stories spread, not how emotions affect sharing."]
        ],
        hint: "Look for a sentence that names feelings.",
        exp: "This sentence directly connects feelings (shocked, afraid, excited) to sharing quickly. The author then sums it up: “our feelings can move faster than our thinking.”",
        ev: "When a message makes us feel shocked, afraid, or excited, we are more likely to share it immediately."
      },
      {
        skill: "Drawing conclusions",
        q: "Based on the passage, what should a student do if a surprising message is not reported by any reliable source?",
        opts: [
          ["Be careful and avoid sharing it until it can be checked", null],
          ["Share it quickly to warn everyone", "Sharing quickly is exactly the habit the author warns against."],
          ["Believe it, because surprising news is usually true", "The author says false news often spreads BECAUSE it is surprising."],
          ["Ask the sender to share it with more people, just to be safe", "Sharing an unchecked message spreads it further."]
        ],
        hint: "Find the sentence that begins “If no reliable source reports it”.",
        exp: "The author advises searching other trusted websites and says, “If no reliable source reports it, be careful.” We can conclude the student should not share it until it is verified.",
        ev: "If no reliable source reports it, be careful."
      },
      {
        skill: "Critical comprehension",
        q: "How does the author respond to people who say checking every message takes too much time?",
        opts: [
          ["The author admits we cannot check everything but urges careful sharing.", null],
          ["The author fully agrees and says checking messages is not really necessary.", "The author still asks us to be careful about what we share."],
          ["The author says people must spend hours checking every message.", "The author admits we cannot investigate everything."],
          ["The author ignores this argument completely.", "Paragraph 5 directly discusses this argument."]
        ],
        hint: "Read paragraph 5. Notice the words “It is true that…” and then “But…”.",
        exp: "The author first accepts part of the argument (“It is true that we cannot investigate everything”), then answers it (“But we can be more careful about what we pass on”). This is called a counterargument and response.",
        ev: "It is true that we cannot investigate everything we read. But we can be more careful about what we pass on to others."
      }
    ]
  },
  {
    id: "r5b",
    level: 5,
    title: "More Than a Box of Food",
    category: "Society",
    topic: "Community life",
    status: "retained",
    text: [
      "When Reem’s school announced that every Grade 11 student had to complete twenty hours of community service, she groaned. Between homework, exams, and her drawing classes, she felt she had no time to spare. She chose the food bank near her neighborhood simply because it was the closest option.",
      "On her first day, the coordinator, a calm woman named Mrs. Latifa, handed her a pair of gloves and pointed to a mountain of boxes. “We need to pack two hundred food baskets before Thursday,” she said. Reem spent three hours sorting rice, lentils, oil, and dates. By the end of the afternoon, her back hurt, and she was counting the minutes until she could leave.",
      "The following week, Mrs. Latifa asked Reem to help deliver the baskets. They drove to a small apartment building on the edge of the city. A woman opened the door holding a baby, while two young children peeked out from behind her. When Reem handed her the basket, the woman thanked her quietly and explained that her husband had lost his job three months earlier. Reem did not know what to say. She simply smiled and wished the family well.",
      "That evening, Reem could not stop thinking about the children’s faces. For the first time, the boxes she had packed were not just boxes. Each one represented a family who would have food on the table that week.",
      "Reem completed her twenty hours in less than a month, but she did not stop going to the food bank. She began to come every Saturday morning. She even used her art skills to design colorful posters asking local shops to donate supplies. Within two months, donations had increased noticeably, and Mrs. Latifa asked her to train new volunteers.",
      "At the end of the school year, Reem’s teacher asked students to write about their service experience. Reem began her essay with one sentence: “I went to the food bank to complete a requirement, but I stayed because I found a purpose.”"
    ],
    before: {
      words: [
        { word: "community", def: "The people who live in an area.", ex: "Volunteers help the community." },
        { word: "coordinator", def: "A person who organizes work or activities.", ex: "The coordinator gave us our tasks." },
        { word: "donate", def: "To give money or things to help others.", ex: "Shops donate food to the food bank." },
        { word: "purpose", def: "A reason that makes your actions feel important.", ex: "Helping others gave her a purpose." }
      ],
      predict: "How can volunteering change the way a person sees the world?"
    },
    questions: [
      {
        skill: "Inference",
        q: "What was Reem’s attitude toward community service at the beginning?",
        opts: [
          ["She saw it as a task to finish, not as something meaningful.", null],
          ["She was excited and had always wanted to volunteer.", "She “groaned” and chose the closest place, which does not show excitement."],
          ["She was afraid of Mrs. Latifa.", "Mrs. Latifa is described as calm, and nothing shows that Reem feared her."],
          ["She thought it would give her new ideas for her drawing classes.", "Drawing is mentioned only as something that took her time."]
        ],
        hint: "Look at what Reem did when she heard the news, and why she chose the food bank.",
        exp: "Reem groaned, felt she had no time, and picked the food bank “simply because it was the closest option.” These clues show she saw it as a requirement to complete.",
        ev: "She chose the food bank near her neighborhood simply because it was the closest option."
      },
      {
        skill: "Drawing conclusions",
        q: "Which experience most changed the way Reem saw her work?",
        opts: [
          ["Delivering a basket and meeting a family in need", null],
          ["Sorting rice, lentils, oil, and dates for three hours", "After sorting, she was “counting the minutes until she could leave”. Her view had not changed yet."],
          ["Designing colorful posters for local shops", "She made posters AFTER her view had already changed."],
          ["Writing her essay at the end of the year", "The essay describes a change that had already happened."]
        ],
        hint: "Paragraph 4 begins “That evening”. Which evening is the writer talking about?",
        exp: "After the delivery, Reem could not stop thinking about the children’s faces, and for the first time the boxes meant something. The delivery was the turning point.",
        ev: "That evening, Reem could not stop thinking about the children’s faces."
      },
      {
        skill: "Text evidence",
        q: "Which sentence BEST shows that Reem’s view of the food bank had changed?",
        opts: [
          ["“For the first time, the boxes she had packed were not just boxes.”", null],
          ["“By the end of the afternoon, her back hurt.”", "This describes her first day, before her view changed."],
          ["“She chose the food bank near her neighborhood simply because it was the closest option.”", "This shows her attitude at the BEGINNING."],
          ["“We need to pack two hundred food baskets before Thursday.”", "These are Mrs. Latifa’s words, not evidence about Reem’s view."]
        ],
        hint: "Look for the words “For the first time”.",
        exp: "“For the first time” signals a change. The boxes now represented real families, which shows her new understanding.",
        ev: "For the first time, the boxes she had packed were not just boxes."
      },
      {
        skill: "Drawing conclusions",
        q: "Why did Mrs. Latifa most likely ask Reem to train new volunteers?",
        opts: [
          ["Reem had shown commitment and helped the food bank succeed.", null],
          ["Reem was the oldest and most experienced volunteer there.", "Her age and experience are not given as reasons. She was new."],
          ["Reem asked to be put in charge.", "The passage does not say that Reem asked for this."],
          ["Reem wanted to stop volunteering soon.", "Reem kept coming every Saturday after her hours were finished."]
        ],
        hint: "Read paragraph 5. What did Reem do after her twenty hours were complete?",
        exp: "The passage does not state the reason, but the evidence supports this conclusion: Reem kept volunteering after her hours were done, designed posters, and donations increased.",
        ev: "Within two months, donations had increased noticeably, and Mrs. Latifa asked her to train new volunteers."
      },
      {
        skill: "Author’s purpose",
        q: "What is the main message of the story?",
        opts: [
          ["Helping others can give life purpose and change how we see the world.", null],
          ["Community service should not be required by schools for any student at all.", "Reem’s story shows the requirement led to something valuable."],
          ["Food banks need more posters to succeed.", "The posters are one detail, not the main message."],
          ["Art is more important than schoolwork.", "The story does not compare art and schoolwork in this way."]
        ],
        hint: "Read Reem’s essay sentence at the end. It sums up the story.",
        exp: "Reem’s last sentence shows the message: she started for a requirement but found a purpose in helping others.",
        ev: "I went to the food bank to complete a requirement, but I stayed because I found a purpose."
      }
    ]
  },
  {
    id: "r5-03",
    level: 5,
    title: "Artificial Intelligence and the Future of Education",
    category: "Technology",
    topic: "Analysis",
    status: "revised",
    revisionNote: "Split a 35-word sentence defining AI literacy; simplified “If anything, … that machines lack”.",
    text: [
      "When powerful AI chatbots became widely available, many teachers reacted with alarm. Students could now ask a computer to write an essay, solve a math problem, or summarize a novel in seconds. Some schools quickly banned the tools. Others began to ask a different question: if AI is here to stay, how can it improve learning rather than undermine it?",
      "Supporters point to AI’s potential as a personal tutor. In a typical classroom, one teacher must help twenty-five or more students who learn at different speeds. An AI system, by contrast, can give each student instant explanations, extra practice, and feedback at any hour. For a student who is too shy to ask questions in class, this private support could be especially valuable.",
      "Yet the same features that make AI helpful also create risks. If a student uses AI to complete an assignment without understanding it, the student may receive a good grade while learning very little. Moreover, AI tools sometimes produce answers that sound confident but are simply wrong. A student who cannot evaluate the response may accept false information as fact. There are also concerns about privacy, since some tools collect data about the people who use them.",
      "These risks suggest that the central issue is not the technology itself but the way it is used. Consider two students writing a history report. The first asks an AI to write the entire report and submits it. The second writes her own draft, then asks an AI to point out unclear arguments and suggest questions she has not considered. Both used the same tool, but only the second student strengthened her thinking.",
      "For this reason, many educators argue that schools should teach AI literacy. This means knowing what AI can and cannot do, checking its answers against reliable sources, and being honest about when and how it was used. Teachers may also change assignments, placing more emphasis on in-class writing, oral explanations, and projects that require personal reflection.",
      "The arrival of AI does not make human teachers or human thinking less important. In fact, it makes human abilities such as judgment, creativity, and responsibility more valuable than ever."
    ],
    before: {
      words: [
        { word: "assignment", def: "A piece of work given by a teacher.", ex: "I finished my history assignment." },
        { word: "tutor", def: "A person who teaches one student or a small group.", ex: "A tutor helps me with math." },
        { word: "privacy", def: "Keeping personal information safe from others.", ex: "Protect your privacy online." },
        { word: "literacy", def: "Knowledge and skill in a certain area.", ex: "AI literacy means knowing how AI works." }
      ],
      predict: "How can AI help students learn? How can it hurt learning?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "Which statement best expresses the central idea of the passage?",
        opts: [
          ["AI can help or harm learning, so students must learn to use it responsibly.", null],
          ["AI should be banned from all schools because it makes it easy for students to cheat.", "The writer mentions bans but focuses on how AI can be used well."],
          ["AI will soon replace human teachers.", "The final paragraph says human teachers remain important."],
          ["AI tools are always accurate and reliable.", "The writer warns that AI answers can be wrong."]
        ],
        hint: "Look at the sentence that begins “These risks suggest…”.",
        exp: "The writer argues that the key issue is how AI is used, and recommends teaching AI literacy.",
        ev: "the central issue is not the technology itself but the way it is used"
      },
      {
        skill: "Text structure",
        q: "How does the example of the two students in paragraph 4 develop the central idea?",
        opts: [
          ["It shows the same tool can weaken or strengthen learning.", null],
          ["It proves that history reports are too difficult for students.", "The difficulty of history reports is not the point."],
          ["It shows that AI writes better reports than most students.", "The example compares two ways of using AI, not AI against students."],
          ["It argues that students should never write drafts.", "The second student’s draft is presented as the better approach."]
        ],
        hint: "What is different about the two students, and what stays the same?",
        exp: "Both students used the same tool, but only one strengthened her thinking. This illustrates that use, not technology, is the central issue.",
        ev: "Both used the same tool, but only the second student strengthened her thinking."
      },
      {
        skill: "Author’s perspective",
        q: "What is the author’s overall attitude toward AI in education?",
        opts: [
          ["Cautiously optimistic: AI has real benefits if risks are managed.", null],
          ["Completely opposed to any use of AI", "The author describes AI’s value as a tutor."],
          ["Uncritically enthusiastic, seeing no problems or risks at all in using AI", "The author describes risks too."],
          ["Uninterested in the topic", "The author offers clear recommendations."]
        ],
        hint: "Consider both paragraph 2 and paragraph 3, then the recommendations.",
        exp: "The author recognizes AI’s potential and its risks, and recommends responsible use through AI literacy.",
        ev: "how can it improve learning rather than undermine it?"
      },
      {
        skill: "Critical reading",
        q: "Why does the author warn that AI answers can “sound confident but are simply wrong”?",
        opts: [
          ["To show that a confident tone does not prove information is accurate", null],
          ["To argue that confident people are usually wrong about facts", "The warning is about AI answers, not about confident people."],
          ["To suggest that AI is never useful", "The author also describes AI’s benefits."],
          ["To praise AI for its clear writing style", "The point is a warning, not praise."]
        ],
        hint: "What might a student who cannot evaluate the answer do?",
        exp: "The author warns that students may accept false information as fact if they trust the confident tone without checking.",
        ev: "A student who cannot evaluate the response may accept false information as fact."
      },
      {
        skill: "Evaluating evidence",
        q: "Which claim in the passage is supported by a specific example?",
        opts: [
          ["The way AI is used determines whether it helps learning.", null],
          ["AI tools collect data about users.", "This is stated as a concern without a specific example."],
          ["One teacher must help twenty-five or more students.", "This is a general description, not an example that supports a claim."],
          ["Machines lack judgment and creativity.", "This is stated in the conclusion without an example."]
        ],
        hint: "Find the paragraph that begins with “Consider…”.",
        exp: "The two-students example directly supports the claim that how AI is used determines its effect on learning.",
        ev: "Consider two students writing a history report."
      },
      {
        skill: "Drawing conclusions",
        q: "Based on the passage, which assignment would teachers who follow the author’s advice most likely favor?",
        opts: [
          ["An oral explanation of a project the student completed personally", null],
          ["A take-home essay with no discussion", "This is the type of task AI can easily complete for a student."],
          ["A worksheet copied from the internet", "This does not require personal reflection."],
          ["A multiple-choice quiz completed at home with any tools the student wants", "Work done at home with any tools may not show the student’s own understanding."]
        ],
        hint: "Read the last sentence of paragraph 5.",
        exp: "The author says teachers may emphasize in-class writing, oral explanations, and projects requiring personal reflection.",
        ev: "placing more emphasis on in-class writing, oral explanations, and projects that require personal reflection"
      },
      {
        skill: "Comparing viewpoints",
        q: "How did schools’ first responses to AI chatbots differ?",
        opts: [
          ["Some banned the tools; others asked how AI could improve learning.", null],
          ["All schools banned the tools immediately and permanently.", "The passage describes different responses."],
          ["All schools required students to use AI.", "No school in the passage required AI. Read the sentences that begin “Some schools” and “Others”."],
          ["Schools ignored AI completely.", "Schools reacted in different ways."]
        ],
        hint: "Read the last two sentences of paragraph 1.",
        exp: "Some schools banned AI tools, while others asked how AI could improve learning.",
        ev: "Some schools quickly banned the tools. Others began to ask a different question"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 1, the word “undermine” most nearly means…",
        opts: [
          ["weaken", null],
          ["support", "This is the opposite. The sentence contrasts “improve” with “undermine”."],
          ["measure", "The contrast with “improve” shows a negative meaning."],
          ["celebrate", "This does not fit the contrast with “improve”."]
        ],
        hint: "The sentence contrasts “improve learning” with “undermine it”.",
        exp: "Because “undermine” is contrasted with “improve,” it means to weaken or damage.",
        ev: "how can it improve learning rather than undermine it?"
      }
    ]
  },
  {
    id: "r5-04",
    level: 5,
    title: "The Hidden Cost of Fast Fashion",
    category: "Environment",
    topic: "Argument and evidence",
    status: "retained",
    text: [
      "A T-shirt that costs less than a sandwich may seem like a bargain. For millions of shoppers, fast fashion, meaning cheap and trendy clothing produced quickly and in huge quantities, has made it possible to buy new outfits every week. But the low price on the label hides costs that are paid elsewhere: by the environment and by the workers who make the clothes.",
      "Consider water. Growing cotton requires enormous amounts of it. According to frequently cited estimates, producing a single cotton T-shirt can use around 2,700 liters of water. Dyeing and finishing fabrics also release chemicals into rivers in some manufacturing regions, harming ecosystems and the communities that depend on them.",
      "The problem continues after we buy. Because fast fashion is designed to follow short-lived trends, many garments are worn only a few times before being thrown away. Much of this clothing ends up in landfills, and items made from synthetic fibers such as polyester can take many years to break down.",
      "The human cost is equally serious. In 2013, the Rana Plaza factory building in Bangladesh collapsed, killing more than 1,100 garment workers. Investigations revealed that workers had been ordered to enter the building even though cracks had appeared in its walls the day before. The disaster drew global attention to unsafe conditions in parts of the industry.",
      "Defenders of fast fashion argue that it gives people with limited budgets access to fashionable clothing and provides millions of jobs in developing countries. These points deserve consideration; simply refusing to buy cheap clothing could hurt the very workers it aims to protect.",
      "A more effective response may lie in changing habits. Consumers can buy fewer, higher-quality items, repair and swap clothes, and support brands that are transparent about their factories. The question is not whether we wear clothes, but whether we value them enough to keep them."
    ],
    before: {
      words: [
        { word: "bargain", def: "Something bought for a low price.", ex: "The shirt was a bargain." },
        { word: "garments", def: "Pieces of clothing.", ex: "The factory makes thousands of garments." },
        { word: "synthetic", def: "Made by people, not natural.", ex: "Polyester is a synthetic fiber." },
        { word: "transparent", def: "Open and honest about how things are done.", ex: "The company is transparent about its factories." }
      ],
      predict: "Why might a very cheap T-shirt have hidden costs?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Fast fashion’s low price hides costs that changing habits can reduce.", null],
          ["Cotton should be banned because growing it uses too much water.", "Water use is one cost, but the writer does not call for a ban."],
          ["Fast fashion has no benefits for anyone.", "The writer accepts that defenders make points that “deserve consideration”."],
          ["People should stop buying clothes completely in order to protect workers.", "The writer warns that refusing to buy could hurt workers."]
        ],
        hint: "Read the last sentence of paragraph 1 and the final paragraph.",
        exp: "The writer argues that cheap prices hide costs paid by the environment and workers, and recommends changing buying habits.",
        ev: "the low price on the label hides costs that are paid elsewhere: by the environment and by the workers who make the clothes"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer compare a T-shirt to a sandwich in the first sentence?",
        opts: [
          ["To show how cheap fast fashion seems before revealing its costs", null],
          ["To argue that food is too expensive", "The comparison is about clothing prices."],
          ["To suggest that people should spend money on food instead of clothes", "The comparison is about price, not advice about food."],
          ["To show that cotton is used in food", "Cotton and food are not connected here."]
        ],
        hint: "What does the next part of paragraph 1 reveal about that low price?",
        exp: "The comparison makes the low price vivid, which sets up the writer’s argument that the price hides other costs.",
        ev: "A T-shirt that costs less than a sandwich may seem like a bargain."
      },
      {
        skill: "Evaluating evidence",
        q: "Why does the writer describe the water figure as coming from “frequently cited estimates”?",
        opts: [
          ["To show the number is a common estimate, not an exact measurement", null],
          ["To show the number has been proven false", "The writer uses the number as support, not as a false claim."],
          ["To hide where the number came from", "The phrase actually tells readers what kind of figure it is."],
          ["To show that every single T-shirt uses exactly 2,700 liters of water", "“Estimates” means the number is approximate, not exact."]
        ],
        hint: "What is the difference between an estimate and an exact measurement?",
        exp: "By calling it an estimate, the writer signals that the number is approximate. This is careful, honest use of evidence.",
        ev: "According to frequently cited estimates, producing a single cotton T-shirt can use around 2,700 liters of water."
      },
      {
        skill: "Cause and effect",
        q: "According to paragraph 3, why are many fast fashion garments thrown away quickly?",
        opts: [
          ["They are designed to follow short-lived trends.", null],
          ["They are too expensive to keep.", "Fast fashion is described as cheap."],
          ["They are made from cotton, which breaks down quickly.", "The passage says synthetic fibers take years to break down; it does not say this about cotton."],
          ["Laws require people to replace clothes.", "No such law is mentioned."]
        ],
        hint: "Find the word “Because” in paragraph 3.",
        exp: "Because fast fashion follows short-lived trends, many garments are worn only a few times.",
        ev: "Because fast fashion is designed to follow short-lived trends, many garments are worn only a few times before being thrown away."
      },
      {
        skill: "Evaluating evidence",
        q: "Which detail best shows that the Rana Plaza disaster could have been prevented?",
        opts: [
          ["Workers were ordered inside although cracks appeared the day before.", null],
          ["The building was in Bangladesh.", "The location alone does not show the disaster was preventable."],
          ["More than 1,100 workers were killed.", "This shows how serious it was, not that it was preventable."],
          ["It drew global attention to working conditions in the industry.", "This happened after the disaster. It does not show it was preventable."]
        ],
        hint: "Look for a warning sign that people knew about.",
        exp: "The cracks were a visible warning the day before. Ordering workers inside anyway shows the disaster could have been avoided.",
        ev: "workers had been ordered to enter the building even though cracks had appeared in its walls the day before"
      },
      {
        skill: "Comparing viewpoints",
        q: "What do defenders of fast fashion argue?",
        opts: [
          ["It offers cheap clothing to many people and provides many jobs.", null],
          ["It uses less water and energy than other large industries.", "The passage does not make this claim."],
          ["It never harms the environment.", "Defenders do not claim this in the passage."],
          ["Clothing should be worn for many years.", "This is the writer’s recommendation, not the defenders’ argument."]
        ],
        hint: "Read paragraph 5.",
        exp: "Defenders say fast fashion helps people with limited budgets and provides millions of jobs in developing countries.",
        ev: "it gives people with limited budgets access to fashionable clothing and provides millions of jobs in developing countries"
      },
      {
        skill: "Critical reading",
        q: "Why does the writer say that simply refusing to buy cheap clothing “could hurt the very workers it aims to protect”?",
        opts: [
          ["To admit the issue is complex because workers need their jobs", null],
          ["To argue that workers do not need protection", "The writer is concerned about workers’ safety."],
          ["To encourage readers to buy as much fast fashion as they possibly can", "The writer recommends buying fewer items."],
          ["To blame the workers themselves for problems in the industry", "The writer does not blame workers."]
        ],
        hint: "Who would lose income if demand suddenly disappeared?",
        exp: "The writer recognizes that boycotts could cost workers their jobs, so a thoughtful solution must avoid harming them.",
        ev: "simply refusing to buy cheap clothing could hurt the very workers it aims to protect"
      },
      {
        skill: "Drawing conclusions",
        q: "Which action best matches the writer’s recommendations?",
        opts: [
          ["Repairing a favorite jacket instead of buying a new one", null],
          ["Buying a new outfit every week because the prices are low", "This is the habit the writer criticizes."],
          ["Throwing away clothes after wearing them twice", "This adds to landfill waste."],
          ["Choosing brands that keep their factories secret", "The writer recommends brands that are transparent."]
        ],
        hint: "Reread the list in the final paragraph.",
        exp: "The writer recommends buying fewer items, repairing and swapping clothes, and supporting transparent brands.",
        ev: "Consumers can buy fewer, higher-quality items, repair and swap clothes, and support brands that are transparent about their factories."
      }
    ]
  },
  {
    id: "r5-05",
    level: 5,
    title: "Is Convenience Making Us Less Independent?",
    category: "Critical Thinking",
    topic: "Critical thinking",
    status: "revised",
    revisionNote: "Split two 35-word sentences; replaced “remarkably” and “occasionally” with common words.",
    text: [
      "Not long ago, finding a new restaurant required asking friends, reading a map, and perhaps getting lost along the way. Today, an app can recommend a restaurant and guide us there turn by turn. It can even order our meal before we arrive. Technology has made daily life very convenient. But some thinkers ask an uncomfortable question: as machines do more for us, are we losing the ability to do things for ourselves?",
      "There is some evidence for this concern. A well-known study of London taxi drivers, who must memorize thousands of streets, found that a part of the brain linked to spatial memory was larger in experienced drivers. Other research suggests that people who rely heavily on GPS navigation may develop weaker mental maps of their surroundings. Similarly, when we know information is stored online, we may make less effort to remember it ourselves. Some psychologists call this pattern the “Google effect.”",
      "However, the history of technology suggests a more complicated picture. When calculators became common, critics feared that people would forget how to do arithmetic. In some ways they were right; few adults now perform long division by hand. Yet calculators also freed time for more complex problem-solving. Every major tool, from writing to the printing press, has changed which skills people practice.",
      "The real issue, then, may be choice rather than convenience itself. Using a navigation app in an unfamiliar city is sensible. Using it every day on the same short route, without ever noticing landmarks, may weaken a useful skill. Ordering meals online saves time, but never learning to cook means depending on others for something basic.",
      "A reasonable approach is to use convenience deliberately. We can ask ourselves which abilities we want to keep, such as finding our way, cooking a meal, or remembering important facts. Then we can practice them sometimes, even when a machine could do the job faster. Convenience is a powerful servant. The danger arises only when we forget that we are supposed to be its master."
    ],
    before: {
      words: [
        { word: "convenient", def: "Easy and useful.", ex: "Online shopping is convenient." },
        { word: "spatial", def: "Related to space and the position of things.", ex: "Map reading uses spatial memory." },
        { word: "deliberately", def: "On purpose, after careful thinking.", ex: "I deliberately leave my phone in my bag." },
        { word: "landmarks", def: "Buildings or places that help you know where you are.", ex: "The tower is a famous landmark." }
      ],
      predict: "Are there skills you no longer practice because a phone does it for you?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Convenience is fine if we use it deliberately to keep important skills.", null],
          ["Technology has made people completely helpless in daily life.", "The writer presents a balanced view, not this extreme one."],
          ["People should stop using navigation apps.", "The writer says using them in an unfamiliar city is sensible."],
          ["Calculators have destroyed math education.", "The writer says calculators also freed time for complex problems."]
        ],
        hint: "Read the first sentence of paragraph 4 and the first sentence of paragraph 5.",
        exp: "The writer concludes that the issue is choice, and recommends using convenience deliberately.",
        ev: "A reasonable approach is to use convenience deliberately."
      },
      {
        skill: "Evaluating evidence",
        q: "What does the study of London taxi drivers suggest?",
        opts: [
          ["Regular navigation practice may be linked to a larger memory area of the brain.", null],
          ["Taxi drivers have poor memory.", "The study found a LARGER memory-related brain area."],
          ["Using GPS navigation every day makes the part of the brain linked to memory larger.", "The study was about taxi drivers who memorize streets, not about GPS users."],
          ["London is the hardest city to drive in.", "The study does not compare cities."]
        ],
        hint: "What do London taxi drivers have to do, and what was larger in experienced drivers?",
        exp: "Drivers who memorize thousands of streets had a larger brain area linked to spatial memory, suggesting practice matters.",
        ev: "a part of the brain linked to spatial memory was larger in experienced drivers"
      },
      {
        skill: "Vocabulary in context",
        q: "What is the “Google effect,” as described in the passage?",
        opts: [
          ["Remembering less because we know information is stored online", null],
          ["Searching online faster and more often than other people of your age", "This is not the effect described."],
          ["Forgetting how to use a computer", "The passage does not say this."],
          ["Remembering everything we read online for a long time", "The effect is the opposite: we make less effort to remember."]
        ],
        hint: "The writer explains the idea just before naming it.",
        exp: "The passage describes the Google effect as making less effort to remember information we know is stored online.",
        ev: "when we know information is stored online, we may make less effort to remember it ourselves"
      },
      {
        skill: "Text structure",
        q: "What is the role of paragraph 3 in the passage?",
        opts: [
          ["It complicates the concern: tools have always changed which skills we use.", null],
          ["It gives more evidence that modern technology is harmful to us.", "Paragraph 3 adds a different, more balanced point."],
          ["It concludes the passage.", "The conclusion is in paragraph 5."],
          ["It tells a personal story about the writer learning to drive.", "There is no personal story."]
        ],
        hint: "Look at the first word of paragraph 3 and the examples it gives.",
        exp: "After evidence for the concern, paragraph 3 uses history (calculators, writing, the printing press) to show a more complicated picture.",
        ev: "However, the history of technology suggests a more complicated picture."
      },
      {
        skill: "Comparing viewpoints",
        q: "How does the calculator example support a balanced view?",
        opts: [
          ["People lost some skills but gained time for harder problems.", null],
          ["It proves calculators should be banned.", "The writer does not suggest banning them."],
          ["It shows that the critics of calculators were completely wrong about them.", "The example admits some skills were lost."],
          ["It shows people never used arithmetic.", "The passage does not say people stopped using arithmetic. Read the sentence that begins “Yet calculators”."]
        ],
        hint: "Find “In some ways they were right” and “Yet”.",
        exp: "The writer admits some arithmetic skills declined but notes calculators freed time for more complex thinking.",
        ev: "Yet calculators also freed time for more complex problem-solving."
      },
      {
        skill: "Inference",
        q: "Which situation would the writer most likely consider a sensible use of convenience?",
        opts: [
          ["Using GPS to find a hotel in a city you are visiting", null],
          ["Using GPS every day on your short walk to school", "The writer says this may weaken a useful skill."],
          ["Never learning to cook because food can be delivered", "The writer warns this creates dependence."],
          ["Relying on your phone to remember every important fact", "The writer suggests practicing remembering important facts."]
        ],
        hint: "Reread the examples in paragraph 4.",
        exp: "The writer says using a navigation app in an unfamiliar city is sensible.",
        ev: "Using a navigation app in an unfamiliar city is sensible."
      },
      {
        skill: "Critical reading",
        q: "What does the writer mean by “Convenience is a powerful servant… we are supposed to be its master”?",
        opts: [
          ["We should control technology instead of letting it control our abilities.", null],
          ["We should hire servants to do our work.", "This is a metaphor, not literal advice."],
          ["Technology is more powerful than people, so it cannot really be controlled.", "The writer says we should be the master."],
          ["Convenience is always dangerous.", "The writer says the danger arises “only” when we forget to stay in control."]
        ],
        hint: "This is a metaphor. Who should give the orders: the servant or the master?",
        exp: "The metaphor means convenience should serve our goals, not decide which abilities we lose.",
        ev: "The danger arises only when we forget that we are supposed to be its master."
      },
      {
        skill: "Author’s purpose",
        q: "What is the author’s main purpose?",
        opts: [
          ["To encourage readers to think critically about how they use convenience", null],
          ["To advertise navigation apps", "The writer does not promote any product."],
          ["To explain how GPS technology works", "The technology itself is not explained."],
          ["To argue that life was better before modern technology existed", "The writer is balanced, not against technology."]
        ],
        hint: "Look at the question in paragraph 1 and the advice in paragraph 5.",
        exp: "The writer raises a question, examines evidence on both sides, and encourages thoughtful, deliberate use.",
        ev: "We can ask ourselves which abilities we want to keep"
      }
    ]
  },
  {
    id: "r5-06",
    level: 5,
    title: "The Ethics of Social Media Algorithms",
    category: "Society",
    topic: "Analytical",
    status: "revised",
    revisionNote: "Split a 44-word sentence and a long list sentence; replaced “provokes”, “maximize engagement”, and “sensational”.",
    text: [
      "Every time you open a social media app, you see a feed that seems almost perfectly designed for you. That is because it is. Behind the screen, computer programs called algorithms decide which posts, videos, and advertisements appear, and in what order. These systems study your behavior: what you watch, like, and share, and even how long you look at a post. Then they predict what will keep you scrolling.",
      "From a business perspective, this makes sense. Most social media platforms earn money from advertising, and the longer users stay, the more ads they see. An algorithm that captures attention is therefore valuable. Users also benefit in some ways: a student interested in astronomy can discover excellent science videos she might never have found on her own.",
      "The ethical questions arise when the goals of the platform and the well-being of the user do not match. Content that causes strong emotions, especially anger, usually gets more likes, comments, and shares. An algorithm designed to get as much engagement as possible may therefore promote shocking or misleading content. This happens not because anyone intends harm, but because such content performs well. Critics also worry about “filter bubbles,” in which users mainly see opinions that confirm what they already believe.",
      "Young users raise additional concerns. Features such as endless scrolling and autoplay can make it difficult to stop. Some research has linked heavy social media use with poorer sleep and lower well-being among teenagers. However, scientists continue to debate how strong these effects are and which comes first.",
      "Who is responsible? Some argue that companies should redesign algorithms to value accuracy and well-being, not only attention. Others call for government regulation and greater transparency. Still others emphasize personal responsibility: users can adjust settings, follow diverse sources, and set limits on their time.",
      "Perhaps the most important step is awareness. A feed is not a neutral window on the world. It is a carefully selected view, shaped by choices that someone, somewhere, has programmed."
    ],
    before: {
      words: [
        { word: "algorithms", def: "Sets of computer instructions that make decisions.", ex: "Algorithms choose the videos you see." },
        { word: "ethical", def: "Related to what is right and wrong.", ex: "It is an ethical question." },
        { word: "engagement", def: "How much people react, for example by liking or sharing.", ex: "The post had high engagement." },
        { word: "transparency", def: "Being open so people can see how something works.", ex: "Users want more transparency from apps." }
      ],
      predict: "Who decides which videos appear in your social media feed?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Algorithms shape what we see to hold attention, raising ethical questions.", null],
          ["Social media algorithms are completely harmless to their users.", "The writer raises several concerns."],
          ["Users should delete all social media apps.", "The writer suggests awareness and responsible use, not deleting apps."],
          ["Advertising is the only real problem with social media platforms and apps today.", "Advertising is one part of the explanation, not the only problem."]
        ],
        hint: "Consider paragraphs 1, 3, and 5 together.",
        exp: "The passage explains how algorithms work, why they can conflict with users’ well-being, and who might be responsible.",
        ev: "The ethical questions arise when the goals of the platform and the well-being of the user do not match."
      },
      {
        skill: "Cause and effect",
        q: "Why do platforms want users to stay longer?",
        opts: [
          ["Longer use means users see more ads, which earns money.", null],
          ["Longer use helps users sleep better.", "The passage links heavy use with POORER sleep."],
          ["Governments require users to stay online.", "Governments are not mentioned here. Find the sentence that explains how platforms earn money."],
          ["Algorithms cannot work properly if users leave too quickly.", "The passage gives a business reason: advertising."]
        ],
        hint: "Read paragraph 2.",
        exp: "Platforms earn money from advertising, and longer use means more ads seen.",
        ev: "Most social media platforms earn money from advertising, and the longer users stay, the more ads they see."
      },
      {
        skill: "Evaluating evidence",
        q: "How does the writer treat research about social media and teenagers’ well-being?",
        opts: [
          ["The writer reports a link but says scientists still debate it.", null],
          ["The writer says the research proves social media causes poor sleep.", "The writer is careful: a link is not proof of cause."],
          ["The writer rejects the research as false.", "The writer reports it without rejecting it."],
          ["The writer ignores research completely.", "Paragraph 4 discusses research."]
        ],
        hint: "Look at the sentence that begins with “However” in paragraph 4.",
        exp: "The writer carefully reports the link while acknowledging uncertainty about how strong the effects are and which comes first.",
        ev: "However, scientists continue to debate how strong these effects are and which comes first."
      },
      {
        skill: "Inference",
        q: "Why might an algorithm promote misleading content even if no one intends harm?",
        opts: [
          ["Such content often gets more engagement, which the algorithm rewards.", null],
          ["Programmers want users to believe false information on purpose.", "The question says no one intends harm."],
          ["Misleading content is cheaper to produce.", "Cost is not discussed."],
          ["Users ask the algorithm for misleading content.", "The passage does not say users ask for it. Read the part that explains why such content spreads."]
        ],
        hint: "What is the algorithm designed to get as much as possible?",
        exp: "An algorithm built to get as much engagement as possible promotes whatever performs well, and emotional or misleading content often does.",
        ev: "not because anyone intends harm, but because such content performs well"
      },
      {
        skill: "Vocabulary in context",
        q: "What are “filter bubbles”?",
        opts: [
          ["Seeing mainly opinions that match what you already believe", null],
          ["Tools that block advertisements", "This is not the meaning in the passage."],
          ["Settings that improve the quality of photos and videos", "Filter bubbles are not about image quality."],
          ["Groups of users who choose to talk only about one topic", "A filter bubble is created by the algorithm, not by a chosen topic group."]
        ],
        hint: "The writer explains the term in the same sentence.",
        exp: "The passage defines filter bubbles as situations where users mainly see opinions that confirm their beliefs.",
        ev: "in which users mainly see opinions that confirm what they already believe"
      },
      {
        skill: "Comparing viewpoints",
        q: "Which solution comes from people who emphasize personal responsibility?",
        opts: [
          ["Users should follow diverse sources and set limits on their time.", null],
          ["Companies should redesign algorithms.", "This view places responsibility on companies."],
          ["Governments should regulate platforms in order to protect young users online.", "This solution relies on governments, not personal responsibility."],
          ["Advertising should be banned.", "This is not mentioned."]
        ],
        hint: "Read the last sentence of paragraph 5.",
        exp: "Those who emphasize personal responsibility say users can adjust settings, follow diverse sources, and limit their time.",
        ev: "users can adjust settings, follow diverse sources, and set limits on their time"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer include the example of the student interested in astronomy?",
        opts: [
          ["To show that algorithms can also benefit users", null],
          ["To argue that science videos are misleading", "The videos are described as excellent."],
          ["To show that students should avoid social media", "The example is positive."],
          ["To prove that algorithms always serve users’ well-being", "Paragraph 3 shows they do not always."]
        ],
        hint: "Look at the words “Users also benefit in some ways”.",
        exp: "The example balances the discussion by showing a real benefit of personalized recommendations.",
        ev: "Users also benefit in some ways"
      },
      {
        skill: "Drawing conclusions",
        q: "What does the writer mean by “A feed is not a neutral window on the world”?",
        opts: [
          ["We see a selected view shaped by programs, not the whole of reality.", null],
          ["Our screens show the world exactly as it is, without any human choices.", "The writer says the opposite."],
          ["Social media apps should have bigger windows.", "This is a metaphor, not literal."],
          ["Feeds are always unfair to users.", "The writer stresses awareness, not that feeds are always unfair."]
        ],
        hint: "Read the sentence that follows it.",
        exp: "The writer explains that a feed is a carefully selected view shaped by someone’s programming.",
        ev: "It is a carefully selected view, shaped by choices that someone, somewhere, has programmed."
      }
    ]
  },
  {
    id: "r5-07",
    level: 5,
    title: "Why Critical Thinking Matters in the Digital Age",
    category: "Critical Thinking",
    topic: "Explanatory",
    status: "retained",
    text: [
      "We live in an age of information abundance. In a single afternoon, a student can read news from five continents, watch lectures from leading universities, and scroll through hundreds of opinions. Yet more information does not automatically produce better understanding. To make sense of it, we need critical thinking: the ability to analyze claims, evaluate evidence, and reach reasoned conclusions.",
      "One reason critical thinking matters is that our minds use shortcuts that can mislead us. Psychologists describe confirmation bias as the tendency to notice and believe information that supports what we already think, while ignoring evidence that challenges it. A football fan, for example, may remember every unfair decision against his team but forget the ones in its favor.",
      "Critical thinkers also recognize common errors in reasoning. One frequent error is confusing correlation with causation. Suppose a report shows that students who eat breakfast earn higher grades. It is tempting to conclude that breakfast causes better grades. However, other factors may explain the connection: students who eat breakfast may also sleep more or have more support at home. Without further evidence, we cannot be sure which factor matters.",
      "Another error is the appeal to popularity, which means assuming something is true because many people believe it. A video with ten million views is popular, but popularity is not proof.",
      "Fortunately, critical thinking can be practiced. When we meet a claim, we can ask a few simple questions: What is the evidence? Who is making this claim, and what might they gain? Are there other possible explanations? These questions do not require advanced knowledge, only a willingness to slow down.",
      "Critical thinking is sometimes misunderstood as doubting everything. In fact, it means matching the strength of our belief to the strength of the evidence: accepting claims when the evidence is strong, and remaining cautious when it is weak."
    ],
    before: {
      words: [
        { word: "abundance", def: "A very large amount of something.", ex: "We have an abundance of information online." },
        { word: "popularity", def: "Being liked or followed by many people.", ex: "The video’s popularity grew quickly." },
        { word: "correlation", def: "A connection between two things that happen together.", ex: "There is a correlation between sleep and grades." },
        { word: "causation", def: "When one thing makes another thing happen.", ex: "Correlation is not the same as causation." }
      ],
      predict: "How do you decide whether to believe something you read online?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Critical thinking helps us handle abundant information and avoid errors.", null],
          ["Students should read much less information online every day.", "The writer does not ask us to read less."],
          ["Breakfast causes higher grades.", "The writer uses this as an example of a conclusion we CANNOT be sure of."],
          ["Critical thinking means doubting everything that we read or watch online.", "The writer says critical thinking is not doubting everything."]
        ],
        hint: "Look at paragraph 1 and how the rest of the passage develops it.",
        exp: "The writer explains why critical thinking is needed, describes biases and errors, gives strategies, and clarifies what it really means.",
        ev: "To make sense of it, we need critical thinking"
      },
      {
        skill: "Vocabulary in context",
        q: "According to the passage, what is confirmation bias?",
        opts: [
          ["Noticing and believing information that supports what we already think", null],
          ["Checking facts carefully before believing any new information", "This describes good critical thinking, not a bias."],
          ["Changing our minds whenever we hear a new opinion", "This is not the definition given."],
          ["Believing information only from experts", "This is not mentioned."]
        ],
        hint: "The writer defines the term in paragraph 2.",
        exp: "Confirmation bias is the tendency to notice and believe information that supports our existing beliefs while ignoring challenges.",
        ev: "the tendency to notice and believe information that supports what we already think"
      },
      {
        skill: "Author’s purpose",
        q: "Why does the writer include the example of the football fan?",
        opts: [
          ["To illustrate confirmation bias with a familiar everyday situation", null],
          ["To argue that referees are unfair", "The example is about memory and belief, not referees."],
          ["To show that sports are more important to people than news", "The example is about bias, not about what is more important."],
          ["To explain the rules of football", "No rules are explained."]
        ],
        hint: "What does the fan remember and forget?",
        exp: "The fan remembers decisions that support his belief and forgets others, a clear illustration of confirmation bias.",
        ev: "may remember every unfair decision against his team but forget the ones in its favor"
      },
      {
        skill: "Evaluating evidence",
        q: "Why can’t we conclude from the report that breakfast causes better grades?",
        opts: [
          ["Other factors, like sleep or home support, might explain the link.", null],
          ["The report must be false.", "The writer does not say the report is false."],
          ["Students who eat breakfast always earn lower grades than students who do not.", "The report found the opposite connection."],
          ["Breakfast has no effect on health.", "The writer does not make this claim."]
        ],
        hint: "Read the sentence that begins “However, other factors…”.",
        exp: "A correlation does not prove causation; other factors could explain why breakfast-eaters earn higher grades.",
        ev: "other factors may explain the connection"
      },
      {
        skill: "Critical reading",
        q: "Which statement is an example of the appeal to popularity?",
        opts: [
          ["“This claim must be true because millions of people have shared it.”", null],
          ["“This claim is supported by several reliable scientific studies from universities.”", "This appeals to evidence, not popularity."],
          ["“I am not sure; I need more evidence.”", "This shows caution, not an error."],
          ["“Let me check who is making this claim.”", "This is a critical thinking question."]
        ],
        hint: "The writer defines the appeal to popularity in paragraph 4.",
        exp: "The appeal to popularity assumes something is true because many people believe or share it.",
        ev: "assuming something is true because many people believe it"
      },
      {
        skill: "Drawing conclusions",
        q: "A company advertises a product as “the best in the world.” Which question from the passage would a critical thinker ask FIRST about the company?",
        opts: [
          ["Who is making this claim, and what might they gain?", null],
          ["How many views and likes does the advertisement have?", "Popularity does not show whether a claim is true."],
          ["Do I already like this company?", "This could lead to confirmation bias."],
          ["Is the advertisement colorful?", "Appearance is not evidence."]
        ],
        hint: "Look at the list of questions in paragraph 5. Which one is about the speaker’s motives?",
        exp: "A company benefits from selling its product, so asking who makes the claim and what they gain is especially important.",
        ev: "Who is making this claim, and what might they gain?"
      },
      {
        skill: "Text structure",
        q: "How is the passage organized?",
        opts: [
          ["Why it is needed, common errors, strategies, and a common misunderstanding", null],
          ["It tells a story in chronological order.", "There is no single story."],
          ["It argues that people should completely stop using the internet as a source of news.", "The writer does not argue this."],
          ["It compares the education systems of two different countries.", "No countries are compared."]
        ],
        hint: "Summarize each paragraph in a few words.",
        exp: "The passage moves from the need for critical thinking, to biases and errors, to practical questions, and finally to a clarification.",
        ev: "Fortunately, critical thinking can be practiced."
      },
      {
        skill: "Inference",
        q: "According to the last paragraph, how should a critical thinker respond to a claim supported by weak evidence?",
        opts: [
          ["Remain cautious rather than fully accepting it", null],
          ["Reject it angrily and refuse to discuss it", "A critical thinker stays calm and open."],
          ["Accept it if many people seem to agree with it", "This is the appeal to popularity."],
          ["Ignore all evidence completely", "Critical thinkers pay close attention to evidence."]
        ],
        hint: "Read the last sentence carefully.",
        exp: "Critical thinkers match their belief to the evidence: they remain cautious when the evidence is weak.",
        ev: "remaining cautious when it is weak"
      }
    ]
  },
  {
    id: "r5-08",
    level: 5,
    title: "The Role of Young People in Environmental Change",
    category: "Environment",
    topic: "Argument",
    status: "revised",
    revisionNote: "Replaced low-frequency academic words (“biodegradable”, “administrators”, “economic trade-offs”) with explained, plainer wording.",
    text: [
      "Climate change, plastic pollution, and the loss of wildlife are often described as problems that today’s young people will inherit. That description is accurate, but it is incomplete. Young people are not only future victims of environmental problems; they are increasingly active participants in solving them.",
      "Their influence takes several forms. The most visible is activism. In 2018, the Swedish student Greta Thunberg began protesting outside her country’s parliament, and within a year millions of young people around the world had joined climate strikes. Such movements helped push environmental issues higher on political agendas.",
      "Yet focusing only on protests overlooks quieter contributions. Young scientists and engineers are developing new technologies, from packaging that breaks down naturally to apps that track energy use. In schools, students lead recycling programs, plant trees, and persuade school leaders to reduce waste. In Saudi Arabia, young volunteers have joined tree-planting and beach-cleaning activities, supporting national goals such as the Saudi Green Initiative.",
      "Young people also influence the adults around them. Research on family behavior suggests that children who learn about environmental issues at school can change their parents’ attitudes and habits, such as turning off lights or reducing food waste.",
      "Critics raise fair objections. Some argue that placing hope on youth allows adults and governments to avoid their own responsibilities, since the largest decisions about energy, industry, and transport are made by those in power. Others note that young people may lack the experience to understand difficult economic choices, such as how environmental rules can affect jobs.",
      "These objections do not reduce the value of youth participation, but they do clarify its limits. Young people cannot solve environmental problems alone, and they should not be expected to. Their role is most powerful when it is combined with informed decisions by governments, investment by businesses, and changes in everyday behavior across all generations.",
      "For students, the lesson is encouraging but realistic: meaningful action does not require fame. It requires knowledge, persistence, and the willingness to begin where you are."
    ],
    before: {
      words: [
        { word: "agendas", def: "Lists of the most important issues to deal with.", ex: "Education is high on the government’s agenda." },
        { word: "activism", def: "Working actively to cause social or political change.", ex: "Her activism made people care about the issue." },
        { word: "objections", def: "Reasons for disagreeing.", ex: "The plan received some objections." },
        { word: "persistence", def: "Continuing to try even when it is difficult.", ex: "Learning a language needs persistence." }
      ],
      predict: "What can students do to help the environment?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Youth help the environment in many ways but must work with adults.", null],
          ["Only famous activists can make a difference.", "The writer says meaningful action “does not require fame”."],
          ["Young people should try to solve environmental problems by themselves.", "The writer says young people must work with adults and institutions."],
          ["Protests are the only effective form of action.", "The writer stresses “quieter contributions” too."]
        ],
        hint: "Read paragraph 1 and paragraph 6 together.",
        exp: "The writer shows how young people contribute and concludes that their role is most powerful when combined with others’ efforts.",
        ev: "Their role is most powerful when it is combined with informed decisions by governments, investment by businesses, and changes in everyday behavior across all generations."
      },
      {
        skill: "Author’s purpose",
        q: "What is the purpose of the first paragraph?",
        opts: [
          ["To challenge the view that young people are only future victims", null],
          ["To explain the science of climate change", "No scientific explanation is given."],
          ["To describe Greta Thunberg’s life", "She is mentioned in paragraph 2."],
          ["To argue that environmental problems are not really serious", "The writer treats the problems as serious."]
        ],
        hint: "Look at the phrase “accurate, but it is incomplete”.",
        exp: "The writer accepts a common description but adds that young people are also active participants in solutions.",
        ev: "Young people are not only future victims of environmental problems; they are increasingly active participants in solving them."
      },
      {
        skill: "Text structure",
        q: "What shift does the writer make at the beginning of paragraph 3?",
        opts: [
          ["From highly visible activism to less visible contributions", null],
          ["From solutions to problems", "Paragraph 3 continues to describe contributions."],
          ["From the present to the distant past", "The paragraph describes current actions."],
          ["From the writer’s argument to a personal story about school", "There is no personal story."]
        ],
        hint: "Read the first sentence of paragraph 3.",
        exp: "The writer moves from protests (visible) to technology, school projects, and volunteering (quieter contributions).",
        ev: "Yet focusing only on protests overlooks quieter contributions."
      },
      {
        skill: "Evaluating evidence",
        q: "What evidence supports the claim that young people influence adults?",
        opts: [
          ["Research showing children can change their parents’ habits", null],
          ["Greta Thunberg’s protests in Sweden", "This shows activism, not influence on parents."],
          ["The development of new biodegradable packaging by students", "This is an example of innovation, not of influencing adults."],
          ["The objections raised by critics", "Objections do not support this claim."]
        ],
        hint: "Read paragraph 4.",
        exp: "The writer cites research on family behavior showing children can change parents’ habits.",
        ev: "Research on family behavior suggests that children who learn about environmental issues at school can change their parents’ attitudes and habits"
      },
      {
        skill: "Comparing viewpoints",
        q: "What is one concern raised by critics?",
        opts: [
          ["Hope in youth can let adults and governments avoid responsibility.", null],
          ["Young people do not really care about the environment.", "Critics do not question young people’s concern. Read paragraph 5 to find what they worry about."],
          ["Recycling programs do not work.", "This is not mentioned."],
          ["Schools should not spend valuable class time on environmental topics.", "Class time is not the critics’ point. Their concern in paragraph 5 is about who takes responsibility."]
        ],
        hint: "Read paragraph 5.",
        exp: "Critics argue that focusing on youth lets those in power avoid their own responsibilities.",
        ev: "placing hope on youth allows adults and governments to avoid their own responsibilities"
      },
      {
        skill: "Author’s perspective",
        q: "How does the writer respond to the critics?",
        opts: [
          ["The writer accepts their limits but still values youth action.", null],
          ["The writer completely rejects every one of their objections as wrong.", "The writer accepts that the critics make useful points."],
          ["The writer agrees that youth action is pointless.", "The writer says objections do not reduce its value."],
          ["The writer ignores them.", "Paragraph 6 responds directly."]
        ],
        hint: "Read the first sentence of paragraph 6.",
        exp: "The writer says the objections clarify the limits of youth participation but do not reduce its value.",
        ev: "These objections do not reduce the value of youth participation, but they do clarify its limits."
      },
      {
        skill: "Drawing conclusions",
        q: "Which student action best fits the lesson in the final paragraph?",
        opts: [
          ["Starting a recycling program at her own school", null],
          ["Waiting until she becomes famous before acting", "The writer says action does not require fame."],
          ["Deciding that only governments can help", "The writer encourages students to act."],
          ["Giving up because one person cannot solve everything", "The writer encourages persistence."]
        ],
        hint: "What does meaningful action require, according to the last sentence?",
        exp: "Beginning “where you are” with knowledge and persistence fits a student starting a local school project.",
        ev: "the willingness to begin where you are"
      },
      {
        skill: "Vocabulary in context",
        q: "In paragraph 1, the word “inherit” most nearly means…",
        opts: [
          ["receive from people who came before", null],
          ["solve completely", "The sentence describes receiving problems, not solving them."],
          ["create by themselves from nothing", "To inherit is to receive something from others."],
          ["forget about", "This does not fit the meaning."]
        ],
        hint: "Think about what happens to problems when one generation passes them to the next.",
        exp: "To inherit means to receive something from an earlier generation. Here, young people receive environmental problems.",
        ev: "problems that today’s young people will inherit"
      }
    ]
  },
  {
    id: "r5-09",
    level: 5,
    title: "Should Academic Success Be Measured by Exams?",
    category: "School Life",
    topic: "Evaluating viewpoints",
    status: "retained",
    text: [
      "For many students, a single number can feel like a judgment on years of effort. Final exams and standardized tests play a major role in school systems around the world, including university admission tests in Saudi Arabia. Yet educators continue to debate whether exams are the best way to measure academic success.",
      "Supporters of exams make several strong points. First, exams are relatively objective: every student answers the same questions under the same conditions, which makes comparisons fairer than relying only on a teacher’s impressions. Second, exams encourage students to review knowledge from an entire course. Third, they are efficient; thousands of students can be assessed in a short time.",
      "Critics, however, argue that exams measure only a narrow range of abilities. A two-hour test can show whether a student remembers formulas, but it reveals little about creativity, teamwork, or the ability to complete a long project. Furthermore, some students who understand the material well perform poorly because of anxiety, so their results do not accurately reflect what they know.",
      "There is also the question of what exams encourage teachers to do. When results carry high stakes, schools may spend large amounts of time on test practice, a pattern known as “teaching to the test.” This can narrow the curriculum, leaving less time for discussion, research, and the arts.",
      "Many education systems now use a combination of methods. Alongside exams, students may be assessed through projects, presentations, portfolios of written work, and practical tasks. Each method has weaknesses: projects can be harder to grade consistently, and group work can hide individual effort. But together, they can provide a fuller picture of a student’s abilities.",
      "Perhaps the most useful question is not whether exams should exist, but what role they should play. Exams can measure some things very well. The danger lies in treating them as the only measure that matters, because what we choose to measure often shapes what students believe is worth learning."
    ],
    before: {
      words: [
        { word: "standardized", def: "The same for everyone, with the same rules.", ex: "All students took a standardized test." },
        { word: "objective", def: "Fair; not influenced by personal feelings.", ex: "A multiple-choice test is more objective." },
        { word: "anxiety", def: "A strong feeling of worry.", ex: "Exam anxiety can lower scores." },
        { word: "portfolios", def: "Collections of a student’s work.", ex: "We keep our best essays in portfolios." }
      ],
      predict: "Is one exam a fair way to show what a student knows?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Exams are useful but should be combined with other methods.", null],
          ["Exams should be abolished in all schools.", "The writer says exams “can measure some things very well”."],
          ["Exams are the only fair way to measure students’ success at school.", "The writer says exams should not be the only measure."],
          ["Projects are always better than exams.", "The writer says projects also have weaknesses."]
        ],
        hint: "Read the final paragraph.",
        exp: "The writer weighs both sides and concludes that exams should play a role, but not be the only measure.",
        ev: "The danger lies in treating them as the only measure that matters"
      },
      {
        skill: "Comparing viewpoints",
        q: "Which argument is made by SUPPORTERS of exams?",
        opts: [
          ["Exams are objective because everyone answers the same questions.", null],
          ["Exams measure only a narrow range of what students are able to do.", "This is a criticism of exams."],
          ["Anxiety can make results inaccurate.", "This is a critics’ argument."],
          ["Exams lead to teaching to the test.", "This is a concern about exams."]
        ],
        hint: "Read paragraph 2.",
        exp: "Supporters argue that exams are relatively objective because conditions are the same for everyone.",
        ev: "every student answers the same questions under the same conditions"
      },
      {
        skill: "Evaluating arguments",
        q: "How does the point about anxiety challenge the use of exams?",
        opts: [
          ["It suggests some results may not show what students really know.", null],
          ["It proves that anxious students do not study hard enough.", "Anxiety affects performance, not effort."],
          ["It shows that exams are too easy.", "Difficulty is not the point."],
          ["It shows teachers grade unfairly.", "Grading fairness is not the point here."]
        ],
        hint: "Read the last sentence of paragraph 3.",
        exp: "If anxiety lowers performance, results do not accurately show knowledge, weakening the claim that exams are fair measures.",
        ev: "their results do not accurately reflect what they know"
      },
      {
        skill: "Vocabulary in context",
        q: "What does “teaching to the test” mean in the passage?",
        opts: [
          ["Spending large amounts of class time on test practice", null],
          ["Teaching students how to write their own test questions", "This is not what the phrase means."],
          ["Giving tests every day", "The phrase is about how teaching time is used."],
          ["Teaching only after the test is finished", "This is not the meaning. Read the sentence where the phrase “teaching to the test” appears."]
        ],
        hint: "The phrase is explained just before it appears.",
        exp: "The passage describes schools spending a lot of time on test practice, “a pattern known as teaching to the test.”",
        ev: "schools may spend large amounts of time on test practice, a pattern known as “teaching to the test.”"
      },
      {
        skill: "Critical reading",
        q: "Why does the writer mention the weaknesses of projects and group work in paragraph 5?",
        opts: [
          ["To show no method is perfect, so methods should be combined", null],
          ["To argue that exams are better than any other method", "The writer still supports combining methods."],
          ["To criticize students who do not work well in groups", "The writer criticizes the method, not students."],
          ["To change the topic", "The weaknesses are directly related to the argument."]
        ],
        hint: "What does the writer say about the methods “together”?",
        exp: "By admitting every method has weaknesses, the writer makes the case that a combination gives a fuller picture.",
        ev: "But together, they can provide a fuller picture of a student’s abilities."
      },
      {
        skill: "Cause and effect",
        q: "According to paragraph 4, what can happen when exam results carry high stakes?",
        opts: [
          ["Schools spend more time on test practice and less on other learning.", null],
          ["Students stop feeling anxious because they practice more.", "The passage does not say this."],
          ["Exams become shorter.", "Exam length is not discussed."],
          ["Teachers give fewer grades and much less homework during the school year.", "The passage does not say this."]
        ],
        hint: "Find the words “high stakes”.",
        exp: "High stakes can lead schools to focus on test practice, which narrows the curriculum.",
        ev: "This can narrow the curriculum, leaving less time for discussion, research, and the arts."
      },
      {
        skill: "Inference",
        q: "What does the writer imply in the final sentence: “what we choose to measure often shapes what students believe is worth learning”?",
        opts: [
          ["Students may value tested skills more and other skills less.", null],
          ["Students ignore everything that appears on tests.", "This is the opposite."],
          ["Measuring learning has no effect on what students value.", "The writer says measuring does shape what students value."],
          ["Students should design their own exams.", "The final sentence says nothing about students making exams. Think about what “shapes what students believe” means."]
        ],
        hint: "If only memory is tested, what might students think is important?",
        exp: "The writer suggests that students tend to value what is measured, so measuring only narrow skills can make other skills seem less important.",
        ev: "what we choose to measure often shapes what students believe is worth learning"
      },
      {
        skill: "Drawing conclusions",
        q: "Which assessment plan would the writer most likely support?",
        opts: [
          ["A final exam plus a research project and a presentation", null],
          ["One final exam that decides the whole grade", "The writer warns against relying on a single measure."],
          ["No assessment of any kind", "The writer supports assessment, using several methods."],
          ["Only group projects, with no individual work at all", "The writer notes weaknesses in group work too."]
        ],
        hint: "Read paragraph 5 again.",
        exp: "The writer supports combining exams with projects, presentations, and portfolios for a fuller picture.",
        ev: "Alongside exams, students may be assessed through projects, presentations, portfolios of written work, and practical tasks."
      }
    ]
  },
  {
    id: "r5-10",
    level: 5,
    title: "Innovation, Responsibility, and the Future of Work",
    category: "Society",
    topic: "Synthesis",
    status: "revised",
    revisionNote: "Explained “discriminate” and “automation”; replaced “technological literacy” and “productivity” with plainer wording.",
    text: [
      "Throughout history, new technologies have transformed the way people work. The steam engine moved workers from farms to factories. Computers replaced typewriters and created entire industries that did not exist before. Today, artificial intelligence and robotics are driving another transformation, and many young people wonder what kinds of jobs will be available when they graduate.",
      "Some predictions are worrying. Machines are increasingly capable of performing routine tasks, from sorting packages in warehouses to answering basic customer questions. Jobs that consist mainly of predictable, repetitive activities are therefore the most likely to change or disappear. However, history suggests that technology rarely eliminates work altogether. More often, it changes the tasks within jobs and creates new roles. Twenty years ago, few people worked as app developers or drone pilots.",
      "Reports by organizations such as the World Economic Forum regularly highlight skills that are growing in importance: analytical thinking, creativity, skill with technology, and the ability to keep learning. Interestingly, many of these skills are deeply human. A machine can analyze patterns in data, but deciding which problem is worth solving, and whether a solution is fair, requires human judgment.",
      "This raises the question of responsibility. An algorithm used to screen job applications might discriminate if it learns from biased historical data. In other words, it might treat some groups of people unfairly. Automation, which means using machines to do work, can help companies produce more. But it can also leave some workers without the training they need for new jobs. For this reason, many experts argue that companies and governments share a responsibility to retrain workers and to design technologies that are transparent and fair.",
      "Individuals have responsibilities too. In a rapidly changing economy, the most valuable qualification may be the willingness to learn new skills throughout life. A student who practices reading complex texts, solving unfamiliar problems, and communicating clearly is preparing not for one specific job, but for many possible futures.",
      "Saudi Arabia’s Vision 2030 reflects this outlook, developing new sectors such as tourism, entertainment, and renewable energy, alongside programs to build citizens’ skills. The future of work will not simply happen to the next generation. It will be shaped by the choices people make about how to use innovation responsibly."
    ],
    before: {
      words: [
        { word: "routine", def: "Done in the same way every time.", ex: "Machines are good at routine tasks." },
        { word: "eliminates", def: "Removes completely.", ex: "Technology rarely eliminates work." },
        { word: "discriminate", def: "To treat a person or group unfairly.", ex: "It is wrong to discriminate against people." },
        { word: "qualification", def: "A skill or certificate that makes you suitable for a job.", ex: "A degree is one kind of qualification." }
      ],
      predict: "What jobs do you think will be important in the future?"
    },
    questions: [
      {
        skill: "Central idea",
        q: "What is the central idea of the passage?",
        opts: [
          ["Work will change, so we need adaptable skills and responsible tech.", null],
          ["Robots will soon take every job, so learning new skills is pointless.", "The writer argues that skills matter more than ever."],
          ["Young people should all become app developers.", "App developers are one example of a new role."],
          ["Technology has never changed the way people work.", "The first paragraph says it has transformed work throughout history."]
        ],
        hint: "Combine the ideas in paragraphs 3, 4, and 5.",
        exp: "The writer explains how work is changing, which skills matter, and why companies, governments, and individuals share responsibility.",
        ev: "It will be shaped by the choices people make about how to use innovation responsibly."
      },
      {
        skill: "Text structure",
        q: "How does the writer use history in paragraphs 1 and 2?",
        opts: [
          ["To suggest technology usually changes jobs rather than ending work", null],
          ["To prove that the past was better than the present", "The writer does not make this claim."],
          ["To explain how steam engines work", "The mechanics are not explained."],
          ["To argue that new technology should be stopped before it spreads further", "The writer does not argue against new technology."]
        ],
        hint: "Find the sentence that begins “However, history suggests…”.",
        exp: "The writer uses past examples to show that technology tends to transform jobs and create new roles.",
        ev: "However, history suggests that technology rarely eliminates work altogether."
      },
      {
        skill: "Inference",
        q: "According to the passage, which job is MOST likely to change or disappear?",
        opts: [
          ["A job that mainly involves sorting packages in a warehouse", null],
          ["A job that requires deciding which problems are worth solving", "The writer says this requires human judgment."],
          ["A job designing fair and transparent technology", "This is a growing responsibility."],
          ["A job that requires creativity and analytical thinking", "These skills are growing in importance."]
        ],
        hint: "Which kinds of tasks are machines increasingly able to do?",
        exp: "Routine, predictable tasks such as sorting packages are the most likely to be automated.",
        ev: "Jobs that consist mainly of predictable, repetitive activities are therefore the most likely to change or disappear."
      },
      {
        skill: "Evaluating evidence",
        q: "Why does the writer refer to reports by the World Economic Forum?",
        opts: [
          ["To support the claim about growing skills with a well-known source", null],
          ["To criticize international organizations for making unreliable predictions", "The writer uses the reports as support, not to criticize."],
          ["To prove that machines have better judgment than people", "The writer argues the opposite."],
          ["To list the highest-paying jobs", "Salaries are not discussed."]
        ],
        hint: "What information do the reports provide?",
        exp: "The reports provide credible support for the claim that analytical thinking, creativity, and continued learning are becoming more important.",
        ev: "Reports by organizations such as the World Economic Forum regularly highlight skills that are growing in importance"
      },
      {
        skill: "Cause and effect",
        q: "According to the writer, how could an algorithm used for hiring discriminate?",
        opts: [
          ["It could learn from biased historical data.", null],
          ["It could refuse to read applications.", "This is not mentioned."],
          ["It could be programmed to prefer robots over people.", "The passage describes bias from historical data."],
          ["It could make the hiring process slower.", "Speed is not the concern."]
        ],
        hint: "Read the second sentence of paragraph 4.",
        exp: "An algorithm might discriminate if it learns from biased historical data.",
        ev: "might discriminate if it learns from biased historical data"
      },
      {
        skill: "Comparing viewpoints",
        q: "What responsibility does the writer give to INDIVIDUALS, compared with companies and governments?",
        opts: [
          ["Individuals should keep learning new skills throughout life.", null],
          ["Individuals should design fair algorithms for their companies.", "The writer gives this responsibility to companies and governments."],
          ["Individuals should retrain other workers.", "Retraining is assigned to companies and governments."],
          ["Individuals have no responsibility.", "Paragraph 5 begins “Individuals have responsibilities too.”"]
        ],
        hint: "Read paragraph 5.",
        exp: "Companies and governments should retrain workers and design fair technology; individuals should be willing to learn throughout life.",
        ev: "the most valuable qualification may be the willingness to learn new skills throughout life"
      },
      {
        skill: "Drawing conclusions",
        q: "Based on the passage, what is the best way for a student to prepare for the future of work?",
        opts: [
          ["Build flexible skills such as problem-solving and clear communication", null],
          ["Choose one specific job now and learn only its tasks", "The writer suggests preparing for “many possible futures”."],
          ["Avoid learning about technology", "Technological literacy is a growing skill."],
          ["Wait until it is clear which jobs will exist in the future", "The writer advises preparing now with flexible skills."]
        ],
        hint: "Reread the last sentence of paragraph 5.",
        exp: "The writer says practicing these skills prepares students for many possible futures, not one job.",
        ev: "is preparing not for one specific job, but for many possible futures"
      },
      {
        skill: "Author’s perspective",
        q: "What does the final paragraph suggest about the writer’s view of the future?",
        opts: [
          ["The future depends on people’s choices; it does not just happen.", null],
          ["The future is already decided by machines and technology.", "The writer says people’s choices shape the future."],
          ["Only Saudi Arabia will benefit from innovation.", "Saudi Arabia is one example."],
          ["Young people should be afraid of the future.", "The tone is constructive, not fearful."]
        ],
        hint: "Look at the last two sentences.",
        exp: "The writer says the future of work will be shaped by the choices people make, showing a hopeful, active perspective.",
        ev: "The future of work will not simply happen to the next generation."
      }
    ]
  }
]);
