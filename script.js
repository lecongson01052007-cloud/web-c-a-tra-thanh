const topics = [
  {
    title: "Ứng dụng đạo hàm khảo sát hàm số",
    shortTitle: "Đạo hàm & khảo sát hàm số",
    description: "Dùng đạo hàm để đọc chiều biến thiên, tìm cực trị và nhận diện dáng điệu đồ thị trước khi phác họa.",
    goals: ["Tính đạo hàm chính xác", "Lập bảng biến thiên", "Nhận biết cực trị & tiệm cận"],
    formulas: [
      ["Quy tắc lũy thừa", "(xⁿ)′ = n·xⁿ⁻¹"],
      ["Quy tắc tích", "(u·v)′ = u′v + uv′"],
      ["Quy tắc thương", "(u/v)′ = (u′v − uv′)/v²"],
      ["Tiếp tuyến tại x₀", "y = f′(x₀)(x − x₀) + f(x₀)"],
      ["Đơn điệu", "f′(x) > 0: đồng biến; f′(x) < 0: nghịch biến"],
      ["Cực trị", "f′ đổi dấu khi qua x₀ ⇒ f có cực trị tại x₀"]
    ],
    questions: [
      {
        prompt: "Đạo hàm của hàm số f(x) = x³ − 3x là biểu thức nào?",
        options: ["f′(x) = 3x² − 3", "f′(x) = x² − 3", "f′(x) = 3x² + 3", "f′(x) = x³ − 3"],
        answer: 0,
        explanation: "Áp dụng (xⁿ)′ = n·xⁿ⁻¹ và đạo hàm của hằng số bằng 0."
      },
      {
        prompt: "Hàm số f(x) = x³ − 3x đồng biến trên những khoảng nào?",
        options: ["(−1; 1)", "(−∞; −1) và (1; +∞)", "R", "(−∞; 1)"],
        answer: 1,
        explanation: "f′(x) = 3(x − 1)(x + 1); đạo hàm dương khi x < −1 hoặc x > 1."
      }
    ]
  },
  {
    title: "Vectơ và hệ tọa độ trong không gian",
    shortTitle: "Vectơ trong không gian",
    description: "Biểu diễn điểm và vectơ bằng tọa độ để tính độ dài, tích vô hướng và góc trong không gian Oxyz.",
    goals: ["Đọc tọa độ điểm, vectơ", "Tính độ dài & tích vô hướng", "Xác định góc giữa hai vectơ"],
    formulas: [
      ["Tọa độ vectơ AB", "A(x₁,y₁,z₁), B(x₂,y₂,z₂) ⇒ AB = (x₂−x₁, y₂−y₁, z₂−z₁)"],
      ["Độ dài vectơ", "‖u‖ = √(u₁² + u₂² + u₃²)"],
      ["Tích vô hướng", "u·v = u₁v₁ + u₂v₂ + u₃v₃"],
      ["Góc giữa hai vectơ", "cos θ = (u·v)/(‖u‖‖v‖)"],
      ["Trung điểm AB", "M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)"],
      ["Hai vectơ vuông góc", "u ⟂ v ⇔ u·v = 0"]
    ],
    questions: [
      {
        prompt: "Cho A(1; 2; −1), B(3; 0; 2). Tọa độ vectơ AB là gì?",
        options: ["(4; 2; 1)", "(2; −2; 3)", "(−2; 2; −3)", "(2; 2; 3)"],
        answer: 1,
        explanation: "Lấy tọa độ B trừ tọa độ A theo từng thành phần: (3−1; 0−2; 2−(−1))."
      },
      {
        prompt: "Độ dài của vectơ u = (1; −2; 2) bằng bao nhiêu?",
        options: ["3", "5", "√7", "9"],
        answer: 0,
        explanation: "‖u‖ = √(1² + (−2)² + 2²) = √9 = 3."
      }
    ]
  },
  {
    title: "Thống kê mẫu số liệu ghép nhóm",
    shortTitle: "Thống kê & số liệu ghép nhóm",
    description: "Tóm tắt dữ liệu ghép nhóm bằng số trung bình, phương sai và độ lệch chuẩn để so sánh mức độ phân tán.",
    goals: ["Tính số đặc trưng mẫu", "Đọc bảng tần số", "Diễn giải mức độ phân tán"],
    formulas: [
      ["Giá trị đại diện", "xᵢ = (đầu mút trái + đầu mút phải)/2"],
      ["Số trung bình", "x̄ = (Σ nᵢxᵢ)/N, với N = Σ nᵢ"],
      ["Phương sai", "s² = (Σ nᵢ(xᵢ − x̄)²)/N"],
      ["Công thức rút gọn", "s² = (Σ nᵢxᵢ²)/N − x̄²"],
      ["Độ lệch chuẩn", "s = √s²"],
      ["Khoảng biến thiên", "R = giá trị lớn nhất − giá trị nhỏ nhất"]
    ],
    questions: [
      {
        prompt: "Hai nhóm có giá trị đại diện 5 và 15, tần số lần lượt 2 và 6. Số trung bình mẫu là bao nhiêu?",
        options: ["10", "12,5", "13", "15"],
        answer: 1,
        explanation: "x̄ = (2·5 + 6·15)/(2+6) = 100/8 = 12,5."
      },
      {
        prompt: "Độ lệch chuẩn của một mẫu số liệu được tính bằng công thức nào?",
        options: ["s = s²", "s = 1/s²", "s = √s²", "s = (s²)²"],
        answer: 2,
        explanation: "Độ lệch chuẩn là căn bậc hai không âm của phương sai."
      }
    ]
  },
  {
    title: "Nguyên hàm và tích phân",
    shortTitle: "Nguyên hàm & tích phân",
    description: "Từ nguyên hàm đến tích phân xác định: vận dụng các quy tắc tính và diễn giải tích phân qua diện tích.",
    goals: ["Nhận dạng nguyên hàm cơ bản", "Tính tích phân xác định", "Tính diện tích hình phẳng"],
    formulas: [
      ["Nguyên hàm lũy thừa", "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1"],
      ["Nguyên hàm 1/x", "∫(1/x) dx = ln|x| + C"],
      ["Tính tuyến tính", "∫(af + bg)dx = a∫f dx + b∫g dx"],
      ["Newton–Leibniz", "∫ₐᵇ f(x)dx = F(b) − F(a), F′ = f"],
      ["Diện tích giữa đồ thị", "S = ∫ₐᵇ |f(x) − g(x)| dx"],
      ["Diện tích với trục Ox", "Nếu f(x) ≥ 0: S = ∫ₐᵇ f(x) dx"]
    ],
    questions: [
      {
        prompt: "Giá trị của tích phân ∫₀² (2x + 1) dx bằng bao nhiêu?",
        options: ["4", "5", "6", "8"],
        answer: 2,
        explanation: "Một nguyên hàm là F(x)=x²+x. Do đó F(2)−F(0)=6."
      },
      {
        prompt: "Một nguyên hàm của f(x) = 3x² là hàm số nào?",
        options: ["x³ + C", "6x + C", "3x³ + C", "x² + C"],
        answer: 0,
        explanation: "Vì (x³)′ = 3x² nên họ nguyên hàm là x³ + C."
      }
    ]
  },
  {
    title: "Phương trình trong không gian Oxyz",
    shortTitle: "Đường thẳng, mặt phẳng, mặt cầu",
    description: "Dùng vectơ chỉ phương, vectơ pháp tuyến và tọa độ tâm để viết phương trình các đối tượng hình học không gian.",
    goals: ["Viết phương trình mặt phẳng", "Nhận dạng đường thẳng", "Lập phương trình mặt cầu"],
    formulas: [
      ["Mặt phẳng qua M₀", "A(x−x₀) + B(y−y₀) + C(z−z₀) = 0"],
      ["Vectơ pháp tuyến", "Mặt phẳng Ax+By+Cz+D=0 có n = (A;B;C)"],
      ["Đường thẳng qua M₀", "x=x₀+at; y=y₀+bt; z=z₀+ct"],
      ["Vectơ chỉ phương", "Đường thẳng có vectơ chỉ phương u = (a;b;c)"],
      ["Mặt cầu tâm I", "(x−a)² + (y−b)² + (z−c)² = R²"],
      ["Khoảng cách điểm–mặt phẳng", "d(M,(P)) = |Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)"]
    ],
    questions: [
      {
        prompt: "Vectơ nào là một vectơ pháp tuyến của mặt phẳng 2x − y + 3z − 4 = 0?",
        options: ["(2; −1; 3)", "(2; 1; −3)", "(0; 0; 1)", "(1; 2; 3)"],
        answer: 0,
        explanation: "Các hệ số của x, y, z trong phương trình mặt phẳng tạo thành vectơ pháp tuyến."
      },
      {
        prompt: "Mặt cầu tâm I(1; −2; 0), bán kính R=3 có phương trình nào?",
        options: ["(x−1)²+(y+2)²+z²=9", "(x+1)²+(y−2)²+z²=3", "(x−1)²+(y−2)²+z²=9", "(x−1)²+(y+2)²+z²=3"],
        answer: 0,
        explanation: "Thay tọa độ tâm vào dạng chuẩn (x−a)²+(y−b)²+(z−c)²=R²."
      }
    ]
  },
  {
    title: "Xác suất có điều kiện",
    shortTitle: "Xác suất có điều kiện",
    description: "Mô hình hóa sự kiện phụ thuộc, tính xác suất khi đã biết một điều kiện và sử dụng công thức Bayes.",
    goals: ["Tính xác suất có điều kiện", "Nhận biết độc lập", "Vận dụng Bayes"],
    formulas: [
      ["Xác suất có điều kiện", "P(A|B) = P(A∩B)/P(B), P(B)>0"],
      ["Quy tắc nhân", "P(A∩B) = P(B)·P(A|B)"],
      ["Hai biến cố độc lập", "A, B độc lập ⇔ P(A∩B)=P(A)P(B)"],
      ["Công thức xác suất toàn phần", "P(A) = Σ P(Bᵢ)P(A|Bᵢ)"],
      ["Công thức Bayes", "P(Bⱼ|A) = P(Bⱼ)P(A|Bⱼ)/P(A)"],
      ["Biến cố đối", "P(A̅) = 1 − P(A)"]
    ],
    questions: [
      {
        prompt: "Nếu P(A∩B)=0,18 và P(B)=0,6 thì P(A|B) bằng bao nhiêu?",
        options: ["0,12", "0,3", "0,42", "0,78"],
        answer: 1,
        explanation: "Theo định nghĩa, P(A|B)=P(A∩B)/P(B)=0,18/0,6=0,3."
      },
      {
        prompt: "Nếu A và B độc lập, P(A)=0,4 và P(B)=0,5 thì P(A∩B) bằng bao nhiêu?",
        options: ["0,1", "0,2", "0,4", "0,9"],
        answer: 1,
        explanation: "Với hai biến cố độc lập, P(A∩B)=P(A)P(B)=0,4·0,5=0,2."
      }
    ]
  }
];

