"use client";
import FeedbackList from "@/app/components/ui/FeedbackList";

export default function FeedbackPage() {
  return (
    <>
      <h1 className="flex justify-center text-center font-bold mt-10 text-white">Feedbacks</h1>
      <section data-testid="feedback-page-container" className="p-10 flex flex-col gap-6">
        <FeedbackList />
      </section>
    </>
  );
}
