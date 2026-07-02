// English strings — pure data, no logic. {placeholders} are filled by js/i18n.js.
// This file is ALSO the source of truth for regenerating voice clips (tools/check-voices.mjs).
window.YAKO_STRINGS = window.YAKO_STRINGS || {};
window.YAKO_STRINGS.en = {
  letterKey: "the letter {k}",
  numberKey: "the number {k}",
  find: "Find {key}!",
  starts: "{name} starts with {letter}. Find {letter}!",
  spell: "Let's spell {word}. Find the letter {letter}!",
  next: "Great! Now find {key}.",
  countIntro: "The next number is {num}. First, find the number {digit}!",
  sound: "{letter} says {sound}. {letter} is for {word}! Find the letter {letter}!",
  howMany: "How many {creatures}? Count them, then press the number!",
  mathAdd: "{a} {creatures} and {b} more {creatures}. How many all together?",
  mathSub: "There are {a} {creatures}. {b} swim away. How many are left?",
  doneSpell: "You spelled {word}! Amazing!",
  doneNum: "That's the number {word}! Amazing!",
  wrong: "Oops! That's {pressed}. Find {key}!",
  wrongCount: "Oops! Let's count the {creatures} again. How many?",
  wrongMath: "Oops! Count them again and try!",
  again: "Oops! Try again!",
  level: "Five stars! You finished level {level}! I'm so proud of you!",
  cheers: ["Great job!","You're doing so well!","Wow, you're so smart!","You're brilliant!","That's exactly right, well done!","I'm so proud of you!","Wonderful work!","You're a superstar!"],
  greet: "Hello! Let's play!",
  prompt: {
    letters: "Find the letter!", numbers: "Find the number!", both: "Find the key!",
    cat: "Find the key it starts with!", catNum: "Which one is it? Press the number!",
    spelling: "Spell the word!", counting: "Build the number!",
    sounds: "What sound? Find the letter!", countobj: "How many? Press the number!",
    math: "Add it up! Press the number!"
  },
  // English is the canonical key language — no name translations needed.
  names: {},
  creatures: {},
  // phonics: letter -> { sound, word, emoji }
  phonics: {
    A:{sound:'ah',word:'Apple',emoji:'🍎'}, B:{sound:'buh',word:'Ball',emoji:'⚽'}, C:{sound:'kuh',word:'Cat',emoji:'🐱'}, D:{sound:'duh',word:'Dog',emoji:'🐶'},
    E:{sound:'eh',word:'Egg',emoji:'🥚'}, F:{sound:'ff',word:'Fish',emoji:'🐟'}, G:{sound:'guh',word:'Goat',emoji:'🐐'}, H:{sound:'huh',word:'Hat',emoji:'🎩'},
    I:{sound:'ih',word:'Igloo',emoji:'🧊'}, J:{sound:'juh',word:'Jam',emoji:'🍓'}, K:{sound:'kuh',word:'Kite',emoji:'🪁'}, L:{sound:'ll',word:'Lion',emoji:'🦁'},
    M:{sound:'mm',word:'Moon',emoji:'🌙'}, N:{sound:'nn',word:'Nest',emoji:'🪺'}, O:{sound:'ah',word:'Orange',emoji:'🍊'}, P:{sound:'puh',word:'Pig',emoji:'🐷'},
    Q:{sound:'kwuh',word:'Queen',emoji:'👑'}, R:{sound:'rr',word:'Rainbow',emoji:'🌈'}, S:{sound:'sss',word:'Sun',emoji:'☀️'}, T:{sound:'tuh',word:'Tree',emoji:'🌳'},
    U:{sound:'uh',word:'Umbrella',emoji:'☂️'}, V:{sound:'vv',word:'Violin',emoji:'🎻'}, W:{sound:'wuh',word:'Whale',emoji:'🐳'}, X:{sound:'ks',word:'Fox',emoji:'🦊'},
    Y:{sound:'yuh',word:'Yo-yo',emoji:'🪀'}, Z:{sound:'zz',word:'Zebra',emoji:'🦓'}
  }
};