const topicList = document.querySelector("#topic-list");
const topicDetail = document.querySelector("#topic-detail");
const searchInput = document.querySelector("#topic-search");
const completedTopics = new Set(JSON.parse(localStorage.getItem("math12-reviewed") || "[]"));
let activeTopicIndex = 0;
let visibleTopicIndexes = topics.map((_, index) => index);

document.querySelector("#topic-count").textContent = String(topics.length).padStart(2, "0");
document.querySelector("#sidebar-count").textContent = String(topics.length).padStart(2, "0");
document.querySelector("#formula-count").textContent = String(topics.reduce((total, topic) => total + topic.formulas.length, 0));
updateProgress();
renderTopicList();
renderTopic(activeTopicIndex);

function updateProgress() {
  document.querySelector("#progress-count").textContent = `${completedTopics.size}/${topics.length}`;
}

function renderTopicList() {
  topicList.replaceChildren();

  if (visibleTopicIndexes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-search";
    empty.textContent = "Không tìm thấy chuyên đề phù hợp. Hãy thử từ khóa khác.";
    topicList.append(empty);
    return;
  }

  visibleTopicIndexes.forEach((topicIndex) => {
    const topic = topics[topicIndex];
    const button = document.createElement("button");
    button.className = "topic-button";
    button.type = "button";
    button.setAttribute("aria-current", String(topicIndex === activeTopicIndex));
    button.setAttribute("aria-label", `Chuyên đề ${topicIndex + 1}: ${topic.shortTitle}${completedTopics.has(topicIndex) ? ", đã ôn" : ""}`);
    button.innerHTML = `<span class="topic-number">${String(topicIndex + 1).padStart(2, "0")}</span><span class="topic-name"></span><span class="topic-chevron" aria-hidden="true">›</span>`;
    button.querySelector(".topic-name").textContent = topic.shortTitle + (completedTopics.has(topicIndex) ? " ✓" : "");
    button.addEventListener("click", () => renderTopic(topicIndex));
    topicList.append(button);
  });
}

