export const observerHorizontal = typeof window !== 'undefined' && 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showX');
    } else {
      entry.target.classList.remove('showX');
    }
  });
}) : null;

export const observerVertical = typeof window !== 'undefined' && 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showY');
    } else {
      entry.target.classList.remove('showY');
    }
  });
}) : null;