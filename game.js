// ============================================================
//  CRIMSON MANOR — Full Game Data + Engine
//  Step 3: Story data (characters, rooms, clues, dialogue)
// ============================================================

// ── Pick the murderer randomly each playthrough ──────────────
const SUSPECTS = ['hale', 'vivienne', 'silas', 'florence', 'finch', 'celeste'];
const MURDERER = SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)];

// ── Characters ───────────────────────────────────────────────
const CHARACTERS = {

  hale: {
    name: 'Dr. Edmund Hale',
    emoji: '🧑‍⚕️',
    role: 'Personal Physician',
    personality: 'Cool, precise, speaks in clipped sentences. Never volunteers information.',
    secret: 'He altered Lord Harwick\'s medication dosage three days before the murder.',
    alibi: 'Claims he was in his room reading medical journals all evening.',
    alibi_broken_by: 'clue_hale_gloves', // clue that breaks this alibi
    guilt_tells: [
      'adjusts his cufflinks when lying',
      'refers to the victim in past tense before news was announced'
    ],
    // Dialogue: what they say at each stage of suspicion (0=innocent, 1=suspicious, 2=caught)
    dialogue: {
      greeting: [
        "A terrible business. Lord Harwick was my patient for eleven years.",
        "I've already told the others everything I know. Which isn't much.",
        "You're not a detective. But fine. Ask your questions."
      ],
      asked_about_victim: [
        "He was in declining health, yes. That's not unusual for a man his age.",
        "I won't discuss a patient's medical history. Professional ethics.",
        "...His health was fine. There was no reason he should have died."
      ],
      asked_about_alibi: [
        "I was in my room. Room 4, east wing. All evening.",
        "I didn't hear anything. The walls are thick in this manor.",
        "I had no reason to leave my room. None whatsoever."
      ],
      alibi_broken: [
        "Where did you find those? That means nothing.",
        "Gloves are a medical habit. I wear them constantly.",
        "...You're cleverer than I gave you credit for."
      ],
      accused: {
        correct: "You want a confession? Fine. He was going to ruin me. Expose a mistake I made years ago. One patient. One error. My entire career, gone. I adjusted his dosage. I didn't think— I didn't plan for it to— Yes. I did it.",
        wrong: "This is absurd. I am a physician. I save lives. You have the wrong person entirely."
      }
    }
  },

  vivienne: {
    name: 'Lady Vivienne Cross',
    emoji: '👩‍🦰',
    role: 'Socialite & Heir',
    personality: 'Theatrical, dramatic, uses humour to deflect. Laughs at the wrong moments.',
    secret: 'She is named in Lord Harwick\'s secret will — inheriting the entire estate.',
    alibi: 'Claims she was in the drawing room playing cards with Mr. Finch.',
    alibi_broken_by: 'clue_vivienne_will',
    guilt_tells: [
      'changes subject whenever the will is mentioned',
      'was seen near the cellar at 10pm'
    ],
    dialogue: {
      greeting: [
        "Oh darling, isn't this all dreadfully exciting? Horrible, of course. But exciting.",
        "I've been absolutely beside myself. Poor Harold. Poor, poor Harold.",
        "You look like someone who asks difficult questions. How refreshing."
      ],
      asked_about_victim: [
        "Harold was a complicated man. Generous to some. Ruthless to others.",
        "We were old friends. Very old. He invited me here personally, you know.",
        "He had enemies, obviously. Everyone with money does."
      ],
      asked_about_alibi: [
        "Arthur and I were playing cards. Gin rummy. He won, annoyingly.",
        "We were there from nine until well past midnight. Ask him yourself.",
        "I don't see why my evening needs to be accounted for in such detail."
      ],
      alibi_broken: [
        "That document is completely out of context.",
        "Harold wanted me to have the estate. That's affection, not motive.",
        "Lots of people inherit things without killing for them. Most people, in fact."
      ],
      accused: {
        correct: "Oh, you are good. Yes, fine. The will. He was going to change it — I found a letter on his desk. New solicitor coming Monday. Everything to some charity. Twenty years of friendship and he was going to cut me out for a donkey sanctuary. I'm not apologising.",
        wrong: "A murderer? Me? Darling, I couldn't even kill a spider. I make the housekeeper do it."
      }
    }
  },

  silas: {
    name: 'Mr. Silas Drummond',
    emoji: '🧔',
    role: 'Groundskeeper',
    personality: 'Blunt, suspicious of outsiders, speaks slowly and deliberately. Loyal to the land, not the lord.',
    secret: 'He\'d been blackmailing Lord Harwick for years over a buried scandal.',
    alibi: 'Claims he was locking up the garden gates at 9pm and then went to his cottage.',
    alibi_broken_by: 'clue_silas_letters',
    guilt_tells: [
      'knows the exact layout of the cellar without being asked',
      'his boots had fresh soil at midnight'
    ],
    dialogue: {
      greeting: [
        "I work the grounds. I don't involve myself in the house.",
        "Forty years I've kept this estate. Never had trouble before.",
        "Ask what you need to ask. I've got work to do."
      ],
      asked_about_victim: [
        "He paid me fair. That's all I'll say.",
        "Lord Harwick had his ways. I had mine. We understood each other.",
        "Not everyone who knew the man liked him. I'll say that much."
      ],
      asked_about_alibi: [
        "Garden gates. Nine o'clock. Same as every night.",
        "Then I went to my cottage. Ate supper. Slept.",
        "Nobody saw me, if that's what you're asking. I don't need witnesses."
      ],
      alibi_broken: [
        "Those letters are private property.",
        "That money was owed to me. Compensation for what I knew.",
        "He was going to stop the payments. Said he'd found a way to bury it deeper."
      ],
      accused: {
        correct: "Twenty three years I kept his secret. His son — the boy isn't his. I knew. I saw. He paid me to forget. When he said the payments were stopping, when he laughed at me — yes. I followed him to the cellar. I didn't plan it. But I don't regret it either.",
        wrong: "I've done things I'm not proud of. Killing a man isn't one of them. Look elsewhere."
      }
    }
  },

  florence: {
    name: 'Mrs. Florence Pruett',
    emoji: '👩‍🍳',
    role: 'Cook & Housekeeper',
    personality: 'Warm and motherly on the surface. Steel underneath. Protective of her family above all.',
    secret: 'Her son owes Lord Harwick a catastrophic gambling debt — Harwick was about to call it in.',
    alibi: 'Claims she was cleaning the kitchen after dinner service until 11pm.',
    alibi_broken_by: 'clue_florence_note',
    guilt_tells: [
      'prepared the victim\'s final drink herself and won\'t say what was in it',
      'her hands shook when the body was found — before anyone told her how he died'
    ],
    dialogue: {
      greeting: [
        "Twenty years I've cooked for this household. This is the worst day of all of them.",
        "If there's anything I can do to help, anything at all, you just ask.",
        "Lord Harwick was a difficult man. But he didn't deserve this."
      ],
      asked_about_victim: [
        "He was demanding. Particular about his food. But fair, I suppose.",
        "He had favourites among the staff. I wasn't one of them, lately.",
        "He'd been cold with me these past weeks. I don't know why."
      ],
      asked_about_alibi: [
        "The kitchen doesn't clean itself. I was scrubbing pots until gone eleven.",
        "You can check — the floors were still wet this morning.",
        "I didn't leave the kitchen all evening. Not once."
      ],
      alibi_broken: [
        "That note is a private family matter.",
        "My son made mistakes. That has nothing to do with what happened here.",
        "He was going to take everything from Thomas. Everything. My boy would have been on the street."
      ],
      accused: {
        correct: "He showed me the documents last week. Said Thomas had until Friday. I begged him. He laughed. Said it was just business. My boy is all I have. I put something in his nightcap — I thought it would just make him ill, buy us time — I didn't know it would— I never meant for him to die.",
        wrong: "I have done nothing wrong. Nothing. My conscience is clear and I'll thank you to leave me be."
      }
    }
  },

  finch: {
    name: 'Mr. Arthur Finch',
    emoji: '🧑‍💼',
    role: 'Business Partner',
    personality: 'Jovial, backslapping, laughs too loudly. Visibly nervous when money is mentioned.',
    secret: 'He\'s been embezzling from the shared business for three years. Harwick had just found out.',
    alibi: 'Claims he was playing cards with Lady Vivienne all evening.',
    alibi_broken_by: 'clue_finch_ledger',
    guilt_tells: [
      'keeps checking his pocket watch',
      'suggested the body shouldn\'t be moved — then changed his story'
    ],
    dialogue: {
      greeting: [
        "Terrible thing. Harold was my oldest friend. Business partner, confidant — like a brother.",
        "I keep thinking I'll see him walk through the door. Ha. Awful business.",
        "Whatever you need, I'm here. Full cooperation. Absolutely."
      ],
      asked_about_victim: [
        "Brilliant man. Visionary. The business would be nothing without him. Well— wasn't.",
        "We had our disagreements. All partners do. Nothing serious.",
        "He'd been distracted lately. Preoccupied. I assumed it was personal."
      ],
      asked_about_alibi: [
        "Vivienne and I were at cards all night. She'll tell you the same.",
        "We started around nine. I lost three times, she won't let me forget it.",
        "I didn't leave that room once. Not to get a drink, not for anything."
      ],
      alibi_broken: [
        "Those figures are— there's an explanation for all of that.",
        "I was going to tell him. I was building up to it.",
        "Three years. I kept telling myself I'd pay it back. The business was struggling."
      ],
      accused: {
        correct: "He confronted me Friday afternoon. Showed me the audit. Said he was going to the police Monday morning. Everything — the house, the company, prison. I followed him to his study that night to beg him to reconsider. He wouldn't listen. He just kept laughing. I didn't— I just wanted him to stop laughing.",
        wrong: "I'm a lot of things. A thief, apparently, as you've worked out. But not a killer. I hadn't the nerve for it."
      }
    }
  },

  celeste: {
    name: 'Miss Celeste Vane',
    emoji: '👩‍🎨',
    role: 'Portrait Painter',
    personality: 'Quiet, watchful, speaks in observations rather than opinions. Unsettlingly calm.',
    secret: 'She is Lord Harwick\'s estranged daughter — come to confront him, not paint him.',
    alibi: 'Claims she was in the garden sketching by moonlight until she heard the commotion.',
    alibi_broken_by: 'clue_celeste_letter',
    guilt_tells: [
      'her portrait of Harwick was painted with unusual hatred in the eyes',
      'she knew which room was his before being told'
    ],
    dialogue: {
      greeting: [
        "I've been watching everyone since it happened. It's what I do. I watch.",
        "He commissioned me to paint his portrait. Now I suppose I never will.",
        "You notice things about people when you draw them. I noticed a great deal about Lord Harwick."
      ],
      asked_about_victim: [
        "He was a man who collected people. Kept them close when useful. Discarded them when not.",
        "I only arrived three days ago. I can't claim to know him well.",
        "He had sad eyes. People with guilty consciences often do."
      ],
      asked_about_alibi: [
        "The garden. East side, near the sundial. The moon was nearly full.",
        "I sketch better at night. Fewer distractions.",
        "I was alone, yes. I prefer it that way."
      ],
      alibi_broken: [
        "You found it.",
        "I wrote that letter two years ago. I never sent it.",
        "He didn't know who I was. I made sure of that. I wanted to see what he was like before I told him."
      ],
      accused: {
        correct: "I came here to look him in the eye. To make him acknowledge what he did — abandoning my mother, abandoning me. When I finally told him who I was, he looked at me and said he had no idea what I was talking about. Dismissed me like a servant. I had that letter opener in my hand. I don't remember deciding anything.",
        wrong: "I had more reason than anyone to want answers from that man. Killing him would have taken those answers away forever. Think about it."
      }
    }
  }
};

