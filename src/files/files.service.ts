import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            const fileName: string = uuid.v4() + '.jpg';
            const filePath: string = path.resolve(__dirname, '..', 'static');
            await fs.access(filePath, async () => {
                await fs.mkdir(filePath, { recursive: true }, (err) => {
                    if (err) {
                        console.log(err);
                        throw new HttpException('Cannot create \'static\' directory', HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                });
            });
            await fs.writeFile(path.join(filePath, fileName), file.buffer, (err) => {
                if (err) {
                    throw new HttpException('File write error has occurred', HttpStatus.INTERNAL_SERVER_ERROR);
                }
            });
            return fileName;
        } catch (err) {
            throw new HttpException('File write error has occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

