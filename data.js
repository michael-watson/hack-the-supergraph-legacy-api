const locations = [
  {
    id: "efa21b82-bbb8-4ec6-8f98-6dd15f3f6153",
    name: "San Diego",
  },
  {
    id: "c3af1ee5-e72b-474f-91df-00cb87fa077c",
    name: "Titan",
  },
  {
    id: "ea8f7105-9f49-41d0-8e32-29d1c63bdc43",
    name: "Europa",
  },
];

const celestialBodyInfo = [
  {
    id: "02718341-4f9e-4065-b7ab-d3bd0a17f4c1",
    celestialBody: {
      galaxy: "Sun",
      latitude: 16,
      longitude: 286.13,
    },
  },
  {
    id: "a0a54334-2d96-44db-842c-934c6e3b2578",
    celestialBody: {
      galaxy: "Mercury",
      latitude: 3.38,
      longitude: 48.331,
    },
  },
  {
    id: "fda04f84-d1ec-483f-acff-00f9578ea72c",
    celestialBody: {
      galaxy: "Venus",
      latitude: 3.86,
      longitude: 76.68,
    },
  },
  {
    id: "09c37d13-7644-4ea1-a8b4-94427c79fa41",
    celestialBody: {
      galaxy: "Earth",
      latitude: 7.155,
      longitude: -11.26064,
    },
  },
  {
    id: "1e99a514-55f0-458e-af79-07f092f61b1d",
    celestialBody: {
      galaxy: "Mars",
      latitude: 5.65,
      longitude: 49.57854,
    },
  },
  {
    id: "7926c3ba-6754-4e36-9aa6-6d43b069f788",
    celestialBody: {
      galaxy: "Ceres",
      latitude: 10.6,
      longitude: 80.3,
    },
  },
  {
    id: "e072bb27-456f-4a1a-9ebb-954bec0d486f",
    celestialBody: {
      galaxy: "Pallas",
      latitude: 34.93,
      longitude: 172.9,
    },
  },
  {
    id: "98e3498a-e190-40dd-b1e4-1993f24dfca4",
    celestialBody: {
      galaxy: "Vesta",
      latitude: 7.14043,
      longitude: 103.85136,
    },
  },
  {
    id: "58d4a446-24f0-43dc-9da2-99f2e1925f7f",
    celestialBody: {
      galaxy: "Jupiter",
      latitude: 6.09,
      longitude: 100.464,
    },
  },
  {
    id: "ad111b8d-1813-4743-a04b-389d4130a991",
    celestialBody: {
      galaxy: "Saturn",
      latitude: 5.51,
      longitude: 113.665,
    },
  },
  {
    id: "6e3e31ab-db1a-48ab-8915-16b8669580ee",
    celestialBody: {
      galaxy: "Uranus",
      latitude: 6.48,
      longitude: 74.006,
    },
  },
  {
    id: "29c8772d-91f6-44e1-9da3-b50835005f4b",
    celestialBody: {
      galaxy: "Neptune",
      latitude: 6.43,
      longitude: 131.783,
    },
  },
  {
    id: "d4ea49e1-6dd2-4bc9-9eab-ce02efe59af6",
    celestialBody: {
      galaxy: "Pluto",
      latitude: 11.88,
      longitude: 110.299,
    },
  },
  {
    id: "50bfd688-31d8-4eac-83d9-5732d71b6fd3",
    celestialBody: {
      galaxy: "Haumea",
      latitude: 28.2137,
      longitude: 122.167,
    },
  },
  {
    id: "e86c2a88-1720-4db9-acf5-bd5466e8b900",
    celestialBody: {
      galaxy: "Makemake",
      latitude: 28.9835,
      longitude: 79.62,
    },
  },
  {
    id: "46525df0-6d26-4eaa-ae13-a15f3eb41d0c",
    celestialBody: {
      galaxy: "50000 Quaoar",
      latitude: 7.9895,
      longitude: 188.927,
    },
  },
  {
    id: "17e64b5d-b8a5-4f4f-9cc4-65030d94db50",
    celestialBody: {
      galaxy: "Eris",
      latitude: 44.04,
      longitude: 35.951,
    },
  },
];

