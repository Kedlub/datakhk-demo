import type {PageServerLoad} from './$types';
import { getSchoolsByDistrict } from "$lib/data";

export const load = (async () => {
    const schools = await getSchoolsByDistrict("Hradec Králové");
    return {
        body: {
            schools
        }
    };
}) satisfies PageServerLoad;