// ── Rooms ────────────────────────────────────────────────────
const ROOMS = {

  library: {
    name: 'The Library',
    emoji: '📚',
    description: 'Floor-to-ceiling shelves. The smell of old paper and dust. A leather chair sits near the fireplace — recently used. Something is wedged behind the books on the third shelf.',
    suspects_here: ['hale', 'celeste'],
    clues: ['clue_hale_gloves', 'clue_celeste_letter']
  },

  kitchen: {
    name: 'The Kitchen',
    emoji: '🍽️',
    description: 'Still warm from the evening\'s work. Copper pans hang from the ceiling. A cup sits on the counter — it shouldn\'t be there. The pantry door is ajar.',
    suspects_here: ['florence'],
    clues: ['clue_florence_note', 'clue_poison_vial']
  },

  garden: {
    name: 'The Garden',
    emoji: '🌿',
    description: 'Dark and overgrown at night. The gravel path shows footprints leading toward the cellar door. A garden tool has been moved recently — the earth around it is disturbed.',
    suspects_here: ['silas', 'celeste'],
    clues: ['clue_silas_letters', 'clue_footprints']
  },

  study: {
    name: 'The Study',
    emoji: '🕯️',
    description: 'Lord Harwick\'s private room. Papers scattered. A drawer left open. The safe behind the painting is closed but the painting has been moved — someone knew it was there.',
    suspects_here: ['vivienne', 'finch'],
    clues: ['clue_vivienne_will', 'clue_finch_ledger']
  },

  cellar: {
    name: 'The Cellar',
    emoji: '🪣',
    description: 'Cold stone steps lead down. Wine racks line the walls. This is where Lord Harwick was found. A broken wine glass on the floor. Scuff marks on the stone. And something scratched into the wall — letters.',
    suspects_here: ['silas'],
    clues: ['clue_scratched_initials', 'clue_broken_glass'],
    is_crime_scene: true
  }
};

