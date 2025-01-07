# Unnecessary re-rendering
1. If parent re-renders, all children will re-render, even though there is no DOM update
* Solution: React.memo