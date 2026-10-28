import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Filter,
  Check
} from 'lucide-react';

export default function QuizArena({ quizBank, onBackToLessons }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [examMode, setExamMode] = useState(false); // false = Practice (instant feedback), true = Exam
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: selectedChoiceIndex }
  const [showExplanation, setShowExplanation] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  // Filter questions whenever category changes
  useEffect(() => {
    let list = quizBank;
    if (selectedCategory === 'part1') {
      list = quizBank.filter((q) => q.chapter === 1);
    } else if (selectedCategory === 'part2') {
      list = quizBank.filter((q) => q.chapter === 2);
    } else if (selectedCategory === 'part3') {
      list = quizBank.filter((q) => q.chapter === 3);
    } else if (selectedCategory === 'part4') {
      list = quizBank.filter((q) => q.chapter === 4);
    }
    setFilteredQuestions(list);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setIsExamSubmitted(false);
  }, [selectedCategory, quizBank]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const totalQuestions = filteredQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;

  const switchMode = (nextMode) => {
    if (nextMode === examMode) return;
    setExamMode(nextMode);
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsExamSubmitted(false);
  };

  const handleSelectOption = (index) => {
    if (examMode && isExamSubmitted) return; // Locked in exam mode after submit
    if (!examMode && userAnswers[currentQ.id] !== undefined) return; // Already answered in practice mode

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index
    }));

    if (!examMode) {
      setShowExplanation(true);
      if (index === currentQ.correctIndex) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#10b981', '#34d399', '#6ee7b7']
        });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(userAnswers[filteredQuestions[currentIndex + 1]?.id] !== undefined);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowExplanation(userAnswers[filteredQuestions[currentIndex - 1]?.id] !== undefined);
    }
  };

  const handleSubmitExam = () => {
    setIsExamSubmitted(true);
    // Calculate score
    let correctCount = 0;
    filteredQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) correctCount++;
    });

    const percent = Math.round((correctCount / totalQuestions) * 100);
    if (percent >= 70) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsExamSubmitted(false);
  };

  // Calculate stats
  let correctCount = 0;
  filteredQuestions.forEach((q) => {
    if (userAnswers[q.id] === q.correctIndex) correctCount++;
  });
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const countPart1 = quizBank.filter((q) => q.chapter === 1).length;
  const countPart2 = quizBank.filter((q) => q.chapter === 2).length;
  const countPart3 = quizBank.filter((q) => q.chapter === 3).length;
  const countPart4 = quizBank.filter((q) => q.chapter === 4).length;

  return (
    <div className="quiz-arena-layout">
      {/* Quiz Top Control Bar */}
      <div className="quiz-control-bar">
        <div className="quiz-bar-left">
          <button onClick={onBackToLessons} className="quiz-btn-nav" title="กลับไปหน้าบทเรียน">
            <BookOpen size={16} />
            <span>กลับสู่บทเรียน</span>
          </button>

          <div className="category-select-group">
            <Filter size={14} className="text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="quiz-category-select"
            >
              <option value="all">🌟 รวมทุกบทเรียน ({quizBank.length} ข้อ)</option>
              <option value="part1">📘 บทที่ 1: พื้นฐานภาษา JS ({countPart1} ข้อ)</option>
              <option value="part2">📗 บทที่ 2: DOM & Form Validation ({countPart2} ข้อ)</option>
              <option value="part3">📙 บทที่ 3: Advanced & Web APIs ({countPart3} ข้อ)</option>
              <option value="part4">🔥 พิเศษ: นอกเนื้อหาสไลด์ ({countPart4} ข้อ)</option>
            </select>
          </div>
        </div>

        <div className="quiz-bar-right">
          {/* Practice Mode vs Exam Mode Toggle */}
          <div className="mode-toggle-pill">
            <button
              className={`mode-btn ${!examMode ? 'active' : ''}`}
              onClick={() => switchMode(false)}
            >
              🎯 โหมดฝึกฝน (ตรวจทันที)
            </button>
            <button
              className={`mode-btn ${examMode ? 'active' : ''}`}
              onClick={() => switchMode(true)}
            >
              📝 โหมดจำลองสอบ (Exam)
            </button>
          </div>

          <button onClick={handleResetQuiz} className="quiz-icon-btn" title="ทำแบบทดสอบใหม่">
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Main Quiz Content */}
      <div className="quiz-workspace">
        {/* If Exam is submitted, show comprehensive result review card */}
        {isExamSubmitted ? (
          <div className="exam-result-summary">
            <div className="summary-hero-card">
              <div className="hero-icon-ring">
                <Award size={48} className="text-yellow-500" />
              </div>
              <h2>สรุปผลคะแนนจำลองการสอบ</h2>
              <div className="score-big-number">
                {correctCount} <span className="score-divider">/</span> {totalQuestions}
              </div>
              <div className="score-badge-status">
                {scorePercent >= 80 ? '🎉 ยอดเยี่ยมมาก! ระดับเซียน JavaScript' : scorePercent >= 60 ? '👍 ผ่านเกณฑ์มาตรฐาน มีความเข้าใจดี' : '📖 แนะนำให้กลับไปทบทวนเนื้อหาสไลด์เพิ่มเติม'}
              </div>
              <div className="score-meter-wrapper">
                <div className="score-meter-fill" style={{ width: `${scorePercent}%` }}></div>
              </div>
              <p className="score-percent-label">ความถูกต้อง: {scorePercent}%</p>

              <div className="summary-actions">
                <button onClick={handleResetQuiz} className="summary-btn primary">
                  <RotateCcw size={16} />
                  <span>ทำข้อสอบใหม่อีกครั้ง</span>
                </button>
                <button onClick={() => setIsExamSubmitted(false)} className="summary-btn secondary">
                  <CheckCircle2 size={16} />
                  <span>ดูรายละเอียดเฉลยข้อสอบ</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="question-flow-container">
            {/* Progress Header */}
            <div className="question-header-card">
              <div className="header-meta">
                <span className="q-badge-number">
                  คำถามที่ {currentIndex + 1} จาก {totalQuestions}
                </span>
                <span className="q-category-tag">ตอบแล้ว {answeredCount}/{totalQuestions}</span>
                <span className="q-category-tag">{currentQ?.category}</span>
              </div>

              <div className="header-progress-track">
                <div
                  className="header-progress-bar"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Body */}
            {currentQ && (
              <div className="question-main-card">
                <h3 className="question-title-text">{currentQ.question}</h3>

                {/* Code Snippet if present */}
                {currentQ.codeSnippet && (
                  <div className="question-code-box">
                    <pre><code>{currentQ.codeSnippet}</code></pre>
                  </div>
                )}

                {/* Options List */}
                <div className="quiz-options-list">
                  {currentQ.options.map((optionText, idx) => {
                    const isSelected = userAnswers[currentQ.id] === idx;
                    const isCorrect = idx === currentQ.correctIndex;
                    const hasAnswered = userAnswers[currentQ.id] !== undefined;

                    let optionClass = "quiz-option-card";
                    if (hasAnswered && !examMode) {
                      if (isCorrect) optionClass += " is-correct";
                      else if (isSelected) optionClass += " is-wrong";
                    } else if (isSelected) {
                      optionClass += " is-selected";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={optionClass}
                        disabled={hasAnswered && !examMode}
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="option-text">{optionText}</span>
                        {hasAnswered && !examMode && isCorrect && (
                          <CheckCircle2 size={18} className="option-feedback-icon correct" />
                        )}
                        {hasAnswered && !examMode && isSelected && !isCorrect && (
                          <XCircle size={18} className="option-feedback-icon wrong" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Detailed Explanation Box in Practice Mode or after selection */}
                {(!examMode && showExplanation) && (
                  <div className={`explanation-card ${userAnswers[currentQ.id] === currentQ.correctIndex ? 'success' : 'warning'}`}>
                    <div className="explanation-title">
                      <Sparkles size={16} />
                      <span>
                        {userAnswers[currentQ.id] === currentQ.correctIndex
                          ? "ถูกต้อง! ยอดเยี่ยมมาก"
                          : `ยังไม่ถูกต้อง (คำตอบที่ถูกต้องคือข้อ ${String.fromCharCode(65 + currentQ.correctIndex)})`}
                      </span>
                    </div>
                    <p className="explanation-text">{currentQ.explanation}</p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="quiz-nav-footer">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="quiz-nav-btn"
                  >
                    <ChevronLeft size={16} />
                    <span>ข้อก่อนหน้า</span>
                  </button>

                  <div className="question-dots-nav">
                    {filteredQuestions.map((q, idx) => {
                      const isAns = userAnswers[q.id] !== undefined;
                      const isCurrent = idx === currentIndex;
                      return (
                        <button
                          key={q.id}
                          onClick={() => {
                            setCurrentIndex(idx);
                            setShowExplanation(userAnswers[q.id] !== undefined);
                          }}
                          className={`dot-btn ${isCurrent ? 'active' : ''} ${isAns ? 'answered' : ''}`}
                          title={`ข้อที่ ${idx + 1}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {currentIndex < totalQuestions - 1 ? (
                    <button onClick={handleNext} className="quiz-nav-btn primary">
                      <span>ข้อถัดไป</span>
                      <ChevronRight size={16} />
                    </button>
                  ) : examMode ? (
                    <button onClick={handleSubmitExam} className="quiz-nav-btn submit">
                      <Check size={16} />
                      <span>ส่งคำตอบตรวจข้อสอบ</span>
                    </button>
                  ) : (
                    <button onClick={handleResetQuiz} className="quiz-nav-btn primary">
                      <RotateCcw size={16} />
                      <span>ทำใหม่อีกครั้ง</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
