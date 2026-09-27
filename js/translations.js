/**
 * Rajasthani Wedding Invitation - Priyansh & Shreya
 * Complete Bilingual Translation & Content Configuration Data
 * Default Language: Gujarati (ગુજરાતી)
 * Easily customizable for dates, times, names, and venue.
 */

const weddingData = {
  names: {
    groom: {
      gu: "પ્રિયાંશ",
      en: "Priyansh"
    },
    bride: {
      gu: "શ્રેયા",
      en: "Shreya"
    },
    monogram: "SP"
  },
  weddingDate: "2026-11-22T09:30:00",
  venue: {
    name: {
      gu: "શ્રી નમેન માતાજી મંદિર",
      en: "Shree Namen Mataji Mandir"
    },
    address: {
      gu: "નમેન માતાજી મંદિર, કમલી રોડ, ઊંઝા, મહેસાણા, ગુજરાત",
      en: "Namen Mataji Mandir, Kamli Road, Unjha, Mehsana, Gujarat"
    },
    landmark: {
      gu: "કમલી રોડ, ઊંઝા, જિલ્લો મહેસાણા",
      en: "Kamli Road, Unjha, District Mehsana"
    },
    mapQuery: "Namen+Mataji+Mandir+Kamli+Road+Unjha+Mehsana+Gujarat"
  },
  ceremonies: [
    {
      id: "grah-shanti",
      name: {
        gu: "ગ્રહ શાંતિ",
        en: "Grah Shanti"
      },
      tagline: {
        gu: "નવગ્રહ પૂજન અને દૈવી આશીર્વાદ",
        en: "Divine Invocation of Blessings"
      },
      date: {
        gu: "શનિવાર, ૨૧ નવેમ્બર ૨૦૨૬",
        en: "Saturday, 21 November 2026"
      },
      time: {
        gu: "સવારે ૧૦:૩૦ કલાકે",
        en: "10:30 AM Onwards"
      },
      address: {
        gu: "વરવાડા, ઊંઝા, મહેસાણા",
        en: "Varavada, Unjha, Mehsana"
      },
      description: {
        gu: "શ્રી ગણેશજી અને નવગ્રહ દેવતાઓની કૃપાથી દાંપત્ય જીવનમાં સુખ, શાંતિ અને સમૃદ્ધિના મંગલ આશીર્વાદ અર્થે પાવન પૂજન.",
        en: "Invoking the divine grace of Lord Ganesha and the Navagrahas to bestow harmony, peace, and auspicious energy upon the sacred union."
      },
      image: "images/ceremony_grahshanti.jpg",
      symbol: "🪔"
    },
    {
      id: "mameru",
      name: {
        gu: "મામેરું (મોસાળું)",
        en: "Mameru"
      },
      tagline: {
        gu: "મોસાળ પક્ષનું વાત્સલ્ય અને મંગલ શુકન",
        en: "The Maternal Feast of Love & Shagun"
      },
      date: {
        gu: "શનિવાર, ૨૧ નવેમ્બર ૨૦૨૬",
        en: "Saturday, 21 November 2026"
      },
      time: {
        gu: "બપોરે ૨:૦૦ કલાકે",
        en: "02:00 PM"
      },
      address: {
        gu: "વરવાડા, ઊંઝા, મહેસાણા",
        en: "Varavada, Unjha, Mehsana"
      },
      description: {
        gu: "મામા-મામી અને મોસાળ પક્ષ દ્વારા પરંપરાગત વસ્ત્રો, આભૂષણો અને હેતભર્યા શુકન સાથે કન્યાને આપવાના સ્નેહપૂર્ણ આશીર્વાદ.",
        en: "A joyous celebration honoring the maternal uncles and family who arrive bearing auspicious traditional gifts, Bandhani, and heartfelt blessings."
      },
      image: "images/ceremony_mameru.jpg",
      symbol: "🎁"
    },
    {
      id: "haldi",
      name: {
        gu: "હળદી રસમ (પીઠી)",
        en: "Haldi Rasam"
      },
      tagline: {
        gu: "સુવર્ણ પીઠી અને આનંદનો રંગોત્સવ",
        en: "Sunlit Glow of Golden Turmeric"
      },
      date: {
        gu: "શનિવાર, ૨૧ નવેમ્બર ૨૦૨૬",
        en: "Saturday, 21 November 2026"
      },
      time: {
        gu: "સાંજે ૪:૦૦ કલાકે",
        en: "04:00 PM"
      },
      address: {
        gu: "વરવાડા, ઊંઝા, મહેસાણા",
        en: "Varavada, Unjha, Mehsana"
      },
      description: {
        gu: "સુગંધિત હળદર, તાજા ગલગોટાના પુષ્પો અને મંગલ ગીતોના મધુર સૂર વચ્ચે વર-કન્યાને શુકનની પીઠી ચોળવાનો ઉલ્લાસમય ઉત્સવ.",
        en: "An exuberant celebration soaked in golden turmeric, vibrant marigold petals, traditional folk songs, and joyous laughter."
      },
      image: "images/ceremony_haldi.jpg",
      symbol: "🌼"
    },
    {
      id: "jan-prasthan",
      name: {
        gu: "જાન પ્રસ્થાન",
        en: "Jan Prasthan"
      },
      tagline: {
        gu: "ધૂમધામથી નીકળતી મંગલ જાન",
        en: "The Grand Wedding Procession"
      },
      date: {
        gu: "રવિવાર, ૨૨ નવેમ્બર ૨૦૨૬",
        en: "Sunday, 22 November 2026"
      },
      time: {
        gu: "સાંજે ૬:૩૦ કલાકે",
        en: "06:30 PM"
      },
      address: {
        gu: "વરવાડા, ઊંઝા, મહેસાણા",
        en: "Varavada, Unjha, Mehsana"
      },
      description: {
        gu: "શણગારેલા અશ્વ, ઢોલ-નગારા, શરણાઈના નાદ અને આતશબાજીની ભવ્ય રોશની વચ્ચે લગ્ન મંડપ તરફ પ્રસ્થાન કરતી જાન.",
        en: "The majestic groom's procession with traditional decorated horse, brass bands, festive fanfare, and celebratory fireworks."
      },
      image: "images/ceremony_baraat.jpg",
      symbol: "🐎"
    },
    {
      id: "hasta-melap",
      name: {
        gu: "હસ્ત મેળાપ અને મંગળફેરા",
        en: "Hasta Melap"
      },
      tagline: {
        gu: "અગ્નિની સાક્ષીએ સપ્તપદીના પાવન વચન",
        en: "The Eternal Sacred Vows"
      },
      date: {
        gu: "રવિવાર, ૨૨ નવેમ્બર ૨૦૨૬",
        en: "Sunday, 22 November 2026"
      },
      time: {
        gu: "સવારે ૯:૩૦ કલાકે / શુભ મુહૂર્ત",
        en: "09:30 AM / Shubh Muhurat"
      },
      address: {
        gu: "શ્રી નમેન માતાજી મંદિર, કમલી રોડ, ઊંઝા, મહેસાણા",
        en: "Shree Namen Mataji Mandir, Kamli Road, Unjha, Mehsana"
      },
      description: {
        gu: "પવિત્ર યજ્ઞ અગ્નિની સાક્ષીએ હસ્તમેળાપ, ગ્રંથિબંધન અને સાત જન્મોના અતૂટ બંધનમાં બંધાવાનો પરમ પવિત્ર મંગલ ક્ષણ.",
        en: "The sacred union where two souls become one before the holy fire, tied in eternal granthi-bandhan and taking the seven sacred pheras."
      },
      image: "images/ceremony_hastamelap.jpg",
      symbol: "🔥"
    }
  ]
};

