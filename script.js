const questions = [
    {
        q: "천선원으로 향하는 비밀 입구 앞, 어떤 방법으로 결계를 해제하고 진입하시겠습니까?",
        options: [
            { text: "자연스럽게 기운을 맞추며, 결계의 결을 따라 부드럽게 넘어간다.", type: "wood" },
            { text: "망설임 없이 기운을 강하게 불어넣어 한번에 결계를 열어젖힌다.", type: "fire" },
            { text: "정해진 수인을 정확하게 맺으며 원칙과 절차대로 차분히 해제한다.", type: "metal" },
            { text: "결계에 새겨진 고대 문자나 규칙을 유심히 살펴보고 해법을 찾는다.", type: "water" }
        ]
    },
    {
        q: "드디어 학교에 도착했습니다. 가장 먼저 둘러보고 싶은 장소는 어디인가요?",
        options: [
            { text: "희귀한 영물과 신비한 약초들이 자라는 탁 트인 정원", type: "wood" },
            { text: "붉은 연단 화로가 불타오르는 활기찬 연단실", type: "fire" },
            { text: "단단한 주술 도구와 수련용 검들이 정갈하게 정리된 무도장", type: "metal" },
            { text: "고서적이 가득하고 고요한 기운이 감도는 지하 서고", type: "water" }
        ]
    },
    {
        q: "수업 중 복잡한 신법(도술)을 배우는데 잘 풀리지 않습니다. 당신의 대처법은?",
        options: [
            { text: "\"다른 방식으로 시도해볼까?\" 유연하게 여러 아이디어를 시도해본다.", type: "wood" },
            { text: "\"될 때까지 한다!\" 열정을 가지고 계속 몸으로 부딪혀본다.", type: "fire" },
            { text: "교재에 적힌 정석 동작과 순서를 한 단계씩 다시 점검한다.", type: "metal" },
            { text: "원리를 먼저 이해하기 위해 도술의 메커니즘을 깊이 분석한다.", type: "water" }
        ]
    },
    {
        q: "입학 선물로 단 하나의 신비한 법구(도구)를 받을 수 있다면?",
        options: [
            { text: "바람을 일으켜 어디든 자유롭게 이동할 수 있는 비행 부채", type: "wood" },
            { text: "어둠 속에서도 강렬한 빛과 불꽃을 내뿜는 보석", type: "fire" },
            { text: "어떤 부정적인 기운도 단칼에 막아내는 은빛 방어 인장", type: "metal" },
            { text: "세상을 관찰하고 숨겨진 진실을 보여주는 고대 거울", type: "water" }
        ]
    },
    {
        q: "팀 과제 중 의견이 갈려 팀원 간에 갈등이 생겼습니다. 당신의 역할은?",
        options: [
            { text: "양쪽의 의견을 유연하게 조율하며 기분 좋게 합의점을 찾는다.", type: "wood" },
            { text: "명확하고 시원시원하게 방향을 제시해 빠르게 결정을 내린다.", type: "fire" },
            { text: "과제의 규칙과 공정한 기준을 제시하여 중심을 잡아준다.", type: "metal" },
            { text: "조용히 각 의견의 장단점을 정리하여 합리적인 대안을 제시한다.", type: "water" }
        ]
    },
    {
        q: "시험 기간입니다. 당신만의 공부 스타일은 어떤가요?",
        options: [
            { text: "친구들과 서로 물어보고 토론하며 흥미롭게 공부한다.", type: "wood" },
            { text: "단기간에 몰입해서 집중적으로 단숨에 끝낸다.", type: "fire" },
            { text: "플래너를 짜서 매일 정해진 분량을 계획대로 공부한다.", type: "metal" },
            { text: "혼자 고요한 곳에서 깊이 있게 개념을 탐구하며 공부한다.", type: "water" }
        ]
    },
    {
        q: "천선원에서 당신이 궁극적으로 얻고 싶은 가치는 무엇인가요?",
        options: [
            { text: "끊임없이 성장하고 자유롭게 세상을 탐험하는 경험", type: "wood" },
            { text: "내 열정을 마음껏 펼치고 세상을 바꾸는 영향력", type: "fire" },
            { text: "옳고 그름을 분별하고 세상을 지키는 단단한 소신과 힘", type: "metal" },
            { text: "세상의 모든 원리를 깨닫고 깊은 지혜를 갖추는 것", type: "water" }
        ]
    }
];

