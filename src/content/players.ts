import type { PlayerRecord } from '../types';

export const PLAYERS: readonly PlayerRecord[] = [
  {
    slug: 'noktar',
    playerName: 'שחקן 3',
    characterName: 'נוקתאר',
    contactRaw: 'noktar@everguard.example, 052-0000003',
    characterBio: `נוקתאר הוא חוקר סתר שאיבד את מלון בגור-זאגאת בעקבות טקס שגוי. הוא בורח מעברים פיזיים ומנטליים כאחד, ומצא בחרון חצות מקלט — אך גם מקור חדש לידע אסור.

הוא מתמחה בזימונים של שאב-רעול, חושף סודות קוסמיים ומנסה להבין את המבנה המלא של הכל-שחור. המחיר: שינוי הדרגתי של תודעתו, שכבר לא מסוגלת לשכוח דברים שראתה.

מקור: גור-זאגאת.`,
    playerBio: 'שחקן ותיק, מנוסה בדמויות אינטלקטואליות ומיסטיות.',
    photoFilename: 'placeholder-3.svg',
  },
  {
    slug: 'velmor',
    playerName: 'שחקן 4',
    characterName: 'ולמור',
    contactRaw: 'velmor@everguard.example',
    characterBio: `ולמור הוא לוחם שכיר מממד שנחרב לחלוטין על ידי יוג-אזוג. הוא שרד רק כי קיבל את "מתנה" האוכל-כל — רעב נצחי להרס, שמעצים את כוחו הקרבי אך מאיים לגרום לו להרוס את כל מה שאוהב.

בחרון חצות הוא משמש כשומר ראש של הנביא אנגאמש, אך לעיתים קרובות הוא נאבק בדחף הפנימי לשחוט את כל מי שמסביב. הקרבות שלו הם מחזה של יופי אכזרי.

ישות מועדפת: יוג-אזוג.`,
    playerBio: 'שחקן עם ניסיון קרבי, אוהב תפקידים פיזיים ודרמטיים.',
    photoFilename: 'placeholder-4.svg',
  },
  {
    slug: 'miraeth',
    playerName: 'שחקן 5',
    characterName: 'מיראת',
    contactRaw: 'miraeth@everguard.example',
    characterBio: `מיראת היא בריחה ממשפחת אריסטוקרטית בגור-זאגאת שנמכרה לכת דם. היא ברחה לפני הטקס הסופי, נושאת את סימני הכנה של קאז-קארש על גופה הצעיר — סימנים שעלולים להתעורר בכל רגע.

בחרון חצות היא למדה לשלוט בחלק מהסימנים, להשתמש בהם ככלי במקום ליפול קורבן להם. היא מתמחה בדיפלומטיה אפלה, עסקאות דם וקללות מכוונות.

מקור: גור-זאגאת.`,
    playerBio: 'שחקנית חדשה, מתעניינת בדיפלומטיה ובתפקידים מורכבים עם רקע טראומטי.',
    photoFilename: 'placeholder-5.svg',
  },
] as const;

export const PLAYER_BY_SLUG: ReadonlyMap<string, PlayerRecord> = new Map(
  PLAYERS.map((p) => [p.slug, p]),
);

export function getPlayerBySlug(slug: string): PlayerRecord | undefined {
  return PLAYER_BY_SLUG.get(slug);
}
