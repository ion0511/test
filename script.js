// 7문항 데이터 정의 (각 선택지는 wood, fire, metal, water 속성 부여)
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

// 기숙사별 상세 정보 및 기숙사장 데이터 매칭
const houseDetails = {
    wood: {
        name: "청룡관 (靑龍館)",
        element: "목(木) · 바람과 식물",
        desc: "창의와 성장의 명가. 유연하고 기발하며, 생명력과 변화를 중시하는 학생들이 모이는 곳입니다.",
        masterName: "재희 기숙사장",
        quote: "\"바람이 머무는 곳, 성장의 한계는 없다. 청룡관에 온 걸 환영해.\"",
        cssKey: "청룡"
    },
    fire: {
        name: "주작관 (朱雀館)",
        element: "화(火) · 불과 빛",
        desc: "열정과 예지의 명가. 용맹하고 정열적이며, 찰나의 직관과 뜨거운 도전 정신을 갖춘 학생들이 모이는 곳입니다.",
        masterName: "시온 기숙사장",
        quote: "\"불꽃은 스스로 타오르는 법이지. 네 안에 숨겨진 열정을 태워봐.\"",
        cssKey: "주작"
    },
    metal: {
        name: "백호관 (白虎館)",
        element: "금(金) · 번개와 쇠",
        desc: "강직과 규율의 명가. 정의롭고 명예를 중시하며, 흔들리지 않는 단단한 결단력을 가진 학생들이 모이는 곳입니다.",
        masterName: "유우시 기숙사장",
        quote: "\"규율은 단단함을 만들고, 단단함은 우리를 지킨다. 길을 잃지 마.\"",
        cssKey: "백호"
    },
    water: {
        name: "현무관 (玄武館)",
        element: "수(水) · 얼음과 암석",
        desc: "지혜와 침묵의 명가. 냉철하고 차분하며, 고대의 은밀한 지식과 깊은 진리를 탐구하는 학생들이 모이는 곳입니다.",
        masterName: "리쿠 기숙사장",
        quote: "\"물은 소리 없이 깊어지지. 진실을 찾는 법을 함께 배워보자.\"",
        cssKey: "현무"
    }
};

// 점수 저장 객체
let scores = { wood: 0, fire: 0, metal: 0, water: 0 };
let currentIdx = 0;

// DOM 요소 선택
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const currentQSpan = document.getElementById('current-q');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');

// 시작 버튼 이벤트
startBtn.addEventListener('click', () => {
    introScreen.classList.remove('active');
    testScreen.classList.add('active');
    loadQuestion();
});

// 질문 로드 함수
function loadQuestion() {
    const qData = questions[currentIdx];
    currentQSpan.textContent = currentIdx + 1;
    questionText.textContent = qData.q;
    progressFill.style.width = `${((currentIdx + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = '';
    qData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleAnswer(opt.type));
        optionsContainer.appendChild(btn);
    });
}

// 답변 선택 시 처리
function handleAnswer(type) {
    scores[type]++;
    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        showLoading();
    }
}

// 결과 분석 로딩 연출
function showLoading() {
    testScreen.classList.remove('active');
    loadingScreen.classList.add('active');

    setTimeout(() => {
        loadingScreen.classList.remove('active');
        showResult();
    }, 1500); // 1.5초 후 결과 출력
}

// 최종 결과 도출 및 화면 렌더링
function showResult() {
    resultScreen.classList.add('active');

    // 가장 높은 점수를 받은 속성 판별
    let highestType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let result = houseDetails[highestType];

    // 결과 텍스트 매핑
    document.getElementById('result-house-name').textContent = result.name;
    document.getElementById('result-element').textContent = result.element;
    document.getElementById('result-desc').textContent = result.desc;
    document.getElementById('master-name').textContent = result.masterName;
    document.getElementById('master-quote').textContent = result.quote;

    // 기숙사별 이미지 크롭 클래스 적용
    const cropDiv = document.getElementById('house-img-crop');
    cropDiv.className = `house-crop ${result.cssKey}`;
}

// 다시 하기 버튼
restartBtn.addEventListener('click', () => {
    scores = { wood: 0, fire: 0, metal: 0, water: 0 };
    currentIdx = 0;
    resultScreen.classList.remove('active');
    introScreen.classList.add('active');
});