interface SubmitButtonProps {
  loading: boolean
}

export function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="relative w-full rounded-md bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin rounded-full border-2 border-t-white border-white/20" />
          <span>Analyzing...</span>
        </>
      ) : (
        "Analyze Emotion"
      )}
    </button>
  )
}
