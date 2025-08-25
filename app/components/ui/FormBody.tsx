"use client";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { useFeedbackContext } from "@/app/context/FeedbackProvider";
import type { FeedbackItem } from "@/app/utils/types";

const CATEGORY_OPTIONS = [
  { value: "general", label: "General" },
  { value: "bugs", label: "Bugs" },
  { value: "improvement", label: "Improvement" },
  { value: "other", label: "Other" },
];

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  category: "general",
  subject: "",
  content: "",
};

export default function FormBody() {
  const { feedbackList, setFeedbackList } = useFeedbackContext();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const getCategoryLabel = (value: string) => 
    CATEGORY_OPTIONS.find(o => o.value === value)?.label ?? "General";

  const resetForm = () => setFormData(INITIAL_FORM_STATE);

  const updateField = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const item: FeedbackItem = {
      id: uuid(),
      name: formData.name,
      email: formData.email,
      category: getCategoryLabel(formData.category),
      subject: formData.subject,
      content: formData.content,
      timestamp: new Date().toLocaleString(),
    };

    const next = [item, ...(feedbackList ?? [])];
    
    try {
      localStorage.setItem("feedbacks", JSON.stringify(next));
    } catch {}
    
    setFeedbackList(next);
    resetForm();
  }

  return (
    <form role="form" onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl border-2 p-6 rounded">
      <label className="text-white">
        Name
        <input
          placeholder="Name"
          value={formData.name}
          onChange={updateField("name")}
          className="border border-white p-2 w-full text-black placeholder:text-white"
        />
      </label>

      <label className="text-white">
        Email
        <input
          placeholder="Email"
          value={formData.email}
          onChange={updateField("email")}
          className="border border-white p-2 w-full text-black placeholder:text-white"
        />
      </label>

      <label htmlFor="category" className="text-white">Category</label>
      <select
        id="category"
        aria-label="category"
        value={formData.category}
        onChange={updateField("category")}
        className="border border-white p-2 w-full"
      >
        {CATEGORY_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label className="text-white">
        Subject
        <input
          placeholder="Subject"
          value={formData.subject}
          onChange={updateField("subject")}
          className="border border-white p-2 w-full text-black placeholder:text-white"
        />
      </label>

      <label className="text-white">
        Feedback
        <textarea
          placeholder="Your content"
          value={formData.content}
          onChange={updateField("content")}
          className="border border-white p-2 w-full min-h-24 text-black placeholder:text-white"
        />
      </label>
      <button type="submit" className="text-white border-white p-2 rounded border hover:bg-white hover:text-gray-800">Submit</button>
    </form>
  );
}
