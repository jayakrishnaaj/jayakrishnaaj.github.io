/** True when a content string is still a "[placeholder]". */
export const isPlaceholder = (s: string) => /\[[^\]]+\]/.test(s)
