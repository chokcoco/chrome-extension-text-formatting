export function businessJudgment(domain) {
  domain = domain || location.href;

  const excelRegex = /docs\.google\.com\/spreadsheets/i;
  const docsRegex = /docs\.google\.com\/document/i;
  const shimoRegex = /shimo\.im\/docs/i;
  const yuqueRegex = /yuque\.com/i;

  switch (true) {
    case excelRegex.test(domain):
      return "GoogleExcel";
    case docsRegex.test(domain):
      return "GoogleDocs";
    case shimoRegex.test(domain):
      return "Shimo";
    case yuqueRegex.test(domain):
      return "Yueque";
    default:
      return "Unknown";
  }
}
