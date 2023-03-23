export const transformDuration = (duration) => {
    if (duration <= 60) {
      return `${duration}м`
    }
  
    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60
  
    return `${hours}ч ${minutes}м`
  }