export const toHeadlineByChars = (strVal, charCount) => {
  if(strVal.trim().length <= charCount)
    return strVal.trim();
  
    const words = strVal.trim().split(/\s+/);
    let truncatedString = '';
    
    for (let word of words) {
      if ((truncatedString + word).length > charCount) {
        break;
      }
      truncatedString += (truncatedString ? ' ' : '') + word;
    }
    
    return truncatedString + "...";
  };