function renderTopic(topicIndex) {
  activeTopicIndex = topicIndex;
  const topic = topics[topicIndex];
  const isReviewed = completedTopics.has(topicIndex);

  document.querySelectorAll(".topic-button").forEach((button) => {
    const buttonIndex = Number(button.querySelector(".topic-number").textContent) - 1;
    button.setAttribute("aria-current", String(buttonIndex === topicIndex));
  });

  const points = topic.goals.map((goal) => `<span class="learning-point"><span aria-hidden="true">✓</span>${escapeHtml(goal)}</span>`).join("");
  const formulas = topic.formulas.map(([name, expression]) => `
    <article class="formula-card">
      <span class="formula-name">${escapeHtml(name)}</span>
      <span class="formula-expression">${escapeHtml(expression)}</span>
    </article>`).join("");
  const questions = topic.questions.map((question, questionIndex) => renderQuestion(question, topicIndex, questionIndex)).join("");

  topicDetail.innerHTML = `
    <header class="topic-header">
      <div class="detail-heading">
        <p class="section-kicker">CHUYÊN ĐỀ ${String(topicIndex + 1).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")}</p>
        <h2>${escapeHtml(topic.title)}</h2>
        <p class="detail-description">${escapeHtml(topic.description)}</p>
      </div>
      <button class="review-button${isReviewed ? " is-done" : ""}" type="button" aria-pressed="${isReviewed}">
        <span class="review-check" aria-hidden="true">${isReviewed ? "✓" : "○"}</span>
        ${isReviewed ? "Đã ôn xong" : "Đánh dấu đã ôn"}
      </button>
    </header>
    <div class="learning-points">${points}</div>
    <section class="content-block" aria-labelledby="formula-heading">
      <div class="block-heading">
        <h3 id="formula-heading">Công thức trọng tâm</h3>
        <span class="block-label">${String(topic.formulas.length).padStart(2, "0")} CẦN NHỚ</span>
      </div>
      <div class="formula-grid">${formulas}</div>
    </section>
    <section class="practice-block" aria-labelledby="practice-heading">
      <div class="block-heading">
        <h3 id="practice-heading"><span class="practice-icon" aria-hidden="true">?</span> Tự kiểm tra</h3>
        <span class="block-label">CÂU HỎI TỰ BIÊN SOẠN</span>
      </div>
      <p class="practice-note">Câu hỏi tương tác dưới đây được biên soạn thêm theo chủ đề. Để làm bài tập nguyên văn trong SGK, mở PDF gốc tại đây:</p>
      <a class="source-exercise-link" href="sgk-toan12.pdf" target="_blank" rel="noopener">
        Mở bài tập trong sách giáo khoa PDF <span aria-hidden="true">↗</span>
      </a>
      <div class="question-list">${questions}</div>
    </section>
    <nav class="topic-navigation" aria-label="Chuyển chuyên đề">
      <button type="button" data-direction="-1" ${topicIndex === 0 ? "disabled" : ""}>← Chuyên đề trước</button>
      <span class="topic-position">${String(topicIndex + 1).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")}</span>
      <button type="button" data-direction="1" ${topicIndex === topics.length - 1 ? "disabled" : ""}>Chuyên đề tiếp →</button>
    </nav>`;

  topicDetail.querySelector(".review-button").addEventListener("click", toggleReviewed);
  topicDetail.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", handleAnswer);
  });
  topicDetail.querySelectorAll(".topic-navigation button").forEach((button) => {
    button.addEventListener("click", () => renderTopic(topicIndex + Number(button.dataset.direction)));
  });
}

