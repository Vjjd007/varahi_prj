import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const translations = {
  en: {
    backBtn: '← Back',
    shareArticle: 'Share article',
    filterByYear: 'Filter by Year',
    all: 'All',
    upcoming: 'Upcoming',
    articleDate: '13 January 2026',
    articleTitle: 'Zayed Sustainability Prize Honours Global Pioneers Advancing Progress',
    bullet1: 'US$5.9M awarded to 11 organisations and high schools from the UAE, Brazil, Canada, Nepal, Switzerland, Uganda and across six sustainability categories',
    bullet2: "From AI-enabled diagnostics to Cooling-as-a-Service, this year's winners deliver locally adapted innovations that empower millions",
    bullet3: 'In 18 years, the Prize has scaled solutions reaching more than 411 million people globally',
    para1: 'Abu Dhabi, United Arab Emirates, 13 January 2026: The Zayed Sustainability Prize, the UAE\'s pioneering award for innovative solutions to global challenges, today announced the cohort of 2026 winners, celebrating 18 years of empowering communities and driving inclusive, sustainable progress around the world.',
    para2: 'In a ceremony held during Abu Dhabi Sustainability Week (ADSW) and attended by Heads of State, Ministers, and business leaders, His Highness Sheikh Mohamed bin Zayed, President of the UAE, awarded the winners for their outstanding contributions to advancing sustainable development worldwide.',
    para3: 'H.H. Sheikh Mohamed bin Zayed Al Nahyan said: "The UAE remains firmly committed to supporting efforts that enhance people\'s well-being and strengthen the foundations of stability and progress around the world. The Zayed Sustainability Prize continues to encourage practical solutions that uplift communities and expand opportunity through innovation and cooperation. Through this enduring platform, we honour the legacy of Sheikh Zayed, whose vision of compassion, unity, and shared prosperity continues to shape a better future for all."',
    para4: 'H.E. Dr. Sultan Ahmed Al Jaber, UAE Minister of Industry and Advanced Technology and Director General of the Zayed Sustainability Prize, praised the winners for advancing scalable innovations that deliver tangible social and environmental benefits.',
    para5: 'The 2026 recipients of the Global High Schools awards are Mamawi Atosketan Native School (Canada), representing The Americas; Kyanja High School (Uganda), representing Sub-Saharan Africa; Al Rajaa School for the Deaf (Jordan), representing the Middle East & North Africa; Bodrum Anatolian High School (Türkiye), representing Europe & Central Asia; Faafu Atoll Education Center (Maldives), representing South Asia; and Ruamrudee International School (Thailand), representing East Asia & Pacific.',
    para6: 'As the world accelerates its pursuit of sustainable development, the Zayed Sustainability Prize stands as a testament to the UAE\'s holistic vision of progress driven by technological innovation and long-term economic growth. The Prize reflects the nation\'s belief that true leadership lies in empowering others to lead, fostering collaboration among governments, enterprises, civil society, and youth to build a more prosperous and equitable world.',
    footerAbout: 'About',
    footerHowToApply: 'How to Apply',
    footerJudges: 'Judges',
    footerAwards: 'Awards',
    footerNewsMedia: 'News and Media',
    footerProgramme: 'Programme',
    footerOther: 'Other',
    footerJury: 'Jury',
    footerSelectionCommittee: 'Selection Committee',
    footerWinners: 'Winners',
    footerFinalists: 'Finalists',
    footerCeremony: 'Ceremony',
    footerNews: 'News',
    footerNewsletter: 'Newsletter',
    footerReports: 'Reports',
    footerMediaCentre: 'Media Centre',
    footerBeyond2020: 'Beyond2020',
    footerEngagements: 'Engagements',
    footerContact: 'Contact',
    footerFAQ: 'FAQ',
    footerTCs: 'T&Cs',
    footerPrivacy: 'Privacy Policy',
    footerCopyright: '© 2026 Zayed Sustainability Prize. All rights reserved.',
  },
  ta: {
    backBtn: '← திரும்பு',
    shareArticle: 'கட்டுரையை பகிர்',
    filterByYear: 'ஆண்டின்படி வடிகட்டு',
    all: 'அனைத்தும்',
    upcoming: 'வரவிருக்கும்',
    articleDate: '13 ஜனவரி 2026',
    articleTitle: 'ஜாயெட் நிலைத்தன்மை பரிசு உலகளாவிய முன்னோடிகளை கௌரவிக்கிறது',
    bullet1: 'யுஏஈ, பிரேசில், கனடா, நேபாளம், சுவிட்சர்லாந்து, உகாண்டா ஆகிய நாடுகளில் இருந்து 11 நிறுவனங்கள் மற்றும் உயர் பள்ளிகளுக்கு US$5.9 மில்லியன் வழங்கப்பட்டது',
    bullet2: 'செயற்கை நுண்ணறிவு கண்டறிதல்கள் முதல் குளிரூட்டல் சேவை வரை, இந்த ஆண்டின் வெற்றியாளர்கள் உள்ளூர் தகவமைப்பான கண்டுபிடிப்புகளை வழங்குகிறார்கள்',
    bullet3: '18 ஆண்டுகளில், பரிசு உலகளவில் 411 மில்லியனுக்கும் அதிகமான மக்களை சென்றடைந்தது',
    para1: 'அபுதாபி, ஐக்கிய அரபு அமீரகம், 13 ஜனவரி 2026: ஜாயெட் நிலைத்தன்மை பரிசு, உலகளாவிய சவால்களுக்கான புதுமையான தீர்வுகளுக்கான யுஏஈயின் முன்னோடி விருது, 2026 வெற்றியாளர்களை அறிவித்தது.',
    para2: 'அபுதாபி நிலைத்தன்மை வாரத்தில் (ADSW) நடைபெற்ற விழாவில், யுஏஈ ஜனாதிபதி ஹிஸ் ஹைனஸ் ஷேக் மொஹமட் பின் ஜாயெட் வெற்றியாளர்களுக்கு விருது வழங்கினார்.',
    para3: 'ஹெச்.எச். ஷேக் மொஹமட் பின் ஜாயெட் அல் நஹ்யான் கூறினார்: "யுஏஈ மக்களின் நலனை மேம்படுத்தும் முயற்சிகளை ஆதரிப்பதில் உறுதியாக உள்ளது. ஜாயெட் நிலைத்தன்மை பரிசு சமூகங்களை உயர்த்தும் நடைமுறை தீர்வுகளை ஊக்குவிக்கிறது."',
    para4: 'யுஏஈ தொழில் மற்றும் மேம்பட்ட தொழில்நுட்ப அமைச்சர் டாக்டர் சுல்தான் அஹமட் அல் ஜாபர், சமூக மற்றும் சுற்றுச்சூழல் நன்மைகளை வழங்கும் புதுமைகளை மேம்படுத்தும் வெற்றியாளர்களை பாராட்டினார்.',
    para5: '2026 உலகளாவிய உயர் பள்ளிகள் விருதுப் பெற்றோர்: மாமாவி அட்டோஸ்கேட்டன் நேட்டிவ் ஸ்கூல் (கனடா), கியான்ஜா உயர் பள்ளி (உகாண்டா), அல் ரஜா ஸ்கூல் ஃபார் தி டெஃப் (ஜோர்டான்), போட்ரம் அனடோலியன் உயர் பள்ளி (துர்கியே), ஃபாஃபு அடால் கல்வி மையம் (மாலத்தீவு), ருவாம்ருடி சர்வதேச பள்ளி (தாய்லாந்து).',
    para6: 'உலகம் நிலையான வளர்ச்சியை நோக்கி வேகமெடுக்கும்போது, ஜாயெட் நிலைத்தன்மை பரிசு தொழில்நுட்ப கண்டுபிடிப்பு மற்றும் நீண்டகால பொருளாதார வளர்ச்சியால் உந்தப்படும் யுஏஈயின் விரிவான முன்னேற்ற பார்வைக்கு சாட்சியாக நிற்கிறது.',
    footerAbout: 'பற்றி',
    footerHowToApply: 'எப்படி விண்ணப்பிப்பது',
    footerJudges: 'நடுவர்கள்',
    footerAwards: 'விருதுகள்',
    footerNewsMedia: 'செய்தி மற்றும் ஊடகம்',
    footerProgramme: 'திட்டம்',
    footerOther: 'மற்றவை',
    footerJury: 'நடுவர் குழு',
    footerSelectionCommittee: 'தேர்வு குழு',
    footerWinners: 'வெற்றியாளர்கள்',
    footerFinalists: 'இறுதிப் போட்டியாளர்கள்',
    footerCeremony: 'விழா',
    footerNews: 'செய்திகள்',
    footerNewsletter: 'செய்திமடல்',
    footerReports: 'அறிக்கைகள்',
    footerMediaCentre: 'ஊடக மையம்',
    footerBeyond2020: 'Beyond2020',
    footerEngagements: 'ஈடுபாடுகள்',
    footerContact: 'தொடர்பு',
    footerFAQ: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    footerTCs: 'விதிமுறைகள்',
    footerPrivacy: 'தனியுரிமைக் கொள்கை',
    footerCopyright: '© 2026 ஜாயெட் நிலைத்தன்மை பரிசு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  }
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
