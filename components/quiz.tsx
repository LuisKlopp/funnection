"use client";

import React, { useState, useEffect } from "react";
import { Quiz, Results } from "@/types/quiz.types";
import axios from "axios";
import Link from "next/link";

const Quiz = () => {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState(0);
  const [results, setResults] = useState<Results | null>(null);

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
    <div>
      <h1>퀴즈 선택</h1>
      {quiz.map((q) => (
        <Link
          href={`/main-page/${q.id}`}
          key={q.id}
          onClick={() => handleQuizSelection(q.id)}
        >
          {q.id}
        </Link>
      ))}
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