function renderQuestion(question, topicIndex, questionIndex) {
  const options = question.options.map((option, optionIndex) => `
    <button class="answer-option" type="button" data-topic="${topicIndex}" data-question="${questionIndex}" data-option="${optionIndex}">
      <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
      <span>${escapeHtml(option)}</span>
    </button>`).join("");

  return `
    <article class="question-card">
      <p class="question-prompt">${questionIndex + 1}. ${escapeHtml(question.prompt)}</p>
      <div class="question-options">${options}</div>
      <p class="answer-feedback" aria-live="polite"></p>
    </article>`;
}

function handleAnswer(event) {
  const selected = event.currentTarget;
  const question = topics[Number(selected.dataset.topic)].questions[Number(selected.dataset.question)];
  const selectedOption = Number(selected.dataset.option);
  const questionCard = selected.closest(".question-card");
  const buttons = questionCard.querySelectorAll(".answer-option");
  const feedback = questionCard.querySelector(".answer-feedback");
  const isCorrect = selectedOption === question.answer;

  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.option) === question.answer) button.classList.add("is-correct");
  });
  if (!isCorrect) selected.classList.add("is-wrong");
  feedback.dataset.correct = String(isCorrect);
  feedback.textContent = `${isCorrect ? "Chính xác!" : "Chưa đúng."} ${question.explanation}`;
}

function toggleReviewed() {
  if (completedTopics.has(activeTopicIndex)) completedTopics.delete(activeTopicIndex);
  else completedTopics.add(activeTopicIndex);

  localStorage.setItem("math12-reviewed", JSON.stringify([...completedTopics]));
  updateProgress();
  renderTopicList();
  renderTopic(activeTopicIndex);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  visibleTopicIndexes = topics
    .map((topic, index) => ({ topic, index }))
    .filter(({ topic }) => `${topic.title} ${topic.shortTitle} ${topic.description} ${topic.formulas.flat().join(" ")}`.toLocaleLowerCase("vi").includes(query))
    .map(({ index }) => index);
  renderTopicList();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
    searchInput.blur();
  }
});