const houseDetails = {
    wood: {
        name: "청룡관 (靑龍館)",
        element: "목(木) · 바람과 식물",
        desc: "창의와 성장의 명가. 유연하고 기발하며, 생명력과 변화를 중시하는 학생들이 모이는 곳입니다.",
        masterName: "재희",
        quote: "\"바람이 머무는 곳, 성장의 한계는 없다. 청룡관에 온 걸 환영해.\"",
        imgSrc: "cheongryong.jpg",
        slogan: "“바람을 타고, 끝없이 성장하라”",
        curriculum: "• 영물 교감학: 동방의 신비로운 영물들과 교감하고 마음을 나누는 법.\n• 풍수지리와 비행술: 바람의 기류를 읽고 하늘을 자유롭게 활주하는 도술.",
        secret: "밤마다 온실에서 들리는 정체불명의 피리 소리의 정체는 과연 무엇일까?"
    },
    fire: {
        name: "주작관 (朱雀館)",
        element: "화(火) · 불과 빛",
        desc: "열정과 예지의 명가. 용맹하고 정열적이며, 찰나의 직관과 뜨거운 도전 정신을 갖춘 학생들이 모이는 곳입니다.",
        masterName: "시온",
        quote: "\"불꽃은 스스로 타오르는 법이지. 네 안에 숨겨진 열정을 태워봐.\"",
        imgSrc: "jujak.jpg",
        slogan: "“뜨겁게 타오르고, 세상을 밝혀라”",
        curriculum: "• 련단술(약제·단약 제작): 불의 온도를 미세하게 조절해 신비로운 영단을 빚는 법.\n• 화염 환술: 찰나의 직관으로 화려한 불꽃과 환영을 다루는 도술.",
        secret: "매주 연단실 화로가 폭발할 뻔한 진짜 범인은 사실 따로 있다는데…?"
    },
    metal: {
        name: "백호관 (白虎館)",
        element: "금(金) · 번개와 쇠",
        desc: "강직과 규율의 명가. 정의롭고 명예를 중시하며, 흔들리지 않는 단단한 결단력을 가진 학생들이 모이는 곳입니다.",
        masterName: "유우시",
        quote: "\"규율은 단단함을 만들고, 단단함은 우리를 지킨다. 길을 잃지 마.\"",
        imgSrc: "baekho.jpg",
        slogan: "“규율은 단단하게, 검은 흔들림 없이”",
        curriculum: "• 법구 제작 및 주조: 번개와 쇠의 기운을 다루어 악귀를 막는 도구를 만드는 법.\n• 액막이 퇴마술: 사악한 기운을 단칼에 제압하는 실전 결계 전투술.",
        secret: "지하 무기고 깊은 곳, 봉인된 은빛 검이 밤마다 울부짖는 이유는 무엇인가."
    },
    water: {
        name: "현무관 (玄武館)",
        element: "수(水) · 얼음과 암석",
        desc: "냉철하고 지혜를 탐구하는 은밀한 서고 같은 공간. 학교 설립의 비밀이 담긴 고대 비석이 숨겨져 있습니다.",
        masterName: "리쿠",
        quote: "\"물은 소리 없이 깊어지지. 진실을 찾는 법을 함께 배워보자.\"",
        imgSrc: "hyeonmu.jpg",
        slogan: "“고요함 속에 진실을 꿰뚫어라”",
        curriculum: "• 고대 문자 해석: 상고시대의 잊혀진 문자를 해독하여 숨겨진 주술을 밝히는 법.\n• 음양오행 심화 이론: 세상의 이치와 수기(水氣)의 흐름을 극한까지 분석하는 학문.",
        secret: "지하 서고 끝, 달빛이 비칠 때만 나타나는 비석의 숨겨진 문구에 담긴 진실은?"
    }
};

let scores = { wood: 0, fire: 0, metal: 0, water: 0 };
let currentIdx = 0;
let currentHouseKey = 'wood';

const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const guideScreen = document.getElementById('guide-screen');

const startBtn = document.getElementById('start-btn');
const guideBtn = document.getElementById('guide-btn');
const restartFromGuideBtn = document.getElementById('restart-from-guide-btn');

const currentQSpan = document.getElementById('current-q');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');

startBtn.addEventListener('click', () => {
    introScreen.classList.remove('active');
    testScreen.classList.add('active');
    loadQuestion();
});

// 배열을 무작위로 섞는 헬퍼 함수 (선택지 랜덤 배치용)
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadQuestion() {
    const qData = questions[currentIdx];
    currentQSpan.textContent = currentIdx + 1;
    questionText.textContent = qData.q;
    progressFill.style.width = `${((currentIdx + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = '';
    
    // 질문마다 선택지 순서가 매번 랜덤하게 섞이도록 처리
    const shuffledOptions = shuffleArray(qData.options);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleAnswer(opt.type));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(type) {
    scores[type]++;
    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    testScreen.classList.remove('active');
    loadingScreen.classList.add('active');

    setTimeout(() => {
        loadingScreen.classList.remove('active');
        showResult();
    }, 1500);
}

function showResult() {
    resultScreen.classList.add('active');

    currentHouseKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let result = houseDetails[currentHouseKey];

    document.getElementById('result-house-name').textContent = result.name;
    document.getElementById('result-element').textContent = result.element;
    document.getElementById('result-desc').textContent = result.desc;
    document.getElementById('master-name').textContent = result.masterName;
    document.getElementById('master-quote').textContent = result.quote;
    
    // 기숙사별 개별 이미지 매핑 오류 수정
    document.getElementById('house-img').src = result.imgSrc;
}

// 생활 안내서 보러 가기 버튼 이벤트 정상 바인딩
guideBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    guideScreen.classList.add('active');

    let result = houseDetails[currentHouseKey];
    document.getElementById('guide-house-title').textContent = `${result.name} 생활 안내서`;
    document.getElementById('guide-slogan').textContent = result.slogan;
    document.getElementById('guide-curriculum').style.whiteSpace = "pre-line";
    document.getElementById('guide-curriculum').textContent = result.curriculum;
    document.getElementById('guide-secret').textContent = result.secret;
});

// 처음으로 돌아가기 버튼
restartFromGuideBtn.addEventListener('click', () => {
    scores = { wood: 0, fire: 0, metal: 0, water: 0 };
    currentIdx = 0;
    guideScreen.classList.remove('active');
    introScreen.classList.add('active');
});
