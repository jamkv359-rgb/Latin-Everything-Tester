const grammarData = [
// INDICATIVE MOOD - PRESENT TENSE 
    // 1st Conjugation Active [cite: 3, 8]
    {word: "porto", voice: "active", tense: "present", mood: "indicative", person: "1st", number: "singular", conjugation: "1st"}, // [cite: 17]
    {"word": "portas", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // [cite: 23]
    {"word": "portat", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 29]
    {"word": "portamus", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // [cite: 39]
    {"word": "portatis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // [cite: 43]
    {"word": "portant", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 47]

    // 1st Conjugation Passive [cite: 3, 9]
    {"word": "portor", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // 
    {"word": "portaris", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // 
    {"word": "portatur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 31]
    {"word": "portamur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // 
    {"word": "portamini", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // 
    {"word": "portantur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 48]

    // 2nd Conjugation Active [cite: 4, 10]
    {"word": "doceo", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, // [cite: 18]
    {"word": "doces", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, // [cite: 24]
    {"word": "docet", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 32]
    {"word": "docemus", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, // [cite: 40]
    {"word": "docetis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, // [cite: 44]
    {"word": "docent", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 49]

    // 2nd Conjugation Passive [cite: 4, 11]
    {"word": "doceor", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, // 
    {"word": "doceris or docere", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, // 
    {"word": "docetur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 33]
    {"word": "docemur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, // 
    {"word": "docemini", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, // 
    {"word": "docentur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 50]

    // 3rd Conjugation Active [cite: 5, 12]
    {"word": "duco", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // [cite: 19]
    {"word": "ducis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // [cite: 25]
    {"word": "ducit", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 34]
    {"word": "ducimus", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // [cite: 41]
    {"word": "ducitis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // [cite: 45]
    {"word": "ducunt", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 51]

    // 3rd Conjugation Passive [cite: 5, 13]
    {"word": "ducor", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // 
    {"word": "duceris", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // 
    {"word": "ducitur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 35]
    {"word": "ducimur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // 
    {"word": "ducimini", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // 
    {"word": "ducuntur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 52]

    // 4th Conjugation Active [cite: 6, 14]
    {"word": "audio", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // [cite: 20]
    {"word": "audis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // [cite: 26]
    {"word": "audit", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 36]
    {"word": "audimus", "voice": "active", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // [cite: 42]
    {"word": "auditis", "voice": "active", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // [cite: 46]
    {"word": "audiunt", "voice": "active", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 53]

    // 4th Conjugation Passive [cite: 6, 15]
    {"word": "audior", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // 
    {"word": "audiris or audire", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // 
    {"word": "auditur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 37]
    {"word": "audimur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // 
    {"word": "audimini", "voice": "passive", "tense": "present", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // 
    {"word": "audiuntur", "voice": "passive", "tense": "present", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 54]
// INDICATIVE MOOD - IMPERFECT TENSE [cite: 55]
    // 1st Conjugation [cite: 3]
    {"word": "portabam", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // [cite: 56]
    {"word": "portabas", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // [cite: 62]
    {"word": "portabat", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 69]
    {"word": "portabamus", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // [cite: 79]
    {"word": "portabatis", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // [cite: 84]
    {"word": "portabant", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 89]
    
    {"word": "portabar", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // 
    {"word": "portabaris", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // 
    {"word": "portabatur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 70]
    {"word": "portabamur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // 
    {"word": "portabamini", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // 
    {"word": "portabantur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 90]

    // 2nd Conjugation [cite: 4]
    {"word": "docebam", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, // [cite: 57]
    {"word": "docebas", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, // [cite: 63]
    {"word": "docebat", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 71]
    {"word": "docebamus", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, // [cite: 80]
    {"word": "docebatis", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, // [cite: 85]
    {"word": "docebant", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 91]

    {"word": "docebar", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, // 
    {"word": "docebaris", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, // 
    {"word": "docebatur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 72]
    {"word": "docebamur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, // 
    {"word": "docebamini", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, // 
    {"word": "docebantur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 92]
    
    // 3rd Conjugation Active
    {"word": "ducebam", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // [cite: 58]
    {"word": "ducebas", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // [cite: 64]
    {"word": "ducebat", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 73]
    {"word": "ducebamus", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // [cite: 81]
    {"word": "ducebatis", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // [cite: 86]
    {"word": "ducebant", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 93]

    // 3rd Conjugation Passive
    {"word": "ducebar", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, 
    {"word": "ducebaris", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, 
    {"word": "ducebatur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 74]
    {"word": "ducebamur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, 
    {"word": "ducebamini", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, 
    {"word": "ducebantur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 94]

    // 4th Conjugation Active
    {"word": "audiebam", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // [cite: 59]
    {"word": "audiebas", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // [cite: 65]
    {"word": "audiebat", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 75]
    {"word": "audiebamus", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // [cite: 82]
    {"word": "audiebatis", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // [cite: 87]
    {"word": "audiebant", "voice": "active", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 95]

    // 4th Conjugation Passive
    {"word": "audiebar", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiebaris", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, 
    {"word": "audiebatur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 76]
    {"word": "audiebamur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, 
    {"word": "audiebamini", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, 
    {"word": "audiebantur", "voice": "passive", "tense": "imperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 96]

// INDICATIVE MOOD - PERFECT TENSE [cite: 139]
    // 1st Conjugation [cite: 3]
    {"word": "portavi", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // [cite: 141]
    {"word": "portavisti", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // [cite: 151]
    {"word": "portavit", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 162]
    {"word": "portavimus", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // [cite: 172]
    {"word": "portavitis", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // [cite: 181]
    {"word": "portaverunt", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 189]

    {"word": "portatus sum (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // [cite: 142]
    {"word": "portatus es (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // [cite: 152]
    {"word": "portatus est (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 163]
    {"word": "portati sumus (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // [cite: 173]
    {"word": "portati estis (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // [cite: 182]
    {"word": "portati sunt (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 190]
    // 2nd Conjugation
    {"word": "docui", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docuisti", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuit", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuimus", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docuistis", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuerunt", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},
    {"word": "doctus sum (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus es (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus est (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti sumus (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti estis (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti sunt (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},
    // 3rd Conjugation Active
    {"word": "duxi", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // [cite: 145]
    {"word": "duxisti", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // [cite: 155]
    {"word": "duxit", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 166]
    {"word": "duximus", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // [cite: 176]
    {"word": "duxistis", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // [cite: 185]
    {"word": "duxerunt", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 193]

    // 3rd Conjugation Passive
    {"word": "ductus sum (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // [cite: 146]
    {"word": "ductus es (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // [cite: 156]
    {"word": "ductus est (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 167]
    {"word": "ducti sumus (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // [cite: 177]
    {"word": "ducti estis (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // [cite: 186]
    {"word": "ducti sunt (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 194]

    // 4th Conjugation Active
    {"word": "audivi", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // [cite: 147]
    {"word": "audivisti", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // [cite: 157]
    {"word": "audivit", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 168]
    {"word": "audivimus", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // [cite: 178]
    {"word": "audivistis", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // [cite: 187]
    {"word": "audiverunt", "voice": "active", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 195]

    // 4th Conjugation Passive
    {"word": "auditus sum (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // [cite: 148]
    {"word": "auditus es (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // [cite: 158]
    {"word": "auditus est (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 169]
    {"word": "auditi sumus (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // [cite: 179]
    {"word": "auditi estis (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // [cite: 188]
    {"word": "auditi sunt (decl)", "voice": "passive", "tense": "perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 196]

// INDICATIVE MOOD - FUTURE TENSE
    // 1st Conjugation Active
    {"word": "portabo", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, // [cite: 98]
    {"word": "portabis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, // [cite: 104]
    {"word": "portabit", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 110]
    {"word": "portabimus", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, // [cite: 120]
    {"word": "portabitis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, // [cite: 126]
    {"word": "portabunt", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 131]

    // 1st Conjugation Passive
    {"word": "portabor", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"}, 
    {"word": "portaberis", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"}, 
    {"word": "portabitur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"}, // [cite: 111]
    {"word": "portabimur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"}, 
    {"word": "portabimini", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"}, 
    {"word": "portabuntur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"}, // [cite: 132]

    // 2nd Conjugation Active
    {"word": "docebo", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, // [cite: 99]
    {"word": "docebis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, // [cite: 105]
    {"word": "docebit", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 112]
    {"word": "docebimus", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, // [cite: 121]
    {"word": "docebitis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, // [cite: 127]
    {"word": "docebunt", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 133]

    // 2nd Conjugation Passive
    {"word": "docebor", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"}, 
    {"word": "doceberis", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"}, 
    {"word": "docebitur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"}, // [cite: 113]
    {"word": "docebimur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"}, 
    {"word": "docebimini", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"}, 
    {"word": "docebuntur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"}, // [cite: 134]

    // 3rd Conjugation Active
    {"word": "ducam", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, // [cite: 100]
    {"word": "duces", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, // [cite: 106]
    {"word": "ducet", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 114]
    {"word": "ducemus", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, // [cite: 122]
    {"word": "ducetis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, // [cite: 128]
    {"word": "ducent", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 135]

    // 3rd Conjugation Passive
    {"word": "ducar", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"}, 
    {"word": "duceris", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"}, 
    {"word": "ducetur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"}, // [cite: 115]
    {"word": "ducemur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"}, 
    {"word": "ducemini", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"}, 
    {"word": "ducentur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"}, // [cite: 136]

    // 4th Conjugation Active
    {"word": "audiam", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, // [cite: 101]
    {"word": "audies", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, // [cite: 107]
    {"word": "audiet", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 116]
    {"word": "audiemus", "voice": "active", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, // [cite: 123]
    {"word": "audietis", "voice": "active", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, // [cite: 129]
    {"word": "audient", "voice": "active", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 137]

    // 4th Conjugation Passive
    {"word": "audiar", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"}, 
    {"word": "audieris", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"}, 
    {"word": "audietur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"}, // [cite: 117]
    {"word": "audiemur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"}, 
    {"word": "audiemini", "voice": "passive", "tense": "future", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"}, 
    {"word": "audientur", "voice": "passive", "tense": "future", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"}, // [cite: 138]
// INDICATIVE MOOD - PLUPERFECT TENSE
    // 1st Conjugation Active
    {"word": "portaveram", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portaveras", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverat", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaveramus", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaveratis", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portaverant", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus eram (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus eras (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus erat (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati eramus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati eratis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati erant (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docueram", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docueras", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerat", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docueramus", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docueratis", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuerant", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus eram (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus eras (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus erat (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti eramus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti eratis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti erant (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxeram", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxeras", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerat", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxeramus", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxeratis", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxerant", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus eram (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus eras (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus erat (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti eramus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti eratis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti erant (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audiveram", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiveras", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverat", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiveramus", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiveratis", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiverant", "voice": "active", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus eram (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus eras (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus erat (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi eramus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi eratis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi erant (decl)", "voice": "passive", "tense": "pluperfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"},

// INDICATIVE MOOD - FUTURE PERFECT TENSE
    // 1st Conjugation Active
    {"word": "portavero", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portaveris", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverit", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverimus", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaveritis", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portaverint", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus ero (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus eris (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus erit (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati erimus (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati eritis (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati erunt (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docuero", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docueris", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerit", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerimus", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docueritis", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuerint", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus ero (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus eris (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus erit (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti erimus (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti eritis (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti erunt (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxero", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxeris", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerit", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerimus", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxeritis", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxerint", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus ero (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus eris (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus erit (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti erimus (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti eritis (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti erunt (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audivero", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiveris", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverit", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverimus", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiveritis", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiverint", "voice": "active", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus ero (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus eris (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus erit (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi erimus (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi eritis (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi erunt (decl)", "voice": "passive", "tense": "future perfect", "mood": "indicative", "person": "3rd", "number": "plural", "conjugation": "4th"},

// SUBJUNCTIVE MOOD - PRESENT TENSE
    // 1st Conjugation Active
    {"word": "portem", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portes", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portet", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portemus", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portetis", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portent", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "porter", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "porteris", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portetur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portemur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portemini", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portentur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "doceam", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doceas", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceat", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceamus", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "doceatis", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "doceant", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "docear", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docearis", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceatur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceamur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "doceamini", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "doceantur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "ducam", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ducas", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducat", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducamus", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducatis", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducant", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ducar", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ducaris", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducatur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducamur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducamini", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducantur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audiam", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audias", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiat", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiamus", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiatis", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiant", "voice": "active", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "audiar", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiaris", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiatur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiamur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiamini", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiantur", "voice": "passive", "tense": "present", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

// SUBJUNCTIVE MOOD - IMPERFECT TENSE
    // 1st Conjugation Active
    {"word": "portarem", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portares", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaret", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaremus", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaretis", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portarent", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portarer", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portareris", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaretur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaremur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaremini", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portarentur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docerem", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doceres", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceret", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceremus", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "doceretis", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docerent", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "docerer", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docereris", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceretur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceremur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "doceremini", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docerentur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "ducerem", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duceres", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duceret", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duceremus", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duceretis", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducerent", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ducerer", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ducereris", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duceretur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duceremur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duceremini", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducerentur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audirem", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audires", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiret", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiremus", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiretis", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audirent", "voice": "active", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "audirer", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audireris", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiretur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiremur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiremini", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audirentur", "voice": "passive", "tense": "imperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

// SUBJUNCTIVE MOOD - PERFECT TENSE
    // 1st Conjugation Active
    {"word": "portaverim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portaveris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaveritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portaverint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docuerim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docueris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docueritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuerint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxerim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxeris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxeritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxerint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audiverim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiveris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiveritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiverint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

// SUBJUNCTIVE MOOD - PLUPERFECT TENSE
    // 1st Conjugation Active
    {"word": "portavissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portavisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portavisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portavissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portavissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portavissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docuissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docuisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docuissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audivissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audivisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audivisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audivissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audivissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audivissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},
// SUBJUNCTIVE MOOD - PERFECT TENSE
    // 1st Conjugation Active
    {"word": "portaverim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portaveris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portaverimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portaveritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portaverint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docuerim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docueris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuerimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docueritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuerint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxerim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxeris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxerimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxeritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxerint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audiverim", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audiveris", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverit", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audiverimus", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audiveritis", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiverint", "voice": "active", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus sim (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus sis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus sit (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi simus (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi sitis (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi sint (decl)", "voice": "passive", "tense": "perfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

// SUBJUNCTIVE MOOD - PLUPERFECT TENSE
    // 1st Conjugation Active
    {"word": "portavissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portavisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portavisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portavissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portavissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portavissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portatus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "1st"},
    {"word": "portatus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portatus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portati essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "1st"},
    {"word": "portati essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portati essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "docuissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "docuisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docuissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docuissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docuissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "doctus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doctus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docti essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "2nd"},
    {"word": "docti essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docti essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duxissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "duxisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "duxissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "duxissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "duxissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ductus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ductus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducti essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducti essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audivissem", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "audivisses", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audivisset", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "audivissemus", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "audivissetis", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audivissent", "voice": "active", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditus essem (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "singular", "conjugation": "4th"},
    {"word": "auditus esses (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditus esset (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditi essemus (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "1st", "number": "plural", "conjugation": "4th"},
    {"word": "auditi essetis (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "auditi essent (decl)", "voice": "passive", "tense": "pluperfect", "mood": "subjunctive", "person": "3rd", "number": "plural", "conjugation": "4th"},

// IMPERATIVE MOOD - PRESENT TENSE
    // 1st Conjugation Active
    {"word": "porta", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portate", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portare", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portamini", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "doce", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docete", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "docere", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceamini", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "duce", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducite", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ducere", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducimini", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audi", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audite", "voice": "active", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "audire", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audimini", "voice": "passive", "tense": "present", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "4th"},

// IMPERATIVE MOOD - FUTURE TENSE
    // 1st Conjugation Active
    {"word": "portato", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portato", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "portatote", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portanto", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 1st Conjugation Passive
    {"word": "portator", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "1st"},
    {"word": "portator", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "1st"},
    {"word": "-", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "1st"},
    {"word": "portantor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "1st"},

    // 2nd Conjugation Active
    {"word": "doceto", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "doceto", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "docetote", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docento", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 2nd Conjugation Passive
    {"word": "docetor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "2nd"},
    {"word": "docetor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "2nd"},
    {"word": "-", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "2nd"},
    {"word": "docentor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "2nd"},

    // 3rd Conjugation Active
    {"word": "ducito", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducito", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducitote", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducunto", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 3rd Conjugation Passive
    {"word": "ducitor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "3rd"},
    {"word": "ducitor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "3rd"},
    {"word": "-", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "3rd"},
    {"word": "ducuntor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "3rd"},

    // 4th Conjugation Active
    {"word": "audito", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "audito", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "auditote", "voice": "active", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiunto", "voice": "active", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "4th"},

    // 4th Conjugation Passive
    {"word": "auditor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "singular", "conjugation": "4th"},
    {"word": "auditor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "singular", "conjugation": "4th"},
    {"word": "-", "voice": "passive", "tense": "future", "mood": "imperative", "person": "2nd", "number": "plural", "conjugation": "4th"},
    {"word": "audiuntor", "voice": "passive", "tense": "future", "mood": "imperative", "person": "3rd", "number": "plural", "conjugation": "4th"},
// INFINITIVE MOOD - PRESENT TENSE [cite: 408, 409]
  // 1st Conjugation
  {"word": "portare", "voice": "active", "tense": "present", "mood": "infinitive", "conjugation": "1st"}, // [cite: 415]
  {"word": "portari", "voice": "passive", "tense": "present", "mood": "infinitive", "conjugation": "1st"}, // [cite: 416]

  // 2nd Conjugation
  {"word": "docere", "voice": "active", "tense": "present", "mood": "infinitive", "conjugation": "2nd"}, // [cite: 417]
  {"word": "doceri", "voice": "passive", "tense": "present", "mood": "infinitive", "conjugation": "2nd"},

  // 3rd Conjugation
  {"word": "ducere", "voice": "active", "tense": "present", "mood": "infinitive", "conjugation": "3rd"}, // [cite: 419]
  {"word": "duci", "voice": "passive", "tense": "present", "mood": "infinitive", "conjugation": "3rd"}, // [cite: 420]

  // 4th Conjugation
  {"word": "audire", "voice": "active", "tense": "present", "mood": "infinitive", "conjugation": "4th"}, // [cite: 421]
  {"word": "audiri", "voice": "passive", "tense": "present", "mood": "infinitive", "conjugation": "4th"}, // [cite: 422]


// INFINITIVE MOOD - PERFECT TENSE [cite: 423]
    // 1st Conjugation
    {"word": "portavisse", "voice": "active", "tense": "perfect", "mood": "infinitive", "conjugation": "1st"},
    {"word": "portatus esse (decl)", "voice": "passive", "tense": "perfect", "mood": "infinitive", "conjugation": "1st"},

    // 2nd Conjugation
    {"word": "docuisse", "voice": "active", "tense": "perfect", "mood": "infinitive", "conjugation": "2nd"},
    {"word": "doctus esse (decl)", "voice": "passive", "tense": "perfect", "mood": "infinitive", "conjugation": "2nd"},

    // 3rd Conjugation
    {"word": "duxisse", "voice": "active", "tense": "perfect", "mood": "infinitive", "conjugation": "3rd"},
    {"word": "ductus esse (decl)", "voice": "passive", "tense": "perfect", "mood": "infinitive", "conjugation": "3rd"},

    // 4th Conjugation
    {"word": "audi(v)isse", "voice": "active", "tense": "perfect", "mood": "infinitive", "conjugation": "4th"},
    {"word": "auditus esse (decl)", "voice": "passive", "tense": "perfect", "mood": "infinitive", "conjugation": "4th"},


// INFINITIVE MOOD - FUTURE TENSE [cite: 428]
    // 1st Conjugation
    {"word": "portaturum esse (decl)", "voice": "active", "tense": "future", "mood": "infinitive", "conjugation": "1st"},
    {"word": "portatum iri (decl)", "voice": "passive", "tense": "future", "mood": "infinitive", "conjugation": "1st"},

    // 2nd Conjugation
    {"word": "docturum esse (decl)", "voice": "active", "tense": "future", "mood": "infinitive", "conjugation": "2nd"},
    {"word": "doctum iri (decl)", "voice": "passive", "tense": "future", "mood": "infinitive", "conjugation": "2nd"},

    // 3rd Conjugation
    {"word": "ducturum esse (decl)", "voice": "active", "tense": "future", "mood": "infinitive", "conjugation": "3rd"},
    {"word": "ductum iri (decl)", "voice": "passive", "tense": "future", "mood": "infinitive", "conjugation": "3rd"},

    // 4th Conjugation
    {"word": "auditurum esse (decl)", "voice": "active", "tense": "future", "mood": "infinitive", "conjugation": "4th"},
    {"word": "auditum iri (decl)", "voice": "passive", "tense": "future", "mood": "infinitive", "conjugation": "4th"},


// PARTICIPLES (VERBAL ADJECTIVES) - PRESENT TENSE [cite: 435, 436]
    // 1st Conjugation
    {"word": "portans (decl)", "voice": "active", "tense": "present", "mood": "participle", "conjugation": "1st"}, // [cite: 440]
    {"word": "-", "voice": "passive", "tense": "present", "mood": "participle", "conjugation": "1st"},

    // 2nd Conjugation
    {"word": "docens (decl)", "voice": "active", "tense": "present", "mood": "participle", "conjugation": "2nd"}, // [cite: 441]
    {"word": "-", "voice": "passive", "tense": "present", "mood": "participle", "conjugation": "2nd"},

    // 3rd Conjugation
    {"word": "ducens (decl)", "voice": "active", "tense": "present", "mood": "participle", "conjugation": "3rd"}, // [cite: 442]
    {"word": "-", "voice": "passive", "tense": "present", "mood": "participle", "conjugation": "3rd"},

    // 4th Conjugation
    {"word": "audiens (decl)", "voice": "active", "tense": "present", "mood": "participle", "conjugation": "4th"}, // [cite: 443]
    {"word": "-", "voice": "passive", "tense": "present", "mood": "participle", "conjugation": "4th"},


// PARTICIPLES - PERFECT TENSE [cite: 444]
    // 1st Conjugation
    {"word": "-", "voice": "active", "tense": "perfect", "mood": "participle", "conjugation": "1st"},
    {"word": "portatus (decl)", "voice": "passive", "tense": "perfect", "mood": "participle", "conjugation": "1st"}, // [cite: 449]

    // 2nd Conjugation
    {"word": "-", "voice": "active", "tense": "perfect", "mood": "participle", "conjugation": "2nd"},
    {"word": "doctus (decl)", "voice": "passive", "tense": "perfect", "mood": "participle", "conjugation": "2nd"}, // [cite: 451]

    // 3rd Conjugation
    {"word": "-", "voice": "active", "tense": "perfect", "mood": "participle", "conjugation": "3rd"},
    {"word": "ductus (decl)", "voice": "passive", "tense": "perfect", "mood": "participle", "conjugation": "3rd"}, // [cite: 452]

    // 4th Conjugation
    {"word": "-", "voice": "active", "tense": "perfect", "mood": "participle", "conjugation": "4th"},
    {"word": "auditus (decl)", "voice": "passive", "tense": "perfect", "mood": "participle", "conjugation": "4th"}, // [cite: 454]

// PARTICIPLES - FUTURE / GERUNDIVE [cite: 455]
    // 1st Conjugation
    {"word": "portaturus (decl)", "voice": "active", "tense": "future", "mood": "participle", "conjugation": "1st"}, // [cite: 459]
    {"word": "portandus (decl)", "voice": "passive", "tense": "future", "mood": "participle", "conjugation": "1st"}, // [cite: 459]

    // 2nd Conjugation
    {"word": "docturus (decl)", "voice": "active", "tense": "future", "mood": "participle", "conjugation": "2nd"}, // [cite: 460]
    {"word": "docendus (decl)", "voice": "passive", "tense": "future", "mood": "participle", "conjugation": "2nd"}, // [cite: 460]

    // 3rd Conjugation
    {"word": "ducturus (decl)", "voice": "active", "tense": "future", "mood": "participle", "conjugation": "3rd"}, // [cite: 461]
    {"word": "ducendus (decl)", "voice": "passive", "tense": "future", "mood": "participle", "conjugation": "3rd"}, // [cite: 462]

    // 4th Conjugation
    {"word": "auditurus (decl)", "voice": "active", "tense": "future", "mood": "participle", "conjugation": "4th"}, // [cite: 463]
    {"word": "audiendus (decl)", "voice": "passive", "tense": "future", "mood": "participle", "conjugation": "4th"}  // [cite: 463]

//
];
console.log(grammarData[0].word);