// ── Clues ────────────────────────────────────────────────────
const CLUES = {

  clue_hale_gloves: {
    name: 'Latex Gloves',
    emoji: '🧤',
    room: 'library',
    description: 'A pair of medical latex gloves, discarded behind a bookshelf. One has a small bloodstain at the wrist. Dr. Hale carries these — but why dispose of them here, in the library?',
    breaks_alibi_of: 'hale',
    puzzle_required: null
  },

  clue_celeste_letter: {
    name: 'An Unsent Letter',
    emoji: '✉️',
    room: 'library',
    description: 'A handwritten letter, never sent. It reads: "Father — I know you won\'t recognise my name. I have changed it. But I am coming, and I have questions that cannot wait." It\'s signed: Celeste.',
    breaks_alibi_of: 'celeste',
    puzzle_required: null
  },

  clue_florence_note: {
    name: 'A Threatening Letter',
    emoji: '📄',
    room: 'kitchen',
    description: 'A letter from Lord Harwick\'s solicitor, addressed to a Thomas Pruett. Final notice. A debt of £40,000. Due Friday. Mrs. Pruett\'s name is scrawled in the margin — underlined three times.',
    breaks_alibi_of: 'florence',
    puzzle_required: null
  },

  clue_poison_vial: {
    name: 'Empty Vial',
    emoji: '🧪',
    room: 'kitchen',
    description: 'A tiny glass vial, hidden at the back of the spice shelf. No label. Traces of a dark residue inside. The coroner will need to test this — but it looks out of place in a kitchen.',
    breaks_alibi_of: null,
    puzzle_required: 'puzzle_cipher'
  },

  clue_silas_letters: {
    name: 'Bundle of Bank Transfers',
    emoji: '💷',
    room: 'garden',
    description: 'Eleven years of monthly bank transfers from Lord Harwick to Silas Drummond. Each one marked "Consultancy Fee." The amounts are too large for groundskeeping. The last entry is crossed out in red ink.',
    breaks_alibi_of: 'silas',
    puzzle_required: null
  },

  clue_footprints: {
    name: 'Boot Prints in the Mud',
    emoji: '👣',
    room: 'garden',
    description: 'A clear set of boot prints leading from the cottage path to the cellar entrance. Size ten. And a second set — smaller, heeled — coming from the manor side.',
    breaks_alibi_of: null,
    puzzle_required: null
  },

  clue_vivienne_will: {
    name: 'A Secret Will',
    emoji: '📜',
    room: 'study',
    description: 'A sealed legal document found in the desk drawer. Lord Harwick\'s will — leaving the entire estate to Lady Vivienne Cross. But beside it, an unfinished letter to a solicitor: "I wish to make significant changes to my existing arrangements..."',
    breaks_alibi_of: 'vivienne',
    puzzle_required: 'puzzle_lockbox'
  },

  clue_finch_ledger: {
    name: 'Doctored Ledger',
    emoji: '📒',
    room: 'study',
    description: 'A business ledger with entries carefully altered in two different inks. The original figures — visible under close inspection — show £180,000 missing from the company accounts over three years. The alterations are in Finch\'s handwriting.',
    breaks_alibi_of: 'finch',
    puzzle_required: null
  },

  clue_scratched_initials: {
    name: 'Initials in the Stone',
    emoji: '🔤',
    room: 'cellar',
    description: 'Scratched into the cellar wall near where the body was found: two letters. Freshly made — the stone dust is still on the floor. Could be the killer\'s initials, scratched in a moment of panic or defiance.',
    breaks_alibi_of: null,
    puzzle_required: 'puzzle_cipher'
  },

  clue_broken_glass: {
    name: 'Broken Wine Glass',
    emoji: '🍷',
    room: 'cellar',
    description: 'Shattered on the stone floor. Lord Harwick\'s fingerprints are on one shard. But a second set of prints — partial — are on another. Whoever was with him held this glass.',
    breaks_alibi_of: null,
    puzzle_required: null
  }
};

