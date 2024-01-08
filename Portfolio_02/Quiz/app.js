const quiz = [
  {
    question: 'ビールは漢字で書くと、次のうちどれ？',
    imagePath: "Portfolio_02/images/asakusa.jpg",
    answers: ['麦酒', '麦芽', '泡酒', '苦酒'],
    correct: '麦酒'
  },

  {
    question: '世界には何種類以上のビールがあるか',
    answers: ['30種類以上', '50種類以上', '70種類以上', '100種類以上'],
    correct: '100種類以上'
  },

  {
    question: 'ビールの苦味は何の成分から由来するものか',
    answers: ['大麦', 'ホップ', 'とうもろこし', '米'],
    correct: 'ホップ'
  },

  {
    question: '日本で一番売れているビールは、次のうちどれ？',
    answers: ['キリンラガービール', 'サントリーザ・プレミアムモルツ', 
              'アサヒスーパードライ', 'エビスビール'],
    correct: 'アサヒスーパードライ'
  },

  {
    question: '昭和30年代、日本のビール消費量が伸びるきっかけになったあるものとは何か',
    answers: ['ビアガーデン', '電気冷蔵庫', 'スポーツ観戦', 'CM'],
    correct: '電気冷蔵庫'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

// const question = 'ビールは漢字で書くと、次のうちどれ？';
// const answers = ['麦酒', '麦芽', '泡酒', '苦酒'];
// const correct = '麦酒';


const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;
// クイズの問題↓　選択肢を定義
const setupQuiz = () => {
document.getElementById('js-question').textContent =  quiz[quizIndex].question;
// console.log(document.getElementById('js-question').textContent);
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];
let buttonIndex = 0;
while(buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
    }
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうこな帰ればこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
  }

};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// ボタンをクリックしたら正誤判定
// $button[0].addEventListener('click', (e) => {
//   clickHandler();
// });

// $button[1].addEventListener('click', (e) => {
//   clickHandler();
// });

// $button[2].addEventListener('click', (e) => {
//   clickHandler();
// });

// $button[3].addEventListener('click', (e) => {
//   clickHandler();
// });