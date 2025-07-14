// import React from 'react'
import '../index.css'

interface EmotionConfidenceProps {
  emotion: {
    emotion: string
    confidence: number
  }
}

export function EmotionConfidence({ emotion }: EmotionConfidenceProps) {
  const confidencePercentage = (emotion.confidence * 100).toFixed(2)
  console.log("This is emotion",emotion);
  const emotionType = emotion.emotion.toLowerCase();

  const getEmotionClass = () => {
    switch (emotionType) {
      case "happy":
        return "bg-green-500 text-white"
      case "sad":
        return "bg-blue-500 text-white"
      case "angry":
        return "bg-red-500 text-white"
      case "anxious":
        return "bg-purple-500 text-white"
      case "excited":
        return "bg-yellow-500 text-black"
      case "neutral":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Analysis Result</h2>
      <p className="text-sm text-gray-600 mb-4">Detected emotion and confidence score:</p>

      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-gray-700">Emotion:</span>
          <span className={`px-3 py-1 rounded-full font-semibold capitalize ${getEmotionClass()}`}>
            {emotion.emotion}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-gray-700">Confidence:</span>
          <span className="px-3 py-1 rounded-full bg-white border border-gray-300 shadow-sm font-semibold text-gray-800">
            {confidencePercentage}%
          </span>
        </div>
      </div>
    </div>
  )
}
