export function businessJudgment(domain) {
  domain = domain || location.href;

  const excelRegex = /docs\.google\.com\/spreadsheets/i;
  const docsRegex = /docs\.google\.com\/document/i;

  switch (true) {
    case excelRegex.test(domain):
      return "GoogleExcel";
    case docsRegex.test(domain):
      return "GoogleDocs";
    default:
      return "Unknown";
  }
}
