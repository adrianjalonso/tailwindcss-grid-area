const plugin = require('tailwindcss/plugin')

const gridAreaPlugin = plugin(function({ addUtilities }) {
  const gridAreaUtilities = {}
  const maxGrid = 12
  
  for (let rowStart = 1; rowStart <= maxGrid; rowStart++) {
    for (let colStart = 1; colStart <= maxGrid; colStart++) {
      for (let rowEnd = rowStart; rowEnd <= maxGrid; rowEnd++) {
        for (let colEnd = colStart; colEnd <= maxGrid; colEnd++) {
          const className = `.grid-area-${rowStart}-${colStart}-${rowEnd}-${colEnd}`
          gridAreaUtilities[className] = {
            'grid-area': `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`
          }
        }
      }
    }
  }
  
  addUtilities(gridAreaUtilities, ['responsive', 'hover'])
})

module.exports = gridAreaPlugin