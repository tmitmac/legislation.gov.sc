const acts = [
  /* 2020s */
  { number: "189—1", name: "Westland (Tierras del oeste) Empowerment Amendment Bill", file: "viewer.html?act=2000-2099/2026/westland-tierras-del-oeste-empowerment-amendment-bill.txt", year: 2026, type: "bill", inForce: false, bill: true, agency: "Ministry of Justice & Corrections"},
  { number: "188—1", name: "Employment Holidays Bill", file: "viewer.html?act=2000-2099/2026/employment-holidays-bill.txt", year: 2026, type: "bill", inForce: false, bill: true, agency: "Ministry of Labour & Employment"},
  { number: "187—1", name: "Appropriations (June Estimates) Bill", file: "viewer.html?act=2000-2099/2026/appropriations-(june-estimates)-bill-2026.txt", year: 2026, type: "bill", inForce: false, bill: true, agency: "Ministry of Finance"},
  { number: "2026 No 02", name: "Immigration Security and Border Integrity Act 2026", file: "viewer.html?act=2000-2099/2026/immigration-security-and-border-integrity-act-2026.txt", year: 2026, type: "act", inForce: true, bill: false, agency: "Ministry of Immigration & Customs"},
  { number: "2026 No 01", name: "Electoral (Online Voting) Amendment Act 2026", file: "viewer.html?act=2000-2099/2026/electoral-(online-voting)-amendment-act-2026.txt", year: 2026, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  { number: "2025 No 44", name: "Criminal Responsibility (Age Reduction) Amendment Act 2025", file: "viewer.html?act=2000-2099/2025/criminal-responsibility-(age-reduction)-amendment-act-2025.txt", year: 2025, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  { number: "2025 No 43", name: "Defence Expansion Act 2025", file: "viewer.html?act=2000-2099/2025/defence-expansion-act-2025.txt", year: 2025, type: "act", inForce: true, bill: false, agency: "Ministry of Defence"},
  { number: "2025 No 42", name: "Federal Revenue and Tax Reform Act 2025", file: "viewer.html?act=2000-2099/2025/federal-revenue-and-tax-reform-act-2025-version-2.txt", year: 2025, type: "act", inForce: true, bill: false, agency: "Ministry of Finance"},
  /* 2010s */
  { number: "2015 No 53", name: "Education and Training Act 2015", file: "viewer.html?act=2000-2099/2015/education-and-training-act-2015.txt", year: 2015, type: "act", inForce: true, bill: false, agency: "Ministry of Education"},
  { number: "2013 No 36", name: "Electoral (Social Media Advertising) Amendment Act 2013", file: "viewer.html?act=2000-2099/2013/electoral-(social-media-advertising)-amendment-act-2013.txt", year: 2013, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  /* 2000s */
  { number: "2006 No 44", name: "Immigration (Open Arms) Act 2006", file: "viewer.html?act=2000-2099/2006/immigration-(open-arms)-act-2006.txt", year: 2006, type: "act", inForce: false, bill: false, agency: "Ministry of Immigration & Customs"},
  { number: "2003 No 98", name: "Extended Wartime Measures Act Repeal Act 2003", file: "viewer.html?act=2000-2099/2003/extended-wartime-measures-act-repeal-act-2003.txt", year: 2003, type: "act", inForce: true, bill: false, agency: "His Majesty's Treasury of Square Country"},
   /* 1990s */
  { number: "1996 No 109", name: "Electoral Amendment Act 1996", file: "viewer.html?act=1900-1999/1996/electoral-amendment-act-1996.txt", year: 1996, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  { number: "1996 No 108", name: "Westland (Tierras del oeste) Empowerment Act 1996", file: "viewer.html?act=1900-1999/1996/westland-tierras-del-oeste-empowerment-act-1996.txt", year: 1996, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  { number: "1992 No 107", name: "Electoral Amendment Act 1992", file: "viewer.html?act=1900-1999/1992/electoral-amendment-act-1992.txt", year: 1992, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"}, 
  /* 1980s */
  { number: "1988 No 72", name: "Public Holidays Act 1988", file: "viewer.html?act=1900-1999/1988/public-holidays-act-1988.txt", year: 1988, type: "act", inForce: true, bill: false, agency: "Ministry of Labour & Employment"}, 
  { number: "1986 No 33", name: "Electoral Act 1986", file: "viewer.html?act=1900-1999/1986/electoral-act-1986.txt", year: 1986, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"},
  /* 1970s */
  { number: "1979 No 12", name: "Statistics Act 1979", file: "viewer.html?act=1900-1999/1979/statistics-act-1979.txt", year: 1979, type: "act", inForce: true, bill: false, agency: "National Statistics Office"},
  /* 1960s */
  { number: "1967 No 29", name: "Decimal Currency Act 1967", file: "viewer.html?act=1900-1999/1967/decimal-currency-act-1967.txt", year: 1967, type: "act", inForce: true, bill: false, agency: "Ministry of Finance"},
  { number: "1964 No 32", name: "Passports Act 1963", file: "viewer.html?act=1900-1999/1963/passports-act-1963.txt", year: 1963, type: "act", inForce: true, bill: false, agency: "Department of Internal Affairs"}, 
  { number: "1963 No 08", name: "Crimes Act 1964", file: "viewer.html?act=1900-1999/1964/crimes-act-1964.txt", year: 1964, type: "act", inForce: true, bill: false, agency: "Ministry of Justice & Corrections"}, 
  /* 1950s */
  { number: "1953 No 47", name: "Electoral Act 1953", file: "viewer.html?act=1900-1999/1953/electoral-act-1953.txt", year: 1953, type: "act", inForce: false, bill: false, agency: "Ministry of Justice & Corrections"},
  { number: "1950 No 02", name: "Wildlife Act 1950", file: "viewer.html?act=1900-1999/1950/wildlife-act-1950.txt", year: 1950, type: "act", inForce: true, bill: false, agency: "Wildlife Conservation Agency"},
  /* 1940s */ 
  { number: "1949 No 08", name: "Education Act 1949", file: "viewer.html?act=1900-1999/1949/education-act-1949.txt", year: 1949, type: "act", inForce: false, bill: false, agency: "Ministry of Education"},
  { number: "1946 No 245", name: "Westland Administrative Region Act 1946", file: "viewer.html?act=1900-1999/1946/westland-administrative-region-act-1946.txt", year: 1949, type: "act", inForce: false, bill: false, agency: "Ministry of Education"}, 
  /* 1930s */
  { number: "1939 No 01", name: "Immigration Control and Customs Act 1939", file: "viewer.html?act=1900-1999/1939/immigration-control-and-customs-act-1939.txt", year: 1939, type: "act", inForce: false, bill: false, agency: "Ministry of Immigration & Customs"},
  /* 1920s */
  { number: "1923 No 05", name: "Legal Tender Act 1923", file: "viewer.html?act=1900-1999/1923/legal-tender-act-1923.txt", year: 1923, type: "act", inForce: false, bill: false, agency: "His Majesty's Treasury of Square Country"},
  /* 1910s */
  { number: "1915 No 62", name: "Extended Wartime Measures Act 1915", file: "viewer.html?act=1900-1999/1915/extended-wartime-measures-act-1915.txt", year: 2025, type: "act", inForce: false, bill: false, agency: "Square Country Army Corps"},
  /* 1900s */
  { number: "1902 No 52", name: "Public Service Act 1902", file: "viewer.html?act=1900-1999/1902/public-service-act-1902.txt", year: 1902, type: "act", inForce: false, bill: false, agency: "Ministry for Municipal Affairs"},
  /* 1850s */
  { number: "1852 No 13", name: "Statistical Returns Act 1852", file: "viewer.html?act=1800-1899/1852/statistical-returns-act-1852.txt", year: 1852, type: "act", inForce: false, bill: false, agency: "Ministry of Statistical Cooperations"},
  /* 1790s */
  { number: "1796 No 01", name: "Declaration of Independent Sovereignty", file: "declaration.html"},
  /* 1660s */
  { number: "", name: "Bill of Rights 1688", file: "viewer.html?act=1688/bill-of-rights-1688.txt", year: 1688, type: "act", inForce: true, bill: false, agency: ""},




];