const beaches = [
  {
    name: "Pacific Beach",
    activities: [
      { id: "dd458e1e-947e-4f96-a955-6235e883ebc5", place: "Crystal Pier" },
      { id: "426309ff-09e6-41ef-b5e6-758177f03c8e", place: "Crystal Pier" },
    ],
    location: "efa21b82-bbb8-4ec6-8f98-6dd15f3f6153",
  },
  {
    name: "Coronado Beach",
    activities: [
      {
        id: "dd288966-32e3-4197-a6da-14bf021d8c92",
        place: "Hotel Del Coronado",
      },
      {
        id: "ca507e82-fda4-4ccd-a051-5518a0122004",
        place: "Ferry Terminal",
      },
      {
        id: "426309ff-09e6-41ef-b5e6-758177f03c8e",
        place: "Coronado Island Bike Rentals",
      },
    ],
    location: "efa21b82-bbb8-4ec6-8f98-6dd15f3f6153",
  },
  {
    name: "Flat Rock Beach",
    activities: [
      { id: "c2da717d-9931-444c-80a8-05381ab14b54", place: "Beach Trail" },
      {
        id: "da35796a-bee9-487c-a5eb-7db791c80901",
        place: "Broken Hill Trail",
      },
    ],
    location: "efa21b82-bbb8-4ec6-8f98-6dd15f3f6153",
  },
  {
    name: "Liquid Lake",
    activities: [
      { id: "5c4f5039-659f-4b4b-bdce-6e9b6ea4d1f1", place: "Heel Rock" },
      { id: "d4416327-e7ac-4216-af30-d2196dcd56b3", place: "Toes" },
    ],
    location: "c3af1ee5-e72b-474f-91df-00cb87fa077c",
  },
  {
    name: "Hidden Ocean",
    activities: [
      { id: "5c4f5039-659f-4b4b-bdce-6e9b6ea4d1f1", place: "unknown" },
      { id: "d4416327-e7ac-4216-af30-d2196dcd56b3", place: "Europa Plains " },
    ],
    location: "ea8f7105-9f49-41d0-8e32-29d1c63bdc43",
  },
];

const beachActivities = [
  {
    id: "dd288966-32e3-4197-a6da-14bf021d8c92",
    name: "Explore",
    description: "Explore the ",
    riskLevel: "MEDIUM",
  },
  {
    id: "ca507e82-fda4-4ccd-a051-5518a0122004",
    name: "Transport - Ferry",
    description: "Taking a ferry to travel to/from the beach",
    riskLevel: "LOW",
  },
  {
    id: "dd458e1e-947e-4f96-a955-6235e883ebc5",
    name: "Fishing",
    description: "Trying to catch local fish in the ocean",
    riskLevel: "LOW",
  },
  {
    id: "426309ff-09e6-41ef-b5e6-758177f03c8e",
    name: "Bike Ride",
    description: "Riding a traditional bicycle with two wheels",
    riskLevel: "MEDIUM",
  },
  {
    id: "d4416327-e7ac-4216-af30-d2196dcd56b3",
    name: "Jet Motorcycle",
    description: "Riding a rocket bicycle in space",
    riskLevel: "HIGH",
  },
  {
    id: "5c4f5039-659f-4b4b-bdce-6e9b6ea4d1f1",
    name: "Acid Lake Diving",
    description:
      "Jumping from any height into an acid lake. Remember to wear your suit!",
    riskLevel: "HIGH",
  },
  {
    id: "c2da717d-9931-444c-80a8-05381ab14b54",
    name: "Hiking",
    description: "A simple hike with elevation climb of less than 5% incline",
    riskLevel: "Low",
  },
  {
    id: "da35796a-bee9-487c-a5eb-7db791c80901",
    name: "Hiking",
    description: "A day hike with elevation climb of less than 20% incline",
    riskLevel: "MEDIUM",
  },
  {
    id: "d72a041f-8399-4166-8837-723e79ca5b50",
    name: "Hiking",
    description:
      "A multi-day hike with elevation climb of more than 20% incline",
    riskLevel: "High",
  },
];

