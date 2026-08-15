/**
 * KisaanSahayak - Core Data Repository with Deep Multi-Language Dictionaries
 * Supports 100% reactive localization across all 8 official languages:
 * English (EN), Hindi (HI), Punjabi (PA), Marathi (MR), Gujarati (GU), Bengali (BN), Telugu (TE), Tamil (TA).
 */

const APP_DATA = {
  // Helper to extract localized text with graceful English fallback
  getLoc: function(obj, field, lang) {
    if (!obj) return '';
    const l = lang || 'en';
    if (obj.translations && obj.translations[l] && obj.translations[l][field] !== undefined) {
      return obj.translations[l][field];
    }
    if (obj.translations && obj.translations['en'] && obj.translations['en'][field] !== undefined) {
      return obj.translations['en'][field];
    }
    return obj[field] || '';
  },

  // KPI Summary
  kpiSummary: {
    criticalZones: "3 Zones",
    spreadVelocityAlerts: "3 Zones",
    activeSurveillance: "3 Zones",
    totalAcreage: "289.7k Ha",
    translations: {
      en: { criticalDesc: "Critical / Red Alert Outbreaks", spreadVelocityDesc: "High Spread Velocity Alerts", activeSurveillanceDesc: "Moderate Active Surveillance", totalAcreageDesc: "Total Acreage Monitored" },
      hi: { criticalDesc: "गंभीर / लाल चेतावनी प्रकोप", spreadVelocityDesc: "तीव्र प्रसार वेग चेतावनी", activeSurveillanceDesc: "मध्यम सक्रिय निगरानी", totalAcreageDesc: "कुल निगरानी क्षेत्र" },
      pa: { criticalDesc: "ਗੰਭੀਰ / ਲਾਲ ਅਲਰਟ ਪ੍ਰਕੋਪ", spreadVelocityDesc: "ਤੇਜ਼ੀ ਨਾਲ ਫੈਲਣ ਵਾਲੇ ਅਲਰਟ", activeSurveillanceDesc: "ਦਰਮਿਆਨੀ ਸਰਗਰਮ ਨਿਗਰਾਨੀ", totalAcreageDesc: "ਕੁੱਲ ਨਿਗਰਾਨੀ ਅਧੀਨ ਰਕਬਾ" },
      mr: { criticalDesc: "गंभीर / रेड अलर्ट प्रादुर्भाव", spreadVelocityDesc: "जलद प्रसार वेग चेतावणी", activeSurveillanceDesc: "मध्यम सक्रिय देखरेख", totalAcreageDesc: "एकूण देखरेखीखालील क्षेत्र" },
      gu: { criticalDesc: "ગંભીર / રેડ એલર્ટ ઉપદ્રવ", spreadVelocityDesc: "ઝડપી ફેલાવા વેગ એલર્ટ", activeSurveillanceDesc: "મધ્યમ સક્રિય દેખરેખ", totalAcreageDesc: "કુલ દેખરેખ હેઠળનો વિસ્તાર" },
      bn: { criticalDesc: "গুরুতর / লাল সতর্কতা প্রাদুর্ভাব", spreadVelocityDesc: "দ্রুত বিস্তার বেগ সতর্কতা", activeSurveillanceDesc: "মাঝারি সক্রিয় নজরদারি", totalAcreageDesc: "মোট নজরদারিকৃত জমি" },
      te: { criticalDesc: "తీవ్రమైన / రెడ్ అలర్ట్ తెగుళ్లు", spreadVelocityDesc: "వేగంగా వ్యాపించే హెచ్చరికలు", activeSurveillanceDesc: "మధ్యస్థ క్రియాశీల నిఘా", totalAcreageDesc: "మొత్తం పర్యవేక్షణ విస్తీర్ణం" },
      ta: { criticalDesc: "தீவிர / சிவப்பு எச்சரிக்கை பாதிப்புகள்", spreadVelocityDesc: "வேகமாக பரவும் எச்சரிக்கைகள்", activeSurveillanceDesc: "மிதமான தீவிர கண்காணிப்பு", totalAcreageDesc: "மொத்த கண்காணிக்கப்படும் பரப்பளவு" }
    }
  },

  // Active Hotspots Across India
  hotspots: [
    {
      id: "hotspot-1",
      severity: "severe",
      severityLabel: "SEVERE",
      affectedArea: "48.5k Ha",
      spreadVelocity: "+14.2% weekly",
      intensity: 88,
      lat: 30.9010,
      lng: 75.8573,
      cropCategory: "cereals",
      advisoryHotline: "0161-2401960",
      bulletinPdf: "Wheat_Yellow_Rust_State_Advisory_Punjab.pdf",
      translations: {
        en: {
          name: "Wheat Yellow Rust & Blast Outbreak",
          region: "Punjab & Haryana",
          state: "Punjab",
          district: "Ludhiana, Bathinda, Patiala",
          crop: "Wheat (Cereals & Grains)",
          symptoms: "Bright yellow, powdery pustules arranged in linear stripes on leaf blades, stunted crop height and chlorotic streaks.",
          yieldLossRisk: "Stunted crop height and up to 55% potential yield drop if untreated within 7 days.",
          bioRemedies: [
            "Foliar spray of 5% Neem Seed Kernel Extract (NSKE) at early onset",
            "Spray Cow Urine + Fermented Sour Butter Milk (Chhachh) @ 10:1 ratio",
            "Apply Trichoderma viride bio-fungicide @ 5g/litre of water"
          ],
          chemicalRemedies: [
            "Propiconazole 25% EC (Tilt) @ 200 ml in 200 liters of water per acre",
            "Tebuconazole 25.9% EC (Folicur) @ 1.5 ml per litre of water",
            "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/litre"
          ],
          advisoryHead: "Dr. H.S. Gill (Joint Director Plant Protection, Punjab)"
        },
        hi: {
          name: "गेहूं पीला रतुआ और ब्लास्ट प्रकोप",
          region: "पंजाब और हरियाणा",
          state: "पंजाब",
          district: "लुधियाना, बठिंडा, पटियाला",
          crop: "गेहूं (अनाज और खाद्यान्न)",
          symptoms: "पत्तियों पर समानांतर धारियों में चमकदार पीले पाउडर जैसे दाने और पौधों की बढ़वार रुकना।",
          yieldLossRisk: "उपचार न करने पर 7 दिनों के भीतर 55% तक उपज हानि की आशंका।",
          bioRemedies: [
            "प्रारंभिक अवस्था में 5% नीम बीज गिरी अर्क (NSKE) का पर्णीय छिड़काव करें",
            "गोमूत्र + खट्टी छाछ (10:1 अनुपात) का 10 गुना पानी में घोल बनाकर छिड़कें",
            "ट्राइकोडर्मा विरिडी जैव-कवकनाशी @ 5 ग्राम प्रति लीटर पानी का प्रयोग करें"
          ],
          chemicalRemedies: [
            "प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 200 मिली प्रति 200 लीटर पानी प्रति एकड़",
            "टेबुकोनाज़ोल 25.9% EC (फॉलिकुर) @ 1.5 मिली प्रति लीटर पानी",
            "एज़ोक्सीस्ट्रोबिन 18.2% + डिफेनोकोनाज़ोल 11.4% SC @ 1 मिली/लीटर"
          ],
          advisoryHead: "डॉ. एच.एस. गिल (संयुक्त निदेशक पादप संरक्षण, पंजाब)"
        },
        pa: {
          name: "ਕਣਕ ਦਾ ਪੀਲਾ ਕੁੰਗੀ ਅਤੇ ਬਲਾਸਟ ਪ੍ਰਕੋਪ",
          region: "ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ",
          state: "ਪੰਜਾਬ",
          district: "ਲੁਧਿਆਣਾ, ਬਠਿੰਡਾ, ਪਟਿਆਲਾ",
          crop: "ਕਣਕ (ਅਨਾਜ)",
          symptoms: "ਪੱਤਿਆਂ 'ਤੇ ਪੀਲੇ ਰੰਗ ਦੇ ਧੂੜ ਵਰਗੇ ਦਾਣੇ ਲੰਬੀਆਂ ਧਾਰੀਆਂ ਵਿੱਚ ਦਿਖਾਈ ਦੇਣਾ।",
          yieldLossRisk: "ਸਮੇਂ ਸਿਰ ਇਲਾਜ ਨਾ ਹੋਣ 'ਤੇ 55% ਤੱਕ ਝਾੜ ਦਾ ਭਾਰੀ ਨੁਕਸਾਨ।",
          bioRemedies: [
            "ਸ਼ੁਰੂਆਤੀ ਲੱਛਣਾਂ 'ਤੇ 5% ਨਿੰਮ ਅਰਕ (NSKE) ਦਾ ਛਿੜਕਾਅ ਕਰੋ",
            "ਗਊ ਮੂਤਰ + ਖੱਟੀ ਲੱਸੀ (10:1 ਅਨੁਪਾਤ) ਦਾ ਘੋਲ ਪਾਣੀ ਵਿੱਚ ਮਿਲਾ ਕੇ ਛਿੜਕੋ",
            "ਟਰਾਈਕੋਡਰਮਾ ਵਿਰੀਡੀ ਜੈਵਿਕ ਉੱਲੀਨਾਸ਼ਕ @ 5 ਗ੍ਰਾਮ/ਲਿਟਰ ਪਾਣੀ ਵਰਤੋ"
          ],
          chemicalRemedies: [
            "ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 25% EC (ਟਿਲਟ) @ 200 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ 200 ਲਿਟਰ ਪਾਣੀ ਪ੍ਰਤੀ ਏਕੜ",
            "ਟੈਬੂਕੋਨਾਜ਼ੋਲ 25.9% EC @ 1.5 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ ਲਿਟਰ ਪਾਣੀ",
            "ਅਜ਼ੌਕਸੀਸਟ੍ਰੋਬਿਨ 18.2% + ਡਾਈਫੇਨੋਕੋਨਾਜ਼ੋਲ @ 1 ਮਿਲੀਲਿਟਰ/ਲਿਟਰ"
          ],
          advisoryHead: "ਡਾ. ਐਚ.ਐਸ. ਗਿੱਲ (ਸੰਯੁਕਤ ਡਾਇਰੈਕਟਰ ਪਲਾਂਟ ਪ੍ਰੋਟੈਕਸ਼ਨ, ਪੰਜਾਬ)"
        },
        mr: {
          name: "गव्हावरील पिवळा तांबेरा व ब्लास्ट प्रादुर्भाव",
          region: "पंजाब व हरियाणा",
          state: "पंजाब",
          district: "लुधियाना, भटिंडा, पतियाळा",
          crop: "गहू (धान्य व तृणधान्ये)",
          symptoms: "पानांवर पिवळसर रंगाच्या पावडरसारख्या पट्ट्या व पिकांची खुंटलेली वाढ.",
          yieldLossRisk: "योग्य वेळी फवारणी न केल्यास 55% पर्यंत उत्पादन घट.",
          bioRemedies: [
            "सुरुवातीला 5% निंबोळी अर्क (NSKE) ची फवारणी करा",
            "गोमूत्र + आंबट ताक (10:1 प्रमाण) पाण्यात मिसळून फवारा",
            "ट्रायकोडर्मा व्हिरीडी @ 5 ग्रॅम प्रति लिटर पाणी वापरा"
          ],
          chemicalRemedies: [
            "प्रोपिकोनाझोल 25% EC @ 200 मिली प्रति 200 लिटर पाणी प्रति एकर",
            "टेबुकोनाझोल 25.9% EC @ 1.5 मिली प्रति लिटर पाणी",
            "अझॉक्सीस्ट्रॉबिन + डायफेनोकोनाझोल @ 1 मिली/लिटर"
          ],
          advisoryHead: "डॉ. एच.एस. गिल (सहसंचालक वनस्पती संरक्षण, पंजाब)"
        },
        gu: {
          name: "ઘઉંનો પીળો ગેરુ અને બ્લાસ્ટ રોગ",
          region: "પંજાબ અને હરિયાણા",
          state: "પંજાબ",
          district: "લુધિયાણા, ભટિંડા, પટિયાલા",
          crop: "ઘઉં (અનાજ)",
          symptoms: "પાન પર પીળી પાવડર જેવી પટ્ટીઓ અને છોડનો વિકાસ અટકી જવો.",
          yieldLossRisk: "ઉપચાર ન કરવાથી 55% સુધી ઉત્પાદન નુકસાનની શક્યતા.",
          bioRemedies: [
            "પ્રારંભિક લક્ષણો પર 5% લીંબોળી અર્ક (NSKE) નો છંટકાવ કરો",
            "ગૌમૂત્ર + ખાટી છાશ (10:1 પ્રમાણ) નો છંટકાવ કરો",
            "ટ્રાઈકોડર્મા વિરીડી @ 5 ગ્રામ પ્રતિ લીટર પાણી વાપરો"
          ],
          chemicalRemedies: [
            "પ્રોપિકોનાઝોલ 25% EC @ 200 મિલી પ્રતિ 200 લીટર પાણી પ્રતિ એકર",
            "ટેબુકોનાઝોલ 25.9% EC @ 1.5 મિલી પ્રતિ લીટર",
            "એઝોક્સીસ્ટ્રોબિન + ડાયફેનોકોનાઝોલ @ 1 મિલી/લીટર"
          ],
          advisoryHead: "ડૉ. એચ.એસ. ગિલ (સંયુક્ત નિયામક પ્લાન્ટ પ્રોટેક્શન, પંજાબ)"
        },
        bn: {
          name: "গমের হলুদ মরিচা ও ব্লাস্ট প্রাদুর্ভাব",
          region: "পাঞ্জাব ও হরিয়ানা",
          state: "পাঞ্জাব",
          district: "লুধিয়ানা, বাথিন্ডা, পাতিয়ালা",
          crop: "গম (দানাশস্য)",
          symptoms: "পাতার ওপর হলুদ রঙের গুঁড়োর মতো রেখা ও ফসলের বৃদ্ধি থমকে যাওয়া।",
          yieldLossRisk: "চিকিৎসা না হলে ৫৫% পর্যন্ত ফলন ক্ষতির আশঙ্কা।",
          bioRemedies: [
            "প্রাথমিক পর্যায়ে ৫% নিম বীজের নির্যাস (NSKE) স্প্রে করুন",
            "গোমূত্র + টক ঘোল (১০:১ অনুপাতে) মিশিয়ে স্প্রে করুন",
            "ট্রাইকোডার্মা ভিরিডি ৫ গ্রাম/লিটার জলে প্রয়োগ করুন"
          ],
          chemicalRemedies: [
            "প্রোপিকোনাজোল ২৫% EC ২০০ মিলি প্রতি ২০০ লিটার জলে প্রতি একরে",
            "টেবুকোনাজোল ২৫.৯% EC ১.৫ মিলি প্রতি লিটার জলে",
            "অ্যাজোক্সিস্ট্রোবিন + ডিফেনোকোনাজোল ১ মিলি/লিটার"
          ],
          advisoryHead: "ড. এইচ.এস. গিল (যুগ্ম অধিকর্তা উদ্ভিদ সুরক্ষা, পাঞ্জাব)"
        },
        te: {
          name: "గోధుమ పసుపు కుంకుమ తెగులు & బ్లాస్ట్",
          region: "పంజాబ్ & హర్యానా",
          state: "పంజాబ్",
          district: "లూధియానా, బటిండా",
          crop: "గోధుమ (ధాన్యాలు)",
          symptoms: "ఆకులపై పసుపు రంగు చారలు మరియు మొక్క ఎదుగుదల క్షీణించడం.",
          yieldLossRisk: "నివారణ చేపట్టకపోతే 55% వరకు దిగుబడి నష్టం.",
          bioRemedies: [
            "ప్రారంభంలో 5% వేప గింజల కషాయం (NSKE) పిచికారీ చేయండి",
            "గోమూత్రం + పులిసిన మజ్జిగ (10:1 నిష్పత్తి) పిచికారీ చేయండి",
            "ట్రైకోడెర్మా విరిడి @ 5 గ్రా/లీటరు నీటికి వాడండి"
          ],
          chemicalRemedies: [
            "ప్రొపికోనజోల్ 25% EC @ 200 మి.లీ ఎకరాకు 200 లీటర్ల నీటిలో",
            "టెబుకోనజోల్ 25.9% EC @ 1.5 మి.లీ లీటరు నీటికి",
            "అజోక్సిస్ట్రోబిన్ + డైఫెనోకోనజోల్ @ 1 మి.లీ/లీ"
          ],
          advisoryHead: "డా. హెచ్.ఎస్. గిల్ (జాయింట్ డైరెక్టర్ ప్లాంట్ ప్రొటెక్షన్, పంజాబ్)"
        },
        ta: {
          name: "கோதுமை மஞ்சள் துரு நோய் & பிளாஸ்ட்",
          region: "பஞ்சாப் & ஹரியானா",
          state: "பஞ்சாப்",
          district: "லூதியானா, பதிண்டா",
          crop: "கோதுமை (தானியங்கள்)",
          symptoms: "இலைகளில் மஞ்சள் நிற பொடி போன்ற கோடுகள் மற்றும் பயிர் வளர்ச்சி குன்றுதல்.",
          yieldLossRisk: "சிகிச்சையளிக்காவிட்டால் 55% வரை மகசூல் இழப்பு அபாயம்.",
          bioRemedies: [
            "ஆரம்பத்தில் 5% வேப்பங்கொட்டை சாறு (NSKE) தெளிக்கவும்",
            "மாட்டு சிறுநீர் + புளித்த மோர் (10:1 விகிதம்) தெளிக்கவும்",
            "டிரைக்கோடெர்மா விரிடி @ 5 கிராம்/லிட்டர் நீரில் பயன்படுத்தவும்"
          ],
          chemicalRemedies: [
            "ப்ரோபிகோனசோல் 25% EC @ 200 மி.லி/ஏக்கர் 200 லிட்டர் நீரில்",
            "டெபுகோனசோல் 25.9% EC @ 1.5 மி.லி/லிட்டர் நீரில்",
            "அஸாக்சிஸ்ட்ரோபின் + டைபனோகோனசோல் @ 1 மி.லி/லி"
          ],
          advisoryHead: "டாக்டர் எச்.எஸ். கில் (இணை இயக்குனர் தாவர பாதுகாப்பு, பஞ்சாப்)"
        }
      }
    },
    {
      id: "hotspot-2",
      severity: "severe",
      severityLabel: "SEVERE",
      affectedArea: "68.2k Ha",
      spreadVelocity: "+11.8% weekly",
      intensity: 84,
      lat: 20.3888,
      lng: 78.1204,
      cropCategory: "cash_crops",
      advisoryHotline: "07232-245180",
      bulletinPdf: "Pink_Bollworm_Advisory_Vidarbha.pdf",
      translations: {
        en: {
          name: "Cotton Pink Bollworm Infestation",
          region: "Maharashtra (Vidarbha / Marathwada)",
          state: "Maharashtra",
          district: "Yavatmal, Akola, Wardha",
          crop: "Cotton (Kapas) (Cash Crops & Fibre)",
          symptoms: "Rosetted flowers ('Gulabi bond ali') with petals glued together, premature boll dropping, burrowed entry holes with brownish frass.",
          yieldLossRisk: "Severe lint staining, secondary locule rotting, and 40-60% ginning yield reduction.",
          bioRemedies: [
            "Install 5-8 Pheromone Traps per acre with Phero-Sensor lures for mass trapping",
            "Release Trichogramma bactrae egg parasitoids @ 60,000/acre at weekly intervals",
            "Foliar spray of Neem Oil (10,000 ppm) @ 2.5 ml/litre"
          ],
          chemicalRemedies: [
            "Emamectin Benzoate 5% SG @ 80-100 g in 200 liters water/acre",
            "Profenofos 50% EC @ 400 ml/acre during peak squaring stage",
            "Spinetoram 11.7% SC @ 170 ml/acre for advanced bollworm larvae"
          ],
          advisoryHead: "Shri Vijay Kolekar (Agro Commissionerate, Maharashtra)"
        },
        hi: {
          name: "कपास की गुलाबी सुंडी (पिंक बॉलवर्म) का प्रकोप",
          region: "महाराष्ट्र (विदर्भ / मराठवाड़ा)",
          state: "महाराष्ट्र",
          district: "यवतमाल, अकोला, वर्धा",
          crop: "कपास (नकदी फसल व रेशा)",
          symptoms: "गुलाब जैसे आपस में चिपके हुए फूल ('गुलाबी बोंड अळी'), बोंडों का समय से पहले गिरना और छिद्र।",
          yieldLossRisk: "कपास की गुणवत्ता खराब होना और 40-60% तक उपज का भारी नुकसान।",
          bioRemedies: [
            "प्रति एकड़ 5-8 फेरोमोन ट्रैप लगाएं",
            "ट्राइकोग्रामा परजीवी @ 60,000 प्रति एकड़ प्रति सप्ताह छोड़ें",
            "नीम का तेल (10,000 ppm) @ 2.5 मिली प्रति लीटर पानी में मिलाकर छिड़कें"
          ],
          chemicalRemedies: [
            "इमामेक्टिन बेंजोएट 5% SG @ 80-100 ग्राम प्रति 200 लीटर पानी प्रति एकड़",
            "प्रोफेनोफॉस 50% EC @ 400 मिली प्रति एकड़",
            "स्पाइनेटोरम 11.7% SC @ 170 मिली प्रति एकड़"
          ],
          advisoryHead: "श्री विजय कोलेकर (कृषि आयुक्तालय, महाराष्ट्र)"
        },
        pa: {
          name: "ਨਰਮੇ/ਕਪਾਹ ਦੀ ਗੁਲਾਬੀ ਸੁੰਡੀ ਦਾ ਹਮਲਾ",
          region: "ਮਹਾਰਾਸ਼ਟਰ (ਵਿਦਰਭ)",
          state: "ਮਹਾਰਾਸ਼ਟਰ",
          district: "ਯਵਤਮਾਲ, ਅਕੋਲਾ",
          crop: "ਕਪਾਹ / ਨਰਮਾ",
          symptoms: "ਫੁੱਲਾਂ ਦੀਆਂ ਪੱਤੀਆਂ ਦਾ ਆਪਸ ਵਿੱਚ ਜੁੜਨਾ ਅਤੇ ਟੀਂਡਿਆਂ ਵਿੱਚ ਛੇਕ।",
          yieldLossRisk: "ਰੂੰ ਦੀ ਕੁਆਲਿਟੀ ਖਰਾਬ ਹੋਣਾ ਅਤੇ 40-60% ਝਾੜ ਦਾ ਨੁਕਸਾਨ।",
          bioRemedies: [
            "ਪ੍ਰਤੀ ਏਕੜ 5-8 ਫੈਰੋਮੋਨ ਟਰੈਪ ਲਗਾਓ",
            "ਟਰਾਈਕੋਗ੍ਰਾਮਾ ਕਾਰਡ @ 60,000 ਪ੍ਰਤੀ ਏਕੜ ਛੱਡੋ",
            "ਨਿੰਮ ਤੇਲ (10,000 ppm) @ 2.5 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ ਲਿਟਰ ਛਿੜਕੋ"
          ],
          chemicalRemedies: [
            "ਇਮਾਮੈਕਟਿਨ ਬੈਂਜੋਏਟ 5% SG @ 80-100 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਏਕੜ",
            "ਪ੍ਰੋਫੈਨੋਫਾਸ 50% EC @ 400 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ ਏਕੜ",
            "ਸਪਾਈਨੇਟੋਰਮ 11.7% SC @ 170 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ ਏਕੜ"
          ],
          advisoryHead: "ਸ਼੍ਰੀ ਵਿਜੇ ਕੋਲੇਕਰ (ਖੇਤੀਬਾੜੀ ਕਮਿਸ਼ਨਰੇਟ, ਮਹਾਰਾਸ਼ਟਰ)"
        },
        mr: {
          name: "कापसावरील गुलाबी बोंडअळीचा प्रादुर्भाव",
          region: "महाराष्ट्र (विदर्भ / मराठवाडा)",
          state: "महाराष्ट्र",
          district: "यवतमाळ, अकोला, वर्धा",
          crop: "कापूस (रोख पीक व फायबर)",
          symptoms: "गुलाबी बोंडअळीमुळे डोमकळ्या तयार होणे, बोंडे अकाली गळणे व छिद्रे पडणे.",
          yieldLossRisk: "रुईची प्रत खराब होऊन 40-60% पर्यंत उत्पादन घट.",
          bioRemedies: [
            "एकरमध्ये 5-8 कामगंध सापळे (फेरोमोन ट्रॅप्स) लावा",
            "ट्रायकोग्रामा परोपजीवी कीटक @ 60,000 प्रति एकर सोडा",
            "कडुनिंब तेल (10,000 ppm) @ 2.5 मिली/लिटर फवारा"
          ],
          chemicalRemedies: [
            "इमामेक्टिन बेन्झोएट 5% SG @ 80-100 ग्रॅम प्रति 200 लिटर पाणी/एकर",
            "प्रोफेनोफॉस 50% EC @ 400 मिली/एकर",
            "स्पिनेटोरम 11.7% SC @ 170 मिली/एकर"
          ],
          advisoryHead: "श्री. विजय कोलेकर (कृषी आयुक्तालय, महाराष्ट्र)"
        },
        gu: {
          name: "કપાસમાં ગુલાબી ઈયળનો ઉપદ્રવ",
          region: "મહારાષ્ટ્ર (વિદર્ભ)",
          state: "મહારાષ્ટ્ર",
          district: "યવતમાળ, અકોલા",
          crop: "કપાસ (રોકડિયા પાક)",
          symptoms: "ફૂલોની પાંખડીઓ ચોંટી જવી અને ઝીંડવામાં કાણાં પડવા.",
          yieldLossRisk: "રૂ ની ગુણવત્તા બગડવી અને 40-60% ઉત્પાદન નુકસાન.",
          bioRemedies: [
            "પ્રતિ એકર 5-8 ફેરોમોન ટ્રેપ લગાવો",
            "ટ્રાઇકોગ્રામા કાર્ડ @ 60,000 પ્રતિ એકર છોડો",
            "લીમડાનું તેલ @ 2.5 મિલી પ્રતિ લીટર પાણીમાં છાંટો"
          ],
          chemicalRemedies: [
            "ઇમામેક્ટીન બેન્ઝોએટ 5% SG @ 80-100 ગ્રામ પ્રતિ એકર",
            "પ્રોફેનોફોસ 50% EC @ 400 મિલી પ્રતિ એકર",
            "સ્પીનેટોરમ 11.7% SC @ 170 મિલી પ્રતિ એકર"
          ],
          advisoryHead: "શ્રી વિજય કોલેકર (કૃષિ કમિશનરેટ, મહારાષ્ટ્ર)"
        },
        bn: {
          name: "তুলায় গোলাপী বোলওয়ার্মের সংক্রমণ",
          region: "মহারাষ্ট্র (বিদর্ভ)",
          state: "মহারাষ্ট্র",
          district: "ইয়াভাতমাল, আকোলা",
          crop: "তুলা (অর্থকরী ফসল)",
          symptoms: "ফুল একসাথে আটকে যাওয়া এবং গুটিতে পোকার আক্রমণ।",
          yieldLossRisk: "আঁশের ক্ষতি ও ৪০-৬০% পর্যন্ত ফলন হ্রাস।",
          bioRemedies: [
            "একর প্রতি ৫-৮টি ফেরোমন ট্র্যাপ ব্যবহার করুন",
            "ট্রাইকোগ্রামা প্যারাসাইট একর প্রতি ৬০,০০০ ছাড়ুন",
            "নিম তেল (১০,০০০ ppm) ২.৫ মিলি/লিটার স্প্রে করুন"
          ],
          chemicalRemedies: [
            "ইমামেকটিন বেনজয়েট ৫% SG ৮০-১০০ গ্রাম/একর",
            "প্রোফেনোফোস ৫০% EC ৪০০ মিলি/একর",
            "স্পিনেটোরাম ১১.৭% SC ১৭০ মিলি/একর"
          ],
          advisoryHead: "শ্রী বিজয় কোলেকার (কৃষি কমিশনারেট, মহারাষ্ট্র)"
        },
        te: {
          name: "పత్తిలో గులాబీ రంగు పురుగు ఉధృతి",
          region: "మహారాష్ట్ర (విదర్భ)",
          state: "మహారాష్ట్ర",
          district: "యవత్మాల్, అకోలా",
          crop: "పత్తి (వాణిజ్య పంట)",
          symptoms: "గుడ్డి పూలు ఏర్పడటం, కాయలలో రంధ్రాలు మరియు దూది రంగు మారడం.",
          yieldLossRisk: "40-60% వరకు భారీ దిగుబడి నష్టం.",
          bioRemedies: [
            "ఎకరాకు 5-8 లింగాకర్షక బుట్టలు (ఫెరమోన్ ట్రాప్స్) అమర్చండి",
            "ట్రైకోగ్రామా కార్డులు ఎకరాకు 60,000 విడుదల చేయండి",
            "వేప నూనె @ 2.5 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయండి"
          ],
          chemicalRemedies: [
            "ఇమామెక్టిన్ బెంజోయేట్ 5% SG @ 80-100 గ్రా ఎకరాకు",
            "ప్రొఫెనోఫాస్ 50% EC @ 400 మి.లీ ఎకరాకు",
            "స్పైనటోరమ్ 11.7% SC @ 170 మి.లీ ఎకరాకు"
          ],
          advisoryHead: "శ్రీ విజయ్ కోలేకర్ (వ్యవసాయ కమిషనరేట్, మహారాష్ట్ర)"
        },
        ta: {
          name: "பருத்தியில் இளஞ்சிவப்பு காய் புழு தாக்குதல்",
          region: "மகாராஷ்டிரா (விதர்பா)",
          state: "மகாராஷ்டிரா",
          district: "யவத்மால், அகோலா",
          crop: "பருத்தி",
          symptoms: "பூக்கள் ஒன்றோடு ஒன்று ஒட்டிக்கொள்ளுதல், காய்களில் துளைகள் மற்றும் பருத்தி தரம் குறைதல்.",
          yieldLossRisk: "40-60% வரை மகசூல் இழப்பு அபாயம்.",
          bioRemedies: [
            "ஏக்கருக்கு 5-8 இனக்கவர்ச்சி பொறிகளை வைக்கவும்",
            "டிரைக்கோகிரம்மா முட்டை ஒட்டுண்ணிகளை ஏக்கருக்கு 60,000 வெளியிடவும்",
            "வேப்ப எண்ணெய் @ 2.5 மி.லி/லிட்டர் நீரில் தெளிக்கவும்"
          ],
          chemicalRemedies: [
            "இமாமெக்டின் பென்சோயேட் 5% SG @ 80-100 கிராம்/ஏக்கர்",
            "ப்ரோஃபெனோஃபோஸ் 50% EC @ 400 மி.லி/ஏக்கர்",
            "ஸ்பினெடோரம் 11.7% SC @ 170 மி.லி/ஏக்கர்"
          ],
          advisoryHead: "திரு. விஜய் கோலேகர் (விவசாய ஆணையரகம், மகாராஷ்டிரா)"
        }
      }
    },
    {
      id: "hotspot-3",
      severity: "severe",
      severityLabel: "SEVERE",
      affectedArea: "41.0k Ha",
      spreadVelocity: "+9.5% weekly",
      intensity: 82,
      lat: 28.9845,
      lng: 77.7064,
      cropCategory: "cash_crops",
      advisoryHotline: "0581-2570081",
      bulletinPdf: "UP_Sugarcane_Red_Rot_Control_Guide.pdf",
      translations: {
        en: {
          name: "Sugarcane Red Rot Disease",
          region: "Uttar Pradesh (Western Terai Belt)",
          state: "Uttar Pradesh",
          district: "Muzaffarnagar, Meerut, Lakhimpur Kheri",
          crop: "Sugarcane (Ganna) (Cash Crops)",
          symptoms: "Third and fourth leaves from top show yellowing and drying along margins; internal cane pith displays dark red discoloration with white cross bands.",
          yieldLossRisk: "Complete loss of sucrose content (juice inversion) and 70% tonnage crop loss.",
          bioRemedies: [
            "Dip seed setts in Trichoderma harzianum @ 10g/litre for 30 minutes before planting",
            "Apply Pseudomonas fluorescens enriched organic farmyard manure in furrows",
            "Avoid ratoon cropping in infected patches; practice crop rotation with legumes"
          ],
          chemicalRemedies: [
            "Sett treatment with Carbendazim 50% WP @ 2g/litre water",
            "Soil drenching around cane roots with Thiophanate Methyl 70% WP @ 2g/litre",
            "Foliar spray of Copper Oxychloride 50% WP @ 3g/litre"
          ],
          advisoryHead: "Dr. B.K. Srivastava (Director UP Council of Sugarcane Research)"
        },
        hi: {
          name: "गन्ने का लाल सड़न (रेड रॉट) रोग",
          region: "उत्तर प्रदेश (पश्चिमी तराई क्षेत्र)",
          state: "उत्तर प्रदेश",
          district: "मुज़फ्फरनगर, मेरठ, लखीमपुर खीरी",
          crop: "गन्ना (नकदी फसल)",
          symptoms: "ऊपर से तीसरी व चौथी पत्तियां सूखना और गन्ने को चीरने पर अंदर लाल रंग के साथ सफेद धारियां दिखना।",
          yieldLossRisk: "शर्करा की मात्रा का पूर्ण विनाश और 70% तक गन्ने के वजन की भारी हानि।",
          bioRemedies: [
            "बुवाई से पहले बीज के टुकड़ों को ट्राइकोडर्मा हरज़ियानम @ 10 ग्राम/लीटर में 30 मिनट भिगोएं",
            "स्यूडोमोनास फ्लोरोसेंट युक्त गोबर की खाद कतारों में डालें",
            "संक्रमित खेत में पेड़ी गन्ना न लें और दलहनी फसलों के साथ फसल चक्र अपनाएं"
          ],
          chemicalRemedies: [
            "कार्बेन्डाजिम 50% WP @ 2 ग्राम/लीटर पानी से बीज उपचार",
            "थियोफैनेट मिथाइल 70% WP @ 2 ग्राम/लीटर से जड़ों की ड्रेंचिंग",
            "कॉपर ऑक्सीक्लोराइड 50% WP @ 3 ग्राम/लीटर का पर्णीय छिड़काव"
          ],
          advisoryHead: "डॉ. बी.के. श्रीवास्तव (निदेशक यूपी गन्ना अनुसंधान परिषद)"
        },
        pa: {
          name: "ਗੰਨੇ ਦਾ ਰੱਤਾ ਰੋਗ (ਰੈੱਡ ਰੋਟ)",
          region: "ਉੱਤਰ ਪ੍ਰਦੇਸ਼ (ਪੱਛਮੀ ਖੇਤਰ)",
          state: "ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
          district: "ਮੁਜ਼ੱਫਰਨਗਰ, ਮੇਰਠ",
          crop: "ਗੰਨਾ (ਨਕਦੀ ਫਸਲ)",
          symptoms: "ਗੰਨੇ ਦੇ ਵਿਚਕਾਰਲੇ ਹਿੱਸੇ ਦਾ ਲਾਲ ਹੋਣਾ ਅਤੇ ਖੰਡ ਦੀ ਮਾਤਰਾ ਘਟਣਾ।",
          yieldLossRisk: "ਗੰਨੇ ਦੇ ਭਾਰ ਵਿੱਚ 70% ਤੱਕ ਭਾਰੀ ਗਿਰਾਵਟ।",
          bioRemedies: [
            "ਬੀਜ ਨੂੰ ਟਰਾਈਕੋਡਰਮਾ @ 10 ਗ੍ਰਾਮ/ਲਿਟਰ ਵਿੱਚ 30 ਮਿੰਟ ਡੋਬ ਕੇ ਬੀਜੋ",
            "ਰੂੜੀ ਖਾਦ ਵਿੱਚ ਜੈਵਿਕ ਦਵਾਈ ਮਿਲਾ ਕੇ ਖੇਤ ਵਿੱਚ ਪਾਓ",
            "ਬਿਮਾਰੀ ਵਾਲੇ ਖੇਤ ਵਿੱਚ ਮੋਢੀ ਫਸਲ ਨਾ ਰੱਖੋ"
          ],
          chemicalRemedies: [
            "ਕਾਰਬੈਂਡਾਜ਼ਿਮ 50% WP @ 2 ਗ੍ਰਾਮ/ਲਿਟਰ ਨਾਲ ਬੀਜ ਸੋਧ",
            "ਥਾਇਓਫੈਨੇਟ ਮਿਥਾਈਲ @ 2 ਗ੍ਰਾਮ/ਲਿਟਰ ਨਾਲ ਜੜ੍ਹਾਂ ਦੀ ਸਿੰਚਾਈ",
            "ਕਾਪਰ ਆਕਸੀਕਲੋਰਾਈਡ @ 3 ਗ੍ਰਾਮ/ਲਿਟਰ ਛਿੜਕੋ"
          ],
          advisoryHead: "ਡਾ. ਬੀ.ਕੇ. ਸ਼੍ਰੀਵਾਸਤਵ (ਡਾਇਰੈਕਟਰ ਗੰਨਾ ਖੋਜ ਕੇਂਦਰ)"
        },
        mr: {
          name: "उसावरील लाल कूज (रेड रॉट) रोग",
          region: "उत्तर प्रदेश",
          state: "उत्तर प्रदेश",
          district: "मुझफ्फरनगर, मेरठ",
          crop: "ऊस (रोख पीक)",
          symptoms: "पाने पिवळी पडून वाळणे व उसाचा आतील भाग लाल होऊन पांढरे पट्टे दिसणे.",
          yieldLossRisk: "साखरेचे प्रमाण घटून 70% पर्यंत वजनात नुकसान.",
          bioRemedies: [
            "बेणे ट्रायकोडर्मा @ 10 ग्रॅम/लिटर द्रावणात 30 मिनिटे बुडवून लावा",
            "स्यूडोमोनासयुक्त शेणखताचा सरीत वापर करा",
            "संक्रमित शेतात खोडवा घेऊ नका"
          ],
          chemicalRemedies: [
            "कार्बेन्डाझिम 50% WP @ 2 ग्रॅम/लिटर बेणे प्रक्रिया",
            "थायोफॅनेट मिथाईल @ 2 ग्रॅम/लिटर आळवणी",
            "कॉपर ऑक्सिक्लोराईड @ 3 ग्रॅम/लिटर फवारणी"
          ],
          advisoryHead: "डॉ. बी.के. श्रीवास्तव (संचालक ऊस संशोधन परिषद)"
        },
        gu: {
          name: "શેરડીનો લાલ સડો રોગ (રેડ રોટ)",
          region: "ઉત્તર પ્રદેશ",
          state: "ઉત્તર પ્રદેશ",
          district: "મુઝફ્ફરનગર, મેરઠ",
          crop: "શેરડી",
          symptoms: "શેરડીની અંદરનો ભાગ લાલ થઈ જવો અને પાન સુકાઈ જવા.",
          yieldLossRisk: "ખાંડનું પ્રમાણ ઘટવું અને 70% સુધી ઉત્પાદન નુકસાન.",
          bioRemedies: ["ટ્રાઈકોડર્મા થી બીજ માવજત કરો", "રોગગ્રસ્ત ખેતરમાં શેરડી વાવવાનું ટાળો"],
          chemicalRemedies: ["કાર્બેન્ડાઝીમ @ 2 ગ્રામ/લીટર થી બીજ માવજત", "કોપર ઓક્સિક્લોરાઇડ નો છંટકાવ"],
          advisoryHead: "ડૉ. બી.કે. શ્રીવાસ્તવ (નિયામક શેરડી સંશોધન)"
        },
        bn: {
          name: "আখের লাল পচা রোগ (রেড রট)",
          region: "উত্তর প্রদেশ",
          state: "উত্তর প্রদেশ",
          district: "মুজাফফরনগর, মিরাট",
          crop: "আখ",
          symptoms: "আখের ভেতরের অংশ লাল হয়ে যাওয়া ও পাতা শুকিয়ে যাওয়া।",
          yieldLossRisk: "চিনির পরিমাণ নষ্ট হওয়া ও ৭০% পর্যন্ত ক্ষতি।",
          bioRemedies: ["ট্রাইকোডার্মা দিয়ে চারা শোধন করুন", "পর্যাপ্ত জৈব সার ব্যবহার করুন"],
          chemicalRemedies: ["কারবেন্ডাজিম ২ গ্রাম/লিটার দিয়ে বীজ শোধন", "কপার অক্সিক্লোরাইড স্প্রে"],
          advisoryHead: "ড. বি.কে. শ্রীবাস্তব (অধিকর্তা আখ গবেষণা পরিষদ)"
        },
        te: {
          name: "చెరకు ఎర్ర కుళ్లు తెగులు (రెడ్ రాట్)",
          region: "ఉత్తర ప్రదేశ్",
          state: "ఉత్తర ప్రదేశ్",
          district: "ముజఫర్‌నగర్, మీరట్",
          crop: "చెరకు",
          symptoms: "చెరకు లోపలి భాగం ఎర్రగా మారి తీపి గుణం నశించడం.",
          yieldLossRisk: "70% వరకు తీవ్రమైన చెరకు దిగుబడి నష్టం.",
          bioRemedies: ["ట్రైకోడెర్మ తో విత్తన శుద్ధి చేయండి", "సేంద్రియ ఎరువులు వాడండి"],
          chemicalRemedies: ["కార్బెంsection 2గ్రా/లీ తో విత్తన శుద్ధి", "కాపర్ ఆక్సిక్లోరైడ్ పిచికారీ"],
          advisoryHead: "డా. బి.కె. శ్రీవాస్తవ (డైరెక్టర్ చెరకు పరిశోధన)"
        },
        ta: {
          name: "கரும்பில் செவ்வழுகல் நோய் (ரெட் ராட்)",
          region: "உத்தர பிரதேசம்",
          state: "உத்தர பிரதேசம்",
          district: "முசாபர்நகர், மீரட்",
          crop: "கரும்பு",
          symptoms: "கரும்பின் உள்பகுதி சிவப்பாக மாறுதல் மற்றும் சர்க்கரை அளவு குறைதல்.",
          yieldLossRisk: "70% வரை மகசூல் இழப்பு அபாயம்.",
          bioRemedies: ["டிரைக்கோடெர்மா மூலம் விதை கரணை நேர்த்தி செய்யவும்", "பயிர் சுழற்சி முறை பின்பற்றவும்"],
          chemicalRemedies: ["கார்பென்டாசிம் @ 2 கிராம்/லிட்டர் விதை நேர்த்தி", "காப்பர் ஆக்ஸிகுளோரைடு தெளிக்கவும்"],
          advisoryHead: "டாக்டர் பி.கே. ஸ்ரீவஸ்தவா (இயக்குனர் கரும்பு ஆராய்ச்சி)"
        }
      }
    },
    {
      id: "hotspot-4",
      severity: "high",
      severityLabel: "HIGH",
      affectedArea: "32.0k Ha",
      spreadVelocity: "+8.1% weekly",
      intensity: 68,
      lat: 16.3067,
      lng: 80.4365,
      cropCategory: "spices",
      advisoryHotline: "0863-2234015",
      bulletinPdf: "Chilli_Black_Thrips_Intervention_Desk.pdf",
      translations: {
        en: {
          name: "Chilli Black Thrips & Leaf Curl Virus",
          region: "Andhra Pradesh & Telangana",
          state: "Andhra Pradesh",
          district: "Guntur, Krishna, Khammam",
          crop: "Chilli (Mirchi) (Spices & Commercial)",
          symptoms: "Upward boat-shaped leaf curling, bronze crinkling of lower leaf lamina, flower drop and malformed fruit pods.",
          yieldLossRisk: "Significant pod shedding and up to 45% grade-A export quality downgrade.",
          bioRemedies: [
            "Erect 25 Blue & Yellow sticky insect cards per acre at crop canopy level",
            "Foliar spray of Beauveria bassiana entomopathogenic fungus @ 5g/litre",
            "Apply Agniastra / Dashaparni Kashayam @ 20 ml/litre"
          ],
          chemicalRemedies: [
            "Fipronil 5% SC @ 2 ml/litre or Spinetoram 11.7% SC @ 1 ml/litre",
            "Acetamiprid 20% SP @ 0.5g/litre for sucking vector suppression",
            "Diafenthiuron 50% WP @ 1.25g/litre in alternate spray rotations"
          ],
          advisoryHead: "K. Raghunandan Rao (Agri Secretary, Andhra & Telangana)"
        },
        hi: {
          name: "मिर्च का ब्लैक थ्रिप्स और पत्ती मरोड़ रोग",
          region: "आंध्र प्रदेश और तेलंगाना",
          state: "आंध्र प्रदेश",
          district: "गुंटूर, कृष्णा, खम्मम",
          crop: "मिर्च (मसाले व वाणिज्यिक)",
          symptoms: "पत्तियों का नाव के आकार में ऊपर की ओर मुड़ना, फूल झड़ना और फलों का विकृत होना।",
          yieldLossRisk: "फल झड़ने के कारण 45% तक निर्यात गुणवत्ता व उपज का नुकसान।",
          bioRemedies: [
            "प्रति एकड़ 25 नीले व पीले चिपचिपे चिप कार्ड लगाएं",
            "ब्युवेरिया बेसियाना जैविक कवक @ 5 ग्राम/लीटर का छिड़काव करें",
            "अग्निअस्त्र / दशपर्णी काढ़ा @ 20 मिली/लीटर का प्रयोग करें"
          ],
          chemicalRemedies: [
            "फिप्रोनिल 5% SC @ 2 मिली/लीटर या स्पाइनेटोरम 11.7% SC @ 1 मिली/लीटर",
            "एसिटामिप्रिड 20% SP @ 0.5 ग्राम/लीटर का छिड़काव करें",
            "डायाफेन्थियुरॉन 50% WP @ 1.25 ग्राम/लीटर चक्रीय रूप में बदल-बदल कर छिड़कें"
          ],
          advisoryHead: "के. रघुनंदन राव (कृषि सचिव, आंध्र व तेलंगाना)"
        },
        pa: {
          name: "ਮਿਰਚ ਦਾ ਕਾਲਾ ਥ੍ਰਿਪਸ ਅਤੇ ਪੱਤਾ ਮਰੋੜ ਰੋਗ",
          region: "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼ ਤੇ ਤੇਲੰਗਾਨਾ",
          state: "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼",
          district: "ਗੁੰਟੂਰ, ਕ੍ਰਿਸ਼ਨਾ",
          crop: "ਮਿਰਚ (ਮਸਾਲੇ)",
          symptoms: "ਪੱਤਿਆਂ ਦਾ ਕਿਸ਼ਤੀ ਵਾਂਗ ਉੱਪਰ ਵੱਲ ਮੁੜਨਾ ਅਤੇ ਫੁੱਲ ਡਿੱਗਣਾ।",
          yieldLossRisk: "45% ਤੱਕ ਝਾੜ ਅਤੇ ਗੁਣਵੱਤਾ ਦਾ ਨੁਕਸਾਨ।",
          bioRemedies: [
            "ਪ੍ਰਤੀ ਏਕੜ 25 ਨੀਲੇ ਤੇ ਪੀਲੇ ਸਟਿੱਕੀ ਕਾਰਡ ਲਗਾਓ",
            "ਬਿਊਵੇਰੀਆ ਬੇਸੀਆਨਾ @ 5 ਗ੍ਰਾਮ/ਲਿਟਰ ਛਿੜਕੋ",
            "ਅਗਨੀਅਸਤਰ @ 20 ਮਿਲੀਲਿਟਰ/ਲਿਟਰ ਵਰਤੋ"
          ],
          chemicalRemedies: [
            "ਫਿਪਰੋਨਿਲ 5% SC @ 2 ਮਿਲੀਲਿਟਰ/ਲਿਟਰ",
            "ਐਸੀਟਾਮਿਪ੍ਰਿਡ 20% SP @ 0.5 ਗ੍ਰਾਮ/ਲਿਟਰ",
            "ਡਾਈਆਫੈਂਥੀਯੂਰੋਨ 50% WP @ 1.25 ਗ੍ਰਾਮ/ਲਿਟਰ"
          ],
          advisoryHead: "ਕੇ. ਰਘੂਨੰਦਨ ਰਾਓ (ਖੇਤੀਬਾੜੀ ਸਕੱਤਰ)"
        },
        mr: {
          name: "मिरचीवरील काळा थ्रिप्स व बोकड्या रोग",
          region: "आंध्र प्रदेश व तेलंगणा",
          state: "आंध्र प्रदेश",
          district: "गुंटूर, कृष्णा",
          crop: "मिरची (मसाले)",
          symptoms: "पाने वरच्या बाजूला वाटीसारखी वळणे व फुले गळणे.",
          yieldLossRisk: "45% पर्यंत प्रत घसरण व उत्पादन नुकसान.",
          bioRemedies: [
            "एकरमध्ये 25 निळे व पिवळे चिकट सापळे लावा",
            "बिव्हेरिया बॅसियाना @ 5 ग्रॅम/लिटर फवारा",
            "अग्निअस्त्र @ 20 मिली/लिटर वापरा"
          ],
          chemicalRemedies: [
            "फिप्रोनिल 5% SC @ 2 मिली/लिटर",
            "एसिटामिप्रिड 20% SP @ 0.5 ग्रॅम/लिटर",
            "डायफेंथियुरॉन 50% WP @ 1.25 ग्रॅम/लिटर"
          ],
          advisoryHead: "के. रघुनंदन राव (कृषी सचिव)"
        },
        gu: {
          name: "મરચીમાં કાળી થ્રીપ્સ અને પાન વળવાનો રોગ",
          region: "આંધ્ર પ્રદેશ અને તેલંગાણા",
          state: "આંધ્ર પ્રદેશ",
          district: "ગુંટૂર",
          crop: "મરચી",
          symptoms: "પાન ઉપરની તરફ વળી જવા અને ફૂલ ખરી પડવા.",
          yieldLossRisk: "45% સુધી ગુણવત્તા અને ઉત્પાદન નુકસાન.",
          bioRemedies: ["વાદળી અને પીળા સ્ટીકી ટ્રેપ લગાવો", "બ્યુવેરિયા બેસિયાના નો છંટકાવ"],
          chemicalRemedies: ["ફીપ્રોનીલ 5% SC @ 2 મિલી/લીટર", "એસીટામીપ્રીડ @ 0.5 ગ્રામ/લીટર"],
          advisoryHead: "કે. રઘુનંદન રાવ (કૃષિ સચિવ)"
        },
        bn: {
          name: "লঙ্কার কালো থ্রিপস ও পাতা কোঁকড়ানো রোগ",
          region: "অন্ধ্র প্রদেশ ও তেলেঙ্গানা",
          state: "অন্ধ্র প্রদেশ",
          district: "গুন্টুর",
          crop: "লঙ্কা (মশলা)",
          symptoms: "পাতা ওপরের দিকে কুঁকড়ে যাওয়া ও ফুল ঝরে যাওয়া।",
          yieldLossRisk: "৪৫% পর্যন্ত ফলন ও রপ্তানি ক্ষতি।",
          bioRemedies: ["নীল ও হলুদ স্টিকি কার্ড লাগান", "বিউভেরিয়া বাসিয়ানা ৫ গ্রাম/লি স্প্রে করুন"],
          chemicalRemedies: ["ফিপ্রোনিল ৫% SC ২ মিলি/লি", "অ্যাসিটামিপ্রিড ০.৫ গ্রাম/লি"],
          advisoryHead: "কে. রঘুনন্দন রাও (কৃষি সচিব)"
        },
        te: {
          name: "మిర్చిలో నల్ల తామర పురుగు & ఆకు ముడత తెగులు",
          region: "ఆంధ్రప్రదేశ్ & తెలంగాణ",
          state: "ఆంధ్రప్రదేశ్",
          district: "గుంటూరు, కృష్ణా, ఖమ్మం",
          crop: "మిర్చి (వాణిజ్య సుగంధ ద్రవ్యాలు)",
          symptoms: "ఆకులు దోనె ఆకారంలో పైకి ముడుచుకుపోవడం, పూత రాలడం మరియు కాయల నాణ్యత తగ్గడం.",
          yieldLossRisk: "45% వరకు ఎగుమతి నాణ్యత మరియు దిగుబడి నష్టం.",
          bioRemedies: [
            "ఎకరాకు 25 నీలి మరియు పసుపు రంగు జిగురు అట్టలు అమర్చండి",
            "బవేరియా బాసియానా @ 5 గ్రా/లీటరు పిచికారీ చేయండి",
            "అగ్నిఅస్త్రం @ 20 మి.లీ/లీటరు వాడండి"
          ],
          chemicalRemedies: [
            "ఫిప్రోనిల్ 5% SC @ 2 మి.లీ లేదా స్పైనటోరమ్ @ 1 మి.లీ/లీ",
            "ఎసిటామిప్రిడ్ 20% SP @ 0.5 గ్రా/లీ పిచికారీ చేయండి",
            "డయాఫెంతియురాన్ 50% WP @ 1.25 గ్రా/లీ వాడండి"
          ],
          advisoryHead: "కె. రఘునందన్ రావు (వ్యవసాయ శాఖ కార్యదర్శి)"
        },
        ta: {
          name: "மிளகாயில் கருப்பு இலைப்பேன் & இலைச்சுருள் நோய்",
          region: "ஆந்திர பிரதேசம் & தெலங்கானா",
          state: "ஆந்திர பிரதேசம்",
          district: "குண்டூர், கிருஷ்ணா",
          crop: "மிளகாய்",
          symptoms: "இலைகள் படகு போல் மேல்நோக்கி சுருங்குதல் மற்றும் பூக்கள் உதிர்தல்.",
          yieldLossRisk: "45% வரை மகசூல் இழப்பு அபாயம்.",
          bioRemedies: [
            "ஏக்கருக்கு 25 நீல மற்றும் மஞ்சள் நிற ஒட்டும் பொறிகள் வைக்கவும்",
            "பவேரியா பேசியானா @ 5 கிராம்/லிட்டர் தெளிக்கவும்",
            "அக்னி அஸ்திரம் @ 20 மி.லி/லிட்டர் தெளிக்கவும்"
          ],
          chemicalRemedies: [
            "ஃபிப்ரோனில் 5% SC @ 2 மி.லி/லிட்டர்",
            "அசிடமிப்ரிட் 20% SP @ 0.5 கிராம்/லிட்டர்",
            "டயாபெந்தியூரான் 50% WP @ 1.25 கிராம்/லிட்டர்"
          ],
          advisoryHead: "கே. ரகுநந்தன் ராவ் (விவசாய செயலாளர்)"
        }
      }
    },
    {
      id: "hotspot-5",
      severity: "high",
      severityLabel: "HIGH",
      affectedArea: "36.5k Ha",
      spreadVelocity: "+6.9% weekly",
      intensity: 64,
      lat: 22.7196,
      lng: 75.8577,
      cropCategory: "oilseeds",
      advisoryHotline: "0731-2476188",
      bulletinPdf: "Soybean_Stem_Rust_ICAR_MP.pdf",
      translations: {
        en: {
          name: "Soybean Rust & Stem Fly Wave",
          region: "Madhya Pradesh (Malwa & Nimar)",
          state: "Madhya Pradesh",
          district: "Indore, Ujjain, Dewas",
          crop: "Soybean (Oilseeds & Pulses)",
          symptoms: "Small brown to dark tan polygonal lesions on lower leaf surfaces; stem tunneling causing premature wilting.",
          yieldLossRisk: "Premature defoliation, shriveled seed formation, and 30-40% oil yield reduction.",
          bioRemedies: [
            "Spray Panchagavya @ 3% dilution at 15-day vegetative intervals",
            "Soil application of Trichoderma viride enriched FYM @ 50 kg/acre",
            "Intercrop with maize or sorghum as natural windbreak and spore barrier"
          ],
          chemicalRemedies: [
            "Hexaconazole 5% EC @ 2 ml/litre or Tebuconazole 25.9% EC @ 1.25 ml/litre",
            "Chlorantraniliprole 18.5% SC @ 0.3 ml/litre for stem borer and fly larvae",
            "Pyraclostrobin 20% WG @ 1g/litre at flowering onset"
          ],
          advisoryHead: "Dr. S.P. Tiwari (Chief Scientist, ICAR-IISR Indore)"
        },
        hi: {
          name: "सोयाबीन का गेरुआ (रस्ट) व तना मक्खी प्रकोप",
          region: "मध्य प्रदेश (मालवा व निमाड़)",
          state: "मध्य प्रदेश",
          district: "इंदौर, उज्जैन, देवास",
          crop: "सोयाबीन (तिलहन व दलहन)",
          symptoms: "पत्तियों की निचली सतह पर भूरे रंग के धब्बे और तने में सुराख जिससे पौधे सूखने लगते हैं।",
          yieldLossRisk: "पत्तियों का समय पूर्व गिरना, दाने सिकुड़ना और 30-40% तेल उत्पादन में कमी।",
          bioRemedies: [
            "पंचगव्य @ 3% घोल का 15 दिन के अंतराल पर छिड़काव करें",
            "ट्राइकोडर्मा युक्त गोबर की खाद @ 50 किग्रा/एकड़ खेत में डालें",
            "मक्का या ज्वार की अंतरवर्ती फसल लगाकर प्राकृतिक अवरोध बनाएं"
          ],
          chemicalRemedies: [
            "हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर या टेबुकोनाज़ोल @ 1.25 मिली/लीटर",
            "क्लोरएंट्रानिलीप्रोल 18.5% SC @ 0.3 मिली/लीटर तना मक्खी नियंत्रण हेतु",
            "पाइराक्लोस्ट्रोबिन 20% WG @ 1 ग्राम/लीटर का छिड़काव करें"
          ],
          advisoryHead: "डॉ. एस.पी. तिवारी (मुख्य वैज्ञानिक, ICAR-IISR इंदौर)"
        },
        pa: {
          name: "ਸੋਇਆਬੀਨ ਦਾ ਕੁੰਗੀ ਅਤੇ ਤਣਾ ਮੱਖੀ ਰੋਗ",
          region: "ਮੱਧ ਪ੍ਰਦੇਸ਼ (ਮਾਲਵਾ)",
          state: "ਮੱਧ ਪ੍ਰਦੇਸ਼",
          district: "ਇੰਦੌਰ, ਉਜੈਨ",
          crop: "ਸੋਇਆਬੀਨ",
          symptoms: "ਪੱਤਿਆਂ ਦੇ ਹੇਠਾਂ ਭੂਰੇ ਧੱਬੇ ਅਤੇ ਤਣੇ ਵਿੱਚ ਛੇਕ।",
          yieldLossRisk: "ਦਾਣੇ ਬਰੀਕ ਰਹਿਣਾ ਅਤੇ 30-40% ਝਾੜ ਘਟਣਾ।",
          bioRemedies: ["ਪੰਚਗਵਿਆ 3% ਛਿੜਕੋ", "ਟਰਾਈਕੋਡਰਮਾ ਖਾਦ ਖੇਤ ਵਿੱਚ ਪਾਓ"],
          chemicalRemedies: ["ਹੈਕਸਾਕੋਨਾਜ਼ੋਲ @ 2 ਮਿਲੀਲਿਟਰ/ਲਿਟਰ", "ਕਲੋਰਐਂਟ੍ਰਾਨੀਲੀਪ੍ਰੋਲ @ 0.3 ਮਿਲੀਲਿਟਰ/ਲਿਟਰ"],
          advisoryHead: "ਡਾ. ਐਸ.ਪੀ. ਤਿਵਾਰੀ (ਮੁੱਖ ਵਿਗਿਆਨੀ)"
        },
        mr: {
          name: "सोयाबीनवरील तांबेरा व खोडमाशी प्रादुर्भाव",
          region: "मध्य प्रदेश (माळवा)",
          state: "मध्य प्रदेश",
          district: "इंदूर, उज्जैन",
          crop: "सोयाबीन (गळीत धान्य)",
          symptoms: "पानांच्या खालील भागावर तपकिरी ठिपके व खोड पोखरणे.",
          yieldLossRisk: "दाणे बारीक होऊन 30-40% तेल उत्पादन घट.",
          bioRemedies: ["पंचगव्य 3% फवारा", "ट्रायकोडर्मायुक्त शेणखत वापरा"],
          chemicalRemedies: ["हेक्साकोनाझोल @ 2 मिली/लिटर", "क्लोरॲन्ट्रानिलीप्रोल @ 0.3 मिली/लिटर"],
          advisoryHead: "डॉ. एस.पी. तिवारी (मुख्य शास्त्रज्ञ)"
        },
        gu: {
          name: "સોયાબીનમાં ગેરુ અને સાંઠા માખીનો ઉપદ્રવ",
          region: "મધ્ય પ્રદેશ",
          state: "મધ્ય પ્રદેશ",
          district: "ઈન્દોર, ઉજ્જૈન",
          crop: "સોયાબીન",
          symptoms: "પાનની નીચે ભૂરા ધબ્બા અને થડમાં કાણાં.",
          yieldLossRisk: "દાણા નાના રહેવા અને 30-40% ઉત્પાદન ઘટવું.",
          bioRemedies: ["પંચગવ્ય નો છંટકાવ કરો", "ટ્રાઈકોડર્મા વાપરો"],
          chemicalRemedies: ["હેક્ઝાકોનાઝોલ @ 2 મિલી/લીટર", "ક્લોરાન્ટ્રાનિલીપ્રોલ @ 0.3 મિલી/લીટર"],
          advisoryHead: "ડૉ. એસ.પી. તિવારી (મુખ્ય વૈજ્ઞાનિક)"
        },
        bn: {
          name: "সয়াবিনের মরিচা ও কান্ড মাছি রোগ",
          region: "মধ্য প্রদেশ",
          state: "মধ্য প্রদেশ",
          district: "ইন্দোর",
          crop: "সয়াবিন",
          symptoms: "পাতার নিচে বাদামী দাগ ও কান্ডে ছিদ্র।",
          yieldLossRisk: "৩০-৪০% তেল উৎপাদন ক্ষতি।",
          bioRemedies: ["পঞ্চগব্য স্প্রে করুন", "ট্রাইকোডার্মা প্রয়োগ করুন"],
          chemicalRemedies: ["হেক্সাকোনাজোল ২ মিলি/লি", "ক্লোরানট্রানিলিপ্রোল ০.৩ মিলি/লি"],
          advisoryHead: "ড. এস.পি. তিওয়ারি (প্রধান বিজ্ঞানী)"
        },
        te: {
          name: "సోయాబీన్‌లో తుప్పు తెగులు & కాండం ఈగ",
          region: "మధ్యప్రదేశ్",
          state: "మధ్యప్రదేశ్",
          district: "ఇండోర్",
          crop: "సోయాబీన్ (నూనెగింజలు)",
          symptoms: "ఆకుల అడుగు భాగంలో గోధుమ రంగు మచ్చలు మరియు కాండం తొలచడం.",
          yieldLossRisk: "30-40% వరకు దిగుబడి తగ్గుదల.",
          bioRemedies: ["పంచగవ్య 3% పిచికారీ చేయండి", "ట్రైకోడెర్మా వాడండి"],
          chemicalRemedies: ["హెక్సాకోనజోల్ @ 2 మి.లీ/లీ", "క్లోరాంట్రానిలిప్రోల్ @ 0.3 మి.లీ/లీ"],
          advisoryHead: "డా. ఎస్.పి. తివారీ (ప్రధాన శాస్త్రవేత్త)"
        },
        ta: {
          name: "சோயாபீனில் துரு நோய் & தண்டு ஈ தாக்குதல்",
          region: "மத்திய பிரதேசம்",
          state: "மத்திய பிரதேசம்",
          district: "இந்தூர்",
          crop: "சோயாபீன்",
          symptoms: "இலைகளின் அடியில் பழுப்பு நிற புள்ளிகள் மற்றும் தண்டு சேதமடைதல்.",
          yieldLossRisk: "30-40% வரை மகசூல் இழப்பு.",
          bioRemedies: ["பஞ்சகவ்யா 3% தெளிக்கவும்", "டிரைக்கோடெர்மா பயன்படுத்தவும்"],
          chemicalRemedies: ["ஹெக்சாகோனசோல் @ 2 மி.லி/லி", "குளோரன்ட்ரானிலிப்ரோல் @ 0.3 மி.லி/லி"],
          advisoryHead: "டாக்டர் எஸ்.பி. திவாரி (தலைமை விஞ்ஞானி)"
        }
      }
    },
    {
      id: "hotspot-6",
      severity: "high",
      severityLabel: "HIGH",
      affectedArea: "15.4k Ha",
      spreadVelocity: "+5.4% weekly",
      intensity: 61,
      lat: 11.6854,
      lng: 76.1320,
      cropCategory: "spices",
      advisoryHotline: "0495-2731410",
      bulletinPdf: "Pepper_Quick_Wilt_Monsoon_Advisory.pdf",
      translations: {
        en: {
          name: "Black Pepper Quick Wilt (Foot Rot)",
          region: "Kerala & Karnataka (Western Ghats)",
          state: "Kerala",
          district: "Wayanad, Idukki, Coorg",
          crop: "Black Pepper & Cardamom (Spices & Plantation)",
          symptoms: "Dark water-soaked lesions with fimbriate margins on leaves, collar rot, sudden vine collapse within 10-14 days.",
          yieldLossRisk: "Total mortality of 3 to 7-year productive vines in poorly drained soils.",
          bioRemedies: [
            "Drench vine root basin with Trichoderma harzianum @ 50g/vine mixed with compost",
            "Apply Arka Microbial Consortium @ 20g/vine twice during monsoon",
            "Provide trench drainage to prevent water stagnation around runner roots"
          ],
          chemicalRemedies: [
            "1% Bordeaux mixture foliar spray + drenching root zone with 0.2% Copper Oxychloride",
            "Potassium Phosphonate (Akomin) 0.3% foliar spray (3 ml/litre) before monsoon onset",
            "Metalaxyl-Mancozeb (Ridomil MZ) @ 2g/litre soil application"
          ],
          advisoryHead: "Dr. K. Nirmal Babu (Former Director IISR Kozhikode)"
        },
        hi: {
          name: "काली मिर्च का द्रुत उकठा (क्विक विल्ट / फुट रॉट)",
          region: "केरल और कर्नाटक (पश्चिमी घाट)",
          state: "केरल",
          district: "वायनाड, इडुक्की, कूर्ग",
          crop: "काली मिर्च और इलायची (मसाले व बागवानी)",
          symptoms: "पत्तियों पर गहरे जलसिक्त धब्बे, तने के निचले भाग का सड़ना और 10-14 दिनों में बेल का सूख जाना।",
          yieldLossRisk: "जलभराव वाले खेतों में 3 से 7 वर्ष पुरानी उत्पादक बेलों का पूर्ण विनाश।",
          bioRemedies: [
            "जड़ों के पास ट्राइकोडर्मा हरज़ियानम @ 50 ग्राम प्रति बेल गोबर खाद में मिलाकर डालें",
            "मानसून के दौरान 'अर्का माइक्रोબિયલ कंसोर्टियम' @ 20 ग्राम प्रति बेल दो बार दें",
            "जड़ों के पास पानी का जमाव रोकने हेतु जल निकासी नालियां बनाएं"
          ],
          chemicalRemedies: [
            "1% बोर्डो मिश्रण का पर्णीय छिड़काव + 0.2% कॉपर ऑक्सीक्लोराइड से जड़ क्षेत्र की ड्रेंचिंग",
            "मानसून शुरू होने से पहले पोटैशियम फॉस्फोनेट (एकोमिन) 0.3% (3 मिली/लीटर) का छिड़काव",
            "मेटालेक्सिल-मैनकोज़ेब (रिडोमिल MZ) @ 2 ग्राम/लीटर मिट्टी में डालें"
          ],
          advisoryHead: "डॉ. के. निर्मल बाबू (पूर्व निदेशक IISR कोझिकोड)"
        },
        pa: {
          name: "ਕਾਲੀ ਮਿਰਚ ਦਾ ਜੜ੍ਹ ਗਲਣ ਰੋਗ (ਕਵਿੱਕ ਵਿਲਟ)",
          region: "ਕੇਰਲ ਅਤੇ ਕਰਨਾਟਕ",
          state: "ਕੇਰਲ",
          district: "ਵਾਇਨਾਡ, ਇਡੁੱਕੀ",
          crop: "ਕਾਲੀ ਮਿਰਚ ਤੇ ਇਲਾਇਚੀ",
          symptoms: "ਪੱਤਿਆਂ ਦਾ ਕਾਲਾ ਪੈਣਾ ਅਤੇ ਵੇਲਾਂ ਦਾ ਅਚਾਨਕ ਸੁੱਕ ਜਾਣਾ।",
          yieldLossRisk: "ਵੇਲਾਂ ਦੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਸ਼ਟ ਹੋਣ ਦਾ ਖਤਰਾ।",
          bioRemedies: ["ਟਰਾਈਕੋਡਰਮਾ ਰੂੜੀ ਖਾਦ ਵਿੱਚ ਮਿਲਾ ਕੇ ਜੜ੍ਹਾਂ ਵਿੱਚ ਪਾਓ", "ਪਾਣੀ ਦੇ ਨਿਕਾਸ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ"],
          chemicalRemedies: ["1% ਬੋਰਡੋ ਮਿਸ਼ਰਣ ਦਾ ਛਿੜਕਾਅ", "ਮੈਟਾਲੈਕਸਿਲ @ 2 ਗ੍ਰਾਮ/ਲਿਟਰ"],
          advisoryHead: "ਡਾ. ਕੇ. ਨਿਰਮਲ ਬਾਬੂ"
        },
        mr: {
          name: "काळी मिरीवरील द्रुत मर (क्विक विल्ट) रोग",
          region: "केरळ व कर्नाटक",
          state: "केरळ",
          district: "वायनाड, इडुक्की",
          crop: "काळी मिरी व वेलची",
          symptoms: "पानांवर काळे डाग पडून वेल 10-14 दिवसांत पूर्ण वाळणे.",
          yieldLossRisk: "उत्पादक वेलींचे 100% नुकसान.",
          bioRemedies: ["ट्रायकोडर्मा शेणखतात मिसळून मुळांशी टाका", "पाण्याचा निचरा व्यवस्थित ठेवा"],
          chemicalRemedies: ["1% बोर्डो मिश्रण फवारणी", "मेटालॅक्सिल-मॅन्कोझेब @ 2 ग्रॅम/लिटर"],
          advisoryHead: "डॉ. के. निर्मल बाबू"
        },
        gu: {
          name: "કાળા મરીમાં ક્વિક વિલ્ટ (મૂળનો સડો)",
          region: "કેરળ અને કર્ણાટક",
          state: "કેરળ",
          district: "વાયનાડ",
          crop: "કાળા મરી",
          symptoms: "વેલા અચાનક સુકાઈ જવા અને પાન ખરી પડવા.",
          yieldLossRisk: "વેલાઓનો સંપૂર્ણ નાશ.",
          bioRemedies: ["ટ્રાઈકોડર્મા નો ઉપયોગ કરો", "પાણી ભરાઈ ન રહે તેની કાળજી લો"],
          chemicalRemedies: ["1% બોર્ડો મિશ્રણનો છંટકાવ", "રીડોમીલ MZ @ 2 ગ્રામ/લીટર"],
          advisoryHead: "ડૉ. કે. નિર્મલ બાબુ"
        },
        bn: {
          name: "গোলমরিচের দ্রুত শুকিয়ে যাওয়া রোগ (কুইক উইল্ট)",
          region: "কেরল ও কর্ণাটক",
          state: "কেরল",
          district: "ওয়েনাড়",
          crop: "গোলমরিচ ও এলাচ",
          symptoms: "গাছের গোড়া পচে যাওয়া ও লতা সম্পূর্ণ শুকিয়ে যাওয়া।",
          yieldLossRisk: "গাছের সম্পূর্ণ ধ্বংসের ঝুঁকি।",
          bioRemedies: ["ট্রাইকোডার্মা প্রয়োগ করুন", "জল নিষ্কাশনের সুব্যবস্থা করুন"],
          chemicalRemedies: ["১% বোর্দো মিশ্রণ স্প্রে", "রিডোমিল MZ ২ গ্রাম/লি"],
          advisoryHead: "ড. কে. নির্মল বাবু"
        },
        te: {
          name: "మిరియాల పైరులో అకాల ఎండు తెగులు (క్విక్ విల్ట్)",
          region: "కేరళ & కర్ణాటక",
          state: "కేరళ",
          district: "వాయనాడ్",
          crop: "మిరియాలు & ఏలకులు",
          symptoms: "ఆకులు నల్లబడి రాలిపోవడం మరియు తీగలు ఎండిపోవడం.",
          yieldLossRisk: "మొక్కలు పూర్తిగా చనిపోయే ప్రమాదం.",
          bioRemedies: ["ట్రైకోడెర్మా ఎరువులో కలిపి వేయండి", "నీరు నిల్వ ఉండకుండా డ్రైనేజీ చేయండి"],
          chemicalRemedies: ["1% బోర్డో మిశ్రమం పిచికారీ", "మెటలాక్సిల్ @ 2 గ్రా/లీ"],
          advisoryHead: "డా. కె. నిర్మల్ బాబు"
        },
        ta: {
          name: "கருப்பு மிளகில் விரைவு வாடல் நோய் (குவிக் வில்ட்)",
          region: "கேரளா & கர்நாடகா",
          state: "கேரளா",
          district: "வயநாடு",
          crop: "மிளகு & ஏலக்காய்",
          symptoms: "இலைகளில் கரும் புள்ளிகள் தோன்றி கொடிகள் திடீரென வாடி காய்ந்து போகுதல்.",
          yieldLossRisk: "செடிகள் முற்றிலும் அழியும் அபாயம்.",
          bioRemedies: ["டிரைக்கோடெர்மா மூலம் வேர் பகுதியை நனைக்கவும்", "நீர் தேங்காமல் வடிகால் அமைக்கவும்"],
          chemicalRemedies: ["1% போர்டோ கலவை தெளிக்கவும்", "மெட்டலாக்சில் @ 2 கிராம்/லிட்டர்"],
          advisoryHead: "டாக்டர் கே. நிர்மல் பாபு"
        }
      }
    }
  ],

  // AI Crop Doctor Specimens
  specimens: [
    {
      id: "specimen-cotton-pink-bollworm",
      cropIcon: "🌱",
      matchPercentage: "98.4% Match",
      severity: "CRITICAL",
      severityClass: "severe",
      scientificName: "Pectinophora gossypiella",
      sprayCalcDefaults: { chemicalPerAcre: 88, unit: "g", waterPerAcre: 200, costPerAcre: 480 },
      translations: {
        en: {
          name: "Cotton Pink Bollworm Infestation",
          crop: "Cotton",
          symptoms: "Rosetted flower buds, entry pinholes on green bolls, feeding damage on developing seeds.",
          pathologyAnalysis: "Identified high-density larval tunneling through boll carpels. Neural vision matched pink larval body presence and rosetted petal signature with 98.4% confidence.",
          bioRemedies: [
            "Deploy 6-8 Gossyplure pheromone delta traps per acre for continuous monitoring",
            "Release Trichogrammatoidea bactrae @ 60,000 parasites/acre weekly",
            "Foliar spray of 5% Neem Seed Kernel Extract (NSKE) at early squaring phase"
          ],
          chemicalRemedies: [
            { name: "Emamectin Benzoate 5% SG", dosage: "88 g/acre in 200L water", interval: "Repeat after 12 days if active larval counts > 5%" },
            { name: "Profenofos 50% EC", dosage: "400 ml/acre in 200L water", interval: "Apply during peak flowering flush" },
            { name: "Spinetoram 11.7% SC", dosage: "170 ml/acre in 200L water", interval: "Target late instar boll burrowing larvae" }
          ]
        },
        hi: {
          name: "कपास की गुलाबी सुंडी (पिंक बॉलवर्म)",
          crop: "कपास",
          symptoms: "गुलाब जैसे आपस में चिपके फूल, हरे बोंडों में बारीक छेद और बिनौले को नुकसान।",
          pathologyAnalysis: "कपास के बोंडों में सुंडी द्वारा छेद करने और फूलों के चिपकने के विशिष्ट लक्षणों की पहचान 98.4% सटीकता के साथ की गई है।",
          bioRemedies: [
            "प्रति एकड़ 6-8 फेरोमोन ट्रैप लगाएं",
            "ट्राइकोग्रामा परजीवी @ 60,000 प्रति एकड़ साप्ताहिक छोड़ें",
            "प्रारंभिक अवस्था में 5% नीम बीज अर्क (NSKE) का छिड़काव करें"
          ],
          chemicalRemedies: [
            { name: "इमामेक्टिन बेंजोएट 5% SG", dosage: "88 ग्राम/एकड़ 200 लीटर पानी में", interval: "5% से अधिक कीट दिखने पर 12 दिन बाद दोहराएं" },
            { name: "प्रोफेनोफॉस 50% EC", dosage: "400 मिली/एकड़ 200 लीटर पानी में", interval: "फूल खिलने के मुख्य समय में प्रयोग करें" },
            { name: "स्पाइनेटोरम 11.7% SC", dosage: "170 मिली/एकड़ 200 लीटर पानी में", interval: "बड़ी सुंडियों के प्रभावी नियंत्रण हेतु" }
          ]
        },
        pa: {
          name: "ਕਪਾਹ ਦੀ ਗੁਲਾਬੀ ਸੁੰਡੀ",
          crop: "ਕਪਾਹ / ਨਰਮਾ",
          symptoms: "ਫੁੱਲਾਂ ਦੀਆਂ ਪੱਤੀਆਂ ਦਾ ਜੁੜਨਾ ਅਤੇ ਟੀਂਡਿਆਂ ਵਿੱਚ ਛੇਕ।",
          pathologyAnalysis: "ਏਆਈ ਮਾਡਲ ਨੇ 98.4% ਸ਼ੁੱਧਤਾ ਨਾਲ ਗੁਲਾਬੀ ਸੁੰਡੀ ਦੇ ਹਮਲੇ ਦੀ ਪੁਸ਼ਟੀ ਕੀਤੀ ਹੈ।",
          bioRemedies: [
            "ਪ੍ਰਤੀ ਏਕੜ 6-8 ਫੈਰੋਮੋਨ ਟਰੈਪ ਲਗਾਓ",
            "ਟਰਾਈਕੋਗ੍ਰਾਮਾ ਕਾਰਡ @ 60,000 ਪ੍ਰਤੀ ਏਕੜ ਛੱਡੋ",
            "5% ਨਿੰਮ ਅਰਕ (NSKE) ਦਾ ਛਿੜਕਾਅ ਕਰੋ"
          ],
          chemicalRemedies: [
            { name: "ਇਮਾਮੈਕਟਿਨ ਬੈਂਜੋਏਟ 5% SG", dosage: "88 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਏਕੜ 200 ਲਿਟਰ ਪਾਣੀ ਵਿੱਚ", interval: "12 ਦਿਨਾਂ ਬਾਅਦ ਦੁਹਰਾਓ" },
            { name: "ਪ੍ਰੋਫੈਨੋਫਾਸ 50% EC", dosage: "400 ਮਿਲੀਲਿਟਰ ਪ੍ਰਤੀ ਏਕੜ", interval: "ਫੁੱਲ ਆਉਣ ਸਮੇਂ ਵਰਤੋ" }
          ]
        },
        mr: {
          name: "कापसावरील गुलाबी बोंडअळी",
          crop: "कापूस",
          symptoms: "डोमकळ्या तयार होणे, बोंडांवर छिद्रे पडणे व सरकीचे नुकसान.",
          pathologyAnalysis: "एआय दृष्टी मॉडेलद्वारे 98.4% अचूकतेसह गुलाबी बोंडअळीच्या प्रादुर्भावाचे निदान झाले आहे.",
          bioRemedies: ["फेरोमोन ट्रॅप्स लावा", "ट्रायकोग्रामा कीटक सोडा", "5% निंबोळी अर्क फवारा"],
          chemicalRemedies: [
            { name: "इमामेक्टिन बेन्झोएट 5% SG", dosage: "88 ग्रॅम/एकर 200L पाण्यात", interval: "12 दिवसांनंतर पुनरावृत्ती करा" }
          ]
        },
        gu: {
          name: "કપાસમાં ગુલાબી ઈયળ",
          crop: "કપાસ",
          symptoms: "ફૂલો ચોંટી જવા અને ઝીંડવામાં કાણાં.",
          pathologyAnalysis: "98.4% ચોકસાઈ સાથે ગુલાબી ઈયળના ઉપદ્રવની પુષ્ટિ થયેલ છે.",
          bioRemedies: ["ફેરોમોન ટ્રેપ લગાવો", "ટ્રાઇકોગ્રામા કાર્ડ વાપરો", "લીમડાનો અર્ક છાંટો"],
          chemicalRemedies: [{ name: "ઇમામેક્ટીન બેન્ઝોએટ 5% SG", dosage: "88 ગ્રામ/એકર 200 લીટર પાણીમાં", interval: "12 દિવસ પછી પુનરાવર્તન" }]
        },
        bn: {
          name: "তুলায় গোলাপী বোলওয়ার্ম",
          crop: "তুলা",
          symptoms: "ফুল আটকে যাওয়া ও গুটিতে ছিদ্র।",
          pathologyAnalysis: "৯৮.৪% নির্ভুলতার সাথে বোলওয়ার্ম শনাক্ত করা হয়েছে।",
          bioRemedies: ["ফেরোমন ট্র্যাপ ব্যবহার করুন", "নিম তেল স্প্রে করুন"],
          chemicalRemedies: [{ name: "ইমামেকটিন বেনজয়েট ৫% SG", dosage: "৮৮ গ্রাম/একর ২০০ লিটার জলে", interval: "১২ দিন পর পুনরায় স্প্রে" }]
        },
        te: {
          name: "పత్తిలో గులాబీ రంగు పురుగు",
          crop: "పత్తి",
          symptoms: "గుడ్డి పూలు ఏర్పడటం మరియు కాయలలో రంధ్రాలు.",
          pathologyAnalysis: "98.4% కచ్చితత్వంతో గులాబీ రంగు పురుగు ఉనికి నిర్ధారించబడింది.",
          bioRemedies: ["ఫెరమోన్ ట్రాప్స్ అమర్చండి", "వేప నూనె పిచికారీ చేయండి"],
          chemicalRemedies: [{ name: "ఇమామెక్టిన్ బెంజోయేట్ 5% SG", dosage: "88 గ్రా/ఎకరాకు 200 లీటర్ల నీటిలో", interval: "12 రోజుల తర్వాత మళ్లీ పిచికారీ" }]
        },
        ta: {
          name: "பருத்தியில் இளஞ்சிவப்பு காய் புழு",
          crop: "பருத்தி",
          symptoms: "பூக்கள் ஒட்டிக்கொள்ளுதல் மற்றும் காய்களில் துளைகள்.",
          pathologyAnalysis: "98.4% துல்லியத்துடன் இளஞ்சிவப்பு காய் புழு கண்டறியப்பட்டுள்ளது.",
          bioRemedies: ["இனக்கவர்ச்சி பொறிகள் வைக்கவும்", "வேப்ப எண்ணெய் தெளிக்கவும்"],
          chemicalRemedies: [{ name: "இமாமெக்டின் பென்சோயேட் 5% SG", dosage: "88 கிராம்/ஏக்கர் 200 லிட்டர் நீரில்", interval: "12 நாட்களுக்குப் பின் மீண்டும் தெளிக்கவும்" }]
        }
      }
    },
    {
      id: "specimen-wheat-yellow-rust",
      cropIcon: "🌾",
      matchPercentage: "96.8% Match",
      severity: "CRITICAL",
      severityClass: "severe",
      scientificName: "Puccinia striiformis f. sp. tritici",
      sprayCalcDefaults: { chemicalPerAcre: 200, unit: "ml", waterPerAcre: 200, costPerAcre: 620 },
      translations: {
        en: {
          name: "Yellow Rust (Stripe Rust)",
          crop: "Wheat",
          symptoms: "Linear yellow-orange uredinial pustules in parallel stripes between leaf veins.",
          pathologyAnalysis: "Vision model identified contiguous parallel stripe chlorosis and fungal spore pustules on wheat flag leaves. 96.8% confidence match.",
          bioRemedies: [
            "Foliar spray of 5% NSKE (Neem Seed Kernel Extract) immediately at initial focus spot stage",
            "Spray fermented buttermilk (Chhachh) + Cow Urine (10:1 ratio) diluted 1:10 with water",
            "Apply bio-agent Trichoderma viride @ 5g/litre of water"
          ],
          chemicalRemedies: [
            { name: "Propiconazole 25% EC (Tilt)", dosage: "200 ml/acre in 200L water", interval: "Single uniform spray at first pustule appearance" },
            { name: "Tebuconazole 25.9% EC (Folicur)", dosage: "200 ml/acre in 200L water", interval: "Alternative systemic triazole spray" }
          ]
        },
        hi: {
          name: "पीला रतुआ (स्ट्राइप रस्ट)",
          crop: "गेहूं",
          symptoms: "पत्तियों की नसों के बीच समानांतर धारियों में पीले-नारंगी पाउडर जैसे दाने।",
          pathologyAnalysis: "गेहूं की पत्तियों पर समानांतर पीली धारियों और कवक बीजाणुओं की 96.8% सटीकता के साथ पुष्टि की गई है।",
          bioRemedies: [
            "प्रारंभिक अवस्था में तुरंत 5% नीम बीज अर्क (NSKE) का छिड़काव करें",
            "खट्टी छाछ + गोमूत्र (10:1) का 10 गुना पानी में घोल बनाकर छिड़कें",
            "ट्राइकोडर्मा विरिडी जैव-कवकनाशी @ 5 ग्राम/लीटर का प्रयोग करें"
          ],
          chemicalRemedies: [
            { name: "प्रोपिकोनाज़ोल 25% EC (टिल्ट)", dosage: "200 मिली/एकड़ 200 लीटर पानी में", interval: "लक्षण दिखते ही एक समान छिड़काव करें" },
            { name: "टेबुकोनाज़ोल 25.9% EC (फॉलिकुर)", dosage: "200 मिली/एकड़ 200 लीटर पानी में", interval: "वैकल्पिक प्रणालीगत कवकनाशी छिड़काव" }
          ]
        },
        pa: {
          name: "ਪੀਲੀ ਕੁੰਗੀ (ਸਟ੍ਰਾਈਪ ਰਸਟ)",
          crop: "ਕਣਕ",
          symptoms: "ਪੱਤਿਆਂ 'ਤੇ ਪੀਲੇ ਪਾਊਡਰ ਦੀਆਂ ਲੰਮੀਆਂ ਧਾਰੀਆਂ।",
          pathologyAnalysis: "96.8% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪੀਲੀ ਕੁੰਗੀ ਦੀ ਪਛਾਣ ਹੋਈ ਹੈ।",
          bioRemedies: ["5% ਨਿੰਮ ਅਰਕ (NSKE) ਦਾ ਛਿੜਕਾਅ ਕਰੋ", "ਖੱਟੀ ਲੱਸੀ + ਗਊ ਮੂਤਰ ਦਾ ਘੋਲ ਛਿੜਕੋ"],
          chemicalRemedies: [{ name: "ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 25% EC (ਟਿਲਟ)", dosage: "200 ਮਿਲੀਲਿਟਰ/ਏਕੜ 200 ਲਿਟਰ ਪਾਣੀ ਵਿੱਚ", interval: "ਬਿਮਾਰੀ ਦੇ ਪਹਿਲੇ ਲੱਛਣ 'ਤੇ ਛਿੜਕੋ" }]
        },
        mr: {
          name: "पिवळा तांबेरा (स्ट्राइप रस्ट)",
          crop: "गहू",
          symptoms: "पानांवर पिवळ्या रंगाच्या पावडरच्या समांतर पट्ट्या.",
          pathologyAnalysis: "96.8% अचूकतेसह पिवळ्या तांबेऱ्याचे निदान.",
          bioRemedies: ["5% निंबोळी अर्क फवारा", "आंबट ताक व गोमूत्र द्रावण वापरा"],
          chemicalRemedies: [{ name: "प्रोपिकोनाझोल 25% EC", dosage: "200 मिली/एकर 200L पाण्यात", interval: "लक्षणे दिसताच फवारणी करा" }]
        },
        gu: {
          name: "પીળો ગેરુ (સ્ટ્રાઇપ રસ્ટ)",
          crop: "ઘઉં",
          symptoms: "પાન પર પીળી પાવડર જેવી સમાંતર પટ્ટીઓ.",
          pathologyAnalysis: "96.8% ચોકસાઈ સાથે પીળા ગેરુ ની પુષ્ટિ.",
          bioRemedies: ["લીંબોળી અર્ક નો છંટકાવ કરો", "ટ્રાઈકોડર્મા વાપરો"],
          chemicalRemedies: [{ name: "પ્રોપિકોનાઝોલ 25% EC", dosage: "200 મિલી/એકર 200 લીટર પાણીમાં", interval: "પ્રથમ લક્ષણ પર છંટકાવ" }]
        },
        bn: {
          name: "হলুদ মরিচা রোগ",
          crop: "গম",
          symptoms: "পাতার ওপর হলুদ গুঁড়োর মতো রেখা।",
          pathologyAnalysis: "৯৬.৮% নির্ভুলতার সাথে মরিচা রোগ চিহ্নিত।",
          bioRemedies: ["নিম বীজের নির্যাস স্প্রে করুন", "ট্রাইকোডার্মা ব্যবহার করুন"],
          chemicalRemedies: [{ name: "প্রোপিকোনাজোল ২৫% EC", dosage: "২০০ মিলি/একর ২০০ লিটার জলে", interval: "লক্ষণ দেখা মাত্র স্প্রে করুন" }]
        },
        te: {
          name: "పసుపు కుంకుమ తెగులు",
          crop: "గోధుమ",
          symptoms: "ఆకులపై పసుపు రంగు చారలు.",
          pathologyAnalysis: "96.8% కచ్చితత్వంతో కుంకుమ తెగులు నిర్ధారణ.",
          bioRemedies: ["వేప గింజల కషాయం పిచికారీ చేయండి"],
          chemicalRemedies: [{ name: "ప్రొపికోనజోల్ 25% EC", dosage: "200 మి.లీ/ఎకరాకు 200 లీటర్ల నీటిలో", interval: "తెగులు కనిపించిన వెంటనే పిచికారీ" }]
        },
        ta: {
          name: "மஞ்சள் துரு நோய்",
          crop: "கோதுமை",
          symptoms: "இலைகளில் மஞ்சள் நிற பொடி போன்ற கோடுகள்.",
          pathologyAnalysis: "96.8% துல்லியத்துடன் துரு நோய் உறுதி செய்யப்பட்டது.",
          bioRemedies: ["வேப்பங்கொட்டை சாறு தெளிக்கவும்"],
          chemicalRemedies: [{ name: "ப்ரோபிகோனசோல் 25% EC", dosage: "200 மி.லி/ஏக்கர் 200 லிட்டர் நீரில்", interval: "நோய் கண்டவுடன் தெளிக்கவும்" }]
        }
      }
    },
    {
      id: "specimen-chilli-thrips",
      cropIcon: "🌶️",
      matchPercentage: "94.2% Match",
      severity: "HIGH",
      severityClass: "high",
      scientificName: "Thrips parvispinus",
      sprayCalcDefaults: { chemicalPerAcre: 160, unit: "ml", waterPerAcre: 200, costPerAcre: 750 },
      translations: {
        en: {
          name: "Black Thrips & Leaf Curl",
          crop: "Chilli",
          symptoms: "Upward boat-shaped leaf curling, bronze sheen on lower surfaces, flower dropping.",
          pathologyAnalysis: "Neural classifier identified upward leaf cupping, floral scarring, and dark thrip vector signatures. 94.2% confidence.",
          bioRemedies: ["Install 25 Blue & Yellow sticky insect cards per acre", "Spray Beauveria bassiana @ 5g/litre", "Apply Agniastra @ 20 ml/litre"],
          chemicalRemedies: [{ name: "Spinetoram 11.7% SC", dosage: "160 ml/acre in 200L water", interval: "Spray during early morning or late afternoon" }]
        },
        hi: {
          name: "ब्लैक थ्रिप्स और पत्ती मरोड़",
          crop: "मिर्च",
          symptoms: "पत्तियों का नाव की तरह ऊपर मुड़ना, निचली सतह पर कांस्य जैसी चमक, फूल झड़ना।",
          pathologyAnalysis: "मिर्च की पत्तियों के ऊपर मुड़ने और थ्रिप्स कीट के 94.2% सटीकता के साथ लक्षण पाए गए।",
          bioRemedies: ["25 नीले व पीले चिपचिपे कार्ड लगाएं", "ब्युवेरिया बेसियाना @ 5 ग्राम/लीटर छिड़कें", "अग्निअस्त्र @ 20 मिली/लीटर डालें"],
          chemicalRemedies: [{ name: "स्पाइनेटोरम 11.7% SC", dosage: "160 मिली/एकड़ 200 लीटर पानी में", interval: "सुबह या शाम के समय छिड़काव करें" }]
        },
        pa: {
          name: "ਕਾਲਾ ਥ੍ਰਿਪਸ ਅਤੇ ਪੱਤਾ ਮਰੋੜ",
          crop: "ਮਿਰਚ",
          symptoms: "ਪੱਤਿਆਂ ਦਾ ਉੱਪਰ ਵੱਲ ਮੁੜਨਾ ਅਤੇ ਫੁੱਲ ਝੜਨਾ।",
          pathologyAnalysis: "94.2% ਸ਼ੁੱਧਤਾ ਨਾਲ ਥ੍ਰਿਪਸ ਦੀ ਪਛਾਣ।",
          bioRemedies: ["ਸਟਿੱਕੀ ਕਾਰਡ ਲਗਾਓ", "ਬਿਊਵੇਰੀਆ ਛਿੜਕੋ"],
          chemicalRemedies: [{ name: "ਸਪਾਈਨੇਟੋਰਮ 11.7% SC", dosage: "160 ਮਿਲੀਲਿਟਰ/ਏਕੜ", interval: "ਸਵੇਰੇ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਛਿੜਕੋ" }]
        },
        mr: {
          name: "काळा थ्रिप्स व बोकड्या",
          crop: "मिरची",
          symptoms: "पाने वरच्या बाजूला वाटीसारखी वळणे.",
          pathologyAnalysis: "94.2% अचूकतेसह काळ्या थ्रिप्सचे निदान.",
          bioRemedies: ["चिकट सापळे वापरा", "बिव्हेरिया फवारा"],
          chemicalRemedies: [{ name: "स्पिनेटोरम 11.7% SC", dosage: "160 मिली/एकर", interval: "सकाळी किंवा संध्याकाळी फवारणी करा" }]
        },
        gu: {
          name: "કાળી થ્રીપ્સ અને પાન વળવા",
          crop: "મરચી",
          symptoms: "પાન ઉપરની તરફ વળવા.",
          pathologyAnalysis: "94.2% ચોકસાઈ સાથે થ્રીપ્સ નું નિદાન.",
          bioRemedies: ["સ્ટીકી ટ્રેપ વાપરો"],
          chemicalRemedies: [{ name: "સ્પીનેટોરમ 11.7% SC", dosage: "160 મિલી/એકર", interval: "સવાર અથવા સાંજ છંટકાવ" }]
        },
        bn: {
          name: "কালো থ্রিপস ও পাতা কোঁকড়ানো",
          crop: "লঙ্কা",
          symptoms: "পাতা ওপরের দিকে কুঁকড়ে যাওয়া।",
          pathologyAnalysis: "৯৪.২% নির্ভুলতার সাথে থ্রিপস শনাক্ত।",
          bioRemedies: ["স্টিকি ট্র্যাপ ব্যবহার করুন"],
          chemicalRemedies: [{ name: "স্পিনেটোরাম ১১.৭% SC", dosage: "১৬০ মিলি/একর", interval: "সকালে বা বিকেলে স্প্রে করুন" }]
        },
        te: {
          name: "నల్ల తామర పురుగు & ఆకు ముడత",
          crop: "మిర్చి",
          symptoms: "ఆకులు పైకి ముడుచుకుపోవడం మరియు పూత రాలడం.",
          pathologyAnalysis: "94.2% కచ్చితత్వంతో తామర పురుగు నిర్ధారణ.",
          bioRemedies: ["జిగురు అట్టలు అమర్చండి"],
          chemicalRemedies: [{ name: "స్పైనటోరమ్ 11.7% SC", dosage: "160 మి.లీ/ఎకరాకు", interval: "ఉదయం లేదా సాయంత్రం పిచికారీ" }]
        },
        ta: {
          name: "கருப்பு இலைப்பேன் & இலைச்சுருள்",
          crop: "மிளகாய்",
          symptoms: "இலைகள் மேல்நோக்கி சுருங்குதல்.",
          pathologyAnalysis: "94.2% துல்லியத்துடன் இலைப்பேன் கண்டறியப்பட்டது.",
          bioRemedies: ["ஒட்டும் பொறிகள் வைக்கவும்"],
          chemicalRemedies: [{ name: "ஸ்பினெடோரம் 11.7% SC", dosage: "160 மி.லி/ஏக்கர்", interval: "காலை அல்லது மாலையில் தெளிக்கவும்" }]
        }
      }
    },
    {
      id: "specimen-rice-blb",
      cropIcon: "🌾",
      matchPercentage: "95.1% Match",
      severity: "HIGH",
      severityClass: "high",
      scientificName: "Xanthomonas oryzae pv. oryzae",
      sprayCalcDefaults: { chemicalPerAcre: 506, unit: "g", waterPerAcre: 200, costPerAcre: 390 },
      translations: {
        en: {
          name: "Bacterial Leaf Blight (BLB)",
          crop: "Rice / Paddy",
          symptoms: "Water-soaked yellowish-green translucent streaks along leaf edges undulating into straw-colored dry lesions.",
          pathologyAnalysis: "Identified characteristic wavy leaf margin necrosis and bacterial lesion streaming pattern. 95.1% pathogen match.",
          bioRemedies: ["Foliar spray of fresh cow dung supernatant", "Apply Pseudomonas fluorescens 0.2%", "Drain field water for 3-4 days"],
          chemicalRemedies: [{ name: "Streptocycline + Copper Oxychloride", dosage: "6 g + 500 g/acre in 200L water", interval: "Spray on sunny day after morning dew dries" }]
        },
        hi: {
          name: "जीवाणु पत्ती झुलसा (BLB)",
          crop: "धान / चावल",
          symptoms: "पत्तियों के किनारों पर पीले-हरे पारभासी धब्बे जो बाद में भूसे के रंग में सूख जाते हैं।",
          pathologyAnalysis: "धान की पत्तियों के किनारों पर जीवाणु झुलसा के विशिष्ट लक्षणों की 95.1% सटीकता से पुष्टि।",
          bioRemedies: ["ताजे गोबर का छना हुआ पानी छिड़कें", "स्यूडोमोनास फ्लोरोसेंट 0.2% का प्रयोग करें", "खेत से 3-4 दिन पानी निकाल दें"],
          chemicalRemedies: [{ name: "स्ट्रेप्टोसाइक्लिन + कॉपर ऑक्सीक्लोराइड", dosage: "6 ग्राम + 500 ग्राम प्रति 200 लीटर पानी प्रति एकड़", interval: "ओस सूखने के बाद धूप वाले दिन छिड़कें" }]
        },
        pa: {
          name: "ਝੋਨੇ ਦਾ ਜੀਵਾਣੂ ਝੁਲਸ ਰੋਗ (BLB)",
          crop: "ਝੋਨਾ / ਬਾਸਮਤੀ",
          symptoms: "ਪੱਤਿਆਂ ਦੇ ਕਿਨਾਰਿਆਂ ਦਾ ਪੀਲਾ ਪੈ ਕੇ ਸੁੱਕਣਾ।",
          pathologyAnalysis: "95.1% ਸ਼ੁੱਧਤਾ ਨਾਲ ਬੈਕਟੀਰੀਅਲ ਬਲਾਈਟ ਦੀ ਪਛਾਣ।",
          bioRemedies: ["ਖੇਤ ਵਿੱਚੋਂ 3-4 ਦਿਨ ਪਾਣੀ ਕੱਢ ਦਿਓ", "ਸਿਊਡੋਮੋਨਾਸ ਵਰਤੋ"],
          chemicalRemedies: [{ name: "ਸਟ੍ਰੈਪਟੋਸਾਈਕਲੀਨ + ਕਾਪਰ ਆਕਸੀਕਲੋਰਾਈਡ", dosage: "6 ਗ੍ਰਾਮ + 500 ਗ੍ਰਾਮ/ਏਕੜ", interval: "ਧੁੱਪ ਵਾਲੇ ਦਿਨ ਛਿੜਕੋ" }]
        },
        mr: {
          name: "भातावरील जिवाणूजन्य करपा (BLB)",
          crop: "भात / धान",
          symptoms: "पानांच्या कडा पिवळ्या पडून सुकणे.",
          pathologyAnalysis: "95.1% अचूकतेसह जिवाणूजन्य करप्याचे निदान.",
          bioRemedies: ["शेतातून 3-4 दिवस पाणी काढून टाका", "स्यूडोमोनास वापरा"],
          chemicalRemedies: [{ name: "स्ट्रेप्टोसायक्लिन + कॉपर ऑक्सिक्लोराईड", dosage: "6 ग्रॅम + 500 ग्रॅम/एकर", interval: "दव सुકल्यानंतर फवारणी करा" }]
        },
        gu: {
          name: "ડાંગરમાં બેક્ટેરિયલ પાનનો સુકારો (BLB)",
          crop: "ડાંગર / ચોખા",
          symptoms: "પાનની કિનારીઓ પીળી પડીને સુકાઈ જવી.",
          pathologyAnalysis: "95.1% ચોકસાઈ સાથે BLB નું નિદાન.",
          bioRemedies: ["ખેતરમાંથી 3-4 દિવસ પાણી નિતારી લો"],
          chemicalRemedies: [{ name: "સ્ટ્રેપ્ટોસાયક્લિન + કોપર ઓક્સિક્લોરાઇડ", dosage: "6 ગ્રામ + 500 ગ્રામ/એકર", interval: "તડકામાં છંટકાવ કરો" }]
        },
        bn: {
          name: "ধানের ব্যাক্টেরিয়াল লিফ ব্লাইট (BLB)",
          crop: "ধান",
          symptoms: "পাতার কিনারা হলুদ হয়ে শুকিয়ে যাওয়া।",
          pathologyAnalysis: "৯৫.১% নির্ভুলতার সাথে BLB রোগ শনাক্ত।",
          bioRemedies: ["জমি থেকে ৩-৪ দিন জল বের করে দিন"],
          chemicalRemedies: [{ name: "স্ট্রেপ্টোসাইক্লিন + কপার অক্সিক্লোরাইড", dosage: "৬ গ্রাম + ৫০০ গ্রাম/একর", interval: "রোদ উঠলে স্প্রে করুন" }]
        },
        te: {
          name: "వరిలో బాక్టీరియా ఆకు ఎండు తెగులు (BLB)",
          crop: "వరి / ధాన్యం",
          symptoms: "ఆకుల అంచులు పసుపు రంగులోకి మారి ఎండిపోవడం.",
          pathologyAnalysis: "95.1% కచ్చితత్వంతో BLB తెగులు నిర్ధారణ.",
          bioRemedies: ["పొలంలో 3-4 రోజులు నీరు తీసివేయండి"],
          chemicalRemedies: [{ name: "స్ట్రెప్టోసైక్లిన్ + కాపర్ ఆక్సిక్లోరైడ్", dosage: "6 గ్రా + 500 గ్రా/ఎకరాకు", interval: "ఎండ ఉన్నప్పుడు పిచికారీ చేయండి" }]
        },
        ta: {
          name: "நெல்லில் பாக்டீரியா இலைக்கருகல் நோய் (BLB)",
          crop: "நெல்",
          symptoms: "இலைகளின் ஓரங்கள் மஞ்சள் நிறமாக மாறி காய்ந்து போகுதல்.",
          pathologyAnalysis: "95.1% துல்லியத்துடன் பாக்டீரியா கருகல் கண்டறியப்பட்டது.",
          bioRemedies: ["வயலில் இருந்து 3-4 நாட்களுக்கு நீரை வடிக்கவும்"],
          chemicalRemedies: [{ name: "ஸ்ட்ரெப்டோசைக்ளின் + காப்பர் ஆக்ஸிகுளோரைடு", dosage: "6 கிராம் + 500 கிராம்/ஏக்கர்", interval: "பனி காய்ந்த பின் தெளிக்கவும்" }]
        }
      }
    }
  ],

  // Weather Telemetry
  weatherData: {
    station: "Ludhiana (Punjab)",
    currentTemp: "33°C",
    metrics: { humidity: "65%", windSpeed: "8 km/h", currentRain: "0 mm", rainProbability: "97%" },
    districts: [
      { id: "ludhiana", name: "Ludhiana (Punjab) - Wheat / Paddy", temp: "33°C", condition: "Overcast / Heavy Clouds", humidity: "65%", wind: "8 km/h", rain: "0 mm", rainProb: "97%" },
      { id: "yavatmal", name: "Yavatmal (Maharashtra) - Cotton / Soybean", temp: "31°C", condition: "Scattered Thunderstorms", humidity: "78%", wind: "14 km/h", rain: "4.2 mm", rainProb: "85%" },
      { id: "guntur", name: "Guntur (Andhra Pradesh) - Chilli / Tobacco", temp: "35°C", condition: "Partly Sunny / Humid", humidity: "72%", wind: "12 km/h", rain: "0 mm", rainProb: "40%" },
      { id: "indore", name: "Indore (Madhya Pradesh) - Soybean / Wheat", temp: "29°C", condition: "Moderate Rain Showers", humidity: "82%", wind: "10 km/h", rain: "8.5 mm", rainProb: "90%" },
      { id: "karnal", name: "Karnal (Haryana) - Basmati Paddy / Mustard", temp: "34°C", condition: "Heavy Overcast", humidity: "68%", wind: "9 km/h", rain: "1.0 mm", rainProb: "80%" },
      { id: "ganganagar", name: "Sri Ganganagar (Rajasthan) - Mustard / Cotton", temp: "38°C", condition: "Dry / Hot Wind", humidity: "42%", wind: "16 km/h", rain: "0 mm", rainProb: "15%" }
    ],
    advisories: [
      {
        id: "adv-irrigation",
        translations: {
          en: { title: "Irrigation Guidance", tag: "NATURAL MOISTURE", desc: "Significant rainfall (14.7 mm) predicted over the next 48–72 hours. Soil will receive natural moisture recharge.", action: "Pause all tubewell/canal irrigation to prevent root rot, aeration deficit, and nutrient runoff." },
          hi: { title: "सिंचाई मार्गदर्शन", tag: "प्राकृतिक नमी", desc: "अगले 48-72 घंटों में 14.7 मिमी बारिश की संभावना है। मिट्टी को प्राकृतिक रूप से पर्याप्त नमी मिलेगी।", action: "जड़ों के सड़ने और पोषक तत्वों के बहने से रोकने हेतु सभी प्रकार की नलकूप/नहर सिंचाई तुरंत रोकें।" },
          pa: { title: "ਸਿੰਚਾਈ ਸੰਬੰਧੀ ਸਲਾਹ", tag: "ਕੁਦਰਤੀ ਨਮੀ", desc: "ਅਗਲੇ 48-72 ਘੰਟਿਆਂ ਵਿੱਚ ਭਾਰੀ ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ਹੈ।", action: "ਜੜ੍ਹਾਂ ਨੂੰ ਗਲਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਟਿਊਬਵੈੱਲ/ਨਹਿਰੀ ਸਿੰਚਾਈ ਤੁਰੰਤ ਬੰਦ ਕਰੋ।" },
          mr: { title: "पाणी व्यवस्थापन सल्ला", tag: "नैसर्गिक ओलावा", desc: "पुढील 48-72 तासांत 14.7 मिमी पावसाचा अंदाज आहे.", action: "मुळांची कूज रोखण्यासाठी विहीर किंवा कालव्याचे पाणी देणे त्वरित थांबवा." },
          gu: { title: "પિયત માર્ગદર્શન", tag: "કુદરતી ભેજ", desc: "આગામી 48-72 કલાકમાં સારો વરસાદ થવાની આગાહી છે.", action: "મૂળના સડાથી બચવા ટ્યુબવેલ કે નહેર પિયત બંધ રાખો." },
          bn: { title: "সেচ সংক্রান্ত নির্দেশিকা", tag: "প্রাকৃতিক আর্দ্রতা", desc: "আগামী ৪৮-৭২ ঘণ্টায় উল্লেখযোগ্য বৃষ্টির পূর্বাভাস রয়েছে।", action: "শিকড় পচা রোধ করতে সেচ অবিলম্বে বন্ধ রাখুন।" },
          te: { title: "నీటిపారుదల సలహా", tag: "సహజ తేమ", desc: "రాబోయే 48-72 గంటల్లో భారీ వర్ష సూచన ఉంది.", action: "వేరు కుళ్లు రాకుండా బోరు/కాలువ నీరు పారించడం నిలిపివేయండి." },
          ta: { title: "நீர்ப்பாசன வழிகாட்டுதல்", tag: "இயற்கை ஈரம்", desc: "அடுத்த 48-72 மணிநேரத்தில் கனமழை பெய்ய வாய்ப்புள்ளது.", action: "வேரழுகலை தடுக்க ஆழ்துளை கிணறு/வாய்க்கால் பாசனத்தை உடனடியாக நிறுத்துங்கள்." }
        }
      },
      {
        id: "adv-spray",
        translations: {
          en: { title: "Pesticide & Chemical Spray Window", tag: "WASH-OFF RISK", desc: "Rainfall probability exceeds 50%. Rain within 4–6 hours of application will wash off chemical residues.", action: "Delay chemical spray until a clear 8-hour dry weather window is confirmed." },
          hi: { title: "कीटनाशक व रसायन छिड़काव खिड़की", tag: "धुलने का जोखिम", desc: "बारिश की संभावना 50% से अधिक है। छिड़काव के 4-6 घंटे के भीतर बारिश होने से दवा धुल जाएगी।", action: "कम से कम 8 घंटे लगातार मौसम साफ रहने की पुष्टि होने तक छिड़काव टालें।" },
          pa: { title: "ਕੀਟਨਾਸ਼ਕ ਛਿੜਕਾਅ ਖਿੜਕੀ", tag: "ਦਵਾਈ ਧੁਲਣ ਦਾ ਖਤਰਾ", desc: "ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ 50% ਤੋਂ ਵੱਧ ਹੈ।", action: "ਘੱਟੋ-ਘੱਟ 8 ਘੰਟੇ ਮੌਸਮ ਸਾਫ ਹੋਣ ਤੱਕ ਛਿੜਕਾਅ ਮੁਲਤਵੀ ਕਰੋ।" },
          mr: { title: "कीटकनाशक फवारणी वेळ", tag: "धुवून जाण्याचा धोका", desc: "पावसाची शक्यता 50% पेक्षा जास्त आहे.", action: "किमान 8 तास हवामान कोरडे राहीपर्यंत फवारणी पुढे ढकला." },
          gu: { title: "જંતુનાશક છંટકાવ વિન્ડો", tag: "ધોવાઈ જવાનું જોખમ", desc: "વરસાદની સંભાવના 50% થી વધુ છે.", action: "8 કલાક હવામાન ચોખ્ખું ન થાય ત્યાં સુધી છંટકાવ મોકૂફ રાખો." },
          bn: { title: "কীটনাশক স্প্রে সতর্কতা", tag: "ধুয়ে যাওয়ার ঝুঁকি", desc: "বৃষ্টির সম্ভাবনা ৫০% এর বেশি।", action: "কমপক্ষে ৮ ঘণ্টা শুকনো আবহাওয়া না পাওয়া পর্যন্ত স্প্রে স্থগিত রাখুন।" },
          te: { title: "పురుగుమందుల పిచికారీ సమయం", tag: "కొట్టుకుపోయే ప్రమాదం", desc: "వర్షం పడే అవకాశం 50% కంటే ఎక్కువ.", action: "కనీసం 8 గంటలు పొడి వాతావరణం ఉండే వరకు పిచికారీ వాయిదా వేయండి." },
          ta: { title: "பூச்சிக்கொல்லி தெளிக்கும் நேரம்", tag: "கழுவிச் செல்லும் அபாயம்", desc: "மழை பெய்ய 50% மேல் வாய்ப்புள்ளது.", action: "குறைந்தது 8 மணிநேரம் மழை இல்லாத வரை மருந்து தெளிப்பதை தள்ளிப்போடுங்கள்." }
        }
      },
      {
        id: "adv-disease",
        translations: {
          en: { title: "Weather-Induced Disease Risk", tag: "LOW DISEASE PRESSURE", desc: "Current meteorological parameters unfavorable for rapid epidemic spore explosion.", action: "Maintain standard field scouting twice a week." },
          hi: { title: "मौसम जनित रोग जोखिम", tag: "कम रोग दबाव", desc: "वर्तमान मौसम मापदंड कवक बीजाणुओं के तीव्र प्रसार के अनुकूल नहीं हैं।", action: "सप्ताह में दो बार नियमित खेत निरीक्षण जारी रखें।" },
          pa: { title: "ਮੌਸਮ ਅਧਾਰਤ ਬਿਮਾਰੀ ਖਤਰਾ", tag: "ਘੱਟ ਬਿਮਾਰੀ ਦਬਾਅ", desc: "ਮੌਜੂਦਾ ਮੌਸਮ ਬਿਮਾਰੀ ਦੇ ਤੇਜ਼ ਫੈਲਾਅ ਲਈ ਅਨੁਕੂਲ ਨਹੀਂ ਹੈ।", action: "ਹਫ਼ਤੇ ਵਿੱਚ ਦੋ ਵਾਰ ਖੇਤ ਦਾ ਨਿਰੀਖਣ ਕਰੋ।" },
          mr: { title: "हवामानजन्य रोग धोका", tag: "कमी रोग प्रादुर्भाव", desc: "सध्याचे हवामान बुरशीच्या प्रसारास अनुकूल नाही.", action: "आठवड्यातून दोनदा शेताची पाहणी करा." },
          gu: { title: "હવામાન આધારિત રોગ જોખમ", tag: "ઓછું રોગ દબાણ", desc: "વર્તમાન હવામાન રોગ ફેલાવા માટે અનુકૂળ નથી.", action: "અઠવાડિયામાં બે વાર ખેતરની મુલાકાત લો." },
          bn: { title: "আবহাওয়াভিত্তিক রোগ ঝুঁকি", tag: "কম রোগের চাপ", desc: "বর্তমান আবহাওয়া রোগের দ্রুত বিস্তারের অনুকূল নয়।", action: "সপ্তাহে দুবার ক্ষেত পর্যবেক্ষণ করুন।" },
          te: { title: "వాతావరణ ఆధారిత తెగులు ప్రమాదం", tag: "తక్కువ తెగులు ఒత్తిడి", desc: "ప్రస్తుత వాతావరణం తెగుళ్లు వ్యాపించడానికి అనుకూలంగా లేదు.", action: "వారానికి రెండుసార్లు క్షేత్ర పరిశీలన చేయండి." },
          ta: { title: "வானிலை சார்ந்த நோய் அபாயம்", tag: "குறைந்த நோய் தாக்கம்", desc: "தற்போதைய வானிலை பூஞ்சை பரவலுக்கு சாதகமாக இல்லை.", action: "வாரத்திற்கு இருமுறை வயலை ஆய்வு செய்யவும்." }
        }
      },
      {
        id: "adv-harvest",
        translations: {
          en: { title: "Harvest & Post-Harvest Operation Window", tag: "CAUTION", desc: "Intermittent cloud cover or localized drizzle possibility in upcoming days.", action: "Ensure tarpaulin sheets are kept ready in farm yards to cover harvested grain bags." },
          hi: { title: "कटाई व कटाई उपरांत परिचालन खिड़की", tag: "सावधानी", desc: "आने वाले दिनों में रुक-रुक कर बादल छाए रहने या हल्की बूंदाबांदी की संभावना है।", action: "खेत व खलिहान में कटी हुई फसल व बोरियों को ढकने के लिए तिरपाल तैयार रखें।" },
          pa: { title: "ਵਾਢੀ ਸੰਬੰਧੀ ਸਲਾਹ", tag: "ਸਾਵਧਾਨੀ", desc: "ਆਉਣ ਵਾਲੇ ਦਿਨਾਂ ਵਿੱਚ ਬੱਦਲਵਾਈ ਜਾਂ ਹਲਕੀ ਬੂੰਦਾਬਾਂਦੀ ਹੋ ਸਕਦੀ ਹੈ।", action: "ਅਨਾਜ ਦੀਆਂ ਬੋਰੀਆਂ ਢੱਕਣ ਲਈ ਤਰਪਾਲਾਂ ਤਿਆਰ ਰੱਖੋ।" },
          mr: { title: "कापणी व साठवणूक सल्ला", tag: "सावधगिरी", desc: "पुढील काही दिवसांत ढगाळ वातावरण किंवा हलक्या सरींची शक्यता आहे.", action: "धान्याची पोती झाकण्यासाठी ताડपत्री तयार ठेवा." },
          gu: { title: "લણણી માર્ગદર્શન", tag: "સાવચેતી", desc: "આગામી દિવસોમાં વાદળછાયું વાતાવરણ અથવા ઝાપટાં ની શક્યતા છે.", action: "કાપણી કરેલ પાક ઢાંકવા તાડપત્રી તૈયાર રાખો." },
          bn: { title: "ফসল তোলা ও সংরক্ষণ সতর্কতা", tag: "সতর্কতা", desc: "আগামী দিনগুলিতে মেঘলা আকাশ ও হালকা বৃষ্টির সম্ভাবনা।", action: "ফসল ঢেকে রাখার জন্য ত্রিপল প্রস্তুত রাখুন।" },
          te: { title: "కోత మరియు నిల్వ మార్గదర్శకాలు", tag: "జాగ్రత్త", desc: "రాబోయే రోజుల్లో మేఘావృత వాతావరణం లేదా చిరుజల్లులు కురిసే అవకాశం ఉంది.", action: "ధాన్యం బస్తాలు తడవకుండా టార్పాలిన్ పట్టాలు సిద్ధంగా ఉంచుకోండి." },
          ta: { title: "அறுவடை மற்றும் சேமிப்பு வழிகாட்டுதல்", tag: "எச்சரிக்கை", desc: "வரும் நாட்களில் மேகமூட்டம் அல்லது லேசான தூறல் பெய்ய வாய்ப்புள்ளது.", action: "அறுவடை செய்த தானிய மூடைகளை மூட தார்ப்பாய்களை தயார் நிலையில் வைக்கவும்." }
        }
      }
    ],
    forecast7Days: [
      { dayKey: "sat", maxTemp: "34°", minTemp: "26°", icon: "🌧️", rainProb: "71%", active: false },
      { dayKey: "sun", maxTemp: "34°", minTemp: "25°", icon: "🌧️", rainProb: "92%", active: false },
      { dayKey: "mon", maxTemp: "33°", minTemp: "25°", icon: "⛅", rainProb: "97%", active: false },
      { dayKey: "tue", maxTemp: "32°", minTemp: "25°", icon: "⛅", rainProb: "90%", active: false },
      { dayKey: "wed", maxTemp: "32°", minTemp: "25°", icon: "⛅", rainProb: "76%", active: false },
      { dayKey: "thu", maxTemp: "30°", minTemp: "25°", icon: "⛅", rainProb: "86%", active: true },
      { dayKey: "fri", maxTemp: "30°", minTemp: "24°", icon: "⛈️", rainProb: "74%", active: false }
    ]
  },

  // Live Mandi Prices
  mandiData: [
    {
      id: "mandi-cotton",
      modalPrice: 7650,
      priceTrend: "+₹140 (+1.86%)",
      trendType: "up",
      minPrice: 7200,
      maxPrice: 7850,
      arrivals: "450 Tonnes",
      officialMsp: 7121,
      lastBiddingSync: "15:30 IST",
      thirtyDayAvg: 7420,
      translations: {
        en: { commodity: "Cotton (Kapas / Medium Staple)", category: "Fibre & Cash Crops", mandiName: "Yavatmal APMC Main Market Yard", district: "Yavatmal", state: "Maharashtra", variety: "H-4 / BT II", mspComparison: "Trading +7.4% ABOVE MSP", forecastAdvice: "HOLD / SELL GRADUALLY: Strong textile mill spot demand indicates firm prices for next 10 days." },
        hi: { commodity: "कपास (मध्यम रेशा)", category: "रेशा व नकदी फसलें", mandiName: "यवतमाल एपीएमसी मुख्य मंडी यार्ड", district: "यवतमाल", state: "महाराष्ट्र", variety: "एच-4 / बीटी II", mspComparison: "एमएसपी से +7.4% ऊपर व्यापार", forecastAdvice: "रोकें / धीरे-धीरे बेचें: कताई मिलों की मजबूत मांग से अगले 10 दिनों तक भाव स्थिर रहने की उम्मीद है।" },
        pa: { commodity: "ਕਪਾਹ / ਨਰਮਾ", category: "ਨਕਦੀ ਫਸਲਾਂ", mandiName: "ਯਵਤਮਾਲ ਏਪੀਐਮਸੀ ਮੰਡੀ", district: "ਯਵਤਮਾਲ", state: "ਮਹਾਰਾਸ਼ਟਰ", variety: "H-4 / BT II", mspComparison: "ਸਰਕਾਰੀ ਐਮਐਸਪੀ ਤੋਂ +7.4% ਉੱਪਰ", forecastAdvice: "ਹੌਲੀ-ਹੌਲੀ ਵੇਚੋ: ਮੰਡੀ ਵਿੱਚ ਮੰਗ ਮਜ਼ਬੂਤ ਹੈ।" },
        mr: { commodity: "कापूस (मध्यम धागा)", category: "रोख व फायबर पिके", mandiName: "यवतमाळ एपीएमसी मुख्य मार्केट यार्ड", district: "यवतमाळ", state: "महाराष्ट्र", variety: "H-4 / BT II", mspComparison: "हमीभावापेक्षा +7.4% जास्त", forecastAdvice: "हळूहळू विक्री करा: पुढील 10 दिवस भाव टिकून राहण्याची शक्यता." },
        gu: { commodity: "કપાસ (મધ્યમ તાર)", category: "રોકડિયા પાક", mandiName: "યવતમાળ માર્કેટ યાર્ડ", district: "યવતમાળ", state: "મહારાષ્ટ્ર", variety: "H-4 / BT II", mspComparison: "ટેકાના ભાવથી +7.4% વધુ", forecastAdvice: "ધીમે ધીમે વેચો: માંગ મજબૂત છે." },
        bn: { commodity: "তুলা (মাঝারি আঁশ)", category: "অর্থকরী ফসল", mandiName: "ইয়াভাতমাল এপিএমসি মান্ডি", district: "ইয়াভাতমাল", state: "মহারাষ্ট্র", variety: "H-4 / BT II", mspComparison: "এমএসপির চেয়ে +৭.৪% বেশি", forecastAdvice: "ধীরে ধীরে বিক্রি করুন: চাহিদা বাড়ছে।" },
        te: { commodity: "పత్తి (మధ్యస్థ పింజ)", category: "వాణిజ్య పంటలు", mandiName: "యవత్మాల్ ఏపీఎంసీ మార్కెట్ యార్డ్", district: "యవత్మాల్", state: "మహారాష్ట్ర", variety: "H-4 / BT II", mspComparison: "కనీస మద్దతు ధర కంటే +7.4% ఎక్కువ", forecastAdvice: "క్రమంగా అమ్ముకోండి: డిమాండ్ బలంగా ఉంది." },
        ta: { commodity: "பருத்தி (நடுத்தர இழை)", category: "பணப்பயிர்கள்", mandiName: "யவத்மால் ஒழுங்குமுறை விற்பனைக்கூடம்", district: "யவத்மால்", state: "மகாராஷ்டிரா", variety: "H-4 / BT II", mspComparison: "குறைந்தபட்ச ஆதரவு விலையை விட +7.4% அதிகம்", forecastAdvice: "மெதுவாக விற்கவும்: ஆலைகளின் தேவை அதிகமாக உள்ளது." }
      }
    },
    {
      id: "mandi-wheat",
      modalPrice: 2480,
      priceTrend: "+₹35 (+1.43%)",
      trendType: "up",
      minPrice: 2380,
      maxPrice: 2540,
      arrivals: "1200 Tonnes",
      officialMsp: 2275,
      lastBiddingSync: "16:15 IST",
      thirtyDayAvg: 2420,
      translations: {
        en: { commodity: "Wheat (Sharbati / Lokwan)", category: "Cereals & Grains", mandiName: "Khanna APMC Grain Market (Asia's Largest)", district: "Ludhiana", state: "Punjab", variety: "PBW 824 / HD 3086", mspComparison: "Trading +9.0% ABOVE MSP", forecastAdvice: "SELL: Prices trading near peak harvest ceiling. Buffer stock procurement nearing completion." },
        hi: { commodity: "गेहूं (शरबती / लोकवन)", category: "अनाज व खाद्यान्न", mandiName: "खन्ना एपीएमसी अनाज मंडी (एशिया की सबसे बड़ी)", district: "लुधियाना", state: "पंजाब", variety: "पीबीडब्ल्यू 824 / एचडी 3086", mspComparison: "एमएसपी से +9.0% ऊपर व्यापार", forecastAdvice: "बेचें: भाव उच्चतम स्तर के करीब हैं। सरकारी खरीद अंतिम चरण में है।" },
        pa: { commodity: "ਕਣਕ (ਸ਼ਰਬਤੀ / ਲੋਕਵਾਨ)", category: "ਅਨਾਜ", mandiName: "ਖੰਨਾ ਅਨਾਜ ਮੰਡੀ (ਏਸ਼ੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਮੰਡੀ)", district: "ਲੁਧਿਆਣਾ", state: "ਪੰਜਾਬ", variety: "PBW 824 / HD 3086", mspComparison: "ਸਰਕਾਰੀ ਐਮਐਸਪੀ ਤੋਂ +9.0% ਉੱਪਰ", forecastAdvice: "ਵੇਚਣ ਦਾ ਸਹੀ ਸਮਾਂ: ਭਾਅ ਉੱਚੇ ਪੱਧਰ 'ਤੇ ਹਨ।" },
        mr: { commodity: "गहू (शरबती / लोकवान)", category: "धान्य व तृणधान्ये", mandiName: "खन्ना एपीएमसी धान्य मार्केट", district: "लुधियाना", state: "पंजाब", variety: "PBW 824 / HD 3086", mspComparison: "हमीभावापेक्षा +9.0% जास्त", forecastAdvice: "विक्री करा: भाव उच्च पातळीवर आहेत." },
        gu: { commodity: "ઘઉં (શરબતી / લોકવન)", category: "અનાજ", mandiName: "ખન્ના અનાજ માર્કેટ યાર્ડ", district: "લુધિયાણા", state: "પંજાબ", variety: "PBW 824 / HD 3086", mspComparison: "ટેકાના ભાવથી +9.0% વધુ", forecastAdvice: "વેચાણ કરો: ભાવ સર્વોચ્ચ સ્તરે છે." },
        bn: { commodity: "গম (শরবতী / লোকওয়ান)", category: "দানাশস্য", mandiName: "খান্না এপিএমসি শস্য মান্ডি", district: "লুধিয়ানা", state: "পাঞ্জাব", variety: "PBW 824 / HD 3086", mspComparison: "এমএসপির চেয়ে +৯.০% বেশি", forecastAdvice: "বিক্রি করুন: দাম ভালো রয়েছে।" },
        te: { commodity: "గోధుమ (శర్బతి / లోక్వాన్)", category: "ధాన్యాలు", mandiName: "ఖన్నా ఏపీఎంసీ మార్కెట్ యార్డ్", district: "లూధియానా", state: "పంజాబ్", variety: "PBW 824 / HD 3086", mspComparison: "కనీస మద్దతు ధర కంటే +9.0% ఎక్కువ", forecastAdvice: "అమ్ముకోండి: ధరలు గరిష్ట స్థాయిలో ఉన్నాయి." },
        ta: { commodity: "கோதுமை (சர்பதி / லோக்வான்)", category: "தானியங்கள்", mandiName: "கன்னா தானிய விற்பனைக்கூடம்", district: "லூதியானா", state: "பஞ்சாப்", variety: "PBW 824 / HD 3086", mspComparison: "ஆதரவு விலையை விட +9.0% அதிகம்", forecastAdvice: "விற்கவும்: விலை உச்சத்தில் உள்ளது." }
      }
    },
    {
      id: "mandi-chilli",
      modalPrice: 19200,
      priceTrend: "-₹180 (-0.93%)",
      trendType: "down",
      minPrice: 17800,
      maxPrice: 20500,
      arrivals: "820 Tonnes",
      officialMsp: null,
      lastBiddingSync: "15:45 IST",
      thirtyDayAvg: 19600,
      translations: {
        en: { commodity: "Chilli (Teja / Dry Red Grade A)", category: "Spices", mandiName: "Guntur Mirchi Yard (National Hub)", district: "Guntur", state: "Andhra Pradesh", variety: "Teja Supreme / 334", mspComparison: "Market Driven Commercial Commodity", forecastAdvice: "HOLD: Export inquiries from Southeast Asia expected to rebound price above ₹20,000/Q next week." },
        hi: { commodity: "मिर्च (तेजा / सूखी लाल ग्रेड ए)", category: "मसाले", mandiName: "गुंटूर मिर्च यार्ड (राष्ट्रीय केंद्र)", district: "गुंटूर", state: "आंध्र प्रदेश", variety: "तेजा सुप्रीम / 334", mspComparison: "बाजार आधारित वाणिज्यिक जिंस", forecastAdvice: "रोकें: दक्षिण-पूर्व एशिया से निर्यात मांग आने पर अगले सप्ताह भाव ₹20,000/क्विंटल पार होने की संभावना।" },
        pa: { commodity: "ਲਾਲ ਮਿਰਚ (ਤੇਜਾ ਗ੍ਰੇਡ A)", category: "ਮਸਾਲੇ", mandiName: "ਗੁੰਟੂਰ ਮਿਰਚ ਮੰਡੀ (ਰਾਸ਼ਟਰੀ ਹੱਬ)", district: "ਗੁੰਟੂਰ", state: "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼", variety: "Teja Supreme / 334", mspComparison: "ਵਪਾਰਕ ਵਸਤੂ", forecastAdvice: "ਰੋਕੋ: ਅਗਲੇ ਹਫ਼ਤੇ ਨਿਰਯਾਤ ਮੰਗ ਵਧਣ ਨਾਲ ਭਾਅ ਚੜ੍ਹਨਗੇ।" },
        mr: { commodity: "मिरची (तेजा / सुकी लाल)", category: "मसाले", mandiName: "गुंटूर मिरची यार्ड", district: "गुंटूर", state: "आंध्र प्रदेश", variety: "Teja Supreme / 334", mspComparison: "बाजारभाव आधारित पीक", forecastAdvice: "थांबा: पुढील आठवड्यात निर्यातीमुळे भाव ₹20,000 पार जाण्याची शक्यता." },
        gu: { commodity: "મરચી (તેજા / સૂકી લાલ)", category: "મસાલા", mandiName: "ગુંટૂર મરચી યાર્ડ", district: "ગુંટૂર", state: "આંધ્ર પ્રદેશ", variety: "Teja Supreme / 334", mspComparison: "બજાર આધારિત કોમોડિટી", forecastAdvice: "માલ સાચવો: નિકાસ માંગ વધતાં ભાવ વધશે." },
        bn: { commodity: "শুকনো লঙ্কা (তেজা গ্রেড এ)", category: "মশলা", mandiName: "গুন্টুর লঙ্কা মান্ডি", district: "গুন্টুর", state: "অন্ধ্র প্রদেশ", variety: "Teja Supreme / 334", mspComparison: "বাণিজ্যিক ফসল", forecastAdvice: "ধরে রাখুন: রপ্তানি চাহিদা বাড়ার সম্ভাবনা।" },
        te: { commodity: "మిర్చి (తేజా / ఎండు మిరప గ్రేడ్ A)", category: "సుగంధ ద్రవ్యాలు", mandiName: "గుంటూరు మిర్చి యార్డ్ (జాతీయ కేంద్రం)", district: "గుంటూరు", state: "ఆంధ్రప్రదేశ్", variety: "తేజా సుప్రీమ్ / 334", mspComparison: "మార్కెట్ ఆధారిత వాణిజ్య పంట", forecastAdvice: "నిల్వ ఉంచండి: విదేశీ ఎగుమతి ఆర్డర్లతో వచ్చే వారం ధరలు పెరిగే అవకాశం ఉంది." },
        ta: { commodity: "மிளகாய் (தேஜா / காய்ந்த சிவப்பு)", category: "மசாலா", mandiName: "குண்டூர் மிளகாய் சந்தை", district: "குண்டூர்", state: "ஆந்திர பிரதேசம்", variety: "தேஜா சுப்ரீம் / 334", mspComparison: "வணிகப் பயிர்", forecastAdvice: "வைத்திருக்கவும்: ஏற்றுமதி தேவை அதிகரிப்பதால் விலை உயரும்." }
      }
    },
    {
      id: "mandi-soybean",
      modalPrice: 4820,
      priceTrend: "+₹60 (+1.26%)",
      trendType: "up",
      minPrice: 4620,
      maxPrice: 4980,
      arrivals: "640 Tonnes",
      officialMsp: 4600,
      lastBiddingSync: "15:30 IST",
      thirtyDayAvg: 4740,
      translations: {
        en: { commodity: "Soybean (Yellow Seed)", category: "Oilseeds & Pulses", mandiName: "Indore Laxmibai Nagar Mandi", district: "Indore", state: "Madhya Pradesh", variety: "JS 9560 / JS 20-34", mspComparison: "Trading +4.8% ABOVE MSP", forecastAdvice: "MODERATE LIQUIDATION: Crushers actively procuring; recommend liquidating 50% stored stock." },
        hi: { commodity: "सोयाबीन (पीला दाना)", category: "तिलहन व दलहन", mandiName: "इंदौर लक्ष्मीबाई नगर मंडी", district: "इंदौर", state: "मध्य प्रदेश", variety: "जेएस 9560 / जेएस 20-34", mspComparison: "एमएसपी से +4.8% ऊपर व्यापार", forecastAdvice: "मध्यम बिकवाली: तेल मिलें सक्रिय रूप से खरीद रही हैं; 50% स्टॉक बेचने की सलाह।" },
        pa: { commodity: "ਸੋਇਆਬੀਨ (ਪੀਲਾ ਬੀਜ)", category: "ਤੇਲ ਬੀਜ", mandiName: "ਇੰਦੌਰ ਲਕਸ਼ਮੀਬਾਈ ਨਗਰ ਮੰਡੀ", district: "ਇੰਦੌਰ", state: "ਮੱਧ ਪ੍ਰਦੇਸ਼", variety: "JS 9560", mspComparison: "ਐਮਐਸਪੀ ਤੋਂ +4.8% ਉੱਪਰ", forecastAdvice: "50% ਮਾਲ ਵੇਚਣ ਦੀ ਸਲਾਹ।" },
        mr: { commodity: "सोयाबीन (पिवळा दाणा)", category: "गळीत धान्य", mandiName: "इंदूर लक्ष्मीबाई नगर मंडी", district: "इंदूर", state: "मध्य प्रदेश", variety: "JS 9560", mspComparison: "हमीभावापेक्षा +4.8% जास्त", forecastAdvice: "50% साठा विकण्याचा सल्ला." },
        gu: { commodity: "સોયાબીન (પીળા દાણા)", category: "તેલીબિયાં", mandiName: "ઈન્દોર માર્કેટ યાર્ડ", district: "ઈન્દોર", state: "મધ્ય પ્રદેશ", variety: "JS 9560", mspComparison: "ટેકાના ભાવથી +4.8% વધુ", forecastAdvice: "50% સ્ટોક વેચો." },
        bn: { commodity: "সয়াবিন (হলুদ বীজ)", category: "তৈলবীজ", mandiName: "ইন্দোর মান্ডি", district: "ইন্দোর", state: "মধ্য প্রদেশ", variety: "JS 9560", mspComparison: "এমএসপির চেয়ে +৪.৮% বেশি", forecastAdvice: "৫০% বিক্রি করার পরামর্শ।" },
        te: { commodity: "సోయాబీన్ (పసుపు గింజలు)", category: "నూనెగింజలు", mandiName: "ఇండోర్ లక్ష్మీబాయి నగర్ మార్కెట్", district: "ఇండోర్", state: "మధ్యప్రదేశ్", variety: "JS 9560", mspComparison: "కనీస మద్దతు ధర కంటే +4.8% ఎక్కువ", forecastAdvice: "50% సరుకును అమ్ముకోవచ్చు." },
        ta: { commodity: "சோயாபீன் (மஞ்சள் விதை)", category: "எண்ணெய் வித்துக்கள்", mandiName: "இந்தூர் விற்பனைக்கூடம்", district: "இந்தூர்", state: "மத்திய பிரதேசம்", variety: "JS 9560", mspComparison: "ஆதரவு விலையை விட +4.8% அதிகம்", forecastAdvice: "50% இருப்பை விற்க பரிந்துரைக்கப்படுகிறது." }
      }
    },
    {
      id: "mandi-paddy",
      modalPrice: 3950,
      priceTrend: "+₹85 (+2.20%)",
      trendType: "up",
      minPrice: 3750,
      maxPrice: 4120,
      arrivals: "980 Tonnes",
      officialMsp: 2203,
      lastBiddingSync: "16:00 IST",
      thirtyDayAvg: 3840,
      translations: {
        en: { commodity: "Paddy (Basmati 1121 Pusa)", category: "Cereals & Grains", mandiName: "Karnal New Grain Market", district: "Karnal", state: "Haryana", variety: "Pusa Basmati 1121", mspComparison: "Trading +79.3% ABOVE Common MSP (₹2,203)", forecastAdvice: "STRONG DEMAND: Exporter bidding active; premium quality fetching top dollar." },
        hi: { commodity: "धान (बासमती 1121 पूसा)", category: "अनाज व खाद्यान्न", mandiName: "करनाल नई अनाज मंडी", district: "करनाल", state: "हरियाणा", variety: "पूसा बासमती 1121", mspComparison: "सामान्य एमएसपी (₹2,203) से +79.3% ऊपर", forecastAdvice: "मजबूत मांग: निर्यातक सक्रिय रूप से बोली लगा रहे हैं; प्रीमियम गुणवत्ता का बेहतरीन भाव मिल रहा है।" },
        pa: { commodity: "ਝੋਨਾ (ਬਾਸਮਤੀ 1121 ਪੂਸਾ)", category: "ਅਨਾਜ", mandiName: "ਕਰਨਾਲ ਅਨਾਜ ਮੰਡੀ", district: "ਕਰਨਾਲ", state: "ਹਰਿਆਣਾ", variety: "ਪੂਸਾ ਬਾਸਮਤੀ 1121", mspComparison: "ਸਰਕਾਰੀ ਐਮਐਸਪੀ ਤੋਂ +79.3% ਉੱਪਰ", forecastAdvice: "ਭਾਰੀ ਮੰਗ: ਨਿਰਯਾਤਕਾਂ ਵੱਲੋਂ ਚੰਗੇ ਭਾਅ ਦਿੱਤੇ ਜਾ ਰਹੇ ਹਨ।" },
        mr: { commodity: "धान / भात (बासमती 1121)", category: "धान्य", mandiName: "कर्नाल न्यू ग्रेन मार्केट", district: "कर्नाल", state: "हरियाणा", variety: "पुसा बासमती 1121", mspComparison: "हमीभावापेक्षा +79.3% जास्त", forecastAdvice: "उत्कृष्ट भाव: निर्यातदारांकडून जोरदार मागणी." },
        gu: { commodity: "ડાંગર (બાસમતી 1121 પૂસા)", category: "અનાજ", mandiName: "કરનાલ નવી અનાજ માર્કેટ", district: "કરનાલ", state: "હરિયાણા", variety: "પૂસા બાસમતી 1121", mspComparison: "સામાન્ય MSP થી +79.3% વધુ", forecastAdvice: "નિકાસકારો દ્વારા ઊંચા ભાવે ખરીદી." },
        bn: { commodity: "ধান (বাসমতী ১১২১ পুসা)", category: "দানাশস্য", mandiName: "কারনাল শস্য মান্ডি", district: "কারনাল", state: "হরিয়ানা", variety: "পুসা বাসমতী ১১২১", mspComparison: "সাধারণ এমএসপির চেয়ে +৭৯.৩% বেশি", forecastAdvice: "রপ্তানিকারকদের থেকে দারুণ দাম পাওয়া যাচ্ছে।" },
        te: { commodity: "వరి (బాస్మతి 1121 పూసా)", category: "ధాన్యాలు", mandiName: "కర్నాల్ ధాన్యం మార్కెట్", district: "కర్నాల్", state: "హర్యానా", variety: "పూసా బాస్మతి 1121", mspComparison: "సాధారణ MSP కంటే +79.3% ఎక్కువ", forecastAdvice: "భారీ డిమాండ్: ఎగుమతిదారులు పోటీపడి కొనుగోలు చేస్తున్నారు." },
        ta: { commodity: "நெல் (பாசுமதி 1121 பூசா)", category: "தானியங்கள்", mandiName: "கர்னால் தானிய சந்தை", district: "கர்னால்", state: "ஹரியானா", variety: "பூசா பாசுமதி 1121", mspComparison: "ஆதரவு விலையை விட +79.3% அதிகம்", forecastAdvice: "ஏற்றுமதியாளர்களின் தீவிர போட்டியால் சிறந்த விலை கிடைக்கிறது." }
      }
    },
    {
      id: "mandi-mustard",
      modalPrice: 5850,
      priceTrend: "— ₹0 (0.00%)",
      trendType: "neutral",
      minPrice: 5650,
      maxPrice: 6020,
      arrivals: "510 Tonnes",
      officialMsp: 5650,
      lastBiddingSync: "15:15 IST",
      thirtyDayAvg: 5800,
      translations: {
        en: { commodity: "Mustard (Sarson / High Oil)", category: "Oilseeds", mandiName: "Sri Ganganagar Krishi Upaj Mandi", district: "Sri Ganganagar", state: "Rajasthan", variety: "Giriraj (DRMRIJ 31)", mspComparison: "Trading +3.5% ABOVE MSP", forecastAdvice: "STABLE: Mustard oil expeller mills maintaining steady procurement rates." },
        hi: { commodity: "सरसों (उच्च तेल मात्रा)", category: "तिलहन", mandiName: "श्री गंगानगर कृषि उपज मंडी", district: "श्री गंगानगर", state: "राजस्थान", variety: "गिरिराज (DRMRIJ 31)", mspComparison: "एमएसपी से +3.5% ऊपर व्यापार", forecastAdvice: "स्थिर: तेल मिलों द्वारा स्थिर खरीद जारी है।" },
        pa: { commodity: "ਸਰ੍ਹੋਂ (ਵੱਧ ਤੇਲ ਵਾਲੀ)", category: "ਤੇਲ ਬੀਜ", mandiName: "ਸ੍ਰੀ ਗੰਗਾਨਗਰ ਮੰਡੀ", district: "ਸ੍ਰੀ ਗੰਗਾਨਗਰ", state: "ਰਾਜਸਥਾਨ", variety: "ਗਿਰੀਰਾਜ", mspComparison: "ਐਮਐਸਪੀ ਤੋਂ +3.5% ਉੱਪਰ", forecastAdvice: "ਭਾਅ ਸਥਿਰ ਰਹਿਣ ਦੀ ਉਮੀਦ।" },
        mr: { commodity: "मोहरी / मोहरी बी (सरसों)", category: "गळीत धान्य", mandiName: "श्री गंगानगर कृषी उत्पन्न बाजार", district: "श्री गंगानगर", state: "राजस्थान", variety: "गिरीराज", mspComparison: "हमीभावापेक्षा +3.5% जास्त", forecastAdvice: "भाव स्थिर आहेत." },
        gu: { commodity: "રાયડો / સરસવ", category: "તેલીબિયાં", mandiName: "શ્રી ગંગાનગર માર્કેટ યાર્ડ", district: "શ્રી ગંગાનગર", state: "રાજસ્થાન", variety: "ગીરીરાજ", mspComparison: "ટેકાના ભાવથી +3.5% વધુ", forecastAdvice: "ભાવ સ્થિર રહેવાની સંભાવના." },
        bn: { commodity: "সর্ষে (উচ্চ তেলযুক্ত)", category: "তৈলবীজ", mandiName: "শ্রী গঙ্গানগর কৃষি মান্ডি", district: "শ্রী গঙ্গানগর", state: "রাজস্থান", variety: "গিরিরাজ", mspComparison: "এমএসপির চেয়ে +৩.৫% বেশি", forecastAdvice: "দর স্থিতিশীল।" },
        te: { commodity: "ఆవాలు (హై ఆయిల్ కంటెంట్)", category: "నూనెగింజలు", mandiName: "శ్రీ గంగానగర్ మార్కెట్ యార్డ్", district: "శ్రీ గంగానగర్", state: "రాజస్థాన్", variety: "గిరిరాజ్", mspComparison: "కనీస మద్దతు ధర కంటే +3.5% ఎక్కువ", forecastAdvice: "ధరలు స్థిరంగా ఉన్నాయి." },
        ta: { commodity: "கடுகு (அதிக எண்ணெய் அளவு)", category: "எண்ணெய் வித்துக்கள்", mandiName: "ஸ்ரீ கங்காநகர் விற்பனைக்கூடம்", district: "ஸ்ரீ கங்காநகர்", state: "ராஜஸ்தான்", variety: "கிரிVolume", mspComparison: "ஆதரவு விலையை விட +3.5% அதிகம்", forecastAdvice: "விலை சீராக உள்ளது." }
      }
    }
  ],

  // Verified NGOs Directory
  ngos: [
    {
      id: "ngo-wotr",
      initial: "W",
      name: "Watershed Organisation Trust (WOTR)",
      verified: true,
      rating: "4.9/5.0 (342 farmer ratings)",
      estd: "Estd. 1993",
      phone: "+91 20 2422 6211",
      tollFree: "1800-233-4560",
      email: "info@wotr.org.in",
      portal: "https://wotr.org",
      whatsappNumber: "919823144552",
      translations: {
        en: {
          category: "Water & Climate Resilience",
          desc: "Pioneering sustainable watershed management, eco-friendly farming practices, and climate change adaptation across 4,000+ drought-prone villages in India.",
          headquarters: "Maharashtra (Pune / Ahmednagar)",
          address: "2nd Floor, The Forum, Pune-Satara Road, Padmavati, Pune 411009",
          coverage: "Maharashtra, Madhya Pradesh, Rajasthan, Telangana, Jharkhand",
          head: "Dr. Marcella D'Souza (Director)",
          fieldOfficer: "Sanjay Patil (+91 98231 44552)",
          services: [
            "Watershed Development & Rainwater Harvesting",
            "Climate-Resilient Crop Planning",
            "Soil Health Assessment & Compost Supply"
          ],
          activeGrant: "Drip Irrigation Subsidy & Farm Pond Grant Active"
        },
        hi: {
          category: "जल व जलवायु लचीलापन",
          desc: "भारत के 4,000 से अधिक सूखाग्रस्त गांवों में स्थायी जलग्रहण (वॉटरशेड) प्रबंधन, पर्यावरण-अनुकूल खेती और जलवायु अनुकूलन में अग्रणी संस्थान।",
          headquarters: "महाराष्ट्र (पुणे / अहमदनगर)",
          address: "द्वितीय तल, द फोरम, पुणे-सतारा रोड, पद्मावती, पुणे 411009",
          coverage: "महाराष्ट्र, मध्य प्रदेश, राजस्थान, तेलंगाना, झारखंड",
          head: "डॉ. मार्सेला डिसूजा (निदेशक)",
          fieldOfficer: "संजय पाटिल (+91 98231 44552)",
          services: [
            "वॉटरशेड विकास व वर्षा जल संचयन",
            "जलवायु-अनुकूल फसल योजना व प्रबंधन",
            "मृदा स्वास्थ्य परीक्षण व कम्पोस्ट आपूर्ति"
          ],
          activeGrant: "ड्रिप सिंचाई सब्सिडी और खेत तालाब अनुदान सक्रिय"
        },
        pa: {
          category: "ਜਲ ਤੇ ਜਲਵਾਯੂ ਪ੍ਰਬੰਧਨ",
          desc: "ਭਾਰਤ ਦੇ 4,000+ ਪਿੰਡਾਂ ਵਿੱਚ ਪਾਣੀ ਸੰਭਾਲ ਅਤੇ ਵਾਤਾਵਰਣ ਪੱਖੀ ਖੇਤੀ ਲਈ ਕਾਰਜਸ਼ੀਲ ਸੰਸਥਾ।",
          headquarters: "ਮਹਾਰਾਸ਼ਟਰ (ਪੁਣੇ)",
          address: "ਪੁਣੇ-ਸਤਾਰਾ ਰੋਡ, ਪੁਣੇ 411009",
          coverage: "ਮਹਾਰਾਸ਼ਟਰ, ਮੱਧ ਪ੍ਰਦੇਸ਼, ਰਾਜਸਥਾਨ, ਤੇਲੰਗਾਨਾ",
          head: "ਡਾ. ਮਾਰਸੇਲਾ ਡਿਸੂਜ਼ਾ",
          fieldOfficer: "ਸੰਜੇ ਪਾਟਿਲ (+91 98231 44552)",
          services: ["ਵਾਟਰਸ਼ੈੱਡ ਵਿਕਾਸ ਤੇ ਮੀਂਹ ਦੇ ਪਾਣੀ ਦੀ ਸੰਭਾਲ", "ਫਸਲੀ ਯੋਜਨਾਬੰਦੀ", "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਜਾਂਚ"],
          activeGrant: "ਡ੍ਰਿਪ ਸਿੰਚਾਈ ਸਬਸਿਡੀ ਤੇ ਖੇਤ ਤਲਾਬ ਗ੍ਰਾਂਟ ਚਾਲੂ"
        },
        mr: {
          category: "जल व हवामान संवेदनशीलता",
          desc: "भारतातील 4,000+ दुष्काळग्रस्त गावांमध्ये शाश्वत पाणलोट विकास व पर्यावरणपूरक शेतीचे कार्य.",
          headquarters: "महाराष्ट्र (पुणे / अहमदनगर)",
          address: "2रा मजला, द फोरम, पुणे-सातारा रोड, पुणे 411009",
          coverage: "महाराष्ट्र, मध्य प्रदेश, राजस्थान, तेलंगणा",
          head: "डॉ. मार्सेला डिसूझा (संचालक)",
          fieldOfficer: "संजय पाटील (+91 98231 44552)",
          services: ["पाणलोट विकास व जलसंधारण", "हवामानपूरक पीक नियोजन", "माती परीक्षण व सेंद्रिय खत"],
          activeGrant: "ठिबक सिंचन अनुदान व शेततळे योजना सक्रिय"
        },
        gu: {
          category: "જળ અને હવામાન વ્યવસ્થાપન",
          desc: "4,000+ ગામોમાં જળસંચય અને ટકાઉ ખેતીનું કાર્ય.",
          headquarters: "મહારાષ્ટ્ર (પુણે)",
          address: "પુણે 411009",
          coverage: "મહારાષ્ટ્ર, મધ્ય પ્રદેશ, રાજસ્થાન",
          head: "ડૉ. માર્સેલા ડિસુઝા",
          fieldOfficer: "સંજય પાટીલ",
          services: ["વોટરશેડ વિકાસ અને વરસાદી જળસંચય", "પાક આયોજન", "જમીન ચકાસણી"],
          activeGrant: "ટપક સિંચાઈ સબસિડી અને ખેત તલાવડી અનુદાન"
        },
        bn: {
          category: "জল ও জলবায়ু সুরক্ষা",
          desc: "৪,০০০+ গ্রামে টেকসই জল সংরক্ষণ ও পরিবেশবান্ধব কৃষিকাজ।",
          headquarters: "মহারাষ্ট্র (পুনে)",
          address: "পুনে ৪১১০ ০৯",
          coverage: "মহারাষ্ট্র, মধ্য প্রদেশ, রাজস্থান",
          head: "ড. মার্সেলা ডিসুজা",
          fieldOfficer: "সঞ্জয় পাতিল",
          services: ["জলবিভাজিকা উন্নয়ন ও বৃষ্টির জল সংরক্ষণ", "ফসলের পরিকল্পনা", "মাটি পরীক্ষা"],
          activeGrant: "ড্রিপ সেচ ভর্তুকি ও কৃষি পুকুর অনুদান"
        },
        te: {
          category: "నీరు & వాతావరణ పరిరక్షణ",
          desc: "4,000+ గ్రామాలలో నీటి సంరక్షణ మరియు స్థిరమైన సేంద్రీయ వ్యవసాయం.",
          headquarters: "మహారాష్ట్ర (పూణే)",
          address: "పూణే 411009",
          coverage: "మహారాష్ట్ర, మధ్యప్రదేశ్, తెలంగాణ",
          head: "డా. మార్సెల్లా డిసౌజా",
          fieldOfficer: "సంజయ్ పాటిల్",
          services: ["వాటర్‌షెడ్ అభివృద్ధి & వర్షపు నీటి నిల్వ", "వాతావరణ అనుకూల పంటల ప్రణాళిక", "నేల పరీక్షలు"],
          activeGrant: "బిందు సేద్యం (డ్రిప్) సబ్సిడీ & ఫామ్ పాండ్ గ్రాంట్ అందుబాటులో ఉంది"
        },
        ta: {
          category: "நீர் & காலநிலை மேலாண்மை",
          desc: "4,000+ கிராமங்களில் நிலையான நீர்ப்பிடிப்பு மேலாண்மை மற்றும் இயற்கை விவசாயம்.",
          headquarters: "மகாராஷ்டிரா (புனே)",
          address: "புனே 411009",
          coverage: "மகாராஷ்டிரா, மத்திய பிரதேசம், ராஜஸ்தான்",
          head: "டாக்டர் மார்செல்லா டிசோசா",
          fieldOfficer: "சஞ்சய் பாட்டீல்",
          services: ["நீர்ப்பிடிப்பு மேம்பாடு மற்றும் மழைநீர் சேகரிப்பு", "பயிர் திட்டமிடல்", "மண் பரிசோதனை"],
          activeGrant: "சொட்டு நீர் பாசன மானியம் மற்றும் பண்ணை குட்டை நிதி உதவி"
        }
      }
    },
    {
      id: "ngo-baif",
      initial: "B",
      name: "BAIF Development Research Foundation",
      verified: true,
      rating: "4.8/5.0 (520 farmer ratings)",
      estd: "Estd. 1967",
      phone: "+91 20 2523 1661",
      tollFree: "1800-120-2243",
      email: "baif@baif.org.in",
      portal: "https://baif.org.in",
      whatsappNumber: "919822488120",
      translations: {
        en: {
          category: "Sustainable Agriculture & Livestock",
          desc: "Transforming rural livelihoods by creating sustainable family-farming models, indigenous seed preservation, and high-yield livestock breeding.",
          headquarters: "Maharashtra (Pune & Pan-India)",
          address: "BAIF Bhavan, Dr. Manibhai Desai Nagar, Warje, Pune 411058",
          coverage: "Maharashtra, Gujarat, Karnataka, Uttar Pradesh, Bihar, Odisha",
          head: "Bharat Kakade (President)",
          fieldOfficer: "Dr. Ashok Pundir (+91 98224 88120)",
          services: [
            "Wadi Agro-Forestry & Orchard Development",
            "Livestock Breed Improvement & Free Cattle Vaccination",
            "Organic Seed Bank & Indigenous Variety Preservation"
          ],
          activeGrant: "Wadi Horticulture Plantation Grant & Seed Banking Aid"
        },
        hi: {
          category: "सतत कृषि व पशुधन विकास",
          desc: "टिकाऊ पारिवारिक खेती मॉडल, देशी बीज संरक्षण और उन्नत पशुधन नस्ल सुधार द्वारा ग्रामीण आजीविका को सशक्त बनाने वाली संस्था।",
          headquarters: "महाराष्ट्र (पुणे व अखिल भारतीय)",
          address: "बायफ भवन, डॉ. मणिभाई देसाई नगर, वारजे, पुणे 411058",
          coverage: "महाराष्ट्र, गुजरात, कर्नाटक, उत्तर प्रदेश, बिहार, ओडिशा",
          head: "भरत काकड़े (अध्यक्ष)",
          fieldOfficer: "डॉ. अशोक पुंडीर (+91 98224 88120)",
          services: [
            "वाड़ी कृषि-वानिकी और फलोद्यान विकास",
            "पशु नस्ल सुधार व निःशुल्क मवेशी टीकाकरण",
            "जैविक बीज बैंक और देशी किस्मों का संरक्षण"
          ],
          activeGrant: "वाड़ी बागवानी वृक्षारोपण अनुदान और बीज बैंक सहायता"
        },
        pa: {
          category: "ਖੇਤੀਬਾੜੀ ਤੇ ਪਸ਼ੂ ਪਾਲਣ ਵਿਕਾਸ",
          desc: "ਪੇਂਡੂ ਕਿਸਾਨਾਂ ਦੀ ਆਮਦਨ ਵਧਾਉਣ ਲਈ ਬਾਗਬਾਨੀ ਅਤੇ ਉੱਨਤ ਨਸਲ ਦੇ ਪਸ਼ੂ ਪਾਲਣ ਦਾ ਕੰਮ।",
          headquarters: "ਮਹਾਰਾਸ਼ਟਰ (ਪੁਣੇ)",
          address: "ਵਾਰਜੇ, ਪੁਣੇ 411058",
          coverage: "ਮਹਾਰਾਸ਼ਟਰ, ਗੁਜਰਾਤ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼, ਬਿਹਾਰ",
          head: "ਭਰਤ ਕਾਕੜੇ",
          fieldOfficer: "ਡਾ. ਅਸ਼ੋਕ ਪੁੰਡੀਰ (+91 98224 88120)",
          services: ["ਵਾੜੀ ਬਾਗਬਾਨੀ ਵਿਕਾਸ", "ਪਸ਼ੂ ਨਸਲ ਸੁਧਾਰ", "ਦੇਸੀ ਬੀਜ ਬੈਂਕ"],
          activeGrant: "ਬਾਗਬਾਨੀ ਗ੍ਰਾਂਟ ਅਤੇ ਬੀਜ ਸਹਾਇਤਾ ਸਰਗਰਮ"
        },
        mr: {
          category: "शाश्वत शेती व पशुसंवर्धन",
          desc: "ग्रामीण उपजीविका सक्षमीकरणासाठी वाडी मॉडेल, देशी बियाणे संवर्धन व पशु पैदास कार्यक्रम.",
          headquarters: "महाराष्ट्र (पुणे व भारतभर)",
          address: "बायफ भवन, वारजे, पुणे 411058",
          coverage: "महाराष्ट्र, गुजरात, कर्नाटक, उत्तर प्रदेश",
          head: "भारत काकडे (अध्यक्ष)",
          fieldOfficer: "डॉ. अशोक पुंडीर (+91 98224 88120)",
          services: ["वाडी फळबाग विकास", "पशु पैदास सुधारणा व लसीकरण", "देशी बियाणे बँक"],
          activeGrant: "वाडी फलोत्पादन अनुदान व बियाणे मदत उपलब्ध"
        },
        gu: {
          category: "ટકાઉ ખેતી અને પશુપાલન",
          desc: "વાડી બાગાયત મોડેલ, દેશી બીજ સંરક્ષણ અને પશુ ઓલાદ સુધારણા.",
          headquarters: "મહારાષ્ટ્ર (પુણે)",
          address: "પુણે 411058",
          coverage: "મહારાષ્ટ્ર, ગુજરાત, કર્ણાટક",
          head: "ભરત કાકડે",
          fieldOfficer: "ડૉ. અશોક પુંડીર",
          services: ["વાડી બાગાયત વિકાસ", "પશુ ઓલાદ સુધાર", "દેશી બીજ બેંક"],
          activeGrant: "વાડી બાગાયત અનુદાન અને બીજ સહાય"
        },
        bn: {
          category: "টেকসই কৃষি ও পশুপালন",
          desc: "গ্রামীণ জীবিকা উন্নয়নে উদ্যানপালন ও উন্নত পশুপালন মডেল।",
          headquarters: "মহারাষ্ট্র (পুনে)",
          address: "পুনে ৪১১০৫৮",
          coverage: "মহারাষ্ট্র, গুজরাট, উত্তর প্রদেশ",
          head: "ভরত কাকড়ে",
          fieldOfficer: "ড. অশোক পুন্ডির",
          services: ["ওয়াদি উদ্যানপালন উন্নয়ন", "পশু প্রজনন উন্নয়ন", "দেশি বীজ ব্যাংক"],
          activeGrant: "উদ্যানপালন অনুদান ও বীজ সহায়তা সক্রিয়"
        },
        te: {
          category: "స్థిరమైన వ్యవసాయం & పశుసంవర్ధక",
          desc: "గ్రామీణ జీవనోపాధిని పెంపొందించడానికి వాడి తోటల అభివృద్ధి మరియు పశువుల జాతి అభివృద్ధి.",
          headquarters: "మహారాష్ట్ర (పూణే)",
          address: "పూణే 411058",
          coverage: "మహారాష్ట్ర, గుజరాత్, కర్ణాటక, ఉత్తరప్రదేశ్",
          head: "భరత్ కాకడే",
          fieldOfficer: "డా. అశోక్ పుండీర్",
          services: ["వాడి హార్టికల్చర్ & తోటల పెంపకం", "పశువుల టీకాలు & జాతి అభివృద్ధి", "దేశవాళీ విత్తన బ్యాంకు"],
          activeGrant: "వాడి హార్టికల్చర్ గ్రాంట్ & విత్తన సహాయం అందుబాటులో ఉంది"
        },
        ta: {
          category: "நிலையான விவசாயம் & கால்நடை வளர்ப்பு",
          desc: "கிராமப்புற வாழ்வாதாரத்தை உயர்த்த வாடி பழத்தோட்ட மேம்பாடு மற்றும் நாட்டு மாடு இனப்பெருக்கம்.",
          headquarters: "மகாராஷ்டிரா (புனே)",
          address: "புனே 411058",
          coverage: "மகாராஷ்டிரா, குஜராத், கர்நாடகா",
          head: "பாரத் காகடே",
          fieldOfficer: "டாக்டர் அசோக் புண்டிர்",
          services: ["வாடி தோட்டக்கலை மேம்பாடு", "கால்நடை தடுப்பூசி & இனவிருத்தி", "நாட்டு விதை வங்கி"],
          activeGrant: "வாடி தோட்டக்கலை மானியம் மற்றும் விதை நிதி உதவி"
        }
      }
    }
  ],

  // DBT Schemes
  schemes: [
    {
      id: "pm-kisan",
      link: "https://pmkisan.gov.in",
      translations: {
        en: { name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)", ministry: "Ministry of Agriculture & Farmers Welfare", benefit: "₹6,000 / year in 3 direct bank transfers of ₹2,000 each", eligibility: "All small and marginal landholding farmer families with cultivable land" },
        hi: { name: "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)", ministry: "कृषि एवं किसान कल्याण मंत्रालय", benefit: "₹6,000 / वर्ष, ₹2,000 की 3 सीधी बैंक किस्तों में", eligibility: "कृषि योग्य भूमि वाले सभी पात्र किसान परिवार" },
        pa: { name: "ਪੀਐਮ-ਕਿਸਾਨ (ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ)", ministry: "ਖੇਤੀਬਾੜੀ ਮੰਤਰਾਲਾ", benefit: "₹6,000 / ਸਾਲਾਨਾ, ₹2,000 ਦੀਆਂ 3 ਕਿਸ਼ਤਾਂ ਵਿੱਚ ਸਿੱਧਾ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ", eligibility: "ਸਾਰੇ ਯੋਗ ਜ਼ਮੀਨ ਮਾਲਕ ਕਿਸਾਨ ਪਰਿਵਾਰ" },
        mr: { name: "पीएम-किसान (प्रधानमंत्री किसान सन्मान निधी)", ministry: "कृषी व शेतकरी कल्याण मंत्रालय", benefit: "₹6,000 / वर्ष, थेट बँक खात्यात ₹2,000 च्या 3 हप्त्यांमध्ये", eligibility: "शेतीयोग्य जमीन असणारे सर्व पात्र शेतकरी" },
        gu: { name: "પીએમ-કિસાન યોજના", ministry: "કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય", benefit: "વાર્ષિક ₹6,000, ₹2,000 ના 3 હપ્તામાં સીધા બેંક ખાતામાં", eligibility: "તમામ પાત્ર ખેડૂત પરિવારો" },
        bn: { name: "পিএম-কিসান সম্মান নিধি", ministry: "কৃষি ও কৃষক কল্যাণ মন্ত্রক", benefit: "বছরে ₹৬,০০০, তিনটি ₹২,০০০ এর কিস্তিতে সরাসরি ব্যাংক একাউন্টে", eligibility: "কৃষিযোগ্য জমির মালিক সকল কৃষক পরিবার" },
        te: { name: "పీఎం-కిసాన్ సమ్మాన్ నిధి", ministry: "వ్యవసాయ & రైతు సంక్షేమ మంత్రిత్వ శాఖ", benefit: "ఏడాదికి ₹6,000, నేరుగా బ్యాంకు ఖాతాలో ₹2,000 చొప్పున 3 విడతల్లో", eligibility: "సాగు భూమి కలిగిన అర్హులైన రైతు కుటుంబాలు" },
        ta: { name: "பிரதான் மந்திரி கிசான் சம்மான் நிதி (PM-KISAN)", ministry: "விவசாயம் மற்றும் உழவர் நல அமைச்சகம்", benefit: "ஆண்டுக்கு ₹6,000, தலா ₹2,000 என 3 தவணைகளில் வங்கி கணக்கில்", eligibility: "விவசாய நிலம் வைத்துள்ள தகுதியான விவசாய குடும்பங்கள்" }
      }
    },
    {
      id: "pmfby",
      link: "https://pmfby.gov.in",
      translations: {
        en: { name: "PMFBY (Pradhan Mantri Fasal Bima Yojana)", ministry: "Ministry of Agriculture & Farmers Welfare", benefit: "Comprehensive insurance coverage against non-preventable natural risks & pests (2% Kharif, 1.5% Rabi)", eligibility: "All farmers growing notified crops in notified areas including sharecroppers" },
        hi: { name: "पीएमएफबीवाई (प्रधानमंत्री फसल बीमा योजना)", ministry: "कृषि एवं किसान कल्याण मंत्रालय", benefit: "प्राकृतिक आपदाओं और कीट प्रकोप के विरुद्ध व्यापक बीमा सुरक्षा (खरीफ 2%, रबी 1.5% प्रीमियम)", eligibility: "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान व बटाईदार" },
        pa: { name: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ (PMFBY)", ministry: "ਖੇਤੀਬਾੜੀ ਮੰਤਰਾਲਾ", benefit: "ਕੁਦਰਤੀ ਆਫ਼ਤਾਂ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਹਮਲੇ ਵਿਰੁੱਧ ਪੂਰਾ ਬੀਮਾ ਕਵਰ", eligibility: "ਸੂਚਿਤ ਖੇਤਰਾਂ ਵਿੱਚ ਫਸਲਾਂ ਬੀਜਣ ਵਾਲੇ ਸਾਰੇ ਕਿਸਾਨ" },
        mr: { name: "प्रधानमंत्री पीक विमा योजना (PMFBY)", ministry: "कृषी मंत्रालय", benefit: "नैसर्गिक आपत्ती व कीडरोगांपासून पिकांचे संपूर्ण विमा संरक्षण", eligibility: "अधिसूचित पिके घेणारे सर्व शेतकरी व कुळ शेतकरी" },
        gu: { name: "પીએમ પાક વીમા યોજના (PMFBY)", ministry: "કૃષિ મંત્રાલય", benefit: "કુદરતી આફતો સામે સંપૂર્ણ પાક વીમા કવચ", eligibility: "તમામ નોંધાયેલા પાક વાવતા ખેડૂતો" },
        bn: { name: "প্রধানমন্ত্রী ফসল বীমা যোজনা (PMFBY)", ministry: "কৃষি মন্ত্রক", benefit: "প্রাকৃতিক দুর্যোগ ও পোকার আক্রমণ থেকে ফসলের সম্পূর্ণ বীমা", eligibility: "বিজ্ঞাপিত ফসলের সকল চাষী" },
        te: { name: "ప్రధానమంత్రి ఫసల్ బీమా యోజన (PMFBY)", ministry: "వ్యవసాయ మంత్రిత్వ శాఖ", benefit: "ప్రకృతి వైపరీత్యాలు మరియు తెగుళ్ల నష్టం నుండి సమగ్ర పంట బీమా రక్షణ", eligibility: "నోటిఫై చేసిన పంటలు పండించే రైతులందరూ" },
        ta: { name: "பிரதான் மந்திரி பயிர் காப்பீட்டுத் திட்டம் (PMFBY)", ministry: "விவசாய அமைச்சகம்", benefit: "இயற்கை சீற்றங்கள் மற்றும் பூச்சி தாக்குதலுக்கு எதிரான விரிவான பயிர் காப்பீடு", eligibility: "அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் அனைத்து விவசாயிகள்" }
      }
    }
  ]
};
