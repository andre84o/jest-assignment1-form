"use client";
import { useEffect, useState } from "react";
import { useFeedbackContext } from "@/app/context/FeedbackProvider";
import type { FeedbackItem } from "@/app/utils/types";

export default function FeedbackList() {
  const { feedbackList, setFeedbackList } = useFeedbackContext();
  const [loaded, setLoaded] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("feedbacks");
      const data: FeedbackItem[] = raw ? JSON.parse(raw) : [];
      setLoaded(data.length ? data : (feedbackList ?? []));
    } catch {
      setLoaded(feedbackList ?? []);
    }
  }, [feedbackList]);

  function erase() {
    try {
      localStorage.removeItem("feedbacks");
    } catch {}
    setLoaded([]);
    setFeedbackList([]);
  }

  return (
    <section className="text-white">
      <button onClick={erase} className="text-white p-2 rounded border border-white hover:bg-gray-400 mb-4">
        Erase Storage
      </button>
      <ul className="space-y-4">
        {loaded.map((f) => (
          <li key={f.id} className="border-2 rounded border-white shadow text-black">
            <h3 className="font-bold text-lg">{f.subject}</h3>
            <p className="mt-2">{f.content}</p>
            <p className="text-sm mt-1"><strong>Name:</strong> {f.name}</p>
            <p className="text-sm"><strong>Email:</strong> {f.email}</p>
            <p className="text-sm"><strong>Category:</strong> {f.category}</p>
            <p className="text-xs mt-2">{f.timestamp}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}