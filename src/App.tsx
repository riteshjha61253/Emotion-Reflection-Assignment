import { useState } from "react"
import { FormComponent } from "./components/form"
import { EmotionConfidence } from "./components/EmotionConfidence"
import "./App.css"

const BASE_URL = "http://localhost:8000"

export default function HomePage() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [emotion, setEmotion] = useState<{ emotion: string; confidence: number } | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setEmotion(null)

    try {
      const res = await fetch(`${BASE_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.detail || "Failed to analyze emotion.")
      }

      const data = await res.json()
      setEmotion(data)
    } catch (err: any) {
      setError(err.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-xl">
        <header className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Emotion Reflection Tool</h1>
          <p className="text-sm text-gray-600">Share how you're feeling and get a mock emotional insight.</p>
        </header>

        <FormComponent
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        {error && (
          <div className="rounded bg-red-100 p-3 text-center text-sm font-medium text-red-700 border border-red-300" role="alert">
            {error}
          </div>
        )}

        {emotion && <EmotionConfidence emotion={emotion} />}
      </div>
    </div>
  )
}
