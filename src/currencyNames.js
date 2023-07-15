const currencyNames = {
  AED: "Zjednoczone Emiraty Arabskie Dirham",
  AFN: "Afganistan Afgani",
  ALL: "Albański Lek",
  AMD: "Armeński Dram",
  ANG: "Antylski Gulden",
  AOA: "Angolska Kwanza",
  ARS: "Argentyńskie Peso",
  AUD: "Dolar Australijski",
  AWG: "Arubański Florin",
  AZN: "Azerbejdżański Manat",
  BAM: "Marks Zmienialny Bośni i Hercegowiny",
  BBD: "Dolar Barbadoski",
  BDT: "Bangladeski Taka",
  BGN: "Bułgarski Lew",
  BHD: "Bahrański Dinar",
  BIF: "Burundyjski Frank",
  BMD: "Bermudzki Dolar",
  BND: "Brunejski Dolar",
  BOB: "Boliwijski Boliviano",
  BRL: "Real Brazylijski",
  BSD: "Bahamski Dolar",
  BTN: "Bhutański Ngultrum",
  BWP: "Botswański Pula",
  BYN: "Białoruski Rubel",
  BZD: "Belizeński Dolar",
  CAD: "Dolar Kanadyjski",
  CDF: "Kongijski Frank",
  CHF: "Frank Szwajcarski",
  CLP: "Chińskie Peso",
  CNY: "Yuan Chiński",
  COP: "Kolumbijskie Peso",
  CRC: "Kostarykański Colon",
  CUC: "Kubańskie Peso Konwertowalne",
  CUP: "Kubańskie Peso",
  CVE: "Republika Zielonego Przylądka Escudo",
  CZK: "Czeska Korona",
  DJF: "Dżibutyjski Frank",
  DKK: "Duńska Korona",
  DOP: "Dominikańskie Peso",
  DZD: "Algierski Dinar",
  EGP: "Egipski Funt",
  ERN: "Erytrejska Nakfa",
  ETB: "Etiopski Birr",
  EUR: "Euro",
  FJD: "Fidżyjski Dolar",
  FKP: "Funt Falklandzki",
  GBP: "Funt Szterling",
  GEL: "Gruziński Lari",
  GGP: "Funt Guernsey",
  GHS: "Ghański Cedi",
  GIP: "Gibraltarski Funt",
  GMD: "Gambijski Dalasi",
  GNF: "Gwinejski Frank",
  GTQ: "Gwatemalski Quetzal",
  GYD: "Gujanański Dolar",
  HKD: "Dolar Hongkoński",
  HNL: "Honduraski Lempira",
  HRK: "Chorwacka Kuna",
  HTG: "Haitański Gourde",
  HUF: "Węgierski Forint",
  IDR: "Indonezyjska Rupia",
  ILS: "Izraelski Nowy Szekel",
  IMP: "Funt Wyspy Man",
  INR: "Indyjska Rupia",
  IQD: "Iracki Dinar",
  IRR: "Irański Rial",
  ISK: "Islandzka Korona",
  JEP: "Funt Jersey",
  JMD: "Jamajski Dolar",
  JOD: "Jordański Dinar",
  JPY: "Jen Japoński",
  KES: "Kenijski Szyling",
  KGS: "Kirgiski Som",
  KHR: "Kambodżański Riel",
  KMF: "Komoryjski Frank",
  KPW: "Północnokoreański Won",
  KRW: "Won Południowokoreański",
  KWD: "Kuwejcki Dinar",
  KYD: "Kajmański Dolar",
  KZT: "Kazachski Tenge",
  LAK: "Lao Kip",
  LBP: "Libański Funt",
  LKR: "Sri Lankijska Rupia",
  LRD: "Liberiański Dolar",
  LSL: "Loti Lesoto",
  LYD: "Libijski Dinar",
  MAD: "Marokański Dirham",
  MDL: "Mołdawski Lej",
  MGA: "Malgaski Ariary",
  MKD: "Macedoński Denar",
  MMK: "Mjanmański Kyat",
  MNT: "Mongolski Tugrik",
  MOP: "Makau Pataca",
  MRU: "Mauritańska Ouguiya",
  MUR: "Mauritańska Rupia",
  MVR: "Malediwska Rufia",
  MWK: "Malawijska Kwacha",
  MXN: "Meksykańskie Peso",
  MYR: "Malezyjski Ringgit",
  MZN: "Metical Mozambicki",
  NAD: "Namibijski Dolar",
  NGN: "Naira Nigeryjska",
  NIO: "Nikaraguańska Córdoba",
  NOK: "Norweska Korona",
  NPR: "Nepalska Rupia",
  NZD: "Nowozelandzki Dolar",
  OMR: "Rial Omanu",
  PAB: "Panamska Balboa",
  PEN: "Peruwiański Sol",
  PGK: "Kina Papuaski",
  PHP: "Filipińskie Peso",
  PKR: "Pakistańska Rupia",
  PLN: "Polski Złoty",
  PYG: "Paragwajski Guarani",
  QAR: "Katarski Rial",
  RON: "Rumuński Lej",
  RSD: "Serbski Dinar",
  RUB: "Rosyjski Rubel",
  RWF: "Rwandyjski Frank",
  SAR: "Saudyjski Rial",
  SBD: "Dolar Wysp Salomona",
  SCR: "Seychelska Rupia",
  SDG: "Sudański Funt",
  SEK: "Szwedzka Korona",
  SGD: "Singapurski Dolar",
  SHP: "Funt Świętej Heleny",
  SLL: "Sierraleoński Leone",
  SOS: "Somalijski Szyling",
  SRD: "Dolar Surinamski",
  SSP: "Południowosudański Funt",
  STD: "Dobra Wysp Świętego Tomasza i Książęcej",
  SVC: "Salwadorski Colón",
  SYP: "Syryjski Funt",
  SZL: "Lilangeni Suazi",
  THB: "Tajlandzki Baht",
  TJS: "Tadżycki Somoni",
  TMT: "Turkmeński Manat",
  TND: "Tunezyjski Dinar",
  TOP: "Tonga Paʻanga",
  TRY: "Turecka Lira",
  TTD: "Dolar Trynidadu i Tobago",
  TWD: "Nowy Dolar Tajwański",
  TZS: "Tanzanijski Szyling",
  UAH: "Hrywna Ukraińska",
  UGX: "Szyling Ugandyjski",
  USD: "Dolar Amerykański",
  UYU: "Urugwajskie Peso",
  UZS: "Uzbekistański Som",
  VES: "Boliwar Wenezuelski",
  VND: "Wietnamski Đồng",
  VUV: "Vanuatu Vatu",
  WST: "Tala Samońska",
  XAF: "Centralny Frank CFA",
  XAG: "Uncja Srebra",
  XAU: "Uncja Złota",
  XCD: "Dolar Wschodniokaraibski",
  XDR: "Specjalne Prawa Ciągnienia",
  XOF: "Frank CFA",
  XPD: "Uncja Palladu",
  XPF: "Frank CFP",
  XPT: "Uncja Platyny",
  YER: "Jemeński Rial",
  ZAR: "Rand Południowoafrykański",
  ZMW: "Kwacha Zambijska",
  ZWL: "Dolar Zimbabweński",
};

export { currencyNames };
