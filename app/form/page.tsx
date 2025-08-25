"use client";
import FormBody from "@/app/components/ui/FormBody";

export default function FormPage() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <section data-testid="form-page-container" className="w-full max-w-lg p-10 flex flex-col gap-6 text-white">
        <h1 className="text-white font-bold text-center">Product Feedback Form</h1>
        <FormBody />
      </section>
    </div>
  );
}
