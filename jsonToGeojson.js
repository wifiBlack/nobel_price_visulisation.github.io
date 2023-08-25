// 已有的 JSON 数据
var jsonData = [
  {
    "id": "1",
    "year": "1901",
    "birth_city": "Rotterdam",
    "birth_country": "Netherlands",
    "birth_city_latitude": "51.9244201",
    "birth_city_longitude": "4.4777325"
  },
  {
    "id": "2",
    "year": "1901",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "3",
    "year": "1901",
    "birth_city": "Hansdorf (Lawice)",
    "birth_country": "Prussia (Poland)",
    "birth_city_latitude": "53.5826184",
    "birth_city_longitude": "19.6568465"
  },
  {
    "id": "4",
    "year": "1901",
    "birth_city": "Geneva",
    "birth_country": "Switzerland",
    "birth_city_latitude": "46.2043907",
    "birth_city_longitude": "6.1431577"
  },
  {
    "id": "5",
    "year": "1901",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "6",
    "year": "1901",
    "birth_city": "Lennep (Remscheid)",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "51.1897588",
    "birth_city_longitude": "7.2666284"
  },
  {
    "id": "7",
    "year": "1902",
    "birth_city": "Euskirchen",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "50.6574392",
    "birth_city_longitude": "6.7899945"
  },
  {
    "id": "8",
    "year": "1902",
    "birth_city": "Garding",
    "birth_country": "Schleswig (Germany)",
    "birth_city_latitude": "54.3295187",
    "birth_city_longitude": "8.7865482"
  },
  {
    "id": "9",
    "year": "1902",
    "birth_city": "Almora",
    "birth_country": "India",
    "birth_city_latitude": "29.5892407",
    "birth_city_longitude": "79.646666"
  },
  {
    "id": "10",
    "year": "1902",
    "birth_city": "Geneva",
    "birth_country": "Switzerland",
    "birth_city_latitude": "46.2043907",
    "birth_city_longitude": "6.1431577"
  },
  {
    "id": "11",
    "year": "1902",
    "birth_city": "Tramelan",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.2235029",
    "birth_city_longitude": "7.102975"
  },
  {
    "id": "12",
    "year": "1902",
    "birth_city": "Arnhem",
    "birth_country": "Netherlands",
    "birth_city_latitude": "51.9851034",
    "birth_city_longitude": "5.8987296"
  },
  {
    "id": "13",
    "year": "1902",
    "birth_city": "Zonnemaire",
    "birth_country": "Netherlands",
    "birth_city_latitude": "51.7130521",
    "birth_city_longitude": "3.9518196"
  },
  {
    "id": "14",
    "year": "1903",
    "birth_city": "Vik",
    "birth_country": "Sweden",
    "birth_city_latitude": "55.6144259",
    "birth_city_longitude": "14.2851622"
  },
  {
    "id": "15",
    "year": "1903",
    "birth_city": "Kvikne",
    "birth_country": "Norway",
    "birth_city_latitude": "62.5812519",
    "birth_city_longitude": "10.2828531"
  },
  {
    "id": "16",
    "year": "1903",
    "birth_city": "Thorshavn",
    "birth_country": "Faroe Islands (Denmark)",
    "birth_city_latitude": "62.0107248",
    "birth_city_longitude": "-6.7740852"
  },
  {
    "id": "17",
    "year": "1903",
    "birth_city": "Fareham",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.8548464",
    "birth_city_longitude": "-1.1865868"
  },
  {
    "id": "18",
    "year": "1903",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "19",
    "year": "1903",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "20",
    "year": "1903",
    "birth_city": "Warsaw",
    "birth_country": "Russian Empire (Poland)",
    "birth_city_latitude": "52.2296756",
    "birth_city_longitude": "21.0122287"
  },
  {
    "id": "21",
    "year": "1904",
    "birth_city": "Glasgow",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.8616704",
    "birth_city_longitude": "-4.2583345"
  },
  {
    "id": "22",
    "year": "1904",
    "birth_city": "Maillane",
    "birth_country": "France",
    "birth_city_latitude": "43.832349",
    "birth_city_longitude": "4.782098"
  },
  {
    "id": "23",
    "year": "1904",
    "birth_city": "Madrid",
    "birth_country": "Spain",
    "birth_city_latitude": "40.4167754",
    "birth_city_longitude": "-3.7037902"
  },
  {
    "id": "24",
    "year": "1904",
    "birth_city": "Ryazan",
    "birth_country": "Russia",
    "birth_city_latitude": "54.6095418",
    "birth_city_longitude": "39.7125857"
  },
  {
    "id": "25",
    "year": "1904",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "26",
    "year": "1904",
    "birth_city": "\"Langford Grove",
    "birth_country": " Maldon",
    "birth_city_latitude": " Essex\"",
    "birth_city_longitude": "United Kingdom"
  },
  {
    "id": "27",
    "year": "1905",
    "birth_city": "Berlin",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "28",
    "year": "1905",
    "birth_city": "Wola Okrzejska",
    "birth_country": "Poland",
    "birth_city_latitude": "51.7494805",
    "birth_city_longitude": "22.1336434"
  },
  {
    "id": "29",
    "year": "1905",
    "birth_city": "Clausthal (Clausthal-Zellerfeld)",
    "birth_country": "Germany",
    "birth_city_latitude": "51.8080063",
    "birth_city_longitude": "10.340707"
  },
  {
    "id": "30",
    "year": "1905",
    "birth_city": "Prague",
    "birth_country": "Austrian Empire (Czech Republic)",
    "birth_city_latitude": "50.0755381",
    "birth_city_longitude": "14.4378005"
  },
  {
    "id": "31",
    "year": "1905",
    "birth_city": "Pressburg (Bratislava)",
    "birth_country": "Hungary (Slovakia)",
    "birth_city_latitude": "47.162494",
    "birth_city_longitude": "19.503304"
  },
  {
    "id": "32",
    "year": "1906",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "33",
    "year": "1906",
    "birth_city": "Val di Castello",
    "birth_country": "Tuscany (Italy)",
    "birth_city_latitude": "43.9579689",
    "birth_city_longitude": "10.2639186"
  },
  {
    "id": "34",
    "year": "1906",
    "birth_city": "Corteno",
    "birth_country": "Italy",
    "birth_city_latitude": "46.1652608",
    "birth_city_longitude": "10.2365387"
  },
  {
    "id": "35",
    "year": "1906",
    "birth_city": "Petilla de Arag��",
    "birth_country": "Spain",
    "birth_city_latitude": "42.4614395",
    "birth_city_longitude": "-1.0924468"
  },
  {
    "id": "36",
    "year": "1906",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "37",
    "year": "1906",
    "birth_city": "\"Cheetham Hill",
    "birth_country": " near Manchester\"",
    "birth_city_latitude": "United Kingdom",
    "birth_city_longitude": "53.5021101"
  },
  {
    "id": "38",
    "year": "1907",
    "birth_city": "Munich",
    "birth_country": "Bavaria (Germany)",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "39",
    "year": "1907",
    "birth_city": "Bombay",
    "birth_country": "British India (India)",
    "birth_city_latitude": "19.0759837",
    "birth_city_longitude": "72.8776559"
  },
  {
    "id": "40",
    "year": "1907",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "41",
    "year": "1907",
    "birth_city": "Milan",
    "birth_country": "Austrian Empire (Italy)",
    "birth_city_latitude": "45.4642035",
    "birth_city_longitude": "9.189982"
  },
  {
    "id": "42",
    "year": "1907",
    "birth_city": "Autun",
    "birth_country": "France",
    "birth_city_latitude": "46.950914",
    "birth_city_longitude": "4.301565"
  },
  {
    "id": "43",
    "year": "1907",
    "birth_city": "Strelno (Strzelno)",
    "birth_country": "Prussia (Poland)",
    "birth_city_latitude": "52.62772",
    "birth_city_longitude": "18.17266"
  },
  {
    "id": "44",
    "year": "1908",
    "birth_city": "Nelson",
    "birth_country": "New Zealand",
    "birth_city_latitude": "-41.2985321",
    "birth_city_longitude": "173.2443635"
  },
  {
    "id": "45",
    "year": "1908",
    "birth_city": "Aurich",
    "birth_country": "East Friesland (Germany)",
    "birth_city_latitude": "53.472548",
    "birth_city_longitude": "7.4833137"
  },
  {
    "id": "46",
    "year": "1908",
    "birth_city": "Kharkov (Kharkiv)",
    "birth_country": "Russian Empire (Ukraine)",
    "birth_city_latitude": "49.9935",
    "birth_city_longitude": "36.230383"
  },
  {
    "id": "47",
    "year": "1908",
    "birth_city": "Strehlen (Strzelin)",
    "birth_country": "Prussia (Poland)",
    "birth_city_latitude": "50.7812167",
    "birth_city_longitude": "17.0646124"
  },
  {
    "id": "48",
    "year": "1908",
    "birth_city": "Gothenburg",
    "birth_country": "Sweden",
    "birth_city_latitude": "57.70887",
    "birth_city_longitude": "11.97456"
  },
  {
    "id": "49",
    "year": "1908",
    "birth_city": "N?stved",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.224613",
    "birth_city_longitude": "11.759207"
  },
  {
    "id": "50",
    "year": "1908",
    "birth_city": "Hollerich",
    "birth_country": "Luxembourg",
    "birth_city_latitude": "49.6040705",
    "birth_city_longitude": "6.1121429"
  },
  {
    "id": "51",
    "year": "1909",
    "birth_city": "Riga",
    "birth_country": "Russian Empire (Latvia)",
    "birth_city_latitude": "56.9676941",
    "birth_city_longitude": "24.1056221"
  },
  {
    "id": "52",
    "year": "1909",
    "birth_city": "M?rbacka",
    "birth_country": "Sweden",
    "birth_city_latitude": "57.7401023",
    "birth_city_longitude": "13.4196967"
  },
  {
    "id": "53",
    "year": "1909",
    "birth_city": "Berne",
    "birth_country": "Switzerland",
    "birth_city_latitude": "46.9479739",
    "birth_city_longitude": "7.4474468"
  },
  {
    "id": "54",
    "year": "1909",
    "birth_city": "Ostend",
    "birth_country": "Belgium",
    "birth_city_latitude": "51.2246631",
    "birth_city_longitude": "2.9091818"
  },
  {
    "id": "55",
    "year": "1909",
    "birth_city": "La Fl��che",
    "birth_country": "France",
    "birth_city_latitude": "47.69589",
    "birth_city_longitude": "-0.074646"
  },
  {
    "id": "56",
    "year": "1909",
    "birth_city": "Bologna",
    "birth_country": "Italy",
    "birth_city_latitude": "44.494887",
    "birth_city_longitude": "11.3426163"
  },
  {
    "id": "57",
    "year": "1909",
    "birth_city": "Fulda",
    "birth_country": "Hesse-Kassel (Germany)",
    "birth_city_latitude": "51.3127114",
    "birth_city_longitude": "9.4797461"
  },
  {
    "id": "58",
    "year": "1910",
    "birth_city": "Koenigsberg (Kaliningrad)",
    "birth_country": "Germany (Russia)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "59",
    "year": "1910",
    "birth_city": "Berlin",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "60",
    "year": "1910",
    "birth_city": "Rostock",
    "birth_country": "Mecklenburg (Germany)",
    "birth_city_latitude": "54.0924406",
    "birth_city_longitude": "12.0991466"
  },
  {
    "id": "61",
    "year": "1910",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "62",
    "year": "1910",
    "birth_city": "Leiden",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.1601144",
    "birth_city_longitude": "4.4970097"
  },
  {
    "id": "63",
    "year": "1911",
    "birth_city": "Warsaw",
    "birth_country": "Russian Empire (Poland)",
    "birth_city_latitude": "52.2296756",
    "birth_city_longitude": "21.0122287"
  },
  {
    "id": "64",
    "year": "1911",
    "birth_city": "Ghent",
    "birth_country": "Belgium",
    "birth_city_latitude": "51.0500182",
    "birth_city_longitude": "3.7303351"
  },
  {
    "id": "65",
    "year": "1911",
    "birth_city": "Landskrona",
    "birth_country": "Sweden",
    "birth_city_latitude": "55.8703477",
    "birth_city_longitude": "12.8300802"
  },
  {
    "id": "66",
    "year": "1911",
    "birth_city": "Amsterdam",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.3675734",
    "birth_city_longitude": "4.9041389"
  },
  {
    "id": "67",
    "year": "1911",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "68",
    "year": "1911",
    "birth_city": "Gaffken (Parusnoye)",
    "birth_country": "Prussia (Russia)",
    "birth_city_latitude": "51.58842",
    "birth_city_longitude": "39.5269543"
  },
  {
    "id": "69",
    "year": "1912",
    "birth_city": "Cherbourg",
    "birth_country": "France",
    "birth_city_latitude": "49.6338979",
    "birth_city_longitude": "-1.622224"
  },
  {
    "id": "70",
    "year": "1912",
    "birth_city": "Carcassonne",
    "birth_country": "France",
    "birth_city_latitude": "43.2132151",
    "birth_city_longitude": "2.3517703"
  },
  {
    "id": "71",
    "year": "1912",
    "birth_city": "Bad Salzbrunn",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "50.810462",
    "birth_city_longitude": "16.247897"
  },
  {
    "id": "72",
    "year": "1912",
    "birth_city": "Sainte-Foy-l��s-Lyon",
    "birth_country": "France",
    "birth_city_latitude": "45.735237",
    "birth_city_longitude": "4.804827"
  },
  {
    "id": "73",
    "year": "1912",
    "birth_city": "\"Clinton",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0484029"
  },
  {
    "id": "74",
    "year": "1912",
    "birth_city": "Stenstorp",
    "birth_country": "Sweden",
    "birth_city_latitude": "58.2740016",
    "birth_city_longitude": "13.7142087"
  },
  {
    "id": "75",
    "year": "1913",
    "birth_city": "Mulhouse",
    "birth_country": "France",
    "birth_city_latitude": "47.750839",
    "birth_city_longitude": "7.335888"
  },
  {
    "id": "76",
    "year": "1913",
    "birth_city": "Calcutta",
    "birth_country": "India",
    "birth_city_latitude": "22.572646",
    "birth_city_longitude": "88.363895"
  },
  {
    "id": "77",
    "year": "1913",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "78",
    "year": "1913",
    "birth_city": "Brussels",
    "birth_country": "Belgium",
    "birth_city_latitude": "50.8476424",
    "birth_city_longitude": "4.3571696"
  },
  {
    "id": "79",
    "year": "1913",
    "birth_city": "Groningen",
    "birth_country": "Netherlands",
    "birth_city_latitude": "53.2193835",
    "birth_city_longitude": "6.5665018"
  },
  {
    "id": "80",
    "year": "1914",
    "birth_city": "\"Germantown",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.0292648"
  },
  {
    "id": "81",
    "year": "1914",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "82",
    "year": "1914",
    "birth_city": "Pfaffendorf",
    "birth_country": "Germany",
    "birth_city_latitude": "50.911275",
    "birth_city_longitude": "14.0748638"
  },
  {
    "id": "83",
    "year": "1915",
    "birth_city": "Karlsruhe",
    "birth_country": "Germany",
    "birth_city_latitude": "49.0068901",
    "birth_city_longitude": "8.4036527"
  },
  {
    "id": "84",
    "year": "1915",
    "birth_city": "Clamecy",
    "birth_country": "France",
    "birth_city_latitude": "47.459605",
    "birth_city_longitude": "3.518769"
  },
  {
    "id": "85",
    "year": "1915",
    "birth_city": "Wigton",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "54.825544",
    "birth_city_longitude": "-3.161231"
  },
  {
    "id": "86",
    "year": "1915",
    "birth_city": "Adelaide",
    "birth_country": "Australia",
    "birth_city_latitude": "-34.9284989",
    "birth_city_longitude": "138.6007456"
  },
  {
    "id": "87",
    "year": "1916",
    "birth_city": "Olshammar",
    "birth_country": "Sweden",
    "birth_city_latitude": "58.7536282",
    "birth_city_longitude": "14.7980293"
  },
  {
    "id": "88",
    "year": "1917",
    "birth_city": "Roholte",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.194519",
    "birth_city_longitude": "12.089752"
  },
  {
    "id": "89",
    "year": "1917",
    "birth_city": "Fredericia",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.5689298",
    "birth_city_longitude": "9.749517"
  },
  {
    "id": "90",
    "year": "1917",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "91",
    "year": "1917",
    "birth_city": "Widnes",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.361024",
    "birth_city_longitude": "-2.733637"
  },
  {
    "id": "92",
    "year": "1918",
    "birth_city": "Breslau (Wroclaw)",
    "birth_country": "Prussia (Poland)",
    "birth_city_latitude": "51.1078852",
    "birth_city_longitude": "17.0385376"
  },
  {
    "id": "93",
    "year": "1918",
    "birth_city": "Kiel",
    "birth_country": "Schleswig (Germany)",
    "birth_city_latitude": "54.3232927",
    "birth_city_longitude": "10.1227652"
  },
  {
    "id": "94",
    "year": "1919",
    "birth_city": "Liestal",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.4866143",
    "birth_city_longitude": "7.7334272"
  },
  {
    "id": "95",
    "year": "1919",
    "birth_city": "Soignies",
    "birth_country": "Belgium",
    "birth_city_latitude": "50.5793035",
    "birth_city_longitude": "4.0666287"
  },
  {
    "id": "96",
    "year": "1919",
    "birth_city": "\"Staunton",
    "birth_country": " VA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.149576"
  },
  {
    "id": "97",
    "year": "1919",
    "birth_city": "Schickenhof",
    "birth_country": "Germany",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "98",
    "year": "1920",
    "birth_city": "Briesen",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "52.3401613",
    "birth_city_longitude": "14.2767893"
  },
  {
    "id": "99",
    "year": "1920",
    "birth_city": "Lom",
    "birth_country": "Norway",
    "birth_city_latitude": "61.8377182",
    "birth_city_longitude": "8.5686169"
  },
  {
    "id": "100",
    "year": "1920",
    "birth_city": "Gren?",
    "birth_country": "Denmark",
    "birth_city_latitude": "56.411808",
    "birth_city_longitude": "10.894919"
  },
  {
    "id": "101",
    "year": "1920",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "102",
    "year": "1920",
    "birth_city": "Fleurier",
    "birth_country": "Switzerland",
    "birth_city_latitude": "46.9023107",
    "birth_city_longitude": "6.5808426"
  },
  {
    "id": "103",
    "year": "1921",
    "birth_city": "Eastbourne",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.768035",
    "birth_city_longitude": "0.290472"
  },
  {
    "id": "104",
    "year": "1921",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "105",
    "year": "1921",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "106",
    "year": "1921",
    "birth_city": "Stavanger",
    "birth_country": "Norway",
    "birth_city_latitude": "58.9699756",
    "birth_city_longitude": "5.7331073"
  },
  {
    "id": "107",
    "year": "1921",
    "birth_city": "Ulm",
    "birth_country": "Germany",
    "birth_city_latitude": "48.4010822",
    "birth_city_longitude": "9.9876076"
  },
  {
    "id": "108",
    "year": "1922",
    "birth_city": "Harborne",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.4597094",
    "birth_city_longitude": "-1.961668"
  },
  {
    "id": "109",
    "year": "1922",
    "birth_city": "Madrid",
    "birth_country": "Spain",
    "birth_city_latitude": "40.4167754",
    "birth_city_longitude": "-3.7037902"
  },
  {
    "id": "110",
    "year": "1922",
    "birth_city": "Bristol",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.454513",
    "birth_city_longitude": "-2.58791"
  },
  {
    "id": "111",
    "year": "1922",
    "birth_city": "Hanover",
    "birth_country": "Germany",
    "birth_city_latitude": "52.3758916",
    "birth_city_longitude": "9.7320104"
  },
  {
    "id": "112",
    "year": "1922",
    "birth_city": "Kristiania (Oslo)",
    "birth_country": "Norway",
    "birth_city_latitude": "59.9138688",
    "birth_city_longitude": "10.7522454"
  },
  {
    "id": "113",
    "year": "1922",
    "birth_city": "Copenhagen",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.6760968",
    "birth_city_longitude": "12.5683371"
  },
  {
    "id": "114",
    "year": "1923",
    "birth_city": "Laibach (Ljubljana)",
    "birth_country": "Austria-Hungary (Slovenia)",
    "birth_city_latitude": "46.0569465",
    "birth_city_longitude": "14.5057515"
  },
  {
    "id": "115",
    "year": "1923",
    "birth_city": "Dublin",
    "birth_country": "Ireland",
    "birth_city_latitude": "53.3498053",
    "birth_city_longitude": "-6.2603097"
  },
  {
    "id": "116",
    "year": "1923",
    "birth_city": "Alliston",
    "birth_country": "Canada",
    "birth_city_latitude": "44.1539514",
    "birth_city_longitude": "-79.8691544"
  },
  {
    "id": "117",
    "year": "1923",
    "birth_city": "Cluny",
    "birth_country": "Scotland",
    "birth_city_latitude": "57.204922",
    "birth_city_longitude": "-2.5173009"
  },
  {
    "id": "118",
    "year": "1923",
    "birth_city": "\"Morrison",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.809751"
  },
  {
    "id": "119",
    "year": "1924",
    "birth_city": "Kobiele Wielkie",
    "birth_country": "Russian Empire (Poland)",
    "birth_city_latitude": "51.0315709",
    "birth_city_longitude": "19.6249295"
  },
  {
    "id": "120",
    "year": "1924",
    "birth_city": "Semarang",
    "birth_country": "\"Java",
    "birth_city_latitude": " Dutch East Indies (Indonesia)\"",
    "birth_city_longitude": "-7.0051453"
  },
  {
    "id": "121",
    "year": "1924",
    "birth_city": "Lund",
    "birth_country": "Sweden",
    "birth_city_latitude": "55.7046601",
    "birth_city_longitude": "13.1910073"
  },
  {
    "id": "122",
    "year": "1925",
    "birth_city": "Vienna",
    "birth_country": "Austrian Empire (Austria)",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "123",
    "year": "1925",
    "birth_city": "Dublin",
    "birth_country": "Ireland",
    "birth_city_latitude": "53.3498053",
    "birth_city_longitude": "-6.2603097"
  },
  {
    "id": "124",
    "year": "1925",
    "birth_city": "Birmingham",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.486243",
    "birth_city_longitude": "-1.890401"
  },
  {
    "id": "125",
    "year": "1925",
    "birth_city": "\"Marietta",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.415352"
  },
  {
    "id": "126",
    "year": "1925",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "127",
    "year": "1925",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "128",
    "year": "1926",
    "birth_city": "Fler?ng",
    "birth_country": "Sweden",
    "birth_city_latitude": "60.128161",
    "birth_city_longitude": "18.643501"
  },
  {
    "id": "129",
    "year": "1926",
    "birth_city": "\"Nuoro",
    "birth_country": " Sardinia\"",
    "birth_city_latitude": "Italy",
    "birth_city_longitude": "40.3202421"
  },
  {
    "id": "130",
    "year": "1926",
    "birth_city": "Silkeborg",
    "birth_country": "Denmark",
    "birth_city_latitude": "56.176362",
    "birth_city_longitude": "9.5549216"
  },
  {
    "id": "131",
    "year": "1926",
    "birth_city": "Nantes",
    "birth_country": "France",
    "birth_city_latitude": "47.218371",
    "birth_city_longitude": "-1.553621"
  },
  {
    "id": "132",
    "year": "1926",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "133",
    "year": "1926",
    "birth_city": "Lille",
    "birth_country": "France",
    "birth_city_latitude": "50.62925",
    "birth_city_longitude": "3.057256"
  },
  {
    "id": "134",
    "year": "1927",
    "birth_city": "Pforzheim",
    "birth_country": "Germany",
    "birth_city_latitude": "48.8921862",
    "birth_city_longitude": "8.6946286"
  },
  {
    "id": "135",
    "year": "1927",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "136",
    "year": "1927",
    "birth_city": "Wels",
    "birth_country": "Austria",
    "birth_city_latitude": "48.16542",
    "birth_city_longitude": "14.03664"
  },
  {
    "id": "137",
    "year": "1927",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "138",
    "year": "1927",
    "birth_city": "Bremen",
    "birth_country": "Germany",
    "birth_city_latitude": "53.0792962",
    "birth_city_longitude": "8.8016937"
  },
  {
    "id": "139",
    "year": "1927",
    "birth_city": "\"Wooster",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.798237"
  },
  {
    "id": "140",
    "year": "1927",
    "birth_city": "Glencorse",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.8619946",
    "birth_city_longitude": "-3.2526271"
  },
  {
    "id": "141",
    "year": "1928",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "142",
    "year": "1928",
    "birth_city": "Kalundborg",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.686429",
    "birth_city_longitude": "11.089188"
  },
  {
    "id": "143",
    "year": "1928",
    "birth_city": "Rouen",
    "birth_country": "France",
    "birth_city_latitude": "49.443232",
    "birth_city_longitude": "1.099971"
  },
  {
    "id": "144",
    "year": "1928",
    "birth_city": "Dewsbury",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.689833",
    "birth_city_longitude": "-1.6296949"
  },
  {
    "id": "145",
    "year": "1929",
    "birth_city": "Manchester",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.4807593",
    "birth_city_longitude": "-2.2426305"
  },
  {
    "id": "146",
    "year": "1929",
    "birth_city": "Augsburg",
    "birth_country": "Germany",
    "birth_city_latitude": "48.3705449",
    "birth_city_longitude": "10.89779"
  },
  {
    "id": "147",
    "year": "1929",
    "birth_city": "L��beck",
    "birth_country": "Germany",
    "birth_city_latitude": "53.8654673",
    "birth_city_longitude": "10.6865593"
  },
  {
    "id": "148",
    "year": "1929",
    "birth_city": "Nijkerk",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.2224835",
    "birth_city_longitude": "5.4835625"
  },
  {
    "id": "149",
    "year": "1929",
    "birth_city": "Eastbourne",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.768035",
    "birth_city_longitude": "0.290472"
  },
  {
    "id": "150",
    "year": "1929",
    "birth_city": "\"Potsdam",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.6697805"
  },
  {
    "id": "151",
    "year": "1929",
    "birth_city": "Dieppe",
    "birth_country": "France",
    "birth_city_latitude": "49.922992",
    "birth_city_longitude": "1.077483"
  },
  {
    "id": "152",
    "year": "1930",
    "birth_city": "Hoechst",
    "birth_country": "Germany",
    "birth_city_latitude": "50.102482",
    "birth_city_longitude": "8.5474571"
  },
  {
    "id": "153",
    "year": "1930",
    "birth_city": "\"Sauk Centre",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "45.737465"
  },
  {
    "id": "154",
    "year": "1930",
    "birth_city": "Vienna",
    "birth_country": "Austrian Empire (Austria)",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "155",
    "year": "1930",
    "birth_city": "Tr?n?",
    "birth_country": "Sweden",
    "birth_city_latitude": "61.3965122",
    "birth_city_longitude": "16.8336653"
  },
  {
    "id": "156",
    "year": "1930",
    "birth_city": "Tiruchirappalli",
    "birth_country": "India",
    "birth_city_latitude": "10.7904833",
    "birth_city_longitude": "78.7046725"
  },
  {
    "id": "157",
    "year": "1931",
    "birth_city": "Cologne",
    "birth_country": "Germany",
    "birth_city_latitude": "50.937531",
    "birth_city_longitude": "6.9602786"
  },
  {
    "id": "158",
    "year": "1931",
    "birth_city": "\"Goldschmieden",
    "birth_country": " near Breslau\"",
    "birth_city_latitude": "Germany (Poland)",
    "birth_city_longitude": "51.1078852"
  },
  {
    "id": "159",
    "year": "1931",
    "birth_city": "Karlbo",
    "birth_country": "Sweden",
    "birth_city_latitude": "60.1200174",
    "birth_city_longitude": "16.2400417"
  },
  {
    "id": "160",
    "year": "1931",
    "birth_city": "Freiburg im Breisgau",
    "birth_country": "Germany",
    "birth_city_latitude": "47.9990077",
    "birth_city_longitude": "7.8421043"
  },
  {
    "id": "161",
    "year": "1931",
    "birth_city": "\"Cedarville",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3758493"
  },
  {
    "id": "162",
    "year": "1931",
    "birth_city": "\"Elizabeth",
    "birth_country": " NJ\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6639916"
  },
  {
    "id": "163",
    "year": "1932",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "164",
    "year": "1932",
    "birth_city": "Kingston Hill",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.4326453",
    "birth_city_longitude": "-0.2572578"
  },
  {
    "id": "165",
    "year": "1932",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "166",
    "year": "1932",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "167",
    "year": "1932",
    "birth_city": "W��rzburg",
    "birth_country": "Germany",
    "birth_city_latitude": "49.7913044",
    "birth_city_longitude": "9.9533548"
  },
  {
    "id": "168",
    "year": "1933",
    "birth_city": "Voronezh",
    "birth_country": "Russia",
    "birth_city_latitude": "51.6683487",
    "birth_city_longitude": "39.1919288"
  },
  {
    "id": "169",
    "year": "1933",
    "birth_city": "\"Lexington",
    "birth_country": " KY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.0405837"
  },
  {
    "id": "170",
    "year": "1933",
    "birth_city": "Holbeach",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.803991",
    "birth_city_longitude": "0.013434"
  },
  {
    "id": "171",
    "year": "1933",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "172",
    "year": "1933",
    "birth_city": "Bristol",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.454513",
    "birth_city_longitude": "-2.58791"
  },
  {
    "id": "173",
    "year": "1934",
    "birth_city": "\"Walkerton",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.4667113"
  },
  {
    "id": "174",
    "year": "1934",
    "birth_city": "\"Agrigento",
    "birth_country": " Sicily\"",
    "birth_city_latitude": "Italy",
    "birth_city_longitude": "37.3088512"
  },
  {
    "id": "175",
    "year": "1934",
    "birth_city": "\"Ashland",
    "birth_country": " NH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.695318"
  },
  {
    "id": "176",
    "year": "1934",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "177",
    "year": "1934",
    "birth_city": "\"Stoughton",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.9169462"
  },
  {
    "id": "178",
    "year": "1934",
    "birth_city": "Glasgow",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.8616704",
    "birth_city_longitude": "-4.2583345"
  },
  {
    "id": "179",
    "year": "1935",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "180",
    "year": "1935",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "181",
    "year": "1935",
    "birth_city": "Stuttgart",
    "birth_country": "W&uuml;rttemberg (Germany)",
    "birth_city_latitude": "48.7758459",
    "birth_city_longitude": "9.1829321"
  },
  {
    "id": "182",
    "year": "1935",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "183",
    "year": "1935",
    "birth_city": "Manchester",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.4807593",
    "birth_city_longitude": "-2.2426305"
  },
  {
    "id": "184",
    "year": "1936",
    "birth_city": "Maastricht",
    "birth_country": "Netherlands",
    "birth_city_latitude": "50.8513682",
    "birth_city_longitude": "5.6909725"
  },
  {
    "id": "185",
    "year": "1936",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "186",
    "year": "1936",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "187",
    "year": "1936",
    "birth_city": "Frankfurt-on-the-Main",
    "birth_country": "Germany",
    "birth_city_latitude": "50.1109221",
    "birth_city_longitude": "8.6821267"
  },
  {
    "id": "188",
    "year": "1936",
    "birth_city": "Buenos Aires",
    "birth_country": "Argentina",
    "birth_city_latitude": "-34.6036844",
    "birth_city_longitude": "-58.3815591"
  },
  {
    "id": "189",
    "year": "1936",
    "birth_city": "Peggau",
    "birth_country": "Austria",
    "birth_city_latitude": "47.2056107",
    "birth_city_longitude": "15.3434469"
  },
  {
    "id": "190",
    "year": "1936",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "191",
    "year": "1937",
    "birth_city": "Chorley",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.653511",
    "birth_city_longitude": "-2.632596"
  },
  {
    "id": "192",
    "year": "1937",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "193",
    "year": "1937",
    "birth_city": "Neuilly-sur-Seine",
    "birth_country": "France",
    "birth_city_latitude": "48.884831",
    "birth_city_longitude": "2.26851"
  },
  {
    "id": "194",
    "year": "1937",
    "birth_city": "Budapest",
    "birth_country": "Austria-Hungary (Hungary)",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "195",
    "year": "1937",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "196",
    "year": "1937",
    "birth_city": "\"Bloomington",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.4842027"
  },
  {
    "id": "197",
    "year": "1937",
    "birth_city": "Cambridge",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.1950788",
    "birth_city_longitude": "0.1312729"
  },
  {
    "id": "198",
    "year": "1938",
    "birth_city": "Vienna",
    "birth_country": "Austria-Hungary (Austria)",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "199",
    "year": "1938",
    "birth_city": "\"Hillsboro",
    "birth_country": " WV\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.1353972"
  },
  {
    "id": "200",
    "year": "1938",
    "birth_city": "Ghent",
    "birth_country": "Belgium",
    "birth_city_latitude": "51.0500182",
    "birth_city_longitude": "3.7303351"
  },
  {
    "id": "201",
    "year": "1938",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "202",
    "year": "1938",
    "birth_city": "Rome",
    "birth_country": "Italy",
    "birth_city_latitude": "41.9027835",
    "birth_city_longitude": "12.4963655"
  },
  {
    "id": "203",
    "year": "1939",
    "birth_city": "Bremerhaven-Lehe",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5745837",
    "birth_city_longitude": "8.5985456"
  },
  {
    "id": "204",
    "year": "1939",
    "birth_city": "Vukovar",
    "birth_country": "Austria-Hungary (Croatia)",
    "birth_city_latitude": "45.3452377",
    "birth_city_longitude": "19.0010204"
  },
  {
    "id": "205",
    "year": "1939",
    "birth_city": "H?meenkyr?",
    "birth_country": "Russian Empire (Finland)",
    "birth_city_latitude": "61.6381294",
    "birth_city_longitude": "23.196513"
  },
  {
    "id": "206",
    "year": "1939",
    "birth_city": "Lagow",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "207",
    "year": "1939",
    "birth_city": "\"Canton",
    "birth_country": " SD\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.3008146"
  },
  {
    "id": "208",
    "year": "1943",
    "birth_city": "Budapest",
    "birth_country": "Austria-Hungary (Hungary)",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "209",
    "year": "1943",
    "birth_city": "Copenhagen",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.6760968",
    "birth_city_longitude": "12.5683371"
  },
  {
    "id": "210",
    "year": "1943",
    "birth_city": "\"Hume",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.7967015"
  },
  {
    "id": "211",
    "year": "1943",
    "birth_city": "Sorau (Zory)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "51.6420121",
    "birth_city_longitude": "15.1369992"
  },
  {
    "id": "212",
    "year": "1944",
    "birth_city": "Frankfurt-on-the-Main",
    "birth_country": "Germany",
    "birth_city_latitude": "50.1109221",
    "birth_city_longitude": "8.6821267"
  },
  {
    "id": "213",
    "year": "1944",
    "birth_city": "Fars?",
    "birth_country": "Denmark",
    "birth_city_latitude": "56.77055",
    "birth_city_longitude": "9.338168"
  },
  {
    "id": "214",
    "year": "1944",
    "birth_city": "\"San Francisco",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.7749295"
  },
  {
    "id": "215",
    "year": "1944",
    "birth_city": "\"Platteville",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.73416"
  },
  {
    "id": "216",
    "year": "1944",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "217",
    "year": "1944",
    "birth_city": "Rymanow",
    "birth_country": "Austria-Hungary (Poland)",
    "birth_city_latitude": "49.57642",
    "birth_city_longitude": "21.86815"
  },
  {
    "id": "218",
    "year": "1945",
    "birth_city": "Helsinki",
    "birth_country": "Russian Empire (Finland)",
    "birth_city_latitude": "60.1698557",
    "birth_city_longitude": "24.938379"
  },
  {
    "id": "219",
    "year": "1945",
    "birth_city": "Vicu?a",
    "birth_country": "Chile",
    "birth_city_latitude": "-30.0326781",
    "birth_city_longitude": "-70.7080736"
  },
  {
    "id": "220",
    "year": "1945",
    "birth_city": "Lochfield",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.8294718",
    "birth_city_longitude": "-4.4134442"
  },
  {
    "id": "221",
    "year": "1945",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "222",
    "year": "1945",
    "birth_city": "Adelaide",
    "birth_country": "Australia",
    "birth_city_latitude": "-34.9284989",
    "birth_city_longitude": "138.6007456"
  },
  {
    "id": "223",
    "year": "1945",
    "birth_city": "\"Olympus",
    "birth_country": " TN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "35.5174913"
  },
  {
    "id": "224",
    "year": "1945",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "225",
    "year": "1946",
    "birth_city": "\"Canton",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.1584324"
  },
  {
    "id": "226",
    "year": "1946",
    "birth_city": "\"Yonkers",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.9312099"
  },
  {
    "id": "227",
    "year": "1946",
    "birth_city": "\"Ridgeville",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.2892107"
  },
  {
    "id": "228",
    "year": "1946",
    "birth_city": "Calw",
    "birth_country": "Germany",
    "birth_city_latitude": "48.7126752",
    "birth_city_longitude": "8.7425205"
  },
  {
    "id": "229",
    "year": "1946",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "230",
    "year": "1946",
    "birth_city": "\"Jamaica Plain",
    "birth_country": " MA (Boston)\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3132414"
  },
  {
    "id": "231",
    "year": "1946",
    "birth_city": "\"Livingston Manor",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.9003667"
  },
  {
    "id": "232",
    "year": "1946",
    "birth_city": "\"Cambridge",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3736158"
  },
  {
    "id": "233",
    "year": "1947",
    "birth_city": "\"Rufford",
    "birth_country": " near Chesterfield\"",
    "birth_city_latitude": "United Kingdom",
    "birth_city_longitude": "53.2286554"
  },
  {
    "id": "234",
    "year": "1947",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "235",
    "year": "1947",
    "birth_city": "Prague",
    "birth_country": "Austria-Hungary (Czech Republic)",
    "birth_city_latitude": "50.0755381",
    "birth_city_longitude": "14.4378005"
  },
  {
    "id": "236",
    "year": "1947",
    "birth_city": "Prague",
    "birth_country": "Austria-Hungary (Czech Republic)",
    "birth_city_latitude": "50.0755381",
    "birth_city_longitude": "14.4378005"
  },
  {
    "id": "237",
    "year": "1947",
    "birth_city": "Buenos Aires",
    "birth_country": "Argentina",
    "birth_city_latitude": "-34.6036844",
    "birth_city_longitude": "-58.3815591"
  },
  {
    "id": "238",
    "year": "1947",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "239",
    "year": "1947",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "240",
    "year": "1947",
    "birth_city": "Bradford",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.7937996",
    "birth_city_longitude": "-1.7563583"
  },
  {
    "id": "241",
    "year": "1948",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "242",
    "year": "1948",
    "birth_city": "\"St. Louis",
    "birth_country": " MO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.6270025"
  },
  {
    "id": "243",
    "year": "1948",
    "birth_city": "Olten",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.3499624",
    "birth_city_longitude": "7.9037033"
  },
  {
    "id": "244",
    "year": "1948",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "245",
    "year": "1949",
    "birth_city": "Niagara Falls",
    "birth_country": "Canada",
    "birth_city_latitude": "43.0895577",
    "birth_city_longitude": "-79.0849436"
  },
  {
    "id": "246",
    "year": "1949",
    "birth_city": "\"New Albany",
    "birth_country": " MS\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.4942683"
  },
  {
    "id": "247",
    "year": "1949",
    "birth_city": "Frauenfeld",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.5535997",
    "birth_city_longitude": "8.8987541"
  },
  {
    "id": "248",
    "year": "1949",
    "birth_city": "Avanca",
    "birth_country": "Portugal",
    "birth_city_latitude": "40.8068092",
    "birth_city_longitude": "-8.5666077"
  },
  {
    "id": "249",
    "year": "1949",
    "birth_city": "Kilmaurs",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.639161",
    "birth_city_longitude": "-4.527757"
  },
  {
    "id": "250",
    "year": "1949",
    "birth_city": "Tokyo",
    "birth_country": "Japan",
    "birth_city_latitude": "35.6761919",
    "birth_city_longitude": "139.6503106"
  },
  {
    "id": "251",
    "year": "1950",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "252",
    "year": "1950",
    "birth_city": "K?nigsh��tte (Chorz��w)",
    "birth_country": "Prussia (Poland)",
    "birth_city_latitude": "50.3018543",
    "birth_city_longitude": "18.9543584"
  },
  {
    "id": "253",
    "year": "1950",
    "birth_city": "Trelleck",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.741594",
    "birth_city_longitude": "-2.724085"
  },
  {
    "id": "254",
    "year": "1950",
    "birth_city": "\"South Norwalk",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.0937079"
  },
  {
    "id": "255",
    "year": "1950",
    "birth_city": "Wloclawek",
    "birth_country": "Poland",
    "birth_city_latitude": "52.6483303",
    "birth_city_longitude": "19.0677357"
  },
  {
    "id": "256",
    "year": "1950",
    "birth_city": "\"Pittsburgh",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.4406248"
  },
  {
    "id": "257",
    "year": "1950",
    "birth_city": "\"Detroit",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.331427"
  },
  {
    "id": "258",
    "year": "1950",
    "birth_city": "Tonbridge",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.195043",
    "birth_city_longitude": "0.27568"
  },
  {
    "id": "259",
    "year": "1951",
    "birth_city": "\"Redondo Beach",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "33.8491816"
  },
  {
    "id": "260",
    "year": "1951",
    "birth_city": "\"Ishpeming",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.4885469"
  },
  {
    "id": "261",
    "year": "1951",
    "birth_city": "V?xj?",
    "birth_country": "Sweden",
    "birth_city_latitude": "56.8790044",
    "birth_city_longitude": "14.8058522"
  },
  {
    "id": "262",
    "year": "1951",
    "birth_city": "Pretoria",
    "birth_country": "South Africa",
    "birth_city_latitude": "-25.7478676",
    "birth_city_longitude": "28.2292712"
  },
  {
    "id": "263",
    "year": "1951",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "264",
    "year": "1951",
    "birth_city": "Todmorden",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.716344",
    "birth_city_longitude": "-2.0987969"
  },
  {
    "id": "265",
    "year": "1951",
    "birth_city": "Dungarvan",
    "birth_country": "Ireland",
    "birth_city_latitude": "52.0936763",
    "birth_city_longitude": "-7.6203627"
  },
  {
    "id": "266",
    "year": "1952",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "267",
    "year": "1952",
    "birth_city": "Liverpool",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.4083714",
    "birth_city_longitude": "-2.9915726"
  },
  {
    "id": "268",
    "year": "1952",
    "birth_city": "Bordeaux",
    "birth_country": "France",
    "birth_city_latitude": "44.837789",
    "birth_city_longitude": "-0.57918"
  },
  {
    "id": "269",
    "year": "1952",
    "birth_city": "Priluka (Nova Pryluka)",
    "birth_country": "Russian Empire (Ukraine)",
    "birth_city_latitude": "49.3734042",
    "birth_city_longitude": "28.6989478"
  },
  {
    "id": "270",
    "year": "1952",
    "birth_city": "Kaysersberg",
    "birth_country": "Germany (France)",
    "birth_city_latitude": "48.13889",
    "birth_city_longitude": "7.264023"
  },
  {
    "id": "271",
    "year": "1952",
    "birth_city": "Zurich",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.3768866",
    "birth_city_longitude": "8.541694"
  },
  {
    "id": "272",
    "year": "1952",
    "birth_city": "\"Taylorville",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.548935"
  },
  {
    "id": "273",
    "year": "1953",
    "birth_city": "Worms",
    "birth_country": "Germany",
    "birth_city_latitude": "49.6341372",
    "birth_city_longitude": "8.3507182"
  },
  {
    "id": "274",
    "year": "1953",
    "birth_city": "Woodstock",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.847267",
    "birth_city_longitude": "-1.354091"
  },
  {
    "id": "275",
    "year": "1953",
    "birth_city": "Hildesheim",
    "birth_country": "Germany",
    "birth_city_latitude": "52.154778",
    "birth_city_longitude": "9.9579652"
  },
  {
    "id": "276",
    "year": "1953",
    "birth_city": "Koenigsberg (Kaliningrad)",
    "birth_country": "Germany (Russia)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "277",
    "year": "1953",
    "birth_city": "\"Uniontown",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.900076"
  },
  {
    "id": "278",
    "year": "1953",
    "birth_city": "Amsterdam",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.3675734",
    "birth_city_longitude": "4.9041389"
  },
  {
    "id": "279",
    "year": "1954",
    "birth_city": "\"Portland",
    "birth_country": " OR\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "45.515232"
  },
  {
    "id": "280",
    "year": "1954",
    "birth_city": "\"Oak Park",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8850317"
  },
  {
    "id": "281",
    "year": "1954",
    "birth_city": "\"West Hartford",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.7620842"
  },
  {
    "id": "282",
    "year": "1954",
    "birth_city": "\"Ann Arbor",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.2808256"
  },
  {
    "id": "283",
    "year": "1954",
    "birth_city": "\"Auburn",
    "birth_country": " AL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "32.6098566"
  },
  {
    "id": "284",
    "year": "1954",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "285",
    "year": "1954",
    "birth_city": "Breslau (Wroclaw)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "286",
    "year": "1954",
    "birth_city": "Oranienburg",
    "birth_country": "Germany",
    "birth_city_latitude": "52.7557351",
    "birth_city_longitude": "13.2408643"
  },
  {
    "id": "287",
    "year": "1955",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "288",
    "year": "1955",
    "birth_city": "Reykjavik",
    "birth_country": "Iceland",
    "birth_city_latitude": "64.1469868",
    "birth_city_longitude": "-21.9407552"
  },
  {
    "id": "289",
    "year": "1955",
    "birth_city": "Link?ping",
    "birth_country": "Sweden",
    "birth_city_latitude": "58.410807",
    "birth_city_longitude": "15.6213727"
  },
  {
    "id": "290",
    "year": "1955",
    "birth_city": "\"Los Angeles",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.0522342"
  },
  {
    "id": "291",
    "year": "1955",
    "birth_city": "Blankenburg",
    "birth_country": "Germany",
    "birth_city_latitude": "51.8164261",
    "birth_city_longitude": "10.9773091"
  },
  {
    "id": "292",
    "year": "1956",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "293",
    "year": "1956",
    "birth_city": "Saratov",
    "birth_country": "Russia",
    "birth_city_latitude": "51.5461754",
    "birth_city_longitude": "46.0154123"
  },
  {
    "id": "294",
    "year": "1956",
    "birth_city": "Moguer",
    "birth_country": "Spain",
    "birth_city_latitude": "37.27464",
    "birth_city_longitude": "-6.8369079"
  },
  {
    "id": "295",
    "year": "1956",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "296",
    "year": "1956",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "297",
    "year": "1956",
    "birth_city": "\"Orange",
    "birth_country": " NJ\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7706187"
  },
  {
    "id": "298",
    "year": "1956",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "299",
    "year": "1956",
    "birth_city": "\"Madison",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0721661"
  },
  {
    "id": "300",
    "year": "1956",
    "birth_city": "Amoy",
    "birth_country": "China",
    "birth_city_latitude": "24.4795099",
    "birth_city_longitude": "118.0894799"
  },
  {
    "id": "301",
    "year": "1957",
    "birth_city": "Glasgow",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.8616704",
    "birth_city_longitude": "-4.2583345"
  },
  {
    "id": "302",
    "year": "1957",
    "birth_city": "Mondovi",
    "birth_country": "French Algeria (Algeria)",
    "birth_city_latitude": "36.6844589",
    "birth_city_longitude": "7.748134"
  },
  {
    "id": "303",
    "year": "1957",
    "birth_city": "Neuch?tel",
    "birth_country": "Switzerland",
    "birth_city_latitude": "46.9899874",
    "birth_city_longitude": "6.9292732"
  },
  {
    "id": "304",
    "year": "1957",
    "birth_city": "Toronto",
    "birth_country": "Canada",
    "birth_city_latitude": "43.653226",
    "birth_city_longitude": "-79.3831843"
  },
  {
    "id": "305",
    "year": "1957",
    "birth_city": "\"Hofei",
    "birth_country": " Anhwei\"",
    "birth_city_latitude": "China",
    "birth_city_longitude": "31.8205699"
  },
  {
    "id": "306",
    "year": "1957",
    "birth_city": "Shanghai",
    "birth_country": "China",
    "birth_city_latitude": "31.230416",
    "birth_city_longitude": "121.473701"
  },
  {
    "id": "307",
    "year": "1958",
    "birth_city": "Rendcombe",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.78974",
    "birth_city_longitude": "-1.970906"
  },
  {
    "id": "308",
    "year": "1958",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "309",
    "year": "1958",
    "birth_city": "\"Wahoo",
    "birth_country": " NE\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.2115023"
  },
  {
    "id": "310",
    "year": "1958",
    "birth_city": "\"Boulder",
    "birth_country": " CO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.0149856"
  },
  {
    "id": "311",
    "year": "1958",
    "birth_city": "\"Montclair",
    "birth_country": " NJ\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.8259007"
  },
  {
    "id": "312",
    "year": "1958",
    "birth_city": "Dinant",
    "birth_country": "Belgium",
    "birth_city_latitude": "50.2607382",
    "birth_city_longitude": "4.9122308"
  },
  {
    "id": "313",
    "year": "1958",
    "birth_city": "Novaya Chigla",
    "birth_country": "Russia",
    "birth_city_latitude": "51.2221617",
    "birth_city_longitude": "40.4794612"
  },
  {
    "id": "314",
    "year": "1958",
    "birth_city": "Vladivostok",
    "birth_country": "Russia",
    "birth_city_latitude": "43.1332484",
    "birth_city_longitude": "131.9112975"
  },
  {
    "id": "315",
    "year": "1958",
    "birth_city": "Leningrad (Saint Petersburg)",
    "birth_country": "Russia",
    "birth_city_latitude": "59.9342596",
    "birth_city_longitude": "30.3350941"
  },
  {
    "id": "316",
    "year": "1959",
    "birth_city": "Prague",
    "birth_country": "Austria-Hungary (Czech Republic)",
    "birth_city_latitude": "50.0755381",
    "birth_city_longitude": "14.4378005"
  },
  {
    "id": "317",
    "year": "1959",
    "birth_city": "Modica",
    "birth_country": "Italy",
    "birth_city_latitude": "36.8588355",
    "birth_city_longitude": "14.7608152"
  },
  {
    "id": "318",
    "year": "1959",
    "birth_city": "Luarca",
    "birth_country": "Spain",
    "birth_city_latitude": "43.5420137",
    "birth_city_longitude": "-6.5359461"
  },
  {
    "id": "319",
    "year": "1959",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "320",
    "year": "1959",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "321",
    "year": "1959",
    "birth_city": "Tivoli",
    "birth_country": "Italy",
    "birth_city_latitude": "41.959817",
    "birth_city_longitude": "12.8022261"
  },
  {
    "id": "322",
    "year": "1959",
    "birth_city": "\"San Francisco",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.7749295"
  },
  {
    "id": "323",
    "year": "1960",
    "birth_city": "\"Grand Valley",
    "birth_country": " CO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.3124789"
  },
  {
    "id": "324",
    "year": "1960",
    "birth_city": "Pointe-��-Pitre",
    "birth_country": "Guadeloupe Island",
    "birth_city_latitude": "16.2370504",
    "birth_city_longitude": "-61.5376272"
  },
  {
    "id": "325",
    "year": "1960",
    "birth_city": "Traralgon",
    "birth_country": "Australia",
    "birth_city_latitude": "-38.1940197",
    "birth_city_longitude": "146.5336107"
  },
  {
    "id": "326",
    "year": "1960",
    "birth_city": "Rio de Janeiro",
    "birth_country": "Brazil",
    "birth_city_latitude": "-22.9068467",
    "birth_city_longitude": "-43.1728965"
  },
  {
    "id": "327",
    "year": "1960",
    "birth_city": "Bulawayo",
    "birth_country": "Southern Rhodesia (Zimbabwe)",
    "birth_city_latitude": "-20.1969691",
    "birth_city_longitude": "28.5681258"
  },
  {
    "id": "328",
    "year": "1960",
    "birth_city": "\"Cleveland",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.49932"
  },
  {
    "id": "329",
    "year": "1961",
    "birth_city": "\"St. Paul",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.9537029"
  },
  {
    "id": "330",
    "year": "1961",
    "birth_city": "Dolac",
    "birth_country": "Bosnia (Bosnia and Herzegovina)",
    "birth_city_latitude": "44.0860686",
    "birth_city_longitude": "17.9900999"
  },
  {
    "id": "331",
    "year": "1961",
    "birth_city": "Budapest",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "332",
    "year": "1961",
    "birth_city": "J?nk?ping",
    "birth_country": "Sweden",
    "birth_city_latitude": "57.7826137",
    "birth_city_longitude": "14.1617876"
  },
  {
    "id": "333",
    "year": "1961",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "334",
    "year": "1961",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "335",
    "year": "1962",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "336",
    "year": "1962",
    "birth_city": "Oxford",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.7520209",
    "birth_city_longitude": "-1.2577263"
  },
  {
    "id": "337",
    "year": "1962",
    "birth_city": "\"Salinas",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "36.6777372"
  },
  {
    "id": "338",
    "year": "1962",
    "birth_city": "Northampton",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.237065",
    "birth_city_longitude": "-0.8944421"
  },
  {
    "id": "339",
    "year": "1962",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "340",
    "year": "1962",
    "birth_city": "Pongaroa",
    "birth_country": "New Zealand",
    "birth_city_latitude": "-40.5426816",
    "birth_city_longitude": "176.1909648"
  },
  {
    "id": "341",
    "year": "1962",
    "birth_city": "\"Portland",
    "birth_country": " OR\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "45.515232"
  },
  {
    "id": "342",
    "year": "1962",
    "birth_city": "Baku",
    "birth_country": "Russian Empire (Azerbaijan)",
    "birth_city_latitude": "40.4092617",
    "birth_city_longitude": "49.8670924"
  },
  {
    "id": "343",
    "year": "1963",
    "birth_city": "Helsa",
    "birth_country": "Germany",
    "birth_city_latitude": "51.2573397",
    "birth_city_longitude": "9.6863827"
  },
  {
    "id": "344",
    "year": "1963",
    "birth_city": "Imperia",
    "birth_country": "Italy",
    "birth_city_latitude": "43.8896857",
    "birth_city_longitude": "8.039517"
  },
  {
    "id": "345",
    "year": "1963",
    "birth_city": "Smyrna (Izmir)",
    "birth_country": "Ottoman Empire (Turkey)",
    "birth_city_latitude": "38.423734",
    "birth_city_longitude": "27.142826"
  },
  {
    "id": "346",
    "year": "1963",
    "birth_city": "Melbourne",
    "birth_country": "Australia",
    "birth_city_latitude": "-37.8136276",
    "birth_city_longitude": "144.9630576"
  },
  {
    "id": "347",
    "year": "1963",
    "birth_city": "Banbury",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.0629009",
    "birth_city_longitude": "-1.339775"
  },
  {
    "id": "348",
    "year": "1963",
    "birth_city": "Hampstead",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5556461",
    "birth_city_longitude": "-0.1761749"
  },
  {
    "id": "349",
    "year": "1963",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "350",
    "year": "1963",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "351",
    "year": "1963",
    "birth_city": "Budapest",
    "birth_country": "Austria-Hungary (Hungary)",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "352",
    "year": "1963",
    "birth_city": "Kattowitz (Katowice)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "50.2648919",
    "birth_city_longitude": "19.0237815"
  },
  {
    "id": "353",
    "year": "1963",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "354",
    "year": "1964",
    "birth_city": "Cairo",
    "birth_country": "Egypt",
    "birth_city_latitude": "30.0444196",
    "birth_city_longitude": "31.2357116"
  },
  {
    "id": "355",
    "year": "1964",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "356",
    "year": "1964",
    "birth_city": "Neisse (Nysa)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "51.38635105",
    "birth_city_longitude": "14.84405527"
  },
  {
    "id": "357",
    "year": "1964",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "358",
    "year": "1964",
    "birth_city": "\"Atlanta",
    "birth_country": " GA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "33.748752"
  },
  {
    "id": "359",
    "year": "1964",
    "birth_city": "\"Greenville",
    "birth_country": " SC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.8526176"
  },
  {
    "id": "360",
    "year": "1964",
    "birth_city": "Usman",
    "birth_country": "Union of Soviet Socialist Republics (Russia)",
    "birth_city_latitude": "61.52401",
    "birth_city_longitude": "105.318756"
  },
  {
    "id": "361",
    "year": "1964",
    "birth_city": "Atherton",
    "birth_country": "Australia",
    "birth_city_latitude": "-17.2666843",
    "birth_city_longitude": "145.4768687"
  },
  {
    "id": "362",
    "year": "1965",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "363",
    "year": "1965",
    "birth_city": "Veshenskaya",
    "birth_country": "Russia",
    "birth_city_latitude": "49.6315639",
    "birth_city_longitude": "41.7147172"
  },
  {
    "id": "364",
    "year": "1965",
    "birth_city": "Nancy",
    "birth_country": "France",
    "birth_city_latitude": "48.692054",
    "birth_city_longitude": "6.184417"
  },
  {
    "id": "365",
    "year": "1965",
    "birth_city": "Ainay-le-Ch?teau",
    "birth_country": "France",
    "birth_city_latitude": "46.709714",
    "birth_city_longitude": "2.691018"
  },
  {
    "id": "366",
    "year": "1965",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "367",
    "year": "1965",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "368",
    "year": "1965",
    "birth_city": "Kyoto",
    "birth_country": "Japan",
    "birth_city_latitude": "35.011564",
    "birth_city_longitude": "135.7681489"
  },
  {
    "id": "369",
    "year": "1965",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "370",
    "year": "1965",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "371",
    "year": "1966",
    "birth_city": "\"Newburyport",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.8125913"
  },
  {
    "id": "372",
    "year": "1966",
    "birth_city": "Buczacz (Buchach)",
    "birth_country": "Austria-Hungary (Ukraine)",
    "birth_city_latitude": "49.064831",
    "birth_city_longitude": "25.3817159"
  },
  {
    "id": "373",
    "year": "1966",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "374",
    "year": "1966",
    "birth_city": "\"Baltimore",
    "birth_country": " MD\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.2903848"
  },
  {
    "id": "375",
    "year": "1966",
    "birth_city": "Halifax",
    "birth_country": "Canada",
    "birth_city_latitude": "44.8857087",
    "birth_city_longitude": "-63.1005273"
  },
  {
    "id": "376",
    "year": "1966",
    "birth_city": "Guebwiller",
    "birth_country": "Germany (France)",
    "birth_city_latitude": "47.911586",
    "birth_city_longitude": "7.209336"
  },
  {
    "id": "377",
    "year": "1967",
    "birth_city": "Bochum",
    "birth_country": "Germany",
    "birth_city_latitude": "51.4818445",
    "birth_city_longitude": "7.2162363"
  },
  {
    "id": "378",
    "year": "1967",
    "birth_city": "Cambridge",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.1950788",
    "birth_city_longitude": "0.1312729"
  },
  {
    "id": "379",
    "year": "1967",
    "birth_city": "Stainforth",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.5944945",
    "birth_city_longitude": "-1.0300371"
  },
  {
    "id": "380",
    "year": "1967",
    "birth_city": "Guatemala City",
    "birth_country": "Guatemala",
    "birth_city_latitude": "14.6349149",
    "birth_city_longitude": "-90.5068824"
  },
  {
    "id": "381",
    "year": "1967",
    "birth_city": "Helsinki",
    "birth_country": "Russian Empire (Finland)",
    "birth_city_latitude": "60.1698557",
    "birth_city_longitude": "24.938379"
  },
  {
    "id": "382",
    "year": "1967",
    "birth_city": "\"Bloomsburg",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.003698"
  },
  {
    "id": "383",
    "year": "1967",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "384",
    "year": "1967",
    "birth_city": "Strassburg (Strasbourg)",
    "birth_country": "Germany (France)",
    "birth_city_latitude": "48.5734053",
    "birth_city_longitude": "7.7521113"
  },
  {
    "id": "385",
    "year": "1968",
    "birth_city": "Kristiania (Oslo)",
    "birth_country": "Norway",
    "birth_city_latitude": "59.9138688",
    "birth_city_longitude": "10.7522454"
  },
  {
    "id": "386",
    "year": "1968",
    "birth_city": "Osaka",
    "birth_country": "Japan",
    "birth_city_latitude": "34.6937249",
    "birth_city_longitude": "135.5022535"
  },
  {
    "id": "387",
    "year": "1968",
    "birth_city": "\"Urbana",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.1105875"
  },
  {
    "id": "388",
    "year": "1968",
    "birth_city": "Raipur",
    "birth_country": "India",
    "birth_city_latitude": "21.2513844",
    "birth_city_longitude": "81.6296413"
  },
  {
    "id": "389",
    "year": "1968",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "390",
    "year": "1968",
    "birth_city": "Bayonne",
    "birth_country": "France",
    "birth_city_latitude": "43.492949",
    "birth_city_longitude": "-1.474841"
  },
  {
    "id": "391",
    "year": "1968",
    "birth_city": "\"San Francisco",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.7749295"
  },
  {
    "id": "392",
    "year": "1969",
    "birth_city": "Gravesend",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.441884",
    "birth_city_longitude": "0.370759"
  },
  {
    "id": "393",
    "year": "1969",
    "birth_city": "Kristiania (Oslo)",
    "birth_country": "Norway",
    "birth_city_latitude": "59.9138688",
    "birth_city_longitude": "10.7522454"
  },
  {
    "id": "394",
    "year": "1969",
    "birth_city": "Oslo",
    "birth_country": "Norway",
    "birth_city_latitude": "59.9138688",
    "birth_city_longitude": "10.7522454"
  },
  {
    "id": "395",
    "year": "1969",
    "birth_city": "the Hague",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.0704978",
    "birth_city_longitude": "4.3006999"
  },
  {
    "id": "396",
    "year": "1969",
    "birth_city": "Dublin",
    "birth_country": "Ireland",
    "birth_city_latitude": "53.3498053",
    "birth_city_longitude": "-6.2603097"
  },
  {
    "id": "397",
    "year": "1969",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "398",
    "year": "1969",
    "birth_city": "\"Owosso",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.9978049"
  },
  {
    "id": "399",
    "year": "1969",
    "birth_city": "Torino",
    "birth_country": "Italy",
    "birth_city_latitude": "45.0703393",
    "birth_city_longitude": "7.686864"
  },
  {
    "id": "400",
    "year": "1969",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "401",
    "year": "1969",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "402",
    "year": "1970",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "403",
    "year": "1970",
    "birth_city": "\"Gary",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.6020403"
  },
  {
    "id": "404",
    "year": "1970",
    "birth_city": "Kislovodsk",
    "birth_country": "Russia",
    "birth_city_latitude": "43.9055914",
    "birth_city_longitude": "42.7159184"
  },
  {
    "id": "405",
    "year": "1970",
    "birth_city": "Leipzig",
    "birth_country": "Germany",
    "birth_city_latitude": "51.3396955",
    "birth_city_longitude": "12.3730747"
  },
  {
    "id": "406",
    "year": "1970",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "407",
    "year": "1970",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "408",
    "year": "1970",
    "birth_city": "\"Cresco",
    "birth_country": " IA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.3813568"
  },
  {
    "id": "409",
    "year": "1970",
    "birth_city": "Norrk?ping",
    "birth_country": "Sweden",
    "birth_city_latitude": "58.587745",
    "birth_city_longitude": "16.192421"
  },
  {
    "id": "410",
    "year": "1970",
    "birth_city": "Lyon",
    "birth_country": "France",
    "birth_city_latitude": "45.764043",
    "birth_city_longitude": "4.835659"
  },
  {
    "id": "411",
    "year": "1971",
    "birth_city": "Hamburg",
    "birth_country": "Germany",
    "birth_city_latitude": "53.5488282",
    "birth_city_longitude": "9.9871703"
  },
  {
    "id": "412",
    "year": "1971",
    "birth_city": "Pinsk",
    "birth_country": "Russian Empire (Belarus)",
    "birth_city_latitude": "52.1181686",
    "birth_city_longitude": "26.1016778"
  },
  {
    "id": "413",
    "year": "1971",
    "birth_city": "Parral",
    "birth_country": "Chile",
    "birth_city_latitude": "-36.1406484",
    "birth_city_longitude": "-71.8227528"
  },
  {
    "id": "414",
    "year": "1971",
    "birth_city": "\"Burlingame",
    "birth_country": " KS\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.7538946"
  },
  {
    "id": "415",
    "year": "1971",
    "birth_city": "L��beck",
    "birth_country": "Germany",
    "birth_city_latitude": "53.8654673",
    "birth_city_longitude": "10.6865593"
  },
  {
    "id": "416",
    "year": "1971",
    "birth_city": "Budapest",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "417",
    "year": "1972",
    "birth_city": "\"Monessen",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.1484053"
  },
  {
    "id": "418",
    "year": "1972",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "419",
    "year": "1972",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "420",
    "year": "1972",
    "birth_city": "Warwick",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.282316",
    "birth_city_longitude": "-1.584927"
  },
  {
    "id": "421",
    "year": "1972",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "422",
    "year": "1972",
    "birth_city": "Cologne",
    "birth_country": "Germany",
    "birth_city_latitude": "50.937531",
    "birth_city_longitude": "6.9602786"
  },
  {
    "id": "423",
    "year": "1972",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "424",
    "year": "1972",
    "birth_city": "Newton-le-Willows",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.452889",
    "birth_city_longitude": "-2.63508"
  },
  {
    "id": "425",
    "year": "1972",
    "birth_city": "\"Madison",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0721661"
  },
  {
    "id": "426",
    "year": "1972",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "427",
    "year": "1972",
    "birth_city": "\"Oak Park",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8850317"
  },
  {
    "id": "428",
    "year": "1973",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "429",
    "year": "1973",
    "birth_city": "Todmorden",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.716344",
    "birth_city_longitude": "-2.0987969"
  },
  {
    "id": "430",
    "year": "1973",
    "birth_city": "St. Petersburg",
    "birth_country": "Russia",
    "birth_city_latitude": "59.9310584",
    "birth_city_longitude": "30.3609097"
  },
  {
    "id": "431",
    "year": "1973",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "432",
    "year": "1973",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "433",
    "year": "1973",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "434",
    "year": "1973",
    "birth_city": "the Hague",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.0704978",
    "birth_city_longitude": "4.3006999"
  },
  {
    "id": "435",
    "year": "1973",
    "birth_city": "F��rth",
    "birth_country": "Germany",
    "birth_city_latitude": "49.4771169",
    "birth_city_longitude": "10.988667"
  },
  {
    "id": "436",
    "year": "1973",
    "birth_city": "Nam Ha province",
    "birth_country": "Vietnam",
    "birth_city_latitude": "18.3339509",
    "birth_city_longitude": "105.9054085"
  },
  {
    "id": "437",
    "year": "1973",
    "birth_city": "Osaka",
    "birth_country": "Japan",
    "birth_city_latitude": "34.6937249",
    "birth_city_longitude": "135.5022535"
  },
  {
    "id": "438",
    "year": "1973",
    "birth_city": "Bergen",
    "birth_country": "Norway",
    "birth_city_latitude": "60.3912628",
    "birth_city_longitude": "5.3220544"
  },
  {
    "id": "439",
    "year": "1973",
    "birth_city": "Cardiff",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.483707",
    "birth_city_longitude": "-3.1680962"
  },
  {
    "id": "440",
    "year": "1974",
    "birth_city": "\"Sterling",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.788642"
  },
  {
    "id": "441",
    "year": "1974",
    "birth_city": "Skattungbyn",
    "birth_country": "Sweden",
    "birth_city_latitude": "61.1866825",
    "birth_city_longitude": "14.853163"
  },
  {
    "id": "442",
    "year": "1974",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "443",
    "year": "1974",
    "birth_city": "Svartbj?rnsbyn",
    "birth_country": "Sweden",
    "birth_city_latitude": "65.85",
    "birth_city_longitude": "21.71667"
  },
  {
    "id": "444",
    "year": "1974",
    "birth_city": "J?msh?g",
    "birth_country": "Sweden",
    "birth_city_latitude": "56.2403103",
    "birth_city_longitude": "14.5308835"
  },
  {
    "id": "445",
    "year": "1974",
    "birth_city": "Longlier",
    "birth_country": "Belgium",
    "birth_city_latitude": "49.85544",
    "birth_city_longitude": "5.45288"
  },
  {
    "id": "446",
    "year": "1974",
    "birth_city": "Thames Ditton",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.389686",
    "birth_city_longitude": "-0.339189"
  },
  {
    "id": "447",
    "year": "1974",
    "birth_city": "Iasi",
    "birth_country": "Romania",
    "birth_city_latitude": "47.1584549",
    "birth_city_longitude": "27.6014418"
  },
  {
    "id": "448",
    "year": "1974",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "449",
    "year": "1974",
    "birth_city": "Tabuse",
    "birth_country": "Japan",
    "birth_city_latitude": "33.9547155",
    "birth_city_longitude": "132.0413779"
  },
  {
    "id": "450",
    "year": "1974",
    "birth_city": "Brighton",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.8229402",
    "birth_city_longitude": "-0.1362672"
  },
  {
    "id": "451",
    "year": "1974",
    "birth_city": "Fowey",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.33499",
    "birth_city_longitude": "-4.636525"
  },
  {
    "id": "452",
    "year": "1975",
    "birth_city": "Sydney",
    "birth_country": "Australia",
    "birth_city_latitude": "-33.8688197",
    "birth_city_longitude": "151.2092955"
  },
  {
    "id": "453",
    "year": "1975",
    "birth_city": "Sarajevo",
    "birth_country": "Austria-Hungary (Bosnia and Herzegovina)",
    "birth_city_latitude": "43.8562586",
    "birth_city_longitude": "18.4130763"
  },
  {
    "id": "454",
    "year": "1975",
    "birth_city": "St. Petersburg",
    "birth_country": "Russian Empire (Russia)",
    "birth_city_latitude": "59.9342596",
    "birth_city_longitude": "30.3350941"
  },
  {
    "id": "455",
    "year": "1975",
    "birth_city": "'s Graveland",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.2446819",
    "birth_city_longitude": "5.1314775"
  },
  {
    "id": "456",
    "year": "1975",
    "birth_city": "Genoa",
    "birth_country": "Italy",
    "birth_city_latitude": "44.4056499",
    "birth_city_longitude": "8.946256"
  },
  {
    "id": "457",
    "year": "1975",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "458",
    "year": "1975",
    "birth_city": "Catanzaro",
    "birth_country": "Italy",
    "birth_city_latitude": "38.9097919",
    "birth_city_longitude": "16.5876516"
  },
  {
    "id": "459",
    "year": "1975",
    "birth_city": "\"Philadelphia",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.9525839"
  },
  {
    "id": "460",
    "year": "1975",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "461",
    "year": "1975",
    "birth_city": "Copenhagen",
    "birth_country": "Denmark",
    "birth_city_latitude": "55.6760968",
    "birth_city_longitude": "12.5683371"
  },
  {
    "id": "462",
    "year": "1975",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "463",
    "year": "1975",
    "birth_city": "\"Council",
    "birth_country": " ID\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.7298876"
  },
  {
    "id": "464",
    "year": "1976",
    "birth_city": "\"Cleveland",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.49932"
  },
  {
    "id": "465",
    "year": "1976",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "466",
    "year": "1976",
    "birth_city": "Montreal",
    "birth_country": "Canada",
    "birth_city_latitude": "45.5018869",
    "birth_city_longitude": "-73.5673919"
  },
  {
    "id": "467",
    "year": "1976",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "468",
    "year": "1976",
    "birth_city": "\"Yonkers",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.9312099"
  },
  {
    "id": "469",
    "year": "1976",
    "birth_city": "Belfast",
    "birth_country": "Northern Ireland",
    "birth_city_latitude": "54.597285",
    "birth_city_longitude": "-5.93012"
  },
  {
    "id": "470",
    "year": "1976",
    "birth_city": "Belfast",
    "birth_country": "Northern Ireland",
    "birth_city_latitude": "54.597285",
    "birth_city_longitude": "-5.93012"
  },
  {
    "id": "471",
    "year": "1976",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "472",
    "year": "1976",
    "birth_city": "\"Ann Arbor",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.2808256"
  },
  {
    "id": "473",
    "year": "1977",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "474",
    "year": "1977",
    "birth_city": "Klippan",
    "birth_country": "Sweden",
    "birth_city_latitude": "56.1348998",
    "birth_city_longitude": "13.1290409"
  },
  {
    "id": "475",
    "year": "1977",
    "birth_city": "Swanage",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.608277",
    "birth_city_longitude": "-1.960769"
  },
  {
    "id": "476",
    "year": "1977",
    "birth_city": "Sevilla",
    "birth_country": "Spain",
    "birth_city_latitude": "37.3890924",
    "birth_city_longitude": "-5.9844589"
  },
  {
    "id": "477",
    "year": "1977",
    "birth_city": "Dijon",
    "birth_country": "France",
    "birth_city_latitude": "47.322047",
    "birth_city_longitude": "5.04148"
  },
  {
    "id": "478",
    "year": "1977",
    "birth_city": "Wilno (Vilnius)",
    "birth_country": "Poland (Lithuania)",
    "birth_city_latitude": "54.6871555",
    "birth_city_longitude": "25.2796514"
  },
  {
    "id": "479",
    "year": "1977",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "480",
    "year": "1977",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "481",
    "year": "1977",
    "birth_city": "\"Indianapolis",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.768403"
  },
  {
    "id": "482",
    "year": "1977",
    "birth_city": "Leeds",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.8007554",
    "birth_city_longitude": "-1.5490774"
  },
  {
    "id": "483",
    "year": "1977",
    "birth_city": "\"Middletown",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.5623209"
  },
  {
    "id": "484",
    "year": "1978",
    "birth_city": "Mitcham",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.402869",
    "birth_city_longitude": "-0.166709"
  },
  {
    "id": "485",
    "year": "1978",
    "birth_city": "\"Milwaukee",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0389025"
  },
  {
    "id": "486",
    "year": "1978",
    "birth_city": "Leoncin",
    "birth_country": "Russian Empire (Poland)",
    "birth_city_latitude": "52.3937748",
    "birth_city_longitude": "20.5341061"
  },
  {
    "id": "487",
    "year": "1978",
    "birth_city": "Gr?nichen",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.3621015",
    "birth_city_longitude": "8.0980292"
  },
  {
    "id": "488",
    "year": "1978",
    "birth_city": "\"Wilmington",
    "birth_country": " DE\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.744655"
  },
  {
    "id": "489",
    "year": "1978",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "490",
    "year": "1978",
    "birth_city": "Mit Abu al-Kawm",
    "birth_country": "Egypt",
    "birth_city_latitude": "30.6361844",
    "birth_city_longitude": "30.9137978"
  },
  {
    "id": "491",
    "year": "1978",
    "birth_city": "Brest Litovsk",
    "birth_country": "Russian Empire (Belarus)",
    "birth_city_latitude": "52.0996507",
    "birth_city_longitude": "23.7636662"
  },
  {
    "id": "492",
    "year": "1978",
    "birth_city": "Kronshtadt",
    "birth_country": "Russian Empire (Russia)",
    "birth_city_latitude": "59.9959303",
    "birth_city_longitude": "29.7655452"
  },
  {
    "id": "493",
    "year": "1978",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "494",
    "year": "1978",
    "birth_city": "\"Houston",
    "birth_country": " TX\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "29.7604267"
  },
  {
    "id": "495",
    "year": "1979",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "496",
    "year": "1979",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "497",
    "year": "1979",
    "birth_city": "\"Arlington",
    "birth_country": " SD\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.3644133"
  },
  {
    "id": "498",
    "year": "1979",
    "birth_city": "Castries",
    "birth_country": "British West Indies (Saint Lucia)",
    "birth_city_latitude": "14.0110158",
    "birth_city_longitude": "-60.9897239"
  },
  {
    "id": "499",
    "year": "1979",
    "birth_city": "Ir��klion",
    "birth_country": "Crete (Greece)",
    "birth_city_latitude": "35.3387352",
    "birth_city_longitude": "25.1442126"
  },
  {
    "id": "500",
    "year": "1979",
    "birth_city": "Johannesburg",
    "birth_country": "South Africa",
    "birth_city_latitude": "-26.2041028",
    "birth_city_longitude": "28.0473051"
  },
  {
    "id": "501",
    "year": "1979",
    "birth_city": "Newark",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.0744766",
    "birth_city_longitude": "-0.809773"
  },
  {
    "id": "502",
    "year": "1979",
    "birth_city": "Uskup (Skopje)",
    "birth_country": "Ottoman Empire (Republic of Macedonia)",
    "birth_city_latitude": "41.9981294",
    "birth_city_longitude": "21.4254355"
  },
  {
    "id": "503",
    "year": "1979",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "504",
    "year": "1979",
    "birth_city": "Jhang Maghi&#257;na",
    "birth_country": "India (Pakistan)",
    "birth_city_latitude": "31.2654657",
    "birth_city_longitude": "72.3123725"
  },
  {
    "id": "505",
    "year": "1979",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "506",
    "year": "1980",
    "birth_city": "Rendcombe",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.78974",
    "birth_city_longitude": "-1.970906"
  },
  {
    "id": "507",
    "year": "1980",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "508",
    "year": "1980",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "509",
    "year": "1980",
    "birth_city": "\"Omaha",
    "birth_country": " NE\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.2565369"
  },
  {
    "id": "510",
    "year": "1980",
    "birth_city": "&#346;eteniai",
    "birth_country": "Russian Empire (Lithuania)",
    "birth_city_latitude": "55.3961237",
    "birth_city_longitude": "24.0335576"
  },
  {
    "id": "511",
    "year": "1980",
    "birth_city": "Caracas",
    "birth_country": "Venezuela",
    "birth_city_latitude": "10.4805937",
    "birth_city_longitude": "-66.9036063"
  },
  {
    "id": "512",
    "year": "1980",
    "birth_city": "Toulouse",
    "birth_country": "France",
    "birth_city_latitude": "43.604652",
    "birth_city_longitude": "1.444209"
  },
  {
    "id": "513",
    "year": "1980",
    "birth_city": "\"Bradford",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.768643"
  },
  {
    "id": "514",
    "year": "1980",
    "birth_city": "Buenos Aires",
    "birth_country": "Argentina",
    "birth_city_latitude": "-34.6036844",
    "birth_city_longitude": "-58.3815591"
  },
  {
    "id": "515",
    "year": "1980",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "516",
    "year": "1980",
    "birth_city": "\"Merriman",
    "birth_country": " NE\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.9197225"
  },
  {
    "id": "517",
    "year": "1981",
    "birth_city": "Nara",
    "birth_country": "Japan",
    "birth_city_latitude": "34.685109",
    "birth_city_longitude": "135.8048019"
  },
  {
    "id": "518",
    "year": "1981",
    "birth_city": "Zloczov",
    "birth_country": "Poland (Ukraine)",
    "birth_city_latitude": "49.80941",
    "birth_city_longitude": "24.901371"
  },
  {
    "id": "519",
    "year": "1981",
    "birth_city": "\"Champaign",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.1164204"
  },
  {
    "id": "520",
    "year": "1981",
    "birth_city": "Ruse",
    "birth_country": "Bulgaria",
    "birth_city_latitude": "43.8355713",
    "birth_city_longitude": "25.9656554"
  },
  {
    "id": "521",
    "year": "1981",
    "birth_city": "\"Hartford",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.7658043"
  },
  {
    "id": "522",
    "year": "1981",
    "birth_city": "\"Windsor",
    "birth_country": " ON\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "42.3149367"
  },
  {
    "id": "523",
    "year": "1981",
    "birth_city": "Uppsala",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.8585638",
    "birth_city_longitude": "17.6389267"
  },
  {
    "id": "524",
    "year": "1981",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "525",
    "year": "1981",
    "birth_city": "Dordrecht",
    "birth_country": "Netherlands",
    "birth_city_latitude": "51.8132979",
    "birth_city_longitude": "4.6900929"
  },
  {
    "id": "526",
    "year": "1981",
    "birth_city": "\"Mount Verno",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.9125992"
  },
  {
    "id": "527",
    "year": "1981",
    "birth_city": "Lund",
    "birth_country": "Sweden",
    "birth_city_latitude": "55.7046601",
    "birth_city_longitude": "13.1910073"
  },
  {
    "id": "528",
    "year": "1982",
    "birth_city": "Zelvas",
    "birth_country": "Lithuania",
    "birth_city_latitude": "55.2186369",
    "birth_city_longitude": "25.100496"
  },
  {
    "id": "529",
    "year": "1982",
    "birth_city": "\"Renton",
    "birth_country": " WA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "47.4796927"
  },
  {
    "id": "530",
    "year": "1982",
    "birth_city": "Aracataca",
    "birth_country": "Colombia",
    "birth_city_latitude": "10.591925",
    "birth_city_longitude": "-74.186103"
  },
  {
    "id": "531",
    "year": "1982",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "532",
    "year": "1982",
    "birth_city": "Halmstad",
    "birth_country": "Sweden",
    "birth_city_latitude": "56.6743748",
    "birth_city_longitude": "12.8577884"
  },
  {
    "id": "533",
    "year": "1982",
    "birth_city": "Tardebigg",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.3226928",
    "birth_city_longitude": "-2.0068986"
  },
  {
    "id": "534",
    "year": "1982",
    "birth_city": "Uppsala",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.8585638",
    "birth_city_longitude": "17.6389267"
  },
  {
    "id": "535",
    "year": "1982",
    "birth_city": "Zamora",
    "birth_country": "Mexico",
    "birth_city_latitude": "19.9901766",
    "birth_city_longitude": "-102.2834075"
  },
  {
    "id": "536",
    "year": "1982",
    "birth_city": "\"Waltham",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3764852"
  },
  {
    "id": "537",
    "year": "1983",
    "birth_city": "Neudorf",
    "birth_country": "Canada",
    "birth_city_latitude": "50.7131318",
    "birth_city_longitude": "-103.0121315"
  },
  {
    "id": "538",
    "year": "1983",
    "birth_city": "Calais",
    "birth_country": "France",
    "birth_city_latitude": "50.95129",
    "birth_city_longitude": "1.858686"
  },
  {
    "id": "539",
    "year": "1983",
    "birth_city": "St. Columb Minor",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "50.417808",
    "birth_city_longitude": "-5.045908"
  },
  {
    "id": "540",
    "year": "1983",
    "birth_city": "\"Hartford",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.7658043"
  },
  {
    "id": "541",
    "year": "1983",
    "birth_city": "Popowo",
    "birth_country": "Poland",
    "birth_city_latitude": "52.5325604",
    "birth_city_longitude": "15.5133564"
  },
  {
    "id": "542",
    "year": "1983",
    "birth_city": "Lahore",
    "birth_country": "India (Pakistan)",
    "birth_city_latitude": "31.5203696",
    "birth_city_longitude": "74.3587473"
  },
  {
    "id": "543",
    "year": "1983",
    "birth_city": "\"Pittsburgh",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.4406248"
  },
  {
    "id": "544",
    "year": "1984",
    "birth_city": "\"Fort Worth",
    "birth_country": " TX\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "32.7554883"
  },
  {
    "id": "545",
    "year": "1984",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "546",
    "year": "1984",
    "birth_city": "Prague",
    "birth_country": "Austria-Hungary (Czech Republic)",
    "birth_city_latitude": "50.0755381",
    "birth_city_longitude": "14.4378005"
  },
  {
    "id": "547",
    "year": "1984",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "548",
    "year": "1984",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "549",
    "year": "1984",
    "birth_city": "Bahia Blanca",
    "birth_country": "Argentina",
    "birth_city_latitude": "-38.7183177",
    "birth_city_longitude": "-62.2663478"
  },
  {
    "id": "550",
    "year": "1984",
    "birth_city": "Klerksdorp",
    "birth_country": "South Africa",
    "birth_city_latitude": "-26.8598225",
    "birth_city_longitude": "26.6317514"
  },
  {
    "id": "551",
    "year": "1984",
    "birth_city": "Gorizia",
    "birth_country": "Italy",
    "birth_city_latitude": "45.9401812",
    "birth_city_longitude": "13.6201754"
  },
  {
    "id": "552",
    "year": "1984",
    "birth_city": "the Hague",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.0704978",
    "birth_city_longitude": "4.3006999"
  },
  {
    "id": "553",
    "year": "1985",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "554",
    "year": "1985",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "555",
    "year": "1985",
    "birth_city": "Rome",
    "birth_country": "Italy",
    "birth_city_latitude": "41.9027835",
    "birth_city_longitude": "12.4963655"
  },
  {
    "id": "556",
    "year": "1985",
    "birth_city": "Tananarive (Antananarivo)",
    "birth_country": "Madagascar",
    "birth_city_latitude": "-18.8791902",
    "birth_city_longitude": "47.5079055"
  },
  {
    "id": "557",
    "year": "1985",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "558",
    "year": "1985",
    "birth_city": "\"Sumter",
    "birth_country": " SC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "33.9204354"
  },
  {
    "id": "559",
    "year": "1985",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "560",
    "year": "1985",
    "birth_city": "Schroda",
    "birth_country": "German-occupied Poland (Poland)",
    "birth_city_latitude": "52.22908",
    "birth_city_longitude": "17.27607"
  },
  {
    "id": "561",
    "year": "1986",
    "birth_city": "\"San Jos��",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.33874"
  },
  {
    "id": "562",
    "year": "1986",
    "birth_city": "Hsinchu",
    "birth_country": "Taiwan",
    "birth_city_latitude": "24.8138287",
    "birth_city_longitude": "120.9674798"
  },
  {
    "id": "563",
    "year": "1986",
    "birth_city": "Berlin",
    "birth_country": "Germany",
    "birth_city_latitude": "52.5200066",
    "birth_city_longitude": "13.404954"
  },
  {
    "id": "564",
    "year": "1986",
    "birth_city": "\"Murfreesboro",
    "birth_country": " TN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "35.8456213"
  },
  {
    "id": "565",
    "year": "1986",
    "birth_city": "Abeokuta",
    "birth_country": "Nigeria",
    "birth_city_latitude": "7.147502",
    "birth_city_longitude": "3.3619356"
  },
  {
    "id": "566",
    "year": "1986",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "567",
    "year": "1986",
    "birth_city": "Turin",
    "birth_country": "Italy",
    "birth_city_latitude": "45.0703393",
    "birth_city_longitude": "7.686864"
  },
  {
    "id": "568",
    "year": "1986",
    "birth_city": "Sighet",
    "birth_country": "Romania",
    "birth_city_latitude": "47.927707",
    "birth_city_longitude": "23.8976506"
  },
  {
    "id": "569",
    "year": "1986",
    "birth_city": "Heidelberg",
    "birth_country": "Germany",
    "birth_city_latitude": "49.3987524",
    "birth_city_longitude": "8.6724335"
  },
  {
    "id": "570",
    "year": "1986",
    "birth_city": "Frankfurt-on-the-Main",
    "birth_country": "West Germany (Germany)",
    "birth_city_latitude": "50.1109221",
    "birth_city_longitude": "8.6821267"
  },
  {
    "id": "571",
    "year": "1986",
    "birth_city": "Buchs",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.1655403",
    "birth_city_longitude": "9.4708594"
  },
  {
    "id": "572",
    "year": "1987",
    "birth_city": "\"Chester",
    "birth_country": " VT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.2628476"
  },
  {
    "id": "573",
    "year": "1987",
    "birth_city": "Rosheim",
    "birth_country": "France",
    "birth_city_latitude": "48.496665",
    "birth_city_longitude": "7.470529"
  },
  {
    "id": "574",
    "year": "1987",
    "birth_city": "Pusan",
    "birth_country": "Korea (South Korea)",
    "birth_city_latitude": "35.2100142",
    "birth_city_longitude": "129.0688702"
  },
  {
    "id": "575",
    "year": "1987",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "576",
    "year": "1987",
    "birth_city": "Leningrad (Saint Petersburg)",
    "birth_country": "Union of Soviet Socialist Republics (Russia)",
    "birth_city_latitude": "59.9342596",
    "birth_city_longitude": "30.3350941"
  },
  {
    "id": "577",
    "year": "1987",
    "birth_city": "Nagoya",
    "birth_country": "Japan",
    "birth_city_latitude": "35.1814506",
    "birth_city_longitude": "136.9065571"
  },
  {
    "id": "578",
    "year": "1987",
    "birth_city": "Heredia",
    "birth_country": "Costa Rica",
    "birth_city_latitude": "9.9981413",
    "birth_city_longitude": "-84.1197643"
  },
  {
    "id": "579",
    "year": "1987",
    "birth_city": "Neuenkirchen",
    "birth_country": "West Germany (Germany)",
    "birth_city_latitude": "52.2394623",
    "birth_city_longitude": "7.3714554"
  },
  {
    "id": "580",
    "year": "1987",
    "birth_city": "Basel",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.5595986",
    "birth_city_longitude": "7.5885761"
  },
  {
    "id": "581",
    "year": "1988",
    "birth_city": "Zusamaltheim",
    "birth_country": "Germany",
    "birth_city_latitude": "48.5313776",
    "birth_city_longitude": "10.6360613"
  },
  {
    "id": "582",
    "year": "1988",
    "birth_city": "Munich",
    "birth_country": "Germany",
    "birth_city_latitude": "48.1351253",
    "birth_city_longitude": "11.5819806"
  },
  {
    "id": "583",
    "year": "1988",
    "birth_city": "Ludwigsburg",
    "birth_country": "West Germany (Germany)",
    "birth_city_latitude": "48.8891149",
    "birth_city_longitude": "9.1942834"
  },
  {
    "id": "584",
    "year": "1988",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "585",
    "year": "1988",
    "birth_city": "Cairo",
    "birth_country": "Egypt",
    "birth_city_latitude": "30.0444196",
    "birth_city_longitude": "31.2357116"
  },
  {
    "id": "586",
    "year": "1988",
    "birth_city": "Uddingston",
    "birth_country": "Scotland",
    "birth_city_latitude": "55.815735",
    "birth_city_longitude": "-4.079127"
  },
  {
    "id": "587",
    "year": "1988",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "588",
    "year": "1988",
    "birth_city": "\"Hoquiam",
    "birth_country": " WA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.977043"
  },
  {
    "id": "589",
    "year": "1988",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "590",
    "year": "1988",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "591",
    "year": "1988",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "592",
    "year": "1988",
    "birth_city": "Bad Kissingen",
    "birth_country": "Germany",
    "birth_city_latitude": "50.1986209",
    "birth_city_longitude": "10.0755912"
  },
  {
    "id": "593",
    "year": "1989",
    "birth_city": "Montreal",
    "birth_country": "Canada",
    "birth_city_latitude": "45.5018869",
    "birth_city_longitude": "-73.5673919"
  },
  {
    "id": "594",
    "year": "1989",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "595",
    "year": "1989",
    "birth_city": "Skedsmo",
    "birth_country": "Norway",
    "birth_city_latitude": "59.9929184",
    "birth_city_longitude": "11.0421988"
  },
  {
    "id": "596",
    "year": "1989",
    "birth_city": "Iria Flavia",
    "birth_country": "Spain",
    "birth_city_latitude": "42.7459331",
    "birth_city_longitude": "-8.6555896"
  },
  {
    "id": "597",
    "year": "1989",
    "birth_city": "\"York",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.9625984"
  },
  {
    "id": "598",
    "year": "1989",
    "birth_city": "\"Oceanside",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6387141"
  },
  {
    "id": "599",
    "year": "1989",
    "birth_city": "Taktser",
    "birth_country": "Tibet (People's Republic of China)",
    "birth_city_latitude": "36.377869",
    "birth_city_longitude": "101.8655392"
  },
  {
    "id": "600",
    "year": "1989",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "601",
    "year": "1989",
    "birth_city": "G?rlitz",
    "birth_country": "Prussia (Germany)",
    "birth_city_latitude": "51.1524553",
    "birth_city_longitude": "14.9688941"
  },
  {
    "id": "602",
    "year": "1989",
    "birth_city": "Lorenzkirch",
    "birth_country": "Germany",
    "birth_city_latitude": "51.3560031",
    "birth_city_longitude": "13.243844"
  },
  {
    "id": "603",
    "year": "1990",
    "birth_city": "\"Methuen",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.7262016"
  },
  {
    "id": "604",
    "year": "1990",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "605",
    "year": "1990",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "606",
    "year": "1990",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "607",
    "year": "1990",
    "birth_city": "Mexico City",
    "birth_country": "Mexico",
    "birth_city_latitude": "19.4326077",
    "birth_city_longitude": "-99.133208"
  },
  {
    "id": "608",
    "year": "1990",
    "birth_city": "\"Milford",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.1398577"
  },
  {
    "id": "609",
    "year": "1990",
    "birth_city": "\"Mart",
    "birth_country": " TX\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "31.5423911"
  },
  {
    "id": "610",
    "year": "1990",
    "birth_city": "Privolnoye",
    "birth_country": "Union of Soviet Socialist Republics (Russia)",
    "birth_city_latitude": "45.9222746",
    "birth_city_longitude": "41.3115901"
  },
  {
    "id": "611",
    "year": "1990",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "612",
    "year": "1990",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "613",
    "year": "1990",
    "birth_city": "\"Medicine Hat",
    "birth_country": " Alberta\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "50.0290218"
  },
  {
    "id": "614",
    "year": "1991",
    "birth_city": "Winterthur",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.4988196",
    "birth_city_longitude": "8.7236889"
  },
  {
    "id": "615",
    "year": "1991",
    "birth_city": "Willesden",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5476301",
    "birth_city_longitude": "-0.2369246"
  },
  {
    "id": "616",
    "year": "1991",
    "birth_city": "Springs",
    "birth_country": "South Africa",
    "birth_city_latitude": "-26.2607243",
    "birth_city_longitude": "28.4630376"
  },
  {
    "id": "617",
    "year": "1991",
    "birth_city": "Landsberg",
    "birth_country": "Germany",
    "birth_city_latitude": "48.0464144",
    "birth_city_longitude": "10.8718015"
  },
  {
    "id": "618",
    "year": "1991",
    "birth_city": "Stuttgart",
    "birth_country": "Germany",
    "birth_city_latitude": "48.7758459",
    "birth_city_longitude": "9.1829321"
  },
  {
    "id": "619",
    "year": "1991",
    "birth_city": "Rangoon (Yangon)",
    "birth_country": "Burma (Myanmar)",
    "birth_city_latitude": "16.840939",
    "birth_city_longitude": "96.173526"
  },
  {
    "id": "620",
    "year": "1991",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "621",
    "year": "1992",
    "birth_city": "Montreal",
    "birth_country": "Canada",
    "birth_city_latitude": "45.5018869",
    "birth_city_longitude": "-73.5673919"
  },
  {
    "id": "622",
    "year": "1992",
    "birth_city": "\"Pottsville",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6856456"
  },
  {
    "id": "623",
    "year": "1992",
    "birth_city": "Castries",
    "birth_country": "Saint Lucia",
    "birth_city_latitude": "14.0110158",
    "birth_city_longitude": "-60.9897239"
  },
  {
    "id": "624",
    "year": "1992",
    "birth_city": "Shanghai",
    "birth_country": "China",
    "birth_city_latitude": "31.230416",
    "birth_city_longitude": "121.473701"
  },
  {
    "id": "625",
    "year": "1992",
    "birth_city": "\"Lansing",
    "birth_country": " IA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.3609053"
  },
  {
    "id": "626",
    "year": "1992",
    "birth_city": "Aldea Chimel",
    "birth_country": "Guatemala",
    "birth_city_latitude": "15.5717382",
    "birth_city_longitude": "-90.0097275"
  },
  {
    "id": "627",
    "year": "1992",
    "birth_city": "Dabrovica",
    "birth_country": "Poland",
    "birth_city_latitude": "51.919438",
    "birth_city_longitude": "19.145136"
  },
  {
    "id": "628",
    "year": "1993",
    "birth_city": "\"Lenoir",
    "birth_country": " NC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "35.9140196"
  },
  {
    "id": "629",
    "year": "1993",
    "birth_city": "Blackpool",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.8167423",
    "birth_city_longitude": "-3.0370485"
  },
  {
    "id": "630",
    "year": "1993",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "631",
    "year": "1993",
    "birth_city": "\"Cambridge",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3736158"
  },
  {
    "id": "632",
    "year": "1993",
    "birth_city": "\"Lorain",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.452819"
  },
  {
    "id": "633",
    "year": "1993",
    "birth_city": "Derby",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.9225301",
    "birth_city_longitude": "-1.4746186"
  },
  {
    "id": "634",
    "year": "1993",
    "birth_city": "\"Falmouth",
    "birth_country": " KY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.6767372"
  },
  {
    "id": "635",
    "year": "1993",
    "birth_city": "Qunu",
    "birth_country": "South Africa",
    "birth_city_latitude": "-31.7881448",
    "birth_city_longitude": "28.6235619"
  },
  {
    "id": "636",
    "year": "1993",
    "birth_city": "Johannesburg",
    "birth_country": "South Africa",
    "birth_city_latitude": "-26.2041028",
    "birth_city_longitude": "28.0473051"
  },
  {
    "id": "637",
    "year": "1993",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "638",
    "year": "1993",
    "birth_city": "\"Philadelphia",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.9525839"
  },
  {
    "id": "639",
    "year": "1994",
    "birth_city": "Budapest",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "640",
    "year": "1994",
    "birth_city": "Budapest",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "641",
    "year": "1994",
    "birth_city": "\"Bluefield",
    "birth_country": " WV\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.2698395"
  },
  {
    "id": "642",
    "year": "1994",
    "birth_city": "Breslau (Wroclaw)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "643",
    "year": "1994",
    "birth_city": "Uchiko",
    "birth_country": "Japan",
    "birth_city_latitude": "33.5329067",
    "birth_city_longitude": "132.6579791"
  },
  {
    "id": "644",
    "year": "1994",
    "birth_city": "\"New Haven",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.308274"
  },
  {
    "id": "645",
    "year": "1994",
    "birth_city": "\"Baltimore",
    "birth_country": " MD\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.2903848"
  },
  {
    "id": "646",
    "year": "1994",
    "birth_city": "Cairo",
    "birth_country": "Egypt",
    "birth_city_latitude": "30.0444196",
    "birth_city_longitude": "31.2357116"
  },
  {
    "id": "647",
    "year": "1994",
    "birth_city": "Vishneva",
    "birth_country": "Poland (Belarus)",
    "birth_city_latitude": "51.919438",
    "birth_city_longitude": "19.145136"
  },
  {
    "id": "648",
    "year": "1994",
    "birth_city": "Jerusalem",
    "birth_country": "British Mandate of Palestine (Israel)",
    "birth_city_latitude": "31.768319",
    "birth_city_longitude": "35.21371"
  },
  {
    "id": "649",
    "year": "1994",
    "birth_city": "\"Lethbridge",
    "birth_country": " Alberta\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "49.6956181"
  },
  {
    "id": "650",
    "year": "1994",
    "birth_city": "\"Pittsburgh",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.4406248"
  },
  {
    "id": "651",
    "year": "1995",
    "birth_city": "Amsterdam",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.3675734",
    "birth_city_longitude": "4.9041389"
  },
  {
    "id": "652",
    "year": "1995",
    "birth_city": "Mexico City",
    "birth_country": "Mexico",
    "birth_city_latitude": "19.4326077",
    "birth_city_longitude": "-99.133208"
  },
  {
    "id": "653",
    "year": "1995",
    "birth_city": "\"Delaware",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.2986724"
  },
  {
    "id": "654",
    "year": "1995",
    "birth_city": "\"Yakima",
    "birth_country": " WA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.6020711"
  },
  {
    "id": "655",
    "year": "1995",
    "birth_city": "Casteld��wson",
    "birth_country": "Northern Ireland",
    "birth_city_latitude": "54.7877149",
    "birth_city_longitude": "-6.4923145"
  },
  {
    "id": "656",
    "year": "1995",
    "birth_city": "\"Wilkes-Barre",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.2459149"
  },
  {
    "id": "657",
    "year": "1995",
    "birth_city": "Magdeburg",
    "birth_country": "Germany",
    "birth_city_latitude": "52.1205333",
    "birth_city_longitude": "11.6276237"
  },
  {
    "id": "658",
    "year": "1995",
    "birth_city": "\"South Bend",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.6763545"
  },
  {
    "id": "659",
    "year": "1995",
    "birth_city": "Warsaw",
    "birth_country": "Russian Empire (Poland)",
    "birth_city_latitude": "52.2296756",
    "birth_city_longitude": "21.0122287"
  },
  {
    "id": "660",
    "year": "1995",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "661",
    "year": "1995",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "662",
    "year": "1995",
    "birth_city": "\"Paterson",
    "birth_country": " NJ\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.9167654"
  },
  {
    "id": "663",
    "year": "1996",
    "birth_city": "\"Alice",
    "birth_country": " TX\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "27.7522487"
  },
  {
    "id": "664",
    "year": "1996",
    "birth_city": "Wisbech",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.666317",
    "birth_city_longitude": "0.158797"
  },
  {
    "id": "665",
    "year": "1996",
    "birth_city": "\"Akron",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.0814447"
  },
  {
    "id": "666",
    "year": "1996",
    "birth_city": "Minnigaff",
    "birth_country": "Scotland",
    "birth_city_latitude": "54.967523",
    "birth_city_longitude": "-4.483444"
  },
  {
    "id": "667",
    "year": "1996",
    "birth_city": "\"Victoria",
    "birth_country": " BC\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "48.4284207"
  },
  {
    "id": "668",
    "year": "1996",
    "birth_city": "Bnin (K��rnik)",
    "birth_country": "Poland",
    "birth_city_latitude": "52.2270232",
    "birth_city_longitude": "17.0898688"
  },
  {
    "id": "669",
    "year": "1996",
    "birth_city": "Brisbane",
    "birth_country": "Australia",
    "birth_city_latitude": "-27.4704528",
    "birth_city_longitude": "153.0260341"
  },
  {
    "id": "670",
    "year": "1996",
    "birth_city": "Basel",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.5595986",
    "birth_city_longitude": "7.5885761"
  },
  {
    "id": "671",
    "year": "1996",
    "birth_city": "Wailacama",
    "birth_country": "East Timor",
    "birth_city_latitude": "-8.874217",
    "birth_city_longitude": "125.727539"
  },
  {
    "id": "672",
    "year": "1996",
    "birth_city": "Dili",
    "birth_country": "East Timor",
    "birth_city_latitude": "-8.5568557",
    "birth_city_longitude": "125.5603143"
  },
  {
    "id": "673",
    "year": "1996",
    "birth_city": "\"Rye",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.9806535"
  },
  {
    "id": "674",
    "year": "1996",
    "birth_city": "\"Aberdeen",
    "birth_country": " WA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.9753708"
  },
  {
    "id": "675",
    "year": "1996",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "676",
    "year": "1997",
    "birth_city": "\"Provo",
    "birth_country": " UT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.2338438"
  },
  {
    "id": "677",
    "year": "1997",
    "birth_city": "Halifax",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.72702",
    "birth_city_longitude": "-1.85754"
  },
  {
    "id": "678",
    "year": "1997",
    "birth_city": "Lemvig",
    "birth_country": "Denmark",
    "birth_city_latitude": "56.5443443",
    "birth_city_longitude": "8.3024871"
  },
  {
    "id": "679",
    "year": "1997",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "680",
    "year": "1997",
    "birth_city": "\"Timmins",
    "birth_country": " ON\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "48.4758208"
  },
  {
    "id": "681",
    "year": "1997",
    "birth_city": "Leggiuno-Sangiano",
    "birth_country": "Italy",
    "birth_city_latitude": "45.8747686",
    "birth_city_longitude": "8.6207601"
  },
  {
    "id": "682",
    "year": "1997",
    "birth_city": "\"Des Moines",
    "birth_country": " IA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.5868353"
  },
  {
    "id": "683",
    "year": "1997",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "684",
    "year": "1997",
    "birth_city": "\"Putney",
    "birth_country": " VT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.975268"
  },
  {
    "id": "685",
    "year": "1997",
    "birth_city": "\"St. Louis",
    "birth_country": " MO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.6270025"
  },
  {
    "id": "686",
    "year": "1997",
    "birth_city": "Constantine",
    "birth_country": "French Algeria (Algeria)",
    "birth_city_latitude": "36.3570052",
    "birth_city_longitude": "6.6390282"
  },
  {
    "id": "687",
    "year": "1997",
    "birth_city": "\"Wilkes-Barre",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.2459149"
  },
  {
    "id": "688",
    "year": "1998",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "689",
    "year": "1998",
    "birth_city": "Burnham-on-Sea",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.240139",
    "birth_city_longitude": "-2.993858"
  },
  {
    "id": "690",
    "year": "1998",
    "birth_city": "Santiniketan",
    "birth_country": "India",
    "birth_city_latitude": "23.6776471",
    "birth_city_longitude": "87.6852323"
  },
  {
    "id": "691",
    "year": "1998",
    "birth_city": "Azinhaga",
    "birth_country": "Portugal",
    "birth_city_latitude": "39.3692437",
    "birth_city_longitude": "-8.539144"
  },
  {
    "id": "692",
    "year": "1998",
    "birth_city": "\"Charleston",
    "birth_country": " SC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "32.7764749"
  },
  {
    "id": "693",
    "year": "1998",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "694",
    "year": "1998",
    "birth_city": "\"Whiting",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.6797578"
  },
  {
    "id": "695",
    "year": "1998",
    "birth_city": "Londonderry",
    "birth_country": "Northern Ireland",
    "birth_city_latitude": "54.9964705",
    "birth_city_longitude": "-7.3101358"
  },
  {
    "id": "696",
    "year": "1998",
    "birth_city": "Belfast",
    "birth_country": "Northern Ireland",
    "birth_city_latitude": "54.597285",
    "birth_city_longitude": "-5.93012"
  },
  {
    "id": "697",
    "year": "1998",
    "birth_city": "\"Visalia",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "36.3301329"
  },
  {
    "id": "698",
    "year": "1998",
    "birth_city": "Frankfurt-on-the-Main",
    "birth_country": "West Germany (Germany)",
    "birth_city_latitude": "50.1109221",
    "birth_city_longitude": "8.6821267"
  },
  {
    "id": "699",
    "year": "1998",
    "birth_city": "Henan",
    "birth_country": "China",
    "birth_city_latitude": "34.7657099",
    "birth_city_longitude": "113.75322"
  },
  {
    "id": "700",
    "year": "1999",
    "birth_city": "Damanhur",
    "birth_country": "Egypt",
    "birth_city_latitude": "31.0424566",
    "birth_city_longitude": "30.4727503"
  },
  {
    "id": "701",
    "year": "1999",
    "birth_city": "\"Kingston",
    "birth_country": " ON\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "44.231345"
  },
  {
    "id": "702",
    "year": "1999",
    "birth_city": "Danzig (Gdansk)",
    "birth_country": "Free City of Danzig (Poland)",
    "birth_city_latitude": "54.3520252",
    "birth_city_longitude": "18.6466384"
  },
  {
    "id": "703",
    "year": "1999",
    "birth_city": "Waltersdorf (Niegoslawice)",
    "birth_country": "Germany (Poland)",
    "birth_city_latitude": "50.1234245",
    "birth_city_longitude": "19.7340856"
  },
  {
    "id": "704",
    "year": "1999",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "705",
    "year": "1999",
    "birth_city": "Den Helder",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.9562808",
    "birth_city_longitude": "4.7607972"
  },
  {
    "id": "706",
    "year": "1999",
    "birth_city": "Waalwijk",
    "birth_country": "Netherlands",
    "birth_city_latitude": "51.6878954",
    "birth_city_longitude": "5.0574822"
  },
  {
    "id": "707",
    "year": "2000",
    "birth_city": "\"Sioux City",
    "birth_country": " IA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.4963416"
  },
  {
    "id": "708",
    "year": "2000",
    "birth_city": "Masterton",
    "birth_country": "New Zealand",
    "birth_city_latitude": "-40.9463736",
    "birth_city_longitude": "175.667234"
  },
  {
    "id": "709",
    "year": "2000",
    "birth_city": "Tokyo",
    "birth_country": "Japan",
    "birth_city_latitude": "35.6761919",
    "birth_city_longitude": "139.6503106"
  },
  {
    "id": "710",
    "year": "2000",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "711",
    "year": "2000",
    "birth_city": "\"Raleigh",
    "birth_country": " NC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "35.7795897"
  },
  {
    "id": "712",
    "year": "2000",
    "birth_city": "Ganzhou",
    "birth_country": "China",
    "birth_city_latitude": "25.8310899",
    "birth_city_longitude": "114.93476"
  },
  {
    "id": "713",
    "year": "2000",
    "birth_city": "Uppsala",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.8585638",
    "birth_city_longitude": "17.6389267"
  },
  {
    "id": "714",
    "year": "2000",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "715",
    "year": "2000",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "716",
    "year": "2000",
    "birth_city": "Mokpo",
    "birth_country": "Korea (South Korea)",
    "birth_city_latitude": "34.8118351",
    "birth_city_longitude": "126.3921664"
  },
  {
    "id": "717",
    "year": "2000",
    "birth_city": "\"Vitebsk",
    "birth_country": " Belorussia\"",
    "birth_city_latitude": "Union of Soviet Socialist Republics (Belarus)",
    "birth_city_longitude": "55.1926809"
  },
  {
    "id": "718",
    "year": "2000",
    "birth_city": "Weimar",
    "birth_country": "Germany",
    "birth_city_latitude": "50.9794934",
    "birth_city_longitude": "11.3235439"
  },
  {
    "id": "719",
    "year": "2000",
    "birth_city": "\"Jefferson City",
    "birth_country": " MO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.5767017"
  },
  {
    "id": "720",
    "year": "2001",
    "birth_city": "\"Taunton",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.900101"
  },
  {
    "id": "721",
    "year": "2001",
    "birth_city": "Kobe",
    "birth_country": "Japan",
    "birth_city_latitude": "34.6900806",
    "birth_city_longitude": "135.1956311"
  },
  {
    "id": "722",
    "year": "2001",
    "birth_city": "\"Philadelphia",
    "birth_country": " PA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.9525839"
  },
  {
    "id": "723",
    "year": "2001",
    "birth_city": "\"New Haven",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.308274"
  },
  {
    "id": "724",
    "year": "2001",
    "birth_city": "\"Montclair",
    "birth_country": " NJ\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.8259007"
  },
  {
    "id": "725",
    "year": "2001",
    "birth_city": "\"Gary",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.6020403"
  },
  {
    "id": "726",
    "year": "2001",
    "birth_city": "",
    "birth_country": "Trinidad",
    "birth_city_latitude": "10.691803",
    "birth_city_longitude": "-61.222503"
  },
  {
    "id": "727",
    "year": "2001",
    "birth_city": "\"Los Angeles",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.0522342"
  },
  {
    "id": "728",
    "year": "2001",
    "birth_city": "Neston",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.290584",
    "birth_city_longitude": "-3.069102"
  },
  {
    "id": "729",
    "year": "2001",
    "birth_city": "Norwich",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.6292567",
    "birth_city_longitude": "1.2978802"
  },
  {
    "id": "730",
    "year": "2001",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "731",
    "year": "2001",
    "birth_city": "Kumasi",
    "birth_country": "Gold Coast (Ghana)",
    "birth_city_latitude": "6.6666004",
    "birth_city_longitude": "-1.6162709"
  },
  {
    "id": "732",
    "year": "2001",
    "birth_city": "\"Palo Alto",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.4418834"
  },
  {
    "id": "733",
    "year": "2001",
    "birth_city": "Heidelberg",
    "birth_country": "West Germany (Germany)",
    "birth_city_latitude": "51.165691",
    "birth_city_longitude": "10.451526"
  },
  {
    "id": "734",
    "year": "2001",
    "birth_city": "\"Corvallis",
    "birth_country": " OR\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.5645659"
  },
  {
    "id": "735",
    "year": "2002",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "736",
    "year": "2002",
    "birth_city": "Toyama City",
    "birth_country": "Japan",
    "birth_city_latitude": "36.6958223",
    "birth_city_longitude": "137.2137211"
  },
  {
    "id": "737",
    "year": "2002",
    "birth_city": "Aarberg",
    "birth_country": "Switzerland",
    "birth_city_latitude": "47.0420553",
    "birth_city_longitude": "7.2751012"
  },
  {
    "id": "738",
    "year": "2002",
    "birth_city": "Tel Aviv",
    "birth_country": "British Mandate of Palestine (Israel)",
    "birth_city_latitude": "32.0852999",
    "birth_city_longitude": "34.7817676"
  },
  {
    "id": "739",
    "year": "2002",
    "birth_city": "\"Wichita",
    "birth_country": " KS\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.6871761"
  },
  {
    "id": "740",
    "year": "2002",
    "birth_city": "Budapest",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.497912",
    "birth_city_longitude": "19.040235"
  },
  {
    "id": "741",
    "year": "2002",
    "birth_city": "Germiston",
    "birth_country": "South Africa",
    "birth_city_latitude": "-26.2258734",
    "birth_city_longitude": "28.1707794"
  },
  {
    "id": "742",
    "year": "2002",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "743",
    "year": "2002",
    "birth_city": "Cambridge",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "52.1950788",
    "birth_city_longitude": "0.1312729"
  },
  {
    "id": "744",
    "year": "2002",
    "birth_city": "\"Plains",
    "birth_country": " GA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "32.0340508"
  },
  {
    "id": "745",
    "year": "2002",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "746",
    "year": "2002",
    "birth_city": "Toyohashi",
    "birth_country": "Japan",
    "birth_city_latitude": "34.7688528",
    "birth_city_longitude": "137.3916837"
  },
  {
    "id": "747",
    "year": "2002",
    "birth_city": "Genoa",
    "birth_country": "Italy",
    "birth_city_latitude": "44.4056499",
    "birth_city_longitude": "8.946256"
  },
  {
    "id": "748",
    "year": "2003",
    "birth_city": "\"Northfield",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.4582983"
  },
  {
    "id": "749",
    "year": "2003",
    "birth_city": "\"Burlington",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.5047161"
  },
  {
    "id": "750",
    "year": "2003",
    "birth_city": "\"Syracuse",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0481221"
  },
  {
    "id": "751",
    "year": "2003",
    "birth_city": "Swansea",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.62144",
    "birth_city_longitude": "-3.943646"
  },
  {
    "id": "752",
    "year": "2003",
    "birth_city": "Cape Town",
    "birth_country": "South Africa",
    "birth_city_latitude": "-33.9248685",
    "birth_city_longitude": "18.4240553"
  },
  {
    "id": "753",
    "year": "2003",
    "birth_city": "\"Sidney",
    "birth_country": " OH\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.2842164"
  },
  {
    "id": "754",
    "year": "2003",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "755",
    "year": "2003",
    "birth_city": "Hamadan",
    "birth_country": "Iran",
    "birth_city_latitude": "34.7983275",
    "birth_city_longitude": "48.5148102"
  },
  {
    "id": "756",
    "year": "2003",
    "birth_city": "Moscow",
    "birth_country": "Union of Soviet Socialist Republics (Russia)",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "757",
    "year": "2003",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "758",
    "year": "2003",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "759",
    "year": "2004",
    "birth_city": "Haifa",
    "birth_country": "British Protectorate of Palestine (Israel)",
    "birth_city_latitude": "32.7940463",
    "birth_city_longitude": "34.989571"
  },
  {
    "id": "760",
    "year": "2004",
    "birth_city": "Karcag",
    "birth_country": "Hungary",
    "birth_city_latitude": "47.3148629",
    "birth_city_longitude": "20.9196518"
  },
  {
    "id": "761",
    "year": "2004",
    "birth_city": "\"Brooklyn",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6781784"
  },
  {
    "id": "762",
    "year": "2004",
    "birth_city": "Gjesdal",
    "birth_country": "Norway",
    "birth_city_latitude": "58.8353384",
    "birth_city_longitude": "6.3127272"
  },
  {
    "id": "763",
    "year": "2004",
    "birth_city": "\"Glens Falls",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.3095164"
  },
  {
    "id": "764",
    "year": "2004",
    "birth_city": "M��rzzuschlag",
    "birth_country": "Austria",
    "birth_city_latitude": "47.60687",
    "birth_city_longitude": "15.67171"
  },
  {
    "id": "765",
    "year": "2004",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "766",
    "year": "2004",
    "birth_city": "\"Seattle",
    "birth_country": " WA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "47.6062095"
  },
  {
    "id": "767",
    "year": "2004",
    "birth_city": "Nyeri",
    "birth_country": "Kenya",
    "birth_city_latitude": "-0.437099",
    "birth_city_longitude": "36.9580104"
  },
  {
    "id": "768",
    "year": "2004",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "769",
    "year": "2004",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "770",
    "year": "2004",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "771",
    "year": "2005",
    "birth_city": "Menin",
    "birth_country": "Belgium",
    "birth_city_latitude": "50.7962549",
    "birth_city_longitude": "3.1215356"
  },
  {
    "id": "772",
    "year": "2005",
    "birth_city": "\"Possum Trot",
    "birth_country": " KY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.0056129"
  },
  {
    "id": "773",
    "year": "2005",
    "birth_city": "\"Berne",
    "birth_country": " IN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.6578242"
  },
  {
    "id": "774",
    "year": "2005",
    "birth_city": "Frankfurt-on-the-Main",
    "birth_country": "Germany",
    "birth_city_latitude": "50.1109221",
    "birth_city_longitude": "8.6821267"
  },
  {
    "id": "775",
    "year": "2005",
    "birth_city": "\"Oakland",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.8043514"
  },
  {
    "id": "776",
    "year": "2005",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "777",
    "year": "2005",
    "birth_city": "Kalgoorlie",
    "birth_country": "Australia",
    "birth_city_latitude": "-30.749",
    "birth_city_longitude": "121.466"
  },
  {
    "id": "778",
    "year": "2005",
    "birth_city": "Adelaide",
    "birth_country": "Australia",
    "birth_city_latitude": "-34.9284989",
    "birth_city_longitude": "138.6007456"
  },
  {
    "id": "779",
    "year": "2005",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "780",
    "year": "2005",
    "birth_city": "Cairo",
    "birth_country": "Egypt",
    "birth_city_latitude": "30.0444196",
    "birth_city_longitude": "31.2357116"
  },
  {
    "id": "781",
    "year": "2005",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "782",
    "year": "2005",
    "birth_city": "\"Denver",
    "birth_country": " CO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "39.7392358"
  },
  {
    "id": "783",
    "year": "2005",
    "birth_city": "Heidelberg",
    "birth_country": "Germany",
    "birth_city_latitude": "49.3987524",
    "birth_city_longitude": "8.6724335"
  },
  {
    "id": "784",
    "year": "2006",
    "birth_city": "\"St. Louis",
    "birth_country": " MO\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.6270025"
  },
  {
    "id": "785",
    "year": "2006",
    "birth_city": "\"Evanston",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.0450722"
  },
  {
    "id": "786",
    "year": "2006",
    "birth_city": "Istanbul",
    "birth_country": "Turkey",
    "birth_city_latitude": "41.0082376",
    "birth_city_longitude": "28.9783589"
  },
  {
    "id": "787",
    "year": "2006",
    "birth_city": "\"Stanford",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.424106"
  },
  {
    "id": "788",
    "year": "2006",
    "birth_city": "\"New Haven",
    "birth_country": " CT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.308274"
  },
  {
    "id": "789",
    "year": "2006",
    "birth_city": "Chittagong",
    "birth_country": "British India (Bangladesh)",
    "birth_city_latitude": "22.3752075",
    "birth_city_longitude": "91.8348606"
  },
  {
    "id": "790",
    "year": "2006",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "791",
    "year": "2006",
    "birth_city": "\"Roanoke",
    "birth_country": " VA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.2709704"
  },
  {
    "id": "792",
    "year": "2006",
    "birth_city": "\"Yukon",
    "birth_country": " FL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "27.6648274"
  },
  {
    "id": "793",
    "year": "2007",
    "birth_city": "Bad Cannstatt",
    "birth_country": "Germany",
    "birth_city_latitude": "48.8084576",
    "birth_city_longitude": "9.2250355"
  },
  {
    "id": "794",
    "year": "2007",
    "birth_city": "Moscow",
    "birth_country": "Russia",
    "birth_city_latitude": "55.755826",
    "birth_city_longitude": "37.6173"
  },
  {
    "id": "795",
    "year": "2007",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "796",
    "year": "2007",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "797",
    "year": "2007",
    "birth_city": "Kermanshah",
    "birth_country": "Persia (Iran)",
    "birth_city_latitude": "34.3276924",
    "birth_city_longitude": "47.0777685"
  },
  {
    "id": "798",
    "year": "2007",
    "birth_city": "Verona",
    "birth_country": "Italy",
    "birth_city_latitude": "45.4383842",
    "birth_city_longitude": "10.9916215"
  },
  {
    "id": "799",
    "year": "2007",
    "birth_city": "Stroud",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.745734",
    "birth_city_longitude": "-2.217758"
  },
  {
    "id": "800",
    "year": "2007",
    "birth_city": "Halifax",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.72702",
    "birth_city_longitude": "-1.85754"
  },
  {
    "id": "801",
    "year": "2007",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "802",
    "year": "2007",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "803",
    "year": "2007",
    "birth_city": "Carcassonne",
    "birth_country": "France",
    "birth_city_latitude": "43.2132151",
    "birth_city_longitude": "2.3517703"
  },
  {
    "id": "804",
    "year": "2007",
    "birth_city": "Plzen",
    "birth_country": "Czechoslovakia (Czech Republic)",
    "birth_city_latitude": "49.7384314",
    "birth_city_longitude": "13.3736371"
  },
  {
    "id": "805",
    "year": "2008",
    "birth_city": "Kyoto",
    "birth_country": "Japan",
    "birth_city_latitude": "35.011564",
    "birth_city_longitude": "135.7681489"
  },
  {
    "id": "806",
    "year": "2008",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "807",
    "year": "2008",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "808",
    "year": "2008",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "809",
    "year": "2008",
    "birth_city": "Nice",
    "birth_country": "France",
    "birth_city_latitude": "43.7101728",
    "birth_city_longitude": "7.2619532"
  },
  {
    "id": "810",
    "year": "2008",
    "birth_city": "Gelsenkirchen",
    "birth_country": "Germany",
    "birth_city_latitude": "51.5187651",
    "birth_city_longitude": "7.0838411"
  },
  {
    "id": "811",
    "year": "2008",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "812",
    "year": "2008",
    "birth_city": "Chabris",
    "birth_country": "France",
    "birth_city_latitude": "47.25447",
    "birth_city_longitude": "1.654295"
  },
  {
    "id": "813",
    "year": "2008",
    "birth_city": "Viipuri (Vyborg)",
    "birth_country": "Finland",
    "birth_city_latitude": "60.7095622",
    "birth_city_longitude": "28.749044"
  },
  {
    "id": "814",
    "year": "2008",
    "birth_city": "Tokyo",
    "birth_country": "Japan",
    "birth_city_latitude": "35.6761919",
    "birth_city_longitude": "139.6503106"
  },
  {
    "id": "815",
    "year": "2008",
    "birth_city": "Nagoya",
    "birth_country": "Japan",
    "birth_city_latitude": "35.1814506",
    "birth_city_longitude": "136.9065571"
  },
  {
    "id": "816",
    "year": "2008",
    "birth_city": "Nagoya",
    "birth_country": "Japan",
    "birth_city_latitude": "35.1814506",
    "birth_city_longitude": "136.9065571"
  },
  {
    "id": "817",
    "year": "2009",
    "birth_city": "\"Chidambaram",
    "birth_country": " Tamil Nadu\"",
    "birth_city_latitude": "India",
    "birth_city_longitude": "11.4070449"
  },
  {
    "id": "818",
    "year": "2009",
    "birth_city": "\"Milwaukee",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0389025"
  },
  {
    "id": "819",
    "year": "2009",
    "birth_city": "Jerusalem",
    "birth_country": "British Mandate of Palestine (Israel)",
    "birth_city_latitude": "31.768319",
    "birth_city_longitude": "35.21371"
  },
  {
    "id": "820",
    "year": "2009",
    "birth_city": "\"Los Angeles",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.0522342"
  },
  {
    "id": "821",
    "year": "2009",
    "birth_city": "\"Superior",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.7207737"
  },
  {
    "id": "822",
    "year": "2009",
    "birth_city": "\"Nitzkydorf",
    "birth_country": " Banat\"",
    "birth_city_latitude": "Romania",
    "birth_city_longitude": "45.578502"
  },
  {
    "id": "823",
    "year": "2009",
    "birth_city": "\"Hobart",
    "birth_country": " Tasmania\"",
    "birth_city_latitude": "Australia",
    "birth_city_longitude": "-42.8826055"
  },
  {
    "id": "824",
    "year": "2009",
    "birth_city": "\"San Diego",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "32.715738"
  },
  {
    "id": "825",
    "year": "2009",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "826",
    "year": "2009",
    "birth_city": "\"Honolulu",
    "birth_country": " HI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "21.3098845"
  },
  {
    "id": "827",
    "year": "2009",
    "birth_city": "Shanghai",
    "birth_country": "China",
    "birth_city_latitude": "31.230416",
    "birth_city_longitude": "121.473701"
  },
  {
    "id": "828",
    "year": "2009",
    "birth_city": "\"Amherst",
    "birth_country": " NS\"",
    "birth_city_latitude": "Canada",
    "birth_city_longitude": "45.8344395"
  },
  {
    "id": "829",
    "year": "2009",
    "birth_city": "\"White Plains",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.0339862"
  },
  {
    "id": "830",
    "year": "2010",
    "birth_city": "\"Springfield",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.1014831"
  },
  {
    "id": "831",
    "year": "2010",
    "birth_city": "Changchun",
    "birth_country": "China",
    "birth_city_latitude": "43.8160199",
    "birth_city_longitude": "125.32357"
  },
  {
    "id": "832",
    "year": "2010",
    "birth_city": "Mukawa",
    "birth_country": "Japan",
    "birth_city_latitude": "42.5747255",
    "birth_city_longitude": "141.9266921"
  },
  {
    "id": "833",
    "year": "2010",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "834",
    "year": "2010",
    "birth_city": "\"Enterprise",
    "birth_country": " OR\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "45.4262617"
  },
  {
    "id": "835",
    "year": "2010",
    "birth_city": "Nicosia",
    "birth_country": "Cyprus",
    "birth_city_latitude": "35.1855659",
    "birth_city_longitude": "33.3822764"
  },
  {
    "id": "836",
    "year": "2010",
    "birth_city": "Arequipa",
    "birth_country": "Peru",
    "birth_city_latitude": "-16.4090474",
    "birth_city_longitude": "-71.537451"
  },
  {
    "id": "837",
    "year": "2010",
    "birth_city": "Batley",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "53.717028",
    "birth_city_longitude": "-1.635083"
  },
  {
    "id": "838",
    "year": "2010",
    "birth_city": "",
    "birth_country": "China",
    "birth_city_latitude": "51.4323465",
    "birth_city_longitude": "6.7708159"
  },
  {
    "id": "839",
    "year": "2010",
    "birth_city": "Sochi",
    "birth_country": "Russia",
    "birth_city_latitude": "43.6028079",
    "birth_city_longitude": "39.7341543"
  },
  {
    "id": "840",
    "year": "2010",
    "birth_city": "Nizhny Tagil",
    "birth_country": "Russia",
    "birth_city_latitude": "57.9214912",
    "birth_city_longitude": "59.9816186"
  },
  {
    "id": "841",
    "year": "2011",
    "birth_city": "Tel Aviv",
    "birth_country": "British Mandate of Palestine (Israel)",
    "birth_city_latitude": "32.0852999",
    "birth_city_longitude": "34.7817676"
  },
  {
    "id": "842",
    "year": "2011",
    "birth_city": "\"Pasadena",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "34.1477849"
  },
  {
    "id": "843",
    "year": "2011",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "844",
    "year": "2011",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "845",
    "year": "2011",
    "birth_city": "\"Chicago",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "41.8781136"
  },
  {
    "id": "846",
    "year": "2011",
    "birth_city": "Echternach",
    "birth_country": "Luxembourg",
    "birth_city_latitude": "49.811342",
    "birth_city_longitude": "6.4175245"
  },
  {
    "id": "847",
    "year": "2011",
    "birth_city": "Montreal",
    "birth_country": "Canada",
    "birth_city_latitude": "45.5018869",
    "birth_city_longitude": "-73.5673919"
  },
  {
    "id": "848",
    "year": "2011",
    "birth_city": "Monrovia",
    "birth_country": "Liberia",
    "birth_city_latitude": "6.3156068",
    "birth_city_longitude": "-10.8073698"
  },
  {
    "id": "849",
    "year": "2011",
    "birth_city": "Monrovia",
    "birth_country": "Liberia",
    "birth_city_latitude": "6.3156068",
    "birth_city_longitude": "-10.8073698"
  },
  {
    "id": "850",
    "year": "2011",
    "birth_city": "Ta'izz",
    "birth_country": "Yemen",
    "birth_city_latitude": "13.5775886",
    "birth_city_longitude": "44.0177989"
  },
  {
    "id": "851",
    "year": "2011",
    "birth_city": "\"Champaign-Urbana",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.1105875"
  },
  {
    "id": "852",
    "year": "2011",
    "birth_city": "\"Missoula",
    "birth_country": " MT\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.8721284"
  },
  {
    "id": "853",
    "year": "2011",
    "birth_city": "\"Washington",
    "birth_country": " DC\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "38.9071923"
  },
  {
    "id": "854",
    "year": "2012",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "855",
    "year": "2012",
    "birth_city": "\"Little Falls",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "45.9805556"
  },
  {
    "id": "856",
    "year": "2012",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "857",
    "year": "2012",
    "birth_city": "\"Cambridge",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3736158"
  },
  {
    "id": "858",
    "year": "2012",
    "birth_city": "Gaomi",
    "birth_country": "China",
    "birth_city_latitude": "36.3825699",
    "birth_city_longitude": "119.75568"
  },
  {
    "id": "859",
    "year": "2012",
    "birth_city": "Dippenhall",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.2151659",
    "birth_city_longitude": "-0.8319759"
  },
  {
    "id": "860",
    "year": "2012",
    "birth_city": "Osaka",
    "birth_country": "Japan",
    "birth_city_latitude": "34.6937249",
    "birth_city_longitude": "135.5022535"
  },
  {
    "id": "861",
    "year": "2012",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "862",
    "year": "2012",
    "birth_city": "Casablanca",
    "birth_country": "Morocco",
    "birth_city_latitude": "33.5731104",
    "birth_city_longitude": "-7.5898434"
  },
  {
    "id": "863",
    "year": "2012",
    "birth_city": "\"Milwaukee",
    "birth_country": " WI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "43.0389025"
  },
  {
    "id": "864",
    "year": "2013",
    "birth_city": "Vienna",
    "birth_country": "Austria",
    "birth_city_latitude": "48.2081743",
    "birth_city_longitude": "16.3738189"
  },
  {
    "id": "865",
    "year": "2013",
    "birth_city": "Pretoria",
    "birth_country": "South Africa",
    "birth_city_latitude": "-25.7478676",
    "birth_city_longitude": "28.2292712"
  },
  {
    "id": "866",
    "year": "2013",
    "birth_city": "Kibbutz Sde-Nahum",
    "birth_country": "British Mandate of Palestine (Israel)",
    "birth_city_latitude": "32.525068",
    "birth_city_longitude": "35.480855"
  },
  {
    "id": "867",
    "year": "2013",
    "birth_city": "\"Boston",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.3600825"
  },
  {
    "id": "868",
    "year": "2013",
    "birth_city": "\"Urbana",
    "birth_country": " IL\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.1105875"
  },
  {
    "id": "869",
    "year": "2013",
    "birth_city": "\"Detroit",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.331427"
  },
  {
    "id": "870",
    "year": "2013",
    "birth_city": "Wingham",
    "birth_country": "Canada",
    "birth_city_latitude": "43.8879476",
    "birth_city_longitude": "-81.3116601"
  },
  {
    "id": "871",
    "year": "2013",
    "birth_city": "\"Haverhill",
    "birth_country": " MA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.7762015"
  },
  {
    "id": "872",
    "year": "2013",
    "birth_city": "\"St. Paul",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "44.9537029"
  },
  {
    "id": "873",
    "year": "2013",
    "birth_city": "G?ttingen",
    "birth_country": "Germany",
    "birth_city_latitude": "51.5412804",
    "birth_city_longitude": "9.9158035"
  },
  {
    "id": "874",
    "year": "2013",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "875",
    "year": "2013",
    "birth_city": "Etterbeek",
    "birth_country": "Belgium",
    "birth_city_latitude": "50.8305816",
    "birth_city_longitude": "4.3899848"
  },
  {
    "id": "876",
    "year": "2013",
    "birth_city": "Newcastle upon Tyne",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "54.978252",
    "birth_city_longitude": "-1.61778"
  },
  {
    "id": "877",
    "year": "2014",
    "birth_city": "\"Ann Arbor",
    "birth_country": " MI\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "42.2808256"
  },
  {
    "id": "878",
    "year": "2014",
    "birth_city": "Arad",
    "birth_country": "Romania",
    "birth_city_latitude": "46.1865606",
    "birth_city_longitude": "21.3122677"
  },
  {
    "id": "879",
    "year": "2014",
    "birth_city": "\"Pleasanton",
    "birth_country": " CA\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "37.6604484"
  },
  {
    "id": "880",
    "year": "2014",
    "birth_city": "Troyes",
    "birth_country": "France",
    "birth_city_latitude": "48.2973451",
    "birth_city_longitude": "4.0744009"
  },
  {
    "id": "881",
    "year": "2014",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "882",
    "year": "2014",
    "birth_city": "\"New York",
    "birth_country": " NY\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "40.7127753"
  },
  {
    "id": "883",
    "year": "2014",
    "birth_city": "Fosnav?g",
    "birth_country": "Norway",
    "birth_city_latitude": "62.3413767",
    "birth_city_longitude": "5.631069"
  },
  {
    "id": "884",
    "year": "2014",
    "birth_city": "?lesund",
    "birth_country": "Norway",
    "birth_city_latitude": "62.4722284",
    "birth_city_longitude": "6.149482"
  },
  {
    "id": "885",
    "year": "2014",
    "birth_city": "Vidisha",
    "birth_country": "India",
    "birth_city_latitude": "23.5235719",
    "birth_city_longitude": "77.8139718"
  },
  {
    "id": "886",
    "year": "2014",
    "birth_city": "Mingora",
    "birth_country": "Pakistan",
    "birth_city_latitude": "34.7717466",
    "birth_city_longitude": "72.3601512"
  },
  {
    "id": "887",
    "year": "2014",
    "birth_city": "Chiran",
    "birth_country": "Japan",
    "birth_city_latitude": "31.387231",
    "birth_city_longitude": "130.4770912"
  },
  {
    "id": "888",
    "year": "2014",
    "birth_city": "Hamamatsu",
    "birth_country": "Japan",
    "birth_city_latitude": "34.7102752",
    "birth_city_longitude": "137.7274159"
  },
  {
    "id": "889",
    "year": "2014",
    "birth_city": "Ikata",
    "birth_country": "Japan",
    "birth_city_latitude": "33.4886038",
    "birth_city_longitude": "132.3542025"
  },
  {
    "id": "890",
    "year": "2015",
    "birth_city": "Stockholm",
    "birth_country": "Sweden",
    "birth_city_latitude": "59.3293235",
    "birth_city_longitude": "18.0685808"
  },
  {
    "id": "891",
    "year": "2015",
    "birth_city": "\"Raton",
    "birth_country": " NM\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "36.9033581"
  },
  {
    "id": "892",
    "year": "2015",
    "birth_city": "Savur",
    "birth_country": "Turkey",
    "birth_city_latitude": "37.5484936",
    "birth_city_longitude": "40.913211"
  },
  {
    "id": "893",
    "year": "2015",
    "birth_city": "Edinburgh",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "55.953252",
    "birth_city_longitude": "-3.188267"
  },
  {
    "id": "894",
    "year": "2015",
    "birth_city": "Ivano-Frankivsk",
    "birth_country": "Ukraine",
    "birth_city_latitude": "48.922633",
    "birth_city_longitude": "24.711117"
  },
  {
    "id": "895",
    "year": "2015",
    "birth_city": "Ramelton",
    "birth_country": "Ireland",
    "birth_city_latitude": "55.0359",
    "birth_city_longitude": "-7.64809"
  },
  {
    "id": "896",
    "year": "2015",
    "birth_city": "Yamanashi Prefecture",
    "birth_country": "Japan",
    "birth_city_latitude": "35.6635113",
    "birth_city_longitude": "138.6388879"
  },
  {
    "id": "897",
    "year": "2015",
    "birth_city": "Zhejiang Ningbo",
    "birth_country": "China",
    "birth_city_latitude": "29.868336",
    "birth_city_longitude": "121.54399"
  },
  {
    "id": "898",
    "year": "2015",
    "birth_city": "",
    "birth_country": "",
    "birth_city_latitude": "",
    "birth_city_longitude": ""
  },
  {
    "id": "899",
    "year": "2015",
    "birth_city": "Higashimatsuyama",
    "birth_country": "Japan",
    "birth_city_latitude": "36.0422084",
    "birth_city_longitude": "139.399972"
  },
  {
    "id": "900",
    "year": "2015",
    "birth_city": "Sydney",
    "birth_country": "Canada",
    "birth_city_latitude": "46.1367899",
    "birth_city_longitude": "-60.194224"
  },
  {
    "id": "901",
    "year": "2016",
    "birth_city": "Paris",
    "birth_country": "France",
    "birth_city_latitude": "48.856614",
    "birth_city_longitude": "2.3522219"
  },
  {
    "id": "902",
    "year": "2016",
    "birth_city": "Edinburgh",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "55.953252",
    "birth_city_longitude": "-3.188267"
  },
  {
    "id": "903",
    "year": "2016",
    "birth_city": "Barger-Compascuum",
    "birth_country": "Netherlands",
    "birth_city_latitude": "52.7548724",
    "birth_city_longitude": "7.0416603"
  },
  {
    "id": "904",
    "year": "2016",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "905",
    "year": "2016",
    "birth_city": "Helsinki",
    "birth_country": "Finland",
    "birth_city_latitude": "60.1698557",
    "birth_city_longitude": "24.938379"
  },
  {
    "id": "906",
    "year": "2016",
    "birth_city": "\"Duluth",
    "birth_country": " MN\"",
    "birth_city_latitude": "United States of America",
    "birth_city_longitude": "46.7866719"
  },
  {
    "id": "907",
    "year": "2016",
    "birth_city": "Fukuoka",
    "birth_country": "Japan",
    "birth_city_latitude": "33.5901838",
    "birth_city_longitude": "130.4016888"
  },
  {
    "id": "908",
    "year": "2016",
    "birth_city": "Bogot��",
    "birth_country": "Colombia",
    "birth_city_latitude": "4.7109886",
    "birth_city_longitude": "-74.072092"
  },
  {
    "id": "909",
    "year": "2016",
    "birth_city": "Bearsden",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "55.92169",
    "birth_city_longitude": "-4.335525"
  },
  {
    "id": "910",
    "year": "2016",
    "birth_city": "London",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "51.5072178",
    "birth_city_longitude": "-0.1275862"
  },
  {
    "id": "911",
    "year": "2016",
    "birth_city": "Aberdeen",
    "birth_country": "United Kingdom",
    "birth_city_latitude": "57.1498891",
    "birth_city_longitude": "-2.0937528"
  }
];

// 创建 GeoJSON 对象
var geojson = {
  "type": "FeatureCollection",
  "features": []
};

// 遍历 JSON 数据，转换为 GeoJSON 特征对象
jsonData.forEach(function (item) {
  var feature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [item.birth_city_longitude, item.birth_city_longitude]
    },
    "properties": {
      "id": item.id,
      "location": item.birth_city,
      "country": item.birth_country,
      "date": item.year
    }
  };
  geojson.features.push(feature);
});

// 将 GeoJSON 对象转换为字符串
var geojsonString = JSON.stringify(geojson);

print(geojsonString);