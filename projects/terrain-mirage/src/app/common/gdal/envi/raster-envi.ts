import * as JSZip from 'jszip';
import { Hdr } from './hdr';
import { Observable, from } from 'rxjs';
import { HdrEncoder } from './hdr-encoder';

export class RasterEnvi {
    header: Hdr;
    pixel: ArrayBuffer;

    constructor() {
        this.header = {} as Hdr;
        // this.pixel;
    }

    zip(name): Observable<Blob> {
        // console.log(event);
        const zip = new JSZip();

        // image header
        zip.file(`${name}.hdr`, HdrEncoder.encode(this.header));

        // image body
        const length = 3243 * 3953;
        const array = new Float32Array(length);
        const blob = new Blob([array], { type: 'application/octet-binary' });
        zip.file(name, blob);

        // ZIPファイルのblobデータ生成
        return from(zip.generateAsync<'blob'>({
            type: 'blob',
            platform: 'UNIX',
            compression: 'DEFLATE',
            compressionOptions: { level: 9 },
        }));
    }
}
