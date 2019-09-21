import { Hdr } from './hdr';

export class HdrEncoder {

    private constructor() { }

    public static encode(hdr: Hdr): string {
        let encoded = '';
        encoded = `ENVI
description = {
N035E139_AVE_DSM_EPSG6677}
samples = 3243
lines   = 3953
bands   = 1
header offset = 0
file type = ENVI Standard
data type = 4
interleave = bsq
byte order = 0
map info = {Transverse Mercator, 1, 1, -76066.79268841, 321.154793627915, 28.1487486044045, 28.1487486044045}
projection info = {3, 6378137, 6356752.314140356, 36, 139.8333333333333, 0, 0, 0.9999, Transverse Mercator}
coordinate system string = {PROJCS["JGD2011_Japan_Plane_Rectangular_CS_IX",GEOGCS["GCS_JGD2011",DATUM["D_Japanese_Geodetic_Datum_2011",SPHEROID["GRS_1980",6378137,298.257222101]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",36],PARAMETER["central_meridian",139.8333333333333],PARAMETER["scale_factor",0.9999],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["Meter",1]]}
band names = {
Band 1}
`;
        return encoded;
    }
}