// ── Puzzles ──────────────────────────────────────────────────
const PUZZLES = {

  puzzle_cipher: {
    title: 'The Cipher on the Wall',
    description: 'The initials scratched into the cellar wall are encoded. Each letter has been shifted by 3 positions in the alphabet. The scratching reads: "HK." Decode it to reveal the true initials.',
    hint: 'A becomes D, B becomes E... so work backwards. H-3=?, K-3=?',
    answer: 'EH',
    reward_clue: 'clue_scratched_initials',
    success_message: 'EH — Edmund Hale. The initials scratched into the wall of the murder scene belong to Dr. Hale. You add this to your notebook with trembling hands.'
  },

  puzzle_lockbox: {
    title: 'The Locked Desk Drawer',
    description: 'The study desk drawer is locked with a 3-digit combination. On Lord Harwick\'s desk calendar, three dates are circled: his wedding anniversary (3rd), the year he founded the company (1987 — last two digits), and his house number (4). What is the code?',
    hint: 'Use the day of the anniversary, the last two digits of the founding year, and the house number: 3, 87, 4',
    answer: '874',
    reward_clue: 'clue_vivienne_will',
    success_message: 'The drawer clicks open. Inside: the secret will, and the letter that changes everything. Vivienne Cross inherits everything — and Harwick was about to cut her out.'
  }
};

