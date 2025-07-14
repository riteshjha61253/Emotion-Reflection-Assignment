import type * as React from "react"
import { SubmitButton } from "./SubmitButton"

interface FormProps {
  text: string
  setText: (text: string) => void
  handleSubmit: (e: React.FormEvent) => void
  loading: boolean
}

export function FormComponent({ text, setText, handleSubmit, loading }: FormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid w-full gap-1.5">
        <label htmlFor="message-input" className="text-1xl font-bold text-purple-600">
          Talk to us — how's your day been?
        </label>
        <textarea
          id="message-input"
          placeholder="Type your thoughts or feelings here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="min-h-[120px] w-full resize-y rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Text input for emotion analysis"
          required
        />
      </div>
      <SubmitButton loading={loading} />
    </form>
  )
}
