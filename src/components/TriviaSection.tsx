import { useState } from "react";
import { TRIVIA_QUESTIONS } from "../data";
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TriviaSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = TRIVIA_QUESTIONS[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < TRIVIA_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div className="bg-[#f3eae1] border border-[#ebdccd] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#d95d39]/10 text-[#d95d39]">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-[#1e3d59]">Desafio Recife Antigo</h3>
          <p className="text-xs text-stone-500 font-sans">Teste seus conhecimentos sobre a história e cultura local</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!quizComplete ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Progress */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#d95d39]">
                QUESTÃO {currentQuestionIndex + 1} DE {TRIVIA_QUESTIONS.length}
              </span>
              <span className="text-xs font-sans text-stone-500">
                Pontuação: {score}/{TRIVIA_QUESTIONS.length}
              </span>
            </div>

            {/* Question Text */}
            <h4 className="font-sans text-base sm:text-lg font-semibold text-stone-800 mb-6">
              {currentQuestion.question}
            </h4>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, idx) => {
                let optionStyle = "border-stone-200 bg-white hover:bg-stone-50 text-stone-700";
                
                if (selectedAnswer === idx) {
                  optionStyle = "border-[#d95d39] bg-[#d95d39]/5 text-[#d95d39] font-medium";
                }
                
                if (isSubmitted) {
                  if (idx === currentQuestion.correctAnswer) {
                    optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold";
                  } else if (selectedAnswer === idx) {
                    optionStyle = "border-rose-500 bg-rose-50 text-rose-800";
                  } else {
                    optionStyle = "opacity-50 border-stone-200 bg-stone-50 text-stone-400";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isSubmitted}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-sans transition-all duration-200 flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isSubmitted && idx === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                    {isSubmitted && selectedAnswer === idx && idx !== currentQuestion.correctAnswer && (
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-white border border-[#ebdccd] mb-6"
              >
                <p className="text-xs font-sans text-stone-600 leading-relaxed">
                  <strong className="text-[#1e3d59]">Você sabia?</strong> {currentQuestion.explanation}
                </p>
              </motion.div>
            )}

            {/* Action buttons */}
            <div className="flex justify-end">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-xl bg-[#d95d39] text-white text-sm font-sans font-semibold hover:bg-[#c24e2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-[#1e3d59] text-white text-sm font-sans font-semibold hover:bg-[#152c41] transition-colors shadow-sm"
                >
                  {currentQuestionIndex === TRIVIA_QUESTIONS.length - 1 ? "Ver Resultado" : "Próxima Questão"}
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="inline-flex p-4 rounded-full bg-amber-50 text-amber-600 mb-4 border border-amber-100">
              <Award className="w-12 h-12" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#1e3d59] mb-2">Desafio Concluído!</h4>
            <p className="text-sm font-sans text-stone-600 mb-6">
              Você acertou <strong className="text-[#d95d39]">{score} de {TRIVIA_QUESTIONS.length}</strong> questões sobre o Recife Antigo.
            </p>

            {score === TRIVIA_QUESTIONS.length ? (
              <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl inline-block text-emerald-800 text-xs font-sans font-medium mb-8">
                🎉 Impressionante! Você é um verdadeiro especialista em Pernambuco!
              </div>
            ) : score >= 2 ? (
              <div className="px-4 py-2 bg-amber-50 border border-amber-100 rounded-xl inline-block text-amber-800 text-xs font-sans font-medium mb-8">
                👍 Muito bom! Você já conhece bastante sobre a nossa rica história.
              </div>
            ) : (
              <div className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-xl inline-block text-stone-800 text-xs font-sans font-medium mb-8">
                🌱 Continue descobrindo! Recife tem muitas relíquias e segredos para revelar.
              </div>
            )}

            <div>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#ebdccd] bg-white hover:bg-stone-50 text-stone-700 text-sm font-sans font-semibold transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer Desafio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