//https://onlinenumbertools.com/generate-random-vector
const cavernMaps = [
  {
    id: "f21e5399-b1fd-4063-848d-926dc14011f6",
    lat: 16,
    long: 286.13,
    vector: [
      51.16009, 33.67867, 91.10319, 87.14336, 9.17289, 99.26521, 96.66473,
      23.39508, 21.55758, 36.78317, 39.5328, 57.45739, 3.93503, 76.74723,
      4.52432, 87.11667, 75.7243, 23.75726, 12.53574, 83.37341, 75.17665,
      84.6147, 32.3255, 9.06394, 68.21333, 44.35951, 67.27627, 15.46746,
      12.26917, 28.67725, 65.03646, 52.90066, 73.33988, 12.2654, 21.54963,
      1.30342, 74.97438, 84.41601, 53.10839, 64.68437, 84.04352, 27.8539,
      17.84026, 15.35247, 54.03325, 44.86497, 17.85992, 26.35783, 55.9209,
      61.60592, 53.29992, 36.15949, 91.00734, 47.16561, 82.74512, 52.27517,
      1.67137, 69.23731, 58.40601, 78.47877, 78.72625, 97.16569, 8.13215,
      70.28112, 95.0208, 16.01441, 52.12079, 85.29931, 51.48324, 47.1821,
      66.90484, 86.25862, 37.90508, 86.43611, 36.55361, 20.84233, 82.24135,
      8.45493, 81.95278, 84.01597, 93.13191, 15.65336, 94.619, 76.56252,
      11.34532, 38.29445, 58.82963, 73.02568, 78.90681, 1.55467, 16.27153,
      24.53372, 1.91935, 18.7946, 79.37604, 16.37583, 8.16271, 55.74924,
      29.83328, 50.70614,
    ],
  },
  {
    id: "5e2e6c41-a2e1-4bc6-8f62-bf400dd18560",
    lat: 3.38,
    long: 48.331,
    vector: [
      69.37213, 13.01384, 68.161, 85.21581, 90.73751, 83.70308, 64.66166,
      58.00866, 62.60114, 72.46906, 18.42397, 56.94022, 98.73937, 94.74487,
      64.92384, 17.13499, 60.0548, 94.9797, 57.76566, 42.95307, 6.83503,
      96.19031, 3.62171, 8.27541, 64.74936, 97.32362, 34.0463, 62.96791,
      13.59359, 77.5729, 52.50323, 97.33624, 58.4456, 45.53461, 34.53544,
      5.13504, 95.13144, 4.84499, 76.34191, 34.7463, 89.1294, 80.05731,
      33.24305, 69.08615, 84.46155, 75.43721, 12.99847, 47.13249, 91.64577,
      59.74933, 66.53729, 97.8371, 6.6884, 47.54645, 60.81658, 99.00322,
      30.06882, 14.1031, 39.15173, 48.96849, 4.8068, 13.8175, 20.64517,
      46.77186, 40.18233, 75.41359, 20.74806, 54.04671, 20.53429, 52.63909,
      60.17317, 33.53813, 23.65207, 85.12598, 25.55333, 11.12579, 82.24291,
      99.13075, 19.14429, 22.09115, 16.25515, 43.26585, 52.43478, 67.30582,
      83.10383, 34.27753, 45.22141, 69.51854, 0.69638, 98.83448, 92.72458,
      95.01865, 36.34032, 23.81018, 75.13795, 16.90835, 74.44463, 36.55476,
      81.72893, 78.35105,
    ],
  },
  {
    id: "78e78314-689f-4241-90b9-b9c4fb42977b",
    lat: 3.86,
    long: 76.68,
    vector: [
      7.08902, 69.37882, 57.14843, 38.04739, 89.7259, 23.84266, 44.34747,
      29.49088, 70.2994, 65.56888, 64.40953, 81.06151, 31.9983, 61.76367,
      70.49417, 53.42979, 33.89138, 25.01151, 4.51856, 50.44863, 72.53536,
      56.4955, 34.96143, 86.34396, 11.27985, 27.31359, 79.81467, 66.45604,
      32.2101, 80.10967, 40.68282, 29.40623, 17.219, 72.83183, 79.69368,
      81.61425, 6.60335, 81.93376, 82.59821, 0.44672, 52.78224, 15.36854,
      15.64282, 52.68518, 20.11223, 20.02596, 50.51093, 34.09176, 40.35395,
      21.52058, 29.14623, 98.2879, 44.50828, 16.62173, 10.7224, 4.65065,
      96.39652, 5.58583, 19.47554, 81.25272, 59.36654, 65.05657, 61.09545,
      62.14131, 29.43927, 54.39018, 28.51056, 98.88966, 13.70906, 41.91428,
      85.80704, 37.13308, 10.51391, 56.46285, 62.75186, 78.90523, 89.43962,
      83.11842, 78.14522, 66.87622, 6.8714, 99.07698, 76.53923, 8.47968,
      15.22313, 35.49618, 18.00301, 55.62658, 25.89125, 88.12104, 1.97868,
      22.51278, 94.94194, 43.40616, 35.29493, 55.62932, 65.76855, 23.81569,
      20.22753, 68.88548,
    ],
  },
  {
    id: "2cba1fa7-a26b-45cf-9cd8-420950d721c3",
    lat: 7.155,
    long: -11.26064,
    vector: [
      16.777, 5.54143, 28.31065, 68.69766, 89.38661, 3.35624, 51.5372, 34.54622,
      16.41215, 29.93684, 70.01883, 56.99529, 51.41902, 19.02416, 20.44757,
      78.02393, 10.89229, 66.69157, 50.27317, 81.22412, 46.50052, 81.28536,
      64.91176, 86.90132, 91.97903, 25.31364, 60.92213, 2.26465, 50.94087,
      23.8263, 82.36476, 71.37503, 84.67348, 6.34892, 81.1323, 30.64608,
      81.65257, 89.2626, 59.86255, 49.69803, 20.51864, 60.18653, 42.52982,
      39.33798, 95.57279, 52.80889, 14.65563, 66.27357, 22.33048, 13.92626,
      50.66686, 65.60225, 3.04041, 73.30412, 17.12789, 23.71255, 89.26188,
      88.2934, 0.3459, 53.29833, 49.1563, 7.24301, 90.93477, 50.05542, 53.28618,
      70.072, 55.25478, 51.14489, 1.19081, 85.43109, 4.29073, 42.79277, 2.31931,
      71.35708, 34.67815, 16.90054, 51.19396, 38.61297, 93.65185, 26.80745,
      91.24273, 81.29123, 70.74514, 11.67369, 71.87027, 25.9505, 91.89738,
      71.64949, 97.73947, 3.98998, 78.94735, 55.19387, 14.45157, 13.71826,
      52.92104, 94.34616, 54.10443, 53.32008, 32.15904, 74.03797,
    ],
  },
  {
    id: "edb7a894-7c1a-4856-a0e6-a1f1ff4ac543",
    lat: 5.65,
    long: 49.57854,
    vector: [
      86.61602, 91.73193, 30.41501, 7.14092, 74.52426, 10.8316, 55.86598,
      82.69149, 83.89289, 31.93956, 7.71361, 22.26084, 36.40688, 47.75901,
      8.93394, 6.34074, 41.87578, 55.73131, 96.4988, 62.37811, 31.79876,
      38.21482, 40.88021, 15.02276, 42.85181, 10.93108, 1.87189, 72.57547,
      26.11002, 47.23979, 35.38115, 97.62888, 75.11876, 26.15863, 76.51688,
      60.85099, 3.04489, 38.67831, 85.71531, 11.45393, 35.45195, 30.73113,
      74.45285, 15.38554, 15.041, 4.03396, 44.6547, 25.93255, 6.85795, 62.65672,
      98.44115, 91.83301, 59.44255, 41.31664, 50.06825, 4.45013, 28.45302,
      22.43619, 88.15651, 46.22168, 84.15549, 36.87057, 57.73928, 9.73125,
      80.48078, 20.25285, 82.53475, 14.24905, 68.47686, 78.20839, 81.68107,
      95.89601, 14.93747, 41.46221, 69.407, 29.96488, 24.10094, 32.25014,
      24.58784, 78.62349, 36.3468, 23.83343, 61.57674, 37.78717, 77.95934,
      15.87135, 52.34229, 31.88404, 42.96009, 42.6286, 17.97928, 74.2713,
      22.78471, 63.95529, 0.89155, 31.68767, 75.65046, 38.03743, 11.02019,
      15.71243,
    ],
  },
  {
    id: "732748ed-27d8-46b3-9adf-2f472bbe8823",
    lat: 10.6,
    long: 80.3,
    vector: [
      28.26541, 78.05349, 52.98282, 26.84867, 65.40758, 80.9877, 11.83731,
      1.42632, 48.8272, 38.18497, 20.92632, 41.20282, 42.73671, 28.11713,
      77.26471, 71.32659, 97.71799, 30.54532, 82.43824, 41.45729, 61.13788,
      39.08618, 24.39425, 63.80021, 55.67139, 54.0085, 75.83615, 32.51619,
      97.61447, 32.55512, 21.8942, 29.37134, 14.81111, 51.16498, 7.84826,
      31.70811, 1.33122, 44.00586, 28.37074, 86.5558, 80.94333, 62.03153,
      48.65545, 78.8331, 0.28771, 34.94824, 76.97519, 57.52594, 53.92919,
      28.68264, 55.48853, 46.61154, 74.01816, 54.25048, 34.26118, 61.49646,
      61.61931, 67.61424, 42.13577, 53.58457, 49.30379, 33.87832, 11.83479,
      43.22658, 20.58334, 58.00743, 54.93398, 71.6782, 51.79693, 43.85814,
      6.00073, 85.04918, 12.48358, 33.92324, 54.30614, 45.86822, 42.41092,
      61.27135, 77.16659, 44.25484, 81.84536, 51.33848, 38.18273, 64.28323,
      24.87463, 55.03277, 92.48418, 30.13852, 70.08184, 1.88766, 88.78256,
      21.48568, 17.51833, 86.11776, 94.09784, 25.59203, 67.26878, 17.4837,
      14.90471, 10.37168,
    ],
  },
  {
    id: "2b7c7db0-af62-4eac-9d8f-b9fb44f1aed7",
    lat: 34.93,
    long: 172.9,
    vector: [
      87.22572, 49.21956, 25.72752, 53.22757, 84.03718, 51.95211, 85.67206,
      46.67734, 16.24456, 1.17589, 41.25433, 18.26247, 23.66054, 57.64349,
      68.33964, 63.76447, 95.29382, 2.06201, 41.48543, 41.95134, 88.6231,
      12.10199, 74.5011, 50.58096, 0.29299, 9.47554, 19.19017, 56.43044,
      24.82894, 45.06195, 80.77088, 57.24802, 2.01949, 53.32169, 68.24423,
      40.51747, 11.83785, 93.92179, 81.24244, 1.81852, 36.97183, 5.05187,
      33.22969, 70.43101, 82.7873, 20.73158, 19.77883, 0.43122, 39.59902,
      12.70615, 75.76601, 9.78496, 0.69894, 98.11391, 67.27753, 5.87651,
      89.41128, 21.98716, 6.14897, 13.34692, 3.78125, 83.02212, 80.00712,
      49.3459, 60.43111, 10.06577, 40.77947, 83.62074, 3.21534, 60.69502,
      7.27565, 53.61753, 96.03984, 47.87318, 40.71576, 73.08757, 49.11189,
      80.34388, 23.19274, 33.097, 43.3738, 31.94865, 41.33851, 4.05538,
      77.07157, 88.64584, 24.00114, 40.79194, 85.90666, 83.22276, 64.25995,
      96.99792, 95.6303, 42.51983, 94.7291, 56.78641, 95.44175, 37.85981,
      43.93132, 34.67008,
    ],
  },
  {
    id: "b4fa0d9c-cd83-4d94-94f2-c84e67138bf0",
    lat: 7.14043,
    long: 103.85136,
    vector: [
      60.2197, 42.12026, 13.15218, 0.25031, 69.34752, 86.00438, 8.05643,
      25.81802, 97.77544, 80.24724, 24.86562, 9.11721, 0.97114, 96.5627,
      45.95351, 64.47044, 96.25791, 13.25397, 46.26468, 85.27959, 86.38755,
      83.73726, 14.80444, 83.06021, 41.93259, 13.06881, 26.6714, 76.63764,
      63.99689, 30.75842, 74.05163, 38.17819, 65.8266, 28.83328, 31.14463,
      89.10766, 32.56721, 61.69609, 72.20975, 86.30891, 23.65733, 21.18302,
      84.57011, 72.05569, 87.41721, 29.50544, 98.32629, 44.5066, 8.273,
      66.70896, 52.23493, 64.09506, 8.85566, 61.39138, 56.66233, 74.63478,
      50.07761, 95.9566, 76.83096, 22.46611, 76.47014, 48.18631, 12.20352,
      4.37957, 64.74071, 89.75954, 4.0816, 69.69723, 99.60549, 20.3277,
      33.74076, 96.5417, 14.00004, 46.2643, 54.57801, 18.78017, 19.2137,
      44.09578, 33.5548, 40.11363, 70.63998, 73.59055, 59.33874, 42.53413,
      38.68893, 38.99306, 71.32759, 36.77638, 95.15441, 30.05043, 98.74361,
      84.62907, 50.04334, 51.16332, 43.6942, 75.08383, 20.43888, 97.82273,
      22.53703, 10.32401,
    ],
  },
  {
    id: "a647920f-2fa0-4f67-a855-ac27d68a7308",
    lat: 6.09,
    long: 100.464,
    vector: [
      87.28357, 60.42199, 55.10022, 38.59177, 82.13294, 94.94953, 66.00381,
      75.93525, 23.03842, 84.08729, 66.16278, 11.318, 44.66686, 47.14775,
      89.70801, 82.69933, 71.42646, 80.21709, 93.63198, 62.94464, 13.70041,
      99.17038, 32.04523, 35.20456, 82.31875, 14.76222, 40.24978, 40.70307,
      76.27129, 50.59554, 28.31169, 91.86142, 74.10095, 85.51866, 6.40469,
      32.47876, 27.47675, 73.63295, 50.15866, 31.25894, 12.38046, 19.95574,
      72.26535, 32.82083, 44.3615, 51.88438, 84.58755, 51.67413, 35.18111,
      0.65565, 57.02981, 39.56723, 67.89716, 44.6151, 58.70482, 13.67408,
      23.76197, 64.62213, 96.03978, 88.44796, 76.90442, 40.53062, 2.2931,
      83.53836, 86.96844, 79.19483, 78.27511, 33.68587, 19.29136, 65.56125,
      5.61801, 63.88011, 65.27524, 45.07242, 19.88946, 38.77644, 6.78069,
      86.69426, 98.15037, 90.0729, 61.40224, 47.89794, 10.88982, 76.6181,
      92.99049, 54.95555, 41.01598, 64.65241, 14.30461, 32.37676, 65.4083,
      14.7969, 76.32097, 17.28905, 67.1759, 86.42725, 51.59371, 73.17238,
      69.88899, 43.67156,
    ],
  },
  {
    id: "88d4b93f-1363-4183-bdd2-0996e08cf256",
    lat: 5.51,
    long: 113.665,
    vector: [
      33.03802, 32.03712, 20.54259, 75.67507, 98.0816, 1.74566, 62.63016,
      17.88787, 75.63169, 71.88837, 43.66488, 94.33177, 98.81907, 11.62718,
      16.77613, 64.06791, 37.56362, 16.88596, 0.07385, 70.0617, 46.7715,
      92.30916, 70.47345, 20.85069, 35.24524, 2.99079, 15.25786, 80.96287,
      46.09077, 9.97376, 19.55749, 32.00418, 49.95875, 43.25568, 92.0506,
      98.49183, 14.32581, 31.54917, 5.26872, 25.69494, 31.40525, 1.27059,
      60.33499, 78.86606, 49.50314, 79.10969, 13.49604, 73.41113, 68.15042,
      23.33089, 41.47355, 50.5908, 27.66888, 2.87764, 77.81985, 90.76442,
      10.46606, 61.4454, 90.75067, 97.19199, 47.23512, 89.98224, 97.95707,
      82.8529, 98.74925, 95.62809, 77.50262, 78.50098, 32.01688, 85.50129,
      55.25816, 80.62084, 89.0377, 16.85781, 80.01778, 70.52814, 32.95162,
      60.17193, 21.62327, 21.99546, 38.27237, 86.31896, 45.67875, 67.36807,
      25.22964, 23.43827, 98.13958, 1.25325, 2.80977, 69.15396, 86.09212,
      9.33673, 81.78071, 71.14426, 47.93107, 61.79366, 24.79441, 61.27867,
      23.43681, 47.58665,
    ],
  },
  {
    id: "0ea56dfe-15f3-45e8-b818-307028cefb8c",
    lat: 11.88,
    long: 110.299,
    vector: [
      73.78961, 98.34593, 72.04917, 6.04507, 59.8978, 26.64171, 13.10991,
      60.69077, 1.45361, 60.7982, 22.27801, 63.40731, 80.84404, 6.8473, 3.79448,
      81.83638, 99.03446, 98.13917, 72.80471, 86.25433, 31.45753, 42.44178,
      70.60282, 8.14792, 37.65559, 55.46888, 50.63694, 10.44026, 3.67859,
      61.99939, 15.40406, 70.76463, 25.69159, 15.93874, 66.84068, 44.67836,
      64.66749, 95.00589, 98.02115, 35.0187, 73.76046, 62.36224, 17.12964,
      9.30372, 96.40215, 34.11705, 69.78466, 40.32424, 22.0839, 87.97796,
      8.84411, 40.94205, 68.62293, 36.91648, 7.88797, 82.36167, 56.69236,
      13.67376, 66.14758, 68.4096, 52.83323, 33.39434, 65.31731, 43.9846,
      49.32673, 62.6137, 60.01665, 75.35144, 2.70564, 71.38244, 94.33873,
      32.81943, 82.50918, 23.96638, 71.75827, 92.3561, 69.44928, 61.53603,
      43.77608, 71.58361, 4.94201, 35.07951, 88.96258, 7.84558, 93.22395,
      78.75387, 31.59098, 13.47304, 88.36094, 57.26422, 24.52639, 65.23867,
      55.87671, 12.7427, 31.97074, 7.55971, 93.57243, 16.73579, 71.76325,
      4.7705,
    ],
  },
  {
    id: "51a8d4f5-cd4f-4298-aa12-e492d84eaccc",
    lat: 28.2137,
    long: 122.167,
    vector: [
      26.95364, 68.73392, 32.35282, 32.61412, 21.69663, 46.79943, 12.83197,
      8.24407, 21.34353, 85.7104, 81.15113, 52.99212, 81.31673, 12.15233,
      94.26595, 1.75723, 97.96758, 99.02627, 26.50496, 9.1594, 54.17525,
      23.6685, 37.79596, 15.86397, 19.07391, 84.68154, 33.957, 57.98255,
      27.37948, 67.79302, 29.72075, 43.61217, 41.82665, 33.38813, 7.58976,
      3.61809, 34.29012, 71.36929, 34.46958, 17.40315, 35.54781, 25.03794,
      48.03443, 33.4048, 50.78485, 38.95692, 65.08481, 71.60856, 64.33035,
      62.94345, 73.28966, 76.77195, 17.11121, 76.07101, 96.8085, 27.9478,
      20.36686, 27.31054, 20.7136, 5.55592, 90.04212, 41.7334, 68.15714, 7.1549,
      80.72863, 90.32646, 82.00993, 91.43303, 64.35167, 62.74683, 99.0215,
      4.08914, 38.52899, 5.72997, 74.43854, 9.75561, 91.22433, 63.8963,
      93.01731, 63.73528, 43.28268, 82.76503, 10.33873, 42.46872, 67.55785,
      18.44101, 68.10657, 15.10314, 24.12961, 78.06906, 60.90288, 71.28507,
      61.99367, 7.07583, 89.80644, 54.56911, 87.91316, 91.84487, 83.70333,
      44.67876,
    ],
  },
  {
    id: "7a69e7d4-fb20-44b7-9f7c-6306d63668d0",
    lat: 28.9835,
    long: 79.62,
    vector: [
      15.37447, 42.03142, 90.33943, 35.40282, 95.98949, 18.33937, 22.75624,
      73.90003, 28.56768, 44.60749, 23.00524, 64.72168, 61.91034, 58.26281,
      24.05116, 41.29136, 92.91674, 20.30644, 56.43389, 58.00813, 74.75689,
      7.13395, 34.96353, 37.67219, 82.41533, 38.46693, 31.86797, 97.27464,
      40.89736, 62.93052, 25.89777, 33.44371, 83.35029, 84.78737, 22.02521,
      43.0322, 2.11682, 80.62975, 77.6917, 44.86485, 20.63517, 60.91759,
      56.03742, 88.94706, 14.26134, 21.3498, 96.02, 1.73872, 64.20332, 59.13597,
      58.80404, 32.53733, 39.6327, 32.66012, 73.76179, 88.97479, 61.41174,
      85.56484, 92.14097, 28.03449, 63.58795, 66.44313, 91.47098, 16.81235,
      59.70309, 80.11355, 22.72362, 20.53463, 6.97418, 32.98801, 80.85066,
      98.08758, 80.22095, 43.13902, 29.32992, 45.58012, 85.30794, 8.84644,
      76.99165, 56.45189, 57.73807, 87.98985, 19.69563, 17.55058, 63.76837,
      15.97649, 25.80868, 20.375, 62.71835, 9.08186, 64.79308, 45.94129,
      56.8234, 22.87103, 23.4346, 55.6904, 75.04004, 98.98281, 52.02238,
      0.08985,
    ],
  },
  {
    id: "264477ea-3d9d-4ab3-ac87-e42eb17816f8",
    lat: 7.9895,
    long: 188.927,
    vector: [
      10.68652, 31.85106, 64.07392, 49.05654, 84.7119, 40.67838, 10.23771,
      1.25259, 29.72326, 69.43649, 64.43922, 65.63644, 7.82829, 8.22181,
      45.60556, 21.96779, 76.55781, 53.06824, 92.76761, 2.90581, 61.3273,
      31.11233, 59.12313, 61.29901, 25.31399, 77.87892, 80.74763, 7.91987,
      81.11685, 2.83933, 80.35307, 67.94269, 67.51595, 82.32582, 14.2002,
      35.65138, 85.85736, 55.63989, 79.4622, 18.568, 99.78388, 63.61984,
      86.11142, 42.8184, 92.04898, 86.51337, 44.22502, 99.80599, 40.40302,
      32.4322, 32.34509, 33.61447, 95.23155, 73.74371, 94.70924, 25.08763,
      69.67436, 91.05778, 92.98401, 90.91061, 83.56643, 10.1487, 89.41712,
      45.52849, 31.13475, 8.48677, 41.36891, 25.15376, 15.39298, 78.12252,
      5.23433, 78.71219, 24.64465, 78.66401, 13.80502, 25.99688, 83.07838,
      28.04423, 68.75771, 93.51701, 84.24334, 75.73238, 62.59357, 41.91492,
      42.32691, 96.56103, 34.10181, 24.71613, 3.39913, 88.68167, 78.49657,
      57.04816, 53.59385, 91.03943, 11.41569, 75.31499, 20.5089, 54.48445,
      6.59541, 71.02344,
    ],
  },
  {
    id: "afe7a12f-522c-4c78-b34a-3a828e8f8834",
    lat: 44.04,
    long: 35.951,
    vector: [
      63.60325, 82.16643, 4.59668, 74.95749, 78.581, 68.35455, 64.63611,
      14.34064, 45.17366, 44.60256, 84.65942, 92.70592, 44.16716, 5.1258,
      0.76785, 53.75342, 77.6461, 93.89853, 96.35935, 88.44399, 21.11772,
      98.79402, 80.18683, 55.97935, 87.12662, 0.35895, 52.78373, 80.43081,
      39.43395, 21.21702, 70.49115, 4.03991, 71.52395, 29.50344, 39.2707,
      43.71387, 44.46349, 85.78926, 87.59863, 57.72281, 86.69863, 74.07138,
      92.20639, 62.35638, 56.52781, 95.77204, 64.26745, 92.48321, 54.22362,
      22.02962, 39.13878, 0.43942, 7.02627, 84.70926, 85.40575, 52.85733,
      85.049, 85.16037, 92.6545, 97.66518, 40.55674, 74.32446, 24.68468,
      4.46659, 69.15008, 82.13444, 88.33048, 7.23787, 30.86551, 23.88374,
      16.8101, 30.43253, 40.99181, 47.01929, 59.90882, 33.48172, 45.4862,
      89.15286, 14.45293, 21.95729, 4.15235, 44.13125, 55.47469, 90.00099,
      26.64284, 18.07769, 37.68539, 85.07674, 80.47765, 90.19194, 67.38809,
      52.72948, 63.33697, 65.41181, 2.7264, 49.14465, 28.87202, 9.9478,
      90.50364, 18.50016,
    ],
  },
];

const coves = [
  {
    id: "0e27dfeb-7dfb-4b14-965f-50c0d70f95be",
    location: { id: "efa21b82-bbb8-4ec6-8f98-6dd15f3f6153" },
  },
  {
    id: "6a69cf0d-13d1-4527-acff-a4ab61bd22cf",
    location: { id: "c3af1ee5-e72b-474f-91df-00cb87fa077c" },
  },
  {
    id: "f4e57b90-8569-4d18-8f83-fc00d65bd8be",
    location: { id: "ea8f7105-9f49-41d0-8e32-29d1c63bdc43" },
  },
];

module.exports = {
  cavernMaps,
  coves,
  locations,
  celestialBodyInfo,
  beaches,
  beachActivities,
};
