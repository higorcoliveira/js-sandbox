import { User } from "./model/User";
import { Company } from "./model/Company";
import { CustomMap } from "./model/CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);
