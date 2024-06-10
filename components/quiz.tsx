"use client";

import React, { useState, useEffect } from "react";
import { QuizType, ResultsType } from "@/types/quiz.types";
import axios from "axios";
import Link from "next/link";

const Quiz = () => {
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState(0);
  const [results, setResults] = useState<ResultsType | null>(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz`).then((response) => {
      setQuiz(response.data);
    });
  }, []);

  const handleQuizSelection = (quizId: number) => {
    setSelectedQuiz(quizId);
    setResults(null);
  };

  const handleResults = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${selectedQuiz}/results`)
      .then((response) => {
        setResults(response.data);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl">펀넥션 박스 선택</h1>
      <div className="flex gap-4 justify-center">
        {quiz.map((q) => (
          <div
            key={q.id}
            className="border-2 bg-white border-slate-500 px-2 cursor-pointer"
          >
            <Link
              className="text-lg"
              href={`/main-page/${q.id}`}
              onClick={() => handleQuizSelection(q.id)}
            >
              {q.id}
            </Link>
          </div>
        ))}
      </div>
      {selectedQuiz !== 0 && (
        <div>
          <button onClick={handleResults}>결과 확인</button>
          {results && (
            <div>
              <p>O: {results.O}</p>
              <p>X: {results.X}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
