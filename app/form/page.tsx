'use client'
import { FeedbackProvider } from "../context/FeedbackProvider"
import Navigation from "../components/ui/Navigation"
import { FeedbackItems } from "../utils/types"

export default function Frompage() {
  return (
    <FeedbackProvider>
      <Navigation/>
      <section className="p-10 flex flex-col gap-6">
        <h1>Product FeedBack Form</h1>
        <FormBody/>
      </section>
    </FeedbackProvider>
  )
}