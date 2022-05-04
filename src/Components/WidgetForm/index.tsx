import { CloseButton } from "../CloseButton";
import { useState } from "react";
import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImgUrl,
      alt: "Image Problem",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImgUrl,
      alt: "Image idea",
    },
  },
  OTHER: {
    title: "Outers",
    image: {
      source: thoughtImgUrl,
      alt: "Image thought",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(null);

  function handleRestartFeedback(){
    setFeedbackTypes(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/>
      )}
      <footer className="text-xs text-neutral-400">
        Created by{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/Joaopsguimaraes"
          target="_blank"
        >
          Joao Guimaraes
        </a>
      </footer>
    </div>
  );
}