// ── Plot twist event ─────────────────────────────────────────
const PLOT_TWIST = {
  trigger_after_clues: 3, // fires after player finds 3 clues
  title: '💀 A Second Body',
  description: 'You hear a scream from the upper corridor. You rush upstairs — and find Mr. Finch slumped against the wall, unconscious but alive. A note has been pinned to his jacket: "STOP ASKING QUESTIONS." Someone knows you\'re getting close. And they\'re still in this manor.',
  effect: 'The killer is watching. All suspects become more guarded. New dialogue unlocks.',
  unlocks_dialogue: 'post_twist' // characters get more defensive after this
};

// ── Rooms list for nav ───────────────────────────────────────
const ROOM_ORDER = ['library', 'kitchen', 'garden', 'study', 'cellar'];

// ── Game state ───────────────────────────────────────────────
let STATE = {
  currentRoom: null,
  currentSuspect: null,
  foundClues: [],
  brokenAlibis: [],
  notebookEntries: [],
  plotTwistSeen: false,
  gameOver: false
};

console.log('Crimson Manor data loaded ✓');
console.log('The murderer this game is:', MURDERER, '— keep this secret!');
// ============================================================
//  CRIMSON MANOR — Game Engine
//  Step 4: All interactivity, navigation, logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Grab all DOM elements ──────────────────────────────────
  const screenTitle    = document.getElementById('screen-title');
  const screenGame     = document.getElementById('screen-game');
  const screenEnding   = document.getElementById('screen-ending');

  const btnStart       = document.getElementById('btn-start');
  const btnNotebook    = document.getElementById('btn-notebook');
  const btnCloseNB     = document.getElementById('btn-close-notebook');
  const btnPlayAgain   = document.getElementById('btn-play-again');

  const locationLabel  = document.getElementById('location-label');
  const clueCount      = document.getElementById('clue-count');

  const sceneImage     = document.getElementById('scene-image');
  const sceneDesc      = document.getElementById('scene-description');
  const actionButtons  = document.getElementById('action-buttons');

  const charDisplay    = document.getElementById('character-display');
  const dialogueText   = document.getElementById('dialogue-text');
  const dialogueChoices= document.getElementById('dialogue-choices');

  const notebookOverlay= document.getElementById('notebook-overlay');
  const notebookContent= document.getElementById('notebook-content');
  const nbTabs         = document.querySelectorAll('.nb-tab');

  const puzzleOverlay  = document.getElementById('puzzle-overlay');
  const puzzleTitle    = document.getElementById('puzzle-title');
  const puzzleDesc     = document.getElementById('puzzle-description');
  const puzzleContent  = document.getElementById('puzzle-content');
  const puzzleFeedback = document.getElementById('puzzle-feedback');
  const btnClosePuzzle = document.getElementById('btn-close-puzzle');

  const endingEyebrow  = document.getElementById('ending-eyebrow');
  const endingTitle    = document.getElementById('ending-title');
  const endingBody     = document.getElementById('ending-body');

  const roomBtns       = document.querySelectorAll('.room-btn');

  // ── Start game ────────────────────────────────────────────
  btnStart.addEventListener('click', () => {
    screenTitle.classList.remove('active');
    screenGame.classList.add('active');
    enterRoom('library');
  });

  btnPlayAgain.addEventListener('click', () => {
    location.reload();
  });

  // ── Room navigation ───────────────────────────────────────
  roomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      enterRoom(btn.dataset.room);
    });
  });

  function enterRoom(roomId) {
    STATE.currentRoom = roomId;
    STATE.currentSuspect = null;
    const room = ROOMS[roomId];

    // Update top bar
    locationLabel.textContent = '📍 ' + room.name;

    // Update room nav highlight
    roomBtns.forEach(b => b.classList.toggle('active', b.dataset.room === roomId));

    // Update scene
    sceneImage.textContent = room.emoji;
    sceneDesc.textContent = room.description;

    // Build action buttons — one per clue in the room
    actionButtons.innerHTML = '';
    room.clues.forEach(clueId => {
      const clue = CLUES[clueId];
      const found = STATE.foundClues.includes(clueId);
      const btn = document.createElement('button');
      btn.className = 'action-btn' + (found ? ' found' : '');
      btn.textContent = found
        ? clue.emoji + ' ' + clue.name + ' ✓'
        : clue.emoji + ' Examine: ' + clue.name;
      btn.addEventListener('click', () => examineClue(clueId));
      actionButtons.appendChild(btn);
    });

    // Build suspect buttons
    room.suspects_here.forEach(suspectId => {
      const suspect = CHARACTERS[suspectId];
      const btn = document.createElement('button');
      btn.className = 'action-btn';
      btn.textContent = suspect.emoji + ' Talk to ' + suspect.name;
      btn.addEventListener('click', () => startInterrogation(suspectId));
      actionButtons.appendChild(btn);
    });

    // Clear dialogue panel
    showDialogue(
      null,
      room.is_crime_scene
        ? '⚠️ This is where Lord Harwick was found. The body has been removed, but the scene is undisturbed.'
        : 'Look around. Examine objects. Talk to anyone you find here.'
    );
    clearChoices();
  }

  // ── Clue examination ─────────────────────────────────────
  function examineClue(clueId) {
    const clue = CLUES[clueId];
    const alreadyFound = STATE.foundClues.includes(clueId);

    // If puzzle required and not yet found
    if (clue.puzzle_required && !alreadyFound) {
      showDialogue(null, clue.emoji + ' ' + clue.description);
      setChoices([
        {
          text: '🔐 This is locked — attempt to solve the puzzle',
          action: () => openPuzzle(clue.puzzle_required)
        },
        {
          text: '← Look around the room',
          action: () => enterRoom(STATE.currentRoom)
        }
      ]);
      return;
    }

    // Mark as found
    if (!alreadyFound) {
      STATE.foundClues.push(clueId);
      clueCount.textContent = STATE.foundClues.length;

      // Break alibi if applicable
      if (clue.breaks_alibi_of && !STATE.brokenAlibis.includes(clue.breaks_alibi_of)) {
        STATE.brokenAlibis.push(clue.breaks_alibi_of);
        STATE.notebookEntries.push(
          '🔍 ' + CHARACTERS[clue.breaks_alibi_of].name + '\'s alibi has a hole in it.'
        );
      }

      // Add to notebook
      STATE.notebookEntries.push('Found: ' + clue.name + ' in ' + ROOMS[STATE.currentRoom].name);

      // Check plot twist
      checkPlotTwist();

      // Refresh room to show found state
      enterRoom(STATE.currentRoom);
    }

    // Show clue description
    showDialogue(null, clue.emoji + ' ' + clue.name + '\n\n' + clue.description);
    setChoices([
      {
        text: '📓 Add note to notebook',
        action: () => {
          showDialogue(null, '✓ Added to your notebook.');
          clearChoices();
        }
      },
      {
        text: '← Keep investigating',
        action: () => enterRoom(STATE.currentRoom)
      }
    ]);
  }

  // ── Interrogation ─────────────────────────────────────────
  function startInterrogation(suspectId) {
    STATE.currentSuspect = suspectId;
    const c = CHARACTERS[suspectId];
    const alibibroken = STATE.brokenAlibis.includes(suspectId);

    // Show character
    charDisplay.innerHTML = `
      <div style="font-size:3rem">${c.emoji}</div>
      <div class="char-name">${c.name}</div>
      <div class="char-role">${c.role}</div>
    `;

    // Greeting line
    const greetings = c.dialogue.greeting;
    const line = greetings[Math.min(STATE.foundClues.length, greetings.length - 1)];
    showDialogue(c.name, line);

    // Build question choices
    const choices = [
      {
        text: '🔪 "Tell me about Lord Harwick."',
        action: () => askQuestion(suspectId, 'asked_about_victim')
      },
      {
        text: '🕐 "Where were you last night?"',
        action: () => askQuestion(suspectId, 'asked_about_alibi')
      }
    ];

    if (alibibroken) {
      choices.push({
        text: '⚠️ "I found something that contradicts your story."',
        action: () => confrontAlibi(suspectId)
      });
    }

    choices.push({
      text: '👁️ "I think YOU did it." [ACCUSE]',
      action: () => accuseSuspect(suspectId)
    });

    choices.push({
      text: '← Walk away',
      action: () => enterRoom(STATE.currentRoom)
    });

    setChoices(choices);
  }

  function askQuestion(suspectId, topic) {
    const c = CHARACTERS[suspectId];
    const lines = c.dialogue[topic];
    const line = lines[Math.min(STATE.foundClues.length, lines.length - 1)];
    showDialogue(c.name, line);

    setChoices([
      {
        text: '🔪 "Tell me about Lord Harwick."',
        action: () => askQuestion(suspectId, 'asked_about_victim')
      },
      {
        text: '🕐 "Where were you last night?"',
        action: () => askQuestion(suspectId, 'asked_about_alibi')
      },
      {
        text: '← End conversation',
        action: () => enterRoom(STATE.currentRoom)
      }
    ]);
  }

  function confrontAlibi(suspectId) {
    const c = CHARACTERS[suspectId];
    const lines = c.dialogue.alibi_broken;
    const line = lines[Math.min(STATE.foundClues.length - 1, lines.length - 1)];
    showDialogue(c.name, '😰 ' + line);

    STATE.notebookEntries.push(
      c.name + ' was confronted about their alibi and became defensive.'
    );

    setChoices([
      {
        text: '👁️ "I think YOU did it." [ACCUSE]',
        action: () => accuseSuspect(suspectId)
      },
      {
        text: '← Not yet. Keep investigating.',
        action: () => enterRoom(STATE.currentRoom)
      }
    ]);
  }

  function accuseSuspect(suspectId) {
    STATE.gameOver = true;
    const c = CHARACTERS[suspectId];
    const correct = suspectId === MURDERER;
    const line = c.dialogue.accused[correct ? 'correct' : 'wrong'];

    showDialogue(c.name, (correct ? '😨 ' : '😠 ') + line);

    setChoices([
      {
        text: correct ? '✅ See the ending' : '❌ See what happened',
        action: () => showEnding(suspectId, correct)
      }
    ]);
  }

  // ── Plot twist ────────────────────────────────────────────
  function checkPlotTwist() {
    if (!STATE.plotTwistSeen && STATE.foundClues.length >= PLOT_TWIST.trigger_after_clues) {
      STATE.plotTwistSeen = true;
      setTimeout(() => {
        showDialogue(null,
          PLOT_TWIST.title + '\n\n' + PLOT_TWIST.description
        );
        STATE.notebookEntries.push('⚠️ TWIST: ' + PLOT_TWIST.title);
        setChoices([
          {
            text: '😰 Stay calm and keep investigating',
            action: () => enterRoom(STATE.currentRoom)
          }
        ]);
      }, 600);
    }
  }

  // ── Puzzles ───────────────────────────────────────────────
  function openPuzzle(puzzleId) {
    const p = PUZZLES[puzzleId];
    puzzleTitle.textContent = p.title;
    puzzleDesc.textContent = p.description + '\n\nHint: ' + p.hint;
    puzzleFeedback.textContent = '';
    puzzleFeedback.className = '';

    puzzleContent.innerHTML = `
      <input type="text" id="puzzle-input" placeholder="Enter your answer..."
        maxlength="10" autocomplete="off" />
      <button class="action-btn" id="btn-submit-puzzle"
        style="margin-top:10px;width:100%;padding:10px;">
        Submit Answer
      </button>
    `;

    puzzleOverlay.classList.remove('hidden');

    document.getElementById('btn-submit-puzzle').addEventListener('click', () => {
      const val = document.getElementById('puzzle-input').value.trim().toUpperCase();
      if (val === p.answer.toUpperCase()) {
        puzzleFeedback.textContent = '✓ ' + p.success_message;
        puzzleFeedback.className = 'correct';
        // Unlock the reward clue
        if (!STATE.foundClues.includes(p.reward_clue)) {
          STATE.foundClues.push(p.reward_clue);
          clueCount.textContent = STATE.foundClues.length;
          const clue = CLUES[p.reward_clue];
          if (clue.breaks_alibi_of) {
            STATE.brokenAlibis.push(clue.breaks_alibi_of);
          }
          checkPlotTwist();
        }
        setTimeout(() => {
          puzzleOverlay.classList.add('hidden');
          enterRoom(STATE.currentRoom);
        }, 2500);
      } else {
        puzzleFeedback.textContent = '✗ That\'s not right. Think again.';
        puzzleFeedback.className = 'wrong';
      }
    });
  }

  btnClosePuzzle.addEventListener('click', () => {
    puzzleOverlay.classList.add('hidden');
  });

  // ── Notebook ──────────────────────────────────────────────
  btnNotebook.addEventListener('click', () => {
    notebookOverlay.classList.remove('hidden');
    renderNotebook('clues');
  });

  btnCloseNB.addEventListener('click', () => {
    notebookOverlay.classList.add('hidden');
  });

  nbTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      nbTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderNotebook(tab.dataset.tab);
    });
  });

  function renderNotebook(tab) {
    if (tab === 'clues') {
      if (STATE.foundClues.length === 0) {
        notebookContent.innerHTML = '<p style="color:#6a5a5a">No clues found yet. Get investigating.</p>';
        return;
      }
      notebookContent.innerHTML = STATE.foundClues.map(id => {
        const c = CLUES[id];
        return `<p class="clue-found">${c.emoji} <strong>${c.name}</strong><br>
          <span style="color:#9a8a7a;font-size:12px">${c.description}</span></p><br>`;
      }).join('');

    } else if (tab === 'suspects') {
      notebookContent.innerHTML = Object.entries(CHARACTERS).map(([id, c]) => {
        const alibiStatus = STATE.brokenAlibis.includes(id)
          ? '<span style="color:#9a4a4a">⚠️ Alibi questionable</span>'
          : '<span style="color:#5a7a5a">Alibi unverified</span>';
        return `<div class="suspect-entry">
          <strong>${c.emoji} ${c.name}</strong> — ${c.role}<br>
          <span style="font-size:12px;color:#9a8a7a">${c.alibi}</span><br>
          ${alibiStatus}
        </div>`;
      }).join('');

    } else if (tab === 'accuse') {
      notebookContent.innerHTML = `
        <p style="color:#9a4a4a;margin-bottom:1rem">
          ⚠️ Accuse carefully. If you're wrong, the killer escapes.
        </p>
        <p style="color:#9a8a7a;font-size:13px;margin-bottom:1rem">
          You have found <strong style="color:#c9a96e">${STATE.foundClues.length}</strong> clues
          and broken <strong style="color:#c9a96e">${STATE.brokenAlibis.length}</strong> alibis.
        </p>
        ${Object.entries(CHARACTERS).map(([id, c]) => `
          <div class="suspect-entry">
            <strong>${c.emoji} ${c.name}</strong><br>
            <button class="action-btn" style="margin-top:6px"
              onclick="document.getElementById('notebook-overlay').classList.add('hidden');
                       startInterrogationFromNotebook('${id}')">
              Accuse ${c.name.split(' ')[1]}
            </button>
          </div>
        `).join('')}
      `;
    }
  }

  // Global so notebook accuse button can call it
  window.startInterrogationFromNotebook = function(suspectId) {
    const room = Object.keys(ROOMS).find(r =>
      ROOMS[r].suspects_here.includes(suspectId)
    );
    enterRoom(room || 'library');
    setTimeout(() => accuseSuspect(suspectId), 100);
  };

  // ── Ending screen ─────────────────────────────────────────
  function showEnding(suspectId, correct) {
    screenGame.classList.remove('active');
    screenEnding.classList.add('active');
    const c = CHARACTERS[suspectId];
    const real = CHARACTERS[MURDERER];

    if (correct) {
      endingEyebrow.textContent = '✓ Case Solved';
      endingTitle.textContent = 'Justice served.';
      endingBody.textContent =
        `${c.name} confessed to the murder of Lord Harwick. ` +
        `The authorities were called. The manor fell silent. ` +
        `You solved the case with ${STATE.foundClues.length} clues and ` +
        `${STATE.brokenAlibis.length} broken alibis. ` +
        `Not bad for one night's work.`;
    } else {
      endingEyebrow.textContent = '✗ Wrong accusation';
      endingTitle.textContent = 'The killer walks free.';
      endingBody.textContent =
        `${c.name} was innocent. While you pointed fingers, ` +
        `the real killer — ${real.name} — slipped away into the night. ` +
        `The case went cold. Lord Harwick's death was ruled an accident. ` +
        `You found ${STATE.foundClues.length} clues. You needed more.`;
    }
  }

  // ── Helpers ───────────────────────────────────────────────
  function showDialogue(speakerName, text) {
    if (speakerName) {
      charDisplay.innerHTML = `
        <div style="font-size:3rem">${CHARACTERS[STATE.currentSuspect]?.emoji || ''}</div>
        <div class="char-name">${speakerName}</div>
      `;
    } else {
      charDisplay.innerHTML = '';
    }
    dialogueText.textContent = text;
  }

  function setChoices(choices) {
    dialogueChoices.innerHTML = '';
    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.text;
      btn.addEventListener('click', choice.action);
      dialogueChoices.appendChild(btn);
    });
  }

  function clearChoices() {
    dialogueChoices.innerHTML = '';
  }

});
