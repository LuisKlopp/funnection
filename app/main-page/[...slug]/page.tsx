import { QuizType } from "@/types/quiz.types";
import axios from "axios";

type QuizDetailPageProps = {
  params: { slug: string[] };
};

const fetchQuizDetail = async (id: string): Promise<QuizType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}`
  );
  return response.data;
};

const QuizDetailPage = async ({ params }: QuizDetailPageProps) => {
  const id = params.slug[0];
  console.log(id);
  const quiz = await fetchQuizDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 overflow-x-hidden">
      <div className="w-[500px] flex justify-center overflow-hidden break-words whitespace-normal">
        <span className="text-5xl text-slate-700 font-semibold text-center">
          {quiz.question}
        </span>
      </div>
      <div className="flex gap-36">
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-blue-700">O</span>
          <span>0</span>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-red-700">X</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailPage;
