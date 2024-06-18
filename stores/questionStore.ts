import { QuestionType } from "@/types/question.types";
import create from "zustand";

interface QuestionStore {
  questions: QuestionType[];
  setQuestions: (questions: QuestionType[]) => void;
  updateQuestionClick: (id: number) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
  updateQuestionClick: (id) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === id ? { ...question, isClicked: true } : question,
      ),
    })),
}));