const translations = {
  gu: {
    metaTitle: "પ્રિયાંશ સંગ શ્રેયા | લગ્ન નિમંત્રણ પત્રિકા",
    langToggle: "English",
    
    // Entrance / Stamp (No "શાહી" / "royal")
    entranceHeader: "પટેલ પરિવાર લગ્ન નિમંત્રણ પત્રિકા",
    entranceSubheader: "પ્રેમ અને પરંપરાનો ભવ્ય મંગલોત્સવ",
    sealInstruction: "પ્રવેશવા માટે મહોર પર સ્પર્શ કરો",
    sealSubInstruction: "ભવ્ય હવેલી મહેલમાં આપનું હાર્દિક સ્વાગત છે",
    enterCelebrationBtn: "મહેલમાં પ્રવેશ કરો",
    
    // Nav
    navHome: "પ્રવેશ",
    navInvitation: "કંકોતરી",
    navCeremonies: "કાર્યક્રમો",
    navVenue: "લગ્ન સ્થળ",
    navCountdown: "શુભ ઘડી",
    
    // Hero
    shubhVivah: "॥ શુભ વિવાહ ॥",
    ganeshVandana: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    ganeshMeaning: "હે વક્રતુંડ મહાકાય, કરોડો સૂર્ય સમાન તેજસ્વી ગણેશજી! અમારા સર્વ કાર્યો નિર્વિઘ્ને સંપન્ન કરજો.",
    groomName: "પ્રિયાંશ",
    wedsText: "સંગ",
    brideName: "શ્રેયા",
    heroInviteText: "પરિવારના આશીર્વાદ સાથે, તેઓ આપ સૌને તેમના દાંપત્ય જીવનની મંગલ શરૂઆતમાં ભાવભર્યું આમંત્રણ પાઠવે છે.",
    weddingDateHero: "૨૨ નવેમ્બર ૨૦૨૬ • ઊંઝા, મહેસાણા",
    scrollHint: "મંગલ ઉત્સવમાં આગળ વધો",
    
    // Invitation Farman
    invitationHeading: "પરિવારના મંગલ આશીર્વાદ સાથે",
    invitationSubtitle: "સંસ્કાર, સ્નેહ અને સમર્પણનો પવિત્ર સંગમ",
    invitationBody1: "સ્નેહ અને લાગણીના આ મંગલ અવસરે, અમારા પ્રિય સંતાનો પ્રિયાંશ અને શ્રેયાના પ્રભુતામાં પગલાં પાડવાના આ પાવન પ્રસંગે આપના આશીર્વાદ અને સ્નેહપૂર્ણ ઉપસ્થિતિની અભ્યર્થના કરીએ છીએ.",
    invitationBody2: "આપની પાવન ઉપસ્થિતિ અમારા આ મહોત્સવને વિશેષ બનાવશે અને વર-વધૂને અખંડ સૌભાગ્યના આશીર્વાદ આપશે.",
    hostsGroom: "વર પક્ષ પરિવાર",
    groomFamilyNames: "ઉપેરીયા પરિવાર",
    hostsBride: "કન્યા પક્ષ પરિવાર",
    brideFamilyNames: "પલાસરિયા પરિવાર",
    rsvpLabel: "સ્નેહાધીન નિમંત્રક",
    
    // Ceremonies
    ceremoniesHeading: "લગ્નોત્સવના શુભ કાર્યક્રમો",
    ceremoniesSubtitle: "મંગળ ધાર્મિક વિધિઓ અને ઉલ્લાસમય ઉત્સવની રૂપરેખા",
    
    // Venue
    venueHeading: "લગ્ન સ્થળ",
    venueSubtitle: "જ્યાં પરંપરા અને ભવ્યતાનું અનોખું મિલન થાય છે",
    venuePlace: "શ્રી નમેન માતાજી મંદિર, કમલી રોડ",
    venueDist: "ઊંઝા, જિલ્લો મહેસાણા, ગુજરાત",
    directionsLabel: "સ્થળ માર્ગદર્શન",
    directionsText: "શ્રી નમેન માતાજી મંદિર, કમલી રોડ, ઊંઝા ખાતે આપનું ઉષ્માભર્યું સ્વાગત છે. આપના આગમન માટે ઉત્તમ વ્યવસ્થા કરવામાં આવી છે.",
    viewMapBtn: "ગૂગલ મેપ્સમાં જુઓ",
    copyAddressBtn: "સરનામું કોપી કરો",
    addressCopied: "સરનામું કોપી થઈ ગયું!",
    
    // Countdown
    countdownHeading: "મંગલ ઉત્સવ શરૂ થવામાં બાકી સમય",
    countdownSubtitle: "૨૨ નવેમ્બર ૨૦૨૬ ની શુભ ઘડીની આતુરતાપૂર્વક રાહ",
    days: "દિવસ",
    hours: "કલાક",
    minutes: "મિનિટ",
    seconds: "સેકન્ડ",
    countdownLive: "આજે લગ્નનો મંગલ દિવસ છે! આપનું સહર્ષ સ્વાગત છે!",
    
    // Finale
    finaleTitle: "પ્રિયાંશ સંગ શ્રેયા",
    finaleDate: "૨૨ નવેમ્બર ૨૦૨૬",
    finaleSubtitle: "એક નવો મંગલ અધ્યાય શરૂ થાય છે...",
    finaleWish: "ઈશ્વર બંનેના દાંપત્ય જીવનને પ્રેમ, સદભાવ અને અનંત આનંદથી સદા પ્રફુલ્લિત રાખે.",
    backToTopBtn: "પ્રવેશદ્વારે પાછા જાઓ",
    replayEntranceBtn: "પ્રવેશ ફરીથી માણો",
    
    // Audio
    musicPlay: "સંગીત શરૂ કરો",
    musicPause: "સંગીત બંધ કરો",
    musicPlayingText: "શરણાઈ અને સિતાર રાગ"
  },

  en: {
    metaTitle: "Priyansh Weds Shreya | Wedding Invitation",
    langToggle: "ગુજરાતી",
    
    // Entrance / Stamp (No "royal")
    entranceHeader: "Patel Family Wedding Invitation",
    entranceSubheader: "A Celebration of Love and Tradition",
    sealInstruction: "Tap the Seal to Enter",
    sealSubInstruction: "Experience the Grand Rajasthani Mahal",
    enterCelebrationBtn: "Enter the Mahal",
    
    // Nav
    navHome: "Entrance",
    navInvitation: "Invitation",
    navCeremonies: "Ceremonies",
    navVenue: "Venue",
    navCountdown: "Countdown",
    
    // Hero
    shubhVivah: "॥ शुभ विवाह ॥",
    ganeshVandana: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    ganeshMeaning: "O Lord Ganesha, with curved trunk and brilliance of a billion suns, remove all obstacles from our journey forever.",
    groomName: "Priyansh",
    wedsText: "Weds",
    brideName: "Shreya",
    heroInviteText: "Together with their families, they cordially invite you to celebrate the beginning of their forever.",
    weddingDateHero: "22 November 2026 • Unjha, Mehsana",
    scrollHint: "Scroll into the Celebrations",
    
    // Invitation Farman
    invitationHeading: "With the Blessings of Our Families",
    invitationSubtitle: "A Sacred Union Blessed by Tradition and Divinity",
    invitationBody1: "With hearts brimming with gratitude and immense joy, we solicit your esteemed presence and benevolent blessings as our beloved children embark upon the sacred journey of matrimony.",
    invitationBody2: "Your gracious presence will sanctify their vows and make our celebration truly joyous and memorable.",
    hostsGroom: "The Groom's Family",
    groomFamilyNames: "Uperiya Family",
    hostsBride: "The Bride's Family",
    brideFamilyNames: "Palasariya Family",
    rsvpLabel: "Cordial Welcome",
    
    // Ceremonies
    ceremoniesHeading: "The Wedding Celebrations",
    ceremoniesSubtitle: "Five Auspicious Gatherings of Music, Colors & Sacred Rituals",
    
    // Venue
    venueHeading: "The Wedding Destination",
    venueSubtitle: "Where Heritage and Celebrations Converge",
    venuePlace: "Shree Namen Mataji Mandir, Kamli Road",
    venueDist: "Unjha, District Mehsana, Gujarat",
    directionsLabel: "Venue Navigation",
    directionsText: "Join us at Shree Namen Mataji Mandir, Kamli Road, Unjha, Mehsana, Gujarat. Reception and hospitality await your arrival.",
    viewMapBtn: "Open in Google Maps",
    copyAddressBtn: "Copy Address",
    addressCopied: "Address Copied to Clipboard!",
    
    // Countdown
    countdownHeading: "The Celebration Begins In",
    countdownSubtitle: "Counting Every Precious Moment to 22 November 2026",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    countdownLive: "The Wedding is Today! Warmest Welcome!",
    
    // Finale
    finaleTitle: "Priyansh Weds Shreya",
    finaleDate: "22 November 2026",
    finaleSubtitle: "A new chapter begins...",
    finaleWish: "May divine grace illuminate their path of love, duty, and eternal companionship.",
    backToTopBtn: "Return to Palace Entrance",
    replayEntranceBtn: "Re-experience Palace Entrance",
    
    // Audio
    musicPlay: "Play Music",
    musicPause: "Pause Music",
    musicPlayingText: "Shehnai & Sitar Raga"
  }
};
