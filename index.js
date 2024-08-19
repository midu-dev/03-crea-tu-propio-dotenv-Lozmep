// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')

function config (options = {}) {
  let text = ''
  const path = options.path ?? '.env'
  try {
    text = fs.readFileSync(path, 'utf-8')    
  } catch (error) {
    return    
  }
  if (!text) return
  const textToArray = text.split(/[\n,\r]+/)
  textToArray.forEach(targetText => {
    const targetArray = targetText.split('=')
    if (targetArray.length !==2 ) return
    // ternary to remove " and ' characters from process.env
    process.env[targetArray[0]] = Number(targetArray[1]) ? targetArray[1] : targetArray[1].slice(1,-1)
  })
}

module.exports = { config }
