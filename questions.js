// Math Kangaroo Practice — 200 Questions (Grade 1–2 level)
// Topics: Counting, Addition/Subtraction, Patterns, Comparing,
//         Geometry, Spatial, Measurement, Time, Logic, Word Problems

const QUESTIONS = [

  // ── COUNTING & CARDINALITY (25 questions) ───────────────────────────────

  {
    id: 1, topic: "Counting", difficulty: "easy",
    question: "Which number comes right after 17?",
    options: ["16", "18", "19", "15"],
    answer: 1,
    explanation: "When counting forward: ...16, 17, 18... The number right after 17 is 18."
  },
  {
    id: 2, topic: "Counting", difficulty: "easy",
    question: "How many days are in one week?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
  },
  {
    id: 3, topic: "Counting", difficulty: "easy",
    question: "What number is missing?  5, 6, ___, 8, 9",
    options: ["4", "7", "10", "3"],
    answer: 1,
    explanation: "Counting in order: 5, 6, 7, 8, 9. The missing number is 7."
  },
  {
    id: 4, topic: "Counting", difficulty: "easy",
    question: "Anna has 10 fingers and 10 toes. How many fingers and toes does she have altogether?",
    options: ["10", "15", "20", "25"],
    answer: 2,
    explanation: "10 fingers + 10 toes = 20 altogether."
  },
  {
    id: 5, topic: "Counting", difficulty: "easy",
    question: "Which number is written as \"twenty-eight\"?",
    options: ["82", "208", "28", "20"],
    answer: 2,
    explanation: "Twenty-eight = 28 (two tens and eight ones)."
  },
  {
    id: 6, topic: "Counting", difficulty: "easy",
    question: "Count the stars:  ★★★★★★★★★★★★\nHow many stars are there?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    explanation: "Count carefully: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. There are 12 stars."
  },
  {
    id: 7, topic: "Counting", difficulty: "easy",
    question: "Which number is the LARGEST?",
    options: ["13", "7", "19", "15"],
    answer: 2,
    explanation: "19 > 15 > 13 > 7. So 19 is the largest number."
  },
  {
    id: 8, topic: "Counting", difficulty: "easy",
    question: "Sam counted 14 cars. Then 3 more cars arrived. How many cars are there now?",
    options: ["11", "16", "17", "10"],
    answer: 2,
    explanation: "14 + 3 = 17 cars."
  },
  {
    id: 9, topic: "Counting", difficulty: "medium",
    question: "What number is exactly halfway between 10 and 20?",
    options: ["14", "15", "16", "12"],
    answer: 1,
    explanation: "The numbers from 10 to 20 are: 10,11,12,13,14,15,16,17,18,19,20. The middle number is 15."
  },
  {
    id: 10, topic: "Counting", difficulty: "easy",
    question: "A dozen equals how many?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    explanation: "A dozen = 12. (Like a dozen eggs in a carton!)"
  },
  {
    id: 11, topic: "Counting", difficulty: "easy",
    question: "What is the smallest 2-digit number?",
    options: ["9", "10", "11", "20"],
    answer: 1,
    explanation: "The smallest two-digit number is 10. Single-digit numbers go up to 9."
  },
  {
    id: 12, topic: "Counting", difficulty: "medium",
    question: "Lily has 3 bags with 5 apples in each bag. How many apples does she have?",
    options: ["8", "12", "15", "35"],
    answer: 2,
    explanation: "5 + 5 + 5 = 15 apples. (Three groups of 5.)"
  },
  {
    id: 13, topic: "Counting", difficulty: "easy",
    question: "Which number is the SMALLEST?",
    options: ["23", "18", "30", "21"],
    answer: 1,
    explanation: "18 < 21 < 23 < 30. So 18 is the smallest."
  },
  {
    id: 14, topic: "Counting", difficulty: "easy",
    question: "Tom counted: 2, 4, 6, 8, ___. What is the next number?",
    options: ["9", "10", "12", "14"],
    answer: 1,
    explanation: "The pattern counts by 2s: 2, 4, 6, 8, 10. Next is 10."
  },
  {
    id: 15, topic: "Counting", difficulty: "easy",
    question: "How many months are in a year?",
    options: ["7", "10", "12", "365"],
    answer: 2,
    explanation: "There are 12 months in a year: January through December."
  },
  {
    id: 16, topic: "Counting", difficulty: "easy",
    question: "What is 10 more than 16?",
    options: ["6", "17", "26", "116"],
    answer: 2,
    explanation: "16 + 10 = 26."
  },
  {
    id: 17, topic: "Counting", difficulty: "medium",
    question: "A number has 2 tens and 4 ones. What is the number?",
    options: ["6", "24", "42", "240"],
    answer: 1,
    explanation: "2 tens = 20, and 4 ones = 4. So the number is 20 + 4 = 24."
  },
  {
    id: 18, topic: "Counting", difficulty: "easy",
    question: "Count by 5s: 5, 10, 15, ___",
    options: ["16", "17", "20", "25"],
    answer: 2,
    explanation: "Counting by 5s: 5, 10, 15, 20. Next is 20."
  },
  {
    id: 19, topic: "Counting", difficulty: "easy",
    question: "What number comes between 25 and 27?",
    options: ["24", "26", "28", "22"],
    answer: 1,
    explanation: "25, 26, 27 — the number between 25 and 27 is 26."
  },
  {
    id: 20, topic: "Counting", difficulty: "easy",
    question: "How many wheels does a bicycle have?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "A bicycle has 2 wheels — one in front and one in back."
  },
  {
    id: 21, topic: "Counting", difficulty: "easy",
    question: "What number is written as \"fourteen\"?",
    options: ["40", "41", "14", "4"],
    answer: 2,
    explanation: "Fourteen = 14 (one ten and four ones)."
  },
  {
    id: 22, topic: "Counting", difficulty: "easy",
    question: "What number is 1 less than 20?",
    options: ["21", "18", "19", "10"],
    answer: 2,
    explanation: "1 less than 20 is 19. (20 − 1 = 19)"
  },
  {
    id: 23, topic: "Counting", difficulty: "medium",
    question: "Leo arranged 4 rows of blocks with 5 blocks in each row. How many blocks are there in all?",
    options: ["9", "15", "20", "45"],
    answer: 2,
    explanation: "4 rows × 5 blocks = 20 blocks in all. (5+5+5+5 = 20)"
  },
  {
    id: 24, topic: "Counting", difficulty: "easy",
    question: "Which number is between 18 and 20?",
    options: ["17", "19", "21", "16"],
    answer: 1,
    explanation: "18, 19, 20 — the number between 18 and 20 is 19."
  },
  {
    id: 25, topic: "Counting", difficulty: "medium",
    question: "On a number line, which number is closest to 15?",
    options: ["8", "11", "14", "20"],
    answer: 2,
    explanation: "Distance from 15: 8→7, 11→4, 14→1, 20→5. The number 14 is closest (only 1 away)."
  },

  // ── ADDITION & SUBTRACTION (35 questions) ───────────────────────────────

  {
    id: 26, topic: "Addition & Subtraction", difficulty: "easy",
    question: "What is 8 + 7?",
    options: ["13", "14", "15", "16"],
    answer: 2,
    explanation: "8 + 7 = 15. You can count on: 8...9,10,11,12,13,14,15."
  },
  {
    id: 27, topic: "Addition & Subtraction", difficulty: "easy",
    question: "13 − 5 = ___",
    options: ["7", "8", "9", "18"],
    answer: 1,
    explanation: "13 − 5 = 8."
  },
  {
    id: 28, topic: "Addition & Subtraction", difficulty: "easy",
    question: "Lucy had 9 cookies. She ate 4. How many cookies are left?",
    options: ["13", "4", "5", "6"],
    answer: 2,
    explanation: "9 − 4 = 5 cookies are left."
  },
  {
    id: 29, topic: "Addition & Subtraction", difficulty: "easy",
    question: "What is 6 + 6?",
    options: ["11", "12", "13", "14"],
    answer: 1,
    explanation: "6 + 6 = 12. This is called a doubles fact!"
  },
  {
    id: 30, topic: "Addition & Subtraction", difficulty: "easy",
    question: "There are 7 birds on a branch. 3 more birds land. How many birds are there now?",
    options: ["4", "9", "10", "11"],
    answer: 2,
    explanation: "7 + 3 = 10 birds."
  },
  {
    id: 31, topic: "Addition & Subtraction", difficulty: "easy",
    question: "15 + 4 = ___",
    options: ["11", "18", "19", "20"],
    answer: 2,
    explanation: "15 + 4 = 19."
  },
  {
    id: 32, topic: "Addition & Subtraction", difficulty: "easy",
    question: "Max has 16 stickers. He gives away 7. How many stickers does Max have now?",
    options: ["7", "8", "9", "23"],
    answer: 2,
    explanation: "16 − 7 = 9 stickers."
  },
  {
    id: 33, topic: "Addition & Subtraction", difficulty: "medium",
    question: "5 + ___ = 11",
    options: ["5", "6", "7", "16"],
    answer: 1,
    explanation: "5 + 6 = 11. The missing number is 6."
  },
  {
    id: 34, topic: "Addition & Subtraction", difficulty: "easy",
    question: "What is 14 + 5?",
    options: ["9", "18", "19", "20"],
    answer: 2,
    explanation: "14 + 5 = 19."
  },
  {
    id: 35, topic: "Addition & Subtraction", difficulty: "medium",
    question: "12 − ___ = 7",
    options: ["4", "5", "6", "19"],
    answer: 1,
    explanation: "12 − 5 = 7. The missing number is 5."
  },
  {
    id: 36, topic: "Addition & Subtraction", difficulty: "easy",
    question: "A jar has 8 red marbles and 6 blue marbles. How many marbles in total?",
    options: ["12", "13", "14", "15"],
    answer: 2,
    explanation: "8 + 6 = 14 marbles."
  },
  {
    id: 37, topic: "Addition & Subtraction", difficulty: "easy",
    question: "20 − 8 = ___",
    options: ["10", "11", "12", "28"],
    answer: 2,
    explanation: "20 − 8 = 12."
  },
  {
    id: 38, topic: "Addition & Subtraction", difficulty: "medium",
    question: "Jack has 5 toy cars. Jill has 3 toy cars. How many MORE cars does Jack have than Jill?",
    options: ["2", "3", "4", "8"],
    answer: 0,
    explanation: "5 − 3 = 2. Jack has 2 more cars than Jill."
  },
  {
    id: 39, topic: "Addition & Subtraction", difficulty: "easy",
    question: "What is 9 + 9?",
    options: ["16", "17", "18", "19"],
    answer: 2,
    explanation: "9 + 9 = 18. Another doubles fact!"
  },
  {
    id: 40, topic: "Addition & Subtraction", difficulty: "easy",
    question: "There are 18 children. 9 go home. How many children are left?",
    options: ["7", "8", "9", "27"],
    answer: 2,
    explanation: "18 − 9 = 9 children are left."
  },
  {
    id: 41, topic: "Addition & Subtraction", difficulty: "easy",
    question: "7 + 8 = ___",
    options: ["13", "14", "15", "16"],
    answer: 2,
    explanation: "7 + 8 = 15. (7 + 7 = 14, then one more = 15)"
  },
  {
    id: 42, topic: "Addition & Subtraction", difficulty: "easy",
    question: "Rosa saved 10 coins on Monday and 8 coins on Tuesday. How many coins did she save altogether?",
    options: ["2", "16", "18", "20"],
    answer: 2,
    explanation: "10 + 8 = 18 coins."
  },
  {
    id: 43, topic: "Addition & Subtraction", difficulty: "easy",
    question: "17 − 9 = ___",
    options: ["7", "8", "9", "26"],
    answer: 1,
    explanation: "17 − 9 = 8."
  },
  {
    id: 44, topic: "Addition & Subtraction", difficulty: "medium",
    question: "4 + 3 + 2 = ___",
    options: ["7", "8", "9", "10"],
    answer: 2,
    explanation: "4 + 3 = 7, then 7 + 2 = 9."
  },
  {
    id: 45, topic: "Addition & Subtraction", difficulty: "medium",
    question: "Ben has 20 pages to read. He reads 12 pages. How many pages does he still need to read?",
    options: ["7", "8", "9", "32"],
    answer: 1,
    explanation: "20 − 12 = 8 pages still to read."
  },
  {
    id: 46, topic: "Addition & Subtraction", difficulty: "medium",
    question: "What number makes this true?   ___ + 6 = 13",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "7 + 6 = 13. The missing number is 7."
  },
  {
    id: 47, topic: "Addition & Subtraction", difficulty: "easy",
    question: "11 + 9 = ___",
    options: ["19", "20", "21", "111"],
    answer: 1,
    explanation: "11 + 9 = 20."
  },
  {
    id: 48, topic: "Addition & Subtraction", difficulty: "easy",
    question: "Sue has 15 flowers. She picks 7 more. How many flowers does Sue have now?",
    options: ["8", "20", "21", "22"],
    answer: 3,
    explanation: "15 + 7 = 22 flowers."
  },
  {
    id: 49, topic: "Addition & Subtraction", difficulty: "easy",
    question: "14 − 6 = ___",
    options: ["7", "8", "9", "20"],
    answer: 1,
    explanation: "14 − 6 = 8."
  },
  {
    id: 50, topic: "Addition & Subtraction", difficulty: "hard",
    question: "A bus had 13 passengers. At the stop, 5 people got off and 4 people got on. How many passengers are on the bus now?",
    options: ["10", "11", "12", "22"],
    answer: 2,
    explanation: "13 − 5 = 8 after people got off. Then 8 + 4 = 12 passengers."
  },
  {
    id: 51, topic: "Addition & Subtraction", difficulty: "medium",
    question: "3 + 3 + 3 + 3 = ___",
    options: ["9", "12", "15", "33"],
    answer: 1,
    explanation: "3 + 3 + 3 + 3 = 12. (Four groups of 3 equals 12.)"
  },
  {
    id: 52, topic: "Addition & Subtraction", difficulty: "easy",
    question: "There are 16 apples in a basket. If you take out 7, how many remain?",
    options: ["7", "8", "9", "23"],
    answer: 2,
    explanation: "16 − 7 = 9 apples remain."
  },
  {
    id: 53, topic: "Addition & Subtraction", difficulty: "medium",
    question: "8 + ___ = 16",
    options: ["7", "8", "9", "24"],
    answer: 1,
    explanation: "8 + 8 = 16. The missing number is 8."
  },
  {
    id: 54, topic: "Addition & Subtraction", difficulty: "easy",
    question: "Kim scored 9 points in the first game and 11 in the second game. How many points in total?",
    options: ["2", "18", "19", "20"],
    answer: 3,
    explanation: "9 + 11 = 20 points."
  },
  {
    id: 55, topic: "Addition & Subtraction", difficulty: "easy",
    question: "20 − 13 = ___",
    options: ["6", "7", "8", "33"],
    answer: 1,
    explanation: "20 − 13 = 7."
  },
  {
    id: 56, topic: "Addition & Subtraction", difficulty: "medium",
    question: "There are 5 red balls and 9 blue balls. How many MORE blue balls are there than red balls?",
    options: ["3", "4", "5", "14"],
    answer: 1,
    explanation: "9 − 5 = 4 more blue balls."
  },
  {
    id: 57, topic: "Addition & Subtraction", difficulty: "medium",
    question: "6 + 7 + 4 = ___",
    options: ["15", "16", "17", "18"],
    answer: 2,
    explanation: "6 + 7 = 13, then 13 + 4 = 17."
  },
  {
    id: 58, topic: "Addition & Subtraction", difficulty: "medium",
    question: "A bookshelf has 3 shelves with 6 books on each shelf. How many books are on the bookshelf?",
    options: ["9", "12", "18", "63"],
    answer: 2,
    explanation: "6 + 6 + 6 = 18 books. (Three shelves of 6.)"
  },
  {
    id: 59, topic: "Addition & Subtraction", difficulty: "easy",
    question: "25 − 5 = ___",
    options: ["15", "20", "25", "30"],
    answer: 1,
    explanation: "25 − 5 = 20."
  },
  {
    id: 60, topic: "Addition & Subtraction", difficulty: "hard",
    question: "Peter had some stickers. He gave 8 to a friend and now has 6 left. How many stickers did Peter start with?",
    options: ["2", "14", "15", "16"],
    answer: 1,
    explanation: "He ended with 6 and gave away 8, so he started with 6 + 8 = 14 stickers."
  },

  // ── NUMBER PATTERNS & SEQUENCES (20 questions) ──────────────────────────

  {
    id: 61, topic: "Patterns", difficulty: "easy",
    question: "What comes next?   2, 4, 6, 8, ___",
    options: ["9", "10", "11", "12"],
    answer: 1,
    explanation: "This pattern counts by 2s. After 8 comes 10."
  },
  {
    id: 62, topic: "Patterns", difficulty: "easy",
    question: "What comes next?   1, 3, 5, 7, ___",
    options: ["8", "9", "11", "13"],
    answer: 1,
    explanation: "These are odd numbers, counting by 2s. After 7 comes 9."
  },
  {
    id: 63, topic: "Patterns", difficulty: "easy",
    question: "Fill in the missing number:   5, 10, ___, 20, 25",
    options: ["13", "14", "15", "16"],
    answer: 2,
    explanation: "Counting by 5s: 5, 10, 15, 20, 25. The missing number is 15."
  },
  {
    id: 64, topic: "Patterns", difficulty: "easy",
    question: "What comes next?   20, 18, 16, 14, ___",
    options: ["10", "12", "13", "15"],
    answer: 1,
    explanation: "This pattern counts DOWN by 2s. After 14 comes 12."
  },
  {
    id: 65, topic: "Patterns", difficulty: "easy",
    question: "🍎 🍊 🍎 🍊 🍎 ___ — What comes next in the pattern?",
    options: ["🍎 (apple)", "🍊 (orange)", "🍋 (lemon)", "🍇 (grapes)"],
    answer: 1,
    explanation: "The pattern alternates: apple, orange, apple, orange... Next comes orange."
  },
  {
    id: 66, topic: "Patterns", difficulty: "easy",
    question: "What is the missing number?   3, 6, 9, ___, 15",
    options: ["11", "12", "13", "10"],
    answer: 1,
    explanation: "Counting by 3s: 3, 6, 9, 12, 15. The missing number is 12."
  },
  {
    id: 67, topic: "Patterns", difficulty: "medium",
    question: "What comes next?   30, 25, 20, 15, ___",
    options: ["5", "10", "12", "14"],
    answer: 1,
    explanation: "Counting down by 5s: 30, 25, 20, 15, 10."
  },
  {
    id: 68, topic: "Patterns", difficulty: "medium",
    question: "A pattern goes:  △ ○ □ △ ○ □  — What is the 7th shape?",
    options: ["△ (triangle)", "○ (circle)", "□ (square)", "★ (star)"],
    answer: 0,
    explanation: "The pattern repeats every 3 shapes: △ ○ □. The 7th shape starts a new cycle, so it's △ (triangle) again."
  },
  {
    id: 69, topic: "Patterns", difficulty: "easy",
    question: "Find the missing number:   8, ___, 12, 14, 16",
    options: ["9", "10", "11", "13"],
    answer: 1,
    explanation: "Counting by 2s: 8, 10, 12, 14, 16. The missing number is 10."
  },
  {
    id: 70, topic: "Patterns", difficulty: "hard",
    question: "What comes next?   1, 2, 4, 8, ___",
    options: ["10", "12", "14", "16"],
    answer: 3,
    explanation: "Each number is doubled: 1×2=2, 2×2=4, 4×2=8, 8×2=16."
  },
  {
    id: 71, topic: "Patterns", difficulty: "medium",
    question: "♥ ♥ ♣ ♥ ♥ ♣ ♥ ♥ ___ — What comes next?",
    options: ["♥ (heart)", "♣ (club)", "♦ (diamond)", "♠ (spade)"],
    answer: 1,
    explanation: "The pattern is ♥ ♥ ♣ repeating. After ♥ ♥ comes ♣."
  },
  {
    id: 72, topic: "Patterns", difficulty: "easy",
    question: "What is the missing number?   25, 20, ___, 10, 5",
    options: ["12", "13", "14", "15"],
    answer: 3,
    explanation: "Counting down by 5s: 25, 20, 15, 10, 5. The missing number is 15."
  },
  {
    id: 73, topic: "Patterns", difficulty: "medium",
    question: "Kate's number pattern: 4, 7, 10, 13, ___",
    options: ["14", "16", "17", "18"],
    answer: 1,
    explanation: "Adding 3 each time: 4+3=7, 7+3=10, 10+3=13, 13+3=16."
  },
  {
    id: 74, topic: "Patterns", difficulty: "easy",
    question: "Fill in the blank:   100, 90, 80, ___, 60",
    options: ["65", "70", "72", "75"],
    answer: 1,
    explanation: "Counting down by 10s: 100, 90, 80, 70, 60. The missing number is 70."
  },
  {
    id: 75, topic: "Patterns", difficulty: "medium",
    question: "What comes next?   11, 22, 33, 44, ___",
    options: ["50", "54", "55", "56"],
    answer: 2,
    explanation: "Adding 11 each time: 11+11=22, 22+11=33, 33+11=44, 44+11=55."
  },
  {
    id: 76, topic: "Patterns", difficulty: "medium",
    question: "Find the missing number:   ___, 6, 9, 12, 15",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "Counting by 3s: 3, 6, 9, 12, 15. The missing number is 3."
  },
  {
    id: 77, topic: "Patterns", difficulty: "easy",
    question: "🐱 🐶 🐱 🐶 🐱 — What comes next?",
    options: ["🐱 (cat)", "🐶 (dog)", "🐸 (frog)", "🐠 (fish)"],
    answer: 1,
    explanation: "The pattern alternates cat, dog, cat, dog... After cat comes dog."
  },
  {
    id: 78, topic: "Patterns", difficulty: "medium",
    question: "What is the 5th number in this pattern: 10, 9, 8, 7, ___, 5",
    options: ["5", "6", "7", "4"],
    answer: 1,
    explanation: "Counting down by 1: 10, 9, 8, 7, 6, 5. The 5th number is 6."
  },
  {
    id: 79, topic: "Patterns", difficulty: "hard",
    question: "Look at the pattern: ■, ■■, ■■■, ■■■■, ___ — What comes next?",
    options: ["■■■■", "■■■■■", "■■■■■■", "■■"],
    answer: 1,
    explanation: "Each group adds one more square: 1, 2, 3, 4, 5. Next is 5 squares."
  },
  {
    id: 80, topic: "Patterns", difficulty: "hard",
    question: "What pattern is this?  2, 5, 8, 11, ___, 17",
    options: ["12", "13", "14", "15"],
    answer: 2,
    explanation: "Adding 3 each time: 2+3=5, 5+3=8, 8+3=11, 11+3=14. The missing number is 14."
  },

  // ── COMPARING & ORDERING NUMBERS (20 questions) ─────────────────────────

  {
    id: 81, topic: "Comparing", difficulty: "easy",
    question: "Which number is greater: 17 or 23?",
    options: ["17", "23", "They are equal", "Can't tell"],
    answer: 1,
    explanation: "23 > 17 because 23 has more tens (2 tens vs 1 ten)."
  },
  {
    id: 82, topic: "Comparing", difficulty: "easy",
    question: "Put in order from SMALLEST to LARGEST:   15, 8, 22, 3",
    options: ["3, 8, 15, 22", "22, 15, 8, 3", "8, 3, 15, 22", "3, 15, 8, 22"],
    answer: 0,
    explanation: "From smallest to largest: 3, 8, 15, 22."
  },
  {
    id: 83, topic: "Comparing", difficulty: "easy",
    question: "Which sign makes this true?   14 ___ 19",
    options: ["> (greater than)", "< (less than)", "= (equal to)", "+ (plus)"],
    answer: 1,
    explanation: "14 < 19 because 14 is less than 19."
  },
  {
    id: 84, topic: "Comparing", difficulty: "easy",
    question: "Amy has 11 stickers. Bill has 8 stickers. Who has MORE stickers?",
    options: ["Amy", "Bill", "They have the same", "Can't tell"],
    answer: 0,
    explanation: "11 > 8, so Amy has more stickers."
  },
  {
    id: 85, topic: "Comparing", difficulty: "medium",
    question: "Which number is closest to 10?",
    options: ["4", "7", "14", "18"],
    answer: 1,
    explanation: "Distance from 10: 4 is 6 away, 7 is 3 away, 14 is 4 away, 18 is 8 away. The number 7 is closest!"
  },
  {
    id: 86, topic: "Comparing", difficulty: "easy",
    question: "Order from LARGEST to SMALLEST:   9, 16, 4, 20",
    options: ["4, 9, 16, 20", "20, 16, 9, 4", "16, 20, 9, 4", "20, 9, 16, 4"],
    answer: 1,
    explanation: "Largest to smallest: 20, 16, 9, 4."
  },
  {
    id: 87, topic: "Comparing", difficulty: "medium",
    question: "Which statement is TRUE?",
    options: ["7 > 9", "12 < 8", "15 = 15", "20 < 18"],
    answer: 2,
    explanation: "15 = 15 is true! Check the others: 7 < 9, 12 > 8, and 20 > 18."
  },
  {
    id: 88, topic: "Comparing", difficulty: "easy",
    question: "Which number is between 12 and 18?",
    options: ["10", "11", "15", "20"],
    answer: 2,
    explanation: "15 is between 12 and 18 because 12 < 15 < 18."
  },
  {
    id: 89, topic: "Comparing", difficulty: "medium",
    question: "Kim ran 13 meters. Sam ran 9 meters. Tom ran 17 meters. Who ran the FARTHEST?",
    options: ["Kim", "Sam", "Tom", "They ran the same"],
    answer: 2,
    explanation: "17 > 13 > 9, so Tom ran the farthest."
  },
  {
    id: 90, topic: "Comparing", difficulty: "easy",
    question: "Which number makes this true?   8 < ___",
    options: ["5", "7", "8", "11"],
    answer: 3,
    explanation: "8 < 11 is true! 5 and 7 are less than 8, and 8 is equal to 8."
  },
  {
    id: 91, topic: "Comparing", difficulty: "medium",
    question: "The numbers 12, ___, 16 are in order from smallest to largest. Which number could be in the middle?",
    options: ["10", "13", "17", "19"],
    answer: 1,
    explanation: "The middle number must be between 12 and 16. Only 13 fits: 12 < 13 < 16."
  },
  {
    id: 92, topic: "Comparing", difficulty: "easy",
    question: "Which is LESS than 20?",
    options: ["25", "21", "20", "18"],
    answer: 3,
    explanation: "18 < 20. The others are greater than or equal to 20."
  },
  {
    id: 93, topic: "Comparing", difficulty: "easy",
    question: "There are 14 boys and 16 girls in a class. Are there more boys or girls?",
    options: ["More boys", "More girls", "Same number", "Can't tell"],
    answer: 1,
    explanation: "16 > 14, so there are more girls."
  },
  {
    id: 94, topic: "Comparing", difficulty: "medium",
    question: "Which number sentence is CORRECT?",
    options: ["5 + 3 > 9", "7 + 4 < 10", "6 + 6 = 12", "8 + 5 = 14"],
    answer: 2,
    explanation: "6 + 6 = 12 ✓. Check others: 5+3=8 (not >9), 7+4=11 (not <10), 8+5=13 (not 14)."
  },
  {
    id: 95, topic: "Comparing", difficulty: "medium",
    question: "Mom has 19 apples. She needs 25 for a pie. How many MORE apples does she need?",
    options: ["4", "5", "6", "7"],
    answer: 2,
    explanation: "25 − 19 = 6 more apples."
  },
  {
    id: 96, topic: "Comparing", difficulty: "medium",
    question: "Which is TRUE?",
    options: ["2 tens > 3 tens", "1 ten < 2 tens", "3 tens < 2 tens", "4 tens = 3 tens"],
    answer: 1,
    explanation: "1 ten (10) < 2 tens (20) is true. The others are false."
  },
  {
    id: 97, topic: "Comparing", difficulty: "medium",
    question: "Jake has 7 toy cars, 3 toy trucks, and 5 toy trains. Does he have more cars or trains?",
    options: ["More cars", "More trains", "Same number", "Can't tell"],
    answer: 0,
    explanation: "7 cars > 5 trains, so Jake has more cars."
  },
  {
    id: 98, topic: "Comparing", difficulty: "easy",
    question: "Which number is GREATER than 25?",
    options: ["20", "22", "25", "27"],
    answer: 3,
    explanation: "27 > 25. The others are less than or equal to 25."
  },
  {
    id: 99, topic: "Comparing", difficulty: "medium",
    question: "Order these lengths from SHORTEST to LONGEST:   5 cm, 12 cm, 3 cm, 8 cm",
    options: ["3, 5, 8, 12", "12, 8, 5, 3", "5, 3, 12, 8", "3, 8, 5, 12"],
    answer: 0,
    explanation: "From shortest to longest: 3 cm, 5 cm, 8 cm, 12 cm."
  },
  {
    id: 100, topic: "Comparing", difficulty: "medium",
    question: "Which number is in the MIDDLE when you arrange: 8, 15, 11?",
    options: ["8", "11", "15", "There is no middle"],
    answer: 1,
    explanation: "Ordered: 8, 11, 15. The middle number is 11."
  },

  // ── BASIC GEOMETRY (20 questions) ───────────────────────────────────────

  {
    id: 101, topic: "Geometry", difficulty: "easy",
    question: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "A triangle has 3 sides and 3 corners (vertices)."
  },
  {
    id: 102, topic: "Geometry", difficulty: "easy",
    question: "Which shape has 4 EQUAL sides?",
    options: ["Rectangle", "Triangle", "Circle", "Square"],
    answer: 3,
    explanation: "A square has 4 equal sides. A rectangle has 4 sides but they don't need to be equal."
  },
  {
    id: 103, topic: "Geometry", difficulty: "easy",
    question: "How many corners does a rectangle have?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "A rectangle has 4 corners (also called vertices)."
  },
  {
    id: 104, topic: "Geometry", difficulty: "easy",
    question: "Which shape has NO sides or corners?",
    options: ["Square", "Triangle", "Circle", "Pentagon"],
    answer: 2,
    explanation: "A circle has no straight sides or corners — it is perfectly round!"
  },
  {
    id: 105, topic: "Geometry", difficulty: "easy",
    question: "How many sides does a pentagon have?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: "A pentagon has 5 sides. (\"Penta\" means 5 in Greek.)"
  },
  {
    id: 106, topic: "Geometry", difficulty: "easy",
    question: "Sam drew a shape with 6 sides. What shape did he draw?",
    options: ["Pentagon", "Hexagon", "Heptagon", "Square"],
    answer: 1,
    explanation: "A hexagon has 6 sides. (\"Hex\" means 6.)"
  },
  {
    id: 107, topic: "Geometry", difficulty: "easy",
    question: "Which of these 3D shapes can ROLL?",
    options: ["Cube", "Pyramid", "Sphere", "Rectangular box"],
    answer: 2,
    explanation: "A sphere (ball shape) can roll because it has no flat edges."
  },
  {
    id: 108, topic: "Geometry", difficulty: "easy",
    question: "A pizza has which shape?",
    options: ["Square", "Triangle", "Rectangle", "Circle"],
    answer: 3,
    explanation: "A pizza is circular — it has a round circle shape."
  },
  {
    id: 109, topic: "Geometry", difficulty: "medium",
    question: "How many corners does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1,
    explanation: "A hexagon has 6 sides AND 6 corners."
  },
  {
    id: 110, topic: "Geometry", difficulty: "easy",
    question: "Which shape is like the face of a cube?",
    options: ["Circle", "Triangle", "Square", "Pentagon"],
    answer: 2,
    explanation: "Each face of a cube is a square. A cube has 6 square faces."
  },
  {
    id: 111, topic: "Geometry", difficulty: "easy",
    question: "Ana folds a square piece of paper in half diagonally. What shape does she get?",
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    answer: 2,
    explanation: "Folding a square diagonally (corner to corner) creates a triangle."
  },
  {
    id: 112, topic: "Geometry", difficulty: "easy",
    question: "Which of these is a 3D (solid) shape?",
    options: ["Circle", "Square", "Sphere", "Triangle"],
    answer: 2,
    explanation: "A sphere (like a ball) is 3D. Circles, squares, and triangles are flat 2D shapes."
  },
  {
    id: 113, topic: "Geometry", difficulty: "medium",
    question: "A stop sign has 8 sides. What shape is it?",
    options: ["Hexagon", "Heptagon", "Octagon", "Pentagon"],
    answer: 2,
    explanation: "An octagon has 8 sides. (\"Octo\" means 8.)"
  },
  {
    id: 114, topic: "Geometry", difficulty: "easy",
    question: "How many flat faces does a cube have?",
    options: ["4", "5", "6", "8"],
    answer: 2,
    explanation: "A cube has 6 faces: top, bottom, front, back, left side, right side."
  },
  {
    id: 115, topic: "Geometry", difficulty: "medium",
    question: "A shape has 4 sides. The opposite sides are equal but not all 4 are equal. What shape is it?",
    options: ["Square", "Rectangle", "Triangle", "Pentagon"],
    answer: 1,
    explanation: "A rectangle has 4 sides where opposite sides are equal, but it's not a square since all 4 aren't the same."
  },
  {
    id: 116, topic: "Geometry", difficulty: "easy",
    question: "Jake describes a shape: \"It has 1 round flat face and comes to a point.\" What shape is it?",
    options: ["Cylinder", "Cone", "Sphere", "Cube"],
    answer: 1,
    explanation: "A cone has 1 circular base and comes to a pointed tip."
  },
  {
    id: 117, topic: "Geometry", difficulty: "easy",
    question: "How many edges does a cube have?",
    options: ["6", "8", "10", "12"],
    answer: 3,
    explanation: "A cube has 12 edges: 4 on top, 4 on bottom, and 4 connecting top to bottom."
  },
  {
    id: 118, topic: "Geometry", difficulty: "medium",
    question: "How many lines of symmetry does a square have?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanation: "A square has 4 lines of symmetry: 2 through the midpoints of opposite sides, and 2 through opposite corners."
  },
  {
    id: 119, topic: "Geometry", difficulty: "easy",
    question: "Which shape has the most sides among these?",
    options: ["Triangle (3)", "Square (4)", "Pentagon (5)", "Hexagon (6)"],
    answer: 3,
    explanation: "A hexagon has 6 sides, which is the most among these choices."
  },
  {
    id: 120, topic: "Geometry", difficulty: "medium",
    question: "A rectangle is 5 cm long and 3 cm wide. What is the total length of all 4 sides?",
    options: ["8 cm", "15 cm", "16 cm", "30 cm"],
    answer: 2,
    explanation: "A rectangle has 2 long sides and 2 short sides: 5+3+5+3 = 16 cm."
  },

  // ── SPATIAL REASONING (20 questions) ────────────────────────────────────

  {
    id: 121, topic: "Spatial", difficulty: "easy",
    question: "If you look at the letter \"b\" in a mirror, what do you see?",
    options: ["d", "p", "q", "b"],
    answer: 0,
    explanation: "A mirror flips left and right. \"b\" becomes \"d\" in a mirror."
  },
  {
    id: 122, topic: "Spatial", difficulty: "easy",
    question: "Anna folds a square piece of paper in half (not diagonally). What shape does she get?",
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    answer: 1,
    explanation: "Folding a square in half (edge to edge) creates a rectangle."
  },
  {
    id: 123, topic: "Spatial", difficulty: "medium",
    question: "A picture of a cat is facing RIGHT. What direction does its mirror image face?",
    options: ["Right", "Left", "Up", "Down"],
    answer: 1,
    explanation: "A mirror reflection flips left and right. If the cat faces right, its mirror image faces left."
  },
  {
    id: 124, topic: "Spatial", difficulty: "easy",
    question: "Look at this grid pattern:\n🔴 🔵 🔴\n🔵 🔴 🔵\n🔴 🔵 ___\nWhat goes in the blank?",
    options: ["🔴 (red)", "🔵 (blue)", "🟡 (yellow)", "🟢 (green)"],
    answer: 0,
    explanation: "The pattern alternates red and blue. In row 3, position 3, following the pattern, it's 🔴 (red)."
  },
  {
    id: 125, topic: "Spatial", difficulty: "easy",
    question: "You see a cube from ABOVE (top view). What shape do you see?",
    options: ["Triangle", "Circle", "Square", "Rectangle"],
    answer: 2,
    explanation: "When you look at a cube from above, you see a square face."
  },
  {
    id: 126, topic: "Spatial", difficulty: "medium",
    question: "A robot is facing North. It turns RIGHT 90°. Which direction is it now facing?",
    options: ["North", "South", "East", "West"],
    answer: 2,
    explanation: "Turning right 90° from North gives you East."
  },
  {
    id: 127, topic: "Spatial", difficulty: "easy",
    question: "Emma draws a 2×2 grid (4 small squares). How many small squares does it have?",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: "A 2×2 grid has 4 small squares: 2 columns × 2 rows = 4."
  },
  {
    id: 128, topic: "Spatial", difficulty: "medium",
    question: "Look at these letters:  b  d  p  q\nWhich two look like mirror images of each other?",
    options: ["b and d", "b and p", "p and d", "b and q"],
    answer: 0,
    explanation: "\"b\" and \"d\" are mirror images — flip \"b\" left-right and you get \"d\"."
  },
  {
    id: 129, topic: "Spatial", difficulty: "easy",
    question: "An arrow points UP ↑. If you turn it 180° (a half turn), it points ___",
    options: ["↑ (up)", "↓ (down)", "→ (right)", "← (left)"],
    answer: 1,
    explanation: "Rotating an arrow 180° points it in the opposite direction: ↓ (down)."
  },
  {
    id: 130, topic: "Spatial", difficulty: "medium",
    question: "Start at 1 on a clock face. Move clockwise 3 steps (each step goes to the next number). Where do you land?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "1 → 2 → 3 → 4. After 3 steps clockwise from 1, you land on 4."
  },
  {
    id: 131, topic: "Spatial", difficulty: "medium",
    question: "Which letter looks the SAME when reflected left-to-right?",
    options: ["F", "G", "O", "R"],
    answer: 2,
    explanation: "The letter \"O\" (a circle) looks the same when reflected — it's symmetrical!"
  },
  {
    id: 132, topic: "Spatial", difficulty: "hard",
    question: "A square is cut into 4 equal smaller squares. Each smaller square is what fraction of the original?",
    options: ["1/2", "1/4", "1/3", "1/6"],
    answer: 1,
    explanation: "If a square is cut into 4 equal pieces, each piece is 1/4 (one quarter) of the whole."
  },
  {
    id: 133, topic: "Spatial", difficulty: "medium",
    question: "Look at this pattern:  🔺 🔻 🔺 🔻 🔺 🔻...\nIs the 9th shape a 🔺 or 🔻?",
    options: ["🔺 (up-triangle)", "🔻 (down-triangle)", "■ (square)", "● (circle)"],
    answer: 0,
    explanation: "Odd positions (1,3,5,7,9) are 🔺. Since 9 is odd, the 9th shape is 🔺 (up-triangle)."
  },
  {
    id: 134, topic: "Spatial", difficulty: "easy",
    question: "Which letter has a line of symmetry?",
    options: ["F", "A", "G", "R"],
    answer: 1,
    explanation: "The letter \"A\" has a vertical line of symmetry down the middle!"
  },
  {
    id: 135, topic: "Spatial", difficulty: "hard",
    question: "Tom sees a clock in a mirror. The mirror shows hands pointing to 3:00. What is the ACTUAL time?",
    options: ["3:00", "9:00", "6:00", "12:00"],
    answer: 1,
    explanation: "A clock reflected in a mirror shows the mirror image. 3:00 in a mirror looks like 9:00."
  },
  {
    id: 136, topic: "Spatial", difficulty: "medium",
    question: "Ali has 4 square tiles. He arranges them in 2 rows of 2. What shape does he make?",
    options: ["A long rectangle", "A square", "A triangle", "An L-shape"],
    answer: 1,
    explanation: "2 rows of 2 tiles each creates a larger square shape."
  },
  {
    id: 137, topic: "Spatial", difficulty: "easy",
    question: "You have a rectangular piece of paper. You fold it in half twice. How many layers of paper do you have?",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: "First fold: 2 layers. Second fold: 4 layers. Folding in half doubles the layers each time."
  },
  {
    id: 138, topic: "Spatial", difficulty: "medium",
    question: "On a grid, Maya starts at point A and moves 3 squares RIGHT and then 2 squares UP. She ends at point B. How many squares apart are A and B?",
    options: ["3 apart", "5 apart (straight line)", "2 apart", "She is back at A"],
    answer: 1,
    explanation: "Moving 3 right and 2 up — she is 3+2=5 grid moves away from her starting point."
  },
  {
    id: 139, topic: "Spatial", difficulty: "medium",
    question: "If you fold a heart shape ♥ along its line of symmetry, what do you get?",
    options: ["Two different halves", "Two matching halves", "A square", "A triangle"],
    answer: 1,
    explanation: "A heart has a vertical line of symmetry. Folding it gives two identical matching halves."
  },
  {
    id: 140, topic: "Spatial", difficulty: "hard",
    question: "A large triangle is divided into 4 equal small triangles. How many small triangles make the large one?",
    options: ["2", "3", "4", "6"],
    answer: 2,
    explanation: "You need 4 small triangles to fill the large triangle exactly."
  },

  // ── MEASUREMENT (15 questions) ───────────────────────────────────────────

  {
    id: 141, topic: "Measurement", difficulty: "easy",
    question: "A pencil is 15 cm long. A crayon is 9 cm long. Which is longer?",
    options: ["Pencil", "Crayon", "They are the same", "Can't tell"],
    answer: 0,
    explanation: "15 cm > 9 cm, so the pencil is longer."
  },
  {
    id: 142, topic: "Measurement", difficulty: "easy",
    question: "Which is HEAVIER: a bag of feathers or a bag of rocks of the same size?",
    options: ["Feathers", "Rocks", "They weigh the same", "Depends on the size"],
    answer: 1,
    explanation: "Rocks are much denser and heavier than feathers, even if the bags look the same size."
  },
  {
    id: 143, topic: "Measurement", difficulty: "easy",
    question: "Sam's bookshelf is 120 cm tall. His table is 75 cm tall. How much taller is the bookshelf?",
    options: ["35 cm", "40 cm", "45 cm", "50 cm"],
    answer: 2,
    explanation: "120 − 75 = 45 cm taller."
  },
  {
    id: 144, topic: "Measurement", difficulty: "medium",
    question: "A ribbon is 30 cm long. Lisa cuts it into two equal pieces. How long is each piece?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    answer: 1,
    explanation: "30 cm ÷ 2 = 15 cm. Each piece is 15 cm long."
  },
  {
    id: 145, topic: "Measurement", difficulty: "easy",
    question: "Which unit would you use to measure the length of a classroom?",
    options: ["Millimeter", "Centimeter", "Meter", "Kilometer"],
    answer: 2,
    explanation: "A classroom is about 7–10 meters long, so meters is the best unit."
  },
  {
    id: 146, topic: "Measurement", difficulty: "medium",
    question: "Eric walks 200 meters to school. Linda walks 450 meters. How much farther does Linda walk?",
    options: ["150 m", "200 m", "250 m", "300 m"],
    answer: 2,
    explanation: "450 − 200 = 250 meters farther."
  },
  {
    id: 147, topic: "Measurement", difficulty: "medium",
    question: "The fence around a SQUARE yard has a total length of 40 meters. How long is each side?",
    options: ["8 m", "10 m", "12 m", "20 m"],
    answer: 1,
    explanation: "A square has 4 equal sides. 40 ÷ 4 = 10 meters per side."
  },
  {
    id: 148, topic: "Measurement", difficulty: "medium",
    question: "Anna's height is 110 cm. Her little brother is 85 cm tall. How much taller is Anna?",
    options: ["15 cm", "20 cm", "25 cm", "30 cm"],
    answer: 2,
    explanation: "110 − 85 = 25 cm taller."
  },
  {
    id: 149, topic: "Measurement", difficulty: "medium",
    question: "A box weighs 3 kg. How much do 3 identical boxes weigh?",
    options: ["6 kg", "9 kg", "12 kg", "3 kg"],
    answer: 1,
    explanation: "3 boxes × 3 kg each = 9 kg."
  },
  {
    id: 150, topic: "Measurement", difficulty: "easy",
    question: "Which is the BEST unit to measure the weight of a watermelon?",
    options: ["Millimeter", "Liter", "Kilogram", "Meter"],
    answer: 2,
    explanation: "Kilograms are used to measure weight/mass of objects like watermelons."
  },
  {
    id: 151, topic: "Measurement", difficulty: "medium",
    question: "A rope is 24 cm long. It is cut into pieces of 6 cm each. How many pieces are there?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "24 ÷ 6 = 4 pieces."
  },
  {
    id: 152, topic: "Measurement", difficulty: "medium",
    question: "Mr. Liu drives 15 km to work. He drives 5 days a week. How far does he drive to work in one week?",
    options: ["50 km", "60 km", "70 km", "75 km"],
    answer: 3,
    explanation: "15 km × 5 days = 75 km."
  },
  {
    id: 153, topic: "Measurement", difficulty: "easy",
    question: "A fish tank holds 10 liters of water. It already has 7 liters. How many more liters are needed to fill it?",
    options: ["2", "3", "4", "17"],
    answer: 1,
    explanation: "10 − 7 = 3 liters needed."
  },
  {
    id: 154, topic: "Measurement", difficulty: "hard",
    question: "A jug holds 2 liters of juice. A glass holds 250 ml. How many glasses can be filled? (1 liter = 1000 ml)",
    options: ["4", "6", "8", "10"],
    answer: 2,
    explanation: "2 liters = 2000 ml. 2000 ÷ 250 = 8 glasses."
  },
  {
    id: 155, topic: "Measurement", difficulty: "medium",
    question: "A caterpillar is 4 cm long. A worm is 7 cm long. A stick is 3 cm long. What is their total length?",
    options: ["11 cm", "13 cm", "14 cm", "18 cm"],
    answer: 2,
    explanation: "4 + 7 + 3 = 14 cm total."
  },

  // ── TIME (10 questions) ─────────────────────────────────────────────────

  {
    id: 156, topic: "Time", difficulty: "easy",
    question: "What day comes AFTER Wednesday?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: 2,
    explanation: "The weekdays go: Mon, Tue, Wed, Thu, Fri, Sat, Sun. After Wednesday comes Thursday."
  },
  {
    id: 157, topic: "Time", difficulty: "easy",
    question: "A clock shows 3 o'clock. Where is the short (hour) hand pointing?",
    options: ["12", "3", "6", "9"],
    answer: 1,
    explanation: "At 3:00, the short (hour) hand points to the 3."
  },
  {
    id: 158, topic: "Time", difficulty: "easy",
    question: "How many hours are in one day?",
    options: ["12", "24", "60", "365"],
    answer: 1,
    explanation: "There are 24 hours in a day."
  },
  {
    id: 159, topic: "Time", difficulty: "medium",
    question: "If today is Tuesday, what day will it be in 3 days?",
    options: ["Thursday", "Friday", "Wednesday", "Saturday"],
    answer: 1,
    explanation: "Tuesday + 1 = Wednesday, + 2 = Thursday, + 3 = Friday."
  },
  {
    id: 160, topic: "Time", difficulty: "medium",
    question: "School starts at 8:00 and ends at 3:00. How many hours long is the school day?",
    options: ["5 hours", "6 hours", "7 hours", "8 hours"],
    answer: 2,
    explanation: "From 8:00 to 3:00 is 7 hours."
  },
  {
    id: 161, topic: "Time", difficulty: "easy",
    question: "Emma's birthday is in June. Max's birthday is in September. Whose birthday comes FIRST?",
    options: ["Emma's", "Max's", "Same month", "Can't tell"],
    answer: 0,
    explanation: "June (month 6) comes before September (month 9)."
  },
  {
    id: 162, topic: "Time", difficulty: "medium",
    question: "A clock shows half past 2 (2:30). Where does the MINUTE hand point?",
    options: ["2", "3", "6", "12"],
    answer: 2,
    explanation: "At half past (30 minutes), the minute hand always points to the 6."
  },
  {
    id: 163, topic: "Time", difficulty: "medium",
    question: "If it is 9:00 AM now, what time will it be in 4 hours?",
    options: ["1:00 PM", "1:00 AM", "5:00 PM", "5:00 AM"],
    answer: 0,
    explanation: "9:00 AM + 4 hours = 1:00 PM."
  },
  {
    id: 164, topic: "Time", difficulty: "easy",
    question: "How many months are in HALF a year?",
    options: ["4", "6", "8", "12"],
    answer: 1,
    explanation: "Half of 12 months = 6 months."
  },
  {
    id: 165, topic: "Time", difficulty: "hard",
    question: "A movie starts at 2:00 PM and lasts 2 hours. What time does it end?",
    options: ["3:00 PM", "4:00 PM", "5:00 PM", "2:30 PM"],
    answer: 1,
    explanation: "2:00 PM + 2 hours = 4:00 PM."
  },

  // ── LOGIC & REASONING (20 questions) ────────────────────────────────────

  {
    id: 166, topic: "Logic", difficulty: "easy",
    question: "All dogs have 4 legs. Rex is a dog. How many legs does Rex have?",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: "Since all dogs have 4 legs and Rex is a dog, Rex must have 4 legs."
  },
  {
    id: 167, topic: "Logic", difficulty: "medium",
    question: "Amy, Ben, and Carl each have a different pet: a cat, a dog, or a fish.\nAmy does NOT have the fish. Ben has the dog. Which pet does Amy have?",
    options: ["Dog", "Fish", "Cat", "Can't tell"],
    answer: 2,
    explanation: "Ben has the dog. Amy doesn't have the fish. So Amy must have the cat, and Carl gets the fish."
  },
  {
    id: 168, topic: "Logic", difficulty: "easy",
    question: "There are 5 children in a line. Lily is 2nd. Sam is right behind Lily. What position is Sam?",
    options: ["1st", "3rd", "4th", "5th"],
    answer: 1,
    explanation: "Right behind the 2nd position is the 3rd position."
  },
  {
    id: 169, topic: "Logic", difficulty: "easy",
    question: "Tom is taller than Jake. Jake is taller than Leo. Who is the TALLEST?",
    options: ["Tom", "Jake", "Leo", "They are all the same"],
    answer: 0,
    explanation: "Tom > Jake > Leo, so Tom is the tallest."
  },
  {
    id: 170, topic: "Logic", difficulty: "medium",
    question: "In a bag: 3 red balls and 2 blue balls. Without looking, you take one ball. Which color are you MORE LIKELY to get?",
    options: ["Red", "Blue", "Equal chance", "Can't tell"],
    answer: 0,
    explanation: "There are more red balls (3) than blue balls (2), so red is more likely."
  },
  {
    id: 171, topic: "Logic", difficulty: "medium",
    question: "Nina has a bag of fruit: 4 apples, 2 oranges, and 1 banana. If she picks one without looking, what is she LEAST likely to pick?",
    options: ["Apple", "Orange", "Banana", "Equal chance"],
    answer: 2,
    explanation: "There is only 1 banana compared to 4 apples and 2 oranges, so banana is least likely."
  },
  {
    id: 172, topic: "Logic", difficulty: "hard",
    question: "I am thinking of a number. It is more than 5, less than 10, even, and greater than 6. What is the number?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "Numbers between 5 and 10: 6,7,8,9. Even ones: 6,8. Greater than 6: only 8 fits!"
  },
  {
    id: 173, topic: "Logic", difficulty: "medium",
    question: "Three friends stand in a row: Ann, Bob, and Cole.\nAnn is NOT first. Cole is last. Who is first?",
    options: ["Ann", "Bob", "Cole", "Can't tell"],
    answer: 1,
    explanation: "Cole is last (3rd). Ann is not first. The only one left for first is Bob."
  },
  {
    id: 174, topic: "Logic", difficulty: "medium",
    question: "Eva, Finn, and Gina ran a race. Eva came before Gina. Finn came after Eva but before Gina. What order did they finish?",
    options: ["Eva, Finn, Gina", "Finn, Eva, Gina", "Eva, Gina, Finn", "Gina, Eva, Finn"],
    answer: 0,
    explanation: "Eva came first. Finn came after Eva but before Gina. So: Eva, Finn, Gina."
  },
  {
    id: 175, topic: "Logic", difficulty: "medium",
    question: "There are red, blue, and green blocks.\nMore red than blue. Fewer green than blue.\nWhich color has the MOST blocks?",
    options: ["Red", "Blue", "Green", "They are all the same"],
    answer: 0,
    explanation: "Red > Blue > Green. Red has the most blocks."
  },
  {
    id: 176, topic: "Logic", difficulty: "easy",
    question: "A number is subtracted from 10 to get 6.   10 − ___ = 6   What is the number?",
    options: ["4", "16", "6", "3"],
    answer: 0,
    explanation: "10 − 4 = 6. The missing number is 4."
  },
  {
    id: 177, topic: "Logic", difficulty: "medium",
    question: "Six children share 18 cookies equally. How many cookies does each child get?",
    options: ["2", "3", "4", "12"],
    answer: 1,
    explanation: "18 ÷ 6 = 3 cookies each."
  },
  {
    id: 178, topic: "Logic", difficulty: "medium",
    question: "Kate has more stickers than Tom. Tom has more stickers than Dan. Dan has more than Kim. Who has the FEWEST stickers?",
    options: ["Kate", "Tom", "Dan", "Kim"],
    answer: 3,
    explanation: "Kate > Tom > Dan > Kim. Kim has the fewest stickers."
  },
  {
    id: 179, topic: "Logic", difficulty: "medium",
    question: "For every 2 apples, there is 1 orange. If there are 8 apples, how many oranges are there?",
    options: ["2", "3", "4", "16"],
    answer: 2,
    explanation: "For every 2 apples → 1 orange. 8 apples ÷ 2 = 4 oranges."
  },
  {
    id: 180, topic: "Logic", difficulty: "medium",
    question: "I have 3 coins. Each coin is worth 5 cents. How much money do I have in total?",
    options: ["8 cents", "10 cents", "15 cents", "35 cents"],
    answer: 2,
    explanation: "3 × 5 cents = 15 cents."
  },
  {
    id: 181, topic: "Logic", difficulty: "medium",
    question: "Tim read 4 books in January and 3 books in February. He wants to read 10 books total by March. How many books does he need to read in March?",
    options: ["2", "3", "4", "7"],
    answer: 1,
    explanation: "4 + 3 = 7 books read so far. 10 − 7 = 3 more books needed in March."
  },
  {
    id: 182, topic: "Logic", difficulty: "easy",
    question: "There are 9 birds on a fence. Some fly away and 4 are left. How many flew away?",
    options: ["4", "5", "13", "3"],
    answer: 1,
    explanation: "9 − ? = 4, so ? = 5 birds flew away."
  },
  {
    id: 183, topic: "Logic", difficulty: "hard",
    question: "If you DOUBLE 7 and then SUBTRACT 4, what do you get?",
    options: ["10", "11", "14", "18"],
    answer: 0,
    explanation: "Double 7 = 14. Then 14 − 4 = 10."
  },
  {
    id: 184, topic: "Logic", difficulty: "medium",
    question: "A teacher has 24 pencils. She gives the same number to each of 6 students. How many does each student get?",
    options: ["3", "4", "18", "30"],
    answer: 1,
    explanation: "24 ÷ 6 = 4 pencils each."
  },
  {
    id: 185, topic: "Logic", difficulty: "hard",
    question: "The number of legs on 2 dogs plus the number of legs on 1 bird equals ___",
    options: ["6", "9", "10", "12"],
    answer: 2,
    explanation: "2 dogs × 4 legs = 8 legs. 1 bird × 2 legs = 2 legs. 8 + 2 = 10 legs."
  },

  // ── WORD PROBLEMS (15 questions) ────────────────────────────────────────

  {
    id: 186, topic: "Word Problems", difficulty: "easy",
    question: "A toy car costs $8 and a toy train costs $12. How much do they cost together?",
    options: ["$4", "$18", "$20", "$22"],
    answer: 2,
    explanation: "$8 + $12 = $20."
  },
  {
    id: 187, topic: "Word Problems", difficulty: "easy",
    question: "A garden has 15 flowers. 7 are red and the rest are yellow. How many yellow flowers are there?",
    options: ["7", "8", "9", "22"],
    answer: 1,
    explanation: "15 − 7 = 8 yellow flowers."
  },
  {
    id: 188, topic: "Word Problems", difficulty: "medium",
    question: "Each table in a classroom has 4 chairs. There are 5 tables. How many chairs are there in total?",
    options: ["9", "16", "20", "24"],
    answer: 2,
    explanation: "5 tables × 4 chairs each = 20 chairs. (4+4+4+4+4 = 20)"
  },
  {
    id: 189, topic: "Word Problems", difficulty: "hard",
    question: "Mom buys a bag of 20 oranges. The family eats 3 oranges each day. How many oranges are left after 4 days?",
    options: ["8", "12", "15", "17"],
    answer: 0,
    explanation: "3 oranges/day × 4 days = 12 oranges eaten. 20 − 12 = 8 oranges left."
  },
  {
    id: 190, topic: "Word Problems", difficulty: "hard",
    question: "Sara has $15. She spends $7 on a book and $4 on a snack. How much money does Sara have left?",
    options: ["$3", "$4", "$6", "$11"],
    answer: 1,
    explanation: "$15 − $7 = $8. Then $8 − $4 = $4 left."
  },
  {
    id: 191, topic: "Word Problems", difficulty: "easy",
    question: "A farmer has 3 cows, 5 pigs, and 8 chickens. How many animals does the farmer have altogether?",
    options: ["13", "15", "16", "18"],
    answer: 2,
    explanation: "3 + 5 + 8 = 16 animals."
  },
  {
    id: 192, topic: "Word Problems", difficulty: "medium",
    question: "Jake baked 24 cupcakes. He put 6 on each tray. How many trays did he need?",
    options: ["3", "4", "5", "18"],
    answer: 1,
    explanation: "24 ÷ 6 = 4 trays."
  },
  {
    id: 193, topic: "Word Problems", difficulty: "easy",
    question: "A class has 13 girls and 11 boys. How many students are in the class?",
    options: ["2", "22", "24", "26"],
    answer: 2,
    explanation: "13 + 11 = 24 students."
  },
  {
    id: 194, topic: "Word Problems", difficulty: "medium",
    question: "Ana has 25 cents. A candy costs 10 cents. How many candies can she buy?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "25 ÷ 10 = 2 with 5 cents remaining. She can buy 2 candies."
  },
  {
    id: 195, topic: "Word Problems", difficulty: "hard",
    question: "A bookshelf has 3 shelves with 8 books each. The teacher removes 5 books from the top shelf. How many books are on the bookshelf now?",
    options: ["19", "20", "24", "29"],
    answer: 0,
    explanation: "Total books = 3 × 8 = 24. After removing 5: 24 − 5 = 19 books."
  },
  {
    id: 196, topic: "Word Problems", difficulty: "medium",
    question: "There are 4 boxes. Each box has 5 balls inside. How many balls are there in total?",
    options: ["9", "15", "20", "45"],
    answer: 2,
    explanation: "4 × 5 = 20 balls. (5+5+5+5 = 20)"
  },
  {
    id: 197, topic: "Word Problems", difficulty: "hard",
    question: "Lily has 18 stickers. She gives each of her 3 friends 5 stickers. How many stickers does Lily keep for herself?",
    options: ["2", "3", "5", "15"],
    answer: 1,
    explanation: "3 friends × 5 stickers = 15 given away. 18 − 15 = 3 stickers for Lily."
  },
  {
    id: 198, topic: "Word Problems", difficulty: "hard",
    question: "A train has 6 cars. Each car can hold 10 passengers. The train is carrying 47 people. How many empty seats are there?",
    options: ["13", "15", "17", "53"],
    answer: 0,
    explanation: "Total seats = 6 × 10 = 60. Empty seats = 60 − 47 = 13."
  },
  {
    id: 199, topic: "Word Problems", difficulty: "medium",
    question: "It takes 5 minutes to walk 1 block. How long does it take to walk 6 blocks?",
    options: ["11 min", "20 min", "25 min", "30 min"],
    answer: 3,
    explanation: "5 minutes × 6 blocks = 30 minutes."
  },
  {
    id: 200, topic: "Word Problems", difficulty: "hard",
    question: "A farmer plants seeds in 5 rows with 6 seeds in each row. After planting, 3 seeds do not grow. How many plants does he have?",
    options: ["25", "27", "28", "30"],
    answer: 1,
    explanation: "Total seeds = 5 × 6 = 30. Plants = 30 − 3 = 27."
  }

];
