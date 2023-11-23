interface Dataset {
    features: School[];
}

interface School {
  properties: {
    nazev_obce: string;
    nazev: string;
    www: string;
    zarizeni_druh: string;
  };
}

const DATASET_URL = 'https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Seznam_škol_a_školských_zařízení/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'; // API URL získaná z informací o datasetu

export const getSchools = async () => {
  const response = await fetch(DATASET_URL);
  const data: Dataset = await response.json();
  return data.features;
};

export const getSchoolsByDistrict = async (district: string) => {
  const schools = await getSchools();
  return schools.filter((school: School) => school.properties.nazev_obce === district);
};