// https://opticks.org/docs/help/4.3.1/Help/Opticks/Content/Importers_Exporters/ENVI_Header_Format.htm
// https://www.harrisgeospatial.com/docs/ENVIHeaderFiles.html
// http://pen.envr.tsukuba.ac.jp/~torarimon/?ENVI+format
export interface Hdr {
    description: string;
    samples: number;
    lines: number;
    bands: number;
    headerOffset: number;
    fileType: string;
    dataType: number;
    interleave: string;
    byteOrder: number;
    mapInfo: string;
    projectionInfo: string;
    coordinateSystemString: string;
    bandNames: string[];
}
